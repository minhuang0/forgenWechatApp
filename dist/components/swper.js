'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_wepy$component) {
    _inherits(Index, _wepy$component);

    function Index() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Index);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
            alldata: {},
            swiperConfig: {
                default: {
                    indicatorDots: true,
                    autoplay: true,
                    interval: 5000,
                    duration: 1000
                }
            }
        }, _this.methods = {
            tap: function tap(e) {
                this.$emit('click', e);
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return Index;
}(_wepy2.default.component);

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN3cGVyLmpzIl0sIm5hbWVzIjpbIkluZGV4IiwicHJvcHMiLCJhbGxkYXRhIiwic3dpcGVyQ29uZmlnIiwiZGVmYXVsdCIsImluZGljYXRvckRvdHMiLCJhdXRvcGxheSIsImludGVydmFsIiwiZHVyYXRpb24iLCJtZXRob2RzIiwidGFwIiwiZSIsIiRlbWl0IiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0k7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7d0xBQ2pCQyxLLEdBQVE7QUFDSkMscUJBQVMsRUFETDtBQUVKQywwQkFBYztBQUNWQyx5QkFBUztBQUNMQyxtQ0FBZSxJQURWO0FBRUxDLDhCQUFVLElBRkw7QUFHTEMsOEJBQVUsSUFITDtBQUlMQyw4QkFBVTtBQUpMO0FBREM7QUFGVixTLFFBWVJDLE8sR0FBVTtBQUNOQyxlQURNLGVBQ0RDLENBREMsRUFDRTtBQUNKLHFCQUFLQyxLQUFMLENBQVcsT0FBWCxFQUFvQkQsQ0FBcEI7QUFDSDtBQUhLLFM7Ozs7RUFicUIsZUFBS0UsUzs7a0JBQW5CYixLIiwiZmlsZSI6InN3cGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuICAgICAgICBwcm9wcyA9IHtcbiAgICAgICAgICAgIGFsbGRhdGE6IHt9LFxuICAgICAgICAgICAgc3dpcGVyQ29uZmlnOiB7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgICAgICAgICAgICBpbmRpY2F0b3JEb3RzOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBhdXRvcGxheTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgaW50ZXJ2YWw6IDUwMDAsXG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxMDAwXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbWV0aG9kcyA9IHtcbiAgICAgICAgICAgIHRhcCAoZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2NsaWNrJywgZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiJdfQ==