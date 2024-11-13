import { describe, test, expect } from "vitest"
import { mount } from '@vue/test-utils'

import Switch from "../src/switch.vue"
import { wrap } from "lodash-unified"

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
})
