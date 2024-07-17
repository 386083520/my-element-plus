import { computed, CSSProperties } from "vue";
import { SpaceProps } from "./space";
import { useNamespace } from "@my-element-plus/hooks";

export function useSpace(props: SpaceProps) {
    const ns = useNamespace('space')
    const classes = computed(() => [ns.b(), ns.m(props.direction)])
    const containerStyle = computed(() => {
        const gap:CSSProperties = {
            rowGap: '8px',
            columnGap: '8px'
        }
        return [gap]
    })
    return {
        classes,
        containerStyle
    }
}