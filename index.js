'use strict';

var _leancloudStorage = require('leancloud-storage');

var _leancloudStorage2 = _interopRequireDefault(_leancloudStorage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var appId = 'VPVzwjElxgAwTwJBbdEwoMlx-gzGzoHsz';
var appKey = 'h9XawPpBQqLHEMj7eDFfVIU5';
_leancloudStorage2.default.init({ appId: appId, appKey: appKey });

var versionNumber = '0.9.10b';

var Version = _leancloudStorage2.default.Object.extend('EditorVersions');
var newVersion = new Version();
newVersion.set('version', versionNumber);
newVersion.set('linkMacOS', 'http://7xlt5v.com1.z0.glb.clouddn.com/Photon%20Engine%20' + versionNumber + '.pkg');
newVersion.set('linkWin32', 'http://7xlt5v.com1.z0.glb.clouddn.com/Photon%20Engine%20Setup%20' + versionNumber + '-ia32.exe');
newVersion.set('linkWin64', 'http://7xlt5v.com1.z0.glb.clouddn.com/Photon%20Engine%20Setup%20' + versionNumber + '-x64.exe');
newVersion.set('linkBaiduMacOS', 'https://pan.baidu.com/s/1i56wYwt');
newVersion.set('linkBaiduWin32', 'https://pan.baidu.com/s/1bpy1Kj9');
newVersion.set('linkBaiduWin64', 'https://pan.baidu.com/s/1gfmOtk3');
newVersion.set('macSize', '388.28 MB');
newVersion.set('win32Size', '296.14 MB');
newVersion.set('win64Size', '309.18 MB');
newVersion.set('releaseNote', '');

newVersion.save().then(function (ver) {
  console.log(ver.id + ' saved!');
});
