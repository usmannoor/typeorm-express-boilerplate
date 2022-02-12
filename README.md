# How to use Express and TypeORM with TypeScript

1. clone repository 
2. run `npm i`
3. edit `src/config/ormConfig.ts` and change your database configuration (you can also change a database type, but don't forget to install specific database drivers)
4. run `npm start`

### List of APIs

1. Get all users `http://localhost:4000/user` - GET
2. Get user by id `http://localhost:4000/user/:id` - GET
3. Save user `http://localhost:4000/user` - POST
4. Get all posts by user id `http://localhost:4000/post/user/:userId` - GET
5. Get posts by id `http://localhost:4000/post/:id` - GET
6. Save post `http://localhost:4000/post` - POST
7. use curl, postman or other tools to send http requests to test your typeorm-based API

### DB Create command

- Run this command to create DB schema `npm run db:create`

### How to use CLI?

1. install `typeorm` globally: `npm i -g typeorm`
2. run `typeorm -h` to show list of available commands
