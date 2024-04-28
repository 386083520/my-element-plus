import { describe, test,expect } from "vitest"
import { mount } from '@vue/test-utils'
import Badge from "../src/badge.vue"
describe('Badge', () => {
    test('has value', () => {
        const wrapper = mount(() => <Badge value={80}/>)
        expect(wrapper.find(".ell-badge__content").text()).toEqual('80')
    })
})
