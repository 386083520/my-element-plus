import { describe, test, expect } from "vitest"
import { mount } from '@vue/test-utils'

import Checkbox from "../src/checkbox.vue"

const AXIOM = 'rem is the best girl'

describe('Checkbox.vue', () => {
    test('render test', () => {
        const wrapper = mount(() => <Checkbox>{AXIOM}</Checkbox>)
        expect(wrapper.text()).toEqual(AXIOM)
    })
})
