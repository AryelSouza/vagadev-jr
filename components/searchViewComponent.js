// Chamando o template via string,pois não estou utilizando um server
const searchViewTemplate = '<section class="searchView"> <section class="container contents-container mb-8"> <div class="card"> <div class="card-title"> <img src="assets/svgs/search-solid.svg" alt="" class=""> <h1>BUSCAR</h1> </div> <div class="card-content"> <form action="" class="form"> <label>Nome do Produto</label> <input type="text" class="input" v-model="search.text"> <button type="submit" class="btn btn-primary" v-on:click="searchItemByName">Buscar</button> </form> </div> </div> <div class="container card-list"> <div class="card" v-for="item in model.searchPageModel.search.result.list"> <a v-bind:href="item.targetURL"> <img class="img" v-bind:src="item.imageURL" alt=""> </a> <div class="card-content"> <p>{{item.title}}</p> <p class="card-content-price"><b>R${{item.price}}</b></p> <div class="mx-1"> <button class="btn btn-primary block btn-buy" v-on:click="onClickBtnBuy(item)" v-if="!itemIsInCart(item)"><b>COMPRAR</b></button> <button class="btn btn-primary block btn-blocked btn-bought" v-if="itemIsInCart(item)"> <b>COMPRADO!</b> <img src="assets/img/image_6-removebg-preview 1.png" alt=""> </button> </div> </div> </div> </div> </section></section>';

var searchView = Vue.component('search-view', {
    template: searchViewTemplate,
    data: function() {
        return {
            model: {
                searchPageModel: {
                    search: {
                        result: {
                            list: []
                        }
                    }
                }
            },
            search: {
                text: ''
            }
        }
    },
    methods: {
        searchItemByName: function() {
            if (this.search.text.length < 3) {
                alert('Numero de caracteres insuficiente(digite no minimo 3).')
                return;
            }

            var spm = new SearchPageModel();
            var result = spm.searchItemByTitle(this.search.text);
            this.model.searchPageModel = result;
        },
        onClickBtnBuy: function(item) {
            this.$emit('cartadditem', item)
        },
        itemIsInCart: function(item) {
            return this.$parent.itemIsInCart(item);
        },
    },
    mounted() {},
});