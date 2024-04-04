import { Plugin } from 'vue'
export function withInstall(comp) {
    (comp as Plugin).install = function(app) {
        app.component(comp.name, comp)
    }
    return (comp as Plugin)
}