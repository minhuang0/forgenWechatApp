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

var _comments = require('./../../components/comments.js');

var _comments2 = _interopRequireDefault(_comments);

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
        }, _this.$repeat = {}, _this.$props = { "v-editor": { "xmlns:v-on": "", "v-bind:inputValue.sync": "inputValue" }, "v-comments": { "xmlns:v-bind": "", "v-bind:comments.sync": "comments" } }, _this.$events = { "v-editor": { "v-on:click": "comment" } }, _this.components = {
            'v-editor': _editor2.default,
            'v-comments': _comments2.default
        }, _this.data = {
            inputValue: '',
            item: {
                tags: []
            },
            comments: [],
            userInfo: {}
        }, _this.computed = {
            tags: function tags() {
                return this.item.tags.reduce(function (value, t) {
                    return value + ' #' + t + '#';
                }, '');
            }
        }, _this.methods = {
            renderPost: function renderPost(post) {
                post.targetsLength = post.targets.length;
                post.commentsLength = post.comments.length;
                post.tags = post.topics.map(function (t) {
                    return t.name;
                });
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
                var _this2 = this;

                var userInfo, rsp;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return this.$parent.getUserInfo();

                            case 2:
                                userInfo = _context.sent;
                                _context.next = 5;
                                return (0, _fetch.postFetch)('/posts/comment', {
                                    data: {
                                        content: data,
                                        post_id: this.item.id
                                    },
                                    noAjax: true
                                }).then(function () {
                                    _this2.comments.unshift({
                                        content: data,
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
                                rsp = _context.sent;

                                console.log(rsp);

                            case 7:
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
                                return (0, _fetch.getFetch)('/posts/' + (options.id || 26));

                            case 2:
                                data = _context3.sent;
                                renderData = this.methods.renderPost(data.post);

                                this.item = renderData[0];
                                this.comments = this.item.comments;
                                this.userInfo = renderData[1];
                                this.$apply();
                                _wxParse2.default.wxParse('article', 'html', this.item.content, this, 0);
                                _wepy2.default.setNavigationBarTitle({
                                    title: this.item.title
                                });

                            case 10:
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImNvdW50ZXIiLCJJbmRleCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJkYXRhIiwiaW5wdXRWYWx1ZSIsIml0ZW0iLCJ0YWdzIiwiY29tbWVudHMiLCJ1c2VySW5mbyIsImNvbXB1dGVkIiwicmVkdWNlIiwidmFsdWUiLCJ0IiwibWV0aG9kcyIsInJlbmRlclBvc3QiLCJwb3N0IiwidGFyZ2V0c0xlbmd0aCIsInRhcmdldHMiLCJsZW5ndGgiLCJjb21tZW50c0xlbmd0aCIsInRvcGljcyIsIm1hcCIsIm5hbWUiLCJPYmplY3QiLCJhc3NpZ24iLCJuaWNrTmFtZSIsImF2YXRhclVybCIsInVzZXIiLCJjb21tZW50IiwicG9zdENvbW1lbnQiLCJ0b2dnbGVVcHZvdGUiLCJyZXF1ZXN0VXB2b3RlIiwiJHBhcmVudCIsImdldFVzZXJJbmZvIiwiY29udGVudCIsInBvc3RfaWQiLCJpZCIsIm5vQWpheCIsInRoZW4iLCJ1bnNoaWZ0IiwiY3JlYXRlZF9hdCIsIkRhdGUiLCJ1c2VyX2lkIiwiJGFwcGx5IiwiY2F0Y2giLCJzaG93VG9hc3QiLCJ0aXRsZSIsImljb24iLCJkdXJhdGlvbiIsInJzcCIsImNvbnNvbGUiLCJsb2ciLCJpc1VwVm90ZSIsIm9wdGlvbnMiLCJyZW5kZXJEYXRhIiwid3hQYXJzZSIsInNldE5hdmlnYXRpb25CYXJUaXRsZSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNJOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztBQUVBLElBQUlBLFVBQVUsQ0FBZDs7SUFDcUJDLEs7Ozs7Ozs7Ozs7Ozs7O3dMQUNqQkMsTSxHQUFTO0FBQ0xDLG9DQUF3QjtBQURuQixTLFFBR1ZDLE8sR0FBVSxFLFFBQ2pCQyxNLEdBQVMsRUFBQyxZQUFXLEVBQUMsY0FBYSxFQUFkLEVBQWlC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Ozs7Ozs7a0dBR1VJLE87Ozs7Ozs7dUNBQ1Msa0NBQW1CQSxRQUFRakIsRUFBUixJQUFjLEVBQWpDLEU7OztBQUFiakMsb0M7QUFDQW1ELDBDLEdBQWEsS0FBS3pDLE9BQUwsQ0FBYUMsVUFBYixDQUF3QlgsS0FBS1ksSUFBN0IsQzs7QUFDbkIscUNBQUtWLElBQUwsR0FBWWlELFdBQVcsQ0FBWCxDQUFaO0FBQ0EscUNBQUsvQyxRQUFMLEdBQWdCLEtBQUtGLElBQUwsQ0FBVUUsUUFBMUI7QUFDQSxxQ0FBS0MsUUFBTCxHQUFnQjhDLFdBQVcsQ0FBWCxDQUFoQjtBQUNBLHFDQUFLWCxNQUFMO0FBQ0Esa0RBQVFZLE9BQVIsQ0FBZ0IsU0FBaEIsRUFBMkIsTUFBM0IsRUFBbUMsS0FBS2xELElBQUwsQ0FBVTZCLE9BQTdDLEVBQXNELElBQXRELEVBQTRELENBQTVEO0FBQ0EsK0NBQUtzQixxQkFBTCxDQUEyQjtBQUN2QlYsMkNBQU8sS0FBS3pDLElBQUwsQ0FBVXlDO0FBRE0saUNBQTNCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBekYyQixlQUFLVyxJOztrQkFBbkI3RCxLIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgICBpbXBvcnQgV3hQYXJzZSBmcm9tICcuLi8uLi9saWJzL3d4UGFyc2Uvd3hQYXJzZS5qcydcbiAgICBpbXBvcnQgeyBnZXRGZXRjaCwgcG9zdEZldGNoIH0gZnJvbSAnQC9tb2R1bGVzL2NvbW1vbi9mZXRjaCdcbiAgICBpbXBvcnQgRWRpdG9yIGZyb20gJ0AvY29tcG9uZW50cy9lZGl0b3InXG4gICAgaW1wb3J0IENvbW1lbnRzIGZyb20gJ0AvY29tcG9uZW50cy9jb21tZW50cydcblxuICAgIGxldCBjb3VudGVyID0gMFxuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICAgICAgY29uZmlnID0ge1xuICAgICAgICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+aWh+eroCdcbiAgICAgICAgfVxuICAgICAgICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1widi1lZGl0b3JcIjp7XCJ4bWxuczp2LW9uXCI6XCJcIixcInYtYmluZDppbnB1dFZhbHVlLnN5bmNcIjpcImlucHV0VmFsdWVcIn0sXCJ2LWNvbW1lbnRzXCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDpjb21tZW50cy5zeW5jXCI6XCJjb21tZW50c1wifX07XHJcbiRldmVudHMgPSB7XCJ2LWVkaXRvclwiOntcInYtb246Y2xpY2tcIjpcImNvbW1lbnRcIn19O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICAgICAgICAgICd2LWVkaXRvcic6IEVkaXRvcixcbiAgICAgICAgICAgICd2LWNvbW1lbnRzJzogQ29tbWVudHNcbiAgICAgICAgfVxuICAgICAgICBkYXRhID0ge1xuICAgICAgICAgICAgaW5wdXRWYWx1ZTogJycsXG4gICAgICAgICAgICBpdGVtOiB7XG4gICAgICAgICAgICAgICAgdGFnczogW11cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb21tZW50czogW10sXG4gICAgICAgICAgICB1c2VySW5mbzoge31cbiAgICAgICAgfVxuICAgICAgICBjb21wdXRlZCA9IHtcbiAgICAgICAgICAgIHRhZ3MgKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLml0ZW0udGFncy5yZWR1Y2UoKHZhbHVlLCB0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBgJHt2YWx1ZX0gIyR7dH0jYFxuICAgICAgICAgICAgICAgIH0sICcnKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbWV0aG9kcyA9IHtcbiAgICAgICAgICAgIHJlbmRlclBvc3QgKHBvc3QpIHtcbiAgICAgICAgICAgICAgICBwb3N0LnRhcmdldHNMZW5ndGggPSBwb3N0LnRhcmdldHMubGVuZ3RoXG4gICAgICAgICAgICAgICAgcG9zdC5jb21tZW50c0xlbmd0aCA9IHBvc3QuY29tbWVudHMubGVuZ3RoXG4gICAgICAgICAgICAgICAgcG9zdC50YWdzID0gcG9zdC50b3BpY3MubWFwKHQgPT4gdC5uYW1lKVxuICAgICAgICAgICAgICAgIGNvbnN0IHVzZXJJbmZvID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICAgICAgICAgIG5pY2tOYW1lOiAn5bCP5qOuJyxcbiAgICAgICAgICAgICAgICAgICAgYXZhdGFyVXJsOiAnaHR0cDovL3N0YXRpYy5odHhxLm5ldC9VcGxvYWRGaWxlcy9oZWFkaW1nLzIwMTYwNzIxMTQyNTI5MjQyLmpwZydcbiAgICAgICAgICAgICAgICB9LCBwb3N0LnVzZXIgfHwge30pXG4gICAgICAgICAgICAgICAgcmV0dXJuIFtwb3N0LCB1c2VySW5mb11cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb21tZW50IChkYXRhKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3N0Q29tbWVudChkYXRhKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRvZ2dsZVVwdm90ZSAoKSB7XG4gICAgICAgICAgICAgICAgKytjb3VudGVyXG4gICAgICAgICAgICAgICAgaWYgKGNvdW50ZXIgJSAyKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RVcHZvdGUoZmFsc2UpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RVcHZvdGUodHJ1ZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBhc3luYyBwb3N0Q29tbWVudCAoZGF0YSkge1xuICAgICAgICAgICAgY29uc3QgdXNlckluZm8gPSBhd2FpdCB0aGlzLiRwYXJlbnQuZ2V0VXNlckluZm8oKVxuICAgICAgICAgICAgY29uc3QgcnNwID0gYXdhaXQgcG9zdEZldGNoKCcvcG9zdHMvY29tbWVudCcsIHtcbiAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IGRhdGEsXG4gICAgICAgICAgICAgICAgICAgIHBvc3RfaWQ6IHRoaXMuaXRlbS5pZFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgbm9BamF4OiB0cnVlXG4gICAgICAgICAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbW1lbnRzLnVuc2hpZnQoe1xuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBkYXRhLFxuICAgICAgICAgICAgICAgICAgICBjcmVhdGVkX2F0OiBuZXcgRGF0ZSgpLFxuICAgICAgICAgICAgICAgICAgICB1c2VyX2lkOiB1c2VySW5mby5uaWNrTmFtZVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgdGhpcy5pbnB1dFZhbHVlID0gJydcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICAgICAgICB9KS5jYXRjaCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgd2VweS5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+ivhOiuuuWksei0pScsXG4gICAgICAgICAgICAgICAgICAgIGljb246ICdub25lJyxcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDIwMDBcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJzcClcbiAgICAgICAgfVxuICAgICAgICBhc3luYyByZXF1ZXN0VXB2b3RlIChpc1VwVm90ZSkge1xuICAgICAgICAgICAgY29uc3QgcnNwID0gYXdhaXQgZ2V0RmV0Y2goYC9wb3N0cy8ke3RoaXMuaXRlbS5pZH0vJHtpc1VwVm90ZSA/ICd6YW4nIDogJ3VuemFuJ31gLCB7XG4gICAgICAgICAgICAgICAgbm9BamF4OiB0cnVlXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgY29uc29sZS5sb2cocnNwKVxuICAgICAgICB9XG5cbiAgICAgICAgYXN5bmMgb25Mb2FkIChvcHRpb25zKSB7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0RmV0Y2goYC9wb3N0cy8ke29wdGlvbnMuaWQgfHwgMjZ9YClcbiAgICAgICAgICAgIGNvbnN0IHJlbmRlckRhdGEgPSB0aGlzLm1ldGhvZHMucmVuZGVyUG9zdChkYXRhLnBvc3QpXG4gICAgICAgICAgICB0aGlzLml0ZW0gPSByZW5kZXJEYXRhWzBdXG4gICAgICAgICAgICB0aGlzLmNvbW1lbnRzID0gdGhpcy5pdGVtLmNvbW1lbnRzXG4gICAgICAgICAgICB0aGlzLnVzZXJJbmZvID0gcmVuZGVyRGF0YVsxXVxuICAgICAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgICAgICAgV3hQYXJzZS53eFBhcnNlKCdhcnRpY2xlJywgJ2h0bWwnLCB0aGlzLml0ZW0uY29udGVudCwgdGhpcywgMClcbiAgICAgICAgICAgIHdlcHkuc2V0TmF2aWdhdGlvbkJhclRpdGxlKHtcbiAgICAgICAgICAgICAgICB0aXRsZTogdGhpcy5pdGVtLnRpdGxlXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuIl19