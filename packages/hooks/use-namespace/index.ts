export const defaultNamespace = 'ell'
export const statePrefix = 'is-'
export const useNamespace = (block:string) => {
    const b = (blockSuffix='') => {
        return _bem(defaultNamespace, block,blockSuffix, '', '')
    }
    const e = (element:string) => {
        return _bem(defaultNamespace, block,'', element, '')
    }
    const em =(element:string, modifier:string) => {
        return _bem(defaultNamespace, block,'', element, modifier)
    }
    const is = (name:string, ...args:[boolean|undefined]|[]) => {
        const isState = args.length >=1 ? args[0]:true
        return isState? `${statePrefix}${name}`:''
    }
    return {
        b,
        e,
        em,
        is
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
