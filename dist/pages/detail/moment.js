'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _fetch = require('./../../modules/common/fetch.js');

var _moment = require('./../../components/moment.js');

var _moment2 = _interopRequireDefault(_moment);

var _comments = require('./../../components/comments.js');

var _comments2 = _interopRequireDefault(_comments);

var _editor = require('./../../components/editor.js');

var _editor2 = _interopRequireDefault(_editor);

var _utils = require('./../../modules/common/utils.js');

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
            navigationBarTitleText: '我的'
        }, _this.$repeat = {}, _this.$props = { "v-editor": { "v-bind:inputValue.sync": "inputValue" }, "v-moment": { "xmlns:v-bind": "", "v-bind:moment.sync": "momentData", "xmlns:v-on": "" }, "v-comments": { "v-bind:comments.sync": "comments" } }, _this.$events = { "v-editor": { "v-on:click": "comment" }, "v-moment": { "v-on:toggleUpvote": "toggleUpvote", "v-on:toggleMoments": "toggleMoments" } }, _this.components = {
            'v-editor': _editor2.default,
            'v-moment': _moment2.default,
            'v-comments': _comments2.default
        }, _this.computed = {
            momentData: function momentData() {
                var user = this.moment.user || {};
                this.comments = this.moment.comments;
                return {
                    avatar: user.avatarUrl,
                    name: user.nickName,
                    content: this.moment.content,
                    images: (0, _utils.paddingImg)(this.moment.circle_imgs),
                    createTime: this.moment.created_at || '无返回时间',
                    upvoteNum: this.moment.comments.length,
                    favoriteNum: this.moment.targets.length
                };
            }
        }, _this.data = {
            inputValue: '',
            moment: {
                circle_imgs: [],
                targets: [],
                comments: [],
                user: {}
            },
            comments: []
        }, _this.methods = {
            toggleUpvote: function toggleUpvote() {
                ++counter;
                if (counter % 2) {
                    return this.requestUpvote(false);
                }
                return this.requestUpvote(true);
            },
            toggleMoments: function toggleMoments() {
                console.log('toggleMoments');
            },
            comment: function comment(data) {
                this.addComment(data);
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Index, [{
        key: 'addComment',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(content) {
                var _this2 = this;

                var userInfo;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return this.$parent.getUserInfo();

                            case 2:
                                userInfo = _context.sent;
                                _context.next = 5;
                                return (0, _fetch.postFetch)('/circles/comment', {
                                    data: {
                                        content: content,
                                        circle_id: this.moment.id
                                    },
                                    noAjax: true
                                }).then(function () {
                                    _this2.comments.unshift({
                                        content: content,
                                        created_at: new Date(),
                                        user_id: userInfo.nickName
                                    });
                                    _this2.inputValue = '';
                                    _this2.$apply();
                                }).catch(function () {
                                    _wepy2.default.showToast({
                                        title: '评论失败',
                                        icon: 'none',
                                        duration: 2000
                                    });
                                });

                            case 5:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function addComment(_x) {
                return _ref2.apply(this, arguments);
            }

            return addComment;
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
                                return (0, _fetch.getFetch)('/circles/' + this.moment.id + '/' + (isUpVote ? 'zan' : 'unzan'), {
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
                var rsp;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                _context3.next = 2;
                                return (0, _fetch.getFetch)('/circles/' + (options.id || 1));

                            case 2:
                                rsp = _context3.sent;

                                this.moment = rsp.circle;
                                this.$apply();

                            case 5:
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


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/detail/moment'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vbWVudC5qcyJdLCJuYW1lcyI6WyJjb3VudGVyIiwiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiY29tcHV0ZWQiLCJtb21lbnREYXRhIiwidXNlciIsIm1vbWVudCIsImNvbW1lbnRzIiwiYXZhdGFyIiwiYXZhdGFyVXJsIiwibmFtZSIsIm5pY2tOYW1lIiwiY29udGVudCIsImltYWdlcyIsImNpcmNsZV9pbWdzIiwiY3JlYXRlVGltZSIsImNyZWF0ZWRfYXQiLCJ1cHZvdGVOdW0iLCJsZW5ndGgiLCJmYXZvcml0ZU51bSIsInRhcmdldHMiLCJkYXRhIiwiaW5wdXRWYWx1ZSIsIm1ldGhvZHMiLCJ0b2dnbGVVcHZvdGUiLCJyZXF1ZXN0VXB2b3RlIiwidG9nZ2xlTW9tZW50cyIsImNvbnNvbGUiLCJsb2ciLCJjb21tZW50IiwiYWRkQ29tbWVudCIsIiRwYXJlbnQiLCJnZXRVc2VySW5mbyIsInVzZXJJbmZvIiwiY2lyY2xlX2lkIiwiaWQiLCJub0FqYXgiLCJ0aGVuIiwidW5zaGlmdCIsIkRhdGUiLCJ1c2VyX2lkIiwiJGFwcGx5IiwiY2F0Y2giLCJzaG93VG9hc3QiLCJ0aXRsZSIsImljb24iLCJkdXJhdGlvbiIsImlzVXBWb3RlIiwicnNwIiwib3B0aW9ucyIsImNpcmNsZSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNJOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBLElBQUlBLFVBQVUsQ0FBZDs7SUFDcUJDLEs7Ozs7Ozs7Ozs7Ozs7O3dMQUNqQkMsTSxHQUFTO0FBQ0xDLG9DQUF3QjtBQURuQixTLFFBSVZDLE8sR0FBVSxFLFFBQ2pCQyxNLEdBQVMsRUFBQyxZQUFXLEVBQUMsMEJBQXlCLFlBQTFCLEVBQVosRUFBb0QsWUFBVyxFQUFDLGdCQUFlLEVBQWhCLEVBQW1CLHNCQUFx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LEVBQVIsSUFBYyxDQUFuQyxFOzs7QUFBWmEsbUM7O0FBQ04scUNBQUsxQyxNQUFMLEdBQWMwQyxJQUFJRSxNQUFsQjtBQUNBLHFDQUFLVCxNQUFMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBeEYyQixlQUFLVSxJOztrQkFBbkJ2RCxLIiwiZmlsZSI6Im1vbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gICAgaW1wb3J0IHsgZ2V0RmV0Y2gsIHBvc3RGZXRjaCB9IGZyb20gJ0AvbW9kdWxlcy9jb21tb24vZmV0Y2gnXG4gICAgaW1wb3J0IG1vbWVudENvbXBvbmVudCBmcm9tICdAL2NvbXBvbmVudHMvbW9tZW50J1xuICAgIGltcG9ydCBDb21tZW50cyBmcm9tICdAL2NvbXBvbmVudHMvY29tbWVudHMnXG4gICAgaW1wb3J0IEVkaXRvciBmcm9tICdAL2NvbXBvbmVudHMvZWRpdG9yJ1xuICAgIGltcG9ydCB7IHBhZGRpbmdJbWcgfSBmcm9tICdAL21vZHVsZXMvY29tbW9uL3V0aWxzJ1xuXG4gICAgbGV0IGNvdW50ZXIgPSAwXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgICAgICBjb25maWcgPSB7XG4gICAgICAgICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5oiR55qEJ1xuICAgICAgICB9XG5cbiAgICAgICAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcInYtZWRpdG9yXCI6e1widi1iaW5kOmlucHV0VmFsdWUuc3luY1wiOlwiaW5wdXRWYWx1ZVwifSxcInYtbW9tZW50XCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDptb21lbnQuc3luY1wiOlwibW9tZW50RGF0YVwiLFwieG1sbnM6di1vblwiOlwiXCJ9LFwidi1jb21tZW50c1wiOntcInYtYmluZDpjb21tZW50cy5zeW5jXCI6XCJjb21tZW50c1wifX07XHJcbiRldmVudHMgPSB7XCJ2LWVkaXRvclwiOntcInYtb246Y2xpY2tcIjpcImNvbW1lbnRcIn0sXCJ2LW1vbWVudFwiOntcInYtb246dG9nZ2xlVXB2b3RlXCI6XCJ0b2dnbGVVcHZvdGVcIixcInYtb246dG9nZ2xlTW9tZW50c1wiOlwidG9nZ2xlTW9tZW50c1wifX07XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgICAgICAgJ3YtZWRpdG9yJzogRWRpdG9yLFxuICAgICAgICAgICAgJ3YtbW9tZW50JzogbW9tZW50Q29tcG9uZW50LFxuICAgICAgICAgICAgJ3YtY29tbWVudHMnOiBDb21tZW50c1xuICAgICAgICB9XG5cbiAgICAgICAgY29tcHV0ZWQgPSB7XG4gICAgICAgICAgICBtb21lbnREYXRhICgpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB1c2VyID0gdGhpcy5tb21lbnQudXNlciB8fCB7fVxuICAgICAgICAgICAgICAgIHRoaXMuY29tbWVudHMgPSB0aGlzLm1vbWVudC5jb21tZW50c1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGF2YXRhcjogdXNlci5hdmF0YXJVcmwsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IHVzZXIubmlja05hbWUsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IHRoaXMubW9tZW50LmNvbnRlbnQsXG4gICAgICAgICAgICAgICAgICAgIGltYWdlczogcGFkZGluZ0ltZyh0aGlzLm1vbWVudC5jaXJjbGVfaW1ncyksXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZVRpbWU6IHRoaXMubW9tZW50LmNyZWF0ZWRfYXQgfHwgJ+aXoOi/lOWbnuaXtumXtCcsXG4gICAgICAgICAgICAgICAgICAgIHVwdm90ZU51bTogdGhpcy5tb21lbnQuY29tbWVudHMubGVuZ3RoLFxuICAgICAgICAgICAgICAgICAgICBmYXZvcml0ZU51bTogdGhpcy5tb21lbnQudGFyZ2V0cy5sZW5ndGhcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBkYXRhID0ge1xuICAgICAgICAgICAgaW5wdXRWYWx1ZTogJycsXG4gICAgICAgICAgICBtb21lbnQ6IHtcbiAgICAgICAgICAgICAgICBjaXJjbGVfaW1nczogW10sXG4gICAgICAgICAgICAgICAgdGFyZ2V0czogW10sXG4gICAgICAgICAgICAgICAgY29tbWVudHM6IFtdLFxuICAgICAgICAgICAgICAgIHVzZXI6IHt9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29tbWVudHM6IFtdXG4gICAgICAgIH1cbiAgICAgICAgYXN5bmMgYWRkQ29tbWVudCAoY29udGVudCkge1xuICAgICAgICAgICAgY29uc3QgdXNlckluZm8gPSBhd2FpdCB0aGlzLiRwYXJlbnQuZ2V0VXNlckluZm8oKVxuICAgICAgICAgICAgYXdhaXQgcG9zdEZldGNoKCcvY2lyY2xlcy9jb21tZW50Jywge1xuICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgY29udGVudCxcbiAgICAgICAgICAgICAgICAgICAgY2lyY2xlX2lkOiB0aGlzLm1vbWVudC5pZFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgbm9BamF4OiB0cnVlXG4gICAgICAgICAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbW1lbnRzLnVuc2hpZnQoe1xuICAgICAgICAgICAgICAgICAgICBjb250ZW50LFxuICAgICAgICAgICAgICAgICAgICBjcmVhdGVkX2F0OiBuZXcgRGF0ZSgpLFxuICAgICAgICAgICAgICAgICAgICB1c2VyX2lkOiB1c2VySW5mby5uaWNrTmFtZVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgdGhpcy5pbnB1dFZhbHVlID0gJydcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICAgICAgICB9KS5jYXRjaCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgd2VweS5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+ivhOiuuuWksei0pScsXG4gICAgICAgICAgICAgICAgICAgIGljb246ICdub25lJyxcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDIwMDBcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBtZXRob2RzID0ge1xuICAgICAgICAgICAgdG9nZ2xlVXB2b3RlICgpIHtcbiAgICAgICAgICAgICAgICArK2NvdW50ZXJcbiAgICAgICAgICAgICAgICBpZiAoY291bnRlciAlIDIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdFVwdm90ZShmYWxzZSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdFVwdm90ZSh0cnVlKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRvZ2dsZU1vbWVudHMgKCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0b2dnbGVNb21lbnRzJylcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb21tZW50IChkYXRhKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRDb21tZW50KGRhdGEpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYXN5bmMgcmVxdWVzdFVwdm90ZSAoaXNVcFZvdGUpIHtcbiAgICAgICAgICAgIGNvbnN0IHJzcCA9IGF3YWl0IGdldEZldGNoKGAvY2lyY2xlcy8ke3RoaXMubW9tZW50LmlkfS8ke2lzVXBWb3RlID8gJ3phbicgOiAndW56YW4nfWAsIHtcbiAgICAgICAgICAgICAgICBub0FqYXg6IHRydWVcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyc3ApXG4gICAgICAgIH1cbiAgICAgICAgYXN5bmMgb25Mb2FkIChvcHRpb25zKSB7XG4gICAgICAgICAgICBjb25zdCByc3AgPSBhd2FpdCBnZXRGZXRjaChgL2NpcmNsZXMvJHtvcHRpb25zLmlkIHx8IDF9YClcbiAgICAgICAgICAgIHRoaXMubW9tZW50ID0gcnNwLmNpcmNsZVxuICAgICAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgICB9XG4gICAgfVxuIl19