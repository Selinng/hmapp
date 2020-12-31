export default {
    addTodo() {
        this.index ++
        this.todoList.push({
            name: `todo${this.index}`
        })
    }
}