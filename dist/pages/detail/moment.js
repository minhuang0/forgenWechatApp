'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _moment = require('./../../components/moment.js');

var _moment2 = _interopRequireDefault(_moment);

var _utils = require('./../../modules/common/utils.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import { getFetch } from '@/modules/common/fetch'


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
        }, _this.$repeat = {}, _this.$props = { "v-moment": { "xmlns:v-bind": "", "v-bind:moment.once": "moment" } }, _this.$events = {}, _this.components = {
            'v-moment': _moment2.default
        }, _this.data = {
            inputMoment: '',
            // moment: {},
            moment: {
                avatar: 'https://modao.cc/uploads3/images/1024/10246492/raw_1497340535.jpeg',
                name: '诸葛·刘gloria',
                content: '与柳芽相遇也是偶然，在菜场内的一堆摊位间，发现不起眼的一小袋黄盈盈的嫩芽。其实有点于心不忍，这都是从新绿的柳条上摘下来的吧。但还是忍不住想尝鲜的愿意，买了一点。一点点，已够做出好几个菜了。应时应景，尝个新鲜吧',
                images: (0, _utils.paddingImg)(['https://modao.cc/uploads3/images/1024/10246655/raw_1497340747.jpeg', 'https://modao.cc/uploads3/images/1024/10246656/raw_1497340747.jpeg', 'https://modao.cc/uploads3/images/1024/10246656/raw_1497340747.jpeg']),
                createTime: '1小时前',
                commons: [{
                    name: '评论者',
                    commont: '评论评论评论评论评论评论评论评论'
                }],
                upvoteNum: 10,
                favoriteNum: 20
            },
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
            addComment: function addComment() {
                console.log(this.inputMoment);
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Index, [{
        key: 'bindCommentInput',
        value: function bindCommentInput(e) {
            this.inputMoment = e.detail.value;
        }
    }, {
        key: 'onLoad',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(options) {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
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


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/detail/moment'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vbWVudC5qcyJdLCJuYW1lcyI6WyJJbmRleCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJkYXRhIiwiaW5wdXRNb21lbnQiLCJtb21lbnQiLCJhdmF0YXIiLCJuYW1lIiwiY29udGVudCIsImltYWdlcyIsImNyZWF0ZVRpbWUiLCJjb21tb25zIiwiY29tbW9udCIsInVwdm90ZU51bSIsImZhdm9yaXRlTnVtIiwiY29tbWVudHMiLCJjb250ZXh0IiwibWV0aG9kcyIsImFkZENvbW1lbnQiLCJjb25zb2xlIiwibG9nIiwiZSIsImRldGFpbCIsInZhbHVlIiwib3B0aW9ucyIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNJOzs7O0FBRUE7Ozs7QUFDQTs7Ozs7Ozs7Ozs7QUFGQTs7O0lBSXFCQSxLOzs7Ozs7Ozs7Ozs7Ozt3TEFDakJDLE0sR0FBUztBQUNMQyxvQ0FBd0I7QUFEbkIsUyxRQUlWQyxPLEdBQVUsRSxRQUNqQkMsTSxHQUFTLEVBQUMsWUFBVyxFQUFDLGdCQUFlLEVBQWhCLEVBQW1CLHNCQUFxQixRQUF4QyxFQUFaLEUsUUFDVEMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ0Y7QUFERSxTLFFBSU5DLEksR0FBTztBQUNIQyx5QkFBYSxFQURWO0FBRUg7QUFDQUMsb0JBQVE7QUFDSkMsd0JBQVEsb0VBREo7QUFFSkMsc0JBQU0sWUFGRjtBQUdKQyx5QkFBUywwR0FITDtBQUlKQyx3QkFBUSx1QkFBVyxDQUNmLG9FQURlLEVBRWYsb0VBRmUsRUFHZixvRUFIZSxDQUFYLENBSko7QUFTSkMsNEJBQVksTUFUUjtBQVVKQyx5QkFBUyxDQUFDO0FBQ05KLDBCQUFNLEtBREE7QUFFTkssNkJBQVM7QUFGSCxpQkFBRCxDQVZMO0FBY0pDLDJCQUFXLEVBZFA7QUFlSkMsNkJBQWE7QUFmVCxhQUhMO0FBb0JIQyxzQkFBVSxDQUFDO0FBQ1BDLHlCQUFTO0FBREYsYUFBRCxFQUVQO0FBQ0NBLHlCQUFTO0FBRFYsYUFGTyxFQUlQO0FBQ0NBLHlCQUFTO0FBRFYsYUFKTyxFQU1QO0FBQ0NBLHlCQUFTO0FBRFYsYUFOTztBQXBCUCxTLFFBa0NQQyxPLEdBQVU7QUFDTkMsc0JBRE0sd0JBQ1E7QUFDVkMsd0JBQVFDLEdBQVIsQ0FBWSxLQUFLaEIsV0FBakI7QUFDSDtBQUhLLFM7Ozs7O3lDQUpRaUIsQyxFQUFHO0FBQ2pCLGlCQUFLakIsV0FBTCxHQUFtQmlCLEVBQUVDLE1BQUYsQ0FBU0MsS0FBNUI7QUFDSDs7OztpR0FPYUMsTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBbkRpQixlQUFLQyxJOztrQkFBbkI3QixLIiwiZmlsZSI6Im1vbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gICAgLy8gaW1wb3J0IHsgZ2V0RmV0Y2ggfSBmcm9tICdAL21vZHVsZXMvY29tbW9uL2ZldGNoJ1xuICAgIGltcG9ydCBtb21lbnRDb21wb25lbnQgZnJvbSAnQC9jb21wb25lbnRzL21vbWVudCdcbiAgICBpbXBvcnQgeyBwYWRkaW5nSW1nIH0gZnJvbSAnQC9tb2R1bGVzL2NvbW1vbi91dGlscydcblxuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICAgICAgY29uZmlnID0ge1xuICAgICAgICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+aIkeeahCdcbiAgICAgICAgfVxuXG4gICAgICAgJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJ2LW1vbWVudFwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6bW9tZW50Lm9uY2VcIjpcIm1vbWVudFwifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICAgICAgICAndi1tb21lbnQnOiBtb21lbnRDb21wb25lbnRcbiAgICAgICAgfVxuXG4gICAgICAgIGRhdGEgPSB7XG4gICAgICAgICAgICBpbnB1dE1vbWVudDogJycsXG4gICAgICAgICAgICAvLyBtb21lbnQ6IHt9LFxuICAgICAgICAgICAgbW9tZW50OiB7XG4gICAgICAgICAgICAgICAgYXZhdGFyOiAnaHR0cHM6Ly9tb2Rhby5jYy91cGxvYWRzMy9pbWFnZXMvMTAyNC8xMDI0NjQ5Mi9yYXdfMTQ5NzM0MDUzNS5qcGVnJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAn6K+46JGbwrfliJhnbG9yaWEnLFxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICfkuI7mn7Poir3nm7jpgYfkuZ/mmK/lgbbnhLbvvIzlnKjoj5zlnLrlhoXnmoTkuIDloIbmkYrkvY3pl7TvvIzlj5HnjrDkuI3otbfnnLznmoTkuIDlsI/ooovpu4Tnm4jnm4jnmoTlq6noir3jgILlhbblrp7mnInngrnkuo7lv4PkuI3lv43vvIzov5npg73mmK/ku47mlrDnu7/nmoTmn7PmnaHkuIrmkZjkuIvmnaXnmoTlkKfjgILkvYbov5jmmK/lv43kuI3kvY/mg7PlsJ3pspznmoTmhL/mhI/vvIzkubDkuobkuIDngrnjgILkuIDngrnngrnvvIzlt7LlpJ/lgZrlh7rlpb3lh6DkuKroj5zkuobjgILlupTml7blupTmma/vvIzlsJ3kuKrmlrDpspzlkKcnLFxuICAgICAgICAgICAgICAgIGltYWdlczogcGFkZGluZ0ltZyhbXG4gICAgICAgICAgICAgICAgICAgICdodHRwczovL21vZGFvLmNjL3VwbG9hZHMzL2ltYWdlcy8xMDI0LzEwMjQ2NjU1L3Jhd18xNDk3MzQwNzQ3LmpwZWcnLFxuICAgICAgICAgICAgICAgICAgICAnaHR0cHM6Ly9tb2Rhby5jYy91cGxvYWRzMy9pbWFnZXMvMTAyNC8xMDI0NjY1Ni9yYXdfMTQ5NzM0MDc0Ny5qcGVnJyxcbiAgICAgICAgICAgICAgICAgICAgJ2h0dHBzOi8vbW9kYW8uY2MvdXBsb2FkczMvaW1hZ2VzLzEwMjQvMTAyNDY2NTYvcmF3XzE0OTczNDA3NDcuanBlZydcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBjcmVhdGVUaW1lOiAnMeWwj+aXtuWJjScsXG4gICAgICAgICAgICAgICAgY29tbW9uczogW3tcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ+ivhOiuuuiAhScsXG4gICAgICAgICAgICAgICAgICAgIGNvbW1vbnQ6ICfor4Torrror4Torrror4Torrror4Torrror4Torrror4Torrror4Torrror4TorronXG4gICAgICAgICAgICAgICAgfV0sXG4gICAgICAgICAgICAgICAgdXB2b3RlTnVtOiAxMCxcbiAgICAgICAgICAgICAgICBmYXZvcml0ZU51bTogMjBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb21tZW50czogW3tcbiAgICAgICAgICAgICAgICBjb250ZXh0OiAn6K+E6K666K+E6K666K+E6K666K+E6K666K+E6K666K+E6K666K+E6K666K+E6K666K+E6K666K+E6K666K+E6K66J1xuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGNvbnRleHQ6ICfor4Torrror4Torrror4Torrror4Torrror4Torrror4Torrror4Torrror4Torrror4Torrror4Torrror4TorronXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgY29udGV4dDogJ+ivhOiuuuivhOiuuuivhOiuuuivhOiuuuivhOiuuuivhOiuuuivhOiuuuivhOiuuuivhOiuuuivhOiuuuivhOiuuidcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBjb250ZXh0OiAn6K+E6K666K+E6K666K+E6K666K+E6K666K+E6K666K+E6K666K+E6K666K+E6K666K+E6K666K+E6K666K+E6K66J1xuICAgICAgICAgICAgfV1cbiAgICAgICAgfVxuICAgICAgICBiaW5kQ29tbWVudElucHV0IChlKSB7XG4gICAgICAgICAgICB0aGlzLmlucHV0TW9tZW50ID0gZS5kZXRhaWwudmFsdWVcbiAgICAgICAgfVxuXG4gICAgICAgIG1ldGhvZHMgPSB7XG4gICAgICAgICAgICBhZGRDb21tZW50ICgpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmlucHV0TW9tZW50KVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGFzeW5jIG9uTG9hZCAob3B0aW9ucykge1xuICAgICAgICAgICAgLy8gY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBnZXRGZXRjaChgL3Bvc3RzLyR7b3B0aW9ucy5pZCB8fCAxfWApXG4gICAgICAgICAgICAvLyB0aGlzLm1vbWVudCA9IHJlc3BvbnNlLmNpcmNsZVxuICAgICAgICAgICAgLy8gdGhpcy4kYXBwbHkoKVxuICAgICAgICB9XG4gICAgfVxuIl19