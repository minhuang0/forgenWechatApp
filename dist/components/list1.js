'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var List = function (_wepy$component) {
    _inherits(List, _wepy$component);

    function List() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, List);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = List.__proto__ || Object.getPrototypeOf(List)).call.apply(_ref, [this].concat(args))), _this), _initialiseProps.call(_this), _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(List, [{
        key: 'onLoad',
        value: function onLoad() {}
    }]);

    return List;
}(_wepy2.default.component);

var _initialiseProps = function _initialiseProps() {
    var _this2 = this;

    this.data = {
        list: [{
            id: '0',
            title: 'loading'
        }]
    };
    this.events = {
        'index-broadcast': function indexBroadcast() {
            var _ref2;

            var $event = (_ref2 = arguments.length - 1, arguments.length <= _ref2 ? undefined : arguments[_ref2]);
            console.log(_this2.$name + ' receive ' + $event.name + ' from ' + $event.source.name);
        }
    };
    this.methods = {
        tap: function tap() {
            // this.num = this.num + 1
            console.log(this.$name + ' tap');
        },
        add: function add() {
            var len = this.list.length;
            this.list.push({ id: len + 1, title: 'title_' + len });
        }
    };
};

exports.default = List;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3QxLmpzIl0sIm5hbWVzIjpbIkxpc3QiLCJjb21wb25lbnQiLCJkYXRhIiwibGlzdCIsImlkIiwidGl0bGUiLCJldmVudHMiLCIkZXZlbnQiLCJsZW5ndGgiLCJjb25zb2xlIiwibG9nIiwiJG5hbWUiLCJuYW1lIiwic291cmNlIiwibWV0aG9kcyIsInRhcCIsImFkZCIsImxlbiIsInB1c2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNJOzs7Ozs7Ozs7Ozs7SUFFcUJBLEk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7aUNBNEJSLENBQ1I7Ozs7RUE3QjZCLGVBQUtDLFM7Ozs7O1NBQ25DQyxJLEdBQU87QUFDSEMsY0FBTSxDQUNGO0FBQ0lDLGdCQUFJLEdBRFI7QUFFSUMsbUJBQU87QUFGWCxTQURFO0FBREgsSztTQVNQQyxNLEdBQVM7QUFDTCwyQkFBbUIsMEJBQWE7QUFBQTs7QUFDNUIsZ0JBQUlDLGtCQUFjLFVBQUtDLE1BQUwsR0FBYyxDQUE1QiwyREFBSjtBQUNBQyxvQkFBUUMsR0FBUixDQUFlLE9BQUtDLEtBQXBCLGlCQUFxQ0osT0FBT0ssSUFBNUMsY0FBeURMLE9BQU9NLE1BQVAsQ0FBY0QsSUFBdkU7QUFDSDtBQUpJLEs7U0FPVEUsTyxHQUFVO0FBQ05DLFdBRE0saUJBQ0E7QUFDRjtBQUNBTixvQkFBUUMsR0FBUixDQUFZLEtBQUtDLEtBQUwsR0FBYSxNQUF6QjtBQUNILFNBSks7QUFLTkssV0FMTSxpQkFLQTtBQUNGLGdCQUFJQyxNQUFNLEtBQUtkLElBQUwsQ0FBVUssTUFBcEI7QUFDQSxpQkFBS0wsSUFBTCxDQUFVZSxJQUFWLENBQWUsRUFBRWQsSUFBSWEsTUFBTSxDQUFaLEVBQWVaLE9BQU8sV0FBV1ksR0FBakMsRUFBZjtBQUNIO0FBUkssSzs7O2tCQWpCT2pCLEkiLCJmaWxlIjoibGlzdDEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGlzdCBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcbiAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICAgIGxpc3Q6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiAnMCcsXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnbG9hZGluZydcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgIH1cblxuICAgICAgICBldmVudHMgPSB7XG4gICAgICAgICAgICAnaW5kZXgtYnJvYWRjYXN0JzogKC4uLmFyZ3MpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgJGV2ZW50ID0gYXJnc1thcmdzLmxlbmd0aCAtIDFdXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYCR7dGhpcy4kbmFtZX0gcmVjZWl2ZSAkeyRldmVudC5uYW1lfSBmcm9tICR7JGV2ZW50LnNvdXJjZS5uYW1lfWApXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBtZXRob2RzID0ge1xuICAgICAgICAgICAgdGFwKCkge1xuICAgICAgICAgICAgICAgIC8vIHRoaXMubnVtID0gdGhpcy5udW0gKyAxXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy4kbmFtZSArICcgdGFwJylcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhZGQoKSB7XG4gICAgICAgICAgICAgICAgbGV0IGxlbiA9IHRoaXMubGlzdC5sZW5ndGhcbiAgICAgICAgICAgICAgICB0aGlzLmxpc3QucHVzaCh7IGlkOiBsZW4gKyAxLCB0aXRsZTogJ3RpdGxlXycgKyBsZW4gfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIG9uTG9hZCgpIHtcbiAgICAgICAgfVxuICAgIH1cbiJdfQ==