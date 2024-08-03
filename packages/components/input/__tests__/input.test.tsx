import { describe, test,expect, vi } from "vitest"
import { mount } from '@vue/test-utils'
import Input from "../src/input.vue"
import { nextTick, ref } from "vue"

const AXIOM = 'Rem is the  best girl'

describe('Input.vue', () => {
    test('create', async () => {
        const input = ref('input')
        const handleFocus = vi.fn()
        const wrapper = mount(() => (
            <Input
                placeholder="请输入内容"
                modelValue={input.value}
                minlength={3}
                onFocus={handleFocus}
                maxlength={5}
            />
        ))
        const inputElm = wrapper.find('input')
        const nativeInput = inputElm.element
        await inputElm.trigger('focus')
        expect(handleFocus).toHaveBeenCalled()
        expect(inputElm.exists()).toEqual(true)
        expect(nativeInput.placeholder).toMatchInlineSnapshot(`"请输入内容"`)
        expect(nativeInput.value).toMatchInlineSnapshot(`"input"`)
        expect(nativeInput.minLength).toMatchInlineSnapshot(`3`)

        input.value = 'text'
        await nextTick()
        expect(nativeInput.value).toMatchInlineSnapshot(`"text"`)
    })

    test('default to empty', () => {
        const wrapper = mount(() => <Input/>)
        const inputElm = wrapper.find('input')
        expect(inputElm.element.value).toBe('')
    })

    test('disabled', () => {
        const wrapper = mount(() => <Input disabled/>)
        const inputElm = wrapper.find('input')
        expect(inputElm.element.disabled).not.toBeNull()
    })
})