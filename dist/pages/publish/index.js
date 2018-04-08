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

                                ctx.drawImage(this.image, 0, 0, e.detail.width, e.detail.height, 0, 0, 400, 400);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJjY3R4IiwidGFrZVBob3RvIiwiaW1hZ2UiLCJmaWxlSW1hZ2UiLCJzaGFyZUltYWdlIiwic2hhcmVJZCIsInNob3dSZXN1bHQiLCJyZXN1bHQiLCJjb21wdXRlZCIsImZvcm1hdFJlc3VsdCIsIm1hcCIsInNjb3JlIiwicGFyc2VJbnQiLCJpIiwibmFtZSIsIm1ldGhvZHMiLCJjYW5jbGUiLCJoaWRlU2hhcmVNZW51IiwiJGFwcGx5IiwidGl0bGUiLCJwYXRoIiwiaW1hZ2VVcmwiLCJyZXMiLCJjcmVhdGVDYW1lcmFDb250ZXh0Iiwic2hvd01vZGFsIiwiY29udGVudCIsInF1YWxpdHkiLCJzdWNjZXNzIiwic2hvd0xvYWRpbmciLCJtYXNrIiwiY2hlY2t0UGxhbnQiLCJ0ZW1wSW1hZ2VQYXRoIiwiaW1hZ2VGaWxlUGF0aCIsImUiLCJzb3VyY2VUeXBlIiwidGhlbiIsInRlbXBGaWxlUGF0aHMiLCJjdHgiLCJjcmVhdGVDYW52YXNDb250ZXh0IiwiZHJhd0ltYWdlIiwiZGV0YWlsIiwid2lkdGgiLCJoZWlnaHQiLCJkcmF3IiwiY29tcHJlc3NJbWFnZSIsIm1pbkltYWdlIiwicGFyc2VMZWFmU25hcFJlc3BvbnNlIiwiY2F0Y2giLCJlcnJvciIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwic2V0VGltZW91dCIsImNhbnZhc1RvVGVtcEZpbGVQYXRoIiwiY2FudmFzSWQiLCJ0ZW1wRmlsZVBhdGgiLCJmYWlsIiwicnNwIiwiSlNPTiIsInBhcnNlIiwiaW1nVXJsIiwiaWQiLCJBcnJheSIsImlzQXJyYXkiLCJoaWRlTG9hZGluZyIsInNob3dTaGFyZU1lbnUiLCJ3aXRoU2hhcmVUaWNrZXQiLCJvcHRpb25zIiwiZ2V0U2hhcmVEYXRlIiwibm9BamF4Iiwic2hhcmVSZXMiLCJsZWFmc25hcFJlcyIsInN0cmluZ2lmeSIsInNo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TCxDQUFlO0FBQ1h0RCx1QkFBTyxNQURJO0FBRVh1RCxzQkFBTSxNQUZLO0FBR1hDLDBCQUFVO0FBSEMsYUFBZjtBQUtIOzs7O0VBM0k4QixlQUFLQyxJOztrQkFBbkJoRixLIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgICBpbXBvcnQgeyB1cGxvYWRGaWxlLCBjaG9vc2VJbWFnZSwgZ2V0RmV0Y2ggfSBmcm9tICdAL21vZHVsZXMvY29tbW9uL2ZldGNoJ1xuXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgICAgICBjb25maWcgPSB7XG4gICAgICAgICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn6Iqx55OjJ1xuICAgICAgICB9XG4gICAgICAgIGRhdGEgPSB7XG4gICAgICAgICAgICBjY3R4OiB7XG4gICAgICAgICAgICAgICAgdGFrZVBob3RvICgpIHt9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaW1hZ2U6ICcnLFxuICAgICAgICAgICAgZmlsZUltYWdlOiAnJyxcbiAgICAgICAgICAgIHNoYXJlSW1hZ2U6ICcnLFxuICAgICAgICAgICAgc2hhcmVJZDogJycsXG4gICAgICAgICAgICBzaG93UmVzdWx0OiBmYWxzZSxcbiAgICAgICAgICAgIHJlc3VsdDogW11cbiAgICAgICAgfVxuICAgICAgICBvblNoYXJlQXBwTWVzc2FnZSAoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHRpdGxlOiBgJHsodGhpcy5mb3JtYXRSZXN1bHRbMF0gJiYgdGhpcy5mb3JtYXRSZXN1bHRbMF0ubmFtZSkgfHwgJyd9ICgkeyh0aGlzLmZvcm1hdFJlc3VsdFswXSAmJiB0aGlzLmZvcm1hdFJlc3VsdFswXS5zY29yZSl9KWAsXG4gICAgICAgICAgICAgICAgcGF0aDogYHBhZ2VzL3B1Ymxpc2gvaW5kZXg/aWQ9JHt0aGlzLnNoYXJlSWR9YCxcbiAgICAgICAgICAgICAgICBpbWFnZVVybDogdGhpcy5zaGFyZUltYWdlXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29tcHV0ZWQgPSB7XG4gICAgICAgICAgICBmb3JtYXRSZXN1bHQgKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnJlc3VsdC5tYXAoaSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzY29yZTogcGFyc2VJbnQoaS5zY29yZSAqIDEwMCkgKyAnJScsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBpLm5hbWVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYXN5bmMgb25SZWFkeSAocmVzKSB7XG4gICAgICAgICAgICB3ZXB5LmhpZGVTaGFyZU1lbnUoKVxuICAgICAgICAgICAgaWYgKHdlcHkuY3JlYXRlQ2FtZXJhQ29udGV4dCgpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jY3R4ID0gd2VweS5jcmVhdGVDYW1lcmFDb250ZXh0KCdteUNhbWVyYScpXG4gICAgICAgICAgICB9IGVsc2UgeyAvLyDlpoLmnpzluIzmnJvnlKjmiLflnKjmnIDmlrDniYjmnKznmoTlrqLmiLfnq6/kuIrkvZPpqozmgqjnmoTlsI/nqIvluo/vvIzlj6/ku6Xov5nmoLflrZDmj5DnpLpcbiAgICAgICAgICAgICAgICB3ZXB5LnNob3dNb2RhbCh7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5o+Q56S6JyxcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogJ+W9k+WJjeW+ruS/oeeJiOacrOi/h+S9ju+8jOaXoOazleS9v+eUqOivpeWKn+iDve+8jOivt+WNh+e6p+WIsOacgOaWsOW+ruS/oeeJiOacrOWQjumHjeivleOAgidcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIG1ldGhvZHMgPSB7XG4gICAgICAgICAgICBjYW5jbGUgKCkge1xuICAgICAgICAgICAgICAgIHdlcHkuaGlkZVNoYXJlTWVudSgpXG4gICAgICAgICAgICAgICAgdGhpcy5pbWFnZSA9ICcnXG4gICAgICAgICAgICAgICAgdGhpcy5maWxlSW1hZ2UgPSAnJ1xuICAgICAgICAgICAgICAgIHRoaXMuc2hhcmVJbWFnZSA9ICcnXG4gICAgICAgICAgICAgICAgdGhpcy5zaGFyZUlkID0gJydcbiAgICAgICAgICAgICAgICB0aGlzLnJlc3VsdCA9IFtdXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93UmVzdWx0ID0gZmFsc2VcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYXN5bmMgdGFrZVBob3RvKCkge1xuICAgICAgICAgICAgdGhpcy5jY3R4LnRha2VQaG90byh7XG4gICAgICAgICAgICAgICAgcXVhbGl0eTogJ2xvdycsXG4gICAgICAgICAgICAgICAgc3VjY2VzczogKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICB3ZXB5LnNob3dMb2FkaW5nKHsgdGl0bGU6ICfor4bliKvkuK0nLCBtYXNrOiB0cnVlIH0pXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hlY2t0UGxhbnQocmVzLnRlbXBJbWFnZVBhdGgpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBjaGVja3RQbGFudCAoaW1hZ2VGaWxlUGF0aCkge1xuICAgICAgICAgICAgdGhpcy5pbWFnZSA9IGltYWdlRmlsZVBhdGhcbiAgICAgICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgICAgfVxuICAgICAgICBhc3luYyBnZXRJbWFnZUZyb21BbGJ1bSAoZSkge1xuICAgICAgICAgICAgY29uc3QgaW1hZ2VGaWxlUGF0aCA9IGF3YWl0IGNob29zZUltYWdlKHtcbiAgICAgICAgICAgICAgICBzb3VyY2VUeXBlOiBbJ2FsYnVtJ11cbiAgICAgICAgICAgIH0pLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnRlbXBGaWxlUGF0aHNbMF1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB3ZXB5LnNob3dMb2FkaW5nKHsgdGl0bGU6ICfor4bliKvkuK0nLCBtYXNrOiB0cnVlIH0pXG4gICAgICAgICAgICB0aGlzLmZpbGVJbWFnZSA9IGltYWdlRmlsZVBhdGhcbiAgICAgICAgICAgIHRoaXMuY2hlY2t0UGxhbnQoaW1hZ2VGaWxlUGF0aClcbiAgICAgICAgfVxuICAgICAgICBhc3luYyBsb2FkaW1hZ2UgKGUpIHtcbiAgICAgICAgICAgIGNvbnN0IGN0eCA9IHdlcHkuY3JlYXRlQ2FudmFzQ29udGV4dCgnY2FudmFzJylcbiAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UodGhpcy5pbWFnZSwgMCwgMCwgZS5kZXRhaWwud2lkdGgsIGUuZGV0YWlsLmhlaWdodCwgMCwgMCwgNDAwLCA0MDApXG4gICAgICAgICAgICBjdHguZHJhdygpXG4gICAgICAgICAgICBjb25zdCBtaW5JbWFnZSA9IGF3YWl0IHRoaXMuY29tcHJlc3NJbWFnZSgpXG4gICAgICAgICAgICB1cGxvYWRGaWxlKCcvdXNlci9sZWFmU25hcCcsIG1pbkltYWdlKS50aGVuKHJlcyA9PiB0aGlzLnBhcnNlTGVhZlNuYXBSZXNwb25zZShyZXMpKS5jYXRjaChlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmVycm9yKGUpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIGFzeW5jIGNvbXByZXNzSW1hZ2UgKCkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgd2VweS5jYW52YXNUb1RlbXBGaWxlUGF0aCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYW52YXNJZDogJ2NhbnZhcycsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzIChyZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlcy50ZW1wRmlsZVBhdGgpXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZmFpbCAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH0sIDEwMDApXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIHBhcnNlTGVhZlNuYXBSZXNwb25zZSAocnNwID0gJ3t9Jykge1xuICAgICAgICAgICAgY29uc3QgcmVzID0gSlNPTi5wYXJzZShyc3ApXG4gICAgICAgICAgICB0aGlzLnNoYXJlSW1hZ2UgPSByZXMuaW1nVXJsXG4gICAgICAgICAgICB0aGlzLmltYWdlID0gdGhpcy5pbWFnZSB8fCByZXMuaW1nVXJsXG4gICAgICAgICAgICB0aGlzLmZpbGVJbWFnZSA9IHRoaXMuaW1hZ2UgfHwgcmVzLmZpbGVJbWFnZVxuICAgICAgICAgICAgdGhpcy5zaGFyZUlkID0gcmVzLmlkXG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSByZXMucmVzICYmIHJlcy5yZXMucmVzdWx0XG4gICAgICAgICAgICB0aGlzLnJlc3VsdCA9IEFycmF5LmlzQXJyYXkocmVzdWx0KSA/IHJlc3VsdCA6IHJlc3VsdCA/IFtyZXN1bHRdIDogW11cbiAgICAgICAgICAgIHRoaXMuc2hvd1Jlc3VsdCA9IHRydWVcbiAgICAgICAgICAgIHdlcHkuaGlkZUxvYWRpbmcoKVxuICAgICAgICAgICAgd2VweS5zaG93U2hhcmVNZW51KHtcbiAgICAgICAgICAgICAgICB3aXRoU2hhcmVUaWNrZXQ6IHRydWVcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICAgIH1cbiAgICAgICAgb25Mb2FkIChvcHRpb25zKSB7XG4gICAgICAgICAgICBpZiAob3B0aW9ucy5pZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZ2V0U2hhcmVEYXRlKG9wdGlvbnMuaWQpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYXN5bmMgZ2V0U2hhcmVEYXRlIChpZCkge1xuICAgICAgICAgICAgd2VweS5zaG93TG9hZGluZyh7IHRpdGxlOiAn5pWw5o2u5Yqg6L295LitJywgbWFzazogdHJ1ZSB9KVxuICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZ2V0RmV0Y2goYC91c2VyL3NoYXJlUmVzLyR7aWR9YCwge1xuICAgICAgICAgICAgICAgIG5vQWpheDogdHJ1ZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGNvbnN0IHNoYXJlUmVzID0gcmVzLmxlYWZzbmFwUmVzIHx8IHt9XG4gICAgICAgICAgICBzaGFyZVJlcy5yZXMgPSBKU09OLnBhcnNlKHNoYXJlUmVzLnJlcylcbiAgICAgICAgICAgIC8vIHRoaXMuZmlsZUltYWdlID0gc2hhcmVSZXMuaW1nVXJsXG4gICAgICAgICAgICB0aGlzLnBhcnNlTGVhZlNuYXBSZXNwb25zZShKU09OLnN0cmluZ2lmeShzaGFyZVJlcykpXG4gICAgICAgIH1cbiAgICAgICAgZXJyb3IgKGUpIHtcbiAgICAgICAgICAgIHdlcHkuaGlkZUxvYWRpbmcoKVxuICAgICAgICAgICAgd2VweS5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgICAgIHRpdGxlOiAn572R57uc5byC5bi4JyxcbiAgICAgICAgICAgICAgICBpY29uOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IDIwMDBcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG4iXX0=