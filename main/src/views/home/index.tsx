import { Component } from "react";
import style from "./index.module.css";
import fetch from "./../../utils/axios";
import { AxiosResponse } from "axios";
import { Link } from "react-router-dom";
import { Button } from "antd";
export default class Home extends Component<any, any> {
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
      <div className={style.home}>
        <div>
          {this.state.result.map((item: any, index: number) => {
            return (
              <Button key={index} className="item">
                <Link to={item.activeRule}>{item.name}</Link>
              </Button>
            );
          })}
        </div>
      </div>
    );
  }
}
