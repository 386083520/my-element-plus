import sleep from './sleep'
const makeScroll = (dom:Element, name: 'scrollTop'|'scrollLeft', offset: number) => {
    const eventTarget = dom
    dom[name] = offset
    return sleep()
}

export default makeScroll