'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _swper = require('./../../components/swper.js');

var _swper2 = _interopRequireDefault(_swper);

var _text = require('./../../components/text.js');

var _text2 = _interopRequireDefault(_text);

var _baseTitle = require('./../../components/baseTitle.js');

var _baseTitle2 = _interopRequireDefault(_baseTitle);

var _grid = require('./../../components/grid.js');

var _grid2 = _interopRequireDefault(_grid);

var _title = require('./../../components/title.js');

var _title2 = _interopRequireDefault(_title);

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
            choiceData: Object
        }, _this.$repeat = { "hotTopic": { "com": "v-text", "props": "" } }, _this.$props = { "v-text": { "v-bind:text.once": { "value": "item.name", "for": "hotTopic", "item": "item", "index": "index", "key": "index" }, "data-id": { "value": "{{item.id}}", "for": "hotTopic", "item": "item", "index": "index", "key": "index" } }, "v-swper": { "xmlns:v-bind": "", "v-bind:alldata.sync": "swiperImgUrls", "xmlns:v-on": "" }, "v-baseTitle": { "leftText": "热门话题", "rightText": "更多热门话题", "data-id": "{{0}}" }, "v-grid": { "v-bind:list.sync": "choiceList" }, "v-title": { "title": "热门精选" } }, _this.$events = { "v-text": { "v-on:click": "selectDiscuss" }, "v-swper": { "v-on:click": "selectSwiper" }, "v-baseTitle": { "v-on:click": "selectDiscuss" }, "v-grid": { "v-on:click": "selectList" } }, _this.components = {
            'v-swper': _swper2.default,
            'v-text': _text2.default,
            'v-baseTitle': _baseTitle2.default,
            'v-grid': _grid2.default,
            'v-title': _title2.default
        }, _this.computed = {
            swiperImgUrls: function swiperImgUrls() {
                return this.choiceData.banners.map(function (item) {
                    return {
                        id: item.id,
                        imgUrl: item.imgUrl
                    };
                });
            },
            hotTopic: function hotTopic() {
                return this.choiceData.hotTopic.map(function (i) {
                    return {
                        id: i.id,
                        name: i.name
                    };
                });
            },
            choiceList: function choiceList() {
                return this.choiceData.circles.reduce(function (arr, i) {
                    if (i.circle_imgs && i.circle_imgs.length > 0) {
                        arr.push({
                            id: i.id,
                            url: i.circle_imgs[0].imgUrl
                        });
                    }
                    return arr;
                }, []);
            }
        }, _this.data = {
            /* 轮播图数据 */
            // choiceList: [{
            //     id: 0,
            //     url: 'http://static.htxq.net/UploadFiles/2017/11/13/1510542719081079365.jpg'
            // }, {
            //     id: 1,
            //     url: 'http://static.htxq.net/UploadFiles/2017/11/13/1510542730649005565.jpg'
            // }, {
            //     id: 2,
            //     url: 'http://static.htxq.net/UploadFiles/2017/11/13/1510541506626011490.jpg'
            // }, {
            //     id: 3,
            //     url: 'http://static.htxq.net/UploadFiles/2017/11/13/1510542214494079384.jpg'
            // }, {
            //     id: 4,
            //     url: 'http://static.htxq.net/UploadFiles/2017/11/13/1510542215017026944.jpg'
            // }, {
            //     id: 5,
            //     url: 'http://static.htxq.net/UploadFiles/2017/11/13/1510542215220092294.jpg'
            // }, {
            //     id: 6,
            //     url: 'http://static.htxq.net/UploadFiles/2017/11/13/1510542628347035674.jpg'
            // }, {
            //     id: 6,
            //     url: 'http://static.htxq.net/UploadFiles/2017/11/13/1510543629362097062.jpg'
            // }, {
            //     id: 6,
            //     url: 'http://static.htxq.net/UploadFiles/2017/11/13/1510543630413080476.jpg'
            // }, {
            //     id: 6,
            //     url: 'http://static.htxq.net/UploadFiles/2017/11/13/1510543630392093541.jpg'
            // }, {
            //     id: 6,
            //     url: 'http://static.htxq.net/UploadFiles/2017/11/13/1510544891901023536.jpg'
            // }]
        }, _this.methods = {
            selectSwiper: function selectSwiper(e) {
                _wepy2.default.navigateTo({
                    url: '../../pages/recommend/index?id=' + e.currentTarget.dataset.id
                });
            },
            selectList: function selectList(e) {
                _wepy2.default.navigateTo({
                    url: '../../pages/detail/moment?id=' + e.currentTarget.dataset.id
                });
            },
            selectDiscuss: function selectDiscuss(e) {
                _wepy2.default.navigateTo({
                    url: '../../pages/discuss/index?id=' + e.currentTarget.dataset.id + '&text=' + (e.currentTarget.dataset.text || '')
                });
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return Index;
}(_wepy2.default.component);

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNob2ljZS5qcyJdLCJuYW1lcyI6WyJJbmRleCIsInByb3BzIiwiY2hvaWNlRGF0YSIsIk9iamVjdCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsInN3cGVyQ29tcG9uZW50IiwidGV4dENvbXBvbmVudCIsImJhc2VUaXRsZUNvbXBvbmVudCIsImdyaWRDb21wb25lbnQiLCJ0aXRsZUNvbXBvbmVudCIsImNvbXB1dGVkIiwic3dpcGVySW1nVXJscyIsImJhbm5lcnMiLCJtYXAiLCJpZCIsIml0ZW0iLCJpbWdVcmwiLCJob3RUb3BpYyIsImkiLCJuYW1lIiwiY2hvaWNlTGlzdCIsImNpcmNsZXMiLCJyZWR1Y2UiLCJhcnIiLCJjaXJjbGVfaW1ncyIsImxlbmd0aCIsInB1c2giLCJ1cmwiLCJkYXRhIiwibWV0aG9kcyIsInNlbGVjdFN3aXBlciIsImUiLCJ3ZXB5IiwibmF2aWdhdGVUbyIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0Iiwic2VsZWN0TGlzdCIsInNlbGVjdERpc2N1c3MiLCJ0ZXh0IiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0k7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O3dMQUNqQkMsSyxHQUFRO0FBQ0pDLHdCQUFZQztBQURSLFMsUUFJVEMsTyxHQUFVLEVBQUMsWUFBVyxFQUFDLE9BQU0sUUFBUCxFQUFnQixTQUFRLEVBQXhCLEVBQVosRSxRQUNqQkMsTSxHQUFTLEVBQUMsVUFBUyxFQUFDLG9CQUFtQixFQUFDLFNBQVEsV0FBVCxFQUFxQixPQUFNLFVBQTNCLEVBQXNDLFFBQU8sTUFBN0MsRUFBb0QsU0FBUSxPQUE1RCxFQUFvRSxPQUFNLE9BQTFFLEVBQXBCLEVBQXVHLFdBQVUsRUFBQyxTQUFRLGFBQVQsRUFBdUIsT0FBTSxVQUE3QixFQUF3QyxRQUFPLE1BQS9DLEVBQXNELFNBQVEsT0FBOUQs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R0g7QUFmSyxTOzs7O0VBcEZxQk4sZUFBS08sUzs7a0JBQW5CMUMsSyIsImZpbGUiOiJjaG9pY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICAgIGltcG9ydCBzd3BlckNvbXBvbmVudCBmcm9tICdAL2NvbXBvbmVudHMvc3dwZXInXG4gICAgaW1wb3J0IHRleHRDb21wb25lbnQgZnJvbSAnQC9jb21wb25lbnRzL3RleHQnXG4gICAgaW1wb3J0IGJhc2VUaXRsZUNvbXBvbmVudCBmcm9tICdAL2NvbXBvbmVudHMvYmFzZVRpdGxlJ1xuICAgIGltcG9ydCBncmlkQ29tcG9uZW50IGZyb20gJ0AvY29tcG9uZW50cy9ncmlkJ1xuICAgIGltcG9ydCB0aXRsZUNvbXBvbmVudCBmcm9tICdAL2NvbXBvbmVudHMvdGl0bGUnXG5cbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcbiAgICAgICAgcHJvcHMgPSB7XG4gICAgICAgICAgICBjaG9pY2VEYXRhOiBPYmplY3RcbiAgICAgICAgfVxuXG4gICAgICAgJHJlcGVhdCA9IHtcImhvdFRvcGljXCI6e1wiY29tXCI6XCJ2LXRleHRcIixcInByb3BzXCI6XCJcIn19O1xyXG4kcHJvcHMgPSB7XCJ2LXRleHRcIjp7XCJ2LWJpbmQ6dGV4dC5vbmNlXCI6e1widmFsdWVcIjpcIml0ZW0ubmFtZVwiLFwiZm9yXCI6XCJob3RUb3BpY1wiLFwiaXRlbVwiOlwiaXRlbVwiLFwiaW5kZXhcIjpcImluZGV4XCIsXCJrZXlcIjpcImluZGV4XCJ9LFwiZGF0YS1pZFwiOntcInZhbHVlXCI6XCJ7e2l0ZW0uaWR9fVwiLFwiZm9yXCI6XCJob3RUb3BpY1wiLFwiaXRlbVwiOlwiaXRlbVwiLFwiaW5kZXhcIjpcImluZGV4XCIsXCJrZXlcIjpcImluZGV4XCJ9fSxcInYtc3dwZXJcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOmFsbGRhdGEuc3luY1wiOlwic3dpcGVySW1nVXJsc1wiLFwieG1sbnM6di1vblwiOlwiXCJ9LFwidi1iYXNlVGl0bGVcIjp7XCJsZWZ0VGV4dFwiOlwi54Ot6Zeo6K+d6aKYXCIsXCJyaWdodFRleHRcIjpcIuabtOWkmueDremXqOivnemimFwiLFwiZGF0YS1pZFwiOlwie3swfX1cIn0sXCJ2LWdyaWRcIjp7XCJ2LWJpbmQ6bGlzdC5zeW5jXCI6XCJjaG9pY2VMaXN0XCJ9LFwidi10aXRsZVwiOntcInRpdGxlXCI6XCLng63pl6jnsr7pgIlcIn19O1xyXG4kZXZlbnRzID0ge1widi10ZXh0XCI6e1widi1vbjpjbGlja1wiOlwic2VsZWN0RGlzY3Vzc1wifSxcInYtc3dwZXJcIjp7XCJ2LW9uOmNsaWNrXCI6XCJzZWxlY3RTd2lwZXJcIn0sXCJ2LWJhc2VUaXRsZVwiOntcInYtb246Y2xpY2tcIjpcInNlbGVjdERpc2N1c3NcIn0sXCJ2LWdyaWRcIjp7XCJ2LW9uOmNsaWNrXCI6XCJzZWxlY3RMaXN0XCJ9fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICAgICAgICAndi1zd3Blcic6IHN3cGVyQ29tcG9uZW50LFxuICAgICAgICAgICAgJ3YtdGV4dCc6IHRleHRDb21wb25lbnQsXG4gICAgICAgICAgICAndi1iYXNlVGl0bGUnOiBiYXNlVGl0bGVDb21wb25lbnQsXG4gICAgICAgICAgICAndi1ncmlkJzogZ3JpZENvbXBvbmVudCxcbiAgICAgICAgICAgICd2LXRpdGxlJzogdGl0bGVDb21wb25lbnRcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbXB1dGVkID0ge1xuICAgICAgICAgICAgc3dpcGVySW1nVXJscyAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2hvaWNlRGF0YS5iYW5uZXJzLm1hcChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBpdGVtLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW1nVXJsOiBpdGVtLmltZ1VybFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBob3RUb3BpYyAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2hvaWNlRGF0YS5ob3RUb3BpYy5tYXAoaSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogaS5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGkubmFtZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjaG9pY2VMaXN0ICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jaG9pY2VEYXRhLmNpcmNsZXMucmVkdWNlKChhcnIsIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGkuY2lyY2xlX2ltZ3MgJiYgaS5jaXJjbGVfaW1ncy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhcnIucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGkuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBpLmNpcmNsZV9pbWdzWzBdLmltZ1VybFxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXJyXG4gICAgICAgICAgICAgICAgfSwgW10pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBkYXRhID0ge1xuICAgICAgICAgICAgLyog6L2u5pKt5Zu+5pWw5o2uICovXG4gICAgICAgICAgICAvLyBjaG9pY2VMaXN0OiBbe1xuICAgICAgICAgICAgLy8gICAgIGlkOiAwLFxuICAgICAgICAgICAgLy8gICAgIHVybDogJ2h0dHA6Ly9zdGF0aWMuaHR4cS5uZXQvVXBsb2FkRmlsZXMvMjAxNy8xMS8xMy8xNTEwNTQyNzE5MDgxMDc5MzY1LmpwZydcbiAgICAgICAgICAgIC8vIH0sIHtcbiAgICAgICAgICAgIC8vICAgICBpZDogMSxcbiAgICAgICAgICAgIC8vICAgICB1cmw6ICdodHRwOi8vc3RhdGljLmh0eHEubmV0L1VwbG9hZEZpbGVzLzIwMTcvMTEvMTMvMTUxMDU0MjczMDY0OTAwNTU2NS5qcGcnXG4gICAgICAgICAgICAvLyB9LCB7XG4gICAgICAgICAgICAvLyAgICAgaWQ6IDIsXG4gICAgICAgICAgICAvLyAgICAgdXJsOiAnaHR0cDovL3N0YXRpYy5odHhxLm5ldC9VcGxvYWRGaWxlcy8yMDE3LzExLzEzLzE1MTA1NDE1MDY2MjYwMTE0OTAuanBnJ1xuICAgICAgICAgICAgLy8gfSwge1xuICAgICAgICAgICAgLy8gICAgIGlkOiAzLFxuICAgICAgICAgICAgLy8gICAgIHVybDogJ2h0dHA6Ly9zdGF0aWMuaHR4cS5uZXQvVXBsb2FkRmlsZXMvMjAxNy8xMS8xMy8xNTEwNTQyMjE0NDk0MDc5Mzg0LmpwZydcbiAgICAgICAgICAgIC8vIH0sIHtcbiAgICAgICAgICAgIC8vICAgICBpZDogNCxcbiAgICAgICAgICAgIC8vICAgICB1cmw6ICdodHRwOi8vc3RhdGljLmh0eHEubmV0L1VwbG9hZEZpbGVzLzIwMTcvMTEvMTMvMTUxMDU0MjIxNTAxNzAyNjk0NC5qcGcnXG4gICAgICAgICAgICAvLyB9LCB7XG4gICAgICAgICAgICAvLyAgICAgaWQ6IDUsXG4gICAgICAgICAgICAvLyAgICAgdXJsOiAnaHR0cDovL3N0YXRpYy5odHhxLm5ldC9VcGxvYWRGaWxlcy8yMDE3LzExLzEzLzE1MTA1NDIyMTUyMjAwOTIyOTQuanBnJ1xuICAgICAgICAgICAgLy8gfSwge1xuICAgICAgICAgICAgLy8gICAgIGlkOiA2LFxuICAgICAgICAgICAgLy8gICAgIHVybDogJ2h0dHA6Ly9zdGF0aWMuaHR4cS5uZXQvVXBsb2FkRmlsZXMvMjAxNy8xMS8xMy8xNTEwNTQyNjI4MzQ3MDM1Njc0LmpwZydcbiAgICAgICAgICAgIC8vIH0sIHtcbiAgICAgICAgICAgIC8vICAgICBpZDogNixcbiAgICAgICAgICAgIC8vICAgICB1cmw6ICdodHRwOi8vc3RhdGljLmh0eHEubmV0L1VwbG9hZEZpbGVzLzIwMTcvMTEvMTMvMTUxMDU0MzYyOTM2MjA5NzA2Mi5qcGcnXG4gICAgICAgICAgICAvLyB9LCB7XG4gICAgICAgICAgICAvLyAgICAgaWQ6IDYsXG4gICAgICAgICAgICAvLyAgICAgdXJsOiAnaHR0cDovL3N0YXRpYy5odHhxLm5ldC9VcGxvYWRGaWxlcy8yMDE3LzExLzEzLzE1MTA1NDM2MzA0MTMwODA0NzYuanBnJ1xuICAgICAgICAgICAgLy8gfSwge1xuICAgICAgICAgICAgLy8gICAgIGlkOiA2LFxuICAgICAgICAgICAgLy8gICAgIHVybDogJ2h0dHA6Ly9zdGF0aWMuaHR4cS5uZXQvVXBsb2FkRmlsZXMvMjAxNy8xMS8xMy8xNTEwNTQzNjMwMzkyMDkzNTQxLmpwZydcbiAgICAgICAgICAgIC8vIH0sIHtcbiAgICAgICAgICAgIC8vICAgICBpZDogNixcbiAgICAgICAgICAgIC8vICAgICB1cmw6ICdodHRwOi8vc3RhdGljLmh0eHEubmV0L1VwbG9hZEZpbGVzLzIwMTcvMTEvMTMvMTUxMDU0NDg5MTkwMTAyMzUzNi5qcGcnXG4gICAgICAgICAgICAvLyB9XVxuICAgICAgICB9XG5cbiAgICAgICAgbWV0aG9kcyA9IHtcbiAgICAgICAgICAgIHNlbGVjdFN3aXBlcihlKSB7XG4gICAgICAgICAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBgLi4vLi4vcGFnZXMvcmVjb21tZW5kL2luZGV4P2lkPSR7ZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaWR9YFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2VsZWN0TGlzdChlKSB7XG4gICAgICAgICAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBgLi4vLi4vcGFnZXMvZGV0YWlsL21vbWVudD9pZD0ke2UuY3VycmVudFRhcmdldC5kYXRhc2V0LmlkfWBcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNlbGVjdERpc2N1c3MoZSkge1xuICAgICAgICAgICAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgICAgICAgICAgICAgIHVybDogYC4uLy4uL3BhZ2VzL2Rpc2N1c3MvaW5kZXg/aWQ9JHtlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pZH0mdGV4dD0ke2UuY3VycmVudFRhcmdldC5kYXRhc2V0LnRleHQgfHwgJyd9YFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4iXX0=