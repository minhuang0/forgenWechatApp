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

var _scrollNavbar = require('./../../components/scrollNavbar.js');

var _scrollNavbar2 = _interopRequireDefault(_scrollNavbar);

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
        }, _this.$repeat = { "moments": { "com": "v-moment", "props": "moment.sync" } }, _this.$props = { "v-moment": { "xmlns:v-bind": { "value": "", "for": "moments", "item": "item", "index": "index", "key": "index" }, "v-bind:moment.sync": { "value": "item", "type": "item", "for": "moments", "item": "item", "index": "index", "key": "index" }, "v-bind:id.once": { "value": "index", "type": "index", "for": "moments", "item": "item", "index": "index", "key": "index" } } }, _this.$events = {}, _this.components = {
            'v-scroll-navbar': _scrollNavbar2.default,
            'v-moment': _moment2.default
        }, _this.computed = {
            moments: function moments() {
                return this.momentsData.map(function (m) {
                    console.log(m);
                    var user = m.user || {};
                    return {
                        id: m.id,
                        avatar: user.avatarUrl,
                        name: user.nickName,
                        content: m.content,
                        images: (0, _utils.paddingImg)(m.circle_imgs.map(function (i) {
                            return i.imgUrl;
                        })),
                        createTime: (0, _utils.timeTransform)(m.created_at),
                        upvoteNum: m.comments_count,
                        favoriteNum: m.targets_count
                    };
                });
            }
        }, _this.data = {
            /* 顶部分类 */
            // tabs: [{
            //     title: '最新'
            // }, {
            //     title: '花艺'
            // }, {
            //     title: '园艺'
            // }, {
            //     title: '家居'
            // }, {
            //     title: '婚嫁'
            // }, {
            //     title: '生活'
            // }, {
            //     title: '杂物'
            // }],
            // activeIndex: 0
        }, _this.methods = {
            // changeActiveIndex(e) {
            //     this.activeIndex = parseInt(e.currentTarget.dataset.id)
            // }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return Index;
}(_wepy2.default.component);

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vbWVudHMuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJwcm9wcyIsIm1vbWVudHNEYXRhIiwiQXJyYXkiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJjb21wdXRlZCIsIm1vbWVudHMiLCJtYXAiLCJjb25zb2xlIiwibG9nIiwibSIsInVzZXIiLCJpZCIsImF2YXRhciIsImF2YXRhclVybCIsIm5hbWUiLCJuaWNrTmFtZSIsImNvbnRlbnQiLCJpbWFnZXMiLCJjaXJjbGVfaW1ncyIsImkiLCJpbWdVcmwiLCJjcmVhdGVUaW1lIiwiY3JlYXRlZF9hdCIsInVwdm90ZU51bSIsImNvbW1lbnRzX2NvdW50IiwiZmF2b3JpdGVOdW0iLCJ0YXJnZXRzX2NvdW50IiwiZGF0YSIsIm1ldGhvZHMiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDSTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7d0xBQ2pCQyxLLEdBQVE7QUFDSkMseUJBQWFDO0FBRFQsUyxRQUdUQyxPLEdBQVUsRUFBQyxXQUFVLEVBQUMsT0FBTSxVQUFQLEVBQWtCLFNBQVEsYUFBMUIsRUFBWCxFLFFBQ2pCQyxNLEdBQVMsRUFBQyxZQUFXLEVBQUMsZ0JBQWUsRUFBQyxTQUFRLEVBQVQsRUFBWSxPQUFNLFNBQWxCLEVBQTRCLFFBQU8sTUFBbkMsRUFBMEMsU0FBUSxPQUFsRCxFQUEwRCxPQUFNLE9BQWhFLEVBQWhCLEVBQXlGLHNCQUFxQixFQUFDLFNBQVEsTUFBVCxFQUFnQixRQUFPLE1BQXZCLEVBQThCLE9BQU0sU0FBcEMsRUFBOEMsUUFBTyxNQUFyRCxFQUE0RCxTQUFRLE9BQXBFLEVBQTRFLE9BQU0sT0FBbEYsRUFBOUcsRUFBeU0sa0JBQWlCLEVBQUMsU0FBUSxPQUFULEVBQWlCLFFBQU8sT0FBeEIsRUFBZ0MsT0FBTSxTQUF0QyxFQUFnRCxRQUFPLE1BQXZELEVBQThELFNBQVEsT0FBdEUsRUFBOEUsT0FBTSxPQUFwRixFQUExTixFQUFaLEUsUUFDVEMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ0YscURBREU7QUFFRjtBQUZFLFMsUUFLTkMsUSxHQUFXO0FBQ1BDLG1CQURPLHFCQUNJO0FBQ1AsdUJBQU8sS0FBS1AsV0FBTCxDQUFpQlEsR0FBakIsQ0FBcUIsYUFBSztBQUM3QkMsNEJBQVFDLEdBQVIsQ0FBWUMsQ0FBWjtBQUNBLHdCQUFNQyxPQUFPRCxFQUFFQyxJQUFGLElBQVUsRUFBdkI7QUFDQSwyQkFBTztBQUNIQyw0QkFBSUYsRUFBRUUsRUFESDtBQUVIQyxnQ0FBUUYsS0FBS0csU0FGVjtBQUdIQyw4QkFBTUosS0FBS0ssUUFIUjtBQUlIQyxpQ0FBU1AsRUFBRU8sT0FKUjtBQUtIQyxnQ0FBUSx1QkFBV1IsRUFBRVMsV0FBRixDQUFjWixHQUFkLENBQWtCO0FBQUEsbUNBQUthLEVBQUVDLE1BQVA7QUFBQSx5QkFBbEIsQ0FBWCxDQUxMO0FBTUhDLG9DQUFZLDBCQUFjWixFQUFFYSxVQUFoQixDQU5UO0FBT0hDLG1DQUFXZCxFQUFFZSxjQVBWO0FBUUhDLHFDQUFhaEIsRUFBRWlCO0FBUloscUJBQVA7QUFVSCxpQkFiTSxDQUFQO0FBY0g7QUFoQk0sUyxRQW1CWEMsSSxHQUFPO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWpCRyxTLFFBb0JQQyxPLEdBQVU7QUFDTjtBQUNBO0FBQ0E7QUFITSxTOzs7O0VBbkRxQixlQUFLQyxTOztrQkFBbkJqQyxLIiwiZmlsZSI6Im1vbWVudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICAgIGltcG9ydCBtb21lbnRDb21wb25lbnQgZnJvbSAnQC9jb21wb25lbnRzL21vbWVudCdcbiAgICBpbXBvcnQgeyB0aW1lVHJhbnNmb3JtLCBwYWRkaW5nSW1nIH0gZnJvbSAnQC9tb2R1bGVzL2NvbW1vbi91dGlscydcbiAgICBpbXBvcnQgc2Nyb2xsTmF2YmFyQ29tcG9uZW50IGZyb20gJ0AvY29tcG9uZW50cy9zY3JvbGxOYXZiYXInXG5cbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcbiAgICAgICAgcHJvcHMgPSB7XG4gICAgICAgICAgICBtb21lbnRzRGF0YTogQXJyYXlcbiAgICAgICAgfVxuICAgICAgICRyZXBlYXQgPSB7XCJtb21lbnRzXCI6e1wiY29tXCI6XCJ2LW1vbWVudFwiLFwicHJvcHNcIjpcIm1vbWVudC5zeW5jXCJ9fTtcclxuJHByb3BzID0ge1widi1tb21lbnRcIjp7XCJ4bWxuczp2LWJpbmRcIjp7XCJ2YWx1ZVwiOlwiXCIsXCJmb3JcIjpcIm1vbWVudHNcIixcIml0ZW1cIjpcIml0ZW1cIixcImluZGV4XCI6XCJpbmRleFwiLFwia2V5XCI6XCJpbmRleFwifSxcInYtYmluZDptb21lbnQuc3luY1wiOntcInZhbHVlXCI6XCJpdGVtXCIsXCJ0eXBlXCI6XCJpdGVtXCIsXCJmb3JcIjpcIm1vbWVudHNcIixcIml0ZW1cIjpcIml0ZW1cIixcImluZGV4XCI6XCJpbmRleFwiLFwia2V5XCI6XCJpbmRleFwifSxcInYtYmluZDppZC5vbmNlXCI6e1widmFsdWVcIjpcImluZGV4XCIsXCJ0eXBlXCI6XCJpbmRleFwiLFwiZm9yXCI6XCJtb21lbnRzXCIsXCJpdGVtXCI6XCJpdGVtXCIsXCJpbmRleFwiOlwiaW5kZXhcIixcImtleVwiOlwiaW5kZXhcIn19fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICAgICAgICAgICd2LXNjcm9sbC1uYXZiYXInOiBzY3JvbGxOYXZiYXJDb21wb25lbnQsXG4gICAgICAgICAgICAndi1tb21lbnQnOiBtb21lbnRDb21wb25lbnRcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbXB1dGVkID0ge1xuICAgICAgICAgICAgbW9tZW50cyAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubW9tZW50c0RhdGEubWFwKG0gPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhtKVxuICAgICAgICAgICAgICAgICAgICBjb25zdCB1c2VyID0gbS51c2VyIHx8IHt9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogbS5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGF2YXRhcjogdXNlci5hdmF0YXJVcmwsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiB1c2VyLm5pY2tOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogbS5jb250ZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VzOiBwYWRkaW5nSW1nKG0uY2lyY2xlX2ltZ3MubWFwKGkgPT4gaS5pbWdVcmwpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZVRpbWU6IHRpbWVUcmFuc2Zvcm0obS5jcmVhdGVkX2F0KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHVwdm90ZU51bTogbS5jb21tZW50c19jb3VudCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZhdm9yaXRlTnVtOiBtLnRhcmdldHNfY291bnRcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBkYXRhID0ge1xuICAgICAgICAgICAgLyog6aG26YOo5YiG57G7ICovXG4gICAgICAgICAgICAvLyB0YWJzOiBbe1xuICAgICAgICAgICAgLy8gICAgIHRpdGxlOiAn5pyA5pawJ1xuICAgICAgICAgICAgLy8gfSwge1xuICAgICAgICAgICAgLy8gICAgIHRpdGxlOiAn6Iqx6Im6J1xuICAgICAgICAgICAgLy8gfSwge1xuICAgICAgICAgICAgLy8gICAgIHRpdGxlOiAn5Zut6Im6J1xuICAgICAgICAgICAgLy8gfSwge1xuICAgICAgICAgICAgLy8gICAgIHRpdGxlOiAn5a625bGFJ1xuICAgICAgICAgICAgLy8gfSwge1xuICAgICAgICAgICAgLy8gICAgIHRpdGxlOiAn5ama5auBJ1xuICAgICAgICAgICAgLy8gfSwge1xuICAgICAgICAgICAgLy8gICAgIHRpdGxlOiAn55Sf5rS7J1xuICAgICAgICAgICAgLy8gfSwge1xuICAgICAgICAgICAgLy8gICAgIHRpdGxlOiAn5p2C54mpJ1xuICAgICAgICAgICAgLy8gfV0sXG4gICAgICAgICAgICAvLyBhY3RpdmVJbmRleDogMFxuICAgICAgICB9XG5cbiAgICAgICAgbWV0aG9kcyA9IHtcbiAgICAgICAgICAgIC8vIGNoYW5nZUFjdGl2ZUluZGV4KGUpIHtcbiAgICAgICAgICAgIC8vICAgICB0aGlzLmFjdGl2ZUluZGV4ID0gcGFyc2VJbnQoZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaWQpXG4gICAgICAgICAgICAvLyB9XG4gICAgICAgIH1cbiAgICB9XG4iXX0=