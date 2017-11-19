'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

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
            moment: {}
        }, _this.methods = {
            onReady: function onReady() {
                console.log(this.moment);
            }
        }, _this.data = {
            icons: {
                upvote: '../../modules/images/praise.png',
                upvote_fill: '../../modules/images/praise_fill.png',
                like: '../../modules/images/like.png',
                like_fill: '../../modules/images/like_fill.png',
                message: '../../modules/images/message.png',
                message_fill: '../../modules/images/message_fill.png'
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return Index;
}(_wepy2.default.component);

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vbWVudC5qcyJdLCJuYW1lcyI6WyJJbmRleCIsInByb3BzIiwibW9tZW50IiwibWV0aG9kcyIsIm9uUmVhZHkiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsImljb25zIiwidXB2b3RlIiwidXB2b3RlX2ZpbGwiLCJsaWtlIiwibGlrZV9maWxsIiwibWVzc2FnZSIsIm1lc3NhZ2VfZmlsbCIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNJOzs7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O3dMQUNqQkMsSyxHQUFRO0FBQ0pDLG9CQUFRO0FBREosUyxRQUlSQyxPLEdBQVU7QUFDTkMsbUJBRE0scUJBQ0s7QUFDUEMsd0JBQVFDLEdBQVIsQ0FBWSxLQUFLSixNQUFqQjtBQUNIO0FBSEssUyxRQU1WSyxJLEdBQU87QUFDSEMsbUJBQU87QUFDSEMsd0JBQVEsaUNBREw7QUFFSEMsNkJBQWEsc0NBRlY7QUFHSEMsc0JBQU0sK0JBSEg7QUFJSEMsMkJBQVcsb0NBSlI7QUFLSEMseUJBQVMsa0NBTE47QUFNSEMsOEJBQWM7QUFOWDtBQURKLFM7Ozs7RUFYd0IsZUFBS0MsUzs7a0JBQW5CZixLIiwiZmlsZSI6Im1vbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcbiAgICAgICAgcHJvcHMgPSB7XG4gICAgICAgICAgICBtb21lbnQ6IHt9XG4gICAgICAgIH1cblxuICAgICAgICBtZXRob2RzID0ge1xuICAgICAgICAgICAgb25SZWFkeSAoKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5tb21lbnQpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBkYXRhID0ge1xuICAgICAgICAgICAgaWNvbnM6IHtcbiAgICAgICAgICAgICAgICB1cHZvdGU6ICcuLi8uLi9tb2R1bGVzL2ltYWdlcy9wcmFpc2UucG5nJyxcbiAgICAgICAgICAgICAgICB1cHZvdGVfZmlsbDogJy4uLy4uL21vZHVsZXMvaW1hZ2VzL3ByYWlzZV9maWxsLnBuZycsXG4gICAgICAgICAgICAgICAgbGlrZTogJy4uLy4uL21vZHVsZXMvaW1hZ2VzL2xpa2UucG5nJyxcbiAgICAgICAgICAgICAgICBsaWtlX2ZpbGw6ICcuLi8uLi9tb2R1bGVzL2ltYWdlcy9saWtlX2ZpbGwucG5nJyxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAnLi4vLi4vbW9kdWxlcy9pbWFnZXMvbWVzc2FnZS5wbmcnLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2VfZmlsbDogJy4uLy4uL21vZHVsZXMvaW1hZ2VzL21lc3NhZ2VfZmlsbC5wbmcnXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4iXX0=