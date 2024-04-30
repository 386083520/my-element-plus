import { describe, test,expect } from "vitest"
import { mount } from '@vue/test-utils'
import Col from "../src/col.vue"
describe('Col', () => {
    test('create', () => {
        const wrapper = mount(() => <Col/>)
        expect(wrapper.classes()).toContain("ell-col")
    })
})