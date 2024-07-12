import { describe, test,expect } from "vitest"
import { mount } from '@vue/test-utils'
import { nextTick, ref } from 'vue'
import Scrollbar from "../src/scrollbar.vue"
import { defineGetter, makeScroll } from "@my-element-plus/test-utils"


describe('ScrollBar', () => {
    test('vertical', async () => {
        const outerHeight = 204
        const innerHeight = 500
        const wrapper = mount(() => (
            <Scrollbar style={`height: ${outerHeight}px;`}>
                <div style={`height: ${innerHeight}px;`}></div>
            </Scrollbar>
        ))
        const scrollDom = wrapper.find('.ell-scrollbar__wrap').element
        const offsetHeightRestore = defineGetter(scrollDom, 'offsetHeight', outerHeight)
        const scrollHeightRestore = defineGetter(scrollDom, 'scrollHeight', innerHeight)
        await makeScroll(scrollDom, 'scrollTop', 100)
        expect(wrapper.find('.is-vertical div').attributes('style'))
        .toContain('transform: translateY(50%); height: 80px;')
        await makeScroll(scrollDom, 'scrollTop', 300)
        expect(wrapper.find('.is-vertical div').attributes('style'))
        .toContain('transform: translateY(150%); height: 80px;')
        offsetHeightRestore()
        scrollHeightRestore()
    })

    test('horizontal', async () => {
        const outerWidth = 204
        const innerWidth = 500
        const wrapper = mount(() => (
            <Scrollbar style={`width: ${outerWidth}px;height: 100px`}>
                <div style={`width: ${innerWidth}px;height: 100px`}></div>
            </Scrollbar>
        ))
        const scrollDom = wrapper.find('.ell-scrollbar__wrap').element
        const offsetWidthRestore = defineGetter(scrollDom, 'offsetWidth', outerWidth)
        const scrollWidthRestore = defineGetter(scrollDom, 'scrollWidth', innerWidth)
        await makeScroll(scrollDom, 'scrollLeft', 100)
        expect(wrapper.find('.is-horizontal div').attributes('style'))
        .toContain('transform: translateX(50%); width: 80px;')
        await makeScroll(scrollDom, 'scrollLeft', 300)
        expect(wrapper.find('.is-horizontal div').attributes('style'))
        .toContain('transform: translateX(150%); width: 80px;')
        offsetWidthRestore()
        scrollWidthRestore()
    })

    test('both vertical and horizontal', async () => {
        const outerWidth = 204
        const innerWidth = 500
        const outerHeight = 204
        const innerHeight = 500
        const wrapper = mount(() => (
            <Scrollbar style={`width: ${outerWidth}px;height: ${outerHeight}px`}>
                <div style={`width: ${innerWidth}px;height: ${innerHeight}px`}></div>
            </Scrollbar>
        ))
        const scrollDom = wrapper.find('.ell-scrollbar__wrap').element
        const offsetWidthRestore = defineGetter(scrollDom, 'offsetWidth', outerWidth)
        const scrollWidthRestore = defineGetter(scrollDom, 'scrollWidth', innerWidth)
        const offsetHeightRestore = defineGetter(scrollDom, 'offsetHeight', outerHeight)
        const scrollHeightRestore = defineGetter(scrollDom, 'scrollHeight', innerHeight)

        await makeScroll(scrollDom, 'scrollLeft', 100)
        await makeScroll(scrollDom, 'scrollTop', 100)
        expect(wrapper.find('.is-horizontal div').attributes('style'))
        .toContain('transform: translateX(50%); width: 80px;')
        expect(wrapper.find('.is-vertical div').attributes('style'))
        .toContain('transform: translateY(50%); height: 80px;')

        await makeScroll(scrollDom, 'scrollLeft', 300)
        await makeScroll(scrollDom, 'scrollTop', 300)
        expect(wrapper.find('.is-horizontal div').attributes('style'))
        .toContain('transform: translateX(150%); width: 80px;')
        expect(wrapper.find('.is-vertical div').attributes('style'))
        .toContain('transform: translateY(150%); height: 80px;')
        offsetWidthRestore()
        scrollWidthRestore()
        offsetHeightRestore()
        scrollHeightRestore()
    })


    test('should render height props', () => {
        const outerHeight = 204
        const innerHeight = 500
        const wrapper = mount(() => (
            <Scrollbar height={`${outerHeight}px`}>
                <div style={`height: ${innerHeight}px;`}></div>
            </Scrollbar>
        ))
        expect(wrapper.find('.ell-scrollbar__wrap').attributes('style')).toContain('height: 204px;')
    })

    test('should render max-height props', () => {
        const outerHeight = 204
        const innerHeight = 500
        const wrapper = mount(() => (
            <Scrollbar max-height={`${outerHeight}px`}>
                <div style={`height: ${innerHeight}px;`}></div>
            </Scrollbar>
        ))
        expect(wrapper.find('.ell-scrollbar__wrap').attributes('style')).toContain('max-height: 204px;')
    })

    test('should render always props', () => {
        const outerHeight = 204
        const innerHeight = 500
        const wrapper = mount(() => (
            <Scrollbar height={`${outerHeight}px`} always>
                <div style={`height: ${innerHeight}px;`}></div>
            </Scrollbar>
        ))
        expect(wrapper.find('.ell-scrollbar__bar').attributes('style')).toBeFalsy()
    })

    test('should render min-size props', async () => {
        const outerHeight = 204
        const innerHeight = 10000
        const wrapper = mount(() => (
            <Scrollbar height={`${outerHeight}px`} always>
                <div style={`height: ${innerHeight}px;`}></div>
            </Scrollbar>
        ))
        const scrollDom = wrapper.find('.ell-scrollbar__wrap').element
        const offsetHeightRestore = defineGetter(scrollDom, 'offsetHeight', outerHeight)
        const scrollHeightRestore = defineGetter(scrollDom, 'scrollHeight', innerHeight)
        await makeScroll(scrollDom, 'scrollTop', 0)
        expect(wrapper.find('.is-vertical div').attributes('style')).toContain(
            'transform: translateY(0%); height: 20px;'
        )
        offsetHeightRestore()
        scrollHeightRestore()
    })

    test('should render tag props', () => {
        const wrapper = mount(() => (
            <Scrollbar tag="ul">
                {
                    [1,2,3].map(item => (
                        <li>{item}</li>
                    ))
                }
            </Scrollbar>
        ))
        expect(wrapper.find('.ell-scrollbar__view').element instanceof HTMLUListElement).toBeTruthy()
    })

    test('should render wrap-style props', () => {
        const wrapStyle = 'background: red;'
        const wrapper = mount(() => <Scrollbar wrap-style={wrapStyle}/>)
        expect(wrapper.find('.ell-scrollbar__wrap').attributes('style')).toContain(wrapStyle)
    })

    test('should render wrap-class props', () => {
        const wrapClass = 'test-wrap-class'
        const wrapper = mount(() => <Scrollbar wrap-class={wrapClass}/>)
        expect(wrapper.find('.ell-scrollbar__wrap').classes()).toContain(wrapClass)
    })


    test('should render view-style props', () => {
        const viewStyle = 'background: red;'
        const wrapper = mount(() => <Scrollbar view-style={viewStyle}/>)
        expect(wrapper.find('.ell-scrollbar__view').attributes('style')).toContain(viewStyle)
    })

    test('should render view-class props', () => {
        const viewClass = 'test-view-class'
        const wrapper = mount(() => <Scrollbar view-class={viewClass}/>)
        expect(wrapper.find('.ell-scrollbar__view').classes()).toContain(viewClass)
    })
})
