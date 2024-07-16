import { withInstall, withNoopInstall } from "@my-element-plus/utils";
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
export const EllAside = withNoopInstall(Aside)
export const EllFooter = withNoopInstall(Footer)
export const EllHeader = withNoopInstall(Header)
export const EllMain = withNoopInstall(Main)
export default EllContainer
