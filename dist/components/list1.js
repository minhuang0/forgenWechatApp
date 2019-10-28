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

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        _classCallCheck(this, List);

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = List.__proto__ || Object.getPrototypeOf(List)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
            list: [{
                id: '0',
                title: 'loading'
            }]
        }, _this.events = {
            'index-broadcast': function indexBroadcast() {
                // let $event = args[args.length - 1]
            }
        }, _this.methods = {
            tap: function tap() {},
            add: function add() {
                var len = this.list.length;
                this.list.push({ id: len + 1, title: 'title_' + len });
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(List, [{
        key: 'onLoad',
        value: function onLoad() {}
    }]);

    return List;
}(_wepy2.default.component);

exports.default = List;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3QxLmpzIl0sIm5hbWVzIjpbIkxpc3QiLCJkYXRhIiwibGlzdCIsImlkIiwidGl0bGUiLCJldmVudHMiLCJtZXRob2RzIiwidGFwIiwiYWRkIiwibGVuIiwibGVuZ3RoIiwicHVzaCIsIndlcHkiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNJOzs7Ozs7Ozs7Ozs7SUFFcUJBLEk7Ozs7Ozs7Ozs7Ozs7O3NMQUNqQkMsSSxHQUFPO0FBQ0hDLGtCQUFNLENBQ0Y7QUFDSUMsb0JBQUksR0FEUjtBQUVJQyx1QkFBTztBQUZYLGFBREU7QUFESCxTLFFBU1BDLE0sR0FBUztBQUNMLCtCQUFtQiwwQkFBYTtBQUM1QjtBQUNIO0FBSEksUyxRQU1UQyxPLEdBQVU7QUFDTkMsZUFETSxpQkFDQSxDQUNMLENBRks7QUFHTkMsZUFITSxpQkFHQTtBQUNGLG9CQUFJQyxNQUFNLEtBQUtQLElBQUwsQ0FBVVEsTUFBcEI7QUFDQSxxQkFBS1IsSUFBTCxDQUFVUyxJQUFWLENBQWUsRUFBRVIsSUFBSU0sTUFBTSxDQUFaLEVBQWVMLE9BQU8sV0FBV0ssR0FBakMsRUFBZjtBQUNIO0FBTkssUzs7Ozs7aUNBU0QsQ0FDUjs7OztFQTFCNkJHLGVBQUtDLFM7O2tCQUFsQmIsSSIsImZpbGUiOiJsaXN0MS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBMaXN0IGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuICAgICAgICBkYXRhID0ge1xuICAgICAgICAgICAgbGlzdDogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6ICcwJyxcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdsb2FkaW5nJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgfVxuXG4gICAgICAgIGV2ZW50cyA9IHtcbiAgICAgICAgICAgICdpbmRleC1icm9hZGNhc3QnOiAoLi4uYXJncykgPT4ge1xuICAgICAgICAgICAgICAgIC8vIGxldCAkZXZlbnQgPSBhcmdzW2FyZ3MubGVuZ3RoIC0gMV1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIG1ldGhvZHMgPSB7XG4gICAgICAgICAgICB0YXAoKSB7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYWRkKCkge1xuICAgICAgICAgICAgICAgIGxldCBsZW4gPSB0aGlzLmxpc3QubGVuZ3RoXG4gICAgICAgICAgICAgICAgdGhpcy5saXN0LnB1c2goeyBpZDogbGVuICsgMSwgdGl0bGU6ICd0aXRsZV8nICsgbGVuIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBvbkxvYWQoKSB7XG4gICAgICAgIH1cbiAgICB9XG4iXX0=