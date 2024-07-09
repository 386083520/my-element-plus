import { buildProps } from '@my-element-plus/utils'
import type Bar from './bar.vue'
export const barProps = buildProps({
    always: {
        type: Boolean,
        default: true
    }
})
export type BarInstance = InstanceType<typeof Bar>