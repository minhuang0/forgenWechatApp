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
            this.image = this.image || res.imgUrl;
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
            var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(id) {
                var res, shareRes;
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
                                shareRes = res.leafsnapRes || {};

                                shareRes.res = JSON.parse(shareRes.res);
                                this.parseLeafSnapResponse(JSON.stringify(shareRes));

                            case 6:
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJjY3R4IiwidGFrZVBob3RvIiwiaW1hZ2UiLCJmaWxlSW1hZ2UiLCJzaGFyZUltYWdlIiwic2hhcmVJZCIsInNob3dSZXN1bHQiLCJyZXN1bHQiLCJjb21wdXRlZCIsImZvcm1hdFJlc3VsdCIsIm1hcCIsInNjb3JlIiwicGFyc2VJbnQiLCJpIiwibmFtZSIsIm1ldGhvZHMiLCJjYW5jbGUiLCJoaWRlU2hhcmVNZW51IiwiJGFwcGx5IiwidGl0bGUiLCJwYXRoIiwiaW1hZ2VVcmwiLCJyZXMiLCJjcmVhdGVDYW1lcmFDb250ZXh0Iiwic2hvd01vZGFsIiwiY29udGVudCIsInF1YWxpdHkiLCJzdWNjZXNzIiwic2hvd0xvYWRpbmciLCJtYXNrIiwiY2hlY2t0UGxhbnQiLCJ0ZW1wSW1hZ2VQYXRoIiwiaW1hZ2VGaWxlUGF0aCIsInRoZW4iLCJwYXJzZUxlYWZTbmFwUmVzcG9uc2UiLCJjYXRjaCIsImVycm9yIiwiZSIsInNvdXJjZVR5cGUiLCJ0ZW1wRmlsZVBhdGhzIiwicnNwIiwiSlNPTiIsInBhcnNlIiwiaW1nVXJsIiwiaWQiLCJBcnJheSIsImlzQXJyYXkiLCJoaWRlTG9hZGluZyIsInNob3dTaGFyZU1lbnUiLCJ3aXRoU2hhcmVUaWNrZXQiLCJvcHRpb25zIiwiZ2V0U2hhcmVEYXRlIiwibm9BamF4Iiwic2hhcmVSZXMiLCJsZWFmc25hcFJlcyIsInN0cmluZ2lmeSIsInNob3dUb2FzdCIsImljb24iLCJkdXJhdGlvbiIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNJOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7d0xBQ2pCQyxNLEdBQVM7QUFDTEMsb0NBQXdCO0FBRG5CLFMsUUFHVEMsSSxHQUFPO0FBQ0hDLGtCQUFNO0FBQ0ZDLHlCQURFLHVCQUNXLENBQUU7QUFEYixhQURIO0FB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SztBQUdYQywwQkFBVTtBQUhDLGFBQWY7QUFLSDs7OztFQWxIOEIsZUFBS0MsSTs7a0JBQW5CL0QsSyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gICAgaW1wb3J0IHsgdXBsb2FkRmlsZSwgY2hvb3NlSW1hZ2UsIGdldEZldGNoIH0gZnJvbSAnQC9tb2R1bGVzL2NvbW1vbi9mZXRjaCdcblxuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICAgICAgY29uZmlnID0ge1xuICAgICAgICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+iKseeToydcbiAgICAgICAgfVxuICAgICAgICBkYXRhID0ge1xuICAgICAgICAgICAgY2N0eDoge1xuICAgICAgICAgICAgICAgIHRha2VQaG90byAoKSB7fVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGltYWdlOiAnJyxcbiAgICAgICAgICAgIGZpbGVJbWFnZTogJycsXG4gICAgICAgICAgICBzaGFyZUltYWdlOiAnJyxcbiAgICAgICAgICAgIHNoYXJlSWQ6ICcnLFxuICAgICAgICAgICAgc2hvd1Jlc3VsdDogZmFsc2UsXG4gICAgICAgICAgICByZXN1bHQ6IFtdXG4gICAgICAgIH1cbiAgICAgICAgb25TaGFyZUFwcE1lc3NhZ2UgKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogYCR7KHRoaXMuZm9ybWF0UmVzdWx0WzBdICYmIHRoaXMuZm9ybWF0UmVzdWx0WzBdLm5hbWUpIHx8ICcnfSAoJHsodGhpcy5mb3JtYXRSZXN1bHRbMF0gJiYgdGhpcy5mb3JtYXRSZXN1bHRbMF0uc2NvcmUpfSlgLFxuICAgICAgICAgICAgICAgIHBhdGg6IGBwYWdlcy9wdWJsaXNoL2luZGV4P2lkPSR7dGhpcy5zaGFyZUlkfWAsXG4gICAgICAgICAgICAgICAgaW1hZ2VVcmw6IHRoaXMuc2hhcmVJbWFnZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbXB1dGVkID0ge1xuICAgICAgICAgICAgZm9ybWF0UmVzdWx0ICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5yZXN1bHQubWFwKGkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2NvcmU6IHBhcnNlSW50KGkuc2NvcmUgKiAxMDApICsgJyUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogaS5uYW1lXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGFzeW5jIG9uUmVhZHkgKHJlcykge1xuICAgICAgICAgICAgd2VweS5oaWRlU2hhcmVNZW51KClcbiAgICAgICAgICAgIGlmICh3ZXB5LmNyZWF0ZUNhbWVyYUNvbnRleHQoKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2N0eCA9IHdlcHkuY3JlYXRlQ2FtZXJhQ29udGV4dCgnbXlDYW1lcmEnKVxuICAgICAgICAgICAgfSBlbHNlIHsgLy8g5aaC5p6c5biM5pyb55So5oi35Zyo5pyA5paw54mI5pys55qE5a6i5oi356uv5LiK5L2T6aqM5oKo55qE5bCP56iL5bqP77yM5Y+v5Lul6L+Z5qC35a2Q5o+Q56S6XG4gICAgICAgICAgICAgICAgd2VweS5zaG93TW9kYWwoe1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+aPkOekuicsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICflvZPliY3lvq7kv6HniYjmnKzov4fkvY7vvIzml6Dms5Xkvb/nlKjor6Xlip/og73vvIzor7fljYfnuqfliLDmnIDmlrDlvq7kv6HniYjmnKzlkI7ph43or5XjgIInXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBtZXRob2RzID0ge1xuICAgICAgICAgICAgY2FuY2xlICgpIHtcbiAgICAgICAgICAgICAgICB3ZXB5LmhpZGVTaGFyZU1lbnUoKVxuICAgICAgICAgICAgICAgIHRoaXMuaW1hZ2UgPSAnJ1xuICAgICAgICAgICAgICAgIHRoaXMuZmlsZUltYWdlID0gJydcbiAgICAgICAgICAgICAgICB0aGlzLnNoYXJlSW1hZ2UgPSAnJ1xuICAgICAgICAgICAgICAgIHRoaXMuc2hhcmVJZCA9ICcnXG4gICAgICAgICAgICAgICAgdGhpcy5yZXN1bHQgPSBbXVxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd1Jlc3VsdCA9IGZhbHNlXG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGFzeW5jIHRha2VQaG90bygpIHtcbiAgICAgICAgICAgIHRoaXMuY2N0eC50YWtlUGhvdG8oe1xuICAgICAgICAgICAgICAgIHF1YWxpdHk6ICdsb3cnLFxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgd2VweS5zaG93TG9hZGluZyh7IHRpdGxlOiAn6K+G5Yir5LitJywgbWFzazogdHJ1ZSB9KVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoZWNrdFBsYW50KHJlcy50ZW1wSW1hZ2VQYXRoKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgYXN5bmMgY2hlY2t0UGxhbnQgKGltYWdlRmlsZVBhdGgpIHtcbiAgICAgICAgICAgIHRoaXMuaW1hZ2UgPSBpbWFnZUZpbGVQYXRoXG4gICAgICAgICAgICB1cGxvYWRGaWxlKCcvdXNlci9sZWFmU25hcCcsIGltYWdlRmlsZVBhdGgpLnRoZW4ocmVzID0+IHRoaXMucGFyc2VMZWFmU25hcFJlc3BvbnNlKHJlcykpLmNhdGNoKGUgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZXJyb3IoZSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgYXN5bmMgZ2V0SW1hZ2VGcm9tQWxidW0gKGUpIHtcbiAgICAgICAgICAgIGNvbnN0IGltYWdlRmlsZVBhdGggPSBhd2FpdCBjaG9vc2VJbWFnZSh7XG4gICAgICAgICAgICAgICAgc291cmNlVHlwZTogWydhbGJ1bSddXG4gICAgICAgICAgICB9KS50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy50ZW1wRmlsZVBhdGhzWzBdXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgd2VweS5zaG93TG9hZGluZyh7IHRpdGxlOiAn6K+G5Yir5LitJywgbWFzazogdHJ1ZSB9KVxuICAgICAgICAgICAgdGhpcy5maWxlSW1hZ2UgPSBpbWFnZUZpbGVQYXRoXG4gICAgICAgICAgICB0aGlzLmNoZWNrdFBsYW50KGltYWdlRmlsZVBhdGgpXG4gICAgICAgIH1cbiAgICAgICAgcGFyc2VMZWFmU25hcFJlc3BvbnNlIChyc3AgPSAne30nKSB7XG4gICAgICAgICAgICBjb25zdCByZXMgPSBKU09OLnBhcnNlKHJzcClcbiAgICAgICAgICAgIHRoaXMuc2hhcmVJbWFnZSA9IHJlcy5pbWdVcmxcbiAgICAgICAgICAgIHRoaXMuaW1hZ2UgPSB0aGlzLmltYWdlIHx8IHJlcy5pbWdVcmxcbiAgICAgICAgICAgIHRoaXMuc2hhcmVJZCA9IHJlcy5pZFxuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gcmVzLnJlcyAmJiByZXMucmVzLnJlc3VsdFxuICAgICAgICAgICAgdGhpcy5yZXN1bHQgPSBBcnJheS5pc0FycmF5KHJlc3VsdCkgPyByZXN1bHQgOiByZXN1bHQgPyBbcmVzdWx0XSA6IFtdXG4gICAgICAgICAgICB0aGlzLnNob3dSZXN1bHQgPSB0cnVlXG4gICAgICAgICAgICB3ZXB5LmhpZGVMb2FkaW5nKClcbiAgICAgICAgICAgIHdlcHkuc2hvd1NoYXJlTWVudSh7XG4gICAgICAgICAgICAgICAgd2l0aFNoYXJlVGlja2V0OiB0cnVlXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgICB9XG4gICAgICAgIG9uTG9hZCAob3B0aW9ucykge1xuICAgICAgICAgICAgaWYgKG9wdGlvbnMuaWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdldFNoYXJlRGF0ZShvcHRpb25zLmlkKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGFzeW5jIGdldFNoYXJlRGF0ZSAoaWQpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGdldEZldGNoKGAvdXNlci9zaGFyZVJlcy8ke2lkfWAsIHtcbiAgICAgICAgICAgICAgICBub0FqYXg6IHRydWVcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBjb25zdCBzaGFyZVJlcyA9IHJlcy5sZWFmc25hcFJlcyB8fCB7fVxuICAgICAgICAgICAgc2hhcmVSZXMucmVzID0gSlNPTi5wYXJzZShzaGFyZVJlcy5yZXMpXG4gICAgICAgICAgICB0aGlzLnBhcnNlTGVhZlNuYXBSZXNwb25zZShKU09OLnN0cmluZ2lmeShzaGFyZVJlcykpXG4gICAgICAgIH1cbiAgICAgICAgZXJyb3IgKGUpIHtcbiAgICAgICAgICAgIHdlcHkuaGlkZUxvYWRpbmcoKVxuICAgICAgICAgICAgd2VweS5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgICAgIHRpdGxlOiAn572R57uc5byC5bi4JyxcbiAgICAgICAgICAgICAgICBpY29uOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IDIwMDBcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG4iXX0=