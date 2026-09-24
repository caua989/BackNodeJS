import cliente from "../model/cliente.js"

class RepositoryCliente {

    async Create(nome, email, senha) {
        const clienteCreate = await cliente.create({ nome, email, senha})

        return clienteCreate
    }

    async find() {
        const clientes = await cliente.findAll()

        return clientes
    }

    async findById(id) {
        const clienteBuscar = await cliente.findByPk(id)

        return clienteBuscar
    }

    async Update(id, nome, email, senha) {
        const clienteAlterar = await cliente.findByPk(id)
        
        if(!clienteAlterar){
            throw new Error("Cliente não encontrado")
    }
        

    clienteAlterar.nome = nome
    clienteAlterar.email = email
    clienteAlterar.senha = senha

    await clienteAlterar.save()

    return clienteAlterar
    }

async Delete(id) {
        const clienteDeletar = await cliente.findByPk(id)

        if(!clienteDeletar){
            throw new Error("Cliente não encontrado")
        }

        await clienteDeletar.destroy()

        return clienteDeletar
    }

    async FindByNome(nome) {
        return usuario.findOne({ where: { nome } })
    }
}


export default new RepositoryCliente()