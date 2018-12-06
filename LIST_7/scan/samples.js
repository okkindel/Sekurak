var mime_samples = [
  { 'mime': 'application/javascript', 'samples': [
    { 'url': 'http://10.182.95.138:4200/main.js/', 'dir': '_m0/0', 'linked': 5, 'len': 222339 },
    { 'url': 'http://10.182.95.138:4200/main.js.map/', 'dir': '_m0/1', 'linked': 5, 'len': 107280 },
    { 'url': 'http://10.182.95.138:4200/polyfills.js/', 'dir': '_m0/2', 'linked': 2, 'len': 226799 },
    { 'url': 'http://10.182.95.138:4200/polyfills.js.map/', 'dir': '_m0/3', 'linked': 1, 'len': 225161 },
    { 'url': 'http://10.182.95.138:4200/runtime.js/', 'dir': '_m0/4', 'linked': 2, 'len': 5220 },
    { 'url': 'http://10.182.95.138:4200/runtime.js.map/', 'dir': '_m0/5', 'linked': 0, 'len': 5181 },
    { 'url': 'http://10.182.95.138:4200/styles.js/', 'dir': '_m0/6', 'linked': 2, 'len': 170962 },
    { 'url': 'http://10.182.95.138:4200/vendor.js/', 'dir': '_m0/7', 'linked': 2, 'len': 400000 } ]
  },
  { 'mime': 'application/xhtml+xml', 'samples': [
    { 'url': 'http://10.182.95.138:4200/__webpack_dev_server__/live.bundle.js/E.fx.off', 'dir': '_m1/0', 'linked': 1, 'len': 185 },
    { 'url': 'http://10.182.95.138:4200/runtime.js/%06%24%9F%E8%D3U/', 'dir': '_m1/1', 'linked': 0, 'len': 2628 },
    { 'url': 'http://10.182.95.138:4200/main', 'dir': '_m1/2', 'linked': 0, 'len': 148 },
    { 'url': 'http://10.182.95.138:4200/webpack-dev-server', 'dir': '_m1/3', 'linked': 0, 'len': 382 },
    { 'url': 'http://10.182.95.138:4200/webpack-dev-server', 'dir': '_m1/4', 'linked': 0, 'len': 2084 } ]
  },
  { 'mime': 'image/svg+xml', 'samples': [
    { 'url': 'http://10.182.95.138:4200/assets/icons/icon_black.svg/', 'dir': '_m2/0', 'linked': 2, 'len': 1973 },
    { 'url': 'http://10.182.95.138:4200/assets/icons/icon_white.svg/', 'dir': '_m2/1', 'linked': 2, 'len': 2018 } ]
  },
  { 'mime': 'text/html', 'samples': [
    { 'url': 'http://10.182.95.138:4200/', 'dir': '_m3/0', 'linked': 2, 'len': 690 } ]
  },
  { 'mime': 'text/plain', 'samples': [
    { 'url': 'http://10.182.95.138:4200/__webpack_dev_server__/live.bundle.js/', 'dir': '_m4/0', 'linked': 5, 'len': 167926 },
    { 'url': 'http://10.182.95.138:4200/webpack-dev-server.js/', 'dir': '_m4/1', 'linked': 1, 'len': 144584 } ]
  }
];

var issue_samples = [
  { 'severity': 2, 'type': 30601, 'samples': [
    { 'url': 'http://10.182.95.138:4200/main.js/?\x5c\x22email\x5c\x22=skipfish@example.com&\x5c\x22password\x5c\x22=skipfish', 'extra': '', 'sid': '0', 'dir': '_i0/0' },
    { 'url': 'http://10.182.95.138:4200/main.js/?\x5c\x22email\x5c\x22=skipfish@example.com&\x5c\x22password\x5c\x22=skipfish', 'extra': '', 'sid': '0', 'dir': '_i0/1' },
    { 'url': 'http://10.182.95.138:4200/main.js.map/?\x5c\x5c\x5c\x22email\x5c\x5c\x5c\x22=skipfish@example.com&\x5c\x5c\x5c\x22password\x5c\x5c\x5c\x22=skipfish', 'extra': '', 'sid': '0', 'dir': '_i0/2' },
    { 'url': 'http://10.182.95.138:4200/main.js.map/?\x5c\x5c\x5c\x22email\x5c\x5c\x5c\x22=skipfish@example.com&\x5c\x5c\x5c\x22password\x5c\x5c\x5c\x22=skipfish', 'extra': '', 'sid': '0', 'dir': '_i0/3' } ]
  },
  { 'severity': 1, 'type': 20301, 'samples': [
    { 'url': 'http://10.182.95.138:4200/main.js/shared/containers', 'extra': '', 'sid': '0', 'dir': '_i1/0' },
    { 'url': 'http://10.182.95.138:4200/themes', 'extra': '', 'sid': '0', 'dir': '_i1/1' } ]
  },
  { 'severity': 1, 'type': 20101, 'samples': [
    { 'url': 'http://10.182.95.138:4200/main.js/', 'extra': 'During injection testing', 'sid': '0', 'dir': '_i2/0' },
    { 'url': 'http://10.182.95.138:4200/polyfills.js/', 'extra': 'During injection testing', 'sid': '0', 'dir': '_i2/1' },
    { 'url': 'http://10.182.95.138:4200/styles.js/', 'extra': 'During injection testing', 'sid': '0', 'dir': '_i2/2' },
    { 'url': 'http://10.182.95.138:4200/vendor.js/', 'extra': 'During injection testing', 'sid': '0', 'dir': '_i2/3' } ]
  },
  { 'severity': 0, 'type': 10901, 'samples': [
    { 'url': 'http://10.182.95.138:4200/runtime.js/%0A%0A@%F61%E9%D3U/', 'extra': '', 'sid': '0', 'dir': '_i3/0' } ]
  },
  { 'severity': 0, 'type': 10803, 'samples': [
    { 'url': 'http://10.182.95.138:4200/__webpack_dev_server__/live.bundle.js/', 'extra': '', 'sid': '0', 'dir': '_i4/0' },
    { 'url': 'http://10.182.95.138:4200/__webpack_dev_server__/live.bundle.js/', 'extra': '', 'sid': '0', 'dir': '_i4/1' },
    { 'url': 'http://10.182.95.138:4200/webpack-dev-server.js/', 'extra': '', 'sid': '0', 'dir': '_i4/2' },
    { 'url': 'http://10.182.95.138:4200/webpack-dev-server.js/', 'extra': '', 'sid': '0', 'dir': '_i4/3' },
    { 'url': 'http://10.182.95.138:4200/main', 'extra': '', 'sid': '0', 'dir': '_i4/4' },
    { 'url': 'http://10.182.95.138:4200/webpack-dev-server', 'extra': '', 'sid': '0', 'dir': '_i4/5' } ]
  },
  { 'severity': 0, 'type': 10801, 'samples': [
    { 'url': 'http://10.182.95.138:4200/assets/icons/icon_black.svg/', 'extra': 'image/svg+xml', 'sid': '0', 'dir': '_i5/0' },
    { 'url': 'http://10.182.95.138:4200/assets/icons/icon_white.svg/', 'extra': 'image/svg+xml', 'sid': '0', 'dir': '_i5/1' },
    { 'url': 'http://10.182.95.138:4200/main.js/', 'extra': 'application/javascript', 'sid': '0', 'dir': '_i5/2' },
    { 'url': 'http://10.182.95.138:4200/main.js/?\x5c\x22email\x5c\x22=9876sfi&\x5c\x22password\x5c\x22=skipfish', 'extra': 'application/javascript', 'sid': '0', 'dir': '_i5/3' },
    { 'url': 'http://10.182.95.138:4200/main.js/?\x5c\x22email\x5c\x22\x5cn=9876sfi&\x5c\x22password\x5c\x22\x5cn=skipfish&\x5c\x22re-password\x5c\x22\x5cn=skipfish', 'extra': 'application/javascript', 'sid': '0', 'dir': '_i5/4' },
    { 'url': 'http://10.182.95.138:4200/main.js/?\x5c\x22email\x5c\x22=skipfish@example.com&\x5c\x22password\x5c\x22=9876sfi', 'extra': 'application/javascript', 'sid': '0', 'dir': '_i5/5' },
    { 'url': 'http://10.182.95.138:4200/main.js/?\x5c\x22email\x5c\x22\x5cn=skipfish@example.com&\x5c\x22password\x5c\x22\x5cn=9876sfi&\x5c\x22re-password\x5c\x22\x5cn=skipfish', 'extra': 'application/javascript', 'sid': '0', 'dir': '_i5/6' },
    { 'url': 'http://10.182.95.138:4200/main.js/?\x5c\x22email\x5c\x22\x5cn=skipfish@example.com&\x5c\x22password\x5c\x22\x5cn=skipfish&\x5c\x22re-password\x5c\x22\x5cn=9876sfi', 'extra': 'application/javascript', 'sid': '0', 'dir': '_i5/7' },
    { 'url': 'http://10.182.95.138:4200/main.js/', 'extra': 'application/javascript', 'sid': '0', 'dir': '_i5/8' },
    { 'url': 'http://10.182.95.138:4200/main.js.map/', 'extra': 'application/javascript', 'sid': '0', 'dir': '_i5/9' },
    { 'url': 'http://10.182.95.138:4200/main.js.map/?\x5c\x5c\x5c\x22email\x5c\x5c\x5c\x22=9876sfi&\x5c\x5c\x5c\x22password\x5c\x5c\x5c\x22=skipfish', 'extra': 'application/javascript', 'sid': '0', 'dir': '_i5/10' },
    { 'url': 'http://10.182.95.138:4200/main.js.map/?\x5c\x5c\x5c\x22email\x5c\x5c\x5c\x22\x5c\x5cn=9876sfi&\x5c\x5c\x5c\x22password\x5c\x5c\x5c\x22\x5c\x5cn=skipfish&\x5c\x5c\x5c\x22re-password\x5c\x5c\x5c\x22\x5c\x5cn=skipfish', 'extra': 'application/javascript', 'sid': '0', 'dir': '_i5/11' },
    { 'url': 'http://10.182.95.138:4200/main.js.map/?\x5c\x5c\x5c\x22email\x5c\x5c\x5c\x22=skipfish@example.com&\x5c\x5c\x5c\x22password\x5c\x5c\x5c\x22=9876sfi', 'extra': 'application/javascript', 'sid': '0', 'dir': '_i5/12' },
    { 'url': 'http://10.182.95.138:4200/main.js.map/?\x5c\x5c\x5c\x22email\x5c\x5c\x5c\x22\x5c\x5cn=skipfish@example.com&\x5c\x5c\x5c\x22password\x5c\x5c\x5c\x22\x5c\x5cn=9876sfi&\x5c\x5c\x5c\x22re-password\x5c\x5c\x5c\x22\x5c\x5cn=skipfish', 'extra': 'application/javascript', 'sid': '0', 'dir': '_i5/13' },
    { 'url': 'http://10.182.95.138:4200/main.js.map/?\x5c\x5c\x5c\x22email\x5c\x5c\x5c\x22\x5c\x5cn=skipfish@example.com&\x5c\x5c\x5c\x22password\x5c\x5c\x5c\x22\x5c\x5cn=skipfish&\x5c\x5c\x5c\x22re-password\x5c\x5c\x5c\x22\x5c\x5cn=9876sfi', 'extra': 'application/javascript', 'sid': '0', 'dir': '_i5/14' },
    { 'url': 'http://10.182.95.138:4200/main.js.map/', 'extra': 'application/javascript', 'sid': '0', 'dir': '_i5/15' },
    { 'url': 'http://10.182.95.138:4200/polyfills.js/', 'extra': 'application/javascript', 'sid': '0', 'dir': '_i5/16' },
    { 'url': 'http://10.182.95.138:4200/polyfills.js/', 'extra': 'application/javascript', 'sid': '0', 'dir': '_i5/17' },
    { 'url': 'http://10.182.95.138:4200/polyfills.js.map/', 'extra': 'application/javascript', 'sid': '0', 'dir': '_i5/18' },
    { 'url': 'http://10.182.95.138:4200/runtime.js/', 'extra': 'application/javascript', 'sid': '0', 'dir': '_i5/19' },
    { 'url': 'http://10.182.95.138:4200/runtime.js//', 'extra': 'application/javascript', 'sid': '0', 'dir': '_i5/20' },
    { 'url': 'http://10.182.95.138:4200/runtime.js.map/', 'extra': 'application/javascript', 'sid': '0', 'dir': '_i5/21' },
    { 'url': 'http://10.182.95.138:4200/styles.js/', 'extra': 'application/javascript', 'sid': '0', 'dir': '_i5/22' },
    { 'url': 'http://10.182.95.138:4200/styles.js/', 'extra': 'application/javascript', 'sid': '0', 'dir': '_i5/23' },
    { 'url': 'http://10.182.95.138:4200/vendor.js/', 'extra': 'application/javascript', 'sid': '0', 'dir': '_i5/24' },
    { 'url': 'http://10.182.95.138:4200/vendor.js/', 'extra': 'application/javascript', 'sid': '0', 'dir': '_i5/25' },
    { 'url': 'http://10.182.95.138:4200/main', 'extra': 'application/xhtml+xml', 'sid': '0', 'dir': '_i5/26' } ]
  },
  { 'severity': 0, 'type': 10601, 'samples': [
    { 'url': 'http://10.182.95.138:4200/__webpack_dev_server__/live.bundle.js/', 'extra': '', 'sid': '0', 'dir': '_i6/0' },
    { 'url': 'http://10.182.95.138:4200/__webpack_dev_server__/live.bundle.js/', 'extra': '', 'sid': '0', 'dir': '_i6/1' },
    { 'url': 'http://10.182.95.138:4200/main.js/', 'extra': '', 'sid': '0', 'dir': '_i6/2' },
    { 'url': 'http://10.182.95.138:4200/main.js/', 'extra': '', 'sid': '0', 'dir': '_i6/3' },
    { 'url': 'http://10.182.95.138:4200/main.js.map/', 'extra': '', 'sid': '0', 'dir': '_i6/4' },
    { 'url': 'http://10.182.95.138:4200/main.js.map/', 'extra': '', 'sid': '0', 'dir': '_i6/5' } ]
  },
  { 'severity': 0, 'type': 10405, 'samples': [
    { 'url': 'http://10.182.95.138:4200/runtime.js//', 'extra': '', 'sid': '0', 'dir': '_i7/0' },
    { 'url': 'http://10.182.95.138:4200/runtime.js/%06%24%9F%E8%D3U/', 'extra': '', 'sid': '0', 'dir': '_i7/1' },
    { 'url': 'http://10.182.95.138:4200/runtime.js/%0A%0A@%F61%E9%D3U/', 'extra': '', 'sid': '0', 'dir': '_i7/2' },
    { 'url': 'http://10.182.95.138:4200/runtime.js.map/', 'extra': '', 'sid': '0', 'dir': '_i7/3' },
    { 'url': 'http://10.182.95.138:4200/main', 'extra': '', 'sid': '0', 'dir': '_i7/4' },
    { 'url': 'http://10.182.95.138:4200/webpack-dev-server', 'extra': '', 'sid': '0', 'dir': '_i7/5' } ]
  },
  { 'severity': 0, 'type': 10401, 'samples': [
    { 'url': 'http://10.182.95.138:4200/runtime.js/%06%24%9F%E8%D3U/', 'extra': '', 'sid': '0', 'dir': '_i8/0' },
    { 'url': 'http://10.182.95.138:4200/runtime.js/%0A%0A@%F61%E9%D3U/', 'extra': '', 'sid': '0', 'dir': '_i8/1' } ]
  },
  { 'severity': 0, 'type': 10205, 'samples': [
    { 'url': 'http://10.182.95.138:4200/sfi9876', 'extra': '', 'sid': '0', 'dir': '_i9/0' },
    { 'url': 'http://10.182.95.138:4200/__webpack_dev_server__/live.bundle.js/sfi9876', 'extra': '', 'sid': '0', 'dir': '_i9/1' },
    { 'url': 'http://10.182.95.138:4200/__webpack_dev_server__/live.bundle.js/sfi9876', 'extra': '', 'sid': '0', 'dir': '_i9/2' },
    { 'url': 'http://10.182.95.138:4200/assets/icons/icon_black.svg/sfi9876', 'extra': '', 'sid': '0', 'dir': '_i9/3' },
    { 'url': 'http://10.182.95.138:4200/assets/icons/icon_white.svg/sfi9876', 'extra': '', 'sid': '0', 'dir': '_i9/4' } ]
  },
  { 'severity': 0, 'type': 10204, 'samples': [
    { 'url': 'http://10.182.95.138:4200/', 'extra': 'X-Powered-By', 'sid': '0', 'dir': '_i10/0' },
    { 'url': 'http://10.182.95.138:4200/__webpack_dev_server__/live.bundle.js/', 'extra': 'X-Content-Type-Options', 'sid': '0', 'dir': '_i10/1' },
    { 'url': 'http://10.182.95.138:4200/__webpack_dev_server__/live.bundle.js/', 'extra': 'X-Content-Type-Options', 'sid': '0', 'dir': '_i10/2' },
    { 'url': 'http://10.182.95.138:4200/assets/icons/icon_black.svg/', 'extra': 'X-Content-Type-Options', 'sid': '0', 'dir': '_i10/3' },
    { 'url': 'http://10.182.95.138:4200/assets/icons/icon_white.svg/', 'extra': 'X-Content-Type-Options', 'sid': '0', 'dir': '_i10/4' },
    { 'url': 'http://10.182.95.138:4200/runtime.js/%06%24%9F%E8%D3U/', 'extra': 'X-Content-Type-Options', 'sid': '0', 'dir': '_i10/5' },
    { 'url': 'http://10.182.95.138:4200/runtime.js/%0A%0A@%F61%E9%D3U/', 'extra': 'X-Content-Type-Options', 'sid': '0', 'dir': '_i10/6' } ]
  }
];

