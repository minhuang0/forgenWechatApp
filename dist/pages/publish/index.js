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
            navigationBarTitleText: '扫一扫'
        }, _this.data = {
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
                                return (0, _fetch.chooseImage)().then(function (res) {
                                    return res.tempFilePaths[0];
                                });

                            case 2:
                                imageFilePath = _context4.sent;

                                _wepy2.default.showLoading({ title: '识别中', mask: true });
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
            _wepy2.default.hideLoading();
            _wepy2.default.showModal({
                title: '提示',
                content: e.detail
            });
        }
    }]);

    return Index;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/publish/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJjY3R4IiwidGFrZVBob3RvIiwiaW1hZ2UiLCJzaG93UmVzdWx0IiwicmVzdWx0IiwiY29tcHV0ZWQiLCJmb3JtYXRSZXN1bHQiLCJtYXAiLCJzY29yZSIsInBhcnNlSW50IiwiaSIsIm5hbWUiLCJtZXRob2RzIiwiY2FuY2xlIiwiJGFwcGx5IiwicmVzIiwiY3JlYXRlQ2FtZXJhQ29udGV4dCIsInNob3dNb2RhbCIsInRpdGxlIiwiY29udGVudCIsInF1YWxpdHkiLCJzdWNjZXNzIiwic2hvd0xvYWRpbmciLCJtYXNrIiwiY2hlY2t0UGxhbnQiLCJ0ZW1wSW1hZ2VQYXRoIiwiaW1hZ2VGaWxlUGF0aCIsInRoZW4iLCJwYXJzZUxlYWZTbmFwUmVzcG9uc2UiLCJjYXRjaCIsImVycm9yIiwiZSIsInRlbXBGaWxlUGF0aHMiLCJyc3AiLCJKU09OIiwicGFyc2UiLCJBcnJheSIsImlzQXJyYXkiLCJoaWRlTG9hZGluZyIsImRldGFpbCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNJOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7d0xBQ2pCQyxNLEdBQVM7QUFDTEMsb0NBQXdCO0FBRG5CLFMsUUFHVEMsSSxHQUFPO0FBQ0hDLGtCQUFNO0FBQ0ZDLHlCQURFLHVCQUNXLENBQUU7QUFEYixhQURIO0FBSUhDLG1CQUFPLEVBSko7QUFLSEMsd0JBQVksS0FMVDtBQU1IQyxvQkFBUTtBQU5MLFMsUUFRUEMsUSxHQUFXO0FBQ1BDLHdCQURPLDBCQUNTO0FBQ1osdUJBQU8sS0FBS0YsTUFBTCxDQUFZRyxHQUFaLENBQWdCLGFBQUs7QUFDeEIsMkJBQU87QUFDSEMsK0JBQU9DLFNBQVNDLEVBQUVGLEtBQUYsR0FBVSxHQUFuQixJQUEwQixHQUQ5QjtBQUVIRyw4QkFBTUQsRUFBRUM7QUFGTCxxQkFBUDtBQUlILGlCQUxNLENBQVA7QUFNSDtBQVJNLFMsUUFxQlhDLE8sR0FBVTtBQUNOQyxrQkFETSxvQkFDSTtBQUNOLHFCQUFLWCxLQUFMLEdBQWEsRUFBYjtBQUNBLHFCQUFLRSxNQUFMLEdBQWMsRUFBZDtBQUNBLHFCQUFLRCxVQUFMLEdBQWtCLEtBQWxCO0FBQ0EscUJBQUtXLE1BQUw7QUFDSDtBQU5LLFM7Ozs7OztpR0FYS0MsRzs7Ozs7QUFDWDtBQUNBLG9DQUFJLGVBQUtDLG1CQUFMLEVBQUosRUFBZ0M7QUFDNUIseUNBQUtoQixJQUFMLEdBQVksZUFBS2dCLG1CQUFMLENBQXlCLFVBQXpCLENBQVo7QUFDSCxpQ0FGRCxNQUVPO0FBQUU7QUFDTCxtREFBS0MsU0FBTCxDQUFlO0FBQ1hDLCtDQUFPLElBREk7QUFFWEMsaURBQVM7QUFGRSxxQ0FBZjtBQUlIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVdELHFDQUFLbkIsSUFBTCxDQUFVQyxTQUFWLENBQW9CO0FBQ2hCbUIsNkNBQVMsS0FETztBQUVoQkMsNkNBQVMsaUJBQUNOLEdBQUQsRUFBUztBQUNkLHVEQUFLTyxXQUFMLENBQWlCLEVBQUVKLE9BQU8sS0FBVCxFQUFnQkssTUFBTSxJQUF0QixFQUFqQjtBQUNBLCtDQUFLQyxXQUFMLENBQWlCVCxJQUFJVSxhQUFyQjtBQUNIO0FBTGUsaUNBQXBCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tHQVFlQyxhOzs7Ozs7O0FBQ2YscUNBQUt4QixLQUFMLEdBQWF3QixhQUFiO0FBQ0EsdURBQVcsZ0JBQVgsRUFBNkJBLGFBQTdCLEVBQTRDQyxJQUE1QyxDQUFpRDtBQUFBLDJDQUFPLE9BQUtDLHFCQUFMLENBQTJCYixHQUEzQixDQUFQO0FBQUEsaUNBQWpELEVBQXlGYyxLQUF6RixDQUErRixhQUFLO0FBQ2hHLDJDQUFLQyxLQUFMLENBQVdDLENBQVg7QUFDSCxpQ0FGRDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrR0FJcUJBLEM7Ozs7Ozs7dUNBQ08sMEJBQWNKLElBQWQsQ0FBbUIsZUFBTztBQUNsRCwyQ0FBT1osSUFBSWlCLGFBQUosQ0FBa0IsQ0FBbEIsQ0FBUDtBQUNILGlDQUYyQixDOzs7QUFBdEJOLDZDOztBQUdOLCtDQUFLSixXQUFMLENBQWlCLEVBQUVKLE9BQU8sS0FBVCxFQUFnQkssTUFBTSxJQUF0QixFQUFqQjtBQUNBLHFDQUFLQyxXQUFMLENBQWlCRSxhQUFqQjs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dEQUUrQjtBQUFBLGdCQUFaTyxHQUFZLHVFQUFOLElBQU07O0FBQy9CLGdCQUFNbEIsTUFBTW1CLEtBQUtDLEtBQUwsQ0FBV0YsR0FBWCxDQUFaO0FBQ0EsZ0JBQU03QixTQUFTVyxJQUFJQSxHQUFKLElBQVdBLElBQUlBLEdBQUosQ0FBUVgsTUFBbEM7QUFDQSxpQkFBS0EsTUFBTCxHQUFjZ0MsTUFBTUMsT0FBTixDQUFjakMsTUFBZCxJQUF3QkEsTUFBeEIsR0FBaUNBLFNBQVMsQ0FBQ0EsTUFBRCxDQUFULEdBQW9CLEVBQW5FO0FBQ0EsaUJBQUtELFVBQUwsR0FBa0IsSUFBbEI7QUFDQSwyQkFBS21DLFdBQUw7QUFDQSxpQkFBS3hCLE1BQUw7QUFDSDs7OzhCQUNLaUIsQyxFQUFHO0FBQ0wsMkJBQUtPLFdBQUw7QUFDQSwyQkFBS3JCLFNBQUwsQ0FBZTtBQUNYQyx1QkFBTyxJQURJO0FBRVhDLHlCQUFTWSxFQUFFUTtBQUZBLGFBQWY7QUFJSDs7OztFQTdFOEIsZUFBS0MsSTs7a0JBQW5CNUMsSyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gICAgaW1wb3J0IHsgdXBsb2FkRmlsZSwgY2hvb3NlSW1hZ2UgfSBmcm9tICdAL21vZHVsZXMvY29tbW9uL2ZldGNoJ1xuXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgICAgICBjb25maWcgPSB7XG4gICAgICAgICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5omr5LiA5omrJ1xuICAgICAgICB9XG4gICAgICAgIGRhdGEgPSB7XG4gICAgICAgICAgICBjY3R4OiB7XG4gICAgICAgICAgICAgICAgdGFrZVBob3RvICgpIHt9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaW1hZ2U6ICcnLFxuICAgICAgICAgICAgc2hvd1Jlc3VsdDogZmFsc2UsXG4gICAgICAgICAgICByZXN1bHQ6IFtdXG4gICAgICAgIH1cbiAgICAgICAgY29tcHV0ZWQgPSB7XG4gICAgICAgICAgICBmb3JtYXRSZXN1bHQgKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnJlc3VsdC5tYXAoaSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzY29yZTogcGFyc2VJbnQoaS5zY29yZSAqIDEwMCkgKyAnJScsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBpLm5hbWVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYXN5bmMgb25SZWFkeSAocmVzKSB7XG4gICAgICAgICAgICAvLyBhd2FpdCB0aGlzLiRwYXJlbnQuZ2V0VXNlckluZm8oKVxuICAgICAgICAgICAgaWYgKHdlcHkuY3JlYXRlQ2FtZXJhQ29udGV4dCgpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jY3R4ID0gd2VweS5jcmVhdGVDYW1lcmFDb250ZXh0KCdteUNhbWVyYScpXG4gICAgICAgICAgICB9IGVsc2UgeyAvLyDlpoLmnpzluIzmnJvnlKjmiLflnKjmnIDmlrDniYjmnKznmoTlrqLmiLfnq6/kuIrkvZPpqozmgqjnmoTlsI/nqIvluo/vvIzlj6/ku6Xov5nmoLflrZDmj5DnpLpcbiAgICAgICAgICAgICAgICB3ZXB5LnNob3dNb2RhbCh7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5o+Q56S6JyxcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogJ+W9k+WJjeW+ruS/oeeJiOacrOi/h+S9ju+8jOaXoOazleS9v+eUqOivpeWKn+iDve+8jOivt+WNh+e6p+WIsOacgOaWsOW+ruS/oeeJiOacrOWQjumHjeivleOAgidcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIG1ldGhvZHMgPSB7XG4gICAgICAgICAgICBjYW5jbGUgKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaW1hZ2UgPSAnJ1xuICAgICAgICAgICAgICAgIHRoaXMucmVzdWx0ID0gW11cbiAgICAgICAgICAgICAgICB0aGlzLnNob3dSZXN1bHQgPSBmYWxzZVxuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBhc3luYyB0YWtlUGhvdG8oKSB7XG4gICAgICAgICAgICB0aGlzLmNjdHgudGFrZVBob3RvKHtcbiAgICAgICAgICAgICAgICBxdWFsaXR5OiAnbG93JyxcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiAocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHdlcHkuc2hvd0xvYWRpbmcoeyB0aXRsZTogJ+ivhuWIq+S4rScsIG1hc2s6IHRydWUgfSlcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGVja3RQbGFudChyZXMudGVtcEltYWdlUGF0aClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIGFzeW5jIGNoZWNrdFBsYW50IChpbWFnZUZpbGVQYXRoKSB7XG4gICAgICAgICAgICB0aGlzLmltYWdlID0gaW1hZ2VGaWxlUGF0aFxuICAgICAgICAgICAgdXBsb2FkRmlsZSgnL3VzZXIvbGVhZlNuYXAnLCBpbWFnZUZpbGVQYXRoKS50aGVuKHJlcyA9PiB0aGlzLnBhcnNlTGVhZlNuYXBSZXNwb25zZShyZXMpKS5jYXRjaChlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmVycm9yKGUpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIGFzeW5jIGdldEltYWdlRnJvbUFsYnVtIChlKSB7XG4gICAgICAgICAgICBjb25zdCBpbWFnZUZpbGVQYXRoID0gYXdhaXQgY2hvb3NlSW1hZ2UoKS50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy50ZW1wRmlsZVBhdGhzWzBdXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgd2VweS5zaG93TG9hZGluZyh7IHRpdGxlOiAn6K+G5Yir5LitJywgbWFzazogdHJ1ZSB9KVxuICAgICAgICAgICAgdGhpcy5jaGVja3RQbGFudChpbWFnZUZpbGVQYXRoKVxuICAgICAgICB9XG4gICAgICAgIHBhcnNlTGVhZlNuYXBSZXNwb25zZSAocnNwID0gJ3t9Jykge1xuICAgICAgICAgICAgY29uc3QgcmVzID0gSlNPTi5wYXJzZShyc3ApXG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSByZXMucmVzICYmIHJlcy5yZXMucmVzdWx0XG4gICAgICAgICAgICB0aGlzLnJlc3VsdCA9IEFycmF5LmlzQXJyYXkocmVzdWx0KSA/IHJlc3VsdCA6IHJlc3VsdCA/IFtyZXN1bHRdIDogW11cbiAgICAgICAgICAgIHRoaXMuc2hvd1Jlc3VsdCA9IHRydWVcbiAgICAgICAgICAgIHdlcHkuaGlkZUxvYWRpbmcoKVxuICAgICAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgICB9XG4gICAgICAgIGVycm9yKGUpIHtcbiAgICAgICAgICAgIHdlcHkuaGlkZUxvYWRpbmcoKVxuICAgICAgICAgICAgd2VweS5zaG93TW9kYWwoe1xuICAgICAgICAgICAgICAgIHRpdGxlOiAn5o+Q56S6JyxcbiAgICAgICAgICAgICAgICBjb250ZW50OiBlLmRldGFpbFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cbiJdfQ==