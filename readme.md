# Champions League API

## Descrição

A Champions League API é um projeto exemplo que permite gerenciar jogadores e consultar clubes da Champions League. Com funcionalidades para criar, listar, atualizar e deletar jogadores, bem como listar clubes participantes, esta API é ideal para aprendizado e demonstração de uso de endpoints REST.

---

## Funcionalidades

### Jogadores

- **Criar jogador:** Adicione novos jogadores ao banco de dados.
- **Listar jogadores:** Obtenha uma lista completa de jogadores cadastrados.
- **Filtrar jogador por ID:** Consulte informações detalhadas de um jogador específico.
- **Atualizar jogador:** Atualize as informações de um jogador existente (total ou parcialmente).
- **Deletar jogador:** Remova jogadores do banco de dados.

### Clubes

- **Listar clubes:** Obtenha uma lista de clubes participantes da Champions League.

---

## Endpoints

### Jogadores

1. **Listar todos os jogadores**
   - **Endpoint:** `GET /api/players`
   - **Descrição:** Retorna todos os jogadores cadastrados.
   - **Exemplo de resposta:**
     ```json
     [
       {
         "id": 1,
         "name": "Lionel Messi",
         "club": "Paris Saint-Germain",
         "nationality": "Argentina",
         "position": "Forward",
         "statistics": {
           "Overall": 93,
           "Pace": 85,
           "Shooting": 94,
           "Passing": 91,
           "Dribbling": 95,
           "Defending": 38,
           "Physical": 65
         }
       }
     ]
     ```

2. **Filtrar jogador por ID**
   - **Endpoint:** `GET /api/players/:id`
   - **Descrição:** Retorna os detalhes de um jogador específico.
   - **Exemplo de resposta:** Veja acima.

3. **Criar jogador**
   - **Endpoint:** `POST /api/players`
   - **Descrição:** Adiciona um novo jogador ao sistema.
   - **Exemplo de corpo da requisição:**
     ```json
     {
       "name": "Cristiano Ronaldo",
       "club": "Al Nassr",
       "nationality": "Portugal",
       "position": "Forward",
       "statistics": {
         "Overall": 90,
         "Pace": 87,
         "Shooting": 92,
         "Passing": 82,
         "Dribbling": 89,
         "Defending": 40,
         "Physical": 77
       }
     }
     ```

4. **Atualizar jogador parcialmente**
   - **Endpoint:** `PATCH /api/players/:id`
   - **Descrição:** Atualiza dados específicos de um jogador.
   - **Exemplo de corpo da requisição:**
     ```json
     {
       "club": "Manchester United"
     }
     ```

5. **Deletar jogador**
   - **Endpoint:** `DELETE /api/players/:id`
   - **Descrição:** Remove um jogador do banco de dados.

---

### Clubes

1. **Listar clubes**
   - **Endpoint:** `GET /api/clubs`
   - **Descrição:** Retorna todos os clubes participantes da Champions League.
   - **Exemplo de resposta:**
     ```json
     [
       {
         "id": 1,
         "name": "Real Madrid",
         "country": "Spain"
       },
       {
         "id": 2,
         "name": "Manchester City",
         "country": "England"
       }
     ]
     ```

---

## Tecnologias Utilizadas

- **[TypeScript](https://www.typescriptlang.org/):** Linguagem de programação usada no desenvolvimento.
- **[Express](https://expressjs.com/):** Framework para criação de servidores HTTP.
- **[Cors](https://www.npmjs.com/package/cors):** Middleware para lidar com políticas de CORS.
- **[Tsup](https://github.com/egoist/tsup):** Ferramenta de empacotamento para TypeScript.
- **[Tsx](https://github.com/egoist/tsx):** Compilador TypeScript que suporta execução direta de arquivos.

---

## Como Utilizar

1. Clone este repositório.
2. Instale as dependências usando `npm install`.
3. Inicie o servidor executando `start:dev`.
4. Acesse os endpoints fornecidos para listar os episódios de podcasts ou filtrá-los por nome de podcast.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir problemas ou enviar solicitações de recebimento (pull requests) para melhorar este projeto.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).



