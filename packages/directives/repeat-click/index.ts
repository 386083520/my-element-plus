import { ObjectDirective } from "vue"

export const vRepeatClick:ObjectDirective<HTMLElement, Function> = {
    beforeMount(el,binding) {
        console.log(el, binding)
        const value = binding.value
        let intervalId
        const clear = () => {
            if(intervalId) {
                clearInterval(intervalId)
                intervalId = undefined
            }
        }
        el.addEventListener('mousedown', () => {
            value()
            document.addEventListener('mouseup', () => clear())
            intervalId = setInterval(() => {
                value()
            }, 1000)
        })
    }
}
