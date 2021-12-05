export const state = () => ({
    products: [
        {
            name: 'bodega',
            imgs: ['/carousel3.jpg', '/vino1.jpg'],
            color: 'purple',
            secondaryColor: '#5c007a',
            description: 'La mejor selección de vinos, cervezas y delicateses',
            variations: [
                {
                    id: 1,
                    name: 'Premium',
                    description: 'Incluye: 2 vinos, 6 cervezas y selección de encurtidos',
                    price: 2500,
                },
                {
                    id: 2,
                    name: 'Gold',
                    description: 'Incluye: 1 vino, 4 cervezas y selección de encurtidos',
                    price: 1980,
                }
            ],
            contents: ['vino 1', 'vino 2', 'cerveza 1', 'cerveza 2', 'cerveza 3', 'cerveza 4', 'cerveza 5'],
        },
        {
            name: 'sandwiches',
            imgs: ['/carousel2.jpg', '/sandw3.jpg'],
            color: 'green',
            secondaryColor: '#003300',
            variations: [
                {
                    id: 1,
                    name: '12 triples',
                    price: 1200,
                },
                {
                    id: 2,
                    name: '24 triples',
                    price: 2200,
                },
                {
                    id: 3,
                    name: '50 triples',
                    price: 4200,
                },
            ],
            description: 'Triples de miga para todos los gustos',
            contents: ['jamón y queso', 'jamón crudo y queso', 'queso y huevo', 'vegetariano', 'tomate y queso']
        },
        {
            name: 'picadas',
            imgs: ['carousel1.jpg', '/picada.jpg'],
            color: 'brown',
            secondaryColor: '#260e04',
            variations: [
                {
                    id: 1,
                    name: 'Mediana',
                    img: '/picada peq.jpg',
                    description: 'Ideal para compartir en pareja.',
                    price: 1500,
                },
                {
                    id: 2,
                    name: 'Grande',
                    img: '/picada.jpg',
                    description: 'Ideal para 4 personas.',
                    price: 2800,
                },
                {
                    id: 3,
                    name: 'Familiar',
                    img: '/picada grande.jpg',
                    description: '¡Para toda la familia! (8 personas)',
                    price: 5200,
                },
            ],
            description: 'La mejor selección de fiambres y encurtidos',
            contents: ['jamón crudo', 'jamón cocido', 'queso gouda', 'salame', 'mortadela', 'bondiola', 'aceitunas', 'pepinillos'],
        }
    ],
    cart: {
        items: {
            bodega: {
                variations: {},
                productSubtotal: 0,
                productQuantity: 0,
            },
            sandwiches: {
                variations: {},
                productSubtotal: 0,
                productQuantity: 0,
            },
            picadas: {
                variations: {},
                productSubtotal: 0,
                productQuantity: 0,
            },
        }, // change to Object, make neccesary changes in components
        cartTotalItems: 0,        
        cartTotalAmount: 0,
    },
    colorPalette: {
        bodega: "purple",
        sandwiches: "green",
        picadas: "brown",
    },
    
});

export const getters = {
    products: state => state.products,
    cart: state => state.cart,
};

export const mutations = {
    addToCart(state, payload) {
        const product = payload.productName
        const variation = payload.variation
        const quantity = payload.quantity

        const productQuantity = state.cart.items[product].productQuantity
        const productSubtotal = state.cart.items[product].productSubtotal

        const cartTotalItems = state.cart.cartTotalItems
        const cartTotalAmount = state.cart.cartTotalAmount
        
        state.cart.items[product].variations[variation.name] = {
            variationQuantity: quantity,
            unitPrice: variation.price,
            variationSubtotal: variation.price * quantity,
        }
        state.cart.items[product].productQuantity = productQuantity + 1
        state.cart.items[product].productSubtotal = productSubtotal + (variation.price)

        state.cart.cartTotalAmount = cartTotalAmount + (variation.price)
        state.cart.cartTotalItems = cartTotalItems + 1
    },
    
    removeFromCart(state, payload) {
        const product = payload.productName
        const variation = payload.variation
        const quantity = payload.quantity

        const productVariation = state.cart.items[product].variations[variation.name]
        const productQuantity = state.cart.items[product].productQuantity
        const productSubtotal = state.cart.items[product].productSubtotal

        const cartTotalItems = state.cart.cartTotalItems
        const cartTotalAmount = state.cart.cartTotalAmount

        productVariation.variationQuantity = quantity
        productVariation.variationSubtotal = variation.price * quantity

        state.cart.items[product].productQuantity = productQuantity - 1
        state.cart.items[product].productSubtotal = productSubtotal - (variation.price)

        state.cart.cartTotalAmount = cartTotalAmount - (variation.price)
        state.cart.cartTotalItems = cartTotalItems - 1
    }

/*
    sandwiches: [
        'Jamón y Queso',
        'Crudo y Queso',
        'Aceituna y Queso',
        'Queso y Huevo',
        'Vegetariano',
        'Tomate y Queso',
        'Queso y Atún'    
    ],
    wines: [
        'Tinto X',
        'Tinto Y',
        'Tinto Z',
        'Blanco X',
        'Blanco Y',
        'Espumoso',
        'Rosado',
    ],
    beers: [
        'Corona',
        'Quilmes',
        'Patagonia',
        'Brahma',
        'Budweiser',
    ],
    coldCuts: [
        'Jamón cocido',
        'Jamón crudo',
        'Salame',
        'Bondiola',
        'Salamín',
        'Leberwurst',
        'Queso gouda',
        'Queso Regianito',
        'Queso Roquefort',
    ],
    nonAlcoholicDrinks: [
        {
            name: 'Coca Cola',
            price: 260,
        },
        {
            name: 'Soda',
            price: 150,
        },
        {
            name: 'Fanta',
            price: 260,
        },
        {
            name: 'Sprite',
            price: 260,
        },
    ],
    */    
    
}
