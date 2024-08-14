import { withInstall, withNoopInstall } from "@my-element-plus/utils";
import Radio from "./src/radio.vue";
import RadioGroup from "./src/radio-group.vue";
export const EllRadio  = withInstall(Radio, {
    RadioGroup
})
export const EllRadioGroup = withNoopInstall(RadioGroup)
export default EllRadio
