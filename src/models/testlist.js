import { register, login } from '../services/example';
export default {

    namespace: 'testlist',

    state: {},

    subscriptions: {
        setup({ dispatch, history }) {  // eslint-disable-line
        },
    },

    effects: {
        //注册
        *updataRegister({ payload }, { call, put }) {
            yield call(register, payload)
            // yield put({ type: 'save' });
        },
        //登录
        *updataLogin({ payload }, { call, put }) {
            return yield call(login, payload)
            // yield put({ type: 'save' });
        },
    },

    reducers: {

    },

};