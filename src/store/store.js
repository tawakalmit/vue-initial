import {createStore} from 'vuex'

export default createStore({
    state: {
        animals: [
            {name: 'kambing', qty: 20},
            {name: 'ayam', qty: 69},
            {name: 'kelinci', qty: 14},
            {name: 'sapi', qty: 3},
          ]
    },
    getters: {
        animals(state) {
            return state.animals
        }
    },
    mutations: {
        reduceQty : (state, payload) => {
            state.animals.forEach(item => {
                item.qty = item.qty-payload
            })
        }
    },
    actions: {
        reduceQty: (context, payload) => {
            context.commit('reduceQty', payload)
        }
    }
})