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
        await queryInterface.bulkInsert(
            'Users',
            [
                {
                    fistName: 'John1',
                    lastName: 'Doe',
                    email: 'John@gmail.com',
                },
                {
                    fistName: 'John2',
                    lastName: 'Doe',
                    email: 'John@gmail.com',
                },
                {
                    fistName: 'John3',
                    lastName: 'Doe',
                    email: 'John@gmail.com',
                },
            ],
            {},
        );
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    },
};
