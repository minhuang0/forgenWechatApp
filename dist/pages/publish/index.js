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
            navigationBarTitleText: '发表朋友圈'
        }, _this.data = {
            tips: {
                show: false,
                text: ''
            },
            content: '',
            files: [],
            images: []
        }, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Index, [{
        key: 'chooseMomentImage',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e) {
                var _this2 = this;

                var imageFilePath;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return (0, _fetch.chooseImage)().then(function (res) {
                                    return res.tempFilePaths[0];
                                });

                            case 2:
                                imageFilePath = _context.sent;

                                (0, _fetch.uploadFile)('/circles/img/upload', imageFilePath).then(function (imageUrl) {
                                    _this2.files = _this2.files.concat(imageFilePath);
                                    _this2.images = _this2.images.concat(imageUrl);
                                    _this2.$apply();
                                });

                            case 4:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function chooseMomentImage(_x) {
                return _ref2.apply(this, arguments);
            }

            return chooseMomentImage;
        }()
    }, {
        key: 'bindCommentInput',
        value: function bindCommentInput(e) {
            this.content = e.detail.value;
        }
    }, {
        key: 'previewImage',
        value: function previewImage(e) {
            _wepy2.default.previewImage({
                current: e.currentTarget.id, // 当前显示图片的http链接
                urls: this.files // 需要预览的图片http链接列表
            });
        }
    }, {
        key: 'confirmMoment',
        value: function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                var rsp;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                if (!this.validateData()) {
                                    _context2.next = 4;
                                    break;
                                }

                                _context2.next = 3;
                                return (0, _fetch.postFetch)('/circles', {
                                    data: {
                                        content: this.content,
                                        circle_imgs: this.images
                                    }
                                });

                            case 3:
                                rsp = _context2.sent;

                            case 4:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function confirmMoment() {
                return _ref3.apply(this, arguments);
            }

            return confirmMoment;
        }()
    }, {
        key: 'showTopTips',
        value: function showTopTips() {
            var _this3 = this;

            this.tips.show = true;
            setTimeout(function () {
                _this3.tips.show = false;
                _this3.$apply();
            }, 1000);
        }
    }, {
        key: 'validateData',
        value: function validateData() {
            if (this.content === '' && this.images.length === 0) {
                this.tips.text = '请上传图片和正文';
                this.showTopTips();
                return false;
            }
            return true;
        }
    }, {
        key: 'onLoad',
        value: function onLoad() {}
    }]);

    return Index;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/publish/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJ0aXBzIiwic2hvdyIsInRleHQiLCJjb250ZW50IiwiZmlsZXMiLCJpbWFnZXMiLCJtZXRob2RzIiwiZSIsInRoZW4iLCJyZXMiLCJ0ZW1wRmlsZVBhdGhzIiwiaW1hZ2VGaWxlUGF0aCIsImNvbmNhdCIsImltYWdlVXJsIiwiJGFwcGx5IiwiZGV0YWlsIiwidmFsdWUiLCJwcmV2aWV3SW1hZ2UiLCJjdXJyZW50IiwiY3VycmVudFRhcmdldCIsImlkIiwidXJscyIsInZhbGlkYXRlRGF0YSIsImNpcmNsZV9pbWdzIiwicnNwIiwic2V0VGltZW91dCIsImxlbmd0aCIsInNob3dUb3BUaXBzIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0k7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7Ozt3TEFDakJDLE0sR0FBUztBQUNMQyxvQ0FBd0I7QUFEbkIsUyxRQUlUQyxJLEdBQU87QUFDSEMsa0JBQU07QUFDRkMsc0JBQU0sS0FESjtBQUVGQyxzQkFBTTtBQUZKLGFBREg7QUFLSEMscUJBQVMsRUFMTjtBQU1IQyxtQkFBTyxFQU5KO0FBT0hDLG9CQUFRO0FBUEwsUyxRQVVQQyxPLEdBQVUsRTs7Ozs7O2lHQUVjQyxDOzs7Ozs7Ozs7dUNBQ1EsMEJBQWNDLElBQWQsQ0FBbUIsZUFBTztBQUNsRCwyQ0FBT0MsSUFBSUMsYUFBSixDQUFrQixDQUFsQixDQUFQO0FBQ0gsaUNBRjJCLEM7OztBQUF0QkMsNkM7O0FBR04sdURBQVcscUJBQVgsRUFBa0NBLGFBQWxDLEVBQWlESCxJQUFqRCxDQUFzRCxvQkFBWTtBQUM5RCwyQ0FBS0osS0FBTCxHQUFhLE9BQUtBLEtBQUwsQ0FBV1EsTUFBWCxDQUFrQkQsYUFBbEIsQ0FBYjtBQUNBLDJDQUFLTixNQUFMLEdBQWMsT0FBS0EsTUFBTCxDQUFZTyxNQUFaLENBQW1CQyxRQUFuQixDQUFkO0FBQ0EsMkNBQUtDLE1BQUw7QUFDSCxpQ0FKRDs7Ozs7Ozs7Ozs7Ozs7Ozs7O3lDQU1jUCxDLEVBQUc7QUFDakIsaUJBQUtKLE9BQUwsR0FBZUksRUFBRVEsTUFBRixDQUFTQyxLQUF4QjtBQUNIOzs7cUNBRVlULEMsRUFBRztBQUNaLDJCQUFLVSxZQUFMLENBQWtCO0FBQ2RDLHlCQUFTWCxFQUFFWSxhQUFGLENBQWdCQyxFQURYLEVBQ2U7QUFDN0JDLHNCQUFNLEtBQUtqQixLQUZHLENBRUc7QUFGSCxhQUFsQjtBQUlIOzs7Ozs7Ozs7O3FDQUdPLEtBQUtrQixZQUFMLEU7Ozs7Ozt1Q0FDa0Isc0JBQVUsVUFBVixFQUFzQjtBQUNwQ3ZCLDBDQUFNO0FBQ0ZJLGlEQUFTLEtBQUtBLE9BRFo7QUFFRm9CLHFEQUFhLEtBQUtsQjtBQUZoQjtBQUQ4QixpQ0FBdEIsQzs7O0FBQVptQixtQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O3NDQVFBO0FBQUE7O0FBQ1YsaUJBQUt4QixJQUFMLENBQVVDLElBQVYsR0FBaUIsSUFBakI7QUFDQXdCLHVCQUFXLFlBQU07QUFDYix1QkFBS3pCLElBQUwsQ0FBVUMsSUFBVixHQUFpQixLQUFqQjtBQUNBLHVCQUFLYSxNQUFMO0FBQ0gsYUFIRCxFQUdHLElBSEg7QUFJSDs7O3VDQUNlO0FBQ1osZ0JBQUksS0FBS1gsT0FBTCxLQUFpQixFQUFqQixJQUF1QixLQUFLRSxNQUFMLENBQVlxQixNQUFaLEtBQXVCLENBQWxELEVBQXFEO0FBQ2pELHFCQUFLMUIsSUFBTCxDQUFVRSxJQUFWLEdBQWlCLFVBQWpCO0FBQ0EscUJBQUt5QixXQUFMO0FBQ0EsdUJBQU8sS0FBUDtBQUNIO0FBQ0QsbUJBQU8sSUFBUDtBQUNIOzs7aUNBQ1EsQ0FDUjs7OztFQWhFOEIsZUFBS0MsSTs7a0JBQW5CaEMsSyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gICAgaW1wb3J0IHsgdXBsb2FkRmlsZSwgY2hvb3NlSW1hZ2UsIHBvc3RGZXRjaCB9IGZyb20gJ0AvbW9kdWxlcy9jb21tb24vZmV0Y2gnXG5cbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgICAgIGNvbmZpZyA9IHtcbiAgICAgICAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICflj5HooajmnIvlj4vlnIgnXG4gICAgICAgIH1cblxuICAgICAgICBkYXRhID0ge1xuICAgICAgICAgICAgdGlwczoge1xuICAgICAgICAgICAgICAgIHNob3c6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHRleHQ6ICcnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29udGVudDogJycsXG4gICAgICAgICAgICBmaWxlczogW10sXG4gICAgICAgICAgICBpbWFnZXM6IFtdXG4gICAgICAgIH1cblxuICAgICAgICBtZXRob2RzID0ge1xuICAgICAgICB9XG4gICAgICAgIGFzeW5jIGNob29zZU1vbWVudEltYWdlKGUpIHtcbiAgICAgICAgICAgIGNvbnN0IGltYWdlRmlsZVBhdGggPSBhd2FpdCBjaG9vc2VJbWFnZSgpLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnRlbXBGaWxlUGF0aHNbMF1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB1cGxvYWRGaWxlKCcvY2lyY2xlcy9pbWcvdXBsb2FkJywgaW1hZ2VGaWxlUGF0aCkudGhlbihpbWFnZVVybCA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5maWxlcyA9IHRoaXMuZmlsZXMuY29uY2F0KGltYWdlRmlsZVBhdGgpXG4gICAgICAgICAgICAgICAgdGhpcy5pbWFnZXMgPSB0aGlzLmltYWdlcy5jb25jYXQoaW1hZ2VVcmwpXG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBiaW5kQ29tbWVudElucHV0IChlKSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRlbnQgPSBlLmRldGFpbC52YWx1ZVxuICAgICAgICB9XG5cbiAgICAgICAgcHJldmlld0ltYWdlKGUpIHtcbiAgICAgICAgICAgIHdlcHkucHJldmlld0ltYWdlKHtcbiAgICAgICAgICAgICAgICBjdXJyZW50OiBlLmN1cnJlbnRUYXJnZXQuaWQsIC8vIOW9k+WJjeaYvuekuuWbvueJh+eahGh0dHDpk77mjqVcbiAgICAgICAgICAgICAgICB1cmxzOiB0aGlzLmZpbGVzIC8vIOmcgOimgemihOiniOeahOWbvueJh2h0dHDpk77mjqXliJfooahcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICBhc3luYyBjb25maXJtTW9tZW50ICgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnZhbGlkYXRlRGF0YSgpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcnNwID0gYXdhaXQgcG9zdEZldGNoKCcvY2lyY2xlcycsIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogdGhpcy5jb250ZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgY2lyY2xlX2ltZ3M6IHRoaXMuaW1hZ2VzXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHNob3dUb3BUaXBzKCkge1xuICAgICAgICAgICAgdGhpcy50aXBzLnNob3cgPSB0cnVlXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnRpcHMuc2hvdyA9IGZhbHNlXG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgICAgICAgfSwgMTAwMClcbiAgICAgICAgfVxuICAgICAgICB2YWxpZGF0ZURhdGEgKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuY29udGVudCA9PT0gJycgJiYgdGhpcy5pbWFnZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50aXBzLnRleHQgPSAn6K+35LiK5Lyg5Zu+54mH5ZKM5q2j5paHJ1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd1RvcFRpcHMoKVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgICBvbkxvYWQoKSB7XG4gICAgICAgIH1cbiAgICB9XG4iXX0=