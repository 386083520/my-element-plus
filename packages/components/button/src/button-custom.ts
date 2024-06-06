import { computed } from "vue";
import { TinyColor } from '@ctrl/tinycolor'
import { useNamespace } from "@my-element-plus/hooks";

export function useButtonCustomStyle(props) {
    const ns = useNamespace('button')
    return computed(() => {
        let styles:Record<string,string> = {}
        const buttonColor = props.color
        if(buttonColor) {
            const color = new TinyColor(buttonColor)
            const activeBgColor = color.mix('#141414', 20).toString()
            const hoverBgColor = color.tint(30).toString()
            if(props.plain) {
                styles = ns.cssVarBlock({
                    'bg-color': color.tint(90).toString(),
                    'text-color': buttonColor,
                    'border-color': color.tint(50).toString(),
                    'hover-bg-color': buttonColor,
                    'hover-text-color': '#fff',
                    'hover-border-color': buttonColor,
                    'active-bg-color': activeBgColor,
                    'active-text-color': '#fff',
                    'active-border-color': activeBgColor
                })
            }else {
                styles = ns.cssVarBlock({
                    'bg-color': buttonColor,
                    'text-color': '#fff',
                    'border-color': buttonColor,
                    'hover-bg-color': hoverBgColor,
                    'hover-text-color': '#fff',
                    'hover-border-color': hoverBgColor,
                    'active-bg-color': activeBgColor,
                    'active-text-color': '#fff',
                    'active-border-color': activeBgColor
                })
            }
        }
        return styles
    })
}