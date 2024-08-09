import { isFunction } from "@my-element-plus/utils"
import { ObjectDirective } from "vue"

export const REPEAT_INTERVAL = 100
export const REPEAT_DELAY = 600

export interface RepeatClickOptions {
    interval?: number,
    delay?: number,
    handler: (...args: unknown[]) => unknown
}

export const vRepeatClick:ObjectDirective<HTMLElement, RepeatClickOptions|RepeatClickOptions['handler']> = {
    beforeMount(el,binding) {
        console.log(el, binding)
        const value = binding.value
        const {interval = REPEAT_INTERVAL, delay = REPEAT_DELAY} = isFunction(value) ? {} : value
        const handler = () => (isFunction(value) ? value(): value.handler())
        let intervalId,delayId
        const clear = () => {
            if(delayId) {
                clearTimeout(delayId)
                delayId = undefined
            }
            if(intervalId) {
                clearInterval(intervalId)
                intervalId = undefined
            }
        }
        el.addEventListener('mousedown', (evt: MouseEvent) => {
            if(evt.button !== 0) return
            clear()
            handler()
            document.addEventListener('mouseup', () => clear(), {once: true})
            delayId = setTimeout(() => {
                intervalId = setInterval(() => {
                    handler()
                }, interval)
            }, delay)
        })
    }
}
