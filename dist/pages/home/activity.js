'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _activity = require('./../../components/activity.js');

var _activity2 = _interopRequireDefault(_activity);

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

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.$repeat = { "activities": { "com": "v-activity", "props": "item" } }, _this.$props = { "v-activity": { "xmlns:v-bind": { "value": "", "for": "activities", "item": "item", "index": "index", "key": "index" }, "v-bind:item.once": { "value": "item", "type": "item", "for": "activities", "item": "item", "index": "index", "key": "index" }, "xmlns:v-on": { "value": "", "for": "activities", "item": "item", "index": "index", "key": "index" } } }, _this.$events = { "v-activity": { "v-on:click": "selectActivity" } }, _this.components = {
            'v-activity': _activity2.default
        }, _this.data = {
            activities: [{
                id: 1,
                cover: 'https://modao.cc/uploads3/images/1030/10303683/raw_1497508860.jpeg',
                title: '森林蘑菇总动员亲子厨房大赛',
                time: '2017-07-18 15:00:00',
                address: '北京',
                description: '报名时间：2月1日至2月25日\n报名电话：18210237062 88892960\n幼儿年龄：6-12岁'
            }, {
                id: 2,
                cover: 'https://modao.cc/uploads3/images/1030/10303685/raw_1497508861.jpeg',
                title: '向自然学习的生活方式',
                time: '2017-07-18 15:00:00',
                address: '北京',
                description: '时间：2017年1月4日 14:00\n内容：向自然学习的生活方式\n讲师：中医文史研究会副会长 王黑特'
            }, {
                id: 3,
                cover: 'https://modao.cc/uploads3/images/1026/10260002/raw_1497399725.jpeg',
                title: '“体验自然”森林旅行团开团啦！',
                time: '2017-07-18 15:00:00',
                address: '北京',
                description: '时间：2017年9月26日-10月9日\n旅行地点：河北塞罕坝国家森林公园'
            }]
        }, _this.methods = {
            selectActivity: function selectActivity(e) {
                _wepy2.default.navigateTo({
                    url: '../../pages/activity/index?id=' + e.currentTarget.dataset.id
                });
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return Index;
}(_wepy2.default.component);

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjdGl2aXR5LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiZGF0YSIsImFjdGl2aXRpZXMiLCJpZCIsImNvdmVyIiwidGl0bGUiLCJ0aW1lIiwiYWRkcmVzcyIsImRlc2NyaXB0aW9uIiwibWV0aG9kcyIsInNlbGVjdEFjdGl2aXR5IiwiZSIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNJOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7d0xBQ2xCQyxPLEdBQVUsRUFBQyxjQUFhLEVBQUMsT0FBTSxZQUFQLEVBQW9CLFNBQVEsTUFBNUIsRUFBZCxFLFFBQ2pCQyxNLEdBQVMsRUFBQyxjQUFhLEVBQUMsZ0JBQWUsRUFBQyxTQUFRLEVBQVQsRUFBWSxPQUFNLFlBQWxCLEVBQStCLFFBQU8sTUFBdEMsRUFBNkMsU0FBUSxPQUFyRCxFQUE2RCxPQUFNLE9BQW5FLEVBQWhCLEVBQTRGLG9CQUFtQixFQUFDLFNBQVEsTUFBVCxFQUFnQixRQUFPLE1BQXZCLEVBQThCLE9BQU0sWUFBcEMsRUFBaUQsUUFBTyxNQUF4RCxFQUErRCxTQUFRLE9BQXZFLEVBQStFLE9BQU0sT0FBckYsRUFBL0csRUFBNk0sY0FBYSxFQUFDLFNBQVEsRUFBVCxFQUFZLE9BQU0sWUFBbEIsRUFBK0IsUUFBTyxNQUF0QyxFQUE2QyxTQUFRLE9BQXJELEVBQTZELE9BQU0sT0FBbkUsRUFBMU4sRUFBZCxFLFFBQ1RDLE8sR0FBVSxFQUFDLGNBQWEsRUFBQyxjQUFhLGdCQUFkLEVBQWQsRSxRQUNUQyxVLEdBQWE7QUFDRjtBQURFLFMsUUFJTkMsSSxHQUFPO0FBQ0hDLHdCQUFZLENBQUM7QUFDVEMsb0JBQUksQ0FESztBQUVUQyx1QkFBTyxvRUFGRTtBQUdUQyx1QkFBTyxlQUhFO0FBSVRDLHNCQUFNLHFCQUpHO0FBS1RDLHlCQUFTLElBTEE7QUFNVEMsNkJBQWE7QUFOSixhQUFELEVBT1Q7QUFDQ0wsb0JBQUksQ0FETDtBQUVDQyx1QkFBTyxvRUFGUjtBQUdDQyx1QkFBTyxZQUhSO0FBSUNDLHNCQUFNLHFCQUpQO0FBS0NDLHlCQUFTLElBTFY7QUFNQ0MsNkJBQWE7QUFOZCxhQVBTLEVBY1Q7QUFDQ0wsb0JBQUksQ0FETDtBQUVDQyx1QkFBTyxvRUFGUjtBQUdDQyx1QkFBTyxpQkFIUjtBQUlDQyxzQkFBTSxxQkFKUDtBQUtDQyx5QkFBUyxJQUxWO0FBTUNDLDZCQUFhO0FBTmQsYUFkUztBQURULFMsUUF5QlBDLE8sR0FBVTtBQUNOQywwQkFETSwwQkFDU0MsQ0FEVCxFQUNZO0FBQ2QsK0JBQUtDLFVBQUwsQ0FBZ0I7QUFDWkMsNERBQXNDRixFQUFFRyxhQUFGLENBQWdCQyxPQUFoQixDQUF3Qlo7QUFEbEQsaUJBQWhCO0FBR0g7QUFMSyxTOzs7O0VBakNxQixlQUFLYSxTOztrQkFBbkJwQixLIiwiZmlsZSI6ImFjdGl2aXR5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgICBpbXBvcnQgYWN0aXZpdHlDb21wb25lbnQgZnJvbSAnQC9jb21wb25lbnRzL2FjdGl2aXR5J1xuXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XG4gICAgICAgJHJlcGVhdCA9IHtcImFjdGl2aXRpZXNcIjp7XCJjb21cIjpcInYtYWN0aXZpdHlcIixcInByb3BzXCI6XCJpdGVtXCJ9fTtcclxuJHByb3BzID0ge1widi1hY3Rpdml0eVwiOntcInhtbG5zOnYtYmluZFwiOntcInZhbHVlXCI6XCJcIixcImZvclwiOlwiYWN0aXZpdGllc1wiLFwiaXRlbVwiOlwiaXRlbVwiLFwiaW5kZXhcIjpcImluZGV4XCIsXCJrZXlcIjpcImluZGV4XCJ9LFwidi1iaW5kOml0ZW0ub25jZVwiOntcInZhbHVlXCI6XCJpdGVtXCIsXCJ0eXBlXCI6XCJpdGVtXCIsXCJmb3JcIjpcImFjdGl2aXRpZXNcIixcIml0ZW1cIjpcIml0ZW1cIixcImluZGV4XCI6XCJpbmRleFwiLFwia2V5XCI6XCJpbmRleFwifSxcInhtbG5zOnYtb25cIjp7XCJ2YWx1ZVwiOlwiXCIsXCJmb3JcIjpcImFjdGl2aXRpZXNcIixcIml0ZW1cIjpcIml0ZW1cIixcImluZGV4XCI6XCJpbmRleFwiLFwia2V5XCI6XCJpbmRleFwifX19O1xyXG4kZXZlbnRzID0ge1widi1hY3Rpdml0eVwiOntcInYtb246Y2xpY2tcIjpcInNlbGVjdEFjdGl2aXR5XCJ9fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICAgICAgICAndi1hY3Rpdml0eSc6IGFjdGl2aXR5Q29tcG9uZW50XG4gICAgICAgIH1cblxuICAgICAgICBkYXRhID0ge1xuICAgICAgICAgICAgYWN0aXZpdGllczogW3tcbiAgICAgICAgICAgICAgICBpZDogMSxcbiAgICAgICAgICAgICAgICBjb3ZlcjogJ2h0dHBzOi8vbW9kYW8uY2MvdXBsb2FkczMvaW1hZ2VzLzEwMzAvMTAzMDM2ODMvcmF3XzE0OTc1MDg4NjAuanBlZycsXG4gICAgICAgICAgICAgICAgdGl0bGU6ICfmo67mnpfomJHoj4fmgLvliqjlkZjkurLlrZDljqjmiL/lpKfotZsnLFxuICAgICAgICAgICAgICAgIHRpbWU6ICcyMDE3LTA3LTE4IDE1OjAwOjAwJyxcbiAgICAgICAgICAgICAgICBhZGRyZXNzOiAn5YyX5LqsJyxcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ+aKpeWQjeaXtumXtO+8mjLmnIgx5pel6IezMuaciDI15pelXFxu5oql5ZCN55S16K+d77yaMTgyMTAyMzcwNjIgODg4OTI5NjBcXG7lubzlhL/lubTpvoTvvJo2LTEy5bKBJ1xuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGlkOiAyLFxuICAgICAgICAgICAgICAgIGNvdmVyOiAnaHR0cHM6Ly9tb2Rhby5jYy91cGxvYWRzMy9pbWFnZXMvMTAzMC8xMDMwMzY4NS9yYXdfMTQ5NzUwODg2MS5qcGVnJyxcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+WQkeiHqueEtuWtpuS5oOeahOeUn+a0u+aWueW8jycsXG4gICAgICAgICAgICAgICAgdGltZTogJzIwMTctMDctMTggMTU6MDA6MDAnLFxuICAgICAgICAgICAgICAgIGFkZHJlc3M6ICfljJfkuqwnLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAn5pe26Ze077yaMjAxN+W5tDHmnIg05pelIDE0OjAwXFxu5YaF5a6577ya5ZCR6Ieq54S25a2m5Lmg55qE55Sf5rS75pa55byPXFxu6K6y5biI77ya5Lit5Yy75paH5Y+y56CU56m25Lya5Ymv5Lya6ZW/IOeOi+m7keeJuSdcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBpZDogMyxcbiAgICAgICAgICAgICAgICBjb3ZlcjogJ2h0dHBzOi8vbW9kYW8uY2MvdXBsb2FkczMvaW1hZ2VzLzEwMjYvMTAyNjAwMDIvcmF3XzE0OTczOTk3MjUuanBlZycsXG4gICAgICAgICAgICAgICAgdGl0bGU6ICfigJzkvZPpqozoh6rnhLbigJ3mo67mnpfml4XooYzlm6LlvIDlm6LllabvvIEnLFxuICAgICAgICAgICAgICAgIHRpbWU6ICcyMDE3LTA3LTE4IDE1OjAwOjAwJyxcbiAgICAgICAgICAgICAgICBhZGRyZXNzOiAn5YyX5LqsJyxcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ+aXtumXtO+8mjIwMTflubQ55pyIMjbml6UtMTDmnIg55pelXFxu5peF6KGM5Zyw54K577ya5rKz5YyX5aGe572V5Z2d5Zu95a625qOu5p6X5YWs5ZutJ1xuICAgICAgICAgICAgfV1cbiAgICAgICAgfVxuXG4gICAgICAgIG1ldGhvZHMgPSB7XG4gICAgICAgICAgICBzZWxlY3RBY3Rpdml0eShlKSB7XG4gICAgICAgICAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBgLi4vLi4vcGFnZXMvYWN0aXZpdHkvaW5kZXg/aWQ9JHtlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pZH1gXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiJdfQ==