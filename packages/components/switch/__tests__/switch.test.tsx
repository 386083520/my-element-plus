import { describe, test, expect } from "vitest"
import { mount } from '@vue/test-utils'

import Switch from "../src/switch.vue"

const AXIOM = 'rem is the best girl'

describe('Switch.vue', () => {
    test('render test', () => {
        const wrapper = mount(() => <Switch>{AXIOM}</Switch>)
        expect(wrapper.text()).toEqual(AXIOM)
    })
})
