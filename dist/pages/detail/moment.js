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
        }, _this.$repeat = {}, _this.$props = { "v-moment": { "xmlns:v-bind": "", "v-bind:moment.sync": "momentData", "xmlns:v-on": "" } }, _this.$events = { "v-moment": { "v-on:toggleUpvote": "toggleUpvote", "v-on:toggleMoments": "toggleMoments" } }, _this.components = {
            'v-moment': _moment2.default
        }, _this.computed = {
            momentData: function momentData() {
                var user = this.moment.user || {};
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
            inputMoment: '',
            moment: {
                circle_imgs: [],
                targets: [],
                comments: [],
                user: {}
            },
            // moment: {
            //     avatar: 'https://modao.cc/uploads3/images/1024/10246492/raw_1497340535.jpeg',
            //     name: '诸葛·刘gloria',
            //     content: '与柳芽相遇也是偶然，在菜场内的一堆摊位间，发现不起眼的一小袋黄盈盈的嫩芽。其实有点于心不忍，这都是从新绿的柳条上摘下来的吧。但还是忍不住想尝鲜的愿意，买了一点。一点点，已够做出好几个菜了。应时应景，尝个新鲜吧',
            //     images: paddingImg([
            //         'https://modao.cc/uploads3/images/1024/10246655/raw_1497340747.jpeg',
            //         'https://modao.cc/uploads3/images/1024/10246656/raw_1497340747.jpeg',
            //         'https://modao.cc/uploads3/images/1024/10246656/raw_1497340747.jpeg'
            //     ]),
            //     createTime: '1小时前',
            //     commons: [{
            //         name: '评论者',
            //         commont: '评论评论评论评论评论评论评论评论'
            //     }],
            //     upvoteNum: 10,
            //     favoriteNum: 20
            // },
            comments: [{
                context: '评论评论评论评论评论评论评论评论评论评论评论'
            }, {
                context: '评论评论评论评论评论评论评论评论评论评论评论'
            }, {
                context: '评论评论评论评论评论评论评论评论评论评论评论'
            }, {
                context: '评论评论评论评论评论评论评论评论评论评论评论'
            }]
        }, _this.methods = {
            toggleUpvote: function toggleUpvote() {
                if (this.moment.targets.length % 2 && this.moment.targets.length > 0) {
                    return this.requestUpvote(false);
                }
                return this.requestUpvote(true);
            },
            toggleMoments: function toggleMoments() {
                console.log('toggleMoments');
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Index, [{
        key: 'bindCommentInput',
        value: function bindCommentInput(e) {
            this.inputMoment = e.detail.value;
        }
    }, {
        key: 'addComment',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var rsp;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return (0, _fetch.postFetch)('/circles/comment', {
                                    data: {
                                        content: this.inputMoment,
                                        circle_id: this.moment.id
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

            function addComment() {
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

            function requestUpvote(_x) {
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

            function onLoad(_x2) {
                return _ref4.apply(this, arguments);
            }

            return onLoad;
        }()
    }]);

    return Index;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/detail/moment'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vbWVudC5qcyJdLCJuYW1lcyI6WyJJbmRleCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJjb21wdXRlZCIsIm1vbWVudERhdGEiLCJ1c2VyIiwibW9tZW50IiwiYXZhdGFyIiwiYXZhdGFyVXJsIiwibmFtZSIsIm5pY2tOYW1lIiwiY29udGVudCIsImltYWdlcyIsImNpcmNsZV9pbWdzIiwiY3JlYXRlVGltZSIsImNyZWF0ZWRfYXQiLCJ1cHZvdGVOdW0iLCJjb21tZW50cyIsImxlbmd0aCIsImZhdm9yaXRlTnVtIiwidGFyZ2V0cyIsImRhdGEiLCJpbnB1dE1vbWVudCIsImNvbnRleHQiLCJtZXRob2RzIiwidG9nZ2xlVXB2b3RlIiwicmVxdWVzdFVwdm90ZSIsInRvZ2dsZU1vbWVudHMiLCJjb25zb2xlIiwibG9nIiwiZSIsImRldGFpbCIsInZhbHVlIiwiY2lyY2xlX2lkIiwiaWQiLCJub0FqYXgiLCJyc3AiLCJpc1VwVm90ZSIsIm9wdGlvbnMiLCJjaXJjbGUiLCIkYXBwbHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDSTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7d0xBQ2pCQyxNLEdBQVM7QUFDTEMsb0NBQXdCO0FBRG5CLFMsUUFJVkMsTyxHQUFVLEUsUUFDakJDLE0sR0FBUyxFQUFDLFlBQVcsRUFBQyxnQkFBZSxFQUFoQixFQUFtQixzQkFBcUIsWUFBeEMsRUFBcUQsY0FBYSxFQUFsRSxFQUFaLEUsUUFDVEMsTyxHQUFVLEVBQUMsWUFBVyxFQUFDLHFCQUFvQixjQUFyQixFQUFvQyxzQkFBcUIsZUFBekQsRUFBWixFLFFBQ1RDLFUsR0FBYTtBQUNGO0FBREUsUyxRQUlOQyxRLEdBQVc7QUFDUEMsc0JBRE8sd0JBQ087QUFDVixvQkFBTUMsT0FBTyxLQUFLQyxNQUFMLENBQVlELElBQVosSUFBb0IsRUFBakM7QUFDQSx1QkFBTztBQUNIRSw0QkFBUUYsS0FBS0csU0FEVjtBQUVIQywwQkFBTUosS0FBS0ssUUFGUjtBQUdIQyw2QkFBUyxLQUFLTCxNQUFMLENBQVlLLE9BSGxCO0FBSUhDLDRCQUFRLHVCQUFXLEtBQUtOLE1BQUwsQ0FBWU8sV0FBdkIsQ0FKTDtBQUtIQyxnQ0FBWSxLQUFLUixNQUFMLENBQVlTLFVBQVosSUFBMEIsT0FMbkM7QUFNSEMsK0JBQVcsS0FBS1YsTUFBTCxDQUFZVyxRQUFaLENBQXFCQyxNQU43QjtBQU9IQyxpQ0FBYSxLQUFLYixNQUFMLENBQVljLE9BQVosQ0FBb0JGO0FBUDlCLGlCQUFQO0FBU0g7QUFaTSxTLFFBZVhHLEksR0FBTztBQUNIQyx5QkFBYSxFQURWO0FBRUhoQixvQkFBUTtBQUNKTyw2QkFBYSxFQURUO0FBRUpPLHlCQUFTLEVBRkw7QUFHSkgsMEJBQVUsRUFITjtBQUlKWixzQkFBTTtBQUpGLGFBRkw7QUFRSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0FZLHNCQUFVLENBQUM7QUFDUE0seUJBQVM7QUFERixhQUFELEVBRVA7QUFDQ0EseUJBQVM7QUFEVixhQUZPLEVBSVA7QUFDQ0EseUJBQVM7QUFEVixhQUpPLEVBTVA7QUFDQ0EseUJBQVM7QUFEVixhQU5PO0FBekJQLFMsUUFpRFBDLE8sR0FBVTtBQUNOQyx3QkFETSwwQkFDVTtBQUNaLG9CQUFJLEtBQUtuQixNQUFMLENBQVljLE9BQVosQ0FBb0JGLE1BQXBCLEdBQTZCLENBQTdCLElBQWtDLEtBQUtaLE1BQUwsQ0FBWWMsT0FBWixDQUFvQkYsTUFBcEIsR0FBNkIsQ0FBbkUsRUFBc0U7QUFDbEUsMkJBQU8sS0FBS1EsYUFBTCxDQUFtQixLQUFuQixDQUFQO0FBQ0g7QUFDRCx1QkFBTyxLQUFLQSxhQUFMLENBQW1CLElBQW5CLENBQVA7QUFDSCxhQU5LO0FBT05DLHlCQVBNLDJCQU9XO0FBQ2JDLHdCQUFRQyxHQUFSLENBQVksZUFBWjtBQUNIO0FBVEssUzs7Ozs7eUNBZFFDLEMsRUFBRztBQUNqQixpQkFBS1IsV0FBTCxHQUFtQlEsRUFBRUMsTUFBRixDQUFTQyxLQUE1QjtBQUNIOzs7Ozs7Ozs7Ozt1Q0FHcUIsc0JBQVUsa0JBQVYsRUFBOEI7QUFDNUNYLDBDQUFNO0FBQ0ZWLGlEQUFTLEtBQUtXLFdBRFo7QUFFRlcsbURBQVcsS0FBSzNCLE1BQUwsQ0FBWTRCO0FBRnJCLHFDQURzQztBQUs1Q0MsNENBQVE7QUFMb0MsaUNBQTlCLEM7OztBQUFaQyxtQzs7QUFPTlIsd0NBQVFDLEdBQVIsQ0FBWU8sR0FBWjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrR0FhaUJDLFE7Ozs7Ozs7dUNBQ0MsbUNBQXFCLEtBQUsvQixNQUFMLENBQVk0QixFQUFqQyxVQUF1Q0csV0FBVyxLQUFYLEdBQW1CLE9BQTFELEdBQXFFO0FBQ25GRiw0Q0FBUTtBQUQyRSxpQ0FBckUsQzs7O0FBQVpDLG1DOztBQUdOUix3Q0FBUUMsR0FBUixDQUFZTyxHQUFaOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tHQUVVRSxPOzs7Ozs7O3VDQUNRLG9DQUFxQkEsUUFBUUosRUFBUixJQUFjLENBQW5DLEU7OztBQUFaRSxtQzs7QUFDTixxQ0FBSzlCLE1BQUwsR0FBYzhCLElBQUlHLE1BQWxCO0FBQ0EscUNBQUtDLE1BQUw7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFoRzJCLGVBQUtDLEk7O2tCQUFuQjdDLEsiLCJmaWxlIjoibW9tZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgICBpbXBvcnQgeyBnZXRGZXRjaCwgcG9zdEZldGNoIH0gZnJvbSAnQC9tb2R1bGVzL2NvbW1vbi9mZXRjaCdcbiAgICBpbXBvcnQgbW9tZW50Q29tcG9uZW50IGZyb20gJ0AvY29tcG9uZW50cy9tb21lbnQnXG4gICAgaW1wb3J0IHsgcGFkZGluZ0ltZyB9IGZyb20gJ0AvbW9kdWxlcy9jb21tb24vdXRpbHMnXG5cbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgICAgIGNvbmZpZyA9IHtcbiAgICAgICAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfmiJHnmoQnXG4gICAgICAgIH1cblxuICAgICAgICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1widi1tb21lbnRcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOm1vbWVudC5zeW5jXCI6XCJtb21lbnREYXRhXCIsXCJ4bWxuczp2LW9uXCI6XCJcIn19O1xyXG4kZXZlbnRzID0ge1widi1tb21lbnRcIjp7XCJ2LW9uOnRvZ2dsZVVwdm90ZVwiOlwidG9nZ2xlVXB2b3RlXCIsXCJ2LW9uOnRvZ2dsZU1vbWVudHNcIjpcInRvZ2dsZU1vbWVudHNcIn19O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICAgICAgICAgICd2LW1vbWVudCc6IG1vbWVudENvbXBvbmVudFxuICAgICAgICB9XG5cbiAgICAgICAgY29tcHV0ZWQgPSB7XG4gICAgICAgICAgICBtb21lbnREYXRhICgpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB1c2VyID0gdGhpcy5tb21lbnQudXNlciB8fCB7fVxuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGF2YXRhcjogdXNlci5hdmF0YXJVcmwsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IHVzZXIubmlja05hbWUsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IHRoaXMubW9tZW50LmNvbnRlbnQsXG4gICAgICAgICAgICAgICAgICAgIGltYWdlczogcGFkZGluZ0ltZyh0aGlzLm1vbWVudC5jaXJjbGVfaW1ncyksXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZVRpbWU6IHRoaXMubW9tZW50LmNyZWF0ZWRfYXQgfHwgJ+aXoOi/lOWbnuaXtumXtCcsXG4gICAgICAgICAgICAgICAgICAgIHVwdm90ZU51bTogdGhpcy5tb21lbnQuY29tbWVudHMubGVuZ3RoLFxuICAgICAgICAgICAgICAgICAgICBmYXZvcml0ZU51bTogdGhpcy5tb21lbnQudGFyZ2V0cy5sZW5ndGhcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBkYXRhID0ge1xuICAgICAgICAgICAgaW5wdXRNb21lbnQ6ICcnLFxuICAgICAgICAgICAgbW9tZW50OiB7XG4gICAgICAgICAgICAgICAgY2lyY2xlX2ltZ3M6IFtdLFxuICAgICAgICAgICAgICAgIHRhcmdldHM6IFtdLFxuICAgICAgICAgICAgICAgIGNvbW1lbnRzOiBbXSxcbiAgICAgICAgICAgICAgICB1c2VyOiB7fVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8vIG1vbWVudDoge1xuICAgICAgICAgICAgLy8gICAgIGF2YXRhcjogJ2h0dHBzOi8vbW9kYW8uY2MvdXBsb2FkczMvaW1hZ2VzLzEwMjQvMTAyNDY0OTIvcmF3XzE0OTczNDA1MzUuanBlZycsXG4gICAgICAgICAgICAvLyAgICAgbmFtZTogJ+ivuOiRm8K35YiYZ2xvcmlhJyxcbiAgICAgICAgICAgIC8vICAgICBjb250ZW50OiAn5LiO5p+z6Iq955u46YGH5Lmf5piv5YG254S277yM5Zyo6I+c5Zy65YaF55qE5LiA5aCG5pGK5L2N6Ze077yM5Y+R546w5LiN6LW355y855qE5LiA5bCP6KKL6buE55uI55uI55qE5aup6Iq944CC5YW25a6e5pyJ54K55LqO5b+D5LiN5b+N77yM6L+Z6YO95piv5LuO5paw57u/55qE5p+z5p2h5LiK5pGY5LiL5p2l55qE5ZCn44CC5L2G6L+Y5piv5b+N5LiN5L2P5oOz5bCd6bKc55qE5oS/5oSP77yM5Lmw5LqG5LiA54K544CC5LiA54K554K577yM5bey5aSf5YGa5Ye65aW95Yeg5Liq6I+c5LqG44CC5bqU5pe25bqU5pmv77yM5bCd5Liq5paw6bKc5ZCnJyxcbiAgICAgICAgICAgIC8vICAgICBpbWFnZXM6IHBhZGRpbmdJbWcoW1xuICAgICAgICAgICAgLy8gICAgICAgICAnaHR0cHM6Ly9tb2Rhby5jYy91cGxvYWRzMy9pbWFnZXMvMTAyNC8xMDI0NjY1NS9yYXdfMTQ5NzM0MDc0Ny5qcGVnJyxcbiAgICAgICAgICAgIC8vICAgICAgICAgJ2h0dHBzOi8vbW9kYW8uY2MvdXBsb2FkczMvaW1hZ2VzLzEwMjQvMTAyNDY2NTYvcmF3XzE0OTczNDA3NDcuanBlZycsXG4gICAgICAgICAgICAvLyAgICAgICAgICdodHRwczovL21vZGFvLmNjL3VwbG9hZHMzL2ltYWdlcy8xMDI0LzEwMjQ2NjU2L3Jhd18xNDk3MzQwNzQ3LmpwZWcnXG4gICAgICAgICAgICAvLyAgICAgXSksXG4gICAgICAgICAgICAvLyAgICAgY3JlYXRlVGltZTogJzHlsI/ml7bliY0nLFxuICAgICAgICAgICAgLy8gICAgIGNvbW1vbnM6IFt7XG4gICAgICAgICAgICAvLyAgICAgICAgIG5hbWU6ICfor4TorrrogIUnLFxuICAgICAgICAgICAgLy8gICAgICAgICBjb21tb250OiAn6K+E6K666K+E6K666K+E6K666K+E6K666K+E6K666K+E6K666K+E6K666K+E6K66J1xuICAgICAgICAgICAgLy8gICAgIH1dLFxuICAgICAgICAgICAgLy8gICAgIHVwdm90ZU51bTogMTAsXG4gICAgICAgICAgICAvLyAgICAgZmF2b3JpdGVOdW06IDIwXG4gICAgICAgICAgICAvLyB9LFxuICAgICAgICAgICAgY29tbWVudHM6IFt7XG4gICAgICAgICAgICAgICAgY29udGV4dDogJ+ivhOiuuuivhOiuuuivhOiuuuivhOiuuuivhOiuuuivhOiuuuivhOiuuuivhOiuuuivhOiuuuivhOiuuuivhOiuuidcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBjb250ZXh0OiAn6K+E6K666K+E6K666K+E6K666K+E6K666K+E6K666K+E6K666K+E6K666K+E6K666K+E6K666K+E6K666K+E6K66J1xuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGNvbnRleHQ6ICfor4Torrror4Torrror4Torrror4Torrror4Torrror4Torrror4Torrror4Torrror4Torrror4Torrror4TorronXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgY29udGV4dDogJ+ivhOiuuuivhOiuuuivhOiuuuivhOiuuuivhOiuuuivhOiuuuivhOiuuuivhOiuuuivhOiuuuivhOiuuuivhOiuuidcbiAgICAgICAgICAgIH1dXG4gICAgICAgIH1cbiAgICAgICAgYmluZENvbW1lbnRJbnB1dCAoZSkge1xuICAgICAgICAgICAgdGhpcy5pbnB1dE1vbWVudCA9IGUuZGV0YWlsLnZhbHVlXG4gICAgICAgIH1cblxuICAgICAgICBhc3luYyBhZGRDb21tZW50ICgpIHtcbiAgICAgICAgICAgIGNvbnN0IHJzcCA9IGF3YWl0IHBvc3RGZXRjaCgnL2NpcmNsZXMvY29tbWVudCcsIHtcbiAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IHRoaXMuaW5wdXRNb21lbnQsXG4gICAgICAgICAgICAgICAgICAgIGNpcmNsZV9pZDogdGhpcy5tb21lbnQuaWRcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG5vQWpheDogdHJ1ZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJzcClcbiAgICAgICAgfVxuICAgICAgICBtZXRob2RzID0ge1xuICAgICAgICAgICAgdG9nZ2xlVXB2b3RlICgpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5tb21lbnQudGFyZ2V0cy5sZW5ndGggJSAyICYmIHRoaXMubW9tZW50LnRhcmdldHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0VXB2b3RlKGZhbHNlKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0VXB2b3RlKHRydWUpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdG9nZ2xlTW9tZW50cyAoKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3RvZ2dsZU1vbWVudHMnKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGFzeW5jIHJlcXVlc3RVcHZvdGUgKGlzVXBWb3RlKSB7XG4gICAgICAgICAgICBjb25zdCByc3AgPSBhd2FpdCBnZXRGZXRjaChgL2NpcmNsZXMvJHt0aGlzLm1vbWVudC5pZH0vJHtpc1VwVm90ZSA/ICd6YW4nIDogJ3VuemFuJ31gLCB7XG4gICAgICAgICAgICAgICAgbm9BamF4OiB0cnVlXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgY29uc29sZS5sb2cocnNwKVxuICAgICAgICB9XG4gICAgICAgIGFzeW5jIG9uTG9hZCAob3B0aW9ucykge1xuICAgICAgICAgICAgY29uc3QgcnNwID0gYXdhaXQgZ2V0RmV0Y2goYC9jaXJjbGVzLyR7b3B0aW9ucy5pZCB8fCAxfWApXG4gICAgICAgICAgICB0aGlzLm1vbWVudCA9IHJzcC5jaXJjbGVcbiAgICAgICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgICAgfVxuICAgIH1cbiJdfQ==