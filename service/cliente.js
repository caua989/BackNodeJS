import RepositoryCliente from '../repository/cliente.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const segredo = "S2gr2d0"

class ServiceCliente {
    async Criar(nome, email, senha){
        if(!nome || !email || !senha) {
            throw new Error("Favor informar todos os dados")
        }

        const senhaCripto = await bcrypt.hash(senha, 12)

        const cliente = await RepositoryCliente.Create( nome, email, senhaCripto)

        return cliente
    }

    async Listar(){
        return RepositoryCliente.find()
    }

    async Buscar(id){
        if(!id) {
            throw new Error("Favor informar o ID")
        }

        const cliente = await RepositoryCliente.findById(id)

        if(!cliente) {
            throw new Error(`ID ${id} do cliente não encontrada`)
        }

        return cliente
    }

    async Atualizar(id, nome, email, senha){
        if (!id || !nome || !email || !senha) {
            throw new Error("Favor informar todos os dados")
        }

        const senhaCripto = !senha ? undefined: await bcrypt.hash(senha, 12)

        const clienteAtualizado = await RepositoryCliente.Update(id, nome, email, senha)

        return clienteAtualizado
    }

    async Deletar(id){
         if (!id) {
            throw new Error("Favor informar o ID")
         }

         const cliente = await RepositoryCliente.Delete(id)

         return cliente
    }

    async Login(email, senha){
        if(!email || !senha) {
            throw new Error("Email ou senha inválido")
        }

        const cliente = await RepositoryCliente.FindByEmail(email)

        if(!cliente) {
            throw new Error("Email ou senha inválido")
        }

        if(
            !(await bcrypt.compare(String(senha), cliente.senha))
        ) {
            throw new Error("Email ou senha inválido")
        }

        return jwt.sign(
            { id: cliente.id, email },
            segredo,
            { expiresIn: 60 * 60}
        )
    }
}

export default new ServiceCliente()