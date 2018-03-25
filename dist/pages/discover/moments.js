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
        }, _this.$repeat = { "moments": { "com": "v-moment", "props": "moment.sync" } }, _this.$props = { "v-moment": { "xmlns:v-bind": { "value": "", "for": "moments", "item": "item", "index": "index", "key": "index" }, "v-bind:moment.sync": { "value": "item", "type": "item", "for": "moments", "item": "item", "index": "index", "key": "index" }, "v-bind:id.once": { "value": "index", "type": "index", "for": "moments", "item": "item", "index": "index", "key": "index" } } }, _this.$events = {}, _this.components = {
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
                        content: m.content,
                        images: (0, _utils.paddingImg)(m.circle_imgs.map(function (i) {
                            return i.imgUrl;
                        })),
                        createTime: (0, _utils.timeTransform)(m.created_at),
                        upvoteNum: m.targets_count,
                        commentsNum: m.comments_count
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vbWVudHMuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJwcm9wcyIsIm1vbWVudHNEYXRhIiwiQXJyYXkiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJjb21wdXRlZCIsIm1vbWVudHMiLCJtYXAiLCJ1c2VyIiwibSIsImlkIiwidXNlcl9pZCIsImF2YXRhciIsImF2YXRhclVybCIsIm5hbWUiLCJuaWNrTmFtZSIsImNvbnRlbnQiLCJpbWFnZXMiLCJjaXJjbGVfaW1ncyIsImkiLCJpbWdVcmwiLCJjcmVhdGVUaW1lIiwiY3JlYXRlZF9hdCIsInVwdm90ZU51bSIsInRhcmdldHNfY291bnQiLCJjb21tZW50c051bSIsImNvbW1lbnRzX2NvdW50IiwiZGF0YSIsIm1ldGhvZHMiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDSTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O3dMQUNqQkMsSyxHQUFRO0FBQ0pDLHlCQUFhQztBQURULFMsUUFHVEMsTyxHQUFVLEVBQUMsV0FBVSxFQUFDLE9BQU0sVUFBUCxFQUFrQixTQUFRLGFBQTFCLEVBQVgsRSxRQUNqQkMsTSxHQUFTLEVBQUMsWUFBVyxFQUFDLGdCQUFlLEVBQUMsU0FBUSxFQUFULEVBQVksT0FBTSxTQUFsQixFQUE0QixRQUFPLE1BQW5DLEVBQTBDLFNBQVEsT0FBbEQsRUFBMEQsT0FBTSxPQUFoRSxFQUFoQixFQUF5RixzQkFBcUIsRUFBQyxTQUFRLE1BQVQsRUFBZ0IsUUFBTyxNQUF2QixFQUE4QixPQUFNLFNBQXBDLEVBQThDLFFBQU8sTUFBckQsRUFBNEQsU0FBUSxPQUFwRSxFQUE0RSxPQUFNLE9BQWxGLEVBQTlHLEVBQXlNLGtCQUFpQixFQUFDLFNBQVEsT0FBVCxFQUFpQixRQUFPLE9BQXhCLEVBQWdDLE9BQU0sU0FBdEMsRUFBZ0QsUUFBTyxNQUF2RCxFQUE4RCxTQUFRLE9BQXRFLEVBQThFLE9BQU0sT0FBcEYsRUFBMU4sRUFBWixFLFFBQ1RDLE8sR0FBVSxFLFFBQ1RDLFUsR0FBYTtBQUNGO0FBREUsUyxRQUlOQyxRLEdBQVc7QUFDUEMsbUJBRE8scUJBQ0k7QUFDUCx1QkFBTyxLQUFLUCxXQUFMLENBQWlCUSxHQUFqQixDQUFxQixhQUFLO0FBQzdCLHdCQUFNQyxPQUFPQyxFQUFFRCxJQUFGLElBQVUsRUFBdkI7QUFDQSwyQkFBTztBQUNIRSw0QkFBSUQsRUFBRUMsRUFESDtBQUVIQyxpQ0FBU0YsRUFBRUUsT0FGUjtBQUdIQyxnQ0FBUUosS0FBS0ssU0FIVjtBQUlIQyw4QkFBTU4sS0FBS08sUUFKUjtBQUtIQyxpQ0FBU1AsRUFBRU8sT0FMUjtBQU1IQyxnQ0FBUSx1QkFBV1IsRUFBRVMsV0FBRixDQUFjWCxHQUFkLENBQWtCO0FBQUEsbUNBQUtZLEVBQUVDLE1BQVA7QUFBQSx5QkFBbEIsQ0FBWCxDQU5MO0FBT0hDLG9DQUFZLDBCQUFjWixFQUFFYSxVQUFoQixDQVBUO0FBUUhDLG1DQUFXZCxFQUFFZSxhQVJWO0FBU0hDLHFDQUFhaEIsRUFBRWlCO0FBVFoscUJBQVA7QUFXSCxpQkFiTSxDQUFQO0FBY0g7QUFoQk0sUyxRQW1CWEMsSSxHQUFPO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWpCRyxTLFFBb0JQQyxPLEdBQVU7QUFDTjtBQUNBO0FBQ0E7QUFITSxTOzs7O0VBbERxQixlQUFLQyxTOztrQkFBbkJoQyxLIiwiZmlsZSI6Im1vbWVudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICAgIGltcG9ydCBtb21lbnRDb21wb25lbnQgZnJvbSAnQC9jb21wb25lbnRzL21vbWVudCdcbiAgICBpbXBvcnQgeyB0aW1lVHJhbnNmb3JtLCBwYWRkaW5nSW1nIH0gZnJvbSAnQC9tb2R1bGVzL2NvbW1vbi91dGlscydcblxuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuICAgICAgICBwcm9wcyA9IHtcbiAgICAgICAgICAgIG1vbWVudHNEYXRhOiBBcnJheVxuICAgICAgICB9XG4gICAgICAgJHJlcGVhdCA9IHtcIm1vbWVudHNcIjp7XCJjb21cIjpcInYtbW9tZW50XCIsXCJwcm9wc1wiOlwibW9tZW50LnN5bmNcIn19O1xyXG4kcHJvcHMgPSB7XCJ2LW1vbWVudFwiOntcInhtbG5zOnYtYmluZFwiOntcInZhbHVlXCI6XCJcIixcImZvclwiOlwibW9tZW50c1wiLFwiaXRlbVwiOlwiaXRlbVwiLFwiaW5kZXhcIjpcImluZGV4XCIsXCJrZXlcIjpcImluZGV4XCJ9LFwidi1iaW5kOm1vbWVudC5zeW5jXCI6e1widmFsdWVcIjpcIml0ZW1cIixcInR5cGVcIjpcIml0ZW1cIixcImZvclwiOlwibW9tZW50c1wiLFwiaXRlbVwiOlwiaXRlbVwiLFwiaW5kZXhcIjpcImluZGV4XCIsXCJrZXlcIjpcImluZGV4XCJ9LFwidi1iaW5kOmlkLm9uY2VcIjp7XCJ2YWx1ZVwiOlwiaW5kZXhcIixcInR5cGVcIjpcImluZGV4XCIsXCJmb3JcIjpcIm1vbWVudHNcIixcIml0ZW1cIjpcIml0ZW1cIixcImluZGV4XCI6XCJpbmRleFwiLFwia2V5XCI6XCJpbmRleFwifX19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgICAgICAgJ3YtbW9tZW50JzogbW9tZW50Q29tcG9uZW50XG4gICAgICAgIH1cblxuICAgICAgICBjb21wdXRlZCA9IHtcbiAgICAgICAgICAgIG1vbWVudHMgKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1vbWVudHNEYXRhLm1hcChtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdXNlciA9IG0udXNlciB8fCB7fVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IG0uaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VyX2lkOiBtLnVzZXJfaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdmF0YXI6IHVzZXIuYXZhdGFyVXJsLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogdXNlci5uaWNrTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IG0uY29udGVudCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlczogcGFkZGluZ0ltZyhtLmNpcmNsZV9pbWdzLm1hcChpID0+IGkuaW1nVXJsKSksXG4gICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVUaW1lOiB0aW1lVHJhbnNmb3JtKG0uY3JlYXRlZF9hdCksXG4gICAgICAgICAgICAgICAgICAgICAgICB1cHZvdGVOdW06IG0udGFyZ2V0c19jb3VudCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1lbnRzTnVtOiBtLmNvbW1lbnRzX2NvdW50XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICAgIC8qIOmhtumDqOWIhuexuyAqL1xuICAgICAgICAgICAgLy8gdGFiczogW3tcbiAgICAgICAgICAgIC8vICAgICB0aXRsZTogJ+acgOaWsCdcbiAgICAgICAgICAgIC8vIH0sIHtcbiAgICAgICAgICAgIC8vICAgICB0aXRsZTogJ+iKseiJuidcbiAgICAgICAgICAgIC8vIH0sIHtcbiAgICAgICAgICAgIC8vICAgICB0aXRsZTogJ+WbreiJuidcbiAgICAgICAgICAgIC8vIH0sIHtcbiAgICAgICAgICAgIC8vICAgICB0aXRsZTogJ+WutuWxhSdcbiAgICAgICAgICAgIC8vIH0sIHtcbiAgICAgICAgICAgIC8vICAgICB0aXRsZTogJ+WpmuWrgSdcbiAgICAgICAgICAgIC8vIH0sIHtcbiAgICAgICAgICAgIC8vICAgICB0aXRsZTogJ+eUn+a0uydcbiAgICAgICAgICAgIC8vIH0sIHtcbiAgICAgICAgICAgIC8vICAgICB0aXRsZTogJ+adgueJqSdcbiAgICAgICAgICAgIC8vIH1dLFxuICAgICAgICAgICAgLy8gYWN0aXZlSW5kZXg6IDBcbiAgICAgICAgfVxuXG4gICAgICAgIG1ldGhvZHMgPSB7XG4gICAgICAgICAgICAvLyBjaGFuZ2VBY3RpdmVJbmRleChlKSB7XG4gICAgICAgICAgICAvLyAgICAgdGhpcy5hY3RpdmVJbmRleCA9IHBhcnNlSW50KGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmlkKVxuICAgICAgICAgICAgLy8gfVxuICAgICAgICB9XG4gICAgfVxuIl19