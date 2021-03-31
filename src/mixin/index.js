import Vue from "vue";
import axios from "./axiosConfig";

Vue.prototype.$axios = axios.defaultAxios;
