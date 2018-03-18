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

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
            forgenData: Array
        }, _this.$repeat = { "lists": { "com": "v-course", "props": "" } }, _this.$props = { "v-title": { "xmlns:v-bind": { "value": "", "for": "lists", "item": "item", "index": "index", "key": "index" }, "v-bind:title.sync": { "value": "item.categoryName", "for": "lists", "item": "item", "index": "index", "key": "index" } }, "v-course": { "class": { "value": "list", "for": "lists", "item": "item", "index": "index", "key": "index" }, "v-bind:type.sync": { "value": "item.type", "for": "lists", "item": "item", "index": "index", "key": "index" }, "v-bind:list.sync": { "value": "item.list", "for": "lists", "item": "item", "index": "index", "key": "index" }, "xmlns:v-on": { "value": "", "for": "lists", "item": "item", "index": "index", "key": "index" } } }, _this.$events = { "v-course": { "v-on:click": "selectList" } }, _this.components = {
            'v-title': _title2.default,
            'v-course': _course2.default
        }, _this.computed = {
            lists: function lists() {
                return this.forgenData.map(function (item) {
                    return {
                        id: item.id,
                        categoryName: item.name,
                        list: item.posts.map(function (i) {
                            return {
                                id: i.id,
                                tag: i.tag || '没有标签',
                                title: i.title,
                                cover: i.imgUrl,
                                description: i.description || '没有description'
                            };
                        })
                    };
                });
            }
        }, _this.methods = {
            selectList: function selectList(e) {
                _wepy2.default.navigateTo({
                    url: '../../pages/recommend/index?id=' + e.currentTarget.dataset.id
                });
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    // data = {
    //     lists: [{
    //         type: 1,
    //         categoryName: '森林文化',
    //         list: [{
    //             id: 3,
    //             tag: '森林文化',
    //             cover: 'http://static.htxq.net/UploadFiles/2017/11/15/1510756866503005360.jpg',
    //             title: '10个养花创意等你来试',
    //             description: '与植物盆栽打交道的过程是美好的，既能安抚情绪，又能细细品味生活。如果在养花的同时再加上一些创意，跟植物来一场有趣的“游戏”，这才是与植物的最佳交流方式'
    //         }, {
    //             id: 6,
    //             tag: '产品鉴别',
    //             cover: 'http://static.htxq.net/UploadFiles/2017/10/30/test/20171030103616481.jpg',
    //             title: '20种秋季花材种植指南',
    //             description: '今天给大家介绍20种适合在秋冬季节种植的花材，跟着Q姐一起去看看吧~'
    //         }]
    //     }, {
    //         type: 1,
    //         categoryName: '森林厨房',
    //         list: [{
    //             id: 4,
    //             tag: '森林厨房',
    //             cover: 'http://static.htxq.net/UploadFiles/2017/10/24/test/20171024140320235.jpg',
    //             title: '在山水之间 与植物为邻',
    //             description: '在这里，有最酷的餐厅；在这里，你可以真真正正地在优美宁静环山围绕的大自然里吃上一顿美餐！'
    //         }]
    //     }, {
    //         type: 1,
    //         categoryName: '森林风光',
    //         list: [{
    //             id: 5,
    //             tag: '森林风光',
    //             cover: 'http://static.htxq.net/UploadFiles/2017/11/13/test/20171113161607248.jpg',
    //             title: '十条全球最梦幻的树木隧道',
    //             description: '树木，地球上最古老的生物群体之一，带着强大、持久与忍耐的力量，树木可以雕刻成各种形式。今天，鲁鲁带你探寻10条全球最梦幻的树木隧道，发现地球上的美丽存在，领悟大自然的神奇力量。'
    //         }]
    //     }, {
    //         type: 1,
    //         categoryName: '森林蘑菇、林产品鉴别',
    //         list: [{
    //             id: 6,
    //             tag: '产品鉴别',
    //             cover: 'http://static.htxq.net/UploadFiles/2017/10/30/test/20171030103616481.jpg',
    //             title: '20种秋季花材种植指南',
    //             description: '今天给大家介绍20种适合在秋冬季节种植的花材，跟着Q姐一起去看看吧~'
    //         }]
    //     }]
    // }

    return Index;
}(_wepy2.default.component);

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcmdlbi5qcyJdLCJuYW1lcyI6WyJJbmRleCIsInByb3BzIiwiZm9yZ2VuRGF0YSIsIkFycmF5IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiY29tcHV0ZWQiLCJsaXN0cyIsIm1hcCIsImlkIiwiaXRlbSIsImNhdGVnb3J5TmFtZSIsIm5hbWUiLCJsaXN0IiwicG9zdHMiLCJpIiwidGFnIiwidGl0bGUiLCJjb3ZlciIsImltZ1VybCIsImRlc2NyaXB0aW9uIiwibWV0aG9kcyIsInNlbGVjdExpc3QiLCJlIiwibmF2aWdhdGVUbyIsInVybCIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0k7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O3dMQUNqQkMsSyxHQUFRO0FBQ0pDLHdCQUFZQztBQURSLFMsUUFJVEMsTyxHQUFVLEVBQUMsU0FBUSxFQUFDLE9BQU0sVUFBUCxFQUFrQixTQUFRLEVBQTFCLEVBQVQsRSxRQUNqQkMsTSxHQUFTLEVBQUMsV0FBVSxFQUFDLGdCQUFlLEVBQUMsU0FBUSxFQUFULEVBQVksT0FBTSxPQUFsQixFQUEwQixRQUFPLE1BQWpDLEVBQXdDLFNBQVEsT0FBaEQsRUFBd0QsT0FBTSxPQUE5RCxFQUFoQixFQUF1RixxQkFBb0IsRUFBQyxTQUFRLG1CQUFULEVBQTZCLE9BQU0sT0FBbkMsRUFBMkMsUUFBTyxNQUFsRCxFQUF5RCxTQUFRLE9BQWpFLEVBQXlFLE9BQU0sT0FBL0UsRUFBM0csRUFBWCxFQUErTSxZQUFXLEVBQUMsU0FBUSxFQUFDLFNBQVEsTUFBVCxFQUFnQixPQUFNLE9BQXRCLEVBQThCLFFBQU8sTUFBckMsRUFBNEMsU0FBUSxPQUFwRCxFQUE0RCxPQUFNLE9BQWxFLEVBQVQsRUFBb0Ysb0JBQW1CLEVBQUMsU0FBUSxXQUFULEVBQXFCLE9BQU0sT0FBM0IsRUFBbUMsUUFBTyxNQUExQyxFQUFpRCxTQUFRLE9BQXpELEVBQWlFLE9BQU0sT0FBdkUsRUFBdkcsRUFBdUwsb0JBQW1CLEVBQUMsU0FBUSxXQUFULEVBQXFCLE9BQU0sT0FBM0IsRUFBbUMsUUFBTyxNQUExQyxFQUFpRCxTQUFRLE9BQXpELEVBQWlFLE9BQU0sT0FBdkUsRUFBMU0sRUFBMFIsY0FBYSxFQUFDLFNBQVEsRUFBVCxFQUFZLE9BQU0sT0FBbEIsRUFBMEIsUUFBTyxNQUFqQyxFQUF3QyxTQUFRLE9BQWhELEVBQXdELE9BQU0sT0FBOUQsRUFBdlMsRUFBMU4sRSxRQUNUQyxPLEdBQVUsRUFBQyxZQUFXLEVBQUMsY0FBYSxZQUFkLEVBQVosRSxRQUNUQyxVLEdBQWE7QUFDRixzQ0FERTtBQUVGO0FBRkUsUyxRQUtOQyxRLEdBQVc7QUFDUEMsaUJBRE8sbUJBQ0U7QUFDTCx1QkFBTyxLQUFLUCxVQUFMLENBQWdCUSxHQUFoQixDQUFvQixnQkFBUTtBQUMvQiwyQkFBTztBQUNIQyw0QkFBSUMsS0FBS0QsRUFETjtBQUVIRSxzQ0FBY0QsS0FBS0UsSUFGaEI7QUFHSEMsOEJBQU1ILEtBQUtJLEtBQUwsQ0FBV04sR0FBWCxDQUFlLGFBQUs7QUFDdEIsbUNBQU87QUFDSEMsb0NBQUlNLEVBQUVOLEVBREg7QUFFSE8scUNBQUtELEVBQUVDLEdBQUYsSUFBUyxNQUZYO0FBR0hDLHVDQUFPRixFQUFFRSxLQUhOO0FBSUhDLHVDQUFPSCxFQUFFSSxNQUpOO0FBS0hDLDZDQUFhTCxFQUFFSyxXQUFGLElBQWlCO0FBTDNCLDZCQUFQO0FBT0gseUJBUks7QUFISCxxQkFBUDtBQWFILGlCQWRNLENBQVA7QUFlSDtBQWpCTSxTLFFBc0VYQyxPLEdBQVU7QUFDTkMsc0JBRE0sc0JBQ0tDLENBREwsRUFDUTtBQUNWLCtCQUFLQyxVQUFMLENBQWdCO0FBQ1pDLDZEQUF1Q0YsRUFBRUcsYUFBRixDQUFnQkMsT0FBaEIsQ0FBd0JsQjtBQURuRCxpQkFBaEI7QUFHSDtBQUxLLFM7OztBQWxEVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0VBakYrQixlQUFLbUIsUzs7a0JBQW5COUIsSyIsImZpbGUiOiJmb3JnZW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICAgIGltcG9ydCB0aXRsZUNvbXBvbmVudCBmcm9tICdAL2NvbXBvbmVudHMvdGl0bGUnXG4gICAgaW1wb3J0IGNvdXJzZUNvbXBvbmVudCBmcm9tICdAL2NvbXBvbmVudHMvY291cnNlJ1xuXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XG4gICAgICAgIHByb3BzID0ge1xuICAgICAgICAgICAgZm9yZ2VuRGF0YTogQXJyYXlcbiAgICAgICAgfVxuXG4gICAgICAgJHJlcGVhdCA9IHtcImxpc3RzXCI6e1wiY29tXCI6XCJ2LWNvdXJzZVwiLFwicHJvcHNcIjpcIlwifX07XHJcbiRwcm9wcyA9IHtcInYtdGl0bGVcIjp7XCJ4bWxuczp2LWJpbmRcIjp7XCJ2YWx1ZVwiOlwiXCIsXCJmb3JcIjpcImxpc3RzXCIsXCJpdGVtXCI6XCJpdGVtXCIsXCJpbmRleFwiOlwiaW5kZXhcIixcImtleVwiOlwiaW5kZXhcIn0sXCJ2LWJpbmQ6dGl0bGUuc3luY1wiOntcInZhbHVlXCI6XCJpdGVtLmNhdGVnb3J5TmFtZVwiLFwiZm9yXCI6XCJsaXN0c1wiLFwiaXRlbVwiOlwiaXRlbVwiLFwiaW5kZXhcIjpcImluZGV4XCIsXCJrZXlcIjpcImluZGV4XCJ9fSxcInYtY291cnNlXCI6e1wiY2xhc3NcIjp7XCJ2YWx1ZVwiOlwibGlzdFwiLFwiZm9yXCI6XCJsaXN0c1wiLFwiaXRlbVwiOlwiaXRlbVwiLFwiaW5kZXhcIjpcImluZGV4XCIsXCJrZXlcIjpcImluZGV4XCJ9LFwidi1iaW5kOnR5cGUuc3luY1wiOntcInZhbHVlXCI6XCJpdGVtLnR5cGVcIixcImZvclwiOlwibGlzdHNcIixcIml0ZW1cIjpcIml0ZW1cIixcImluZGV4XCI6XCJpbmRleFwiLFwia2V5XCI6XCJpbmRleFwifSxcInYtYmluZDpsaXN0LnN5bmNcIjp7XCJ2YWx1ZVwiOlwiaXRlbS5saXN0XCIsXCJmb3JcIjpcImxpc3RzXCIsXCJpdGVtXCI6XCJpdGVtXCIsXCJpbmRleFwiOlwiaW5kZXhcIixcImtleVwiOlwiaW5kZXhcIn0sXCJ4bWxuczp2LW9uXCI6e1widmFsdWVcIjpcIlwiLFwiZm9yXCI6XCJsaXN0c1wiLFwiaXRlbVwiOlwiaXRlbVwiLFwiaW5kZXhcIjpcImluZGV4XCIsXCJrZXlcIjpcImluZGV4XCJ9fX07XHJcbiRldmVudHMgPSB7XCJ2LWNvdXJzZVwiOntcInYtb246Y2xpY2tcIjpcInNlbGVjdExpc3RcIn19O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICAgICAgICAgICd2LXRpdGxlJzogdGl0bGVDb21wb25lbnQsXG4gICAgICAgICAgICAndi1jb3Vyc2UnOiBjb3Vyc2VDb21wb25lbnRcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbXB1dGVkID0ge1xuICAgICAgICAgICAgbGlzdHMgKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmZvcmdlbkRhdGEubWFwKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGl0ZW0uaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeU5hbWU6IGl0ZW0ubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3Q6IGl0ZW0ucG9zdHMubWFwKGkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBpLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWc6IGkudGFnIHx8ICfmsqHmnInmoIfnrb4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogaS50aXRsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY292ZXI6IGkuaW1nVXJsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogaS5kZXNjcmlwdGlvbiB8fCAn5rKh5pyJZGVzY3JpcHRpb24nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBkYXRhID0ge1xuICAgICAgICAvLyAgICAgbGlzdHM6IFt7XG4gICAgICAgIC8vICAgICAgICAgdHlwZTogMSxcbiAgICAgICAgLy8gICAgICAgICBjYXRlZ29yeU5hbWU6ICfmo67mnpfmlofljJYnLFxuICAgICAgICAvLyAgICAgICAgIGxpc3Q6IFt7XG4gICAgICAgIC8vICAgICAgICAgICAgIGlkOiAzLFxuICAgICAgICAvLyAgICAgICAgICAgICB0YWc6ICfmo67mnpfmlofljJYnLFxuICAgICAgICAvLyAgICAgICAgICAgICBjb3ZlcjogJ2h0dHA6Ly9zdGF0aWMuaHR4cS5uZXQvVXBsb2FkRmlsZXMvMjAxNy8xMS8xNS8xNTEwNzU2ODY2NTAzMDA1MzYwLmpwZycsXG4gICAgICAgIC8vICAgICAgICAgICAgIHRpdGxlOiAnMTDkuKrlhbvoirHliJvmhI/nrYnkvaDmnaXor5UnLFxuICAgICAgICAvLyAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ+S4juakjeeJqeebhuagveaJk+S6pOmBk+eahOi/h+eoi+aYr+e+juWlveeahO+8jOaXouiDveWuieaKmuaDhee7qu+8jOWPiOiDvee7hue7huWTgeWRs+eUn+a0u+OAguWmguaenOWcqOWFu+iKseeahOWQjOaXtuWGjeWKoOS4iuS4gOS6m+WIm+aEj++8jOi3n+akjeeJqeadpeS4gOWcuuaciei2o+eahOKAnOa4uOaIj+KAne+8jOi/meaJjeaYr+S4juakjeeJqeeahOacgOS9s+S6pOa1geaWueW8jydcbiAgICAgICAgLy8gICAgICAgICB9LCB7XG4gICAgICAgIC8vICAgICAgICAgICAgIGlkOiA2LFxuICAgICAgICAvLyAgICAgICAgICAgICB0YWc6ICfkuqflk4HpibTliKsnLFxuICAgICAgICAvLyAgICAgICAgICAgICBjb3ZlcjogJ2h0dHA6Ly9zdGF0aWMuaHR4cS5uZXQvVXBsb2FkRmlsZXMvMjAxNy8xMC8zMC90ZXN0LzIwMTcxMDMwMTAzNjE2NDgxLmpwZycsXG4gICAgICAgIC8vICAgICAgICAgICAgIHRpdGxlOiAnMjDnp43np4vlraPoirHmnZDnp43mpI3mjIfljZcnLFxuICAgICAgICAvLyAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ+S7iuWkqee7meWkp+WutuS7i+e7jTIw56eN6YCC5ZCI5Zyo56eL5Yas5a2j6IqC56eN5qSN55qE6Iqx5p2Q77yM6Lef552AUeWnkOS4gOi1t+WOu+eci+eci+WQp34nXG4gICAgICAgIC8vICAgICAgICAgfV1cbiAgICAgICAgLy8gICAgIH0sIHtcbiAgICAgICAgLy8gICAgICAgICB0eXBlOiAxLFxuICAgICAgICAvLyAgICAgICAgIGNhdGVnb3J5TmFtZTogJ+ajruael+WOqOaIvycsXG4gICAgICAgIC8vICAgICAgICAgbGlzdDogW3tcbiAgICAgICAgLy8gICAgICAgICAgICAgaWQ6IDQsXG4gICAgICAgIC8vICAgICAgICAgICAgIHRhZzogJ+ajruael+WOqOaIvycsXG4gICAgICAgIC8vICAgICAgICAgICAgIGNvdmVyOiAnaHR0cDovL3N0YXRpYy5odHhxLm5ldC9VcGxvYWRGaWxlcy8yMDE3LzEwLzI0L3Rlc3QvMjAxNzEwMjQxNDAzMjAyMzUuanBnJyxcbiAgICAgICAgLy8gICAgICAgICAgICAgdGl0bGU6ICflnKjlsbHmsLTkuYvpl7Qg5LiO5qSN54mp5Li66YK7JyxcbiAgICAgICAgLy8gICAgICAgICAgICAgZGVzY3JpcHRpb246ICflnKjov5nph4zvvIzmnInmnIDphbfnmoTppJDljoXvvJvlnKjov5nph4zvvIzkvaDlj6/ku6XnnJ/nnJ/mraPmraPlnLDlnKjkvJjnvo7lroHpnZnnjq/lsbHlm7Tnu5XnmoTlpKfoh6rnhLbph4zlkIPkuIrkuIDpob/nvo7ppJDvvIEnXG4gICAgICAgIC8vICAgICAgICAgfV1cbiAgICAgICAgLy8gICAgIH0sIHtcbiAgICAgICAgLy8gICAgICAgICB0eXBlOiAxLFxuICAgICAgICAvLyAgICAgICAgIGNhdGVnb3J5TmFtZTogJ+ajruael+mjjuWFiScsXG4gICAgICAgIC8vICAgICAgICAgbGlzdDogW3tcbiAgICAgICAgLy8gICAgICAgICAgICAgaWQ6IDUsXG4gICAgICAgIC8vICAgICAgICAgICAgIHRhZzogJ+ajruael+mjjuWFiScsXG4gICAgICAgIC8vICAgICAgICAgICAgIGNvdmVyOiAnaHR0cDovL3N0YXRpYy5odHhxLm5ldC9VcGxvYWRGaWxlcy8yMDE3LzExLzEzL3Rlc3QvMjAxNzExMTMxNjE2MDcyNDguanBnJyxcbiAgICAgICAgLy8gICAgICAgICAgICAgdGl0bGU6ICfljYHmnaHlhajnkIPmnIDmoqblubvnmoTmoJHmnKjpmqfpgZMnLFxuICAgICAgICAvLyAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ+agkeacqO+8jOWcsOeQg+S4iuacgOWPpOiAgeeahOeUn+eJqee+pOS9k+S5i+S4gO+8jOW4puedgOW8uuWkp+OAgeaMgeS5heS4juW/jeiAkOeahOWKm+mHj++8jOagkeacqOWPr+S7pembleWIu+aIkOWQhOenjeW9ouW8j+OAguS7iuWkqe+8jOmygemygeW4puS9oOaOouWvuzEw5p2h5YWo55CD5pyA5qKm5bm755qE5qCR5pyo6Zqn6YGT77yM5Y+R546w5Zyw55CD5LiK55qE576O5Li95a2Y5Zyo77yM6aKG5oKf5aSn6Ieq54S255qE56We5aWH5Yqb6YeP44CCJ1xuICAgICAgICAvLyAgICAgICAgIH1dXG4gICAgICAgIC8vICAgICB9LCB7XG4gICAgICAgIC8vICAgICAgICAgdHlwZTogMSxcbiAgICAgICAgLy8gICAgICAgICBjYXRlZ29yeU5hbWU6ICfmo67mnpfomJHoj4fjgIHmnpfkuqflk4HpibTliKsnLFxuICAgICAgICAvLyAgICAgICAgIGxpc3Q6IFt7XG4gICAgICAgIC8vICAgICAgICAgICAgIGlkOiA2LFxuICAgICAgICAvLyAgICAgICAgICAgICB0YWc6ICfkuqflk4HpibTliKsnLFxuICAgICAgICAvLyAgICAgICAgICAgICBjb3ZlcjogJ2h0dHA6Ly9zdGF0aWMuaHR4cS5uZXQvVXBsb2FkRmlsZXMvMjAxNy8xMC8zMC90ZXN0LzIwMTcxMDMwMTAzNjE2NDgxLmpwZycsXG4gICAgICAgIC8vICAgICAgICAgICAgIHRpdGxlOiAnMjDnp43np4vlraPoirHmnZDnp43mpI3mjIfljZcnLFxuICAgICAgICAvLyAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ+S7iuWkqee7meWkp+WutuS7i+e7jTIw56eN6YCC5ZCI5Zyo56eL5Yas5a2j6IqC56eN5qSN55qE6Iqx5p2Q77yM6Lef552AUeWnkOS4gOi1t+WOu+eci+eci+WQp34nXG4gICAgICAgIC8vICAgICAgICAgfV1cbiAgICAgICAgLy8gICAgIH1dXG4gICAgICAgIC8vIH1cblxuICAgICAgICBtZXRob2RzID0ge1xuICAgICAgICAgICAgc2VsZWN0TGlzdChlKSB7XG4gICAgICAgICAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBgLi4vLi4vcGFnZXMvcmVjb21tZW5kL2luZGV4P2lkPSR7ZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaWR9YFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4iXX0=