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
            },
            toggleUpvote: function toggleUpvote() {
                if (this.item.targets.length % 2 && this.item.targets.length > 0) {
                    return this.requestUpvote(false);
                }
                return this.requestUpvote(true);
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
                                return (0, _fetch.postFetch)('/posts/comment', {
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
        key: 'requestUpvote',
        value: function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(isUpVote) {
                var rsp;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _context2.next = 2;
                                return (0, _fetch.getFetch)('/posts/' + this.item.id + '/' + (isUpVote ? 'zan' : 'unzan'), {
                                    noAjax: true
                                });

                            case 2:
                                rsp = _context2.sent;

                                console.log(rsp);

                            case 4:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function requestUpvote(_x2) {
                return _ref3.apply(this, arguments);
            }

            return requestUpvote;
        }()
    }, {
        key: 'onLoad',
        value: function () {
            var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(options) {
                var data, renderData;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                _context3.next = 2;
                                return (0, _fetch.getFetch)('/posts/' + (options.id || 1));

                            case 2:
                                data = _context3.sent;
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
                                return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));

            function onLoad(_x3) {
                return _ref4.apply(this, arguments);
            }

            return onLoad;
        }()
    }]);

    return Index;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/recommend/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsImRhdGEiLCJpdGVtIiwidXNlckluZm8iLCJtZXRob2RzIiwicmVuZGVyUG9zdCIsInBvc3QiLCJ0YXJnZXRzTGVuZ3RoIiwidGFyZ2V0cyIsImxlbmd0aCIsImNvbW1lbnRzTGVuZ3RoIiwiY29tbWVudHMiLCJPYmplY3QiLCJhc3NpZ24iLCJuaWNrTmFtZSIsImF2YXRhclVybCIsInVzZXIiLCJjb21tZW50IiwicG9zdENvbW1lbnQiLCJ0b2dnbGVVcHZvdGUiLCJyZXF1ZXN0VXB2b3RlIiwiY29udGVudCIsInBvc3RfaWQiLCJpZCIsIm5vQWpheCIsInJzcCIsImNvbnNvbGUiLCJsb2ciLCJpc1VwVm90ZSIsIm9wdGlvbnMiLCJyZW5kZXJEYXRhIiwiJGFwcGx5Iiwid3hQYXJzZSIsInNldE5hdmlnYXRpb25CYXJUaXRsZSIsInRpdGxlIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0k7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7d0xBQ2pCQyxNLEdBQVM7QUFDTEMsb0NBQXdCO0FBRG5CLFMsUUFHVkMsTyxHQUFVLEUsUUFDakJDLE0sR0FBUyxFQUFDLFlBQVcsRUFBQyxjQUFhLEVBQWQsRUFBWixFLFFBQ1RDLE8sR0FBVSxFQUFDLFlBQVcsRUFBQyxjQUFhLFNBQWQsRUFBWixFLFFBQ1RDLFUsR0FBYTtBQUNGO0FBREUsUyxRQUdOQyxJLEdBQU87QUFDSEMsa0JBQU0sRUFESDtBQUVIQyxzQkFBVTtBQUZQLFMsUUFLUEMsTyxHQUFVO0FBQ05DLHNCQURNLHNCQUNNQyxJQUROLEVBQ1k7QUFDZEEscUJBQUtDLGFBQUwsR0FBcUJELEtBQUtFLE9BQUwsQ0FBYUMsTUFBbEM7QUFDQUgscUJBQUtJLGNBQUwsR0FBc0JKLEtBQUtLLFFBQUwsQ0FBY0YsTUFBcEM7QUFDQSxvQkFBTU4sV0FBV1MsT0FBT0MsTUFBUCxDQUFjO0FBQzNCQyw4QkFBVSxJQURpQjtBQUUzQkMsK0JBQVc7QUFGZ0IsaUJBQWQsRUFHZFQsS0FBS1UsSUFBTCxJQUFhLEVBSEMsQ0FBakI7QUFJQSx1QkFBTyxDQUFDVixJQUFELEVBQU9ILFFBQVAsQ0FBUDtBQUNILGFBVEs7QUFVTmMsbUJBVk0sbUJBVUdoQixJQVZILEVBVVM7QUFDWCxxQkFBS2lCLFdBQUwsQ0FBaUJqQixJQUFqQjtBQUNILGFBWks7QUFhTmtCLHdCQWJNLDBCQWFVO0FBQ1osb0JBQUksS0FBS2pCLElBQUwsQ0FBVU0sT0FBVixDQUFrQkMsTUFBbEIsR0FBMkIsQ0FBM0IsSUFBZ0MsS0FBS1AsSUFBTCxDQUFVTSxPQUFWLENBQWtCQyxNQUFsQixHQUEyQixDQUEvRCxFQUFrRTtBQUM5RCwyQkFBTyxLQUFLVyxhQUFMLENBQW1CLEtBQW5CLENBQVA7QUFDSDtBQUNELHVCQUFPLEtBQUtBLGFBQUwsQ0FBbUIsSUFBbkIsQ0FBUDtBQUNIO0FBbEJLLFM7Ozs7OztpR0FvQlNuQixJOzs7Ozs7O3VDQUNHLHNCQUFVLGdCQUFWLEVBQTRCO0FBQzFDQSwwQ0FBTTtBQUNGb0IsaURBQVNwQixJQURQO0FBRUZxQixpREFBUyxLQUFLcEIsSUFBTCxDQUFVcUI7QUFGakIscUNBRG9DO0FBSzFDQyw0Q0FBUTtBQUxrQyxpQ0FBNUIsQzs7O0FBQVpDLG1DOztBQU9OQyx3Q0FBUUMsR0FBUixDQUFZRixHQUFaOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tHQUVpQkcsUTs7Ozs7Ozt1Q0FDQyxpQ0FBbUIsS0FBSzFCLElBQUwsQ0FBVXFCLEVBQTdCLFVBQW1DSyxXQUFXLEtBQVgsR0FBbUIsT0FBdEQsR0FBaUU7QUFDL0VKLDRDQUFRO0FBRHVFLGlDQUFqRSxDOzs7QUFBWkMsbUM7O0FBR05DLHdDQUFRQyxHQUFSLENBQVlGLEdBQVo7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0dBR1VJLE87Ozs7Ozs7dUNBQ1Msa0NBQW1CQSxRQUFRTixFQUFSLElBQWMsQ0FBakMsRTs7O0FBQWJ0QixvQztBQUNBNkIsMEMsR0FBYSxLQUFLMUIsT0FBTCxDQUFhQyxVQUFiLENBQXdCSixLQUFLSyxJQUE3QixDOztBQUNuQixxQ0FBS0osSUFBTCxHQUFZNEIsV0FBVyxDQUFYLENBQVo7QUFDQSxxQ0FBSzNCLFFBQUwsR0FBZ0IyQixXQUFXLENBQVgsQ0FBaEI7QUFDQSxxQ0FBS0MsTUFBTDtBQUNBLGtEQUFRQyxPQUFSLENBQWdCLFNBQWhCLEVBQTJCLE1BQTNCLEVBQW1DLEtBQUs5QixJQUFMLENBQVVtQixPQUE3QyxFQUFzRCxJQUF0RCxFQUE0RCxDQUE1RDtBQUNBLCtDQUFLWSxxQkFBTCxDQUEyQjtBQUN2QkMsMkNBQU8sS0FBS2hDLElBQUwsQ0FBVWdDO0FBRE0saUNBQTNCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBM0QyQixlQUFLQyxJOztrQkFBbkJ6QyxLIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgICBpbXBvcnQgV3hQYXJzZSBmcm9tICcuLi8uLi9saWJzL3d4UGFyc2Uvd3hQYXJzZS5qcydcbiAgICBpbXBvcnQgeyBnZXRGZXRjaCwgcG9zdEZldGNoIH0gZnJvbSAnQC9tb2R1bGVzL2NvbW1vbi9mZXRjaCdcbiAgICBpbXBvcnQgRWRpdG9yIGZyb20gJ0AvY29tcG9uZW50cy9lZGl0b3InXG5cbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgICAgIGNvbmZpZyA9IHtcbiAgICAgICAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfmlofnq6AnXG4gICAgICAgIH1cbiAgICAgICAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcInYtZWRpdG9yXCI6e1wieG1sbnM6di1vblwiOlwiXCJ9fTtcclxuJGV2ZW50cyA9IHtcInYtZWRpdG9yXCI6e1widi1vbjpjbGlja1wiOlwiY29tbWVudFwifX07XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgICAgICAgJ3YtZWRpdG9yJzogRWRpdG9yXG4gICAgICAgIH1cbiAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICAgIGl0ZW06IHt9LFxuICAgICAgICAgICAgdXNlckluZm86IHt9XG4gICAgICAgIH1cblxuICAgICAgICBtZXRob2RzID0ge1xuICAgICAgICAgICAgcmVuZGVyUG9zdCAocG9zdCkge1xuICAgICAgICAgICAgICAgIHBvc3QudGFyZ2V0c0xlbmd0aCA9IHBvc3QudGFyZ2V0cy5sZW5ndGhcbiAgICAgICAgICAgICAgICBwb3N0LmNvbW1lbnRzTGVuZ3RoID0gcG9zdC5jb21tZW50cy5sZW5ndGhcbiAgICAgICAgICAgICAgICBjb25zdCB1c2VySW5mbyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgICAgICAgICBuaWNrTmFtZTogJ+Wwj+ajricsXG4gICAgICAgICAgICAgICAgICAgIGF2YXRhclVybDogJ2h0dHA6Ly9zdGF0aWMuaHR4cS5uZXQvVXBsb2FkRmlsZXMvaGVhZGltZy8yMDE2MDcyMTE0MjUyOTI0Mi5qcGcnXG4gICAgICAgICAgICAgICAgfSwgcG9zdC51c2VyIHx8IHt9KVxuICAgICAgICAgICAgICAgIHJldHVybiBbcG9zdCwgdXNlckluZm9dXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29tbWVudCAoZGF0YSkge1xuICAgICAgICAgICAgICAgIHRoaXMucG9zdENvbW1lbnQoZGF0YSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0b2dnbGVVcHZvdGUgKCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLml0ZW0udGFyZ2V0cy5sZW5ndGggJSAyICYmIHRoaXMuaXRlbS50YXJnZXRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdFVwdm90ZShmYWxzZSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdFVwdm90ZSh0cnVlKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGFzeW5jIHBvc3RDb21tZW50IChkYXRhKSB7XG4gICAgICAgICAgICBjb25zdCByc3AgPSBhd2FpdCBwb3N0RmV0Y2goJy9wb3N0cy9jb21tZW50Jywge1xuICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgcG9zdF9pZDogdGhpcy5pdGVtLmlkXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBub0FqYXg6IHRydWVcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyc3ApXG4gICAgICAgIH1cbiAgICAgICAgYXN5bmMgcmVxdWVzdFVwdm90ZSAoaXNVcFZvdGUpIHtcbiAgICAgICAgICAgIGNvbnN0IHJzcCA9IGF3YWl0IGdldEZldGNoKGAvcG9zdHMvJHt0aGlzLml0ZW0uaWR9LyR7aXNVcFZvdGUgPyAnemFuJyA6ICd1bnphbid9YCwge1xuICAgICAgICAgICAgICAgIG5vQWpheDogdHJ1ZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJzcClcbiAgICAgICAgfVxuXG4gICAgICAgIGFzeW5jIG9uTG9hZCAob3B0aW9ucykge1xuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGdldEZldGNoKGAvcG9zdHMvJHtvcHRpb25zLmlkIHx8IDF9YClcbiAgICAgICAgICAgIGNvbnN0IHJlbmRlckRhdGEgPSB0aGlzLm1ldGhvZHMucmVuZGVyUG9zdChkYXRhLnBvc3QpXG4gICAgICAgICAgICB0aGlzLml0ZW0gPSByZW5kZXJEYXRhWzBdXG4gICAgICAgICAgICB0aGlzLnVzZXJJbmZvID0gcmVuZGVyRGF0YVsxXVxuICAgICAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgICAgICAgV3hQYXJzZS53eFBhcnNlKCdhcnRpY2xlJywgJ2h0bWwnLCB0aGlzLml0ZW0uY29udGVudCwgdGhpcywgMClcbiAgICAgICAgICAgIHdlcHkuc2V0TmF2aWdhdGlvbkJhclRpdGxlKHtcbiAgICAgICAgICAgICAgICB0aXRsZTogdGhpcy5pdGVtLnRpdGxlXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuIl19