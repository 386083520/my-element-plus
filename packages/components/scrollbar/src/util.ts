import { transform } from "typescript"

export const GAP = 4

export const renderThumbStyle = ({size, move}) => ({
    height: size,
    transform: `translateY(${move}%)`
})
