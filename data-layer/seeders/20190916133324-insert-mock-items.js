'use strict';
const items;
if (process.env.NODE_ENV !== 'production') {
  items = [
    {
      id: 'HAMMER-1234',
      name: 'Hammer',
    },
    {
      id: 'NAILS-5678',
      name: 'Nails',
    },
  ];
} else {
  items = [];
}

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