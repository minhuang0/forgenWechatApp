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

var _list = require('./../../components/list.js');

var _list2 = _interopRequireDefault(_list);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var categoryCovers = ['https://modao.cc/uploads3/images/992/9926261/raw_1496282368.png', 'https://modao.cc/uploads3/images/992/9926263/raw_1496282368.jpeg', 'https://modao.cc/uploads3/images/992/9926265/raw_1496282369.png', 'https://modao.cc/uploads3/images/992/9926267/raw_1496282369.png'];

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
            homeData: Object
        }, _this.$repeat = {}, _this.$props = { "v-swper": { "xmlns:v-bind": "", "v-bind:alldata.sync": "banners", "xmlns:v-on": "" }, "v-title1": { "title": "专题分类" }, "v-title2": { "title": "今日推荐" }, "v-h-scroll": { "class": "categories", "v-bind:alldata.sync": "categories" }, "v-list": { "class": "list", "v-bind:list.sync": "posts" } }, _this.$events = { "v-swper": { "v-on:click": "selectSwiper" }, "v-h-scroll": { "v-on:click": "selectCategory" }, "v-list": { "v-on:itemClick": "selectList" } }, _this.components = {
            'v-swper': _swper2.default,
            'v-title1': _title2.default,
            'v-title2': _title2.default,
            'v-h-scroll': _horizontalScroll2.default,
            'v-list': _list2.default
        }, _this.computed = {
            banners: function banners() {
                return this.homeData.banners.posts;
            },
            categories: function categories() {
                return this.homeData.recommends.children.map(function (item, idx) {
                    return {
                        id: item.id,
                        title: item.name,
                        cover: item.imgUrl || categoryCovers[idx]
                    };
                });
            },
            posts: function posts() {
                return this.homeData.posts.data.map(function (item) {
                    return {
                        id: item.id,
                        tag: '少传Tag',
                        cover: item.imgUrl,
                        title: item.title
                    };
                });
            }
        }, _this.methods = {
            selectSwiper: function selectSwiper(e) {
                _wepy2.default.navigateTo({
                    url: '../../pages/recommend/index?id=' + e.currentTarget.dataset.id
                });
            },
            selectList: function selectList(e) {
                _wepy2.default.navigateTo({
                    url: '../../pages/recommend/index?id=' + e.currentTarget.dataset.id
                });
            },
            selectCategory: function selectCategory(e) {
                _wepy2.default.navigateTo({
                    url: '../../pages/list/index?id=' + e.currentTarget.dataset.id
                });
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return Index;
}(_wepy2.default.component);

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY29tbWVuZC5qcyJdLCJuYW1lcyI6WyJjYXRlZ29yeUNvdmVycyIsIkluZGV4IiwicHJvcHMiLCJob21lRGF0YSIsIk9iamVjdCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsImNvbXB1dGVkIiwiYmFubmVycyIsInBvc3RzIiwiY2F0ZWdvcmllcyIsInJlY29tbWVuZHMiLCJjaGlsZHJlbiIsIm1hcCIsIml0ZW0iLCJpZHgiLCJpZCIsInRpdGxlIiwibmFtZSIsImNvdmVyIiwiaW1nVXJsIiwiZGF0YSIsInRhZyIsIm1ldGhvZHMiLCJzZWxlY3RTd2lwZXIiLCJlIiwibmF2aWdhdGVUbyIsInVybCIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0Iiwic2VsZWN0TGlzdCIsInNlbGVjdENhdGVnb3J5IiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0k7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsaUJBQWlCLENBQ25CLGlFQURtQixFQUVuQixrRUFGbUIsRUFHbkIsaUVBSG1CLEVBSW5CLGlFQUptQixDQUF2Qjs7SUFPcUJDLEs7Ozs7Ozs7Ozs7Ozs7O3dMQUNqQkMsSyxHQUFRO0FBQ0pDLHNCQUFVQztBQUROLFMsUUFHVEMsTyxHQUFVLEUsUUFDakJDLE0sR0FBUyxFQUFDLFdBQVUsRUFBQyxnQkFBZSxFQUFoQixFQUFtQix1QkFBc0IsU0FBekMsRUFBbUQsY0FBYSxFQUFoRSxFQUFYLEVBQStFLFlBQVcsRUFBQyxTQUFRLE1BQVQsRUFBMUYsRUFBMkcsWUFBVyxFQUFDLFNBQVEsTUFBVCxFQUF0SCxFQUF1SSxjQUFhLEVBQUMsU0FBUSxZQUFULEVBQXNCLHVCQUFzQixZQUE1QyxFQUFwSixFQUE4TSxVQUFTLEVBQUMsU0FBUSxNQUFULEVBQWdCLG9CQUFtQixPQUFuQyxFQUF2TixFLFFBQ1RDLE8sR0FBVSxFQUFDLFdBQVUsRUFBQyxjQUFhLGNBQWQsRUFBWCxFQUF5QyxjQUFhLEVBQUMsY0FBYSxnQkFBZCxFQUF0RCxFQUFzRixVQUFTLEVBQUMsa0JBQWlCLFlBQWxCLEVBQS9GLEUsUUFDVEMsVSxHQUFhO0FBQ0Ysc0NBREU7QUFFRix1Q0FGRTtBQUdGLHVDQUhFO0FBSUYsb0RBSkU7QUFLRjtBQUxFLFMsUUFPTkMsUSxHQUFXO0FBQ1BDLG1CQURPLHFCQUNJO0FBQ1AsdUJBQU8sS0FBS1AsUUFBTCxDQUFjTyxPQUFkLENBQXNCQyxLQUE3QjtBQUNILGFBSE07QUFJUEMsc0JBSk8sd0JBSU87QUFDVix1QkFBTyxLQUFLVCxRQUFMLENBQWNVLFVBQWQsQ0FBeUJDLFFBQXpCLENBQWtDQyxHQUFsQyxDQUFzQyxVQUFDQyxJQUFELEVBQU9DLEdBQVAsRUFBZTtBQUN4RCwyQkFBTztBQUNIQyw0QkFBSUYsS0FBS0UsRUFETjtBQUVIQywrQkFBT0gsS0FBS0ksSUFGVDtBQUdIQywrQkFBT0wsS0FBS00sTUFBTCxJQUFldEIsZUFBZWlCLEdBQWY7QUFIbkIscUJBQVA7QUFLSCxpQkFOTSxDQUFQO0FBT0gsYUFaTTtBQWFQTixpQkFiTyxtQkFhRTtBQUNMLHVCQUFPLEtBQUtSLFFBQUwsQ0FBY1EsS0FBZCxDQUFvQlksSUFBcEIsQ0FBeUJSLEdBQXpCLENBQTZCLGdCQUFRO0FBQ3hDLDJCQUFPO0FBQ0hHLDRCQUFJRixLQUFLRSxFQUROO0FBRUhNLDZCQUFLLE9BRkY7QUFHSEgsK0JBQU9MLEtBQUtNLE1BSFQ7QUFJSEgsK0JBQU9ILEtBQUtHO0FBSlQscUJBQVA7QUFNSCxpQkFQTSxDQUFQO0FBUUg7QUF0Qk0sUyxRQXlCWE0sTyxHQUFVO0FBQ05DLHdCQURNLHdCQUNPQyxDQURQLEVBQ1U7QUFDWiwrQkFBS0MsVUFBTCxDQUFnQjtBQUNaQyw2REFBdUNGLEVBQUVHLGFBQUYsQ0FBZ0JDLE9BQWhCLENBQXdCYjtBQURuRCxpQkFBaEI7QUFHSCxhQUxLO0FBTU5jLHNCQU5NLHNCQU1LTCxDQU5MLEVBTVE7QUFDViwrQkFBS0MsVUFBTCxDQUFnQjtBQUNaQyw2REFBdUNGLEVBQUVHLGFBQUYsQ0FBZ0JDLE9BQWhCLENBQXdCYjtBQURuRCxpQkFBaEI7QUFHSCxhQVZLO0FBV05lLDBCQVhNLDBCQVdTTixDQVhULEVBV1k7QUFDZCwrQkFBS0MsVUFBTCxDQUFnQjtBQUNaQyx3REFBa0NGLEVBQUVHLGFBQUYsQ0FBZ0JDLE9BQWhCLENBQXdCYjtBQUQ5QyxpQkFBaEI7QUFHSDtBQWZLLFM7Ozs7RUF2Q3FCLGVBQUtnQixTOztrQkFBbkJqQyxLIiwiZmlsZSI6InJlY29tbWVuZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gICAgaW1wb3J0IHN3cGVyQ29tcG9uZW50IGZyb20gJ0AvY29tcG9uZW50cy9zd3BlcidcbiAgICBpbXBvcnQgdGl0bGVDb21wb25lbnQgZnJvbSAnQC9jb21wb25lbnRzL3RpdGxlJ1xuICAgIGltcG9ydCBoU2Nyb2xsQ29tcG9uZW50IGZyb20gJ0AvY29tcG9uZW50cy9ob3Jpem9udGFsLXNjcm9sbCdcbiAgICBpbXBvcnQgbGlzdENvbXBvbmVudCBmcm9tICdAL2NvbXBvbmVudHMvbGlzdCdcblxuICAgIGNvbnN0IGNhdGVnb3J5Q292ZXJzID0gW1xuICAgICAgICAnaHR0cHM6Ly9tb2Rhby5jYy91cGxvYWRzMy9pbWFnZXMvOTkyLzk5MjYyNjEvcmF3XzE0OTYyODIzNjgucG5nJyxcbiAgICAgICAgJ2h0dHBzOi8vbW9kYW8uY2MvdXBsb2FkczMvaW1hZ2VzLzk5Mi85OTI2MjYzL3Jhd18xNDk2MjgyMzY4LmpwZWcnLFxuICAgICAgICAnaHR0cHM6Ly9tb2Rhby5jYy91cGxvYWRzMy9pbWFnZXMvOTkyLzk5MjYyNjUvcmF3XzE0OTYyODIzNjkucG5nJyxcbiAgICAgICAgJ2h0dHBzOi8vbW9kYW8uY2MvdXBsb2FkczMvaW1hZ2VzLzk5Mi85OTI2MjY3L3Jhd18xNDk2MjgyMzY5LnBuZydcbiAgICBdXG5cbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcbiAgICAgICAgcHJvcHMgPSB7XG4gICAgICAgICAgICBob21lRGF0YTogT2JqZWN0XG4gICAgICAgIH1cbiAgICAgICAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcInYtc3dwZXJcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOmFsbGRhdGEuc3luY1wiOlwiYmFubmVyc1wiLFwieG1sbnM6di1vblwiOlwiXCJ9LFwidi10aXRsZTFcIjp7XCJ0aXRsZVwiOlwi5LiT6aKY5YiG57G7XCJ9LFwidi10aXRsZTJcIjp7XCJ0aXRsZVwiOlwi5LuK5pel5o6o6I2QXCJ9LFwidi1oLXNjcm9sbFwiOntcImNsYXNzXCI6XCJjYXRlZ29yaWVzXCIsXCJ2LWJpbmQ6YWxsZGF0YS5zeW5jXCI6XCJjYXRlZ29yaWVzXCJ9LFwidi1saXN0XCI6e1wiY2xhc3NcIjpcImxpc3RcIixcInYtYmluZDpsaXN0LnN5bmNcIjpcInBvc3RzXCJ9fTtcclxuJGV2ZW50cyA9IHtcInYtc3dwZXJcIjp7XCJ2LW9uOmNsaWNrXCI6XCJzZWxlY3RTd2lwZXJcIn0sXCJ2LWgtc2Nyb2xsXCI6e1widi1vbjpjbGlja1wiOlwic2VsZWN0Q2F0ZWdvcnlcIn0sXCJ2LWxpc3RcIjp7XCJ2LW9uOml0ZW1DbGlja1wiOlwic2VsZWN0TGlzdFwifX07XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgICAgICAgJ3Ytc3dwZXInOiBzd3BlckNvbXBvbmVudCxcbiAgICAgICAgICAgICd2LXRpdGxlMSc6IHRpdGxlQ29tcG9uZW50LFxuICAgICAgICAgICAgJ3YtdGl0bGUyJzogdGl0bGVDb21wb25lbnQsXG4gICAgICAgICAgICAndi1oLXNjcm9sbCc6IGhTY3JvbGxDb21wb25lbnQsXG4gICAgICAgICAgICAndi1saXN0JzogbGlzdENvbXBvbmVudFxuICAgICAgICB9XG4gICAgICAgIGNvbXB1dGVkID0ge1xuICAgICAgICAgICAgYmFubmVycyAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuaG9tZURhdGEuYmFubmVycy5wb3N0c1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNhdGVnb3JpZXMgKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmhvbWVEYXRhLnJlY29tbWVuZHMuY2hpbGRyZW4ubWFwKChpdGVtLCBpZHgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBpdGVtLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IGl0ZW0ubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdmVyOiBpdGVtLmltZ1VybCB8fCBjYXRlZ29yeUNvdmVyc1tpZHhdXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHBvc3RzICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5ob21lRGF0YS5wb3N0cy5kYXRhLm1hcChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBpdGVtLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGFnOiAn5bCR5LygVGFnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdmVyOiBpdGVtLmltZ1VybCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBpdGVtLnRpdGxlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbWV0aG9kcyA9IHtcbiAgICAgICAgICAgIHNlbGVjdFN3aXBlcihlKSB7XG4gICAgICAgICAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBgLi4vLi4vcGFnZXMvcmVjb21tZW5kL2luZGV4P2lkPSR7ZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaWR9YFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2VsZWN0TGlzdChlKSB7XG4gICAgICAgICAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBgLi4vLi4vcGFnZXMvcmVjb21tZW5kL2luZGV4P2lkPSR7ZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaWR9YFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2VsZWN0Q2F0ZWdvcnkoZSkge1xuICAgICAgICAgICAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgICAgICAgICAgICAgIHVybDogYC4uLy4uL3BhZ2VzL2xpc3QvaW5kZXg/aWQ9JHtlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pZH1gXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiJdfQ==