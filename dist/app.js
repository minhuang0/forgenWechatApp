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
            pages: ['pages/home/index', 'pages/index'],
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
                    pagePath: 'pages/index',
                    iconPath: 'modules/images/camera.png',
                    selectedIconPath: 'modules/images/camera_fill.png',
                    text: '上传'
                }, {
                    pagePath: 'pages/index',
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
        value: function getUserInfo(cb) {
            var that = this;
            if (this.globalData.userInfo) {
                return this.globalData.userInfo;
            }
            _wepy2.default.getUserInfo({
                success: function success(res) {
                    that.globalData.userInfo = res.userInfo;
                    cb && cb(res.userInfo);
                }
            });
        }
    }]);

    return _default;
}(_wepy2.default.app);


App(require('./npm/wepy/lib/wepy.js').default.$createApp(_default, {"noPromiseAPI":["createSelectorQuery"]}));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJwYWdlcyIsIndpbmRvdyIsImJhY2tncm91bmRUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJ0YWJCYXIiLCJjb2xvciIsInNlbGVjdGVkQ29sb3IiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXJTdHlsZSIsImxpc3QiLCJwYWdlUGF0aCIsImljb25QYXRoIiwic2VsZWN0ZWRJY29uUGF0aCIsInRleHQiLCJnbG9iYWxEYXRhIiwidXNlckluZm8iLCJ1c2UiLCJ0ZXN0QXN5bmMiLCJzIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJzZXRUaW1lb3V0Iiwic2xlZXAiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImNiIiwidGhhdCIsImdldFVzZXJJbmZvIiwic3VjY2VzcyIsInJlcyIsImFwcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0k7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FBNkNJLHdCQUFjO0FBQUE7O0FBQUE7O0FBQUEsY0ExQ2RBLE1BMENjLEdBMUNMO0FBQ0xDLG1CQUFPLENBQ0gsa0JBREcsRUFFSCxhQUZHLENBREY7QUFLTEMsb0JBQVE7QUFDSkMscUNBQXFCLE9BRGpCO0FBRUpDLDhDQUE4QixNQUYxQjtBQUdKQyx3Q0FBd0IsUUFIcEI7QUFJSkMsd0NBQXdCO0FBSnBCLGFBTEg7QUFXTEMsb0JBQVE7QUFDSkMsdUJBQU8sTUFESDtBQUVKQywrQkFBZSxTQUZYO0FBR0pDLGlDQUFpQixNQUhiO0FBSUpDLDZCQUFhLE1BSlQ7QUFLSkMsc0JBQU0sQ0FDRjtBQUNJQyw4QkFBVSxrQkFEZDtBQUVJQyw4QkFBVSw2QkFGZDtBQUdJQyxzQ0FBa0Isa0NBSHRCO0FBSUlDLDBCQUFNO0FBSlYsaUJBREUsRUFPRjtBQUNJSCw4QkFBVSxhQURkO0FBRUlDLDhCQUFVLDJCQUZkO0FBR0lDLHNDQUFrQixnQ0FIdEI7QUFJSUMsMEJBQU07QUFKVixpQkFQRSxFQWFGO0FBQ0lILDhCQUFVLGFBRGQ7QUFFSUMsOEJBQVUseUJBRmQ7QUFHSUMsc0NBQWtCLDhCQUh0QjtBQUlJQywwQkFBTTtBQUpWLGlCQWJFO0FBTEY7QUFYSCxTQTBDSztBQUFBLGNBSmRDLFVBSWMsR0FKRDtBQUNUQyxzQkFBVTtBQURELFNBSUM7O0FBRVYsY0FBS0MsR0FBTCxDQUFTLFlBQVQ7QUFGVTtBQUdiOzs7O21DQUVVO0FBQ1AsaUJBQUtDLFNBQUw7QUFDSDs7OzhCQUVLQyxDLEVBQUc7QUFDTCxtQkFBTyxJQUFJQyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3BDQywyQkFBVyxZQUFNO0FBQ2JGLDRCQUFRLGtCQUFSO0FBQ0gsaUJBRkQsRUFFR0YsSUFBSSxJQUZQO0FBR0gsYUFKTSxDQUFQO0FBS0g7Ozs7Ozs7Ozs7O3VDQUdzQixLQUFLSyxLQUFMLENBQVcsQ0FBWCxDOzs7QUFBYkMsb0M7O0FBQ05DLHdDQUFRQyxHQUFSLENBQVlGLElBQVo7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQ0FHUUcsRSxFQUFJO0FBQ1osZ0JBQU1DLE9BQU8sSUFBYjtBQUNBLGdCQUFJLEtBQUtkLFVBQUwsQ0FBZ0JDLFFBQXBCLEVBQThCO0FBQzFCLHVCQUFPLEtBQUtELFVBQUwsQ0FBZ0JDLFFBQXZCO0FBQ0g7QUFDRCwyQkFBS2MsV0FBTCxDQUFpQjtBQUNiQyx1QkFEYSxtQkFDTEMsR0FESyxFQUNBO0FBQ1RILHlCQUFLZCxVQUFMLENBQWdCQyxRQUFoQixHQUEyQmdCLElBQUloQixRQUEvQjtBQUNBWSwwQkFBTUEsR0FBR0ksSUFBSWhCLFFBQVAsQ0FBTjtBQUNIO0FBSlksYUFBakI7QUFNSDs7OztFQTVFd0IsZUFBS2lCLEciLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgICBpbXBvcnQgJ3dlcHktYXN5bmMtZnVuY3Rpb24nXG5cbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIHdlcHkuYXBwIHtcbiAgICAgICAgY29uZmlnID0ge1xuICAgICAgICAgICAgcGFnZXM6IFtcbiAgICAgICAgICAgICAgICAncGFnZXMvaG9tZS9pbmRleCcsXG4gICAgICAgICAgICAgICAgJ3BhZ2VzL2luZGV4J1xuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHdpbmRvdzoge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmRUZXh0U3R5bGU6ICdsaWdodCcsXG4gICAgICAgICAgICAgICAgbmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvcjogJyNmZmYnLFxuICAgICAgICAgICAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICdXZUNoYXQnLFxuICAgICAgICAgICAgICAgIG5hdmlnYXRpb25CYXJUZXh0U3R5bGU6ICdibGFjaydcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0YWJCYXI6IHtcbiAgICAgICAgICAgICAgICBjb2xvcjogJyMwMDAnLFxuICAgICAgICAgICAgICAgIHNlbGVjdGVkQ29sb3I6ICcjMDBiNjAwJyxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJyxcbiAgICAgICAgICAgICAgICBib3JkZXJTdHlsZTogJyNlZWUnLFxuICAgICAgICAgICAgICAgIGxpc3Q6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFnZVBhdGg6ICdwYWdlcy9ob21lL2luZGV4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb25QYXRoOiAnbW9kdWxlcy9pbWFnZXMvaG9tZXBhZ2UucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkSWNvblBhdGg6ICdtb2R1bGVzL2ltYWdlcy9ob21lcGFnZV9maWxsLnBuZycsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiAn6aaW6aG1J1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWdlUGF0aDogJ3BhZ2VzL2luZGV4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb25QYXRoOiAnbW9kdWxlcy9pbWFnZXMvY2FtZXJhLnBuZycsXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEljb25QYXRoOiAnbW9kdWxlcy9pbWFnZXMvY2FtZXJhX2ZpbGwucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6ICfkuIrkvKAnXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VQYXRoOiAncGFnZXMvaW5kZXgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvblBhdGg6ICdtb2R1bGVzL2ltYWdlcy9taW5lLnBuZycsXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEljb25QYXRoOiAnbW9kdWxlcy9pbWFnZXMvbWluZV9maWxsLnBuZycsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiAn5oiR55qEJ1xuICAgICAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZ2xvYmFsRGF0YSA9IHtcbiAgICAgICAgICAgIHVzZXJJbmZvOiBudWxsXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgICAgIHN1cGVyKClcbiAgICAgICAgICAgIHRoaXMudXNlKCdyZXF1ZXN0Zml4JylcbiAgICAgICAgfVxuXG4gICAgICAgIG9uTGF1bmNoKCkge1xuICAgICAgICAgICAgdGhpcy50ZXN0QXN5bmMoKVxuICAgICAgICB9XG5cbiAgICAgICAgc2xlZXAocykge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgncHJvbWlzZSByZXNvbHZlZCcpXG4gICAgICAgICAgICAgICAgfSwgcyAqIDEwMDApXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgYXN5bmMgdGVzdEFzeW5jKCkge1xuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHRoaXMuc2xlZXAoMylcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgICAgIH1cblxuICAgICAgICBnZXRVc2VySW5mbyhjYikge1xuICAgICAgICAgICAgY29uc3QgdGhhdCA9IHRoaXNcbiAgICAgICAgICAgIGlmICh0aGlzLmdsb2JhbERhdGEudXNlckluZm8pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5nbG9iYWxEYXRhLnVzZXJJbmZvXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3ZXB5LmdldFVzZXJJbmZvKHtcbiAgICAgICAgICAgICAgICBzdWNjZXNzKHJlcykge1xuICAgICAgICAgICAgICAgICAgICB0aGF0Lmdsb2JhbERhdGEudXNlckluZm8gPSByZXMudXNlckluZm9cbiAgICAgICAgICAgICAgICAgICAgY2IgJiYgY2IocmVzLnVzZXJJbmZvKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG4iXX0=