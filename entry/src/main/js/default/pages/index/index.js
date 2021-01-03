import methods from './methods.js'
const app = {
    data: {
        title: "",
        todoList: [],
        todoIndex: 0,
        imageList: [],
        showDialog: false
    },
    computed: {
        currentTodo() {
            return this.todoList.find(i => i.select)
        }
    },
    onInit() {
        this.title = this.$t('strings.world')
        this.imageList = ['/static/images/swiper1.jpg', '/static/images/swiper2.jpg', '/static/images/swiper3.jpg', '/static/images/swiper4.jpg',]
    }
}
export default Object.assign({}, app, methods)
