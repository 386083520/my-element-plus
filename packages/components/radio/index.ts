import { withInstall, withNoopInstall } from "@my-element-plus/utils";
import Radio from "./src/radio.vue";
import RadioGroup from "./src/radio-group.vue";
import RadioButton from "./src/radio-button.vue";
export const EllRadio  = withInstall(Radio, {
    RadioGroup,
    RadioButton
})
export const EllRadioGroup = withNoopInstall(RadioGroup)
export const EllRadioButton = withNoopInstall(RadioButton)
export default EllRadio
