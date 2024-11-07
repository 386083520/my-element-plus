import { describe, test, expect } from "vitest"
import { mount } from '@vue/test-utils'

import Checkbox from "../src/checkbox.vue"
import { ref } from "vue"

const AXIOM = 'rem is the best girl'

describe('Checkbox.vue', () => {
    test('create', async () => {
        const checked = ref(false)
        const wrapper = mount(() => <Checkbox v-model={checked.value} label="a"></Checkbox>)
        expect(wrapper.classes()).toContain('ell-checkbox')
        await wrapper.trigger('click')
        expect(wrapper.classes()).toContain('is-checked')
        await wrapper.trigger('click')
        expect(wrapper.classes('is-checked')).toBe(false)
    })

    test('label set to number 0', () => {
        const wrapper = mount(() => <Checkbox  label={0}></Checkbox>)
        expect(wrapper.find('.ell-checkbox__label').text()).toBe('0')
    })
})
