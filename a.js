// import b from './b'
console.log('this is a ')

const btn = document.querySelector('#btn')
btn.onclick = () => {
    import(/* webpackChunkName:'b' */'./b').then((module) => { // 设置按需加载文件名称
        const b = module.default;
        b();
    })
}
if (module.hot) {// 开启热替换
    module.hot.accept()
}