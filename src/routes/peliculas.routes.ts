import { Router } from "express";

import { getMoviesAll } from "../controllers/peliculas.controller";

const router = Router();

router.get("/",getMoviesAll)


export default router