import { buildProps, isArray } from "@my-element-plus/utils";

import { createVNode, defineComponent, renderSlot } from "vue";

export const spaceProps = buildProps({

})

const Space = defineComponent({
    name: 'EllSpace',
    props: spaceProps,
    setup(props, { slots }) {
        return () => {
            const children = renderSlot(slots, 'default', {key: 0 }, () => [])
            console.log(children)
            if(isArray(children.children)) {
                return createVNode(
                    'div',
                    {class: 'ell-space'},
                    [
                        createVNode('div', {class: 'ell-space__item'}, 'card1'),
                        createVNode('div', {class: 'ell-space__item'}, 'card2'),
                        createVNode('div', {class: 'ell-space__item'}, 'card3')
                    ]
                )
            }
        }
    }
})

export default Space