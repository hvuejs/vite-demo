import { defineStore } from "pinia";

interface State {
    userInfo: unknown;
}

const state = () => ({
    userInfo: { name: "小明" },
});

const actions = {
    SET_USER_INFO(state: State, data: object) {
        console.log(state);
        state.userInfo = data;
    },
};

export default defineStore("userInfo", { state, actions });
