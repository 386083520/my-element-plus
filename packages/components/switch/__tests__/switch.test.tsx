import { describe, test, expect } from "vitest"
import { mount } from '@vue/test-utils'

import Switch from "../src/switch.vue"

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
})
