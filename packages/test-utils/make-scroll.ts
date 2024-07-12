import sleep from './sleep'
const makeScroll = (dom:Element, name: 'scrollTop'|'scrollLeft', offset: number) => {
    const eventTarget = dom
    dom[name] = offset
    const evt = new CustomEvent('scroll', {})
    eventTarget.dispatchEvent(evt)
    return sleep()
}

export default makeScroll
