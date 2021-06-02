import { Request, Response } from "express";
import api_teste_2 from "../utils/api_teste_2";

export default {
  async index(request: Request, response: Response) {
    return response.json(api_teste_2);
  },
  async show(request: Request, response: Response) {
    const { id } = request.params;
    let resultadoBusca = api_teste_2.find(item => item.id === parseInt(id));
    return response.json(resultadoBusca);
  },
};