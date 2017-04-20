// 导入LeanCloud
import AV from "leancloud-storage"

var APP_ID = 'UgRO2nPJbvVAMRLIy2vs7z1e-gzGzoHsz';
var APP_KEY = 'pzWUrSOWB6euFMFpvs51UsXl';
AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});

export default AV