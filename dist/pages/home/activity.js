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

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
            activityData: Array
        }, _this.$repeat = { "activities": { "com": "v-activity", "props": "item.sync" } }, _this.$props = { "v-activity": { "xmlns:v-bind": { "value": "", "for": "activities", "item": "item", "index": "index", "key": "index" }, "v-bind:item.sync": { "value": "item", "type": "item", "for": "activities", "item": "item", "index": "index", "key": "index" }, "xmlns:v-on": { "value": "", "for": "activities", "item": "item", "index": "index", "key": "index" } } }, _this.$events = { "v-activity": { "v-on:click": "selectActivity" } }, _this.components = {
            'v-activity': _activity2.default
        }, _this.computed = {
            activities: function activities() {
                return this.activityData.map(function (i) {
                    return {
                        id: i.id,
                        cover: i.imgUrl,
                        title: i.title,
                        description: i.description
                    };
                });
            }
        }, _this.methods = {
            selectActivity: function selectActivity(e) {
                _wepy2.default.navigateTo({
                    url: '../../pages/recommend/index?id=' + e.currentTarget.dataset.id
                });
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return Index;
}(_wepy2.default.component);

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjdGl2aXR5LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwicHJvcHMiLCJhY3Rpdml0eURhdGEiLCJBcnJheSIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsImFjdGl2aXR5Q29tcG9uZW50IiwiY29tcHV0ZWQiLCJhY3Rpdml0aWVzIiwibWFwIiwiaWQiLCJpIiwiY292ZXIiLCJpbWdVcmwiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwibWV0aG9kcyIsInNlbGVjdEFjdGl2aXR5IiwiZSIsIndlcHkiLCJuYXZpZ2F0ZVRvIiwidXJsIiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDSTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O3dMQUNqQkMsSyxHQUFRO0FBQ0pDLDBCQUFjQztBQURWLFMsUUFHVEMsTyxHQUFVLEVBQUMsY0FBYSxFQUFDLE9BQU0sWUFBUCxFQUFvQixTQUFRLFdBQTVCLEVBQWQsRSxRQUNqQkMsTSxHQUFTLEVBQUMsY0FBYSxFQUFDLGdCQUFlLEVBQUMsU0FBUSxFQUFULEVBQVksT0FBTSxZQUFsQixFQUErQixRQUFPLE1BQXRDLEVBQTZDLFNBQVEsT0FBckQsRUFBNkQsT0FBTSxPQUFuRSxFQUFoQixFQUE0RixvQkFBbUIsRUFBQyxTQUFRLE1BQVQsRUFBZ0IsUUFBTyxNQUF2QixFQUE4QixPQUFNLFlBQXBDLEVBQWlELFFBQU8sTUFBeEQsRUFBK0QsU0FBUSxPQUF2RSxFQUErRSxPQUFNLE9BQXJGLEVBQS9HLEVBQTZNLGNBQWEsRUFBQyxTQUFRLEVBQVQsRUFBWSxPQUFNLFlBQWxCLEVBQStCLFFBQU8sTUFBdEMsRUFBNkMsU0FBUSxPQUFyRCxFQUE2RCxPQUFNLE9BQW5FLEVBQTFOLEVBQWQsRSxRQUNUQyxPLEdBQVUsRUFBQyxjQUFhLEVBQUMsY0FBYSxnQkFBZCxFQUFkLEUsUUFDVEMsVSxHQUFhO0FBQ0YsMEJBQWNDO0FBRFosUyxRQUlOQyxRLEdBQVc7QUFDUEMsc0JBRE8sd0JBQ087QUFDVix1QkFBTyxLQUFLUixZQUFMLENBQWtCUyxHQUFsQixDQUFzQixhQUFLO0FBQzlCLDJCQUFPO0FBQ0hDLDRCQUFJQyxFQUFFRCxFQURIO0FBRUhFLCtCQUFPRCxFQUFFRSxNQUZOO0FBR0hDLCtCQUFPSCxFQUFFRyxLQUhOO0FBSUhDLHFDQUFhSixFQUFFSTtBQUpaLHFCQUFQO0FBTUgsaUJBUE0sQ0FBUDtBQVFIO0FBVk0sUyxRQVlYQyxPLEdBQVU7QUFDTkMsMEJBRE0sMEJBQ1NDLENBRFQsRUFDWTtBQUNkQywrQkFBS0MsVUFBTCxDQUFnQjtBQUNaQyw2REFBdUNILEVBQUVJLGFBQUYsQ0FBZ0JDLE9BQWhCLENBQXdCYjtBQURuRCxpQkFBaEI7QUFHSDtBQUxLLFM7Ozs7RUF2QnFCUyxlQUFLSyxTOztrQkFBbkIxQixLIiwiZmlsZSI6ImFjdGl2aXR5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgICBpbXBvcnQgYWN0aXZpdHlDb21wb25lbnQgZnJvbSAnQC9jb21wb25lbnRzL2FjdGl2aXR5J1xuXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XG4gICAgICAgIHByb3BzID0ge1xuICAgICAgICAgICAgYWN0aXZpdHlEYXRhOiBBcnJheVxuICAgICAgICB9XG4gICAgICAgJHJlcGVhdCA9IHtcImFjdGl2aXRpZXNcIjp7XCJjb21cIjpcInYtYWN0aXZpdHlcIixcInByb3BzXCI6XCJpdGVtLnN5bmNcIn19O1xyXG4kcHJvcHMgPSB7XCJ2LWFjdGl2aXR5XCI6e1wieG1sbnM6di1iaW5kXCI6e1widmFsdWVcIjpcIlwiLFwiZm9yXCI6XCJhY3Rpdml0aWVzXCIsXCJpdGVtXCI6XCJpdGVtXCIsXCJpbmRleFwiOlwiaW5kZXhcIixcImtleVwiOlwiaW5kZXhcIn0sXCJ2LWJpbmQ6aXRlbS5zeW5jXCI6e1widmFsdWVcIjpcIml0ZW1cIixcInR5cGVcIjpcIml0ZW1cIixcImZvclwiOlwiYWN0aXZpdGllc1wiLFwiaXRlbVwiOlwiaXRlbVwiLFwiaW5kZXhcIjpcImluZGV4XCIsXCJrZXlcIjpcImluZGV4XCJ9LFwieG1sbnM6di1vblwiOntcInZhbHVlXCI6XCJcIixcImZvclwiOlwiYWN0aXZpdGllc1wiLFwiaXRlbVwiOlwiaXRlbVwiLFwiaW5kZXhcIjpcImluZGV4XCIsXCJrZXlcIjpcImluZGV4XCJ9fX07XHJcbiRldmVudHMgPSB7XCJ2LWFjdGl2aXR5XCI6e1widi1vbjpjbGlja1wiOlwic2VsZWN0QWN0aXZpdHlcIn19O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICAgICAgICAgICd2LWFjdGl2aXR5JzogYWN0aXZpdHlDb21wb25lbnRcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbXB1dGVkID0ge1xuICAgICAgICAgICAgYWN0aXZpdGllcyAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuYWN0aXZpdHlEYXRhLm1hcChpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBpLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgY292ZXI6IGkuaW1nVXJsLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IGkudGl0bGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogaS5kZXNjcmlwdGlvblxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBtZXRob2RzID0ge1xuICAgICAgICAgICAgc2VsZWN0QWN0aXZpdHkoZSkge1xuICAgICAgICAgICAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgICAgICAgICAgICAgIHVybDogYC4uLy4uL3BhZ2VzL3JlY29tbWVuZC9pbmRleD9pZD0ke2UuY3VycmVudFRhcmdldC5kYXRhc2V0LmlkfWBcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuIl19