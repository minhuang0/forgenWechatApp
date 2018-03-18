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
            moment: {}
        }, _this.methods = {
            onReady: function onReady() {
                console.log(this.moment);
            },
            goMomentDetail: function goMomentDetail() {
                if (this.moment && this.moment.id) {
                    _wepy2.default.navigateTo({
                        url: '../../pages/detail/moment?id=' + this.moment.id
                    });
                }
            }
        }, _this.data = {
            icons: {
                upvote: '../../modules/images/praise.png',
                upvote_fill: '../../modules/images/praise_fill.png',
                like: '../../modules/images/like.png',
                like_fill: '../../modules/images/like_fill.png',
                message: '../../modules/images/message.png',
                message_fill: '../../modules/images/message_fill.png'
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return Index;
}(_wepy2.default.component);

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vbWVudC5qcyJdLCJuYW1lcyI6WyJJbmRleCIsInByb3BzIiwibW9tZW50IiwibWV0aG9kcyIsIm9uUmVhZHkiLCJjb25zb2xlIiwibG9nIiwiZ29Nb21lbnREZXRhaWwiLCJpZCIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJkYXRhIiwiaWNvbnMiLCJ1cHZvdGUiLCJ1cHZvdGVfZmlsbCIsImxpa2UiLCJsaWtlX2ZpbGwiLCJtZXNzYWdlIiwibWVzc2FnZV9maWxsIiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0k7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7d0xBQ2pCQyxLLEdBQVE7QUFDSkMsb0JBQVE7QUFESixTLFFBSVJDLE8sR0FBVTtBQUNOQyxtQkFETSxxQkFDSztBQUNQQyx3QkFBUUMsR0FBUixDQUFZLEtBQUtKLE1BQWpCO0FBQ0gsYUFISztBQUlOSywwQkFKTSw0QkFJVztBQUNiLG9CQUFJLEtBQUtMLE1BQUwsSUFBZSxLQUFLQSxNQUFMLENBQVlNLEVBQS9CLEVBQW1DO0FBQy9CLG1DQUFLQyxVQUFMLENBQWdCO0FBQ1pDLCtEQUFxQyxLQUFLUixNQUFMLENBQVlNO0FBRHJDLHFCQUFoQjtBQUdIO0FBQ0o7QUFWSyxTLFFBYVZHLEksR0FBTztBQUNIQyxtQkFBTztBQUNIQyx3QkFBUSxpQ0FETDtBQUVIQyw2QkFBYSxzQ0FGVjtBQUdIQyxzQkFBTSwrQkFISDtBQUlIQywyQkFBVyxvQ0FKUjtBQUtIQyx5QkFBUyxrQ0FMTjtBQU1IQyw4QkFBYztBQU5YO0FBREosUzs7OztFQWxCd0IsZUFBS0MsUzs7a0JBQW5CbkIsSyIsImZpbGUiOiJtb21lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XG4gICAgICAgIHByb3BzID0ge1xuICAgICAgICAgICAgbW9tZW50OiB7fVxuICAgICAgICB9XG5cbiAgICAgICAgbWV0aG9kcyA9IHtcbiAgICAgICAgICAgIG9uUmVhZHkgKCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMubW9tZW50KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGdvTW9tZW50RGV0YWlsKCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLm1vbWVudCAmJiB0aGlzLm1vbWVudC5pZCkge1xuICAgICAgICAgICAgICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBgLi4vLi4vcGFnZXMvZGV0YWlsL21vbWVudD9pZD0ke3RoaXMubW9tZW50LmlkfWBcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBkYXRhID0ge1xuICAgICAgICAgICAgaWNvbnM6IHtcbiAgICAgICAgICAgICAgICB1cHZvdGU6ICcuLi8uLi9tb2R1bGVzL2ltYWdlcy9wcmFpc2UucG5nJyxcbiAgICAgICAgICAgICAgICB1cHZvdGVfZmlsbDogJy4uLy4uL21vZHVsZXMvaW1hZ2VzL3ByYWlzZV9maWxsLnBuZycsXG4gICAgICAgICAgICAgICAgbGlrZTogJy4uLy4uL21vZHVsZXMvaW1hZ2VzL2xpa2UucG5nJyxcbiAgICAgICAgICAgICAgICBsaWtlX2ZpbGw6ICcuLi8uLi9tb2R1bGVzL2ltYWdlcy9saWtlX2ZpbGwucG5nJyxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAnLi4vLi4vbW9kdWxlcy9pbWFnZXMvbWVzc2FnZS5wbmcnLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2VfZmlsbDogJy4uLy4uL21vZHVsZXMvaW1hZ2VzL21lc3NhZ2VfZmlsbC5wbmcnXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4iXX0=