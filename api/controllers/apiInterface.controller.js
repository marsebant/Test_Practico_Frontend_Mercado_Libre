//#region IMPORTS
const querystring = require('querystring');
const axios = require('axios').default;
//#endregion

//#region INTERFACE
/**
 * Fetch from API requested items
 * @param query {String} Items key words
 * @param params {String} Query params
 * @returns Promise
 */
function search(query, params=''){
    query = querystring.escape(query.trim());
    return axios.get(`${process.env.BASE_URL}${process.env.SEARCH_PATH}${query}${params}`);
}

/**
 * Fetch from API details for a specific item
 * @param id {String} Item id
 * @returns Promise
 */
async function details(id) {
    id = querystring.escape(id.trim());
    return axios.get(`${process.env.BASE_URL}${process.env.ITEM_DETAIL_PATH}${id}`);
}

/**
 * Fetch from API description for a specific item
 * @param id {String} Item id
 * @returns Promise
 */
async function description(id) {
    id = querystring.escape(id.trim());
    const url = process.env.BASE_URL + process.env.ITEM_DETAIL_PATH + id + process.env.ITEM_DESCRIPTION_PATH;
    return axios.get(`${url}`);
}

/**
 * Fetch from API categories for a specific id
 * @param id {String} Category id
 * @returns Promise
 */
async function categories(id) {
    id = querystring.escape(id.trim());
    return axios.get(`${process.env.BASE_URL}${process.env.ITEM_CATEGORIES_PATH}${id}`);
}

/**
 * Fetch currency info based on currency_id
 * @param {string} id currency_id
 * @returns Promise
 */
async function currencyInfo(id) {
    return axios.get(`${process.env.BASE_URL}${process.env.CURRENCY_TRANSLATE_PATH}${id}`)
}
//#endregion

module.exports = {
    search,
    details,
    description,
    categories,
    currencyInfo
};