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
})