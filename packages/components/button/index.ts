import MyButton from './src/button.vue'
MyButton.install  = function(app) {
    app.component("MyButton", MyButton)
}
export default MyButton