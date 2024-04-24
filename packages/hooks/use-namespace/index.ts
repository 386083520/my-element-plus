export const defaultNamespace = 'ell'
export const useNamespace = (block:string) => {
    const b = () => {
        return _bem(defaultNamespace, block, '')
    }
    const e = (element:string) => {
        return _bem(defaultNamespace, block, element)
    }
    return {
        b,
        e
    }
}
const _bem = (namespace: string, block: string, element:string) =>  {
    let cls = `${namespace}-${block}`
    if(element) {
        cls+=`__${element}`
    }
    return cls
}