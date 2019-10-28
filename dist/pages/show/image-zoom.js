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
            navigationBarTitleText: ''
            // navigationBarBackgroundColor: '#000000'
        }, _this.data = {
            url: '',
            scaleHeight: '',
            scaleWidth: '',
            stv: {
                offsetX: 0,
                offsetY: 0,
                zoom: false, // 是否缩放状态
                distance: 0, // 两指距离
                scale: 1 // 缩放倍数
            }
        }, _this.methods = {
            back: function back() {
                _wepy2.default.navigateBack();
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Index, [{
        key: 'touchstartCallback',

        // 事件处理函数
        value: function touchstartCallback(e) {
            // 触摸开始
            if (e.touches.length === 1) {
                var _e$touches$ = e.touches[0],
                    clientX = _e$touches$.clientX,
                    clientY = _e$touches$.clientY;

                this.startX = clientX;
                this.startY = clientY;
                this.touchStartEvent = e.touches;
            } else {
                var xMove = e.touches[1].clientX - e.touches[0].clientX;
                var yMove = e.touches[1].clientY - e.touches[0].clientY;
                var distance = Math.sqrt(xMove * xMove + yMove * yMove);
                this.stv.distance = distance;
                this.stv.zoom = true; // 缩放状态
            }
        }
    }, {
        key: 'touchmoveCallback',
        value: function touchmoveCallback(e) {
            // 触摸移动中
            // console.log('touchmoveCallback');
            // console.log(e);

            if (e.touches.length === 1) {
                // 单指移动
                if (this.data.stv.zoom) {
                    // 缩放状态，不处理单指
                    return;
                }
                var _e$touches$2 = e.touches[0],
                    clientX = _e$touches$2.clientX,
                    clientY = _e$touches$2.clientY;

                var offsetX = clientX - this.startX;
                var offsetY = clientY - this.startY;
                this.startX = clientX;
                this.startY = clientY;
                var stv = this.data.stv;

                stv.offsetX += offsetX;
                stv.offsetY += offsetY;
                stv.offsetLeftX = -stv.offsetX;
                stv.offsetLeftY = -stv.offsetLeftY;
                this.stv = stv;
            } else {
                // 双指缩放
                var xMove = e.touches[1].clientX - e.touches[0].clientX;
                var yMove = e.touches[1].clientY - e.touches[0].clientY;
                var distance = Math.sqrt(xMove * xMove + yMove * yMove);

                var distanceDiff = distance - this.data.stv.distance;
                var newScale = this.data.stv.scale + 0.01 * distanceDiff;
                // 最小时不做缩放
                if (newScale <= 0.5) {
                    return;
                }

                this.stv.distance = distance;
                this.stv.scale = newScale;
            }
        }
    }, {
        key: 'touchendCallback',
        value: function touchendCallback(e) {
            // 触摸结束
            console.log('touchendCallback');
            console.log(e);

            if (e.touches.length === 0) {
                this.stv.zoom = false; // 重置缩放状态
            }
        }
    }, {
        key: 'onLoad',
        value: function onLoad(options) {
            this.url = options.url || 'https://images.ifanr.cn/wp-content/uploads/2016/11/feature-1.jpg';
            var systemInfo = _wepy2.default.getSystemInfoSync(); // 获取系统信息的同步方法
            this.scaleHeight = systemInfo.windowWidth;
            this.scaleWidth = systemInfo.windowHeight;
        }
    }]);

    return Index;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/show/image-zoom'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImltYWdlLXpvb20uanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsInVybCIsInNjYWxlSGVpZ2h0Iiwic2NhbGVXaWR0aCIsInN0diIsIm9mZnNldFgiLCJvZmZzZXRZIiwiem9vbSIsImRpc3RhbmNlIiwic2NhbGUiLCJtZXRob2RzIiwiYmFjayIsIndlcHkiLCJuYXZpZ2F0ZUJhY2siLCJlIiwidG91Y2hlcyIsImxlbmd0aCIsImNsaWVudFgiLCJjbGllbnRZIiwic3RhcnRYIiwic3RhcnRZIiwidG91Y2hTdGFydEV2ZW50IiwieE1vdmUiLCJ5TW92ZSIsIk1hdGgiLCJzcXJ0Iiwib2Zmc2V0TGVmdFgiLCJvZmZzZXRMZWZ0WSIsImRpc3RhbmNlRGlmZiIsIm5ld1NjYWxlIiwiY29uc29sZSIsImxvZyIsIm9wdGlvbnMiLCJzeXN0ZW1JbmZvIiwiZ2V0U3lzdGVtSW5mb1N5bmMiLCJ3aW5kb3dXaWR0aCIsIndpbmRvd0hlaWdodCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNJOzs7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O3dMQUNqQkMsTSxHQUFTO0FBQ0xDLG9DQUF3QjtBQUN4QjtBQUZLLFMsUUFJVEMsSSxHQUFPO0FBQ0hDLGlCQUFLLEVBREY7QUFFSEMseUJBQWEsRUFGVjtBQUdIQyx3QkFBWSxFQUhUO0FBSUhDLGlCQUFLO0FBQ0RDLHlCQUFTLENBRFI7QUFFREMseUJBQVMsQ0FGUjtBQUdEQyxzQkFBTSxLQUhMLEVBR1k7QUFDYkMsMEJBQVUsQ0FKVCxFQUlhO0FBQ2RDLHVCQUFPLENBTE4sQ0FLUztBQUxUO0FBSkYsUyxRQVlQQyxPLEdBQVU7QUFDTkMsZ0JBRE0sa0JBQ0U7QUFDSkMsK0JBQUtDLFlBQUw7QUFDSDtBQUhLLFM7Ozs7OztBQUtWOzJDQUNvQkMsQyxFQUFHO0FBQ25CO0FBQ0EsZ0JBQUlBLEVBQUVDLE9BQUYsQ0FBVUMsTUFBVixLQUFx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QyxHQUFSLENBQVlqQixDQUFaOztBQUVBLGdCQUFJQSxFQUFFQyxPQUFGLENBQVVDLE1BQVYsS0FBcUIsQ0FBekIsRUFBNEI7QUFDeEIscUJBQUtaLEdBQUwsQ0FBU0csSUFBVCxHQUFnQixLQUFoQixDQUR3QixDQUNGO0FBQ3pCO0FBQ0o7OzsrQkFDT3lCLE8sRUFBUztBQUNiLGlCQUFLL0IsR0FBTCxHQUFXK0IsUUFBUS9CLEdBQVIsSUFBZSxrRUFBMUI7QUFDQSxnQkFBTWdDLGFBQWFyQixlQUFLc0IsaUJBQUwsRUFBbkIsQ0FGYSxDQUUrQjtBQUM1QyxpQkFBS2hDLFdBQUwsR0FBbUIrQixXQUFXRSxXQUE5QjtBQUNBLGlCQUFLaEMsVUFBTCxHQUFrQjhCLFdBQVdHLFlBQTdCO0FBQ0g7Ozs7RUEzRjhCeEIsZUFBS3lCLEk7O2tCQUFuQnhDLEsiLCJmaWxlIjoiaW1hZ2Utem9vbS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgICAgIGNvbmZpZyA9IHtcbiAgICAgICAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICcnXG4gICAgICAgICAgICAvLyBuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yOiAnIzAwMDAwMCdcbiAgICAgICAgfVxuICAgICAgICBkYXRhID0ge1xuICAgICAgICAgICAgdXJsOiAnJyxcbiAgICAgICAgICAgIHNjYWxlSGVpZ2h0OiAnJyxcbiAgICAgICAgICAgIHNjYWxlV2lkdGg6ICcnLFxuICAgICAgICAgICAgc3R2OiB7XG4gICAgICAgICAgICAgICAgb2Zmc2V0WDogMCxcbiAgICAgICAgICAgICAgICBvZmZzZXRZOiAwLFxuICAgICAgICAgICAgICAgIHpvb206IGZhbHNlLCAvLyDmmK/lkKbnvKnmlL7nirbmgIFcbiAgICAgICAgICAgICAgICBkaXN0YW5jZTogMCwgIC8vIOS4pOaMh+i3neemu1xuICAgICAgICAgICAgICAgIHNjYWxlOiAxICAvLyDnvKnmlL7lgI3mlbBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBtZXRob2RzID0ge1xuICAgICAgICAgICAgYmFjayAoKSB7XG4gICAgICAgICAgICAgICAgd2VweS5uYXZpZ2F0ZUJhY2soKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIOS6i+S7tuWkhOeQhuWHveaVsFxuICAgICAgICB0b3VjaHN0YXJ0Q2FsbGJhY2sgKGUpIHtcbiAgICAgICAgICAgIC8vIOinpuaRuOW8gOWni1xuICAgICAgICAgICAgaWYgKGUudG91Y2hlcy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgICAgICBsZXQge2NsaWVudFgsIGNsaWVudFl9ID0gZS50b3VjaGVzWzBdXG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydFggPSBjbGllbnRYXG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydFkgPSBjbGllbnRZXG4gICAgICAgICAgICAgICAgdGhpcy50b3VjaFN0YXJ0RXZlbnQgPSBlLnRvdWNoZXNcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbGV0IHhNb3ZlID0gZS50b3VjaGVzWzFdLmNsaWVudFggLSBlLnRvdWNoZXNbMF0uY2xpZW50WFxuICAgICAgICAgICAgICAgIGxldCB5TW92ZSA9IGUudG91Y2hlc1sxXS5jbGllbnRZIC0gZS50b3VjaGVzWzBdLmNsaWVudFlcbiAgICAgICAgICAgICAgICBsZXQgZGlzdGFuY2UgPSBNYXRoLnNxcnQoeE1vdmUgKiB4TW92ZSArIHlNb3ZlICogeU1vdmUpXG4gICAgICAgICAgICAgICAgdGhpcy5zdHYuZGlzdGFuY2UgPSBkaXN0YW5jZVxuICAgICAgICAgICAgICAgIHRoaXMuc3R2Lnpvb20gPSB0cnVlIC8vIOe8qeaUvueKtuaAgVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRvdWNobW92ZUNhbGxiYWNrIChlKSB7XG4gICAgICAgICAgICAvLyDop6bmkbjnp7vliqjkuK1cbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCd0b3VjaG1vdmVDYWxsYmFjaycpO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZSk7XG5cbiAgICAgICAgICAgIGlmIChlLnRvdWNoZXMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICAgICAgLy8g5Y2V5oyH56e75YqoXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZGF0YS5zdHYuem9vbSkge1xuICAgICAgICAgICAgICAgICAgICAvLyDnvKnmlL7nirbmgIHvvIzkuI3lpITnkIbljZXmjIdcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxldCB7Y2xpZW50WCwgY2xpZW50WX0gPSBlLnRvdWNoZXNbMF1cbiAgICAgICAgICAgICAgICBsZXQgb2Zmc2V0WCA9IGNsaWVudFggLSB0aGlzLnN0YXJ0WFxuICAgICAgICAgICAgICAgIGxldCBvZmZzZXRZID0gY2xpZW50WSAtIHRoaXMuc3RhcnRZXG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydFggPSBjbGllbnRYXG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydFkgPSBjbGllbnRZXG4gICAgICAgICAgICAgICAgbGV0IHtzdHZ9ID0gdGhpcy5kYXRhXG4gICAgICAgICAgICAgICAgc3R2Lm9mZnNldFggKz0gb2Zmc2V0WFxuICAgICAgICAgICAgICAgIHN0di5vZmZzZXRZICs9IG9mZnNldFlcbiAgICAgICAgICAgICAgICBzdHYub2Zmc2V0TGVmdFggPSAtc3R2Lm9mZnNldFhcbiAgICAgICAgICAgICAgICBzdHYub2Zmc2V0TGVmdFkgPSAtc3R2Lm9mZnNldExlZnRZXG4gICAgICAgICAgICAgICAgdGhpcy5zdHYgPSBzdHZcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8g5Y+M5oyH57yp5pS+XG4gICAgICAgICAgICAgICAgbGV0IHhNb3ZlID0gZS50b3VjaGVzWzFdLmNsaWVudFggLSBlLnRvdWNoZXNbMF0uY2xpZW50WFxuICAgICAgICAgICAgICAgIGxldCB5TW92ZSA9IGUudG91Y2hlc1sxXS5jbGllbnRZIC0gZS50b3VjaGVzWzBdLmNsaWVudFlcbiAgICAgICAgICAgICAgICBsZXQgZGlzdGFuY2UgPSBNYXRoLnNxcnQoeE1vdmUgKiB4TW92ZSArIHlNb3ZlICogeU1vdmUpXG5cbiAgICAgICAgICAgICAgICBsZXQgZGlzdGFuY2VEaWZmID0gZGlzdGFuY2UgLSB0aGlzLmRhdGEuc3R2LmRpc3RhbmNlXG4gICAgICAgICAgICAgICAgbGV0IG5ld1NjYWxlID0gdGhpcy5kYXRhLnN0di5zY2FsZSArIDAuMDEgKiBkaXN0YW5jZURpZmZcbiAgICAgICAgICAgICAgICAvLyDmnIDlsI/ml7bkuI3lgZrnvKnmlL5cbiAgICAgICAgICAgICAgICBpZiAobmV3U2NhbGUgPD0gMC41KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMuc3R2LmRpc3RhbmNlID0gZGlzdGFuY2VcbiAgICAgICAgICAgICAgICB0aGlzLnN0di5zY2FsZSA9IG5ld1NjYWxlXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdG91Y2hlbmRDYWxsYmFjayAoZSkge1xuICAgICAgICAgICAgLy8g6Kem5pG457uT5p2fXG4gICAgICAgICAgICBjb25zb2xlLmxvZygndG91Y2hlbmRDYWxsYmFjaycpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlKVxuXG4gICAgICAgICAgICBpZiAoZS50b3VjaGVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3R2Lnpvb20gPSBmYWxzZSAvLyDph43nva7nvKnmlL7nirbmgIFcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBvbkxvYWQgKG9wdGlvbnMpIHtcbiAgICAgICAgICAgIHRoaXMudXJsID0gb3B0aW9ucy51cmwgfHwgJ2h0dHBzOi8vaW1hZ2VzLmlmYW5yLmNuL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE2LzExL2ZlYXR1cmUtMS5qcGcnXG4gICAgICAgICAgICBjb25zdCBzeXN0ZW1JbmZvID0gd2VweS5nZXRTeXN0ZW1JbmZvU3luYygpIC8vIOiOt+WPluezu+e7n+S/oeaBr+eahOWQjOatpeaWueazlVxuICAgICAgICAgICAgdGhpcy5zY2FsZUhlaWdodCA9IHN5c3RlbUluZm8ud2luZG93V2lkdGhcbiAgICAgICAgICAgIHRoaXMuc2NhbGVXaWR0aCA9IHN5c3RlbUluZm8ud2luZG93SGVpZ2h0XG4gICAgICAgIH1cbiAgICB9XG4iXX0=