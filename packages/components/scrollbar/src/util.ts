import { transform } from "typescript"
import { CSSProperties } from "vue"
import { ThumbProps } from "./thumb"

export const GAP = 4

export const renderThumbStyle = ({size, move}: Pick<ThumbProps, 'size'|'move'>):CSSProperties => ({
    height: size,
    transform: `translateY(${move}%)`
})
