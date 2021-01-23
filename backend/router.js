const items = require('./modules/items');
const categories = require('./modules/categories');

module.exports = (app) => {
    // items page
    app.get('/items', function (req, res) {
        res.send(items);
    })
    
    // categories page
    app.get('/categories', function (req, res) {
        res.send(categories);
    })
}





  