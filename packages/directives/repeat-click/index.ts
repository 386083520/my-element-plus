import { ObjectDirective } from "vue"

export const vRepeatClick:ObjectDirective<HTMLElement, Function> = {
    beforeMount(el,binding) {
        console.log(el, binding)
        const value = binding.value
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
            value()
            document.addEventListener('mouseup', () => clear())
            delayId = setTimeout(() => {
                intervalId = setInterval(() => {
                    value()
                }, 100)
            }, 2000)
        })
    }
}
