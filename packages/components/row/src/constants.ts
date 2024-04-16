import type { InjectionKey, ComputedRef } from "vue"
interface RowContext {
    gutter: ComputedRef<number>
}
export  const rowContextKey: InjectionKey<RowContext> = Symbol("rowContextKey")