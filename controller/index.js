const products = require('../model/allProducts')

const pageAccueil = (req, res) => {
    res.render('index', {title:"Page d'acceuil", products});
}

module.exports =
{
    pageAccueil
}