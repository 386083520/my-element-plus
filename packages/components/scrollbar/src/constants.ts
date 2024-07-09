import { InjectionKey } from "vue";

export interface ScrollbarContext {
    wrapElement: HTMLDivElement,
    scrollbarElement: HTMLDivElement
}

export const scrollbarContextKey: InjectionKey<ScrollbarContext> = Symbol('scrollbarContextKey')
