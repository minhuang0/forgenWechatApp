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
            shareImage: '',
            shareId: '',
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
                _wepy2.default.hideShareMenu();
                this.image = '';
                this.fileImage = '';
                this.shareImage = '';
                this.shareId = '';
                this.result = [];
                this.showResult = false;
                this.$apply();
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Index, [{
        key: 'onShareAppMessage',
        value: function onShareAppMessage() {
            return {
                title: (this.formatResult[0] && this.formatResult[0].name || '') + ' (' + (this.formatResult[0] && this.formatResult[0].score) + ')',
                path: 'pages/publish/index?id=' + this.shareId,
                imageUrl: this.shareImage
            };
        }
    }, {
        key: 'onReady',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(res) {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _wepy2.default.hideShareMenu();
                                if (_wepy2.default.createCameraContext()) {
                                    this.cctx = _wepy2.default.createCameraContext('myCamera');
                                } else {
                                    // 如果希望用户在最新版本的客户端上体验您的小程序，可以这样子提示
                                    _wepy2.default.showModal({
                                        title: '提示',
                                        content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。'
                                    });
                                }

                            case 2:
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
            this.shareImage = res.imgUrl;
            this.shareId = res.res && res.res.log_id;
            var result = res.res && res.res.result;
            this.result = Array.isArray(result) ? result : result ? [result] : [];
            this.showResult = true;
            _wepy2.default.hideLoading();
            _wepy2.default.showShareMenu({
                withShareTicket: true
            });
            this.$apply();
        }
    }, {
        key: 'onLoad',
        value: function onLoad(options) {
            if (options.id) {
                this.getShareDate(options.id);
            }
        }
    }, {
        key: 'getShareDate',
        value: function () {
            var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(id) {
                var res;
                return regeneratorRuntime.wrap(function _callee5$(_context5) {
                    while (1) {
                        switch (_context5.prev = _context5.next) {
                            case 0:
                                _context5.next = 2;
                                return (0, _fetch.getFetch)('/user/shareRes/' + id, {
                                    noAjax: true
                                });

                            case 2:
                                res = _context5.sent;

                                this.parseLeafSnapResponse(res);

                            case 4:
                            case 'end':
                                return _context5.stop();
                        }
                    }
                }, _callee5, this);
            }));

            function getShareDate(_x5) {
                return _ref6.apply(this, arguments);
            }

            return getShareDate;
        }()
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJjY3R4IiwidGFrZVBob3RvIiwiaW1hZ2UiLCJmaWxlSW1hZ2UiLCJzaGFyZUltYWdlIiwic2hhcmVJZCIsInNob3dSZXN1bHQiLCJyZXN1bHQiLCJjb21wdXRlZCIsImZvcm1hdFJlc3VsdCIsIm1hcCIsInNjb3JlIiwicGFyc2VJbnQiLCJpIiwibmFtZSIsIm1ldGhvZHMiLCJjYW5jbGUiLCJoaWRlU2hhcmVNZW51IiwiJGFwcGx5IiwidGl0bGUiLCJwYXRoIiwiaW1hZ2VVcmwiLCJyZXMiLCJjcmVhdGVDYW1lcmFDb250ZXh0Iiwic2hvd01vZGFsIiwiY29udGVudCIsInF1YWxpdHkiLCJzdWNjZXNzIiwic2hvd0xvYWRpbmciLCJtYXNrIiwiY2hlY2t0UGxhbnQiLCJ0ZW1wSW1hZ2VQYXRoIiwiaW1hZ2VGaWxlUGF0aCIsInRoZW4iLCJwYXJzZUxlYWZTbmFwUmVzcG9uc2UiLCJjYXRjaCIsImVycm9yIiwiZSIsInNvdXJjZVR5cGUiLCJ0ZW1wRmlsZVBhdGhzIiwicnNwIiwiSlNPTiIsInBhcnNlIiwiaW1nVXJsIiwibG9nX2lkIiwiQXJyYXkiLCJpc0FycmF5IiwiaGlkZUxvYWRpbmciLCJzaG93U2hhcmVNZW51Iiwid2l0aFNoYXJlVGlja2V0Iiwib3B0aW9ucyIsImlkIiwiZ2V0U2hhcmVEYXRlIiwibm9BamF4Iiwic2hvd1RvYXN0IiwiaWNvbiIsImR1cmF0aW9uIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0k7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7Ozt3TEFDakJDLE0sR0FBUztBQUNMQyxvQ0FBd0I7QUFEbkIsUyxRQUdUQyxJLEdBQU87QUFDSEMsa0JBQU07QUFDRkMseUJBREUsdUJBQ1csQ0FBRTtBQURiLGFBREg7QUFJSEMsbUJBQU8sRUFKSjtBQUtIQyx1QkFBVyxF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bUIsS0FBS0MsS0FBTCxDQUFXRixHQUFYLENBQVo7QUFDQSxpQkFBS3BDLFVBQUwsR0FBa0JrQixJQUFJcUIsTUFBdEI7QUFDQSxpQkFBS3RDLE9BQUwsR0FBZWlCLElBQUlBLEdBQUosSUFBV0EsSUFBSUEsR0FBSixDQUFRc0IsTUFBbEM7QUFDQSxnQkFBTXJDLFNBQVNlLElBQUlBLEdBQUosSUFBV0EsSUFBSUEsR0FBSixDQUFRZixNQUFsQztBQUNBLGlCQUFLQSxNQUFMLEdBQWNzQyxNQUFNQyxPQUFOLENBQWN2QyxNQUFkLElBQXdCQSxNQUF4QixHQUFpQ0EsU0FBUyxDQUFDQSxNQUFELENBQVQsR0FBb0IsRUFBbkU7QUFDQSxpQkFBS0QsVUFBTCxHQUFrQixJQUFsQjtBQUNBLDJCQUFLeUMsV0FBTDtBQUNBLDJCQUFLQyxhQUFMLENBQW1CO0FBQ2ZDLGlDQUFpQjtBQURGLGFBQW5CO0FBR0EsaUJBQUsvQixNQUFMO0FBQ0g7OzsrQkFDT2dDLE8sRUFBUztBQUNiLGdCQUFJQSxRQUFRQyxFQUFaLEVBQWdCO0FBQ1oscUJBQUtDLFlBQUwsQ0FBa0JGLFFBQVFDLEVBQTFCO0FBQ0g7QUFDSjs7OztrR0FDbUJBLEU7Ozs7Ozs7dUNBQ0UseUNBQTJCQSxFQUEzQixFQUFpQztBQUMvQ0UsNENBQVE7QUFEdUMsaUNBQWpDLEM7OztBQUFaL0IsbUM7O0FBR04scUNBQUtZLHFCQUFMLENBQTJCWixHQUEzQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQUVHZSxDLEVBQUc7QUFDTiwyQkFBS1UsV0FBTDtBQUNBLDJCQUFLTyxTQUFMLENBQWU7QUFDWG5DLHVCQUFPLE1BREk7QUFFWG9DLHNCQUFNLE1BRks7QUFHWEMsMEJBQVU7QUFIQyxhQUFmO0FBS0g7Ozs7RUEvRzhCLGVBQUtDLEk7O2tCQUFuQjdELEsiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICAgIGltcG9ydCB7IHVwbG9hZEZpbGUsIGNob29zZUltYWdlLCBnZXRGZXRjaCB9IGZyb20gJ0AvbW9kdWxlcy9jb21tb24vZmV0Y2gnXG5cbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgICAgIGNvbmZpZyA9IHtcbiAgICAgICAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfoirHnk6MnXG4gICAgICAgIH1cbiAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICAgIGNjdHg6IHtcbiAgICAgICAgICAgICAgICB0YWtlUGhvdG8gKCkge31cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpbWFnZTogJycsXG4gICAgICAgICAgICBmaWxlSW1hZ2U6ICcnLFxuICAgICAgICAgICAgc2hhcmVJbWFnZTogJycsXG4gICAgICAgICAgICBzaGFyZUlkOiAnJyxcbiAgICAgICAgICAgIHNob3dSZXN1bHQ6IGZhbHNlLFxuICAgICAgICAgICAgcmVzdWx0OiBbXVxuICAgICAgICB9XG4gICAgICAgIG9uU2hhcmVBcHBNZXNzYWdlICgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdGl0bGU6IGAkeyh0aGlzLmZvcm1hdFJlc3VsdFswXSAmJiB0aGlzLmZvcm1hdFJlc3VsdFswXS5uYW1lKSB8fCAnJ30gKCR7KHRoaXMuZm9ybWF0UmVzdWx0WzBdICYmIHRoaXMuZm9ybWF0UmVzdWx0WzBdLnNjb3JlKX0pYCxcbiAgICAgICAgICAgICAgICBwYXRoOiBgcGFnZXMvcHVibGlzaC9pbmRleD9pZD0ke3RoaXMuc2hhcmVJZH1gLFxuICAgICAgICAgICAgICAgIGltYWdlVXJsOiB0aGlzLnNoYXJlSW1hZ2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb21wdXRlZCA9IHtcbiAgICAgICAgICAgIGZvcm1hdFJlc3VsdCAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVzdWx0Lm1hcChpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjb3JlOiBwYXJzZUludChpLnNjb3JlICogMTAwKSArICclJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGkubmFtZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBhc3luYyBvblJlYWR5IChyZXMpIHtcbiAgICAgICAgICAgIHdlcHkuaGlkZVNoYXJlTWVudSgpXG4gICAgICAgICAgICBpZiAod2VweS5jcmVhdGVDYW1lcmFDb250ZXh0KCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNjdHggPSB3ZXB5LmNyZWF0ZUNhbWVyYUNvbnRleHQoJ215Q2FtZXJhJylcbiAgICAgICAgICAgIH0gZWxzZSB7IC8vIOWmguaenOW4jOacm+eUqOaIt+WcqOacgOaWsOeJiOacrOeahOWuouaIt+err+S4iuS9k+mqjOaCqOeahOWwj+eoi+W6j++8jOWPr+S7pei/meagt+WtkOaPkOekulxuICAgICAgICAgICAgICAgIHdlcHkuc2hvd01vZGFsKHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfmj5DnpLonLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAn5b2T5YmN5b6u5L+h54mI5pys6L+H5L2O77yM5peg5rOV5L2/55So6K+l5Yqf6IO977yM6K+35Y2H57qn5Yiw5pyA5paw5b6u5L+h54mI5pys5ZCO6YeN6K+V44CCJ1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbWV0aG9kcyA9IHtcbiAgICAgICAgICAgIGNhbmNsZSAoKSB7XG4gICAgICAgICAgICAgICAgd2VweS5oaWRlU2hhcmVNZW51KClcbiAgICAgICAgICAgICAgICB0aGlzLmltYWdlID0gJydcbiAgICAgICAgICAgICAgICB0aGlzLmZpbGVJbWFnZSA9ICcnXG4gICAgICAgICAgICAgICAgdGhpcy5zaGFyZUltYWdlID0gJydcbiAgICAgICAgICAgICAgICB0aGlzLnNoYXJlSWQgPSAnJ1xuICAgICAgICAgICAgICAgIHRoaXMucmVzdWx0ID0gW11cbiAgICAgICAgICAgICAgICB0aGlzLnNob3dSZXN1bHQgPSBmYWxzZVxuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBhc3luYyB0YWtlUGhvdG8oKSB7XG4gICAgICAgICAgICB0aGlzLmNjdHgudGFrZVBob3RvKHtcbiAgICAgICAgICAgICAgICBxdWFsaXR5OiAnbG93JyxcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiAocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHdlcHkuc2hvd0xvYWRpbmcoeyB0aXRsZTogJ+ivhuWIq+S4rScsIG1hc2s6IHRydWUgfSlcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGVja3RQbGFudChyZXMudGVtcEltYWdlUGF0aClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIGFzeW5jIGNoZWNrdFBsYW50IChpbWFnZUZpbGVQYXRoKSB7XG4gICAgICAgICAgICB0aGlzLmltYWdlID0gaW1hZ2VGaWxlUGF0aFxuICAgICAgICAgICAgdXBsb2FkRmlsZSgnL3VzZXIvbGVhZlNuYXAnLCBpbWFnZUZpbGVQYXRoKS50aGVuKHJlcyA9PiB0aGlzLnBhcnNlTGVhZlNuYXBSZXNwb25zZShyZXMpKS5jYXRjaChlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmVycm9yKGUpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIGFzeW5jIGdldEltYWdlRnJvbUFsYnVtIChlKSB7XG4gICAgICAgICAgICBjb25zdCBpbWFnZUZpbGVQYXRoID0gYXdhaXQgY2hvb3NlSW1hZ2Uoe1xuICAgICAgICAgICAgICAgIHNvdXJjZVR5cGU6IFsnYWxidW0nXVxuICAgICAgICAgICAgfSkudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXMudGVtcEZpbGVQYXRoc1swXVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHdlcHkuc2hvd0xvYWRpbmcoeyB0aXRsZTogJ+ivhuWIq+S4rScsIG1hc2s6IHRydWUgfSlcbiAgICAgICAgICAgIHRoaXMuZmlsZUltYWdlID0gaW1hZ2VGaWxlUGF0aFxuICAgICAgICAgICAgdGhpcy5jaGVja3RQbGFudChpbWFnZUZpbGVQYXRoKVxuICAgICAgICB9XG4gICAgICAgIHBhcnNlTGVhZlNuYXBSZXNwb25zZSAocnNwID0gJ3t9Jykge1xuICAgICAgICAgICAgY29uc3QgcmVzID0gSlNPTi5wYXJzZShyc3ApXG4gICAgICAgICAgICB0aGlzLnNoYXJlSW1hZ2UgPSByZXMuaW1nVXJsXG4gICAgICAgICAgICB0aGlzLnNoYXJlSWQgPSByZXMucmVzICYmIHJlcy5yZXMubG9nX2lkXG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSByZXMucmVzICYmIHJlcy5yZXMucmVzdWx0XG4gICAgICAgICAgICB0aGlzLnJlc3VsdCA9IEFycmF5LmlzQXJyYXkocmVzdWx0KSA/IHJlc3VsdCA6IHJlc3VsdCA/IFtyZXN1bHRdIDogW11cbiAgICAgICAgICAgIHRoaXMuc2hvd1Jlc3VsdCA9IHRydWVcbiAgICAgICAgICAgIHdlcHkuaGlkZUxvYWRpbmcoKVxuICAgICAgICAgICAgd2VweS5zaG93U2hhcmVNZW51KHtcbiAgICAgICAgICAgICAgICB3aXRoU2hhcmVUaWNrZXQ6IHRydWVcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICAgIH1cbiAgICAgICAgb25Mb2FkIChvcHRpb25zKSB7XG4gICAgICAgICAgICBpZiAob3B0aW9ucy5pZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZ2V0U2hhcmVEYXRlKG9wdGlvbnMuaWQpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYXN5bmMgZ2V0U2hhcmVEYXRlIChpZCkge1xuICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZ2V0RmV0Y2goYC91c2VyL3NoYXJlUmVzLyR7aWR9YCwge1xuICAgICAgICAgICAgICAgIG5vQWpheDogdHJ1ZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHRoaXMucGFyc2VMZWFmU25hcFJlc3BvbnNlKHJlcylcbiAgICAgICAgfVxuICAgICAgICBlcnJvciAoZSkge1xuICAgICAgICAgICAgd2VweS5oaWRlTG9hZGluZygpXG4gICAgICAgICAgICB3ZXB5LnNob3dUb2FzdCh7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICfnvZHnu5zlvILluLgnLFxuICAgICAgICAgICAgICAgIGljb246ICdub25lJyxcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogMjAwMFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cbiJdfQ==