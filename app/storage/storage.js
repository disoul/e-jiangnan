import Storage from 'react-native-storage';
import { NativeModules } from 'react-native';

export default storage = new Storage({
  size: 1000,
  defaultExpires: 1000 * 3600 * 24,
  enableCache: true,
  sync: {
    name(params) {
      let { id, resolve, reject } = params;
      fetch(
        'http://e.jiangnan.edu.cn/ehome/index.do',
        { method: 'GET' },
      )
      .then( res => {
        console.log(res._bodyText);
        NativeModules.HTMLParser.getName(res._bodyText)
        .then(name => {
          resolve && resolve(name);
        },err => {
          reject && reject(err);
        });
      } )
      .catch( err => {
        reject && reject(err);
      } );
    }
  }
})
