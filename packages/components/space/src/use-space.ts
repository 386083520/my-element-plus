import { computed } from "vue";
import { SpaceProps } from "./space";
import { useNamespace } from "@my-element-plus/hooks";

export function useSpace(props: SpaceProps) {
    const ns = useNamespace('space')
    const classes = computed(() => [ns.b()])
    return {
        classes
    }
}