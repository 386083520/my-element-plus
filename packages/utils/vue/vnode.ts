import { Comment, Fragment, isVNode, VNode } from "vue";

export enum PatchFlags {
    TEXT = 1,
    CLASS = 2,
    STYLE = 4,
    PROPS = 8
}

export function isFragment(node: VNode): boolean
export function isFragment(node: unknown): node is VNode
export function isFragment(node: unknown): node is VNode {
    return isVNode(node) && node.type === Fragment
}

export function isComment(node: VNode): boolean
export function isComment(node: unknown): node is VNode
export function isComment(node: unknown): node is VNode {
    return isVNode(node) && node.type === Comment
}

export function isValideElementNode(node: VNode): boolean
export function isValideElementNode(node: unknown): node is VNode
export function isValideElementNode(node: unknown): node is VNode {
    return isVNode(node) && !isFragment(node) && !isComment(node)
}


