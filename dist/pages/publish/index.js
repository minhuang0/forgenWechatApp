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
        value: function checktPlant(imageFilePath) {
            this.image = imageFilePath;
            this.$apply();
        }
    }, {
        key: 'getImageFromAlbum',
        value: function () {
            var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(e) {
                var imageFilePath;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                _context3.next = 2;
                                return (0, _fetch.chooseImage)({
                                    sourceType: ['album']
                                }).then(function (res) {
                                    return res.tempFilePaths[0];
                                });

                            case 2:
                                imageFilePath = _context3.sent;

                                _wepy2.default.showLoading({ title: '识别中', mask: true });
                                this.fileImage = imageFilePath;
                                this.checktPlant(imageFilePath);

                            case 6:
                            case 'end':
                                return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));

            function getImageFromAlbum(_x2) {
                return _ref4.apply(this, arguments);
            }

            return getImageFromAlbum;
        }()
    }, {
        key: 'loadimage',
        value: function () {
            var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(e) {
                var _this3 = this;

                var ctx, minImage;
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) {
                        switch (_context4.prev = _context4.next) {
                            case 0:
                                ctx = _wepy2.default.createCanvasContext('canvas');

                                ctx.drawImage(this.image, 0, 0, 375, e.detail.height / e.detail.width * 667);
                                ctx.draw();
                                _context4.next = 5;
                                return this.compressImage();

                            case 5:
                                minImage = _context4.sent;

                                (0, _fetch.uploadFile)('/user/leafSnap', minImage).then(function (res) {
                                    return _this3.parseLeafSnapResponse(res);
                                }).catch(function (e) {
                                    _this3.error(e);
                                });

                            case 7:
                            case 'end':
                                return _context4.stop();
                        }
                    }
                }, _callee4, this);
            }));

            function loadimage(_x3) {
                return _ref5.apply(this, arguments);
            }

            return loadimage;
        }()
    }, {
        key: 'compressImage',
        value: function () {
            var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
                return regeneratorRuntime.wrap(function _callee5$(_context5) {
                    while (1) {
                        switch (_context5.prev = _context5.next) {
                            case 0:
                                return _context5.abrupt('return', new Promise(function (resolve, reject) {
                                    setTimeout(function () {
                                        _wepy2.default.canvasToTempFilePath({
                                            canvasId: 'canvas',
                                            success: function success(res) {
                                                resolve(res.tempFilePath);
                                            },
                                            fail: function fail(e) {
                                                reject(e);
                                            }
                                        });
                                    }, 1000);
                                }));

                            case 1:
                            case 'end':
                                return _context5.stop();
                        }
                    }
                }, _callee5, this);
            }));

            function compressImage() {
                return _ref6.apply(this, arguments);
            }

            return compressImage;
        }()
    }, {
        key: 'parseLeafSnapResponse',
        value: function parseLeafSnapResponse() {
            var rsp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '{}';

            var res = JSON.parse(rsp);
            this.shareImage = res.imgUrl;
            this.image = this.image || res.imgUrl;
            this.fileImage = this.image || res.fileImage;
            this.shareId = res.id;
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
            var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(id) {
                var res, shareRes;
                return regeneratorRuntime.wrap(function _callee6$(_context6) {
                    while (1) {
                        switch (_context6.prev = _context6.next) {
                            case 0:
                                _wepy2.default.showLoading({ title: '数据加载中', mask: true });
                                _context6.next = 3;
                                return (0, _fetch.getFetch)('/user/shareRes/' + id, {
                                    noAjax: true
                                });

                            case 3:
                                res = _context6.sent;
                                shareRes = res.leafsnapRes || {};

                                shareRes.res = JSON.parse(shareRes.res);
                                // this.fileImage = shareRes.imgUrl
                                this.parseLeafSnapResponse(JSON.stringify(shareRes));

                            case 7:
                            case 'end':
                                return _context6.stop();
                        }
                    }
                }, _callee6, this);
            }));

            function getShareDate(_x5) {
                return _ref7.apply(this, arguments);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJjY3R4IiwidGFrZVBob3RvIiwiaW1hZ2UiLCJmaWxlSW1hZ2UiLCJzaGFyZUltYWdlIiwic2hhcmVJZCIsInNob3dSZXN1bHQiLCJyZXN1bHQiLCJjb21wdXRlZCIsImZvcm1hdFJlc3VsdCIsIm1hcCIsInNjb3JlIiwicGFyc2VJbnQiLCJpIiwibmFtZSIsIm1ldGhvZHMiLCJjYW5jbGUiLCJoaWRlU2hhcmVNZW51IiwiJGFwcGx5IiwidGl0bGUiLCJwYXRoIiwiaW1hZ2VVcmwiLCJyZXMiLCJjcmVhdGVDYW1lcmFDb250ZXh0Iiwic2hvd01vZGFsIiwiY29udGVudCIsInF1YWxpdHkiLCJzdWNjZXNzIiwic2hvd0xvYWRpbmciLCJtYXNrIiwiY2hlY2t0UGxhbnQiLCJ0ZW1wSW1hZ2VQYXRoIiwiaW1hZ2VGaWxlUGF0aCIsImUiLCJzb3VyY2VUeXBlIiwidGhlbiIsInRlbXBGaWxlUGF0aHMiLCJjdHgiLCJjcmVhdGVDYW52YXNDb250ZXh0IiwiZHJhd0ltYWdlIiwiZGV0YWlsIiwiaGVpZ2h0Iiwid2lkdGgiLCJkcmF3IiwiY29tcHJlc3NJbWFnZSIsIm1pbkltYWdlIiwicGFyc2VMZWFmU25hcFJlc3BvbnNlIiwiY2F0Y2giLCJlcnJvciIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwic2V0VGltZW91dCIsImNhbnZhc1RvVGVtcEZpbGVQYXRoIiwiY2FudmFzSWQiLCJ0ZW1wRmlsZVBhdGgiLCJmYWlsIiwicnNwIiwiSlNPTiIsInBhcnNlIiwiaW1nVXJsIiwiaWQiLCJBcnJheSIsImlzQXJyYXkiLCJoaWRlTG9hZGluZyIsInNob3dTaGFyZU1lbnUiLCJ3aXRoU2hhcmVUaWNrZXQiLCJvcHRpb25zIiwiZ2V0U2hhcmVEYXRlIiwibm9BamF4Iiwic2hhcmVSZXMiLCJsZWFmc25hcFJlcyIsInN0cmluZ2lmeSIsInNo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QUFFWHVELHNCQUFNLE1BRks7QUFHWEMsMEJBQVU7QUFIQyxhQUFmO0FBS0g7Ozs7RUEzSThCLGVBQUtDLEk7O2tCQUFuQmhGLEsiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICAgIGltcG9ydCB7IHVwbG9hZEZpbGUsIGNob29zZUltYWdlLCBnZXRGZXRjaCB9IGZyb20gJ0AvbW9kdWxlcy9jb21tb24vZmV0Y2gnXG5cbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgICAgIGNvbmZpZyA9IHtcbiAgICAgICAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfoirHnk6MnXG4gICAgICAgIH1cbiAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICAgIGNjdHg6IHtcbiAgICAgICAgICAgICAgICB0YWtlUGhvdG8gKCkge31cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpbWFnZTogJycsXG4gICAgICAgICAgICBmaWxlSW1hZ2U6ICcnLFxuICAgICAgICAgICAgc2hhcmVJbWFnZTogJycsXG4gICAgICAgICAgICBzaGFyZUlkOiAnJyxcbiAgICAgICAgICAgIHNob3dSZXN1bHQ6IGZhbHNlLFxuICAgICAgICAgICAgcmVzdWx0OiBbXVxuICAgICAgICB9XG4gICAgICAgIG9uU2hhcmVBcHBNZXNzYWdlICgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdGl0bGU6IGAkeyh0aGlzLmZvcm1hdFJlc3VsdFswXSAmJiB0aGlzLmZvcm1hdFJlc3VsdFswXS5uYW1lKSB8fCAnJ30gKCR7KHRoaXMuZm9ybWF0UmVzdWx0WzBdICYmIHRoaXMuZm9ybWF0UmVzdWx0WzBdLnNjb3JlKX0pYCxcbiAgICAgICAgICAgICAgICBwYXRoOiBgcGFnZXMvcHVibGlzaC9pbmRleD9pZD0ke3RoaXMuc2hhcmVJZH1gLFxuICAgICAgICAgICAgICAgIGltYWdlVXJsOiB0aGlzLnNoYXJlSW1hZ2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb21wdXRlZCA9IHtcbiAgICAgICAgICAgIGZvcm1hdFJlc3VsdCAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVzdWx0Lm1hcChpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjb3JlOiBwYXJzZUludChpLnNjb3JlICogMTAwKSArICclJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGkubmFtZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBhc3luYyBvblJlYWR5IChyZXMpIHtcbiAgICAgICAgICAgIHdlcHkuaGlkZVNoYXJlTWVudSgpXG4gICAgICAgICAgICBpZiAod2VweS5jcmVhdGVDYW1lcmFDb250ZXh0KCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNjdHggPSB3ZXB5LmNyZWF0ZUNhbWVyYUNvbnRleHQoJ215Q2FtZXJhJylcbiAgICAgICAgICAgIH0gZWxzZSB7IC8vIOWmguaenOW4jOacm+eUqOaIt+WcqOacgOaWsOeJiOacrOeahOWuouaIt+err+S4iuS9k+mqjOaCqOeahOWwj+eoi+W6j++8jOWPr+S7pei/meagt+WtkOaPkOekulxuICAgICAgICAgICAgICAgIHdlcHkuc2hvd01vZGFsKHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfmj5DnpLonLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAn5b2T5YmN5b6u5L+h54mI5pys6L+H5L2O77yM5peg5rOV5L2/55So6K+l5Yqf6IO977yM6K+35Y2H57qn5Yiw5pyA5paw5b6u5L+h54mI5pys5ZCO6YeN6K+V44CCJ1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbWV0aG9kcyA9IHtcbiAgICAgICAgICAgIGNhbmNsZSAoKSB7XG4gICAgICAgICAgICAgICAgd2VweS5oaWRlU2hhcmVNZW51KClcbiAgICAgICAgICAgICAgICB0aGlzLmltYWdlID0gJydcbiAgICAgICAgICAgICAgICB0aGlzLmZpbGVJbWFnZSA9ICcnXG4gICAgICAgICAgICAgICAgdGhpcy5zaGFyZUltYWdlID0gJydcbiAgICAgICAgICAgICAgICB0aGlzLnNoYXJlSWQgPSAnJ1xuICAgICAgICAgICAgICAgIHRoaXMucmVzdWx0ID0gW11cbiAgICAgICAgICAgICAgICB0aGlzLnNob3dSZXN1bHQgPSBmYWxzZVxuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBhc3luYyB0YWtlUGhvdG8oKSB7XG4gICAgICAgICAgICB0aGlzLmNjdHgudGFrZVBob3RvKHtcbiAgICAgICAgICAgICAgICBxdWFsaXR5OiAnbG93JyxcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiAocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHdlcHkuc2hvd0xvYWRpbmcoeyB0aXRsZTogJ+ivhuWIq+S4rScsIG1hc2s6IHRydWUgfSlcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGVja3RQbGFudChyZXMudGVtcEltYWdlUGF0aClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIGNoZWNrdFBsYW50IChpbWFnZUZpbGVQYXRoKSB7XG4gICAgICAgICAgICB0aGlzLmltYWdlID0gaW1hZ2VGaWxlUGF0aFxuICAgICAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgICB9XG4gICAgICAgIGFzeW5jIGdldEltYWdlRnJvbUFsYnVtIChlKSB7XG4gICAgICAgICAgICBjb25zdCBpbWFnZUZpbGVQYXRoID0gYXdhaXQgY2hvb3NlSW1hZ2Uoe1xuICAgICAgICAgICAgICAgIHNvdXJjZVR5cGU6IFsnYWxidW0nXVxuICAgICAgICAgICAgfSkudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXMudGVtcEZpbGVQYXRoc1swXVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHdlcHkuc2hvd0xvYWRpbmcoeyB0aXRsZTogJ+ivhuWIq+S4rScsIG1hc2s6IHRydWUgfSlcbiAgICAgICAgICAgIHRoaXMuZmlsZUltYWdlID0gaW1hZ2VGaWxlUGF0aFxuICAgICAgICAgICAgdGhpcy5jaGVja3RQbGFudChpbWFnZUZpbGVQYXRoKVxuICAgICAgICB9XG4gICAgICAgIGFzeW5jIGxvYWRpbWFnZSAoZSkge1xuICAgICAgICAgICAgY29uc3QgY3R4ID0gd2VweS5jcmVhdGVDYW52YXNDb250ZXh0KCdjYW52YXMnKVxuICAgICAgICAgICAgY3R4LmRyYXdJbWFnZSh0aGlzLmltYWdlLCAwLCAwLCAzNzUsIGUuZGV0YWlsLmhlaWdodCAvIGUuZGV0YWlsLndpZHRoICogNjY3KVxuICAgICAgICAgICAgY3R4LmRyYXcoKVxuICAgICAgICAgICAgY29uc3QgbWluSW1hZ2UgPSBhd2FpdCB0aGlzLmNvbXByZXNzSW1hZ2UoKVxuICAgICAgICAgICAgdXBsb2FkRmlsZSgnL3VzZXIvbGVhZlNuYXAnLCBtaW5JbWFnZSkudGhlbihyZXMgPT4gdGhpcy5wYXJzZUxlYWZTbmFwUmVzcG9uc2UocmVzKSkuY2F0Y2goZSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5lcnJvcihlKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBhc3luYyBjb21wcmVzc0ltYWdlICgpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHdlcHkuY2FudmFzVG9UZW1wRmlsZVBhdGgoe1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FudmFzSWQ6ICdjYW52YXMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzcyAocmVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXMudGVtcEZpbGVQYXRoKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZhaWwgKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9LCAxMDAwKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBwYXJzZUxlYWZTbmFwUmVzcG9uc2UgKHJzcCA9ICd7fScpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IEpTT04ucGFyc2UocnNwKVxuICAgICAgICAgICAgdGhpcy5zaGFyZUltYWdlID0gcmVzLmltZ1VybFxuICAgICAgICAgICAgdGhpcy5pbWFnZSA9IHRoaXMuaW1hZ2UgfHwgcmVzLmltZ1VybFxuICAgICAgICAgICAgdGhpcy5maWxlSW1hZ2UgPSB0aGlzLmltYWdlIHx8IHJlcy5maWxlSW1hZ2VcbiAgICAgICAgICAgIHRoaXMuc2hhcmVJZCA9IHJlcy5pZFxuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gcmVzLnJlcyAmJiByZXMucmVzLnJlc3VsdFxuICAgICAgICAgICAgdGhpcy5yZXN1bHQgPSBBcnJheS5pc0FycmF5KHJlc3VsdCkgPyByZXN1bHQgOiByZXN1bHQgPyBbcmVzdWx0XSA6IFtdXG4gICAgICAgICAgICB0aGlzLnNob3dSZXN1bHQgPSB0cnVlXG4gICAgICAgICAgICB3ZXB5LmhpZGVMb2FkaW5nKClcbiAgICAgICAgICAgIHdlcHkuc2hvd1NoYXJlTWVudSh7XG4gICAgICAgICAgICAgICAgd2l0aFNoYXJlVGlja2V0OiB0cnVlXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgICB9XG4gICAgICAgIG9uTG9hZCAob3B0aW9ucykge1xuICAgICAgICAgICAgaWYgKG9wdGlvbnMuaWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdldFNoYXJlRGF0ZShvcHRpb25zLmlkKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGFzeW5jIGdldFNoYXJlRGF0ZSAoaWQpIHtcbiAgICAgICAgICAgIHdlcHkuc2hvd0xvYWRpbmcoeyB0aXRsZTogJ+aVsOaNruWKoOi9veS4rScsIG1hc2s6IHRydWUgfSlcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGdldEZldGNoKGAvdXNlci9zaGFyZVJlcy8ke2lkfWAsIHtcbiAgICAgICAgICAgICAgICBub0FqYXg6IHRydWVcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBjb25zdCBzaGFyZVJlcyA9IHJlcy5sZWFmc25hcFJlcyB8fCB7fVxuICAgICAgICAgICAgc2hhcmVSZXMucmVzID0gSlNPTi5wYXJzZShzaGFyZVJlcy5yZXMpXG4gICAgICAgICAgICAvLyB0aGlzLmZpbGVJbWFnZSA9IHNoYXJlUmVzLmltZ1VybFxuICAgICAgICAgICAgdGhpcy5wYXJzZUxlYWZTbmFwUmVzcG9uc2UoSlNPTi5zdHJpbmdpZnkoc2hhcmVSZXMpKVxuICAgICAgICB9XG4gICAgICAgIGVycm9yIChlKSB7XG4gICAgICAgICAgICB3ZXB5LmhpZGVMb2FkaW5nKClcbiAgICAgICAgICAgIHdlcHkuc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+e9kee7nOW8guW4uCcsXG4gICAgICAgICAgICAgICAgaWNvbjogJ25vbmUnLFxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuIl19