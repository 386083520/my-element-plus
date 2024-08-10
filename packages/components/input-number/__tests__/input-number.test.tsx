import { describe, test, expect } from "vitest"
import { mount } from '@vue/test-utils'

import InputNumber from "../src/input-number.vue"
import { nextTick, ref } from "vue"

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
})
