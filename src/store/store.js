import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({

    state: {
        cart:[],
        products: [
            {
              id: 1,
              title: "cookies",
              description:
                "La galleta es una preparación culinaria de pequeño tamaño, dulce o salada, horneada y hecha normalmente a base de harina de trigo",
              cost: 1000,
              image:
                "https://www.ionos.es/digitalguide/fileadmin/DigitalGuide/Teaser/cookies-laptop-t.jpg",
              cant: 1,
              stock: 10,
            },
            {
              id: 2,
              title: "bread",
              description:
                "El pan, del latín panis, es un alimento básico que forma parte de la dieta tradicional en Europa, Medio Oriente, India, América y Oceanía.",
              cost: 2000,
              image:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQZajflYA4hETipmBtZarufjtynr3hNMy3gQ&usqp=CAU",
              cant: 1,
              stock: 10,
            },
            {
              id: 3,
              title: "almojabana",
              description:
                "La almojábana o almojábano es un panecillo dulce típico de la cocina de Colombia​ y algunos países de América Latina.",
              cost: 4000,
              image:
                "https://recetasdemicolombia.com/wp-content/uploads/2020/03/almojabanas.jpg",
              cant: 1,
              stock: 30,
            },
            {
              id: 4,
              title: "pan de yuca",
              description:
                "El pandeyuca o pan de yuca es una pieza de panadería en forma de panecillo, elaborado con queso blanco molido, almidón de yuca cernido, huevo, polvo de hornear y sal,",
              cost: 5000,
              image:
                "https://www.laylita.com/recetas/wp-content/uploads/Pan-de-almidon-de-yuca-ecuatoriano.jpg",
              cant: 1,
              stock: 40,
            },
            {
              id:5,
              title:"pan tostado",
              description:"Una tostada es una rebanada de pan tostado. Según el país se lo puede llamar de diversas maneras y estas pueden ser diferentes. El color amanaranjadoue toma la tostada se debe a la Reacción de Maillard.",
              cost:500,
              image:"https://d320djwtwnl5uo.cloudfront.net/recetas/cover/pan-p_TYqvUsnHZNaEAFIVm1Jtlr72j4OxQP.png",
              cant:1,
              stock:30
            },
            {
              id:6,
              title:"Torta de chocolate",
              description:"El pastel de chocolate, tarta de chocolate o torta de chocolate, es un postre conocido internacionalmente, que se popularizó a finales del siglo XIX y se sirve frecuentemente en reuniones, como fiestas de cumpleaños y bodas.",
              cost:2000,
              image:"https://t2.rg.ltmcdn.com/es/posts/4/8/8/torta_humeda_de_chocolate_decorada_47884_orig.jpg",
              cant:1,
              stock:35
            },
            {
              id:7,
              title:"Galletas de leche",
              description:"La galleta (del francés galette) es una preparación culinaria de pequeño tamaño, dulce o salada, horneada y hecha normalmente a base de harina de trigo, huevos, azúcar, mantequilla o aceites vegetales o grasas animales.",
              cost:6000,
              image:"https://www.recetasdesbieta.com/wp-content/uploads/2020/07/galletas-leche-destacada1.jpg",
              cant:1,
              stock:5
            },
            {
              id:8,
              title:"Croissant",
              description:"es un tipo de pastel crujiente a base de masa de hojas de origen austriaco hecha la masa a base de levadura y mantequilla",
              cost:1000,
              image:"https://okdiario.com/img/2021/09/29/bread-ge138f1888_1920-1-1.jpg",
              cant:1,
              stock:15
            }
        ],

    },
    mutations: { //utilizamos mutacion porque podemos hacer condicionales y podemos editar, las mutaciones son sincronas 
        setCart(state,value){

            state.cart.push(value)
                  
        },

    },
    actions: { // las acciones son asincronas, por lo cual cuando manejemos valores del backend trabajaremos sobre acciones 
        /* setEmail:(context,valor)=>{
            context.commit("setEmail",valor)
        } */
    }
})
