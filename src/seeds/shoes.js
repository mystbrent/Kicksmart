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
            ],
            tags : 'Running',
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
            tags : 'Running',
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
            tags : 'Running',
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
            tags : 'Step-In',
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
            tags : 'Step-In',
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
            tags : 'Boots',
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
            tags : 'Running',
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
            tags : 'Indoor',
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
            tags : 'Indoor',
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
            brand : 'Nike',
            gender : 'Men',
            brandIcon : 'images/brandIcon1.png',
            name : 'Nike Zoom Rev 2017',
            price : 7500.00,
            image : 'images/basketball1.jpg',
            tags : 'Basketball',
            availableColors : [
                {color : 'gray', quantity : 42},
                {color : 'black', quantity : 12},
            ],
            availableSizes : [
                {size : 11, quantity : 12},
                {size : 10, quantity : 42},
            ]
        },
        {
            brand : 'Adidas',
            gender : 'Men',
            brandIcon : 'images/brandIcon3.png',
            name : 'Adizero IV',
            price : 6000.00,
            image : 'images/basketball2.jpg',
            tags : 'Basketball',
            availableColors : [
                {color : 'white', quantity : 40},
                {color : 'black', quantity : 24},
            ],
            availableSizes : [
                {size : 9, quantity : 24},
                {size : 10, quantity : 40},
            ]
        },
        {
            brand : 'Nike',
            gender : 'Men',
            brandIcon : 'images/brandIcon1.png',
            name : 'Nike Zoom Evidence',
            price : 5000.00,
            image : 'images/basketball3.jpg',
            tags : 'Basketball',
            availableColors : [
                {color : 'gray', quantity : 42},
                {color : 'white', quantity : 12},
            ],
            availableSizes : [
                {size : 11, quantity : 12},
                {size : 10, quantity : 42},
            ]
        },
        {
            brand : 'Nike',
            gender : 'Men',
            brandIcon : 'images/brandIcon1.png',
            name : 'Nike Zoom KD 9 Elite',
            price : 9000.00,
            image : 'images/basketball4.jpg',
            tags : 'Basketball',
            availableColors : [
                {color : 'blue', quantity : 42},
                {color : 'red', quantity : 12},
            ],
            availableSizes : [
                {size : 11, quantity : 12},
                {size : 10, quantity : 42},
            ]
        },
        {
            brand : 'Nike',
            gender : 'Men',
            brandIcon : 'images/brandIcon1.png',
            name : 'Nike Kobe Mamba Instict',
            price : 10000.00,
            image : 'images/basketball5.jpg',
            tags : 'Basketball',
            availableColors : [
                {color : 'gray', quantity : 42},
                {color : 'black', quantity : 12},
            ],
            availableSizes : [
                {size : 11, quantity : 12},
                {size : 10, quantity : 42},
            ]
        },
        {
            brand : 'Nike',
            gender : 'Men',
            brandIcon : 'images/brandIcon1.png',
            name : 'Nike Lebron Witness',
            price : 7500.00,
            image : 'images/basketball6.jpg',
            tags : 'Basketball',
            availableColors : [
                {color : 'yellow', quantity : 42},
                {color : 'orange', quantity : 12},
            ],
            availableSizes : [
                {size : 11, quantity : 12},
                {size : 10, quantity : 42},
            ]
        },
        {
            brand : 'Nike',
            gender : 'Men',
            brandIcon : 'images/brandIcon1.png',
            name : 'Nike Air Jordan I',
            price : 6000.00,
            image : 'images/basketball7.jpg',
            tags : 'Basketball',
            availableColors : [
                {color : 'red', quantity : 42},
                {color : 'silver', quantity : 12},
            ],
            availableSizes : [
                {size : 9, quantity : 12},
                {size : 8, quantity : 42},
            ]
        },
        {
            brand : 'Adidas',
            gender : 'Men',
            brandIcon : 'images/brandIcon3.png',
            name : 'DAME 3 Legacy Shoes',
            price : 5995.00,
            image : 'images/basketball8.jpg',
            tags : 'Basketball',
            availableColors : [
                {color : 'gray', quantity : 42},
                {color : 'white', quantity : 12},
            ],
            availableSizes : [
                {size : 9, quantity : 12},
                {size : 10, quantity : 42},
            ]
        },
        {
            brand : 'Nike',
            gender : 'Men',
            brandIcon : 'images/brandIcon1.png',
            name : 'Nike Air Jordan V',
            price : 12000.00,
            image : 'images/basketball9.jpg',
            tags : 'Basketball',
            availableColors : [
                {color : 'gray', quantity : 42},
                {color : 'black', quantity : 12},
            ],
            availableSizes : [
                {size : 11, quantity : 12},
                {size : 10, quantity : 42},
            ]
        },
        {
            brand : 'Nike',
            gender : 'Men',
            brandIcon : 'images/brandIcon1.png',
            name : 'Nike Zoom 2015',
            price : 5500.00,
            image : 'images/basketball10.jpg',
            tags : 'Basketball',
            availableColors : [
                {color : 'gray', quantity : 42},
                {color : 'black', quantity : 12},
            ],
            availableSizes : [
                {size : 11, quantity : 12},
                {size : 10, quantity : 42},
            ]
        },
        {
            brand : 'Timberland',
            gender : 'Men',
            brandIcon : 'images/brandIcon8.png',
            name : 'Timberland Nellie Chukka',
            price : 8000.00,
            image : 'images/boots1.jpg',
            tags : 'Boots',
            availableColors : [
                {color : 'brown', quantity : 42},
                {color : 'black', quantity : 23},
            ],
            availableSizes : [
                {size : 8, quantity : 12},
                {size : 9, quantity : 42},
                {size : 10, quantity : 11}
            ]
        },
        {
            brand : 'Rockport',
            gender : 'Men',
            brandIcon : 'images/brandIcon9.jpg',
            name : 'Jetty Point Mid Cut Boots ',
            price : 7000.00,
            image : 'images/boots2.jpg',
            tags : 'Boots',
            availableColors : [
                {color : 'brown', quantity : 42},
                {color : 'black', quantity : 23},
            ],
            availableSizes : [
                {size : 8, quantity : 12},
                {size : 9, quantity : 42},
                {size : 10, quantity : 11}
            ]
        },
        {
            brand : 'Rockport',
            gender : 'Men',
            brandIcon : 'images/brandIcon9.jpg',
            name : 'Cold Springs Elkhart Boots ',
            price : 11000.00,
            image : 'images/boots3.jpg',
            tags : 'Boots',
            availableColors : [
                {color : 'brown', quantity : 42},
                {color : 'black', quantity : 23},
            ],
            availableSizes : [
                {size : 8, quantity : 12},
                {size : 9, quantity : 42},
                {size : 10, quantity : 11}
            ]
        },
        {
            brand : 'Rockport',
            gender : 'Men',
            brandIcon : 'images/brandIcon9.jpg',
            name : 'World Explorer High Boots ',
            price : 10000.00,
            image : 'images/boots4.jpg',
            tags : 'Boots',
            availableColors : [
                {color : 'brown', quantity : 42},
                {color : 'black', quantity : 23},
            ],
            availableSizes : [
                {size : 8, quantity : 12},
                {size : 9, quantity : 42},
                {size : 10, quantity : 11}
            ]
        },
        {
            brand : 'Rockport',
            gender : 'Women',
            brandIcon : 'images/brandIcon9.jpg',
            name : 'Urban Retreat Chelsea ',
            price : 10000.00,
            image : 'images/boots5.jpg',
            tags : 'Boots',
            availableColors : [
                {color : 'brown', quantity : 42},
                {color : 'black', quantity : 23},
            ],
            availableSizes : [
                {size : 8, quantity : 12},
                {size : 9, quantity : 42},
                {size : 10, quantity : 11}
            ]
        },
        {
            brand : 'Rockport',
            gender : 'Women',
            brandIcon : 'images/brandIcon9.jpg',
            name : 'Classic Break Cap Toe Zip Boots ',
            price : 7000.00,
            image : 'images/boots6.jpg',
            tags : 'Boots',
            availableColors : [
                {color : 'brown', quantity : 42},
                {color : 'black', quantity : 23},
            ],
            availableSizes : [
                {size : 8, quantity : 12},
                {size : 9, quantity : 42},
                {size : 10, quantity : 11}
            ]
        },
        {
            brand : 'Timberland Classic Lug Boots',
            gender : 'Women',
            brandIcon : 'images/brandIcon8.png',
            name : 'Timberland Nellie Chukka',
            price : 8000.00,
            image : 'images/boots7.jpg',
            tags : 'Boots',
            availableColors : [
                {color : 'brown', quantity : 42},
                {color : 'black', quantity : 23},
            ],
            availableSizes : [
                {size : 8, quantity : 12},
                {size : 9, quantity : 42},
                {size : 10, quantity : 11}
            ]
        },
        {
            brand : 'Timberland',
            gender : 'Women',
            brandIcon : 'images/brandIcon8.png',
            name : 'Timberland Adventure Cupsole Boots',
            price : 8000.00,
            image : 'images/boots8.jpg',
            tags : 'Boots',
            availableColors : [
                {color : 'brown', quantity : 42},
                {color : 'black', quantity : 23},
            ],
            availableSizes : [
                {size : 8, quantity : 12},
                {size : 9, quantity : 42},
                {size : 10, quantity : 11}
            ]
        },
        {
            brand : 'Timberland',
            gender : 'Women',
            brandIcon : 'images/brandIcon8.png',
            name : 'Timberland Hookset Boots',
            price : 8000.00,
            image : 'images/boots9.jpg',
            tags : 'Boots',
            availableColors : [
                {color : 'brown', quantity : 42},
                {color : 'black', quantity : 23},
            ],
            availableSizes : [
                {size : 8, quantity : 12},
                {size : 9, quantity : 42},
                {size : 10, quantity : 11}
            ]
        },
        {
            brand : 'Timberland',
            gender : 'Women',
            brandIcon : 'images/brandIcon8.png',
            name : 'Timberland Premium Chukka',
            price : 8000.00,
            image : 'images/boots10.jpg',
            tags : 'Boots',
            availableColors : [
                {color : 'brown', quantity : 42},
                {color : 'black', quantity : 23},
            ],
            availableSizes : [
                {size : 8, quantity : 12},
                {size : 9, quantity : 42},
                {size : 10, quantity : 11}
            ]
        },
        {
            brand : 'Gibi',
            gender : 'Men',
            brandIcon : 'images/brandIcon11.png',
            name : 'Gibi Men Formal Shoes',
            price : 4000.00,
            image : 'images/formal1.jpg',
            tags : 'Formal',
            availableColors : [
                {color : 'brown', quantity : 42},
                {color : 'black', quantity : 23},
            ],
            availableSizes : [
                {size : 8, quantity : 12},
                {size : 9, quantity : 42},
                {size : 10, quantity : 11}
            ]
        },
        {
            brand : 'Gibi',
            gender : 'Men',
            brandIcon : 'images/brandIcon11.png',
            name : 'Gibi Men Brown Formal',
            price : 4500.00,
            image : 'images/formal2.jpg',
            tags : 'Formal',
            availableColors : [
                {color : 'brown', quantity : 63},
            ],
            availableSizes : [
                {size : 8, quantity : 12},
                {size : 9, quantity : 42},
                {size : 10, quantity : 11}
            ]
        },
        {
            brand : 'Gibi',
            gender : 'Men',
            brandIcon : 'images/brandIcon11.png',
            name : 'Gibi Men Lace up Sneakers',
            price : 5000.00,
            image : 'images/formal3.jpg',
            tags : 'Formal',
            availableColors : [
                {color : 'brown', quantity : 42},
                {color : 'black', quantity : 23},
            ],
            availableSizes : [
                {size : 8, quantity : 12},
                {size : 9, quantity : 42},
                {size : 10, quantity : 11}
            ]
        },
        {
            brand : 'Clarks',
            gender : 'Men',
            brandIcon : 'images/brandIcon6.png',
            name : 'Clarks Men Formal Shoes',
            price : 6000.00,
            image : 'images/formal4.jpg',
            tags : 'Formal',
            availableColors : [
                {color : 'brown', quantity : 42},
                {color : 'black', quantity : 23},
            ],
            availableSizes : [
                {size : 8, quantity : 12},
                {size : 9, quantity : 42},
                {size : 10, quantity : 11}
            ]
        },
        {
            brand : 'Clarks',
            gender : 'Men',
            brandIcon : 'images/brandIcon6.png',
            name : 'Clarks Wallabee Men',
            price : 6000.00,
            image : 'images/formal5.jpg',
            tags : 'Formal',
            availableColors : [
                {color : 'brown', quantity : 42},
                {color : 'black', quantity : 23},
            ],
            availableSizes : [
                {size : 8, quantity : 12},
                {size : 9, quantity : 42},
                {size : 10, quantity : 11}
            ]
        },
        {
            brand : 'Clarks',
            gender : 'Men',
            brandIcon : 'images/brandIcon6.png',
            name : 'Clarks Men Desert Trek',
            price : 6000.00,
            image : 'images/formal6.jpg',
            tags : 'Formal',
            availableColors : [
                {color : 'maroon', quantity : 42},
                {color : 'black', quantity : 23},
            ],
            availableSizes : [
                {size : 8, quantity : 12},
                {size : 9, quantity : 42},
                {size : 10, quantity : 11}
            ]
        },
        {
            brand : 'Clarks',
            gender : 'Men',
            brandIcon : 'images/brandIcon6.png',
            name : 'Clarks Silver Wannabee',
            price : 6000.00,
            image : 'images/indoor1.jpg',
            tags : 'Formal',
            availableColors : [
                {color : 'gray', quantity : 42},
                {color : 'maroon', quantity : 23},
            ],
            availableSizes : [
                {size : 8, quantity : 12},
                {size : 9, quantity : 42},
                {size : 10, quantity : 11}
            ]
        },
        {
            brand : 'Clarks',
            gender : 'Men',
            brandIcon : 'images/brandIcon6.png',
            name : 'Clarks Men No Lace',
            price : 6000.00,
            image : 'images/indoor2.jpg',
            tags : 'Formal',
            availableColors : [
                {color : 'brown', quantity : 42},
                {color : 'black', quantity : 23},
            ],
            availableSizes : [
                {size : 8, quantity : 12},
                {size : 9, quantity : 42},
                {size : 10, quantity : 11}
            ]
        },
        {
            brand : 'Clarks',
            gender : 'Men',
            brandIcon : 'images/brandIcon6.png',
            name : 'Clarks Men Laced',
            price : 6000.00,
            image : 'images/indoor3.jpeg',
            tags : 'Formal',
            availableColors : [
                {color : 'brown', quantity : 42},
                {color : 'black', quantity : 23},
            ],
            availableSizes : [
                {size : 8, quantity : 12},
                {size : 9, quantity : 42},
                {size : 10, quantity : 11}
            ]
        },
        {
            brand : 'Nike',
            gender : 'Men',
            brandIcon : 'images/brandIcon1.png',
            name : 'Nike Mercurial Victory VI',
            price : 7000.00,
            image : 'images/indoor4.jpg',
            tags : 'In-Door',
            availableColors : [
                {color : 'gray', quantity : 42},
                {color : 'black', quantity : 23},
            ],
            availableSizes : [
                {size : 8, quantity : 12},
                {size : 9, quantity : 42},
                {size : 10, quantity : 11}
            ]
        },
        {
            brand : 'Nike',
            gender : 'Men',
            brandIcon : 'images/brandIcon1.png',
            name : 'Nike HyperVenom X',
            price : 8000.00,
            image : 'images/indoor6.jpg',
            tags : 'In-Door',
            availableColors : [
                {color : 'orange', quantity : 42},
                {color : 'yellow', quantity : 12},
                {color : 'green', quantity : 11},
            ],
            availableSizes : [
                {size : 8, quantity : 12},
                {size : 9, quantity : 42},
                {size : 10, quantity : 11}
            ]
        },
        {
            brand : 'Nike',
            gender : 'Men',
            brandIcon : 'images/brandIcon1.png',
            name : 'Nike Magista X',
            price : 6500.00,
            image : 'images/indoor7.jpg',
            tags : 'In-Door',
            availableColors : [
                {color : 'green', quantity : 42},
                {color : 'pink', quantity : 23},
            ],
            availableSizes : [
                {size : 8, quantity : 12},
                {size : 9, quantity : 42},
                {size : 10, quantity : 11}
            ]
        },
        {
            brand : 'Nike',
            gender : 'Men',
            brandIcon : 'images/brandIcon1.png',
            name : 'Nike Tiempo Genio II',
            price : 8000.00,
            image : 'images/indoor8.jpg',
            tags : 'In-Door',
            availableColors : [
                {color : 'white', quantity : 42},
                {color : 'black', quantity : 23},
            ],
            availableSizes : [
                {size : 8, quantity : 12},
                {size : 9, quantity : 42},
                {size : 10, quantity : 11}
            ]
        },
        {
            brand : 'Adidas',
            gender : 'Men',
            brandIcon : 'images/brandIcon3.png',
            name : 'Adidas Ace Tango',
            price : 7000.00,
            image : 'images/indoor9.jpg',
            tags : 'In-Door',
            availableColors : [
                {color : 'green', quantity : 42},
                {color : 'yellow', quantity : 23},
            ],
            availableSizes : [
                {size : 8, quantity : 12},
                {size : 9, quantity : 42},
                {size : 10, quantity : 11}
            ]
        },
        {
            brand : 'Adidas',
            gender : 'Men',
            brandIcon : 'images/brandIcon3.png',
            name : 'Adidas Primeknit Firm',
            price : 7000.00,
            image : 'images/indoor10.jpg',
            tags : 'In-Door',
            availableColors : [
                {color : 'black', quantity : 42},
                {color : 'gray', quantity : 23},
            ],
            availableSizes : [
                {size : 8, quantity : 12},
                {size : 9, quantity : 42},
                {size : 10, quantity : 11}
            ]
        },
        {
            brand : 'Sketchers',
            gender : 'Women',
            brandIcon : 'images/brandIcon10.png',
            name : 'Sketchers Running Women',
            price : 4000.00,
            image : 'images/running1.jpg',
            tags : 'Running',
            availableColors : [
                {color : 'black', quantity : 42},
                {color : 'brown', quantity : 23},
            ],
            availableSizes : [
                {size : 8, quantity : 12},
                {size : 6, quantity : 42},
                {size : 7, quantity : 11}
            ]
        },
        {
            brand : 'Nike',
            gender : 'Men',
            brandIcon : 'images/brandIcon1.png',
            name : 'Nike Lunartempo',
            price : 5200.00,
            image : 'images/running6.jpg',
            tags : 'Running',
            availableColors : [
                {color : 'black', quantity : 42},
                {color : 'gray', quantity : 23},
            ],
            availableSizes : [
                {size : 8, quantity : 12},
                {size : 9, quantity : 42},
                {size : 10, quantity : 11}
            ]
        },
        {
            brand : 'Nike',
            gender : 'Men',
            brandIcon : 'images/brandIcon1.png',
            name : 'Nike Free Trainer',
            price : 4000.00,
            image : 'images/running7.jpg',
            tags : 'Running',
            availableColors : [
                {color : 'black', quantity : 42},
                {color : 'gray', quantity : 23},
            ],
            availableSizes : [
                {size : 8, quantity : 12},
                {size : 9, quantity : 42},
                {size : 10, quantity : 11}
            ]
        },
        {
            brand : 'Nike',
            gender : 'Men',
            brandIcon : 'images/brandIcon1.png',
            name : 'Nike Turbo',
            price : 3000.00,
            image : 'images/running8.jpg',
            tags : 'Running',
            availableColors : [
                {color : 'black', quantity : 42},
                {color : 'gray', quantity : 23},
            ],
            availableSizes : [
                {size : 8, quantity : 12},
                {size : 9, quantity : 42},
                {size : 10, quantity : 11}
            ]
        },
        {
            brand : 'Nike',
            gender : 'Men',
            brandIcon : 'images/brandIcon1.png',
            name : 'Nike Lunartempo III',
            price : 6000.00,
            image : 'images/running9.jpg',
            tags : 'Running',
            availableColors : [
                {color : 'white', quantity : 42},
                {color : 'silver', quantity : 23},
            ],
            availableSizes : [
                {size : 8, quantity : 12},
                {size : 9, quantity : 42},
                {size : 10, quantity : 11}
            ]
        },
        {
            brand : 'Nike',
            gender : 'Men',
            brandIcon : 'images/brandIcon1.png',
            name : 'Nike Roshe Run V',
            price : 4500.00,
            image : 'images/running10.jpg',
            tags : 'Running',
            availableColors : [
                {color : 'black', quantity : 42},
                {color : 'gray', quantity : 23},
            ],
            availableSizes : [
                {size : 8, quantity : 12},
                {size : 9, quantity : 42},
                {size : 10, quantity : 11}
            ]
        },
        {
            brand : 'Adidas',
            gender : 'Men',
            brandIcon : 'images/brandIcon3.png',
            name : 'Adidas Mana Bounce',
            price : 5200.00,
            image : 'images/running11.jpg',
            tags : 'Running',
            availableColors : [
                {color : 'black', quantity : 42},
                {color : 'gray', quantity : 23},
            ],
            availableSizes : [
                {size : 8, quantity : 12},
                {size : 9, quantity : 42},
                {size : 10, quantity : 11}
            ]
        },
        {
            brand : 'Adidas',
            gender : 'Men',
            brandIcon : 'images/brandIcon3.png',
            name : 'Adidas Duramo Trainer',
            price : 2500.00,
            image : 'images/running12.jpg',
            tags : 'Running',
            availableColors : [
                {color : 'black', quantity : 42},
                {color : 'white', quantity : 23},
            ],
            availableSizes : [
                {size : 8, quantity : 12},
                {size : 9, quantity : 42},
                {size : 10, quantity : 11}
            ]
        },
        {
            brand : 'Adidas',
            gender : 'Men',
            brandIcon : 'images/brandIcon3.png',
            name : 'Adidas Element Refresh',
            price : 4600.00,
            image : 'images/running13.jpg',
            tags : 'Running',
            availableColors : [
                {color : 'blue', quantity : 42},
                {color : 'cyan', quantity : 23},
            ],
            availableSizes : [
                {size : 8, quantity : 12},
                {size : 9, quantity : 42},
                {size : 10, quantity : 11}
            ]
        },
        {
            brand : 'Adidas',
            gender : 'Men',
            brandIcon : 'images/brandIcon3.png',
            name : 'Adidas Boost',
            price : 2500.00,
            image : 'images/running5.jpg',
            tags : 'Running',
            availableColors : [
                {color : 'black', quantity : 42},
                {color : 'purple', quantity : 23},
            ],
            availableSizes : [
                {size : 8, quantity : 12},
                {size : 9, quantity : 42},
                {size : 10, quantity : 11}
            ]
        },
        {
            brand : 'Lacoste',
            gender : 'Men',
            brandIcon : 'images/brandIcon2.png',
            name : 'Lacoste White Step-In',
            price : 5500.00,
            image : 'images/stepin1.jpg',
            tags : 'Step-In',
            availableColors : [
                {color : 'white', quantity : 65},
            ],
            availableSizes : [
                {size : 8, quantity : 12},
                {size : 9, quantity : 42},
                {size : 10, quantity : 11}
            ]
        },
        {
            brand : 'Lacoste',
            gender : 'Men',
            brandIcon : 'images/brandIcon2.png',
            name : 'Lacoste Premium Step-In',
            price : 7500.00,
            image : 'images/stepin2.jpg',
            tags : 'Step-In',
            availableColors : [
                {color : 'white', quantity : 42},
                {color : 'burgundy', quantity : 23}
            ],
            availableSizes : [
                {size : 8, quantity : 12},
                {size : 9, quantity : 42},
                {size : 10, quantity : 11}
            ]
        },
        {
            brand : 'Lacoste',
            gender : 'Men',
            brandIcon : 'images/brandIcon2.png',
            name : 'Lacoste Brown Step-In',
            price : 5500.00,
            image : 'images/stepin3.jpg',
            tags : 'Step-In',
            availableColors : [
                {color : 'brown', quantity : 65},
            ],
            availableSizes : [
                {size : 8, quantity : 12},
                {size : 9, quantity : 42},
                {size : 10, quantity : 11}
            ]
        },
        {
            brand : 'Lacoste',
            gender : 'Men',
            brandIcon : 'images/brandIcon2.png',
            name : 'Lacoste Black Step-In',
            price : 5500.00,
            image : 'images/stepin6.jpg',
            tags : 'Step-In',
            availableColors : [
                {color : 'black', quantity : 65},
            ],
            availableSizes : [
                {size : 8, quantity : 12},
                {size : 9, quantity : 42},
                {size : 10, quantity : 11}
            ]
        },
        {
            brand : 'Res Toe Run',
            gender : 'Women',
            brandIcon : 'images/brandIcon12.png',
            name : 'Low Cut Sandals',
            price : 5000.00,
            image : 'images/sandal2.jpg',
            tags : 'Sandals',
            availableColors : [
                {color : 'pink', quantity : 65},
            ],
            availableSizes : [
                {size : 5, quantity : 12},
                {size : 6, quantity : 42},
                {size : 7, quantity : 11}
            ]
        },
        {
            brand : 'Res Toe Run',
            gender : 'Women',
            brandIcon : 'images/brandIcon12.png',
            name : 'High Cut Sandals',
            price : 5000.00,
            image : 'images/sandal3.jpg',
            tags : 'Sandals',
            availableColors : [
                {color : 'silver', quantity : 65},
            ],
            availableSizes : [
                {size : 5, quantity : 12},
                {size : 6, quantity : 42},
                {size : 7, quantity : 11}
            ]
        },
        {
            brand : 'Res Toe Run',
            gender : 'Women',
            brandIcon : 'images/brandIcon12.png',
            name : 'Flat Sandals',
            price : 4000.00,
            image : 'images/sandal4.jpg',
            tags : 'Sandals',
            availableColors : [
                {color : 'brown', quantity : 65},
            ],
            availableSizes : [
                {size : 5, quantity : 12},
                {size : 6, quantity : 42},
                {size : 7, quantity : 11}
            ]
        },
        {
            brand : 'Res Toe Run',
            gender : 'Women',
            brandIcon : 'images/brandIcon12.png',
            name : 'Mid Heel Sandals',
            price : 5000.00,
            image : 'images/sandal5.jpg',
            tags : 'Sandals',
            availableColors : [
                {color : 'silver', quantity : 65},
            ],
            availableSizes : [
                {size : 5, quantity : 12},
                {size : 6, quantity : 42},
                {size : 7, quantity : 11}
            ]
        },
        {
            brand : 'Res Toe Run',
            gender : 'Women',
            brandIcon : 'images/brandIcon12.png',
            name : 'Flat Heel Sandals',
            price : 7000.00,
            image : 'images/sandal6.jpg',
            tags : 'Sandals',
            availableColors : [
                {color : 'white', quantity : 65},
            ],
            availableSizes : [
                {size : 5, quantity : 12},
                {size : 6, quantity : 42},
                {size : 7, quantity : 11}
            ]
        },
        {
            brand : 'Res Toe Run',
            gender : 'Women',
            brandIcon : 'images/brandIcon12.png',
            name : 'Low Opened Sandals',
            price : 5000.00,
            image : 'images/sandal7.jpg',
            tags : 'Sandals',
            availableColors : [
                {color : 'black', quantity : 65},
            ],
            availableSizes : [
                {size : 5, quantity : 12},
                {size : 6, quantity : 42},
                {size : 7, quantity : 11}
            ]
        },
        {
            brand : 'Res Toe Run',
            gender : 'Women',
            brandIcon : 'images/brandIcon12.png',
            name : 'Mid Closed Sandals',
            price : 6000.00,
            image : 'images/sandal8.jpg',
            tags : 'Sandals',
            availableColors : [
                {color : 'brown', quantity : 65},
            ],
            availableSizes : [
                {size : 5, quantity : 12},
                {size : 6, quantity : 42},
                {size : 7, quantity : 11}
            ]
        },
    ]
    const shoesService = app.service('/api/shoes');
    await shoesService.remove(null);
    return Promise.all(shoes.map(shoe => shoesService.create(shoe)));
};

export default seed;