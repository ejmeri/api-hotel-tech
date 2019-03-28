module.exports = function (sequelize, DataTypes) {
    return sequelize.define("PeopleType", {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(45)
        }
    });
};