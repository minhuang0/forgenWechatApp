'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.paddingImg = function (images) {
    var len = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3;

    if (images.length === 0) {
        return [];
    }
    var maxLen = images.length % len === 0 ? parseInt(images.length / len) : parseInt(images.length / len) + 1;
    var imgs = [];
    images.forEach(function (img, index) {
        var idx = parseInt(index / 3);
        if (!Array.isArray(imgs[idx])) {
            imgs[idx] = [];
        }
        imgs[idx].push(img);
    });
    if (len - imgs[maxLen - 1].length > 0) {
        imgs[maxLen - 1] = imgs[maxLen - 1].concat(Array.from(new Array(len - imgs[maxLen - 1].length), function () {
            return '';
        }));
    }
    return imgs;
};

function stringifyPrimitive(v) {
    switch (typeof v === 'undefined' ? 'undefined' : _typeof(v)) {
        case 'string':
            return v;
        case 'boolean':
            return v ? 'true' : 'false';
        case 'number':
            return isFinite(v) ? v : '';
        default:
            return '';
    }
}

function querystring() {
    var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var _options$sequence = options.sequence,
        sequence = _options$sequence === undefined ? [] : _options$sequence;

    var defaultSeparator = '&';
    var stringifiedKeyMap = {};

    var reducer = function reducer(str, key) {
        var separator = str ? '&' : '';
        if (!stringifiedKeyMap[key]) {
            stringifiedKeyMap[key] = true;
            if (typeof obj[key] !== 'undefined') {
                return '' + str + separator + encodeURIComponent(stringifyPrimitive(key)) + '=' + encodeURIComponent(stringifyPrimitive(obj[key]));
            }
        }
        return str;
    };

    var sequencePart = sequence.reduce(reducer, '');
    var noneSequencePart = Object.keys(obj).reduce(reducer, '');
    return '' + sequencePart + (sequencePart && noneSequencePart ? defaultSeparator : '') + noneSequencePart;
}

exports.fullUrl = function (API_HOST, url) {
    var query = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    var qs = querystring(query);
    var retUrl = '';
    if (/\/\//.test(url) || /^https?:\/\//.test(url)) {
        retUrl = url;
    } else {
        retUrl = '' + API_HOST + url;
    }

    if (qs) {
        return retUrl + '?' + qs;
    }
    return retUrl;
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxzLmpzIl0sIm5hbWVzIjpbImV4cG9ydHMiLCJwYWRkaW5nSW1nIiwiaW1hZ2VzIiwibGVuIiwibGVuZ3RoIiwibWF4TGVuIiwicGFyc2VJbnQiLCJpbWdzIiwiZm9yRWFjaCIsImltZyIsImluZGV4IiwiaWR4IiwiQXJyYXkiLCJpc0FycmF5IiwicHVzaCIsImNvbmNhdCIsImZyb20iLCJzdHJpbmdpZnlQcmltaXRpdmUiLCJ2IiwiaXNGaW5pdGUiLCJxdWVyeXN0cmluZyIsIm9iaiIsIm9wdGlvbnMiLCJzZXF1ZW5jZSIsImRlZmF1bHRTZXBhcmF0b3IiLCJzdHJpbmdpZmllZEtleU1hcCIsInJlZHVjZXIiLCJzdHIiLCJrZXkiLCJzZXBhcmF0b3IiLCJlbmNvZGVVUklDb21wb25lbnQiLCJzZXF1ZW5jZVBhcnQiLCJyZWR1Y2UiLCJub25lU2VxdWVuY2VQYXJ0IiwiT2JqZWN0Iiwia2V5cyIsImZ1bGxVcmwiLCJBUElfSE9TVCIsInVybCIsInF1ZXJ5IiwicXMiLCJyZXRVcmwiLCJ0ZXN0Il0sIm1hcHBpbmdzIjoiOzs7O0FBQUFBLFFBQVFDLFVBQVIsR0FBcUIsVUFBQ0MsTUFBRCxFQUFxQjtBQUFBLFFBQVpDLEdBQVksdUVBQU4sQ0FBTTs7QUFDdEMsUUFBSUQsT0FBT0UsTUFBUCxLQUFrQixDQUF0QixFQUF5QjtBQUNyQixlQUFPLEVBQVA7QUFDSDtBQUNELFFBQUlDLFNBQVNILE9BQU9FLE1BQVAsR0FBZ0JELEdBQWhCLEtBQXdCLENBQXhCLEdBQTRCRyxTQUFTSixPQUFPRSxNQUFQLEdBQWdCRCxHQUF6QixDQUE1QixHQUE0REcsU0FBU0osT0FBT0UsTUFBUCxHQUFnQkQsR0FBekIsSUFBZ0MsQ0FBekc7QUFDQSxRQUFJSSxPQUFPLEVBQVg7QUFDQUwsV0FBT00sT0FBUCxDQUFlLFVBQUNDLEdBQUQsRUFBTUMsS0FBTixFQUFnQjtBQUMzQixZQUFJQyxNQUFNTCxTQUFTSSxRQUFRLENBQWpCLENBQVY7QUFDQSxZQUFJLENBQUNFLE1BQU1D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QUNILENBYkQiLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnRzLnBhZGRpbmdJbWcgPSAoaW1hZ2VzLCBsZW4gPSAzKSA9PiB7XG4gICAgaWYgKGltYWdlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIFtdXG4gICAgfVxuICAgIGxldCBtYXhMZW4gPSBpbWFnZXMubGVuZ3RoICUgbGVuID09PSAwID8gcGFyc2VJbnQoaW1hZ2VzLmxlbmd0aCAvIGxlbikgOiBwYXJzZUludChpbWFnZXMubGVuZ3RoIC8gbGVuKSArIDFcbiAgICBsZXQgaW1ncyA9IFtdXG4gICAgaW1hZ2VzLmZvckVhY2goKGltZywgaW5kZXgpID0+IHtcbiAgICAgICAgbGV0IGlkeCA9IHBhcnNlSW50KGluZGV4IC8gMylcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGltZ3NbaWR4XSkpIHtcbiAgICAgICAgICAgIGltZ3NbaWR4XSA9IFtdXG4gICAgICAgIH1cbiAgICAgICAgaW1nc1tpZHhdLnB1c2goaW1nKVxuICAgIH0pXG4gICAgaWYgKGxlbiAtIGltZ3NbbWF4TGVuIC0gMV0ubGVuZ3RoID4gMCkge1xuICAgICAgICBpbWdzW21heExlbiAtIDFdID0gaW1nc1ttYXhMZW4gLSAxXS5jb25jYXQoQXJyYXkuZnJvbShuZXcgQXJyYXkobGVuIC0gaW1nc1ttYXhMZW4gLSAxXS5sZW5ndGgpLCAoKSA9PiAnJykpXG4gICAgfVxuICAgIHJldHVybiBpbWdzXG59XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeVByaW1pdGl2ZSAodikge1xuICAgIHN3aXRjaCAodHlwZW9mIHYpIHtcbiAgICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgICAgIHJldHVybiB2XG4gICAgICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAgICAgICAgcmV0dXJuIHYgPyAndHJ1ZScgOiAnZmFsc2UnXG4gICAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICAgICAgICByZXR1cm4gaXNGaW5pdGUodikgPyB2IDogJydcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiAnJ1xuICAgIH1cbn1cblxuZnVuY3Rpb24gcXVlcnlzdHJpbmcgKG9iaiA9IHt9LCBvcHRpb25zID0ge30pIHtcbiAgICBjb25zdCB7IHNlcXVlbmNlID0gW10gfSA9IG9wdGlvbnNcbiAgICBjb25zdCBkZWZhdWx0U2VwYXJhdG9yID0gJyYnXG4gICAgY29uc3Qgc3RyaW5naWZpZWRLZXlNYXAgPSB7fVxuXG4gICAgY29uc3QgcmVkdWNlciA9IChzdHIsIGtleSkgPT4ge1xuICAgICAgICBjb25zdCBzZXBhcmF0b3IgPSBzdHIgPyAnJicgOiAnJ1xuICAgICAgICBpZiAoIXN0cmluZ2lmaWVkS2V5TWFwW2tleV0pIHtcbiAgICAgICAgICAgIHN0cmluZ2lmaWVkS2V5TWFwW2tleV0gPSB0cnVlXG4gICAgICAgICAgICBpZiAodHlwZW9mIG9ialtrZXldICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIHJldHVybiBgJHtzdHJ9JHtzZXBhcmF0b3J9JHtlbmNvZGVVUklDb21wb25lbnQoc3RyaW5naWZ5UHJpbWl0aXZlKGtleSkpfT0ke2VuY29kZVVSSUNvbXBvbmVudChzdHJpbmdpZnlQcmltaXRpdmUob2JqW2tleV0pKX1gXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN0clxuICAgIH1cblxuICAgIGNvbnN0IHNlcXVlbmNlUGFydCA9IHNlcXVlbmNlLnJlZHVjZShyZWR1Y2VyLCAnJylcbiAgICBjb25zdCBub25lU2VxdWVuY2VQYXJ0ID0gT2JqZWN0LmtleXMob2JqKS5yZWR1Y2UocmVkdWNlciwgJycpXG4gICAgcmV0dXJuIGAke3NlcXVlbmNlUGFydH0ke3NlcXVlbmNlUGFydCAmJiBub25lU2VxdWVuY2VQYXJ0ID8gZGVmYXVsdFNlcGFyYXRvciA6ICcnfSR7bm9uZVNlcXVlbmNlUGFydH1gXG59XG5cbmV4cG9ydHMuZnVsbFVybCA9IChBUElfSE9TVCwgdXJsLCBxdWVyeSA9IHt9KSA9PiB7XG4gICAgY29uc3QgcXMgPSBxdWVyeXN0cmluZyhxdWVyeSlcbiAgICBsZXQgcmV0VXJsID0gJydcbiAgICBpZiAoL1xcL1xcLy8udGVzdCh1cmwpIHx8IC9eaHR0cHM/OlxcL1xcLy8udGVzdCh1cmwpKSB7XG4gICAgICAgIHJldFVybCA9IHVybFxuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldFVybCA9IGAke0FQSV9IT1NUfSR7dXJsfWBcbiAgICB9XG5cbiAgICBpZiAocXMpIHtcbiAgICAgICAgcmV0dXJuIGAke3JldFVybH0/JHtxc31gXG4gICAgfVxuICAgIHJldHVybiByZXRVcmxcbn1cbiJdfQ==