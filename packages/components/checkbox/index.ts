import { withInstall, withNoopInstall } from "@my-element-plus/utils";
import Checkbox from "./src/checkbox.vue";
import CheckboxGroup from "./src/checkbox-group.vue";
import CheckboxButton from "./src/checkbox-button.vue";
export const EllCheckbox  = withInstall(Checkbox, {
    CheckboxGroup,
    CheckboxButton
})
export const EllCheckboxGroup = withNoopInstall(CheckboxGroup)
export const EllCheckboxButton = withNoopInstall(CheckboxButton)
export default EllCheckbox
