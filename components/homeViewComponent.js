// Chamando o template via string,pois não estou utilizando um server
const homeViewTemplate = '<section class="homeView"> <section class="banner"> <section class="main-banner"> <div class="owl-carousel owl-theme owl-loaded owl-carousel-grid"> <div class="owl-stage-outer"> <div class="owl-stage"> <div class="main-banner-item owl-item" v-for="item in model.mainPageModel.banner.mainBanner.list"> <picture class="main-banner-item-picture"> <source v-bind:srcset="item.image.desktopURL" media="(min-width: 769px)"> <img class="img" v-bind:src="item.image.mobileURL" alt=""> </picture> <div class="main-banner-item-description"> <p class="main-banner-item-description-title">{{item.title}}</p> <p class="main-banner-item-description-price"> <span class="main-banner-item-description-price-reais">R${{formatPriceReais(item.price)}}</span> <span class="main-banner-item-description-price-centavos">,{{formatPriceCentavos(item.price)}}</span> </p> <p>{{item.description}}</p> </div> </div> </div> </div> <div class="owl-nav-custom"> <div class="owl-nav-custom-left"> <p>{{owlCarousel.currentItem.title}}</p> <hr> </div> <div class="owl-nav-custom-right"> <div class="swiperIndex">{{owlCarousel.currentItem.index + 1}} / {{owlCarousel.size}}</div> <div class="owl-nav-custom-buttons-prev-next-container"> <div class="owl-nav-custom-button-prev"> <span class="btn-icon"><img src="assets/svgs/angle-left-solid.svg" alt="" class="svg-color-white" width="14" id="btn-close-modal-box-request-sussess"></span> </div> <div class="owl-nav-custom-button-next"> <span class="btn-icon"><img src="assets/svgs/angle-right-solid.svg" alt="" class="svg-color-white" width="14" id="btn-close-modal-box-request-sussess"></span> </div> </div> </div> </div> </div> </section> <section class="middle-banner container"> <div class="middle-banner-item" v-for="item in model.mainPageModel.banner.middleBanner.list"> <a v-bind:href="item.targetURL" class="middle-banner-item-image"> <img v-bind:src="item.imageURL" alt="" class="img img-strech"> </a> <div class="middle-banner-item-content"> <div class="middle-banner-item-content-left"> <p>{{item.title}}</p> </div> <div class="middle-banner-item-content-right"> <hr class="hr-dark block"> </div> </div> </div> </section> </section> <section class="container mb-8"> <section class="contents containe"> <div class="title my-2"> <img class="img" src="assets/img/group.png" alt=""> <h1>Produtos em destaque</h1> </div> <div class="card-list-container"> <button v-on:click="onClickcardListContainerLeftButton" class="card-list-container-btn-left hide-md"> <img src="assets/svgs/angle-left-solid.svg" alt=""> </button> <button v-on:click="onClickcardListContainerRightButton" class="card-list-container-btn-right hide-md"> <img src="assets/svgs/angle-right-solid.svg" alt=""> </button> <div class="card-list hide-md"> <div class="card" v-for="item in featuredProductsSingle.list"> <a v-bind:href="item.targetURL"> <img class="img" v-bind:src="item.imageURL" alt=""> </a> <div class="card-content"> <p>{{item.title}}</p> <p class="card-content-price"><b>R${{item.price}}</b></p> <div class="mx-1"> <button class="btn btn-primary block btn-buy" v-on:click="onClickBtnBuy(item)" v-if="!itemIsInCart(item)"><b>COMPRAR</b></button> <button class="btn btn-primary block btn-blocked btn-bought" v-if="itemIsInCart(item)"> <b>COMPRADO!</b> <img src="assets/img/image_6-removebg-preview 1.png" alt=""> </button> </div> </div> </div> </div> <div class="card-list hide-sm"> <div class="card" v-for="item in model.mainPageModel.featuredProducts.list"> <a v-bind:href="item.targetURL"> <img class="img" v-bind:src="item.imageURL" alt=""> </a> <div class="card-content"> <p>{{item.title}}</p> <p class="card-content-price"><b>R${{item.price}}</b></p> <div class="mx-1"> <button class="btn btn-primary block btn-buy" v-on:click="onClickBtnBuy(item)" v-if="!itemIsInCart(item)"><b>COMPRAR</b></button> <button class="btn btn-primary block btn-blocked btn-bought" v-if="itemIsInCart(item)"> <b>COMPRADO!</b> <img src="assets/img/image_6-removebg-preview 1.png" alt=""> </button> </div> </div> </div> </div> </div> </section> </section></section>';

var homeView = Vue.component('home-view', {
    template: homeViewTemplate,
    data: function() {
        return {
            owlCarousel: {
                currentItem: {
                    index: 0,
                    title: ""
                },
                currentIndex: 0,
                size: 0
            },
            featuredProductsSingle: {
                currentIndex: 0,
                list: []
            },
            model: {
                mainPageModel: {},
            },

        }
    },
    methods: {
        onClickBtnBuy: function(item) {
            this.$emit('cartadditem', item)
        },
        itemIsInCart: function(item) {
            return this.$parent.itemIsInCart(item);
        },
        formatPriceReais: function(value) {
            var split = value.split(',')
            return split[0];
        },
        formatPriceCentavos: function(value) {
            var split = value.split(',')
            return split[1];
        },
        changeOwlCarouselIndexText: function(index, maxCount) {
            this.owlCarousel.currentItem.index = index;
            this.owlCarousel.currentItem.title = this.model.mainPageModel.banner.mainBanner.list[index].title;
            this.owlCarousel.size = maxCount;
        },
        onClickcardListContainerLeftButton: function() {
            this.featuredProductsSingle.currentIndex = Math.max(0, this.featuredProductsSingle.currentIndex - 1);
            this.refreshFeaturedProductsCardListContainer();

        },
        onClickcardListContainerRightButton: function() {
            this.featuredProductsSingle.currentIndex = Math.min(this.model.mainPageModel.featuredProducts.list.length - 1, this.featuredProductsSingle.currentIndex + 1);
            this.refreshFeaturedProductsCardListContainer();
        },
        refreshFeaturedProductsCardListContainer: function() {
            this.featuredProductsSingle.list = [];
            this.featuredProductsSingle.list.push(this.model.mainPageModel.featuredProducts.list[this.featuredProductsSingle.currentIndex]);
        }
    },
    beforeMount: function() {
        this.model.mainPageModel = new MainPageModel().getMainPageModel();
        this.refreshFeaturedProductsCardListContainer();
    },
    mounted: function() {
        // OWL CAROUSEL
        var owl = $('.owl-carousel');
        owl.owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            autoplayTimeout: 5 * 1000,
            dots: false,
            nav: false,
        });

        $('.owl-nav-custom-button-prev').click(function() {
            owl.trigger('prev.owl.carousel');
        });

        $('.owl-nav-custom-button-next').click(function() {
            owl.trigger('next.owl.carousel');
        });
        var self = this;
        owl.on('changed.owl.carousel', function(event) {
            var pos = event.relatedTarget.normalize(event.item.index, true);
            self.changeOwlCarouselIndexText(pos, event.item.count);
        });
        this.changeOwlCarouselIndexText(0, this.model.mainPageModel.banner.mainBanner.list.length);
    }
});