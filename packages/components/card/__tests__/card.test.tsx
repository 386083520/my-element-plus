import { describe, test,expect } from "vitest"
import { mount } from '@vue/test-utils'
import Card from "../src/card.vue"
const AXIOM = 'rem is the best girl'
describe('Card', () => {
    test('render test', () => {
        const wrapper = mount(() => <Card>{AXIOM}</Card>)
        expect(wrapper.text()).toEqual(AXIOM)
    })
})