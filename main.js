const routes = [
    { name: 'home', path: '/', component: homeView },
    { name: 'contact', path: '/contact', component: contactView },
    { name: 'search', path: '/search', component: searchView },
    { name: 'cart', path: '/cart', component: cartView },
];

const router = new VueRouter({
    routes
});

var vm = new Vue({
    router,
    el: '#app',
    data: {
        model: {
            navModel: {},
        },
        cart: {
            list: []
        },

    },
    methods: {
        cartAddItem: function(item) {
            this.cart.list.push(item);
            $('.modal').show();
        },
        itemIsInCart: function(item) {
            return this.cart.list.find(i => i.id == item.id);
        },
        cartRemoveItem: function(item) {
            this.cart.list = arrayRemove(this.cart.list, item);
        },
        checkNavMenu: function() {
            var navMenu = $('.nav-menu');
            if (navMenu.is(':visible')) {
                $('#nav-menu-button-open').hide();
                $('#nav-menu-button-close').show();
            } else {
                $('#nav-menu-button-open').show();
                $('#nav-menu-button-close').hide();
            }
        },

    },
    beforeMount: function() {
        this.model.navModel = new NavModel().getNavModel();
    },
    mounted: function() {
        var self = this;
        $('#btn-close-modal-box-request-sussess').click(function() {
            $('.modal').hide();
        });

        // JQUERY FEATURES
        $('.nav-menu-button').mouseover(function() {
            if ($(window).width() < 769) {
                return
            }

            $('.nav-menu').show();
        }).mouseout(function() {
            if ($(window).width() < 769) {
                return
            }

            $('.nav-menu').hide();
        });

        $('.nav-menu-button').click(function() {
            if ($(window).width() >= 769) {
                return;
            }
            $('.nav-menu').toggle();
            self.checkNavMenu();
        });

        // Força fechar o nav menu caso tenha a tela mude de tamanho.
        $(window).resize(function() {
            $('.nav-menu').hide();
            self.checkNavMenu();
        });
    },
    watch: {
        $route(to, from) {
            $('.nav-menu').hide();
            this.checkNavMenu();
        }
    }
});

function arrayRemove(arr, value) {
    return arr.filter(function(ele) {
        return ele != value;
    });
}