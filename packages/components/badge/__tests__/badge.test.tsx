import { describe, test,expect } from "vitest"
import { mount } from '@vue/test-utils'
import { nextTick, ref } from 'vue'
import Badge from "../src/badge.vue"
const AXIOM = 'rem is the best girl'
describe('Badge', () => {
    test('has value', () => {
        const wrapper = mount(() => <Badge value={80}/>)
        expect(wrapper.find(".ell-badge__content").text()).toEqual('80')
    })
    test('is fixed', () => {
        const wrapper = mount(() => (
            <Badge
            v-slots={{
                default: () => AXIOM
            }}
            />
        ))
        expect(wrapper.find('.ell-badge').text()).toBe(AXIOM)
        expect(wrapper.find('.ell-badge__content.is-fixed').exists()).toBe(true)
    })
    test('is dot', () => {
        const wrapper = mount(() => (
            <Badge
            isDot={true}
            v-slots={{
                default: () => AXIOM
            }}
            />
        ))
        expect(wrapper.find('.ell-badge__content.is-dot').exists()).toBe(true)
        expect(wrapper.find('.ell-badge__content.ell-badge__content--danger').exists()).toBe(true)
    })
    test('is dot with type', () => {
        const wrapper = mount(() => (
            <Badge
            isDot={true}
            type={'success'}
            v-slots={{
                default: () => AXIOM
            }}
            />
        ))
        expect(wrapper.find('.ell-badge__content.is-dot').exists()).toBe(true)
        expect(wrapper.find('.ell-badge__content.ell-badge__content--success').exists()).toBe(true)
    })
    test('max', async ()=> {
        const badgeValue = ref(120)
        const wrapper = mount(() => (
            <Badge
            max={100}
            value={badgeValue.value}
            v-slots={{
                default: () => AXIOM
            }}
            />
        ))
        expect(wrapper.find('.ell-badge__content').text()).toBe('100+')
        badgeValue.value = 80
        await nextTick()
        expect(wrapper.find('.ell-badge__content').text()).toBe('80')
    })
    test('showZero', async () => {
        const showZero = ref(true)
        const badgeValue = ref(0)
        const wrapper = mount(() => (
            <Badge
            showZero={showZero.value}
            value={badgeValue.value}
            v-slots={{
                default: () => AXIOM
            }}
            />
        ))
        expect(wrapper.find('.ell-badge__content').text()).toBe('0')
        badgeValue.value=80
        await nextTick()
        expect(wrapper.find('.ell-badge__content').text()).toBe('80')
        showZero.value = false
        badgeValue.value=0
        await nextTick()
        expect(wrapper.find('.ell-badge__content').text()).toBe('')
        badgeValue.value=80
        await nextTick()
        expect(wrapper.find('.ell-badge__content').text()).toBe('80')
    })
})
