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
        }, _this.$repeat = {}, _this.$props = { "v-moment": { "xmlns:v-bind": "", "v-bind:moment.sync": "momentData" } }, _this.$events = {}, _this.components = {
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
                    upvoteNum: this.moment.targets.length,
                    favoriteNum: this.moment.comments.length
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
        }, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
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
        key: 'onLoad',
        value: function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(options) {
                var rsp;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _context2.next = 2;
                                return (0, _fetch.getFetch)('/circles/' + (options.id || 1));

                            case 2:
                                rsp = _context2.sent;

                                this.moment = rsp.circle;
                                this.$apply();

                            case 5:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function onLoad(_x) {
                return _ref3.apply(this, arguments);
            }

            return onLoad;
        }()
    }]);

    return Index;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/detail/moment'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vbWVudC5qcyJdLCJuYW1lcyI6WyJJbmRleCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJjb21wdXRlZCIsIm1vbWVudERhdGEiLCJ1c2VyIiwibW9tZW50IiwiYXZhdGFyIiwiYXZhdGFyVXJsIiwibmFtZSIsIm5pY2tOYW1lIiwiY29udGVudCIsImltYWdlcyIsImNpcmNsZV9pbWdzIiwiY3JlYXRlVGltZSIsImNyZWF0ZWRfYXQiLCJ1cHZvdGVOdW0iLCJ0YXJnZXRzIiwibGVuZ3RoIiwiZmF2b3JpdGVOdW0iLCJjb21tZW50cyIsImRhdGEiLCJpbnB1dE1vbWVudCIsImNvbnRleHQiLCJtZXRob2RzIiwiZSIsImRldGFpbCIsInZhbHVlIiwiY2lyY2xlX2lkIiwiaWQiLCJub0FqYXgiLCJyc3AiLCJjb25zb2xlIiwibG9nIiwib3B0aW9ucyIsImNpcmNsZSIsIiRhcHBseSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNJOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7Ozt3TEFDakJDLE0sR0FBUztBQUNMQyxvQ0FBd0I7QUFEbkIsUyxRQUlWQyxPLEdBQVUsRSxRQUNqQkMsTSxHQUFTLEVBQUMsWUFBVyxFQUFDLGdCQUFlLEVBQWhCLEVBQW1CLHNCQUFxQixZQUF4QyxFQUFaLEUsUUFDVEMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ0Y7QUFERSxTLFFBSU5DLFEsR0FBVztBQUNQQyxzQkFETyx3QkFDTztBQUNWLG9CQUFNQyxPQUFPLEtBQUtDLE1BQUwsQ0FBWUQsSUFBWixJQUFvQixFQUFqQztBQUNBLHVCQUFPO0FBQ0hFLDRCQUFRRixLQUFLRyxTQURWO0FBRUhDLDBCQUFNSixLQUFLSyxRQUZSO0FBR0hDLDZCQUFTLEtBQUtMLE1BQUwsQ0FBWUssT0FIbEI7QUFJSEMsNEJBQVEsdUJBQVcsS0FBS04sTUFBTCxDQUFZTyxXQUF2QixDQUpMO0FBS0hDLGdDQUFZLEtBQUtSLE1BQUwsQ0FBWVMsVUFBWixJQUEwQixPQUxuQztBQU1IQywrQkFBVyxLQUFLVixNQUFMLENBQVlXLE9BQVosQ0FBb0JDLE1BTjVCO0FBT0hDLGlDQUFhLEtBQUtiLE1BQUwsQ0FBWWMsUUFBWixDQUFxQkY7QUFQL0IsaUJBQVA7QUFTSDtBQVpNLFMsUUFlWEcsSSxHQUFPO0FBQ0hDLHlCQUFhLEVBRFY7QUFFSGhCLG9CQUFRO0FBQ0pPLDZCQUFhLEVBRFQ7QUFFSkkseUJBQVMsRUFGTDtBQUdKRywwQkFBVSxFQUhOO0FBSUpmLHNCQUFNO0FBSkYsYUFGTDtBQVFIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQWUsc0JBQVUsQ0FBQztBQUNQRyx5QkFBUztBQURGLGFBQUQsRUFFUDtBQUNDQSx5QkFBUztBQURWLGFBRk8sRUFJUDtBQUNDQSx5QkFBUztBQURWLGFBSk8sRUFNUDtBQUNDQSx5QkFBUztBQURWLGFBTk87QUF6QlAsUyxRQWlEUEMsTyxHQUFVLEU7Ozs7O3lDQWRRQyxDLEVBQUc7QUFDakIsaUJBQUtILFdBQUwsR0FBbUJHLEVBQUVDLE1BQUYsQ0FBU0MsS0FBNUI7QUFDSDs7Ozs7Ozs7Ozs7dUNBR3FCLHNCQUFVLGtCQUFWLEVBQThCO0FBQzVDTiwwQ0FBTTtBQUNGVixpREFBUyxLQUFLVyxXQURaO0FBRUZNLG1EQUFXLEtBQUt0QixNQUFMLENBQVl1QjtBQUZyQixxQ0FEc0M7QUFLNUNDLDRDQUFRO0FBTG9DLGlDQUE5QixDOzs7QUFBWkMsbUM7O0FBT05DLHdDQUFRQyxHQUFSLENBQVlGLEdBQVo7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0dBSVVHLE87Ozs7Ozs7dUNBQ1Esb0NBQXFCQSxRQUFRTCxFQUFSLElBQWMsQ0FBbkMsRTs7O0FBQVpFLG1DOztBQUNOLHFDQUFLekIsTUFBTCxHQUFjeUIsSUFBSUksTUFBbEI7QUFDQSxxQ0FBS0MsTUFBTDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQWpGMkIsZUFBS0MsSTs7a0JBQW5CekMsSyIsImZpbGUiOiJtb21lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICAgIGltcG9ydCB7IGdldEZldGNoLCBwb3N0RmV0Y2ggfSBmcm9tICdAL21vZHVsZXMvY29tbW9uL2ZldGNoJ1xuICAgIGltcG9ydCBtb21lbnRDb21wb25lbnQgZnJvbSAnQC9jb21wb25lbnRzL21vbWVudCdcbiAgICBpbXBvcnQgeyBwYWRkaW5nSW1nIH0gZnJvbSAnQC9tb2R1bGVzL2NvbW1vbi91dGlscydcblxuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICAgICAgY29uZmlnID0ge1xuICAgICAgICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+aIkeeahCdcbiAgICAgICAgfVxuXG4gICAgICAgJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJ2LW1vbWVudFwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6bW9tZW50LnN5bmNcIjpcIm1vbWVudERhdGFcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgICAgICAgJ3YtbW9tZW50JzogbW9tZW50Q29tcG9uZW50XG4gICAgICAgIH1cblxuICAgICAgICBjb21wdXRlZCA9IHtcbiAgICAgICAgICAgIG1vbWVudERhdGEgKCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHVzZXIgPSB0aGlzLm1vbWVudC51c2VyIHx8IHt9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgYXZhdGFyOiB1c2VyLmF2YXRhclVybCxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogdXNlci5uaWNrTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogdGhpcy5tb21lbnQuY29udGVudCxcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VzOiBwYWRkaW5nSW1nKHRoaXMubW9tZW50LmNpcmNsZV9pbWdzKSxcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlVGltZTogdGhpcy5tb21lbnQuY3JlYXRlZF9hdCB8fCAn5peg6L+U5Zue5pe26Ze0JyxcbiAgICAgICAgICAgICAgICAgICAgdXB2b3RlTnVtOiB0aGlzLm1vbWVudC50YXJnZXRzLmxlbmd0aCxcbiAgICAgICAgICAgICAgICAgICAgZmF2b3JpdGVOdW06IHRoaXMubW9tZW50LmNvbW1lbnRzLmxlbmd0aFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGRhdGEgPSB7XG4gICAgICAgICAgICBpbnB1dE1vbWVudDogJycsXG4gICAgICAgICAgICBtb21lbnQ6IHtcbiAgICAgICAgICAgICAgICBjaXJjbGVfaW1nczogW10sXG4gICAgICAgICAgICAgICAgdGFyZ2V0czogW10sXG4gICAgICAgICAgICAgICAgY29tbWVudHM6IFtdLFxuICAgICAgICAgICAgICAgIHVzZXI6IHt9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy8gbW9tZW50OiB7XG4gICAgICAgICAgICAvLyAgICAgYXZhdGFyOiAnaHR0cHM6Ly9tb2Rhby5jYy91cGxvYWRzMy9pbWFnZXMvMTAyNC8xMDI0NjQ5Mi9yYXdfMTQ5NzM0MDUzNS5qcGVnJyxcbiAgICAgICAgICAgIC8vICAgICBuYW1lOiAn6K+46JGbwrfliJhnbG9yaWEnLFxuICAgICAgICAgICAgLy8gICAgIGNvbnRlbnQ6ICfkuI7mn7Poir3nm7jpgYfkuZ/mmK/lgbbnhLbvvIzlnKjoj5zlnLrlhoXnmoTkuIDloIbmkYrkvY3pl7TvvIzlj5HnjrDkuI3otbfnnLznmoTkuIDlsI/ooovpu4Tnm4jnm4jnmoTlq6noir3jgILlhbblrp7mnInngrnkuo7lv4PkuI3lv43vvIzov5npg73mmK/ku47mlrDnu7/nmoTmn7PmnaHkuIrmkZjkuIvmnaXnmoTlkKfjgILkvYbov5jmmK/lv43kuI3kvY/mg7PlsJ3pspznmoTmhL/mhI/vvIzkubDkuobkuIDngrnjgILkuIDngrnngrnvvIzlt7LlpJ/lgZrlh7rlpb3lh6DkuKroj5zkuobjgILlupTml7blupTmma/vvIzlsJ3kuKrmlrDpspzlkKcnLFxuICAgICAgICAgICAgLy8gICAgIGltYWdlczogcGFkZGluZ0ltZyhbXG4gICAgICAgICAgICAvLyAgICAgICAgICdodHRwczovL21vZGFvLmNjL3VwbG9hZHMzL2ltYWdlcy8xMDI0LzEwMjQ2NjU1L3Jhd18xNDk3MzQwNzQ3LmpwZWcnLFxuICAgICAgICAgICAgLy8gICAgICAgICAnaHR0cHM6Ly9tb2Rhby5jYy91cGxvYWRzMy9pbWFnZXMvMTAyNC8xMDI0NjY1Ni9yYXdfMTQ5NzM0MDc0Ny5qcGVnJyxcbiAgICAgICAgICAgIC8vICAgICAgICAgJ2h0dHBzOi8vbW9kYW8uY2MvdXBsb2FkczMvaW1hZ2VzLzEwMjQvMTAyNDY2NTYvcmF3XzE0OTczNDA3NDcuanBlZydcbiAgICAgICAgICAgIC8vICAgICBdKSxcbiAgICAgICAgICAgIC8vICAgICBjcmVhdGVUaW1lOiAnMeWwj+aXtuWJjScsXG4gICAgICAgICAgICAvLyAgICAgY29tbW9uczogW3tcbiAgICAgICAgICAgIC8vICAgICAgICAgbmFtZTogJ+ivhOiuuuiAhScsXG4gICAgICAgICAgICAvLyAgICAgICAgIGNvbW1vbnQ6ICfor4Torrror4Torrror4Torrror4Torrror4Torrror4Torrror4Torrror4TorronXG4gICAgICAgICAgICAvLyAgICAgfV0sXG4gICAgICAgICAgICAvLyAgICAgdXB2b3RlTnVtOiAxMCxcbiAgICAgICAgICAgIC8vICAgICBmYXZvcml0ZU51bTogMjBcbiAgICAgICAgICAgIC8vIH0sXG4gICAgICAgICAgICBjb21tZW50czogW3tcbiAgICAgICAgICAgICAgICBjb250ZXh0OiAn6K+E6K666K+E6K666K+E6K666K+E6K666K+E6K666K+E6K666K+E6K666K+E6K666K+E6K666K+E6K666K+E6K66J1xuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGNvbnRleHQ6ICfor4Torrror4Torrror4Torrror4Torrror4Torrror4Torrror4Torrror4Torrror4Torrror4Torrror4TorronXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgY29udGV4dDogJ+ivhOiuuuivhOiuuuivhOiuuuivhOiuuuivhOiuuuivhOiuuuivhOiuuuivhOiuuuivhOiuuuivhOiuuuivhOiuuidcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBjb250ZXh0OiAn6K+E6K666K+E6K666K+E6K666K+E6K666K+E6K666K+E6K666K+E6K666K+E6K666K+E6K666K+E6K666K+E6K66J1xuICAgICAgICAgICAgfV1cbiAgICAgICAgfVxuICAgICAgICBiaW5kQ29tbWVudElucHV0IChlKSB7XG4gICAgICAgICAgICB0aGlzLmlucHV0TW9tZW50ID0gZS5kZXRhaWwudmFsdWVcbiAgICAgICAgfVxuXG4gICAgICAgIGFzeW5jIGFkZENvbW1lbnQgKCkge1xuICAgICAgICAgICAgY29uc3QgcnNwID0gYXdhaXQgcG9zdEZldGNoKCcvY2lyY2xlcy9jb21tZW50Jywge1xuICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogdGhpcy5pbnB1dE1vbWVudCxcbiAgICAgICAgICAgICAgICAgICAgY2lyY2xlX2lkOiB0aGlzLm1vbWVudC5pZFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgbm9BamF4OiB0cnVlXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgY29uc29sZS5sb2cocnNwKVxuICAgICAgICB9XG4gICAgICAgIG1ldGhvZHMgPSB7XG4gICAgICAgIH1cbiAgICAgICAgYXN5bmMgb25Mb2FkIChvcHRpb25zKSB7XG4gICAgICAgICAgICBjb25zdCByc3AgPSBhd2FpdCBnZXRGZXRjaChgL2NpcmNsZXMvJHtvcHRpb25zLmlkIHx8IDF9YClcbiAgICAgICAgICAgIHRoaXMubW9tZW50ID0gcnNwLmNpcmNsZVxuICAgICAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgICB9XG4gICAgfVxuIl19