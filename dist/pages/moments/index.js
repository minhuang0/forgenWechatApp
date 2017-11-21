'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _navbar = require('./../../components/navbar.js');

var _navbar2 = _interopRequireDefault(_navbar);

var _moments = require('./moments.js');

var _moments2 = _interopRequireDefault(_moments);

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
        }, _this.$repeat = {}, _this.$props = { "v-navbar": { "xmlns:v-bind": "", "v-bind:alldata.once": "tabs", "v-bind:activeIndex.sync": "activeIndex", "v-bind:sliderWidth.once": "sliderWidth", "xmlns:v-on": "" }, "v-moments": { "v-bind:class.once": "{ hidden: activeIndex !== 1}" } }, _this.$events = { "v-navbar": { "v-on:changeActiveIndex": "changeActiveIndex" } }, _this.components = {
            'v-navbar': _navbar2.default,
            'v-moments': _moments2.default
        }, _this.data = {
            /* 顶部分类 */
            tabs: [{
                title: '推荐'
            }, {
                title: '圈子'
            }],
            activeIndex: 0,
            sliderWidth: 93.75
        }, _this.methods = {
            changeActiveIndex: function changeActiveIndex(activeIndex) {
                console.log(activeIndex);
                this.activeIndex = parseInt(activeIndex);
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return Index;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/moments/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsImRhdGEiLCJ0YWJzIiwidGl0bGUiLCJhY3RpdmVJbmRleCIsInNsaWRlcldpZHRoIiwibWV0aG9kcyIsImNoYW5nZUFjdGl2ZUluZGV4IiwiY29uc29sZSIsImxvZyIsInBhcnNlSW50IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNJOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7Ozt3TEFDakJDLE0sR0FBUztBQUNMQyxvQ0FBd0I7QUFEbkIsUyxRQUlWQyxPLEdBQVUsRSxRQUNqQkMsTSxHQUFTLEVBQUMsWUFBVyxFQUFDLGdCQUFlLEVBQWhCLEVBQW1CLHVCQUFzQixNQUF6QyxFQUFnRCwyQkFBMEIsYUFBMUUsRUFBd0YsMkJBQTBCLGFBQWxILEVBQWdJLGNBQWEsRUFBN0ksRUFBWixFQUE2SixhQUFZLEVBQUMscUJBQW9CLDhCQUFyQixFQUF6SyxFLFFBQ1RDLE8sR0FBVSxFQUFDLFlBQVcsRUFBQywwQkFBeUIsbUJBQTFCLEVBQVosRSxRQUNUQyxVLEdBQWE7QUFDRix3Q0FERTtBQUVGO0FBRkUsUyxRQUtOQyxJLEdBQU87QUFDSDtBQUNBQyxrQkFBTSxDQUFDO0FBQ0hDLHVCQUFPO0FBREosYUFBRCxFQUVIO0FBQ0NBLHVCQUFPO0FBRFIsYUFGRyxDQUZIO0FBT0hDLHlCQUFhLENBUFY7QUFRSEMseUJBQWE7QUFSVixTLFFBV1BDLE8sR0FBVTtBQUNOQyw2QkFETSw2QkFDWUgsV0FEWixFQUN5QjtBQUMzQkksd0JBQVFDLEdBQVIsQ0FBWUwsV0FBWjtBQUNBLHFCQUFLQSxXQUFMLEdBQW1CTSxTQUFTTixXQUFULENBQW5CO0FBQ0g7QUFKSyxTOzs7O0VBeEJxQixlQUFLTyxJOztrQkFBbkJqQixLIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgICBpbXBvcnQgbmF2YmFyQ29tcG9uZW50IGZyb20gJ0AvY29tcG9uZW50cy9uYXZiYXInXG4gICAgaW1wb3J0IG1vbWVudHNDb21wb25lbnQgZnJvbSAnLi9tb21lbnRzJ1xuXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgICAgICBjb25maWcgPSB7XG4gICAgICAgICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5qOu5p6X6aOOJ1xuICAgICAgICB9XG5cbiAgICAgICAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcInYtbmF2YmFyXCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDphbGxkYXRhLm9uY2VcIjpcInRhYnNcIixcInYtYmluZDphY3RpdmVJbmRleC5zeW5jXCI6XCJhY3RpdmVJbmRleFwiLFwidi1iaW5kOnNsaWRlcldpZHRoLm9uY2VcIjpcInNsaWRlcldpZHRoXCIsXCJ4bWxuczp2LW9uXCI6XCJcIn0sXCJ2LW1vbWVudHNcIjp7XCJ2LWJpbmQ6Y2xhc3Mub25jZVwiOlwieyBoaWRkZW46IGFjdGl2ZUluZGV4ICE9PSAxfVwifX07XHJcbiRldmVudHMgPSB7XCJ2LW5hdmJhclwiOntcInYtb246Y2hhbmdlQWN0aXZlSW5kZXhcIjpcImNoYW5nZUFjdGl2ZUluZGV4XCJ9fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICAgICAgICAndi1uYXZiYXInOiBuYXZiYXJDb21wb25lbnQsXG4gICAgICAgICAgICAndi1tb21lbnRzJzogbW9tZW50c0NvbXBvbmVudFxuICAgICAgICB9XG5cbiAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICAgIC8qIOmhtumDqOWIhuexuyAqL1xuICAgICAgICAgICAgdGFiczogW3tcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+aOqOiNkCdcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+WciOWtkCdcbiAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgYWN0aXZlSW5kZXg6IDAsXG4gICAgICAgICAgICBzbGlkZXJXaWR0aDogOTMuNzVcbiAgICAgICAgfVxuXG4gICAgICAgIG1ldGhvZHMgPSB7XG4gICAgICAgICAgICBjaGFuZ2VBY3RpdmVJbmRleChhY3RpdmVJbmRleCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGFjdGl2ZUluZGV4KVxuICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlSW5kZXggPSBwYXJzZUludChhY3RpdmVJbmRleClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiJdfQ==