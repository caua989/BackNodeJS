import ServiceAtendimento from '../service/atendimento.js'

class ControllerAtendimento {
    async Criar(req, res){
        try {
            const { dia, hora, valor, concluido } = req.body

            await ServiceAtendimento.Criar(dia, hora, valor, concluido)

            res.status(201).send({ mensage: "Cadastrado com sucesso"})
        } catch (error) {
            res.status(500).send({
                mensagem: error.message
            })
        }
    }

    async Listar(req, res){
        try {
            console.log(req.session)

            const atendimentos = await ServiceAtendimento.Listar()

            res.status(200).send({ mensage: atendimentos })
        } catch (error) {
            res.status(500).send({
                mensagem: error.message
            })
        }
    }

    async Buscar(req, res){
        try {
            const id = req.params.id

            const atendimento = await ServiceAtendimento.Buscar(id)

            res.status(200).send({ mensage: atendimento})
        } catch (error) {
            res.status(500).send({
                mensagem: error.message
            })
        }
    }

    async Atualizar(req, res){
        try {
            const { dia, hora, valor, concluido } = req.body
            const id = req.params.id

            await ServiceAtendimento.Atualizar(id, dia, hora, valor, concluido)

            res.status(201).send({ mensage: "Cadastrado com sucesso" })
        } catch (error) {
            res.status(500).send({
                mensagem: error.message
            })
        }
    }

    async Deletar(req, res){
        try {
            const identificador = req.params.id

            await ServiceAtendimento.Deletar(identificador)

            res.status(204).send({ mensage: "Deletado" })
        } catch (error) {
            res.status(500).send({
                mensagem: error.message
            })
        }
    }
}

export default new ControllerAtendimento()