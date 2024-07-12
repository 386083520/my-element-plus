import { withInstall } from "@my-element-plus/utils";
import Container from "./src/container.vue";
import Aside from "./src/aside.vue";
import Footer from "./src/footer.vue";
import Header from "./src/header.vue";
import Main from "./src/main.vue";
const EllContainer  = withInstall(Container, {
    Aside,
    Footer,
    Header,
    Main
})
export default EllContainer
