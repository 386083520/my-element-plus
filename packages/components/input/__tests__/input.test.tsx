import { describe, test,expect } from "vitest"
import { mount } from '@vue/test-utils'
import Input from "../src/input.vue"
import { nextTick, ref } from "vue"

const AXIOM = 'Rem is the  best girl'

describe('Input.vue', () => {
    test('create', async () => {
        const input = ref('input')
        const wrapper = mount(() => (
            <Input
                placeholder="请输入内容"
                modelValue={input.value}
                minlength={3}
                maxlength={5}
            />
        ))
        const inputElm = wrapper.find('input')
        const nativeInput = inputElm.element
        expect(inputElm.exists()).toEqual(true)
        expect(nativeInput.placeholder).toMatchInlineSnapshot(`"请输入内容"`)
        expect(nativeInput.value).toMatchInlineSnapshot(`"input"`)
        expect(nativeInput.minLength).toMatchInlineSnapshot(`3`)

        input.value = 'text'
        await nextTick()
        expect(nativeInput.value).toMatchInlineSnapshot(`"text"`)
    })
})