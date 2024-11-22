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
                        comment: "Eine tolle Auswahl an italienischen Vorspeisen.",
                    },
                ],
            },
            {
                dish: "Caprese",
                price: 5.0,
                amount: 1,
                ingredients: [
                    "Tomaten ",
                    "Mozzarella ",
                    "Basilikum ",
                    "Olivenöl",
                ],
                likes: 130,
                liked: false,
                comments: [
                    {
                        name: "CapreseFan",
                        comment: "Sehr frisch und lecker.",
                    },
                ],
            },
            {
                dish: "Carpaccio",
                price: 9.0,
                amount: 1,
                ingredients: [
                    "Rinderfilet ",
                    "Parmesan ",
                    "Rucola ",
                    "Olivenöl",
                ],
                likes: 160,
                liked: true,
                comments: [
                    {
                        name: "MeatLover",
                        comment: "Das beste Carpaccio, das ich je hatte!",
                    },
                ],
            },
            {
                dish: "Frittierte Zucchini-Blüten",
                price: 6.5,
                amount: 1,
                ingredients: [
                    "Zucchiniblüten ",
                    "Ricotta ",
                    "Teig ",
                    "Olivenöl",
                ],
                likes: 140,
                liked: false,
                comments: [
                    {
                        name: "VeggieLover",
                        comment: "Knusprig und lecker!",
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
            {
                dish: "Rucola Salat",
                price: 6.0,
                amount: 1,
                ingredients: [
                    "Rucola ",
                    "Parmesan ",
                    "Tomaten ",
                    "Balsamico-Dressing ",
                ],
                likes: 150,
                liked: false,
                comments: [
                    {
                        name: "RucolaFan",
                        comment: "Sehr lecker und erfrischend.",
                    },
                ],
            },
            {
                dish: "Griechischer Salat",
                price: 7.0,
                amount: 1,
                ingredients: [
                    "Gurken ",
                    "Tomaten ",
                    "Feta ",
                    "Oliven ",
                    "Zwiebeln",
                ],
                likes: 170,
                liked: true,
                comments: [
                    {
                        name: "GreekFoodLover",
                        comment: "Ein Klassiker, immer wieder gut.",
                    },
                ],
            },
            {
                dish: "Nicoise Salat",
                price: 8.0,
                amount: 1,
                ingredients: [
                    "Thunfisch ",
                    "Eier ",
                    "Grüne Bohnen ",
                    "Kartoffeln ",
                ],
                likes: 160,
                liked: false,
                comments: [
                    {
                        name: "SeafoodLover",
                        comment: "Sehr sättigend und lecker.",
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
                ingredients: [
                    "Zucchini ",
                    "Aubergine ",
                    "Tomaten ",
                    "Käse ",
                ],
                likes: 170,
                liked: false,
                comments: [
                    {
                        name: "VeggieFan",
                        comment: "Lecker und gesund, toll für Vegetarier.",
                    },
                ],
            },
            {
                dish: "Kartoffelgratin",
                price: 7.5,
                amount: 1,
                ingredients: [
                    "Kartoffeln ",
                    "Sahne ",
                    "Käse ",
                    "Muskat ",
                ],
                likes: 180,
                liked: true,
                comments: [
                    {
                        name: "PotatoLover",
                        comment: "Einfach und lecker, perfekt als Beilage.",
                    },
                ],
            },
            {
                dish: "Moussaka",
                price: 10.0,
                amount: 1,
                ingredients: [
                    "Hackfleisch ",
                    "Auberginen ",
                    "Tomatensauce ",
                    "Bechamelsauce",
                ],
                likes: 200,
                liked: false,
                comments: [
                    {
                        name: "GreekFoodFan",
                        comment: "Sehr würzig und sättigend.",
                    },
                ],
            },
            {
                dish: "Nudelauflauf",
                price: 8.0,
                amount: 1,
                ingredients: [
                    "Pasta ",
                    "Tomatensauce ",
                    "Käse ",
                    "Gemüse ",
                ],
                likes: 160,
                liked: true,
                comments: [
                    {
                        name: "PastaFan",
                        comment: "Einfach und doch so gut!",
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
                        comment: "Einfach und lecker, die beste Margherita in der Stadt!",
                    },
                    {
                        name: "ItalienFan",
                        comment: "Sehr authentisch und frisch, genau wie in Italien.",
                    },
                ],
            },
            {
                dish: "Salami",
                price: 9.5,
                amount: 1,
                ingredients: ["Tomatensauce ", "Mozzarella ", "Salami"],
                likes: 300,
                liked: true,
                comments: [
                    {
                        name: "MeatLover",
                        comment: "Die Salami ist schön würzig und passt perfekt zur Pizza.",
                    },
                ],
            },
            {
                dish: "Funghi",
                price: 9.0,
                amount: 1,
                ingredients: ["Tomatensauce ", "Mozzarella ", "Champignons"],
                likes: 180,
                liked: false,
                comments: [
                    {
                        name: "MushroomLover",
                        comment: "Pilze auf Pizza, einfach lecker!",
                    },
                ],
            },
            {
                dish: "Prosciutto e Funghi",
                price: 10.0,
                amount: 1,
                ingredients: ["Tomatensauce ", "Mozzarella ", "Schinken ", "Champignons"],
                likes: 220,
                liked: true,
                comments: [
                    {
                        name: "ProsciuttoFan",
                        comment: "Schinken und Pilze, eine perfekte Kombination!",
                    },
                ],
            },
            {
                dish: "Quattro Formaggi",
                price: 11.0,
                amount: 1,
                ingredients: ["Tomatensauce ", "Mozzarella ", "Gorgonzola ", "Parmesan ", "Ricotta"],
                likes: 210,
                liked: false,
                comments: [
                    {
                        name: "CheeseLover",
                        comment: "Für Käseliebhaber genau das Richtige!",
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
                        comment: "Ein köstliches Baguette mit frischen Zutaten.",
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
                        comment: "Perfekt für den kleinen Hunger zwischendurch.",
                    },
                ],
            },
            {
                dish: "Baguette Vegetarisch",
                price: 5.0,
                amount: 1,
                ingredients: ["Paprika ", "Tomaten ", "Käse ", "Salat "],
                likes: 170,
                liked: false,
                comments: [
                    {
                        name: "VeggieSnackFan",
                        comment: "Ein leichter, vegetarischer Snack.",
                    },
                ],
            },
            {
                dish: "Baguette Hähnchen",
                price: 6.5,
                amount: 1,
                ingredients: ["Hähnchenbrust ", "Käse ", "Tomaten ", "Salat "],
                likes: 200,
                liked: true,
                comments: [
                    {
                        name: "ChickenLover",
                        comment: "Sehr lecker und saftig.",
                    },
                ],
            },
            {
                dish: "Baguette Thunfisch",
                price: 5.5,
                amount: 1,
                ingredients: ["Thunfisch ", "Zwiebeln ", "Tomaten ", "Salat "],
                likes: 180,
                liked: false,
                comments: [
                    {
                        name: "SeafoodSnackFan",
                        comment: "Thunfisch und Salat, einfach und lecker.",
                    },
                ],
            },
        ],
    },
];

let menuBasket = [
   
];
