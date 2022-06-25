<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-dark py-0 my-0" id="nav">
        <div class="container-fluid">
          <h1>
            <img
              class="img-fluid"
              src="https://www.zarla.com/images/zarla-dulce-pan-1x1-2400x2400-20210604-b78c7qwmgxkt764xw4rh.png?crop=1:1,smart&width=250&dpr=2"
              alt="dulce pan"
              width="80"
              height="80"
            />
          </h1>
          <div class="row">
            <div class="col">
              <div class="submenu">
                <button type="button" class="btn btn-info py-0">
                  <div class="py-0 px-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                      width="26"
                      height="26"
                    >
                      <path
                        d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z"
                      />
                    </svg>
                  </div>

                  <div class="mx-1 text-start">
                    <p class="m-0">Productos: {{ cantProductsInCart }}</p>
                    <p class="m-0">Total: ${{ totalPriceCart }}</p>
                  </div>
                </button>
                <div id="carrito">
                  <table
                    id="navbar-example"
                    class="table table-dark table-striped text-center"
                  >
                    <thead>
                      <tr>
                        <th>imagen</th>
                        <th>producto</th>
                        <th>precio</th>
                        <th>cantidad</th>
                        <th>borrar</th>
                      </tr>
                    </thead>
                    <tbody v-for="(item, index) in $store.state.cart" :key="index">
                      <tr>
                        <td>
                          <img
                            :src="item.image"
                            alt="imagenes"
                            width="80"
                            height="60"
                          />
                        </td>
                        <td>{{ item.title }}</td>
                        <td>{{ item.cost }}</td>
                        <td>{{item.cant}}</td>
                        <td>
                          <span class="delte-item" @click="removeCart(item)"
                            >X</span
                          >
                        </td>
                      </tr>
                    </tbody>
                    <thead>
                      <tr>
                        <th>
                          Total
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          {{totalPriceCart}}
                        </td>
                      </tr>
                    </tbody>
                    
                  </table>
                  <button
                    type="button"
                    id="vaciar-carrito"
                    class="btn btn-danger"
                    @click="cleanCart()"
                  >
                    Vaciar carrito
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
  </div>
</template>

<script>
export default {
  name: "pageHeader",
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
      indexProduct: null,
    };
  },
  methods:{
    removeCart(product) {
      const itemCart = this.products.filter((item) => item.id == product.id)[0];
      console.log(itemCart.cant);
      itemCart.stock += product.cant;
      this.$store.state.cart.forEach((item, i) => {
        item.id == product.id ? (this.indexProduct = i) : null;
      });

      this.$store.state.cart.splice(this.indexProduct, 1);
    },
    cleanCart() {
      this.$store.state.cart = [];
    },
  },
  computed:{
    cantProductsInCart() {
      return this.$store.state.cart.reduce((acc, item) => acc + item.cant, 0);
    },
    totalPriceCart() {
      return this.$store.state.cart.reduce((acc, item) => acc + item.cant * item.cost, 0);
    },
  }
};
</script>