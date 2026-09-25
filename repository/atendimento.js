import atendimento from "../model/atendimento.js"

class RepositoryAtendimento {

    async Create(dia, hora, valor, concluido) {
        const atendimentoCreate = await atendimento.create({ dia, hora, valor, concluido})

        return atendimentoCreate
    }

    async find() {
        const atendimentos = await atendimento.findAll()

        return atendimentos
    }

    async findById(id) {
        const atendimentoBuscar = await atendimento.findByPk(id)

        return atendimentoBuscar
    }

    async Update(id, dia, hora, valor, concluido) {
        const atendimentoAlterar = await atendimento.findByPk(id)
        
        if(!atendimentoAlterar){
            throw new Error("atendimento não encontrado")
    }
        

    atendimentoAlterar.dia = dia
    atendimentoAlterar.hora = hora
    atendimentoAlterar.valor = valor
    atendimentoAlterar.concluido = concluido

    await atendimentoAlterar.save()

    return atendimentoAlterar
    }

async Delete(id) {
        const atendimentoDeletar = await atendimento.findByPk(id)

        if(!atendimentoDeletar){
            throw new Error("atendimento não encontrado")
        }

        await atendimentoDeletar.destroy()

        return atendimentoDeletar
    }

    // async FindBydia(dia) {
    //     return atendimento.findOne({ where: { dia } })
    // }
}


export default new RepositoryAtendimento()