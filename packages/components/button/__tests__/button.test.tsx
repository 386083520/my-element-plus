import { describe, test,expect } from "vitest"
import { mount } from '@vue/test-utils'
import { nextTick, ref } from 'vue'
import Button from "../src/button.vue"
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
        expect(wrapper.emitted()).toBeDefined()
    })

    test('handle click inside', async () => {
        const wrapper = mount(() => (<Button v-slots={{default: () => <span class="inner-slot"></span>}}/>))
        await wrapper.find('.inner-slot').trigger('click')
        expect(wrapper.emitted()).toBeDefined()
    })

    test('loading implies disabled', async () => {
        const wrapper = mount(() => (
            <Button v-slots={{default: () => AXIOM}} loading/>
        ))
        await wrapper.trigger('click')
        expect(wrapper.emitted()).toBeUndefined()
    })
})
