'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('products', [
    {
      name: "salamera",
      description: "Es un estilo inspirado en la porte inglesa, con un profundo carácter a malta tostada y tambien con un sabor amargo originado por el lúpulo.Cuerpo medio, donde los sabores a malta combinan con los sutiles sabores afrutado, con 5,3% de alcohol, una cerveza que no es para cualquiera, es para paladares selectos qye aprecien los pequeños detalles",
      price: '4000',
      discount: 5,
      product_categories_id: 1,
      image: 'salamera.jpeg'
    },
    {
      name: "calentona",
      description: "Es un estilo inspirado en ela ALE IRLANDESA ROJA, ligeramente lupulada y un poco de tostado para agregar color y sequedad de sabor malteado, final limpio y caracteristico color rojo, con 4.8% aprox de alcohol, una cerveza que anima tus momentos y te hace entrar en calor",
      price: '4000',
      discount: 5,
      product_categories_id: 1,
      image: 'calentona.jpeg'
    },
    {
      name: "asolapada",
      description: "turbia clasica de estilo BELGA, una cerveza ALE DE TRIGO LIGERA, refrescante, sabrosa, elegante y de intensidad moderada, con sabores de coriandro y naranja que dan a esta cerveza su caracter distintivo, con 4,5% aprox de alcohol, una cerveza suave al paladar y maliciosa, si te descuidas te prendre",
      price: '4000',
      discount: 5,
      product_categories_id: 1,
      image: 'asopalada.jpeg'
    },
    {
      name: "arrabalera",
      description: "Ale refrescante y de especiada con fuertes notas a cítricos de color naranja oscuro, altamente carbonatada, bien lupulada y seca, con una acidez mitigadora de la sed, con 5.3% aprox de alcohol, una cerveza para los mas arriesgados que disfrutan de sabores intensos.",
      price: '4000',
      discount: 5,
      product_categories_id: 1,
      image: 'arrabalera.jpeg'
    },
    {
      name: "melosa",
      description: "Es un estilo insprirado en la blonde ALE EUROPEA, su color es de un dorado pálido, de aspecto limpio y cristalino, por otro lado, el aroma es a maltas palidas que evoca al pan y en ocaciones a caramelo, por su parte, el sabor es refrescante con predominio de aromas maltoso y a veces frutales, Melosa es una cerveza que no podras tomar solo una.",
      price: '4000',
      discount: 5,
      product_categories_id: 1,
      image: 'melosa.jpeg'
    },
    {
      name: "todera",
      description: "Cerveza balanceada, ligera, refrescante, maltosa, algo afrutada y de amargo leve, con 5.3% aprox de alcohol inspirada en la blonde ALE AMERICANA, buena en todo momento, tomar solo una nunca sera suficiente.",
      price: '4000',
      discount: 5,
      product_categories_id: 1,
      image: 'todera.jpeg'
    }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('products', null, {});
  }
};
