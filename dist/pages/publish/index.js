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
            _wepy2.default.showModal({
                title: '提示',
                content: e.detail
            });
        }
    }]);

    return Index;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/publish/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJjY3R4IiwidGFrZVBob3RvIiwiaW1hZ2UiLCJzaG93UmVzdWx0IiwicmVzdWx0IiwiY29tcHV0ZWQiLCJmb3JtYXRSZXN1bHQiLCJtYXAiLCJzY29yZSIsInBhcnNlSW50IiwiaSIsIm5hbWUiLCJtZXRob2RzIiwiY2FuY2xlIiwiJGFwcGx5IiwicmVzIiwiY3JlYXRlQ2FtZXJhQ29udGV4dCIsInNob3dNb2RhbCIsInRpdGxlIiwiY29udGVudCIsInF1YWxpdHkiLCJzdWNjZXNzIiwic2hvd0xvYWRpbmciLCJtYXNrIiwiY2hlY2t0UGxhbnQiLCJ0ZW1wSW1hZ2VQYXRoIiwiaW1hZ2VGaWxlUGF0aCIsInRoZW4iLCJwYXJzZUxlYWZTbmFwUmVzcG9uc2UiLCJlIiwidGVtcEZpbGVQYXRocyIsInJzcCIsIkpTT04iLCJwYXJzZSIsIkFycmF5IiwiaXNBcnJheSIsImhpZGVMb2FkaW5nIiwiZGV0YWlsIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0k7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7Ozt3TEFDakJDLE0sR0FBUztBQUNMQyxvQ0FBd0I7QUFEbkIsUyxRQUdUQyxJLEdBQU87QUFDSEMsa0JBQU07QUFDRkMseUJBREUsdUJBQ1csQ0FBRTtBQURiLGFBREg7QUFJSEMsbUJBQU8sRUFKSjtBQUtIQyx3QkFBWSxLQUxUO0FBTUhDLG9CQUFRO0FBTkwsUyxRQVFQQyxRLEdBQVc7QUFDUEMsd0JBRE8sMEJBQ1M7QUFDWix1QkFBTyxLQUFLRixNQUFMLENBQVlHLEdBQVosQ0FBZ0IsYUFBSztBQUN4QiwyQkFBTztBQUNIQywrQkFBT0MsU0FBU0MsRUFBRUYsS0FBRixHQUFVLEdBQW5CLElBQTBCLEdBRDlCO0FBRUhHLDhCQUFNRCxFQUFFQztBQUZMLHFCQUFQO0FBSUgsaUJBTE0sQ0FBUDtBQU1IO0FBUk0sUyxRQXFCWEMsTyxHQUFVO0FBQ05DLGtCQURNLG9CQUNJO0FBQ04scUJBQUtYLEtBQUwsR0FBYSxFQUFiO0FBQ0EscUJBQUtFLE1BQUwsR0FBYyxFQUFkO0FBQ0EscUJBQUtELFVBQUwsR0FBa0IsS0FBbEI7QUFDQSxxQkFBS1csTUFBTDtBQUNIO0FBTkssUzs7Ozs7O2lHQVhLQyxHOzs7OztBQUNYO0FBQ0Esb0NBQUksZUFBS0MsbUJBQUwsRUFBSixFQUFnQztBQUM1Qix5Q0FBS2hCLElBQUwsR0FBWSxlQUFLZ0IsbUJBQUwsQ0FBeUIsVUFBekIsQ0FBWjtBQUNILGlDQUZELE1BRU87QUFBRTtBQUNMLG1EQUFLQyxTQUFMLENBQWU7QUFDWEMsK0NBQU8sSUFESTtBQUVYQyxpREFBUztBQUZFLHFDQUFmO0FBSUg7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBV0QscUNBQUtuQixJQUFMLENBQVVDLFNBQVYsQ0FBb0I7QUFDaEJtQiw2Q0FBUyxLQURPO0FBRWhCQyw2Q0FBUyxpQkFBQ04sR0FBRCxFQUFTO0FBQ2QsdURBQUtPLFdBQUwsQ0FBaUIsRUFBRUosT0FBTyxLQUFULEVBQWdCSyxNQUFNLElBQXRCLEVBQWpCO0FBQ0EsK0NBQUtDLFdBQUwsQ0FBaUJULElBQUlVLGFBQXJCO0FBQ0g7QUFMZSxpQ0FBcEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0dBUWVDLGE7Ozs7Ozs7QUFDZixxQ0FBS3hCLEtBQUwsR0FBYXdCLGFBQWI7QUFDQSx1REFBVyxnQkFBWCxFQUE2QkEsYUFBN0IsRUFBNENDLElBQTVDLENBQWlEO0FBQUEsMkNBQU8sT0FBS0MscUJBQUwsQ0FBMkJiLEdBQTNCLENBQVA7QUFBQSxpQ0FBakQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0dBRXFCYyxDOzs7Ozs7O3VDQUNPLDBCQUFjRixJQUFkLENBQW1CLGVBQU87QUFDbEQsMkNBQU9aLElBQUllLGFBQUosQ0FBa0IsQ0FBbEIsQ0FBUDtBQUNILGlDQUYyQixDOzs7QUFBdEJKLDZDOztBQUdOLCtDQUFLSixXQUFMLENBQWlCLEVBQUVKLE9BQU8sS0FBVCxFQUFnQkssTUFBTSxJQUF0QixFQUFqQjtBQUNBLHFDQUFLQyxXQUFMLENBQWlCRSxhQUFqQjs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dEQUUrQjtBQUFBLGdCQUFaSyxHQUFZLHVFQUFOLElBQU07O0FBQy9CLGdCQUFNaEIsTUFBTWlCLEtBQUtDLEtBQUwsQ0FBV0YsR0FBWCxDQUFaO0FBQ0EsZ0JBQU0zQixTQUFTVyxJQUFJQSxHQUFKLElBQVdBLElBQUlBLEdBQUosQ0FBUVgsTUFBbEM7QUFDQSxpQkFBS0EsTUFBTCxHQUFjOEIsTUFBTUMsT0FBTixDQUFjL0IsTUFBZCxJQUF3QkEsTUFBeEIsR0FBaUNBLFNBQVMsQ0FBQ0EsTUFBRCxDQUFULEdBQW9CLEVBQW5FO0FBQ0EsaUJBQUtELFVBQUwsR0FBa0IsSUFBbEI7QUFDQSwyQkFBS2lDLFdBQUw7QUFDQSxpQkFBS3RCLE1BQUw7QUFDSDs7OzhCQUNLZSxDLEVBQUc7QUFDTCwyQkFBS1osU0FBTCxDQUFlO0FBQ1hDLHVCQUFPLElBREk7QUFFWEMseUJBQVNVLEVBQUVRO0FBRkEsYUFBZjtBQUlIOzs7O0VBMUU4QixlQUFLQyxJOztrQkFBbkIxQyxLIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgICBpbXBvcnQgeyB1cGxvYWRGaWxlLCBjaG9vc2VJbWFnZSB9IGZyb20gJ0AvbW9kdWxlcy9jb21tb24vZmV0Y2gnXG5cbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgICAgIGNvbmZpZyA9IHtcbiAgICAgICAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfmiavkuIDmiasnXG4gICAgICAgIH1cbiAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICAgIGNjdHg6IHtcbiAgICAgICAgICAgICAgICB0YWtlUGhvdG8gKCkge31cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpbWFnZTogJycsXG4gICAgICAgICAgICBzaG93UmVzdWx0OiBmYWxzZSxcbiAgICAgICAgICAgIHJlc3VsdDogW11cbiAgICAgICAgfVxuICAgICAgICBjb21wdXRlZCA9IHtcbiAgICAgICAgICAgIGZvcm1hdFJlc3VsdCAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVzdWx0Lm1hcChpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjb3JlOiBwYXJzZUludChpLnNjb3JlICogMTAwKSArICclJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGkubmFtZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBhc3luYyBvblJlYWR5IChyZXMpIHtcbiAgICAgICAgICAgIC8vIGF3YWl0IHRoaXMuJHBhcmVudC5nZXRVc2VySW5mbygpXG4gICAgICAgICAgICBpZiAod2VweS5jcmVhdGVDYW1lcmFDb250ZXh0KCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNjdHggPSB3ZXB5LmNyZWF0ZUNhbWVyYUNvbnRleHQoJ215Q2FtZXJhJylcbiAgICAgICAgICAgIH0gZWxzZSB7IC8vIOWmguaenOW4jOacm+eUqOaIt+WcqOacgOaWsOeJiOacrOeahOWuouaIt+err+S4iuS9k+mqjOaCqOeahOWwj+eoi+W6j++8jOWPr+S7pei/meagt+WtkOaPkOekulxuICAgICAgICAgICAgICAgIHdlcHkuc2hvd01vZGFsKHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfmj5DnpLonLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAn5b2T5YmN5b6u5L+h54mI5pys6L+H5L2O77yM5peg5rOV5L2/55So6K+l5Yqf6IO977yM6K+35Y2H57qn5Yiw5pyA5paw5b6u5L+h54mI5pys5ZCO6YeN6K+V44CCJ1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbWV0aG9kcyA9IHtcbiAgICAgICAgICAgIGNhbmNsZSAoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbWFnZSA9ICcnXG4gICAgICAgICAgICAgICAgdGhpcy5yZXN1bHQgPSBbXVxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd1Jlc3VsdCA9IGZhbHNlXG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGFzeW5jIHRha2VQaG90bygpIHtcbiAgICAgICAgICAgIHRoaXMuY2N0eC50YWtlUGhvdG8oe1xuICAgICAgICAgICAgICAgIHF1YWxpdHk6ICdsb3cnLFxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgd2VweS5zaG93TG9hZGluZyh7IHRpdGxlOiAn6K+G5Yir5LitJywgbWFzazogdHJ1ZSB9KVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoZWNrdFBsYW50KHJlcy50ZW1wSW1hZ2VQYXRoKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgYXN5bmMgY2hlY2t0UGxhbnQgKGltYWdlRmlsZVBhdGgpIHtcbiAgICAgICAgICAgIHRoaXMuaW1hZ2UgPSBpbWFnZUZpbGVQYXRoXG4gICAgICAgICAgICB1cGxvYWRGaWxlKCcvdXNlci9sZWFmU25hcCcsIGltYWdlRmlsZVBhdGgpLnRoZW4ocmVzID0+IHRoaXMucGFyc2VMZWFmU25hcFJlc3BvbnNlKHJlcykpXG4gICAgICAgIH1cbiAgICAgICAgYXN5bmMgZ2V0SW1hZ2VGcm9tQWxidW0gKGUpIHtcbiAgICAgICAgICAgIGNvbnN0IGltYWdlRmlsZVBhdGggPSBhd2FpdCBjaG9vc2VJbWFnZSgpLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnRlbXBGaWxlUGF0aHNbMF1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB3ZXB5LnNob3dMb2FkaW5nKHsgdGl0bGU6ICfor4bliKvkuK0nLCBtYXNrOiB0cnVlIH0pXG4gICAgICAgICAgICB0aGlzLmNoZWNrdFBsYW50KGltYWdlRmlsZVBhdGgpXG4gICAgICAgIH1cbiAgICAgICAgcGFyc2VMZWFmU25hcFJlc3BvbnNlIChyc3AgPSAne30nKSB7XG4gICAgICAgICAgICBjb25zdCByZXMgPSBKU09OLnBhcnNlKHJzcClcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHJlcy5yZXMgJiYgcmVzLnJlcy5yZXN1bHRcbiAgICAgICAgICAgIHRoaXMucmVzdWx0ID0gQXJyYXkuaXNBcnJheShyZXN1bHQpID8gcmVzdWx0IDogcmVzdWx0ID8gW3Jlc3VsdF0gOiBbXVxuICAgICAgICAgICAgdGhpcy5zaG93UmVzdWx0ID0gdHJ1ZVxuICAgICAgICAgICAgd2VweS5oaWRlTG9hZGluZygpXG4gICAgICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICAgIH1cbiAgICAgICAgZXJyb3IoZSkge1xuICAgICAgICAgICAgd2VweS5zaG93TW9kYWwoe1xuICAgICAgICAgICAgICAgIHRpdGxlOiAn5o+Q56S6JyxcbiAgICAgICAgICAgICAgICBjb250ZW50OiBlLmRldGFpbFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cbiJdfQ==