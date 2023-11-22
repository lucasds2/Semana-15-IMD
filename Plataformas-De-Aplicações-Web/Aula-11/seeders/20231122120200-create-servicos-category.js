'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Categories', [
      { name: 'Serviços', createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },
  down: async (queryInterface, Sequelize) => {
  },
};
