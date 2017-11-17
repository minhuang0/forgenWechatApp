'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _swper = require('./../components/swper.js');

var _swper2 = _interopRequireDefault(_swper);

var _title = require('./../components/title.js');

var _title2 = _interopRequireDefault(_title);

var _horizontalScroll = require('./../components/horizontal-scroll.js');

var _horizontalScroll2 = _interopRequireDefault(_horizontalScroll);

var _list = require('./../components/list.js');

var _list2 = _interopRequireDefault(_list);

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

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.$repeat = {}, _this.$props = { "v-swper": { "xmlns:v-bind": "", "v-bind:alldata.once": "swiperImgUrls", "xmlns:v-on": "" }, "v-title": { "title": "今日推荐" }, "v-h-scroll": { "class": "categories", "v-bind:alldata.once": "categories" }, "v-list": { "class": "list", "v-bind:list.once": "list" } }, _this.$events = { "v-swper": { "v-on:click": "selectSwiper" }, "v-h-scroll": { "v-on:click": "selectCategory" } }, _this.components = {
            'v-swper': _swper2.default,
            'v-title': _title2.default,
            'v-h-scroll': _horizontalScroll2.default,
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
}(_wepy2.default.component);

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY29tbWVuZC5qcyJdLCJuYW1lcyI6WyJJbmRleCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsImRhdGEiLCJzd2lwZXJJbWdVcmxzIiwiaWQiLCJpbWFnZSIsImNhdGVnb3JpZXMiLCJjb3ZlciIsInRpdGxlIiwidXJsIiwibGlzdCIsInRhZyIsIm1ldGhvZHMiLCJzZWxlY3RTd2lwZXIiLCJlIiwiY29uc29sZSIsImxvZyIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwibmF2aWdhdGVUbyIsInNlbGVjdENhdGVnb3J5IiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0k7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7Ozt3TEFFbEJDLE8sR0FBVSxFLFFBQ2pCQyxNLEdBQVMsRUFBQyxXQUFVLEVBQUMsZ0JBQWUsRUFBaEIsRUFBbUIsdUJBQXNCLGVBQXpDLEVBQXlELGNBQWEsRUFBdEUsRUFBWCxFQUFxRixXQUFVLEVBQUMsU0FBUSxNQUFULEVBQS9GLEVBQWdILGNBQWEsRUFBQyxTQUFRLFlBQVQsRUFBc0IsdUJBQXNCLFlBQTVDLEVBQTdILEVBQXVMLFVBQVMsRUFBQyxTQUFRLE1BQVQsRUFBZ0Isb0JBQW1CLE1BQW5DLEVBQWhNLEUsUUFDVEMsTyxHQUFVLEVBQUMsV0FBVSxFQUFDLGNBQWEsY0FBZCxFQUFYLEVBQXlDLGNBQWEsRUFBQyxjQUFhLGdCQUFkLEVBQXRELEUsUUFDVEMsVSxHQUFhO0FBQ0Ysc0NBREU7QUFFRixzQ0FGRTtBQUdGLG9EQUhFO0FBSUY7QUFKRSxTLFFBT05DLEksR0FBTztBQUNIO0FBQ0FDLDJCQUFlLENBQUM7QUFDWkMsb0JBQUksQ0FEUTtBQUVaQyx1QkFBTztBQUZLLGFBQUQsRUFHWjtBQUNDRCxvQkFBSSxDQURMO0FBRUNDLHVCQUFPO0FBRlIsYUFIWSxFQU1aO0FBQ0NELG9CQUFJLENBREw7QUFFQ0MsdUJBQU87QUFGUixhQU5ZLENBRlo7QUFZSDtBQUNBQyx3QkFBWSxDQUFDO0FBQ1RGLG9CQUFJLENBREs7QUFFVEcsdUJBQU8saUVBRkU7QUFHVEMsdUJBQU8sTUFIRTtBQUlUQyxxQkFBSztBQUpJLGFBQUQsRUFLVDtBQUNDTCxvQkFBSSxDQURMO0FBRUNHLHVCQUFPLGtFQUZSO0FBR0NDLHVCQUFPLEtBSFI7QUFJQ0MscUJBQUs7QUFKTixhQUxTLEVBVVQ7QUFDQ0wsb0JBQUksQ0FETDtBQUVDRyx1QkFBTyxpRUFGUjtBQUdDQyx1QkFBTyxLQUhSO0FBSUNDLHFCQUFLO0FBSk4sYUFWUyxFQWVUO0FBQ0NMLG9CQUFJLENBREw7QUFFQ0csdUJBQU8saUVBRlI7QUFHQ0MsdUJBQU8sS0FIUjtBQUlDQyxxQkFBSztBQUpOLGFBZlMsQ0FiVDtBQWtDSEMsa0JBQU0sQ0FBQztBQUNITixvQkFBSSxDQUREO0FBRUhPLHFCQUFLLEtBRkY7QUFHSEosdUJBQU8sd0VBSEo7QUFJSEMsdUJBQU87QUFKSixhQUFELEVBS0g7QUFDQ0osb0JBQUksQ0FETDtBQUVDTyxxQkFBSyxLQUZOO0FBR0NKLHVCQUFPLHdFQUhSO0FBSUNDLHVCQUFPO0FBSlIsYUFMRyxFQVVIO0FBQ0NKLG9CQUFJLENBREw7QUFFQ08scUJBQUssS0FGTjtBQUdDSix1QkFBTyx3RUFIUjtBQUlDQyx1QkFBTztBQUpSLGFBVkc7QUFsQ0gsUyxRQW9EUEksTyxHQUFVO0FBQ05DLHdCQURNLHdCQUNPQyxDQURQLEVBQ1U7QUFDWkMsd0JBQVFDLEdBQVIsQ0FBWUYsRUFBRUcsYUFBRixDQUFnQkMsT0FBaEIsQ0FBd0JkLEVBQXBDO0FBQ0EsK0JBQUtlLFVBQUwsQ0FBZ0I7QUFDWlYsNkRBQXVDSyxFQUFFRyxhQUFGLENBQWdCQyxPQUFoQixDQUF3QmQ7QUFEbkQsaUJBQWhCO0FBR0gsYUFOSztBQU9OZ0IsMEJBUE0sMEJBT1NOLENBUFQsRUFPWTtBQUNkQyx3QkFBUUMsR0FBUixDQUFZRixFQUFFRyxhQUFGLENBQWdCQyxPQUFoQixDQUF3QmQsRUFBcEM7QUFDQSwrQkFBS2UsVUFBTCxDQUFnQjtBQUNaViw0REFBc0NLLEVBQUVHLGFBQUYsQ0FBZ0JDLE9BQWhCLENBQXdCZDtBQURsRCxpQkFBaEI7QUFHSDtBQVpLLFM7Ozs7RUFoRXFCLGVBQUtpQixTOztrQkFBbkJ4QixLIiwiZmlsZSI6InJlY29tbWVuZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gICAgaW1wb3J0IHN3cGVyQ29tcG9uZW50IGZyb20gJ0AvY29tcG9uZW50cy9zd3BlcidcbiAgICBpbXBvcnQgdGl0bGVDb21wb25lbnQgZnJvbSAnQC9jb21wb25lbnRzL3RpdGxlJ1xuICAgIGltcG9ydCBoU2Nyb2xsQ29tcG9uZW50IGZyb20gJ0AvY29tcG9uZW50cy9ob3Jpem9udGFsLXNjcm9sbCdcbiAgICBpbXBvcnQgbGlzdENvbXBvbmVudCBmcm9tICdAL2NvbXBvbmVudHMvbGlzdCdcblxuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuXG4gICAgICAgJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJ2LXN3cGVyXCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDphbGxkYXRhLm9uY2VcIjpcInN3aXBlckltZ1VybHNcIixcInhtbG5zOnYtb25cIjpcIlwifSxcInYtdGl0bGVcIjp7XCJ0aXRsZVwiOlwi5LuK5pel5o6o6I2QXCJ9LFwidi1oLXNjcm9sbFwiOntcImNsYXNzXCI6XCJjYXRlZ29yaWVzXCIsXCJ2LWJpbmQ6YWxsZGF0YS5vbmNlXCI6XCJjYXRlZ29yaWVzXCJ9LFwidi1saXN0XCI6e1wiY2xhc3NcIjpcImxpc3RcIixcInYtYmluZDpsaXN0Lm9uY2VcIjpcImxpc3RcIn19O1xyXG4kZXZlbnRzID0ge1widi1zd3BlclwiOntcInYtb246Y2xpY2tcIjpcInNlbGVjdFN3aXBlclwifSxcInYtaC1zY3JvbGxcIjp7XCJ2LW9uOmNsaWNrXCI6XCJzZWxlY3RDYXRlZ29yeVwifX07XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgICAgICAgJ3Ytc3dwZXInOiBzd3BlckNvbXBvbmVudCxcbiAgICAgICAgICAgICd2LXRpdGxlJzogdGl0bGVDb21wb25lbnQsXG4gICAgICAgICAgICAndi1oLXNjcm9sbCc6IGhTY3JvbGxDb21wb25lbnQsXG4gICAgICAgICAgICAndi1saXN0JzogbGlzdENvbXBvbmVudFxuICAgICAgICB9XG5cbiAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICAgIC8qIOi9ruaSreWbvuaVsOaNriAqL1xuICAgICAgICAgICAgc3dpcGVySW1nVXJsczogW3tcbiAgICAgICAgICAgICAgICBpZDogMSxcbiAgICAgICAgICAgICAgICBpbWFnZTogJ2h0dHA6Ly9zdGF0aWMuaHR4cS5uZXQvVXBsb2FkRmlsZXMvMjAxNy8wOC8xMC8yMDE3MDgxMDE0MTcwMzg4Njk1OS5qcGcnXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgaWQ6IDAsXG4gICAgICAgICAgICAgICAgaW1hZ2U6ICdodHRwOi8vc3RhdGljLmh0eHEubmV0L1VwbG9hZEZpbGVzLzIwMTcvMDgvMTQvMjAxNzA4MTQxNDAzMjUwNDYyOTkuanBnJ1xuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGlkOiAxLFxuICAgICAgICAgICAgICAgIGltYWdlOiAnaHR0cDovL3N0YXRpYy5odHhxLm5ldC9VcGxvYWRGaWxlcy8yMDE3LzA4LzExLzIwMTcwODExMTMxOTExMzg5ODU5LmpwZydcbiAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgLyog5YiG57G75pWw5o2uICovXG4gICAgICAgICAgICBjYXRlZ29yaWVzOiBbe1xuICAgICAgICAgICAgICAgIGlkOiAxLFxuICAgICAgICAgICAgICAgIGNvdmVyOiAnaHR0cHM6Ly9tb2Rhby5jYy91cGxvYWRzMy9pbWFnZXMvOTkyLzk5MjYyNjEvcmF3XzE0OTYyODIzNjgucG5nJyxcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+eDremXqOeyvumAiScsXG4gICAgICAgICAgICAgICAgdXJsOiAnJ1xuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGlkOiAyLFxuICAgICAgICAgICAgICAgIGNvdmVyOiAnaHR0cHM6Ly9tb2Rhby5jYy91cGxvYWRzMy9pbWFnZXMvOTkyLzk5MjYyNjMvcmF3XzE0OTYyODIzNjguanBlZycsXG4gICAgICAgICAgICAgICAgdGl0bGU6ICflhbvnlJ/pmIEnLFxuICAgICAgICAgICAgICAgIHVybDogJydcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBpZDogMyxcbiAgICAgICAgICAgICAgICBjb3ZlcjogJ2h0dHBzOi8vbW9kYW8uY2MvdXBsb2FkczMvaW1hZ2VzLzk5Mi85OTI2MjY1L3Jhd18xNDk2MjgyMzY5LnBuZycsXG4gICAgICAgICAgICAgICAgdGl0bGU6ICfnp4HmiL/oj5wnLFxuICAgICAgICAgICAgICAgIHVybDogJydcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBpZDogNCxcbiAgICAgICAgICAgICAgICBjb3ZlcjogJ2h0dHBzOi8vbW9kYW8uY2MvdXBsb2FkczMvaW1hZ2VzLzk5Mi85OTI2MjY3L3Jhd18xNDk2MjgyMzY5LnBuZycsXG4gICAgICAgICAgICAgICAgdGl0bGU6ICfnlJ/mtLvlsYUnLFxuICAgICAgICAgICAgICAgIHVybDogJydcbiAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgbGlzdDogW3tcbiAgICAgICAgICAgICAgICBpZDogMCxcbiAgICAgICAgICAgICAgICB0YWc6ICfnp4HmiL/oj5wnLFxuICAgICAgICAgICAgICAgIGNvdmVyOiAnaHR0cDovL3N0YXRpYy5odHhxLm5ldC9VcGxvYWRGaWxlcy8yMDE3LzA4LzE0LzIwMTcwODE0MTQwMzI1MDQ2Mjk5LmpwZycsXG4gICAgICAgICAgICAgICAgdGl0bGU6ICflpI/ml6Xpmo/po47mkYfmm7PnmoTpk4Hnur/ojrInXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgaWQ6IDEsXG4gICAgICAgICAgICAgICAgdGFnOiAn55Sf5rS75bGFJyxcbiAgICAgICAgICAgICAgICBjb3ZlcjogJ2h0dHA6Ly9zdGF0aWMuaHR4cS5uZXQvVXBsb2FkRmlsZXMvMjAxNy8wOC8xMC8yMDE3MDgxMDE0MTcwMzg4Njk1OS5qcGcnLFxuICAgICAgICAgICAgICAgIHRpdGxlOiAn5omT6YCg5LiA54mH5rWq5ryr55qE546r55Gw5bqt6ZmiJ1xuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGlkOiAyLFxuICAgICAgICAgICAgICAgIHRhZzogJ+WFu+eUn+mYgScsXG4gICAgICAgICAgICAgICAgY292ZXI6ICdodHRwOi8vc3RhdGljLmh0eHEubmV0L1VwbG9hZEZpbGVzLzIwMTcvMDgvMTEvMjAxNzA4MTExMzE5MTEzODk4NTkuanBnJyxcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+S4uuS9oOeahOekvOeJqemUpuS4iua3u+OAjOiKseOAjSdcbiAgICAgICAgICAgIH1dXG4gICAgICAgIH1cblxuICAgICAgICBtZXRob2RzID0ge1xuICAgICAgICAgICAgc2VsZWN0U3dpcGVyKGUpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pZClcbiAgICAgICAgICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgICAgICAgICAgICB1cmw6IGAuLi8uLi9wYWdlcy9yZWNvbW1lbmQvaW5kZXg/aWQ9JHtlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pZH1gXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZWxlY3RDYXRlZ29yeShlKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaWQpXG4gICAgICAgICAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBgLi4vLi4vcGFnZXMvY2F0ZWdvcnkvaW5kZXg/aWQ9JHtlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pZH1gXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiJdfQ==