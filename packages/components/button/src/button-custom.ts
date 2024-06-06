import { computed } from "vue";
import { TinyColor } from '@ctrl/tinycolor'
import { useNamespace } from "@my-element-plus/hooks";

export function darken(color:TinyColor, amount=20) {
    return color.mix('#141414', amount).toString()
}

export function useButtonCustomStyle(props) {
    const ns = useNamespace('button')
    return computed(() => {
        let styles:Record<string,string> = {}
        const buttonColor = props.color
        if(buttonColor) {
            const color = new TinyColor(buttonColor)
            const activeBgColor = props.dark?color.tint(20).toString():darken(color,20)
            const hoverBgColor = props.dark? darken(color,30): color.tint(30).toString()
            const textColor =  props.dark ? 'rgba(255,255,255,0.5)': '#fff'
            if(props.plain) {
                styles = ns.cssVarBlock({
                    'bg-color': props.dark? darken(color,90): color.tint(90).toString(),
                    'text-color': buttonColor,
                    'border-color': props.dark? darken(color,50): color.tint(50).toString(),
                    'hover-bg-color': buttonColor,
                    'hover-text-color': textColor,
                    'hover-border-color': buttonColor,
                    'active-bg-color': activeBgColor,
                    'active-text-color': textColor,
                    'active-border-color': activeBgColor
                })
                if(props.disabled) {
                    styles[ns.cssVarBlockName('disabled-bg-color')] = props.dark ? darken(color,90): color.tint(90).toString()
                    styles[ns.cssVarBlockName('disabled-text-color')] = props.dark ? darken(color,50): color.tint(50).toString()
                    styles[ns.cssVarBlockName('disabled-border-color')] = props.dark ? darken(color,80): color.tint(80).toString()
                }
            }else {
                styles = ns.cssVarBlock({
                    'bg-color': buttonColor,
                    'text-color': textColor,
                    'border-color': buttonColor,
                    'hover-bg-color': hoverBgColor,
                    'hover-text-color': textColor,
                    'hover-border-color': hoverBgColor,
                    'active-bg-color': activeBgColor,
                    'active-text-color': textColor,
                    'active-border-color': activeBgColor
                })
                if(props.disabled) {
                    const disabledButtonColor = props.dark? darken(color,50):color.tint(50).toString()
                    styles[ns.cssVarBlockName('disabled-bg-color')] = disabledButtonColor
                    styles[ns.cssVarBlockName('disabled-text-color')] = textColor
                    styles[ns.cssVarBlockName('disabled-border-color')] = disabledButtonColor

                }
            }
        }
        return styles
    })
}