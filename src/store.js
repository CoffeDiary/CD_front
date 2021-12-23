import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.store({
	state: {
		// 글로벌로 관리될 상태값
		counter: 0
	},
	getter: {
		// 데이터에 변화를 줄 순 없다.
		counter: state => state.counter
	},
	mutations: {
		// 실제 데이터 변화가 일어나는 곳
		// increment: state => (state.counter += 1),
		// decrement: state => (state.counter -= 1)
	},
	actions: {
		// mutation을 일으키기 위한 행동, 컴포넌트에서는 actions을 사용한다.
		// addCounter: context => context.commit("increment"),
		// subCounter: context => context.commit("decrement")
	}
});
