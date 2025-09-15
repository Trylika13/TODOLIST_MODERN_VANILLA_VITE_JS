import TodoList from "./components/todoList/TodoList";

new TodoList({
  elt: "#app",
  apiURL: "https://68ad9556a0b85b2f2cf3e1b0.mockapi.io/",
});

/*  1. structure: 3 class et 2 fcts
	DB, TodoList et Todo
	getTodoListTemplate()
	getTodoTemplate()

2. Instancier (faire une new) une TodoList en lui envoyant l'#app
et l'URL de l'API

3. DB :
	- static setApiUrl(data): hydrater this.apiURL avec les data
	- async static findAll()
		-> fetch vers l'API
		   et on retoune la réponse en json()

4. TodoList
	- constructor
		- domElt
		- todos: tableau vide
		- on doit lancer le setApiUrl avec l'url
		- lance le loadTodos()
		- lance le render()
	- async loadTodos() qui met des Todo dans todos
	- render() qui met le template dans le innerHTML du domElt

5. Todo
	- constructor
		- id
		- content
		- completed
		- created_at
	- render qui retourne le template  */
