import {register} from '../utils/request';
export default {

    namespace: 'testlist',

    state: {},

    subscriptions: {
        setup({ dispatch, history }) {  // eslint-disable-line
        },
    },

    effects: {
        *updataRegister({ payload }, { call, put }) {  // eslint-disable-line
            console.log(payload)
            // yield call(register,payload)
            // yield put({ type: 'save' });
        },
    },

    reducers: {
       
    },

};