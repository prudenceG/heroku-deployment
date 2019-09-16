'use strict';

const items = [
  {
    id: 'TRUCKS-1234',
    name: 'Trucks',
  },
  {
    id: 'CARS-5678',
    name: 'Cars',
  },
];

module.exports = {
  up: (queryInterface, Sequelize) => {
    if (process.env.SHOULD_SEEDS === "true") {
      return queryInterface.bulkInsert('Items', items, {});
    } else {
      return new Promise((resolve, reject) => {
        return;
      })
    }
  },

  down: (queryInterface, Sequelize) => {
    if (process.env.SHOULD_SEEDS === "true") {
      return queryInterface.bulkDelete(
        'Items',
        {
          id: { [Sequelize.Op.in]: items.map(item => item.id) },
        },
        {}
      );
    } else {
      return new Promise((resolve, reject) => {
        return;
      })
    }
  },
};