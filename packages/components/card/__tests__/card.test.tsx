import { describe, test,expect } from "vitest"
import { mount } from '@vue/test-utils'
import Card from "../src/card.vue"
const AXIOM = 'rem is the best girl'
describe('Card', () => {
    test('render test', () => {
        const wrapper = mount(() => <Card>{AXIOM}</Card>)
        expect(wrapper.text()).toEqual(AXIOM)
    })
    test('string header', () => {
        const header = 'i am header'
        const wrapper = mount(() => <Card header={header}>{AXIOM}</Card>)
        expect(wrapper.text()).toContain(header)
    })
    test('vnode header', () => {
        const wrapper = mount(() => (
            <Card
            v-slots={{
                default: () => AXIOM,
                header: () => (
                    <div>
                        <span class="header-text">card header</span>
                        <button class="test-btn">click me</button>
                    </div>
                )
            }}
            >
            </Card>
        ))
        expect(wrapper.find('.header-text').exists()).toBe(true)
        expect(wrapper.find('.test-btn').exists()).toBe(true)
    })
})
