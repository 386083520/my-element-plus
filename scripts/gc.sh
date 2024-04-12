NAME=$1
re="[[:space:]]+"
if [ "$#" -ne 1 ] || [[ $NAME =~ $re ]] || [ "$NAME" == "" ];then
    echo "参数错误"
    exit 1
fi    

FILE_PATH=$(cd "$(dirname ${BASH_SOURCE[0]})/../packages" && pwd)
DIRNAME="$FILE_PATH/components/$NAME"

if [ -d "$DIRNAME" ]; then
    echo "$NAME 组件已经存在，请检查"
    exit 1
fi    

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

cat <<EOF >"$DIRNAME/index.ts"
import { withInstall } from "@my-element-plus/utils/install";
import $NAME from "./src/$NAME.vue";
const Ell$NAME  = withInstall($NAME)
export default Ell$NAME
EOF