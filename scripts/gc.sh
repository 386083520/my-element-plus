NAME=$1
FILE_PATH=$(cd "$(dirname ${BASH_SOURCE[0]})/../packages" && pwd)
DIRNAME="$FILE_PATH/components/$NAME"
echo "$FILE_PATH"
mkdir -p "$DIRNAME"
mkdir -p "$DIRNAME/src"