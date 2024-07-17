import { buildProps, isArray } from "@my-element-plus/utils";

import { createVNode, defineComponent, ExtractPropTypes, renderSlot, VNode, VNodeArrayChildren } from "vue";
import { useSpace } from "./use-space";

export const spaceProps = buildProps({

})

export type SpaceProps = ExtractPropTypes<typeof spaceProps>

const Space = defineComponent({
    name: 'EllSpace',
    props: spaceProps,
    setup(props, { slots }) {
        const { classes } = useSpace(props)
        function extractChildren(children: VNodeArrayChildren) {
            let extractedChildren:VNode[] = []
            children.forEach(child => {
                extractedChildren.push(
                    createVNode('div', {class: 'ell-space__item'}, {default: () => [child]})
                )
            })
            return extractedChildren
        }
        return () => {
            const children = renderSlot(slots, 'default', {key: 0 }, () => [])
            console.log(children)
            if(isArray(children.children)) {
                return createVNode(
                    'div',
                    {class: classes.value},
                    extractChildren(children.children)
                )
            }
        }
    }
})

export default Space