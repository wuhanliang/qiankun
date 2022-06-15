import { Component } from "react";
// import HomeViews from "./views";
import routers from "./routes";
import { Route, Routes } from "react-router-dom";
import fetch from "./utils/axios";
import { AxiosResponse } from "axios";
export default class App extends Component {
  public state: any = {};
  constructor(props: any) {
    super(props);
    this.state.result = [];
  }
  async registryApp() {
    const res: AxiosResponse<any, any> = await fetch({
      url: "/api/app/list",
      params: {
        parentId: 0,
      },
    });
    if (res.data.success) {
      this.setState({
        result: res.data.data,
      });
    }
  }
  componentDidMount() {
    this.registryApp();
  }
  render() {
    return (
      <Routes>
        {routers.map((item, index) => {
          return (
            <Route
              key={index}
              path={item.path}
              element={<item.component />} // 不是老版本的：component 或 render
            />
          );
        })}
        {this.state.result.map((item: any, index: number) => {
          return (
            <Route
              key={index}
              path={item.activeRule}
              element={<div id={item.container} />} // 不是老版本的：component 或 render
            />
          );
        })}
      </Routes>
    );
  }
}
