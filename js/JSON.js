let menu = [
    {
        category: "Vorspeisen",
        menu_imge: "./assets/img/vorspeisen.jpg",
        items: [
            {
                dish: "Bruschetta",
                price: 4.5,
                amount: 1,
                ingredients: [
                    "Tomaten ",
                    "Basilikum ",
                    "Knoblauch ",
                    "Olivenöl",
                ],
                likes: 150,
                liked: true,
                comments: [
                    {
                        name: "AppetizerFan",
                        comment: "Frisch und lecker, der perfekte Start!",
                    },
                ],
            },
            {
                dish: "Antipasti",
                price: 8.0,
                amount: 1,
                ingredients: [
                    "Gegrilltes Gemüse ",
                    "Oliven ",
                    "Mozzarella ",
                    "Schinken ",
                ],
                likes: 220,
                liked: true,
                comments: [
                    {
                        name: "GourmetLover",
                        comment:
                            "Eine tolle Auswahl an italienischen Vorspeisen.",
                    },
                ],
            },
        ],
    },
    {
        category: "Salate",
        menu_imge: "./assets/img/salate.jpg",
        items: [
            {
                dish: "Insalata Mista",
                price: 6.5,
                amount: 1,
                ingredients: [
                    "Gemischter Salat ",
                    "Tomaten ",
                    "Gurken ",
                    "Karotten ",
                ],
                likes: 180,
                liked: true,
                comments: [
                    {
                        name: "SaladLover",
                        comment: "Frisch und knackig, genau richtig.",
                    },
                ],
            },
            {
                dish: "Caesar Salad",
                price: 7.5,
                amount: 1,
                ingredients: [
                    "Römersalat ",
                    "Parmesan ",
                    "Croutons ",
                    "Caesar-Dressing ",
                ],
                likes: 200,
                liked: true,
                comments: [
                    {
                        name: "HealthyEater",
                        comment: "Der beste Caesar Salad, den ich je hatte.",
                    },
                ],
            },
        ],
    },
    {
        category: "Aufläufe",
        menu_imge: "./assets/img/aufläufe.jpg",
        items: [
            {
                dish: "Lasagne",
                price: 9.5,
                amount: 1,
                ingredients: [
                    "Hackfleisch ",
                    "Tomatensauce ",
                    "Bechamelsauce ",
                    "Mozzarella ",
                ],
                likes: 250,
                liked: true,
                comments: [
                    {
                        name: "PastaLover",
                        comment: "Eine klassische Lasagne, sehr herzhaft.",
                    },
                ],
            },
            {
                dish: "Gemüseauflauf",
                price: 8.5,
                amount: 1,
                ingredients: ["Zucchini ", "Aubergine ", "Tomaten ", "Käse "],
                likes: 170,
                liked: false,
                comments: [
                    {
                        name: "VeggieFan",
                        comment: "Lecker und gesund, toll für Vegetarier.",
                    },
                ],
            },
        ],
    },
    {
        category: "Pizza",
        menu_imge: "./assets/img/pizza.jpg",
        items: [
            {
                dish: "Margherita",
                price: 8.5,
                amount: 1,
                ingredients: ["Tomatensauce ", "Mozzarella ", "Basilikum "],
                likes: 250,
                liked: true,
                comments: [
                    {
                        name: "PizzaLover123",
                        comment:
                            "Einfach und lecker, die beste Margherita in der Stadt!",
                    },
                    {
                        name: "ItalienFan",
                        comment:
                            "Sehr authentisch und frisch, genau wie in Italien.",
                    },
                ],
            },
            {
                dish: "Salami",
                price: 9.5,
                amount: 1,
                ingredients: ["Tomatensauce " , "Mozzarella ", "Salami"],
                likes: 300,
                liked: true,
                comments: [
                    {
                        name: "MeatLover",
                        comment:
                            "Die Salami ist schön würzig und passt perfekt zur Pizza.",
                    },
                ],
            },
        ],
    },
    {
        category: "Baguette",
        menu_imge: "./assets/img/baguette.jpg",
        items: [
            {
                dish: "Baguette Caprese",
                price: 5.5,
                amount: 1,
                ingredients: ["Tomaten ", "Mozzarella ", "Basilikum ", "Olivenöl"],
                likes: 190,
                liked: true,
                comments: [
                    {
                        name: "SandwichFan",
                        comment:
                            "Ein köstliches Baguette mit frischen Zutaten.",
                    },
                ],
            },
            {
                dish: "Baguette Salami",
                price: 6.0,
                amount: 1,
                ingredients: ["Salami ", "Käse ", "Tomaten ", "Salat "],
                likes: 210,
                liked: true,
                comments: [
                    {
                        name: "SnackLover",
                        comment:
                            "Perfekt für den kleinen Hunger zwischendurch.",
                    },
                ],
            },
        ],
    },
];

let menuBasket = [
    {
        items: [],
    },
];
