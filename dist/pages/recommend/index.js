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
            navigationBarTitleText: '文章'
        }, _this.$repeat = {}, _this.$props = { "v-editor": { "xmlns:v-on": "" } }, _this.$events = { "v-editor": { "v-on:click": "comment" } }, _this.components = {
            'v-editor': _editor2.default
        }, _this.data = {
            item: {},
            userInfo: {}
        }, _this.methods = {
            renderPost: function renderPost(post) {
                post.targetsLength = post.targets.length;
                post.commentsLength = post.comments.length;
                var userInfo = Object.assign({
                    nickName: '小森',
                    avatarUrl: 'http://static.htxq.net/UploadFiles/headimg/20160721142529242.jpg'
                }, post.user || {});
                return [post, userInfo];
            },
            comment: function comment(data) {
                this.postComment(data);
            },
            zan: function zan() {
                this.requestZan();
            },
            unzan: function unzan() {
                this.requestUnZan();
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Index, [{
        key: 'postComment',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(data) {
                var rsp;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return (0, _fetch.postFetch)('/posts/comment', {
                                    data: {
                                        content: data,
                                        post_id: this.item.id
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

            function postComment(_x) {
                return _ref2.apply(this, arguments);
            }

            return postComment;
        }()
    }, {
        key: 'requestZan',
        value: function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                var rsp;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _context2.next = 2;
                                return (0, _fetch.getFetch)('/posts/' + this.item.id + '/zan', {
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

            function requestZan() {
                return _ref3.apply(this, arguments);
            }

            return requestZan;
        }()
    }, {
        key: 'requestUnZan',
        value: function () {
            var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                var rsp;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                _context3.next = 2;
                                return (0, _fetch.getFetch)('/posts/' + this.item.id + '/unzan', {
                                    noAjax: true
                                });

                            case 2:
                                rsp = _context3.sent;

                                console.log(rsp);

                            case 4:
                            case 'end':
                                return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));

            function requestUnZan() {
                return _ref4.apply(this, arguments);
            }

            return requestUnZan;
        }()
    }, {
        key: 'onLoad',
        value: function () {
            var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(options) {
                var data, renderData;
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) {
                        switch (_context4.prev = _context4.next) {
                            case 0:
                                _context4.next = 2;
                                return (0, _fetch.getFetch)('/posts/' + (options.id || 1));

                            case 2:
                                data = _context4.sent;
                                renderData = this.methods.renderPost(data.post);

                                this.item = renderData[0];
                                this.userInfo = renderData[1];
                                this.$apply();
                                _wxParse2.default.wxParse('article', 'html', this.item.content, this, 0);
                                _wepy2.default.setNavigationBarTitle({
                                    title: this.item.title
                                });

                            case 9:
                            case 'end':
                                return _context4.stop();
                        }
                    }
                }, _callee4, this);
            }));

            function onLoad(_x2) {
                return _ref5.apply(this, arguments);
            }

            return onLoad;
        }()
    }]);

    return Index;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/recommend/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsImRhdGEiLCJpdGVtIiwidXNlckluZm8iLCJtZXRob2RzIiwicmVuZGVyUG9zdCIsInBvc3QiLCJ0YXJnZXRzTGVuZ3RoIiwidGFyZ2V0cyIsImxlbmd0aCIsImNvbW1lbnRzTGVuZ3RoIiwiY29tbWVudHMiLCJPYmplY3QiLCJhc3NpZ24iLCJuaWNrTmFtZSIsImF2YXRhclVybCIsInVzZXIiLCJjb21tZW50IiwicG9zdENvbW1lbnQiLCJ6YW4iLCJyZXF1ZXN0WmFuIiwidW56YW4iLCJyZXF1ZXN0VW5aYW4iLCJjb250ZW50IiwicG9zdF9pZCIsImlkIiwibm9BamF4IiwicnNwIiwiY29uc29sZSIsImxvZyIsIm9wdGlvbnMiLCJyZW5kZXJEYXRhIiwiJGFwcGx5Iiwid3hQYXJzZSIsInNldE5hdmlnYXRpb25CYXJUaXRsZSIsInRpdGxlIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0k7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7d0xBQ2pCQyxNLEdBQVM7QUFDTEMsb0NBQXdCO0FBRG5CLFMsUUFHVkMsTyxHQUFVLEUsUUFDakJDLE0sR0FBUyxFQUFDLFlBQVcsRUFBQyxjQUFhLEVBQWQsRUFBWixFLFFBQ1RDLE8sR0FBVSxFQUFDLFlBQVcsRUFBQyxjQUFhLFNBQWQsRUFBWixFLFFBQ1RDLFUsR0FBYTtBQUNGO0FBREUsUyxRQUdOQyxJLEdBQU87QUFDSEMsa0JBQU0sRUFESDtBQUVIQyxzQkFBVTtBQUZQLFMsUUFLUEMsTyxHQUFVO0FBQ05DLHNCQURNLHNCQUNNQyxJQUROLEVBQ1k7QUFDZEEscUJBQUtDLGFBQUwsR0FBcUJELEtBQUtFLE9BQUwsQ0FBYUMsTUFBbEM7QUFDQUgscUJBQUtJLGNBQUwsR0FBc0JKLEtBQUtLLFFBQUwsQ0FBY0YsTUFBcEM7QUFDQSxvQkFBTU4sV0FBV1MsT0FBT0MsTUFBUCxDQUFjO0FBQzNCQyw4QkFBVSxJQURpQjtBQUUzQkMsK0JBQVc7QUFGZ0IsaUJBQWQsRUFHZFQsS0FBS1UsSUFBTCxJQUFhLEVBSEMsQ0FBakI7QUFJQSx1QkFBTyxDQUFDVixJQUFELEVBQU9ILFFBQVAsQ0FBUDtBQUNILGFBVEs7QUFVTmMsbUJBVk0sbUJBVUdoQixJQVZILEVBVVM7QUFDWCxxQkFBS2lCLFdBQUwsQ0FBaUJqQixJQUFqQjtBQUNILGFBWks7QUFhTmtCLGVBYk0saUJBYUM7QUFDSCxxQkFBS0MsVUFBTDtBQUNILGFBZks7QUFnQk5DLGlCQWhCTSxtQkFnQkc7QUFDTCxxQkFBS0MsWUFBTDtBQUNIO0FBbEJLLFM7Ozs7OztpR0FvQlNyQixJOzs7Ozs7O3VDQUNHLHNCQUFVLGdCQUFWLEVBQTRCO0FBQzFDQSwwQ0FBTTtBQUNGc0IsaURBQVN0QixJQURQO0FBRUZ1QixpREFBUyxLQUFLdEIsSUFBTCxDQUFVdUI7QUFGakIscUNBRG9DO0FBSzFDQyw0Q0FBUTtBQUxrQyxpQ0FBNUIsQzs7O0FBQVpDLG1DOztBQU9OQyx3Q0FBUUMsR0FBUixDQUFZRixHQUFaOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt1Q0FHa0IsaUNBQW1CLEtBQUt6QixJQUFMLENBQVV1QixFQUE3QixXQUF1QztBQUNyREMsNENBQVE7QUFENkMsaUNBQXZDLEM7OztBQUFaQyxtQzs7QUFHTkMsd0NBQVFDLEdBQVIsQ0FBWUYsR0FBWjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7dUNBR2tCLGlDQUFtQixLQUFLekIsSUFBTCxDQUFVdUIsRUFBN0IsYUFBeUM7QUFDdkRDLDRDQUFRO0FBRCtDLGlDQUF6QyxDOzs7QUFBWkMsbUM7O0FBR05DLHdDQUFRQyxHQUFSLENBQVlGLEdBQVo7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0dBR1VHLE87Ozs7Ozs7dUNBQ1Msa0NBQW1CQSxRQUFRTCxFQUFSLElBQWMsQ0FBakMsRTs7O0FBQWJ4QixvQztBQUNBOEIsMEMsR0FBYSxLQUFLM0IsT0FBTCxDQUFhQyxVQUFiLENBQXdCSixLQUFLSyxJQUE3QixDOztBQUNuQixxQ0FBS0osSUFBTCxHQUFZNkIsV0FBVyxDQUFYLENBQVo7QUFDQSxxQ0FBSzVCLFFBQUwsR0FBZ0I0QixXQUFXLENBQVgsQ0FBaEI7QUFDQSxxQ0FBS0MsTUFBTDtBQUNBLGtEQUFRQyxPQUFSLENBQWdCLFNBQWhCLEVBQTJCLE1BQTNCLEVBQW1DLEtBQUsvQixJQUFMLENBQVVxQixPQUE3QyxFQUFzRCxJQUF0RCxFQUE0RCxDQUE1RDtBQUNBLCtDQUFLVyxxQkFBTCxDQUEyQjtBQUN2QkMsMkNBQU8sS0FBS2pDLElBQUwsQ0FBVWlDO0FBRE0saUNBQTNCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBakUyQixlQUFLQyxJOztrQkFBbkIxQyxLIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgICBpbXBvcnQgV3hQYXJzZSBmcm9tICcuLi8uLi9saWJzL3d4UGFyc2Uvd3hQYXJzZS5qcydcbiAgICBpbXBvcnQgeyBnZXRGZXRjaCwgcG9zdEZldGNoIH0gZnJvbSAnQC9tb2R1bGVzL2NvbW1vbi9mZXRjaCdcbiAgICBpbXBvcnQgRWRpdG9yIGZyb20gJ0AvY29tcG9uZW50cy9lZGl0b3InXG5cbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgICAgIGNvbmZpZyA9IHtcbiAgICAgICAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfmlofnq6AnXG4gICAgICAgIH1cbiAgICAgICAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcInYtZWRpdG9yXCI6e1wieG1sbnM6di1vblwiOlwiXCJ9fTtcclxuJGV2ZW50cyA9IHtcInYtZWRpdG9yXCI6e1widi1vbjpjbGlja1wiOlwiY29tbWVudFwifX07XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgICAgICAgJ3YtZWRpdG9yJzogRWRpdG9yXG4gICAgICAgIH1cbiAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICAgIGl0ZW06IHt9LFxuICAgICAgICAgICAgdXNlckluZm86IHt9XG4gICAgICAgIH1cblxuICAgICAgICBtZXRob2RzID0ge1xuICAgICAgICAgICAgcmVuZGVyUG9zdCAocG9zdCkge1xuICAgICAgICAgICAgICAgIHBvc3QudGFyZ2V0c0xlbmd0aCA9IHBvc3QudGFyZ2V0cy5sZW5ndGhcbiAgICAgICAgICAgICAgICBwb3N0LmNvbW1lbnRzTGVuZ3RoID0gcG9zdC5jb21tZW50cy5sZW5ndGhcbiAgICAgICAgICAgICAgICBjb25zdCB1c2VySW5mbyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgICAgICAgICBuaWNrTmFtZTogJ+Wwj+ajricsXG4gICAgICAgICAgICAgICAgICAgIGF2YXRhclVybDogJ2h0dHA6Ly9zdGF0aWMuaHR4cS5uZXQvVXBsb2FkRmlsZXMvaGVhZGltZy8yMDE2MDcyMTE0MjUyOTI0Mi5qcGcnXG4gICAgICAgICAgICAgICAgfSwgcG9zdC51c2VyIHx8IHt9KVxuICAgICAgICAgICAgICAgIHJldHVybiBbcG9zdCwgdXNlckluZm9dXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29tbWVudCAoZGF0YSkge1xuICAgICAgICAgICAgICAgIHRoaXMucG9zdENvbW1lbnQoZGF0YSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB6YW4gKCkge1xuICAgICAgICAgICAgICAgIHRoaXMucmVxdWVzdFphbigpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdW56YW4gKCkge1xuICAgICAgICAgICAgICAgIHRoaXMucmVxdWVzdFVuWmFuKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBhc3luYyBwb3N0Q29tbWVudCAoZGF0YSkge1xuICAgICAgICAgICAgY29uc3QgcnNwID0gYXdhaXQgcG9zdEZldGNoKCcvcG9zdHMvY29tbWVudCcsIHtcbiAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IGRhdGEsXG4gICAgICAgICAgICAgICAgICAgIHBvc3RfaWQ6IHRoaXMuaXRlbS5pZFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgbm9BamF4OiB0cnVlXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgY29uc29sZS5sb2cocnNwKVxuICAgICAgICB9XG4gICAgICAgIGFzeW5jIHJlcXVlc3RaYW4gKCkge1xuICAgICAgICAgICAgY29uc3QgcnNwID0gYXdhaXQgZ2V0RmV0Y2goYC9wb3N0cy8ke3RoaXMuaXRlbS5pZH0vemFuYCwge1xuICAgICAgICAgICAgICAgIG5vQWpheDogdHJ1ZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJzcClcbiAgICAgICAgfVxuICAgICAgICBhc3luYyByZXF1ZXN0VW5aYW4gKCkge1xuICAgICAgICAgICAgY29uc3QgcnNwID0gYXdhaXQgZ2V0RmV0Y2goYC9wb3N0cy8ke3RoaXMuaXRlbS5pZH0vdW56YW5gLCB7XG4gICAgICAgICAgICAgICAgbm9BamF4OiB0cnVlXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgY29uc29sZS5sb2cocnNwKVxuICAgICAgICB9XG5cbiAgICAgICAgYXN5bmMgb25Mb2FkIChvcHRpb25zKSB7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0RmV0Y2goYC9wb3N0cy8ke29wdGlvbnMuaWQgfHwgMX1gKVxuICAgICAgICAgICAgY29uc3QgcmVuZGVyRGF0YSA9IHRoaXMubWV0aG9kcy5yZW5kZXJQb3N0KGRhdGEucG9zdClcbiAgICAgICAgICAgIHRoaXMuaXRlbSA9IHJlbmRlckRhdGFbMF1cbiAgICAgICAgICAgIHRoaXMudXNlckluZm8gPSByZW5kZXJEYXRhWzFdXG4gICAgICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICAgICAgICBXeFBhcnNlLnd4UGFyc2UoJ2FydGljbGUnLCAnaHRtbCcsIHRoaXMuaXRlbS5jb250ZW50LCB0aGlzLCAwKVxuICAgICAgICAgICAgd2VweS5zZXROYXZpZ2F0aW9uQmFyVGl0bGUoe1xuICAgICAgICAgICAgICAgIHRpdGxlOiB0aGlzLml0ZW0udGl0bGVcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG4iXX0=