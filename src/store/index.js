import { createStore } from "vuex";
import token from './modules/token'

export default createStore({
	modules: { token },
	/*
	state: {
		// 글로벌로 관리될 상태값
		token: getAuthFromCookie(),
	},
	getter: {
		// 데이터에 변화를 줄 순 없다.
	},
	mutations: {
		// 실제 데이터 변화가 일어나는 곳
	},
	actions: {
		// mutation을 일으키기 위한 행동, 컴포넌트에서는 actions을 사용한다.
	}
	*/
});
