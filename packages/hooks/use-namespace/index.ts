export const defaultNamespace = 'ell'
export const useNamespace = (block:string) => {
    const b = () => {
        return defaultNamespace + "-" + block
    }
    return {
        b
    }
}