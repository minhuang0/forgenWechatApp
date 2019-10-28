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
        }, _this.computed = {
            upvoteIcon: function upvoteIcon() {
                return this.moment && this.moment.hasZan ? '../../modules/images/praise_fill.png' : '../../modules/images/praise.png';
            }
        }, _this.methods = {
            goMomentDetail: function goMomentDetail() {
                if (this.moment && this.moment.id) {
                    _wepy2.default.navigateTo({
                        url: '../../pages/detail/moment?id=' + this.moment.id,
                        fail: function fail(e) {
                            console.log(e);
                        }
                    });
                }
            },
            toggleMoments: function toggleMoments(e) {
                this.$emit('toggleMoments', e);
            },
            toggleUpvote: function toggleUpvote(e) {
                this.$emit('toggleUpvote', e);
            },
            touchImage: function touchImage(e) {
                this.$emit('touchImage', e);
            },
            goUserInfo: function goUserInfo(e) {
                _wepy2.default.navigateTo({
                    url: '../me/user?id=' + e.currentTarget.dataset.userid
                });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vbWVudC5qcyJdLCJuYW1lcyI6WyJJbmRleCIsInByb3BzIiwibW9tZW50IiwiT2JqZWN0IiwiY29tcHV0ZWQiLCJ1cHZvdGVJY29uIiwiaGFzWmFuIiwibWV0aG9kcyIsImdvTW9tZW50RGV0YWlsIiwiaWQiLCJ3ZXB5IiwibmF2aWdhdGVUbyIsInVybCIsImZhaWwiLCJlIiwiY29uc29sZSIsImxvZyIsInRvZ2dsZU1vbWVudHMiLCIkZW1pdCIsInRvZ2dsZVVwdm90ZSIsInRvdWNoSW1hZ2UiLCJnb1VzZXJJbmZvIiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJ1c2VyaWQiLCJkYXRhIiwiaWNvbnMiLCJ1cHZvdGUiLCJ1cHZvdGVfZmlsbCIsImxpa2UiLCJsaWtlX2ZpbGwiLCJtZXNzYWdlIiwibWVzc2FnZV9maWxsIiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0k7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7d0xBQ2pCQyxLLEdBQVE7QUFDSkMsb0JBQVFDO0FBREosUyxRQUdSQyxRLEdBQVc7QUFDUEMsc0JBRE8sd0JBQ087QUFDVix1QkFBTyxLQUFLSCxNQUFMLElBQWUsS0FBS0EsTUFBTCxDQUFZSSxNQUEzQixHQUFvQyxzQ0FBcEMsR0FBNkUsaUNBQXBGO0FBQ0g7QUFITSxTLFFBS1hDLE8sR0FBVTtBQUNOQywwQkFETSw0QkFDVztBQUNiLG9CQUFJLEtBQUtOLE1BQUwsSUFBZSxLQUFLQSxNQUFMLENBQVlPLEVBQS9CLEVBQW1DO0FBQy9CQyxtQ0FBS0MsVUFBTCxDQUFnQjtBQUNaQywrREFBcUMsS0FBS1YsTUFBTCxDQUFZTyxFQURyQztBQUVaSSw0QkFGWSxnQkFFTkMsQ0FGTSxFQUVIO0FBQ0xDLG9DQUFRQyxHQUFSLENBQVlGLENBQVo7QUFDSDtBQUpXLHFCQUFoQjtBQU1IO0FBQ0osYUFWSztBQVdORyx5QkFYTSx5QkFXU0gsQ0FYVCxFQVdZO0FBQ2QscUJBQUtJLEtBQUwsQ0FBVyxlQUFYLEVBQTRCSixDQUE1QjtBQUNILGFBYks7QUFjTkssd0JBZE0sd0JBY1FMLENBZFIsRUFjVztBQUNiLHFCQUFLSSxLQUFMLENBQVcsY0FBWCxFQUEyQkosQ0FBM0I7QUFDSCxhQWhCSztBQWlCTk0sc0JBakJNLHNCQWlCTU4sQ0FqQk4sRUFpQlM7QUFDWCxxQkFBS0ksS0FBTCxDQUFXLFlBQVgsRUFBeUJKLENBQXpCO0FBQ0gsYUFuQks7QUFvQk5PLHNCQXBCTSxzQkFvQk1QLENBcEJOLEVBb0JTO0FBQ1hKLCtCQUFLQyxVQUFMLENBQWdCO0FBQ1pDLDRDQUFzQkUsRUFBRVEsYUFBRixDQUFnQkMsT0FBaEIsQ0FBd0JDO0FBRGxDLGlCQUFoQjtBQUdIO0FBeEJLLFMsUUEyQlZDLEksR0FBTztBQUNIQyxtQkFBTztBQUNIQyx3QkFBUSxpQ0FETDtBQUVIQyw2QkFBYSxzQ0FGVjtBQUdIQyxzQkFBTSwrQkFISDtBQUlIQywyQkFBVyxvQ0FKUjtBQUtIQyx5QkFBUyxrQ0FMTjtBQU1IQyw4QkFBYztBQU5YO0FBREosUzs7OztFQXBDd0J0QixlQUFLdUIsUzs7a0JBQW5CakMsSyIsImZpbGUiOiJtb21lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XG4gICAgICAgIHByb3BzID0ge1xuICAgICAgICAgICAgbW9tZW50OiBPYmplY3RcbiAgICAgICAgfVxuICAgICAgICBjb21wdXRlZCA9IHtcbiAgICAgICAgICAgIHVwdm90ZUljb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1vbWVudCAmJiB0aGlzLm1vbWVudC5oYXNaYW4gPyAnLi4vLi4vbW9kdWxlcy9pbWFnZXMvcHJhaXNlX2ZpbGwucG5nJyA6ICcuLi8uLi9tb2R1bGVzL2ltYWdlcy9wcmFpc2UucG5nJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIG1ldGhvZHMgPSB7XG4gICAgICAgICAgICBnb01vbWVudERldGFpbCgpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5tb21lbnQgJiYgdGhpcy5tb21lbnQuaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogYC4uLy4uL3BhZ2VzL2RldGFpbC9tb21lbnQ/aWQ9JHt0aGlzLm1vbWVudC5pZH1gLFxuICAgICAgICAgICAgICAgICAgICAgICAgZmFpbCAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRvZ2dsZU1vbWVudHMgKGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCd0b2dnbGVNb21lbnRzJywgZSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0b2dnbGVVcHZvdGUgKGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCd0b2dnbGVVcHZvdGUnLCBlKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRvdWNoSW1hZ2UgKGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCd0b3VjaEltYWdlJywgZSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBnb1VzZXJJbmZvIChlKSB7XG4gICAgICAgICAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBgLi4vbWUvdXNlcj9pZD0ke2UuY3VycmVudFRhcmdldC5kYXRhc2V0LnVzZXJpZH1gXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGRhdGEgPSB7XG4gICAgICAgICAgICBpY29uczoge1xuICAgICAgICAgICAgICAgIHVwdm90ZTogJy4uLy4uL21vZHVsZXMvaW1hZ2VzL3ByYWlzZS5wbmcnLFxuICAgICAgICAgICAgICAgIHVwdm90ZV9maWxsOiAnLi4vLi4vbW9kdWxlcy9pbWFnZXMvcHJhaXNlX2ZpbGwucG5nJyxcbiAgICAgICAgICAgICAgICBsaWtlOiAnLi4vLi4vbW9kdWxlcy9pbWFnZXMvbGlrZS5wbmcnLFxuICAgICAgICAgICAgICAgIGxpa2VfZmlsbDogJy4uLy4uL21vZHVsZXMvaW1hZ2VzL2xpa2VfZmlsbC5wbmcnLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICcuLi8uLi9tb2R1bGVzL2ltYWdlcy9tZXNzYWdlLnBuZycsXG4gICAgICAgICAgICAgICAgbWVzc2FnZV9maWxsOiAnLi4vLi4vbW9kdWxlcy9pbWFnZXMvbWVzc2FnZV9maWxsLnBuZydcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiJdfQ==