import { ComponentResolver } from "unplugin-vue-components/types";

export function MyElementPlusResolver():ComponentResolver {
    return {
        type: 'component',
        resolve: (name:string) => {
            if(name.startsWith('Ell')) {
                return {
                    name,
                    from: '@my-element-plus/components',
                    sideEffects: `@my-element-plus/theme-chalk/src/${name.slice(3).toLowerCase()}.scss`
                }
            }
        }
    }
}