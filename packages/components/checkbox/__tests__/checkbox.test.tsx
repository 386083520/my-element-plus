import { describe, test, expect } from "vitest"
import { mount } from '@vue/test-utils'

import Checkbox from "../src/checkbox.vue"
import { ref } from "vue"
import CheckboxGroup from "../src/checkbox-group.vue"
import CheckboxButton from "../src/checkbox-button.vue"

const AXIOM = 'rem is the best girl'

describe('Checkbox.vue', () => {
    test('create', async () => {
        const checked = ref(false)
        const wrapper = mount(() => <Checkbox v-model={checked.value} label="a"></Checkbox>)
        expect(wrapper.classes()).toContain('ell-checkbox')
        await wrapper.trigger('click')
        expect(wrapper.classes()).toContain('is-checked')
        await wrapper.trigger('click')
        expect(wrapper.classes('is-checked')).toBe(false)
    })

    test('label set to number 0', () => {
        const wrapper = mount(() => <Checkbox  label={0}></Checkbox>)
        expect(wrapper.find('.ell-checkbox__label').text()).toBe('0')
    })

    test('disabled', async () => {
        const checked = ref(false)
        const wrapper = mount(() => <Checkbox v-model={checked.value} label="a" disabled></Checkbox>)
        expect(wrapper.classes()).toContain('is-disabled')
        expect(checked.value).toBe(false)
        await wrapper.trigger('click')
        expect(checked.value).toBe(false)
    })

    test('change', async () => {
        const checked = ref(false)
        const data = ref()
        const onChange = (val)  => (data.value = val)
        const wrapper = mount(() => (
            <Checkbox v-model={checked.value} label="a" onChange={onChange}></Checkbox>
        ))
        await wrapper.trigger('click')
        expect(data.value).toBe(true)
    })

    test('checkbox group', async () => {
        const checkList = ref([])
        const wrapper = mount({
            setup() {
                return () => (
                    <CheckboxGroup v-model={checkList.value}>
                        <Checkbox label="a" value="a" ref="a"></Checkbox>
                        <Checkbox label="b" value="b" ref="b"></Checkbox>
                        <Checkbox label="c" value="c" ref="c"></Checkbox>
                        <Checkbox label="d" value="d" ref="d"></Checkbox>
                    </CheckboxGroup>
                )
            }
        })
        expect(checkList.value.length).toBe(0)
        await wrapper.findComponent({ref: 'a'}).trigger('click')
        expect(checkList.value.length).toBe(1)
        expect(checkList.value).toContain('a')
        await wrapper.findComponent({ref: 'b'}).trigger('click')
        expect(checkList.value.length).toBe(2)
        expect(checkList.value).toContain('a')
        expect(checkList.value).toContain('b')
    })

    test('checkbox group change', async () => {
        const checkList = ref([])
        const data = ref([])
        const onChange = (val)  => (data.value = val)
        const wrapper = mount({
            setup() {
                return () => (
                    <CheckboxGroup v-model={checkList.value} onChange={onChange}>
                        <Checkbox label="a" value="a" ref="a"></Checkbox>
                        <Checkbox label="b" value="b" ref="b"></Checkbox>
                    </CheckboxGroup>
                )
            }
        })
        await wrapper.findComponent({ref: 'a'}).trigger('click')
        expect(data.value.length).toBe(1)
        expect(data.value).toContain('a')
    })

    test('true/false value', async () => {
        const checked = ref('a')
        const wrapper = mount(() => (
            <Checkbox v-model={checked.value} label="label" true-value="a" false-value={0}></Checkbox>
        ))
        await wrapper.trigger('click')
        expect(checked.value).toBe(0)
        await wrapper.trigger('click')
        expect(checked.value).toBe('a')
    })
})

describe('check-button', () => {
    test('create', async () => {
        const checked = ref(false)
        const wrapper = mount(() => <CheckboxButton v-model={checked.value} label="a"></CheckboxButton>)
        expect(wrapper.classes()).toContain('ell-checkbox-button')
        await wrapper.trigger('click')
        expect(wrapper.classes()).toContain('is-checked')
        await wrapper.trigger('click')
        expect(wrapper.classes('is-checked')).toBe(false)
    })

    test('disabled', async () => {
        const checked = ref(false)
        const wrapper = mount(() => <CheckboxButton v-model={checked.value} label="a" disabled></CheckboxButton>)
        expect(wrapper.classes()).toContain('is-disabled')
        expect(checked.value).toBe(false)
        await wrapper.trigger('click')
        expect(checked.value).toBe(false)
    })

    test('change', async () => {
        const checked = ref(false)
        const data = ref()
        const onChange = (val)  => (data.value = val)
        const wrapper = mount(() => (
            <CheckboxButton v-model={checked.value} label="a" onChange={onChange}></CheckboxButton>
        ))
        await wrapper.trigger('click')
        expect(data.value).toBe(true)
    })

    test('button group change', async () => {
        const checkList = ref([])
        const data = ref([])
        const onChange = (val)  => (data.value = val)
        const wrapper = mount({
            setup() {
                return () => (
                    <CheckboxGroup v-model={checkList.value} onChange={onChange}>
                        <CheckboxButton label="a" value="a" ref="a"></CheckboxButton>
                        <CheckboxButton label="b" value="b" ref="b"></CheckboxButton>
                    </CheckboxGroup>
                )
            }
        })
        await wrapper.findComponent({ref: 'a'}).trigger('click')
        expect(data.value.length).toBe(1)
        expect(data.value).toContain('a')
    })

    test('button group min and max', async () => {
        const checkList = ref(['a', 'b'])
        const wrapper = mount({
            setup() {
                return () => (
                    <CheckboxGroup v-model={checkList.value} min={2} max={3}>
                        <CheckboxButton label="a" value="a" ref="a"></CheckboxButton>
                        <CheckboxButton label="b" value="b" ref="b"></CheckboxButton>
                        <CheckboxButton label="c" value="c" ref="c"></CheckboxButton>
                        <CheckboxButton label="d" value="d" ref="d"></CheckboxButton>
                        <CheckboxButton label="e" value="e" ref="e"></CheckboxButton>
                    </CheckboxGroup>
                )
            }
        })
        expect(checkList.value.length).toBe(2)
        await wrapper.findComponent({ref: 'a'}).trigger('click')
        expect(checkList.value.length).toBe(2)
        await wrapper.findComponent({ref: 'c'}).trigger('click')
        expect(checkList.value.length).toBe(3)
        expect(checkList.value).toEqual(['a','b','c'])
        await wrapper.findComponent({ref: 'a'}).trigger('click')
        expect(checkList.value.length).toBe(2)
        await wrapper.findComponent({ref: 'a'}).trigger('click')
        expect(checkList.value.length).toBe(3)
        expect(wrapper.findComponent({ref: 'd'}).vm.disabled).toBe(false)
        expect(wrapper.findComponent({ref: 'e'}).vm.disabled).toBe(false)
    })
})
