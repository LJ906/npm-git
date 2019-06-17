import Hello from './Hello.vue'


const npmGit = {
    install,
    Hello
}

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(install)
}


function install(Vue) {
    if (install.installed) {
        return
    }

    Vue.component('Hello', Hello)

}

export default npmGit