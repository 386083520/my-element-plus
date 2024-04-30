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
    test('body style', () => {
        const style = 'font-size: 14px;'
        const wrapper = mount(() => <Card bodyStyle={style}>{AXIOM}</Card>)
        expect(wrapper.find('.ell-card__body').attributes('style')).toBe(style)
    })
    test('body style with object', () => {
        const style = {'font-size': '14px'}
        const wrapper = mount(() => <Card bodyStyle={style}>{AXIOM}</Card>)
        expect(wrapper.find('.ell-card__body').attributes('style')).toBe('font-size: 14px;')
    })
    test('should renderbody-class props', () => {
        const bodyClass='test-body-class'
        const wrapper = mount(() => <Card bodyClass={bodyClass}>{AXIOM}</Card>)
        expect(wrapper.find('.ell-card__body').classes()).toContain(bodyClass)
    })
    test('shadow', () => {
        const shadow='hover'
        const wrapper = mount(() => <Card shadow={shadow}>{AXIOM}</Card>)
        expect(wrapper.find(`.is-${shadow}-shadow`).exists()).toBe(true)
    })
})
