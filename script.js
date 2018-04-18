let app = new Vue({
  el: '#app',
  data: {
    products: []
  },
  created: function () {
    this.getProducts()
  },
  computed: {
    productsByPrice: function(){
      return this.products.sort((a,b)=>{
        return a.price - b.price
      })
    }
  },
  methods: {
    getProducts: function () {
      axios.get('https://mkt-endpoint.now.sh/products')
        .then((res) => {
          this.products = res.data
        })
        .catch(function (err) {
          console.log(err);
        });
    }
  }
})