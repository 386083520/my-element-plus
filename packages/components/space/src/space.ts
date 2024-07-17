import { buildProps, isArray, isFragment, isValideElementNode } from "@my-element-plus/utils";

import { createVNode, defineComponent, ExtractPropTypes, renderSlot, VNode, VNodeArrayChildren } from "vue";
import { useSpace } from "./use-space";
import Item from './item'

export const spaceProps = buildProps({
    direction: {
        type: String,
        values: ['horizontal', 'vertical'],
        default: 'horizontal'
    }
})

export type SpaceProps = ExtractPropTypes<typeof spaceProps>

const Space = defineComponent({
    name: 'EllSpace',
    props: spaceProps,
    setup(props, { slots }) {
        const { classes, containerStyle } = useSpace(props)
        function extractChildren(children: VNodeArrayChildren) {
            let extractedChildren:VNode[] = []
            children.forEach(child => {
                if(isFragment(child)) {
                    if(isArray(child.children)) {
                        child.children.forEach(nested => {
                            extractedChildren.push(
                                createVNode(
                                    Item,
                                    {},
                                    {default: () => [nested]}
                                )
                            )
                        })
                    }
                } else if(isValideElementNode(child)) {
                    extractedChildren.push(
                        createVNode(Item, {}, {default: () => [child]})
                    )
                }
            })
            return extractedChildren
        }
        return () => {
            const children = renderSlot(slots, 'default', {key: 0 }, () => [])
            console.log(children)
            if(isArray(children.children)) {
                return createVNode(
                    'div',
                    {
                        class: classes.value,
                        style: containerStyle.value
                    },
                    extractChildren(children.children)
                )
            }
        }
    }
})

export default Space