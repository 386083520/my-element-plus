import { describe, test,expect } from "vitest"
import { mount } from '@vue/test-utils'
import Input from "../src/input.vue"
import { ref } from "vue"

const AXIOM = 'Rem is the  best girl'

describe('Input.vue', () => {
    test('create', () => {
        const input = ref('input')
        const wrapper = mount(() => (
            <Input
                placeholder="请输入内容"
                modelValue={input.value}
            />
        ))
        const inputElm = wrapper.find('input')
        expect(inputElm.exists()).toEqual(true)
        
    })
})