import { buildProps } from "@my-element-plus/utils"

export const RowJustify = [
    'start',
    'center',
    'end',
    'space-around',
    'space-between',
    'space-evenly',
  ] as const

export const rowProps = buildProps({
    gutter: {
        type: Number,
        default: 0
    },
    justify: {
        type: String,
        default: 'start',
        validator: (val:any) => {
            return RowJustify.includes(val)
        }
    },
    align: {
        type: String
    }
})
