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
        }, _this.$repeat = { "moments": { "com": "v-moment", "props": "moment" } }, _this.$props = { "v-moment": { "xmlns:v-bind": { "value": "", "for": "moments", "item": "item", "index": "index", "key": "index" }, "v-bind:moment.once": { "value": "item", "type": "item", "for": "moments", "item": "item", "index": "index", "key": "index" } } }, _this.$events = {}, _this.components = {
            'v-moment': _moment2.default
        }, _this.data = {
            moments: [{
                id: 1,
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
            }]
        }, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Index, [{
        key: 'onLoad',
        value: function onLoad() {}
    }]);

    return Index;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/me/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsImRhdGEiLCJtb21lbnRzIiwiaWQiLCJhdmF0YXIiLCJuYW1lIiwiY29udGVudCIsImltYWdlcyIsImNyZWF0ZVRpbWUiLCJjb21tb25zIiwiY29tbW9udCIsInVwdm90ZU51bSIsImZhdm9yaXRlTnVtIiwibWV0aG9kcyIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNJOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7d0xBQ2pCQyxNLEdBQVM7QUFDTEMsb0NBQXdCO0FBRG5CLFMsUUFJVkMsTyxHQUFVLEVBQUMsV0FBVSxFQUFDLE9BQU0sVUFBUCxFQUFrQixTQUFRLFFBQTFCLEVBQVgsRSxRQUNqQkMsTSxHQUFTLEVBQUMsWUFBVyxFQUFDLGdCQUFlLEVBQUMsU0FBUSxFQUFULEVBQVksT0FBTSxTQUFsQixFQUE0QixRQUFPLE1BQW5DLEVBQTBDLFNBQVEsT0FBbEQsRUFBMEQsT0FBTSxPQUFoRSxFQUFoQixFQUF5RixzQkFBcUIsRUFBQyxTQUFRLE1BQVQsRUFBZ0IsUUFBTyxNQUF2QixFQUE4QixPQUFNLFNBQXBDLEVBQThDLFFBQU8sTUFBckQsRUFBNEQsU0FBUSxPQUFwRSxFQUE0RSxPQUFNLE9BQWxGLEVBQTlHLEVBQVosRSxRQUNUQyxPLEdBQVUsRSxRQUNUQyxVLEdBQWE7QUFDRjtBQURFLFMsUUFJTkMsSSxHQUFPO0FBQ0hDLHFCQUFTLENBQUM7QUFDTkMsb0JBQUksQ0FERTtBQUVOQyx3QkFBUSxvRUFGRjtBQUdOQyxzQkFBTSxZQUhBO0FBSU5DLHlCQUFTLDBHQUpIO0FBS05DLHdCQUFRLHVCQUFXLENBQ2Ysb0VBRGUsRUFFZixvRUFGZSxFQUdmLG9FQUhlLENBQVgsQ0FMRjtBQVVOQyw0QkFBWSxNQVZOO0FBV05DLHlCQUFTLENBQUM7QUFDTkosMEJBQU0sS0FEQTtBQUVOSyw2QkFBUztBQUZILGlCQUFELENBWEg7QUFlTkMsMkJBQVcsRUFmTDtBQWdCTkMsNkJBQWE7QUFoQlAsYUFBRDtBQUROLFMsUUFxQlBDLE8sR0FBVSxFOzs7OztpQ0FFRCxDQUNSOzs7O0VBcEM4QixlQUFLQyxJOztrQkFBbkJwQixLIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgICBpbXBvcnQgbW9tZW50Q29tcG9uZW50IGZyb20gJ0AvY29tcG9uZW50cy9tb21lbnQnXG4gICAgaW1wb3J0IHsgcGFkZGluZ0ltZyB9IGZyb20gJ0AvbW9kdWxlcy9jb21tb24vdXRpbHMnXG5cbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgICAgIGNvbmZpZyA9IHtcbiAgICAgICAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfmiJHnmoQnXG4gICAgICAgIH1cblxuICAgICAgICRyZXBlYXQgPSB7XCJtb21lbnRzXCI6e1wiY29tXCI6XCJ2LW1vbWVudFwiLFwicHJvcHNcIjpcIm1vbWVudFwifX07XHJcbiRwcm9wcyA9IHtcInYtbW9tZW50XCI6e1wieG1sbnM6di1iaW5kXCI6e1widmFsdWVcIjpcIlwiLFwiZm9yXCI6XCJtb21lbnRzXCIsXCJpdGVtXCI6XCJpdGVtXCIsXCJpbmRleFwiOlwiaW5kZXhcIixcImtleVwiOlwiaW5kZXhcIn0sXCJ2LWJpbmQ6bW9tZW50Lm9uY2VcIjp7XCJ2YWx1ZVwiOlwiaXRlbVwiLFwidHlwZVwiOlwiaXRlbVwiLFwiZm9yXCI6XCJtb21lbnRzXCIsXCJpdGVtXCI6XCJpdGVtXCIsXCJpbmRleFwiOlwiaW5kZXhcIixcImtleVwiOlwiaW5kZXhcIn19fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICAgICAgICAgICd2LW1vbWVudCc6IG1vbWVudENvbXBvbmVudFxuICAgICAgICB9XG5cbiAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICAgIG1vbWVudHM6IFt7XG4gICAgICAgICAgICAgICAgaWQ6IDEsXG4gICAgICAgICAgICAgICAgYXZhdGFyOiAnaHR0cHM6Ly9tb2Rhby5jYy91cGxvYWRzMy9pbWFnZXMvMTAyNC8xMDI0NjQ5Mi9yYXdfMTQ5NzM0MDUzNS5qcGVnJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAn6K+46JGbwrfliJhnbG9yaWEnLFxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICfkuI7mn7Poir3nm7jpgYfkuZ/mmK/lgbbnhLbvvIzlnKjoj5zlnLrlhoXnmoTkuIDloIbmkYrkvY3pl7TvvIzlj5HnjrDkuI3otbfnnLznmoTkuIDlsI/ooovpu4Tnm4jnm4jnmoTlq6noir3jgILlhbblrp7mnInngrnkuo7lv4PkuI3lv43vvIzov5npg73mmK/ku47mlrDnu7/nmoTmn7PmnaHkuIrmkZjkuIvmnaXnmoTlkKfjgILkvYbov5jmmK/lv43kuI3kvY/mg7PlsJ3pspznmoTmhL/mhI/vvIzkubDkuobkuIDngrnjgILkuIDngrnngrnvvIzlt7LlpJ/lgZrlh7rlpb3lh6DkuKroj5zkuobjgILlupTml7blupTmma/vvIzlsJ3kuKrmlrDpspzlkKcnLFxuICAgICAgICAgICAgICAgIGltYWdlczogcGFkZGluZ0ltZyhbXG4gICAgICAgICAgICAgICAgICAgICdodHRwczovL21vZGFvLmNjL3VwbG9hZHMzL2ltYWdlcy8xMDI0LzEwMjQ2NjU1L3Jhd18xNDk3MzQwNzQ3LmpwZWcnLFxuICAgICAgICAgICAgICAgICAgICAnaHR0cHM6Ly9tb2Rhby5jYy91cGxvYWRzMy9pbWFnZXMvMTAyNC8xMDI0NjY1Ni9yYXdfMTQ5NzM0MDc0Ny5qcGVnJyxcbiAgICAgICAgICAgICAgICAgICAgJ2h0dHBzOi8vbW9kYW8uY2MvdXBsb2FkczMvaW1hZ2VzLzEwMjQvMTAyNDY2NTYvcmF3XzE0OTczNDA3NDcuanBlZydcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBjcmVhdGVUaW1lOiAnMeWwj+aXtuWJjScsXG4gICAgICAgICAgICAgICAgY29tbW9uczogW3tcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ+ivhOiuuuiAhScsXG4gICAgICAgICAgICAgICAgICAgIGNvbW1vbnQ6ICfor4Torrror4Torrror4Torrror4Torrror4Torrror4Torrror4Torrror4TorronXG4gICAgICAgICAgICAgICAgfV0sXG4gICAgICAgICAgICAgICAgdXB2b3RlTnVtOiAxMCxcbiAgICAgICAgICAgICAgICBmYXZvcml0ZU51bTogMjBcbiAgICAgICAgICAgIH1dXG4gICAgICAgIH1cblxuICAgICAgICBtZXRob2RzID0ge1xuICAgICAgICB9XG4gICAgICAgIG9uTG9hZCgpIHtcbiAgICAgICAgfVxuICAgIH1cbiJdfQ==