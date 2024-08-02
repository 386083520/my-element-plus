let hiddenTextarea: HTMLTextAreaElement | undefined = undefined

type TextAreaHeight = {
    height: string
}

export function calcTextareaHeight(targetElement: HTMLTextAreaElement): TextAreaHeight{
    if(!hiddenTextarea) {
        hiddenTextarea = document.createElement('textarea')
        document.body.appendChild(hiddenTextarea)
    }
    hiddenTextarea.value = targetElement.value || targetElement.placeholder || ''
    let height = hiddenTextarea.scrollHeight
    const result = {} as TextAreaHeight
    result.height = `${height}px`
    return result
}