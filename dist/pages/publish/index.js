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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJ0aXBzIiwic2hvdyIsInRleHQiLCJjb250ZW50IiwiZmlsZXMiLCJpbWFnZXMiLCJtZXRob2RzIiwiZSIsInRoZW4iLCJyZXMiLCJ0ZW1wRmlsZVBhdGhzIiwiaW1hZ2VGaWxlUGF0aCIsImNvbmNhdCIsImltYWdlVXJsIiwiJGFwcGx5IiwiZGV0YWlsIiwidmFsdWUiLCJwcmV2aWV3SW1hZ2UiLCJjdXJyZW50IiwiY3VycmVudFRhcmdldCIsImlkIiwidXJscyIsInZhbGlkYXRlRGF0YSIsImNpcmNsZV9pbWdzIiwicnNwIiwiY29uc29sZSIsImxvZyIsInNldFRpbWVvdXQiLCJsZW5ndGgiLCJzaG93VG9wVGlwcyIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNJOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7d0xBQ2pCQyxNLEdBQVM7QUFDTEMsb0NBQXdCO0FBRG5CLFMsUUFJVEMsSSxHQUFPO0FBQ0hDLGtCQUFNO0FBQ0ZDLHNCQUFNLEtBREo7QUFFRkMsc0JBQU07QUFGSixhQURIO0FBS0hDLHFCQUFTLEVBTE47QUFNSEMsbUJBQU8sRUFOSjtBQU9IQyxvQkFBUTtBQVBMLFMsUUFVUEMsTyxHQUFVLEU7Ozs7OztpR0FFY0MsQzs7Ozs7Ozs7O3VDQUNRLDBCQUFjQyxJQUFkLENBQW1CLGVBQU87QUFDbEQsMkNBQU9DLElBQUlDLGFBQUosQ0FBa0IsQ0FBbEIsQ0FBUDtBQUNILGlDQUYyQixDOzs7QUFBdEJDLDZDOztBQUdOLHVEQUFXLHFCQUFYLEVBQWtDQSxhQUFsQyxFQUFpREgsSUFBakQsQ0FBc0Qsb0JBQVk7QUFDOUQsMkNBQUtKLEtBQUwsR0FBYSxPQUFLQSxLQUFMLENBQVdRLE1BQVgsQ0FBa0JELGFBQWxCLENBQWI7QUFDQSwyQ0FBS04sTUFBTCxHQUFjLE9BQUtBLE1BQUwsQ0FBWU8sTUFBWixDQUFtQkMsUUFBbkIsQ0FBZDtBQUNBLDJDQUFLQyxNQUFMO0FBQ0gsaUNBSkQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt5Q0FNY1AsQyxFQUFHO0FBQ2pCLGlCQUFLSixPQUFMLEdBQWVJLEVBQUVRLE1BQUYsQ0FBU0MsS0FBeEI7QUFDSDs7O3FDQUVZVCxDLEVBQUc7QUFDWiwyQkFBS1UsWUFBTCxDQUFrQjtBQUNkQyx5QkFBU1gsRUFBRVksYUFBRixDQUFnQkMsRUFEWCxFQUNlO0FBQzdCQyxzQkFBTSxLQUFLakIsS0FGRyxDQUVHO0FBRkgsYUFBbEI7QUFJSDs7Ozs7Ozs7OztxQ0FHTyxLQUFLa0IsWUFBTCxFOzs7Ozs7dUNBQ2tCLHNCQUFVLFVBQVYsRUFBc0I7QUFDcEN2QiwwQ0FBTTtBQUNGSSxpREFBUyxLQUFLQSxPQURaO0FBRUZvQixxREFBYSxLQUFLbEI7QUFGaEI7QUFEOEIsaUNBQXRCLEM7OztBQUFabUIsbUM7O0FBTU5DLHdDQUFRQyxHQUFSLENBQVlGLEdBQVo7Ozs7Ozs7Ozs7Ozs7Ozs7OztzQ0FHTTtBQUFBOztBQUNWLGlCQUFLeEIsSUFBTCxDQUFVQyxJQUFWLEdBQWlCLElBQWpCO0FBQ0EwQix1QkFBVyxZQUFNO0FBQ2IsdUJBQUszQixJQUFMLENBQVVDLElBQVYsR0FBaUIsS0FBakI7QUFDQSx1QkFBS2EsTUFBTDtBQUNILGFBSEQsRUFHRyxJQUhIO0FBSUg7Ozt1Q0FDZTtBQUNaLGdCQUFJLEtBQUtYLE9BQUwsS0FBaUIsRUFBakIsSUFBdUIsS0FBS0UsTUFBTCxDQUFZdUIsTUFBWixLQUF1QixDQUFsRCxFQUFxRDtBQUNqRCxxQkFBSzVCLElBQUwsQ0FBVUUsSUFBVixHQUFpQixVQUFqQjtBQUNBLHFCQUFLMkIsV0FBTDtBQUNBLHVCQUFPLEtBQVA7QUFDSDtBQUNELG1CQUFPLElBQVA7QUFDSDs7O2lDQUNRLENBQ1I7Ozs7RUFqRThCLGVBQUtDLEk7O2tCQUFuQmxDLEsiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICAgIGltcG9ydCB7IHVwbG9hZEZpbGUsIGNob29zZUltYWdlLCBwb3N0RmV0Y2ggfSBmcm9tICdAL21vZHVsZXMvY29tbW9uL2ZldGNoJ1xuXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgICAgICBjb25maWcgPSB7XG4gICAgICAgICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5Y+R6KGo5pyL5Y+L5ZyIJ1xuICAgICAgICB9XG5cbiAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICAgIHRpcHM6IHtcbiAgICAgICAgICAgICAgICBzaG93OiBmYWxzZSxcbiAgICAgICAgICAgICAgICB0ZXh0OiAnJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcnLFxuICAgICAgICAgICAgZmlsZXM6IFtdLFxuICAgICAgICAgICAgaW1hZ2VzOiBbXVxuICAgICAgICB9XG5cbiAgICAgICAgbWV0aG9kcyA9IHtcbiAgICAgICAgfVxuICAgICAgICBhc3luYyBjaG9vc2VNb21lbnRJbWFnZShlKSB7XG4gICAgICAgICAgICBjb25zdCBpbWFnZUZpbGVQYXRoID0gYXdhaXQgY2hvb3NlSW1hZ2UoKS50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy50ZW1wRmlsZVBhdGhzWzBdXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgdXBsb2FkRmlsZSgnL2NpcmNsZXMvaW1nL3VwbG9hZCcsIGltYWdlRmlsZVBhdGgpLnRoZW4oaW1hZ2VVcmwgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZmlsZXMgPSB0aGlzLmZpbGVzLmNvbmNhdChpbWFnZUZpbGVQYXRoKVxuICAgICAgICAgICAgICAgIHRoaXMuaW1hZ2VzID0gdGhpcy5pbWFnZXMuY29uY2F0KGltYWdlVXJsKVxuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgYmluZENvbW1lbnRJbnB1dCAoZSkge1xuICAgICAgICAgICAgdGhpcy5jb250ZW50ID0gZS5kZXRhaWwudmFsdWVcbiAgICAgICAgfVxuXG4gICAgICAgIHByZXZpZXdJbWFnZShlKSB7XG4gICAgICAgICAgICB3ZXB5LnByZXZpZXdJbWFnZSh7XG4gICAgICAgICAgICAgICAgY3VycmVudDogZS5jdXJyZW50VGFyZ2V0LmlkLCAvLyDlvZPliY3mmL7npLrlm77niYfnmoRodHRw6ZO+5o6lXG4gICAgICAgICAgICAgICAgdXJsczogdGhpcy5maWxlcyAvLyDpnIDopoHpooTop4jnmoTlm77niYdodHRw6ZO+5o6l5YiX6KGoXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgYXN5bmMgY29uZmlybU1vbWVudCAoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy52YWxpZGF0ZURhdGEoKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJzcCA9IGF3YWl0IHBvc3RGZXRjaCgnL2NpcmNsZXMnLCB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IHRoaXMuY29udGVudCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNpcmNsZV9pbWdzOiB0aGlzLmltYWdlc1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyc3ApXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgc2hvd1RvcFRpcHMoKSB7XG4gICAgICAgICAgICB0aGlzLnRpcHMuc2hvdyA9IHRydWVcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMudGlwcy5zaG93ID0gZmFsc2VcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICAgICAgICB9LCAxMDAwKVxuICAgICAgICB9XG4gICAgICAgIHZhbGlkYXRlRGF0YSAoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jb250ZW50ID09PSAnJyAmJiB0aGlzLmltYWdlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRpcHMudGV4dCA9ICfor7fkuIrkvKDlm77niYflkozmraPmlocnXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93VG9wVGlwcygpXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIG9uTG9hZCgpIHtcbiAgICAgICAgfVxuICAgIH1cbiJdfQ==