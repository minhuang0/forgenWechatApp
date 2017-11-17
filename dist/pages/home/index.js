'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _navbar = require('./../../components/navbar.js');

var _navbar2 = _interopRequireDefault(_navbar);

var _recommend = require('./recommend.js');

var _recommend2 = _interopRequireDefault(_recommend);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_wepy$page) {
    _inherits(Index, _wepy$page);

    function Index() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Index);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
            navigationBarTitleText: '森林风'
        }, _this.$repeat = {}, _this.$props = { "v-navbar": { "xmlns:v-bind": "", "v-bind:alldata.once": "tabs", "v-bind:activeIndex.sync": "activeIndex", "v-bind:sliderWidth.once": "sliderWidth", "xmlns:v-on": "" } }, _this.$events = { "v-navbar": { "v-on:changeActiveIndex": "changeActiveIndex" } }, _this.components = {
            'v-navbar': _navbar2.default,
            'v-recommend': _recommend2.default
        }, _this.data = {
            /* 顶部分类 */
            tabs: [{
                title: '推荐'
            }, {
                title: '达人馆'
            }, {
                title: '圈子'
            }, {
                title: '活动'
            }],
            activeIndex: 0,
            sliderWidth: 93.75
        }, _this.methods = {
            changeActiveIndex: function changeActiveIndex(activeIndex) {
                this.activeIndex = activeIndex;
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return Index;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/home/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsImRhdGEiLCJ0YWJzIiwidGl0bGUiLCJhY3RpdmVJbmRleCIsInNsaWRlcldpZHRoIiwibWV0aG9kcyIsImNoYW5nZUFjdGl2ZUluZGV4IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNJOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7Ozt3TEFDakJDLE0sR0FBUztBQUNMQyxvQ0FBd0I7QUFEbkIsUyxRQUlWQyxPLEdBQVUsRSxRQUNqQkMsTSxHQUFTLEVBQUMsWUFBVyxFQUFDLGdCQUFlLEVBQWhCLEVBQW1CLHVCQUFzQixNQUF6QyxFQUFnRCwyQkFBMEIsYUFBMUUsRUFBd0YsMkJBQTBCLGFBQWxILEVBQWdJLGNBQWEsRUFBN0ksRUFBWixFLFFBQ1RDLE8sR0FBVSxFQUFDLFlBQVcsRUFBQywwQkFBeUIsbUJBQTFCLEVBQVosRSxRQUNUQyxVLEdBQWE7QUFDRix3Q0FERTtBQUVGO0FBRkUsUyxRQUtOQyxJLEdBQU87QUFDSDtBQUNBQyxrQkFBTSxDQUFDO0FBQ0hDLHVCQUFPO0FBREosYUFBRCxFQUVIO0FBQ0NBLHVCQUFPO0FBRFIsYUFGRyxFQUlIO0FBQ0NBLHVCQUFPO0FBRFIsYUFKRyxFQU1IO0FBQ0NBLHVCQUFPO0FBRFIsYUFORyxDQUZIO0FBV0hDLHlCQUFhLENBWFY7QUFZSEMseUJBQWE7QUFaVixTLFFBZVBDLE8sR0FBVTtBQUNOQyw2QkFETSw2QkFDWUgsV0FEWixFQUN5QjtBQUMzQixxQkFBS0EsV0FBTCxHQUFtQkEsV0FBbkI7QUFDSDtBQUhLLFM7Ozs7RUE1QnFCLGVBQUtJLEk7O2tCQUFuQmQsSyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gICAgaW1wb3J0IG5hdmJhckNvbXBvbmVudCBmcm9tICdAL2NvbXBvbmVudHMvbmF2YmFyJ1xuICAgIGltcG9ydCByZWNvbW1lbmRDb21wb25lbnQgZnJvbSAnLi9yZWNvbW1lbmQnXG5cbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgICAgIGNvbmZpZyA9IHtcbiAgICAgICAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfmo67mnpfpo44nXG4gICAgICAgIH1cblxuICAgICAgICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1widi1uYXZiYXJcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOmFsbGRhdGEub25jZVwiOlwidGFic1wiLFwidi1iaW5kOmFjdGl2ZUluZGV4LnN5bmNcIjpcImFjdGl2ZUluZGV4XCIsXCJ2LWJpbmQ6c2xpZGVyV2lkdGgub25jZVwiOlwic2xpZGVyV2lkdGhcIixcInhtbG5zOnYtb25cIjpcIlwifX07XHJcbiRldmVudHMgPSB7XCJ2LW5hdmJhclwiOntcInYtb246Y2hhbmdlQWN0aXZlSW5kZXhcIjpcImNoYW5nZUFjdGl2ZUluZGV4XCJ9fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICAgICAgICAndi1uYXZiYXInOiBuYXZiYXJDb21wb25lbnQsXG4gICAgICAgICAgICAndi1yZWNvbW1lbmQnOiByZWNvbW1lbmRDb21wb25lbnRcbiAgICAgICAgfVxuXG4gICAgICAgIGRhdGEgPSB7XG4gICAgICAgICAgICAvKiDpobbpg6jliIbnsbsgKi9cbiAgICAgICAgICAgIHRhYnM6IFt7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICfmjqjojZAnXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICfovr7kurrppoYnXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICflnIjlrZAnXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICfmtLvliqgnXG4gICAgICAgICAgICB9XSxcbiAgICAgICAgICAgIGFjdGl2ZUluZGV4OiAwLFxuICAgICAgICAgICAgc2xpZGVyV2lkdGg6IDkzLjc1XG4gICAgICAgIH1cblxuICAgICAgICBtZXRob2RzID0ge1xuICAgICAgICAgICAgY2hhbmdlQWN0aXZlSW5kZXgoYWN0aXZlSW5kZXgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZUluZGV4ID0gYWN0aXZlSW5kZXhcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiJdfQ==