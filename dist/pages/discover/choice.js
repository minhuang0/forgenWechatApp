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
        }, _this.$repeat = { "hotTopic": { "com": "v-text", "props": "item.sync" } }, _this.$props = { "v-text": { "v-bind:item.sync": { "value": "item", "type": "item", "for": "hotTopic", "item": "item", "index": "index", "key": "index" } }, "v-swper": { "xmlns:v-bind": "", "v-bind:alldata.sync": "swiperImgUrls", "xmlns:v-on": "" }, "v-baseTitle": { "leftText": "热门话题", "rightText": "更多热门话题", "data-id": "{{0}}" }, "v-grid": { "v-bind:list.sync": "choiceList" }, "v-title": { "title": "热门精选" } }, _this.$events = { "v-text": { "v-on:click": "selectDiscuss" }, "v-swper": { "v-on:click": "selectSwiper" }, "v-baseTitle": { "v-on:click": "selectDiscuss" }, "v-grid": { "v-on:click": "selectList" } }, _this.components = {
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
                        text: i.name
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
                    url: '../../pages/discuss/index?id=' + e.id + '&text=' + (e.name || '')
                });
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return Index;
}(_wepy2.default.component);

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNob2ljZS5qcyJdLCJuYW1lcyI6WyJJbmRleCIsInByb3BzIiwiY2hvaWNlRGF0YSIsIk9iamVjdCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsInN3cGVyQ29tcG9uZW50IiwidGV4dENvbXBvbmVudCIsImJhc2VUaXRsZUNvbXBvbmVudCIsImdyaWRDb21wb25lbnQiLCJ0aXRsZUNvbXBvbmVudCIsImNvbXB1dGVkIiwic3dpcGVySW1nVXJscyIsImJhbm5lcnMiLCJtYXAiLCJpZCIsIml0ZW0iLCJpbWdVcmwiLCJob3RUb3BpYyIsImkiLCJ0ZXh0IiwibmFtZSIsImNob2ljZUxpc3QiLCJjaXJjbGVzIiwicmVkdWNlIiwiYXJyIiwiY2lyY2xlX2ltZ3MiLCJsZW5ndGgiLCJwdXNoIiwidXJsIiwiZGF0YSIsIm1ldGhvZHMiLCJzZWxlY3RTd2lwZXIiLCJlIiwid2VweSIsIm5hdmlnYXRlVG8iLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsInNlbGVjdExpc3QiLCJzZWxlY3REaXNjdXNzIiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0k7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O3dMQUNqQkMsSyxHQUFRO0FBQ0pDLHdCQUFZQztBQURSLFMsUUFJVEMsTyxHQUFVLEVBQUMsWUFBVyxFQUFDLE9BQU0sUUFBUCxFQUFnQixTQUFRLFdBQXhCLEVBQVosRSxRQUNqQkMsTSxHQUFTLEVBQUMsVUFBUyxFQUFDLG9CQUFtQixFQUFDLFNBQVEsTUFBVCxFQUFnQixRQUFPLE1BQXZCLEVBQThCLE9BQU0sVUFBcEMsRUFBK0MsUUFBTyxNQUF0RCxFQUE2RCxTQUFRLE9BQXJFLEVBQTZFLE9BQU0sT0FBbkYsRUFBcEIsRUFBVixFQUEySCxXQUFVLEVBQUMsZ0JBQWUsRUFBaEIsRUFBbUIsdUJBQXNCLGVBQXpDLEVBQXlELGNBQWEsRUFBdEUsRUFBckksRUFBK00sZUFBYyxFQUFDLFlBQVcsTUFBWixFQUFtQixhQUFZLFFBQS9CLEVBQXdDLFdBQVUsT0FBbEQsRUFBN04sRUFBd1IsVUFBUyxFQUFDLG9CQUFtQixZQUFwQixFQUFqUyxFQUFtVSxXQUFVLEVBQUMsU0FBUSxNQUFULEVBQTdVLEUsUUFDVEMsTyxHQUFVLEVBQUMsVUFBUyxFQUFDLGNBQWEsZUFBZCxFQUFWLEVBQXlDLFdBQVUsRUFBQyxjQUFhLGNBQWQsRUFBbkQsRUFBaUYsZUFBYyxFQUFDLGNBQWEsZUFBZCxFQUEvRixFQUE4SCxVQUFTLEVBQUMsY0FBYSxZQUFkLEVBQXZJLEUsUUFDVEMsVSxHQUFhO0FBQ0YsdUJBQVdDLGVBRFQ7QUFFRixzQkFBVUMsY0FGUjtBQUdGLDJCQUFlQyxtQkFIYjtBQUlGLHNCQUFVQyxjQUpSO0FBS0YsdUJBQVdDO0FBTFQsUyxRQVFOQyxRLEdBQVc7QUFDUEMseUJBRE8sMkJBQ1U7QUFDYix1QkFBTyxLQUFLWixVQUFMLENBQWdCYSxPQUFoQixDQUF3QkMsR0FBeEIsQ0FBNEIsZ0JBQVE7QUFDdkMsMkJBQU87QUFDSEMsNEJBQUlDLEtBQUtELEVBRE47QUFFSEUsZ0NBQVFELEtBQUtDO0FBRlYscUJBQVA7QUFJSCxpQkFMTSxDQUFQO0FBTUgsYUFSTTtBQVNQQyxvQkFUTyxzQkFTSztBQUNSLHVCQUFPLEtBQUtsQixVQUFMLENBQWdCa0IsUUFBaEIsQ0FBeUJKLEdBQXpCLENBQTZCLGFBQUs7QUFDckMsMkJBQU87QUFDSEMsNEJBQUlJLEVBQUVKLEVBREg7QUFFSEssOEJBQU1ELEVBQUVFO0FBRkwscUJBQVA7QUFJSCxpQkFMTSxDQUFQO0FBTUgsYUFoQk07QUFpQlBDLHNCQWpCTyx3QkFpQk87QUFDVix1QkFBTyxLQUFLdEIsVUFBTCxDQUFnQnVCLE9BQWhCLENBQXdCQyxNQUF4QixDQUErQixVQUFDQyxHQUFELEVBQU1OLENBQU4sRUFBWTtBQUM5Qyx3QkFBSUEsRUFBRU8sV0FBRixJQUFpQlAsRUFBRU8sV0FBRixDQUFjQyxNQUFkLEdBQXVCLENBQTVDLEVBQStDO0FBQzNDRiw0QkFBSUcsSUFBSixDQUFTO0FBQ0xiLGdDQUFJSSxFQUFFSixFQUREO0FBRUxjLGlDQUFLVixFQUFFTyxXQUFGLENBQWMsQ0FBZCxFQUFpQlQ7QUFGakIseUJBQVQ7QUFJSDtBQUNELDJCQUFPUSxHQUFQO0FBQ0gsaUJBUk0sRUFRSixFQVJJLENBQVA7QUFTSDtBQTNCTSxTLFFBOEJYSyxJLEdBQU87QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBbkNHLFMsUUFzQ1BDLE8sR0FBVTtBQUNOQyx3QkFETSx3QkFDT0MsQ0FEUCxFQUNVO0FBQ1pDLCtCQUFLQyxVQUFMLENBQWdCO0FBQ1pOLDZEQUF1Q0ksRUFBRUcsYUFBRixDQUFnQkMsT0FBaEIsQ0FBd0J0QjtBQURuRCxpQkFBaEI7QUFHSCxhQUxLO0FBTU51QixzQkFOTSxzQkFNS0wsQ0FOTCxFQU1RO0FBQ1ZDLCtCQUFLQyxVQUFMLENBQWdCO0FBQ1pOLDJEQUFxQ0ksRUFBRUcsYUFBRixDQUFnQkMsT0FBaEIsQ0FBd0J0QjtBQURqRCxpQkFBaEI7QUFHSCxhQVZLO0FBV053Qix5QkFYTSx5QkFXUU4sQ0FYUixFQVdXO0FBQ2JDLCtCQUFLQyxVQUFMLENBQWdCO0FBQ1pOLDJEQUFxQ0ksRUFBRWxCLEVBQXZDLGVBQWtEa0IsRUFBRVosSUFBRixJQUFVLEVBQTVEO0FBRFksaUJBQWhCO0FBR0g7QUFmSyxTOzs7O0VBcEZxQmEsZUFBS00sUzs7a0JBQW5CMUMsSyIsImZpbGUiOiJjaG9pY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICAgIGltcG9ydCBzd3BlckNvbXBvbmVudCBmcm9tICdAL2NvbXBvbmVudHMvc3dwZXInXG4gICAgaW1wb3J0IHRleHRDb21wb25lbnQgZnJvbSAnQC9jb21wb25lbnRzL3RleHQnXG4gICAgaW1wb3J0IGJhc2VUaXRsZUNvbXBvbmVudCBmcm9tICdAL2NvbXBvbmVudHMvYmFzZVRpdGxlJ1xuICAgIGltcG9ydCBncmlkQ29tcG9uZW50IGZyb20gJ0AvY29tcG9uZW50cy9ncmlkJ1xuICAgIGltcG9ydCB0aXRsZUNvbXBvbmVudCBmcm9tICdAL2NvbXBvbmVudHMvdGl0bGUnXG5cbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcbiAgICAgICAgcHJvcHMgPSB7XG4gICAgICAgICAgICBjaG9pY2VEYXRhOiBPYmplY3RcbiAgICAgICAgfVxuXG4gICAgICAgJHJlcGVhdCA9IHtcImhvdFRvcGljXCI6e1wiY29tXCI6XCJ2LXRleHRcIixcInByb3BzXCI6XCJpdGVtLnN5bmNcIn19O1xyXG4kcHJvcHMgPSB7XCJ2LXRleHRcIjp7XCJ2LWJpbmQ6aXRlbS5zeW5jXCI6e1widmFsdWVcIjpcIml0ZW1cIixcInR5cGVcIjpcIml0ZW1cIixcImZvclwiOlwiaG90VG9waWNcIixcIml0ZW1cIjpcIml0ZW1cIixcImluZGV4XCI6XCJpbmRleFwiLFwia2V5XCI6XCJpbmRleFwifX0sXCJ2LXN3cGVyXCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDphbGxkYXRhLnN5bmNcIjpcInN3aXBlckltZ1VybHNcIixcInhtbG5zOnYtb25cIjpcIlwifSxcInYtYmFzZVRpdGxlXCI6e1wibGVmdFRleHRcIjpcIueDremXqOivnemimFwiLFwicmlnaHRUZXh0XCI6XCLmm7TlpJrng63pl6jor53pophcIixcImRhdGEtaWRcIjpcInt7MH19XCJ9LFwidi1ncmlkXCI6e1widi1iaW5kOmxpc3Quc3luY1wiOlwiY2hvaWNlTGlzdFwifSxcInYtdGl0bGVcIjp7XCJ0aXRsZVwiOlwi54Ot6Zeo57K+6YCJXCJ9fTtcclxuJGV2ZW50cyA9IHtcInYtdGV4dFwiOntcInYtb246Y2xpY2tcIjpcInNlbGVjdERpc2N1c3NcIn0sXCJ2LXN3cGVyXCI6e1widi1vbjpjbGlja1wiOlwic2VsZWN0U3dpcGVyXCJ9LFwidi1iYXNlVGl0bGVcIjp7XCJ2LW9uOmNsaWNrXCI6XCJzZWxlY3REaXNjdXNzXCJ9LFwidi1ncmlkXCI6e1widi1vbjpjbGlja1wiOlwic2VsZWN0TGlzdFwifX07XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgICAgICAgJ3Ytc3dwZXInOiBzd3BlckNvbXBvbmVudCxcbiAgICAgICAgICAgICd2LXRleHQnOiB0ZXh0Q29tcG9uZW50LFxuICAgICAgICAgICAgJ3YtYmFzZVRpdGxlJzogYmFzZVRpdGxlQ29tcG9uZW50LFxuICAgICAgICAgICAgJ3YtZ3JpZCc6IGdyaWRDb21wb25lbnQsXG4gICAgICAgICAgICAndi10aXRsZSc6IHRpdGxlQ29tcG9uZW50XG4gICAgICAgIH1cblxuICAgICAgICBjb21wdXRlZCA9IHtcbiAgICAgICAgICAgIHN3aXBlckltZ1VybHMgKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNob2ljZURhdGEuYmFubmVycy5tYXAoaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogaXRlbS5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGltZ1VybDogaXRlbS5pbWdVcmxcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaG90VG9waWMgKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNob2ljZURhdGEuaG90VG9waWMubWFwKGkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGkuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBpLm5hbWVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2hvaWNlTGlzdCAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2hvaWNlRGF0YS5jaXJjbGVzLnJlZHVjZSgoYXJyLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpLmNpcmNsZV9pbWdzICYmIGkuY2lyY2xlX2ltZ3MubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJyLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBpLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogaS5jaXJjbGVfaW1nc1swXS5pbWdVcmxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFyclxuICAgICAgICAgICAgICAgIH0sIFtdKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICAgIC8qIOi9ruaSreWbvuaVsOaNriAqL1xuICAgICAgICAgICAgLy8gY2hvaWNlTGlzdDogW3tcbiAgICAgICAgICAgIC8vICAgICBpZDogMCxcbiAgICAgICAgICAgIC8vICAgICB1cmw6ICdodHRwOi8vc3RhdGljLmh0eHEubmV0L1VwbG9hZEZpbGVzLzIwMTcvMTEvMTMvMTUxMDU0MjcxOTA4MTA3OTM2NS5qcGcnXG4gICAgICAgICAgICAvLyB9LCB7XG4gICAgICAgICAgICAvLyAgICAgaWQ6IDEsXG4gICAgICAgICAgICAvLyAgICAgdXJsOiAnaHR0cDovL3N0YXRpYy5odHhxLm5ldC9VcGxvYWRGaWxlcy8yMDE3LzExLzEzLzE1MTA1NDI3MzA2NDkwMDU1NjUuanBnJ1xuICAgICAgICAgICAgLy8gfSwge1xuICAgICAgICAgICAgLy8gICAgIGlkOiAyLFxuICAgICAgICAgICAgLy8gICAgIHVybDogJ2h0dHA6Ly9zdGF0aWMuaHR4cS5uZXQvVXBsb2FkRmlsZXMvMjAxNy8xMS8xMy8xNTEwNTQxNTA2NjI2MDExNDkwLmpwZydcbiAgICAgICAgICAgIC8vIH0sIHtcbiAgICAgICAgICAgIC8vICAgICBpZDogMyxcbiAgICAgICAgICAgIC8vICAgICB1cmw6ICdodHRwOi8vc3RhdGljLmh0eHEubmV0L1VwbG9hZEZpbGVzLzIwMTcvMTEvMTMvMTUxMDU0MjIxNDQ5NDA3OTM4NC5qcGcnXG4gICAgICAgICAgICAvLyB9LCB7XG4gICAgICAgICAgICAvLyAgICAgaWQ6IDQsXG4gICAgICAgICAgICAvLyAgICAgdXJsOiAnaHR0cDovL3N0YXRpYy5odHhxLm5ldC9VcGxvYWRGaWxlcy8yMDE3LzExLzEzLzE1MTA1NDIyMTUwMTcwMjY5NDQuanBnJ1xuICAgICAgICAgICAgLy8gfSwge1xuICAgICAgICAgICAgLy8gICAgIGlkOiA1LFxuICAgICAgICAgICAgLy8gICAgIHVybDogJ2h0dHA6Ly9zdGF0aWMuaHR4cS5uZXQvVXBsb2FkRmlsZXMvMjAxNy8xMS8xMy8xNTEwNTQyMjE1MjIwMDkyMjk0LmpwZydcbiAgICAgICAgICAgIC8vIH0sIHtcbiAgICAgICAgICAgIC8vICAgICBpZDogNixcbiAgICAgICAgICAgIC8vICAgICB1cmw6ICdodHRwOi8vc3RhdGljLmh0eHEubmV0L1VwbG9hZEZpbGVzLzIwMTcvMTEvMTMvMTUxMDU0MjYyODM0NzAzNTY3NC5qcGcnXG4gICAgICAgICAgICAvLyB9LCB7XG4gICAgICAgICAgICAvLyAgICAgaWQ6IDYsXG4gICAgICAgICAgICAvLyAgICAgdXJsOiAnaHR0cDovL3N0YXRpYy5odHhxLm5ldC9VcGxvYWRGaWxlcy8yMDE3LzExLzEzLzE1MTA1NDM2MjkzNjIwOTcwNjIuanBnJ1xuICAgICAgICAgICAgLy8gfSwge1xuICAgICAgICAgICAgLy8gICAgIGlkOiA2LFxuICAgICAgICAgICAgLy8gICAgIHVybDogJ2h0dHA6Ly9zdGF0aWMuaHR4cS5uZXQvVXBsb2FkRmlsZXMvMjAxNy8xMS8xMy8xNTEwNTQzNjMwNDEzMDgwNDc2LmpwZydcbiAgICAgICAgICAgIC8vIH0sIHtcbiAgICAgICAgICAgIC8vICAgICBpZDogNixcbiAgICAgICAgICAgIC8vICAgICB1cmw6ICdodHRwOi8vc3RhdGljLmh0eHEubmV0L1VwbG9hZEZpbGVzLzIwMTcvMTEvMTMvMTUxMDU0MzYzMDM5MjA5MzU0MS5qcGcnXG4gICAgICAgICAgICAvLyB9LCB7XG4gICAgICAgICAgICAvLyAgICAgaWQ6IDYsXG4gICAgICAgICAgICAvLyAgICAgdXJsOiAnaHR0cDovL3N0YXRpYy5odHhxLm5ldC9VcGxvYWRGaWxlcy8yMDE3LzExLzEzLzE1MTA1NDQ4OTE5MDEwMjM1MzYuanBnJ1xuICAgICAgICAgICAgLy8gfV1cbiAgICAgICAgfVxuXG4gICAgICAgIG1ldGhvZHMgPSB7XG4gICAgICAgICAgICBzZWxlY3RTd2lwZXIoZSkge1xuICAgICAgICAgICAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgICAgICAgICAgICAgIHVybDogYC4uLy4uL3BhZ2VzL3JlY29tbWVuZC9pbmRleD9pZD0ke2UuY3VycmVudFRhcmdldC5kYXRhc2V0LmlkfWBcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNlbGVjdExpc3QoZSkge1xuICAgICAgICAgICAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgICAgICAgICAgICAgIHVybDogYC4uLy4uL3BhZ2VzL2RldGFpbC9tb21lbnQ/aWQ9JHtlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pZH1gXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZWxlY3REaXNjdXNzKGUpIHtcbiAgICAgICAgICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgICAgICAgICAgICB1cmw6IGAuLi8uLi9wYWdlcy9kaXNjdXNzL2luZGV4P2lkPSR7ZS5pZH0mdGV4dD0ke2UubmFtZSB8fCAnJ31gXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiJdfQ==