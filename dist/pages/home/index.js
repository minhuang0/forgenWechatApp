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

var _activity = require('./activity.js');

var _activity2 = _interopRequireDefault(_activity);

var _forgen = require('./forgen.js');

var _forgen2 = _interopRequireDefault(_forgen);

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
        }, _this.$repeat = {}, _this.$props = { "v-navbar": { "xmlns:v-bind": "", "v-bind:alldata.once": "tabs", "v-bind:activeIndex.sync": "activeIndex", "v-bind:sliderWidth.once": "sliderWidth", "xmlns:v-on": "" }, "v-recommend": { "v-bind:class.once": "{ hidden: activeIndex !== 0}" }, "v-activities": { "v-bind:class.once": "{ hidden: activeIndex !== 2}" }, "v-forgen": { "v-bind:class.once": "{ hidden: activeIndex !== 1}" } }, _this.$events = { "v-navbar": { "v-on:changeActiveIndex": "changeActiveIndex" } }, _this.components = {
            'v-navbar': _navbar2.default,
            'v-recommend': _recommend2.default,
            'v-activities': _activity2.default,
            'v-forgen': _forgen2.default
        }, _this.data = {
            /* 顶部分类 */
            tabs: [{
                title: '推荐'
            }, {
                title: '森究堂'
            }, {
                title: '活动'
            }],
            activeIndex: 0,
            sliderWidth: 93.75
        }, _this.methods = {
            changeActiveIndex: function changeActiveIndex(activeIndex) {
                this.activeIndex = parseInt(activeIndex);
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return Index;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/home/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsImRhdGEiLCJ0YWJzIiwidGl0bGUiLCJhY3RpdmVJbmRleCIsInNsaWRlcldpZHRoIiwibWV0aG9kcyIsImNoYW5nZUFjdGl2ZUluZGV4IiwicGFyc2VJbnQiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0k7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7Ozt3TEFDakJDLE0sR0FBUztBQUNMQyxvQ0FBd0I7QUFEbkIsUyxRQUlWQyxPLEdBQVUsRSxRQUNqQkMsTSxHQUFTLEVBQUMsWUFBVyxFQUFDLGdCQUFlLEVBQWhCLEVBQW1CLHVCQUFzQixNQUF6QyxFQUFnRCwyQkFBMEIsYUFBMUUsRUFBd0YsMkJBQTBCLGFBQWxILEVBQWdJLGNBQWEsRUFBN0ksRUFBWixFQUE2SixlQUFjLEVBQUMscUJBQW9CLDhCQUFyQixFQUEzSyxFQUFnTyxnQkFBZSxFQUFDLHFCQUFvQiw4QkFBckIsRUFBL08sRUFBb1MsWUFBVyxFQUFDLHFCQUFvQiw4QkFBckIsRUFBL1MsRSxRQUNUQyxPLEdBQVUsRUFBQyxZQUFXLEVBQUMsMEJBQXlCLG1CQUExQixFQUFaLEUsUUFDVEMsVSxHQUFhO0FBQ0Ysd0NBREU7QUFFRiw4Q0FGRTtBQUdGLDhDQUhFO0FBSUY7QUFKRSxTLFFBT05DLEksR0FBTztBQUNIO0FBQ0FDLGtCQUFNLENBQUM7QUFDSEMsdUJBQU87QUFESixhQUFELEVBRUg7QUFDQ0EsdUJBQU87QUFEUixhQUZHLEVBSUg7QUFDQ0EsdUJBQU87QUFEUixhQUpHLENBRkg7QUFTSEMseUJBQWEsQ0FUVjtBQVVIQyx5QkFBYTtBQVZWLFMsUUFhUEMsTyxHQUFVO0FBQ05DLDZCQURNLDZCQUNZSCxXQURaLEVBQ3lCO0FBQzNCLHFCQUFLQSxXQUFMLEdBQW1CSSxTQUFTSixXQUFULENBQW5CO0FBQ0g7QUFISyxTOzs7O0VBNUJxQixlQUFLSyxJOztrQkFBbkJmLEsiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICAgIGltcG9ydCBuYXZiYXJDb21wb25lbnQgZnJvbSAnQC9jb21wb25lbnRzL25hdmJhcidcbiAgICBpbXBvcnQgcmVjb21tZW5kQ29tcG9uZW50IGZyb20gJy4vcmVjb21tZW5kJ1xuICAgIGltcG9ydCBhY3Rpdml0aWVzQ29tcG9uZW50IGZyb20gJy4vYWN0aXZpdHknXG4gICAgaW1wb3J0IGZvcmdlbkNvbXBvbmVudCBmcm9tICcuL2ZvcmdlbidcblxuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICAgICAgY29uZmlnID0ge1xuICAgICAgICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+ajruael+mjjidcbiAgICAgICAgfVxuXG4gICAgICAgJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJ2LW5hdmJhclwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6YWxsZGF0YS5vbmNlXCI6XCJ0YWJzXCIsXCJ2LWJpbmQ6YWN0aXZlSW5kZXguc3luY1wiOlwiYWN0aXZlSW5kZXhcIixcInYtYmluZDpzbGlkZXJXaWR0aC5vbmNlXCI6XCJzbGlkZXJXaWR0aFwiLFwieG1sbnM6di1vblwiOlwiXCJ9LFwidi1yZWNvbW1lbmRcIjp7XCJ2LWJpbmQ6Y2xhc3Mub25jZVwiOlwieyBoaWRkZW46IGFjdGl2ZUluZGV4ICE9PSAwfVwifSxcInYtYWN0aXZpdGllc1wiOntcInYtYmluZDpjbGFzcy5vbmNlXCI6XCJ7IGhpZGRlbjogYWN0aXZlSW5kZXggIT09IDJ9XCJ9LFwidi1mb3JnZW5cIjp7XCJ2LWJpbmQ6Y2xhc3Mub25jZVwiOlwieyBoaWRkZW46IGFjdGl2ZUluZGV4ICE9PSAxfVwifX07XHJcbiRldmVudHMgPSB7XCJ2LW5hdmJhclwiOntcInYtb246Y2hhbmdlQWN0aXZlSW5kZXhcIjpcImNoYW5nZUFjdGl2ZUluZGV4XCJ9fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICAgICAgICAndi1uYXZiYXInOiBuYXZiYXJDb21wb25lbnQsXG4gICAgICAgICAgICAndi1yZWNvbW1lbmQnOiByZWNvbW1lbmRDb21wb25lbnQsXG4gICAgICAgICAgICAndi1hY3Rpdml0aWVzJzogYWN0aXZpdGllc0NvbXBvbmVudCxcbiAgICAgICAgICAgICd2LWZvcmdlbic6IGZvcmdlbkNvbXBvbmVudFxuICAgICAgICB9XG5cbiAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICAgIC8qIOmhtumDqOWIhuexuyAqL1xuICAgICAgICAgICAgdGFiczogW3tcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+aOqOiNkCdcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+ajrueptuWggidcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+a0u+WKqCdcbiAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgYWN0aXZlSW5kZXg6IDAsXG4gICAgICAgICAgICBzbGlkZXJXaWR0aDogOTMuNzVcbiAgICAgICAgfVxuXG4gICAgICAgIG1ldGhvZHMgPSB7XG4gICAgICAgICAgICBjaGFuZ2VBY3RpdmVJbmRleChhY3RpdmVJbmRleCkge1xuICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlSW5kZXggPSBwYXJzZUludChhY3RpdmVJbmRleClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiJdfQ==