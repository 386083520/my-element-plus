NAME=$1
FILE_PATH=$(cd "$(dirname ${BASH_SOURCE[0]})/../packages" && pwd)
DIRNAME="$FILE_PATH/components/$NAME"
echo "$FILE_PATH"
mkdir -p "$DIRNAME"
mkdir -p "$DIRNAME/src"

cat > $DIRNAME/src/$NAME.vue <<EOF
<template>
    <div>
        <slot/>
    </div>
</template>

<script lang="ts" setup>
import { ${NAME}Props } from './${NAME}'
defineOptions({
    name: 'Ell${NAME}'
})    
</script>
EOF

cat > $DIRNAME/src/$NAME.ts <<EOF
import { buildProps } from "@my-element-plus/utils/vue/props/runtime"
export const ${NAME}Props = buildProps({})
EOF