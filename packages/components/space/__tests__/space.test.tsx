import { describe, test,expect } from "vitest"
import { mount } from '@vue/test-utils'
import { nextTick, ref } from 'vue'
import Space from "../src/space"
import { wrap } from "lodash-unified"

const AXIOM = 'Rem is the best girl'


describe('Space', () => {
    test('render', async () => {
        const wrapper = mount(<Space>{AXIOM}</Space>)
        expect(wrapper.text()).toEqual(AXIOM)
        await wrapper.setProps({
            direction: 'vertical',
            wrap: true
        })
        expect(wrapper.find('.ell-space--vertical').exists()).toBe(true)
        expect(wrapper.find('.ell-space').attributes('style')).toContain('flex-wrap: wrap')
    })

    
})