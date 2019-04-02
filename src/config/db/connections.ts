export default {
    db_name: 'db_wg_hotel',
    username: 'root',
    password: '', 
    params: {
        host:  'localhost',
        port: '3306',
        dialect: "mysql",
        define: {
            underscored: true,
            freezeTableName: true,
        }
    }
}
