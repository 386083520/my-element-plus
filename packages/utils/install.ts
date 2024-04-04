import type { Plugin, App } from 'vue'
export function withInstall<T>(comp:T) {
    (comp as Plugin).install = function(app:App) {
        app.component((comp as any).name, comp as any)
    }
    return (comp as Plugin)
}