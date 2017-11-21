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

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.$repeat = { "discuss": { "com": "v-text", "props": "" } }, _this.$props = { "v-text": { "v-bind:text.once": { "value": "item.text", "for": "discuss", "item": "item", "index": "index", "key": "index" }, "data-id": { "value": "{{index}}", "for": "discuss", "item": "item", "index": "index", "key": "index" } }, "v-swper": { "xmlns:v-bind": "", "v-bind:alldata.once": "swiperImgUrls", "xmlns:v-on": "" }, "v-baseTitle": { "leftText": "热门话题", "rightText": "更多热门话题", "data-id": "{{0}}" }, "v-grid": { "v-bind:list.once": "choiceList" }, "v-title": { "title": "热门精选" } }, _this.$events = { "v-text": { "v-on:click": "selectDiscuss" }, "v-swper": { "v-on:click": "selectSwiper" }, "v-baseTitle": { "v-on:click": "selectDiscuss" }, "v-grid": { "v-on:click": "selectList" } }, _this.components = {
            'v-swper': _swper2.default,
            'v-text': _text2.default,
            'v-baseTitle': _baseTitle2.default,
            'v-grid': _grid2.default,
            'v-title': _title2.default
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNob2ljZS5qcyJdLCJuYW1lcyI6WyJJbmRleCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsImRhdGEiLCJzd2lwZXJJbWdVcmxzIiwiaWQiLCJpbWFnZSIsImRpc2N1c3MiLCJ0ZXh0IiwiY2hvaWNlTGlzdCIsInVybCIsIm1ldGhvZHMiLCJzZWxlY3RTd2lwZXIiLCJlIiwibmF2aWdhdGVUbyIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0Iiwic2VsZWN0TGlzdCIsInNlbGVjdERpc2N1c3MiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDSTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7d0xBQ2xCQyxPLEdBQVUsRUFBQyxXQUFVLEVBQUMsT0FBTSxRQUFQLEVBQWdCLFNBQVEsRUFBeEIsRUFBWCxFLFFBQ2pCQyxNLEdBQVMsRUFBQyxVQUFTLEVBQUMsb0JBQW1CLEVBQUMsU0FBUSxXQUFULEVBQXFCLE9BQU0sU0FBM0IsRUFBcUMsUUFBTyxNQUE1QyxFQUFtRCxTQUFRLE9BQTNELEVBQW1FLE9BQU0sT0FBekUsRUFBcEIsRUFBc0csV0FBVSxFQUFDLFNBQVEsV0FBVCxFQUFxQixPQUFNLFNBQTNCLEVBQXFDLFFBQU8sTUFBNUMsRUFBbUQsU0FBUSxPQUEzRCxFQUFtRSxPQUFNLE9BQXpFLEVBQWhILEVBQVYsRUFBNk0sV0FBVSxFQUFDLGdCQUFlLEVBQWhCLEVBQW1CLHVCQUFzQixlQUF6QyxFQUF5RCxjQUFhLEVBQXRFLEVBQXZOLEVBQWlTLGVBQWMsRUFBQyxZQUFXLE1BQVosRUFBbUIsYUFBWSxRQUEvQixFQUF3QyxXQUFVLE9BQWxELEVBQS9TLEVBQTBXLFVBQVMsRUFBQyxvQkFBbUIsWUFBcEIsRUFBblgsRUFBcVosV0FBVSxFQUFDLFNBQVEsTUFBVCxFQUEvWixFLFFBQ1RDLE8sR0FBVSxFQUFDLFVBQVMsRUFBQyxjQUFhLGVBQWQsRUFBVixFQUF5QyxXQUFVLEVBQUMsY0FBYSxjQUFkLEVBQW5ELEVBQWlGLGVBQWMsRUFBQyxjQUFhLGVBQWQsRUFBL0YsRUFBOEgsVUFBUyxFQUFDLGNBQWEsWUFBZCxFQUF2SSxFLFFBQ1RDLFUsR0FBYTtBQUNGLHNDQURFO0FBRUYsb0NBRkU7QUFHRiw4Q0FIRTtBQUlGLG9DQUpFO0FBS0Y7QUFMRSxTLFFBUU5DLEksR0FBTztBQUNIO0FBQ0FDLDJCQUFlLENBQUM7QUFDWkMsb0JBQUksQ0FEUTtBQUVaQyx1QkFBTztBQUZLLGFBQUQsRUFHWjtBQUNDRCxvQkFBSSxDQURMO0FBRUNDLHVCQUFPO0FBRlIsYUFIWSxFQU1aO0FBQ0NELG9CQUFJLENBREw7QUFFQ0MsdUJBQU87QUFGUixhQU5ZLENBRlo7QUFZSEMscUJBQVMsQ0FBQztBQUNORixvQkFBSSxDQURFO0FBRU5HLHNCQUFNO0FBRkEsYUFBRCxFQUdOO0FBQ0NILG9CQUFJLENBREw7QUFFQ0csc0JBQU07QUFGUCxhQUhNLEVBTU47QUFDQ0gsb0JBQUksQ0FETDtBQUVDRyxzQkFBTTtBQUZQLGFBTk0sQ0FaTjtBQXNCSEMsd0JBQVksQ0FBQztBQUNUSixvQkFBSSxDQURLO0FBRVRLLHFCQUFLO0FBRkksYUFBRCxFQUdUO0FBQ0NMLG9CQUFJLENBREw7QUFFQ0sscUJBQUs7QUFGTixhQUhTLEVBTVQ7QUFDQ0wsb0JBQUksQ0FETDtBQUVDSyxxQkFBSztBQUZOLGFBTlMsRUFTVDtBQUNDTCxvQkFBSSxDQURMO0FBRUNLLHFCQUFLO0FBRk4sYUFUUyxFQVlUO0FBQ0NMLG9CQUFJLENBREw7QUFFQ0sscUJBQUs7QUFGTixhQVpTLEVBZVQ7QUFDQ0wsb0JBQUksQ0FETDtBQUVDSyxxQkFBSztBQUZOLGFBZlMsRUFrQlQ7QUFDQ0wsb0JBQUksQ0FETDtBQUVDSyxxQkFBSztBQUZOLGFBbEJTLEVBcUJUO0FBQ0NMLG9CQUFJLENBREw7QUFFQ0sscUJBQUs7QUFGTixhQXJCUyxFQXdCVDtBQUNDTCxvQkFBSSxDQURMO0FBRUNLLHFCQUFLO0FBRk4sYUF4QlMsRUEyQlQ7QUFDQ0wsb0JBQUksQ0FETDtBQUVDSyxxQkFBSztBQUZOLGFBM0JTLEVBOEJUO0FBQ0NMLG9CQUFJLENBREw7QUFFQ0sscUJBQUs7QUFGTixhQTlCUztBQXRCVCxTLFFBMERQQyxPLEdBQVU7QUFDTkMsd0JBRE0sd0JBQ09DLENBRFAsRUFDVTtBQUNaLCtCQUFLQyxVQUFMLENBQWdCO0FBQ1pKLDZEQUF1Q0csRUFBRUUsYUFBRixDQUFnQkMsT0FBaEIsQ0FBd0JYO0FBRG5ELGlCQUFoQjtBQUdILGFBTEs7QUFNTlksc0JBTk0sc0JBTUtKLENBTkwsRUFNUTtBQUNWLCtCQUFLQyxVQUFMLENBQWdCO0FBQ1pKLDZEQUF1Q0csRUFBRUUsYUFBRixDQUFnQkMsT0FBaEIsQ0FBd0JYO0FBRG5ELGlCQUFoQjtBQUdILGFBVks7QUFXTmEseUJBWE0seUJBV1FMLENBWFIsRUFXVztBQUNiLCtCQUFLQyxVQUFMLENBQWdCO0FBQ1pKLDJEQUFxQ0csRUFBRUUsYUFBRixDQUFnQkMsT0FBaEIsQ0FBd0JYLEVBQTdELGVBQXdFUSxFQUFFRSxhQUFGLENBQWdCQyxPQUFoQixDQUF3QlIsSUFBeEIsSUFBZ0MsRUFBeEc7QUFEWSxpQkFBaEI7QUFHSDtBQWZLLFM7Ozs7RUF0RXFCLGVBQUtXLFM7O2tCQUFuQnJCLEsiLCJmaWxlIjoiY2hvaWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgICBpbXBvcnQgc3dwZXJDb21wb25lbnQgZnJvbSAnQC9jb21wb25lbnRzL3N3cGVyJ1xuICAgIGltcG9ydCB0ZXh0Q29tcG9uZW50IGZyb20gJ0AvY29tcG9uZW50cy90ZXh0J1xuICAgIGltcG9ydCBiYXNlVGl0bGVDb21wb25lbnQgZnJvbSAnQC9jb21wb25lbnRzL2Jhc2VUaXRsZSdcbiAgICBpbXBvcnQgZ3JpZENvbXBvbmVudCBmcm9tICdAL2NvbXBvbmVudHMvZ3JpZCdcbiAgICBpbXBvcnQgdGl0bGVDb21wb25lbnQgZnJvbSAnQC9jb21wb25lbnRzL3RpdGxlJ1xuXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XG4gICAgICAgJHJlcGVhdCA9IHtcImRpc2N1c3NcIjp7XCJjb21cIjpcInYtdGV4dFwiLFwicHJvcHNcIjpcIlwifX07XHJcbiRwcm9wcyA9IHtcInYtdGV4dFwiOntcInYtYmluZDp0ZXh0Lm9uY2VcIjp7XCJ2YWx1ZVwiOlwiaXRlbS50ZXh0XCIsXCJmb3JcIjpcImRpc2N1c3NcIixcIml0ZW1cIjpcIml0ZW1cIixcImluZGV4XCI6XCJpbmRleFwiLFwia2V5XCI6XCJpbmRleFwifSxcImRhdGEtaWRcIjp7XCJ2YWx1ZVwiOlwie3tpbmRleH19XCIsXCJmb3JcIjpcImRpc2N1c3NcIixcIml0ZW1cIjpcIml0ZW1cIixcImluZGV4XCI6XCJpbmRleFwiLFwia2V5XCI6XCJpbmRleFwifX0sXCJ2LXN3cGVyXCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDphbGxkYXRhLm9uY2VcIjpcInN3aXBlckltZ1VybHNcIixcInhtbG5zOnYtb25cIjpcIlwifSxcInYtYmFzZVRpdGxlXCI6e1wibGVmdFRleHRcIjpcIueDremXqOivnemimFwiLFwicmlnaHRUZXh0XCI6XCLmm7TlpJrng63pl6jor53pophcIixcImRhdGEtaWRcIjpcInt7MH19XCJ9LFwidi1ncmlkXCI6e1widi1iaW5kOmxpc3Qub25jZVwiOlwiY2hvaWNlTGlzdFwifSxcInYtdGl0bGVcIjp7XCJ0aXRsZVwiOlwi54Ot6Zeo57K+6YCJXCJ9fTtcclxuJGV2ZW50cyA9IHtcInYtdGV4dFwiOntcInYtb246Y2xpY2tcIjpcInNlbGVjdERpc2N1c3NcIn0sXCJ2LXN3cGVyXCI6e1widi1vbjpjbGlja1wiOlwic2VsZWN0U3dpcGVyXCJ9LFwidi1iYXNlVGl0bGVcIjp7XCJ2LW9uOmNsaWNrXCI6XCJzZWxlY3REaXNjdXNzXCJ9LFwidi1ncmlkXCI6e1widi1vbjpjbGlja1wiOlwic2VsZWN0TGlzdFwifX07XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgICAgICAgJ3Ytc3dwZXInOiBzd3BlckNvbXBvbmVudCxcbiAgICAgICAgICAgICd2LXRleHQnOiB0ZXh0Q29tcG9uZW50LFxuICAgICAgICAgICAgJ3YtYmFzZVRpdGxlJzogYmFzZVRpdGxlQ29tcG9uZW50LFxuICAgICAgICAgICAgJ3YtZ3JpZCc6IGdyaWRDb21wb25lbnQsXG4gICAgICAgICAgICAndi10aXRsZSc6IHRpdGxlQ29tcG9uZW50XG4gICAgICAgIH1cblxuICAgICAgICBkYXRhID0ge1xuICAgICAgICAgICAgLyog6L2u5pKt5Zu+5pWw5o2uICovXG4gICAgICAgICAgICBzd2lwZXJJbWdVcmxzOiBbe1xuICAgICAgICAgICAgICAgIGlkOiAxLFxuICAgICAgICAgICAgICAgIGltYWdlOiAnaHR0cDovL3N0YXRpYy5odHhxLm5ldC9VcGxvYWRGaWxlcy8yMDE3LzA4LzEwLzIwMTcwODEwMTQxNzAzODg2OTU5LmpwZydcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBpZDogMCxcbiAgICAgICAgICAgICAgICBpbWFnZTogJ2h0dHA6Ly9zdGF0aWMuaHR4cS5uZXQvVXBsb2FkRmlsZXMvMjAxNy8wOC8xNC8yMDE3MDgxNDE0MDMyNTA0NjI5OS5qcGcnXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgaWQ6IDEsXG4gICAgICAgICAgICAgICAgaW1hZ2U6ICdodHRwOi8vc3RhdGljLmh0eHEubmV0L1VwbG9hZEZpbGVzLzIwMTcvMDgvMTEvMjAxNzA4MTExMzE5MTEzODk4NTkuanBnJ1xuICAgICAgICAgICAgfV0sXG4gICAgICAgICAgICBkaXNjdXNzOiBbe1xuICAgICAgICAgICAgICAgIGlkOiAwLFxuICAgICAgICAgICAgICAgIHRleHQ6ICfov5nmmK/ku4DkuYjoirEnXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgaWQ6IDEsXG4gICAgICAgICAgICAgICAgdGV4dDogJ+W5suiKseS9v+eUqCdcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBpZDogMixcbiAgICAgICAgICAgICAgICB0ZXh0OiAn55uG5qC956eN5qSNJ1xuICAgICAgICAgICAgfV0sXG4gICAgICAgICAgICBjaG9pY2VMaXN0OiBbe1xuICAgICAgICAgICAgICAgIGlkOiAwLFxuICAgICAgICAgICAgICAgIHVybDogJ2h0dHA6Ly9zdGF0aWMuaHR4cS5uZXQvVXBsb2FkRmlsZXMvMjAxNy8xMS8xMy8xNTEwNTQyNzE5MDgxMDc5MzY1LmpwZydcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBpZDogMSxcbiAgICAgICAgICAgICAgICB1cmw6ICdodHRwOi8vc3RhdGljLmh0eHEubmV0L1VwbG9hZEZpbGVzLzIwMTcvMTEvMTMvMTUxMDU0MjczMDY0OTAwNTU2NS5qcGcnXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgaWQ6IDIsXG4gICAgICAgICAgICAgICAgdXJsOiAnaHR0cDovL3N0YXRpYy5odHhxLm5ldC9VcGxvYWRGaWxlcy8yMDE3LzExLzEzLzE1MTA1NDE1MDY2MjYwMTE0OTAuanBnJ1xuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGlkOiAzLFxuICAgICAgICAgICAgICAgIHVybDogJ2h0dHA6Ly9zdGF0aWMuaHR4cS5uZXQvVXBsb2FkRmlsZXMvMjAxNy8xMS8xMy8xNTEwNTQyMjE0NDk0MDc5Mzg0LmpwZydcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBpZDogNCxcbiAgICAgICAgICAgICAgICB1cmw6ICdodHRwOi8vc3RhdGljLmh0eHEubmV0L1VwbG9hZEZpbGVzLzIwMTcvMTEvMTMvMTUxMDU0MjIxNTAxNzAyNjk0NC5qcGcnXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgaWQ6IDUsXG4gICAgICAgICAgICAgICAgdXJsOiAnaHR0cDovL3N0YXRpYy5odHhxLm5ldC9VcGxvYWRGaWxlcy8yMDE3LzExLzEzLzE1MTA1NDIyMTUyMjAwOTIyOTQuanBnJ1xuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGlkOiA2LFxuICAgICAgICAgICAgICAgIHVybDogJ2h0dHA6Ly9zdGF0aWMuaHR4cS5uZXQvVXBsb2FkRmlsZXMvMjAxNy8xMS8xMy8xNTEwNTQyNjI4MzQ3MDM1Njc0LmpwZydcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBpZDogNixcbiAgICAgICAgICAgICAgICB1cmw6ICdodHRwOi8vc3RhdGljLmh0eHEubmV0L1VwbG9hZEZpbGVzLzIwMTcvMTEvMTMvMTUxMDU0MzYyOTM2MjA5NzA2Mi5qcGcnXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgaWQ6IDYsXG4gICAgICAgICAgICAgICAgdXJsOiAnaHR0cDovL3N0YXRpYy5odHhxLm5ldC9VcGxvYWRGaWxlcy8yMDE3LzExLzEzLzE1MTA1NDM2MzA0MTMwODA0NzYuanBnJ1xuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGlkOiA2LFxuICAgICAgICAgICAgICAgIHVybDogJ2h0dHA6Ly9zdGF0aWMuaHR4cS5uZXQvVXBsb2FkRmlsZXMvMjAxNy8xMS8xMy8xNTEwNTQzNjMwMzkyMDkzNTQxLmpwZydcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBpZDogNixcbiAgICAgICAgICAgICAgICB1cmw6ICdodHRwOi8vc3RhdGljLmh0eHEubmV0L1VwbG9hZEZpbGVzLzIwMTcvMTEvMTMvMTUxMDU0NDg5MTkwMTAyMzUzNi5qcGcnXG4gICAgICAgICAgICB9XVxuICAgICAgICB9XG5cbiAgICAgICAgbWV0aG9kcyA9IHtcbiAgICAgICAgICAgIHNlbGVjdFN3aXBlcihlKSB7XG4gICAgICAgICAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBgLi4vLi4vcGFnZXMvcmVjb21tZW5kL2luZGV4P2lkPSR7ZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaWR9YFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2VsZWN0TGlzdChlKSB7XG4gICAgICAgICAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBgLi4vLi4vcGFnZXMvcmVjb21tZW5kL2luZGV4P2lkPSR7ZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaWR9YFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2VsZWN0RGlzY3VzcyhlKSB7XG4gICAgICAgICAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBgLi4vLi4vcGFnZXMvZGlzY3Vzcy9pbmRleD9pZD0ke2UuY3VycmVudFRhcmdldC5kYXRhc2V0LmlkfSZ0ZXh0PSR7ZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQudGV4dCB8fCAnJ31gXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiJdfQ==