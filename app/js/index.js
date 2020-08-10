import Vue from 'vue';
import Vuex from 'vuex'
import TextPage from './page/text/Index.vue';

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        tableName: ''
    },
    mutations: {
        updateTableName (state, value) {
            state.tableName = value;
        }
    }
});

class Index {
    init() {
        // const fileSql = new Vue({
        //     el: '#output',
        //     data: {
        //         list: [
        //             {
        //                 title: 'title',
        //                 fileName: 'sql1',
        //                 sql: 'text',
        //             }
        //         ]
        //     }
        // });

        new Vue(Object.assign({}, TextPage, {store}));
    }
}

window.Index = Index;
