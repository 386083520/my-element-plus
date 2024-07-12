import type { Plugin, App } from 'vue'
export function withInstall<T,E extends Record<string, any>>(main:T, extra?:E) {
    (main as Plugin).install = function(app:App) {
        for(const comp of [main, ...Object.values(extra??{})]) {
            app.component((comp as any).name, comp as any)
        }
    }
    return (main as Plugin)
}