import { computed, useSlots } from "vue"
export const useButton = (props) => {
    const slots = useSlots()
    const shouldAddSpace = computed(() => {
        const defaultSlot = slots.default?.()
        if(defaultSlot?.length === 1 && props.autoInsertSpace) {
            const slot = defaultSlot[0]
            if(slot?.type === Text) {
                const text = slot.children as string
                return /^\p{Unified_Ideograph}{2}$/u.test(text.trim())
            }
        }
        return false
    })
    const _props = computed(() => {
        if(props.tag === 'button') {
            return {
                disabled: props.disabled || props.loading
            }
        }
        return {}
    })
    return {
        shouldAddSpace,
        _props
    }
}

