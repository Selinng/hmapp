export default {
    data: {
        title: "",
        todoList: [],
        index: 0
    },
    onInit() {
        this.title = this.$t('strings.world')
    },
    addTodo() {
        this.index ++
        this.todoList.push({
            name: `todo${this.index}`
        })
    }
}
