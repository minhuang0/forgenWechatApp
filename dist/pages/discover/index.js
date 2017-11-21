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

var _choice = require('./choice.js');

var _choice2 = _interopRequireDefault(_choice);

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
        }, _this.$repeat = {}, _this.$props = { "v-navbar": { "xmlns:v-bind": "", "v-bind:alldata.once": "tabs", "v-bind:activeIndex.sync": "activeIndex", "v-bind:sliderWidth.once": "sliderWidth", "xmlns:v-on": "" }, "v-moments": { "v-bind:class.once": "{ hidden: activeIndex !== 1}" }, "v-choice": { "v-bind:class.once": "{ hidden: activeIndex !== 0}" } }, _this.$events = { "v-navbar": { "v-on:changeActiveIndex": "changeActiveIndex" } }, _this.components = {
            'v-navbar': _navbar2.default,
            'v-moments': _moments2.default,
            'v-choice': _choice2.default
        }, _this.data = {
            /* 顶部分类 */
            tabs: [{
                title: '精选'
            }, {
                title: '圈子'
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


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/discover/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsImRhdGEiLCJ0YWJzIiwidGl0bGUiLCJhY3RpdmVJbmRleCIsInNsaWRlcldpZHRoIiwibWV0aG9kcyIsImNoYW5nZUFjdGl2ZUluZGV4IiwicGFyc2VJbnQiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0k7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7d0xBQ2pCQyxNLEdBQVM7QUFDTEMsb0NBQXdCO0FBRG5CLFMsUUFJVkMsTyxHQUFVLEUsUUFDakJDLE0sR0FBUyxFQUFDLFlBQVcsRUFBQyxnQkFBZSxFQUFoQixFQUFtQix1QkFBc0IsTUFBekMsRUFBZ0QsMkJBQTBCLGFBQTFFLEVBQXdGLDJCQUEwQixhQUFsSCxFQUFnSSxjQUFhLEVBQTdJLEVBQVosRUFBNkosYUFBWSxFQUFDLHFCQUFvQiw4QkFBckIsRUFBekssRUFBOE4sWUFBVyxFQUFDLHFCQUFvQiw4QkFBckIsRUFBek8sRSxRQUNUQyxPLEdBQVUsRUFBQyxZQUFXLEVBQUMsMEJBQXlCLG1CQUExQixFQUFaLEUsUUFDVEMsVSxHQUFhO0FBQ0Ysd0NBREU7QUFFRiwwQ0FGRTtBQUdGO0FBSEUsUyxRQU1OQyxJLEdBQU87QUFDSDtBQUNBQyxrQkFBTSxDQUFDO0FBQ0hDLHVCQUFPO0FBREosYUFBRCxFQUVIO0FBQ0NBLHVCQUFPO0FBRFIsYUFGRyxDQUZIO0FBT0hDLHlCQUFhLENBUFY7QUFRSEMseUJBQWE7QUFSVixTLFFBV1BDLE8sR0FBVTtBQUNOQyw2QkFETSw2QkFDWUgsV0FEWixFQUN5QjtBQUMzQixxQkFBS0EsV0FBTCxHQUFtQkksU0FBU0osV0FBVCxDQUFuQjtBQUNIO0FBSEssUzs7OztFQXpCcUIsZUFBS0ssSTs7a0JBQW5CZixLIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgICBpbXBvcnQgbmF2YmFyQ29tcG9uZW50IGZyb20gJ0AvY29tcG9uZW50cy9uYXZiYXInXG4gICAgaW1wb3J0IG1vbWVudHNDb21wb25lbnQgZnJvbSAnLi9tb21lbnRzJ1xuICAgIGltcG9ydCBjaG9pY2VDb21wb25lbnQgZnJvbSAnLi9jaG9pY2UnXG5cbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgICAgIGNvbmZpZyA9IHtcbiAgICAgICAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfmo67mnpfpo44nXG4gICAgICAgIH1cblxuICAgICAgICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1widi1uYXZiYXJcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOmFsbGRhdGEub25jZVwiOlwidGFic1wiLFwidi1iaW5kOmFjdGl2ZUluZGV4LnN5bmNcIjpcImFjdGl2ZUluZGV4XCIsXCJ2LWJpbmQ6c2xpZGVyV2lkdGgub25jZVwiOlwic2xpZGVyV2lkdGhcIixcInhtbG5zOnYtb25cIjpcIlwifSxcInYtbW9tZW50c1wiOntcInYtYmluZDpjbGFzcy5vbmNlXCI6XCJ7IGhpZGRlbjogYWN0aXZlSW5kZXggIT09IDF9XCJ9LFwidi1jaG9pY2VcIjp7XCJ2LWJpbmQ6Y2xhc3Mub25jZVwiOlwieyBoaWRkZW46IGFjdGl2ZUluZGV4ICE9PSAwfVwifX07XHJcbiRldmVudHMgPSB7XCJ2LW5hdmJhclwiOntcInYtb246Y2hhbmdlQWN0aXZlSW5kZXhcIjpcImNoYW5nZUFjdGl2ZUluZGV4XCJ9fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICAgICAgICAndi1uYXZiYXInOiBuYXZiYXJDb21wb25lbnQsXG4gICAgICAgICAgICAndi1tb21lbnRzJzogbW9tZW50c0NvbXBvbmVudCxcbiAgICAgICAgICAgICd2LWNob2ljZSc6IGNob2ljZUNvbXBvbmVudFxuICAgICAgICB9XG5cbiAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICAgIC8qIOmhtumDqOWIhuexuyAqL1xuICAgICAgICAgICAgdGFiczogW3tcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+eyvumAiSdcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+WciOWtkCdcbiAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgYWN0aXZlSW5kZXg6IDAsXG4gICAgICAgICAgICBzbGlkZXJXaWR0aDogOTMuNzVcbiAgICAgICAgfVxuXG4gICAgICAgIG1ldGhvZHMgPSB7XG4gICAgICAgICAgICBjaGFuZ2VBY3RpdmVJbmRleChhY3RpdmVJbmRleCkge1xuICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlSW5kZXggPSBwYXJzZUludChhY3RpdmVJbmRleClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiJdfQ==