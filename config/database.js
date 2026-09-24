import { Sequelize } from "sequelize"

class database {
    constructor() {
        this.init()
    }

    init() {
        this.db = new Sequelize({
            dialect: "mysql",
            database: "agenda",
            host: "localhost",
            username: "root",
            password: ""
        })
    }
}

export default new database()