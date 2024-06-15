import { describe, test,expect } from "vitest"
import { mount } from '@vue/test-utils'
import { nextTick, ref } from 'vue'
import Button from "../src/button.vue"
import { Search } from "@element-plus/icons-vue"

describe('Button', () => {
    test('create', () => {
        const wrapper = mount(() => <Button type="primary"/>)
        expect(wrapper.classes()).toContain('ell-button--primary')
    })

    test('icon', () => {
        const wrapper = mount(() => <Button icon={Search}/>)
        expect(wrapper.findComponent(Search).exists()).toBeTruthy()
    })
})