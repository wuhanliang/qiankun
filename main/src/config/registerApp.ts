import { registerMicroApps, start, setDefaultMountApp} from 'qiankun';
  
export const apps = [
  {
    name: 'system',
    entry: '//localhost:8080',
    container: '#container',
    activeRule: '/system',
    // props:{ actions: 'hello system', msg:"w"}

  },
  {
    name: 'portal',
    entry: '//localhost:8081',
    container: '#container',
    activeRule: '/portal',
    // props:{ actions: 'hello portal', msg:"w"}
  },
  {
    name: 'exam',
    entry: '//localhost:8003',
    container: '#container',
    activeRule: '/exam',
    // props:{ actions: 'hello exam', msg:"w"}
  }
]
registerMicroApps(apps);
// 启动 qiankun
start({prefetch: false});