import { InjectionKey } from "vue";

export interface ScrollbarContext {
    wrapElement: HTMLDivElement|undefined
}

export const scrollbarContextKey: InjectionKey<ScrollbarContext> = Symbol('scrollbarContextKey')