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
                console.log(this.moment);
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
                console.log(e);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vbWVudC5qcyJdLCJuYW1lcyI6WyJJbmRleCIsInByb3BzIiwibW9tZW50IiwiT2JqZWN0IiwiY29tcHV0ZWQiLCJ1cHZvdGVJY29uIiwiY29uc29sZSIsImxvZyIsImhhc1phbiIsIm1ldGhvZHMiLCJnb01vbWVudERldGFpbCIsImlkIiwid2VweSIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJmYWlsIiwiZSIsInRvZ2dsZU1vbWVudHMiLCIkZW1pdCIsInRvZ2dsZVVwdm90ZSIsInRvdWNoSW1hZ2UiLCJnb1VzZXJJbmZvIiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJ1c2VyaWQiLCJkYXRhIiwiaWNvbnMiLCJ1cHZvdGUiLCJ1cHZvdGVfZmlsbCIsImxpa2UiLCJsaWtlX2ZpbGwiLCJtZXNzYWdlIiwibWVzc2FnZV9maWxsIiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0k7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7d0xBQ2pCQyxLLEdBQVE7QUFDSkMsb0JBQVFDO0FBREosUyxRQUdSQyxRLEdBQVc7QUFDUEMsc0JBRE8sd0JBQ087QUFDVkMsd0JBQVFDLEdBQVIsQ0FBWSxLQUFLTCxNQUFqQjtBQUNBLHVCQUFPLEtBQUtBLE1BQUwsSUFBZSxLQUFLQSxNQUFMLENBQVlNLE1BQTNCLEdBQW9DLHNDQUFwQyxHQUE2RSxpQ0FBcEY7QUFDSDtBQUpNLFMsUUFNWEMsTyxHQUFVO0FBQ05DLDBCQURNLDRCQUNXO0FBQ2Isb0JBQUksS0FBS1IsTUFBTCxJQUFlLEtBQUtBLE1BQUwsQ0FBWVMsRUFBL0IsRUFBbUM7QUFDL0JDLG1DQUFLQyxVQUFMLENBQWdCO0FBQ1pDLCtEQUFxQyxLQUFLWixNQUFMLENBQVlTLEVBRHJDO0FBRVpJLDRCQUZZLGdCQUVOQyxDQUZNLEVBRUg7QUFDTFYsb0NBQVFDLEdBQVIsQ0FBWVMsQ0FBWjtBQUNIO0FBSlcscUJBQWhCO0FBTUg7QUFDSixhQVZLO0FBV05DLHlCQVhNLHlCQVdTRCxDQVhULEVBV1k7QUFDZCxxQkFBS0UsS0FBTCxDQUFXLGVBQVgsRUFBNEJGLENBQTVCO0FBQ0gsYUFiSztBQWNORyx3QkFkTSx3QkFjUUgsQ0FkUixFQWNXO0FBQ2IscUJBQUtFLEtBQUwsQ0FBVyxjQUFYLEVBQTJCRixDQUEzQjtBQUNILGFBaEJLO0FBaUJOSSxzQkFqQk0sc0JBaUJNSixDQWpCTixFQWlCUztBQUNYLHFCQUFLRSxLQUFMLENBQVcsWUFBWCxFQUF5QkYsQ0FBekI7QUFDSCxhQW5CSztBQW9CTkssc0JBcEJNLHNCQW9CTUwsQ0FwQk4sRUFvQlM7QUFDWFYsd0JBQVFDLEdBQVIsQ0FBWVMsQ0FBWjtBQUNBSiwrQkFBS0MsVUFBTCxDQUFnQjtBQUNaQyw0Q0FBc0JFLEVBQUVNLGFBQUYsQ0FBZ0JDLE9BQWhCLENBQXdCQztBQURsQyxpQkFBaEI7QUFHSDtBQXpCSyxTLFFBNEJWQyxJLEdBQU87QUFDSEMsbUJBQU87QUFDSEMsd0JBQVEsaUNBREw7QUFFSEMsNkJBQWEsc0NBRlY7QUFHSEMsc0JBQU0sK0JBSEg7QUFJSEMsMkJBQVcsb0NBSlI7QUFLSEMseUJBQVMsa0NBTE47QUFNSEMsOEJBQWM7QUFOWDtBQURKLFM7Ozs7RUF0Q3dCcEIsZUFBS3FCLFM7O2tCQUFuQmpDLEsiLCJmaWxlIjoibW9tZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuICAgICAgICBwcm9wcyA9IHtcbiAgICAgICAgICAgIG1vbWVudDogT2JqZWN0XG4gICAgICAgIH1cbiAgICAgICAgY29tcHV0ZWQgPSB7XG4gICAgICAgICAgICB1cHZvdGVJY29uICgpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLm1vbWVudClcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tb21lbnQgJiYgdGhpcy5tb21lbnQuaGFzWmFuID8gJy4uLy4uL21vZHVsZXMvaW1hZ2VzL3ByYWlzZV9maWxsLnBuZycgOiAnLi4vLi4vbW9kdWxlcy9pbWFnZXMvcHJhaXNlLnBuZydcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBtZXRob2RzID0ge1xuICAgICAgICAgICAgZ29Nb21lbnREZXRhaWwoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubW9tZW50ICYmIHRoaXMubW9tZW50LmlkKSB7XG4gICAgICAgICAgICAgICAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6IGAuLi8uLi9wYWdlcy9kZXRhaWwvbW9tZW50P2lkPSR7dGhpcy5tb21lbnQuaWR9YCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZhaWwgKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0b2dnbGVNb21lbnRzIChlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgndG9nZ2xlTW9tZW50cycsIGUpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdG9nZ2xlVXB2b3RlIChlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgndG9nZ2xlVXB2b3RlJywgZSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0b3VjaEltYWdlIChlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgndG91Y2hJbWFnZScsIGUpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZ29Vc2VySW5mbyAoZSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpXG4gICAgICAgICAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBgLi4vbWUvdXNlcj9pZD0ke2UuY3VycmVudFRhcmdldC5kYXRhc2V0LnVzZXJpZH1gXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGRhdGEgPSB7XG4gICAgICAgICAgICBpY29uczoge1xuICAgICAgICAgICAgICAgIHVwdm90ZTogJy4uLy4uL21vZHVsZXMvaW1hZ2VzL3ByYWlzZS5wbmcnLFxuICAgICAgICAgICAgICAgIHVwdm90ZV9maWxsOiAnLi4vLi4vbW9kdWxlcy9pbWFnZXMvcHJhaXNlX2ZpbGwucG5nJyxcbiAgICAgICAgICAgICAgICBsaWtlOiAnLi4vLi4vbW9kdWxlcy9pbWFnZXMvbGlrZS5wbmcnLFxuICAgICAgICAgICAgICAgIGxpa2VfZmlsbDogJy4uLy4uL21vZHVsZXMvaW1hZ2VzL2xpa2VfZmlsbC5wbmcnLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICcuLi8uLi9tb2R1bGVzL2ltYWdlcy9tZXNzYWdlLnBuZycsXG4gICAgICAgICAgICAgICAgbWVzc2FnZV9maWxsOiAnLi4vLi4vbW9kdWxlcy9pbWFnZXMvbWVzc2FnZV9maWxsLnBuZydcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiJdfQ==