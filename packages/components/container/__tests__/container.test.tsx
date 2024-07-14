import { describe, test,expect } from "vitest"
import { mount } from '@vue/test-utils'
import Container from "../src/container.vue"
import Header from "../src/header.vue"
import Main from "../src/main.vue"
import { getCssVariable } from "@my-element-plus/test-utils"
import Aside from "../src/aside.vue"
import Footer from "../src/footer.vue"
const AXIOM = 'Rem is the  best girl'

describe('Container', () => {
    test('container render test', () => {
        const wrapper = mount(() => <Container>{AXIOM}</Container>)
        expect(wrapper.text()).toEqual(AXIOM)
    })

    test('vertical', () => {
        const wrapper = mount(() => 
        <Container>
            <Header></Header>
            <Main></Main>
        </Container>)
        expect(wrapper.classes('is-vertical')).toBe(true)
    })

    test('direction', () => {
        const wrapper = mount({
            data: () => ({direction: 'horizontal'}),
            render() {
                return (
                    <Container direction={this.direction}>
                        <Header></Header>
                        <Main></Main>
                    </Container>
                )
            }
        })
        expect(wrapper.vm.$el.classList.contains('is-vertical')).toBe(false)
        wrapper.vm.direction = 'vertical'
        wrapper.vm.$nextTick(() => {
            expect(wrapper.vm.$el.classList.contains('is-vertical')).toBe(true)
        })
    })
})

describe('Header', () => {
    test('create header', () => {
        const wrapper = mount(() => <Header></Header>)
        expect(wrapper.classes()).toContain('ell-header')
    })

    test('header height', () => {
        const wrapper = mount(() => <Header height="100px"></Header>)
        const vm = wrapper.vm
        expect(getCssVariable(vm.$el, '--ell-header-height')).toEqual('100px')

    })
})

describe('Aside', () => {
    test('create aside', () => {
        const wrapper = mount(() => <Aside></Aside>)
        expect(wrapper.classes()).toContain('ell-aside')
    })

    test('aside width', () => {
        const wrapper = mount(() => <Aside width="200px"></Aside>)
        const vm = wrapper.vm
        expect(getCssVariable(vm.$el, '--ell-aside-width')).toEqual('200px')
    })
})

describe('Footer', () => {
    test('create footer', () => {
        const wrapper = mount(() => <Footer></Footer>)
        expect(wrapper.classes()).toContain('ell-footer')
    })

    test('footer height', () => {
        const wrapper = mount(() => <Footer height="100px"></Footer>)
        const vm = wrapper.vm
        expect(getCssVariable(vm.$el, '--ell-footer-height')).toEqual('100px')

    })
})

describe('Main', () => {
    test('create main', () => {
        const wrapper = mount(() => <Main></Main>)
        expect(wrapper.classes()).toContain('ell-main')
    })
})