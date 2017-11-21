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

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.$repeat = { "discuss": { "com": "v-text", "props": "" } }, _this.$props = { "v-text": { "v-bind:text.once": { "value": "item.text", "for": "discuss", "item": "item", "index": "index", "key": "index" } }, "v-swper": { "xmlns:v-bind": "", "v-bind:alldata.once": "swiperImgUrls", "xmlns:v-on": "" }, "v-baseTitle": { "leftText": "热门讨论", "rightText": "更多热门讨论" }, "v-grid": { "v-bind:list.once": "choiceList" }, "v-title": { "title": "热门精选" } }, _this.$events = { "v-swper": { "v-on:click": "selectSwiper" }, "v-grid": { "v-on:click": "selectList" } }, _this.components = {
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
                console.log(e);
                _wepy2.default.navigateTo({
                    url: '../../pages/recommend/index?id=' + e.currentTarget.dataset.id
                });
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return Index;
}(_wepy2.default.component);

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNob2ljZS5qcyJdLCJuYW1lcyI6WyJJbmRleCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsImRhdGEiLCJzd2lwZXJJbWdVcmxzIiwiaWQiLCJpbWFnZSIsImRpc2N1c3MiLCJ0ZXh0IiwiY2hvaWNlTGlzdCIsInVybCIsIm1ldGhvZHMiLCJzZWxlY3RTd2lwZXIiLCJlIiwibmF2aWdhdGVUbyIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0Iiwic2VsZWN0TGlzdCIsImNvbnNvbGUiLCJsb2ciLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDSTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7d0xBQ2xCQyxPLEdBQVUsRUFBQyxXQUFVLEVBQUMsT0FBTSxRQUFQLEVBQWdCLFNBQVEsRUFBeEIsRUFBWCxFLFFBQ2pCQyxNLEdBQVMsRUFBQyxVQUFTLEVBQUMsb0JBQW1CLEVBQUMsU0FBUSxXQUFULEVBQXFCLE9BQU0sU0FBM0IsRUFBcUMsUUFBTyxNQUE1QyxFQUFtRCxTQUFRLE9BQTNELEVBQW1FLE9BQU0sT0FBekUsRUFBcEIsRUFBVixFQUFpSCxXQUFVLEVBQUMsZ0JBQWUsRUFBaEIsRUFBbUIsdUJBQXNCLGVBQXpDLEVBQXlELGNBQWEsRUFBdEUsRUFBM0gsRUFBcU0sZUFBYyxFQUFDLFlBQVcsTUFBWixFQUFtQixhQUFZLFFBQS9CLEVBQW5OLEVBQTRQLFVBQVMsRUFBQyxvQkFBbUIsWUFBcEIsRUFBclEsRUFBdVMsV0FBVSxFQUFDLFNBQVEsTUFBVCxFQUFqVCxFLFFBQ1RDLE8sR0FBVSxFQUFDLFdBQVUsRUFBQyxjQUFhLGNBQWQsRUFBWCxFQUF5QyxVQUFTLEVBQUMsY0FBYSxZQUFkLEVBQWxELEUsUUFDVEMsVSxHQUFhO0FBQ0Ysc0NBREU7QUFFRixvQ0FGRTtBQUdGLDhDQUhFO0FBSUYsb0NBSkU7QUFLRjtBQUxFLFMsUUFRTkMsSSxHQUFPO0FBQ0g7QUFDQUMsMkJBQWUsQ0FBQztBQUNaQyxvQkFBSSxDQURRO0FBRVpDLHVCQUFPO0FBRkssYUFBRCxFQUdaO0FBQ0NELG9CQUFJLENBREw7QUFFQ0MsdUJBQU87QUFGUixhQUhZLEVBTVo7QUFDQ0Qsb0JBQUksQ0FETDtBQUVDQyx1QkFBTztBQUZSLGFBTlksQ0FGWjtBQVlIQyxxQkFBUyxDQUFDO0FBQ05GLG9CQUFJLENBREU7QUFFTkcsc0JBQU07QUFGQSxhQUFELEVBR047QUFDQ0gsb0JBQUksQ0FETDtBQUVDRyxzQkFBTTtBQUZQLGFBSE0sRUFNTjtBQUNDSCxvQkFBSSxDQURMO0FBRUNHLHNCQUFNO0FBRlAsYUFOTSxDQVpOO0FBc0JIQyx3QkFBWSxDQUFDO0FBQ1RKLG9CQUFJLENBREs7QUFFVEsscUJBQUs7QUFGSSxhQUFELEVBR1Q7QUFDQ0wsb0JBQUksQ0FETDtBQUVDSyxxQkFBSztBQUZOLGFBSFMsRUFNVDtBQUNDTCxvQkFBSSxDQURMO0FBRUNLLHFCQUFLO0FBRk4sYUFOUyxFQVNUO0FBQ0NMLG9CQUFJLENBREw7QUFFQ0sscUJBQUs7QUFGTixhQVRTLEVBWVQ7QUFDQ0wsb0JBQUksQ0FETDtBQUVDSyxxQkFBSztBQUZOLGFBWlMsRUFlVDtBQUNDTCxvQkFBSSxDQURMO0FBRUNLLHFCQUFLO0FBRk4sYUFmUyxFQWtCVDtBQUNDTCxvQkFBSSxDQURMO0FBRUNLLHFCQUFLO0FBRk4sYUFsQlMsRUFxQlQ7QUFDQ0wsb0JBQUksQ0FETDtBQUVDSyxxQkFBSztBQUZOLGFBckJTLEVBd0JUO0FBQ0NMLG9CQUFJLENBREw7QUFFQ0sscUJBQUs7QUFGTixhQXhCUyxFQTJCVDtBQUNDTCxvQkFBSSxDQURMO0FBRUNLLHFCQUFLO0FBRk4sYUEzQlMsRUE4QlQ7QUFDQ0wsb0JBQUksQ0FETDtBQUVDSyxxQkFBSztBQUZOLGFBOUJTO0FBdEJULFMsUUEwRFBDLE8sR0FBVTtBQUNOQyx3QkFETSx3QkFDT0MsQ0FEUCxFQUNVO0FBQ1osK0JBQUtDLFVBQUwsQ0FBZ0I7QUFDWkosNkRBQXVDRyxFQUFFRSxhQUFGLENBQWdCQyxPQUFoQixDQUF3Qlg7QUFEbkQsaUJBQWhCO0FBR0gsYUFMSztBQU1OWSxzQkFOTSxzQkFNS0osQ0FOTCxFQU1RO0FBQ1ZLLHdCQUFRQyxHQUFSLENBQVlOLENBQVo7QUFDQSwrQkFBS0MsVUFBTCxDQUFnQjtBQUNaSiw2REFBdUNHLEVBQUVFLGFBQUYsQ0FBZ0JDLE9BQWhCLENBQXdCWDtBQURuRCxpQkFBaEI7QUFHSDtBQVhLLFM7Ozs7RUF0RXFCLGVBQUtlLFM7O2tCQUFuQnRCLEsiLCJmaWxlIjoiY2hvaWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgICBpbXBvcnQgc3dwZXJDb21wb25lbnQgZnJvbSAnQC9jb21wb25lbnRzL3N3cGVyJ1xuICAgIGltcG9ydCB0ZXh0Q29tcG9uZW50IGZyb20gJ0AvY29tcG9uZW50cy90ZXh0J1xuICAgIGltcG9ydCBiYXNlVGl0bGVDb21wb25lbnQgZnJvbSAnQC9jb21wb25lbnRzL2Jhc2VUaXRsZSdcbiAgICBpbXBvcnQgZ3JpZENvbXBvbmVudCBmcm9tICdAL2NvbXBvbmVudHMvZ3JpZCdcbiAgICBpbXBvcnQgdGl0bGVDb21wb25lbnQgZnJvbSAnQC9jb21wb25lbnRzL3RpdGxlJ1xuXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XG4gICAgICAgJHJlcGVhdCA9IHtcImRpc2N1c3NcIjp7XCJjb21cIjpcInYtdGV4dFwiLFwicHJvcHNcIjpcIlwifX07XHJcbiRwcm9wcyA9IHtcInYtdGV4dFwiOntcInYtYmluZDp0ZXh0Lm9uY2VcIjp7XCJ2YWx1ZVwiOlwiaXRlbS50ZXh0XCIsXCJmb3JcIjpcImRpc2N1c3NcIixcIml0ZW1cIjpcIml0ZW1cIixcImluZGV4XCI6XCJpbmRleFwiLFwia2V5XCI6XCJpbmRleFwifX0sXCJ2LXN3cGVyXCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDphbGxkYXRhLm9uY2VcIjpcInN3aXBlckltZ1VybHNcIixcInhtbG5zOnYtb25cIjpcIlwifSxcInYtYmFzZVRpdGxlXCI6e1wibGVmdFRleHRcIjpcIueDremXqOiuqOiuulwiLFwicmlnaHRUZXh0XCI6XCLmm7TlpJrng63pl6jorqjorrpcIn0sXCJ2LWdyaWRcIjp7XCJ2LWJpbmQ6bGlzdC5vbmNlXCI6XCJjaG9pY2VMaXN0XCJ9LFwidi10aXRsZVwiOntcInRpdGxlXCI6XCLng63pl6jnsr7pgIlcIn19O1xyXG4kZXZlbnRzID0ge1widi1zd3BlclwiOntcInYtb246Y2xpY2tcIjpcInNlbGVjdFN3aXBlclwifSxcInYtZ3JpZFwiOntcInYtb246Y2xpY2tcIjpcInNlbGVjdExpc3RcIn19O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICAgICAgICAgICd2LXN3cGVyJzogc3dwZXJDb21wb25lbnQsXG4gICAgICAgICAgICAndi10ZXh0JzogdGV4dENvbXBvbmVudCxcbiAgICAgICAgICAgICd2LWJhc2VUaXRsZSc6IGJhc2VUaXRsZUNvbXBvbmVudCxcbiAgICAgICAgICAgICd2LWdyaWQnOiBncmlkQ29tcG9uZW50LFxuICAgICAgICAgICAgJ3YtdGl0bGUnOiB0aXRsZUNvbXBvbmVudFxuICAgICAgICB9XG5cbiAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICAgIC8qIOi9ruaSreWbvuaVsOaNriAqL1xuICAgICAgICAgICAgc3dpcGVySW1nVXJsczogW3tcbiAgICAgICAgICAgICAgICBpZDogMSxcbiAgICAgICAgICAgICAgICBpbWFnZTogJ2h0dHA6Ly9zdGF0aWMuaHR4cS5uZXQvVXBsb2FkRmlsZXMvMjAxNy8wOC8xMC8yMDE3MDgxMDE0MTcwMzg4Njk1OS5qcGcnXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgaWQ6IDAsXG4gICAgICAgICAgICAgICAgaW1hZ2U6ICdodHRwOi8vc3RhdGljLmh0eHEubmV0L1VwbG9hZEZpbGVzLzIwMTcvMDgvMTQvMjAxNzA4MTQxNDAzMjUwNDYyOTkuanBnJ1xuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGlkOiAxLFxuICAgICAgICAgICAgICAgIGltYWdlOiAnaHR0cDovL3N0YXRpYy5odHhxLm5ldC9VcGxvYWRGaWxlcy8yMDE3LzA4LzExLzIwMTcwODExMTMxOTExMzg5ODU5LmpwZydcbiAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgZGlzY3VzczogW3tcbiAgICAgICAgICAgICAgICBpZDogMCxcbiAgICAgICAgICAgICAgICB0ZXh0OiAn6L+Z5piv5LuA5LmI6IqxJ1xuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGlkOiAxLFxuICAgICAgICAgICAgICAgIHRleHQ6ICflubLoirHkvb/nlKgnXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgaWQ6IDIsXG4gICAgICAgICAgICAgICAgdGV4dDogJ+ebhuagveenjeakjSdcbiAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgY2hvaWNlTGlzdDogW3tcbiAgICAgICAgICAgICAgICBpZDogMCxcbiAgICAgICAgICAgICAgICB1cmw6ICdodHRwOi8vc3RhdGljLmh0eHEubmV0L1VwbG9hZEZpbGVzLzIwMTcvMTEvMTMvMTUxMDU0MjcxOTA4MTA3OTM2NS5qcGcnXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgaWQ6IDEsXG4gICAgICAgICAgICAgICAgdXJsOiAnaHR0cDovL3N0YXRpYy5odHhxLm5ldC9VcGxvYWRGaWxlcy8yMDE3LzExLzEzLzE1MTA1NDI3MzA2NDkwMDU1NjUuanBnJ1xuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGlkOiAyLFxuICAgICAgICAgICAgICAgIHVybDogJ2h0dHA6Ly9zdGF0aWMuaHR4cS5uZXQvVXBsb2FkRmlsZXMvMjAxNy8xMS8xMy8xNTEwNTQxNTA2NjI2MDExNDkwLmpwZydcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBpZDogMyxcbiAgICAgICAgICAgICAgICB1cmw6ICdodHRwOi8vc3RhdGljLmh0eHEubmV0L1VwbG9hZEZpbGVzLzIwMTcvMTEvMTMvMTUxMDU0MjIxNDQ5NDA3OTM4NC5qcGcnXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgaWQ6IDQsXG4gICAgICAgICAgICAgICAgdXJsOiAnaHR0cDovL3N0YXRpYy5odHhxLm5ldC9VcGxvYWRGaWxlcy8yMDE3LzExLzEzLzE1MTA1NDIyMTUwMTcwMjY5NDQuanBnJ1xuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGlkOiA1LFxuICAgICAgICAgICAgICAgIHVybDogJ2h0dHA6Ly9zdGF0aWMuaHR4cS5uZXQvVXBsb2FkRmlsZXMvMjAxNy8xMS8xMy8xNTEwNTQyMjE1MjIwMDkyMjk0LmpwZydcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBpZDogNixcbiAgICAgICAgICAgICAgICB1cmw6ICdodHRwOi8vc3RhdGljLmh0eHEubmV0L1VwbG9hZEZpbGVzLzIwMTcvMTEvMTMvMTUxMDU0MjYyODM0NzAzNTY3NC5qcGcnXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgaWQ6IDYsXG4gICAgICAgICAgICAgICAgdXJsOiAnaHR0cDovL3N0YXRpYy5odHhxLm5ldC9VcGxvYWRGaWxlcy8yMDE3LzExLzEzLzE1MTA1NDM2MjkzNjIwOTcwNjIuanBnJ1xuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGlkOiA2LFxuICAgICAgICAgICAgICAgIHVybDogJ2h0dHA6Ly9zdGF0aWMuaHR4cS5uZXQvVXBsb2FkRmlsZXMvMjAxNy8xMS8xMy8xNTEwNTQzNjMwNDEzMDgwNDc2LmpwZydcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBpZDogNixcbiAgICAgICAgICAgICAgICB1cmw6ICdodHRwOi8vc3RhdGljLmh0eHEubmV0L1VwbG9hZEZpbGVzLzIwMTcvMTEvMTMvMTUxMDU0MzYzMDM5MjA5MzU0MS5qcGcnXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgaWQ6IDYsXG4gICAgICAgICAgICAgICAgdXJsOiAnaHR0cDovL3N0YXRpYy5odHhxLm5ldC9VcGxvYWRGaWxlcy8yMDE3LzExLzEzLzE1MTA1NDQ4OTE5MDEwMjM1MzYuanBnJ1xuICAgICAgICAgICAgfV1cbiAgICAgICAgfVxuXG4gICAgICAgIG1ldGhvZHMgPSB7XG4gICAgICAgICAgICBzZWxlY3RTd2lwZXIoZSkge1xuICAgICAgICAgICAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgICAgICAgICAgICAgIHVybDogYC4uLy4uL3BhZ2VzL3JlY29tbWVuZC9pbmRleD9pZD0ke2UuY3VycmVudFRhcmdldC5kYXRhc2V0LmlkfWBcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNlbGVjdExpc3QoZSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpXG4gICAgICAgICAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBgLi4vLi4vcGFnZXMvcmVjb21tZW5kL2luZGV4P2lkPSR7ZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaWR9YFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4iXX0=