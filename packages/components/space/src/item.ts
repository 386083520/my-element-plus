import { useNamespace } from "@my-element-plus/hooks";
import { buildProps } from "@my-element-plus/utils";
import { computed, defineComponent, renderSlot } from "vue";
import { h } from 'vue'

export const spaceItemProps = buildProps({

})

const SpaceItem = defineComponent({
    name: 'EllSpaceItem',
    props: spaceItemProps,
    setup(props, { slots }) {
        const ns = useNamespace('space')
        const classes = computed(() => ns.e('item'))
        return () => {
            return h('div', {class: classes.value}, renderSlot(slots, 'default'))
        }
    }
})
export default SpaceItem