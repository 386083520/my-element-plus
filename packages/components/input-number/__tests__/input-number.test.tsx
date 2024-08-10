import { describe, test, expect, vi } from "vitest"
import { mount } from '@vue/test-utils'

import InputNumber from "../src/input-number.vue"
import { nextTick, ref } from "vue"
import { ArrowDown, ArrowUp } from "@element-plus/icons-vue"

const AXIOM = 'rem is the best girl'

const mouseup = new Event('mouseup')

describe('InputNumber.vue', () => {
    test('create', () => {
        const wrapper = mount(() => <InputNumber></InputNumber>)
        expect(wrapper.find('input').exists()).toBe(true)
    })

    test('modelValue', () => {
        const inputText = ref(1)
        const wrapper = mount(() => <InputNumber modelValue={inputText.value}></InputNumber>)
        expect(wrapper.find('input').element.value).toEqual('1')
    })

    test('input action can updatemodelValue', async () => {
        const inputText = ref(1)
        const handleUpdate = (data) => {
            inputText.value = data
        }
        const wrapper = mount(() => 
        <InputNumber
                modelValue={inputText.value}
                onUpdate:modelValue={handleUpdate}
            >
        </InputNumber>)
        expect(wrapper.find('input').element.value).toEqual('1')
        const simulateEvent = (text, event) => {
            el.value = text
            el.dispatchEvent(new Event(event))
        }
        const el = wrapper.find('input').element
        simulateEvent('3', 'input')
        await nextTick()
        expect(inputText.value).toEqual(3)
    })

    test('display value match actual value', async () => {
        const num = ref(1)
        const wrapper = mount(() => <InputNumber v-model={num.value}></InputNumber>)
        num.value = 222
        await nextTick()
        expect(wrapper.find('input').element.value).toEqual('222')
    })

    test('min', async () => {
        const num = ref(1)
        const wrapper = mount(() => <InputNumber v-model={num.value} min={3}></InputNumber>)
        expect(wrapper.find('input').element.value).toEqual('3')
        wrapper.find('.ell-input-number__decrease').trigger('mousedown')
        document.dispatchEvent(mouseup)
        await nextTick()
        expect(wrapper.find('input').element.value).toEqual('3')
    })

    test('max', async () => {
        const num = ref(5)
        const wrapper = mount(() => <InputNumber v-model={num.value} max={3}></InputNumber>)
        expect(wrapper.find('input').element.value).toEqual('3')
        wrapper.find('.ell-input-number__increase').trigger('mousedown')
        document.dispatchEvent(mouseup)
        await nextTick()
        expect(wrapper.find('input').element.value).toEqual('3')
    })

    test('step,increase and decrease', async () => {
        const num = ref(0)
        const wrapper = mount(() => <InputNumber v-model={num.value} step={2}></InputNumber>)
        wrapper.find('.ell-input-number__decrease').trigger('mousedown')
        document.dispatchEvent(mouseup)
        await nextTick()
        expect(wrapper.find('input').element.value).toEqual('-2')
        wrapper.find('.ell-input-number__increase').trigger('mousedown')
        document.dispatchEvent(mouseup)
        await nextTick()
        expect(wrapper.find('input').element.value).toEqual('0')
    })

    test('value decimals miss precision', async () => {
        const num = ref(0.2)
        const wrapper = mount(() => <InputNumber v-model={num.value} step={0.1}></InputNumber>)
        expect(wrapper.find('input').element.value).toEqual('0.2')
        const ellInputNumber = wrapper.findComponent(InputNumber).vm.$.exposed
        ellInputNumber.increase()
        await nextTick()
        expect(wrapper.find('input').element.value).toEqual('0.3')
        ellInputNumber.decrease()
        await nextTick()
        expect(wrapper.find('input').element.value).toEqual('0.2')
    })

    describe('precision accuracy 2', () => {
        const num = ref(0)
        const wrapper = mount(() => <InputNumber v-model={num.value} precision={2}></InputNumber>)
        test.each([
            [1.1111111111, '1.11'],
            [17.275, '17.28'],
            [17.2745, '17.27'],
            [1.09, '1.09'],
            [1.009, '1.01'],
            [10.999, '11.00'],
            [15, '15.00'],
            [15.5, '15.50'],
            [15.555, '15.56']
        ])(
            'each precision accuracy test',
            async (input, output)  => {
                await wrapper.find('input').setValue(input)
                expect(wrapper.find('input').element.value).toEqual(`${output}`)
            }
        )
    })

    describe('precision accuracy 3', () => {
        const num = ref(0)
        const wrapper = mount(() => <InputNumber v-model={num.value} precision={3}></InputNumber>)
        test.each([
            [1.1111111111, '1.111'],
            [17.275, '17.275'],
            [1.09, '1.090'],
            [10.999, '10.999'],
            [10.9999, '11.000'],
            [15.555, '15.555'],
            [1.3335, '1.334'],
        ])(
            'each precision accuracy test',
            async (input, output)  => {
                await wrapper.find('input').setValue(input)
                expect(wrapper.find('input').element.value).toEqual(`${output}`)
            }
        )
    })

    test('disabled', async () => {
        const num = ref(0)
        const wrapper = mount(() => <InputNumber v-model={num.value} disabled={true}></InputNumber>)
        wrapper.find('.ell-input-number__decrease').trigger('mousedown')
        document.dispatchEvent(mouseup)
        await nextTick()
        expect(wrapper.find('input').element.value).toEqual('0')
        wrapper.find('.ell-input-number__increase').trigger('mousedown')
        document.dispatchEvent(mouseup)
        await nextTick()
        expect(wrapper.find('input').element.value).toEqual('0')
    })

    test('controls', () => {
        const num = ref(0)
        const wrapper = mount(() => <InputNumber v-model={num.value} controls={false}></InputNumber>)
        expect(wrapper.find('.ell-input-number__decrease').exists()).toBe(false)
        expect(wrapper.find('.ell-input-number__increase').exists()).toBe(false)
    })

    test('controls-position', () => {
        const num = ref(0)
        const wrapper = mount(() => <InputNumber v-model={num.value} controls-position="right"></InputNumber>)
        expect(wrapper.findComponent(ArrowDown).exists()).toBe(true)
        expect(wrapper.findComponent(ArrowUp).exists()).toBe(true)
    })

    test('input-event', () => {
        const num = ref(0)
        const handleInput = vi.fn()
        const wrapper = mount(() => <InputNumber v-model={num.value} onInput={handleInput}></InputNumber>)
        const inputWrapper = wrapper.find('input')
        const nativeInput = inputWrapper.element
        nativeInput.value = '1'
        inputWrapper.trigger('input')
        expect(handleInput).toBeCalledTimes(1)
        expect(handleInput).toHaveBeenCalledWith(1)
        nativeInput.value = '2'
        inputWrapper.trigger('input')
        expect(handleInput).toBeCalledTimes(2)
        expect(handleInput).toHaveBeenCalledWith(2)
    })

    test('change-event', async () => {
        const num = ref(0)
        const wrapper = mount(() => <InputNumber v-model={num.value}></InputNumber>)
        wrapper.find('.ell-input-number__increase').trigger('mousedown')
        document.dispatchEvent(mouseup)
        await nextTick()
        expect(wrapper.getComponent(InputNumber).emitted('change')).toHaveLength(1)
        expect(wrapper.getComponent(InputNumber).emitted().change[0]).toEqual([
            1,0,
        ])
        wrapper.find('.ell-input-number__increase').trigger('mousedown')
        document.dispatchEvent(mouseup)
        await nextTick()
        expect(wrapper.getComponent(InputNumber).emitted('change')).toHaveLength(2)
        expect(wrapper.getComponent(InputNumber).emitted().change[1]).toEqual([
            2,1,
        ])
    })
})
