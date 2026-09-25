import express from 'express'
import ControllerAtendimento from '../controller/atendimento.js'
import authMiddleware from "../middleware/auth.js"

const router = express.Router()
{
    router.post("/criar", ControllerAtendimento.Criar)
    router.get("/listar", authMiddleware, ControllerAtendimento.Listar)
    router.get("/buscar/:id", ControllerAtendimento.Buscar)
    router.put("/atualizar/:id", ControllerAtendimento.Atualizar)
    router.delete("/deletar/:id", ControllerAtendimento.Deletar)
}

export default router