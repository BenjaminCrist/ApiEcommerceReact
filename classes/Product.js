class Product{
    #nomProduit
    #categorie
    #prix
    #description
    #image

    constructor(nomProduit, categorie, prix, description){
        this.#nomProduit = nomProduit
        this.#categorie = categorie
        this.#prix = prix
        this.#description = description
    }

    get nomProduit (){
        return this.#nomProduit
    }
    set nomProduit (nomProduit){
        this.#nomProduit = nomProduit
    }
    get categorie (){
        return this.#categorie
    }
    set categorie (categorie){
        this.#categorie = categorie
    }
    get prix (){
        return this.#prix
    }
    set prix ( prix ){
        this.#prix = prix
    }
    get description (){
        return this.#description
    }
    set description (description){
        this.#description = description
    }
}
module.exports = Product