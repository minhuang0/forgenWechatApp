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
            moment: Object
        }, _this.methods = {
            goMomentDetail: function goMomentDetail() {
                if (this.moment && this.moment.id) {
                    _wepy2.default.navigateTo({
                        url: '../../pages/detail/moment?id=' + this.moment.id
                    });
                }
            },
            toggleMoments: function toggleMoments(e) {
                this.$emit('toggleMoments');
            },
            toggleUpvote: function toggleUpvote() {
                this.$emit('toggleUpvote');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vbWVudC5qcyJdLCJuYW1lcyI6WyJJbmRleCIsInByb3BzIiwibW9tZW50IiwiT2JqZWN0IiwibWV0aG9kcyIsImdvTW9tZW50RGV0YWlsIiwiaWQiLCJuYXZpZ2F0ZVRvIiwidXJsIiwidG9nZ2xlTW9tZW50cyIsImUiLCIkZW1pdCIsInRvZ2dsZVVwdm90ZSIsImRhdGEiLCJpY29ucyIsInVwdm90ZSIsInVwdm90ZV9maWxsIiwibGlrZSIsImxpa2VfZmlsbCIsIm1lc3NhZ2UiLCJtZXNzYWdlX2ZpbGwiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDSTs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7Ozt3TEFDakJDLEssR0FBUTtBQUNKQyxvQkFBUUM7QUFESixTLFFBR1JDLE8sR0FBVTtBQUNOQywwQkFETSw0QkFDVztBQUNiLG9CQUFJLEtBQUtILE1BQUwsSUFBZSxLQUFLQSxNQUFMLENBQVlJLEVBQS9CLEVBQW1DO0FBQy9CLG1DQUFLQyxVQUFMLENBQWdCO0FBQ1pDLCtEQUFxQyxLQUFLTixNQUFMLENBQVlJO0FBRHJDLHFCQUFoQjtBQUdIO0FBQ0osYUFQSztBQVFORyx5QkFSTSx5QkFRU0MsQ0FSVCxFQVFZO0FBQ2QscUJBQUtDLEtBQUwsQ0FBVyxlQUFYO0FBQ0gsYUFWSztBQVdOQyx3QkFYTSwwQkFXVTtBQUNaLHFCQUFLRCxLQUFMLENBQVcsY0FBWDtBQUNIO0FBYkssUyxRQWdCVkUsSSxHQUFPO0FBQ0hDLG1CQUFPO0FBQ0hDLHdCQUFRLGlDQURMO0FBRUhDLDZCQUFhLHNDQUZWO0FBR0hDLHNCQUFNLCtCQUhIO0FBSUhDLDJCQUFXLG9DQUpSO0FBS0hDLHlCQUFTLGtDQUxOO0FBTUhDLDhCQUFjO0FBTlg7QUFESixTOzs7O0VBcEJ3QixlQUFLQyxTOztrQkFBbkJyQixLIiwiZmlsZSI6Im1vbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcbiAgICAgICAgcHJvcHMgPSB7XG4gICAgICAgICAgICBtb21lbnQ6IE9iamVjdFxuICAgICAgICB9XG4gICAgICAgIG1ldGhvZHMgPSB7XG4gICAgICAgICAgICBnb01vbWVudERldGFpbCgpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5tb21lbnQgJiYgdGhpcy5tb21lbnQuaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogYC4uLy4uL3BhZ2VzL2RldGFpbC9tb21lbnQ/aWQ9JHt0aGlzLm1vbWVudC5pZH1gXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRvZ2dsZU1vbWVudHMgKGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCd0b2dnbGVNb21lbnRzJylcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0b2dnbGVVcHZvdGUgKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ3RvZ2dsZVVwdm90ZScpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBkYXRhID0ge1xuICAgICAgICAgICAgaWNvbnM6IHtcbiAgICAgICAgICAgICAgICB1cHZvdGU6ICcuLi8uLi9tb2R1bGVzL2ltYWdlcy9wcmFpc2UucG5nJyxcbiAgICAgICAgICAgICAgICB1cHZvdGVfZmlsbDogJy4uLy4uL21vZHVsZXMvaW1hZ2VzL3ByYWlzZV9maWxsLnBuZycsXG4gICAgICAgICAgICAgICAgbGlrZTogJy4uLy4uL21vZHVsZXMvaW1hZ2VzL2xpa2UucG5nJyxcbiAgICAgICAgICAgICAgICBsaWtlX2ZpbGw6ICcuLi8uLi9tb2R1bGVzL2ltYWdlcy9saWtlX2ZpbGwucG5nJyxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAnLi4vLi4vbW9kdWxlcy9pbWFnZXMvbWVzc2FnZS5wbmcnLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2VfZmlsbDogJy4uLy4uL21vZHVsZXMvaW1hZ2VzL21lc3NhZ2VfZmlsbC5wbmcnXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4iXX0=