const express = require('express');
const controller = require('../controllers/items.controller');
const mappingMdw = require('../middlewares/mapping.middleware');
const authorMdw = require('../middlewares/author.middleware');

const router = express.Router();
// Set middlewares
const middlewaresSearch = [mappingMdw.mapCategoriesFromRoot, mappingMdw.mapSearch, authorMdw.addAuthor];
const middlewaresDetails = [mappingMdw.mapCategoriesFromRoot, mappingMdw.mapDetail, authorMdw.addAuthor];

router.get('/items', controller.items, middlewaresSearch);
router.get('/items/:id', controller.detail, middlewaresDetails);

module.exports = router;