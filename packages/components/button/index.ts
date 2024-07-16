import Button from './src/button.vue'
import ButtonGroup from './src/button-group.vue'
import { withInstall, withNoopInstall } from '@my-element-plus/utils'
export const EllButton = withInstall(Button, {
    ButtonGroup
})

export const EllButtonGroup = withNoopInstall(ButtonGroup)

export default EllButton
