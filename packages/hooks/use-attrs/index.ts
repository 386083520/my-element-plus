import { fromPairs } from "lodash-unified"
import { computed, ComputedRef, getCurrentInstance } from "vue"

interface Params {
    excludeKeys?: ComputedRef<string[]>
}
const DEFAULT_EXCLUDE_KEYS = ['class', 'style']
export const useAttrs = (params: Params = {}) => {
    const { excludeKeys } = params 
    const allExcludeKeys = computed(() => {
        return (excludeKeys?.value || []).concat(DEFAULT_EXCLUDE_KEYS)
    }
    )
    const instance = getCurrentInstance()
    return computed(() => {
        return fromPairs(
            Object.entries(instance.proxy.$attrs).filter(
                ([key]) => !allExcludeKeys.value.includes(key)
            )
        )
    }
    )
}