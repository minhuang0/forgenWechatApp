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

var counter = 0;

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
                ++counter;
                if (counter % 2) {
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImNvdW50ZXIiLCJJbmRleCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJkYXRhIiwiaXRlbSIsInVzZXJJbmZvIiwibWV0aG9kcyIsInJlbmRlclBvc3QiLCJwb3N0IiwidGFyZ2V0c0xlbmd0aCIsInRhcmdldHMiLCJsZW5ndGgiLCJjb21tZW50c0xlbmd0aCIsImNvbW1lbnRzIiwiT2JqZWN0IiwiYXNzaWduIiwibmlja05hbWUiLCJhdmF0YXJVcmwiLCJ1c2VyIiwiY29tbWVudCIsInBvc3RDb21tZW50IiwidG9nZ2xlVXB2b3RlIiwicmVxdWVzdFVwdm90ZSIsImNvbnRlbnQiLCJwb3N0X2lkIiwiaWQiLCJub0FqYXgiLCJyc3AiLCJjb25zb2xlIiwibG9nIiwiaXNVcFZvdGUiLCJvcHRpb25zIiwicmVuZGVyRGF0YSIsIiRhcHBseSIsInd4UGFyc2UiLCJzZXROYXZpZ2F0aW9uQmFyVGl0bGUiLCJ0aXRsZSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNJOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFJQSxVQUFVLENBQWQ7O0lBQ3FCQyxLOzs7Ozs7Ozs7Ozs7Ozt3TEFDakJDLE0sR0FBUztBQUNMQyxvQ0FBd0I7QUFEbkIsUyxRQUdWQyxPLEdBQVUsRSxRQUNqQkMsTSxHQUFTLEVBQUMsWUFBVyxFQUFDLGNBQWEsRUFBZCxFQUFaLEUsUUFDVEMsTyxHQUFVLEVBQUMsWUFBVyxFQUFDLGNBQWEsU0FBZCxFQUFaLEUsUUFDVEMsVSxHQUFhO0FBQ0Y7QUFERSxTLFFBR05DLEksR0FBTztBQUNIQyxrQkFBTSxFQURIO0FBRUhDLHNCQUFVO0FBRlAsUyxRQUtQQyxPLEdBQVU7QUFDTkMsc0JBRE0sc0JBQ01DLElBRE4sRUFDWTtBQUNkQSxxQkFBS0MsYUFBTCxHQUFxQkQsS0FBS0UsT0FBTCxDQUFhQyxNQUFsQztBQUNBSCxxQkFBS0ksY0FBTCxHQUFzQkosS0FBS0ssUUFBTCxDQUFjRixNQUFwQztBQUNBLG9CQUFNTixXQUFXUyxPQUFPQyxNQUFQLENBQWM7QUFDM0JDLDhCQUFVLElBRGlCO0FBRTNCQywrQkFBVztBQUZnQixpQkFBZCxFQUdkVCxLQUFLVSxJQUFMLElBQWEsRUFIQyxDQUFqQjtBQUlBLHVCQUFPLENBQUNWLElBQUQsRUFBT0gsUUFBUCxDQUFQO0FBQ0gsYUFUSztBQVVOYyxtQkFWTSxtQkFVR2hCLElBVkgsRUFVUztBQUNYLHFCQUFLaUIsV0FBTCxDQUFpQmpCLElBQWpCO0FBQ0gsYUFaSztBQWFOa0Isd0JBYk0sMEJBYVU7QUFDWixrQkFBRTFCLE9BQUY7QUFDQSxvQkFBSUEsVUFBVSxDQUFkLEVBQWlCO0FBQ2IsMkJBQU8sS0FBSzJCLGFBQUwsQ0FBbUIsS0FBbkIsQ0FBUDtBQUNIO0FBQ0QsdUJBQU8sS0FBS0EsYUFBTCxDQUFtQixJQUFuQixDQUFQO0FBQ0g7QUFuQkssUzs7Ozs7O2lHQXFCU25CLEk7Ozs7Ozs7dUNBQ0csc0JBQVUsZ0JBQVYsRUFBNEI7QUFDMUNBLDBDQUFNO0FBQ0ZvQixpREFBU3BCLElBRFA7QUFFRnFCLGlEQUFTLEtBQUtwQixJQUFMLENBQVVxQjtBQUZqQixxQ0FEb0M7QUFLMUNDLDRDQUFRO0FBTGtDLGlDQUE1QixDOzs7QUFBWkMsbUM7O0FBT05DLHdDQUFRQyxHQUFSLENBQVlGLEdBQVo7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0dBRWlCRyxROzs7Ozs7O3VDQUNDLGlDQUFtQixLQUFLMUIsSUFBTCxDQUFVcUIsRUFBN0IsVUFBbUNLLFdBQVcsS0FBWCxHQUFtQixPQUF0RCxHQUFpRTtBQUMvRUosNENBQVE7QUFEdUUsaUNBQWpFLEM7OztBQUFaQyxtQzs7QUFHTkMsd0NBQVFDLEdBQVIsQ0FBWUYsR0FBWjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrR0FHVUksTzs7Ozs7Ozt1Q0FDUyxrQ0FBbUJBLFFBQVFOLEVBQVIsSUFBYyxDQUFqQyxFOzs7QUFBYnRCLG9DO0FBQ0E2QiwwQyxHQUFhLEtBQUsxQixPQUFMLENBQWFDLFVBQWIsQ0FBd0JKLEtBQUtLLElBQTdCLEM7O0FBQ25CLHFDQUFLSixJQUFMLEdBQVk0QixXQUFXLENBQVgsQ0FBWjtBQUNBLHFDQUFLM0IsUUFBTCxHQUFnQjJCLFdBQVcsQ0FBWCxDQUFoQjtBQUNBLHFDQUFLQyxNQUFMO0FBQ0Esa0RBQVFDLE9BQVIsQ0FBZ0IsU0FBaEIsRUFBMkIsTUFBM0IsRUFBbUMsS0FBSzlCLElBQUwsQ0FBVW1CLE9BQTdDLEVBQXNELElBQXRELEVBQTRELENBQTVEO0FBQ0EsK0NBQUtZLHFCQUFMLENBQTJCO0FBQ3ZCQywyQ0FBTyxLQUFLaEMsSUFBTCxDQUFVZ0M7QUFETSxpQ0FBM0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUE1RDJCLGVBQUtDLEk7O2tCQUFuQnpDLEsiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICAgIGltcG9ydCBXeFBhcnNlIGZyb20gJy4uLy4uL2xpYnMvd3hQYXJzZS93eFBhcnNlLmpzJ1xuICAgIGltcG9ydCB7IGdldEZldGNoLCBwb3N0RmV0Y2ggfSBmcm9tICdAL21vZHVsZXMvY29tbW9uL2ZldGNoJ1xuICAgIGltcG9ydCBFZGl0b3IgZnJvbSAnQC9jb21wb25lbnRzL2VkaXRvcidcblxuICAgIGxldCBjb3VudGVyID0gMFxuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICAgICAgY29uZmlnID0ge1xuICAgICAgICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+aWh+eroCdcbiAgICAgICAgfVxuICAgICAgICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1widi1lZGl0b3JcIjp7XCJ4bWxuczp2LW9uXCI6XCJcIn19O1xyXG4kZXZlbnRzID0ge1widi1lZGl0b3JcIjp7XCJ2LW9uOmNsaWNrXCI6XCJjb21tZW50XCJ9fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICAgICAgICAndi1lZGl0b3InOiBFZGl0b3JcbiAgICAgICAgfVxuICAgICAgICBkYXRhID0ge1xuICAgICAgICAgICAgaXRlbToge30sXG4gICAgICAgICAgICB1c2VySW5mbzoge31cbiAgICAgICAgfVxuXG4gICAgICAgIG1ldGhvZHMgPSB7XG4gICAgICAgICAgICByZW5kZXJQb3N0IChwb3N0KSB7XG4gICAgICAgICAgICAgICAgcG9zdC50YXJnZXRzTGVuZ3RoID0gcG9zdC50YXJnZXRzLmxlbmd0aFxuICAgICAgICAgICAgICAgIHBvc3QuY29tbWVudHNMZW5ndGggPSBwb3N0LmNvbW1lbnRzLmxlbmd0aFxuICAgICAgICAgICAgICAgIGNvbnN0IHVzZXJJbmZvID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICAgICAgICAgIG5pY2tOYW1lOiAn5bCP5qOuJyxcbiAgICAgICAgICAgICAgICAgICAgYXZhdGFyVXJsOiAnaHR0cDovL3N0YXRpYy5odHhxLm5ldC9VcGxvYWRGaWxlcy9oZWFkaW1nLzIwMTYwNzIxMTQyNTI5MjQyLmpwZydcbiAgICAgICAgICAgICAgICB9LCBwb3N0LnVzZXIgfHwge30pXG4gICAgICAgICAgICAgICAgcmV0dXJuIFtwb3N0LCB1c2VySW5mb11cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb21tZW50IChkYXRhKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3N0Q29tbWVudChkYXRhKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRvZ2dsZVVwdm90ZSAoKSB7XG4gICAgICAgICAgICAgICAgKytjb3VudGVyXG4gICAgICAgICAgICAgICAgaWYgKGNvdW50ZXIgJSAyKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RVcHZvdGUoZmFsc2UpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RVcHZvdGUodHJ1ZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBhc3luYyBwb3N0Q29tbWVudCAoZGF0YSkge1xuICAgICAgICAgICAgY29uc3QgcnNwID0gYXdhaXQgcG9zdEZldGNoKCcvcG9zdHMvY29tbWVudCcsIHtcbiAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IGRhdGEsXG4gICAgICAgICAgICAgICAgICAgIHBvc3RfaWQ6IHRoaXMuaXRlbS5pZFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgbm9BamF4OiB0cnVlXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgY29uc29sZS5sb2cocnNwKVxuICAgICAgICB9XG4gICAgICAgIGFzeW5jIHJlcXVlc3RVcHZvdGUgKGlzVXBWb3RlKSB7XG4gICAgICAgICAgICBjb25zdCByc3AgPSBhd2FpdCBnZXRGZXRjaChgL3Bvc3RzLyR7dGhpcy5pdGVtLmlkfS8ke2lzVXBWb3RlID8gJ3phbicgOiAndW56YW4nfWAsIHtcbiAgICAgICAgICAgICAgICBub0FqYXg6IHRydWVcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyc3ApXG4gICAgICAgIH1cblxuICAgICAgICBhc3luYyBvbkxvYWQgKG9wdGlvbnMpIHtcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXRGZXRjaChgL3Bvc3RzLyR7b3B0aW9ucy5pZCB8fCAxfWApXG4gICAgICAgICAgICBjb25zdCByZW5kZXJEYXRhID0gdGhpcy5tZXRob2RzLnJlbmRlclBvc3QoZGF0YS5wb3N0KVxuICAgICAgICAgICAgdGhpcy5pdGVtID0gcmVuZGVyRGF0YVswXVxuICAgICAgICAgICAgdGhpcy51c2VySW5mbyA9IHJlbmRlckRhdGFbMV1cbiAgICAgICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgICAgICAgIFd4UGFyc2Uud3hQYXJzZSgnYXJ0aWNsZScsICdodG1sJywgdGhpcy5pdGVtLmNvbnRlbnQsIHRoaXMsIDApXG4gICAgICAgICAgICB3ZXB5LnNldE5hdmlnYXRpb25CYXJUaXRsZSh7XG4gICAgICAgICAgICAgICAgdGl0bGU6IHRoaXMuaXRlbS50aXRsZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cbiJdfQ==