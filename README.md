# Projeto Post-API

### Requerimentos/Conhecimentos e Tecnologias utilizadas

* NodeJS   
    (Fonte: https://nodejs.org)
* MongoDB   
    (Fonte: https://www.mongodb.com/)
* Express   
    (Fonte: https://expressjs.com/)
* Socket.io   
    (Fonte: https://socket.io/)

### Instalação das dependencias:
#
```bashh
$ npm install express
$ npm install -D nodemon
$ npm install mongoose
$ yarn add multer
$ yarn add sharp
$ yarn add socket.io
$ npm install cors
 ```
### Instalação no mongodb no docker:
#
```bashh
$ docker pull mongo
 ```

### Executar o mongodb:
#
```bashh
$ docker run -p 27017:27017 mongo
 ```

### Executar o projeto: 
#
```bashh
$ yarn dev
 ```
### Serviços do projeto
* Os serviços podem ser acessados através do endereço http://localhost:3001/posts
