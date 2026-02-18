import { Router } from "express";
import { getConnection } from "../controllers/checkConnection.controller";

const router = Router();

router.get("/",getConnection)

export default router