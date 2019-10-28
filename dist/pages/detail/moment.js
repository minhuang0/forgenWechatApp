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
        }, _this.$repeat = {}, _this.$props = { "v-editor": { "v-bind:inputValue.sync": "inputValue" }, "v-moment": { "xmlns:v-bind": "", "v-bind:moment.sync": "momentData", "xmlns:v-on": "" }, "v-comments": { "v-bind:comments.sync": "comments" } }, _this.$events = { "v-editor": { "v-on:click": "comment" }, "v-moment": { "v-on:toggleUpvote": "toggleUpvote", "v-on:toggleMoments": "toggleMoments", "v-on:touchImage": "touchImage" } }, _this.components = {
            'v-editor': _editor2.default,
            'v-moment': _moment2.default,
            'v-comments': _comments2.default
        }, _this.computed = {
            momentData: function momentData() {
                var user = this.moment.user || {};
                this.comments = this.moment.comments;
                return {
                    avatar: user.avatarUrl,
                    user_id: this.moment.user_id,
                    name: user.nickName,
                    content: this.moment.content,
                    images: (0, _utils.paddingImg)(this.moment.circle_imgs.map(function (i) {
                        return i.imgUrl;
                    })),
                    createTime: this.moment.created_at || '无返回时间',
                    upvoteNum: this.moment.upvoteNum,
                    commentsNum: this.moment.commentsNum,
                    hasZan: this.moment.hasZan,
                    upvoteIcon: this.moment.hasZan ? '../../modules/images/praise_fill.png' : '../../modules/images/praise.png'
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
                if (this.moment.hasZan) {
                    return this.requestUpvote(false);
                }
                return this.requestUpvote(true);
            },
            toggleMoments: function toggleMoments() {
                console.log('toggleMoments');
            },
            comment: function comment(data) {
                this.addComment(data);
            },
            touchImage: function touchImage(e) {
                console.log(e);
                _wepy2.default.navigateTo({
                    url: '../../pages/show/image-zoom?url=' + e.currentTarget.dataset.url
                });
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
                                        user: {
                                            avatarUrl: userInfo.avatarUrl,
                                            nickName: userInfo.nickName
                                        },
                                        created_at: new Date(),
                                        user_id: userInfo.id
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
                var _this3 = this;

                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _context2.next = 2;
                                return (0, _fetch.getFetch)('/circles/' + this.moment.id + '/' + (isUpVote ? 'zan' : 'unzan'), {
                                    noAjax: true
                                }).then(function () {
                                    _this3.moment.hasZan = !_this3.moment.hasZan;
                                    _this3.moment.upvoteNum = _this3.moment.hasZan ? _this3.moment.upvoteNum + 1 : _this3.moment.upvoteNum > 1 ? _this3.moment.upvoteNum - 1 : 0;
                                    _this3.$apply();
                                });

                            case 2:
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
                                // this.moment.hasZan = rsp.hasZan
                                this.moment.upvoteNum = rsp.circle.targets.length;
                                this.moment.commentsNum = rsp.circle.comments.length;
                                this.$apply();

                            case 7:
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vbWVudC5qcyJdLCJuYW1lcyI6WyJJbmRleCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJFZGl0b3IiLCJtb21lbnRDb21wb25lbnQiLCJDb21tZW50cyIsImNvbXB1dGVkIiwibW9tZW50RGF0YSIsInVzZXIiLCJtb21lbnQiLCJjb21tZW50cyIsImF2YXRhciIsImF2YXRhclVybCIsInVzZXJfaWQiLCJuYW1lIiwibmlja05hbWUiLCJjb250ZW50IiwiaW1hZ2VzIiwiY2lyY2xlX2ltZ3MiLCJtYXAiLCJpIiwiaW1nVXJsIiwiY3JlYXRlVGltZSIsImNyZWF0ZWRfYXQiLCJ1cHZvdGVOdW0iLCJjb21tZW50c051bSIsImhhc1phbiIsInVwdm90ZUljb24iLCJkYXRhIiwiaW5wdXRWYWx1ZSIsInRhcmdldHMiLCJtZXRob2RzIiwidG9nZ2xlVXB2b3RlIiwicmVxdWVzdFVwdm90ZSIsInRvZ2dsZU1vbWVudHMiLCJjb25zb2xlIiwibG9nIiwiY29tbWVudCIsImFkZENvbW1lbnQiLCJ0b3VjaEltYWdlIiwiZSIsIndlcHkiLCJuYXZpZ2F0ZVRvIiwidXJsIiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCIkcGFyZW50IiwiZ2V0VXNlckluZm8iLCJ1c2VySW5mbyIsImNpcmNsZV9pZCIsImlkIiwibm9BamF4IiwidGhlbiIsInVuc2hpZnQiLCJEYXRlIiwiJGFwcGx5IiwiY2F0Y2giLCJzaG93VG9hc3QiLCJ0aXRsZSIsImljb24iLCJkdXJhdGlvbiIsImlzVXBWb3RlIiwib3B0aW9ucyIsInJzcCIsImNpcmNsZSIsImxlbmd0aCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNJOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7d0xBQ2pCQyxNLEdBQVM7QUFDTEMs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cUNBQUt2RCxNQUFMLENBQVllLFNBQVosR0FBd0J1QyxJQUFJQyxNQUFKLENBQVdsQyxPQUFYLENBQW1CbUMsTUFBM0M7QUFDQSxxQ0FBS3hELE1BQUwsQ0FBWWdCLFdBQVosR0FBMEJzQyxJQUFJQyxNQUFKLENBQVd0RCxRQUFYLENBQW9CdUQsTUFBOUM7QUFDQSxxQ0FBS1YsTUFBTDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQTFHMkJkLGVBQUt5QixJOztrQkFBbkJ0RSxLIiwiZmlsZSI6Im1vbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gICAgaW1wb3J0IHsgZ2V0RmV0Y2gsIHBvc3RGZXRjaCB9IGZyb20gJ0AvbW9kdWxlcy9jb21tb24vZmV0Y2gnXG4gICAgaW1wb3J0IG1vbWVudENvbXBvbmVudCBmcm9tICdAL2NvbXBvbmVudHMvbW9tZW50J1xuICAgIGltcG9ydCBDb21tZW50cyBmcm9tICdAL2NvbXBvbmVudHMvY29tbWVudHMnXG4gICAgaW1wb3J0IEVkaXRvciBmcm9tICdAL2NvbXBvbmVudHMvZWRpdG9yJ1xuICAgIGltcG9ydCB7IHBhZGRpbmdJbWcgfSBmcm9tICdAL21vZHVsZXMvY29tbW9uL3V0aWxzJ1xuXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgICAgICBjb25maWcgPSB7XG4gICAgICAgICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5oiR55qEJ1xuICAgICAgICB9XG5cbiAgICAgICAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcInYtZWRpdG9yXCI6e1widi1iaW5kOmlucHV0VmFsdWUuc3luY1wiOlwiaW5wdXRWYWx1ZVwifSxcInYtbW9tZW50XCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDptb21lbnQuc3luY1wiOlwibW9tZW50RGF0YVwiLFwieG1sbnM6di1vblwiOlwiXCJ9LFwidi1jb21tZW50c1wiOntcInYtYmluZDpjb21tZW50cy5zeW5jXCI6XCJjb21tZW50c1wifX07XHJcbiRldmVudHMgPSB7XCJ2LWVkaXRvclwiOntcInYtb246Y2xpY2tcIjpcImNvbW1lbnRcIn0sXCJ2LW1vbWVudFwiOntcInYtb246dG9nZ2xlVXB2b3RlXCI6XCJ0b2dnbGVVcHZvdGVcIixcInYtb246dG9nZ2xlTW9tZW50c1wiOlwidG9nZ2xlTW9tZW50c1wiLFwidi1vbjp0b3VjaEltYWdlXCI6XCJ0b3VjaEltYWdlXCJ9fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICAgICAgICAndi1lZGl0b3InOiBFZGl0b3IsXG4gICAgICAgICAgICAndi1tb21lbnQnOiBtb21lbnRDb21wb25lbnQsXG4gICAgICAgICAgICAndi1jb21tZW50cyc6IENvbW1lbnRzXG4gICAgICAgIH1cblxuICAgICAgICBjb21wdXRlZCA9IHtcbiAgICAgICAgICAgIG1vbWVudERhdGEgKCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHVzZXIgPSB0aGlzLm1vbWVudC51c2VyIHx8IHt9XG4gICAgICAgICAgICAgICAgdGhpcy5jb21tZW50cyA9IHRoaXMubW9tZW50LmNvbW1lbnRzXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgYXZhdGFyOiB1c2VyLmF2YXRhclVybCxcbiAgICAgICAgICAgICAgICAgICAgdXNlcl9pZDogdGhpcy5tb21lbnQudXNlcl9pZCxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogdXNlci5uaWNrTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogdGhpcy5tb21lbnQuY29udGVudCxcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VzOiBwYWRkaW5nSW1nKHRoaXMubW9tZW50LmNpcmNsZV9pbWdzLm1hcChpID0+IGkuaW1nVXJsKSksXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZVRpbWU6IHRoaXMubW9tZW50LmNyZWF0ZWRfYXQgfHwgJ+aXoOi/lOWbnuaXtumXtCcsXG4gICAgICAgICAgICAgICAgICAgIHVwdm90ZU51bTogdGhpcy5tb21lbnQudXB2b3RlTnVtLFxuICAgICAgICAgICAgICAgICAgICBjb21tZW50c051bTogdGhpcy5tb21lbnQuY29tbWVudHNOdW0sXG4gICAgICAgICAgICAgICAgICAgIGhhc1phbjogdGhpcy5tb21lbnQuaGFzWmFuLFxuICAgICAgICAgICAgICAgICAgICB1cHZvdGVJY29uOiB0aGlzLm1vbWVudC5oYXNaYW4gPyAnLi4vLi4vbW9kdWxlcy9pbWFnZXMvcHJhaXNlX2ZpbGwucG5nJyA6ICcuLi8uLi9tb2R1bGVzL2ltYWdlcy9wcmFpc2UucG5nJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGRhdGEgPSB7XG4gICAgICAgICAgICBpbnB1dFZhbHVlOiAnJyxcbiAgICAgICAgICAgIG1vbWVudDoge1xuICAgICAgICAgICAgICAgIGNpcmNsZV9pbWdzOiBbXSxcbiAgICAgICAgICAgICAgICB0YXJnZXRzOiBbXSxcbiAgICAgICAgICAgICAgICBjb21tZW50czogW10sXG4gICAgICAgICAgICAgICAgdXNlcjoge31cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb21tZW50czogW11cbiAgICAgICAgfVxuICAgICAgICBhc3luYyBhZGRDb21tZW50IChjb250ZW50KSB7XG4gICAgICAgICAgICBjb25zdCB1c2VySW5mbyA9IGF3YWl0IHRoaXMuJHBhcmVudC5nZXRVc2VySW5mbygpXG4gICAgICAgICAgICBhd2FpdCBwb3N0RmV0Y2goJy9jaXJjbGVzL2NvbW1lbnQnLCB7XG4gICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICBjb250ZW50LFxuICAgICAgICAgICAgICAgICAgICBjaXJjbGVfaWQ6IHRoaXMubW9tZW50LmlkXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBub0FqYXg6IHRydWVcbiAgICAgICAgICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuY29tbWVudHMudW5zaGlmdCh7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQsXG4gICAgICAgICAgICAgICAgICAgIHVzZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF2YXRhclVybDogdXNlckluZm8uYXZhdGFyVXJsLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmlja05hbWU6IHVzZXJJbmZvLm5pY2tOYW1lXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZWRfYXQ6IG5ldyBEYXRlKCksXG4gICAgICAgICAgICAgICAgICAgIHVzZXJfaWQ6IHVzZXJJbmZvLmlkXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB0aGlzLmlucHV0VmFsdWUgPSAnJ1xuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgICAgICAgIH0pLmNhdGNoKCgpID0+IHtcbiAgICAgICAgICAgICAgICB3ZXB5LnNob3dUb2FzdCh7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn6K+E6K665aSx6LSlJyxcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ25vbmUnLFxuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMjAwMFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIG1ldGhvZHMgPSB7XG4gICAgICAgICAgICB0b2dnbGVVcHZvdGUgKCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLm1vbWVudC5oYXNaYW4pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdFVwdm90ZShmYWxzZSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdFVwdm90ZSh0cnVlKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRvZ2dsZU1vbWVudHMgKCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0b2dnbGVNb21lbnRzJylcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb21tZW50IChkYXRhKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRDb21tZW50KGRhdGEpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdG91Y2hJbWFnZSAoZSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpXG4gICAgICAgICAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBgLi4vLi4vcGFnZXMvc2hvdy9pbWFnZS16b29tP3VybD0ke2UuY3VycmVudFRhcmdldC5kYXRhc2V0LnVybH1gXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBhc3luYyByZXF1ZXN0VXB2b3RlIChpc1VwVm90ZSkge1xuICAgICAgICAgICAgYXdhaXQgZ2V0RmV0Y2goYC9jaXJjbGVzLyR7dGhpcy5tb21lbnQuaWR9LyR7aXNVcFZvdGUgPyAnemFuJyA6ICd1bnphbid9YCwge1xuICAgICAgICAgICAgICAgIG5vQWpheDogdHJ1ZVxuICAgICAgICAgICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5tb21lbnQuaGFzWmFuID0gIXRoaXMubW9tZW50Lmhhc1phblxuICAgICAgICAgICAgICAgIHRoaXMubW9tZW50LnVwdm90ZU51bSA9IHRoaXMubW9tZW50Lmhhc1phbiA/IHRoaXMubW9tZW50LnVwdm90ZU51bSArIDEgOiB0aGlzLm1vbWVudC51cHZvdGVOdW0gPiAxID8gdGhpcy5tb21lbnQudXB2b3RlTnVtIC0gMSA6IDBcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIGFzeW5jIG9uTG9hZCAob3B0aW9ucykge1xuICAgICAgICAgICAgY29uc3QgcnNwID0gYXdhaXQgZ2V0RmV0Y2goYC9jaXJjbGVzLyR7b3B0aW9ucy5pZCB8fCAxfWApXG4gICAgICAgICAgICB0aGlzLm1vbWVudCA9IHJzcC5jaXJjbGVcbiAgICAgICAgICAgIC8vIHRoaXMubW9tZW50Lmhhc1phbiA9IHJzcC5oYXNaYW5cbiAgICAgICAgICAgIHRoaXMubW9tZW50LnVwdm90ZU51bSA9IHJzcC5jaXJjbGUudGFyZ2V0cy5sZW5ndGhcbiAgICAgICAgICAgIHRoaXMubW9tZW50LmNvbW1lbnRzTnVtID0gcnNwLmNpcmNsZS5jb21tZW50cy5sZW5ndGhcbiAgICAgICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgICAgfVxuICAgIH1cbiJdfQ==