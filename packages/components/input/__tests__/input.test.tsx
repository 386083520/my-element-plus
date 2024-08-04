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

    test('limit input and show word count', async () => {
        const input1 = ref('')
        const input2 = ref('')
        const input3 = ref('')
        const input4 = ref('fdsafd')
        const show = ref(false)
        const wrapper = mount(() => (
            <div>
                <Input
                    class="test-text"
                    type="text"
                    v-model={input1.value}
                    showWordLimit={show.value}
                    maxlength="10"
                />
                <Input
                    class="test-textarea"
                    type="textarea"
                    v-model={input2.value}
                    showWordLimit
                    maxlength="10"
                />
                <Input
                    class="test-password"
                    type="password"
                    v-model={input3.value}
                    showWordLimit
                    maxlength="10"
                />
                <Input
                    class="test-exceed"
                    type="text"
                    v-model={input4.value}
                    showWordLimit
                    maxlength="2"
                />
            </div>
        ))
        const inputElm1 = wrapper.vm.$el.querySelector('.test-text')
        const inputElm2 = wrapper.vm.$el.querySelector('.test-textarea')
        const inputElm3 = wrapper.vm.$el.querySelector('.test-password')
        const inputElm4 = wrapper.vm.$el.querySelector('.test-exceed')
        expect(inputElm1.querySelectorAll('.ell-input__count').length).toEqual(0)
        expect(inputElm2.querySelectorAll('.ell-textarea__count').length).toEqual(1)
        expect(inputElm3.querySelectorAll('.ell-input__count').length).toEqual(0)
        expect(Array.from(inputElm4.classList)).toMatchInlineSnapshot(`
          [
            "ell-input",
            "is-exceed",
            "test-exceed",
          ]
        `)

        show.value = true
        await nextTick()
        expect(inputElm1.querySelectorAll('.ell-input__count').length).toEqual(1)
        input4.value = 'a'
        await nextTick()
        expect(Array.from(inputElm4.classList)).toMatchInlineSnapshot(`
          [
            "ell-input",
            "test-exceed",
          ]
        `)
    })

    test('use formatter and parser', () => {
        const val = ref('10000')
        const formatter = (val: string) => {
            return val.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
        }
        const parser = (val: string) => {
        return val.replace(/\$\s?|(,*)/g, '')
        }

        const wrapper = mount(() => (
            <Input v-model={val.value} formatter={formatter} parser={parser}/>
        ))
        const vm = wrapper.vm
        expect(vm.$el.querySelector('input').value).toEqual('10,000')
        expect(vm.$el.querySelector('input').value).not.toEqual('10000')
        vm.$el.querySelector('input').value = '1,000,000'
        const event = new Event('input')
        vm.$el.querySelector('input').dispatchEvent(event)
        expect(val.value).toEqual('1000000')
    })

    describe('Input Events', () => {
        test('resize', async () => {
            const text = ref('resizeTextarea')
            const wrapper = mount(
                {
                    setup: () => () => (
                        <Input
                            ref="textarea"
                            type="textarea"
                            v-model={text.value}
                            autosize={{ minRows:1, maxRows: 1 }}
                        />
                    )
                }
            )
            await nextTick()
            const refTextArea = wrapper.vm.$refs.textarea
            const originMinHeight = refTextArea.textareaStyle[0].minHeight
            refTextArea.autosize.minRows = 4
            refTextArea.resizeTextarea()
            const nowMinHeight = refTextArea.textareaStyle[0].minHeight
            expect(originMinHeight).not.toEqual(nowMinHeight)

        })

        test('focus & blur',  async () => {
            const content = ref('')
            const handleFocus = vi.fn()
            const handleBlur = vi.fn()
            const wrapper = mount(() => (
                <Input
                    placeholder="请输入内容"
                    modelValue={content.value}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                />
            ))
            const input = wrapper.find('input')
            await input.trigger('focus')
            expect(handleFocus).toBeCalled()
            await input.trigger('blur')
            expect(handleBlur).toBeCalled()
        })
    })
})