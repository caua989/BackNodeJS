import express from 'express'
import ControllerCliente from '../controller/cliente.js'
import authMiddleware from "../middleware/auth.js"

const router = express.Router()
{
    router.post("/login", ControllerCliente.Login)
    router.post("/criar", ControllerCliente.Criar)
    router.get("/listar", authMiddleware, ControllerCliente.Listar)
    router.get("/buscar/:id", ControllerCliente.Buscar)
    router.put("/atualizar/:id", ControllerCliente.Atualizar)
    router.delete("/deletar/:id", ControllerCliente.Deletar)
}

export default router