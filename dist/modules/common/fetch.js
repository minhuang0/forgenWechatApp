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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZldGNoLmpzIl0sIm5hbWVzIjpbImNvb2tpZSIsImZldGNoIiwidXJsIiwib3B0aW9ucyIsInF1ZXJ5Iiwibm9BamF4IiwidHlwZSIsImZ1bGxVcmwiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlcXVlc3QiLCJoZWFkZXIiLCJDb29raWUiLCJkYXRhIiwibWV0aG9kIiwic3VjY2VzcyIsInJlcyIsInN0YXR1c0NvZGUiLCJmYWlsIiwidXBsb2FkRmlsZSIsImZpbGVQYXRoIiwibmFtZSIsImNob29zZUltYWdlIiwic2l6ZVR5cGUiLCJzb3VyY2VUeXBlIiwiZ2V0RmV0Y2giLCJwb3N0RmV0Y2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOzs7Ozs7QUFFQSxJQUFJQSxTQUFTLEVBQWI7QUFDTyxJQUFNQyx3QkFBUSxTQUFSQSxLQUFRLENBQUNDLEdBQUQsRUFBTUMsT0FBTixFQUE4QjtBQUFBLFFBQWZDLEtBQWUsdUVBQVAsRUFBTzs7QUFDL0MsUUFBSSxDQUFDRCxRQUFRRSxNQUFiLEVBQXFCO0FBQ2pCRCxjQUFNRSxJQUFOLEdBQWEsTUFBYjtBQUNIO0FBQ0QsUUFBTUMsVUFBVSxnQkFBTUEsT0FBTixlQUFvQkwsR0FBcEIsRUFBeUJFLEtBQXpCLENBQWhCO0FBQ0EsV0FBTyxJQUFJSSxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3BDLGVBQU8sZUFBS0MsT0FBTCxDQUFhO0FBQ2hCVCxpQkFBS0ssT0FEVztBQUVoQkssb0JBQVE7QUFDSkMsd0JBQVFiO0FBREosYUFGUTtBQUtoQmMsa0JBQU1YLFFBQVFXLElBTEU7QUFNaEJDLG9CQUFRWixRQUFRWSxNQU5BO0FBT2hCQyxxQkFBUyxpQkFBQ0MsR0FBRCxFQUFTO0FBQ2Qsb0JBQUlBLElBQUlMLE1BQUosQ0FBVyxZQUFYLENBQUosRUFBOEI7QUFDMUJaLDZCQUFTaUIsSUFBSUwsTUFBSixDQUFXLFlBQVgsQ0FBVDtBQUNIO0FBQ0QsdUJBQU9LLElBQUlDLFVBQUosS0FBbUIsR0FBbkIsR0FBeUJULFFBQVFRLElBQUlILElBQVosQ0FBekIsR0FBNkNKLE9BQU9PLEdBQVAsQ0FBcEQ7QUFDSCxhQVplO0FBYWhCRSxrQkFBTVQ7QUFiVSxTQUFiLENBQVA7QUFlSCxLQWhCTSxDQUFQO0FBaUJILENBdEJNOztBQXdCQSxJQUFNVSxrQ0FBYSxTQUFiQSxVQUFhLENBQUNsQixHQUFELEVBQU1tQixRQUFOLEVBQW1CO0FBQ3pDLFFBQU1kLFVBQVUsZ0JBQU1BLE9BQU4sZUFBb0JMLEdBQXBCLENBQWhCO0FBQ0EsV0FBTyxJQUFJTSxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3BDLHVCQUFLVSxVQUFMLENBQWdCO0FBQ1psQixpQkFBS0ssT0FETztBQUVaYyw4QkFGWTtBQUdaQyxrQkFBTSxNQUhNO0FBSVpWLG9CQUFRO0FBQ0pDLHdCQUFRYjtBQURKLGFBSkk7QUFPWmdCLG1CQVBZLG1CQU9IQyxHQVBHLEVBT0U7QUFDVix1QkFBT0EsSUFBSUMsVUFBSixLQUFtQixHQUFuQixHQUF5QlQsUUFBUVEsSUFBSUgsSUFBWixDQUF6QixHQUE2Q0osT0FBT08sR0FBUCxDQUFwRDtBQUNILGFBVFc7O0FBVVpFLGtCQUFNVDtBQVZNLFNBQWhCO0FBWUgsS0FiTSxDQUFQO0FBY0gsQ0FoQk07O0FBa0JBLElBQU1hLG9DQUFjLFNBQWRBLFdBQWMsR0FBTTtBQUM3QixXQUFPLElBQUlmLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDcEMsdUJBQUthLFdBQUwsQ0FBaUI7QUFDYkMsc0JBQVUsQ0FBQyxVQUFELEVBQWEsWUFBYixDQURHLEVBQ3lCO0FBQ3RDQyx3QkFBWSxDQUFDLE9BQUQsRUFBVSxRQUFWLENBRkMsRUFFb0I7QUFDakNULHFCQUFTUCxPQUhJO0FBSWJVLGtCQUFNVDtBQUpPLFNBQWpCO0FBTUgsS0FQTSxDQUFQO0FBUUgsQ0FUTTs7QUFXQSxJQUFNZ0IsOEJBQVcsU0FBWEEsUUFBVyxDQUFDeEIsR0FBRCxFQUE4QjtBQUFBLFFBQXhCQyxPQUF3Qix1RUFBZCxFQUFjO0FBQUEsUUFBVkMsS0FBVTs7QUFDbERELFlBQVFZLE1BQVIsR0FBaUIsS0FBakI7QUFDQSxXQUFPZCxNQUFNQyxHQUFOLEVBQVdDLE9BQVgsRUFBb0JDLEtBQXBCLENBQVA7QUFDSCxDQUhNOztBQUtBLElBQU11QixnQ0FBWSxTQUFaQSxTQUFZLENBQUN6QixHQUFELEVBQThCO0FBQUEsUUFBeEJDLE9BQXdCLHVFQUFkLEVBQWM7QUFBQSxRQUFWQyxLQUFVOztBQUNuREQsWUFBUVksTUFBUixHQUFpQixNQUFqQjtBQUNBLFdBQU9kLE1BQU1DLEdBQU4sRUFBV0MsT0FBWCxFQUFvQkMsS0FBcEIsQ0FBUDtBQUNILENBSE0iLCJmaWxlIjoiZmV0Y2guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuaW1wb3J0IHsgSE9TVCB9IGZyb20gJ0AvbW9kdWxlcy9jb25maWcnXG5pbXBvcnQgdXRpbHMgZnJvbSAnLi91dGlscydcblxubGV0IGNvb2tpZSA9ICcnXG5leHBvcnQgY29uc3QgZmV0Y2ggPSAodXJsLCBvcHRpb25zLCBxdWVyeSA9IHt9KSA9PiB7XG4gICAgaWYgKCFvcHRpb25zLm5vQWpheCkge1xuICAgICAgICBxdWVyeS50eXBlID0gJ2FqYXgnXG4gICAgfVxuICAgIGNvbnN0IGZ1bGxVcmwgPSB1dGlscy5mdWxsVXJsKEhPU1QsIHVybCwgcXVlcnkpXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgcmV0dXJuIHdlcHkucmVxdWVzdCh7XG4gICAgICAgICAgICB1cmw6IGZ1bGxVcmwsXG4gICAgICAgICAgICBoZWFkZXI6IHtcbiAgICAgICAgICAgICAgICBDb29raWU6IGNvb2tpZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRhdGE6IG9wdGlvbnMuZGF0YSxcbiAgICAgICAgICAgIG1ldGhvZDogb3B0aW9ucy5tZXRob2QsXG4gICAgICAgICAgICBzdWNjZXNzOiAocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlcy5oZWFkZXJbJ1NldC1Db29raWUnXSkge1xuICAgICAgICAgICAgICAgICAgICBjb29raWUgPSByZXMuaGVhZGVyWydTZXQtQ29va2llJ11cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXNDb2RlID09PSAyMDAgPyByZXNvbHZlKHJlcy5kYXRhKSA6IHJlamVjdChyZXMpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZmFpbDogcmVqZWN0XG4gICAgICAgIH0pXG4gICAgfSlcbn1cblxuZXhwb3J0IGNvbnN0IHVwbG9hZEZpbGUgPSAodXJsLCBmaWxlUGF0aCkgPT4ge1xuICAgIGNvbnN0IGZ1bGxVcmwgPSB1dGlscy5mdWxsVXJsKEhPU1QsIHVybClcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICB3ZXB5LnVwbG9hZEZpbGUoe1xuICAgICAgICAgICAgdXJsOiBmdWxsVXJsLFxuICAgICAgICAgICAgZmlsZVBhdGgsXG4gICAgICAgICAgICBuYW1lOiAnZmlsZScsXG4gICAgICAgICAgICBoZWFkZXI6IHtcbiAgICAgICAgICAgICAgICBDb29raWU6IGNvb2tpZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN1Y2Nlc3MgKHJlcykge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzQ29kZSA9PT0gMjAwID8gcmVzb2x2ZShyZXMuZGF0YSkgOiByZWplY3QocmVzKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZhaWw6IHJlamVjdFxuICAgICAgICB9KVxuICAgIH0pXG59XG5cbmV4cG9ydCBjb25zdCBjaG9vc2VJbWFnZSA9ICgpID0+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICB3ZXB5LmNob29zZUltYWdlKHtcbiAgICAgICAgICAgIHNpemVUeXBlOiBbJ29yaWdpbmFsJywgJ2NvbXByZXNzZWQnXSwgLy8g5Y+v5Lul5oyH5a6a5piv5Y6f5Zu+6L+Y5piv5Y6L57yp5Zu+77yM6buY6K6k5LqM6ICF6YO95pyJXG4gICAgICAgICAgICBzb3VyY2VUeXBlOiBbJ2FsYnVtJywgJ2NhbWVyYSddLCAvLyDlj6/ku6XmjIflrprmnaXmupDmmK/nm7jlhozov5jmmK/nm7jmnLrvvIzpu5jorqTkuozogIXpg73mnIlcbiAgICAgICAgICAgIHN1Y2Nlc3M6IHJlc29sdmUsXG4gICAgICAgICAgICBmYWlsOiByZWplY3RcbiAgICAgICAgfSlcbiAgICB9KVxufVxuXG5leHBvcnQgY29uc3QgZ2V0RmV0Y2ggPSAodXJsLCBvcHRpb25zID0ge30sIHF1ZXJ5KSA9PiB7XG4gICAgb3B0aW9ucy5tZXRob2QgPSAnR0VUJ1xuICAgIHJldHVybiBmZXRjaCh1cmwsIG9wdGlvbnMsIHF1ZXJ5KVxufVxuXG5leHBvcnQgY29uc3QgcG9zdEZldGNoID0gKHVybCwgb3B0aW9ucyA9IHt9LCBxdWVyeSkgPT4ge1xuICAgIG9wdGlvbnMubWV0aG9kID0gJ1BPU1QnXG4gICAgcmV0dXJuIGZldGNoKHVybCwgb3B0aW9ucywgcXVlcnkpXG59XG4iXX0=