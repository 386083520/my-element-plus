import { withInstall } from "@my-element-plus/utils";
import Container from "./src/container.vue";
import Aside from "./src/aside.vue";
import Footer from "./src/footer.vue";
import Header from "./src/header.vue";
import Main from "./src/main.vue";
export const EllContainer  = withInstall(Container, {
    Aside,
    Footer,
    Header,
    Main
})
export {
    Aside as EllAside,
    Header as EllHeader,
    Footer as EllFooter,
    Main as EllMain
}
export default EllContainer
