import { ref } from "vue"

export function useFocusController() {
    const isFocused = ref(false)
    const handleFocus = (event: FocusEvent) => {
        if (isFocused.value) return
        isFocused.value = true
    }
    const handleBlur = (event: FocusEvent) => {
        isFocused.value = false
    }
    return {
        isFocused,
        handleFocus,
        handleBlur
    }
}