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

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
            inputValue: ''
        }, _this.methods = {
            tap: function tap(e) {
                this.$emit('click', this.inputValue);
            },
            bindInput: function bindInput(e) {
                this.inputValue = e.detail.value;
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return Index;
}(_wepy2.default.component);

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXRvci5qcyJdLCJuYW1lcyI6WyJJbmRleCIsImRhdGEiLCJpbnB1dFZhbHVlIiwibWV0aG9kcyIsInRhcCIsImUiLCIkZW1pdCIsImJpbmRJbnB1dCIsImRldGFpbCIsInZhbHVlIiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0k7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7d0xBQ2pCQyxJLEdBQU87QUFDSEMsd0JBQVk7QUFEVCxTLFFBR1BDLE8sR0FBVTtBQUNOQyxlQURNLGVBQ0RDLENBREMsRUFDRTtBQUNKLHFCQUFLQyxLQUFMLENBQVcsT0FBWCxFQUFvQixLQUFLSixVQUF6QjtBQUNILGFBSEs7QUFJTksscUJBSk0scUJBSUtGLENBSkwsRUFJUTtBQUNWLHFCQUFLSCxVQUFMLEdBQWtCRyxFQUFFRyxNQUFGLENBQVNDLEtBQTNCO0FBQ0g7QUFOSyxTOzs7O0VBSnFCLGVBQUtDLFM7O2tCQUFuQlYsSyIsImZpbGUiOiJlZGl0b3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XG4gICAgICAgIGRhdGEgPSB7XG4gICAgICAgICAgICBpbnB1dFZhbHVlOiAnJ1xuICAgICAgICB9XG4gICAgICAgIG1ldGhvZHMgPSB7XG4gICAgICAgICAgICB0YXAgKGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdjbGljaycsIHRoaXMuaW5wdXRWYWx1ZSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBiaW5kSW5wdXQgKGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlucHV0VmFsdWUgPSBlLmRldGFpbC52YWx1ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuIl19