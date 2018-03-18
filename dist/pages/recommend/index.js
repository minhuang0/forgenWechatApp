'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _wxParse = require('./../../libs/wxParse/wxParse.js');

var _wxParse2 = _interopRequireDefault(_wxParse);

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

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
            navigationBarTitleText: '文章'
        }, _this.data = {
            item: {},
            userInfo: {}
        }, _this.methods = {
            renderPost: function renderPost(post) {
                post.targetsLength = post.targets.length;
                post.commentsLength = post.comments.length;
                var userInfo = Object.assign({
                    nickName: '小森',
                    avatarUrl: 'http://static.htxq.net/UploadFiles/headimg/20160721142529242.jpg'
                }, post.user || {});
                return [post, userInfo];
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Index, [{
        key: 'onLoad',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(options) {
                var data, renderData;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return (0, _fetch.getFetch)('/posts/' + (options.id || 1));

                            case 2:
                                data = _context.sent;
                                renderData = this.methods.renderPost(data.post);

                                this.item = renderData[0];
                                this.userInfo = renderData[1];
                                this.$apply();
                                _wxParse2.default.wxParse('article', 'html', this.item.content, this, 0);
                                _wepy2.default.setNavigationBarTitle({
                                    title: this.item.title
                                });

                            case 9:
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


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/recommend/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJpdGVtIiwidXNlckluZm8iLCJtZXRob2RzIiwicmVuZGVyUG9zdCIsInBvc3QiLCJ0YXJnZXRzTGVuZ3RoIiwidGFyZ2V0cyIsImxlbmd0aCIsImNvbW1lbnRzTGVuZ3RoIiwiY29tbWVudHMiLCJPYmplY3QiLCJhc3NpZ24iLCJuaWNrTmFtZSIsImF2YXRhclVybCIsInVzZXIiLCJvcHRpb25zIiwiaWQiLCJyZW5kZXJEYXRhIiwiJGFwcGx5Iiwid3hQYXJzZSIsImNvbnRlbnQiLCJzZXROYXZpZ2F0aW9uQmFyVGl0bGUiLCJ0aXRsZSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNJOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7Ozt3TEFDakJDLE0sR0FBUztBQUNMQyxvQ0FBd0I7QUFEbkIsUyxRQUlUQyxJLEdBQU87QUFDSEMsa0JBQU0sRUFESDtBQUVIQyxzQkFBVTtBQUZQLFMsUUFLUEMsTyxHQUFVO0FBQ05DLHNCQURNLHNCQUNNQyxJQUROLEVBQ1k7QUFDZEEscUJBQUtDLGFBQUwsR0FBcUJELEtBQUtFLE9BQUwsQ0FBYUMsTUFBbEM7QUFDQUgscUJBQUtJLGNBQUwsR0FBc0JKLEtBQUtLLFFBQUwsQ0FBY0YsTUFBcEM7QUFDQSxvQkFBTU4sV0FBV1MsT0FBT0MsTUFBUCxDQUFjO0FBQzNCQyw4QkFBVSxJQURpQjtBQUUzQkMsK0JBQVc7QUFGZ0IsaUJBQWQsRUFHZFQsS0FBS1UsSUFBTCxJQUFhLEVBSEMsQ0FBakI7QUFJQSx1QkFBTyxDQUFDVixJQUFELEVBQU9ILFFBQVAsQ0FBUDtBQUNIO0FBVEssUzs7Ozs7O2lHQVlJYyxPOzs7Ozs7O3VDQUNTLGtDQUFtQkEsUUFBUUMsRUFBUixJQUFjLENBQWpDLEU7OztBQUFiakIsb0M7QUFDQWtCLDBDLEdBQWEsS0FBS2YsT0FBTCxDQUFhQyxVQUFiLENBQXdCSixLQUFLSyxJQUE3QixDOztBQUNuQixxQ0FBS0osSUFBTCxHQUFZaUIsV0FBVyxDQUFYLENBQVo7QUFDQSxxQ0FBS2hCLFFBQUwsR0FBZ0JnQixXQUFXLENBQVgsQ0FBaEI7QUFDQSxxQ0FBS0MsTUFBTDtBQUNBLGtEQUFRQyxPQUFSLENBQWdCLFNBQWhCLEVBQTJCLE1BQTNCLEVBQW1DLEtBQUtuQixJQUFMLENBQVVvQixPQUE3QyxFQUFzRCxJQUF0RCxFQUE0RCxDQUE1RDtBQUNBLCtDQUFLQyxxQkFBTCxDQUEyQjtBQUN2QkMsMkNBQU8sS0FBS3RCLElBQUwsQ0FBVXNCO0FBRE0saUNBQTNCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBN0IyQixlQUFLQyxJOztrQkFBbkIzQixLIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgICBpbXBvcnQgV3hQYXJzZSBmcm9tICcuLi8uLi9saWJzL3d4UGFyc2Uvd3hQYXJzZS5qcydcbiAgICBpbXBvcnQgeyBnZXRGZXRjaCB9IGZyb20gJ0AvbW9kdWxlcy9jb21tb24vZmV0Y2gnXG5cbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgICAgIGNvbmZpZyA9IHtcbiAgICAgICAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfmlofnq6AnXG4gICAgICAgIH1cblxuICAgICAgICBkYXRhID0ge1xuICAgICAgICAgICAgaXRlbToge30sXG4gICAgICAgICAgICB1c2VySW5mbzoge31cbiAgICAgICAgfVxuXG4gICAgICAgIG1ldGhvZHMgPSB7XG4gICAgICAgICAgICByZW5kZXJQb3N0IChwb3N0KSB7XG4gICAgICAgICAgICAgICAgcG9zdC50YXJnZXRzTGVuZ3RoID0gcG9zdC50YXJnZXRzLmxlbmd0aFxuICAgICAgICAgICAgICAgIHBvc3QuY29tbWVudHNMZW5ndGggPSBwb3N0LmNvbW1lbnRzLmxlbmd0aFxuICAgICAgICAgICAgICAgIGNvbnN0IHVzZXJJbmZvID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICAgICAgICAgIG5pY2tOYW1lOiAn5bCP5qOuJyxcbiAgICAgICAgICAgICAgICAgICAgYXZhdGFyVXJsOiAnaHR0cDovL3N0YXRpYy5odHhxLm5ldC9VcGxvYWRGaWxlcy9oZWFkaW1nLzIwMTYwNzIxMTQyNTI5MjQyLmpwZydcbiAgICAgICAgICAgICAgICB9LCBwb3N0LnVzZXIgfHwge30pXG4gICAgICAgICAgICAgICAgcmV0dXJuIFtwb3N0LCB1c2VySW5mb11cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGFzeW5jIG9uTG9hZCAob3B0aW9ucykge1xuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGdldEZldGNoKGAvcG9zdHMvJHtvcHRpb25zLmlkIHx8IDF9YClcbiAgICAgICAgICAgIGNvbnN0IHJlbmRlckRhdGEgPSB0aGlzLm1ldGhvZHMucmVuZGVyUG9zdChkYXRhLnBvc3QpXG4gICAgICAgICAgICB0aGlzLml0ZW0gPSByZW5kZXJEYXRhWzBdXG4gICAgICAgICAgICB0aGlzLnVzZXJJbmZvID0gcmVuZGVyRGF0YVsxXVxuICAgICAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgICAgICAgV3hQYXJzZS53eFBhcnNlKCdhcnRpY2xlJywgJ2h0bWwnLCB0aGlzLml0ZW0uY29udGVudCwgdGhpcywgMClcbiAgICAgICAgICAgIHdlcHkuc2V0TmF2aWdhdGlvbkJhclRpdGxlKHtcbiAgICAgICAgICAgICAgICB0aXRsZTogdGhpcy5pdGVtLnRpdGxlXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuIl19