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
      
    };
  },
  methods:{
    removeCart(product) {
      const itemCart = this.$store.state.products.filter((item) => item.id == product.id)[0];
      itemCart.stock += product.cant;
      this.$store.state.cart.forEach((item, i) => {
        item.id == product.id ? (this.$store.state.cart.splice(i, 1)) : null;
      });

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