'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _title = require('./../../components/title.js');

var _title2 = _interopRequireDefault(_title);

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

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.$repeat = { "lists": { "com": "v-list", "props": "" } }, _this.$props = { "v-title": { "xmlns:v-bind": { "value": "", "for": "lists", "item": "item", "index": "index", "key": "index" }, "v-bind:title.once": { "value": "item.categoryName", "for": "lists", "item": "item", "index": "index", "key": "index" } }, "v-list": { "class": { "value": "list", "for": "lists", "item": "item", "index": "index", "key": "index" }, "v-bind:type.once": { "value": "item.type", "for": "lists", "item": "item", "index": "index", "key": "index" }, "v-bind:list.once": { "value": "item.list", "for": "lists", "item": "item", "index": "index", "key": "index" }, "xmlns:v-on": { "value": "", "for": "lists", "item": "item", "index": "index", "key": "index" } } }, _this.$events = { "v-list": { "v-on:itemClick": "selectList" } }, _this.components = {
            'v-title': _title2.default,
            'v-list': _list2.default
        }, _this.data = {
            lists: [{
                type: 1,
                categoryName: '森林文化',
                list: [{
                    id: 4,
                    tag: '森林文化',
                    cover: 'http://static.htxq.net/UploadFiles/2017/11/15/1510756866503005360.jpg',
                    title: '10个养花创意等你来试',
                    description: '与植物盆栽打交道的过程是美好的，既能安抚情绪，又能细细品味生活。如果在养花的同时再加上一些创意，跟植物来一场有趣的“游戏”，这才是与植物的最佳交流方式'
                }, {
                    id: 7,
                    tag: '产品鉴别',
                    cover: 'http://static.htxq.net/UploadFiles/2017/10/30/test/20171030103616481.jpg',
                    title: '20种秋季花材种植指南',
                    description: '今天给大家介绍20种适合在秋冬季节种植的花材，跟着Q姐一起去看看吧~'
                }]
            }, {
                type: 1,
                categoryName: '森林厨房',
                list: [{
                    id: 5,
                    tag: '森林厨房',
                    cover: 'http://static.htxq.net/UploadFiles/2017/10/24/test/20171024140320235.jpg',
                    title: '在山水之间 与植物为邻',
                    description: '在这里，有最酷的餐厅；在这里，你可以真真正正地在优美宁静环山围绕的大自然里吃上一顿美餐！'
                }]
            }, {
                type: 1,
                categoryName: '森林风光',
                list: [{
                    id: 6,
                    tag: '森林风光',
                    cover: 'http://static.htxq.net/UploadFiles/2017/11/13/test/20171113161607248.jpg',
                    title: '十条全球最梦幻的树木隧道',
                    description: '树木，地球上最古老的生物群体之一，带着强大、持久与忍耐的力量，树木可以雕刻成各种形式。今天，鲁鲁带你探寻10条全球最梦幻的树木隧道，发现地球上的美丽存在，领悟大自然的神奇力量。'
                }]
            }, {
                type: 1,
                categoryName: '森林蘑菇、林产品鉴别',
                list: [{
                    id: 7,
                    tag: '产品鉴别',
                    cover: 'http://static.htxq.net/UploadFiles/2017/10/30/test/20171030103616481.jpg',
                    title: '20种秋季花材种植指南',
                    description: '今天给大家介绍20种适合在秋冬季节种植的花材，跟着Q姐一起去看看吧~'
                }]
            }]
        }, _this.methods = {
            selectList: function selectList(e) {
                _wepy2.default.navigateTo({
                    url: '../../pages/recommend/index?id=' + e.currentTarget.dataset.id
                });
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return Index;
}(_wepy2.default.component);

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3QuanMiXSwibmFtZXMiOlsiSW5kZXgiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJkYXRhIiwibGlzdHMiLCJ0eXBlIiwiY2F0ZWdvcnlOYW1lIiwibGlzdCIsImlkIiwidGFnIiwiY292ZXIiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwibWV0aG9kcyIsInNlbGVjdExpc3QiLCJlIiwibmF2aWdhdGVUbyIsInVybCIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0k7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O3dMQUNsQkMsTyxHQUFVLEVBQUMsU0FBUSxFQUFDLE9BQU0sUUFBUCxFQUFnQixTQUFRLEVBQXhCLEVBQVQsRSxRQUNqQkMsTSxHQUFTLEVBQUMsV0FBVSxFQUFDLGdCQUFlLEVBQUMsU0FBUSxFQUFULEVBQVksT0FBTSxPQUFsQixFQUEwQixRQUFPLE1BQWpDLEVBQXdDLFNBQVEsT0FBaEQsRUFBd0QsT0FBTSxPQUE5RCxFQUFoQixFQUF1RixxQkFBb0IsRUFBQyxTQUFRLG1CQUFULEVBQTZCLE9BQU0sT0FBbkMsRUFBMkMsUUFBTyxNQUFsRCxFQUF5RCxTQUFRLE9BQWpFLEVBQXlFLE9BQU0sT0FBL0UsRUFBM0csRUFBWCxFQUErTSxVQUFTLEVBQUMsU0FBUSxFQUFDLFNBQVEsTUFBVCxFQUFnQixPQUFNLE9BQXRCLEVBQThCLFFBQU8sTUFBckMsRUFBNEMsU0FBUSxPQUFwRCxFQUE0RCxPQUFNLE9BQWxFLEVBQVQsRUFBb0Ysb0JBQW1CLEVBQUMsU0FBUSxXQUFULEVBQXFCLE9BQU0sT0FBM0IsRUFBbUMsUUFBTyxNQUExQyxFQUFpRCxTQUFRLE9BQXpELEVBQWlFLE9BQU0sT0FBdkUsRUFBdkcsRUFBdUwsb0JBQW1CLEVBQUMsU0FBUSxXQUFULEVBQXFCLE9BQU0sT0FBM0IsRUFBbUMsUUFBTyxNQUExQyxFQUFpRCxTQUFRLE9BQXpELEVBQWlFLE9BQU0sT0FBdkUsRUFBMU0sRUFBMFIsY0FBYSxFQUFDLFNBQVEsRUFBVCxFQUFZLE9BQU0sT0FBbEIsRUFBMEIsUUFBTyxNQUFqQyxFQUF3QyxTQUFRLE9BQWhELEVBQXdELE9BQU0sT0FBOUQsRUFBdlMsRUFBeE4sRSxRQUNUQyxPLEdBQVUsRUFBQyxVQUFTLEVBQUMsa0JBQWlCLFlBQWxCLEVBQVYsRSxRQUNUQyxVLEdBQWE7QUFDRixzQ0FERTtBQUVGO0FBRkUsUyxRQUtOQyxJLEdBQU87QUFDSEMsbUJBQU8sQ0FBQztBQUNKQyxzQkFBTSxDQURGO0FBRUpDLDhCQUFjLE1BRlY7QUFHSkMsc0JBQU0sQ0FBQztBQUNIQyx3QkFBSSxDQUREO0FBRUhDLHlCQUFLLE1BRkY7QUFHSEMsMkJBQU8sdUVBSEo7QUFJSEMsMkJBQU8sYUFKSjtBQUtIQyxpQ0FBYTtBQUxWLGlCQUFELEVBTUg7QUFDQ0osd0JBQUksQ0FETDtBQUVDQyx5QkFBSyxNQUZOO0FBR0NDLDJCQUFPLDBFQUhSO0FBSUNDLDJCQUFPLGFBSlI7QUFLQ0MsaUNBQWE7QUFMZCxpQkFORztBQUhGLGFBQUQsRUFnQko7QUFDQ1Asc0JBQU0sQ0FEUDtBQUVDQyw4QkFBYyxNQUZmO0FBR0NDLHNCQUFNLENBQUM7QUFDSEMsd0JBQUksQ0FERDtBQUVIQyx5QkFBSyxNQUZGO0FBR0hDLDJCQUFPLDBFQUhKO0FBSUhDLDJCQUFPLGFBSko7QUFLSEMsaUNBQWE7QUFMVixpQkFBRDtBQUhQLGFBaEJJLEVBMEJKO0FBQ0NQLHNCQUFNLENBRFA7QUFFQ0MsOEJBQWMsTUFGZjtBQUdDQyxzQkFBTSxDQUFDO0FBQ0hDLHdCQUFJLENBREQ7QUFFSEMseUJBQUssTUFGRjtBQUdIQywyQkFBTywwRUFISjtBQUlIQywyQkFBTyxjQUpKO0FBS0hDLGlDQUFhO0FBTFYsaUJBQUQ7QUFIUCxhQTFCSSxFQW9DSjtBQUNDUCxzQkFBTSxDQURQO0FBRUNDLDhCQUFjLFlBRmY7QUFHQ0Msc0JBQU0sQ0FBQztBQUNIQyx3QkFBSSxDQUREO0FBRUhDLHlCQUFLLE1BRkY7QUFHSEMsMkJBQU8sMEVBSEo7QUFJSEMsMkJBQU8sYUFKSjtBQUtIQyxpQ0FBYTtBQUxWLGlCQUFEO0FBSFAsYUFwQ0k7QUFESixTLFFBa0RQQyxPLEdBQVU7QUFDTkMsc0JBRE0sc0JBQ0tDLENBREwsRUFDUTtBQUNWLCtCQUFLQyxVQUFMLENBQWdCO0FBQ1pDLDZEQUF1Q0YsRUFBRUcsYUFBRixDQUFnQkMsT0FBaEIsQ0FBd0JYO0FBRG5ELGlCQUFoQjtBQUdIO0FBTEssUzs7OztFQTNEcUIsZUFBS1ksUzs7a0JBQW5CdEIsSyIsImZpbGUiOiJsaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgICBpbXBvcnQgdGl0bGVDb21wb25lbnQgZnJvbSAnQC9jb21wb25lbnRzL3RpdGxlJ1xuICAgIGltcG9ydCBsaXN0Q29tcG9uZW50IGZyb20gJ0AvY29tcG9uZW50cy9saXN0J1xuXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XG4gICAgICAgJHJlcGVhdCA9IHtcImxpc3RzXCI6e1wiY29tXCI6XCJ2LWxpc3RcIixcInByb3BzXCI6XCJcIn19O1xyXG4kcHJvcHMgPSB7XCJ2LXRpdGxlXCI6e1wieG1sbnM6di1iaW5kXCI6e1widmFsdWVcIjpcIlwiLFwiZm9yXCI6XCJsaXN0c1wiLFwiaXRlbVwiOlwiaXRlbVwiLFwiaW5kZXhcIjpcImluZGV4XCIsXCJrZXlcIjpcImluZGV4XCJ9LFwidi1iaW5kOnRpdGxlLm9uY2VcIjp7XCJ2YWx1ZVwiOlwiaXRlbS5jYXRlZ29yeU5hbWVcIixcImZvclwiOlwibGlzdHNcIixcIml0ZW1cIjpcIml0ZW1cIixcImluZGV4XCI6XCJpbmRleFwiLFwia2V5XCI6XCJpbmRleFwifX0sXCJ2LWxpc3RcIjp7XCJjbGFzc1wiOntcInZhbHVlXCI6XCJsaXN0XCIsXCJmb3JcIjpcImxpc3RzXCIsXCJpdGVtXCI6XCJpdGVtXCIsXCJpbmRleFwiOlwiaW5kZXhcIixcImtleVwiOlwiaW5kZXhcIn0sXCJ2LWJpbmQ6dHlwZS5vbmNlXCI6e1widmFsdWVcIjpcIml0ZW0udHlwZVwiLFwiZm9yXCI6XCJsaXN0c1wiLFwiaXRlbVwiOlwiaXRlbVwiLFwiaW5kZXhcIjpcImluZGV4XCIsXCJrZXlcIjpcImluZGV4XCJ9LFwidi1iaW5kOmxpc3Qub25jZVwiOntcInZhbHVlXCI6XCJpdGVtLmxpc3RcIixcImZvclwiOlwibGlzdHNcIixcIml0ZW1cIjpcIml0ZW1cIixcImluZGV4XCI6XCJpbmRleFwiLFwia2V5XCI6XCJpbmRleFwifSxcInhtbG5zOnYtb25cIjp7XCJ2YWx1ZVwiOlwiXCIsXCJmb3JcIjpcImxpc3RzXCIsXCJpdGVtXCI6XCJpdGVtXCIsXCJpbmRleFwiOlwiaW5kZXhcIixcImtleVwiOlwiaW5kZXhcIn19fTtcclxuJGV2ZW50cyA9IHtcInYtbGlzdFwiOntcInYtb246aXRlbUNsaWNrXCI6XCJzZWxlY3RMaXN0XCJ9fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICAgICAgICAndi10aXRsZSc6IHRpdGxlQ29tcG9uZW50LFxuICAgICAgICAgICAgJ3YtbGlzdCc6IGxpc3RDb21wb25lbnRcbiAgICAgICAgfVxuXG4gICAgICAgIGRhdGEgPSB7XG4gICAgICAgICAgICBsaXN0czogW3tcbiAgICAgICAgICAgICAgICB0eXBlOiAxLFxuICAgICAgICAgICAgICAgIGNhdGVnb3J5TmFtZTogJ+ajruael+aWh+WMlicsXG4gICAgICAgICAgICAgICAgbGlzdDogW3tcbiAgICAgICAgICAgICAgICAgICAgaWQ6IDQsXG4gICAgICAgICAgICAgICAgICAgIHRhZzogJ+ajruael+aWh+WMlicsXG4gICAgICAgICAgICAgICAgICAgIGNvdmVyOiAnaHR0cDovL3N0YXRpYy5odHhxLm5ldC9VcGxvYWRGaWxlcy8yMDE3LzExLzE1LzE1MTA3NTY4NjY1MDMwMDUzNjAuanBnJyxcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICcxMOS4quWFu+iKseWIm+aEj+etieS9oOadpeivlScsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAn5LiO5qSN54mp55uG5qC95omT5Lqk6YGT55qE6L+H56iL5piv576O5aW955qE77yM5pei6IO95a6J5oqa5oOF57uq77yM5Y+I6IO957uG57uG5ZOB5ZGz55Sf5rS744CC5aaC5p6c5Zyo5YW76Iqx55qE5ZCM5pe25YaN5Yqg5LiK5LiA5Lqb5Yib5oSP77yM6Lef5qSN54mp5p2l5LiA5Zy65pyJ6Laj55qE4oCc5ri45oiP4oCd77yM6L+Z5omN5piv5LiO5qSN54mp55qE5pyA5L2z5Lqk5rWB5pa55byPJ1xuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IDcsXG4gICAgICAgICAgICAgICAgICAgIHRhZzogJ+S6p+WTgemJtOWIqycsXG4gICAgICAgICAgICAgICAgICAgIGNvdmVyOiAnaHR0cDovL3N0YXRpYy5odHhxLm5ldC9VcGxvYWRGaWxlcy8yMDE3LzEwLzMwL3Rlc3QvMjAxNzEwMzAxMDM2MTY0ODEuanBnJyxcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICcyMOenjeeni+Wto+iKseadkOenjeakjeaMh+WNlycsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAn5LuK5aSp57uZ5aSn5a625LuL57uNMjDnp43pgILlkIjlnKjnp4vlhqzlraPoioLnp43mpI3nmoToirHmnZDvvIzot5/nnYBR5aeQ5LiA6LW35Y6755yL55yL5ZCnfidcbiAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIHR5cGU6IDEsXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnlOYW1lOiAn5qOu5p6X5Y6o5oi/JyxcbiAgICAgICAgICAgICAgICBsaXN0OiBbe1xuICAgICAgICAgICAgICAgICAgICBpZDogNSxcbiAgICAgICAgICAgICAgICAgICAgdGFnOiAn5qOu5p6X5Y6o5oi/JyxcbiAgICAgICAgICAgICAgICAgICAgY292ZXI6ICdodHRwOi8vc3RhdGljLmh0eHEubmV0L1VwbG9hZEZpbGVzLzIwMTcvMTAvMjQvdGVzdC8yMDE3MTAyNDE0MDMyMDIzNS5qcGcnLFxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+WcqOWxseawtOS5i+mXtCDkuI7mpI3niankuLrpgrsnLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ+WcqOi/memHjO+8jOacieacgOmFt+eahOmkkOWOhe+8m+WcqOi/memHjO+8jOS9oOWPr+S7peecn+ecn+ato+ato+WcsOWcqOS8mOe+juWugemdmeeOr+WxseWbtOe7leeahOWkp+iHqueEtumHjOWQg+S4iuS4gOmhv+e+jumkkO+8gSdcbiAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIHR5cGU6IDEsXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnlOYW1lOiAn5qOu5p6X6aOO5YWJJyxcbiAgICAgICAgICAgICAgICBsaXN0OiBbe1xuICAgICAgICAgICAgICAgICAgICBpZDogNixcbiAgICAgICAgICAgICAgICAgICAgdGFnOiAn5qOu5p6X6aOO5YWJJyxcbiAgICAgICAgICAgICAgICAgICAgY292ZXI6ICdodHRwOi8vc3RhdGljLmh0eHEubmV0L1VwbG9hZEZpbGVzLzIwMTcvMTEvMTMvdGVzdC8yMDE3MTExMzE2MTYwNzI0OC5qcGcnLFxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+WNgeadoeWFqOeQg+acgOaipuW5u+eahOagkeacqOmap+mBkycsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAn5qCR5pyo77yM5Zyw55CD5LiK5pyA5Y+k6ICB55qE55Sf54mp576k5L2T5LmL5LiA77yM5bim552A5by65aSn44CB5oyB5LmF5LiO5b+N6ICQ55qE5Yqb6YeP77yM5qCR5pyo5Y+v5Lul6ZuV5Yi75oiQ5ZCE56eN5b2i5byP44CC5LuK5aSp77yM6bKB6bKB5bim5L2g5o6i5a+7MTDmnaHlhajnkIPmnIDmoqblubvnmoTmoJHmnKjpmqfpgZPvvIzlj5HnjrDlnLDnkIPkuIrnmoTnvo7kuL3lrZjlnKjvvIzpoobmgp/lpKfoh6rnhLbnmoTnpZ7lpYflipvph4/jgIInXG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICB0eXBlOiAxLFxuICAgICAgICAgICAgICAgIGNhdGVnb3J5TmFtZTogJ+ajruael+iYkeiPh+OAgeael+S6p+WTgemJtOWIqycsXG4gICAgICAgICAgICAgICAgbGlzdDogW3tcbiAgICAgICAgICAgICAgICAgICAgaWQ6IDcsXG4gICAgICAgICAgICAgICAgICAgIHRhZzogJ+S6p+WTgemJtOWIqycsXG4gICAgICAgICAgICAgICAgICAgIGNvdmVyOiAnaHR0cDovL3N0YXRpYy5odHhxLm5ldC9VcGxvYWRGaWxlcy8yMDE3LzEwLzMwL3Rlc3QvMjAxNzEwMzAxMDM2MTY0ODEuanBnJyxcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICcyMOenjeeni+Wto+iKseadkOenjeakjeaMh+WNlycsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAn5LuK5aSp57uZ5aSn5a625LuL57uNMjDnp43pgILlkIjlnKjnp4vlhqzlraPoioLnp43mpI3nmoToirHmnZDvvIzot5/nnYBR5aeQ5LiA6LW35Y6755yL55yL5ZCnfidcbiAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgfV1cbiAgICAgICAgfVxuXG4gICAgICAgIG1ldGhvZHMgPSB7XG4gICAgICAgICAgICBzZWxlY3RMaXN0KGUpIHtcbiAgICAgICAgICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgICAgICAgICAgICB1cmw6IGAuLi8uLi9wYWdlcy9yZWNvbW1lbmQvaW5kZXg/aWQ9JHtlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pZH1gXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiJdfQ==