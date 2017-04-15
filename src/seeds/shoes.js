import createServer from '../app';

const seed = async () => {
    const app = await createServer();

    const shoes = [
        {
            brand : 'Nike',
            gender : 'Men',
            brandIcon : 'images/brandIcon1.png',
            name : 'Roshe Run XI',
            price : 5500.00,
            image : 'images/shoes1.jpg',
            availableColors : [
                {color : 'red', quantity : 0},
                {color : 'blue', quantity : 0},
                {color : 'white', quantity : 34},
                {color : 'black', quantity : 12},
            ],
            availableSizes : [
                {size : 7, quantity : 0},
                {size : 8, quantity : 12},
                {size : 9, quantity : 0},
                {size : 10, quantity : 34},
            ]
            // availableColors : ['red', 'blue', 'white', 'black'],
            // availableSizes : [5, 6, 7, 8 ,9, 10],
            
        },
        {
            brand : 'Nike',
            gender : 'Women',
            brandIcon : 'images/brandIcon1.png',
            name : 'Roshe Run X',
            price : 4500.00,
            image : 'images/shoes2.jpg',
            availableColors : [
                {color : 'white', quantity : 42},
                {color : 'blue', quantity : 34},
                {color : 'black', quantity : 12},
            ],
            availableSizes : [
                {size : 11, quantity : 12},
                {size : 9, quantity : 42},
                {size : 10, quantity : 34},
            ]
            
        },
        {
            brand : 'Nike',
            gender : 'Men',
            brandIcon : 'images/brandIcon1.png',
            name : 'Zoom XI',
            price : 5000.00,
            image : 'images/shoes3.jpg',
            availableColors : [
                {color : 'white', quantity : 35},
                {color : 'blue', quantity : 32},
                {color : 'black', quantity : 11},
            ],
            availableSizes : [
                {size : 11, quantity : 11},
                {size : 9, quantity : 35},
                {size : 8, quantity : 32},
            ]
        },
        {
            brand : 'Lacoste',
            gender : 'Men',
            brandIcon : 'images/brandIcon2.png',
            name : 'Threadded Low Cut',
            price : 6500.00,
            image : 'images/shoes4.jpg',
            availableColors : [
                {color : 'white', quantity : 42},
                {color : 'black', quantity : 12},
            ],
            availableSizes : [
                {size : 11, quantity : 12},
                {size : 9, quantity : 42},
            ]
        },
        {
            brand : 'Lacoste',
            gender : 'Women',
            brandIcon : 'images/brandIcon2.png',
            name : 'Slimmed Low Cut',
            price : 6000.00,
            image : 'images/shoes5.jpg',
            availableColors : [
                {color : 'white', quantity : 22},
                {color : 'black', quantity : 32},
            ],
            availableSizes : [
                {size : 11, quantity : 12},
                {size : 9, quantity : 20},
                {size : 10, quantity : 12},
                {size : 12, quantity : 10}
            ]
        },
        {
            brand : 'Lacoste',
            gender : 'Men',
            brandIcon : 'images/brandIcon2.png',
            name : 'Threadded High Rise',
            price : 7500.00,
            image : 'images/shoes6.jpg',
            availableColors : [
                {color : 'white', quantity : 42},
                {color : 'blue', quantity : 34},
                {color : 'black', quantity : 12},
            ],
            availableSizes : [
                {size : 11, quantity : 12},
                {size : 9, quantity : 42},
                {size : 10, quantity : 34},
            ]
        },
        {
            brand : 'Adidas',
            gender : 'Men',
            brandIcon : 'images/brandIcon3.png',
            name : 'Adiprene',
            price : 5500.00,
            image : 'images/shoes7.jpg',
            availableColors : [
                {color : 'white', quantity : 42},
                {color : 'blue', quantity : 34},
                {color : 'black', quantity : 12},
            ],
            availableSizes : [
                {size : 11, quantity : 12},
                {size : 9, quantity : 42},
                {size : 10, quantity : 34},
            ]
        },
        {
            brand : 'Adidas',
            gender : 'Men',
            brandIcon : 'images/brandIcon3.png',
            name : 'Supercolor XI',
            price : 6000.00,
            image : 'images/shoes8.jpg',
            availableColors : [
                {color : 'red', quantity : 42},
                {color : 'blue', quantity : 34},
                {color : 'green', quantity : 12},
            ],
            availableSizes : [
                {size : 11, quantity : 12},
                {size : 9, quantity : 42},
                {size : 10, quantity : 34},
            ]
        },
        {
            brand : 'Adidas',
            gender : 'Women',
            brandIcon : 'images/brandIcon3.png',
            name : 'Supercolor X',
            price : 5500.00,
            image : 'images/shoes9.jpg',
            availableColors : [
                {color : 'white', quantity : 42},
                {color : 'black', quantity : 12},
            ],
            availableSizes : [
                {size : 11, quantity : 12},
                {size : 9, quantity : 42},
            ]
            
        },
    ]
    const shoesService = app.service('/api/shoes');
    await shoesService.remove(null);
    return Promise.all(shoes.map(shoe => shoesService.create(shoe)));
};

export default seed;