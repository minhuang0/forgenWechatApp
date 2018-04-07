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

var Index = function (_wepy$page) {
    _inherits(Index, _wepy$page);

    function Index() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Index);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
            navigationBarTitleText: '花瓣'
        }, _this.data = {
            cctx: {
                takePhoto: function takePhoto() {}
            },
            image: '',
            fileImage: '',
            showResult: false,
            result: [{
                name: '非植物',
                score: 0.56553107500076
            }, {
                name: '非植物',
                score: 0.56553107500076
            }, {
                name: '非植物',
                score: 0.56553107500076
            }, {
                name: '非植物',
                score: 0.56553107500076
            }, {
                name: '非植物',
                score: 0.56553107500076
            }]
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
                this.fileImage = '';
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
                                // await this.$parent.getUserInfo()
                                if (_wepy2.default.createCameraContext()) {
                                    this.cctx = _wepy2.default.createCameraContext('myCamera');
                                } else {
                                    // 如果希望用户在最新版本的客户端上体验您的小程序，可以这样子提示
                                    _wepy2.default.showModal({
                                        title: '提示',
                                        content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。'
                                    });
                                }

                            case 1:
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
                                    quality: 'low',
                                    success: function success(res) {
                                        _wepy2.default.showLoading({ title: '识别中', mask: true });
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
                                this.image = imageFilePath;
                                (0, _fetch.uploadFile)('/user/leafSnap', imageFilePath).then(function (res) {
                                    return _this3.parseLeafSnapResponse(res);
                                }).catch(function (e) {
                                    _this3.error(e);
                                });

                            case 2:
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
        key: 'getImageFromAlbum',
        value: function () {
            var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(e) {
                var imageFilePath;
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) {
                        switch (_context4.prev = _context4.next) {
                            case 0:
                                _context4.next = 2;
                                return (0, _fetch.chooseImage)({
                                    sourceType: ['album']
                                }).then(function (res) {
                                    return res.tempFilePaths[0];
                                });

                            case 2:
                                imageFilePath = _context4.sent;

                                _wepy2.default.showLoading({ title: '识别中', mask: true });
                                this.fileImage = imageFilePath;
                                this.checktPlant(imageFilePath);

                            case 6:
                            case 'end':
                                return _context4.stop();
                        }
                    }
                }, _callee4, this);
            }));

            function getImageFromAlbum(_x3) {
                return _ref5.apply(this, arguments);
            }

            return getImageFromAlbum;
        }()
    }, {
        key: 'parseLeafSnapResponse',
        value: function parseLeafSnapResponse() {
            var rsp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '{}';

            var res = JSON.parse(rsp);
            var result = res.res && res.res.result;
            this.result = Array.isArray(result) ? result : result ? [result] : [];
            this.showResult = true;
            _wepy2.default.hideLoading();
            this.$apply();
        }
    }, {
        key: 'error',
        value: function error(e) {
            _wepy2.default.hideLoading();
            _wepy2.default.showToast({
                title: '网络异常',
                icon: 'none',
                duration: 2000
            });
        }
    }]);

    return Index;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/publish/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJjY3R4IiwidGFrZVBob3RvIiwiaW1hZ2UiLCJmaWxlSW1hZ2UiLCJzaG93UmVzdWx0IiwicmVzdWx0IiwibmFtZSIsInNjb3JlIiwiY29tcHV0ZWQiLCJmb3JtYXRSZXN1bHQiLCJtYXAiLCJwYXJzZUludCIsImkiLCJtZXRob2RzIiwiY2FuY2xlIiwiJGFwcGx5IiwicmVzIiwiY3JlYXRlQ2FtZXJhQ29udGV4dCIsInNob3dNb2RhbCIsInRpdGxlIiwiY29udGVudCIsInF1YWxpdHkiLCJzdWNjZXNzIiwic2hvd0xvYWRpbmciLCJtYXNrIiwiY2hlY2t0UGxhbnQiLCJ0ZW1wSW1hZ2VQYXRoIiwiaW1hZ2VGaWxlUGF0aCIsInRoZW4iLCJwYXJzZUxlYWZTbmFwUmVzcG9uc2UiLCJjYXRjaCIsImVycm9yIiwiZSIsInNvdXJjZVR5cGUiLCJ0ZW1wRmlsZVBhdGhzIiwicnNwIiwiSlNPTiIsInBhcnNlIiwiQXJyYXkiLCJpc0FycmF5IiwiaGlkZUxvYWRpbmciLCJzaG93VG9hc3QiLCJpY29uIiwiZHVyYXRpb24iLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDSTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O3dMQUNqQkMsTSxHQUFTO0FBQ0xDLG9DQUF3QjtBQURuQixTLFFBR1RDLEksR0FBTztBQUNIQyxrQkFBTTtBQUNGQyx5QkFERSx1QkFDVyxDQUFFO0FBRGIsYUFESDtBQUlIQyxtQkFBTyxFQUpKO0FBS0hDLHVCQUFXLEVBTFI7QUFNSEMsd0JBQVksS0FOVDtBQU9IQyxvQkFBUSxDQUFDO0FBQ0xDLHNCQUFNLEtBREQ7QUFFTEMsdUJBQU87QUFGRixhQUFELEVBR0w7QUFDQ0Qsc0JBQU0sS0FEUDtBQUVDQyx1QkFBTztBQUZSLGFBSEssRUFNTDtBQUNDRCxzQkFBTSxLQURQO0FBRUND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QUNBLDJCQUFLQyxTQUFMLENBQWU7QUFDWHRCLHVCQUFPLE1BREk7QUFFWHVCLHNCQUFNLE1BRks7QUFHWEMsMEJBQVU7QUFIQyxhQUFmO0FBS0g7Ozs7RUFsRzhCLGVBQUtDLEk7O2tCQUFuQmhELEsiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICAgIGltcG9ydCB7IHVwbG9hZEZpbGUsIGNob29zZUltYWdlIH0gZnJvbSAnQC9tb2R1bGVzL2NvbW1vbi9mZXRjaCdcblxuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICAgICAgY29uZmlnID0ge1xuICAgICAgICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+iKseeToydcbiAgICAgICAgfVxuICAgICAgICBkYXRhID0ge1xuICAgICAgICAgICAgY2N0eDoge1xuICAgICAgICAgICAgICAgIHRha2VQaG90byAoKSB7fVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGltYWdlOiAnJyxcbiAgICAgICAgICAgIGZpbGVJbWFnZTogJycsXG4gICAgICAgICAgICBzaG93UmVzdWx0OiBmYWxzZSxcbiAgICAgICAgICAgIHJlc3VsdDogW3tcbiAgICAgICAgICAgICAgICBuYW1lOiAn6Z2e5qSN54mpJyxcbiAgICAgICAgICAgICAgICBzY29yZTogMC41NjU1MzEwNzUwMDA3NlxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIG5hbWU6ICfpnZ7mpI3niaknLFxuICAgICAgICAgICAgICAgIHNjb3JlOiAwLjU2NTUzMTA3NTAwMDc2XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ+mdnuakjeeJqScsXG4gICAgICAgICAgICAgICAgc2NvcmU6IDAuNTY1NTMxMDc1MDAwNzZcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAn6Z2e5qSN54mpJyxcbiAgICAgICAgICAgICAgICBzY29yZTogMC41NjU1MzEwNzUwMDA3NlxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIG5hbWU6ICfpnZ7mpI3niaknLFxuICAgICAgICAgICAgICAgIHNjb3JlOiAwLjU2NTUzMTA3NTAwMDc2XG4gICAgICAgICAgICB9XVxuICAgICAgICB9XG4gICAgICAgIGNvbXB1dGVkID0ge1xuICAgICAgICAgICAgZm9ybWF0UmVzdWx0ICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5yZXN1bHQubWFwKGkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2NvcmU6IHBhcnNlSW50KGkuc2NvcmUgKiAxMDApICsgJyUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogaS5uYW1lXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGFzeW5jIG9uUmVhZHkgKHJlcykge1xuICAgICAgICAgICAgLy8gYXdhaXQgdGhpcy4kcGFyZW50LmdldFVzZXJJbmZvKClcbiAgICAgICAgICAgIGlmICh3ZXB5LmNyZWF0ZUNhbWVyYUNvbnRleHQoKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2N0eCA9IHdlcHkuY3JlYXRlQ2FtZXJhQ29udGV4dCgnbXlDYW1lcmEnKVxuICAgICAgICAgICAgfSBlbHNlIHsgLy8g5aaC5p6c5biM5pyb55So5oi35Zyo5pyA5paw54mI5pys55qE5a6i5oi356uv5LiK5L2T6aqM5oKo55qE5bCP56iL5bqP77yM5Y+v5Lul6L+Z5qC35a2Q5o+Q56S6XG4gICAgICAgICAgICAgICAgd2VweS5zaG93TW9kYWwoe1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+aPkOekuicsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICflvZPliY3lvq7kv6HniYjmnKzov4fkvY7vvIzml6Dms5Xkvb/nlKjor6Xlip/og73vvIzor7fljYfnuqfliLDmnIDmlrDlvq7kv6HniYjmnKzlkI7ph43or5XjgIInXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBtZXRob2RzID0ge1xuICAgICAgICAgICAgY2FuY2xlICgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmltYWdlID0gJydcbiAgICAgICAgICAgICAgICB0aGlzLmZpbGVJbWFnZSA9ICcnXG4gICAgICAgICAgICAgICAgdGhpcy5yZXN1bHQgPSBbXVxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd1Jlc3VsdCA9IGZhbHNlXG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGFzeW5jIHRha2VQaG90bygpIHtcbiAgICAgICAgICAgIHRoaXMuY2N0eC50YWtlUGhvdG8oe1xuICAgICAgICAgICAgICAgIHF1YWxpdHk6ICdsb3cnLFxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgd2VweS5zaG93TG9hZGluZyh7IHRpdGxlOiAn6K+G5Yir5LitJywgbWFzazogdHJ1ZSB9KVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoZWNrdFBsYW50KHJlcy50ZW1wSW1hZ2VQYXRoKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgYXN5bmMgY2hlY2t0UGxhbnQgKGltYWdlRmlsZVBhdGgpIHtcbiAgICAgICAgICAgIHRoaXMuaW1hZ2UgPSBpbWFnZUZpbGVQYXRoXG4gICAgICAgICAgICB1cGxvYWRGaWxlKCcvdXNlci9sZWFmU25hcCcsIGltYWdlRmlsZVBhdGgpLnRoZW4ocmVzID0+IHRoaXMucGFyc2VMZWFmU25hcFJlc3BvbnNlKHJlcykpLmNhdGNoKGUgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZXJyb3IoZSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgYXN5bmMgZ2V0SW1hZ2VGcm9tQWxidW0gKGUpIHtcbiAgICAgICAgICAgIGNvbnN0IGltYWdlRmlsZVBhdGggPSBhd2FpdCBjaG9vc2VJbWFnZSh7XG4gICAgICAgICAgICAgICAgc291cmNlVHlwZTogWydhbGJ1bSddXG4gICAgICAgICAgICB9KS50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy50ZW1wRmlsZVBhdGhzWzBdXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgd2VweS5zaG93TG9hZGluZyh7IHRpdGxlOiAn6K+G5Yir5LitJywgbWFzazogdHJ1ZSB9KVxuICAgICAgICAgICAgdGhpcy5maWxlSW1hZ2UgPSBpbWFnZUZpbGVQYXRoXG4gICAgICAgICAgICB0aGlzLmNoZWNrdFBsYW50KGltYWdlRmlsZVBhdGgpXG4gICAgICAgIH1cbiAgICAgICAgcGFyc2VMZWFmU25hcFJlc3BvbnNlIChyc3AgPSAne30nKSB7XG4gICAgICAgICAgICBjb25zdCByZXMgPSBKU09OLnBhcnNlKHJzcClcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHJlcy5yZXMgJiYgcmVzLnJlcy5yZXN1bHRcbiAgICAgICAgICAgIHRoaXMucmVzdWx0ID0gQXJyYXkuaXNBcnJheShyZXN1bHQpID8gcmVzdWx0IDogcmVzdWx0ID8gW3Jlc3VsdF0gOiBbXVxuICAgICAgICAgICAgdGhpcy5zaG93UmVzdWx0ID0gdHJ1ZVxuICAgICAgICAgICAgd2VweS5oaWRlTG9hZGluZygpXG4gICAgICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICAgIH1cbiAgICAgICAgZXJyb3IoZSkge1xuICAgICAgICAgICAgd2VweS5oaWRlTG9hZGluZygpXG4gICAgICAgICAgICB3ZXB5LnNob3dUb2FzdCh7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICfnvZHnu5zlvILluLgnLFxuICAgICAgICAgICAgICAgIGljb246ICdub25lJyxcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogMjAwMFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cbiJdfQ==