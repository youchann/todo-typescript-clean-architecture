# todo-typescript-clean-architecture

Todo app with clean architecture

# Local Development

Run app.

```bash
$ docker-compose up
```

Create todo.

```bash
$ curl -X POST -H "Content-Type: application/json" -d '{"name":"test", "memo":"memo", "isDone":true}' localhost:3333/todo
```

Get todos.

```bash
curl -s -X GET http://localhost:3333/todo/
```

Routing is [here](https://github.com/youchann/todo-typescript-clean-architecture/blob/master/app/src/infrastructure/router/index.ts).	
