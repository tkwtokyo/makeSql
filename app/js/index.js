import Vue from 'vue';
import Vuex from 'vuex'
import TextPage from './page/text/Index.vue';

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        tableName: '',
        updateValue: '',
        tableValue: '',
        phrase: 'uppercase',
        sql: '',
    },
    mutations: {
        updateTableName(state, value) {
            state.tableName = value;
        },
        updateTableValue(state, value) {
            state.tableValue = value;
        },
        setUpdateValue(state, value) {
            state.updateValue = value;
        },
        updateSql(state, value) {
            state.sql = value;
        },
        setPhrase(state, phrase) {
            state.phrase = phrase;
        }
    }
});

class Index {
    init() {
        new Vue(Object.assign({}, TextPage, {store}));
    }
}

window.Index = Index;
