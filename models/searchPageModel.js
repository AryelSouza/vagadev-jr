class SearchPageModel {
    constructor() {}

    searchItemByTitle(text) {
        // Simula a pesquisa.
        var findResult = this.products.filter(item => item.title.toLowerCase().match(text.toLowerCase()));
        var resultModel = this.createSearchModel();
        resultModel.search.result.list = findResult;

        return resultModel;
    }


    // FACTORY
    createSearchModel() {
        return {
            "search": {
                "result": {
                    "list": []
                }
            }
        };
    }

    products = [{
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
    }];
}