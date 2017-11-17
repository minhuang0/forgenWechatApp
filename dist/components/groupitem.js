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

var GroupItem = function (_wepy$component) {
    _inherits(GroupItem, _wepy$component);

    function GroupItem() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, GroupItem);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = GroupItem.__proto__ || Object.getPrototypeOf(GroupItem)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
            gitem: {}
        }, _this.data = {}, _this.methods = {
            tap: function tap() {
                this.gitem.childname = 'Child Random(' + Math.random() + ')';
                console.log('Clicked Group ' + this.$parent.$index + '. Item ' + this.$index + ', ID is ' + this.gitem.childid);
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return GroupItem;
}(_wepy2.default.component);

exports.default = GroupItem;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdyb3VwaXRlbS5qcyJdLCJuYW1lcyI6WyJHcm91cEl0ZW0iLCJwcm9wcyIsImdpdGVtIiwiZGF0YSIsIm1ldGhvZHMiLCJ0YXAiLCJjaGlsZG5hbWUiLCJNYXRoIiwicmFuZG9tIiwiY29uc29sZSIsImxvZyIsIiRwYXJlbnQiLCIkaW5kZXgiLCJjaGlsZGlkIiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0k7Ozs7Ozs7Ozs7OztJQUVxQkEsUzs7Ozs7Ozs7Ozs7Ozs7Z01BQ2pCQyxLLEdBQVE7QUFDSkMsbUJBQU87QUFESCxTLFFBR1JDLEksR0FBTyxFLFFBRVBDLE8sR0FBVTtBQUNOQyxlQURNLGlCQUNBO0FBQ0YscUJBQUtILEtBQUwsQ0FBV0ksU0FBWCxxQkFBdUNDLEtBQUtDLE1BQUwsRUFBdkM7QUFDQUMsd0JBQVFDLEdBQVIsb0JBQTZCLEtBQUtDLE9BQUwsQ0FBYUMsTUFBMUMsZUFBMEQsS0FBS0EsTUFBL0QsZ0JBQWdGLEtBQUtWLEtBQUwsQ0FBV1csT0FBM0Y7QUFDSDtBQUpLLFM7Ozs7RUFOeUIsZUFBS0MsUzs7a0JBQXZCZCxTIiwiZmlsZSI6Imdyb3VwaXRlbS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBHcm91cEl0ZW0gZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XG4gICAgICAgIHByb3BzID0ge1xuICAgICAgICAgICAgZ2l0ZW06IHt9XG4gICAgICAgIH1cbiAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgfVxuICAgICAgICBtZXRob2RzID0ge1xuICAgICAgICAgICAgdGFwKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZ2l0ZW0uY2hpbGRuYW1lID0gYENoaWxkIFJhbmRvbSgke01hdGgucmFuZG9tKCl9KWBcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgQ2xpY2tlZCBHcm91cCAke3RoaXMuJHBhcmVudC4kaW5kZXh9LiBJdGVtICR7dGhpcy4kaW5kZXh9LCBJRCBpcyAke3RoaXMuZ2l0ZW0uY2hpbGRpZH1gKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuIl19