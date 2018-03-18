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
        }, _this.$repeat = { "discuss": { "com": "v-text", "props": "" } }, _this.$props = { "v-text": { "v-bind:text.once": { "value": "item.text", "for": "discuss", "item": "item", "index": "index", "key": "index" }, "data-id": { "value": "{{index}}", "for": "discuss", "item": "item", "index": "index", "key": "index" } }, "v-swper": { "xmlns:v-bind": "", "v-bind:alldata.sync": "swiperImgUrls", "xmlns:v-on": "" }, "v-baseTitle": { "leftText": "热门话题", "rightText": "更多热门话题", "data-id": "{{0}}" }, "v-grid": { "v-bind:list.once": "choiceList" }, "v-title": { "title": "热门精选" } }, _this.$events = { "v-text": { "v-on:click": "selectDiscuss" }, "v-swper": { "v-on:click": "selectSwiper" }, "v-baseTitle": { "v-on:click": "selectDiscuss" }, "v-grid": { "v-on:click": "selectList" } }, _this.components = {
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
            }
        }, _this.data = {
            /* 轮播图数据 */
            discuss: [{
                id: 0,
                text: '这是什么花'
            }, {
                id: 1,
                text: '干花使用'
            }, {
                id: 2,
                text: '盆栽种植'
            }],
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
                _wepy2.default.navigateTo({
                    url: '../../pages/discuss/index?id=' + e.currentTarget.dataset.id + '&text=' + (e.currentTarget.dataset.text || '')
                });
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return Index;
}(_wepy2.default.component);

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNob2ljZS5qcyJdLCJuYW1lcyI6WyJJbmRleCIsInByb3BzIiwiY2hvaWNlRGF0YSIsIk9iamVjdCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsImNvbXB1dGVkIiwic3dpcGVySW1nVXJscyIsImJhbm5lcnMiLCJtYXAiLCJpZCIsIml0ZW0iLCJpbWdVcmwiLCJkYXRhIiwiZGlzY3VzcyIsInRleHQiLCJjaG9pY2VMaXN0IiwidXJsIiwibWV0aG9kcyIsInNlbGVjdFN3aXBlciIsImUiLCJuYXZpZ2F0ZVRvIiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJzZWxlY3RMaXN0Iiwic2VsZWN0RGlzY3VzcyIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNJOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7Ozt3TEFDakJDLEssR0FBUTtBQUNKQyx3QkFBWUM7QUFEUixTLFFBSVRDLE8sR0FBVSxFQUFDLFdBQVUsRUFBQyxPQUFNLFFBQVAsRUFBZ0IsU0FBUSxFQUF4QixFQUFYLEUsUUFDakJDLE0sR0FBUyxFQUFDLFVBQVMsRUFBQyxvQkFBbUIsRUFBQyxTQUFRLFdBQVQsRUFBcUIsT0FBTSxTQUEzQixFQUFxQyxRQUFPLE1BQTVDLEVBQW1ELFNBQVEsT0FBM0QsRUFBbUUsT0FBTSxPQUF6RSxFQUFwQixFQUFzRyxXQUFVLEVBQUMsU0FBUSxXQUFULEVBQXFCLE9BQU0sU0FBM0IsRUFBcUMsUUFBTyxNQUE1QyxFQUFtRCxTQUFRLE9BQTNELEVBQW1FLE9BQU0sT0FBekUsRUFBaEgsRUFBVixFQUE2TSxXQUFVLEVBQUMsZ0JBQWUsRUFBaEIsRUFBbUIsdUJBQXNCLGVBQXpDLEVBQXlELGNBQWEsRUFBdEUsRUFBdk4sRUFBaVMsZUFBYyxFQUFDLFlBQVcsTUFBWixFQUFtQixhQUFZLFFBQS9CLEVBQXdDLFdBQVUsT0FBbEQsRUFBL1MsRUFBMFcsVUFBUyxFQUFDLG9CQUFtQixZQUFwQixFQUFuWCxFQUFxWixXQUFVLEVBQUMsU0FBUSxNQUFULEVBQS9aLEUsUUFDVEMsTyxHQUFVLEVBQUMsVUFBUyxFQUFDLGNBQWEsZUFBZCxFQUFWLEVBQXlDLFdBQVUsRUFBQyxjQUFhLGNBQWQsRUFBbkQsRUFBaUYsZUFBYyxFQUFDLGNBQWEsZUFBZCxFQUEvRixFQUE4SCxVQUFTLEVBQUMsY0FBYSxZQUFkLEVBQXZJLEUsUUFDVEMsVSxHQUFhO0FBQ0Ysc0NBREU7QUFFRixvQ0FGRTtBQUdGLDhDQUhFO0FBSUYsb0NBSkU7QUFLRjtBQUxFLFMsUUFRTkMsUSxHQUFXO0FBQ1BDLHlCQURPLDJCQUNVO0FBQ2IsdUJBQU8sS0FBS1AsVUFBTCxDQUFnQlEsT0FBaEIsQ0FBd0JDLEdBQXhCLENBQTRCLGdCQUFRO0FBQ3ZDLDJCQUFPO0FBQ0hDLDRCQUFJQyxLQUFLRCxFQUROO0FBRUhFLGdDQUFRRCxLQUFLQztBQUZWLHFCQUFQO0FBSUgsaUJBTE0sQ0FBUDtBQU1IO0FBUk0sUyxRQVdYQyxJLEdBQU87QUFDSDtBQUNBQyxxQkFBUyxDQUFDO0FBQ05KLG9CQUFJLENBREU7QUFFTkssc0JBQU07QUFGQSxhQUFELEVBR047QUFDQ0wsb0JBQUksQ0FETDtBQUVDSyxzQkFBTTtBQUZQLGFBSE0sRUFNTjtBQUNDTCxvQkFBSSxDQURMO0FBRUNLLHNCQUFNO0FBRlAsYUFOTSxDQUZOO0FBWUhDLHdCQUFZLENBQUM7QUFDVE4sb0JBQUksQ0FESztBQUVUTyxxQkFBSztBQUZJLGFBQUQsRUFHVDtBQUNDUCxvQkFBSSxDQURMO0FBRUNPLHFCQUFLO0FBRk4sYUFIUyxFQU1UO0FBQ0NQLG9CQUFJLENBREw7QUFFQ08scUJBQUs7QUFGTixhQU5TLEVBU1Q7QUFDQ1Asb0JBQUksQ0FETDtBQUVDTyxxQkFBSztBQUZOLGFBVFMsRUFZVDtBQUNDUCxvQkFBSSxDQURMO0FBRUNPLHFCQUFLO0FBRk4sYUFaUyxFQWVUO0FBQ0NQLG9CQUFJLENBREw7QUFFQ08scUJBQUs7QUFGTixhQWZTLEVBa0JUO0FBQ0NQLG9CQUFJLENBREw7QUFFQ08scUJBQUs7QUFGTixhQWxCUyxFQXFCVDtBQUNDUCxvQkFBSSxDQURMO0FBRUNPLHFCQUFLO0FBRk4sYUFyQlMsRUF3QlQ7QUFDQ1Asb0JBQUksQ0FETDtBQUVDTyxxQkFBSztBQUZOLGFBeEJTLEVBMkJUO0FBQ0NQLG9CQUFJLENBREw7QUFFQ08scUJBQUs7QUFGTixhQTNCUyxFQThCVDtBQUNDUCxvQkFBSSxDQURMO0FBRUNPLHFCQUFLO0FBRk4sYUE5QlM7QUFaVCxTLFFBZ0RQQyxPLEdBQVU7QUFDTkMsd0JBRE0sd0JBQ09DLENBRFAsRUFDVTtBQUNaLCtCQUFLQyxVQUFMLENBQWdCO0FBQ1pKLDZEQUF1Q0csRUFBRUUsYUFBRixDQUFnQkMsT0FBaEIsQ0FBd0JiO0FBRG5ELGlCQUFoQjtBQUdILGFBTEs7QUFNTmMsc0JBTk0sc0JBTUtKLENBTkwsRUFNUTtBQUNWLCtCQUFLQyxVQUFMLENBQWdCO0FBQ1pKLDZEQUF1Q0csRUFBRUUsYUFBRixDQUFnQkMsT0FBaEIsQ0FBd0JiO0FBRG5ELGlCQUFoQjtBQUdILGFBVks7QUFXTmUseUJBWE0seUJBV1FMLENBWFIsRUFXVztBQUNiLCtCQUFLQyxVQUFMLENBQWdCO0FBQ1pKLDJEQUFxQ0csRUFBRUUsYUFBRixDQUFnQkMsT0FBaEIsQ0FBd0JiLEVBQTdELGVBQXdFVSxFQUFFRSxhQUFGLENBQWdCQyxPQUFoQixDQUF3QlIsSUFBeEIsSUFBZ0MsRUFBeEc7QUFEWSxpQkFBaEI7QUFHSDtBQWZLLFM7Ozs7RUEzRXFCLGVBQUtXLFM7O2tCQUFuQjVCLEsiLCJmaWxlIjoiY2hvaWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgICBpbXBvcnQgc3dwZXJDb21wb25lbnQgZnJvbSAnQC9jb21wb25lbnRzL3N3cGVyJ1xuICAgIGltcG9ydCB0ZXh0Q29tcG9uZW50IGZyb20gJ0AvY29tcG9uZW50cy90ZXh0J1xuICAgIGltcG9ydCBiYXNlVGl0bGVDb21wb25lbnQgZnJvbSAnQC9jb21wb25lbnRzL2Jhc2VUaXRsZSdcbiAgICBpbXBvcnQgZ3JpZENvbXBvbmVudCBmcm9tICdAL2NvbXBvbmVudHMvZ3JpZCdcbiAgICBpbXBvcnQgdGl0bGVDb21wb25lbnQgZnJvbSAnQC9jb21wb25lbnRzL3RpdGxlJ1xuXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XG4gICAgICAgIHByb3BzID0ge1xuICAgICAgICAgICAgY2hvaWNlRGF0YTogT2JqZWN0XG4gICAgICAgIH1cblxuICAgICAgICRyZXBlYXQgPSB7XCJkaXNjdXNzXCI6e1wiY29tXCI6XCJ2LXRleHRcIixcInByb3BzXCI6XCJcIn19O1xyXG4kcHJvcHMgPSB7XCJ2LXRleHRcIjp7XCJ2LWJpbmQ6dGV4dC5vbmNlXCI6e1widmFsdWVcIjpcIml0ZW0udGV4dFwiLFwiZm9yXCI6XCJkaXNjdXNzXCIsXCJpdGVtXCI6XCJpdGVtXCIsXCJpbmRleFwiOlwiaW5kZXhcIixcImtleVwiOlwiaW5kZXhcIn0sXCJkYXRhLWlkXCI6e1widmFsdWVcIjpcInt7aW5kZXh9fVwiLFwiZm9yXCI6XCJkaXNjdXNzXCIsXCJpdGVtXCI6XCJpdGVtXCIsXCJpbmRleFwiOlwiaW5kZXhcIixcImtleVwiOlwiaW5kZXhcIn19LFwidi1zd3BlclwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6YWxsZGF0YS5zeW5jXCI6XCJzd2lwZXJJbWdVcmxzXCIsXCJ4bWxuczp2LW9uXCI6XCJcIn0sXCJ2LWJhc2VUaXRsZVwiOntcImxlZnRUZXh0XCI6XCLng63pl6jor53pophcIixcInJpZ2h0VGV4dFwiOlwi5pu05aSa54Ot6Zeo6K+d6aKYXCIsXCJkYXRhLWlkXCI6XCJ7ezB9fVwifSxcInYtZ3JpZFwiOntcInYtYmluZDpsaXN0Lm9uY2VcIjpcImNob2ljZUxpc3RcIn0sXCJ2LXRpdGxlXCI6e1widGl0bGVcIjpcIueDremXqOeyvumAiVwifX07XHJcbiRldmVudHMgPSB7XCJ2LXRleHRcIjp7XCJ2LW9uOmNsaWNrXCI6XCJzZWxlY3REaXNjdXNzXCJ9LFwidi1zd3BlclwiOntcInYtb246Y2xpY2tcIjpcInNlbGVjdFN3aXBlclwifSxcInYtYmFzZVRpdGxlXCI6e1widi1vbjpjbGlja1wiOlwic2VsZWN0RGlzY3Vzc1wifSxcInYtZ3JpZFwiOntcInYtb246Y2xpY2tcIjpcInNlbGVjdExpc3RcIn19O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICAgICAgICAgICd2LXN3cGVyJzogc3dwZXJDb21wb25lbnQsXG4gICAgICAgICAgICAndi10ZXh0JzogdGV4dENvbXBvbmVudCxcbiAgICAgICAgICAgICd2LWJhc2VUaXRsZSc6IGJhc2VUaXRsZUNvbXBvbmVudCxcbiAgICAgICAgICAgICd2LWdyaWQnOiBncmlkQ29tcG9uZW50LFxuICAgICAgICAgICAgJ3YtdGl0bGUnOiB0aXRsZUNvbXBvbmVudFxuICAgICAgICB9XG5cbiAgICAgICAgY29tcHV0ZWQgPSB7XG4gICAgICAgICAgICBzd2lwZXJJbWdVcmxzICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jaG9pY2VEYXRhLmJhbm5lcnMubWFwKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGl0ZW0uaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWdVcmw6IGl0ZW0uaW1nVXJsXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICAgIC8qIOi9ruaSreWbvuaVsOaNriAqL1xuICAgICAgICAgICAgZGlzY3VzczogW3tcbiAgICAgICAgICAgICAgICBpZDogMCxcbiAgICAgICAgICAgICAgICB0ZXh0OiAn6L+Z5piv5LuA5LmI6IqxJ1xuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGlkOiAxLFxuICAgICAgICAgICAgICAgIHRleHQ6ICflubLoirHkvb/nlKgnXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgaWQ6IDIsXG4gICAgICAgICAgICAgICAgdGV4dDogJ+ebhuagveenjeakjSdcbiAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgY2hvaWNlTGlzdDogW3tcbiAgICAgICAgICAgICAgICBpZDogMCxcbiAgICAgICAgICAgICAgICB1cmw6ICdodHRwOi8vc3RhdGljLmh0eHEubmV0L1VwbG9hZEZpbGVzLzIwMTcvMTEvMTMvMTUxMDU0MjcxOTA4MTA3OTM2NS5qcGcnXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgaWQ6IDEsXG4gICAgICAgICAgICAgICAgdXJsOiAnaHR0cDovL3N0YXRpYy5odHhxLm5ldC9VcGxvYWRGaWxlcy8yMDE3LzExLzEzLzE1MTA1NDI3MzA2NDkwMDU1NjUuanBnJ1xuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGlkOiAyLFxuICAgICAgICAgICAgICAgIHVybDogJ2h0dHA6Ly9zdGF0aWMuaHR4cS5uZXQvVXBsb2FkRmlsZXMvMjAxNy8xMS8xMy8xNTEwNTQxNTA2NjI2MDExNDkwLmpwZydcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBpZDogMyxcbiAgICAgICAgICAgICAgICB1cmw6ICdodHRwOi8vc3RhdGljLmh0eHEubmV0L1VwbG9hZEZpbGVzLzIwMTcvMTEvMTMvMTUxMDU0MjIxNDQ5NDA3OTM4NC5qcGcnXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgaWQ6IDQsXG4gICAgICAgICAgICAgICAgdXJsOiAnaHR0cDovL3N0YXRpYy5odHhxLm5ldC9VcGxvYWRGaWxlcy8yMDE3LzExLzEzLzE1MTA1NDIyMTUwMTcwMjY5NDQuanBnJ1xuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGlkOiA1LFxuICAgICAgICAgICAgICAgIHVybDogJ2h0dHA6Ly9zdGF0aWMuaHR4cS5uZXQvVXBsb2FkRmlsZXMvMjAxNy8xMS8xMy8xNTEwNTQyMjE1MjIwMDkyMjk0LmpwZydcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBpZDogNixcbiAgICAgICAgICAgICAgICB1cmw6ICdodHRwOi8vc3RhdGljLmh0eHEubmV0L1VwbG9hZEZpbGVzLzIwMTcvMTEvMTMvMTUxMDU0MjYyODM0NzAzNTY3NC5qcGcnXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgaWQ6IDYsXG4gICAgICAgICAgICAgICAgdXJsOiAnaHR0cDovL3N0YXRpYy5odHhxLm5ldC9VcGxvYWRGaWxlcy8yMDE3LzExLzEzLzE1MTA1NDM2MjkzNjIwOTcwNjIuanBnJ1xuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGlkOiA2LFxuICAgICAgICAgICAgICAgIHVybDogJ2h0dHA6Ly9zdGF0aWMuaHR4cS5uZXQvVXBsb2FkRmlsZXMvMjAxNy8xMS8xMy8xNTEwNTQzNjMwNDEzMDgwNDc2LmpwZydcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBpZDogNixcbiAgICAgICAgICAgICAgICB1cmw6ICdodHRwOi8vc3RhdGljLmh0eHEubmV0L1VwbG9hZEZpbGVzLzIwMTcvMTEvMTMvMTUxMDU0MzYzMDM5MjA5MzU0MS5qcGcnXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgaWQ6IDYsXG4gICAgICAgICAgICAgICAgdXJsOiAnaHR0cDovL3N0YXRpYy5odHhxLm5ldC9VcGxvYWRGaWxlcy8yMDE3LzExLzEzLzE1MTA1NDQ4OTE5MDEwMjM1MzYuanBnJ1xuICAgICAgICAgICAgfV1cbiAgICAgICAgfVxuXG4gICAgICAgIG1ldGhvZHMgPSB7XG4gICAgICAgICAgICBzZWxlY3RTd2lwZXIoZSkge1xuICAgICAgICAgICAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgICAgICAgICAgICAgIHVybDogYC4uLy4uL3BhZ2VzL3JlY29tbWVuZC9pbmRleD9pZD0ke2UuY3VycmVudFRhcmdldC5kYXRhc2V0LmlkfWBcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNlbGVjdExpc3QoZSkge1xuICAgICAgICAgICAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgICAgICAgICAgICAgIHVybDogYC4uLy4uL3BhZ2VzL3JlY29tbWVuZC9pbmRleD9pZD0ke2UuY3VycmVudFRhcmdldC5kYXRhc2V0LmlkfWBcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNlbGVjdERpc2N1c3MoZSkge1xuICAgICAgICAgICAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgICAgICAgICAgICAgIHVybDogYC4uLy4uL3BhZ2VzL2Rpc2N1c3MvaW5kZXg/aWQ9JHtlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pZH0mdGV4dD0ke2UuY3VycmVudFRhcmdldC5kYXRhc2V0LnRleHQgfHwgJyd9YFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4iXX0=