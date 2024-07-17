import { computed, CSSProperties, ref, watchEffect } from "vue";
import { SpaceProps } from "./space";
import { useNamespace } from "@my-element-plus/hooks";
import { isNumber } from "@my-element-plus/utils";

const SIZE_MAP = {
    small: 8,
    default: 12,
    large: 16
}

export function useSpace(props: SpaceProps) {
    const ns = useNamespace('space')
    const horizontalSize = ref(0)
    const verticalSize = ref(0)
    const classes = computed(() => [ns.b(), ns.m(props.direction)])
    const containerStyle = computed(() => {
        const gap:CSSProperties = {
            rowGap: `${verticalSize.value}px`,
            columnGap: `${horizontalSize.value}px`
        }
        return [gap]
    })
    watchEffect(() => {
        const { size = 'small', direction: dir } = props
        let val:number
        if(isNumber(size)) {
            val = size
        }else {
            val = SIZE_MAP[size]
        }
        
        if(dir === 'horizontal') {
            horizontalSize.value = val
            verticalSize.value = 0
        }else {
            horizontalSize.value = 0
            verticalSize.value = val
        }
    })
    return {
        classes,
        containerStyle
    }
}