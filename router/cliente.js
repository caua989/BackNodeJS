import express from 'express'
import ControllerClientes from '../controller/cliente.js'
import authMiddleware from "../middleware/auth.js"

const router = express.Router()
{
    router.post("/login", ControllerClientes.Login)
    router.post("/criar", ControllerClientes.Criar)
    router.get("/listar", authMiddleware, ControllerClientes.Listar)
    router.get("/buscar/:id", ControllerClientes.Buscar)
    router.put("/atualizar/:id", ControllerClientes.Atualizar)
    router.delete("/deletar/:id", ControllerClientes.Deletar)
}

export default router