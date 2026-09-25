import RepositoryAtendimento from '../repository/atendimento.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const segredo = "S2gr2d0"

class ServiceAtendimento {
    async Criar(dia, hora, valor, concluido){
        if(!dia || !hora || !valor || !concluido) {
            throw new Error("Favor informar todos os dados")
        }

        const atendimento = await RepositoryAtendimento.Create( dia, hora, valor, concluido)

        return atendimento
    }

    async Listar(){
        return RepositoryAtendimento.find()
    }

    async Buscar(id){
        if(!id) {
            throw new Error("Favor informar o ID")
        }

        const atendimento = await RepositoryAtendimento.findById(id)

        if(!atendimento) {
            throw new Error(`ID ${id} do atendimento não encontrada`)
        }

        return atendimento
    }

    async Atualizar(id, dia, hora, valor, concluido){
        if (!id || !dia || !hora || !valor || !concluido) {
            throw new Error("Favor informar todos os dados")
        }

        const atendimentoAtualizado = await RepositoryAtendimento.Update(id, dia, hora, valor, concluido)

        return atendimentoAtualizado
    }

    async Deletar(id){
         if (!id) {
            throw new Error("Favor informar o ID")
         }

         const atendimento = await RepositoryAtendimento.Delete(id)

         return atendimento
    }
}

export default new ServiceAtendimento()