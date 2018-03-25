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
        }, _this.$repeat = { "hotTopic": { "com": "v-text", "props": "" } }, _this.$props = { "v-text": { "v-bind:text.once": { "value": "item.name", "for": "hotTopic", "item": "item", "index": "index", "key": "index" }, "data-id": { "value": "{{item.id}}", "for": "hotTopic", "item": "item", "index": "index", "key": "index" } }, "v-swper": { "xmlns:v-bind": "", "v-bind:alldata.sync": "swiperImgUrls", "xmlns:v-on": "" }, "v-baseTitle": { "leftText": "热门话题", "rightText": "更多热门话题", "data-id": "{{0}}" }, "v-grid": { "v-bind:list.once": "choiceList" }, "v-title": { "title": "热门精选" } }, _this.$events = { "v-text": { "v-on:click": "selectDiscuss" }, "v-swper": { "v-on:click": "selectSwiper" }, "v-baseTitle": { "v-on:click": "selectDiscuss" }, "v-grid": { "v-on:click": "selectList" } }, _this.components = {
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
            }
        }, _this.data = {
            /* 轮播图数据 */
            choiceList: [{
                id: 0,
                url: 'http://static.htxq.net/UploadFiles/2017/11/13/1510542719081079365.jpg'
            }, {
                id: 1,
                url: 'http://static.htxq.net/UploadFiles/2017/11/13/1510542730649005565.jpg'
            }, {
                id: 2,
                url: 'http://static.htxq.net/UploadFiles/2017/11/13/1510541506626011490.jpg'
            }, {
                id: 3,
                url: 'http://static.htxq.net/UploadFiles/2017/11/13/1510542214494079384.jpg'
            }, {
                id: 4,
                url: 'http://static.htxq.net/UploadFiles/2017/11/13/1510542215017026944.jpg'
            }, {
                id: 5,
                url: 'http://static.htxq.net/UploadFiles/2017/11/13/1510542215220092294.jpg'
            }, {
                id: 6,
                url: 'http://static.htxq.net/UploadFiles/2017/11/13/1510542628347035674.jpg'
            }, {
                id: 6,
                url: 'http://static.htxq.net/UploadFiles/2017/11/13/1510543629362097062.jpg'
            }, {
                id: 6,
                url: 'http://static.htxq.net/UploadFiles/2017/11/13/1510543630413080476.jpg'
            }, {
                id: 6,
                url: 'http://static.htxq.net/UploadFiles/2017/11/13/1510543630392093541.jpg'
            }, {
                id: 6,
                url: 'http://static.htxq.net/UploadFiles/2017/11/13/1510544891901023536.jpg'
            }]
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
            selectDiscuss: function selectDiscuss(e) {
                console.log(e.currentTarget.dataset);
                _wepy2.default.navigateTo({
                    url: '../../pages/discuss/index?id=' + e.currentTarget.dataset.id + '&text=' + (e.currentTarget.dataset.text || '')
                });
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return Index;
}(_wepy2.default.component);

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNob2ljZS5qcyJdLCJuYW1lcyI6WyJJbmRleCIsInByb3BzIiwiY2hvaWNlRGF0YSIsIk9iamVjdCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsImNvbXB1dGVkIiwic3dpcGVySW1nVXJscyIsImJhbm5lcnMiLCJtYXAiLCJpZCIsIml0ZW0iLCJpbWdVcmwiLCJob3RUb3BpYyIsImkiLCJuYW1lIiwiZGF0YSIsImNob2ljZUxpc3QiLCJ1cmwiLCJtZXRob2RzIiwic2VsZWN0U3dpcGVyIiwiZSIsIm5hdmlnYXRlVG8iLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsInNlbGVjdExpc3QiLCJzZWxlY3REaXNjdXNzIiwiY29uc29sZSIsImxvZyIsInRleHQiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDSTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7d0xBQ2pCQyxLLEdBQVE7QUFDSkMsd0JBQVlDO0FBRFIsUyxRQUlUQyxPLEdBQVUsRUFBQyxZQUFXLEVBQUMsT0FBTSxRQUFQLEVBQWdCLFNBQVEsRUFBeEIsRUFBWixFLFFBQ2pCQyxNLEdBQVMsRUFBQyxVQUFTLEVBQUMsb0JBQW1CLEVBQUMsU0FBUSxXQUFULEVBQXFCLE9BQU0sVUFBM0IsRUFBc0MsUUFBTyxNQUE3QyxFQUFvRCxTQUFRLE9BQTVELEVBQW9FLE9BQU0sT0FBMUUsRUFBcEIsRUFBdUcsV0FBVSxFQUFDLFNBQVEsYUFBVCxFQUF1QixPQUFNLFVBQTdCLEVBQXdDLFFBQU8sTUFBL0MsRUFBc0QsU0FBUSxPQUE5RCxFQUFzRSxPQUFNLE9BQTVFLEVBQWpILEVBQVYsRUFBaU4sV0FBVSxFQUFDLGdCQUFlLEVBQWhCLEVBQW1CLHVCQUFzQixlQUF6QyxFQUF5RCxjQUFhLEVBQXRFLEVBQTNOLEVBQXFTLGVBQWMsRUFBQyxZQUFXLE1BQVosRUFBbUIsYUFBWSxRQUEvQixFQUF3QyxXQUFVLE9BQWxELEVBQW5ULEVBQThXLFVBQVMsRUFBQyxvQkFBbUIsWUFBcEIsRUFBdlgsRUFBeVosV0FBVSxFQUFDLFNBQVEsTUFBVCxFQUFuYSxFLFFBQ1RDLE8sR0FBVSxFQUFDLFVBQVMsRUFBQyxjQUFhLGVBQWQsRUFBVixFQUF5QyxXQUFVLEVBQUMsY0FBYSxjQUFkLEVBQW5ELEVBQWlGLGVBQWMsRUFBQyxjQUFhLGVBQWQsRUFBL0YsRUFBOEgsVUFBUyxFQUFDLGNBQWEsWUFBZCxFQUF2SSxFLFFBQ1RDLFUsR0FBYTtBQUNGLHNDQURFO0FBRUYsb0NBRkU7QUFHRiw4Q0FIRTtBQUlGLG9DQUpFO0FBS0Y7QUFMRSxTLFFBUU5DLFEsR0FBVztBQUNQQyx5QkFETywyQkFDVTtBQUNiLHVCQUFPLEtBQUtQLFVBQUwsQ0FBZ0JRLE9BQWhCLENBQXdCQyxHQUF4QixDQUE0QixnQkFBUTtBQUN2QywyQkFBTztBQUNIQyw0QkFBSUMsS0FBS0QsRUFETjtBQUVIRSxnQ0FBUUQsS0FBS0M7QUFGVixxQkFBUDtBQUlILGlCQUxNLENBQVA7QUFNSCxhQVJNO0FBU1BDLG9CQVRPLHNCQVNLO0FBQ1IsdUJBQU8sS0FBS2IsVUFBTCxDQUFnQmEsUUFBaEIsQ0FBeUJKLEdBQXpCLENBQTZCLGFBQUs7QUFDckMsMkJBQU87QUFDSEMsNEJBQUlJLEVBQUVKLEVBREg7QUFFSEssOEJBQU1ELEVBQUVDO0FBRkwscUJBQVA7QUFJSCxpQkFMTSxDQUFQO0FBTUg7QUFoQk0sUyxRQW1CWEMsSSxHQUFPO0FBQ0g7QUFDQUMsd0JBQVksQ0FBQztBQUNUUCxvQkFBSSxDQURLO0FBRVRRLHFCQUFLO0FBRkksYUFBRCxFQUdUO0FBQ0NSLG9CQUFJLENBREw7QUFFQ1EscUJBQUs7QUFGTixhQUhTLEVBTVQ7QUFDQ1Isb0JBQUksQ0FETDtBQUVDUSxxQkFBSztBQUZOLGFBTlMsRUFTVDtBQUNDUixvQkFBSSxDQURMO0FBRUNRLHFCQUFLO0FBRk4sYUFUUyxFQVlUO0FBQ0NSLG9CQUFJLENBREw7QUFFQ1EscUJBQUs7QUFGTixhQVpTLEVBZVQ7QUFDQ1Isb0JBQUksQ0FETDtBQUVDUSxxQkFBSztBQUZOLGFBZlMsRUFrQlQ7QUFDQ1Isb0JBQUksQ0FETDtBQUVDUSxxQkFBSztBQUZOLGFBbEJTLEVBcUJUO0FBQ0NSLG9CQUFJLENBREw7QUFFQ1EscUJBQUs7QUFGTixhQXJCUyxFQXdCVDtBQUNDUixvQkFBSSxDQURMO0FBRUNRLHFCQUFLO0FBRk4sYUF4QlMsRUEyQlQ7QUFDQ1Isb0JBQUksQ0FETDtBQUVDUSxxQkFBSztBQUZOLGFBM0JTLEVBOEJUO0FBQ0NSLG9CQUFJLENBREw7QUFFQ1EscUJBQUs7QUFGTixhQTlCUztBQUZULFMsUUFzQ1BDLE8sR0FBVTtBQUNOQyx3QkFETSx3QkFDT0MsQ0FEUCxFQUNVO0FBQ1osK0JBQUtDLFVBQUwsQ0FBZ0I7QUFDWkosNkRBQXVDRyxFQUFFRSxhQUFGLENBQWdCQyxPQUFoQixDQUF3QmQ7QUFEbkQsaUJBQWhCO0FBR0gsYUFMSztBQU1OZSxzQkFOTSxzQkFNS0osQ0FOTCxFQU1RO0FBQ1YsK0JBQUtDLFVBQUwsQ0FBZ0I7QUFDWkosNkRBQXVDRyxFQUFFRSxhQUFGLENBQWdCQyxPQUFoQixDQUF3QmQ7QUFEbkQsaUJBQWhCO0FBR0gsYUFWSztBQVdOZ0IseUJBWE0seUJBV1FMLENBWFIsRUFXVztBQUNiTSx3QkFBUUMsR0FBUixDQUFZUCxFQUFFRSxhQUFGLENBQWdCQyxPQUE1QjtBQUNBLCtCQUFLRixVQUFMLENBQWdCO0FBQ1pKLDJEQUFxQ0csRUFBRUUsYUFBRixDQUFnQkMsT0FBaEIsQ0FBd0JkLEVBQTdELGVBQXdFVyxFQUFFRSxhQUFGLENBQWdCQyxPQUFoQixDQUF3QkssSUFBeEIsSUFBZ0MsRUFBeEc7QUFEWSxpQkFBaEI7QUFHSDtBQWhCSyxTOzs7O0VBekVxQixlQUFLQyxTOztrQkFBbkJoQyxLIiwiZmlsZSI6ImNob2ljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gICAgaW1wb3J0IHN3cGVyQ29tcG9uZW50IGZyb20gJ0AvY29tcG9uZW50cy9zd3BlcidcbiAgICBpbXBvcnQgdGV4dENvbXBvbmVudCBmcm9tICdAL2NvbXBvbmVudHMvdGV4dCdcbiAgICBpbXBvcnQgYmFzZVRpdGxlQ29tcG9uZW50IGZyb20gJ0AvY29tcG9uZW50cy9iYXNlVGl0bGUnXG4gICAgaW1wb3J0IGdyaWRDb21wb25lbnQgZnJvbSAnQC9jb21wb25lbnRzL2dyaWQnXG4gICAgaW1wb3J0IHRpdGxlQ29tcG9uZW50IGZyb20gJ0AvY29tcG9uZW50cy90aXRsZSdcblxuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuICAgICAgICBwcm9wcyA9IHtcbiAgICAgICAgICAgIGNob2ljZURhdGE6IE9iamVjdFxuICAgICAgICB9XG5cbiAgICAgICAkcmVwZWF0ID0ge1wiaG90VG9waWNcIjp7XCJjb21cIjpcInYtdGV4dFwiLFwicHJvcHNcIjpcIlwifX07XHJcbiRwcm9wcyA9IHtcInYtdGV4dFwiOntcInYtYmluZDp0ZXh0Lm9uY2VcIjp7XCJ2YWx1ZVwiOlwiaXRlbS5uYW1lXCIsXCJmb3JcIjpcImhvdFRvcGljXCIsXCJpdGVtXCI6XCJpdGVtXCIsXCJpbmRleFwiOlwiaW5kZXhcIixcImtleVwiOlwiaW5kZXhcIn0sXCJkYXRhLWlkXCI6e1widmFsdWVcIjpcInt7aXRlbS5pZH19XCIsXCJmb3JcIjpcImhvdFRvcGljXCIsXCJpdGVtXCI6XCJpdGVtXCIsXCJpbmRleFwiOlwiaW5kZXhcIixcImtleVwiOlwiaW5kZXhcIn19LFwidi1zd3BlclwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6YWxsZGF0YS5zeW5jXCI6XCJzd2lwZXJJbWdVcmxzXCIsXCJ4bWxuczp2LW9uXCI6XCJcIn0sXCJ2LWJhc2VUaXRsZVwiOntcImxlZnRUZXh0XCI6XCLng63pl6jor53pophcIixcInJpZ2h0VGV4dFwiOlwi5pu05aSa54Ot6Zeo6K+d6aKYXCIsXCJkYXRhLWlkXCI6XCJ7ezB9fVwifSxcInYtZ3JpZFwiOntcInYtYmluZDpsaXN0Lm9uY2VcIjpcImNob2ljZUxpc3RcIn0sXCJ2LXRpdGxlXCI6e1widGl0bGVcIjpcIueDremXqOeyvumAiVwifX07XHJcbiRldmVudHMgPSB7XCJ2LXRleHRcIjp7XCJ2LW9uOmNsaWNrXCI6XCJzZWxlY3REaXNjdXNzXCJ9LFwidi1zd3BlclwiOntcInYtb246Y2xpY2tcIjpcInNlbGVjdFN3aXBlclwifSxcInYtYmFzZVRpdGxlXCI6e1widi1vbjpjbGlja1wiOlwic2VsZWN0RGlzY3Vzc1wifSxcInYtZ3JpZFwiOntcInYtb246Y2xpY2tcIjpcInNlbGVjdExpc3RcIn19O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICAgICAgICAgICd2LXN3cGVyJzogc3dwZXJDb21wb25lbnQsXG4gICAgICAgICAgICAndi10ZXh0JzogdGV4dENvbXBvbmVudCxcbiAgICAgICAgICAgICd2LWJhc2VUaXRsZSc6IGJhc2VUaXRsZUNvbXBvbmVudCxcbiAgICAgICAgICAgICd2LWdyaWQnOiBncmlkQ29tcG9uZW50LFxuICAgICAgICAgICAgJ3YtdGl0bGUnOiB0aXRsZUNvbXBvbmVudFxuICAgICAgICB9XG5cbiAgICAgICAgY29tcHV0ZWQgPSB7XG4gICAgICAgICAgICBzd2lwZXJJbWdVcmxzICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jaG9pY2VEYXRhLmJhbm5lcnMubWFwKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGl0ZW0uaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWdVcmw6IGl0ZW0uaW1nVXJsXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGhvdFRvcGljICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jaG9pY2VEYXRhLmhvdFRvcGljLm1hcChpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBpLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogaS5uYW1lXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICAgIC8qIOi9ruaSreWbvuaVsOaNriAqL1xuICAgICAgICAgICAgY2hvaWNlTGlzdDogW3tcbiAgICAgICAgICAgICAgICBpZDogMCxcbiAgICAgICAgICAgICAgICB1cmw6ICdodHRwOi8vc3RhdGljLmh0eHEubmV0L1VwbG9hZEZpbGVzLzIwMTcvMTEvMTMvMTUxMDU0MjcxOTA4MTA3OTM2NS5qcGcnXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgaWQ6IDEsXG4gICAgICAgICAgICAgICAgdXJsOiAnaHR0cDovL3N0YXRpYy5odHhxLm5ldC9VcGxvYWRGaWxlcy8yMDE3LzExLzEzLzE1MTA1NDI3MzA2NDkwMDU1NjUuanBnJ1xuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGlkOiAyLFxuICAgICAgICAgICAgICAgIHVybDogJ2h0dHA6Ly9zdGF0aWMuaHR4cS5uZXQvVXBsb2FkRmlsZXMvMjAxNy8xMS8xMy8xNTEwNTQxNTA2NjI2MDExNDkwLmpwZydcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBpZDogMyxcbiAgICAgICAgICAgICAgICB1cmw6ICdodHRwOi8vc3RhdGljLmh0eHEubmV0L1VwbG9hZEZpbGVzLzIwMTcvMTEvMTMvMTUxMDU0MjIxNDQ5NDA3OTM4NC5qcGcnXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgaWQ6IDQsXG4gICAgICAgICAgICAgICAgdXJsOiAnaHR0cDovL3N0YXRpYy5odHhxLm5ldC9VcGxvYWRGaWxlcy8yMDE3LzExLzEzLzE1MTA1NDIyMTUwMTcwMjY5NDQuanBnJ1xuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGlkOiA1LFxuICAgICAgICAgICAgICAgIHVybDogJ2h0dHA6Ly9zdGF0aWMuaHR4cS5uZXQvVXBsb2FkRmlsZXMvMjAxNy8xMS8xMy8xNTEwNTQyMjE1MjIwMDkyMjk0LmpwZydcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBpZDogNixcbiAgICAgICAgICAgICAgICB1cmw6ICdodHRwOi8vc3RhdGljLmh0eHEubmV0L1VwbG9hZEZpbGVzLzIwMTcvMTEvMTMvMTUxMDU0MjYyODM0NzAzNTY3NC5qcGcnXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgaWQ6IDYsXG4gICAgICAgICAgICAgICAgdXJsOiAnaHR0cDovL3N0YXRpYy5odHhxLm5ldC9VcGxvYWRGaWxlcy8yMDE3LzExLzEzLzE1MTA1NDM2MjkzNjIwOTcwNjIuanBnJ1xuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGlkOiA2LFxuICAgICAgICAgICAgICAgIHVybDogJ2h0dHA6Ly9zdGF0aWMuaHR4cS5uZXQvVXBsb2FkRmlsZXMvMjAxNy8xMS8xMy8xNTEwNTQzNjMwNDEzMDgwNDc2LmpwZydcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBpZDogNixcbiAgICAgICAgICAgICAgICB1cmw6ICdodHRwOi8vc3RhdGljLmh0eHEubmV0L1VwbG9hZEZpbGVzLzIwMTcvMTEvMTMvMTUxMDU0MzYzMDM5MjA5MzU0MS5qcGcnXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgaWQ6IDYsXG4gICAgICAgICAgICAgICAgdXJsOiAnaHR0cDovL3N0YXRpYy5odHhxLm5ldC9VcGxvYWRGaWxlcy8yMDE3LzExLzEzLzE1MTA1NDQ4OTE5MDEwMjM1MzYuanBnJ1xuICAgICAgICAgICAgfV1cbiAgICAgICAgfVxuXG4gICAgICAgIG1ldGhvZHMgPSB7XG4gICAgICAgICAgICBzZWxlY3RTd2lwZXIoZSkge1xuICAgICAgICAgICAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgICAgICAgICAgICAgIHVybDogYC4uLy4uL3BhZ2VzL3JlY29tbWVuZC9pbmRleD9pZD0ke2UuY3VycmVudFRhcmdldC5kYXRhc2V0LmlkfWBcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNlbGVjdExpc3QoZSkge1xuICAgICAgICAgICAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgICAgICAgICAgICAgIHVybDogYC4uLy4uL3BhZ2VzL3JlY29tbWVuZC9pbmRleD9pZD0ke2UuY3VycmVudFRhcmdldC5kYXRhc2V0LmlkfWBcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNlbGVjdERpc2N1c3MoZSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUuY3VycmVudFRhcmdldC5kYXRhc2V0KVxuICAgICAgICAgICAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgICAgICAgICAgICAgIHVybDogYC4uLy4uL3BhZ2VzL2Rpc2N1c3MvaW5kZXg/aWQ9JHtlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pZH0mdGV4dD0ke2UuY3VycmVudFRhcmdldC5kYXRhc2V0LnRleHQgfHwgJyd9YFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4iXX0=