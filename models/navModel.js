class NavModel {
    constructor() {}

    getNavModel() {
        return this.navModelJSON;
    }

    navModelJSON = {
        "navMenu": {
            "list": [{
                    "title": "Luta",
                    "list": [{
                            "title": "Mortal Kombat",
                            "targetUrl": "#"
                        },
                        {
                            "title": "Smash Bros",
                            "targetUrl": "#"
                        },
                        {
                            "title": "Killer Instct",
                            "targetUrl": "#"
                        },
                        {
                            "title": "DBZ Kakarot",
                            "targetUrl": "#"
                        }
                    ]
                },
                {
                    "title": "Ação / Aventura",
                    "list": [{
                            "title": "GTA V",
                            "targetUrl": "#"
                        },
                        {
                            "title": "Tomb Raider",
                            "targetUrl": "#"
                        },
                        {
                            "title": "Halo",
                            "targetUrl": "#"
                        },
                        {
                            "title": "Call of Duty",
                            "targetUrl": "#"
                        }
                    ]
                },
                {
                    "title": "Corrida",
                    "list": [{
                            "title": "Need For Speed",
                            "targetUrl": "#"
                        },
                        {
                            "title": "Forza Horizon",
                            "targetUrl": "#"
                        }
                    ]
                }
            ]
        }
    }
}