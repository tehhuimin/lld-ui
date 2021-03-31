import Vue from "vue";
import Vuex from "vuex";
import User from "./modules/user";
import Theme from "./modules/theme";
import Enum from "./modules/enum";

Vue.use(Vuex);

const store = new Vuex.Store({});

store.registerModule("user", User);
store.registerModule("theme", Theme);
store.registerModule("enum", Enum);

export default store;
