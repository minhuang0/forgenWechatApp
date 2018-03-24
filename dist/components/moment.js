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
                console.log('toggleMoments');
                this.$emit('toggleMoments');
            },
            toggleUpvote: function toggleUpvote() {
                console.log('toggleUpvote');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vbWVudC5qcyJdLCJuYW1lcyI6WyJJbmRleCIsInByb3BzIiwibW9tZW50IiwiT2JqZWN0IiwibWV0aG9kcyIsImdvTW9tZW50RGV0YWlsIiwiaWQiLCJuYXZpZ2F0ZVRvIiwidXJsIiwidG9nZ2xlTW9tZW50cyIsImUiLCJjb25zb2xlIiwibG9nIiwiJGVtaXQiLCJ0b2dnbGVVcHZvdGUiLCJkYXRhIiwiaWNvbnMiLCJ1cHZvdGUiLCJ1cHZvdGVfZmlsbCIsImxpa2UiLCJsaWtlX2ZpbGwiLCJtZXNzYWdlIiwibWVzc2FnZV9maWxsIiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0k7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7d0xBQ2pCQyxLLEdBQVE7QUFDSkMsb0JBQVFDO0FBREosUyxRQUdSQyxPLEdBQVU7QUFDTkMsMEJBRE0sNEJBQ1c7QUFDYixvQkFBSSxLQUFLSCxNQUFMLElBQWUsS0FBS0EsTUFBTCxDQUFZSSxFQUEvQixFQUFtQztBQUMvQixtQ0FBS0MsVUFBTCxDQUFnQjtBQUNaQywrREFBcUMsS0FBS04sTUFBTCxDQUFZSTtBQURyQyxxQkFBaEI7QUFHSDtBQUNKLGFBUEs7QUFRTkcseUJBUk0seUJBUVNDLENBUlQsRUFRWTtBQUNkQyx3QkFBUUMsR0FBUixDQUFZLGVBQVo7QUFDQSxxQkFBS0MsS0FBTCxDQUFXLGVBQVg7QUFDSCxhQVhLO0FBWU5DLHdCQVpNLDBCQVlVO0FBQ1pILHdCQUFRQyxHQUFSLENBQVksY0FBWjtBQUNBLHFCQUFLQyxLQUFMLENBQVcsY0FBWDtBQUNIO0FBZkssUyxRQWtCVkUsSSxHQUFPO0FBQ0hDLG1CQUFPO0FBQ0hDLHdCQUFRLGlDQURMO0FBRUhDLDZCQUFhLHNDQUZWO0FBR0hDLHNCQUFNLCtCQUhIO0FBSUhDLDJCQUFXLG9DQUpSO0FBS0hDLHlCQUFTLGtDQUxOO0FBTUhDLDhCQUFjO0FBTlg7QUFESixTOzs7O0VBdEJ3QixlQUFLQyxTOztrQkFBbkJ2QixLIiwiZmlsZSI6Im1vbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcbiAgICAgICAgcHJvcHMgPSB7XG4gICAgICAgICAgICBtb21lbnQ6IE9iamVjdFxuICAgICAgICB9XG4gICAgICAgIG1ldGhvZHMgPSB7XG4gICAgICAgICAgICBnb01vbWVudERldGFpbCgpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5tb21lbnQgJiYgdGhpcy5tb21lbnQuaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogYC4uLy4uL3BhZ2VzL2RldGFpbC9tb21lbnQ/aWQ9JHt0aGlzLm1vbWVudC5pZH1gXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRvZ2dsZU1vbWVudHMgKGUpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygndG9nZ2xlTW9tZW50cycpXG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgndG9nZ2xlTW9tZW50cycpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdG9nZ2xlVXB2b3RlICgpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygndG9nZ2xlVXB2b3RlJylcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCd0b2dnbGVVcHZvdGUnKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICAgIGljb25zOiB7XG4gICAgICAgICAgICAgICAgdXB2b3RlOiAnLi4vLi4vbW9kdWxlcy9pbWFnZXMvcHJhaXNlLnBuZycsXG4gICAgICAgICAgICAgICAgdXB2b3RlX2ZpbGw6ICcuLi8uLi9tb2R1bGVzL2ltYWdlcy9wcmFpc2VfZmlsbC5wbmcnLFxuICAgICAgICAgICAgICAgIGxpa2U6ICcuLi8uLi9tb2R1bGVzL2ltYWdlcy9saWtlLnBuZycsXG4gICAgICAgICAgICAgICAgbGlrZV9maWxsOiAnLi4vLi4vbW9kdWxlcy9pbWFnZXMvbGlrZV9maWxsLnBuZycsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJy4uLy4uL21vZHVsZXMvaW1hZ2VzL21lc3NhZ2UucG5nJyxcbiAgICAgICAgICAgICAgICBtZXNzYWdlX2ZpbGw6ICcuLi8uLi9tb2R1bGVzL2ltYWdlcy9tZXNzYWdlX2ZpbGwucG5nJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuIl19