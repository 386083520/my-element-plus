import { computed } from "vue";

export function useButtonCustomStyle(props) {
    return computed(() => {
        let styles:Record<string,string> = {}
        const buttonColor = props.color
        if(buttonColor) {
            styles = {
                '--ell-button-bg-color': buttonColor,
                '--ell-button-text-color': '#fff'
            }
        }
        return styles
    })
}