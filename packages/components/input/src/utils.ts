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

const HIDDEN_STYLE = `
    height:0;
    visibility:hidden;
    z-index:-1000;
    position:absolute;
    top:0;
    right:0;
`

type TextAreaHeight = {
    height: string,
    minHeight?: string
}

type NodeStyle = {
    contextStyle: string,
    boxSizing: string,
    paddingSize: number,
    borderSize: number
}

function calculateNodeStyling(targetElement: Element):NodeStyle {
    const style = window.getComputedStyle(targetElement)
    const boxSizing = style.getPropertyValue('box-sizing')
    const paddingSize = Number.parseFloat(style.getPropertyValue('padding-bottom')) +
                        Number.parseFloat(style.getPropertyValue('padding-top'))
    const borderSize = Number.parseFloat(style.getPropertyValue('border-bottom-width')) +
                        Number.parseFloat(style.getPropertyValue('border-top-width'))
    const contextStyle = CONTEXT_STYLE.map(
        (name) => `${name}: ${style.getPropertyValue(name)}`
    ).join(';')
    return {
        contextStyle,
        boxSizing,
        paddingSize,
        borderSize
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
    const {contextStyle,boxSizing,paddingSize,borderSize}  = calculateNodeStyling(targetElement)
    console.log(boxSizing, paddingSize, borderSize)
    hiddenTextarea.setAttribute('style', `${contextStyle};${HIDDEN_STYLE}`)
    let height = hiddenTextarea.scrollHeight
    const result = {} as TextAreaHeight

    if(boxSizing === 'border-box') {
        height = height + borderSize
    }else if(boxSizing === 'content-box') {
        height = height - paddingSize
    }
    hiddenTextarea.value = ''
    const singleRowHeight = hiddenTextarea.scrollHeight - paddingSize
    if(isNumber(minRows)) {
        let minHeight = singleRowHeight * minRows
        if(boxSizing === 'border-box') {
            minHeight = minHeight + paddingSize + borderSize
        }
        result.minHeight = `${minHeight}px`
    }
    if(isNumber(maxRows)) {
        let maxHeight = singleRowHeight * maxRows
        if(boxSizing === 'border-box') {
            maxHeight = maxHeight + paddingSize + borderSize
        }
        height = Math.min(maxHeight, height)
    }
    result.height = `${height}px`
    hiddenTextarea.parentNode?.removeChild(hiddenTextarea)
    hiddenTextarea = undefined
    return result
}
