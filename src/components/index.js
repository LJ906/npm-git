

import Hello from './Hello.vue'
import hclContainerList from './containerComponent/containerList'


const npmGit = {
    install,
    Hello,
    hclContainerList
}

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(install)
}

function install(Vue) {
    if (install.installed) {
        return
    }

    Vue.component('Hello', Hello)
    // Vue.component('Bag1', Bag1)
    Vue.component('hclContainerList', hclContainerList)
}

export default npmGit