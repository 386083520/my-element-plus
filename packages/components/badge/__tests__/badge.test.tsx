import { describe, test,expect } from "vitest"
import { mount } from '@vue/test-utils'
import Badge from "../src/badge.vue"
describe('Badge', () => {
    test('has value', () => {
        mount(() => <Badge value={80}/>)
    })
})
