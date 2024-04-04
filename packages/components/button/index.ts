import Button from './src/button.vue'
const MyButton = withInstall(Button)
import { Plugin } from 'vue'
function withInstall(comp) {
    (comp as Plugin).install = function(app) {
        app.component(comp.name, comp)
    }
    return (comp as Plugin)
}
export default MyButton