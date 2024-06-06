export const defaultNamespace = 'ell'
export const statePrefix = 'is-'
export const useNamespace = (block:string) => {
    const b = (blockSuffix='') => {
        return _bem(defaultNamespace, block,blockSuffix, '', '')
    }
    const e = (element:string) => {
        return _bem(defaultNamespace, block,'', element, '')
    }
    const m =(modifier?:string) => modifier?  _bem(defaultNamespace, block,'', '', modifier) : ''
    
    const em =(element:string, modifier:string) => {
        return _bem(defaultNamespace, block,'', element, modifier)
    }
    const is = (name:string, ...args:[boolean|undefined]|[]) => {
        const isState = args.length >=1 ? args[0]:true
        return isState? `${statePrefix}${name}`:''
    }
    const cssVarBlock = (object: Record<string,string>) => {
        let styles:Record<string,string> = {}
        for(const key in object) {
            if(object[key]) {
                styles[`--${defaultNamespace}-${block}-${key}`] = object[key]
            }
        }
        return styles
    }
    return {
        b,
        e,
        m,
        em,
        is,
        cssVarBlock
    }
}
const _bem = (namespace: string, block: string, blockSuffix:string, element:string, modifier:string) =>  {
    let cls = `${namespace}-${block}`
    if(element) {
        cls+=`__${element}`
    }
    if(blockSuffix) {
        cls += `-${blockSuffix}`
    }
    if(modifier) {
        cls += `--${modifier}`
    }
    return cls
}
