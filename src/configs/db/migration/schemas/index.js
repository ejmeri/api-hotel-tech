const database = require('../../connections/mysql');

if (!global.hasOwnProperty('db')) {
    var Sequelize = require('sequelize'),
        sequelize = null

    sequelize = new Sequelize(database.db_name, database.username, database.password, database.params);

    global.db = {
        Sequelize: Sequelize,
        sequelize: sequelize,

        Gender: sequelize.import('../../../../contexts/gender/schemas/Gender.js'),
        Status: sequelize.import('../../../../contexts/status/schemas/Status.js'),
        PeopleType: sequelize.import('../../../../contexts/people/schemas/PeopleType.js'),
        Occupation: sequelize.import('../../../../contexts/people/schemas/Occupation.js'),
        WrappingOrganization: sequelize.import('../../../../contexts/documentation/schemas/WrappingOrganization.js')
    }
}

module.exports = global.db;