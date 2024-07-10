import { buildProps } from '@my-element-plus/utils'
import type Bar from './bar.vue'
export const barProps = buildProps({
    always: {
        type: Boolean,
        default: true
    },
    minSize: {
        type: Number,
        required: true
    }
})
export type BarInstance = InstanceType<typeof Bar>
