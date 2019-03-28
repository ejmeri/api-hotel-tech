module.exports = function (sequelize, DataTypes) {
    return sequelize.define("Country", {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(80)
        },

        code_id: {
            type: DataTypes.BIGINT
        },

        nationality: {
            type: DataTypes.STRING(45)
        }
    });
};