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

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.$repeat = { "moments": { "com": "v-moment", "props": "moment" } }, _this.$props = { "v-moment": { "v-bind:moment.once": { "value": "item", "type": "item", "for": "moments", "item": "item", "index": "index", "key": "index" } }, "v-scroll-navbar": { "xmlns:v-bind": "", "v-bind:tabs.once": "tabs", "v-bind:activeIndex.sync": "activeIndex", "xmlns:v-on": "" } }, _this.$events = { "v-scroll-navbar": { "v-on:click": "changeActiveIndex" } }, _this.components = {
            'v-scroll-navbar': _scrollNavbar2.default,
            'v-moment': _moment2.default
        }, _this.data = {
            moments: [{
                avatar: 'https://modao.cc/uploads3/images/1024/10246492/raw_1497340535.jpeg',
                name: '诸葛·刘gloria',
                content: '与柳芽相遇也是偶然，在菜场内的一堆摊位间，发现不起眼的一小袋黄盈盈的嫩芽。其实有点于心不忍，这都是从新绿的柳条上摘下来的吧。但还是忍不住想尝鲜的愿意，买了一点。一点点，已够做出好几个菜了。应时应景，尝个新鲜吧',
                images: (0, _utils.paddingImg)(['https://modao.cc/uploads3/images/1024/10246655/raw_1497340747.jpeg', 'https://modao.cc/uploads3/images/1024/10246656/raw_1497340747.jpeg', 'https://modao.cc/uploads3/images/1024/10246656/raw_1497340747.jpeg']),
                createTime: '1小时前',
                commons: [{
                    name: '评论者',
                    commont: '评论评论评论评论评论评论评论评论'
                }],
                upvoteNum: 10,
                favoriteNum: 20
            }, {
                avatar: 'https://modao.cc/uploads3/images/1024/10246490/raw_1497340535.jpeg',
                name: '珠贝勒',
                content: '不用海苔，一样可以做出寿司。鸡蛋的别样吃法。',
                images: (0, _utils.paddingImg)(['https://modao.cc/uploads3/images/1030/10304188/raw_1497509399.jpeg', 'https://modao.cc/uploads3/images/1030/10304191/raw_1497509401.jpeg']),
                createTime: '2017-06-29 23:00:00',
                commons: [{
                    name: '评论者',
                    commont: '评论评论评论评论评论评论评论评论'
                }],
                upvoteNum: 10,
                favoriteNum: 20
            }],
            /* 顶部分类 */
            tabs: [{
                title: '最新'
            }, {
                title: '花艺'
            }, {
                title: '园艺'
            }, {
                title: '家居'
            }, {
                title: '婚嫁'
            }, {
                title: '生活'
            }, {
                title: '杂物'
            }],
            activeIndex: 0
        }, _this.methods = {
            changeActiveIndex: function changeActiveIndex(e) {
                this.activeIndex = parseInt(e.currentTarget.dataset.id);
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return Index;
}(_wepy2.default.component);

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vbWVudHMuanMiXSwibmFtZXMiOlsiSW5kZXgiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJkYXRhIiwibW9tZW50cyIsImF2YXRhciIsIm5hbWUiLCJjb250ZW50IiwiaW1hZ2VzIiwiY3JlYXRlVGltZSIsImNvbW1vbnMiLCJjb21tb250IiwidXB2b3RlTnVtIiwiZmF2b3JpdGVOdW0iLCJ0YWJzIiwidGl0bGUiLCJhY3RpdmVJbmRleCIsIm1ldGhvZHMiLCJjaGFuZ2VBY3RpdmVJbmRleCIsImUiLCJwYXJzZUludCIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwiaWQiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDSTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7d0xBQ2xCQyxPLEdBQVUsRUFBQyxXQUFVLEVBQUMsT0FBTSxVQUFQLEVBQWtCLFNBQVEsUUFBMUIsRUFBWCxFLFFBQ2pCQyxNLEdBQVMsRUFBQyxZQUFXLEVBQUMsc0JBQXFCLEVBQUMsU0FBUSxNQUFULEVBQWdCLFFBQU8sTUFBdkIsRUFBOEIsT0FBTSxTQUFwQyxFQUE4QyxRQUFPLE1BQXJELEVBQTRELFNBQVEsT0FBcEUsRUFBNEUsT0FBTSxPQUFsRixFQUF0QixFQUFaLEVBQThILG1CQUFrQixFQUFDLGdCQUFlLEVBQWhCLEVBQW1CLG9CQUFtQixNQUF0QyxFQUE2QywyQkFBMEIsYUFBdkUsRUFBcUYsY0FBYSxFQUFsRyxFQUFoSixFLFFBQ1RDLE8sR0FBVSxFQUFDLG1CQUFrQixFQUFDLGNBQWEsbUJBQWQsRUFBbkIsRSxRQUNUQyxVLEdBQWE7QUFDRixxREFERTtBQUVGO0FBRkUsUyxRQUtOQyxJLEdBQU87QUFDSEMscUJBQVMsQ0FBQztBQUNOQyx3QkFBUSxvRUFERjtBQUVOQyxzQkFBTSxZQUZBO0FBR05DLHlCQUFTLDBHQUhIO0FBSU5DLHdCQUFRLHVCQUFXLENBQ2Ysb0VBRGUsRUFFZixvRUFGZSxFQUdmLG9FQUhlLENBQVgsQ0FKRjtBQVNOQyw0QkFBWSxNQVROO0FBVU5DLHlCQUFTLENBQUM7QUFDTkosMEJBQU0sS0FEQTtBQUVOSyw2QkFBUztBQUZILGlCQUFELENBVkg7QUFjTkMsMkJBQVcsRUFkTDtBQWVOQyw2QkFBYTtBQWZQLGFBQUQsRUFnQk47QUFDQ1Isd0JBQVEsb0VBRFQ7QUFFQ0Msc0JBQU0sS0FGUDtBQUdDQyx5QkFBUyx3QkFIVjtBQUlDQyx3QkFBUSx1QkFBVyxDQUNmLG9FQURlLEVBRWYsb0VBRmUsQ0FBWCxDQUpUO0FBUUNDLDRCQUFZLHFCQVJiO0FBU0NDLHlCQUFTLENBQUM7QUFDTkosMEJBQU0sS0FEQTtBQUVOSyw2QkFBUztBQUZILGlCQUFELENBVFY7QUFhQ0MsMkJBQVcsRUFiWjtBQWNDQyw2QkFBYTtBQWRkLGFBaEJNLENBRE47QUFpQ0g7QUFDQUMsa0JBQU0sQ0FBQztBQUNIQyx1QkFBTztBQURKLGFBQUQsRUFFSDtBQUNDQSx1QkFBTztBQURSLGFBRkcsRUFJSDtBQUNDQSx1QkFBTztBQURSLGFBSkcsRUFNSDtBQUNDQSx1QkFBTztBQURSLGFBTkcsRUFRSDtBQUNDQSx1QkFBTztBQURSLGFBUkcsRUFVSDtBQUNDQSx1QkFBTztBQURSLGFBVkcsRUFZSDtBQUNDQSx1QkFBTztBQURSLGFBWkcsQ0FsQ0g7QUFpREhDLHlCQUFhO0FBakRWLFMsUUFvRFBDLE8sR0FBVTtBQUNOQyw2QkFETSw2QkFDWUMsQ0FEWixFQUNlO0FBQ2pCLHFCQUFLSCxXQUFMLEdBQW1CSSxTQUFTRCxFQUFFRSxhQUFGLENBQWdCQyxPQUFoQixDQUF3QkMsRUFBakMsQ0FBbkI7QUFDSDtBQUhLLFM7Ozs7RUE3RHFCLGVBQUtDLFM7O2tCQUFuQjFCLEsiLCJmaWxlIjoibW9tZW50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gICAgaW1wb3J0IG1vbWVudENvbXBvbmVudCBmcm9tICdAL2NvbXBvbmVudHMvbW9tZW50J1xuICAgIGltcG9ydCB7IHBhZGRpbmdJbWcgfSBmcm9tICdAL21vZHVsZXMvY29tbW9uL3V0aWxzJ1xuICAgIGltcG9ydCBzY3JvbGxOYXZiYXJDb21wb25lbnQgZnJvbSAnQC9jb21wb25lbnRzL3Njcm9sbE5hdmJhcidcblxuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuICAgICAgICRyZXBlYXQgPSB7XCJtb21lbnRzXCI6e1wiY29tXCI6XCJ2LW1vbWVudFwiLFwicHJvcHNcIjpcIm1vbWVudFwifX07XHJcbiRwcm9wcyA9IHtcInYtbW9tZW50XCI6e1widi1iaW5kOm1vbWVudC5vbmNlXCI6e1widmFsdWVcIjpcIml0ZW1cIixcInR5cGVcIjpcIml0ZW1cIixcImZvclwiOlwibW9tZW50c1wiLFwiaXRlbVwiOlwiaXRlbVwiLFwiaW5kZXhcIjpcImluZGV4XCIsXCJrZXlcIjpcImluZGV4XCJ9fSxcInYtc2Nyb2xsLW5hdmJhclwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6dGFicy5vbmNlXCI6XCJ0YWJzXCIsXCJ2LWJpbmQ6YWN0aXZlSW5kZXguc3luY1wiOlwiYWN0aXZlSW5kZXhcIixcInhtbG5zOnYtb25cIjpcIlwifX07XHJcbiRldmVudHMgPSB7XCJ2LXNjcm9sbC1uYXZiYXJcIjp7XCJ2LW9uOmNsaWNrXCI6XCJjaGFuZ2VBY3RpdmVJbmRleFwifX07XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgICAgICAgJ3Ytc2Nyb2xsLW5hdmJhcic6IHNjcm9sbE5hdmJhckNvbXBvbmVudCxcbiAgICAgICAgICAgICd2LW1vbWVudCc6IG1vbWVudENvbXBvbmVudFxuICAgICAgICB9XG5cbiAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICAgIG1vbWVudHM6IFt7XG4gICAgICAgICAgICAgICAgYXZhdGFyOiAnaHR0cHM6Ly9tb2Rhby5jYy91cGxvYWRzMy9pbWFnZXMvMTAyNC8xMDI0NjQ5Mi9yYXdfMTQ5NzM0MDUzNS5qcGVnJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAn6K+46JGbwrfliJhnbG9yaWEnLFxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICfkuI7mn7Poir3nm7jpgYfkuZ/mmK/lgbbnhLbvvIzlnKjoj5zlnLrlhoXnmoTkuIDloIbmkYrkvY3pl7TvvIzlj5HnjrDkuI3otbfnnLznmoTkuIDlsI/ooovpu4Tnm4jnm4jnmoTlq6noir3jgILlhbblrp7mnInngrnkuo7lv4PkuI3lv43vvIzov5npg73mmK/ku47mlrDnu7/nmoTmn7PmnaHkuIrmkZjkuIvmnaXnmoTlkKfjgILkvYbov5jmmK/lv43kuI3kvY/mg7PlsJ3pspznmoTmhL/mhI/vvIzkubDkuobkuIDngrnjgILkuIDngrnngrnvvIzlt7LlpJ/lgZrlh7rlpb3lh6DkuKroj5zkuobjgILlupTml7blupTmma/vvIzlsJ3kuKrmlrDpspzlkKcnLFxuICAgICAgICAgICAgICAgIGltYWdlczogcGFkZGluZ0ltZyhbXG4gICAgICAgICAgICAgICAgICAgICdodHRwczovL21vZGFvLmNjL3VwbG9hZHMzL2ltYWdlcy8xMDI0LzEwMjQ2NjU1L3Jhd18xNDk3MzQwNzQ3LmpwZWcnLFxuICAgICAgICAgICAgICAgICAgICAnaHR0cHM6Ly9tb2Rhby5jYy91cGxvYWRzMy9pbWFnZXMvMTAyNC8xMDI0NjY1Ni9yYXdfMTQ5NzM0MDc0Ny5qcGVnJyxcbiAgICAgICAgICAgICAgICAgICAgJ2h0dHBzOi8vbW9kYW8uY2MvdXBsb2FkczMvaW1hZ2VzLzEwMjQvMTAyNDY2NTYvcmF3XzE0OTczNDA3NDcuanBlZydcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBjcmVhdGVUaW1lOiAnMeWwj+aXtuWJjScsXG4gICAgICAgICAgICAgICAgY29tbW9uczogW3tcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ+ivhOiuuuiAhScsXG4gICAgICAgICAgICAgICAgICAgIGNvbW1vbnQ6ICfor4Torrror4Torrror4Torrror4Torrror4Torrror4Torrror4Torrror4TorronXG4gICAgICAgICAgICAgICAgfV0sXG4gICAgICAgICAgICAgICAgdXB2b3RlTnVtOiAxMCxcbiAgICAgICAgICAgICAgICBmYXZvcml0ZU51bTogMjBcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBhdmF0YXI6ICdodHRwczovL21vZGFvLmNjL3VwbG9hZHMzL2ltYWdlcy8xMDI0LzEwMjQ2NDkwL3Jhd18xNDk3MzQwNTM1LmpwZWcnLFxuICAgICAgICAgICAgICAgIG5hbWU6ICfnj6DotJ3li5InLFxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICfkuI3nlKjmtbfoi5TvvIzkuIDmoLflj6/ku6XlgZrlh7rlr7/lj7jjgILpuKHom4vnmoTliKvmoLflkIPms5XjgIInLFxuICAgICAgICAgICAgICAgIGltYWdlczogcGFkZGluZ0ltZyhbXG4gICAgICAgICAgICAgICAgICAgICdodHRwczovL21vZGFvLmNjL3VwbG9hZHMzL2ltYWdlcy8xMDMwLzEwMzA0MTg4L3Jhd18xNDk3NTA5Mzk5LmpwZWcnLFxuICAgICAgICAgICAgICAgICAgICAnaHR0cHM6Ly9tb2Rhby5jYy91cGxvYWRzMy9pbWFnZXMvMTAzMC8xMDMwNDE5MS9yYXdfMTQ5NzUwOTQwMS5qcGVnJ1xuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIGNyZWF0ZVRpbWU6ICcyMDE3LTA2LTI5IDIzOjAwOjAwJyxcbiAgICAgICAgICAgICAgICBjb21tb25zOiBbe1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAn6K+E6K666ICFJyxcbiAgICAgICAgICAgICAgICAgICAgY29tbW9udDogJ+ivhOiuuuivhOiuuuivhOiuuuivhOiuuuivhOiuuuivhOiuuuivhOiuuuivhOiuuidcbiAgICAgICAgICAgICAgICB9XSxcbiAgICAgICAgICAgICAgICB1cHZvdGVOdW06IDEwLFxuICAgICAgICAgICAgICAgIGZhdm9yaXRlTnVtOiAyMFxuICAgICAgICAgICAgfV0sXG4gICAgICAgICAgICAvKiDpobbpg6jliIbnsbsgKi9cbiAgICAgICAgICAgIHRhYnM6IFt7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICfmnIDmlrAnXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICfoirHoibonXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICflm63oibonXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICflrrblsYUnXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICflqZrlq4EnXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICfnlJ/mtLsnXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICfmnYLniaknXG4gICAgICAgICAgICB9XSxcbiAgICAgICAgICAgIGFjdGl2ZUluZGV4OiAwXG4gICAgICAgIH1cblxuICAgICAgICBtZXRob2RzID0ge1xuICAgICAgICAgICAgY2hhbmdlQWN0aXZlSW5kZXgoZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlSW5kZXggPSBwYXJzZUludChlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pZClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiJdfQ==