<template>
    <label  :class="ns.b()">
        <span :class="spanKls">
            <input
                type="checkbox"
                :class="ns.e('original')"
                v-model="model"
                />
            <span :class="ns.e('inner')"></span>
        </span>
        <span :class="ns.e('label')">
            <slot/>
        </span>
    </label>
</template>

<script lang="ts" setup>
import { checkboxProps } from './checkbox'
import { useNamespace } from '@my-element-plus/hooks';
import { checkboxEmits } from './checkbox';
import { UPDATE_MODEL_EVENT } from '@my-element-plus/constants';
import { computed } from 'vue';
import { useCheckbox } from './composables/use-checkbox';
defineOptions({
    name: 'EllCheckbox'
})
const ns = useNamespace('checkbox')
const props = defineProps(checkboxProps)
const emit = defineEmits(checkboxEmits)
function handleChange(e) {
    emit(UPDATE_MODEL_EVENT, e.target.checked)
}

const { model, isChecked } = useCheckbox(props)

const spanKls = computed(() => {
    return [
        ns.e('input'),
        ns.is('checked', isChecked.value)
    ]
})
</script>
