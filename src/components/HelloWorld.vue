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
            v-for="(product, index) in $store.state.products"
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





