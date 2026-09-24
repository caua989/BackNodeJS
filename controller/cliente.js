import ServiceCliente from '../service/cliente.js'

class ControllerCliente {
    async Criar(req, res){
        try {
            const { nome, email, senha } = req.body

            await ServiceCliente.Criar(nome, email, senha)

            res.status(201).send({ mensage: "Cadastrado com sucesso"})
        } catch (error) {
            res.status(500).send({
                mensagem: error.messagem
            })
        }
    }

// letras maiusculas no nome das func
    async Listar(req, res){
        try {
            console.log(req.session)

            const clientes = await ServiceCliente.Listar()

            res.status(200).send({ mensage: clientes })
        } catch (error) {
            res.status(500).send({
                mensagem: error.messagem
            })
        }
    }

    async Buscar(req, res){
        try {
            const id = req.params.id

            const cliente = await ServiceCliente.Buscar(id)

            res.status(200).send({ mensage: cliente})
        } catch (error) {
            res.status(500).send({
                mensagem: error.messagem
            })
        }
    }

    async Atualizar(req, res){
        try {
            const { nome, email, senha } = req.body
            const id = req.params.id

            await ServiceCliente.Atualizar(id, nome, email, senha)

            res.status(201).send({ mensage: "Cadastrado com sucesso" })
        } catch (error) {
            res.status(500).send({
                mensagem: error.messagem
            })
        }
    }

    async Deletar(req, res){
        try {
            const identificador = req.params.id

            await ServiceCliente.Deletar(identificador)

            res.status(204).send({ mensage: "Deletado" })
        } catch (error) {
            res.status(500).send({
                mensagem: error.messagem
            })
        }
    }

    async Login(req, res){
        try {
            const { nome, email, senha } = req.body

            const token = await ServiceCliente.Login(nome, email, senha)

            res.status(200).send({
                token
            })
        } catch (error) {
            res.status(500).send({
                mensagem: error.messagem
            })
        }
    }
}

export default new ControllerCliente()