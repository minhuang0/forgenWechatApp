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

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
            navigationBarTitleText: ''
        }, _this.data = {
            show: false,
            /* 顶部分类 */
            canIUse: _wepy2.default.canIUse('button.open-type.getUserInfo')
        }, _this.methods = {
            goHome: function goHome() {
                _wepy2.default.switchTab({
                    url: '../../pages/home/index'
                });
            },
            bindGetUserInfo: function bindGetUserInfo(e) {
                if (e.detail.userInfo) {
                    this.methods.goHome();
                }
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Index, [{
        key: 'onLoad',
        value: function onLoad() {
            // 查看是否授权
            var that = this;
            _wepy2.default.getSetting({
                success: function success(res) {
                    if (res.authSetting['scope.userInfo']) {
                        // 已经授权，可以直接调用 getUserInfo 获取头像昵称
                        that.methods.goHome();
                    } else {
                        that.show = true;
                        that.$apply();
                    }
                }
            });
        }
    }]);

    return Index;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/auth/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJzaG93IiwiY2FuSVVzZSIsIndlcHkiLCJtZXRob2RzIiwiZ29Ib21lIiwic3dpdGNoVGFiIiwidXJsIiwiYmluZEdldFVzZXJJbmZvIiwiZSIsImRldGFpbCIsInVzZXJJbmZvIiwidGhhdCIsImdldFNldHRpbmciLCJzdWNjZXNzIiwicmVzIiwiYXV0aFNldHRpbmciLCIkYXBwbHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7Ozt3TEFDakJDLE0sR0FBUztBQUNMQyxvQ0FBd0I7QUFEbkIsUyxRQUdUQyxJLEdBQU87QUFDSEMsa0JBQU0sS0FESDtBQUVIO0FBQ0FDLHFCQUFTQyxlQUFLRCxPQUFMLENBQWEsOEJBQWI7QUFITixTLFFBS1BFLE8sR0FBVTtBQUNOQyxrQkFETSxvQkFDSTtBQUNORiwrQkFBS0csU0FBTCxDQUFlO0FBQ1hDLHlCQUFLO0FBRE0saUJBQWY7QUFHSCxhQUxLO0FBTU5DLDJCQU5NLDJCQU1XQyxDQU5YLEVBTWM7QUFDaEIsb0JBQUlBLEVBQUVDLE1BQUYsQ0FBU0MsUUFBYixFQUF1QjtBQUNuQix5QkFBS1AsT0FBTCxDQUFhQyxNQUFiO0FBQ0g7QUFDSjtBQVZLLFM7Ozs7O2lDQVlBO0FBQ047QUFDQSxnQkFBTU8sT0FBTyxJQUFiO0FBQ0FULDJCQUFLVSxVQUFMLENBQWdCO0FBQ1pDLHVCQURZLG1CQUNIQyxHQURHLEVBQ0U7QUFDVix3QkFBSUEsSUFBSUMsV0FBSixDQUFnQixnQkFBaEIsQ0FBSixFQUF1QztBQUNuQztBQUNBSiw2QkFBS1IsT0FBTCxDQUFhQyxNQUFiO0FBQ0gscUJBSEQsTUFHTztBQUNITyw2QkFBS1gsSUFBTCxHQUFZLElBQVo7QUFDQVcsNkJBQUtLLE1BQUw7QUFDSDtBQUNKO0FBVFcsYUFBaEI7QUFXSDs7OztFQW5DOEJkLGVBQUtlLEk7O2tCQUFuQnJCLEsiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb25maWcgPSB7XG4gICAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICcnXG4gICAgfVxuICAgIGRhdGEgPSB7XG4gICAgICAgIHNob3c6IGZhbHNlLFxuICAgICAgICAvKiDpobbpg6jliIbnsbsgKi9cbiAgICAgICAgY2FuSVVzZTogd2VweS5jYW5JVXNlKCdidXR0b24ub3Blbi10eXBlLmdldFVzZXJJbmZvJylcbiAgICB9XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgICAgZ29Ib21lICgpIHtcbiAgICAgICAgICAgIHdlcHkuc3dpdGNoVGFiKHtcbiAgICAgICAgICAgICAgICB1cmw6ICcuLi8uLi9wYWdlcy9ob21lL2luZGV4J1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSxcbiAgICAgICAgYmluZEdldFVzZXJJbmZvIChlKSB7XG4gICAgICAgICAgICBpZiAoZS5kZXRhaWwudXNlckluZm8pIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1ldGhvZHMuZ29Ib21lKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBvbkxvYWQgKCkge1xuICAgICAgICAvLyDmn6XnnIvmmK/lkKbmjojmnYNcbiAgICAgICAgY29uc3QgdGhhdCA9IHRoaXNcbiAgICAgICAgd2VweS5nZXRTZXR0aW5nKHtcbiAgICAgICAgICAgIHN1Y2Nlc3MgKHJlcykge1xuICAgICAgICAgICAgICAgIGlmIChyZXMuYXV0aFNldHRpbmdbJ3Njb3BlLnVzZXJJbmZvJ10pIHtcbiAgICAgICAgICAgICAgICAgICAgLy8g5bey57uP5o6I5p2D77yM5Y+v5Lul55u05o6l6LCD55SoIGdldFVzZXJJbmZvIOiOt+WPluWktOWDj+aYteensFxuICAgICAgICAgICAgICAgICAgICB0aGF0Lm1ldGhvZHMuZ29Ib21lKClcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGF0LnNob3cgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgIHRoYXQuJGFwcGx5KClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxufVxuIl19