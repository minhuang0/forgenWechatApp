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

var _baseTitle = require('./../../components/baseTitle.js');

var _baseTitle2 = _interopRequireDefault(_baseTitle);

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
            navigationBarTitleText: '热门话题'
        }, _this.$repeat = { "moments": { "com": "v-moment", "props": "moment" } }, _this.$props = { "v-moment": { "v-bind:moment.once": { "value": "item", "type": "item", "for": "moments", "item": "item", "index": "index", "key": "index" } }, "v-base-title": { "class": "title", "xmlns:v-bind": "", "v-bind:leftText.sync": "title" } }, _this.$events = {}, _this.components = {
            'v-moment': _moment2.default,
            'v-base-title': _baseTitle2.default
        }, _this.data = {
            title: '',
            moments: [{
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
            }, {
                avatar: 'https://modao.cc/uploads3/images/1024/10246490/raw_1497340535.jpeg',
                name: '珠贝勒',
                content: '不用海苔，一样可以做出寿司。鸡蛋的别样吃法。',
                images: (0, _utils.paddingImg)(['https://modao.cc/uploads3/images/1030/10304188/raw_1497509399.jpeg', 'https://modao.cc/uploads3/images/1030/10304191/raw_1497509401.jpeg']),
                createTime: '2017-06-29 23:00:00',
                commons: [{
                    name: '评论者',
                    commont: '评论评论评论评论评论评论评论评论'
                }],
                upvoteNum: 10,
                favoriteNum: 20
            }]
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Index, [{
        key: 'onLoad',
        value: function onLoad(options) {
            this.title = options.text ? '\u70ED\u95E8\u8BDD\u9898: #' + options.text + '#' : '#更多热门话题#';
        }
    }]);

    return Index;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/discuss/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsImRhdGEiLCJ0aXRsZSIsIm1vbWVudHMiLCJhdmF0YXIiLCJuYW1lIiwiY29udGVudCIsImltYWdlcyIsImNyZWF0ZVRpbWUiLCJjb21tb25zIiwiY29tbW9udCIsInVwdm90ZU51bSIsImZhdm9yaXRlTnVtIiwib3B0aW9ucyIsInRleHQiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDSTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7d0xBQ2pCQyxNLEdBQVM7QUFDTEMsb0NBQXdCO0FBRG5CLFMsUUFJVkMsTyxHQUFVLEVBQUMsV0FBVSxFQUFDLE9BQU0sVUFBUCxFQUFrQixTQUFRLFFBQTFCLEVBQVgsRSxRQUNqQkMsTSxHQUFTLEVBQUMsWUFBVyxFQUFDLHNCQUFxQixFQUFDLFNBQVEsTUFBVCxFQUFnQixRQUFPLE1BQXZCLEVBQThCLE9BQU0sU0FBcEMsRUFBOEMsUUFBTyxNQUFyRCxFQUE0RCxTQUFRLE9BQXBFLEVBQTRFLE9BQU0sT0FBbEYsRUFBdEIsRUFBWixFQUE4SCxnQkFBZSxFQUFDLFNBQVEsT0FBVCxFQUFpQixnQkFBZSxFQUFoQyxFQUFtQyx3QkFBdUIsT0FBMUQsRUFBN0ksRSxRQUNUQyxPLEdBQVUsRSxRQUNUQyxVLEdBQWE7QUFDRix3Q0FERTtBQUVGO0FBRkUsUyxRQUtOQyxJLEdBQU87QUFDSEMsbUJBQU8sRUFESjtBQUVIQyxxQkFBUyxDQUFDO0FBQ05DLHdCQUFRLG9FQURGO0FBRU5DLHNCQUFNLFlBRkE7QUFHTkMseUJBQVMsMEdBSEg7QUFJTkMsd0JBQVEsdUJBQVcsQ0FDZixvRUFEZSxFQUVmLG9FQUZlLEVBR2Ysb0VBSGUsQ0FBWCxDQUpGO0FBU05DLDRCQUFZLE1BVE47QUFVTkMseUJBQVMsQ0FBQztBQUNOSiwwQkFBTSxLQURBO0FBRU5LLDZCQUFTO0FBRkgsaUJBQUQsQ0FWSDtBQWNOQywyQkFBVyxFQWRMO0FBZU5DLDZCQUFhO0FBZlAsYUFBRCxFQWdCTjtBQUNDUix3QkFBUSxvRUFEVDtBQUVDQyxzQkFBTSxLQUZQO0FBR0NDLHlCQUFTLHdCQUhWO0FBSUNDLHdCQUFRLHVCQUFXLENBQ2Ysb0VBRGUsRUFFZixvRUFGZSxDQUFYLENBSlQ7QUFRQ0MsNEJBQVkscUJBUmI7QUFTQ0MseUJBQVMsQ0FBQztBQUNOSiwwQkFBTSxLQURBO0FBRU5LLDZCQUFTO0FBRkgsaUJBQUQsQ0FUVjtBQWFDQywyQkFBVyxFQWJaO0FBY0NDLDZCQUFhO0FBZGQsYUFoQk07QUFGTixTOzs7OzsrQkFtQ0FDLE8sRUFBUztBQUNaLGlCQUFLWCxLQUFMLEdBQWFXLFFBQVFDLElBQVIsbUNBQXlCRCxRQUFRQyxJQUFqQyxTQUEyQyxVQUF4RDtBQUNIOzs7O0VBbEQ4QixlQUFLQyxJOztrQkFBbkJyQixLIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgICBpbXBvcnQgbW9tZW50Q29tcG9uZW50IGZyb20gJ0AvY29tcG9uZW50cy9tb21lbnQnXG4gICAgaW1wb3J0IHsgcGFkZGluZ0ltZyB9IGZyb20gJ0AvbW9kdWxlcy9jb21tb24vdXRpbHMnXG4gICAgaW1wb3J0IGJhc2VUaXRsZUNvbXBvbmVudCBmcm9tICdAL2NvbXBvbmVudHMvYmFzZVRpdGxlJ1xuXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgICAgICBjb25maWcgPSB7XG4gICAgICAgICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn54Ot6Zeo6K+d6aKYJ1xuICAgICAgICB9XG5cbiAgICAgICAkcmVwZWF0ID0ge1wibW9tZW50c1wiOntcImNvbVwiOlwidi1tb21lbnRcIixcInByb3BzXCI6XCJtb21lbnRcIn19O1xyXG4kcHJvcHMgPSB7XCJ2LW1vbWVudFwiOntcInYtYmluZDptb21lbnQub25jZVwiOntcInZhbHVlXCI6XCJpdGVtXCIsXCJ0eXBlXCI6XCJpdGVtXCIsXCJmb3JcIjpcIm1vbWVudHNcIixcIml0ZW1cIjpcIml0ZW1cIixcImluZGV4XCI6XCJpbmRleFwiLFwia2V5XCI6XCJpbmRleFwifX0sXCJ2LWJhc2UtdGl0bGVcIjp7XCJjbGFzc1wiOlwidGl0bGVcIixcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6bGVmdFRleHQuc3luY1wiOlwidGl0bGVcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgICAgICAgJ3YtbW9tZW50JzogbW9tZW50Q29tcG9uZW50LFxuICAgICAgICAgICAgJ3YtYmFzZS10aXRsZSc6IGJhc2VUaXRsZUNvbXBvbmVudFxuICAgICAgICB9XG5cbiAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICAgIHRpdGxlOiAnJyxcbiAgICAgICAgICAgIG1vbWVudHM6IFt7XG4gICAgICAgICAgICAgICAgYXZhdGFyOiAnaHR0cHM6Ly9tb2Rhby5jYy91cGxvYWRzMy9pbWFnZXMvMTAyNC8xMDI0NjQ5Mi9yYXdfMTQ5NzM0MDUzNS5qcGVnJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAn6K+46JGbwrfliJhnbG9yaWEnLFxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICfkuI7mn7Poir3nm7jpgYfkuZ/mmK/lgbbnhLbvvIzlnKjoj5zlnLrlhoXnmoTkuIDloIbmkYrkvY3pl7TvvIzlj5HnjrDkuI3otbfnnLznmoTkuIDlsI/ooovpu4Tnm4jnm4jnmoTlq6noir3jgILlhbblrp7mnInngrnkuo7lv4PkuI3lv43vvIzov5npg73mmK/ku47mlrDnu7/nmoTmn7PmnaHkuIrmkZjkuIvmnaXnmoTlkKfjgILkvYbov5jmmK/lv43kuI3kvY/mg7PlsJ3pspznmoTmhL/mhI/vvIzkubDkuobkuIDngrnjgILkuIDngrnngrnvvIzlt7LlpJ/lgZrlh7rlpb3lh6DkuKroj5zkuobjgILlupTml7blupTmma/vvIzlsJ3kuKrmlrDpspzlkKcnLFxuICAgICAgICAgICAgICAgIGltYWdlczogcGFkZGluZ0ltZyhbXG4gICAgICAgICAgICAgICAgICAgICdodHRwczovL21vZGFvLmNjL3VwbG9hZHMzL2ltYWdlcy8xMDI0LzEwMjQ2NjU1L3Jhd18xNDk3MzQwNzQ3LmpwZWcnLFxuICAgICAgICAgICAgICAgICAgICAnaHR0cHM6Ly9tb2Rhby5jYy91cGxvYWRzMy9pbWFnZXMvMTAyNC8xMDI0NjY1Ni9yYXdfMTQ5NzM0MDc0Ny5qcGVnJyxcbiAgICAgICAgICAgICAgICAgICAgJ2h0dHBzOi8vbW9kYW8uY2MvdXBsb2FkczMvaW1hZ2VzLzEwMjQvMTAyNDY2NTYvcmF3XzE0OTczNDA3NDcuanBlZydcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBjcmVhdGVUaW1lOiAnMeWwj+aXtuWJjScsXG4gICAgICAgICAgICAgICAgY29tbW9uczogW3tcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ+ivhOiuuuiAhScsXG4gICAgICAgICAgICAgICAgICAgIGNvbW1vbnQ6ICfor4Torrror4Torrror4Torrror4Torrror4Torrror4Torrror4Torrror4TorronXG4gICAgICAgICAgICAgICAgfV0sXG4gICAgICAgICAgICAgICAgdXB2b3RlTnVtOiAxMCxcbiAgICAgICAgICAgICAgICBmYXZvcml0ZU51bTogMjBcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBhdmF0YXI6ICdodHRwczovL21vZGFvLmNjL3VwbG9hZHMzL2ltYWdlcy8xMDI0LzEwMjQ2NDkwL3Jhd18xNDk3MzQwNTM1LmpwZWcnLFxuICAgICAgICAgICAgICAgIG5hbWU6ICfnj6DotJ3li5InLFxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICfkuI3nlKjmtbfoi5TvvIzkuIDmoLflj6/ku6XlgZrlh7rlr7/lj7jjgILpuKHom4vnmoTliKvmoLflkIPms5XjgIInLFxuICAgICAgICAgICAgICAgIGltYWdlczogcGFkZGluZ0ltZyhbXG4gICAgICAgICAgICAgICAgICAgICdodHRwczovL21vZGFvLmNjL3VwbG9hZHMzL2ltYWdlcy8xMDMwLzEwMzA0MTg4L3Jhd18xNDk3NTA5Mzk5LmpwZWcnLFxuICAgICAgICAgICAgICAgICAgICAnaHR0cHM6Ly9tb2Rhby5jYy91cGxvYWRzMy9pbWFnZXMvMTAzMC8xMDMwNDE5MS9yYXdfMTQ5NzUwOTQwMS5qcGVnJ1xuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIGNyZWF0ZVRpbWU6ICcyMDE3LTA2LTI5IDIzOjAwOjAwJyxcbiAgICAgICAgICAgICAgICBjb21tb25zOiBbe1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAn6K+E6K666ICFJyxcbiAgICAgICAgICAgICAgICAgICAgY29tbW9udDogJ+ivhOiuuuivhOiuuuivhOiuuuivhOiuuuivhOiuuuivhOiuuuivhOiuuuivhOiuuidcbiAgICAgICAgICAgICAgICB9XSxcbiAgICAgICAgICAgICAgICB1cHZvdGVOdW06IDEwLFxuICAgICAgICAgICAgICAgIGZhdm9yaXRlTnVtOiAyMFxuICAgICAgICAgICAgfV1cbiAgICAgICAgfVxuICAgICAgICBvbkxvYWQob3B0aW9ucykge1xuICAgICAgICAgICAgdGhpcy50aXRsZSA9IG9wdGlvbnMudGV4dCA/IGDng63pl6jor53popg6ICMke29wdGlvbnMudGV4dH0jYCA6ICcj5pu05aSa54Ot6Zeo6K+d6aKYIydcbiAgICAgICAgfVxuICAgIH1cbiJdfQ==