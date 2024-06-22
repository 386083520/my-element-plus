import { describe, test,expect } from "vitest"
import { mount } from '@vue/test-utils'
import { nextTick, ref } from 'vue'
import { Loading, Search } from "@element-plus/icons-vue"
import Link from "../src/link.vue"

const AXIOM = 'rem is the best girl'

describe('Link', () => {
    test('render test', () => {
        const wrapper = mount(() => <Link>{AXIOM}</Link>)
        expect(wrapper.text()).toEqual(AXIOM)
    })
    test('it should handle click event when link is not disabled', async () => {
        const wrapper = mount(() => <Link>{AXIOM}</Link>)
        await wrapper.trigger('click')
        expect(wrapper.emitted('click')).toHaveLength(1)
    })
    test('it should handle click event when link is disabled', () => {
        const wrapper = mount(() => <Link disabled>{AXIOM}</Link>)
        expect(wrapper.classes()).toContain('is-disabled')
        expect(wrapper.attributes('href')).toBeUndefined()
    })
})
