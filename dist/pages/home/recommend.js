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
                console.log(this.homeData.banners.posts);
                return this.homeData.banners.posts;
            },
            categories: function categories() {
                return this.homeData.recommends.children.map(function (item, idx) {
                    return {
                        id: item.id,
                        title: item.name,
                        cover: categoryCovers[idx]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY29tbWVuZC5qcyJdLCJuYW1lcyI6WyJjYXRlZ29yeUNvdmVycyIsIkluZGV4IiwicHJvcHMiLCJob21lRGF0YSIsIk9iamVjdCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsImNvbXB1dGVkIiwiYmFubmVycyIsImNvbnNvbGUiLCJsb2ciLCJwb3N0cyIsImNhdGVnb3JpZXMiLCJyZWNvbW1lbmRzIiwiY2hpbGRyZW4iLCJtYXAiLCJpdGVtIiwiaWR4IiwiaWQiLCJ0aXRsZSIsIm5hbWUiLCJjb3ZlciIsImRhdGEiLCJ0YWciLCJpbWdVcmwiLCJtZXRob2RzIiwic2VsZWN0U3dpcGVyIiwiZSIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsInNlbGVjdExpc3QiLCJzZWxlY3RDYXRlZ29yeSIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNJOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLGlCQUFpQixDQUNuQixpRUFEbUIsRUFFbkIsa0VBRm1CLEVBR25CLGlFQUhtQixFQUluQixpRUFKbUIsQ0FBdkI7O0lBT3FCQyxLOzs7Ozs7Ozs7Ozs7Ozt3TEFDakJDLEssR0FBUTtBQUNKQyxzQkFBVUM7QUFETixTLFFBR1RDLE8sR0FBVSxFLFFBQ2pCQyxNLEdBQVMsRUFBQyxXQUFVLEVBQUMsZ0JBQWUsRUFBaEIsRUFBbUIsdUJBQXNCLFNBQXpDLEVBQW1ELGNBQWEsRUFBaEUsRUFBWCxFQUErRSxZQUFXLEVBQUMsU0FBUSxNQUFULEVBQTFGLEVBQTJHLFlBQVcsRUFBQyxTQUFRLE1BQVQsRUFBdEgsRUFBdUksY0FBYSxFQUFDLFNBQVEsWUFBVCxFQUFzQix1QkFBc0IsWUFBNUMsRUFBcEosRUFBOE0sVUFBUyxFQUFDLFNBQVEsTUFBVCxFQUFnQixvQkFBbUIsT0FBbkMsRUFBdk4sRSxRQUNUQyxPLEdBQVUsRUFBQyxXQUFVLEVBQUMsY0FBYSxjQUFkLEVBQVgsRUFBeUMsY0FBYSxFQUFDLGNBQWEsZ0JBQWQsRUFBdEQsRUFBc0YsVUFBUyxFQUFDLGtCQUFpQixZQUFsQixFQUEvRixFLFFBQ1RDLFUsR0FBYTtBQUNGLHNDQURFO0FBRUYsdUNBRkU7QUFHRix1Q0FIRTtBQUlGLG9EQUpFO0FBS0Y7QUFMRSxTLFFBT05DLFEsR0FBVztBQUNQQyxtQkFETyxxQkFDSTtBQUNQQyx3QkFBUUMsR0FBUixDQUFZLEtBQUtULFFBQUwsQ0FBY08sT0FBZCxDQUFzQkcsS0FBbEM7QUFDQSx1QkFBTyxLQUFLVixRQUFMLENBQWNPLE9BQWQsQ0FBc0JHLEtBQTdCO0FBQ0gsYUFKTTtBQUtQQyxzQkFMTyx3QkFLTztBQUNWLHVCQUFPLEtBQUtYLFFBQUwsQ0FBY1ksVUFBZCxDQUF5QkMsUUFBekIsQ0FBa0NDLEdBQWxDLENBQXNDLFVBQUNDLElBQUQsRUFBT0MsR0FBUCxFQUFlO0FBQ3hELDJCQUFPO0FBQ0hDLDRCQUFJRixLQUFLRSxFQUROO0FBRUhDLCtCQUFPSCxLQUFLSSxJQUZUO0FBR0hDLCtCQUFPdkIsZUFBZW1CLEdBQWY7QUFISixxQkFBUDtBQUtILGlCQU5NLENBQVA7QUFPSCxhQWJNO0FBY1BOLGlCQWRPLG1CQWNFO0FBQ0wsdUJBQU8sS0FBS1YsUUFBTCxDQUFjVSxLQUFkLENBQW9CVyxJQUFwQixDQUF5QlAsR0FBekIsQ0FBNkIsZ0JBQVE7QUFDeEMsMkJBQU87QUFDSEcsNEJBQUlGLEtBQUtFLEVBRE47QUFFSEssNkJBQUssT0FGRjtBQUdIRiwrQkFBT0wsS0FBS1EsTUFIVDtBQUlITCwrQkFBT0gsS0FBS0c7QUFKVCxxQkFBUDtBQU1ILGlCQVBNLENBQVA7QUFRSDtBQXZCTSxTLFFBMEJYTSxPLEdBQVU7QUFDTkMsd0JBRE0sd0JBQ09DLENBRFAsRUFDVTtBQUNaLCtCQUFLQyxVQUFMLENBQWdCO0FBQ1pDLDZEQUF1Q0YsRUFBRUcsYUFBRixDQUFnQkMsT0FBaEIsQ0FBd0JiO0FBRG5ELGlCQUFoQjtBQUdILGFBTEs7QUFNTmMsc0JBTk0sc0JBTUtMLENBTkwsRUFNUTtBQUNWLCtCQUFLQyxVQUFMLENBQWdCO0FBQ1pDLDZEQUF1Q0YsRUFBRUcsYUFBRixDQUFnQkMsT0FBaEIsQ0FBd0JiO0FBRG5ELGlCQUFoQjtBQUdILGFBVks7QUFXTmUsMEJBWE0sMEJBV1NOLENBWFQsRUFXWTtBQUNkLCtCQUFLQyxVQUFMLENBQWdCO0FBQ1pDLHdEQUFrQ0YsRUFBRUcsYUFBRixDQUFnQkMsT0FBaEIsQ0FBd0JiO0FBRDlDLGlCQUFoQjtBQUdIO0FBZkssUzs7OztFQXhDcUIsZUFBS2dCLFM7O2tCQUFuQm5DLEsiLCJmaWxlIjoicmVjb21tZW5kLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgICBpbXBvcnQgc3dwZXJDb21wb25lbnQgZnJvbSAnQC9jb21wb25lbnRzL3N3cGVyJ1xuICAgIGltcG9ydCB0aXRsZUNvbXBvbmVudCBmcm9tICdAL2NvbXBvbmVudHMvdGl0bGUnXG4gICAgaW1wb3J0IGhTY3JvbGxDb21wb25lbnQgZnJvbSAnQC9jb21wb25lbnRzL2hvcml6b250YWwtc2Nyb2xsJ1xuICAgIGltcG9ydCBsaXN0Q29tcG9uZW50IGZyb20gJ0AvY29tcG9uZW50cy9saXN0J1xuXG4gICAgY29uc3QgY2F0ZWdvcnlDb3ZlcnMgPSBbXG4gICAgICAgICdodHRwczovL21vZGFvLmNjL3VwbG9hZHMzL2ltYWdlcy85OTIvOTkyNjI2MS9yYXdfMTQ5NjI4MjM2OC5wbmcnLFxuICAgICAgICAnaHR0cHM6Ly9tb2Rhby5jYy91cGxvYWRzMy9pbWFnZXMvOTkyLzk5MjYyNjMvcmF3XzE0OTYyODIzNjguanBlZycsXG4gICAgICAgICdodHRwczovL21vZGFvLmNjL3VwbG9hZHMzL2ltYWdlcy85OTIvOTkyNjI2NS9yYXdfMTQ5NjI4MjM2OS5wbmcnLFxuICAgICAgICAnaHR0cHM6Ly9tb2Rhby5jYy91cGxvYWRzMy9pbWFnZXMvOTkyLzk5MjYyNjcvcmF3XzE0OTYyODIzNjkucG5nJ1xuICAgIF1cblxuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuICAgICAgICBwcm9wcyA9IHtcbiAgICAgICAgICAgIGhvbWVEYXRhOiBPYmplY3RcbiAgICAgICAgfVxuICAgICAgICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1widi1zd3BlclwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6YWxsZGF0YS5zeW5jXCI6XCJiYW5uZXJzXCIsXCJ4bWxuczp2LW9uXCI6XCJcIn0sXCJ2LXRpdGxlMVwiOntcInRpdGxlXCI6XCLkuJPpopjliIbnsbtcIn0sXCJ2LXRpdGxlMlwiOntcInRpdGxlXCI6XCLku4rml6XmjqjojZBcIn0sXCJ2LWgtc2Nyb2xsXCI6e1wiY2xhc3NcIjpcImNhdGVnb3JpZXNcIixcInYtYmluZDphbGxkYXRhLnN5bmNcIjpcImNhdGVnb3JpZXNcIn0sXCJ2LWxpc3RcIjp7XCJjbGFzc1wiOlwibGlzdFwiLFwidi1iaW5kOmxpc3Quc3luY1wiOlwicG9zdHNcIn19O1xyXG4kZXZlbnRzID0ge1widi1zd3BlclwiOntcInYtb246Y2xpY2tcIjpcInNlbGVjdFN3aXBlclwifSxcInYtaC1zY3JvbGxcIjp7XCJ2LW9uOmNsaWNrXCI6XCJzZWxlY3RDYXRlZ29yeVwifSxcInYtbGlzdFwiOntcInYtb246aXRlbUNsaWNrXCI6XCJzZWxlY3RMaXN0XCJ9fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICAgICAgICAndi1zd3Blcic6IHN3cGVyQ29tcG9uZW50LFxuICAgICAgICAgICAgJ3YtdGl0bGUxJzogdGl0bGVDb21wb25lbnQsXG4gICAgICAgICAgICAndi10aXRsZTInOiB0aXRsZUNvbXBvbmVudCxcbiAgICAgICAgICAgICd2LWgtc2Nyb2xsJzogaFNjcm9sbENvbXBvbmVudCxcbiAgICAgICAgICAgICd2LWxpc3QnOiBsaXN0Q29tcG9uZW50XG4gICAgICAgIH1cbiAgICAgICAgY29tcHV0ZWQgPSB7XG4gICAgICAgICAgICBiYW5uZXJzICgpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmhvbWVEYXRhLmJhbm5lcnMucG9zdHMpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuaG9tZURhdGEuYmFubmVycy5wb3N0c1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNhdGVnb3JpZXMgKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmhvbWVEYXRhLnJlY29tbWVuZHMuY2hpbGRyZW4ubWFwKChpdGVtLCBpZHgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBpdGVtLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IGl0ZW0ubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdmVyOiBjYXRlZ29yeUNvdmVyc1tpZHhdXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHBvc3RzICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5ob21lRGF0YS5wb3N0cy5kYXRhLm1hcChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBpdGVtLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGFnOiAn5bCR5LygVGFnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdmVyOiBpdGVtLmltZ1VybCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBpdGVtLnRpdGxlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbWV0aG9kcyA9IHtcbiAgICAgICAgICAgIHNlbGVjdFN3aXBlcihlKSB7XG4gICAgICAgICAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBgLi4vLi4vcGFnZXMvcmVjb21tZW5kL2luZGV4P2lkPSR7ZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaWR9YFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2VsZWN0TGlzdChlKSB7XG4gICAgICAgICAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBgLi4vLi4vcGFnZXMvcmVjb21tZW5kL2luZGV4P2lkPSR7ZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaWR9YFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2VsZWN0Q2F0ZWdvcnkoZSkge1xuICAgICAgICAgICAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgICAgICAgICAgICAgIHVybDogYC4uLy4uL3BhZ2VzL2xpc3QvaW5kZXg/aWQ9JHtlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pZH1gXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiJdfQ==