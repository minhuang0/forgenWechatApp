'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

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
            navigationBarTitleText: '发表朋友圈'
        }, _this.data = {
            showTopTips: false,
            files: []
        }, _this.methods = {
            chooseImage: function chooseImage(e) {
                var self = this;
                _wepy2.default.chooseImage({
                    sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
                    sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
                    success: function success(res) {
                        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
                        self.files = self.files.concat(res.tempFilePaths);
                        self.$apply();
                    }
                });
            },
            previewImage: function previewImage(e) {
                _wepy2.default.previewImage({
                    current: e.currentTarget.id, // 当前显示图片的http链接
                    urls: this.files // 需要预览的图片http链接列表
                });
            },
            showTopTips: function showTopTips() {
                var _this2 = this;

                this.showTopTips = true;
                setTimeout(function () {
                    _this2.showTopTips = false;
                    _this2.$apply();
                }, 3000);
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Index, [{
        key: 'onLoad',
        value: function onLoad() {}
    }]);

    return Index;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/publish/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJzaG93VG9wVGlwcyIsImZpbGVzIiwibWV0aG9kcyIsImNob29zZUltYWdlIiwiZSIsInNlbGYiLCJzaXplVHlwZSIsInNvdXJjZVR5cGUiLCJzdWNjZXNzIiwicmVzIiwiY29uY2F0IiwidGVtcEZpbGVQYXRocyIsIiRhcHBseSIsInByZXZpZXdJbWFnZSIsImN1cnJlbnQiLCJjdXJyZW50VGFyZ2V0IiwiaWQiLCJ1cmxzIiwic2V0VGltZW91dCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNJOzs7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O3dMQUNqQkMsTSxHQUFTO0FBQ0xDLG9DQUF3QjtBQURuQixTLFFBSVRDLEksR0FBTztBQUNIQyx5QkFBYSxLQURWO0FBRUhDLG1CQUFPO0FBRkosUyxRQUtQQyxPLEdBQVU7QUFDTkMsdUJBRE0sdUJBQ01DLENBRE4sRUFDUztBQUNYLG9CQUFNQyxPQUFPLElBQWI7QUFDQSwrQkFBS0YsV0FBTCxDQUFpQjtBQUNiRyw4QkFBVSxDQUFDLFVBQUQsRUFBYSxZQUFiLENBREcsRUFDeUI7QUFDdENDLGdDQUFZLENBQUMsT0FBRCxFQUFVLFFBQVYsQ0FGQyxFQUVvQjtBQUNqQ0MsMkJBSGEsbUJBR0xDLEdBSEssRUFHQTtBQUNUO0FBQ0FKLDZCQUFLSixLQUFMLEdBQWFJLEtBQUtKLEtBQUwsQ0FBV1MsTUFBWCxDQUFrQkQsSUFBSUUsYUFBdEIsQ0FBYjtBQUNBTiw2QkFBS08sTUFBTDtBQUNIO0FBUFksaUJBQWpCO0FBU0gsYUFaSztBQWFOQyx3QkFiTSx3QkFhT1QsQ0FiUCxFQWFVO0FBQ1osK0JBQUtTLFlBQUwsQ0FBa0I7QUFDZEMsNkJBQVNWLEVBQUVXLGFBQUYsQ0FBZ0JDLEVBRFgsRUFDZTtBQUM3QkMsMEJBQU0sS0FBS2hCLEtBRkcsQ0FFRztBQUZILGlCQUFsQjtBQUlILGFBbEJLO0FBbUJORCx1QkFuQk0seUJBbUJRO0FBQUE7O0FBQ1YscUJBQUtBLFdBQUwsR0FBbUIsSUFBbkI7QUFDQWtCLDJCQUFXLFlBQU07QUFDYiwyQkFBS2xCLFdBQUwsR0FBbUIsS0FBbkI7QUFDQSwyQkFBS1ksTUFBTDtBQUNILGlCQUhELEVBR0csSUFISDtBQUlIO0FBekJLLFM7Ozs7O2lDQTJCRCxDQUNSOzs7O0VBdEM4QixlQUFLTyxJOztrQkFBbkJ2QixLIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICAgICAgY29uZmlnID0ge1xuICAgICAgICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+WPkeihqOaci+WPi+WciCdcbiAgICAgICAgfVxuXG4gICAgICAgIGRhdGEgPSB7XG4gICAgICAgICAgICBzaG93VG9wVGlwczogZmFsc2UsXG4gICAgICAgICAgICBmaWxlczogW11cbiAgICAgICAgfVxuXG4gICAgICAgIG1ldGhvZHMgPSB7XG4gICAgICAgICAgICBjaG9vc2VJbWFnZShlKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXNcbiAgICAgICAgICAgICAgICB3ZXB5LmNob29zZUltYWdlKHtcbiAgICAgICAgICAgICAgICAgICAgc2l6ZVR5cGU6IFsnb3JpZ2luYWwnLCAnY29tcHJlc3NlZCddLCAvLyDlj6/ku6XmjIflrprmmK/ljp/lm77ov5jmmK/ljovnvKnlm77vvIzpu5jorqTkuozogIXpg73mnIlcbiAgICAgICAgICAgICAgICAgICAgc291cmNlVHlwZTogWydhbGJ1bScsICdjYW1lcmEnXSwgLy8g5Y+v5Lul5oyH5a6a5p2l5rqQ5piv55u45YaM6L+Y5piv55u45py677yM6buY6K6k5LqM6ICF6YO95pyJXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MocmVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDov5Tlm57pgInlrprnhafniYfnmoTmnKzlnLDmlofku7bot6/lvoTliJfooajvvIx0ZW1wRmlsZVBhdGjlj6/ku6XkvZzkuLppbWfmoIfnrb7nmoRzcmPlsZ7mgKfmmL7npLrlm77niYdcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuZmlsZXMgPSBzZWxmLmZpbGVzLmNvbmNhdChyZXMudGVtcEZpbGVQYXRocylcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuJGFwcGx5KClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcHJldmlld0ltYWdlKGUpIHtcbiAgICAgICAgICAgICAgICB3ZXB5LnByZXZpZXdJbWFnZSh7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnQ6IGUuY3VycmVudFRhcmdldC5pZCwgLy8g5b2T5YmN5pi+56S65Zu+54mH55qEaHR0cOmTvuaOpVxuICAgICAgICAgICAgICAgICAgICB1cmxzOiB0aGlzLmZpbGVzIC8vIOmcgOimgemihOiniOeahOWbvueJh2h0dHDpk77mjqXliJfooahcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNob3dUb3BUaXBzKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd1RvcFRpcHMgPSB0cnVlXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd1RvcFRpcHMgPSBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICAgICAgICAgICAgfSwgMzAwMClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBvbkxvYWQoKSB7XG4gICAgICAgIH1cbiAgICB9XG4iXX0=