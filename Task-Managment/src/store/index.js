import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const savedSections = localStorage.getItem('board-sections')
const store = new Vuex.Store({
    state: {
        sections: savedSections ? JSON.parse(savedSections) : []
    },
    getters: {
        titleTodos: state => {
            return state.sections.filter(title => title)
        }
    },
    mutations: {
        createSection(state, payload) {
            state.sections.push({
                title: payload.title,
                tasks: []
            });
        },
        deleteSection(state, payload) {
            state.sections.splice(payload.sectionIndex, 1);
        },
        createTaskInSection(state, payload) {
            state.sections[payload.sectionIndex].tasks.push({
                content: payload.content,
                rangTask: payload.rangTask,
                colName: payload.colName,


            });
        },

        deleteTask(state, payload) {
            state.sections[payload.sectionIndex].tasks.splice(payload.taskIndex, 1);
        },
        updateTask(state, payload) {
            let index = state.sections[payload.sectionIndex].tasks.findIndex(t => t.id == payload.id);
            if (index != -1) {
                state.sections[payload.sectionIndex].tasks[index] = payload;
            }
        },
        saveSections(state, payload) {
            state.sections = payload.sections;
        }
    },
    actions: {
        createSection(context, payload) {
            context.commit('createSection', payload);
        },
        deleteSection(context, payload) {
            context.commit('deleteSection', payload);
        },
        createTaskInSection(context, payload) {
            context.commit('createTaskInSection', payload);
        },

        deleteTask(context, payload) {
            context.commit('deleteTask', payload);
        },
        updateTask(context, payload) {
            context.commit('updateTask', payload);
        },
        saveSections(context, payload) {
            context.commit('saveSections', payload);
        }
    },
    modules: {}
})

store.subscribe((mutation, state) => {
    localStorage.setItem('board-sections', JSON.stringify(state.sections))
})
export default store