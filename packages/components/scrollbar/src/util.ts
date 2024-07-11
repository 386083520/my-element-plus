import { transform } from "typescript"
import { CSSProperties } from "vue"
import { ThumbProps } from "./thumb"

export const GAP = 4

export const BAR_MAP = {
    vertical: {
        key: 'vertical',
        size: 'height',
        axis: 'Y'
    },
    horizontal: {
        key: 'horizontal',
        size: 'width',
        axis: 'X'
    }
}

export const renderThumbStyle = ({size, move, bar}:
    Pick<ThumbProps, 'size'|'move'> & {
        bar: typeof BAR_MAP[keyof typeof BAR_MAP]
    }):CSSProperties => ({
    [bar.size]: size,
    transform: `translate${bar.axis}(${move}%)`
})
