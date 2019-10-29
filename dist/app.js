'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

require('./npm/wepy-async-function/index.js');

var _fetch = require('./modules/common/fetch.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _default = function (_wepy$app) {
    _inherits(_default, _wepy$app);

    function _default() {
        _classCallCheck(this, _default);

        var _this = _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this));

        _this.config = {
            pages: ['pages/auth/index', 'pages/home/index', 'pages/discover/index', 'pages/publish/index', 'pages/recommend/index', 'pages/detail/moment', 'pages/list/index', 'pages/activity/index', 'pages/me/index', 'pages/me/user', 'pages/show/index', 'pages/show/image-zoom', 'pages/discuss/index', 'pages/index'],
            window: {
                backgroundTextStyle: 'light',
                navigationBarBackgroundColor: '#fff',
                navigationBarTitleText: 'WeChat',
                navigationBarTextStyle: 'black'
            },
            tabBar: {
                color: '#000',
                selectedColor: '#00b600',
                backgroundColor: '#fff',
                borderStyle: '#eee',
                list: [{
                    pagePath: 'pages/home/index',
                    iconPath: 'modules/images/homepage.png',
                    selectedIconPath: 'modules/images/homepage_fill.png',
                    text: '首页'
                }, {
                    pagePath: 'pages/discover/index',
                    iconPath: 'modules/images/browse.png',
                    selectedIconPath: 'modules/images/browse_fill.png',
                    text: '发现'
                }, {
                    pagePath: 'pages/publish/index',
                    iconPath: 'modules/images/camera.png',
                    selectedIconPath: 'modules/images/camera_fill.png',
                    text: '上传'
                }, {
                    pagePath: 'pages/show/index',
                    iconPath: 'modules/images/dynamic.png',
                    selectedIconPath: 'modules/images/dynamic_fill.png',
                    text: '圈子'
                }, {
                    pagePath: 'pages/me/index',
                    iconPath: 'modules/images/mine.png',
                    selectedIconPath: 'modules/images/mine_fill.png',
                    text: '我的'
                }]
            }
        };
        _this.globalData = {
            userInfo: null
        };

        _this.use('requestfix');
        return _this;
    }

    _createClass(_default, [{
        key: 'onLaunch',
        value: function onLaunch() {
            // this.getUserInfo()
        }
    }, {
        key: 'sleep',
        value: function sleep(s) {
            return new Promise(function (resolve, reject) {
                setTimeout(function () {
                    resolve('promise resolved');
                }, s * 1000);
            });
        }
    }, {
        key: 'getUserInfo',
        value: function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var that;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                that = this;
                                return _context.abrupt('return', new Promise(function (resolve, reject) {
                                    if (that.globalData.userInfo) {
                                        return resolve(that.globalData.userInfo);
                                    }
                                    _wepy2.default.login({
                                        success: function success(res) {
                                            return (0, _fetch.postFetch)('/loginWeChat', {
                                                noAjax: true,
                                                data: {
                                                    code: res.code
                                                }
                                            }).then(function (auth) {
                                                if (auth.res.openid) {
                                                    // 有一点需要注意 询问用户 是否授权 那提示 是这API发出的
                                                    _wepy2.default.getUserInfo({
                                                        success: function success(res) {
                                                            var _this2 = this;

                                                            that.globalData.userInfo = res.userInfo;
                                                            that.globalData.userInfo.openId = auth.res.openid;
                                                            return (0, _fetch.postFetch)('/saveUserInfo', {
                                                                noAjax: true,
                                                                data: {
                                                                    userInfo: this.globalData.userInfo
                                                                }
                                                            }).then(function (userInfo) {
                                                                _this2.globalData.userInfo.id = userInfo.user.id;
                                                                resolve(that.globalData.userInfo);
                                                            });
                                                        },
                                                        fail: function fail(failData) {
                                                            console.info('用户拒绝授权');
                                                            reject(failData);
                                                        }
                                                    });
                                                } else {
                                                    console.info('获取用户openId失败');
                                                    reject(auth);
                                                }
                                            });
                                        }
                                    });
                                }));

                            case 2:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getUserInfo() {
                return _ref.apply(this, arguments);
            }

            return getUserInfo;
        }()
        // wepy.login({
        //     success(res) {
        //         console.log(res)
        //         return postFetch('/loginWechat')
        //         // 获取openId
        //         wepy.request({
        //             url: 'https://api.weixin.qq.com/sns/jscode2session',
        //             data: {
        //                 appid: 'wxd4cec236b3cb8cf3', // 小程序唯一标识
        //                 secret: 'cb7004e2edc624da5897597e4297deac', // 小程序的 app secret
        //                 grant_type: 'authorization_code',
        //                 js_code: res.code
        //             },
        //             method: 'GET',
        //             header: { 'content-type': 'application/json' },
        //             success (openIdRes) {
        //                 console.info('登录成功返回的openId：' + openIdRes.data.openid)
        //                 // 判断openId是否获取成功
        //                 if (openIdRes.data.openid != null && openIdRes.data.openid !== undefined) {
        //                     // 有一点需要注意 询问用户 是否授权 那提示 是这API发出的
        //                     wepy.getUserInfo({
        //                         success: function (res) {
        //                             that.globalData.userInfo = res.userInfo
        //                             that.globalData.userInfo.openId = openIdRes.data.openid
        //                             return postFetch('/loginWeChat', { noAjax: true, data: this.globalData.userInfo }).then(userInfo => {
        //                                 this.globalData.userInfo.id = userInfo.user.id
        //                                 resolve(that.globalData.userInfo)
        //                             })
        //                             // 自定义操作
        //                             // 绑定数据，渲染页面
        //                         },
        //                         fail: function (failData) {
        //                             console.info('用户拒绝授权')
        //                             reject(failData)
        //                         }
        //                     })
        //                 } else {
        //                     console.info('获取用户openId失败')
        //                     reject(openIdRes)
        //                 }
        //             }
        //         })
        //     }
        // })

    }]);

    return _default;
}(_wepy2.default.app);


App(require('./npm/wepy/lib/wepy.js').default.$createApp(_default, {"noPromiseAPI":["createSelectorQuery"]}));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJwYWdlcyIsIndpbmRvdyIsImJhY2tncm91bmRUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJ0YWJCYXIiLCJjb2xvciIsInNlbGVjdGVkQ29sb3IiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXJTdHlsZSIsImxpc3QiLCJwYWdlUGF0aCIsImljb25QYXRoIiwic2VsZWN0ZWRJY29uUGF0aCIsInRleHQiLCJnbG9iYWxEYXRhIiwidXNlckluZm8iLCJ1c2UiLCJzIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJzZXRUaW1lb3V0IiwidGhhdCIsIndlcHkiLCJsb2dpbiIsInN1Y2Nlc3MiLCJyZXMiLCJub0FqYXgiLCJkYXRhIiwiY29kZSIsInRoZW4iLCJhdXRoIiwib3BlbmlkIiwiZ2V0VXNlckluZm8iLCJvcGVuSWQiLCJpZCIsInVzZXIiLCJmYWlsIiwiZmFpbERhdGEiLCJjb25zb2xlIiwiaW5mbyIsImFwcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0k7Ozs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FBcUVJLHdCQUFjO0FBQUE7O0FBQUE7O0FBQUEsY0FsRWRBLE1Ba0VjLEdBbEVMO0FBQ0xDLG1CQUFPLENBQ0gsa0JBREcsRUFFSCxrQkFGRyxFQUdILHNCQUhHLEVBSUgscUJBSkcsRUFLSCx1QkFMRyxFQU1ILHFCQU5HLEVBT0gsa0JBUEcsRUFRSCxzQkFSRyxFQVNILGdCQVRHLEVBVUgsZUFWRyxFQVdILGtCQVhHLEVBWUgsdUJBWkcsRUFhSCxxQkFiRyxFQWNILGFBZEcsQ0FERjtBQWlCTEMsb0JBQVE7QUFDSkMscUNBQXFCLE9BRGpCO0FBRUpDLDhDQUE4QixNQUYxQjtBQUdKQyx3Q0FBd0IsUUFIcEI7QUFJSkMsd0NBQXdCO0FBSnBCLGFBakJIO0FBdUJM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LDZDQS9CTSxDQUFQO0FBZ0NIO0FBbENNLHFDQUFYO0FBb0NILGlDQXhDTSxDOzs7Ozs7Ozs7Ozs7Ozs7O0FBMENIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0VBM0tpQlIsZUFBS2tCLEciLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgICBpbXBvcnQgJ3dlcHktYXN5bmMtZnVuY3Rpb24nXG4gICAgaW1wb3J0IHsgcG9zdEZldGNoIH0gZnJvbSAnQC9tb2R1bGVzL2NvbW1vbi9mZXRjaCdcblxuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgd2VweS5hcHAge1xuICAgICAgICBjb25maWcgPSB7XG4gICAgICAgICAgICBwYWdlczogW1xuICAgICAgICAgICAgICAgICdwYWdlcy9hdXRoL2luZGV4JyxcbiAgICAgICAgICAgICAgICAncGFnZXMvaG9tZS9pbmRleCcsXG4gICAgICAgICAgICAgICAgJ3BhZ2VzL2Rpc2NvdmVyL2luZGV4JyxcbiAgICAgICAgICAgICAgICAncGFnZXMvcHVibGlzaC9pbmRleCcsXG4gICAgICAgICAgICAgICAgJ3BhZ2VzL3JlY29tbWVuZC9pbmRleCcsXG4gICAgICAgICAgICAgICAgJ3BhZ2VzL2RldGFpbC9tb21lbnQnLFxuICAgICAgICAgICAgICAgICdwYWdlcy9saXN0L2luZGV4JyxcbiAgICAgICAgICAgICAgICAncGFnZXMvYWN0aXZpdHkvaW5kZXgnLFxuICAgICAgICAgICAgICAgICdwYWdlcy9tZS9pbmRleCcsXG4gICAgICAgICAgICAgICAgJ3BhZ2VzL21lL3VzZXInLFxuICAgICAgICAgICAgICAgICdwYWdlcy9zaG93L2luZGV4JyxcbiAgICAgICAgICAgICAgICAncGFnZXMvc2hvdy9pbWFnZS16b29tJyxcbiAgICAgICAgICAgICAgICAncGFnZXMvZGlzY3Vzcy9pbmRleCcsXG4gICAgICAgICAgICAgICAgJ3BhZ2VzL2luZGV4J1xuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHdpbmRvdzoge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmRUZXh0U3R5bGU6ICdsaWdodCcsXG4gICAgICAgICAgICAgICAgbmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvcjogJyNmZmYnLFxuICAgICAgICAgICAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICdXZUNoYXQnLFxuICAgICAgICAgICAgICAgIG5hdmlnYXRpb25CYXJUZXh0U3R5bGU6ICdibGFjaydcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0YWJCYXI6IHtcbiAgICAgICAgICAgICAgICBjb2xvcjogJyMwMDAnLFxuICAgICAgICAgICAgICAgIHNlbGVjdGVkQ29sb3I6ICcjMDBiNjAwJyxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJyxcbiAgICAgICAgICAgICAgICBib3JkZXJTdHlsZTogJyNlZWUnLFxuICAgICAgICAgICAgICAgIGxpc3Q6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFnZVBhdGg6ICdwYWdlcy9ob21lL2luZGV4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb25QYXRoOiAnbW9kdWxlcy9pbWFnZXMvaG9tZXBhZ2UucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkSWNvblBhdGg6ICdtb2R1bGVzL2ltYWdlcy9ob21lcGFnZV9maWxsLnBuZycsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiAn6aaW6aG1J1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWdlUGF0aDogJ3BhZ2VzL2Rpc2NvdmVyL2luZGV4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb25QYXRoOiAnbW9kdWxlcy9pbWFnZXMvYnJvd3NlLnBuZycsXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEljb25QYXRoOiAnbW9kdWxlcy9pbWFnZXMvYnJvd3NlX2ZpbGwucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6ICflj5HnjrAnXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VQYXRoOiAncGFnZXMvcHVibGlzaC9pbmRleCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uUGF0aDogJ21vZHVsZXMvaW1hZ2VzL2NhbWVyYS5wbmcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRJY29uUGF0aDogJ21vZHVsZXMvaW1hZ2VzL2NhbWVyYV9maWxsLnBuZycsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiAn5LiK5LygJ1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWdlUGF0aDogJ3BhZ2VzL3Nob3cvaW5kZXgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvblBhdGg6ICdtb2R1bGVzL2ltYWdlcy9keW5hbWljLnBuZycsXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEljb25QYXRoOiAnbW9kdWxlcy9pbWFnZXMvZHluYW1pY19maWxsLnBuZycsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiAn5ZyI5a2QJ1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWdlUGF0aDogJ3BhZ2VzL21lL2luZGV4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb25QYXRoOiAnbW9kdWxlcy9pbWFnZXMvbWluZS5wbmcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRJY29uUGF0aDogJ21vZHVsZXMvaW1hZ2VzL21pbmVfZmlsbC5wbmcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogJ+aIkeeahCdcbiAgICAgICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGdsb2JhbERhdGEgPSB7XG4gICAgICAgICAgICB1c2VySW5mbzogbnVsbFxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgICAgICBzdXBlcigpXG4gICAgICAgICAgICB0aGlzLnVzZSgncmVxdWVzdGZpeCcpXG4gICAgICAgIH1cblxuICAgICAgICBvbkxhdW5jaCgpIHtcbiAgICAgICAgICAgIC8vIHRoaXMuZ2V0VXNlckluZm8oKVxuICAgICAgICB9XG5cbiAgICAgICAgc2xlZXAocykge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgncHJvbWlzZSByZXNvbHZlZCcpXG4gICAgICAgICAgICAgICAgfSwgcyAqIDEwMDApXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgYXN5bmMgZ2V0VXNlckluZm8gKCkge1xuICAgICAgICAgICAgY29uc3QgdGhhdCA9IHRoaXNcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHRoYXQuZ2xvYmFsRGF0YS51c2VySW5mbykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh0aGF0Lmdsb2JhbERhdGEudXNlckluZm8pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHdlcHkubG9naW4oe1xuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzKHJlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBvc3RGZXRjaCgnL2xvZ2luV2VDaGF0Jywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vQWpheDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IHJlcy5jb2RlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSkudGhlbihhdXRoID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXV0aC5yZXMub3BlbmlkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOacieS4gOeCuemcgOimgeazqOaEjyDor6Lpl67nlKjmiLcg5piv5ZCm5o6I5p2DIOmCo+aPkOekuiDmmK/ov5lBUEnlj5Hlh7rnmoRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2VweS5nZXRVc2VySW5mbyh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzIChyZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF0Lmdsb2JhbERhdGEudXNlckluZm8gPSByZXMudXNlckluZm9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF0Lmdsb2JhbERhdGEudXNlckluZm8ub3BlbklkID0gYXV0aC5yZXMub3BlbmlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBvc3RGZXRjaCgnL3NhdmVVc2VySW5mbycsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9BamF4OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VySW5mbzogdGhpcy5nbG9iYWxEYXRhLnVzZXJJbmZvXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS50aGVuKHVzZXJJbmZvID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nbG9iYWxEYXRhLnVzZXJJbmZvLmlkID0gdXNlckluZm8udXNlci5pZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHRoYXQuZ2xvYmFsRGF0YS51c2VySW5mbylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhaWwgKGZhaWxEYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5pbmZvKCfnlKjmiLfmi5Lnu53mjojmnYMnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChmYWlsRGF0YSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmluZm8oJ+iOt+WPlueUqOaIt29wZW5JZOWksei0pScpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChhdXRoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIHdlcHkubG9naW4oe1xuICAgICAgICAgICAgICAgIC8vICAgICBzdWNjZXNzKHJlcykge1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgY29uc29sZS5sb2cocmVzKVxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgcmV0dXJuIHBvc3RGZXRjaCgnL2xvZ2luV2VjaGF0JylcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIC8vIOiOt+WPlm9wZW5JZFxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgd2VweS5yZXF1ZXN0KHtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB1cmw6ICdodHRwczovL2FwaS53ZWl4aW4ucXEuY29tL3Nucy9qc2NvZGUyc2Vzc2lvbicsXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICBhcHBpZDogJ3d4ZDRjZWMyMzZiM2NiOGNmMycsIC8vIOWwj+eoi+W6j+WUr+S4gOagh+ivhlxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICBzZWNyZXQ6ICdjYjcwMDRlMmVkYzYyNGRhNTg5NzU5N2U0Mjk3ZGVhYycsIC8vIOWwj+eoi+W6j+eahCBhcHAgc2VjcmV0XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIGdyYW50X3R5cGU6ICdhdXRob3JpemF0aW9uX2NvZGUnLFxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICBqc19jb2RlOiByZXMuY29kZVxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBoZWFkZXI6IHsgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHN1Y2Nlc3MgKG9wZW5JZFJlcykge1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICBjb25zb2xlLmluZm8oJ+eZu+W9leaIkOWKn+i/lOWbnueahG9wZW5JZO+8micgKyBvcGVuSWRSZXMuZGF0YS5vcGVuaWQpXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIC8vIOWIpOaWrW9wZW5JZOaYr+WQpuiOt+WPluaIkOWKn1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICBpZiAob3BlbklkUmVzLmRhdGEub3BlbmlkICE9IG51bGwgJiYgb3BlbklkUmVzLmRhdGEub3BlbmlkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIC8vIOacieS4gOeCuemcgOimgeazqOaEjyDor6Lpl67nlKjmiLcg5piv5ZCm5o6I5p2DIOmCo+aPkOekuiDmmK/ov5lBUEnlj5Hlh7rnmoRcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIHdlcHkuZ2V0VXNlckluZm8oe1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5nbG9iYWxEYXRhLnVzZXJJbmZvID0gcmVzLnVzZXJJbmZvXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQuZ2xvYmFsRGF0YS51c2VySW5mby5vcGVuSWQgPSBvcGVuSWRSZXMuZGF0YS5vcGVuaWRcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBvc3RGZXRjaCgnL2xvZ2luV2VDaGF0JywgeyBub0FqYXg6IHRydWUsIGRhdGE6IHRoaXMuZ2xvYmFsRGF0YS51c2VySW5mbyB9KS50aGVuKHVzZXJJbmZvID0+IHtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2xvYmFsRGF0YS51c2VySW5mby5pZCA9IHVzZXJJbmZvLnVzZXIuaWRcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUodGhhdC5nbG9iYWxEYXRhLnVzZXJJbmZvKVxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDoh6rlrprkuYnmk43kvZxcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g57uR5a6a5pWw5o2u77yM5riy5p+T6aG16Z2iXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBmYWlsOiBmdW5jdGlvbiAoZmFpbERhdGEpIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5pbmZvKCfnlKjmiLfmi5Lnu53mjojmnYMnKVxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZmFpbERhdGEpXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuaW5mbygn6I635Y+W55So5oi3b3Blbklk5aSx6LSlJylcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIHJlamVjdChvcGVuSWRSZXMpXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC8vICAgICB9XG4gICAgICAgICAgICAgICAgLy8gfSlcbiAgICB9XG4iXX0=