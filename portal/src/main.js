import "./public-path";
import "lodash";
import { createApp } from "vue";
import App from "./App.vue";
import route from "./routes";

const render = (props) => {
  const app = createApp(App);

  if (props) {
    const { onGlobalStateChange } = props;
    onGlobalStateChange((state) => {
      _.forEach(state, (value, index) => {
        app.config.globalProperties[index] = value;
      });
    }, true);
  }
  app.use(route);

  app.mount("#app");
};

// createApp(App).mount("#app");
if (!window.__POWERED_BY_QIANKUN__) {
  // 全局变量来判断环境
  render();
}
/**
 * bootstrap 只会在微应用初始化的时候调用一次，下次微应用重新进入时会直接调用 mount 钩子，不会再重复触发 bootstrap。
 * 通常我们可以在这里做一些全局变量的初始化，比如不会在 unmount 阶段被销毁的应用级别的缓存等。
 */
export async function bootstrap(props) {
  // console.log(`现在进入${aliasName}子应用bootstraped阶段`, props);
}

/**
 * 应用每次进入都会调用 mount 方法，通常我们在这里触发应用的渲染方法
 */
export async function mount(props) {
  // console.log(`现在进入${aliasName}子应用mount阶段`, props);

  // props.onGlobalStateChange((state, prev) => {
  //   // state: 变更后的状态; prev 变更前的状态
  //   console.log(state, prev, "微应用接收到了 主应用的共享消息");
  // }, true);
  // const appName = "home-poral";
  // props.setGlobalState(appName);
  render(props);
}

/**
 * 应用每次 切出/卸载 会调用的方法，通常在这里我们会卸载微应用的应用实例
 */
export async function unmount(props) {
  // console.log(`现在进入${aliasName}子应用unmount阶段`, props);
}

/**
 * 可选生命周期钩子，仅使用 loadMicroApp 方式加载微应用时生效
 */
export async function update(props) {
  // console.log(`现在进入${aliasName}子应用update阶段`, props);
}
