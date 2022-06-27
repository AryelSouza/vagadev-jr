class MainPageModel {
    constructor() {}

    getMainPageModel() {
        return this.mainModelJSON;
    }

    // Esse JSON deveria ser recebido algum metodo HTTP de um servidor como um Webservice.irei colocar aqui mesmo pois não sei se esse site será rodado em um servidor.
    mainModelJSON = {
        "banner": {
            "mainBanner": {
                "list": [{
                        "image": {
                            "desktopURL": "assets/img/principal_banner_desktop.jpg",
                            "mobileURL": "assets/img/principal_banner_mobile.jpg"
                        },
                        "title": "MORTAL KOMBAT",
                        "price": "299,99",
                        "description": "Mortal Kombat X combina uma apresentação cinemática única com uma jogabilidade totalmente nova. Os jogadores podem escolher pela primeira vez diversas variantes de cada personagem, afetando tanto a estratégia como o estilo de luta."
                    },
                    {
                        "image": {
                            "desktopURL": "assets/img/principal_banner_desktop_02.jpg",
                            "mobileURL": "assets/img/principal_banner_mobile_02.jpg"
                        },
                        "title": "RED DEAD REDEMPTION II",
                        "price": "249,99",
                        "description": "Red Dead Redemption 2 é o jogo de ação no Velho Oeste da Rockstar para PS4 e Xbox One, sem lançamento para PC, lançamento em 26 de outubro de 2018. Com modo online parecido com o de GTA 5, Red Dead Online permite completar missões e ganhar dinheiro com outros jogadores."
                    }
                ]
            },
            "middleBanner": {
                "list": [{
                        "imageURL": "assets/img/zelda_banner.jpg",
                        "title": "The Legend of Zelda - Breath of th wild",
                        "targetURL": "#"
                    },
                    {
                        "imageURL": "assets/img/sekiro_banner.jpg",
                        "title": "SEKIRO - Shadows die twice",
                        "targetURL": "#"
                    }
                ]
            }
        },
        "featuredProducts": {
            "list": [{
                "id": 0,
                "imageURL": "assets/img/product-outriders.png",
                "title": "Outriders",
                "price": "200,00",
                "targetURL": "#"
            }, {
                "id": 1,
                "imageURL": "assets/img/product-cyberpunk2077.png",
                "title": "CYBERPUNK 2077",
                "price": "200,00",
                "targetURL": "#"
            }, {
                "id": 2,
                "imageURL": "assets/img/product-donkey-kong-country-tropical-freeze.png",
                "title": "Donkey Kong Country TropicalFreeze",
                "price": "200,00",
                "targetURL": "#"
            }]
        }
    }
}