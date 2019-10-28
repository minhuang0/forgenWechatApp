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

// import abc from 'abc'

var Counter = function (_wepy$component) {
    _inherits(Counter, _wepy$component);

    function Counter() {
        var _ref;

        var _temp, _this, _ret;

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        _classCallCheck(this, Counter);

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Counter.__proto__ || Object.getPrototypeOf(Counter)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
            num: {
                type: [Number, String],
                coerce: function coerce(v) {
                    return +v;
                },
                default: 50
            }
        }, _this.data = {}, _this.events = {
            'index-broadcast': function indexBroadcast() {
                // let $event = args[args.length - 1]
            }
        }, _this.watch = {
            num: function num(curVal, oldVal) {}
        }, _this.methods = {
            plus: function plus() {
                this.num = this.num + 1;

                this.$emit('index-emit', 1, 2, 3);
            },
            minus: function minus() {
                this.num = this.num - 1;
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return Counter;
}(_wepy2.default.component);

exports.default = Counter;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvdW50ZXIuanMiXSwibmFtZXMiOlsiQ291bnRlciIsInByb3BzIiwibnVtIiwidHlwZSIsIk51bWJlciIsIlN0cmluZyIsImNvZXJjZSIsInYiLCJkZWZhdWx0IiwiZGF0YSIsImV2ZW50cyIsIndhdGNoIiwiY3VyVmFsIiwib2xkVmFsIiwibWV0aG9kcyIsInBsdXMiLCIkZW1pdCIsIm1pbnVzIiwid2VweSIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNJOzs7Ozs7Ozs7Ozs7QUFDQTs7SUFFcUJBLE87Ozs7Ozs7Ozs7Ozs7OzRMQUNqQkMsSyxHQUFRO0FBQ0pDLGlCQUFLO0FBQ0RDLHNCQUFNLENBQUNDLE1BQUQsRUFBU0MsTUFBVCxDQURMO0FBRURDLHdCQUFRLGdCQUFVQyxDQUFWLEVBQWE7QUFDakIsMkJBQU8sQ0FBQ0EsQ0FBUjtBQUNILGlCQUpBO0FBS0RDLHlCQUFTO0FBTFI7QUFERCxTLFFBVVJDLEksR0FBTyxFLFFBRVBDLE0sR0FBUztBQUNMLCtCQUFtQiwwQkFBYTtBQUM1QjtBQUNIO0FBSEksUyxRQU1UQyxLLEdBQVE7QUFDSlQsZUFESSxlQUNBVSxNQURBLEVBQ1FDLE1BRFIsRUFDZ0IsQ0FDbkI7QUFGRyxTLFFBS1JDLE8sR0FBVTtBQUNOQyxnQkFETSxrQkFDQztBQUNILHFCQUFLYixHQUFMLEdBQVcsS0FBS0EsR0FBTCxHQUFXLENBQXRCOztBQUVBLHFCQUFLYyxLQUFMLENBQVcsWUFBWCxFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQjtBQUNILGFBTEs7QUFNTkMsaUJBTk0sbUJBTUU7QUFDSixxQkFBS2YsR0FBTCxHQUFXLEtBQUtBLEdBQUwsR0FBVyxDQUF0QjtBQUNIO0FBUkssUzs7OztFQXhCdUJnQixlQUFLQyxTOztrQkFBckJuQixPIiwiZmlsZSI6ImNvdW50ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICAgIC8vIGltcG9ydCBhYmMgZnJvbSAnYWJjJ1xuXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ291bnRlciBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcbiAgICAgICAgcHJvcHMgPSB7XG4gICAgICAgICAgICBudW06IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBbTnVtYmVyLCBTdHJpbmddLFxuICAgICAgICAgICAgICAgIGNvZXJjZTogZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICt2XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiA1MFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgfVxuICAgICAgICBldmVudHMgPSB7XG4gICAgICAgICAgICAnaW5kZXgtYnJvYWRjYXN0JzogKC4uLmFyZ3MpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBsZXQgJGV2ZW50ID0gYXJnc1thcmdzLmxlbmd0aCAtIDFdXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB3YXRjaCA9IHtcbiAgICAgICAgICAgIG51bShjdXJWYWwsIG9sZFZhbCkge1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbWV0aG9kcyA9IHtcbiAgICAgICAgICAgIHBsdXMoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5udW0gPSB0aGlzLm51bSArIDFcblxuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2luZGV4LWVtaXQnLCAxLCAyLCAzKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1pbnVzKCkge1xuICAgICAgICAgICAgICAgIHRoaXMubnVtID0gdGhpcy5udW0gLSAxXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4iXX0=