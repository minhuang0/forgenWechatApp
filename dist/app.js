'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

require('./npm/wepy-async-function/index.js');

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
            pages: ['pages/home/index', 'pages/publish/index', 'pages/detail/moment', 'pages/discover/index', 'pages/list/index', 'pages/recommend/index', 'pages/activity/index', 'pages/me/index', 'pages/show/index', 'pages/discuss/index', 'pages/index'],
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
                    text: '小森秀'
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
            this.testAsync();
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
        key: 'testAsync',
        value: function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var data;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return this.sleep(3);

                            case 2:
                                data = _context.sent;

                                console.log(data);

                            case 4:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function testAsync() {
                return _ref.apply(this, arguments);
            }

            return testAsync;
        }()
    }, {
        key: 'getUserInfo',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                var that;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                that = this;
                                return _context2.abrupt('return', new Promise(function (resolve, reject) {
                                    if (that.globalData.userInfo) {
                                        resolve(that.globalData.userInfo);
                                    }
                                    _wepy2.default.login({
                                        success: function success(res) {
                                            // 获取openId
                                            _wepy2.default.request({
                                                url: 'https://api.weixin.qq.com/sns/jscode2session',
                                                data: {
                                                    appid: 'wx074fc89a63291f58', // 小程序唯一标识
                                                    secret: 'c52454ed68690c8a35190b941c6c298b', // 小程序的 app secret
                                                    grant_type: 'authorization_code',
                                                    js_code: res.code
                                                },
                                                method: 'GET',
                                                header: { 'content-type': 'application/json' },
                                                success: function success(openIdRes) {
                                                    console.info('登录成功返回的openId：' + openIdRes.data.openid);
                                                    // 判断openId是否获取成功
                                                    if (openIdRes.data.openid != null && openIdRes.data.openid !== undefined) {
                                                        // 有一点需要注意 询问用户 是否授权 那提示 是这API发出的
                                                        _wepy2.default.getUserInfo({
                                                            success: function success(res) {
                                                                that.globalData.userInfo = res.userInfo;
                                                                that.globalData.userInfo.password = '1234567890';
                                                                that.globalData.userInfo.openId = openIdRes.data.openid;
                                                                resolve(res.userInfo);
                                                                // 自定义操作
                                                                // 绑定数据，渲染页面
                                                            },
                                                            fail: function fail(failData) {
                                                                console.info('用户拒绝授权');
                                                                reject(failData);
                                                            }
                                                        });
                                                    } else {
                                                        console.info('获取用户openId失败');
                                                        reject(openIdRes);
                                                    }
                                                }
                                            });
                                        }
                                    });
                                }));

                            case 2:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function getUserInfo() {
                return _ref2.apply(this, arguments);
            }

            return getUserInfo;
        }()
    }]);

    return _default;
}(_wepy2.default.app);


App(require('./npm/wepy/lib/wepy.js').default.$createApp(_default, {"noPromiseAPI":["createSelectorQuery"]}));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJwYWdlcyIsIndpbmRvdyIsImJhY2tncm91bmRUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJ0YWJCYXIiLCJjb2xvciIsInNlbGVjdGVkQ29sb3IiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXJTdHlsZSIsImxpc3QiLCJwYWdlUGF0aCIsImljb25QYXRoIiwic2VsZWN0ZWRJY29uUGF0aCIsInRleHQiLCJnbG9iYWxEYXRhIiwidXNlckluZm8iLCJ1c2UiLCJ0ZXN0QXN5bmMiLCJzIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJzZXRUaW1lb3V0Iiwic2xlZXAiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsInRoYXQiLCJsb2dpbiIsInN1Y2Nlc3MiLCJyZXMiLCJyZXF1ZXN0IiwidXJsIiwiYXBwaWQiLCJzZWNyZXQiLCJncmFudF90eXBlIiwianNfY29kZSIsImNvZGUiLCJtZXRob2QiLCJoZWFkZXIiLCJvcGVuSWRSZXMiLCJpbmZvIiwib3BlbmlkIiwidW5kZWZpbmVkIiwiZ2V0VXNlckluZm8iLCJwYXNzd29yZCIsIm9wZW5JZCIsImZhaWwiLCJmYWlsRGF0YSIsImFwcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0k7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FBa0VJLHdCQUFjO0FBQUE7O0FBQUE7O0FBQUEsY0EvRGRBLE1BK0RjLEdBL0RMO0FBQ0xDLG1CQUFPLENBQ0gsa0JBREcsRUFFSCxxQkFGRyxFQUdILHFCQUhHLEVBSUgsc0JBSkcsRUFLSCxrQkFMRyxFQU1ILHVCQU5HLEVBT0gsc0JBUEcsRUFRSCxnQkFSRyxFQVNILGtCQVRHLEVBVUgscUJBVkcsRUFXSCxhQVhHLENBREY7QUFjTEMsb0JBQVE7QUFDSkMscUNBQXFCLE9BRGpCO0FBRUpDLDhDQUE4QixN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Q0F0Qix3RUFBUVUsSUFBSWYsUUFBWjtBQUNBO0FBQ0E7QUFDSCw2REFSWTtBQVNiZ0Msa0VBQU0sY0FBVUMsUUFBVixFQUFvQjtBQUN0QnZCLHdFQUFRZ0IsSUFBUixDQUFhLFFBQWI7QUFDQXBCLHVFQUFPMkIsUUFBUDtBQUNIO0FBWlkseURBQWpCO0FBY0gscURBaEJELE1BZ0JPO0FBQ0h2QixnRUFBUWdCLElBQVIsQ0FBYSxjQUFiO0FBQ0FwQiwrREFBT21CLFNBQVA7QUFDSDtBQUNKO0FBakNRLDZDQUFiO0FBbUNIO0FBdENNLHFDQUFYO0FBd0NILGlDQTVDTSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBeEZjLGVBQUtTLEciLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgICBpbXBvcnQgJ3dlcHktYXN5bmMtZnVuY3Rpb24nXG5cbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIHdlcHkuYXBwIHtcbiAgICAgICAgY29uZmlnID0ge1xuICAgICAgICAgICAgcGFnZXM6IFtcbiAgICAgICAgICAgICAgICAncGFnZXMvaG9tZS9pbmRleCcsXG4gICAgICAgICAgICAgICAgJ3BhZ2VzL3B1Ymxpc2gvaW5kZXgnLFxuICAgICAgICAgICAgICAgICdwYWdlcy9kZXRhaWwvbW9tZW50JyxcbiAgICAgICAgICAgICAgICAncGFnZXMvZGlzY292ZXIvaW5kZXgnLFxuICAgICAgICAgICAgICAgICdwYWdlcy9saXN0L2luZGV4JyxcbiAgICAgICAgICAgICAgICAncGFnZXMvcmVjb21tZW5kL2luZGV4JyxcbiAgICAgICAgICAgICAgICAncGFnZXMvYWN0aXZpdHkvaW5kZXgnLFxuICAgICAgICAgICAgICAgICdwYWdlcy9tZS9pbmRleCcsXG4gICAgICAgICAgICAgICAgJ3BhZ2VzL3Nob3cvaW5kZXgnLFxuICAgICAgICAgICAgICAgICdwYWdlcy9kaXNjdXNzL2luZGV4JyxcbiAgICAgICAgICAgICAgICAncGFnZXMvaW5kZXgnXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgd2luZG93OiB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZFRleHRTdHlsZTogJ2xpZ2h0JyxcbiAgICAgICAgICAgICAgICBuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXG4gICAgICAgICAgICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ1dlQ2hhdCcsXG4gICAgICAgICAgICAgICAgbmF2aWdhdGlvbkJhclRleHRTdHlsZTogJ2JsYWNrJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRhYkJhcjoge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAnIzAwMCcsXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRDb2xvcjogJyMwMGI2MDAnLFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNmZmYnLFxuICAgICAgICAgICAgICAgIGJvcmRlclN0eWxlOiAnI2VlZScsXG4gICAgICAgICAgICAgICAgbGlzdDogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWdlUGF0aDogJ3BhZ2VzL2hvbWUvaW5kZXgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvblBhdGg6ICdtb2R1bGVzL2ltYWdlcy9ob21lcGFnZS5wbmcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRJY29uUGF0aDogJ21vZHVsZXMvaW1hZ2VzL2hvbWVwYWdlX2ZpbGwucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6ICfpppbpobUnXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VQYXRoOiAncGFnZXMvZGlzY292ZXIvaW5kZXgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvblBhdGg6ICdtb2R1bGVzL2ltYWdlcy9icm93c2UucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkSWNvblBhdGg6ICdtb2R1bGVzL2ltYWdlcy9icm93c2VfZmlsbC5wbmcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogJ+WPkeeOsCdcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFnZVBhdGg6ICdwYWdlcy9wdWJsaXNoL2luZGV4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb25QYXRoOiAnbW9kdWxlcy9pbWFnZXMvY2FtZXJhLnBuZycsXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEljb25QYXRoOiAnbW9kdWxlcy9pbWFnZXMvY2FtZXJhX2ZpbGwucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6ICfkuIrkvKAnXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VQYXRoOiAncGFnZXMvc2hvdy9pbmRleCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uUGF0aDogJ21vZHVsZXMvaW1hZ2VzL2R5bmFtaWMucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkSWNvblBhdGg6ICdtb2R1bGVzL2ltYWdlcy9keW5hbWljX2ZpbGwucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6ICflsI/mo67np4AnXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VQYXRoOiAncGFnZXMvbWUvaW5kZXgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvblBhdGg6ICdtb2R1bGVzL2ltYWdlcy9taW5lLnBuZycsXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEljb25QYXRoOiAnbW9kdWxlcy9pbWFnZXMvbWluZV9maWxsLnBuZycsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiAn5oiR55qEJ1xuICAgICAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZ2xvYmFsRGF0YSA9IHtcbiAgICAgICAgICAgIHVzZXJJbmZvOiBudWxsXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgICAgIHN1cGVyKClcbiAgICAgICAgICAgIHRoaXMudXNlKCdyZXF1ZXN0Zml4JylcbiAgICAgICAgfVxuXG4gICAgICAgIG9uTGF1bmNoKCkge1xuICAgICAgICAgICAgdGhpcy50ZXN0QXN5bmMoKVxuICAgICAgICB9XG5cbiAgICAgICAgc2xlZXAocykge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgncHJvbWlzZSByZXNvbHZlZCcpXG4gICAgICAgICAgICAgICAgfSwgcyAqIDEwMDApXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgYXN5bmMgdGVzdEFzeW5jKCkge1xuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHRoaXMuc2xlZXAoMylcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgICAgIH1cblxuICAgICAgICBhc3luYyBnZXRVc2VySW5mbyAoKSB7XG4gICAgICAgICAgICBjb25zdCB0aGF0ID0gdGhpc1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodGhhdC5nbG9iYWxEYXRhLnVzZXJJbmZvKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUodGhhdC5nbG9iYWxEYXRhLnVzZXJJbmZvKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB3ZXB5LmxvZ2luKHtcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzcyhyZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOiOt+WPlm9wZW5JZFxuICAgICAgICAgICAgICAgICAgICAgICAgd2VweS5yZXF1ZXN0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6ICdodHRwczovL2FwaS53ZWl4aW4ucXEuY29tL3Nucy9qc2NvZGUyc2Vzc2lvbicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcHBpZDogJ3d4MDc0ZmM4OWE2MzI5MWY1OCcsIC8vIOWwj+eoi+W6j+WUr+S4gOagh+ivhlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWNyZXQ6ICdjNTI0NTRlZDY4NjkwYzhhMzUxOTBiOTQxYzZjMjk4YicsIC8vIOWwj+eoi+W6j+eahCBhcHAgc2VjcmV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyYW50X3R5cGU6ICdhdXRob3JpemF0aW9uX2NvZGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqc19jb2RlOiByZXMuY29kZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXI6IHsgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MgKG9wZW5JZFJlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmluZm8oJ+eZu+W9leaIkOWKn+i/lOWbnueahG9wZW5JZO+8micgKyBvcGVuSWRSZXMuZGF0YS5vcGVuaWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOWIpOaWrW9wZW5JZOaYr+WQpuiOt+WPluaIkOWKn1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAob3BlbklkUmVzLmRhdGEub3BlbmlkICE9IG51bGwgJiYgb3BlbklkUmVzLmRhdGEub3BlbmlkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOacieS4gOeCuemcgOimgeazqOaEjyDor6Lpl67nlKjmiLcg5piv5ZCm5o6I5p2DIOmCo+aPkOekuiDmmK/ov5lBUEnlj5Hlh7rnmoRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdlcHkuZ2V0VXNlckluZm8oe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5nbG9iYWxEYXRhLnVzZXJJbmZvID0gcmVzLnVzZXJJbmZvXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQuZ2xvYmFsRGF0YS51c2VySW5mby5wYXNzd29yZCA9ICcxMjM0NTY3ODkwJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF0Lmdsb2JhbERhdGEudXNlckluZm8ub3BlbklkID0gb3BlbklkUmVzLmRhdGEub3BlbmlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzLnVzZXJJbmZvKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDoh6rlrprkuYnmk43kvZxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g57uR5a6a5pWw5o2u77yM5riy5p+T6aG16Z2iXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWlsOiBmdW5jdGlvbiAoZmFpbERhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5pbmZvKCfnlKjmiLfmi5Lnu53mjojmnYMnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZmFpbERhdGEpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuaW5mbygn6I635Y+W55So5oi3b3Blbklk5aSx6LSlJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChvcGVuSWRSZXMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG4iXX0=