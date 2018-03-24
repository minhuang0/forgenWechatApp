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
                console.log(this.momentsData);
                return this.momentsData.map(function (m) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vbWVudHMuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJwcm9wcyIsIm1vbWVudHNEYXRhIiwiQXJyYXkiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJjb21wdXRlZCIsIm1vbWVudHMiLCJjb25zb2xlIiwibG9nIiwibWFwIiwidXNlciIsIm0iLCJpZCIsImF2YXRhciIsImF2YXRhclVybCIsIm5hbWUiLCJuaWNrTmFtZSIsImNvbnRlbnQiLCJpbWFnZXMiLCJjaXJjbGVfaW1ncyIsImkiLCJpbWdVcmwiLCJjcmVhdGVUaW1lIiwiY3JlYXRlZF9hdCIsInVwdm90ZU51bSIsImNvbW1lbnRzX2NvdW50IiwiZmF2b3JpdGVOdW0iLCJ0YXJnZXRzX2NvdW50IiwiZGF0YSIsIm1ldGhvZHMiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDSTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7d0xBQ2pCQyxLLEdBQVE7QUFDSkMseUJBQWFDO0FBRFQsUyxRQUdUQyxPLEdBQVUsRUFBQyxXQUFVLEVBQUMsT0FBTSxVQUFQLEVBQWtCLFNBQVEsYUFBMUIsRUFBWCxFLFFBQ2pCQyxNLEdBQVMsRUFBQyxZQUFXLEVBQUMsZ0JBQWUsRUFBQyxTQUFRLEVBQVQsRUFBWSxPQUFNLFNBQWxCLEVBQTRCLFFBQU8sTUFBbkMsRUFBMEMsU0FBUSxPQUFsRCxFQUEwRCxPQUFNLE9BQWhFLEVBQWhCLEVBQXlGLHNCQUFxQixFQUFDLFNBQVEsTUFBVCxFQUFnQixRQUFPLE1BQXZCLEVBQThCLE9BQU0sU0FBcEMsRUFBOEMsUUFBTyxNQUFyRCxFQUE0RCxTQUFRLE9BQXBFLEVBQTRFLE9BQU0sT0FBbEYsRUFBOUcsRUFBeU0sa0JBQWlCLEVBQUMsU0FBUSxPQUFULEVBQWlCLFFBQU8sT0FBeEIsRUFBZ0MsT0FBTSxTQUF0QyxFQUFnRCxRQUFPLE1BQXZELEVBQThELFNBQVEsT0FBdEUsRUFBOEUsT0FBTSxPQUFwRixFQUExTixFQUFaLEUsUUFDVEMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ0YscURBREU7QUFFRjtBQUZFLFMsUUFLTkMsUSxHQUFXO0FBQ1BDLG1CQURPLHFCQUNJO0FBQ1BDLHdCQUFRQyxHQUFSLENBQVksS0FBS1QsV0FBakI7QUFDQSx1QkFBTyxLQUFLQSxXQUFMLENBQWlCVSxHQUFqQixDQUFxQixhQUFLO0FBQzdCLHdCQUFNQyxPQUFPQyxFQUFFRCxJQUFGLElBQVUsRUFBdkI7QUFDQSwyQkFBTztBQUNIRSw0QkFBSUQsRUFBRUMsRUFESDtBQUVIQyxnQ0FBUUgsS0FBS0ksU0FGVjtBQUdIQyw4QkFBTUwsS0FBS00sUUFIUjtBQUlIQyxpQ0FBU04sRUFBRU0sT0FKUjtBQUtIQyxnQ0FBUSx1QkFBV1AsRUFBRVEsV0FBRixDQUFjVixHQUFkLENBQWtCO0FBQUEsbUNBQUtXLEVBQUVDLE1BQVA7QUFBQSx5QkFBbEIsQ0FBWCxDQUxMO0FBTUhDLG9DQUFZLDBCQUFjWCxFQUFFWSxVQUFoQixDQU5UO0FBT0hDLG1DQUFXYixFQUFFYyxjQVBWO0FBUUhDLHFDQUFhZixFQUFFZ0I7QUFSWixxQkFBUDtBQVVILGlCQVpNLENBQVA7QUFhSDtBQWhCTSxTLFFBbUJYQyxJLEdBQU87QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBakJHLFMsUUFvQlBDLE8sR0FBVTtBQUNOO0FBQ0E7QUFDQTtBQUhNLFM7Ozs7RUFuRHFCLGVBQUtDLFM7O2tCQUFuQmpDLEsiLCJmaWxlIjoibW9tZW50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gICAgaW1wb3J0IG1vbWVudENvbXBvbmVudCBmcm9tICdAL2NvbXBvbmVudHMvbW9tZW50J1xuICAgIGltcG9ydCB7IHRpbWVUcmFuc2Zvcm0sIHBhZGRpbmdJbWcgfSBmcm9tICdAL21vZHVsZXMvY29tbW9uL3V0aWxzJ1xuICAgIGltcG9ydCBzY3JvbGxOYXZiYXJDb21wb25lbnQgZnJvbSAnQC9jb21wb25lbnRzL3Njcm9sbE5hdmJhcidcblxuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuICAgICAgICBwcm9wcyA9IHtcbiAgICAgICAgICAgIG1vbWVudHNEYXRhOiBBcnJheVxuICAgICAgICB9XG4gICAgICAgJHJlcGVhdCA9IHtcIm1vbWVudHNcIjp7XCJjb21cIjpcInYtbW9tZW50XCIsXCJwcm9wc1wiOlwibW9tZW50LnN5bmNcIn19O1xyXG4kcHJvcHMgPSB7XCJ2LW1vbWVudFwiOntcInhtbG5zOnYtYmluZFwiOntcInZhbHVlXCI6XCJcIixcImZvclwiOlwibW9tZW50c1wiLFwiaXRlbVwiOlwiaXRlbVwiLFwiaW5kZXhcIjpcImluZGV4XCIsXCJrZXlcIjpcImluZGV4XCJ9LFwidi1iaW5kOm1vbWVudC5zeW5jXCI6e1widmFsdWVcIjpcIml0ZW1cIixcInR5cGVcIjpcIml0ZW1cIixcImZvclwiOlwibW9tZW50c1wiLFwiaXRlbVwiOlwiaXRlbVwiLFwiaW5kZXhcIjpcImluZGV4XCIsXCJrZXlcIjpcImluZGV4XCJ9LFwidi1iaW5kOmlkLm9uY2VcIjp7XCJ2YWx1ZVwiOlwiaW5kZXhcIixcInR5cGVcIjpcImluZGV4XCIsXCJmb3JcIjpcIm1vbWVudHNcIixcIml0ZW1cIjpcIml0ZW1cIixcImluZGV4XCI6XCJpbmRleFwiLFwia2V5XCI6XCJpbmRleFwifX19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgICAgICAgJ3Ytc2Nyb2xsLW5hdmJhcic6IHNjcm9sbE5hdmJhckNvbXBvbmVudCxcbiAgICAgICAgICAgICd2LW1vbWVudCc6IG1vbWVudENvbXBvbmVudFxuICAgICAgICB9XG5cbiAgICAgICAgY29tcHV0ZWQgPSB7XG4gICAgICAgICAgICBtb21lbnRzICgpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLm1vbWVudHNEYXRhKVxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1vbWVudHNEYXRhLm1hcChtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdXNlciA9IG0udXNlciB8fCB7fVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IG0uaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdmF0YXI6IHVzZXIuYXZhdGFyVXJsLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogdXNlci5uaWNrTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IG0uY29udGVudCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlczogcGFkZGluZ0ltZyhtLmNpcmNsZV9pbWdzLm1hcChpID0+IGkuaW1nVXJsKSksXG4gICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVUaW1lOiB0aW1lVHJhbnNmb3JtKG0uY3JlYXRlZF9hdCksXG4gICAgICAgICAgICAgICAgICAgICAgICB1cHZvdGVOdW06IG0uY29tbWVudHNfY291bnQsXG4gICAgICAgICAgICAgICAgICAgICAgICBmYXZvcml0ZU51bTogbS50YXJnZXRzX2NvdW50XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICAgIC8qIOmhtumDqOWIhuexuyAqL1xuICAgICAgICAgICAgLy8gdGFiczogW3tcbiAgICAgICAgICAgIC8vICAgICB0aXRsZTogJ+acgOaWsCdcbiAgICAgICAgICAgIC8vIH0sIHtcbiAgICAgICAgICAgIC8vICAgICB0aXRsZTogJ+iKseiJuidcbiAgICAgICAgICAgIC8vIH0sIHtcbiAgICAgICAgICAgIC8vICAgICB0aXRsZTogJ+WbreiJuidcbiAgICAgICAgICAgIC8vIH0sIHtcbiAgICAgICAgICAgIC8vICAgICB0aXRsZTogJ+WutuWxhSdcbiAgICAgICAgICAgIC8vIH0sIHtcbiAgICAgICAgICAgIC8vICAgICB0aXRsZTogJ+WpmuWrgSdcbiAgICAgICAgICAgIC8vIH0sIHtcbiAgICAgICAgICAgIC8vICAgICB0aXRsZTogJ+eUn+a0uydcbiAgICAgICAgICAgIC8vIH0sIHtcbiAgICAgICAgICAgIC8vICAgICB0aXRsZTogJ+adgueJqSdcbiAgICAgICAgICAgIC8vIH1dLFxuICAgICAgICAgICAgLy8gYWN0aXZlSW5kZXg6IDBcbiAgICAgICAgfVxuXG4gICAgICAgIG1ldGhvZHMgPSB7XG4gICAgICAgICAgICAvLyBjaGFuZ2VBY3RpdmVJbmRleChlKSB7XG4gICAgICAgICAgICAvLyAgICAgdGhpcy5hY3RpdmVJbmRleCA9IHBhcnNlSW50KGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmlkKVxuICAgICAgICAgICAgLy8gfVxuICAgICAgICB9XG4gICAgfVxuIl19