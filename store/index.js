export const state = () => ({
    products: [
        {
            name: 'bodega',
            imgs: ['/carousel3.jpg', '/vino1.jpg'],
            color: 'purple',
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
            variations: [
                {
                    id: 1,
                    name: '12 triples (a elección)',
                    price: 1200,
                },
                {
                    id: 2,
                    name: '24 triples (a elección)',
                    price: 2200,
                },
                {
                    id: 3,
                    name: '50 triples (a elección)',
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
            variations: [
                {
                    id: 1,
                    name: 'Mediana (2 personas)',
                    img: '/picada peq.jpg',
                    price: 1500,
                },
                {
                    id: 2,
                    name: 'Grande (4 personas)',
                    img: '/picada.jpg',
                    price: 2800,
                },
                {
                    id: 3,
                    name: 'Familiar (8 personas)',
                    img: '/picada grande.jpg',
                    price: 5200,
                },
            ],
            description: 'La mejor selección de fiambres y encurtidos',
            contents: ['jamón crudo', 'jamón cocido', 'queso gouda', 'salame', 'mortadela', 'bondiola', 'aceitunas', 'pepinillos'],
        }
    ],
})