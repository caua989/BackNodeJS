import database from '../config/database.js'

class atendimento {
    constructor() {
        this.model = database.db.define("atendimentos", {
            id: {
                type: database.db.Sequelize.INTEGER,
                primaryKey: true,
                autoIncremenet: true
            },
            dia: {
                type: database.db.Sequelize.STRING,
            },
            hora: {
                type: database.db.Sequelize.STRING,
            },
            valor: {
                type: database.db.Sequelize.STRING,
            },
            concluido: {
                type: database.db.Sequelize.STRING,
            }
        })
    }
}

export default new atendimento().model