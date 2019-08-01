
// import iView from 'iview';
// import 'iview/dist/styles/iview.css';

import Hello from './Hello.vue'
import Bag1 from './Bag1.vue'
 import commonPut from './my-components/commonput'

const npmGit = {
    install,
    Hello,
    Bag1, 
    commonPut
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
    Vue.component('commonPut', commonPut)
}

export default npmGit