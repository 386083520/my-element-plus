import { Plugin } from "vue"

export const makeInstaller =  (components:Plugin[] = []) => {
    const install = (app) => {
        components.forEach(c => app.use(c))
    }
    return {
        install
    }
}