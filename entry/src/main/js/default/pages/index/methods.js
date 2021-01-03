export default {
    addTodo() {
        this.showDialog = true
        if(!this.selectTodo) {
            return this.isEdit = true
        }
        this.isEdit = false
//        this.index ++
//        this.todoList.push({
//            name: `todo${this.index}`
//        })
    }
}