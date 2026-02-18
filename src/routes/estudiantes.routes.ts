import { Router } from "express";

import { getAllStudents, getStudentById, setStudent } from "../controllers/estudiantes.controller";
import { getConnection } from "../controllers/checkConnection.controller";

const router = Router();

router.get("/",getAllStudents)
router.get("/:id",getStudentById)
router.post("/",setStudent)



export default router