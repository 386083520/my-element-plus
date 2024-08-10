import { describe, test, expect } from "vitest"
import { mount } from '@vue/test-utils'

import InputNumber from "../src/input-number.vue"

const AXIOM = 'rem is the best girl'

describe('InputNumber.vue', () => {
    test('create', () => {
        const wrapper = mount(() => <InputNumber></InputNumber>)
        expect(wrapper.find('input').exists()).toBe(true)
    })
})
