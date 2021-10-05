"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert(
      "todoItems",
      [
        {
          task: "Finish Reports",
          important: false,
          listId: 1,
          deadline: "20/3/2020",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          task: "Plan Birthday",
          important: true,
          deadline: "20/3/2020",
          createdAt: new Date(),
          listId: 1,
          updatedAt: new Date(),
        },
        {
          task: "Go swimming",
          important: false,
          deadline: "20/3/2020",
          createdAt: new Date(),
          listId: 1,
          updatedAt: new Date(),
        },
        {
          task: "Practice freekicks",
          important: false,
          deadline: "20/3/2020",
          createdAt: new Date(),
          listId: 2,
          updatedAt: new Date(),
        },
        {
          task: "Score 60+ goals",
          important: true,
          deadline: "20/3/2020",
          createdAt: new Date(),
          listId: 3,
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete("todoItems", null, {});
  },
};
