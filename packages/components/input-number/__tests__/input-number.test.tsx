import { describe, test, expect } from "vitest"
import { mount } from '@vue/test-utils'

import InputNumber from "../src/input-number.vue"

const AXIOM = 'rem is the best girl'

describe('InputNumber.vue', () => {
    test('render test', () => {
        const wrapper = mount(() => <InputNumber>{AXIOM}</InputNumber>)
        expect(wrapper.text()).toEqual(AXIOM)
    })
})
