import { describe, test, expect } from "vitest"
import { mount } from '@vue/test-utils'

import Radio from "../src/radio.vue"
import { ref } from "vue"
import RadioGroup from "../src/radio-group.vue"
import RadioButton from "../src/radio-button.vue"

const AXIOM = 'rem is the best girl'

describe('Radio.vue', () => {
    test('create', () => {
        const radio = ref('')
        const wrapper = mount(() => <Radio label="a" v-model={radio.value}></Radio>)
        expect(wrapper.classes()).toContain('ell-radio')

    })

    test('disabled', () => {
        const radio = ref('')
        const wrapper = mount(() => <Radio label="a" v-model={radio.value} disabled></Radio>)
        expect(wrapper.classes()).toContain('is-disabled')
        
    })

    test('border', () => {
        const radio = ref('')
        const wrapper = mount(() => <Radio label="a" v-model={radio.value} border></Radio>)
        expect(wrapper.classes()).toContain('is-bordered')
        
    })

    test('change event', async () => {
        const radio = ref('')
        const changeData = ref('')
        function handleChange(val) {
            changeData.value = val
        }
        const wrapper = mount(() => <Radio label="a" v-model={radio.value} onChange={handleChange}></Radio>)
        await wrapper.trigger('click')
        expect(changeData.value).toEqual('a')
    })
})

describe('radio group', () => {
    test('create', async () => {
        const radio = ref(3)
        const wrapper = mount(() => (
            <RadioGroup v-model={radio.value}>
                <Radio value={3}></Radio>
                <Radio value={6}></Radio>
                <Radio value={9}></Radio>
            </RadioGroup>
        ))
        const [radio1, radio2, radio3] = wrapper.findAll('.ell-radio')
        expect(radio1.classes()).toContain('is-checked')
        await radio2.trigger('click')
        expect(radio2.classes()).toContain('is-checked')
        expect(radio.value).toEqual(6)
    })

    test('disabled', async () => {
        const radio = ref(3)
        const wrapper = mount(() => (
            <RadioGroup v-model={radio.value} disabled>
                <Radio value={3}></Radio>
                <Radio value={6}></Radio>
                <Radio value={9}></Radio>
            </RadioGroup>
        ))
        expect(wrapper.find('label.is-disabled').exists()).toBe(true)
        const [radio1, radio2, radio3] = wrapper.findAll('.ell-radio')
        expect(radio1.classes()).toContain('is-checked')
        await radio2.trigger('click')
        expect(radio1.classes()).toContain('is-checked')
        expect(radio.value).toEqual(3)
    })

    test('change event', async () => {
        const radio = ref(3)
        const data = ref(0)
        function onChange(val) {
            data.value = val
        }
        const wrapper = mount(() => (
            <RadioGroup v-model={radio.value} onChange={onChange}>
                <Radio value={3}></Radio>
                <Radio value={6}></Radio>
                <Radio value={9}></Radio>
            </RadioGroup>
        ))
        const [radio1, radio2, radio3] = wrapper.findAll('.ell-radio')
        await radio2.trigger('click')
        expect(data.value).toEqual(6)
    })

    test('disabled radio-button', async () => {
        const radio = ref(3)
        const wrapper = mount(() => (
            <RadioGroup v-model={radio.value} disabled>
                <RadioButton value={3}></RadioButton>
                <RadioButton value={6}></RadioButton>
                <RadioButton value={9}></RadioButton>
            </RadioGroup>
        ))
        expect(wrapper.find('label.is-disabled').exists()).toBe(true)
        const [radio1, radio2, radio3] = wrapper.findAll('.ell-radio-button')
        expect(radio1.classes()).toContain('is-checked')
        await radio2.trigger('click')
        expect(radio1.classes()).toContain('is-checked')
        expect(radio.value).toEqual(3)
    })
})
