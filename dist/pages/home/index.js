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

var _moments = require('./moments.js');

var _moments2 = _interopRequireDefault(_moments);

var _activity = require('./activity.js');

var _activity2 = _interopRequireDefault(_activity);

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
        }, _this.$repeat = {}, _this.$props = { "v-navbar": { "xmlns:v-bind": "", "v-bind:alldata.once": "tabs", "v-bind:activeIndex.sync": "activeIndex", "v-bind:sliderWidth.once": "sliderWidth", "xmlns:v-on": "" }, "v-recommend": { "v-bind:class.once": "{ hidden: activeIndex !== 0}" }, "v-moments": { "v-bind:class.once": "{ hidden: activeIndex !== 1}" }, "v-activities": { "v-bind:class.once": "{ hidden: activeIndex !== 2}" } }, _this.$events = { "v-navbar": { "v-on:changeActiveIndex": "changeActiveIndex" } }, _this.components = {
            'v-navbar': _navbar2.default,
            'v-recommend': _recommend2.default,
            'v-moments': _moments2.default,
            'v-activities': _activity2.default
        }, _this.data = {
            /* 顶部分类 */
            tabs: [{
                title: '推荐'
            }, {
                title: '圈子'
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsImRhdGEiLCJ0YWJzIiwidGl0bGUiLCJhY3RpdmVJbmRleCIsInNsaWRlcldpZHRoIiwibWV0aG9kcyIsImNoYW5nZUFjdGl2ZUluZGV4IiwicGFyc2VJbnQiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0k7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7Ozt3TEFDakJDLE0sR0FBUztBQUNMQyxvQ0FBd0I7QUFEbkIsUyxRQUlWQyxPLEdBQVUsRSxRQUNqQkMsTSxHQUFTLEVBQUMsWUFBVyxFQUFDLGdCQUFlLEVBQWhCLEVBQW1CLHVCQUFzQixNQUF6QyxFQUFnRCwyQkFBMEIsYUFBMUUsRUFBd0YsMkJBQTBCLGFBQWxILEVBQWdJLGNBQWEsRUFBN0ksRUFBWixFQUE2SixlQUFjLEVBQUMscUJBQW9CLDhCQUFyQixFQUEzSyxFQUFnTyxhQUFZLEVBQUMscUJBQW9CLDhCQUFyQixFQUE1TyxFQUFpUyxnQkFBZSxFQUFDLHFCQUFvQiw4QkFBckIsRUFBaFQsRSxRQUNUQyxPLEdBQVUsRUFBQyxZQUFXLEVBQUMsMEJBQXlCLG1CQUExQixFQUFaLEUsUUFDVEMsVSxHQUFhO0FBQ0Ysd0NBREU7QUFFRiw4Q0FGRTtBQUdGLDBDQUhFO0FBSUY7QUFKRSxTLFFBT05DLEksR0FBTztBQUNIO0FBQ0FDLGtCQUFNLENBQUM7QUFDSEMsdUJBQU87QUFESixhQUFELEVBRUg7QUFDQ0EsdUJBQU87QUFEUixhQUZHLEVBSUg7QUFDQ0EsdUJBQU87QUFEUixhQUpHLENBRkg7QUFTSEMseUJBQWEsQ0FUVjtBQVVIQyx5QkFBYTtBQVZWLFMsUUFhUEMsTyxHQUFVO0FBQ05DLDZCQURNLDZCQUNZSCxXQURaLEVBQ3lCO0FBQzNCLHFCQUFLQSxXQUFMLEdBQW1CSSxTQUFTSixXQUFULENBQW5CO0FBQ0g7QUFISyxTOzs7O0VBNUJxQixlQUFLSyxJOztrQkFBbkJmLEsiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICAgIGltcG9ydCBuYXZiYXJDb21wb25lbnQgZnJvbSAnQC9jb21wb25lbnRzL25hdmJhcidcbiAgICBpbXBvcnQgcmVjb21tZW5kQ29tcG9uZW50IGZyb20gJy4vcmVjb21tZW5kJ1xuICAgIGltcG9ydCBtb21lbnRzQ29tcG9uZW50IGZyb20gJy4vbW9tZW50cydcbiAgICBpbXBvcnQgYWN0aXZpdGllc0NvbXBvbmVudCBmcm9tICcuL2FjdGl2aXR5J1xuXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgICAgICBjb25maWcgPSB7XG4gICAgICAgICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5qOu5p6X6aOOJ1xuICAgICAgICB9XG5cbiAgICAgICAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcInYtbmF2YmFyXCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDphbGxkYXRhLm9uY2VcIjpcInRhYnNcIixcInYtYmluZDphY3RpdmVJbmRleC5zeW5jXCI6XCJhY3RpdmVJbmRleFwiLFwidi1iaW5kOnNsaWRlcldpZHRoLm9uY2VcIjpcInNsaWRlcldpZHRoXCIsXCJ4bWxuczp2LW9uXCI6XCJcIn0sXCJ2LXJlY29tbWVuZFwiOntcInYtYmluZDpjbGFzcy5vbmNlXCI6XCJ7IGhpZGRlbjogYWN0aXZlSW5kZXggIT09IDB9XCJ9LFwidi1tb21lbnRzXCI6e1widi1iaW5kOmNsYXNzLm9uY2VcIjpcInsgaGlkZGVuOiBhY3RpdmVJbmRleCAhPT0gMX1cIn0sXCJ2LWFjdGl2aXRpZXNcIjp7XCJ2LWJpbmQ6Y2xhc3Mub25jZVwiOlwieyBoaWRkZW46IGFjdGl2ZUluZGV4ICE9PSAyfVwifX07XHJcbiRldmVudHMgPSB7XCJ2LW5hdmJhclwiOntcInYtb246Y2hhbmdlQWN0aXZlSW5kZXhcIjpcImNoYW5nZUFjdGl2ZUluZGV4XCJ9fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICAgICAgICAndi1uYXZiYXInOiBuYXZiYXJDb21wb25lbnQsXG4gICAgICAgICAgICAndi1yZWNvbW1lbmQnOiByZWNvbW1lbmRDb21wb25lbnQsXG4gICAgICAgICAgICAndi1tb21lbnRzJzogbW9tZW50c0NvbXBvbmVudCxcbiAgICAgICAgICAgICd2LWFjdGl2aXRpZXMnOiBhY3Rpdml0aWVzQ29tcG9uZW50XG4gICAgICAgIH1cblxuICAgICAgICBkYXRhID0ge1xuICAgICAgICAgICAgLyog6aG26YOo5YiG57G7ICovXG4gICAgICAgICAgICB0YWJzOiBbe1xuICAgICAgICAgICAgICAgIHRpdGxlOiAn5o6o6I2QJ1xuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAn5ZyI5a2QJ1xuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAn5rS75YqoJ1xuICAgICAgICAgICAgfV0sXG4gICAgICAgICAgICBhY3RpdmVJbmRleDogMCxcbiAgICAgICAgICAgIHNsaWRlcldpZHRoOiA5My43NVxuICAgICAgICB9XG5cbiAgICAgICAgbWV0aG9kcyA9IHtcbiAgICAgICAgICAgIGNoYW5nZUFjdGl2ZUluZGV4KGFjdGl2ZUluZGV4KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVJbmRleCA9IHBhcnNlSW50KGFjdGl2ZUluZGV4KVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuIl19