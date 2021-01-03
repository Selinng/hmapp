const app = {
	props: {
		isEdit: {
			default: false,
			type: Boolean
		}
	},
	onInit() {
		console.log(this.isEdit)
	}
}