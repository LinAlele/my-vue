# my-vue

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## git commit

``` bash
# git add **

# git commit -M "first commit"

git push -u origin main

```

#### 关于OpenSSL SSL_connect: Connection was reset in connection to github.com:443解决方案
``` bash
## 第一种
# git config --global http.sslBackend "openssl"
# git config --global http.sslCAInfo "C:\Program Files\Git\mingw64\ssl\cert.pem"

## 第二种就是公司不允许访问github 这个时候我们使用VPN将代理设置为7890
# git config --global http.proxy 127.0.0.1:7890
# git config --global https.proxy 127.0.0.1:7890

## 查看代理配置
# git config --global http.proxy #查看git的http代理配置
# git config --global https.proxy #查看git的https代理配置
# git config --global -l #查看git的所有配置
```

