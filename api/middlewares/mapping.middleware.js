//#region IMPORTS
const service = require('../controllers/apiInterface.controller');
//#endregion

/**
 * Maps data to return object
 * @param {} items Item/s to map to return object
 * @param {boolean} detail Determines if it's a detail object or not
 */
async function mapItems(items, detail) {
    try {
        items = await Promise.all(
            items.map(async (item) => {
                const [amount, decimals] = parseFloat(item.price).toFixed(2).split('.');
                // Get currency symbol
                const currency = (await service.currencyInfo(item.currency_id)).data.symbol;
                const data = {
                    id: item.id,
                    title: item.title,
                    price: {
                        currency,
                        amount: parseInt(amount),
                        decimals: parseInt(decimals ? decimals : 0)
                    },
                    condition: conditionTranslator(item.condition),
                    free_shipping: item.shipping.free_shipping
                }
                if (detail) {
                    data.sold_quantity = item.sold_quantity;
                    data.description = item.description;
                    data.permalink = item.permalink;
                    data.picture = item.pictures[0].secure_url;
                } else {
                    data.picture = formatImg(item.thumbnail);
                    data.state = item.address.state_name;
                }
                return data;
            })
        );
        return items;
    }
    catch(error){
        throw(error);
    }
}

/**
 * Translates condition value to spanish
 * @param {string} value Condition value
 */
function conditionTranslator(value) {
    let translated;
    switch(value){
        case 'new':
            translated = 'Nuevo';
            break;
        case 'used':
            translated = 'Usado';
            break;
        default:
            translated = 'Condición no especificada';
            break;
    }
    return translated;
}

/**
 * Gets better quality img than thumbnails
 * @param imgUrl
 * @returns {string}
 */
function formatImg(imgUrl) {
  const regex = /(\d{1,6}-MLA\d{1,11}_\d{1,6})/g;
  const img = regex.exec(imgUrl);
  return img ? `https://http2.mlstatic.com/D_Q_NP_${img[1]}-Q.webp` : imgUrl;
}

/**
 * Maps search results to response object
 * @param {} req HTTP request
 * @param {} res HTTP response
 * @param {} next 
 */
async function mapSearch(req, res, next) {
    try {
        res.fetchedData.items = (await mapItems(res.fetchedData.items)).slice();
        next();
    }
    catch (error){
        res.status(500).json({message: 'Se produjo un error al intentar mapear la respuesta', ...error});
    }
}

/**
 * Maps item details to response object
 * @param {} req HTTP request
 * @param {} res HTTP response
 * @param {} next 
 */
async function mapDetail(req, res, next) {
    try {
        res.fetchedData.item = (await mapItems([res.fetchedData.item], true))[0];
        next();
    }
    catch (error){
        res.status(500).json({message: 'Se produjo un error al intentar mapear la respuesta', error});
    }
}

/**
 * Maps categories (from path_from_root) to a string array and set "categories" into response fetched data.
 * If no categories received, sets "categories" to empty array.
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
function mapCategoriesFromRoot(req, res, next) {
    if (res.fetchedData.categories.length) {
        res.fetchedData.categories = res.fetchedData.categories.map(({ name }) => name);
    }

    next();
}

module.exports = {
    mapSearch,
    mapDetail,
    mapCategoriesFromRoot
}