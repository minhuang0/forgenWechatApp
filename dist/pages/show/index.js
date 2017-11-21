'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _title = require('./../../components/title.js');

var _title2 = _interopRequireDefault(_title);

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
        }, _this.$repeat = {}, _this.$props = { "v-title": { "title": "作品投票" }, "v-title1": { "title": "今日红人" }, "v-title2": { "title": "精选作品" } }, _this.$events = {}, _this.components = {
            'v-title': _title2.default,
            'v-title1': _title2.default,
            'v-title2': _title2.default
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return Index;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/show/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDSTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O3dMQUNqQkMsTSxHQUFTO0FBQ0xDLG9DQUF3QjtBQURuQixTLFFBSVZDLE8sR0FBVSxFLFFBQ2pCQyxNLEdBQVMsRUFBQyxXQUFVLEVBQUMsU0FBUSxNQUFULEVBQVgsRUFBNEIsWUFBVyxFQUFDLFNBQVEsTUFBVCxFQUF2QyxFQUF3RCxZQUFXLEVBQUMsU0FBUSxNQUFULEVBQW5FLEUsUUFDVEMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ0Ysc0NBREU7QUFFRix1Q0FGRTtBQUdGO0FBSEUsUzs7OztFQVJ5QixlQUFLQyxJOztrQkFBbkJQLEsiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICAgIGltcG9ydCB0aXRsZUNvbXBvbmVudCBmcm9tICdAL2NvbXBvbmVudHMvdGl0bGUnXG5cbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgICAgIGNvbmZpZyA9IHtcbiAgICAgICAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfmo67mnpfpo44nXG4gICAgICAgIH1cblxuICAgICAgICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1widi10aXRsZVwiOntcInRpdGxlXCI6XCLkvZzlk4HmipXnpahcIn0sXCJ2LXRpdGxlMVwiOntcInRpdGxlXCI6XCLku4rml6XnuqLkurpcIn0sXCJ2LXRpdGxlMlwiOntcInRpdGxlXCI6XCLnsr7pgInkvZzlk4FcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgICAgICAgJ3YtdGl0bGUnOiB0aXRsZUNvbXBvbmVudCxcbiAgICAgICAgICAgICd2LXRpdGxlMSc6IHRpdGxlQ29tcG9uZW50LFxuICAgICAgICAgICAgJ3YtdGl0bGUyJzogdGl0bGVDb21wb25lbnRcbiAgICAgICAgfVxuICAgIH1cbiJdfQ==