<template>
  <div class="hello" id="textoJustificado">
    <div>
      <div class="row align-items-center text-light" id="imagen">
        <div class="col ps-5">
          <h1>Busca tu pan favorito</h1>
          <h5>Los mejores panes los encuentras aquí</h5>
          <form class="d-flex" role="search" id="barra">
            <input
              class="form-control me-2"
              type="search"
              placeholder="¿Qué quieres comer?"
              aria-label="Search"
            />
          </form>
        </div>
        <div class="col"></div>
      </div>
      <div></div>
      <div id="product" class="container-fluid-expand-lg">
        <div class="row grid-products p-3" id="grid">
          <div
            class="col-lg-3 col-md-4 col-sm-6 col"
            v-for="(product, index) in products"
            :key="index"
          >
            <div class="card">
              <img :src="product.image" class="card-img-top" />
              <div class="card-body">
                <h5 class="card-title">{{ product.title }}</h5>
                <p class="card-text">
                  {{ product.description }}
                </p>
                <p>{{ product.cost }} COP</p>
                <p>stock {{ product.stock }}</p>
                <button
                  v-if="product.stock > 0"
                  @click="addCart(product)"
                  class="btn btn-primary btn-block"
                >
                  Añadir a carrito
                </button>
                <button v-else class="btn btn-primary btn-block" disabled>
                  Sin stock
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
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
      cantidad: 0,
      sumTotal: 0,
      
    };
  },
  methods: {
    addCart(product) {

      /* this.$store.commit("setCart",product); */
      const itemCart = this.$store.state.cart.filter((item) => item.id == product.id)[0]; 
      
      if (itemCart != undefined) {
        itemCart.cant++;
      } else {
        const newItemCart = {
          id: product.id,
          title: product.title,
          description: product.description,
          cost: product.cost,
          image: product.image,
          cant: product.cant,
          stock: product.stock,
        };
        /* this.$store.state.cart.push(newItemCart); */
        this.$store.commit("setCart",newItemCart);
      }
      product.stock--;
    },
    
  },
  computed: {
    
  },
};
</script>


<style>
.delte-item {
  color: red;
  font-size: 2rem; /* el font-size se utiliza para dar tamaño a un elemento */
  font-weight: bold; /* el font-weight se utiliza para darle grosor a un elemento */
  cursor: pointer; /* el cursor pointer se utiliza para darle un efecto al elemento cuando el cursor pase por encima */
}

.hello div {
  border: 2px solid black;
}

#imagen {
  background-image: url(https://www.wallpaperuse.com/wallp/95-956633_m.jpg);
  height: 700px;
  background-repeat: no-repeat;
}

#barra {
  width: 460px;
}

.submenu {
  position: relative;
}

.submenu #carrito {
  display: none;

}

.submenu:hover #carrito {
  display: block;
  color: white;
  position: absolute;
  right: 0;
  top: 100%;
  z-index: 1;
  background-color: #18171b;
  padding: 10px;
  overflow: auto;
  max-height: 500px;
}

.submenu tr:hover td{
  background-color: rgb(41, 108, 232);
}

#textoJustificado {
  text-align: justify;
}

#vaciar-carrito {
  width: 450px;
  /* cursor: pointer; */
}

.hello::-webkit-scrollbar-thumb {
  background: red;
}


</style>





