import { describe, test, expect } from "vitest"
import { mount } from '@vue/test-utils'

import Radio from "../src/radio.vue"
import { ref } from "vue"

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
})
