import { TOKEN } from "../mutation-types";
import { getAuthFromCookie } from '@/utils/cookies';

const state = {
	access_token: getAuthFromCookie() || '',
}

const getters = {
	tokenInfo: (state) => {
		return `access_token: ${state.access_token}`;
	}
}

const actions = {
	changeName({ commit }, value) {
		commit(TOKEN.SET_TOKEN, value);
	}
}

const mutations = {
	[TOKEN.SET_TOKEN](state, value) {
		state.access_token = value;
	}
}

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations
}

/*
const store = useStore(); // 스토어 호출 
const name = computed(() => store.state.token.access_token); // state 정보 가져오기 
const tokenInfo = computed(() => store.getters['token/tokenInfo']); // getters 가져오기 
const changeName = e => store.dispatch('token/changeName', e.target.value); // 액션함수
*/
