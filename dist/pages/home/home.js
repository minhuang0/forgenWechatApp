'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _swper = require('./../../components/swper.js');

var _swper2 = _interopRequireDefault(_swper);

var _title = require('./../../components/title.js');

var _title2 = _interopRequireDefault(_title);

var _horizontalScroll = require('./../../components/horizontal-scroll.js');

var _horizontalScroll2 = _interopRequireDefault(_horizontalScroll);

var _navbar = require('./../../components/navbar.js');

var _navbar2 = _interopRequireDefault(_navbar);

var _list = require('./../../components/list.js');

var _list2 = _interopRequireDefault(_list);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_wepy$page) {
    _inherits(Index, _wepy$page);

    function Index() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Index);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
            navigationBarTitleText: '森林风'
        }, _this.$repeat = {}, _this.$props = { "v-swper": { "v-bind:alldata.once": "swiperImgUrls" }, "v-title": { "title": "今日推荐" }, "v-h-scroll": { "class": "categories", "v-bind:alldata.once": "categories" }, "v-navbar": { "xmlns:v-bind": "", "v-bind:alldata.once": "tabs", "v-bind:activeIndex.sync": "activeIndex", "v-bind:sliderWidth.once": "sliderWidth", "xmlns:v-on": "" }, "v-list": { "class": "list", "v-bind:list.once": "list" } }, _this.$events = { "v-swper": { "v-on:click": "selectSwiper" }, "v-h-scroll": { "v-on:click": "selectCategory" }, "v-navbar": { "v-on:changeActiveIndex": "changeActiveIndex" } }, _this.components = {
            'v-swper': _swper2.default,
            'v-title': _title2.default,
            'v-h-scroll': _horizontalScroll2.default,
            'v-navbar': _navbar2.default,
            'v-list': _list2.default
        }, _this.data = {
            /* 轮播图数据 */
            swiperImgUrls: [{
                id: 1,
                image: 'http://static.htxq.net/UploadFiles/2017/08/10/20170810141703886959.jpg'
            }, {
                id: 0,
                image: 'http://static.htxq.net/UploadFiles/2017/08/14/20170814140325046299.jpg'
            }, {
                id: 1,
                image: 'http://static.htxq.net/UploadFiles/2017/08/11/20170811131911389859.jpg'
            }],
            /* 分类数据 */
            categories: [{
                id: 1,
                cover: 'https://modao.cc/uploads3/images/992/9926261/raw_1496282368.png',
                title: '热门精选',
                url: ''
            }, {
                id: 2,
                cover: 'https://modao.cc/uploads3/images/992/9926263/raw_1496282368.jpeg',
                title: '养生阁',
                url: ''
            }, {
                id: 3,
                cover: 'https://modao.cc/uploads3/images/992/9926265/raw_1496282369.png',
                title: '私房菜',
                url: ''
            }, {
                id: 4,
                cover: 'https://modao.cc/uploads3/images/992/9926267/raw_1496282369.png',
                title: '生活居',
                url: ''
            }],
            /* 顶部分类 */
            tabs: [{
                title: '推荐',
                iconPath: '../modules/images/collection.png',
                selectedIconPath: '../modules/images/collection_fill.png'
            }, {
                title: '达人馆',
                iconPath: '../modules/images/workbench.png',
                selectedIconPath: '../modules/images/workbench_fill.png'
            }, {
                title: '圈子',
                iconPath: '../modules/images/manage.png',
                selectedIconPath: '../modules/images/manage_fill.png'
            }, {
                title: '活动',
                iconPath: '../modules/images/activity.png',
                selectedIconPath: '../modules/images/activity_fill.png'
            }],
            activeIndex: 0,
            sliderWidth: 93.75,
            list: [{
                id: 0,
                tag: '私房菜',
                cover: 'http://static.htxq.net/UploadFiles/2017/08/14/20170814140325046299.jpg',
                title: '夏日随风摇曳的铁线莲'
            }, {
                id: 1,
                tag: '生活居',
                cover: 'http://static.htxq.net/UploadFiles/2017/08/10/20170810141703886959.jpg',
                title: '打造一片浪漫的玫瑰庭院'
            }, {
                id: 2,
                tag: '养生阁',
                cover: 'http://static.htxq.net/UploadFiles/2017/08/11/20170811131911389859.jpg',
                title: '为你的礼物锦上添「花」'
            }]
        }, _this.methods = {
            changeActiveIndex: function changeActiveIndex(activeIndex) {
                this.activeIndex = activeIndex;
            },
            selectSwiper: function selectSwiper(e) {
                console.log(e.currentTarget.dataset.id);
                _wepy2.default.navigateTo({
                    url: '../../pages/recommend/index?id=' + e.currentTarget.dataset.id
                });
            },
            selectCategory: function selectCategory(e) {
                console.log(e.currentTarget.dataset.id);
                _wepy2.default.navigateTo({
                    url: '../../pages/category/index?id=' + e.currentTarget.dataset.id
                });
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return Index;
}(_wepy2.default.page);

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiZGF0YSIsInN3aXBlckltZ1VybHMiLCJpZCIsImltYWdlIiwiY2F0ZWdvcmllcyIsImNvdmVyIiwidGl0bGUiLCJ1cmwiLCJ0YWJzIiwiaWNvblBhdGgiLCJzZWxlY3RlZEljb25QYXRoIiwiYWN0aXZlSW5kZXgiLCJzbGlkZXJXaWR0aCIsImxpc3QiLCJ0YWciLCJtZXRob2RzIiwiY2hhbmdlQWN0aXZlSW5kZXgiLCJzZWxlY3RTd2lwZXIiLCJlIiwiY29uc29sZSIsImxvZyIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwibmF2aWdhdGVUbyIsInNlbGVjdENhdGVnb3J5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNJOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7Ozt3TEFDakJDLE0sR0FBUztBQUNMQyxvQ0FBd0I7QUFEbkIsUyxRQUlWQyxPLEdBQVUsRSxRQUNqQkMsTSxHQUFTLEVBQUMsV0FBVSxFQUFDLHVCQUFzQixlQUF2QixFQUFYLEVBQW1ELFdBQVUsRUFBQyxTQUFRLE1BQVQsRUFBN0QsRUFBOEUsY0FBYSxFQUFDLFNBQVEsWUFBVCxFQUFzQix1QkFBc0IsWUFBNUMsRUFBM0YsRUFBcUosWUFBVyxFQUFDLGdCQUFlLEVBQWhCLEVBQW1CLHVCQUFzQixNQUF6QyxFQUFnRCwyQkFBMEIsYUFBMUUsRUFBd0YsMkJBQTBCLGFBQWxILEVBQWdJLGNBQWEsRUFBN0ksRUFBaEssRUFBaVQsVUFBUyxFQUFDLFNBQVEsTUFBVCxFQUFnQixvQkFBbUIsTUFBbkMsRUFBMVQsRSxRQUNUQyxPLEdBQVUsRUFBQyxXQUFVLEVBQUMsY0FBYSxjQUFkLEVBQVgsRUFBeUMsY0FBYSxFQUFDLGNBQWEsZ0JBQWQsRUFBdEQsRUFBc0YsWUFBVyxFQUFDLDBCQUF5QixtQkFBMUIsRUFBakcsRSxRQUNUQyxVLEdBQWE7QUFDRixzQ0FERTtBQUVGLHNDQUZFO0FBR0Ysb0RBSEU7QUFJRix3Q0FKRTtBQUtGO0FBTEUsUyxRQVFOQyxJLEdBQU87QUFDSDtBQUNBQywyQkFBZSxDQUFDO0FBQ1pDLG9CQUFJLENBRFE7QUFFWkMsdUJBQU87QUFGSyxhQUFELEVBR1o7QUFDQ0Qsb0JBQUksQ0FETDtBQUVDQyx1QkFBTztBQUZSLGFBSFksRUFNWjtBQUNDRCxvQkFBSSxDQURMO0FBRUNDLHVCQUFPO0FBRlIsYUFOWSxDQUZaO0FBWUg7QUFDQUMsd0JBQVksQ0FBQztBQUNURixvQkFBSSxDQURLO0FBRVRHLHVCQUFPLGlFQUZFO0FBR1RDLHVCQUFPLE1BSEU7QUFJVEMscUJBQUs7QUFKSSxhQUFELEVBS1Q7QUFDQ0wsb0JBQUksQ0FETDtBQUVDRyx1QkFBTyxrRUFGUjtBQUdDQyx1QkFBTyxLQUhSO0FBSUNDLHFCQUFLO0FBSk4sYUFMUyxFQVVUO0FBQ0NMLG9CQUFJLENBREw7QUFFQ0csdUJBQU8saUVBRlI7QUFHQ0MsdUJBQU8sS0FIUjtBQUlDQyxxQkFBSztBQUpOLGFBVlMsRUFlVDtBQUNDTCxvQkFBSSxDQURMO0FBRUNHLHVCQUFPLGlFQUZSO0FBR0NDLHVCQUFPLEtBSFI7QUFJQ0MscUJBQUs7QUFKTixhQWZTLENBYlQ7QUFrQ0g7QUFDQUMsa0JBQU0sQ0FBQztBQUNIRix1QkFBTyxJQURKO0FBRUhHLDBCQUFVLGtDQUZQO0FBR0hDLGtDQUFrQjtBQUhmLGFBQUQsRUFJSDtBQUNDSix1QkFBTyxLQURSO0FBRUNHLDBCQUFVLGlDQUZYO0FBR0NDLGtDQUFrQjtBQUhuQixhQUpHLEVBUUg7QUFDQ0osdUJBQU8sSUFEUjtBQUVDRywwQkFBVSw4QkFGWDtBQUdDQyxrQ0FBa0I7QUFIbkIsYUFSRyxFQVlIO0FBQ0NKLHVCQUFPLElBRFI7QUFFQ0csMEJBQVUsZ0NBRlg7QUFHQ0Msa0NBQWtCO0FBSG5CLGFBWkcsQ0FuQ0g7QUFvREhDLHlCQUFhLENBcERWO0FBcURIQyx5QkFBYSxLQXJEVjtBQXNESEMsa0JBQU0sQ0FBQztBQUNIWCxvQkFBSSxDQUREO0FBRUhZLHFCQUFLLEtBRkY7QUFHSFQsdUJBQU8sd0VBSEo7QUFJSEMsdUJBQU87QUFKSixhQUFELEVBS0g7QUFDQ0osb0JBQUksQ0FETDtBQUVDWSxxQkFBSyxLQUZOO0FBR0NULHVCQUFPLHdFQUhSO0FBSUNDLHVCQUFPO0FBSlIsYUFMRyxFQVVIO0FBQ0NKLG9CQUFJLENBREw7QUFFQ1kscUJBQUssS0FGTjtBQUdDVCx1QkFBTyx3RUFIUjtBQUlDQyx1QkFBTztBQUpSLGFBVkc7QUF0REgsUyxRQXdFUFMsTyxHQUFVO0FBQ05DLDZCQURNLDZCQUNZTCxXQURaLEVBQ3lCO0FBQzNCLHFCQUFLQSxXQUFMLEdBQW1CQSxXQUFuQjtBQUNILGFBSEs7QUFJTk0sd0JBSk0sd0JBSU9DLENBSlAsRUFJVTtBQUNaQyx3QkFBUUMsR0FBUixDQUFZRixFQUFFRyxhQUFGLENBQWdCQyxPQUFoQixDQUF3QnBCLEVBQXBDO0FBQ0EsK0JBQUtxQixVQUFMLENBQWdCO0FBQ1poQiw2REFBdUNXLEVBQUVHLGFBQUYsQ0FBZ0JDLE9BQWhCLENBQXdCcEI7QUFEbkQsaUJBQWhCO0FBR0gsYUFUSztBQVVOc0IsMEJBVk0sMEJBVVNOLENBVlQsRUFVWTtBQUNkQyx3QkFBUUMsR0FBUixDQUFZRixFQUFFRyxhQUFGLENBQWdCQyxPQUFoQixDQUF3QnBCLEVBQXBDO0FBQ0EsK0JBQUtxQixVQUFMLENBQWdCO0FBQ1poQiw0REFBc0NXLEVBQUVHLGFBQUYsQ0FBZ0JDLE9BQWhCLENBQXdCcEI7QUFEbEQsaUJBQWhCO0FBR0g7QUFmSyxTOzs7O0VBeEZxQixlQUFLdUIsSTs7a0JBQW5CaEMsSyIsImZpbGUiOiJob21lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgICBpbXBvcnQgc3dwZXJDb21wb25lbnQgZnJvbSAnQC9jb21wb25lbnRzL3N3cGVyJ1xuICAgIGltcG9ydCB0aXRsZUNvbXBvbmVudCBmcm9tICdAL2NvbXBvbmVudHMvdGl0bGUnXG4gICAgaW1wb3J0IGhTY3JvbGxDb21wb25lbnQgZnJvbSAnQC9jb21wb25lbnRzL2hvcml6b250YWwtc2Nyb2xsJ1xuICAgIGltcG9ydCBuYXZiYXJDb21wb25lbnQgZnJvbSAnQC9jb21wb25lbnRzL25hdmJhcidcbiAgICBpbXBvcnQgbGlzdENvbXBvbmVudCBmcm9tICdAL2NvbXBvbmVudHMvbGlzdCdcblxuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICAgICAgY29uZmlnID0ge1xuICAgICAgICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+ajruael+mjjidcbiAgICAgICAgfVxuXG4gICAgICAgJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJ2LXN3cGVyXCI6e1widi1iaW5kOmFsbGRhdGEub25jZVwiOlwic3dpcGVySW1nVXJsc1wifSxcInYtdGl0bGVcIjp7XCJ0aXRsZVwiOlwi5LuK5pel5o6o6I2QXCJ9LFwidi1oLXNjcm9sbFwiOntcImNsYXNzXCI6XCJjYXRlZ29yaWVzXCIsXCJ2LWJpbmQ6YWxsZGF0YS5vbmNlXCI6XCJjYXRlZ29yaWVzXCJ9LFwidi1uYXZiYXJcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOmFsbGRhdGEub25jZVwiOlwidGFic1wiLFwidi1iaW5kOmFjdGl2ZUluZGV4LnN5bmNcIjpcImFjdGl2ZUluZGV4XCIsXCJ2LWJpbmQ6c2xpZGVyV2lkdGgub25jZVwiOlwic2xpZGVyV2lkdGhcIixcInhtbG5zOnYtb25cIjpcIlwifSxcInYtbGlzdFwiOntcImNsYXNzXCI6XCJsaXN0XCIsXCJ2LWJpbmQ6bGlzdC5vbmNlXCI6XCJsaXN0XCJ9fTtcclxuJGV2ZW50cyA9IHtcInYtc3dwZXJcIjp7XCJ2LW9uOmNsaWNrXCI6XCJzZWxlY3RTd2lwZXJcIn0sXCJ2LWgtc2Nyb2xsXCI6e1widi1vbjpjbGlja1wiOlwic2VsZWN0Q2F0ZWdvcnlcIn0sXCJ2LW5hdmJhclwiOntcInYtb246Y2hhbmdlQWN0aXZlSW5kZXhcIjpcImNoYW5nZUFjdGl2ZUluZGV4XCJ9fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICAgICAgICAndi1zd3Blcic6IHN3cGVyQ29tcG9uZW50LFxuICAgICAgICAgICAgJ3YtdGl0bGUnOiB0aXRsZUNvbXBvbmVudCxcbiAgICAgICAgICAgICd2LWgtc2Nyb2xsJzogaFNjcm9sbENvbXBvbmVudCxcbiAgICAgICAgICAgICd2LW5hdmJhcic6IG5hdmJhckNvbXBvbmVudCxcbiAgICAgICAgICAgICd2LWxpc3QnOiBsaXN0Q29tcG9uZW50XG4gICAgICAgIH1cblxuICAgICAgICBkYXRhID0ge1xuICAgICAgICAgICAgLyog6L2u5pKt5Zu+5pWw5o2uICovXG4gICAgICAgICAgICBzd2lwZXJJbWdVcmxzOiBbe1xuICAgICAgICAgICAgICAgIGlkOiAxLFxuICAgICAgICAgICAgICAgIGltYWdlOiAnaHR0cDovL3N0YXRpYy5odHhxLm5ldC9VcGxvYWRGaWxlcy8yMDE3LzA4LzEwLzIwMTcwODEwMTQxNzAzODg2OTU5LmpwZydcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBpZDogMCxcbiAgICAgICAgICAgICAgICBpbWFnZTogJ2h0dHA6Ly9zdGF0aWMuaHR4cS5uZXQvVXBsb2FkRmlsZXMvMjAxNy8wOC8xNC8yMDE3MDgxNDE0MDMyNTA0NjI5OS5qcGcnXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgaWQ6IDEsXG4gICAgICAgICAgICAgICAgaW1hZ2U6ICdodHRwOi8vc3RhdGljLmh0eHEubmV0L1VwbG9hZEZpbGVzLzIwMTcvMDgvMTEvMjAxNzA4MTExMzE5MTEzODk4NTkuanBnJ1xuICAgICAgICAgICAgfV0sXG4gICAgICAgICAgICAvKiDliIbnsbvmlbDmja4gKi9cbiAgICAgICAgICAgIGNhdGVnb3JpZXM6IFt7XG4gICAgICAgICAgICAgICAgaWQ6IDEsXG4gICAgICAgICAgICAgICAgY292ZXI6ICdodHRwczovL21vZGFvLmNjL3VwbG9hZHMzL2ltYWdlcy85OTIvOTkyNjI2MS9yYXdfMTQ5NjI4MjM2OC5wbmcnLFxuICAgICAgICAgICAgICAgIHRpdGxlOiAn54Ot6Zeo57K+6YCJJyxcbiAgICAgICAgICAgICAgICB1cmw6ICcnXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgaWQ6IDIsXG4gICAgICAgICAgICAgICAgY292ZXI6ICdodHRwczovL21vZGFvLmNjL3VwbG9hZHMzL2ltYWdlcy85OTIvOTkyNjI2My9yYXdfMTQ5NjI4MjM2OC5qcGVnJyxcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+WFu+eUn+mYgScsXG4gICAgICAgICAgICAgICAgdXJsOiAnJ1xuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGlkOiAzLFxuICAgICAgICAgICAgICAgIGNvdmVyOiAnaHR0cHM6Ly9tb2Rhby5jYy91cGxvYWRzMy9pbWFnZXMvOTkyLzk5MjYyNjUvcmF3XzE0OTYyODIzNjkucG5nJyxcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+engeaIv+iPnCcsXG4gICAgICAgICAgICAgICAgdXJsOiAnJ1xuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGlkOiA0LFxuICAgICAgICAgICAgICAgIGNvdmVyOiAnaHR0cHM6Ly9tb2Rhby5jYy91cGxvYWRzMy9pbWFnZXMvOTkyLzk5MjYyNjcvcmF3XzE0OTYyODIzNjkucG5nJyxcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+eUn+a0u+WxhScsXG4gICAgICAgICAgICAgICAgdXJsOiAnJ1xuICAgICAgICAgICAgfV0sXG4gICAgICAgICAgICAvKiDpobbpg6jliIbnsbsgKi9cbiAgICAgICAgICAgIHRhYnM6IFt7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICfmjqjojZAnLFxuICAgICAgICAgICAgICAgIGljb25QYXRoOiAnLi4vbW9kdWxlcy9pbWFnZXMvY29sbGVjdGlvbi5wbmcnLFxuICAgICAgICAgICAgICAgIHNlbGVjdGVkSWNvblBhdGg6ICcuLi9tb2R1bGVzL2ltYWdlcy9jb2xsZWN0aW9uX2ZpbGwucG5nJ1xuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAn6L6+5Lq66aaGJyxcbiAgICAgICAgICAgICAgICBpY29uUGF0aDogJy4uL21vZHVsZXMvaW1hZ2VzL3dvcmtiZW5jaC5wbmcnLFxuICAgICAgICAgICAgICAgIHNlbGVjdGVkSWNvblBhdGg6ICcuLi9tb2R1bGVzL2ltYWdlcy93b3JrYmVuY2hfZmlsbC5wbmcnXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICflnIjlrZAnLFxuICAgICAgICAgICAgICAgIGljb25QYXRoOiAnLi4vbW9kdWxlcy9pbWFnZXMvbWFuYWdlLnBuZycsXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRJY29uUGF0aDogJy4uL21vZHVsZXMvaW1hZ2VzL21hbmFnZV9maWxsLnBuZydcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+a0u+WKqCcsXG4gICAgICAgICAgICAgICAgaWNvblBhdGg6ICcuLi9tb2R1bGVzL2ltYWdlcy9hY3Rpdml0eS5wbmcnLFxuICAgICAgICAgICAgICAgIHNlbGVjdGVkSWNvblBhdGg6ICcuLi9tb2R1bGVzL2ltYWdlcy9hY3Rpdml0eV9maWxsLnBuZydcbiAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgYWN0aXZlSW5kZXg6IDAsXG4gICAgICAgICAgICBzbGlkZXJXaWR0aDogOTMuNzUsXG4gICAgICAgICAgICBsaXN0OiBbe1xuICAgICAgICAgICAgICAgIGlkOiAwLFxuICAgICAgICAgICAgICAgIHRhZzogJ+engeaIv+iPnCcsXG4gICAgICAgICAgICAgICAgY292ZXI6ICdodHRwOi8vc3RhdGljLmh0eHEubmV0L1VwbG9hZEZpbGVzLzIwMTcvMDgvMTQvMjAxNzA4MTQxNDAzMjUwNDYyOTkuanBnJyxcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+Wkj+aXpemaj+mjjuaRh+abs+eahOmTgee6v+iOsidcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBpZDogMSxcbiAgICAgICAgICAgICAgICB0YWc6ICfnlJ/mtLvlsYUnLFxuICAgICAgICAgICAgICAgIGNvdmVyOiAnaHR0cDovL3N0YXRpYy5odHhxLm5ldC9VcGxvYWRGaWxlcy8yMDE3LzA4LzEwLzIwMTcwODEwMTQxNzAzODg2OTU5LmpwZycsXG4gICAgICAgICAgICAgICAgdGl0bGU6ICfmiZPpgKDkuIDniYfmtarmvKvnmoTnjqvnkbDluq3pmaInXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgaWQ6IDIsXG4gICAgICAgICAgICAgICAgdGFnOiAn5YW755Sf6ZiBJyxcbiAgICAgICAgICAgICAgICBjb3ZlcjogJ2h0dHA6Ly9zdGF0aWMuaHR4cS5uZXQvVXBsb2FkRmlsZXMvMjAxNy8wOC8xMS8yMDE3MDgxMTEzMTkxMTM4OTg1OS5qcGcnLFxuICAgICAgICAgICAgICAgIHRpdGxlOiAn5Li65L2g55qE56S854mp6ZSm5LiK5re744CM6Iqx44CNJ1xuICAgICAgICAgICAgfV1cbiAgICAgICAgfVxuXG4gICAgICAgIG1ldGhvZHMgPSB7XG4gICAgICAgICAgICBjaGFuZ2VBY3RpdmVJbmRleChhY3RpdmVJbmRleCkge1xuICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlSW5kZXggPSBhY3RpdmVJbmRleFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNlbGVjdFN3aXBlcihlKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaWQpXG4gICAgICAgICAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBgLi4vLi4vcGFnZXMvcmVjb21tZW5kL2luZGV4P2lkPSR7ZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaWR9YFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2VsZWN0Q2F0ZWdvcnkoZSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmlkKVxuICAgICAgICAgICAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgICAgICAgICAgICAgIHVybDogYC4uLy4uL3BhZ2VzL2NhdGVnb3J5L2luZGV4P2lkPSR7ZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaWR9YFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4iXX0=