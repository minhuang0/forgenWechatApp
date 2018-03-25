'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _utils = require('./../modules/common/utils.js');

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
            comments: Array
        }, _this.computed = {
            newComments: function newComments() {
                return this.comments.map(function (i) {
                    i.created_at = (0, _utils.timeTransform)(i.created_at);
                    return i;
                });
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return Index;
}(_wepy2.default.component);

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1lbnRzLmpzIl0sIm5hbWVzIjpbIkluZGV4IiwicHJvcHMiLCJjb21tZW50cyIsIkFycmF5IiwiY29tcHV0ZWQiLCJuZXdDb21tZW50cyIsIm1hcCIsImkiLCJjcmVhdGVkX2F0IiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0k7Ozs7QUFDQTs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7d0xBQ2pCQyxLLEdBQVE7QUFDSkMsc0JBQVVDO0FBRE4sUyxRQUdSQyxRLEdBQVc7QUFDUEMsdUJBRE8seUJBQ1E7QUFDWCx1QkFBTyxLQUFLSCxRQUFMLENBQWNJLEdBQWQsQ0FBa0IsYUFBSztBQUMxQkMsc0JBQUVDLFVBQUYsR0FBZSwwQkFBY0QsRUFBRUMsVUFBaEIsQ0FBZjtBQUNBLDJCQUFPRCxDQUFQO0FBQ0gsaUJBSE0sQ0FBUDtBQUlIO0FBTk0sUzs7OztFQUpvQixlQUFLRSxTOztrQkFBbkJULEsiLCJmaWxlIjoiY29tbWVudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICAgIGltcG9ydCB7IHRpbWVUcmFuc2Zvcm0gfSBmcm9tICdAL21vZHVsZXMvY29tbW9uL3V0aWxzJ1xuXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XG4gICAgICAgIHByb3BzID0ge1xuICAgICAgICAgICAgY29tbWVudHM6IEFycmF5XG4gICAgICAgIH1cbiAgICAgICAgY29tcHV0ZWQgPSB7XG4gICAgICAgICAgICBuZXdDb21tZW50cyAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29tbWVudHMubWFwKGkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpLmNyZWF0ZWRfYXQgPSB0aW1lVHJhbnNmb3JtKGkuY3JlYXRlZF9hdClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGlcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuIl19