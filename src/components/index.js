import Hello from './Hello.vue'
import Bag1 from './Bag1.vue'

const npmGit = {
    install,
    Hello,
    Bag1
}

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(install)
}

function install(Vue) {
    if (install.installed) {
        return
    }

    Vue.component('Hello', Hello)
    Vue.component('Bag1', Bag1)
}

export default npmGit