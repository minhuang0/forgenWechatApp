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
                    images: (0, _utils.paddingImg)(this.moment.circle_imgs.map(function (i) {
                        return i.imgUrl;
                    })),
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
                                    _this2.moment.hasZan = !_this2.moment.hasZan;
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
                                console.log(options);
                                _context3.next = 3;
                                return (0, _fetch.getFetch)('/circles/' + (options.id || 1));

                            case 3:
                                rsp = _context3.sent;

                                this.moment = rsp.circle;
                                this.moment.hasZan = rsp.hasZan;
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vbWVudC5qcyJdLCJuYW1lcyI6WyJJbmRleCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJjb21wdXRlZCIsIm1vbWVudERhdGEiLCJ1c2VyIiwibW9tZW50IiwiY29tbWVudHMiLCJhdmF0YXIiLCJhdmF0YXJVcmwiLCJuYW1lIiwibmlja05hbWUiLCJjb250ZW50IiwiaW1hZ2VzIiwiY2lyY2xlX2ltZ3MiLCJtYXAiLCJpIiwiaW1nVXJsIiwiY3JlYXRlVGltZSIsImNyZWF0ZWRfYXQiLCJ1cHZvdGVOdW0iLCJsZW5ndGgiLCJmYXZvcml0ZU51bSIsInRhcmdldHMiLCJkYXRhIiwiaW5wdXRWYWx1ZSIsIm1ldGhvZHMiLCJ0b2dnbGVVcHZvdGUiLCJoYXNaYW4iLCJyZXF1ZXN0VXB2b3RlIiwidG9nZ2xlTW9tZW50cyIsImNvbnNvbGUiLCJsb2ciLCJjb21tZW50IiwiYWRkQ29tbWVudCIsIiRwYXJlbnQiLCJnZXRVc2VySW5mbyIsInVzZXJJbmZvIiwiY2lyY2xlX2lkIiwiaWQiLCJub0FqYXgiLCJ0aGVuIiwidW5zaGlmdCIsIkRhdGUiLCJ1c2VyX2lkIiwiJGFwcGx5IiwiY2F0Y2giLCJzaG93VG9hc3QiLCJ0aXRsZSIsImljb24iLCJkdXJhdGlvbiIsImlzVXBWb3RlIiwicnNwIiwib3B0aW9ucyIsImNpcmNsZSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNJOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7d0xBQ2pCQyxNLEdBQVM7QUFDTEMsb0NBQXdCO0FBRG5CLFMsUUFJVkMsTyxHQUFVLEUsUUFDakJDLE0sR0FBUyxFQUFDLFlBQVcsRUFBQywwQkFBeUIsWUFBMUIsRUFBWixFQUFvRCxZQUFXLEVBQUMsZ0JBQWUsRUFBaEIsRUFBbUIsc0JBQXFCLFlB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RlgsNENBQVE7QUFEMkUsaUNBQXJFLEM7OztBQUFaWSxtQzs7QUFHTnJCLHdDQUFRQyxHQUFSLENBQVlvQixHQUFaOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tHQUVVQyxPOzs7Ozs7QUFDVnRCLHdDQUFRQyxHQUFSLENBQVlxQixPQUFaOzt1Q0FDa0Isb0NBQXFCQSxRQUFRZCxFQUFSLElBQWMsQ0FBbkMsRTs7O0FBQVphLG1DOztBQUNOLHFDQUFLOUMsTUFBTCxHQUFjOEMsSUFBSUUsTUFBbEI7QUFDQSxxQ0FBS2hELE1BQUwsQ0FBWXNCLE1BQVosR0FBcUJ3QixJQUFJeEIsTUFBekI7QUFDQSxxQ0FBS2lCLE1BQUw7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUExRjJCLGVBQUtVLEk7O2tCQUFuQjNELEsiLCJmaWxlIjoibW9tZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgICBpbXBvcnQgeyBnZXRGZXRjaCwgcG9zdEZldGNoIH0gZnJvbSAnQC9tb2R1bGVzL2NvbW1vbi9mZXRjaCdcbiAgICBpbXBvcnQgbW9tZW50Q29tcG9uZW50IGZyb20gJ0AvY29tcG9uZW50cy9tb21lbnQnXG4gICAgaW1wb3J0IENvbW1lbnRzIGZyb20gJ0AvY29tcG9uZW50cy9jb21tZW50cydcbiAgICBpbXBvcnQgRWRpdG9yIGZyb20gJ0AvY29tcG9uZW50cy9lZGl0b3InXG4gICAgaW1wb3J0IHsgcGFkZGluZ0ltZyB9IGZyb20gJ0AvbW9kdWxlcy9jb21tb24vdXRpbHMnXG5cbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgICAgIGNvbmZpZyA9IHtcbiAgICAgICAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfmiJHnmoQnXG4gICAgICAgIH1cblxuICAgICAgICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1widi1lZGl0b3JcIjp7XCJ2LWJpbmQ6aW5wdXRWYWx1ZS5zeW5jXCI6XCJpbnB1dFZhbHVlXCJ9LFwidi1tb21lbnRcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOm1vbWVudC5zeW5jXCI6XCJtb21lbnREYXRhXCIsXCJ4bWxuczp2LW9uXCI6XCJcIn0sXCJ2LWNvbW1lbnRzXCI6e1widi1iaW5kOmNvbW1lbnRzLnN5bmNcIjpcImNvbW1lbnRzXCJ9fTtcclxuJGV2ZW50cyA9IHtcInYtZWRpdG9yXCI6e1widi1vbjpjbGlja1wiOlwiY29tbWVudFwifSxcInYtbW9tZW50XCI6e1widi1vbjp0b2dnbGVVcHZvdGVcIjpcInRvZ2dsZVVwdm90ZVwiLFwidi1vbjp0b2dnbGVNb21lbnRzXCI6XCJ0b2dnbGVNb21lbnRzXCJ9fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICAgICAgICAndi1lZGl0b3InOiBFZGl0b3IsXG4gICAgICAgICAgICAndi1tb21lbnQnOiBtb21lbnRDb21wb25lbnQsXG4gICAgICAgICAgICAndi1jb21tZW50cyc6IENvbW1lbnRzXG4gICAgICAgIH1cblxuICAgICAgICBjb21wdXRlZCA9IHtcbiAgICAgICAgICAgIG1vbWVudERhdGEgKCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHVzZXIgPSB0aGlzLm1vbWVudC51c2VyIHx8IHt9XG4gICAgICAgICAgICAgICAgdGhpcy5jb21tZW50cyA9IHRoaXMubW9tZW50LmNvbW1lbnRzXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgYXZhdGFyOiB1c2VyLmF2YXRhclVybCxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogdXNlci5uaWNrTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogdGhpcy5tb21lbnQuY29udGVudCxcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VzOiBwYWRkaW5nSW1nKHRoaXMubW9tZW50LmNpcmNsZV9pbWdzLm1hcChpID0+IGkuaW1nVXJsKSksXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZVRpbWU6IHRoaXMubW9tZW50LmNyZWF0ZWRfYXQgfHwgJ+aXoOi/lOWbnuaXtumXtCcsXG4gICAgICAgICAgICAgICAgICAgIHVwdm90ZU51bTogdGhpcy5tb21lbnQuY29tbWVudHMubGVuZ3RoLFxuICAgICAgICAgICAgICAgICAgICBmYXZvcml0ZU51bTogdGhpcy5tb21lbnQudGFyZ2V0cy5sZW5ndGhcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBkYXRhID0ge1xuICAgICAgICAgICAgaW5wdXRWYWx1ZTogJycsXG4gICAgICAgICAgICBtb21lbnQ6IHtcbiAgICAgICAgICAgICAgICBjaXJjbGVfaW1nczogW10sXG4gICAgICAgICAgICAgICAgdGFyZ2V0czogW10sXG4gICAgICAgICAgICAgICAgY29tbWVudHM6IFtdLFxuICAgICAgICAgICAgICAgIHVzZXI6IHt9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29tbWVudHM6IFtdXG4gICAgICAgIH1cbiAgICAgICAgYXN5bmMgYWRkQ29tbWVudCAoY29udGVudCkge1xuICAgICAgICAgICAgY29uc3QgdXNlckluZm8gPSBhd2FpdCB0aGlzLiRwYXJlbnQuZ2V0VXNlckluZm8oKVxuICAgICAgICAgICAgYXdhaXQgcG9zdEZldGNoKCcvY2lyY2xlcy9jb21tZW50Jywge1xuICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgY29udGVudCxcbiAgICAgICAgICAgICAgICAgICAgY2lyY2xlX2lkOiB0aGlzLm1vbWVudC5pZFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgbm9BamF4OiB0cnVlXG4gICAgICAgICAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbW1lbnRzLnVuc2hpZnQoe1xuICAgICAgICAgICAgICAgICAgICBjb250ZW50LFxuICAgICAgICAgICAgICAgICAgICBjcmVhdGVkX2F0OiBuZXcgRGF0ZSgpLFxuICAgICAgICAgICAgICAgICAgICB1c2VyX2lkOiB1c2VySW5mby5uaWNrTmFtZVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgdGhpcy5pbnB1dFZhbHVlID0gJydcbiAgICAgICAgICAgICAgICB0aGlzLm1vbWVudC5oYXNaYW4gPSAhdGhpcy5tb21lbnQuaGFzWmFuXG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgICAgICAgfSkuY2F0Y2goKCkgPT4ge1xuICAgICAgICAgICAgICAgIHdlcHkuc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfor4TorrrlpLHotKUnLFxuICAgICAgICAgICAgICAgICAgICBpY29uOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgbWV0aG9kcyA9IHtcbiAgICAgICAgICAgIHRvZ2dsZVVwdm90ZSAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubW9tZW50Lmhhc1phbikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0VXB2b3RlKGZhbHNlKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0VXB2b3RlKHRydWUpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdG9nZ2xlTW9tZW50cyAoKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3RvZ2dsZU1vbWVudHMnKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNvbW1lbnQgKGRhdGEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFkZENvbW1lbnQoZGF0YSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBhc3luYyByZXF1ZXN0VXB2b3RlIChpc1VwVm90ZSkge1xuICAgICAgICAgICAgY29uc3QgcnNwID0gYXdhaXQgZ2V0RmV0Y2goYC9jaXJjbGVzLyR7dGhpcy5tb21lbnQuaWR9LyR7aXNVcFZvdGUgPyAnemFuJyA6ICd1bnphbid9YCwge1xuICAgICAgICAgICAgICAgIG5vQWpheDogdHJ1ZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJzcClcbiAgICAgICAgfVxuICAgICAgICBhc3luYyBvbkxvYWQgKG9wdGlvbnMpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG9wdGlvbnMpXG4gICAgICAgICAgICBjb25zdCByc3AgPSBhd2FpdCBnZXRGZXRjaChgL2NpcmNsZXMvJHtvcHRpb25zLmlkIHx8IDF9YClcbiAgICAgICAgICAgIHRoaXMubW9tZW50ID0gcnNwLmNpcmNsZVxuICAgICAgICAgICAgdGhpcy5tb21lbnQuaGFzWmFuID0gcnNwLmhhc1phblxuICAgICAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgICB9XG4gICAgfVxuIl19