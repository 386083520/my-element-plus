import { buildProps, isArray, isFragment, isNumber, isValideElementNode, PatchFlags } from "@my-element-plus/utils";

import { createTextVNode, createVNode, defineComponent, ExtractPropTypes, isVNode, renderSlot, VNode, VNodeArrayChildren } from "vue";
import { useSpace } from "./use-space";
import Item from './item'
import { componentSizes } from "@my-element-plus/constants";


export const spaceProps = buildProps({
    direction: {
        type: String,
        values: ['horizontal', 'vertical'],
        default: 'horizontal'
    },
    size: {
        type: [String, Number, Array],
        values: componentSizes,
        validator: (val: unknown):val is number|[number,number] => {
            return (
                isNumber(val) || (isArray(val) && val.length === 2 && val.every(isNumber))
            )
        }
    },
    wrap: Boolean,
    spacer: {
        type: [String, Number, Object],
        default: null
    },
    alignment: {
        type: String,
        default: 'center'
    },
    fill: Boolean,
    fillRatio: {
        type: Number,
        default: 100
    },
    class: {
        type: [String, Object, Array],
        default: ''
    },
    prefixCls: {
        type: String
    }
})

export type SpaceProps = ExtractPropTypes<typeof spaceProps>

const Space = defineComponent({
    name: 'EllSpace',
    props: spaceProps,
    setup(props, { slots }) {
        const { classes, containerStyle, itemStyle } = useSpace(props)
        function extractChildren(children: VNodeArrayChildren) {
            let extractedChildren:VNode[] = []
            const { prefixCls } = props
            children.forEach((child, loopKey) => {
                if(isFragment(child)) {
                    if(isArray(child.children)) {
                        child.children.forEach((nested, key) => {
                            extractedChildren.push(
                                createVNode(
                                    Item,
                                    {
                                        style: itemStyle.value,
                                        prefixCls,
                                        key: `nested-${key}`
                                    },
                                    {default: () => [nested]},
                                    PatchFlags.PROPS | PatchFlags.STYLE,
                                    ['style', 'prefixCls']
                                )
                            )
                        })
                    }
                } else if(isValideElementNode(child)) {
                    extractedChildren.push(
                        createVNode(
                            Item, 
                            {
                                style: itemStyle.value,
                                prefixCls,
                                key: `LoopKey${loopKey}`
                            }, 
                            {default: () => [child]},
                            PatchFlags.PROPS | PatchFlags.STYLE,
                            ['style', 'prefixCls']
                        )
                    )
                }
            })
            return extractedChildren
        }
        return () => {
            const { spacer } = props
            const children = renderSlot(slots, 'default', {key: 0 }, () => [])
            console.log(children)
            if(isArray(children.children)) {
                let extractedChildren = extractChildren(children.children)
                if(spacer) {
                    const len = extractedChildren.length - 1
                    extractedChildren = extractedChildren.reduce<VNode[]>(
                        (acc, child, idx) => {
                            const children = [...acc, child]
                            if(idx !== len) {
                                children.push(
                                    createVNode(
                                        'span',
                                        {
                                            style: itemStyle.value,
                                            key: idx
                                        },
                                        [
                                            isVNode(spacer) ? spacer: createTextVNode(spacer as string, PatchFlags.TEXT)
                                        ],
                                        PatchFlags.STYLE
                                    )
                                )
                            }
                            return children
                        },
                        []
                    )
                }
                return createVNode(
                    'div',
                    {
                        class: classes.value,
                        style: containerStyle.value
                    },
                    extractedChildren,
                    PatchFlags.STYLE | PatchFlags.CLASS
                )
            }
        }
    }
})

export default Space
