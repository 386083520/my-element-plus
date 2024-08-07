import { describe, test,expect } from "vitest"
import { mount } from '@vue/test-utils'
import Icon from "../src/icon.vue"
describe('Icon', () =>  {
    test('render', () => {
        const wrapper = mount(() => <Icon color="#000000" size={18}/>)
        expect(wrapper.element.getAttribute('style')).toContain('font-size: 18px')
        expect(wrapper.element.getAttribute('style')).toContain('--color: #000000')
    })
})