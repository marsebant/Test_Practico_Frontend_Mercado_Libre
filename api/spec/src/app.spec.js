const axios = require('axios'); 
const localhost = 'http://localhost:3000/api';
const urls = ['/items?q=', '/items/'];
const authorObject = {name: 'Marcelo S.', lastname: 'Antuña'};
/* Info from Mercado Libre API
 * GET: https://api.mercadolibre.com/sites/MLA/search?q=zapatillas&limit=4&offset=0
 */
const searchObjects = {
    zapatillas: {
        text: 'zapatillas',
        categories: ['Ropa y Accesorios', 'Calzado', 'Zapatillas']
    },
    nonExistentItem: {
        text: 'sometrashtext',
        categories: [],
        items: []
    }
};
/* Info from Mercado Libre API
 * GET: https://api.mercadolibre.com/items/MLA842763132
 * GET: https://api.mercadolibre.com/items/MLA842763132/description
 * GET: https://api.mercadolibre.com/categories/MLA60634
 * Date: 03/08/2020
 */
const detailObjects = {
    insignia: {
        text: 'MLA842763132',
        item: {
            id: 'MLA842763132',
            title: 'Insignia Ford 2.0 Original',
            price: {
                currency: '$',
                amount: 1099,
                decimals: 0
            },
            picture: 'https://mla-s1-p.mlstatic.com/854475-MLA41044593182_032020-O.jpg',
            condition: 'Nuevo',
            free_shipping: false,
            sold_quantity: 0,
            description: 'Insignia Ford 2.0. Original',
            permalink: 'https://articulo.mercadolibre.com.ar/MLA-842763132-insignia-ford-20-original-_JM'
        },
        categories: ['Accesorios para Vehículos', 'Repuestos Autos y Camionetas', 'Repuestos de Exterior', 'Insignias'],
    },
    nonExistentId: {
        text: 'MLA12343'
    }
}

describe('APP', () => {
    let server;

    beforeAll(() => {
        server = require('../../src/server');
    });
    afterAll(() => {
        server.close();
    });

    describe(`GET ${urls[0]}${searchObjects.zapatillas.text}`, () => {
        let response = {};
        beforeAll((done) => {
            axios.get(`${localhost}${urls[0]}${searchObjects.zapatillas.text}`)
                .then(res => {response = res;})
                .catch(error => {response = error;})
                .then(() => {done();}
                );
        });
        it('Should have Status 200', () => {
            expect(response.status).toBe(200);
        });
        describe('Returned object structure', () => {
            it('Should have \"author\" property', () => {
                expect(response.data.author).toBeDefined();
            });
            it('Should have \"categories\" property', () => {
                expect(response.data.categories).toBeDefined();
            });
            it('Should have \"items\" property', () => {
                expect(response.data.items).toBeDefined();
            });
            describe('Author Object structure', () => {
                it('Should have \"name\" property', () => {
                    expect(response.data.author.name).toBeDefined();
                });
                it('Should have \"lastname\" property', () => {
                    expect(response.data.author.lastname).toBeDefined();
                });
                it('All Author properties should be string', () => {
                    for (const key in response.data.author) {
                        if (response.data.author.hasOwnProperty(key)) {
                            expect(response.data.author[key]).toBeInstanceOf(String);                            
                        }
                    }
                });
            });
            describe('Categories property structure', () => {
                it('Categories should be an array', () => {
                    expect(response.data.categories.length).toBeGreaterThanOrEqual(0);
                });
                it('Every category item should be string', () => {
                    response.data.categories.forEach(element => {
                        expect(element).toBeInstanceOf(String);
                    });
                });
            });
            describe('Items property structure', () => {
                it('Should be an array', () => {
                    expect(response.data.items.length).toBeGreaterThanOrEqual(0);
                });
                it('Should have \"id\" property', () => {
                    expect(response.data.items[0].id).toBeDefined();
                });
                it('Should have \"title\" property', () => {
                    expect(response.data.items[0].title).toBeDefined();
                });
                it('Should have \"price\" property', () => {
                    expect(response.data.items[0].price).toBeDefined();
                });
                describe('Price property structure', () => {
                    it('Should have \"currency\" property', () => {
                        expect(response.data.items[0].price.currency).toBeDefined();
                    });
                    it('Should have \"amount\" property', () => {
                        expect(response.data.items[0].price.amount).toBeDefined();
                    });
                    it('Should have \"decimals\" property', () => {
                        expect(response.data.items[0].price.decimals).toBeDefined();
                    });
                });
                it('Should have \"picture\" property', () => {
                    expect(response.data.items[0].picture).toBeDefined();
                });
                it('Should have \"condition\" property', () => {
                    expect(response.data.items[0].condition).toBeDefined();
                });
                it('Should have \"free_shipping\" property', () => {
                    expect(response.data.items[0].free_shipping).toBeDefined();
                });
                describe('Items types', () => {
                    it('Should be string', () => {
                        expect(response.data.items[0].id).toBeInstanceOf(String);
                        expect(response.data.items[0].title).toBeInstanceOf(String);
                        expect(response.data.items[0].price.currency).toBeInstanceOf(String);
                        expect(response.data.items[0].picture).toBeInstanceOf(String);
                        expect(response.data.items[0].condition).toBeInstanceOf(String);
                    });
                    it('Should be number', () => {
                        expect(response.data.items[0].price.amount).toBeInstanceOf(Number);
                        expect(response.data.items[0].price.decimals).toBeInstanceOf(Number);
                    });
                    it('Should be boolean', () => {
                        expect(response.data.items[0].free_shipping).toBeInstanceOf(Boolean);
                    });
                });
            });
        });
        describe('Returned object values', () => {
            describe('Author values', () => {
                it('Should be \"{name: Marcelo S., lastname: Antuña}\"', () => {
                    expect(response.data.author).toEqual(authorObject);
                });
            });
            describe('Categories values', () => {
                it(`Should be \"${searchObjects.zapatillas.categories[0]}\" --> 
                \"${searchObjects.zapatillas.categories[1]}\" --> 
                \"${searchObjects.zapatillas.categories[2]}\"`, () => {
                    expect(response.data.categories).toEqual(searchObjects.zapatillas.categories);
                });
            });
            describe('Items values', () => {
                it('Should have 4 items', () => {
                    expect(response.data.items.length).toBe(4);
                });
            });
        });
    });

    describe(`GET ${urls[0]}${searchObjects.nonExistentItem.text}`, () => {
        let response = {};
        beforeAll((done) => {
            axios.get(`${localhost}${urls[0]}${searchObjects.nonExistentItem.text}`)
                .then(res => {response = res;})
                .catch(error => {response = error;})
                .then(() => {done();}
                );
        });
        it('Should have Status 200', () => {
            expect(response.status).toBe(200);
        });
        describe('Returned object structure', () => {
            it('Should have \"author\" property', () => {
                expect(response.data.author).toBeDefined();
            });
            it('Should have \"categories\" property', () => {
                expect(response.data.categories).toBeDefined();
            });
            it('Should have \"items\" property', () => {
                expect(response.data.items).toBeDefined();
            });
            describe('Categories', () => {
                it('Should be equal to \"searchObjects.nonExistentItem.categories\"', () => {
                    expect(response.data.categories).toEqual(searchObjects.nonExistentItem.categories);
                });
            });
            describe('Items', () => {
                it('Should be equal to \"searchObjects.nonExistentItem.items\"', () => {
                    expect(response.data.items).toEqual(searchObjects.nonExistentItem.items);
                });
            });
        });
    });

    describe(`GET ${urls[1]}${detailObjects.insignia.text}`, () => {
        let response = {};
        beforeAll((done) => {
            axios.get(`${localhost}${urls[1]}${detailObjects.insignia.text}`)
                .then(res => {response = res;})
                .catch(error => {response = error;})
                .then(() => {done();}
                );
        });
        it('Should have Status 200', () => {
            expect(response.status).toBe(200);
        });
        describe('Returned object structure', () => {
            it('Should have \"author\" property', () => {
                expect(response.data.author).toBeDefined();
            });
            it('Should have \"item\" property', () => {
                expect(response.data.item).toBeDefined();
            });
            describe('Author Object structure', () => {
                it('Should have \"name\" property', () => {
                    expect(response.data.author.name).toBeDefined();
                });
                it('Should have \"lastname\" property', () => {
                    expect(response.data.author.lastname).toBeDefined();
                });
                it('All Author properties should be string', () => {
                    for (const key in response.data.author) {
                        if (response.data.author.hasOwnProperty(key)) {
                            expect(response.data.author[key]).toBeInstanceOf(String);                            
                        }
                    }
                });
            });
            describe('Item property structure', () => {
                it('Should have \"id\" property', () => {
                    expect(response.data.item.id).toBeDefined();
                });
                it('Should have \"title\" property', () => {
                    expect(response.data.item.title).toBeDefined();
                });
                it('Should have \"price\" property', () => {
                    expect(response.data.item.price).toBeDefined();
                });
                describe('Price property structure', () => {
                    it('Should have \"currency\" property', () => {
                        expect(response.data.item.price.currency).toBeDefined();
                    });
                    it('Should have \"amount\" property', () => {
                        expect(response.data.item.price.amount).toBeDefined();
                    });
                    it('Should have \"decimals\" property', () => {
                        expect(response.data.item.price.decimals).toBeDefined();
                    });
                });
                it('Should have \"picture\" property', () => {
                    expect(response.data.item.picture).toBeDefined();
                });
                it('Should have \"condition\" property', () => {
                    expect(response.data.item.condition).toBeDefined();
                });
                it('Should have \"free_shipping\" property', () => {
                    expect(response.data.item.free_shipping).toBeDefined();
                });
                it('Should have \"sold_quantity\" property', () => {
                    expect(response.data.item.sold_quantity).toBeDefined();
                });
                it('Should have \"description\" property', () => {
                    expect(response.data.item.description).toBeDefined();
                });
                describe('Items types', () => {
                    it('Should be string', () => {
                        expect(response.data.item.id).toBeInstanceOf(String);
                        expect(response.data.item.title).toBeInstanceOf(String);
                        expect(response.data.item.price.currency).toBeInstanceOf(String);
                        expect(response.data.item.picture).toBeInstanceOf(String);
                        expect(response.data.item.condition).toBeInstanceOf(String);
                        expect(response.data.item.description).toBeInstanceOf(String);
                    });
                    it('Should be number', () => {
                        expect(response.data.item.price.amount).toBeInstanceOf(Number);
                        expect(response.data.item.price.decimals).toBeInstanceOf(Number);
                        expect(response.data.item.sold_quantity).toBeInstanceOf(Number);
                    });
                    it('Should be boolean', () => {
                        expect(response.data.item.free_shipping).toBeInstanceOf(Boolean);
                    });
                });
            });
        });
        describe('Returned object values', () => {
            describe('Author values', () => {
                it('Should be equal to \"authorObject\""', () => {
                    expect(response.data.author).toEqual(authorObject);
                });
            });
            describe('Categories values', () => {
                it('Should be equal to \"detailObjects.insignia.categories\".', () => {
                    expect(response.data.categories).toEqual(detailObjects.insignia.categories);
                });
            });
            describe('Item values', () => {
                it('Should be equal to \"detailObjects.insignia.item\"', () => {
                    expect(response.data.item).toEqual(detailObjects.insignia.item);
                });
            });
        });
    });

    describe(`GET ${urls[1]}${detailObjects.nonExistentId.text}`, () => {
        let response = {};
        beforeAll((done) => {
            axios.get(`${localhost}${urls[1]}${detailObjects.nonExistentId.text}`)
                .then(res => {response = res;})
                .catch(error => {response = error.response;})
                .then(() => {done();}
                );
        });
        it('Should have Status 404', () => {
            expect(response.status).toBe(404);
        });
        describe('Returned message', () => {
            it('Should have \"message\": \"Request failed with status code 404\"', () => {
                expect(response.data.message).toEqual('Request failed with status code 404');
            });
        });
    });
});