// Chamando o template via string,pois não estou utilizando um server
const cartViewTemplate = '<section class="cartView"> <section class="container contents-container mb-8"> <div class="title"> <img src="assets/svgs/shopping-bag-solid.svg" alt="" class=""> <h1 class="title">CARRINHO</h1> </div> <div class="container card-list"> <div class="card" v-for="item in cart.list"> <a v-bind:href="item.targetURL"> <img class="img" v-bind:src="item.imageURL" alt=""> </a> <div class="card-content"> <p>{{item.title}}</p> <p class="card-content-price"><b>R${{item.price}}</b></p> <div class="mx-1"> <button class="btn btn-danger block btn-buy" v-on:click="onClickBtnRemove(item)"><b>REMOVER</b></button> </div> </div> </div> </div> </section></section>';

var cartView = Vue.component('cart-view', {
    template: cartViewTemplate,
    data: function() {
        return {
            cart: {
                list: []
            },
        }
    },
    methods: {
        onClickBtnRemove: function(item) {
            this.$emit('cartremoveitem', item);
            this.cart = this.$parent.cart;
        },
    },
    beforeMount: function() {
        this.cart = this.$parent.cart;
    },
});