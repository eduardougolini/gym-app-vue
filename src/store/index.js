import Vue from 'vue-native-core'
import Vuex from 'vuex'
import User from './modules/user/index'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        User
    }
});
