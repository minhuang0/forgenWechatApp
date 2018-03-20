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

var _editor = require('./../../components/editor.js');

var _editor2 = _interopRequireDefault(_editor);

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
        }, _this.$repeat = {}, _this.$props = { "v-editor": { "xmlns:v-on": "" } }, _this.$events = { "v-editor": { "v-on:click": "comment" } }, _this.components = {
            'v-editor': _editor2.default
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
            },
            comment: function comment(data) {
                this.postComment(data);
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Index, [{
        key: 'postComment',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(data) {
                var rsp;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return (0, _fetch.postFetch)('/circles/comment', {
                                    data: {
                                        content: data,
                                        post_id: this.item.id
                                    },
                                    noAjax: true
                                });

                            case 2:
                                rsp = _context.sent;

                                console.log(rsp);

                            case 4:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function postComment(_x) {
                return _ref2.apply(this, arguments);
            }

            return postComment;
        }()
    }, {
        key: 'onLoad',
        value: function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(options) {
                var data, renderData;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _context2.next = 2;
                                return (0, _fetch.getFetch)('/posts/' + (options.id || 1));

                            case 2:
                                data = _context2.sent;
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
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function onLoad(_x2) {
                return _ref3.apply(this, arguments);
            }

            return onLoad;
        }()
    }]);

    return Index;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/recommend/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsImRhdGEiLCJpdGVtIiwidXNlckluZm8iLCJtZXRob2RzIiwicmVuZGVyUG9zdCIsInBvc3QiLCJ0YXJnZXRzTGVuZ3RoIiwidGFyZ2V0cyIsImxlbmd0aCIsImNvbW1lbnRzTGVuZ3RoIiwiY29tbWVudHMiLCJPYmplY3QiLCJhc3NpZ24iLCJuaWNrTmFtZSIsImF2YXRhclVybCIsInVzZXIiLCJjb21tZW50IiwicG9zdENvbW1lbnQiLCJjb250ZW50IiwicG9zdF9pZCIsImlkIiwibm9BamF4IiwicnNwIiwiY29uc29sZSIsImxvZyIsIm9wdGlvbnMiLCJyZW5kZXJEYXRhIiwiJGFwcGx5Iiwid3hQYXJzZSIsInNldE5hdmlnYXRpb25CYXJUaXRsZSIsInRpdGxlIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0k7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7d0xBQ2pCQyxNLEdBQVM7QUFDTEMsb0NBQXdCO0FBRG5CLFMsUUFHVkMsTyxHQUFVLEUsUUFDakJDLE0sR0FBUyxFQUFDLFlBQVcsRUFBQyxjQUFhLEVBQWQsRUFBWixFLFFBQ1RDLE8sR0FBVSxFQUFDLFlBQVcsRUFBQyxjQUFhLFNBQWQsRUFBWixFLFFBQ1RDLFUsR0FBYTtBQUNGO0FBREUsUyxRQUdOQyxJLEdBQU87QUFDSEMsa0JBQU0sRUFESDtBQUVIQyxzQkFBVTtBQUZQLFMsUUFLUEMsTyxHQUFVO0FBQ05DLHNCQURNLHNCQUNNQyxJQUROLEVBQ1k7QUFDZEEscUJBQUtDLGFBQUwsR0FBcUJELEtBQUtFLE9BQUwsQ0FBYUMsTUFBbEM7QUFDQUgscUJBQUtJLGNBQUwsR0FBc0JKLEtBQUtLLFFBQUwsQ0FBY0YsTUFBcEM7QUFDQSxvQkFBTU4sV0FBV1MsT0FBT0MsTUFBUCxDQUFjO0FBQzNCQyw4QkFBVSxJQURpQjtBQUUzQkMsK0JBQVc7QUFGZ0IsaUJBQWQsRUFHZFQsS0FBS1UsSUFBTCxJQUFhLEVBSEMsQ0FBakI7QUFJQSx1QkFBTyxDQUFDVixJQUFELEVBQU9ILFFBQVAsQ0FBUDtBQUNILGFBVEs7QUFVTmMsbUJBVk0sbUJBVUdoQixJQVZILEVBVVM7QUFDWCxxQkFBS2lCLFdBQUwsQ0FBaUJqQixJQUFqQjtBQUNIO0FBWkssUzs7Ozs7O2lHQWNTQSxJOzs7Ozs7O3VDQUNHLHNCQUFVLGtCQUFWLEVBQThCO0FBQzVDQSwwQ0FBTTtBQUNGa0IsaURBQVNsQixJQURQO0FBRUZtQixpREFBUyxLQUFLbEIsSUFBTCxDQUFVbUI7QUFGakIscUNBRHNDO0FBSzVDQyw0Q0FBUTtBQUxvQyxpQ0FBOUIsQzs7O0FBQVpDLG1DOztBQU9OQyx3Q0FBUUMsR0FBUixDQUFZRixHQUFaOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tHQUdVRyxPOzs7Ozs7O3VDQUNTLGtDQUFtQkEsUUFBUUwsRUFBUixJQUFjLENBQWpDLEU7OztBQUFicEIsb0M7QUFDQTBCLDBDLEdBQWEsS0FBS3ZCLE9BQUwsQ0FBYUMsVUFBYixDQUF3QkosS0FBS0ssSUFBN0IsQzs7QUFDbkIscUNBQUtKLElBQUwsR0FBWXlCLFdBQVcsQ0FBWCxDQUFaO0FBQ0EscUNBQUt4QixRQUFMLEdBQWdCd0IsV0FBVyxDQUFYLENBQWhCO0FBQ0EscUNBQUtDLE1BQUw7QUFDQSxrREFBUUMsT0FBUixDQUFnQixTQUFoQixFQUEyQixNQUEzQixFQUFtQyxLQUFLM0IsSUFBTCxDQUFVaUIsT0FBN0MsRUFBc0QsSUFBdEQsRUFBNEQsQ0FBNUQ7QUFDQSwrQ0FBS1cscUJBQUwsQ0FBMkI7QUFDdkJDLDJDQUFPLEtBQUs3QixJQUFMLENBQVU2QjtBQURNLGlDQUEzQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQS9DMkIsZUFBS0MsSTs7a0JBQW5CdEMsSyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gICAgaW1wb3J0IFd4UGFyc2UgZnJvbSAnLi4vLi4vbGlicy93eFBhcnNlL3d4UGFyc2UuanMnXG4gICAgaW1wb3J0IHsgZ2V0RmV0Y2gsIHBvc3RGZXRjaCB9IGZyb20gJ0AvbW9kdWxlcy9jb21tb24vZmV0Y2gnXG4gICAgaW1wb3J0IEVkaXRvciBmcm9tICdAL2NvbXBvbmVudHMvZWRpdG9yJ1xuXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgICAgICBjb25maWcgPSB7XG4gICAgICAgICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5paH56ugJ1xuICAgICAgICB9XG4gICAgICAgJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJ2LWVkaXRvclwiOntcInhtbG5zOnYtb25cIjpcIlwifX07XHJcbiRldmVudHMgPSB7XCJ2LWVkaXRvclwiOntcInYtb246Y2xpY2tcIjpcImNvbW1lbnRcIn19O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICAgICAgICAgICd2LWVkaXRvcic6IEVkaXRvclxuICAgICAgICB9XG4gICAgICAgIGRhdGEgPSB7XG4gICAgICAgICAgICBpdGVtOiB7fSxcbiAgICAgICAgICAgIHVzZXJJbmZvOiB7fVxuICAgICAgICB9XG5cbiAgICAgICAgbWV0aG9kcyA9IHtcbiAgICAgICAgICAgIHJlbmRlclBvc3QgKHBvc3QpIHtcbiAgICAgICAgICAgICAgICBwb3N0LnRhcmdldHNMZW5ndGggPSBwb3N0LnRhcmdldHMubGVuZ3RoXG4gICAgICAgICAgICAgICAgcG9zdC5jb21tZW50c0xlbmd0aCA9IHBvc3QuY29tbWVudHMubGVuZ3RoXG4gICAgICAgICAgICAgICAgY29uc3QgdXNlckluZm8gPSBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgICAgICAgICAgbmlja05hbWU6ICflsI/mo64nLFxuICAgICAgICAgICAgICAgICAgICBhdmF0YXJVcmw6ICdodHRwOi8vc3RhdGljLmh0eHEubmV0L1VwbG9hZEZpbGVzL2hlYWRpbWcvMjAxNjA3MjExNDI1MjkyNDIuanBnJ1xuICAgICAgICAgICAgICAgIH0sIHBvc3QudXNlciB8fCB7fSlcbiAgICAgICAgICAgICAgICByZXR1cm4gW3Bvc3QsIHVzZXJJbmZvXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNvbW1lbnQgKGRhdGEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBvc3RDb21tZW50KGRhdGEpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYXN5bmMgcG9zdENvbW1lbnQgKGRhdGEpIHtcbiAgICAgICAgICAgIGNvbnN0IHJzcCA9IGF3YWl0IHBvc3RGZXRjaCgnL2NpcmNsZXMvY29tbWVudCcsIHtcbiAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IGRhdGEsXG4gICAgICAgICAgICAgICAgICAgIHBvc3RfaWQ6IHRoaXMuaXRlbS5pZFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgbm9BamF4OiB0cnVlXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgY29uc29sZS5sb2cocnNwKVxuICAgICAgICB9XG5cbiAgICAgICAgYXN5bmMgb25Mb2FkIChvcHRpb25zKSB7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0RmV0Y2goYC9wb3N0cy8ke29wdGlvbnMuaWQgfHwgMX1gKVxuICAgICAgICAgICAgY29uc3QgcmVuZGVyRGF0YSA9IHRoaXMubWV0aG9kcy5yZW5kZXJQb3N0KGRhdGEucG9zdClcbiAgICAgICAgICAgIHRoaXMuaXRlbSA9IHJlbmRlckRhdGFbMF1cbiAgICAgICAgICAgIHRoaXMudXNlckluZm8gPSByZW5kZXJEYXRhWzFdXG4gICAgICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICAgICAgICBXeFBhcnNlLnd4UGFyc2UoJ2FydGljbGUnLCAnaHRtbCcsIHRoaXMuaXRlbS5jb250ZW50LCB0aGlzLCAwKVxuICAgICAgICAgICAgd2VweS5zZXROYXZpZ2F0aW9uQmFyVGl0bGUoe1xuICAgICAgICAgICAgICAgIHRpdGxlOiB0aGlzLml0ZW0udGl0bGVcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG4iXX0=