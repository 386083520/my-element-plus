import { describe, test, expect, vi } from "vitest"
import { mount } from '@vue/test-utils'

import Switch from "../src/switch.vue"

import { Checked, CircleClose } from "@element-plus/icons-vue"
import { nextTick, ref } from "vue"

const AXIOM = 'rem is the best girl'

describe('Switch.vue', () => {
    test('create', () => {
        const props = {
            activeText: 'on',
            inactiveText: 'off',
            width: 100
        }
        const wrapper = mount(() => <Switch {...props}/>)
        const leftLabelWrapper = wrapper.find('.ell-switch__label--left span')
        expect(leftLabelWrapper.text()).toEqual('off')
        const vm = wrapper.vm
        expect(vm.$el.classList.contains('is-checked')).false
        const coreEl = vm.$el.querySelector('.ell-switch__core')
        expect(coreEl.style.width).toEqual('100px')
    })

    test('size', () => {
        const wrapper = mount(() => <Switch size="large"/>)
        expect(wrapper.find('.ell-switch--large').exists()).toBe(true)
    })

    test('inline prompt', () => {
        const props = {
            activeText: 'on',
            inactiveText: 'off',
            width: 100,
            inlinePrompt: true
        }
        const wrapper = mount(() => <Switch {...props}/>)
        const vm = wrapper.vm
        expect(vm.$el.classList.contains('is-checked')).false
        const coreEl = vm.$el.querySelector('.ell-switch__core')
        expect(coreEl.style.width).toEqual('100px')
        const label = wrapper.find('.ell-switch__inner span')
        expect(label.text()).toEqual('off')
    })

    test('switch with icons', () => {
        const wrapper = mount(() => <Switch activeIcon={Checked} inactiveIcon={CircleClose}/>)
        expect(wrapper.findComponent(Checked).exists()).toBe(true)
    })

    test('value correctly update', async () => {
        const value = ref(true)
        const wrapper = mount(() => <Switch v-model={value.value}/>)
        const vm = wrapper.vm
        expect(vm.$el.classList.contains('is-checked')).true
        const coreWrapper = wrapper.find('.ell-switch__core')
        await coreWrapper.trigger('click')
        expect(vm.$el.classList.contains('is-checked')).false
        expect(value.value).toEqual(false)
        await coreWrapper.trigger('click')
        expect(vm.$el.classList.contains('is-checked')).true
        expect(value.value).toEqual(true)
    })

    test('change event', async ()  => {
        const value = ref(true)
        const target  = ref(1)
        const handleChange = (val) => {
            target.value = val
        }
        const wrapper = mount(() => <Switch v-model={value.value} onChange={handleChange}/>)
        const coreWrapper = wrapper.find('.ell-switch__core')
        await coreWrapper.trigger('click')
        const switchWrapper = wrapper.findComponent(Switch)
        expect(switchWrapper.emitted()['change']).toBeTruthy()
        expect(target.value).toEqual(false)
    })

    test('disabled not click', async () => {
        const value = ref(true)
        const wrapper = mount(() => <Switch v-model={value.value} disabled/>)
        expect(value.value).toEqual(true)
        const coreWrapper = wrapper.find('.ell-switch__core')
        await coreWrapper.trigger('click')
        expect(value.value).toEqual(true)
    })

    test('expand switch value', async () => {
        const value = ref('100')
        const onValue = ref('100')
        const offValue = ref('0')
        const wrapper = mount(() => (
            <Switch
            v-model={value.value}
            active-value={onValue.value}
            inactive-value={offValue.value}
            />
        ))
        const coreWrapper = wrapper.find('.ell-switch__core')
        await coreWrapper.trigger('click')
        expect(value.value).toEqual('0')
        await coreWrapper.trigger('click')
        expect(value.value).toEqual('100')
    })

    test('brforeChange return  promise', async () => {
        const value = ref(true)
        const asyncResult = ref('error')
        const beforeChange = () => {
            return new Promise<boolean>((resolve, reject) => {
                setTimeout(() => {
                    return asyncResult.value == 'success'? resolve(true): reject(new Error('Error'))
                }, 1000)
            })
        }
        const wrapper = mount(() => <Switch v-model={value.value} beforeChange={beforeChange}/>)
        const coreWrapper = wrapper.find('.ell-switch__core')
        vi.useFakeTimers()
        await coreWrapper.trigger('click')
        vi.runAllTimers()
        await nextTick()
        expect(value.value).toEqual(true)

        asyncResult.value = 'success'
        vi.useFakeTimers()
        await coreWrapper.trigger('click')
        vi.runAllTimers()
        await nextTick()
        expect(value.value).toEqual(false)
    })

    test('brforeChange return  boolean', async () => {
        const value = ref(true)
        const result = ref(false)
        const beforeChange = () => {
            return result.value
        }
        const wrapper = mount(() => <Switch v-model={value.value} beforeChange={beforeChange}/>)
        const coreWrapper = wrapper.find('.ell-switch__core')
        await coreWrapper.trigger('click')
        expect(value.value).toEqual(true)

        result.value  = true

        await coreWrapper.trigger('click')
        expect(value.value).toEqual(false)
        await coreWrapper.trigger('click')
        expect(value.value).toEqual(true)
    })

})
