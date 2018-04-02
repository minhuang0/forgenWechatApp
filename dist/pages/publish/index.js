'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _fetch = require('./../../modules/common/fetch.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import qs from 'querystring'


// import base64 from '@/modules/common/base64'

// const Base64 = base64.Base64
// console.log(Base64, FileReader, Blob)

var Index = function (_wepy$page) {
    _inherits(Index, _wepy$page);

    function Index() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Index);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
            cctx: {},
            image: '',
            auth: {}
            // getAuth () {
            //     const param = qs.stringify({
            //         'grant_type': 'client_credentials',
            //         'client_id': 'G3hbda7Guw7lkkYwolGDO5Lc',
            //         'client_secret': 'uGPppSHwRmUcFfnLvyfNKP0FzRsO7uk5'
            //     })
            //     getFetch('http://aip.baidubce.com/oauth/2.0/token?' + param, {
            //         noAjax: true
            //     }).then(res => {
            //         this.auth = res
            //     })
            // }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Index, [{
        key: 'onReady',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(res) {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return this.$parent.getUserInfo();

                            case 2:
                                if (_wepy2.default.createCameraContext()) {
                                    this.cctx = _wepy2.default.createCameraContext('myCamera');
                                } else {
                                    // 如果希望用户在最新版本的客户端上体验您的小程序，可以这样子提示
                                    _wepy2.default.showModal({
                                        title: '提示',
                                        content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。'
                                    });
                                }

                            case 3:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function onReady(_x) {
                return _ref2.apply(this, arguments);
            }

            return onReady;
        }()
    }, {
        key: 'takePhoto',
        value: function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                var _this2 = this;

                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                this.cctx.takePhoto({
                                    quality: 'high',
                                    success: function success(res) {
                                        console.log(res);
                                        _this2.image = res.tempImagePath;
                                        _this2.checktPlant(res.tempImagePath);
                                    }
                                });

                            case 1:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function takePhoto() {
                return _ref3.apply(this, arguments);
            }

            return takePhoto;
        }()
    }, {
        key: 'checktPlant',
        value: function () {
            var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(imageFilePath) {
                var _this3 = this;

                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                (0, _fetch.uploadFile)('/user/leafSnap', imageFilePath).then(function (res) {
                                    console.log(res);
                                    _this3.$apply();
                                });

                            case 1:
                            case 'end':
                                return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));

            function checktPlant(_x2) {
                return _ref4.apply(this, arguments);
            }

            return checktPlant;
        }()
    }, {
        key: 'alert',
        value: function alert(text) {
            _wepy2.default.showModal({
                content: '牵牛花',
                showCancel: false,
                success: function success(res) {
                    console.log('点击确认');
                }
            });
        }
    }, {
        key: 'error',
        value: function error(e) {
            console.log(e.detail);
        }
    }]);

    return Index;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/publish/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiZGF0YSIsImNjdHgiLCJpbWFnZSIsImF1dGgiLCJyZXMiLCIkcGFyZW50IiwiZ2V0VXNlckluZm8iLCJjcmVhdGVDYW1lcmFDb250ZXh0Iiwic2hvd01vZGFsIiwidGl0bGUiLCJjb250ZW50IiwidGFrZVBob3RvIiwicXVhbGl0eSIsInN1Y2Nlc3MiLCJjb25zb2xlIiwibG9nIiwidGVtcEltYWdlUGF0aCIsImNoZWNrdFBsYW50IiwiaW1hZ2VGaWxlUGF0aCIsInRoZW4iLCIkYXBwbHkiLCJ0ZXh0Iiwic2hvd0NhbmNlbCIsImUiLCJkZXRhaWwiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDSTs7OztBQUVBOzs7Ozs7Ozs7OztBQURBOzs7QUFFQTs7QUFFQTtBQUNBOztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7d0xBQ2pCQyxJLEdBQU87QUFDSEMsa0JBQU0sRUFESDtBQUVIQyxtQkFBTyxFQUZKO0FBR0hDLGtCQUFNO0FBRVY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBaEJPLFM7Ozs7OztpR0FpQlFDLEc7Ozs7Ozt1Q0FDTCxLQUFLQyxPQUFMLENBQWFDLFdBQWIsRTs7O0FBQ04sb0NBQUksZUFBS0MsbUJBQUwsRUFBSixFQUFnQztBQUM1Qix5Q0FBS04sSUFBTCxHQUFZLGVBQUtNLG1CQUFMLENBQXlCLFVBQXpCLENBQVo7QUFDSCxpQ0FGRCxNQUVPO0FBQUU7QUFDTCxtREFBS0MsU0FBTCxDQUFlO0FBQ1hDLCtDQUFPLElBREk7QUFFWEMsaURBQVM7QUFGRSxxQ0FBZjtBQUlIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdELHFDQUFLVCxJQUFMLENBQVVVLFNBQVYsQ0FBb0I7QUFDaEJDLDZDQUFTLE1BRE87QUFFaEJDLDZDQUFTLGlCQUFDVCxHQUFELEVBQVM7QUFDZFUsZ0RBQVFDLEdBQVIsQ0FBWVgsR0FBWjtBQUNBLCtDQUFLRixLQUFMLEdBQWFFLElBQUlZLGFBQWpCO0FBQ0EsK0NBQUtDLFdBQUwsQ0FBaUJiLElBQUlZLGFBQXJCO0FBQ0g7QUFOZSxpQ0FBcEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0dBU2VFLGE7Ozs7Ozs7QUFDZix1REFBVyxnQkFBWCxFQUE2QkEsYUFBN0IsRUFBNENDLElBQTVDLENBQWlELGVBQU87QUFDcERMLDRDQUFRQyxHQUFSLENBQVlYLEdBQVo7QUFDQSwyQ0FBS2dCLE1BQUw7QUFDSCxpQ0FIRDs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQUtHQyxJLEVBQU07QUFDVCwyQkFBS2IsU0FBTCxDQUFlO0FBQ1hFLHlCQUFTLEtBREU7QUFFWFksNEJBQVksS0FGRDtBQUdYVCx1QkFIVyxtQkFHRlQsR0FIRSxFQUdHO0FBQ1ZVLDRCQUFRQyxHQUFSLENBQVksTUFBWjtBQUNIO0FBTFUsYUFBZjtBQU9IOzs7OEJBQ0tRLEMsRUFBRztBQUNMVCxvQkFBUUMsR0FBUixDQUFZUSxFQUFFQyxNQUFkO0FBQ0g7Ozs7RUF4RDhCLGVBQUtDLEk7O2tCQUFuQjFCLEsiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICAgIC8vIGltcG9ydCBxcyBmcm9tICdxdWVyeXN0cmluZydcbiAgICBpbXBvcnQgeyB1cGxvYWRGaWxlIH0gZnJvbSAnQC9tb2R1bGVzL2NvbW1vbi9mZXRjaCdcbiAgICAvLyBpbXBvcnQgYmFzZTY0IGZyb20gJ0AvbW9kdWxlcy9jb21tb24vYmFzZTY0J1xuXG4gICAgLy8gY29uc3QgQmFzZTY0ID0gYmFzZTY0LkJhc2U2NFxuICAgIC8vIGNvbnNvbGUubG9nKEJhc2U2NCwgRmlsZVJlYWRlciwgQmxvYilcblxuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICAgIGNjdHg6IHt9LFxuICAgICAgICAgICAgaW1hZ2U6ICcnLFxuICAgICAgICAgICAgYXV0aDoge31cbiAgICAgICAgfVxuICAgICAgICAvLyBnZXRBdXRoICgpIHtcbiAgICAgICAgLy8gICAgIGNvbnN0IHBhcmFtID0gcXMuc3RyaW5naWZ5KHtcbiAgICAgICAgLy8gICAgICAgICAnZ3JhbnRfdHlwZSc6ICdjbGllbnRfY3JlZGVudGlhbHMnLFxuICAgICAgICAvLyAgICAgICAgICdjbGllbnRfaWQnOiAnRzNoYmRhN0d1dzdsa2tZd29sR0RPNUxjJyxcbiAgICAgICAgLy8gICAgICAgICAnY2xpZW50X3NlY3JldCc6ICd1R1BwcFNId1JtVWNGZm5MdnlmTktQMEZ6UnNPN3VrNSdcbiAgICAgICAgLy8gICAgIH0pXG4gICAgICAgIC8vICAgICBnZXRGZXRjaCgnaHR0cDovL2FpcC5iYWlkdWJjZS5jb20vb2F1dGgvMi4wL3Rva2VuPycgKyBwYXJhbSwge1xuICAgICAgICAvLyAgICAgICAgIG5vQWpheDogdHJ1ZVxuICAgICAgICAvLyAgICAgfSkudGhlbihyZXMgPT4ge1xuICAgICAgICAvLyAgICAgICAgIHRoaXMuYXV0aCA9IHJlc1xuICAgICAgICAvLyAgICAgfSlcbiAgICAgICAgLy8gfVxuICAgICAgICBhc3luYyBvblJlYWR5IChyZXMpIHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuJHBhcmVudC5nZXRVc2VySW5mbygpXG4gICAgICAgICAgICBpZiAod2VweS5jcmVhdGVDYW1lcmFDb250ZXh0KCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNjdHggPSB3ZXB5LmNyZWF0ZUNhbWVyYUNvbnRleHQoJ215Q2FtZXJhJylcbiAgICAgICAgICAgIH0gZWxzZSB7IC8vIOWmguaenOW4jOacm+eUqOaIt+WcqOacgOaWsOeJiOacrOeahOWuouaIt+err+S4iuS9k+mqjOaCqOeahOWwj+eoi+W6j++8jOWPr+S7pei/meagt+WtkOaPkOekulxuICAgICAgICAgICAgICAgIHdlcHkuc2hvd01vZGFsKHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfmj5DnpLonLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAn5b2T5YmN5b6u5L+h54mI5pys6L+H5L2O77yM5peg5rOV5L2/55So6K+l5Yqf6IO977yM6K+35Y2H57qn5Yiw5pyA5paw5b6u5L+h54mI5pys5ZCO6YeN6K+V44CCJ1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYXN5bmMgdGFrZVBob3RvKCkge1xuICAgICAgICAgICAgdGhpcy5jY3R4LnRha2VQaG90byh7XG4gICAgICAgICAgICAgICAgcXVhbGl0eTogJ2hpZ2gnLFxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmltYWdlID0gcmVzLnRlbXBJbWFnZVBhdGhcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGVja3RQbGFudChyZXMudGVtcEltYWdlUGF0aClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIGFzeW5jIGNoZWNrdFBsYW50IChpbWFnZUZpbGVQYXRoKSB7XG4gICAgICAgICAgICB1cGxvYWRGaWxlKCcvdXNlci9sZWFmU25hcCcsIGltYWdlRmlsZVBhdGgpLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpXG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBhbGVydCAodGV4dCkge1xuICAgICAgICAgICAgd2VweS5zaG93TW9kYWwoe1xuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICfnibXniZvoirEnLFxuICAgICAgICAgICAgICAgIHNob3dDYW5jZWw6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHN1Y2Nlc3MgKHJlcykge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn54K55Ye756Gu6K6kJylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIGVycm9yKGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUuZGV0YWlsKVxuICAgICAgICB9XG4gICAgfVxuIl19