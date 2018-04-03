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

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
            cctx: {
                takePhoto: function takePhoto() {}
            },
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
                                        _wepy2.default.showLoading({ title: '加载中', mask: true });
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
                                return (0, _fetch.chooseImage)().then(function (res) {
                                    return res.tempFilePaths[0];
                                });

                            case 2:
                                imageFilePath = _context4.sent;

                                _wepy2.default.showLoading({ title: '加载中', mask: true });
                                this.checktPlant(imageFilePath);

                            case 5:
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
            _wepy2.default.showModal({
                title: '提示',
                content: e.detail
            });
        }
    }]);

    return Index;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/publish/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiZGF0YSIsImNjdHgiLCJ0YWtlUGhvdG8iLCJpbWFnZSIsInNob3dSZXN1bHQiLCJyZXN1bHQiLCJjb21wdXRlZCIsImZvcm1hdFJlc3VsdCIsIm1hcCIsInNjb3JlIiwicGFyc2VJbnQiLCJpIiwibmFtZSIsIm1ldGhvZHMiLCJjYW5jbGUiLCIkYXBwbHkiLCJyZXMiLCJjcmVhdGVDYW1lcmFDb250ZXh0Iiwic2hvd01vZGFsIiwidGl0bGUiLCJjb250ZW50IiwicXVhbGl0eSIsInN1Y2Nlc3MiLCJzaG93TG9hZGluZyIsIm1hc2siLCJjaGVja3RQbGFudCIsInRlbXBJbWFnZVBhdGgiLCJpbWFnZUZpbGVQYXRoIiwidGhlbiIsInBhcnNlTGVhZlNuYXBSZXNwb25zZSIsImUiLCJ0ZW1wRmlsZVBhdGhzIiwicnNwIiwiSlNPTiIsInBhcnNlIiwiQXJyYXkiLCJpc0FycmF5IiwiaGlkZUxvYWRpbmciLCJkZXRhaWwiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDSTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O3dMQUNqQkMsSSxHQUFPO0FBQ0hDLGtCQUFNO0FBQ0ZDLHlCQURFLHVCQUNXLENBQUU7QUFEYixhQURIO0FBSUhDLG1CQUFPLEVBSko7QUFLSEMsd0JBQVksS0FMVDtBQU1IQyxvQkFBUTtBQU5MLFMsUUFRUEMsUSxHQUFXO0FBQ1BDLHdCQURPLDBCQUNTO0FBQ1osdUJBQU8sS0FBS0YsTUFBTCxDQUFZRyxHQUFaLENBQWdCLGFBQUs7QUFDeEIsMkJBQU87QUFDSEMsK0JBQU9DLFNBQVNDLEVBQUVGLEtBQUYsR0FBVSxHQUFuQixJQUEwQixHQUQ5QjtBQUVIRyw4QkFBTUQsRUFBRUM7QUFGTCxxQkFBUDtBQUlILGlCQUxNLENBQVA7QUFNSDtBQVJNLFMsUUFxQlhDLE8sR0FBVTtBQUNOQyxrQkFETSxvQkFDSTtBQUNOLHFCQUFLWCxLQUFMLEdBQWEsRUFBYjtBQUNBLHFCQUFLRSxNQUFMLEdBQWMsRUFBZDtBQUNBLHFCQUFLRCxVQUFMLEdBQWtCLEtBQWxCO0FBQ0EscUJBQUtXLE1BQUw7QUFDSDtBQU5LLFM7Ozs7OztpR0FYS0MsRzs7Ozs7QUFDWDtBQUNBLG9DQUFJLGVBQUtDLG1CQUFMLEVBQUosRUFBZ0M7QUFDNUIseUNBQUtoQixJQUFMLEdBQVksZUFBS2dCLG1CQUFMLENBQXlCLFVBQXpCLENBQVo7QUFDSCxpQ0FGRCxNQUVPO0FBQUU7QUFDTCxtREFBS0MsU0FBTCxDQUFlO0FBQ1hDLCtDQUFPLElBREk7QUFFWEMsaURBQVM7QUFGRSxxQ0FBZjtBQUlIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVdELHFDQUFLbkIsSUFBTCxDQUFVQyxTQUFWLENBQW9CO0FBQ2hCbUIsNkNBQVMsS0FETztBQUVoQkMsNkNBQVMsaUJBQUNOLEdBQUQsRUFBUztBQUNkLHVEQUFLTyxXQUFMLENBQWlCLEVBQUVKLE9BQU8sS0FBVCxFQUFnQkssTUFBTSxJQUF0QixFQUFqQjtBQUNBLCtDQUFLQyxXQUFMLENBQWlCVCxJQUFJVSxhQUFyQjtBQUNIO0FBTGUsaUNBQXBCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tHQVFlQyxhOzs7Ozs7O0FBQ2YscUNBQUt4QixLQUFMLEdBQWF3QixhQUFiO0FBQ0EsdURBQVcsZ0JBQVgsRUFBNkJBLGFBQTdCLEVBQTRDQyxJQUE1QyxDQUFpRDtBQUFBLDJDQUFPLE9BQUtDLHFCQUFMLENBQTJCYixHQUEzQixDQUFQO0FBQUEsaUNBQWpEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tHQUVxQmMsQzs7Ozs7Ozt1Q0FDTywwQkFBY0YsSUFBZCxDQUFtQixlQUFPO0FBQ2xELDJDQUFPWixJQUFJZSxhQUFKLENBQWtCLENBQWxCLENBQVA7QUFDSCxpQ0FGMkIsQzs7O0FBQXRCSiw2Qzs7QUFHTiwrQ0FBS0osV0FBTCxDQUFpQixFQUFFSixPQUFPLEtBQVQsRUFBZ0JLLE1BQU0sSUFBdEIsRUFBakI7QUFDQSxxQ0FBS0MsV0FBTCxDQUFpQkUsYUFBakI7Ozs7Ozs7Ozs7Ozs7Ozs7OztnREFFK0I7QUFBQSxnQkFBWkssR0FBWSx1RUFBTixJQUFNOztBQUMvQixnQkFBTWhCLE1BQU1pQixLQUFLQyxLQUFMLENBQVdGLEdBQVgsQ0FBWjtBQUNBLGdCQUFNM0IsU0FBU1csSUFBSUEsR0FBSixJQUFXQSxJQUFJQSxHQUFKLENBQVFYLE1BQWxDO0FBQ0EsaUJBQUtBLE1BQUwsR0FBYzhCLE1BQU1DLE9BQU4sQ0FBYy9CLE1BQWQsSUFBd0JBLE1BQXhCLEdBQWlDQSxTQUFTLENBQUNBLE1BQUQsQ0FBVCxHQUFvQixFQUFuRTtBQUNBLGlCQUFLRCxVQUFMLEdBQWtCLElBQWxCO0FBQ0EsMkJBQUtpQyxXQUFMO0FBQ0EsaUJBQUt0QixNQUFMO0FBQ0g7Ozs4QkFDS2UsQyxFQUFHO0FBQ0wsMkJBQUtaLFNBQUwsQ0FBZTtBQUNYQyx1QkFBTyxJQURJO0FBRVhDLHlCQUFTVSxFQUFFUTtBQUZBLGFBQWY7QUFJSDs7OztFQXZFOEIsZUFBS0MsSTs7a0JBQW5CeEMsSyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gICAgaW1wb3J0IHsgdXBsb2FkRmlsZSwgY2hvb3NlSW1hZ2UgfSBmcm9tICdAL21vZHVsZXMvY29tbW9uL2ZldGNoJ1xuXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgICAgICBkYXRhID0ge1xuICAgICAgICAgICAgY2N0eDoge1xuICAgICAgICAgICAgICAgIHRha2VQaG90byAoKSB7fVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGltYWdlOiAnJyxcbiAgICAgICAgICAgIHNob3dSZXN1bHQ6IGZhbHNlLFxuICAgICAgICAgICAgcmVzdWx0OiBbXVxuICAgICAgICB9XG4gICAgICAgIGNvbXB1dGVkID0ge1xuICAgICAgICAgICAgZm9ybWF0UmVzdWx0ICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5yZXN1bHQubWFwKGkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2NvcmU6IHBhcnNlSW50KGkuc2NvcmUgKiAxMDApICsgJyUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogaS5uYW1lXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGFzeW5jIG9uUmVhZHkgKHJlcykge1xuICAgICAgICAgICAgLy8gYXdhaXQgdGhpcy4kcGFyZW50LmdldFVzZXJJbmZvKClcbiAgICAgICAgICAgIGlmICh3ZXB5LmNyZWF0ZUNhbWVyYUNvbnRleHQoKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2N0eCA9IHdlcHkuY3JlYXRlQ2FtZXJhQ29udGV4dCgnbXlDYW1lcmEnKVxuICAgICAgICAgICAgfSBlbHNlIHsgLy8g5aaC5p6c5biM5pyb55So5oi35Zyo5pyA5paw54mI5pys55qE5a6i5oi356uv5LiK5L2T6aqM5oKo55qE5bCP56iL5bqP77yM5Y+v5Lul6L+Z5qC35a2Q5o+Q56S6XG4gICAgICAgICAgICAgICAgd2VweS5zaG93TW9kYWwoe1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+aPkOekuicsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICflvZPliY3lvq7kv6HniYjmnKzov4fkvY7vvIzml6Dms5Xkvb/nlKjor6Xlip/og73vvIzor7fljYfnuqfliLDmnIDmlrDlvq7kv6HniYjmnKzlkI7ph43or5XjgIInXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBtZXRob2RzID0ge1xuICAgICAgICAgICAgY2FuY2xlICgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmltYWdlID0gJydcbiAgICAgICAgICAgICAgICB0aGlzLnJlc3VsdCA9IFtdXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93UmVzdWx0ID0gZmFsc2VcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYXN5bmMgdGFrZVBob3RvKCkge1xuICAgICAgICAgICAgdGhpcy5jY3R4LnRha2VQaG90byh7XG4gICAgICAgICAgICAgICAgcXVhbGl0eTogJ2xvdycsXG4gICAgICAgICAgICAgICAgc3VjY2VzczogKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICB3ZXB5LnNob3dMb2FkaW5nKHsgdGl0bGU6ICfliqDovb3kuK0nLCBtYXNrOiB0cnVlIH0pXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hlY2t0UGxhbnQocmVzLnRlbXBJbWFnZVBhdGgpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBhc3luYyBjaGVja3RQbGFudCAoaW1hZ2VGaWxlUGF0aCkge1xuICAgICAgICAgICAgdGhpcy5pbWFnZSA9IGltYWdlRmlsZVBhdGhcbiAgICAgICAgICAgIHVwbG9hZEZpbGUoJy91c2VyL2xlYWZTbmFwJywgaW1hZ2VGaWxlUGF0aCkudGhlbihyZXMgPT4gdGhpcy5wYXJzZUxlYWZTbmFwUmVzcG9uc2UocmVzKSlcbiAgICAgICAgfVxuICAgICAgICBhc3luYyBnZXRJbWFnZUZyb21BbGJ1bSAoZSkge1xuICAgICAgICAgICAgY29uc3QgaW1hZ2VGaWxlUGF0aCA9IGF3YWl0IGNob29zZUltYWdlKCkudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXMudGVtcEZpbGVQYXRoc1swXVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHdlcHkuc2hvd0xvYWRpbmcoeyB0aXRsZTogJ+WKoOi9veS4rScsIG1hc2s6IHRydWUgfSlcbiAgICAgICAgICAgIHRoaXMuY2hlY2t0UGxhbnQoaW1hZ2VGaWxlUGF0aClcbiAgICAgICAgfVxuICAgICAgICBwYXJzZUxlYWZTbmFwUmVzcG9uc2UgKHJzcCA9ICd7fScpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IEpTT04ucGFyc2UocnNwKVxuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gcmVzLnJlcyAmJiByZXMucmVzLnJlc3VsdFxuICAgICAgICAgICAgdGhpcy5yZXN1bHQgPSBBcnJheS5pc0FycmF5KHJlc3VsdCkgPyByZXN1bHQgOiByZXN1bHQgPyBbcmVzdWx0XSA6IFtdXG4gICAgICAgICAgICB0aGlzLnNob3dSZXN1bHQgPSB0cnVlXG4gICAgICAgICAgICB3ZXB5LmhpZGVMb2FkaW5nKClcbiAgICAgICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgICAgfVxuICAgICAgICBlcnJvcihlKSB7XG4gICAgICAgICAgICB3ZXB5LnNob3dNb2RhbCh7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICfmj5DnpLonLFxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IGUuZGV0YWlsXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuIl19