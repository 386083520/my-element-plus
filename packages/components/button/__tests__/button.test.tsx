import { describe, test,expect } from "vitest"
import { mount } from '@vue/test-utils'
import { nextTick, ref } from 'vue'
import Button from "../src/button.vue"
import ButtonGroup from "../src/button-group.vue"
import { Loading, Search } from "@element-plus/icons-vue"

const AXIOM = 'rem is the best girl'

describe('Button', () => {
    test('create', () => {
        const wrapper = mount(() => <Button type="primary"/>)
        expect(wrapper.classes()).toContain('ell-button--primary')
    })

    test('icon', () => {
        const wrapper = mount(() => <Button icon={Search}/>)
        expect(wrapper.findComponent(Search).exists()).toBeTruthy()
    })
    test('loading', () => {
        const wrapper = mount(() => <Button loading/>)
        expect(wrapper.classes()).toContain('is-loading')
        expect(wrapper.findComponent(Loading).exists()).toBeTruthy()
    })
    test('size', () => {
        const wrapper = mount(() => <Button size="large"/>)
        expect(wrapper.classes()).toContain('ell-button--large')
    })
    test('plain', () => {
        const wrapper = mount(() => <Button plain/>)
        expect(wrapper.classes()).toContain('is-plain')
    })
    test('round', () => {
        const wrapper = mount(() => <Button round/>)
        expect(wrapper.classes()).toContain('is-round')
    })
    test('circle', () => {
        const wrapper = mount(() => <Button circle/>)
        expect(wrapper.classes()).toContain('is-circle')
    })
    test('link', () => {
        const wrapper = mount(() => <Button link/>)
        expect(wrapper.classes()).toContain('is-link')
    })
    test('text', async () => {
        const bg = ref(false)
        const wrapper = mount(() => <Button text bg={bg.value}/>)
        expect(wrapper.classes()).toContain('is-text')

        bg.value = true
        await nextTick()
        expect(wrapper.classes()).toContain('is-has-bg')
    })

    test('render text', () => {
        const wrapper = mount(() => (<Button v-slots={{default: () => AXIOM}}/>))
        expect(wrapper.text()).toEqual(AXIOM)
    })

    test('handle click', async () => {
        const wrapper = mount(() => (<Button v-slots={{default: () => ''}}/>))
        await wrapper.trigger('click')
        expect(wrapper.emitted().click).toBeDefined()
    })

    test('handle click inside', async () => {
        const wrapper = mount(() => (<Button v-slots={{default: () => <span class="inner-slot"></span>}}/>))
        await wrapper.find('.inner-slot').trigger('click')
        expect(wrapper.emitted().click).toBeDefined()
    })

    test('loading implies disabled', async () => {
        const wrapper = mount(() => (
            <Button v-slots={{default: () => AXIOM}} loading/>
        ))
        await wrapper.trigger('click')
        expect(wrapper.emitted().click).toBeUndefined()
    })

    test('disabled', async () => {
        const wrapper = mount(() => <Button disabled/>)
        expect(wrapper.classes()).toContain('is-disabled')
        await wrapper.trigger('click')
        expect(wrapper.emitted().click).toBeUndefined()
    })

    test('loading icon', () => {
        const wrapper = mount(() => <Button loading loadingIcon={Search}/>)
        expect(wrapper.findComponent(Search).exists()).toBeTruthy()
    })

    test('loading slot', () => {
        const wrapper = mount(() => 
            (<Button v-slots={{loading: () => <span class="custom-loading"></span>}} loading/>)
        )
        expect(wrapper.find(".custom-loading").exists()).toBeTruthy()
    })

    test('tag', () => {
        const link = 'https://github.com'
        const wrapper = mount(() => <Button tag="a" href={link}>{AXIOM}</Button>)
        expect(wrapper.text()).toEqual(AXIOM)
        expect(wrapper.element.nodeName).toBe('A')
        expect(wrapper.attributes('href')).toBe(link)
    })

    test('add space in two Chinese characters', () => {
        const wrapper = mount(() => <Button v-slots={{default: () => '中文'}} autoInsertSpace/>)
        expect(wrapper.find('.ell-button span').text()).toBe('中文')
        expect(wrapper.find('.ell-button span').classes()).toContain('ell-button__text--expand')
    })
})


describe('button-group', () => {
    test('create', () => {
        const wrapper = mount(() => (
            <ButtonGroup>
                <Button></Button>
                <Button></Button>
            </ButtonGroup>
        ))
        expect(wrapper.classes()).toContain('ell-button-group')
        expect(wrapper.findAll('button').length).toBe(2)
    })

    test('button group reactive size', async () => {
        const size = ref('small')
        const wrapper = mount(() => (
            <ButtonGroup size={size.value}>
                <Button></Button>
                <Button></Button>
            </ButtonGroup>
        ))
        expect(wrapper.classes()).toContain('ell-button-group')
        expect(wrapper.findAll('.ell-button-group button.ell-button--small').length).toBe(2)
        size.value='large'
        await nextTick()
        expect(wrapper.findAll('.ell-button-group button.ell-button--large').length).toBe(2)
    })

    test('button group type', () => {
        const wrapper = mount(() => (
            <ButtonGroup type="warning">
                <Button type="primary"></Button>
                <Button></Button>
            </ButtonGroup>
        ))
        expect(wrapper.classes()).toContain('ell-button-group')
        expect(wrapper.findAll('.ell-button-group button.ell-button--primary').length).toBe(1)
        expect(wrapper.findAll('.ell-button-group button.ell-button--warning').length).toBe(1)
    })
})
