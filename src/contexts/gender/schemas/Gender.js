module.exports = function (sequelize, DataTypes) {
    return sequelize.define("Gender", {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(80)
        }
    });
};