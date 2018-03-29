'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
            cctx: {},
            image: ''
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Index, [{
        key: 'onReady',
        value: function onReady(res) {
            if (_wepy2.default.createCameraContext()) {
                this.cctx = _wepy2.default.createCameraContext('myCamera');
            } else {
                // 如果希望用户在最新版本的客户端上体验您的小程序，可以这样子提示
                _wepy2.default.showModal({
                    title: '提示',
                    content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。'
                });
            }
        }
    }, {
        key: 'takePhoto',
        value: function takePhoto() {
            var _this2 = this;

            this.cctx.takePhoto({
                quality: 'high',
                success: function success(res) {
                    _this2.image = res.tempImagePath;
                    console.log(_this2.image);
                    _this2.alert();
                }
            });
        }
    }, {
        key: 'alert',
        value: function alert(text) {
            _wepy2.default.showModal({
                content: '牵牛花',
                showCancel: false,
                success: function success(res) {
                    console.log('点击确认');
                }
            });
        }
    }, {
        key: 'error',
        value: function error(e) {
            console.log(e.detail);
        }
    }]);

    return Index;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/publish/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiZGF0YSIsImNjdHgiLCJpbWFnZSIsInJlcyIsImNyZWF0ZUNhbWVyYUNvbnRleHQiLCJzaG93TW9kYWwiLCJ0aXRsZSIsImNvbnRlbnQiLCJ0YWtlUGhvdG8iLCJxdWFsaXR5Iiwic3VjY2VzcyIsInRlbXBJbWFnZVBhdGgiLCJjb25zb2xlIiwibG9nIiwiYWxlcnQiLCJ0ZXh0Iiwic2hvd0NhbmNlbCIsImUiLCJkZXRhaWwiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDSTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxLOzs7Ozs7Ozs7Ozs7Ozt3TEFDakJDLEksR0FBTztBQUNIQyxrQkFBTSxFQURIO0FBRUhDLG1CQUFPO0FBRkosUzs7Ozs7Z0NBSUVDLEcsRUFBSztBQUNWLGdCQUFJLGVBQUtDLG1CQUFMLEVBQUosRUFBZ0M7QUFDNUIscUJBQUtILElBQUwsR0FBWSxlQUFLRyxtQkFBTCxDQUF5QixVQUF6QixDQUFaO0FBQ0gsYUFGRCxNQUVPO0FBQUU7QUFDTCwrQkFBS0MsU0FBTCxDQUFlO0FBQ1hDLDJCQUFPLElBREk7QUFFWEMsNkJBQVM7QUFGRSxpQkFBZjtBQUlIO0FBQ0o7OztvQ0FDVztBQUFBOztBQUNSLGlCQUFLTixJQUFMLENBQVVPLFNBQVYsQ0FBb0I7QUFDaEJDLHlCQUFTLE1BRE87QUFFaEJDLHlCQUFTLGlCQUFDUCxHQUFELEVBQVM7QUFDZCwyQkFBS0QsS0FBTCxHQUFhQyxJQUFJUSxhQUFqQjtBQUNBQyw0QkFBUUMsR0FBUixDQUFZLE9BQUtYLEtBQWpCO0FBQ0EsMkJBQUtZLEtBQUw7QUFDSDtBQU5lLGFBQXBCO0FBUUg7Ozs4QkFDTUMsSSxFQUFNO0FBQ1QsMkJBQUtWLFNBQUwsQ0FBZTtBQUNYRSx5QkFBUyxLQURFO0FBRVhTLDRCQUFZLEtBRkQ7QUFHWE4sdUJBSFcsbUJBR0ZQLEdBSEUsRUFHRztBQUNWUyw0QkFBUUMsR0FBUixDQUFZLE1BQVo7QUFDSDtBQUxVLGFBQWY7QUFPSDs7OzhCQUNLSSxDLEVBQUc7QUFDTEwsb0JBQVFDLEdBQVIsQ0FBWUksRUFBRUMsTUFBZDtBQUNIOzs7O0VBcEM4QixlQUFLQyxJOztrQkFBbkJwQixLIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgICAgIGRhdGEgPSB7XG4gICAgICAgICAgICBjY3R4OiB7fSxcbiAgICAgICAgICAgIGltYWdlOiAnJ1xuICAgICAgICB9XG4gICAgICAgIG9uUmVhZHkgKHJlcykge1xuICAgICAgICAgICAgaWYgKHdlcHkuY3JlYXRlQ2FtZXJhQ29udGV4dCgpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jY3R4ID0gd2VweS5jcmVhdGVDYW1lcmFDb250ZXh0KCdteUNhbWVyYScpXG4gICAgICAgICAgICB9IGVsc2UgeyAvLyDlpoLmnpzluIzmnJvnlKjmiLflnKjmnIDmlrDniYjmnKznmoTlrqLmiLfnq6/kuIrkvZPpqozmgqjnmoTlsI/nqIvluo/vvIzlj6/ku6Xov5nmoLflrZDmj5DnpLpcbiAgICAgICAgICAgICAgICB3ZXB5LnNob3dNb2RhbCh7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5o+Q56S6JyxcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogJ+W9k+WJjeW+ruS/oeeJiOacrOi/h+S9ju+8jOaXoOazleS9v+eUqOivpeWKn+iDve+8jOivt+WNh+e6p+WIsOacgOaWsOW+ruS/oeeJiOacrOWQjumHjeivleOAgidcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRha2VQaG90bygpIHtcbiAgICAgICAgICAgIHRoaXMuY2N0eC50YWtlUGhvdG8oe1xuICAgICAgICAgICAgICAgIHF1YWxpdHk6ICdoaWdoJyxcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiAocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW1hZ2UgPSByZXMudGVtcEltYWdlUGF0aFxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmltYWdlKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0KClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIGFsZXJ0ICh0ZXh0KSB7XG4gICAgICAgICAgICB3ZXB5LnNob3dNb2RhbCh7XG4gICAgICAgICAgICAgICAgY29udGVudDogJ+eJteeJm+iKsScsXG4gICAgICAgICAgICAgICAgc2hvd0NhbmNlbDogZmFsc2UsXG4gICAgICAgICAgICAgICAgc3VjY2VzcyAocmVzKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfngrnlh7vnoa7orqQnKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgZXJyb3IoZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZS5kZXRhaWwpXG4gICAgICAgIH1cbiAgICB9XG4iXX0=