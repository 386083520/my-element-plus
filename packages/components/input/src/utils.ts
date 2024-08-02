import { isNumber } from "@my-element-plus/utils"

let hiddenTextarea: HTMLTextAreaElement | undefined = undefined

const CONTEXT_STYLE = [
    'line-height',
    'padding-top',
    'padding-bottom',
    'padding-left',
    'padding-right',
    'font-size',
    'font-weight',
    'width',
    'border-width',
    'box-sizing',
    'box-shadow'
]

type TextAreaHeight = {
    height: string,
    minHeight?: string
}

type NodeStyle = {
    contextStyle: string
}

function calculateNodeStyling(targetElement: Element):NodeStyle {
    const style = window.getComputedStyle(targetElement)
    const contextStyle = CONTEXT_STYLE.map(
        (name) => `${name}: ${style.getPropertyValue(name)}`
    ).join(';')
    return {
        contextStyle
    }
}

export function calcTextareaHeight(
    targetElement: HTMLTextAreaElement,
    minRows:number = 1,
    maxRows?:number
): TextAreaHeight{
    if(!hiddenTextarea) {
        hiddenTextarea = document.createElement('textarea')
        document.body.appendChild(hiddenTextarea)
    }
    hiddenTextarea.value = targetElement.value || targetElement.placeholder || ''
    const {contextStyle}  = calculateNodeStyling(targetElement)
    hiddenTextarea.setAttribute('style', `${contextStyle}`)
    let height = hiddenTextarea.scrollHeight
    const result = {} as TextAreaHeight
    const singleRowHeight = 10
    if(isNumber(minRows)) {
        let minHeight = singleRowHeight * minRows
        result.minHeight = `${minHeight}px`
    }
    if(isNumber(maxRows)) {
        let maxHeight = singleRowHeight * maxRows
        height = Math.min(maxHeight, height)
    }
    result.height = `${height}px`
    return result
}
