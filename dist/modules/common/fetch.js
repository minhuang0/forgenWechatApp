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
                resolve(res.data);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZldGNoLmpzIl0sIm5hbWVzIjpbImNvb2tpZSIsImZldGNoIiwidXJsIiwib3B0aW9ucyIsInF1ZXJ5Iiwibm9BamF4IiwidHlwZSIsImZ1bGxVcmwiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlcXVlc3QiLCJoZWFkZXIiLCJDb29raWUiLCJkYXRhIiwibWV0aG9kIiwic3VjY2VzcyIsInJlcyIsImZhaWwiLCJ1cGxvYWRGaWxlIiwiZmlsZVBhdGgiLCJuYW1lIiwic3RhdHVzQ29kZSIsImNob29zZUltYWdlIiwic2l6ZVR5cGUiLCJzb3VyY2VUeXBlIiwiZ2V0RmV0Y2giLCJwb3N0RmV0Y2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOzs7Ozs7QUFFQSxJQUFJQSxTQUFTLEVBQWI7QUFDTyxJQUFNQyx3QkFBUSxTQUFSQSxLQUFRLENBQUNDLEdBQUQsRUFBTUMsT0FBTixFQUE4QjtBQUFBLFFBQWZDLEtBQWUsdUVBQVAsRUFBTzs7QUFDL0MsUUFBSSxDQUFDRCxRQUFRRSxNQUFiLEVBQXFCO0FBQ2pCRCxjQUFNRSxJQUFOLEdBQWEsTUFBYjtBQUNIO0FBQ0QsUUFBTUMsVUFBVSxnQkFBTUEsT0FBTixlQUFvQkwsR0FBcEIsRUFBeUJFLEtBQXpCLENBQWhCO0FBQ0EsV0FBTyxJQUFJSSxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3BDLGVBQU8sZUFBS0MsT0FBTCxDQUFhO0FBQ2hCVCxpQkFBS0ssT0FEVztBQUVoQkssb0JBQVE7QUFDSkMsd0JBQVFiO0FBREosYUFGUTtBQUtoQmMsa0JBQU1YLFFBQVFXLElBTEU7QUFNaEJDLG9CQUFRWixRQUFRWSxNQU5BO0FBT2hCQyxxQkFBUyxpQkFBQ0MsR0FBRCxFQUFTO0FBQ2Qsb0JBQUlBLElBQUlMLE1BQUosQ0FBVyxZQUFYLENBQUosRUFBOEI7QUFDMUJaLDZCQUFTaUIsSUFBSUwsTUFBSixDQUFXLFlBQVgsQ0FBVDtBQUNIO0FBQ0RILHdCQUFRUSxJQUFJSCxJQUFaO0FBQ0gsYUFaZTtBQWFoQkksa0JBQU1SO0FBYlUsU0FBYixDQUFQO0FBZUgsS0FoQk0sQ0FBUDtBQWlCSCxDQXRCTTs7QUF3QkEsSUFBTVMsa0NBQWEsU0FBYkEsVUFBYSxDQUFDakIsR0FBRCxFQUFNa0IsUUFBTixFQUFtQjtBQUN6QyxRQUFNYixVQUFVLGdCQUFNQSxPQUFOLGVBQW9CTCxHQUFwQixDQUFoQjtBQUNBLFdBQU8sSUFBSU0sT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUNwQyx1QkFBS1MsVUFBTCxDQUFnQjtBQUNaakIsaUJBQUtLLE9BRE87QUFFWmEsOEJBRlk7QUFHWkMsa0JBQU0sTUFITTtBQUlaVCxvQkFBUTtBQUNKQyx3QkFBUWI7QUFESixhQUpJO0FBT1pnQixtQkFQWSxtQkFPSEMsR0FQRyxFQU9FO0FBQ1YsdUJBQU9BLElBQUlLLFVBQUosS0FBbUIsR0FBbkIsR0FBeUJiLFFBQVFRLElBQUlILElBQVosQ0FBekIsR0FBNkNKLE9BQU9PLEdBQVAsQ0FBcEQ7QUFDSCxhQVRXOztBQVVaQyxrQkFBTVI7QUFWTSxTQUFoQjtBQVlILEtBYk0sQ0FBUDtBQWNILENBaEJNOztBQWtCQSxJQUFNYSxvQ0FBYyxTQUFkQSxXQUFjLEdBQU07QUFDN0IsV0FBTyxJQUFJZixPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3BDLHVCQUFLYSxXQUFMLENBQWlCO0FBQ2JDLHNCQUFVLENBQUMsVUFBRCxFQUFhLFlBQWIsQ0FERyxFQUN5QjtBQUN0Q0Msd0JBQVksQ0FBQyxPQUFELEVBQVUsUUFBVixDQUZDLEVBRW9CO0FBQ2pDVCxxQkFBU1AsT0FISTtBQUliUyxrQkFBTVI7QUFKTyxTQUFqQjtBQU1ILEtBUE0sQ0FBUDtBQVFILENBVE07O0FBV0EsSUFBTWdCLDhCQUFXLFNBQVhBLFFBQVcsQ0FBQ3hCLEdBQUQsRUFBOEI7QUFBQSxRQUF4QkMsT0FBd0IsdUVBQWQsRUFBYztBQUFBLFFBQVZDLEtBQVU7O0FBQ2xERCxZQUFRWSxNQUFSLEdBQWlCLEtBQWpCO0FBQ0EsV0FBT2QsTUFBTUMsR0FBTixFQUFXQyxPQUFYLEVBQW9CQyxLQUFwQixDQUFQO0FBQ0gsQ0FITTs7QUFLQSxJQUFNdUIsZ0NBQVksU0FBWkEsU0FBWSxDQUFDekIsR0FBRCxFQUE4QjtBQUFBLFFBQXhCQyxPQUF3Qix1RUFBZCxFQUFjO0FBQUEsUUFBVkMsS0FBVTs7QUFDbkRELFlBQVFZLE1BQVIsR0FBaUIsTUFBakI7QUFDQSxXQUFPZCxNQUFNQyxHQUFOLEVBQVdDLE9BQVgsRUFBb0JDLEtBQXBCLENBQVA7QUFDSCxDQUhNIiwiZmlsZSI6ImZldGNoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmltcG9ydCB7IEhPU1QgfSBmcm9tICdAL21vZHVsZXMvY29uZmlnJ1xuaW1wb3J0IHV0aWxzIGZyb20gJy4vdXRpbHMnXG5cbmxldCBjb29raWUgPSAnJ1xuZXhwb3J0IGNvbnN0IGZldGNoID0gKHVybCwgb3B0aW9ucywgcXVlcnkgPSB7fSkgPT4ge1xuICAgIGlmICghb3B0aW9ucy5ub0FqYXgpIHtcbiAgICAgICAgcXVlcnkudHlwZSA9ICdhamF4J1xuICAgIH1cbiAgICBjb25zdCBmdWxsVXJsID0gdXRpbHMuZnVsbFVybChIT1NULCB1cmwsIHF1ZXJ5KVxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIHJldHVybiB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgICAgICAgdXJsOiBmdWxsVXJsLFxuICAgICAgICAgICAgaGVhZGVyOiB7XG4gICAgICAgICAgICAgICAgQ29va2llOiBjb29raWVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkYXRhOiBvcHRpb25zLmRhdGEsXG4gICAgICAgICAgICBtZXRob2Q6IG9wdGlvbnMubWV0aG9kLFxuICAgICAgICAgICAgc3VjY2VzczogKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXMuaGVhZGVyWydTZXQtQ29va2llJ10pIHtcbiAgICAgICAgICAgICAgICAgICAgY29va2llID0gcmVzLmhlYWRlclsnU2V0LUNvb2tpZSddXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJlc29sdmUocmVzLmRhdGEpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZmFpbDogcmVqZWN0XG4gICAgICAgIH0pXG4gICAgfSlcbn1cblxuZXhwb3J0IGNvbnN0IHVwbG9hZEZpbGUgPSAodXJsLCBmaWxlUGF0aCkgPT4ge1xuICAgIGNvbnN0IGZ1bGxVcmwgPSB1dGlscy5mdWxsVXJsKEhPU1QsIHVybClcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICB3ZXB5LnVwbG9hZEZpbGUoe1xuICAgICAgICAgICAgdXJsOiBmdWxsVXJsLFxuICAgICAgICAgICAgZmlsZVBhdGgsXG4gICAgICAgICAgICBuYW1lOiAnZmlsZScsXG4gICAgICAgICAgICBoZWFkZXI6IHtcbiAgICAgICAgICAgICAgICBDb29raWU6IGNvb2tpZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN1Y2Nlc3MgKHJlcykge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzQ29kZSA9PT0gMjAwID8gcmVzb2x2ZShyZXMuZGF0YSkgOiByZWplY3QocmVzKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZhaWw6IHJlamVjdFxuICAgICAgICB9KVxuICAgIH0pXG59XG5cbmV4cG9ydCBjb25zdCBjaG9vc2VJbWFnZSA9ICgpID0+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICB3ZXB5LmNob29zZUltYWdlKHtcbiAgICAgICAgICAgIHNpemVUeXBlOiBbJ29yaWdpbmFsJywgJ2NvbXByZXNzZWQnXSwgLy8g5Y+v5Lul5oyH5a6a5piv5Y6f5Zu+6L+Y5piv5Y6L57yp5Zu+77yM6buY6K6k5LqM6ICF6YO95pyJXG4gICAgICAgICAgICBzb3VyY2VUeXBlOiBbJ2FsYnVtJywgJ2NhbWVyYSddLCAvLyDlj6/ku6XmjIflrprmnaXmupDmmK/nm7jlhozov5jmmK/nm7jmnLrvvIzpu5jorqTkuozogIXpg73mnIlcbiAgICAgICAgICAgIHN1Y2Nlc3M6IHJlc29sdmUsXG4gICAgICAgICAgICBmYWlsOiByZWplY3RcbiAgICAgICAgfSlcbiAgICB9KVxufVxuXG5leHBvcnQgY29uc3QgZ2V0RmV0Y2ggPSAodXJsLCBvcHRpb25zID0ge30sIHF1ZXJ5KSA9PiB7XG4gICAgb3B0aW9ucy5tZXRob2QgPSAnR0VUJ1xuICAgIHJldHVybiBmZXRjaCh1cmwsIG9wdGlvbnMsIHF1ZXJ5KVxufVxuXG5leHBvcnQgY29uc3QgcG9zdEZldGNoID0gKHVybCwgb3B0aW9ucyA9IHt9LCBxdWVyeSkgPT4ge1xuICAgIG9wdGlvbnMubWV0aG9kID0gJ1BPU1QnXG4gICAgcmV0dXJuIGZldGNoKHVybCwgb3B0aW9ucywgcXVlcnkpXG59XG4iXX0=