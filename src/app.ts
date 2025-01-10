import express, { json } from "express";
import router from "./routes/routes";
import cors from "cors";


function createApp(){
    const app = express()
//passando para meu servidor atraves do middleware converter o contetType  e corpo para json 
//define que as requisições serão json
    app.use(express.json())
    
    //usar o prefixo api para todos acessar o arquivo rotas
    //lembrando que todas as rotas levara o prefixo api com o da rota: api/players
    app.use("/api" , router);
    
    
    app.use(cors());
    return app;

}

export default createApp;
