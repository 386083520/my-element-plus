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

    test('sizes', async () => {
        const wrapper = mount(
            <Space size="large">
                {
                    Array.from({length: 2}).map((_, idx) => {
                        return `test${idx}`
                    })
                }
            </Space>
        )
        await nextTick()
        expect(wrapper.find('.ell-space').attributes('style')).toContain('gap: 16px')

        await wrapper.setProps({
            size: 30
        })
        await nextTick()
        expect(wrapper.find('.ell-space').attributes('style')).toContain('gap: 30px')

        await wrapper.setProps({
            size: [10,20]
        })
        
        expect(wrapper.find('.ell-space').attributes('style')).toContain('column-gap: 10px')
        expect(wrapper.find('.ell-space').attributes('style')).toContain('row-gap: 20px')
    })


    test('should render with spacer', async () => {
        const stringSpacer = '|'
        const wrapper = mount(
            <Space spacer={stringSpacer}>
                {
                    Array.from({length: 2}).map((_, idx) => {
                        return `test${idx}`
                    })
                }
            </Space>
        )
        await nextTick()
        expect(wrapper.element.children).toHaveLength(3)
        expect(wrapper.text()).toContain(stringSpacer)
        expect(wrapper.text().split(stringSpacer)).toHaveLength(2)

        const testSpacerCls = 'test-spacer-cls'
        await wrapper.setProps({
            spacer: <div class={testSpacerCls}></div>
        })
        expect(wrapper.findAll(`.${testSpacerCls}`)).toHaveLength(1)
        expect(wrapper.element.children).toHaveLength(3)
    })

    test('fill', async () => {
        const wrapper = mount(
            <Space fill>
                {
                    Array.from({length: 2}).map((_, idx) => {
                        return `test${idx}`
                    })
                }
            </Space>
        )
        await nextTick()
        expect(wrapper.find('.ell-space').attributes('style')).toContain('flex-wrap: wrap')
        expect(wrapper.find('.ell-space__item').attributes('style')).toContain('flex-grow: 1')
        expect(wrapper.find('.ell-space__item').attributes('style')).toContain('min-width: 100%')


        await wrapper.setProps({
            fillRatio: 50
        })
        expect(wrapper.find('.ell-space__item').attributes('style')).toContain('min-width: 50%')
    })
})