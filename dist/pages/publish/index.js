'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _fetch = require('./../../modules/common/fetch.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
            showResult: false,
            result: []
        }, _this.computed = {
            formatResult: function formatResult() {
                return this.result.map(function (i) {
                    return {
                        score: parseInt(i.score * 100) + '%',
                        name: i.name
                    };
                });
            }
        }, _this.methods = {
            cancle: function cancle() {
                this.image = '';
                this.result = [];
                this.showResult = false;
                this.$apply();
            }
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
                                        _wepy2.default.showLoading({ title: '加载中', mask: true });
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
                                    var rsp = JSON.parse(res);
                                    var result = rsp.res.result;
                                    console.log(typeof result === 'undefined' ? 'undefined' : _typeof(result), result);
                                    _this3.result = Array.isArray(result) ? result : result ? [result] : [];
                                    _this3.showResult = true;
                                    _wepy2.default.hideLoading();
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiZGF0YSIsImNjdHgiLCJpbWFnZSIsInNob3dSZXN1bHQiLCJyZXN1bHQiLCJjb21wdXRlZCIsImZvcm1hdFJlc3VsdCIsIm1hcCIsInNjb3JlIiwicGFyc2VJbnQiLCJpIiwibmFtZSIsIm1ldGhvZHMiLCJjYW5jbGUiLCIkYXBwbHkiLCJyZXMiLCIkcGFyZW50IiwiZ2V0VXNlckluZm8iLCJjcmVhdGVDYW1lcmFDb250ZXh0Iiwic2hvd01vZGFsIiwidGl0bGUiLCJjb250ZW50IiwidGFrZVBob3RvIiwicXVhbGl0eSIsInN1Y2Nlc3MiLCJzaG93TG9hZGluZyIsIm1hc2siLCJ0ZW1wSW1hZ2VQYXRoIiwiY2hlY2t0UGxhbnQiLCJpbWFnZUZpbGVQYXRoIiwidGhlbiIsInJzcCIsIkpTT04iLCJwYXJzZSIsImNvbnNvbGUiLCJsb2ciLCJBcnJheSIsImlzQXJyYXkiLCJoaWRlTG9hZGluZyIsInRleHQiLCJzaG93Q2FuY2VsIiwiZSIsImRldGFpbCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ0k7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7Ozt3TEFDakJDLEksR0FBTztBQUNIQyxrQkFBTSxFQURIO0FBRUhDLG1CQUFPLEVBRko7QUFHSEMsd0JBQVksS0FIVDtBQUlIQyxvQkFBUTtBQUpMLFMsUUFNUEMsUSxHQUFXO0FBQ1BDLHdCQURPLDBCQUNTO0FBQ1osdUJBQU8sS0FBS0YsTUFBTCxDQUFZRyxHQUFaLENBQWdCLGFBQUs7QUFDeEIsMkJBQU87QUFDSEMsK0JBQU9DLFNBQVNDLEVBQUVGLEtBQUYsR0FBVSxHQUFuQixJQUEwQixHQUQ5QjtBQUVIRyw4QkFBTUQsRUFBRUM7QUFGTCxxQkFBUDtBQUlILGlCQUxNLENBQVA7QUFNSDtBQVJNLFMsUUFxQlhDLE8sR0FBVTtBQUNOQyxrQkFETSxvQkFDSTtBQUNOLHFCQUFLWCxLQUFMLEdBQWEsRUFBYjtBQUNBLHFCQUFLRSxNQUFMLEdBQWMsRUFBZDtBQUNBLHFCQUFLRCxVQUFMLEdBQWtCLEtBQWxCO0FBQ0EscUJBQUtXLE1BQUw7QUFDSDtBQU5LLFM7Ozs7OztpR0FYS0MsRzs7Ozs7O3VDQUNMLEtBQUtDLE9BQUwsQ0FBYUMsV0FBYixFOzs7QUFDTixvQ0FBSSxlQUFLQyxtQkFBTCxFQUFKLEVBQWdDO0FBQzVCLHlDQUFLakIsSUFBTCxHQUFZLGVBQUtpQixtQkFBTCxDQUF5QixVQUF6QixDQUFaO0FBQ0gsaUNBRkQsTUFFTztBQUFFO0FBQ0wsbURBQUtDLFNBQUwsQ0FBZTtBQUNYQywrQ0FBTyxJQURJO0FBRVhDLGlEQUFTO0FBRkUscUNBQWY7QUFJSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFXRCxxQ0FBS3BCLElBQUwsQ0FBVXFCLFNBQVYsQ0FBb0I7QUFDaEJDLDZDQUFTLE1BRE87QUFFaEJDLDZDQUFTLGlCQUFDVCxHQUFELEVBQVM7QUFDZCx1REFBS1UsV0FBTCxDQUFpQixFQUFFTCxPQUFPLEtBQVQsRUFBZ0JNLE1BQU0sSUFBdEIsRUFBakI7QUFDQSwrQ0FBS3hCLEtBQUwsR0FBYWEsSUFBSVksYUFBakI7QUFDQSwrQ0FBS0MsV0FBTCxDQUFpQmIsSUFBSVksYUFBckI7QUFDSDtBQU5lLGlDQUFwQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrR0FTZUUsYTs7Ozs7OztBQUNmLHVEQUFXLGdCQUFYLEVBQTZCQSxhQUE3QixFQUE0Q0MsSUFBNUMsQ0FBaUQsZUFBTztBQUNwRCx3Q0FBTUMsTUFBTUMsS0FBS0MsS0FBTCxDQUFXbEIsR0FBWCxDQUFaO0FBQ0Esd0NBQU1YLFNBQVMyQixJQUFJaEIsR0FBSixDQUFRWCxNQUF2QjtBQUNBOEIsNENBQVFDLEdBQVIsUUFBbUIvQixNQUFuQix5Q0FBbUJBLE1BQW5CLEdBQTJCQSxNQUEzQjtBQUNBLDJDQUFLQSxNQUFMLEdBQWNnQyxNQUFNQyxPQUFOLENBQWNqQyxNQUFkLElBQXdCQSxNQUF4QixHQUFpQ0EsU0FBUyxDQUFDQSxNQUFELENBQVQsR0FBb0IsRUFBbkU7QUFDQSwyQ0FBS0QsVUFBTCxHQUFrQixJQUFsQjtBQUNBLG1EQUFLbUMsV0FBTDtBQUNBLDJDQUFLeEIsTUFBTDtBQUNILGlDQVJEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBVUd5QixJLEVBQU07QUFDVCwyQkFBS3BCLFNBQUwsQ0FBZTtBQUNYRSx5QkFBUyxLQURFO0FBRVhtQiw0QkFBWSxLQUZEO0FBR1hoQix1QkFIVyxtQkFHRlQsR0FIRSxFQUdHO0FBQ1ZtQiw0QkFBUUMsR0FBUixDQUFZLE1BQVo7QUFDSDtBQUxVLGFBQWY7QUFPSDs7OzhCQUNLTSxDLEVBQUc7QUFDTFAsb0JBQVFDLEdBQVIsQ0FBWU0sRUFBRUMsTUFBZDtBQUNIOzs7O0VBcEU4QixlQUFLQyxJOztrQkFBbkI1QyxLIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgICBpbXBvcnQgeyB1cGxvYWRGaWxlIH0gZnJvbSAnQC9tb2R1bGVzL2NvbW1vbi9mZXRjaCdcblxuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICAgIGNjdHg6IHt9LFxuICAgICAgICAgICAgaW1hZ2U6ICcnLFxuICAgICAgICAgICAgc2hvd1Jlc3VsdDogZmFsc2UsXG4gICAgICAgICAgICByZXN1bHQ6IFtdXG4gICAgICAgIH1cbiAgICAgICAgY29tcHV0ZWQgPSB7XG4gICAgICAgICAgICBmb3JtYXRSZXN1bHQgKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnJlc3VsdC5tYXAoaSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzY29yZTogcGFyc2VJbnQoaS5zY29yZSAqIDEwMCkgKyAnJScsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBpLm5hbWVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYXN5bmMgb25SZWFkeSAocmVzKSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLiRwYXJlbnQuZ2V0VXNlckluZm8oKVxuICAgICAgICAgICAgaWYgKHdlcHkuY3JlYXRlQ2FtZXJhQ29udGV4dCgpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jY3R4ID0gd2VweS5jcmVhdGVDYW1lcmFDb250ZXh0KCdteUNhbWVyYScpXG4gICAgICAgICAgICB9IGVsc2UgeyAvLyDlpoLmnpzluIzmnJvnlKjmiLflnKjmnIDmlrDniYjmnKznmoTlrqLmiLfnq6/kuIrkvZPpqozmgqjnmoTlsI/nqIvluo/vvIzlj6/ku6Xov5nmoLflrZDmj5DnpLpcbiAgICAgICAgICAgICAgICB3ZXB5LnNob3dNb2RhbCh7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5o+Q56S6JyxcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogJ+W9k+WJjeW+ruS/oeeJiOacrOi/h+S9ju+8jOaXoOazleS9v+eUqOivpeWKn+iDve+8jOivt+WNh+e6p+WIsOacgOaWsOW+ruS/oeeJiOacrOWQjumHjeivleOAgidcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIG1ldGhvZHMgPSB7XG4gICAgICAgICAgICBjYW5jbGUgKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaW1hZ2UgPSAnJ1xuICAgICAgICAgICAgICAgIHRoaXMucmVzdWx0ID0gW11cbiAgICAgICAgICAgICAgICB0aGlzLnNob3dSZXN1bHQgPSBmYWxzZVxuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBhc3luYyB0YWtlUGhvdG8oKSB7XG4gICAgICAgICAgICB0aGlzLmNjdHgudGFrZVBob3RvKHtcbiAgICAgICAgICAgICAgICBxdWFsaXR5OiAnaGlnaCcsXG4gICAgICAgICAgICAgICAgc3VjY2VzczogKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICB3ZXB5LnNob3dMb2FkaW5nKHsgdGl0bGU6ICfliqDovb3kuK0nLCBtYXNrOiB0cnVlIH0pXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW1hZ2UgPSByZXMudGVtcEltYWdlUGF0aFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoZWNrdFBsYW50KHJlcy50ZW1wSW1hZ2VQYXRoKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgYXN5bmMgY2hlY2t0UGxhbnQgKGltYWdlRmlsZVBhdGgpIHtcbiAgICAgICAgICAgIHVwbG9hZEZpbGUoJy91c2VyL2xlYWZTbmFwJywgaW1hZ2VGaWxlUGF0aCkudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJzcCA9IEpTT04ucGFyc2UocmVzKVxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHJzcC5yZXMucmVzdWx0XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codHlwZW9mIHJlc3VsdCwgcmVzdWx0KVxuICAgICAgICAgICAgICAgIHRoaXMucmVzdWx0ID0gQXJyYXkuaXNBcnJheShyZXN1bHQpID8gcmVzdWx0IDogcmVzdWx0ID8gW3Jlc3VsdF0gOiBbXVxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd1Jlc3VsdCA9IHRydWVcbiAgICAgICAgICAgICAgICB3ZXB5LmhpZGVMb2FkaW5nKClcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIGFsZXJ0ICh0ZXh0KSB7XG4gICAgICAgICAgICB3ZXB5LnNob3dNb2RhbCh7XG4gICAgICAgICAgICAgICAgY29udGVudDogJ+eJteeJm+iKsScsXG4gICAgICAgICAgICAgICAgc2hvd0NhbmNlbDogZmFsc2UsXG4gICAgICAgICAgICAgICAgc3VjY2VzcyAocmVzKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfngrnlh7vnoa7orqQnKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgZXJyb3IoZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZS5kZXRhaWwpXG4gICAgICAgIH1cbiAgICB9XG4iXX0=