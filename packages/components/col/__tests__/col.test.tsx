import { describe, test,expect } from "vitest"
import { nextTick, ref } from 'vue'
import { mount } from '@vue/test-utils'
import Col from "../src/col.vue"
import Row from "../../row/src/row.vue"
describe('Col', () => {
    test('create', () => {
        const wrapper = mount(() => <Col/>)
        expect(wrapper.classes()).toContain("ell-col")
    })
    test('span',() => {
        const wrapper = mount(() => <Col span={12}/>)
        expect(wrapper.classes()).toContain("ell-col-12")
    })
    test('push',() => {
        const wrapper = mount(() => <Col span={12} push={3}/>)
        expect(wrapper.classes()).toContain("ell-col-push-3")
    })
    test('pull',() => {
        const wrapper = mount(() => <Col span={12} pull={3}/>)
        expect(wrapper.classes()).toContain("ell-col-pull-3")
    })
    test('gutter', () => {
        const wrapper = mount({
            setup() {
                return () => (
                    <Row gutter={20}>
                        <Col span={12} ref="col"></Col>
                    </Row>
                )
            }
        })
        const colElm = wrapper.findComponent({ref: 'col'}).element as HTMLElement
        expect(colElm.style.paddingLeft === '10px').toBe(true)
        expect(colElm.style.paddingRight === '10px').toBe(true)
    })
    test('change gutter value', async () => {
        const outer = ref(20)
        const wrapper = mount({
            setup() {
                return () => (
                    <Row gutter={outer.value} ref="row">
                        <Col span={12} ref="col"></Col>
                    </Row>
                )
            }
        })
        const rowElm = wrapper.findComponent({ref: 'row'}).element as HTMLElement
        const colElm = wrapper.findComponent({ref: 'col'}).element as HTMLElement
        expect(colElm.style.paddingLeft === '10px').toBe(true)
        expect(colElm.style.paddingRight === '10px').toBe(true)
        expect(rowElm.style.marginLeft === '-10px').toBe(true)
        expect(rowElm.style.marginRight === '-10px').toBe(true)
        outer.value = 40
        await nextTick()
        expect(colElm.style.paddingLeft === '20px').toBe(true)
        expect(colElm.style.paddingRight === '20px').toBe(true)
        expect(rowElm.style.marginLeft === '-20px').toBe(true)
        expect(rowElm.style.marginRight === '-20px').toBe(true)
    })
    test('responsive', () => {
        const wrapper = mount({
            setup() {
                return () => (
                    <Row gutter={20}>
                        <Col
                        ref="col"
                        sm={{span: 4, offset:2}}
                        md={{span: 8}}
                        lg={6}
                        ></Col>
                    </Row>
                )
            }
        })
        const colElmClass=wrapper.findComponent({ref: 'col'}).classes()
        expect(colElmClass.includes('ell-col-sm-4')).toBe(true)
        expect(colElmClass.includes('ell-col-sm-offset-2')).toBe(true)
        expect(colElmClass.includes('ell-col-md-8')).toBe(true)
        expect(colElmClass.includes('ell-col-lg-6')).toBe(true)
    })
})
