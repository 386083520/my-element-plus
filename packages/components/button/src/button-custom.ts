import { computed } from "vue";
import { TinyColor } from '@ctrl/tinycolor'

export function useButtonCustomStyle(props) {
    return computed(() => {
        let styles:Record<string,string> = {}
        const buttonColor = props.color
        if(buttonColor) {
            const color = new TinyColor(buttonColor)
            const activeBgColor = color.mix('#141414', 20).toString()
            const hoverBgColor = color.tint(30).toString()
            styles = {
                '--ell-button-bg-color': buttonColor,
                '--ell-button-text-color': '#fff',
                '--ell-button-border-color': buttonColor,
                '--ell-button-hover-bg-color': hoverBgColor,
                '--ell-button-hover-text-color': '#fff',
                '--ell-button-hover-border-color': hoverBgColor,
                '--ell-button-active-bg-color': activeBgColor,
                '--ell-button-active-text-color': '#fff',
                '--ell-button-active-border-color': activeBgColor
            }
        }
        return styles
    })
}