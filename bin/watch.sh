DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

echo '--------------'
echo 'Watching'
echo '--------------'

cd $DIR/../

node --harmony ./node_modules/webpack/bin/webpack.js --watch --config ./webpack.config.js