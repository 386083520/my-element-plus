NAME=$1
re="[[:space:]]+"
if [ "$#" -ne 1 ] || [[ $NAME =~ $re ]] || [ "$NAME" == "" ];then
    echo "参数错误"
    exit 1
fi

FILE_PATH=$(cd "$(dirname ${BASH_SOURCE[0]})/../packages" && pwd)
DIRNAME="$FILE_PATH/components/$NAME"
INPUT_NAME=$NAME

if [ -d "$DIRNAME" ]; then
    echo "$NAME 组件已经存在，请检查"
    exit 1
fi

NORMALIZED_NAME=""
for i in $(echo $NAME | sed 's/[_|-]\([a-z]\)/\ \1/;s/^\([a-z]\)/\ \1/'); do
  C=$(echo "${i:0:1}" | tr "[:lower:]" "[:upper:]")
  NORMALIZED_NAME="$NORMALIZED_NAME${C}${i:1}"
done
NAME=$NORMALIZED_NAME
echo "$NAME"

echo "$FILE_PATH"
mkdir -p "$DIRNAME"
mkdir -p "$DIRNAME/src"

cat > $DIRNAME/src/$INPUT_NAME.vue <<EOF
<template>
    <div>
        <slot/>
    </div>
</template>

<script lang="ts" setup>
import { ${INPUT_NAME}Props } from './${INPUT_NAME}'
defineOptions({
    name: 'Ell${NAME}'
})
</script>
EOF

cat > $DIRNAME/src/$INPUT_NAME.ts <<EOF
import { buildProps } from "@my-element-plus/utils"
export const ${INPUT_NAME}Props = buildProps({})
EOF

cat <<EOF >"$DIRNAME/index.ts"
import { withInstall } from "@my-element-plus/utils";
import $NAME from "./src/$INPUT_NAME.vue";
const Ell$NAME  = withInstall($NAME)
export default Ell$NAME
EOF
