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
                                    console.log(imageUrl);
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
            console.log(e.detail.value);
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
                                    _context2.next = 5;
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

                                console.log(rsp);

                            case 5:
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJ0aXBzIiwic2hvdyIsInRleHQiLCJjb250ZW50IiwiZmlsZXMiLCJpbWFnZXMiLCJtZXRob2RzIiwiZSIsInRoZW4iLCJyZXMiLCJ0ZW1wRmlsZVBhdGhzIiwiaW1hZ2VGaWxlUGF0aCIsImNvbnNvbGUiLCJsb2ciLCJpbWFnZVVybCIsImNvbmNhdCIsIiRhcHBseSIsImRldGFpbCIsInZhbHVlIiwicHJldmlld0ltYWdlIiwiY3VycmVudCIsImN1cnJlbnRUYXJnZXQiLCJpZCIsInVybHMiLCJ2YWxpZGF0ZURhdGEiLCJjaXJjbGVfaW1ncyIsInJzcCIsInNldFRpbWVvdXQiLCJsZW5ndGgiLCJzaG93VG9wVGlwcyIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNJOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7d0xBQ2pCQyxNLEdBQVM7QUFDTEMsb0NBQXdCO0FBRG5CLFMsUUFJVEMsSSxHQUFPO0FBQ0hDLGtCQUFNO0FBQ0ZDLHNCQUFNLEtBREo7QUFFRkMsc0JBQU07QUFGSixhQURIO0FBS0hDLHFCQUFTLEVBTE47QUFNSEMsbUJBQU8sRUFOSjtBQU9IQyxvQkFBUTtBQVBMLFMsUUFVUEMsTyxHQUFVLEU7Ozs7OztpR0FFY0MsQzs7Ozs7Ozs7O3VDQUNRLDBCQUFjQyxJQUFkLENBQW1CLGVBQU87QUFDbEQsMkNBQU9DLElBQUlDLGFBQUosQ0FBa0IsQ0FBbEIsQ0FBUDtBQUNILGlDQUYyQixDOzs7QUFBdEJDLDZDOztBQUdOLHVEQUFXLHFCQUFYLEVBQWtDQSxhQUFsQyxFQUFpREgsSUFBakQsQ0FBc0Qsb0JBQVk7QUFDOURJLDRDQUFRQyxHQUFSLENBQVlDLFFBQVo7QUFDQSwyQ0FBS1YsS0FBTCxHQUFhLE9BQUtBLEtBQUwsQ0FBV1csTUFBWCxDQUFrQkosYUFBbEIsQ0FBYjtBQUNBLDJDQUFLTixNQUFMLEdBQWMsT0FBS0EsTUFBTCxDQUFZVSxNQUFaLENBQW1CRCxRQUFuQixDQUFkO0FBQ0EsMkNBQUtFLE1BQUw7QUFDSCxpQ0FMRDs7Ozs7Ozs7Ozs7Ozs7Ozs7O3lDQU9jVCxDLEVBQUc7QUFDakJLLG9CQUFRQyxHQUFSLENBQVlOLEVBQUVVLE1BQUYsQ0FBU0MsS0FBckI7QUFDQSxpQkFBS2YsT0FBTCxHQUFlSSxFQUFFVSxNQUFGLENBQVNDLEtBQXhCO0FBQ0g7OztxQ0FFWVgsQyxFQUFHO0FBQ1osMkJBQUtZLFlBQUwsQ0FBa0I7QUFDZEMseUJBQVNiLEVBQUVjLGFBQUYsQ0FBZ0JDLEVBRFgsRUFDZTtBQUM3QkMsc0JBQU0sS0FBS25CLEtBRkcsQ0FFRztBQUZILGFBQWxCO0FBSUg7Ozs7Ozs7Ozs7cUNBR08sS0FBS29CLFlBQUwsRTs7Ozs7O3VDQUNrQixzQkFBVSxVQUFWLEVBQXNCO0FBQ3BDekIsMENBQU07QUFDRkksaURBQVMsS0FBS0EsT0FEWjtBQUVGc0IscURBQWEsS0FBS3BCO0FBRmhCO0FBRDhCLGlDQUF0QixDOzs7QUFBWnFCLG1DOztBQU1OZCx3Q0FBUUMsR0FBUixDQUFZYSxHQUFaOzs7Ozs7Ozs7Ozs7Ozs7Ozs7c0NBR007QUFBQTs7QUFDVixpQkFBSzFCLElBQUwsQ0FBVUMsSUFBVixHQUFpQixJQUFqQjtBQUNBMEIsdUJBQVcsWUFBTTtBQUNiLHVCQUFLM0IsSUFBTCxDQUFVQyxJQUFWLEdBQWlCLEtBQWpCO0FBQ0EsdUJBQUtlLE1BQUw7QUFDSCxhQUhELEVBR0csSUFISDtBQUlIOzs7dUNBQ2U7QUFDWixnQkFBSSxLQUFLYixPQUFMLEtBQWlCLEVBQWpCLElBQXVCLEtBQUtFLE1BQUwsQ0FBWXVCLE1BQVosS0FBdUIsQ0FBbEQsRUFBcUQ7QUFDakQscUJBQUs1QixJQUFMLENBQVVFLElBQVYsR0FBaUIsVUFBakI7QUFDQSxxQkFBSzJCLFdBQUw7QUFDQSx1QkFBTyxLQUFQO0FBQ0g7QUFDRCxtQkFBTyxJQUFQO0FBQ0g7OztpQ0FDUSxDQUNSOzs7O0VBbkU4QixlQUFLQyxJOztrQkFBbkJsQyxLIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgICBpbXBvcnQgeyB1cGxvYWRGaWxlLCBjaG9vc2VJbWFnZSwgIHBvc3RGZXRjaCB9IGZyb20gJ0AvbW9kdWxlcy9jb21tb24vZmV0Y2gnXG5cbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgICAgIGNvbmZpZyA9IHtcbiAgICAgICAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICflj5HooajmnIvlj4vlnIgnXG4gICAgICAgIH1cblxuICAgICAgICBkYXRhID0ge1xuICAgICAgICAgICAgdGlwczoge1xuICAgICAgICAgICAgICAgIHNob3c6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHRleHQ6ICcnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29udGVudDogJycsXG4gICAgICAgICAgICBmaWxlczogW10sXG4gICAgICAgICAgICBpbWFnZXM6IFtdXG4gICAgICAgIH1cblxuICAgICAgICBtZXRob2RzID0ge1xuICAgICAgICB9XG4gICAgICAgIGFzeW5jIGNob29zZU1vbWVudEltYWdlKGUpIHtcbiAgICAgICAgICAgIGNvbnN0IGltYWdlRmlsZVBhdGggPSBhd2FpdCBjaG9vc2VJbWFnZSgpLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnRlbXBGaWxlUGF0aHNbMF1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB1cGxvYWRGaWxlKCcvY2lyY2xlcy9pbWcvdXBsb2FkJywgaW1hZ2VGaWxlUGF0aCkudGhlbihpbWFnZVVybCA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coaW1hZ2VVcmwpXG4gICAgICAgICAgICAgICAgdGhpcy5maWxlcyA9IHRoaXMuZmlsZXMuY29uY2F0KGltYWdlRmlsZVBhdGgpXG4gICAgICAgICAgICAgICAgdGhpcy5pbWFnZXMgPSB0aGlzLmltYWdlcy5jb25jYXQoaW1hZ2VVcmwpXG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBiaW5kQ29tbWVudElucHV0IChlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlLmRldGFpbC52YWx1ZSlcbiAgICAgICAgICAgIHRoaXMuY29udGVudCA9IGUuZGV0YWlsLnZhbHVlXG4gICAgICAgIH1cblxuICAgICAgICBwcmV2aWV3SW1hZ2UoZSkge1xuICAgICAgICAgICAgd2VweS5wcmV2aWV3SW1hZ2Uoe1xuICAgICAgICAgICAgICAgIGN1cnJlbnQ6IGUuY3VycmVudFRhcmdldC5pZCwgLy8g5b2T5YmN5pi+56S65Zu+54mH55qEaHR0cOmTvuaOpVxuICAgICAgICAgICAgICAgIHVybHM6IHRoaXMuZmlsZXMgLy8g6ZyA6KaB6aKE6KeI55qE5Zu+54mHaHR0cOmTvuaOpeWIl+ihqFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIGFzeW5jIGNvbmZpcm1Nb21lbnQgKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMudmFsaWRhdGVEYXRhKCkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCByc3AgPSBhd2FpdCBwb3N0RmV0Y2goJy9jaXJjbGVzJywge1xuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiB0aGlzLmNvbnRlbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICBjaXJjbGVfaW1nczogdGhpcy5pbWFnZXNcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocnNwKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHNob3dUb3BUaXBzKCkge1xuICAgICAgICAgICAgdGhpcy50aXBzLnNob3cgPSB0cnVlXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnRpcHMuc2hvdyA9IGZhbHNlXG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgICAgICAgfSwgMTAwMClcbiAgICAgICAgfVxuICAgICAgICB2YWxpZGF0ZURhdGEgKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuY29udGVudCA9PT0gJycgJiYgdGhpcy5pbWFnZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50aXBzLnRleHQgPSAn6K+35LiK5Lyg5Zu+54mH5ZKM5q2j5paHJ1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd1RvcFRpcHMoKVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgICBvbkxvYWQoKSB7XG4gICAgICAgIH1cbiAgICB9XG4iXX0=