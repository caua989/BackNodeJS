import database from '../config/database.js'

class Cliente {
    constructor() {
        this.model = database.db.define("clientes", {
            id: {
                type: database.db.Sequelize.INTEGER,
                primaryKey: true,
                autoIncremenet: true
            },
            nome: {
                type: database.db.Sequelize.STRING,
                unique: true
            },
            email: {
                type: database.db.Sequelize.STRING,
                unique: true
            },
            senha: {
                type: database.db.Sequelize.STRING,
            }
        })
    }
}

export default new Cliente().model