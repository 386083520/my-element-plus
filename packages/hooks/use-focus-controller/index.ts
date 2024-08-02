import { getCurrentInstance, ref } from "vue"

export function useFocusController() {
    const instance = getCurrentInstance()
    const { emit } = instance
    const isFocused = ref(false)
    const handleFocus = (event: FocusEvent) => {
        if (isFocused.value) return
        isFocused.value = true
        emit('blur', event)
    }
    const handleBlur = (event: FocusEvent) => {
        isFocused.value = false
        emit('blur', event)
    }
    return {
        isFocused,
        handleFocus,
        handleBlur
    }
}