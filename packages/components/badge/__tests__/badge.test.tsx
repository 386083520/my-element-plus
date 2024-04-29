import { describe, test,expect } from "vitest"
import { mount } from '@vue/test-utils'
import Badge from "../src/badge.vue"
const AXIOM = 'rem is the best girl'
describe('Badge', () => {
    test('has value', () => {
        const wrapper = mount(() => <Badge value={80}/>)
        expect(wrapper.find(".ell-badge__content").text()).toEqual('80')
    })
    test('is fixed', () => {
        const wrapper = mount(() => (
            <Badge
            v-slots={{
                default: () => AXIOM
            }}
            />
        ))
        expect(wrapper.find('.ell-badge').text()).toBe(AXIOM)
        expect(wrapper.find('.ell-badge__content.is-fixed').exists()).toBe(true)
    })
})
