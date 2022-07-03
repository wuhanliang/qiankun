import "./public-path";
import { createApp } from "vue";
import App from "./App.vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import Routes from "./routes";
import "lodash";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";

const render = (props) => {
  // createApp(App).use(Routes).use(ElementPlus).mount("#app");
  const app = createApp(App);
  if (props) {
    const { onGlobalStateChange } = props;
    onGlobalStateChange((state) => {
      _.forEach(state, (value, index) => {
        app.config.globalProperties[index] = value;
      });
    }, true);
  }
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component);
  }
  app.use(Routes);
  app.use(ElementPlus);
  app.mount("#app");
};

if (!window.__POWERED_BY_QIANKUN__) {
  // 全局变量来判断环境
  render();
}

/**
 * bootstrap 只会在微应用初始化的时候调用一次，下次微应用重新进入时会直接调用 mount 钩子，不会再重复触发 bootstrap。
 * 通常我们可以在这里做一些全局变量的初始化，比如不会在 unmount 阶段被销毁的应用级别的缓存等。
 */
export async function bootstrap(props) {
  console.log("现在进入子应用c-child的bootstraped阶段");
}

/**
 * 应用每次进入都会调用 mount 方法，通常我们在这里触发应用的渲染方法
 */
export async function mount(props) {
  console.log("现在进入子应用c-child的mount周期", props);

  render(props);
}

/**
 * 应用每次 切出/卸载 会调用的方法，通常在这里我们会卸载微应用的应用实例
 */
export async function unmount(props) {
  console.log("现在进入子应用c-child的unmount阶段", props);
}

/**
 * 可选生命周期钩子，仅使用 loadMicroApp 方式加载微应用时生效
 */
export async function update(props) {
  console.log("update props", props);
}
