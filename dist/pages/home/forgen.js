'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _title = require('./../../components/title.js');

var _title2 = _interopRequireDefault(_title);

var _course = require('./../../components/course.js');

var _course2 = _interopRequireDefault(_course);

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

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.$repeat = { "lists": { "com": "v-course", "props": "" } }, _this.$props = { "v-title": { "xmlns:v-bind": { "value": "", "for": "lists", "item": "item", "index": "index", "key": "index" }, "v-bind:title.once": { "value": "item.categoryName", "for": "lists", "item": "item", "index": "index", "key": "index" } }, "v-course": { "class": { "value": "list", "for": "lists", "item": "item", "index": "index", "key": "index" }, "v-bind:type.once": { "value": "item.type", "for": "lists", "item": "item", "index": "index", "key": "index" }, "v-bind:list.once": { "value": "item.list", "for": "lists", "item": "item", "index": "index", "key": "index" }, "xmlns:v-on": { "value": "", "for": "lists", "item": "item", "index": "index", "key": "index" } } }, _this.$events = { "v-course": { "v-on:click": "selectList" } }, _this.components = {
            'v-title': _title2.default,
            'v-course': _course2.default
        }, _this.data = {
            lists: [{
                type: 1,
                categoryName: '森林文化',
                list: [{
                    id: 3,
                    tag: '森林文化',
                    cover: 'http://static.htxq.net/UploadFiles/2017/11/15/1510756866503005360.jpg',
                    title: '10个养花创意等你来试',
                    description: '与植物盆栽打交道的过程是美好的，既能安抚情绪，又能细细品味生活。如果在养花的同时再加上一些创意，跟植物来一场有趣的“游戏”，这才是与植物的最佳交流方式'
                }, {
                    id: 6,
                    tag: '产品鉴别',
                    cover: 'http://static.htxq.net/UploadFiles/2017/10/30/test/20171030103616481.jpg',
                    title: '20种秋季花材种植指南',
                    description: '今天给大家介绍20种适合在秋冬季节种植的花材，跟着Q姐一起去看看吧~'
                }]
            }, {
                type: 1,
                categoryName: '森林厨房',
                list: [{
                    id: 4,
                    tag: '森林厨房',
                    cover: 'http://static.htxq.net/UploadFiles/2017/10/24/test/20171024140320235.jpg',
                    title: '在山水之间 与植物为邻',
                    description: '在这里，有最酷的餐厅；在这里，你可以真真正正地在优美宁静环山围绕的大自然里吃上一顿美餐！'
                }]
            }, {
                type: 1,
                categoryName: '森林风光',
                list: [{
                    id: 5,
                    tag: '森林风光',
                    cover: 'http://static.htxq.net/UploadFiles/2017/11/13/test/20171113161607248.jpg',
                    title: '十条全球最梦幻的树木隧道',
                    description: '树木，地球上最古老的生物群体之一，带着强大、持久与忍耐的力量，树木可以雕刻成各种形式。今天，鲁鲁带你探寻10条全球最梦幻的树木隧道，发现地球上的美丽存在，领悟大自然的神奇力量。'
                }]
            }, {
                type: 1,
                categoryName: '森林蘑菇、林产品鉴别',
                list: [{
                    id: 6,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcmdlbi5qcyJdLCJuYW1lcyI6WyJJbmRleCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsImRhdGEiLCJsaXN0cyIsInR5cGUiLCJjYXRlZ29yeU5hbWUiLCJsaXN0IiwiaWQiLCJ0YWciLCJjb3ZlciIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJtZXRob2RzIiwic2VsZWN0TGlzdCIsImUiLCJuYXZpZ2F0ZVRvIiwidXJsIiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDSTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7d0xBQ2xCQyxPLEdBQVUsRUFBQyxTQUFRLEVBQUMsT0FBTSxVQUFQLEVBQWtCLFNBQVEsRUFBMUIsRUFBVCxFLFFBQ2pCQyxNLEdBQVMsRUFBQyxXQUFVLEVBQUMsZ0JBQWUsRUFBQyxTQUFRLEVBQVQsRUFBWSxPQUFNLE9BQWxCLEVBQTBCLFFBQU8sTUFBakMsRUFBd0MsU0FBUSxPQUFoRCxFQUF3RCxPQUFNLE9BQTlELEVBQWhCLEVBQXVGLHFCQUFvQixFQUFDLFNBQVEsbUJBQVQsRUFBNkIsT0FBTSxPQUFuQyxFQUEyQyxRQUFPLE1BQWxELEVBQXlELFNBQVEsT0FBakUsRUFBeUUsT0FBTSxPQUEvRSxFQUEzRyxFQUFYLEVBQStNLFlBQVcsRUFBQyxTQUFRLEVBQUMsU0FBUSxNQUFULEVBQWdCLE9BQU0sT0FBdEIsRUFBOEIsUUFBTyxNQUFyQyxFQUE0QyxTQUFRLE9BQXBELEVBQTRELE9BQU0sT0FBbEUsRUFBVCxFQUFvRixvQkFBbUIsRUFBQyxTQUFRLFdBQVQsRUFBcUIsT0FBTSxPQUEzQixFQUFtQyxRQUFPLE1BQTFDLEVBQWlELFNBQVEsT0FBekQsRUFBaUUsT0FBTSxPQUF2RSxFQUF2RyxFQUF1TCxvQkFBbUIsRUFBQyxTQUFRLFdBQVQsRUFBcUIsT0FBTSxPQUEzQixFQUFtQyxRQUFPLE1BQTFDLEVBQWlELFNBQVEsT0FBekQsRUFBaUUsT0FBTSxPQUF2RSxFQUExTSxFQUEwUixjQUFhLEVBQUMsU0FBUSxFQUFULEVBQVksT0FBTSxPQUFsQixFQUEwQixRQUFPLE1BQWpDLEVBQXdDLFNBQVEsT0FBaEQsRUFBd0QsT0FBTSxPQUE5RCxFQUF2UyxFQUExTixFLFFBQ1RDLE8sR0FBVSxFQUFDLFlBQVcsRUFBQyxjQUFhLFlBQWQsRUFBWixFLFFBQ1RDLFUsR0FBYTtBQUNGLHNDQURFO0FBRUY7QUFGRSxTLFFBS05DLEksR0FBTztBQUNIQyxtQkFBTyxDQUFDO0FBQ0pDLHNCQUFNLENBREY7QUFFSkMsOEJBQWMsTUFGVjtBQUdKQyxzQkFBTSxDQUFDO0FBQ0hDLHdCQUFJLENBREQ7QUFFSEMseUJBQUssTUFGRjtBQUdIQywyQkFBTyx1RUFISjtBQUlIQywyQkFBTyxhQUpKO0FBS0hDLGlDQUFhO0FBTFYsaUJBQUQsRUFNSDtBQUNDSix3QkFBSSxDQURMO0FBRUNDLHlCQUFLLE1BRk47QUFHQ0MsMkJBQU8sMEVBSFI7QUFJQ0MsMkJBQU8sYUFKUjtBQUtDQyxpQ0FBYTtBQUxkLGlCQU5HO0FBSEYsYUFBRCxFQWdCSjtBQUNDUCxzQkFBTSxDQURQO0FBRUNDLDhCQUFjLE1BRmY7QUFHQ0Msc0JBQU0sQ0FBQztBQUNIQyx3QkFBSSxDQUREO0FBRUhDLHlCQUFLLE1BRkY7QUFHSEMsMkJBQU8sMEVBSEo7QUFJSEMsMkJBQU8sYUFKSjtBQUtIQyxpQ0FBYTtBQUxWLGlCQUFEO0FBSFAsYUFoQkksRUEwQko7QUFDQ1Asc0JBQU0sQ0FEUDtBQUVDQyw4QkFBYyxNQUZmO0FBR0NDLHNCQUFNLENBQUM7QUFDSEMsd0JBQUksQ0FERDtBQUVIQyx5QkFBSyxNQUZGO0FBR0hDLDJCQUFPLDBFQUhKO0FBSUhDLDJCQUFPLGNBSko7QUFLSEMsaUNBQWE7QUFMVixpQkFBRDtBQUhQLGFBMUJJLEVBb0NKO0FBQ0NQLHNCQUFNLENBRFA7QUFFQ0MsOEJBQWMsWUFGZjtBQUdDQyxzQkFBTSxDQUFDO0FBQ0hDLHdCQUFJLENBREQ7QUFFSEMseUJBQUssTUFGRjtBQUdIQywyQkFBTywwRUFISjtBQUlIQywyQkFBTyxhQUpKO0FBS0hDLGlDQUFhO0FBTFYsaUJBQUQ7QUFIUCxhQXBDSTtBQURKLFMsUUFrRFBDLE8sR0FBVTtBQUNOQyxzQkFETSxzQkFDS0MsQ0FETCxFQUNRO0FBQ1YsK0JBQUtDLFVBQUwsQ0FBZ0I7QUFDWkMsNkRBQXVDRixFQUFFRyxhQUFGLENBQWdCQyxPQUFoQixDQUF3Qlg7QUFEbkQsaUJBQWhCO0FBR0g7QUFMSyxTOzs7O0VBM0RxQixlQUFLWSxTOztrQkFBbkJ0QixLIiwiZmlsZSI6ImZvcmdlbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gICAgaW1wb3J0IHRpdGxlQ29tcG9uZW50IGZyb20gJ0AvY29tcG9uZW50cy90aXRsZSdcbiAgICBpbXBvcnQgY291cnNlQ29tcG9uZW50IGZyb20gJ0AvY29tcG9uZW50cy9jb3Vyc2UnXG5cbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcbiAgICAgICAkcmVwZWF0ID0ge1wibGlzdHNcIjp7XCJjb21cIjpcInYtY291cnNlXCIsXCJwcm9wc1wiOlwiXCJ9fTtcclxuJHByb3BzID0ge1widi10aXRsZVwiOntcInhtbG5zOnYtYmluZFwiOntcInZhbHVlXCI6XCJcIixcImZvclwiOlwibGlzdHNcIixcIml0ZW1cIjpcIml0ZW1cIixcImluZGV4XCI6XCJpbmRleFwiLFwia2V5XCI6XCJpbmRleFwifSxcInYtYmluZDp0aXRsZS5vbmNlXCI6e1widmFsdWVcIjpcIml0ZW0uY2F0ZWdvcnlOYW1lXCIsXCJmb3JcIjpcImxpc3RzXCIsXCJpdGVtXCI6XCJpdGVtXCIsXCJpbmRleFwiOlwiaW5kZXhcIixcImtleVwiOlwiaW5kZXhcIn19LFwidi1jb3Vyc2VcIjp7XCJjbGFzc1wiOntcInZhbHVlXCI6XCJsaXN0XCIsXCJmb3JcIjpcImxpc3RzXCIsXCJpdGVtXCI6XCJpdGVtXCIsXCJpbmRleFwiOlwiaW5kZXhcIixcImtleVwiOlwiaW5kZXhcIn0sXCJ2LWJpbmQ6dHlwZS5vbmNlXCI6e1widmFsdWVcIjpcIml0ZW0udHlwZVwiLFwiZm9yXCI6XCJsaXN0c1wiLFwiaXRlbVwiOlwiaXRlbVwiLFwiaW5kZXhcIjpcImluZGV4XCIsXCJrZXlcIjpcImluZGV4XCJ9LFwidi1iaW5kOmxpc3Qub25jZVwiOntcInZhbHVlXCI6XCJpdGVtLmxpc3RcIixcImZvclwiOlwibGlzdHNcIixcIml0ZW1cIjpcIml0ZW1cIixcImluZGV4XCI6XCJpbmRleFwiLFwia2V5XCI6XCJpbmRleFwifSxcInhtbG5zOnYtb25cIjp7XCJ2YWx1ZVwiOlwiXCIsXCJmb3JcIjpcImxpc3RzXCIsXCJpdGVtXCI6XCJpdGVtXCIsXCJpbmRleFwiOlwiaW5kZXhcIixcImtleVwiOlwiaW5kZXhcIn19fTtcclxuJGV2ZW50cyA9IHtcInYtY291cnNlXCI6e1widi1vbjpjbGlja1wiOlwic2VsZWN0TGlzdFwifX07XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgICAgICAgJ3YtdGl0bGUnOiB0aXRsZUNvbXBvbmVudCxcbiAgICAgICAgICAgICd2LWNvdXJzZSc6IGNvdXJzZUNvbXBvbmVudFxuICAgICAgICB9XG5cbiAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICAgIGxpc3RzOiBbe1xuICAgICAgICAgICAgICAgIHR5cGU6IDEsXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnlOYW1lOiAn5qOu5p6X5paH5YyWJyxcbiAgICAgICAgICAgICAgICBsaXN0OiBbe1xuICAgICAgICAgICAgICAgICAgICBpZDogMyxcbiAgICAgICAgICAgICAgICAgICAgdGFnOiAn5qOu5p6X5paH5YyWJyxcbiAgICAgICAgICAgICAgICAgICAgY292ZXI6ICdodHRwOi8vc3RhdGljLmh0eHEubmV0L1VwbG9hZEZpbGVzLzIwMTcvMTEvMTUvMTUxMDc1Njg2NjUwMzAwNTM2MC5qcGcnLFxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJzEw5Liq5YW76Iqx5Yib5oSP562J5L2g5p2l6K+VJyxcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICfkuI7mpI3niannm4bmoL3miZPkuqTpgZPnmoTov4fnqIvmmK/nvo7lpb3nmoTvvIzml6Log73lronmiprmg4Xnu6rvvIzlj4jog73nu4bnu4blk4HlkbPnlJ/mtLvjgILlpoLmnpzlnKjlhbvoirHnmoTlkIzml7blho3liqDkuIrkuIDkupvliJvmhI/vvIzot5/mpI3nianmnaXkuIDlnLrmnInotqPnmoTigJzmuLjmiI/igJ3vvIzov5nmiY3mmK/kuI7mpI3niannmoTmnIDkvbPkuqTmtYHmlrnlvI8nXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBpZDogNixcbiAgICAgICAgICAgICAgICAgICAgdGFnOiAn5Lqn5ZOB6Ym05YirJyxcbiAgICAgICAgICAgICAgICAgICAgY292ZXI6ICdodHRwOi8vc3RhdGljLmh0eHEubmV0L1VwbG9hZEZpbGVzLzIwMTcvMTAvMzAvdGVzdC8yMDE3MTAzMDEwMzYxNjQ4MS5qcGcnLFxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJzIw56eN56eL5a2j6Iqx5p2Q56eN5qSN5oyH5Y2XJyxcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICfku4rlpKnnu5nlpKflrrbku4vnu40yMOenjemAguWQiOWcqOeni+WGrOWto+iKguenjeakjeeahOiKseadkO+8jOi3n+edgFHlp5DkuIDotbfljrvnnIvnnIvlkKd+J1xuICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgdHlwZTogMSxcbiAgICAgICAgICAgICAgICBjYXRlZ29yeU5hbWU6ICfmo67mnpfljqjmiL8nLFxuICAgICAgICAgICAgICAgIGxpc3Q6IFt7XG4gICAgICAgICAgICAgICAgICAgIGlkOiA0LFxuICAgICAgICAgICAgICAgICAgICB0YWc6ICfmo67mnpfljqjmiL8nLFxuICAgICAgICAgICAgICAgICAgICBjb3ZlcjogJ2h0dHA6Ly9zdGF0aWMuaHR4cS5uZXQvVXBsb2FkRmlsZXMvMjAxNy8xMC8yNC90ZXN0LzIwMTcxMDI0MTQwMzIwMjM1LmpwZycsXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5Zyo5bGx5rC05LmL6Ze0IOS4juakjeeJqeS4uumCuycsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAn5Zyo6L+Z6YeM77yM5pyJ5pyA6YW355qE6aSQ5Y6F77yb5Zyo6L+Z6YeM77yM5L2g5Y+v5Lul55yf55yf5q2j5q2j5Zyw5Zyo5LyY576O5a6B6Z2Z546v5bGx5Zu057uV55qE5aSn6Ieq54S26YeM5ZCD5LiK5LiA6aG/576O6aSQ77yBJ1xuICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgdHlwZTogMSxcbiAgICAgICAgICAgICAgICBjYXRlZ29yeU5hbWU6ICfmo67mnpfpo47lhYknLFxuICAgICAgICAgICAgICAgIGxpc3Q6IFt7XG4gICAgICAgICAgICAgICAgICAgIGlkOiA1LFxuICAgICAgICAgICAgICAgICAgICB0YWc6ICfmo67mnpfpo47lhYknLFxuICAgICAgICAgICAgICAgICAgICBjb3ZlcjogJ2h0dHA6Ly9zdGF0aWMuaHR4cS5uZXQvVXBsb2FkRmlsZXMvMjAxNy8xMS8xMy90ZXN0LzIwMTcxMTEzMTYxNjA3MjQ4LmpwZycsXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5Y2B5p2h5YWo55CD5pyA5qKm5bm755qE5qCR5pyo6Zqn6YGTJyxcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICfmoJHmnKjvvIzlnLDnkIPkuIrmnIDlj6TogIHnmoTnlJ/niannvqTkvZPkuYvkuIDvvIzluKbnnYDlvLrlpKfjgIHmjIHkuYXkuI7lv43ogJDnmoTlipvph4/vvIzmoJHmnKjlj6/ku6Xpm5XliLvmiJDlkITnp43lvaLlvI/jgILku4rlpKnvvIzpsoHpsoHluKbkvaDmjqLlr7sxMOadoeWFqOeQg+acgOaipuW5u+eahOagkeacqOmap+mBk++8jOWPkeeOsOWcsOeQg+S4iueahOe+juS4veWtmOWcqO+8jOmihuaCn+Wkp+iHqueEtueahOelnuWlh+WKm+mHj+OAgidcbiAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIHR5cGU6IDEsXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnlOYW1lOiAn5qOu5p6X6JiR6I+H44CB5p6X5Lqn5ZOB6Ym05YirJyxcbiAgICAgICAgICAgICAgICBsaXN0OiBbe1xuICAgICAgICAgICAgICAgICAgICBpZDogNixcbiAgICAgICAgICAgICAgICAgICAgdGFnOiAn5Lqn5ZOB6Ym05YirJyxcbiAgICAgICAgICAgICAgICAgICAgY292ZXI6ICdodHRwOi8vc3RhdGljLmh0eHEubmV0L1VwbG9hZEZpbGVzLzIwMTcvMTAvMzAvdGVzdC8yMDE3MTAzMDEwMzYxNjQ4MS5qcGcnLFxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJzIw56eN56eL5a2j6Iqx5p2Q56eN5qSN5oyH5Y2XJyxcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICfku4rlpKnnu5nlpKflrrbku4vnu40yMOenjemAguWQiOWcqOeni+WGrOWto+iKguenjeakjeeahOiKseadkO+8jOi3n+edgFHlp5DkuIDotbfljrvnnIvnnIvlkKd+J1xuICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICB9XVxuICAgICAgICB9XG5cbiAgICAgICAgbWV0aG9kcyA9IHtcbiAgICAgICAgICAgIHNlbGVjdExpc3QoZSkge1xuICAgICAgICAgICAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgICAgICAgICAgICAgIHVybDogYC4uLy4uL3BhZ2VzL3JlY29tbWVuZC9pbmRleD9pZD0ke2UuY3VycmVudFRhcmdldC5kYXRhc2V0LmlkfWBcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuIl19