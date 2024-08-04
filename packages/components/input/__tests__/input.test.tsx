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

    describe('test emoji', () => {
        test('ell-input', async () => {
            const inputVal = ref('12📫')
            const wrapper = mount(() => (
                <Input
                    v-model={inputVal.value}
                    showWordLimit
                    maxlength="4"
                />
            ))
            const inputElm = wrapper.find('input')
            const nativeInput = inputElm.element
            expect(nativeInput.value).toMatchInlineSnapshot(`"12📫"`)
            const ellCount = wrapper.find('.ell-input__count')
            expect(ellCount.exists()).toBe(true)
            expect(ellCount.text()).toMatchInlineSnapshot(`"4 / 4"`)

            inputVal.value = '1👀3😀'
            await nextTick()
            expect(nativeInput.value).toMatchInlineSnapshot(`"1👀3😀"`)
            expect(ellCount.text()).toMatchInlineSnapshot(`"6 / 4"`)

            inputVal.value = '哈哈1😀3😘'
            await nextTick()
            expect(nativeInput.value).toMatchInlineSnapshot(`"哈哈1😀3😘"`)
            expect(ellCount.text()).toMatchInlineSnapshot(`"8 / 4"`)
            const vm = wrapper.vm
            expect(Array.from(vm.$el.classList)).toMatchInlineSnapshot(`
              [
                "ell-input",
                "is-exceed",
              ]
            `)
        })

        test('ell-textarea', async () => {
            const textareaVal = ref('12📫')
            const wrapper = mount(() => (
                <Input
                    type="textarea"
                    v-model={textareaVal.value}
                    showWordLimit
                    maxlength="4"
                />
            ))
            const textareaElm = wrapper.find('textarea')
            const nativeTextarea = textareaElm.element
            expect(nativeTextarea.value).toMatchInlineSnapshot(`"12📫"`)
            const ellCount = wrapper.find('.ell-textarea__count')
            expect(ellCount.exists()).toBe(true)
            expect(ellCount.text()).toMatchInlineSnapshot(`"4 / 4"`)

            textareaVal.value = '1👀3😀'
            await nextTick()
            expect(nativeTextarea.value).toMatchInlineSnapshot(`"1👀3😀"`)
            expect(ellCount.text()).toMatchInlineSnapshot(`"6 / 4"`)

            textareaVal.value = '哈哈1😀3😘'
            await nextTick()
            expect(nativeTextarea.value).toMatchInlineSnapshot(`"哈哈1😀3😘"`)
            expect(ellCount.text()).toMatchInlineSnapshot(`"8 / 4"`)
            const vm = wrapper.vm
            expect(Array.from(vm.$el.classList)).toMatchInlineSnapshot(`
              [
                "ell-textarea",
                "is-exceed",
              ]
            `)
        })
    })

    test('prefixIcon', () => {
        const wrapper = mount(() => <Input prefix-icon="time"/>)
        const icon = wrapper.find('.ell-input__icon')
        expect(icon.exists()).toBe(true)
    })

    test('suffixIcon', () => {
        const wrapper = mount(() => <Input suffix-icon="time"/>)
        const icon = wrapper.find('.ell-input__icon')
        expect(icon.exists()).toBe(true)
    })

    test('size', () => {
        const wrapper = mount(() => <Input size="large"/>)
        expect(wrapper.classes('ell-input--large')).toBe(true)
    })

    test('type', () => {
        const wrapper = mount(() => <Input type="textarea"/>)
        expect(wrapper.classes('ell-textarea')).toBe(true)
    })

    test('rows', () => {
        const wrapper = mount(() => <Input type="textarea" rows={3}/>)
        expect(wrapper.find('textarea').element.rows).toEqual(3)
    })

    test('resize', async () => {
        const resize = ref('none')
        const wrapper = mount(() => <Input type="textarea" resize={resize.value}/>)
        const textarea = wrapper.find('textarea').element
        await nextTick()
        expect(textarea.style.resize).toEqual(resize.value)
        resize.value = 'horizontal'
        await nextTick()
        expect(textarea.style.resize).toEqual(resize.value)
    })
})