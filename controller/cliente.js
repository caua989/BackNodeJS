import ServiceClientes from '../service/cliente.js'

class ControllerCliente {
    async Criar(req, res){
        try {
            const { nome, email, senha } = req.body

            await ServiceClientes.Criar(nome, email, senha)

            res.status(201).send({ message: "Cadastrado com sucesso"})
        } catch (error) {
            res.status(500).send({
                mensagem: error.mensagem
            })
        }
    }
// letras maiusculas no nome das func
    async Listar(req, res){
        try {
            console.log(req.session)

            const clientes = await ServiceCliente.Buscar()

            res.status(200).send({ message: clientes })
        } catch (error) {
            res.status(500).send({
                mensagem: error.mensagem
            })
        }
    }

    async Buscar(req, res){
        try {
            const id = req.params.id

            const cliente = await ServiceCliente.Buscar(id)

            res.status(200).send({ message: cliente})
        } catch (error) {
            res.status(500).send({
                mensagem: error.mensagem
            })
        }
    }

    async Atualizar(req, res){
        try {
            const { nome, email, senha } = req.body
            const id = req.params.id

            await ServiceCliente.Atualizar(id, nome, email, senha)

            res.send(201).send({ message: "Cadastrado com sucesso" })
        } catch (error) {
            res.status(500).send({
                mensagem: error.mensagem
            })
        }
    }

    async Deletar(req, res){
        try {
            const identificador = req.params.id

            await ServiceCliente.Deletar(identificador)

            res.send(204).send({ message: "Deletado" })
        } catch (error) {
            res.status(500).send({
                mensagem: error.mensagem
            })
        }
    }

    async Login(req, res){
        try {
            const { nome, email, senha } = req.body

            const token = await ServiceCliente.Login(nome, email, senha)

            res.send(200).send({
                token
            })
        } catch (error) {
            res.status(500).send({
                mensagem: error.mensagem
            })
        }
    }
}

export default new ControllerCliente()