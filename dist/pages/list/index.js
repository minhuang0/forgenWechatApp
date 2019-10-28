'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _title = require('./../../components/title.js');

var _title2 = _interopRequireDefault(_title);

var _list = require('./../../components/list.js');

var _list2 = _interopRequireDefault(_list);

var _fetch = require('./../../modules/common/fetch.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

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

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
            list: [],
            title: ''
        }, _this.$repeat = {}, _this.$props = { "v-title": { "xmlns:v-bind": "", "v-bind:title.sync": "title" }, "v-list": { "class": "list", "v-bind:list.sync": "list", "xmlns:v-on": "" } }, _this.$events = { "v-list": { "v-on:itemClick": "selectList" } }, _this.components = {
            'v-title': _title2.default,
            'v-list': _list2.default
        }, _this.methods = {
            selectList: function selectList(e) {
                _wepy2.default.navigateTo({
                    url: '../../pages/recommend/index?id=' + e.currentTarget.dataset.id
                });
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Index, [{
        key: 'onLoad',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(options) {
                var response;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return (0, _fetch.getFetch)('/topic/index/' + options.id);

                            case 2:
                                response = _context.sent;

                                this.list = response.posts.map(function (item) {
                                    return {
                                        id: item.id,
                                        tag: options.title,
                                        cover: item.imgUrl,
                                        title: item.title
                                    };
                                });
                                this.title = options.title;
                                this.$apply();
                                _wepy2.default.setNavigationBarTitle({
                                    title: this.title
                                });

                            case 7:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function onLoad(_x) {
                return _ref2.apply(this, arguments);
            }

            return onLoad;
        }()
    }]);

    return Index;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/list/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiZGF0YSIsImxpc3QiLCJ0aXRsZSIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsInRpdGxlQ29tcG9uZW50IiwibGlzdENvbXBvbmVudCIsIm1ldGhvZHMiLCJzZWxlY3RMaXN0IiwiZSIsIndlcHkiLCJuYXZpZ2F0ZVRvIiwidXJsIiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJpZCIsIm9wdGlvbnMiLCJyZXNwb25zZSIsInBvc3RzIiwibWFwIiwiaXRlbSIsInRhZyIsImNvdmVyIiwiaW1nVXJsIiwiJGFwcGx5Iiwic2V0TmF2aWdhdGlvbkJhclRpdGxlIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0k7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7d0xBQ2pCQyxJLEdBQU87QUFDSEMsa0JBQU0sRUFESDtBQUVIQyxtQkFBTztBQUZKLFMsUUFLUkMsTyxHQUFVLEUsUUFDakJDLE0sR0FBUyxFQUFDLFdBQVUsRUFBQyxnQkFBZSxFQUFoQixFQUFtQixxQkFBb0IsT0FBdkMsRUFBWCxFQUEyRCxVQUFTLEVBQUMsU0FBUSxNQUFULEVBQWdCLG9CQUFtQixNQUFuQyxFQUEwQyxjQUFhLEVBQXZELEVBQXBFLEUsUUFDVEMsTyxHQUFVLEVBQUMsVUFBUyxFQUFDLGtCQUFpQixZQUFsQixFQUFWLEUsUUFDVEMsVSxHQUFhO0FBQ0YsdUJBQVdDLGVBRFQ7QUFFRixzQkFBVUM7QUFGUixTLFFBS05DLE8sR0FBVTtBQUNOQyxzQkFETSxzQkFDS0MsQ0FETCxFQUNRO0FBQ1ZDLCtCQUFLQyxVQUFMLENBQWdCO0FBQ1pDLDZEQUF1Q0gsRUFBRUksYUFBRixDQUFnQkMsT0FBaEIsQ0FBd0JDO0FBRG5ELGlCQUFoQjtBQUdIO0FBTEssUzs7Ozs7O2lHQU9HQyxPOzs7Ozs7O3VDQUNjLHVDQUF5QkEsUUFBUUQsRUFBakMsQzs7O0FBQWpCRSx3Qzs7QUFDTixxQ0FBS2xCLElBQUwsR0FBWWtCLFNBQVNDLEtBQVQsQ0FBZUMsR0FBZixDQUFtQixnQkFBUTtBQUNuQywyQ0FBTztBQUNISiw0Q0FBSUssS0FBS0wsRUFETjtBQUVITSw2Q0FBS0wsUUFBUWhCLEtBRlY7QUFHSHNCLCtDQUFPRixLQUFLRyxNQUhUO0FBSUh2QiwrQ0FBT29CLEtBQUtwQjtBQUpULHFDQUFQO0FBTUgsaUNBUFcsQ0FBWjtBQVFBLHFDQUFLQSxLQUFMLEdBQWFnQixRQUFRaEIsS0FBckI7QUFDQSxxQ0FBS3dCLE1BQUw7QUFDQWQsK0NBQUtlLHFCQUFMLENBQTJCO0FBQ3ZCekIsMkNBQU8sS0FBS0E7QUFEVyxpQ0FBM0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFqQzJCVSxlQUFLZ0IsSTs7a0JBQW5CN0IsSyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gICAgaW1wb3J0IHRpdGxlQ29tcG9uZW50IGZyb20gJ0AvY29tcG9uZW50cy90aXRsZSdcbiAgICBpbXBvcnQgbGlzdENvbXBvbmVudCBmcm9tICdAL2NvbXBvbmVudHMvbGlzdCdcbiAgICBpbXBvcnQgeyBnZXRGZXRjaCB9IGZyb20gJ0AvbW9kdWxlcy9jb21tb24vZmV0Y2gnXG5cbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgICAgIGRhdGEgPSB7XG4gICAgICAgICAgICBsaXN0OiBbXSxcbiAgICAgICAgICAgIHRpdGxlOiAnJ1xuICAgICAgICB9XG5cbiAgICAgICAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcInYtdGl0bGVcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOnRpdGxlLnN5bmNcIjpcInRpdGxlXCJ9LFwidi1saXN0XCI6e1wiY2xhc3NcIjpcImxpc3RcIixcInYtYmluZDpsaXN0LnN5bmNcIjpcImxpc3RcIixcInhtbG5zOnYtb25cIjpcIlwifX07XHJcbiRldmVudHMgPSB7XCJ2LWxpc3RcIjp7XCJ2LW9uOml0ZW1DbGlja1wiOlwic2VsZWN0TGlzdFwifX07XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgICAgICAgJ3YtdGl0bGUnOiB0aXRsZUNvbXBvbmVudCxcbiAgICAgICAgICAgICd2LWxpc3QnOiBsaXN0Q29tcG9uZW50XG4gICAgICAgIH1cblxuICAgICAgICBtZXRob2RzID0ge1xuICAgICAgICAgICAgc2VsZWN0TGlzdChlKSB7XG4gICAgICAgICAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBgLi4vLi4vcGFnZXMvcmVjb21tZW5kL2luZGV4P2lkPSR7ZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaWR9YFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYXN5bmMgb25Mb2FkKG9wdGlvbnMpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZ2V0RmV0Y2goYC90b3BpYy9pbmRleC8ke29wdGlvbnMuaWR9YClcbiAgICAgICAgICAgIHRoaXMubGlzdCA9IHJlc3BvbnNlLnBvc3RzLm1hcChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBpZDogaXRlbS5pZCxcbiAgICAgICAgICAgICAgICAgICAgdGFnOiBvcHRpb25zLnRpdGxlLFxuICAgICAgICAgICAgICAgICAgICBjb3ZlcjogaXRlbS5pbWdVcmwsXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBpdGVtLnRpdGxlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHRoaXMudGl0bGUgPSBvcHRpb25zLnRpdGxlXG4gICAgICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICAgICAgICB3ZXB5LnNldE5hdmlnYXRpb25CYXJUaXRsZSh7XG4gICAgICAgICAgICAgICAgdGl0bGU6IHRoaXMudGl0bGVcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG4iXX0=