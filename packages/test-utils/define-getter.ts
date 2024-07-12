import { isFunction, isUndefined } from "lodash-unified"

const defineGetter = (
    obj: Record<string, any>,
    prop: string,
    value: any,
    defaultValue?: any
) => {
    let oldValue = defaultValue
    const {get} = Object.getOwnPropertyDescriptor(obj, prop) || {}
    if(isUndefined(get) && isUndefined(defaultValue)) {
        try {
            oldValue = obj[prop]
        }catch {
            throw new Error(
                `TypeError: Illegal invocation. Cannot read ${prop} of '${obj}', '${obj}' might be a prototype,  please specify default value instead.`
            )
        }
    }
    const getter = isFunction(value) ? value: () => value
    const oldGetter = get ?? (() => oldValue)
    Object.defineProperty(obj, prop, {
        configurable: true,
        get: getter
    })
    return () => {
        Object.defineProperty(obj, prop, {
            get: oldGetter
        })
    }
}

export default defineGetter