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

var Index = function (_wepy$component) {
    _inherits(Index, _wepy$component);

    function Index() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Index);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.$repeat = {}, _this.$props = { "v-swper": { "xmlns:v-bind": "", "v-bind:alldata.once": "swiperImgUrls", "xmlns:v-on": "" }, "v-title": { "title": "今日推荐" }, "v-h-scroll": { "class": "categories", "v-bind:alldata.once": "categories" }, "v-list": { "class": "list", "v-bind:list.once": "list" } }, _this.$events = { "v-swper": { "v-on:click": "selectSwiper" }, "v-h-scroll": { "v-on:click": "selectCategory" }, "v-list": { "v-on:itemClick": "selectList" } }, _this.components = {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY29tbWVuZC5qcyJdLCJuYW1lcyI6WyJJbmRleCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsImRhdGEiLCJzd2lwZXJJbWdVcmxzIiwiaWQiLCJpbWFnZSIsImNhdGVnb3JpZXMiLCJjb3ZlciIsInRpdGxlIiwidXJsIiwibGlzdCIsInRhZyIsIm1ldGhvZHMiLCJzZWxlY3RTd2lwZXIiLCJlIiwibmF2aWdhdGVUbyIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0Iiwic2VsZWN0TGlzdCIsInNlbGVjdENhdGVnb3J5IiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0k7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7Ozt3TEFDbEJDLE8sR0FBVSxFLFFBQ2pCQyxNLEdBQVMsRUFBQyxXQUFVLEVBQUMsZ0JBQWUsRUFBaEIsRUFBbUIsdUJBQXNCLGVBQXpDLEVBQXlELGNBQWEsRUFBdEUsRUFBWCxFQUFxRixXQUFVLEVBQUMsU0FBUSxNQUFULEVBQS9GLEVBQWdILGNBQWEsRUFBQyxTQUFRLFlBQVQsRUFBc0IsdUJBQXNCLFlBQTVDLEVBQTdILEVBQXVMLFVBQVMsRUFBQyxTQUFRLE1BQVQsRUFBZ0Isb0JBQW1CLE1BQW5DLEVBQWhNLEUsUUFDVEMsTyxHQUFVLEVBQUMsV0FBVSxFQUFDLGNBQWEsY0FBZCxFQUFYLEVBQXlDLGNBQWEsRUFBQyxjQUFhLGdCQUFkLEVBQXRELEVBQXNGLFVBQVMsRUFBQyxrQkFBaUIsWUFBbEIsRUFBL0YsRSxRQUNUQyxVLEdBQWE7QUFDRixzQ0FERTtBQUVGLHNDQUZFO0FBR0Ysb0RBSEU7QUFJRjtBQUpFLFMsUUFPTkMsSSxHQUFPO0FBQ0g7QUFDQUMsMkJBQWUsQ0FBQztBQUNaQyxvQkFBSSxDQURRO0FBRVpDLHVCQUFPO0FBRkssYUFBRCxFQUdaO0FBQ0NELG9CQUFJLENBREw7QUFFQ0MsdUJBQU87QUFGUixhQUhZLEVBTVo7QUFDQ0Qsb0JBQUksQ0FETDtBQUVDQyx1QkFBTztBQUZSLGFBTlksQ0FGWjtBQVlIO0FBQ0FDLHdCQUFZLENBQUM7QUFDVEYsb0JBQUksQ0FESztBQUVURyx1QkFBTyxpRUFGRTtBQUdUQyx1QkFBTyxNQUhFO0FBSVRDLHFCQUFLO0FBSkksYUFBRCxFQUtUO0FBQ0NMLG9CQUFJLENBREw7QUFFQ0csdUJBQU8sa0VBRlI7QUFHQ0MsdUJBQU8sS0FIUjtBQUlDQyxxQkFBSztBQUpOLGFBTFMsRUFVVDtBQUNDTCxvQkFBSSxDQURMO0FBRUNHLHVCQUFPLGlFQUZSO0FBR0NDLHVCQUFPLEtBSFI7QUFJQ0MscUJBQUs7QUFKTixhQVZTLEVBZVQ7QUFDQ0wsb0JBQUksQ0FETDtBQUVDRyx1QkFBTyxpRUFGUjtBQUdDQyx1QkFBTyxLQUhSO0FBSUNDLHFCQUFLO0FBSk4sYUFmUyxDQWJUO0FBa0NIQyxrQkFBTSxDQUFDO0FBQ0hOLG9CQUFJLENBREQ7QUFFSE8scUJBQUssS0FGRjtBQUdISix1QkFBTyx3RUFISjtBQUlIQyx1QkFBTztBQUpKLGFBQUQsRUFLSDtBQUNDSixvQkFBSSxDQURMO0FBRUNPLHFCQUFLLEtBRk47QUFHQ0osdUJBQU8sd0VBSFI7QUFJQ0MsdUJBQU87QUFKUixhQUxHLEVBVUg7QUFDQ0osb0JBQUksQ0FETDtBQUVDTyxxQkFBSyxLQUZOO0FBR0NKLHVCQUFPLHdFQUhSO0FBSUNDLHVCQUFPO0FBSlIsYUFWRztBQWxDSCxTLFFBb0RQSSxPLEdBQVU7QUFDTkMsd0JBRE0sd0JBQ09DLENBRFAsRUFDVTtBQUNaLCtCQUFLQyxVQUFMLENBQWdCO0FBQ1pOLDZEQUF1Q0ssRUFBRUUsYUFBRixDQUFnQkMsT0FBaEIsQ0FBd0JiO0FBRG5ELGlCQUFoQjtBQUdILGFBTEs7QUFNTmMsc0JBTk0sc0JBTUtKLENBTkwsRUFNUTtBQUNWLCtCQUFLQyxVQUFMLENBQWdCO0FBQ1pOLDZEQUF1Q0ssRUFBRUUsYUFBRixDQUFnQkMsT0FBaEIsQ0FBd0JiO0FBRG5ELGlCQUFoQjtBQUdILGFBVks7QUFXTmUsMEJBWE0sMEJBV1NMLENBWFQsRUFXWTtBQUNkLCtCQUFLQyxVQUFMLENBQWdCO0FBQ1pOLHdEQUFrQ0ssRUFBRUUsYUFBRixDQUFnQkMsT0FBaEIsQ0FBd0JiO0FBRDlDLGlCQUFoQjtBQUdIO0FBZkssUzs7OztFQS9EcUIsZUFBS2dCLFM7O2tCQUFuQnZCLEsiLCJmaWxlIjoicmVjb21tZW5kLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgICBpbXBvcnQgc3dwZXJDb21wb25lbnQgZnJvbSAnQC9jb21wb25lbnRzL3N3cGVyJ1xuICAgIGltcG9ydCB0aXRsZUNvbXBvbmVudCBmcm9tICdAL2NvbXBvbmVudHMvdGl0bGUnXG4gICAgaW1wb3J0IGhTY3JvbGxDb21wb25lbnQgZnJvbSAnQC9jb21wb25lbnRzL2hvcml6b250YWwtc2Nyb2xsJ1xuICAgIGltcG9ydCBsaXN0Q29tcG9uZW50IGZyb20gJ0AvY29tcG9uZW50cy9saXN0J1xuXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XG4gICAgICAgJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJ2LXN3cGVyXCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDphbGxkYXRhLm9uY2VcIjpcInN3aXBlckltZ1VybHNcIixcInhtbG5zOnYtb25cIjpcIlwifSxcInYtdGl0bGVcIjp7XCJ0aXRsZVwiOlwi5LuK5pel5o6o6I2QXCJ9LFwidi1oLXNjcm9sbFwiOntcImNsYXNzXCI6XCJjYXRlZ29yaWVzXCIsXCJ2LWJpbmQ6YWxsZGF0YS5vbmNlXCI6XCJjYXRlZ29yaWVzXCJ9LFwidi1saXN0XCI6e1wiY2xhc3NcIjpcImxpc3RcIixcInYtYmluZDpsaXN0Lm9uY2VcIjpcImxpc3RcIn19O1xyXG4kZXZlbnRzID0ge1widi1zd3BlclwiOntcInYtb246Y2xpY2tcIjpcInNlbGVjdFN3aXBlclwifSxcInYtaC1zY3JvbGxcIjp7XCJ2LW9uOmNsaWNrXCI6XCJzZWxlY3RDYXRlZ29yeVwifSxcInYtbGlzdFwiOntcInYtb246aXRlbUNsaWNrXCI6XCJzZWxlY3RMaXN0XCJ9fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICAgICAgICAndi1zd3Blcic6IHN3cGVyQ29tcG9uZW50LFxuICAgICAgICAgICAgJ3YtdGl0bGUnOiB0aXRsZUNvbXBvbmVudCxcbiAgICAgICAgICAgICd2LWgtc2Nyb2xsJzogaFNjcm9sbENvbXBvbmVudCxcbiAgICAgICAgICAgICd2LWxpc3QnOiBsaXN0Q29tcG9uZW50XG4gICAgICAgIH1cblxuICAgICAgICBkYXRhID0ge1xuICAgICAgICAgICAgLyog6L2u5pKt5Zu+5pWw5o2uICovXG4gICAgICAgICAgICBzd2lwZXJJbWdVcmxzOiBbe1xuICAgICAgICAgICAgICAgIGlkOiAxLFxuICAgICAgICAgICAgICAgIGltYWdlOiAnaHR0cDovL3N0YXRpYy5odHhxLm5ldC9VcGxvYWRGaWxlcy8yMDE3LzA4LzEwLzIwMTcwODEwMTQxNzAzODg2OTU5LmpwZydcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBpZDogMCxcbiAgICAgICAgICAgICAgICBpbWFnZTogJ2h0dHA6Ly9zdGF0aWMuaHR4cS5uZXQvVXBsb2FkRmlsZXMvMjAxNy8wOC8xNC8yMDE3MDgxNDE0MDMyNTA0NjI5OS5qcGcnXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgaWQ6IDEsXG4gICAgICAgICAgICAgICAgaW1hZ2U6ICdodHRwOi8vc3RhdGljLmh0eHEubmV0L1VwbG9hZEZpbGVzLzIwMTcvMDgvMTEvMjAxNzA4MTExMzE5MTEzODk4NTkuanBnJ1xuICAgICAgICAgICAgfV0sXG4gICAgICAgICAgICAvKiDliIbnsbvmlbDmja4gKi9cbiAgICAgICAgICAgIGNhdGVnb3JpZXM6IFt7XG4gICAgICAgICAgICAgICAgaWQ6IDEsXG4gICAgICAgICAgICAgICAgY292ZXI6ICdodHRwczovL21vZGFvLmNjL3VwbG9hZHMzL2ltYWdlcy85OTIvOTkyNjI2MS9yYXdfMTQ5NjI4MjM2OC5wbmcnLFxuICAgICAgICAgICAgICAgIHRpdGxlOiAn54Ot6Zeo57K+6YCJJyxcbiAgICAgICAgICAgICAgICB1cmw6ICcnXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgaWQ6IDIsXG4gICAgICAgICAgICAgICAgY292ZXI6ICdodHRwczovL21vZGFvLmNjL3VwbG9hZHMzL2ltYWdlcy85OTIvOTkyNjI2My9yYXdfMTQ5NjI4MjM2OC5qcGVnJyxcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+WFu+eUn+mYgScsXG4gICAgICAgICAgICAgICAgdXJsOiAnJ1xuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGlkOiAzLFxuICAgICAgICAgICAgICAgIGNvdmVyOiAnaHR0cHM6Ly9tb2Rhby5jYy91cGxvYWRzMy9pbWFnZXMvOTkyLzk5MjYyNjUvcmF3XzE0OTYyODIzNjkucG5nJyxcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+engeaIv+iPnCcsXG4gICAgICAgICAgICAgICAgdXJsOiAnJ1xuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGlkOiA0LFxuICAgICAgICAgICAgICAgIGNvdmVyOiAnaHR0cHM6Ly9tb2Rhby5jYy91cGxvYWRzMy9pbWFnZXMvOTkyLzk5MjYyNjcvcmF3XzE0OTYyODIzNjkucG5nJyxcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+eUn+a0u+WxhScsXG4gICAgICAgICAgICAgICAgdXJsOiAnJ1xuICAgICAgICAgICAgfV0sXG4gICAgICAgICAgICBsaXN0OiBbe1xuICAgICAgICAgICAgICAgIGlkOiAwLFxuICAgICAgICAgICAgICAgIHRhZzogJ+engeaIv+iPnCcsXG4gICAgICAgICAgICAgICAgY292ZXI6ICdodHRwOi8vc3RhdGljLmh0eHEubmV0L1VwbG9hZEZpbGVzLzIwMTcvMDgvMTQvMjAxNzA4MTQxNDAzMjUwNDYyOTkuanBnJyxcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+Wkj+aXpemaj+mjjuaRh+abs+eahOmTgee6v+iOsidcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBpZDogMSxcbiAgICAgICAgICAgICAgICB0YWc6ICfnlJ/mtLvlsYUnLFxuICAgICAgICAgICAgICAgIGNvdmVyOiAnaHR0cDovL3N0YXRpYy5odHhxLm5ldC9VcGxvYWRGaWxlcy8yMDE3LzA4LzEwLzIwMTcwODEwMTQxNzAzODg2OTU5LmpwZycsXG4gICAgICAgICAgICAgICAgdGl0bGU6ICfmiZPpgKDkuIDniYfmtarmvKvnmoTnjqvnkbDluq3pmaInXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgaWQ6IDIsXG4gICAgICAgICAgICAgICAgdGFnOiAn5YW755Sf6ZiBJyxcbiAgICAgICAgICAgICAgICBjb3ZlcjogJ2h0dHA6Ly9zdGF0aWMuaHR4cS5uZXQvVXBsb2FkRmlsZXMvMjAxNy8wOC8xMS8yMDE3MDgxMTEzMTkxMTM4OTg1OS5qcGcnLFxuICAgICAgICAgICAgICAgIHRpdGxlOiAn5Li65L2g55qE56S854mp6ZSm5LiK5re744CM6Iqx44CNJ1xuICAgICAgICAgICAgfV1cbiAgICAgICAgfVxuXG4gICAgICAgIG1ldGhvZHMgPSB7XG4gICAgICAgICAgICBzZWxlY3RTd2lwZXIoZSkge1xuICAgICAgICAgICAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgICAgICAgICAgICAgIHVybDogYC4uLy4uL3BhZ2VzL3JlY29tbWVuZC9pbmRleD9pZD0ke2UuY3VycmVudFRhcmdldC5kYXRhc2V0LmlkfWBcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNlbGVjdExpc3QoZSkge1xuICAgICAgICAgICAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgICAgICAgICAgICAgIHVybDogYC4uLy4uL3BhZ2VzL3JlY29tbWVuZC9pbmRleD9pZD0ke2UuY3VycmVudFRhcmdldC5kYXRhc2V0LmlkfWBcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNlbGVjdENhdGVnb3J5KGUpIHtcbiAgICAgICAgICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgICAgICAgICAgICB1cmw6IGAuLi8uLi9wYWdlcy9saXN0L2luZGV4P2lkPSR7ZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaWR9YFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4iXX0=