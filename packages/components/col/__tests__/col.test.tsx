import { describe, test,expect } from "vitest"
import { mount } from '@vue/test-utils'
import Col from "../src/col.vue"
describe('Col', () => {
    test('create', () => {
        const wrapper = mount(() => <Col/>)
        expect(wrapper.classes()).toContain("ell-col")
    })
    test('span',() => {
        const wrapper = mount(() => <Col span={12}/>)
        expect(wrapper.classes()).toContain("ell-col-12")
    })
    test('push',() => {
        const wrapper = mount(() => <Col span={12} push={3}/>)
        expect(wrapper.classes()).toContain("ell-col-push-3")
    })
    test('pull',() => {
        const wrapper = mount(() => <Col span={12} pull={3}/>)
        expect(wrapper.classes()).toContain("ell-col-pull-3")
    })
})