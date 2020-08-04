//#region IMPORTS
const service = require('./apiInterface.controller');
//#endregion
//#region CONSTANTS
const SEARCH_PARAMS = '&limit=4&offset=0';
//#endregion

//#region INTERFACE
/**
 * Searchs for requested items
 * @param req.query.q {String} Items to find
 */
async function items(req, res, next) {
    try {
        const query = req.query.q ? req.query.q : '';
        const fetchedData = (await service.search(query, SEARCH_PARAMS)).data;
        let categories = fetchedData.filters.find(item => {return item.id === 'category'});
        categories = categories ? categories.values[0].path_from_root : [];
        res.fetchedData = {
            items: fetchedData.results,
            categories
        };
        next();
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

/**
 * Obtains details for a specific item
 * @param req.params.id {String} Item Id to detail
 */
async function detail(req, res, next) {
    const id = req.params.id ? req.params.id : '';
    const prom = [];
    prom.push(service.details(id));
    prom.push(service.description(id));
    Promise.all(prom)
        .then(async promises => {
            const fetchedData = promises[0].data;
            const description = promises[1].data;
            try {
                const categories = (await service.categories(fetchedData.category_id)).data.path_from_root;
                res.fetchedData = {
                    item: { ...fetchedData, description: description.plain_text },
                    categories
                };
                next();
            }
            catch (error) {
                throw error;
            }
        })
        .catch(error => {
            const status = (error.response && error.response.status) ? error.response.status : 500;
            const message = error.message ? error.message : 'Unexpected error!';
            res.status(status).json({ message });
        });
}
//#endregion

module.exports = {
    items,
    detail
};