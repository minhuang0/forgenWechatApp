'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _moment = require('./../../components/moment.js');

var _moment2 = _interopRequireDefault(_moment);

var _utils = require('./../../modules/common/utils.js');

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
            momentsData: Array
        }, _this.$repeat = { "moments": { "com": "v-moment", "props": "moment.sync" } }, _this.$props = { "v-moment": { "xmlns:v-bind": { "value": "", "for": "moments", "item": "item", "index": "index", "key": "index" }, "v-bind:moment.sync": { "value": "item", "type": "item", "for": "moments", "item": "item", "index": "index", "key": "index" }, "v-bind:id.once": { "value": "index", "type": "index", "for": "moments", "item": "item", "index": "index", "key": "index" }, "xmlns:v-on": { "value": "", "for": "moments", "item": "item", "index": "index", "key": "index" } } }, _this.$events = { "v-moment": { "v-on:toggleUpvote": "goMomentDetail", "v-on:toggleMoments": "goMomentDetail" } }, _this.components = {
            'v-moment': _moment2.default
        }, _this.computed = {
            moments: function moments() {
                return this.momentsData.map(function (m) {
                    var user = m.user || {};
                    return {
                        id: m.id,
                        user_id: m.user_id,
                        avatar: user.avatarUrl,
                        name: user.nickName,
                        content: m.content || '',
                        images: (0, _utils.paddingImg)(m.circle_imgs.map(function (i) {
                            return i.imgUrl;
                        })),
                        createTime: (0, _utils.timeTransform)(m.created_at),
                        upvoteNum: m.targets_count,
                        commentsNum: m.comments_count,
                        hasZan: m.hasZan,
                        upvoteIcon: m.hasZan ? '../../modules/images/praise_fill.png' : '../../modules/images/praise.png'
                    };
                });
            }
        }, _this.methods = {
            goMomentDetail: function goMomentDetail(e) {
                var id = e.currentTarget.dataset.momentid;
                if (id) {
                    _wepy2.default.navigateTo({
                        url: '../../pages/detail/moment?id=' + id,
                        fail: function fail(e) {
                            console.log(e);
                        }
                    });
                }
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return Index;
}(_wepy2.default.component);

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vbWVudHMuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJwcm9wcyIsIm1vbWVudHNEYXRhIiwiQXJyYXkiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJtb21lbnRDb21wb25lbnQiLCJjb21wdXRlZCIsIm1vbWVudHMiLCJtYXAiLCJ1c2VyIiwibSIsImlkIiwidXNlcl9pZCIsImF2YXRhciIsImF2YXRhclVybCIsIm5hbWUiLCJuaWNrTmFtZSIsImNvbnRlbnQiLCJpbWFnZXMiLCJjaXJjbGVfaW1ncyIsImkiLCJpbWdVcmwiLCJjcmVhdGVUaW1lIiwiY3JlYXRlZF9hdCIsInVwdm90ZU51bSIsInRhcmdldHNfY291bnQiLCJjb21tZW50c051bSIsImNvbW1lbnRzX2NvdW50IiwiaGFzWmFuIiwidXB2b3RlSWNvbiIsIm1ldGhvZHMiLCJnb01vbWVudERldGFpbCIsImUiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsIm1vbWVudGlkIiwid2VweSIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJmYWlsIiwiY29uc29sZSIsImxvZyIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNJOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7d0xBQ2pCQyxLLEdBQVE7QUFDSkMseUJBQWFDO0FBRFQsUyxRQUdUQyxPLEdBQVUsRUFBQyxXQUFVLEVBQUMsT0FBTSxVQUFQLEVBQWtCLFNBQVEsYUFBMUIsRUFBWCxFLFFBQ2pCQyxNLEdBQVMsRUFBQyxZQUFXLEVBQUMsZ0JBQWUsRUFBQyxTQUFRLEVBQVQsRUFBWSxPQUFNLFNBQWxCLEVBQTRCLFFBQU8sTUFBbkMsRUFBMEMsU0FBUSxPQUFsRCxFQUEwRCxPQUFNLE9BQWhFLEVBQWhCLEVBQXlGLHNCQUFxQixFQUFDLFNBQVEsTUFBVCxFQUFnQixRQUFPLE1BQXZCLEVBQThCLE9BQU0sU0FBcEMsRUFBOEMsUUFBTyxNQUFyRCxFQUE0RCxTQUFRLE9BQXBFLEVBQTRFLE9BQU0sT0FBbEYsRUFBOUcsRUFBeU0sa0JBQWlCLEVBQUMsU0FBUSxPQUFULEVBQWlCLFFBQU8sT0FBeEIsRUFBZ0MsT0FBTSxTQUF0QyxFQUFnRCxRQUFPLE1BQXZELEVBQThELFNBQVEsT0FBdEUsRUFBOEUsT0FBTSxPQUFwRixFQUExTixFQUF1VCxjQUFhLEVBQUMsU0FBUSxFQUFULEVBQVksT0FBTSxTQUFsQixFQUE0QixRQUFPLE1BQW5DLEVBQTBDLFNBQVEsT0FBbEQsRUFBMEQsT0FBTSxPQUFoRSxFQUFwVSxFQUFaLEUsUUFDVEMsTyxHQUFVLEVBQUMsWUFBVyxFQUFDLHFCQUFvQixnQkFBckIsRUFBc0Msc0JBQXFCLGdCQUEzRCxFQUFaLEUsUUFDVEMsVSxHQUFhO0FBQ0Ysd0JBQVlDO0FBRFYsUyxRQUlOQyxRLEdBQVc7QUFDUEMsbUJBRE8scUJBQ0k7QUFDUCx1QkFBTyxLQUFLUixXQUFMLENBQWlCUyxHQUFqQixDQUFxQixhQUFLO0FBQzdCLHdCQUFNQyxPQUFPQyxFQUFFRCxJQUFGLElBQVUsRUFBdkI7QUFDQSwyQkFBTztBQUNIRSw0QkFBSUQsRUFBRUMsRUFESDtBQUVIQyxpQ0FBU0YsRUFBRUUsT0FGUjtBQUdIQyxnQ0FBUUosS0FBS0ssU0FIVjtBQUlIQyw4QkFBTU4sS0FBS08sUUFKUjtBQUtIQyxpQ0FBU1AsRUFBRU8sT0FBRixJQUFhLEVBTG5CO0FBTUhDLGdDQUFRLHVCQUFXUixFQUFFUyxXQUFGLENBQWNYLEdBQWQsQ0FBa0I7QUFBQSxtQ0FBS1ksRUFBRUMsTUFBUDtBQUFBLHlCQUFsQixDQUFYLENBTkw7QUFPSEMsb0NBQVksMEJBQWNaLEVBQUVhLFVBQWhCLENBUFQ7QUFRSEMsbUNBQVdkLEVBQUVlLGFBUlY7QUFTSEMscUNBQWFoQixFQUFFaUIsY0FUWjtBQVVIQyxnQ0FBUWxCLEVBQUVrQixNQVZQO0FBV0hDLG9DQUFZbkIsRUFBRWtCLE1BQUYsR0FBVyxzQ0FBWCxHQUFvRDtBQVg3RCxxQkFBUDtBQWFILGlCQWZNLENBQVA7QUFnQkg7QUFsQk0sUyxRQW9CWEUsTyxHQUFVO0FBQ05DLDBCQURNLDBCQUNTQyxDQURULEVBQ1k7QUFDZCxvQkFBTXJCLEtBQUtxQixFQUFFQyxhQUFGLENBQWdCQyxPQUFoQixDQUF3QkMsUUFBbkM7QUFDQSxvQkFBSXhCLEVBQUosRUFBUTtBQUNKeUIsbUNBQUtDLFVBQUwsQ0FBZ0I7QUFDWkMsK0RBQXFDM0IsRUFEekI7QUFFWjRCLDRCQUZZLGdCQUVOUCxDQUZNLEVBRUg7QUFDTFEsb0NBQVFDLEdBQVIsQ0FBWVQsQ0FBWjtBQUNIO0FBSlcscUJBQWhCO0FBTUg7QUFDSjtBQVhLLFM7Ozs7RUEvQnFCSSxlQUFLTSxTOztrQkFBbkI3QyxLIiwiZmlsZSI6Im1vbWVudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICAgIGltcG9ydCBtb21lbnRDb21wb25lbnQgZnJvbSAnQC9jb21wb25lbnRzL21vbWVudCdcbiAgICBpbXBvcnQgeyB0aW1lVHJhbnNmb3JtLCBwYWRkaW5nSW1nIH0gZnJvbSAnQC9tb2R1bGVzL2NvbW1vbi91dGlscydcblxuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuICAgICAgICBwcm9wcyA9IHtcbiAgICAgICAgICAgIG1vbWVudHNEYXRhOiBBcnJheVxuICAgICAgICB9XG4gICAgICAgJHJlcGVhdCA9IHtcIm1vbWVudHNcIjp7XCJjb21cIjpcInYtbW9tZW50XCIsXCJwcm9wc1wiOlwibW9tZW50LnN5bmNcIn19O1xyXG4kcHJvcHMgPSB7XCJ2LW1vbWVudFwiOntcInhtbG5zOnYtYmluZFwiOntcInZhbHVlXCI6XCJcIixcImZvclwiOlwibW9tZW50c1wiLFwiaXRlbVwiOlwiaXRlbVwiLFwiaW5kZXhcIjpcImluZGV4XCIsXCJrZXlcIjpcImluZGV4XCJ9LFwidi1iaW5kOm1vbWVudC5zeW5jXCI6e1widmFsdWVcIjpcIml0ZW1cIixcInR5cGVcIjpcIml0ZW1cIixcImZvclwiOlwibW9tZW50c1wiLFwiaXRlbVwiOlwiaXRlbVwiLFwiaW5kZXhcIjpcImluZGV4XCIsXCJrZXlcIjpcImluZGV4XCJ9LFwidi1iaW5kOmlkLm9uY2VcIjp7XCJ2YWx1ZVwiOlwiaW5kZXhcIixcInR5cGVcIjpcImluZGV4XCIsXCJmb3JcIjpcIm1vbWVudHNcIixcIml0ZW1cIjpcIml0ZW1cIixcImluZGV4XCI6XCJpbmRleFwiLFwia2V5XCI6XCJpbmRleFwifSxcInhtbG5zOnYtb25cIjp7XCJ2YWx1ZVwiOlwiXCIsXCJmb3JcIjpcIm1vbWVudHNcIixcIml0ZW1cIjpcIml0ZW1cIixcImluZGV4XCI6XCJpbmRleFwiLFwia2V5XCI6XCJpbmRleFwifX19O1xyXG4kZXZlbnRzID0ge1widi1tb21lbnRcIjp7XCJ2LW9uOnRvZ2dsZVVwdm90ZVwiOlwiZ29Nb21lbnREZXRhaWxcIixcInYtb246dG9nZ2xlTW9tZW50c1wiOlwiZ29Nb21lbnREZXRhaWxcIn19O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICAgICAgICAgICd2LW1vbWVudCc6IG1vbWVudENvbXBvbmVudFxuICAgICAgICB9XG5cbiAgICAgICAgY29tcHV0ZWQgPSB7XG4gICAgICAgICAgICBtb21lbnRzICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tb21lbnRzRGF0YS5tYXAobSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHVzZXIgPSBtLnVzZXIgfHwge31cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBtLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlcl9pZDogbS51c2VyX2lkLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXZhdGFyOiB1c2VyLmF2YXRhclVybCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHVzZXIubmlja05hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBtLmNvbnRlbnQgfHwgJycsXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZXM6IHBhZGRpbmdJbWcobS5jaXJjbGVfaW1ncy5tYXAoaSA9PiBpLmltZ1VybCkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlVGltZTogdGltZVRyYW5zZm9ybShtLmNyZWF0ZWRfYXQpLFxuICAgICAgICAgICAgICAgICAgICAgICAgdXB2b3RlTnVtOiBtLnRhcmdldHNfY291bnQsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21tZW50c051bTogbS5jb21tZW50c19jb3VudCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhc1phbjogbS5oYXNaYW4sXG4gICAgICAgICAgICAgICAgICAgICAgICB1cHZvdGVJY29uOiBtLmhhc1phbiA/ICcuLi8uLi9tb2R1bGVzL2ltYWdlcy9wcmFpc2VfZmlsbC5wbmcnIDogJy4uLy4uL21vZHVsZXMvaW1hZ2VzL3ByYWlzZS5wbmcnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIG1ldGhvZHMgPSB7XG4gICAgICAgICAgICBnb01vbWVudERldGFpbChlKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaWQgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5tb21lbnRpZFxuICAgICAgICAgICAgICAgIGlmIChpZCkge1xuICAgICAgICAgICAgICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBgLi4vLi4vcGFnZXMvZGV0YWlsL21vbWVudD9pZD0ke2lkfWAsXG4gICAgICAgICAgICAgICAgICAgICAgICBmYWlsIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4iXX0=