import { Router } from "express";import CharacterController from "./controllers/CharacterController";
import ComicController from "./controllers/ComicController";
''

const routes = Router();

routes.get('/quadrinho', ComicController.index);
routes.get('/quadrinhos/:id', ComicController.show);

routes.get('/personagem', CharacterController.index);
routes.get('/personagens/:id', CharacterController.show);

export default routes;