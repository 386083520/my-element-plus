import { describe, test,expect } from "vitest"
import { mount } from '@vue/test-utils'
import { nextTick, ref } from 'vue'
import ButtonGroup from "../src/button-group.vue"
import Button from "../../button/src/button.vue"

describe('button-group', () => {
    test('create', () => {
        const wrapper = mount(() => (
            <ButtonGroup>
                <Button></Button>
                <Button></Button>
            </ButtonGroup>
        ))
        expect(wrapper.classes()).toContain('ell-button-group')
        expect(wrapper.findAll('button').length).toBe(2)
    })

    test('button group reactive size', async () => {
        const size = ref('small')
        const wrapper = mount(() => (
            <ButtonGroup size={size.value}>
                <Button></Button>
                <Button></Button>
            </ButtonGroup>
        ))
        expect(wrapper.classes()).toContain('ell-button-group')
        expect(wrapper.findAll('.ell-button-group button.ell-button--small').length).toBe(2)
        size.value='large'
        await nextTick()
        expect(wrapper.findAll('.ell-button-group button.ell-button--large').length).toBe(2)
    })

    test('button group type', () => {
        const wrapper = mount(() => (
            <ButtonGroup type="warning">
                <Button type="primary"></Button>
                <Button></Button>
            </ButtonGroup>
        ))
        expect(wrapper.classes()).toContain('ell-button-group')
        expect(wrapper.findAll('.ell-button-group button.ell-button--primary').length).toBe(1)
        expect(wrapper.findAll('.ell-button-group button.ell-button--warning').length).toBe(1)
    })
})