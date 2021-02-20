import { createStore } from "vuex";

interface State {
    userInfo: object
}

export const store = createStore({
    state (): State {
        return {
            userInfo: { name: '小明' }
        }
    },
    mutations: {
        SET_USER_INFO(state: any , data: object) {
            console.log(state)
            state.userInfo = data
        }
    },
    actions: {

    }
})