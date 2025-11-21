import User from "../components/User.vue";

export default{
    install: (app, options) => {
        console.log("TestPlugin has been installed!");

        app.component('UserCard', User);

        app.directive('font-size', (el, binding) => {
            el.style.fontSize = options.fontSize;
        })

        app.provide('app_name', "Vue Application");

        app.config.globalProperties.$appVersion = "1.0.0";

        app.config.globalProperties.$filePath = (path) => {
            return `https://myapp.com/files/${path}`;
        }
    }
}