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
            },
            toggleMoments: function toggleMoments() {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vbWVudC5qcyJdLCJuYW1lcyI6WyJJbmRleCIsInByb3BzIiwibW9tZW50IiwibWV0aG9kcyIsIm9uUmVhZHkiLCJjb25zb2xlIiwibG9nIiwiZ29Nb21lbnREZXRhaWwiLCJpZCIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJ0b2dnbGVNb21lbnRzIiwiJGVtaXQiLCJ0b2dnbGVVcHZvdGUiLCJkYXRhIiwiaWNvbnMiLCJ1cHZvdGUiLCJ1cHZvdGVfZmlsbCIsImxpa2UiLCJsaWtlX2ZpbGwiLCJtZXNzYWdlIiwibWVzc2FnZV9maWxsIiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0k7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7d0xBQ2pCQyxLLEdBQVE7QUFDSkMsb0JBQVE7QUFESixTLFFBSVJDLE8sR0FBVTtBQUNOQyxtQkFETSxxQkFDSztBQUNQQyx3QkFBUUMsR0FBUixDQUFZLEtBQUtKLE1BQWpCO0FBQ0gsYUFISztBQUlOSywwQkFKTSw0QkFJVztBQUNiLG9CQUFJLEtBQUtMLE1BQUwsSUFBZSxLQUFLQSxNQUFMLENBQVlNLEVBQS9CLEVBQW1DO0FBQy9CLG1DQUFLQyxVQUFMLENBQWdCO0FBQ1pDLCtEQUFxQyxLQUFLUixNQUFMLENBQVlNO0FBRHJDLHFCQUFoQjtBQUdIO0FBQ0osYUFWSztBQVdORyx5QkFYTSwyQkFXVztBQUNiLHFCQUFLQyxLQUFMLENBQVcsZUFBWDtBQUNILGFBYks7QUFjTkMsd0JBZE0sMEJBY1U7QUFDWixxQkFBS0QsS0FBTCxDQUFXLGNBQVg7QUFDSDtBQWhCSyxTLFFBbUJWRSxJLEdBQU87QUFDSEMsbUJBQU87QUFDSEMsd0JBQVEsaUNBREw7QUFFSEMsNkJBQWEsc0NBRlY7QUFHSEMsc0JBQU0sK0JBSEg7QUFJSEMsMkJBQVcsb0NBSlI7QUFLSEMseUJBQVMsa0NBTE47QUFNSEMsOEJBQWM7QUFOWDtBQURKLFM7Ozs7RUF4QndCLGVBQUtDLFM7O2tCQUFuQnRCLEsiLCJmaWxlIjoibW9tZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuICAgICAgICBwcm9wcyA9IHtcbiAgICAgICAgICAgIG1vbWVudDoge31cbiAgICAgICAgfVxuXG4gICAgICAgIG1ldGhvZHMgPSB7XG4gICAgICAgICAgICBvblJlYWR5ICgpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLm1vbWVudClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBnb01vbWVudERldGFpbCgpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5tb21lbnQgJiYgdGhpcy5tb21lbnQuaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogYC4uLy4uL3BhZ2VzL2RldGFpbC9tb21lbnQ/aWQ9JHt0aGlzLm1vbWVudC5pZH1gXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRvZ2dsZU1vbWVudHMgKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ3RvZ2dsZU1vbWVudHMnKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRvZ2dsZVVwdm90ZSAoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgndG9nZ2xlVXB2b3RlJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGRhdGEgPSB7XG4gICAgICAgICAgICBpY29uczoge1xuICAgICAgICAgICAgICAgIHVwdm90ZTogJy4uLy4uL21vZHVsZXMvaW1hZ2VzL3ByYWlzZS5wbmcnLFxuICAgICAgICAgICAgICAgIHVwdm90ZV9maWxsOiAnLi4vLi4vbW9kdWxlcy9pbWFnZXMvcHJhaXNlX2ZpbGwucG5nJyxcbiAgICAgICAgICAgICAgICBsaWtlOiAnLi4vLi4vbW9kdWxlcy9pbWFnZXMvbGlrZS5wbmcnLFxuICAgICAgICAgICAgICAgIGxpa2VfZmlsbDogJy4uLy4uL21vZHVsZXMvaW1hZ2VzL2xpa2VfZmlsbC5wbmcnLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICcuLi8uLi9tb2R1bGVzL2ltYWdlcy9tZXNzYWdlLnBuZycsXG4gICAgICAgICAgICAgICAgbWVzc2FnZV9maWxsOiAnLi4vLi4vbW9kdWxlcy9pbWFnZXMvbWVzc2FnZV9maWxsLnBuZydcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiJdfQ==