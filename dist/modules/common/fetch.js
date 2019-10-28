'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.postFetch = exports.getFetch = exports.chooseImage = exports.uploadFile = exports.fetch = undefined;

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _config = require('./../config/index.js');

var _utils = require('./utils.js');

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cookie = '';
var fetch = exports.fetch = function fetch(url, options) {
    var query = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    if (!options.noAjax) {
        query.type = 'ajax';
    }
    var fullUrl = _utils2.default.fullUrl(_config.HOST, url, query);
    return new Promise(function (resolve, reject) {
        return _wepy2.default.request({
            url: fullUrl,
            header: {
                Cookie: cookie
            },
            data: options.data,
            method: options.method,
            success: function success(res) {
                if (res.header['Set-Cookie']) {
                    cookie = res.header['Set-Cookie'];
                }
                return res.statusCode === 200 ? resolve(res.data) : reject(res);
            },
            fail: reject
        });
    });
};

var uploadFile = exports.uploadFile = function uploadFile(url, filePath) {
    var fullUrl = _utils2.default.fullUrl(_config.HOST, url);
    return new Promise(function (resolve, reject) {
        _wepy2.default.uploadFile({
            url: fullUrl,
            filePath: filePath,
            name: 'file',
            header: {
                Cookie: cookie
            },
            success: function success(res) {
                return res.statusCode === 200 ? resolve(res.data) : reject(res);
            },

            fail: reject
        });
    });
};

var chooseImage = exports.chooseImage = function chooseImage() {
    return new Promise(function (resolve, reject) {
        _wepy2.default.chooseImage({
            sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
            sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
            success: resolve,
            fail: reject
        });
    });
};

var getFetch = exports.getFetch = function getFetch(url) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var query = arguments[2];

    options.method = 'GET';
    return fetch(url, options, query);
};

var postFetch = exports.postFetch = function postFetch(url) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var query = arguments[2];

    options.method = 'POST';
    return fetch(url, options, query);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZldGNoLmpzIl0sIm5hbWVzIjpbImNvb2tpZSIsImZldGNoIiwidXJsIiwib3B0aW9ucyIsInF1ZXJ5Iiwibm9BamF4IiwidHlwZSIsImZ1bGxVcmwiLCJ1dGlscyIsIkhPU1QiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsIndlcHkiLCJyZXF1ZXN0IiwiaGVhZGVyIiwiQ29va2llIiwiZGF0YSIsIm1ldGhvZCIsInN1Y2Nlc3MiLCJyZXMiLCJzdGF0dXNDb2RlIiwiZmFpbCIsInVwbG9hZEZpbGUiLCJmaWxlUGF0aCIsIm5hbWUiLCJjaG9vc2VJbWFnZSIsInNpemVUeXBlIiwic291cmNlVHlwZSIsImdldEZldGNoIiwicG9zdEZldGNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7Ozs7O0FBRUEsSUFBSUEsU0FBUyxFQUFiO0FBQ08sSUFBTUMsd0JBQVEsU0FBUkEsS0FBUSxDQUFDQyxHQUFELEVBQU1DLE9BQU4sRUFBOEI7QUFBQSxRQUFmQyxLQUFlLHVFQUFQLEVBQU87O0FBQy9DLFFBQUksQ0FBQ0QsUUFBUUUsTUFBYixFQUFxQjtBQUNqQkQsY0FBTUUsSUFBTixHQUFhLE1BQWI7QUFDSDtBQUNELFFBQU1DLFVBQVVDLGdCQUFNRCxPQUFOLENBQWNFLFlBQWQsRUFBb0JQLEdBQXBCLEVBQXlCRSxLQUF6QixDQUFoQjtBQUNBLFdBQU8sSUFBSU0sT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUNwQyxlQUFPQyxlQUFLQyxPQUFMLENBQWE7QUFDaEJaLGlCQUFLSyxPQURXO0FBRWhCUSxvQkFBUTtBQUNKQyx3QkFBUWhCO0FBREosYUFGUTtBQUtoQmlCLGtCQUFNZCxRQUFRYyxJQUxFO0FBTWhCQyxvQkFBUWYsUUFBUWUsTUFOQTtBQU9oQkMscUJBQVMsaUJBQUNDLEdBQUQsRUFBUztBQUNkLG9CQUFJQSxJQUFJTCxNQUFKLENBQVcsWUFBWCxDQUFKLEVBQThCO0FBQzFCZiw2QkFBU29CLElBQUlMLE1BQUosQ0FBVyxZQUFYLENBQVQ7QUFDSDtBQUNELHVCQUFPSyxJQUFJQyxVQUFKLEtBQW1CLEdBQW5CLEdBQXlCVixRQUFRUyxJQUFJSCxJQUFaLENBQXpCLEdBQTZDTCxPQUFPUSxHQUFQLENBQXBEO0FBQ0gsYUFaZTtBQWFoQkUsa0JBQU1WO0FBYlUsU0FBYixDQUFQO0FBZUgsS0FoQk0sQ0FBUDtBQWlCSCxDQXRCTTs7QUF3QkEsSUFBTVcsa0NBQWEsU0FBYkEsVUFBYSxDQUFDckIsR0FBRCxFQUFNc0IsUUFBTixFQUFtQjtBQUN6QyxRQUFNakIsVUFBVUMsZ0JBQU1ELE9BQU4sQ0FBY0UsWUFBZCxFQUFvQlAsR0FBcEIsQ0FBaEI7QUFDQSxXQUFPLElBQUlRLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDcENDLHVCQUFLVSxVQUFMLENBQWdCO0FBQ1pyQixpQkFBS0ssT0FETztBQUVaaUIsOEJBRlk7QUFHWkMsa0JBQU0sTUFITTtBQUlaVixvQkFBUTtBQUNKQyx3QkFBUWhCO0FBREosYUFKSTtBQU9abUIsbUJBUFksbUJBT0hDLEdBUEcsRUFPRTtBQUNWLHVCQUFPQSxJQUFJQyxVQUFKLEtBQW1CLEdBQW5CLEdBQXlCVixRQUFRUyxJQUFJSCxJQUFaLENBQXpCLEdBQTZDTCxPQUFPUSxHQUFQLENBQXBEO0FBQ0gsYUFUVzs7QUFVWkUsa0JBQU1WO0FBVk0sU0FBaEI7QUFZSCxLQWJNLENBQVA7QUFjSCxDQWhCTTs7QUFrQkEsSUFBTWMsb0NBQWMsU0FBZEEsV0FBYyxHQUFNO0FBQzdCLFdBQU8sSUFBSWhCLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDcENDLHVCQUFLYSxXQUFMLENBQWlCO0FBQ2JDLHNCQUFVLENBQUMsVUFBRCxFQUFhLFlBQWIsQ0FERyxFQUN5QjtBQUN0Q0Msd0JBQVksQ0FBQyxPQUFELEVBQVUsUUFBVixDQUZDLEVBRW9CO0FBQ2pDVCxxQkFBU1IsT0FISTtBQUliVyxrQkFBTVY7QUFKTyxTQUFqQjtBQU1ILEtBUE0sQ0FBUDtBQVFILENBVE07O0FBV0EsSUFBTWlCLDhCQUFXLFNBQVhBLFFBQVcsQ0FBQzNCLEdBQUQsRUFBOEI7QUFBQSxRQUF4QkMsT0FBd0IsdUVBQWQsRUFBYztBQUFBLFFBQVZDLEtBQVU7O0FBQ2xERCxZQUFRZSxNQUFSLEdBQWlCLEtBQWpCO0FBQ0EsV0FBT2pCLE1BQU1DLEdBQU4sRUFBV0MsT0FBWCxFQUFvQkMsS0FBcEIsQ0FBUDtBQUNILENBSE07O0FBS0EsSUFBTTBCLGdDQUFZLFNBQVpBLFNBQVksQ0FBQzVCLEdBQUQsRUFBOEI7QUFBQSxRQUF4QkMsT0FBd0IsdUVBQWQsRUFBYztBQUFBLFFBQVZDLEtBQVU7O0FBQ25ERCxZQUFRZSxNQUFSLEdBQWlCLE1BQWpCO0FBQ0EsV0FBT2pCLE1BQU1DLEdBQU4sRUFBV0MsT0FBWCxFQUFvQkMsS0FBcEIsQ0FBUDtBQUNILENBSE0iLCJmaWxlIjoiZmV0Y2guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuaW1wb3J0IHsgSE9TVCB9IGZyb20gJ0AvbW9kdWxlcy9jb25maWcnXG5pbXBvcnQgdXRpbHMgZnJvbSAnLi91dGlscydcblxubGV0IGNvb2tpZSA9ICcnXG5leHBvcnQgY29uc3QgZmV0Y2ggPSAodXJsLCBvcHRpb25zLCBxdWVyeSA9IHt9KSA9PiB7XG4gICAgaWYgKCFvcHRpb25zLm5vQWpheCkge1xuICAgICAgICBxdWVyeS50eXBlID0gJ2FqYXgnXG4gICAgfVxuICAgIGNvbnN0IGZ1bGxVcmwgPSB1dGlscy5mdWxsVXJsKEhPU1QsIHVybCwgcXVlcnkpXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgcmV0dXJuIHdlcHkucmVxdWVzdCh7XG4gICAgICAgICAgICB1cmw6IGZ1bGxVcmwsXG4gICAgICAgICAgICBoZWFkZXI6IHtcbiAgICAgICAgICAgICAgICBDb29raWU6IGNvb2tpZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRhdGE6IG9wdGlvbnMuZGF0YSxcbiAgICAgICAgICAgIG1ldGhvZDogb3B0aW9ucy5tZXRob2QsXG4gICAgICAgICAgICBzdWNjZXNzOiAocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlcy5oZWFkZXJbJ1NldC1Db29raWUnXSkge1xuICAgICAgICAgICAgICAgICAgICBjb29raWUgPSByZXMuaGVhZGVyWydTZXQtQ29va2llJ11cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXNDb2RlID09PSAyMDAgPyByZXNvbHZlKHJlcy5kYXRhKSA6IHJlamVjdChyZXMpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZmFpbDogcmVqZWN0XG4gICAgICAgIH0pXG4gICAgfSlcbn1cblxuZXhwb3J0IGNvbnN0IHVwbG9hZEZpbGUgPSAodXJsLCBmaWxlUGF0aCkgPT4ge1xuICAgIGNvbnN0IGZ1bGxVcmwgPSB1dGlscy5mdWxsVXJsKEhPU1QsIHVybClcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICB3ZXB5LnVwbG9hZEZpbGUoe1xuICAgICAgICAgICAgdXJsOiBmdWxsVXJsLFxuICAgICAgICAgICAgZmlsZVBhdGgsXG4gICAgICAgICAgICBuYW1lOiAnZmlsZScsXG4gICAgICAgICAgICBoZWFkZXI6IHtcbiAgICAgICAgICAgICAgICBDb29raWU6IGNvb2tpZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN1Y2Nlc3MgKHJlcykge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzQ29kZSA9PT0gMjAwID8gcmVzb2x2ZShyZXMuZGF0YSkgOiByZWplY3QocmVzKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZhaWw6IHJlamVjdFxuICAgICAgICB9KVxuICAgIH0pXG59XG5cbmV4cG9ydCBjb25zdCBjaG9vc2VJbWFnZSA9ICgpID0+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICB3ZXB5LmNob29zZUltYWdlKHtcbiAgICAgICAgICAgIHNpemVUeXBlOiBbJ29yaWdpbmFsJywgJ2NvbXByZXNzZWQnXSwgLy8g5Y+v5Lul5oyH5a6a5piv5Y6f5Zu+6L+Y5piv5Y6L57yp5Zu+77yM6buY6K6k5LqM6ICF6YO95pyJXG4gICAgICAgICAgICBzb3VyY2VUeXBlOiBbJ2FsYnVtJywgJ2NhbWVyYSddLCAvLyDlj6/ku6XmjIflrprmnaXmupDmmK/nm7jlhozov5jmmK/nm7jmnLrvvIzpu5jorqTkuozogIXpg73mnIlcbiAgICAgICAgICAgIHN1Y2Nlc3M6IHJlc29sdmUsXG4gICAgICAgICAgICBmYWlsOiByZWplY3RcbiAgICAgICAgfSlcbiAgICB9KVxufVxuXG5leHBvcnQgY29uc3QgZ2V0RmV0Y2ggPSAodXJsLCBvcHRpb25zID0ge30sIHF1ZXJ5KSA9PiB7XG4gICAgb3B0aW9ucy5tZXRob2QgPSAnR0VUJ1xuICAgIHJldHVybiBmZXRjaCh1cmwsIG9wdGlvbnMsIHF1ZXJ5KVxufVxuXG5leHBvcnQgY29uc3QgcG9zdEZldGNoID0gKHVybCwgb3B0aW9ucyA9IHt9LCBxdWVyeSkgPT4ge1xuICAgIG9wdGlvbnMubWV0aG9kID0gJ1BPU1QnXG4gICAgcmV0dXJuIGZldGNoKHVybCwgb3B0aW9ucywgcXVlcnkpXG59XG4iXX0=