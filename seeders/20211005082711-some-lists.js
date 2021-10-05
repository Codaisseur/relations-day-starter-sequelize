"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "todoLists",
      [
        {
          name: "John List",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Matias List",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Work List",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
