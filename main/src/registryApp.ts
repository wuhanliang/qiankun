import { registerMicroApps, start } from "qiankun";

import fetch from "./utils/axios";
import { AxiosResponse } from "axios";

export const registry = async () => {
  const res: AxiosResponse<any, any> = await fetch({
    url: "/api/app/list",
    params: {
      parentId: 0
    }
  });
  if (res.data.success) {
    const apps = res.data.data.map((item: any) => { 
      item.container = `#${item.container}`
      item.name = item.package_name
      return item
    });
    registerMicroApps(apps);
    // 启动 qiankun
    start({ prefetch: true });
  }
};
registry();
