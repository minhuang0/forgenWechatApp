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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vbWVudHMuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJwcm9wcyIsIm1vbWVudHNEYXRhIiwiQXJyYXkiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJjb21wdXRlZCIsIm1vbWVudHMiLCJtYXAiLCJ1c2VyIiwibSIsImlkIiwiYXZhdGFyIiwiYXZhdGFyVXJsIiwibmFtZSIsIm5pY2tOYW1lIiwiY29udGVudCIsImltYWdlcyIsImNpcmNsZV9pbWdzIiwiaSIsImltZ1VybCIsImNyZWF0ZVRpbWUiLCJjcmVhdGVkX2F0IiwidXB2b3RlTnVtIiwidGFyZ2V0c19jb3VudCIsImNvbW1lbnRzTnVtIiwiY29tbWVudHNfY291bnQiLCJkYXRhIiwibWV0aG9kcyIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNJOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7Ozt3TEFDakJDLEssR0FBUTtBQUNKQyx5QkFBYUM7QUFEVCxTLFFBR1RDLE8sR0FBVSxFQUFDLFdBQVUsRUFBQyxPQUFNLFVBQVAsRUFBa0IsU0FBUSxhQUExQixFQUFYLEUsUUFDakJDLE0sR0FBUyxFQUFDLFlBQVcsRUFBQyxnQkFBZSxFQUFDLFNBQVEsRUFBVCxFQUFZLE9BQU0sU0FBbEIsRUFBNEIsUUFBTyxNQUFuQyxFQUEwQyxTQUFRLE9BQWxELEVBQTBELE9BQU0sT0FBaEUsRUFBaEIsRUFBeUYsc0JBQXFCLEVBQUMsU0FBUSxNQUFULEVBQWdCLFFBQU8sTUFBdkIsRUFBOEIsT0FBTSxTQUFwQyxFQUE4QyxRQUFPLE1BQXJELEVBQTRELFNBQVEsT0FBcEUsRUFBNEUsT0FBTSxPQUFsRixFQUE5RyxFQUF5TSxrQkFBaUIsRUFBQyxTQUFRLE9BQVQsRUFBaUIsUUFBTyxPQUF4QixFQUFnQyxPQUFNLFNBQXRDLEVBQWdELFFBQU8sTUFBdkQsRUFBOEQsU0FBUSxPQUF0RSxFQUE4RSxPQUFNLE9BQXBGLEVBQTFOLEVBQVosRSxRQUNUQyxPLEdBQVUsRSxRQUNUQyxVLEdBQWE7QUFDRixxREFERTtBQUVGO0FBRkUsUyxRQUtOQyxRLEdBQVc7QUFDUEMsbUJBRE8scUJBQ0k7QUFDUCx1QkFBTyxLQUFLUCxXQUFMLENBQWlCUSxHQUFqQixDQUFxQixhQUFLO0FBQzdCLHdCQUFNQyxPQUFPQyxFQUFFRCxJQUFGLElBQVUsRUFBdkI7QUFDQSwyQkFBTztBQUNIRSw0QkFBSUQsRUFBRUMsRUFESDtBQUVIQyxnQ0FBUUgsS0FBS0ksU0FGVjtBQUdIQyw4QkFBTUwsS0FBS00sUUFIUjtBQUlIQyxpQ0FBU04sRUFBRU0sT0FKUjtBQUtIQyxnQ0FBUSx1QkFBV1AsRUFBRVEsV0FBRixDQUFjVixHQUFkLENBQWtCO0FBQUEsbUNBQUtXLEVBQUVDLE1BQVA7QUFBQSx5QkFBbEIsQ0FBWCxDQUxMO0FBTUhDLG9DQUFZLDBCQUFjWCxFQUFFWSxVQUFoQixDQU5UO0FBT0hDLG1DQUFXYixFQUFFYyxhQVBWO0FBUUhDLHFDQUFhZixFQUFFZ0I7QUFSWixxQkFBUDtBQVVILGlCQVpNLENBQVA7QUFhSDtBQWZNLFMsUUFrQlhDLEksR0FBTztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFqQkcsUyxRQW9CUEMsTyxHQUFVO0FBQ047QUFDQTtBQUNBO0FBSE0sUzs7OztFQWxEcUIsZUFBS0MsUzs7a0JBQW5CL0IsSyIsImZpbGUiOiJtb21lbnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgICBpbXBvcnQgbW9tZW50Q29tcG9uZW50IGZyb20gJ0AvY29tcG9uZW50cy9tb21lbnQnXG4gICAgaW1wb3J0IHsgdGltZVRyYW5zZm9ybSwgcGFkZGluZ0ltZyB9IGZyb20gJ0AvbW9kdWxlcy9jb21tb24vdXRpbHMnXG4gICAgaW1wb3J0IHNjcm9sbE5hdmJhckNvbXBvbmVudCBmcm9tICdAL2NvbXBvbmVudHMvc2Nyb2xsTmF2YmFyJ1xuXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XG4gICAgICAgIHByb3BzID0ge1xuICAgICAgICAgICAgbW9tZW50c0RhdGE6IEFycmF5XG4gICAgICAgIH1cbiAgICAgICAkcmVwZWF0ID0ge1wibW9tZW50c1wiOntcImNvbVwiOlwidi1tb21lbnRcIixcInByb3BzXCI6XCJtb21lbnQuc3luY1wifX07XHJcbiRwcm9wcyA9IHtcInYtbW9tZW50XCI6e1wieG1sbnM6di1iaW5kXCI6e1widmFsdWVcIjpcIlwiLFwiZm9yXCI6XCJtb21lbnRzXCIsXCJpdGVtXCI6XCJpdGVtXCIsXCJpbmRleFwiOlwiaW5kZXhcIixcImtleVwiOlwiaW5kZXhcIn0sXCJ2LWJpbmQ6bW9tZW50LnN5bmNcIjp7XCJ2YWx1ZVwiOlwiaXRlbVwiLFwidHlwZVwiOlwiaXRlbVwiLFwiZm9yXCI6XCJtb21lbnRzXCIsXCJpdGVtXCI6XCJpdGVtXCIsXCJpbmRleFwiOlwiaW5kZXhcIixcImtleVwiOlwiaW5kZXhcIn0sXCJ2LWJpbmQ6aWQub25jZVwiOntcInZhbHVlXCI6XCJpbmRleFwiLFwidHlwZVwiOlwiaW5kZXhcIixcImZvclwiOlwibW9tZW50c1wiLFwiaXRlbVwiOlwiaXRlbVwiLFwiaW5kZXhcIjpcImluZGV4XCIsXCJrZXlcIjpcImluZGV4XCJ9fX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICAgICAgICAndi1zY3JvbGwtbmF2YmFyJzogc2Nyb2xsTmF2YmFyQ29tcG9uZW50LFxuICAgICAgICAgICAgJ3YtbW9tZW50JzogbW9tZW50Q29tcG9uZW50XG4gICAgICAgIH1cblxuICAgICAgICBjb21wdXRlZCA9IHtcbiAgICAgICAgICAgIG1vbWVudHMgKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1vbWVudHNEYXRhLm1hcChtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdXNlciA9IG0udXNlciB8fCB7fVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IG0uaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdmF0YXI6IHVzZXIuYXZhdGFyVXJsLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogdXNlci5uaWNrTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IG0uY29udGVudCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlczogcGFkZGluZ0ltZyhtLmNpcmNsZV9pbWdzLm1hcChpID0+IGkuaW1nVXJsKSksXG4gICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVUaW1lOiB0aW1lVHJhbnNmb3JtKG0uY3JlYXRlZF9hdCksXG4gICAgICAgICAgICAgICAgICAgICAgICB1cHZvdGVOdW06IG0udGFyZ2V0c19jb3VudCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1lbnRzTnVtOiBtLmNvbW1lbnRzX2NvdW50XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICAgIC8qIOmhtumDqOWIhuexuyAqL1xuICAgICAgICAgICAgLy8gdGFiczogW3tcbiAgICAgICAgICAgIC8vICAgICB0aXRsZTogJ+acgOaWsCdcbiAgICAgICAgICAgIC8vIH0sIHtcbiAgICAgICAgICAgIC8vICAgICB0aXRsZTogJ+iKseiJuidcbiAgICAgICAgICAgIC8vIH0sIHtcbiAgICAgICAgICAgIC8vICAgICB0aXRsZTogJ+WbreiJuidcbiAgICAgICAgICAgIC8vIH0sIHtcbiAgICAgICAgICAgIC8vICAgICB0aXRsZTogJ+WutuWxhSdcbiAgICAgICAgICAgIC8vIH0sIHtcbiAgICAgICAgICAgIC8vICAgICB0aXRsZTogJ+WpmuWrgSdcbiAgICAgICAgICAgIC8vIH0sIHtcbiAgICAgICAgICAgIC8vICAgICB0aXRsZTogJ+eUn+a0uydcbiAgICAgICAgICAgIC8vIH0sIHtcbiAgICAgICAgICAgIC8vICAgICB0aXRsZTogJ+adgueJqSdcbiAgICAgICAgICAgIC8vIH1dLFxuICAgICAgICAgICAgLy8gYWN0aXZlSW5kZXg6IDBcbiAgICAgICAgfVxuXG4gICAgICAgIG1ldGhvZHMgPSB7XG4gICAgICAgICAgICAvLyBjaGFuZ2VBY3RpdmVJbmRleChlKSB7XG4gICAgICAgICAgICAvLyAgICAgdGhpcy5hY3RpdmVJbmRleCA9IHBhcnNlSW50KGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmlkKVxuICAgICAgICAgICAgLy8gfVxuICAgICAgICB9XG4gICAgfVxuIl19