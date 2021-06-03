import { Router } from "express";import CharacterController from "./controllers/CharacterController";
import ComicController from "./controllers/ComicController";
''

const routes = Router();

routes.get('/quadrinhos', ComicController.index);
routes.get('/quadrinhos/:id', ComicController.show);

routes.get('/personagens', CharacterController.index);
routes.get('/personagens/:id', CharacterController.show);

export default routes;