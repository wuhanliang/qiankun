import { registerMicroApps, start, setDefaultMountApp } from "qiankun";

import fetch from "./utils/axios";
import { AxiosResponse } from "axios";

export const registry = async () => {
  const res: AxiosResponse<any, any> = await fetch({
    url: "/api/app/list",
  });
  if (res.data.success) {
    const apps = res.data.data;
    registerMicroApps(apps);
    // 启动 qiankun
    start({ prefetch: false });
  }
};
registry();
