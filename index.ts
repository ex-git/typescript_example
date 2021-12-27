import axios from "axios";

const toDourl = "https://jsonplaceholder.typicode.com/todos/1"

// define the structure of object.
interface Todo {
    id: number;
    title: string;
    completed: boolean
}

axios.get(toDourl).then(res => {
    // res.data => { userId: 1, id: 1, title: 'delectus aut autem', completed: false }
    const todo = res.data as Todo // tell TS to use Todo structure for this object
    const { id, title, completed} = todo
    logTodo(id, title, completed)
})

const logTodo = (id: number, title: string, completed: boolean ) => {
    console.log(`
        ID: ${id}
        title: ${title}
        Completed: ${completed}
    `)
}