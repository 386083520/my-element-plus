export const defaultNamespace = 'ell'
export const statePrefix = 'is-'
export const useNamespace = (block:string) => {
    const b = () => {
        return _bem(defaultNamespace, block, '', '')
    }
    const e = (element:string) => {
        return _bem(defaultNamespace, block, element, '')
    }
    const em =(element:string, modifier:string) => {
        return _bem(defaultNamespace, block, element, modifier)
    }
    const is = (name:string, state?:boolean) => {
        const isState = state?state:true
        return isState? `${statePrefix}${name}`:''
    }
    return {
        b,
        e,
        em,
        is
    }
}
const _bem = (namespace: string, block: string, element:string, modifier:string) =>  {
    let cls = `${namespace}-${block}`
    if(element) {
        cls+=`__${element}`
    }
    if(modifier) {
        cls += `--${modifier}`
    }
    return cls
}