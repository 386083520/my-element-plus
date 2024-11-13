import { describe, test, expect } from "vitest"
import { mount } from '@vue/test-utils'

import Switch from "../src/switch.vue"

import { Checked, CircleClose } from "@element-plus/icons-vue"
import { ref } from "vue"

const AXIOM = 'rem is the best girl'

describe('Switch.vue', () => {
    test('create', () => {
        const props = {
            activeText: 'on',
            inactiveText: 'off',
            width: 100
        }
        const wrapper = mount(() => <Switch {...props}/>)
        const leftLabelWrapper = wrapper.find('.ell-switch__label--left span')
        expect(leftLabelWrapper.text()).toEqual('off')
        const vm = wrapper.vm
        expect(vm.$el.classList.contains('is-checked')).false
        const coreEl = vm.$el.querySelector('.ell-switch__core')
        expect(coreEl.style.width).toEqual('100px')
    })

    test('size', () => {
        const wrapper = mount(() => <Switch size="large"/>)
        expect(wrapper.find('.ell-switch--large').exists()).toBe(true)
    })

    test('inline prompt', () => {
        const props = {
            activeText: 'on',
            inactiveText: 'off',
            width: 100,
            inlinePrompt: true
        }
        const wrapper = mount(() => <Switch {...props}/>)
        const vm = wrapper.vm
        expect(vm.$el.classList.contains('is-checked')).false
        const coreEl = vm.$el.querySelector('.ell-switch__core')
        expect(coreEl.style.width).toEqual('100px')
        const label = wrapper.find('.ell-switch__inner span')
        expect(label.text()).toEqual('off')
    })

    test('switch with icons', () => {
        const wrapper = mount(() => <Switch activeIcon={Checked} inactiveIcon={CircleClose}/>)
        expect(wrapper.findComponent(Checked).exists()).toBe(true)
    })

    test('value correctly update', async () => {
        const value = ref(true)
        const wrapper = mount(() => <Switch v-model={value.value}/>)
        const vm = wrapper.vm
        expect(vm.$el.classList.contains('is-checked')).true
        const coreWrapper = wrapper.find('.ell-switch__core')
        await coreWrapper.trigger('click')
        expect(vm.$el.classList.contains('is-checked')).false
        expect(value.value).toEqual(false)
        await coreWrapper.trigger('click')
        expect(vm.$el.classList.contains('is-checked')).true
        expect(value.value).toEqual(true)
    })
})
