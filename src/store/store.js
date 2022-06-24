import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({

    state: {
        cart:[]   
    },
    mutations: { //utilizamos mutacion porque podemos hacer condicionales y podemos editar, las mutaciones son sincronas 
        setCart(state,value){

            state.cart.push(value)
                  
        }
    },
    actions: { // las acciones son asincronas, por lo cual cuando manejemos valores del backend trabajaremos sobre acciones 
        /* setEmail:(context,valor)=>{
            context.commit("setEmail",valor)
        } */
    }
})
