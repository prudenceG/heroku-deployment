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
    return queryInterface.bulkInsert('Items', items, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete(
      'Items',
      {
        id: { [Sequelize.Op.in]: items.map(item => item.id) },
      },
      {}
    );
  },
};