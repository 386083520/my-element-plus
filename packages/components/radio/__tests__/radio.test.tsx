import { describe, test, expect } from "vitest"
import { mount } from '@vue/test-utils'

import Radio from "../src/radio.vue"

const AXIOM = 'rem is the best girl'

describe('Radio.vue', () => {
    test('render test', () => {
        const wrapper = mount(() => <Radio>{AXIOM}</Radio>)
        expect(wrapper.text()).toEqual(AXIOM)
    })
})
