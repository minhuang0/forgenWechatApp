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
                                if (!(this.files.length >= 9)) {
                                    _context.next = 4;
                                    break;
                                }

                                this.tips.text = '最大上传9张图片';
                                this.showTopTips();
                                return _context.abrupt('return');

                            case 4:
                                _context.next = 6;
                                return (0, _fetch.chooseImage)().then(function (res) {
                                    return res.tempFilePaths[0];
                                });

                            case 6:
                                imageFilePath = _context.sent;

                                (0, _fetch.uploadFile)('/circles/img/upload', imageFilePath).then(function (imageUrl) {
                                    _this2.files = _this2.files.concat(imageFilePath);
                                    _this2.images = _this2.images.concat(imageUrl);
                                    _this2.$apply();
                                });

                            case 8:
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
                var self;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                self = this;

                                if (!this.validateData()) {
                                    _context2.next = 4;
                                    break;
                                }

                                _context2.next = 4;
                                return (0, _fetch.postFetch)('/circles', {
                                    data: {
                                        content: this.content,
                                        circle_imgs: this.images
                                    }
                                }).then(function () {
                                    _wepy2.default.showToast({
                                        title: '发表成功',
                                        icon: 'success',
                                        duration: 1000
                                    });
                                    self.resetData();
                                });

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
        key: 'resetData',
        value: function resetData() {
            this.files = [];
            this.content = '';
            this.images = [];
            this.$apply();
        }
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJ0aXBzIiwic2hvdyIsInRleHQiLCJjb250ZW50IiwiZmlsZXMiLCJpbWFnZXMiLCJtZXRob2RzIiwiZSIsImxlbmd0aCIsInNob3dUb3BUaXBzIiwidGhlbiIsInJlcyIsInRlbXBGaWxlUGF0aHMiLCJpbWFnZUZpbGVQYXRoIiwiY29uY2F0IiwiaW1hZ2VVcmwiLCIkYXBwbHkiLCJkZXRhaWwiLCJ2YWx1ZSIsIndlcHkiLCJwcmV2aWV3SW1hZ2UiLCJjdXJyZW50IiwiY3VycmVudFRhcmdldCIsImlkIiwidXJscyIsInNlbGYiLCJ2YWxpZGF0ZURhdGEiLCJjaXJjbGVfaW1ncyIsInNob3dUb2FzdCIsInRpdGxlIiwiaWNvbiIsImR1cmF0aW9uIiwicmVzZXREYXRhIiwic2V0VGltZW91dCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNJOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7d0xBQ2pCQyxNLEdBQVM7QUFDTEMsb0NBQXdCO0FBRG5CLFMsUUFJVEMsSSxHQUFPO0FBQ0hDLGtCQUFNO0FBQ0ZDLHNCQUFNLEtBREo7QUFFRkMsc0JBQU07QUFGSixhQURIO0FBS0hDLHFCQUFTLEVBTE47QUFNSEMsbUJBQU8sRUFOSjtBQU9IQyxvQkFBUTtBQVBMLFMsUUFVUEMsTyxHQUFVLEU7Ozs7OztpR0FFY0MsQzs7Ozs7Ozs7c0NBQ2hCLEtBQUtILEtBQUwsQ0FBV0ksTUFBWCxJQUFxQixDOzs7OztBQUNyQixxQ0FBS1IsSUFBTCxDQUFVRSxJQUFWLEdBQWlCLFVBQWpCO0FBQ0EscUNBQUtPLFdBQUw7Ozs7O3VDQUd3QiwwQkFBY0MsSUFBZCxDQUFtQixlQUFPO0FBQ2xELDJDQUFPQyxJQUFJQyxhQUFKLENBQWtCLENBQWxCLENBQVA7QUFDSCxpQ0FGMkIsQzs7O0FBQXRCQyw2Qzs7QUFHTix1REFBVyxxQkFBWCxFQUFrQ0EsYUFBbEMsRUFBaURILElBQWpELENBQXNELG9CQUFZO0FBQzlELDJDQUFLTixLQUFMLEdBQWEsT0FBS0EsS0FBTCxDQUFXVSxNQUFYLENBQWtCRCxhQUFsQixDQUFiO0FBQ0EsMkNBQUtSLE1BQUwsR0FBYyxPQUFLQSxNQUFMLENBQVlTLE1BQVosQ0FBbUJDLFFBQW5CLENBQWQ7QUFDQSwyQ0FBS0MsTUFBTDtBQUNILGlDQUpEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7eUNBTWNULEMsRUFBRztBQUNqQixpQkFBS0osT0FBTCxHQUFlSSxFQUFFVSxNQUFGLENBQVNDLEtBQXhCO0FBQ0g7OztxQ0FFWVgsQyxFQUFHO0FBQ1pZLDJCQUFLQyxZQUFMLENBQWtCO0FBQ2RDLHlCQUFTZCxFQUFFZSxhQUFGLENBQWdCQyxFQURYLEVBQ2U7QUFDN0JDLHNCQUFNLEtBQUtwQixLQUZHLENBRUc7QUFGSCxhQUFsQjtBQUlIOzs7Ozs7Ozs7O0FBR1NxQixvQyxHQUFPLEk7O3FDQUNULEtBQUtDLFlBQUwsRTs7Ozs7O3VDQUNNLHNCQUFVLFVBQVYsRUFBc0I7QUFDeEIzQiwwQ0FBTTtBQUNGSSxpREFBUyxLQUFLQSxPQURaO0FBRUZ3QixxREFBYSxLQUFLdEI7QUFGaEI7QUFEa0IsaUNBQXRCLEVBS0hLLElBTEcsQ0FLRSxZQUFNO0FBQ1ZTLG1EQUFLUyxTQUFMLENBQWU7QUFDWEMsK0NBQU8sTUFESTtBQUVYQyw4Q0FBTSxTQUZLO0FBR1hDLGtEQUFVO0FBSEMscUNBQWY7QUFLQU4seUNBQUtPLFNBQUw7QUFDSCxpQ0FaSyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7b0NBZ0JEO0FBQ1QsaUJBQUs1QixLQUFMLEdBQWEsRUFBYjtBQUNBLGlCQUFLRCxPQUFMLEdBQWUsRUFBZjtBQUNBLGlCQUFLRSxNQUFMLEdBQWMsRUFBZDtBQUNBLGlCQUFLVyxNQUFMO0FBQ0g7OztzQ0FDYTtBQUFBOztBQUNWLGlCQUFLaEIsSUFBTCxDQUFVQyxJQUFWLEdBQWlCLElBQWpCO0FBQ0FnQyx1QkFBVyxZQUFNO0FBQ2IsdUJBQUtqQyxJQUFMLENBQVVDLElBQVYsR0FBaUIsS0FBakI7QUFDQSx1QkFBS2UsTUFBTDtBQUNILGFBSEQsRUFHRyxJQUhIO0FBSUg7Ozt1Q0FDZTtBQUNaLGdCQUFJLEtBQUtiLE9BQUwsS0FBaUIsRUFBakIsSUFBdUIsS0FBS0UsTUFBTCxDQUFZRyxNQUFaLEtBQXVCLENBQWxELEVBQXFEO0FBQ2pELHFCQUFLUixJQUFMLENBQVVFLElBQVYsR0FBaUIsVUFBakI7QUFDQSxxQkFBS08sV0FBTDtBQUNBLHVCQUFPLEtBQVA7QUFDSDtBQUNELG1CQUFPLElBQVA7QUFDSDs7O2lDQUNRLENBQ1I7Ozs7RUFwRjhCVSxlQUFLZSxJOztrQkFBbkJ0QyxLIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgICBpbXBvcnQgeyB1cGxvYWRGaWxlLCBjaG9vc2VJbWFnZSwgcG9zdEZldGNoIH0gZnJvbSAnQC9tb2R1bGVzL2NvbW1vbi9mZXRjaCdcblxuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICAgICAgY29uZmlnID0ge1xuICAgICAgICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+WPkeihqOaci+WPi+WciCdcbiAgICAgICAgfVxuXG4gICAgICAgIGRhdGEgPSB7XG4gICAgICAgICAgICB0aXBzOiB7XG4gICAgICAgICAgICAgICAgc2hvdzogZmFsc2UsXG4gICAgICAgICAgICAgICAgdGV4dDogJydcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb250ZW50OiAnJyxcbiAgICAgICAgICAgIGZpbGVzOiBbXSxcbiAgICAgICAgICAgIGltYWdlczogW11cbiAgICAgICAgfVxuXG4gICAgICAgIG1ldGhvZHMgPSB7XG4gICAgICAgIH1cbiAgICAgICAgYXN5bmMgY2hvb3NlTW9tZW50SW1hZ2UoZSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuZmlsZXMubGVuZ3RoID49IDkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRpcHMudGV4dCA9ICfmnIDlpKfkuIrkvKA55byg5Zu+54mHJ1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd1RvcFRpcHMoKVxuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgaW1hZ2VGaWxlUGF0aCA9IGF3YWl0IGNob29zZUltYWdlKCkudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXMudGVtcEZpbGVQYXRoc1swXVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHVwbG9hZEZpbGUoJy9jaXJjbGVzL2ltZy91cGxvYWQnLCBpbWFnZUZpbGVQYXRoKS50aGVuKGltYWdlVXJsID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmZpbGVzID0gdGhpcy5maWxlcy5jb25jYXQoaW1hZ2VGaWxlUGF0aClcbiAgICAgICAgICAgICAgICB0aGlzLmltYWdlcyA9IHRoaXMuaW1hZ2VzLmNvbmNhdChpbWFnZVVybClcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIGJpbmRDb21tZW50SW5wdXQgKGUpIHtcbiAgICAgICAgICAgIHRoaXMuY29udGVudCA9IGUuZGV0YWlsLnZhbHVlXG4gICAgICAgIH1cblxuICAgICAgICBwcmV2aWV3SW1hZ2UoZSkge1xuICAgICAgICAgICAgd2VweS5wcmV2aWV3SW1hZ2Uoe1xuICAgICAgICAgICAgICAgIGN1cnJlbnQ6IGUuY3VycmVudFRhcmdldC5pZCwgLy8g5b2T5YmN5pi+56S65Zu+54mH55qEaHR0cOmTvuaOpVxuICAgICAgICAgICAgICAgIHVybHM6IHRoaXMuZmlsZXMgLy8g6ZyA6KaB6aKE6KeI55qE5Zu+54mHaHR0cOmTvuaOpeWIl+ihqFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIGFzeW5jIGNvbmZpcm1Nb21lbnQgKCkge1xuICAgICAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXNcbiAgICAgICAgICAgIGlmICh0aGlzLnZhbGlkYXRlRGF0YSgpKSB7XG4gICAgICAgICAgICAgICAgYXdhaXQgcG9zdEZldGNoKCcvY2lyY2xlcycsIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogdGhpcy5jb250ZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgY2lyY2xlX2ltZ3M6IHRoaXMuaW1hZ2VzXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgd2VweS5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICflj5HooajmiJDlip8nLFxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDEwMDBcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5yZXNldERhdGEoKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXNldERhdGEgKCkge1xuICAgICAgICAgICAgdGhpcy5maWxlcyA9IFtdXG4gICAgICAgICAgICB0aGlzLmNvbnRlbnQgPSAnJ1xuICAgICAgICAgICAgdGhpcy5pbWFnZXMgPSBbXVxuICAgICAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgICB9XG4gICAgICAgIHNob3dUb3BUaXBzKCkge1xuICAgICAgICAgICAgdGhpcy50aXBzLnNob3cgPSB0cnVlXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnRpcHMuc2hvdyA9IGZhbHNlXG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgICAgICAgfSwgMTAwMClcbiAgICAgICAgfVxuICAgICAgICB2YWxpZGF0ZURhdGEgKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuY29udGVudCA9PT0gJycgJiYgdGhpcy5pbWFnZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50aXBzLnRleHQgPSAn6K+35LiK5Lyg5Zu+54mH5ZKM5q2j5paHJ1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd1RvcFRpcHMoKVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgICBvbkxvYWQoKSB7XG4gICAgICAgIH1cbiAgICB9XG4iXX0=