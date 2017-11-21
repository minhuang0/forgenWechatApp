'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _moment = require('./../../components/moment.js');

var _moment2 = _interopRequireDefault(_moment);

var _utils = require('./../../modules/common/utils.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_wepy$component) {
    _inherits(Index, _wepy$component);

    function Index() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Index);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.$repeat = { "moments": { "com": "v-moment", "props": "moment" } }, _this.$props = { "v-moment": { "xmlns:v-bind": { "value": "", "for": "moments", "item": "item", "index": "index", "key": "index" }, "v-bind:moment.once": { "value": "item", "type": "item", "for": "moments", "item": "item", "index": "index", "key": "index" } } }, _this.$events = {}, _this.components = {
            'v-moment': _moment2.default
        }, _this.data = {
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
        }, _this.methods = {
            onload: function onload() {
                console.log(this.moments);
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return Index;
}(_wepy2.default.component);

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vbWVudHMuanMiXSwibmFtZXMiOlsiSW5kZXgiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJkYXRhIiwibW9tZW50cyIsImF2YXRhciIsIm5hbWUiLCJjb250ZW50IiwiaW1hZ2VzIiwiY3JlYXRlVGltZSIsImNvbW1vbnMiLCJjb21tb250IiwidXB2b3RlTnVtIiwiZmF2b3JpdGVOdW0iLCJtZXRob2RzIiwib25sb2FkIiwiY29uc29sZSIsImxvZyIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNJOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7d0xBQ2xCQyxPLEdBQVUsRUFBQyxXQUFVLEVBQUMsT0FBTSxVQUFQLEVBQWtCLFNBQVEsUUFBMUIsRUFBWCxFLFFBQ2pCQyxNLEdBQVMsRUFBQyxZQUFXLEVBQUMsZ0JBQWUsRUFBQyxTQUFRLEVBQVQsRUFBWSxPQUFNLFNBQWxCLEVBQTRCLFFBQU8sTUFBbkMsRUFBMEMsU0FBUSxPQUFsRCxFQUEwRCxPQUFNLE9BQWhFLEVBQWhCLEVBQXlGLHNCQUFxQixFQUFDLFNBQVEsTUFBVCxFQUFnQixRQUFPLE1BQXZCLEVBQThCLE9BQU0sU0FBcEMsRUFBOEMsUUFBTyxNQUFyRCxFQUE0RCxTQUFRLE9BQXBFLEVBQTRFLE9BQU0sT0FBbEYsRUFBOUcsRUFBWixFLFFBQ1RDLE8sR0FBVSxFLFFBQ1RDLFUsR0FBYTtBQUNGO0FBREUsUyxRQUlOQyxJLEdBQU87QUFDSEMscUJBQVMsQ0FBQztBQUNOQyx3QkFBUSxvRUFERjtBQUVOQyxzQkFBTSxZQUZBO0FBR05DLHlCQUFTLDBHQUhIO0FBSU5DLHdCQUFRLHVCQUFXLENBQ2Ysb0VBRGUsRUFFZixvRUFGZSxFQUdmLG9FQUhlLENBQVgsQ0FKRjtBQVNOQyw0QkFBWSxNQVROO0FBVU5DLHlCQUFTLENBQUM7QUFDTkosMEJBQU0sS0FEQTtBQUVOSyw2QkFBUztBQUZILGlCQUFELENBVkg7QUFjTkMsMkJBQVcsRUFkTDtBQWVOQyw2QkFBYTtBQWZQLGFBQUQsRUFnQk47QUFDQ1Isd0JBQVEsb0VBRFQ7QUFFQ0Msc0JBQU0sS0FGUDtBQUdDQyx5QkFBUyx3QkFIVjtBQUlDQyx3QkFBUSx1QkFBVyxDQUNmLG9FQURlLEVBRWYsb0VBRmUsQ0FBWCxDQUpUO0FBUUNDLDRCQUFZLHFCQVJiO0FBU0NDLHlCQUFTLENBQUM7QUFDTkosMEJBQU0sS0FEQTtBQUVOSyw2QkFBUztBQUZILGlCQUFELENBVFY7QUFhQ0MsMkJBQVcsRUFiWjtBQWNDQyw2QkFBYTtBQWRkLGFBaEJNO0FBRE4sUyxRQW1DUEMsTyxHQUFVO0FBQ05DLGtCQURNLG9CQUNJO0FBQ05DLHdCQUFRQyxHQUFSLENBQVksS0FBS2IsT0FBakI7QUFDSDtBQUhLLFM7Ozs7RUEzQ3FCLGVBQUtjLFM7O2tCQUFuQnBCLEsiLCJmaWxlIjoibW9tZW50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gICAgaW1wb3J0IG1vbWVudENvbXBvbmVudCBmcm9tICdAL2NvbXBvbmVudHMvbW9tZW50J1xuICAgIGltcG9ydCB7IHBhZGRpbmdJbWcgfSBmcm9tICdAL21vZHVsZXMvY29tbW9uL3V0aWxzJ1xuXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XG4gICAgICAgJHJlcGVhdCA9IHtcIm1vbWVudHNcIjp7XCJjb21cIjpcInYtbW9tZW50XCIsXCJwcm9wc1wiOlwibW9tZW50XCJ9fTtcclxuJHByb3BzID0ge1widi1tb21lbnRcIjp7XCJ4bWxuczp2LWJpbmRcIjp7XCJ2YWx1ZVwiOlwiXCIsXCJmb3JcIjpcIm1vbWVudHNcIixcIml0ZW1cIjpcIml0ZW1cIixcImluZGV4XCI6XCJpbmRleFwiLFwia2V5XCI6XCJpbmRleFwifSxcInYtYmluZDptb21lbnQub25jZVwiOntcInZhbHVlXCI6XCJpdGVtXCIsXCJ0eXBlXCI6XCJpdGVtXCIsXCJmb3JcIjpcIm1vbWVudHNcIixcIml0ZW1cIjpcIml0ZW1cIixcImluZGV4XCI6XCJpbmRleFwiLFwia2V5XCI6XCJpbmRleFwifX19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgICAgICAgJ3YtbW9tZW50JzogbW9tZW50Q29tcG9uZW50XG4gICAgICAgIH1cblxuICAgICAgICBkYXRhID0ge1xuICAgICAgICAgICAgbW9tZW50czogW3tcbiAgICAgICAgICAgICAgICBhdmF0YXI6ICdodHRwczovL21vZGFvLmNjL3VwbG9hZHMzL2ltYWdlcy8xMDI0LzEwMjQ2NDkyL3Jhd18xNDk3MzQwNTM1LmpwZWcnLFxuICAgICAgICAgICAgICAgIG5hbWU6ICfor7jokZvCt+WImGdsb3JpYScsXG4gICAgICAgICAgICAgICAgY29udGVudDogJ+S4juafs+iKveebuOmBh+S5n+aYr+WBtueEtu+8jOWcqOiPnOWcuuWGheeahOS4gOWghuaRiuS9jemXtO+8jOWPkeeOsOS4jei1t+ecvOeahOS4gOWwj+iii+m7hOebiOebiOeahOWrqeiKveOAguWFtuWunuacieeCueS6juW/g+S4jeW/je+8jOi/memDveaYr+S7juaWsOe7v+eahOafs+adoeS4iuaRmOS4i+adpeeahOWQp+OAguS9hui/mOaYr+W/jeS4jeS9j+aDs+WwnemynOeahOaEv+aEj++8jOS5sOS6huS4gOeCueOAguS4gOeCueeCue+8jOW3suWkn+WBmuWHuuWlveWHoOS4quiPnOS6huOAguW6lOaXtuW6lOaZr++8jOWwneS4quaWsOmynOWQpycsXG4gICAgICAgICAgICAgICAgaW1hZ2VzOiBwYWRkaW5nSW1nKFtcbiAgICAgICAgICAgICAgICAgICAgJ2h0dHBzOi8vbW9kYW8uY2MvdXBsb2FkczMvaW1hZ2VzLzEwMjQvMTAyNDY2NTUvcmF3XzE0OTczNDA3NDcuanBlZycsXG4gICAgICAgICAgICAgICAgICAgICdodHRwczovL21vZGFvLmNjL3VwbG9hZHMzL2ltYWdlcy8xMDI0LzEwMjQ2NjU2L3Jhd18xNDk3MzQwNzQ3LmpwZWcnLFxuICAgICAgICAgICAgICAgICAgICAnaHR0cHM6Ly9tb2Rhby5jYy91cGxvYWRzMy9pbWFnZXMvMTAyNC8xMDI0NjY1Ni9yYXdfMTQ5NzM0MDc0Ny5qcGVnJ1xuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIGNyZWF0ZVRpbWU6ICcx5bCP5pe25YmNJyxcbiAgICAgICAgICAgICAgICBjb21tb25zOiBbe1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAn6K+E6K666ICFJyxcbiAgICAgICAgICAgICAgICAgICAgY29tbW9udDogJ+ivhOiuuuivhOiuuuivhOiuuuivhOiuuuivhOiuuuivhOiuuuivhOiuuuivhOiuuidcbiAgICAgICAgICAgICAgICB9XSxcbiAgICAgICAgICAgICAgICB1cHZvdGVOdW06IDEwLFxuICAgICAgICAgICAgICAgIGZhdm9yaXRlTnVtOiAyMFxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGF2YXRhcjogJ2h0dHBzOi8vbW9kYW8uY2MvdXBsb2FkczMvaW1hZ2VzLzEwMjQvMTAyNDY0OTAvcmF3XzE0OTczNDA1MzUuanBlZycsXG4gICAgICAgICAgICAgICAgbmFtZTogJ+ePoOi0neWLkicsXG4gICAgICAgICAgICAgICAgY29udGVudDogJ+S4jeeUqOa1t+iLlO+8jOS4gOagt+WPr+S7peWBmuWHuuWvv+WPuOOAgum4oeibi+eahOWIq+agt+WQg+azleOAgicsXG4gICAgICAgICAgICAgICAgaW1hZ2VzOiBwYWRkaW5nSW1nKFtcbiAgICAgICAgICAgICAgICAgICAgJ2h0dHBzOi8vbW9kYW8uY2MvdXBsb2FkczMvaW1hZ2VzLzEwMzAvMTAzMDQxODgvcmF3XzE0OTc1MDkzOTkuanBlZycsXG4gICAgICAgICAgICAgICAgICAgICdodHRwczovL21vZGFvLmNjL3VwbG9hZHMzL2ltYWdlcy8xMDMwLzEwMzA0MTkxL3Jhd18xNDk3NTA5NDAxLmpwZWcnXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgY3JlYXRlVGltZTogJzIwMTctMDYtMjkgMjM6MDA6MDAnLFxuICAgICAgICAgICAgICAgIGNvbW1vbnM6IFt7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICfor4TorrrogIUnLFxuICAgICAgICAgICAgICAgICAgICBjb21tb250OiAn6K+E6K666K+E6K666K+E6K666K+E6K666K+E6K666K+E6K666K+E6K666K+E6K66J1xuICAgICAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgICAgIHVwdm90ZU51bTogMTAsXG4gICAgICAgICAgICAgICAgZmF2b3JpdGVOdW06IDIwXG4gICAgICAgICAgICB9XVxuICAgICAgICB9XG5cbiAgICAgICAgbWV0aG9kcyA9IHtcbiAgICAgICAgICAgIG9ubG9hZCAoKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5tb21lbnRzKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuIl19