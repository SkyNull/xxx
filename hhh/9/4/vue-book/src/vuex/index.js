/**
 * Created by liying on 2018/9/23.
 */
    //初始化vuex
    import Vue from 'vue'
    import Vuex from 'vuex'
    import {state} from './state.js'
    /*import state from './state.js'*/
    import * as getters from './getters.js'
    import * as mutations from './mutations.js'
    import * as actions from './actions.js'
    Vue.use(Vuex);
    //vue在使用需要use一下
    const store = new Vuex.Store({
        state,
        getters,
        mutations,
        actions
    });
    //我们需要在根实例中注入
    export {store}