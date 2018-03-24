'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _dateFns = require('./../../npm/date-fns/index.js');

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

exports.timeTransform = function (time) {
    var now = new Date();
    var diffYears = (0, _dateFns.differenceInYears)(now, time);
    var diffMonths = (0, _dateFns.differenceInMonths)(now, time);
    var diffWeeks = (0, _dateFns.differenceInWeeks)(now, time);
    var diffDays = (0, _dateFns.differenceInDays)(now, time);
    var diffHours = (0, _dateFns.differenceInHours)(now, time);
    var diffMins = (0, _dateFns.differenceInMinutes)(now, time);
    var diffSeconds = (0, _dateFns.differenceInSeconds)(now, time);
    return diffYears ? diffYears + '\u5E74\u524D' : diffMonths ? diffMonths + '\u6708\u524D' : diffWeeks ? diffWeeks + '\u5468\u524D' : diffDays ? diffDays + '\u5929\u524D' : diffHours ? diffHours + '\u5C0F\u65F6\u524D' : diffMins ? diffMins + '\u5206\u949F\u524D' : diffSeconds > 10 ? diffSeconds + '\u79D2\u524D' : '刚刚';
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxzLmpzIl0sIm5hbWVzIjpbImV4cG9ydHMiLCJwYWRkaW5nSW1nIiwiaW1hZ2VzIiwibGVuIiwibGVuZ3RoIiwibWF4TGVuIiwicGFyc2VJbnQiLCJpbWdzIiwiZm9yRWFjaCIsImltZyIsImluZGV4IiwiaWR4IiwiQXJyYXkiLCJpc0FycmF5IiwicHVzaCIsImNvbmNhdCIsImZyb20iLCJzdHJpbmdpZnlQcmltaXRpdmUiLCJ2IiwiaXNGaW5pdGUiLCJxdWVyeXN0cmluZyIsIm9iaiIsIm9wdGlvbnMiLCJzZXF1ZW5jZSIsImRlZmF1bHRTZXBhcmF0b3IiLCJzdHJpbmdpZmllZEtleU1hcCIsInJlZHVjZXIiLCJzdHIiLCJrZXkiLCJzZXBhcmF0b3IiLCJlbmNvZGVVUklDb21wb25lbnQiLCJzZXF1ZW5jZVBhcnQiLCJyZWR1Y2UiLCJub25lU2VxdWVuY2VQYXJ0IiwiT2JqZWN0Iiwia2V5cyIsImZ1bGxVcmwiLCJBUElfSE9TVCIsInVybCIsInF1ZXJ5IiwicXMiLCJyZXRVcmwiLCJ0ZXN0IiwidGltZVRyYW5zZm9ybSIsInRpbWUiLCJub3ciLCJEYXRlIiwiZGlmZlllYXJzIiwiZGlmZk1vbnRocyIsImRpZmZXZWVrcyIsImRpZmZEYXlzIiwiZGlmZkhvdXJzIiwiZGlmZk1pbnMiLCJkaWZmU2Vjb25kcyJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBOztBQUVBQSxRQUFRQyxVQUFSLEdBQXFCLFVBQUNDLE1BQUQsRUFBcUI7QUFBQSxRQUFaQyxHQUFZLHVFQUFOLENBQU07O0FBQ3RDLFFBQUlELE9BQU9FLE1BQVAsS0FBa0IsQ0FBdEIsRUFBeUI7QUFDckIsZUFBTyxFQUFQO0FBQ0g7QUFDRCxRQUFJQyxTQUFTSCxPQUFPRSxNQUFQLEdBQWdCRCxHQUFoQixLQUF3QixDQUF4QixHQUE0QkcsU0FBU0osT0FBT0UsTUFBUCxHQUFnQkQsR0FBekIsQ0FBNUIsR0FBNERHLFNBQVNKLE9BQU9FLE1BQVAsR0FBZ0JELEdBQXpCLElBQWdDLENBQXpHO0FBQ0Es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QVQ7QUFDSCxLQUZELE1BRU87QUFDSEcsc0JBQVlKLFFBQVosR0FBdUJDLEdBQXZCO0FBQ0g7O0FBRUQsUUFBSUUsRUFBSixFQUFRO0FBQ0osZUFBVUMsTUFBVixTQUFvQkQsRUFBcEI7QUFDSDtBQUNELFdBQU9DLE1BQVA7QUFDSCxDQWJEOztBQWVBekMsUUFBUTJDLGFBQVIsR0FBd0IsVUFBQ0MsSUFBRCxFQUFVO0FBQzlCLFFBQU1DLE1BQU0sSUFBSUMsSUFBSixFQUFaO0FBQ0EsUUFBTUMsWUFBWSxnQ0FBa0JGLEdBQWxCLEVBQXVCRCxJQUF2QixDQUFsQjtBQUNBLFFBQU1JLGFBQWEsaUNBQW1CSCxHQUFuQixFQUF3QkQsSUFBeEIsQ0FBbkI7QUFDQSxRQUFNSyxZQUFZLGdDQUFrQkosR0FBbEIsRUFBdUJELElBQXZCLENBQWxCO0FBQ0EsUUFBTU0sV0FBVywrQkFBaUJMLEdBQWpCLEVBQXNCRCxJQUF0QixDQUFqQjtBQUNBLFFBQU1PLFlBQVksZ0NBQWtCTixHQUFsQixFQUF1QkQsSUFBdkIsQ0FBbEI7QUFDQSxRQUFNUSxXQUFXLGtDQUFvQlAsR0FBcEIsRUFBeUJELElBQXpCLENBQWpCO0FBQ0EsUUFBTVMsY0FBYyxrQ0FBb0JSLEdBQXBCLEVBQXlCRCxJQUF6QixDQUFwQjtBQUNBLFdBQU9HLFlBQWVBLFNBQWYsb0JBQStCQyxhQUFnQkEsVUFBaEIsb0JBQWlDQyxZQUFlQSxTQUFmLG9CQUErQkMsV0FBY0EsUUFBZCxvQkFBNkJDLFlBQWVBLFNBQWYsMEJBQWdDQyxXQUFjQSxRQUFkLDBCQUE4QkMsY0FBYyxFQUFkLEdBQXNCQSxXQUF0QixvQkFBd0MsSUFBek87QUFDSCxDQVZEIiwiZmlsZSI6InV0aWxzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZGlmZmVyZW5jZUluU2Vjb25kcywgZGlmZmVyZW5jZUluTWludXRlcywgZGlmZmVyZW5jZUluSG91cnMsIGRpZmZlcmVuY2VJbkRheXMsIGRpZmZlcmVuY2VJbldlZWtzLCBkaWZmZXJlbmNlSW5Nb250aHMsIGRpZmZlcmVuY2VJblllYXJzIH0gZnJvbSAnZGF0ZS1mbnMnXG5cbmV4cG9ydHMucGFkZGluZ0ltZyA9IChpbWFnZXMsIGxlbiA9IDMpID0+IHtcbiAgICBpZiAoaW1hZ2VzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gW11cbiAgICB9XG4gICAgbGV0IG1heExlbiA9IGltYWdlcy5sZW5ndGggJSBsZW4gPT09IDAgPyBwYXJzZUludChpbWFnZXMubGVuZ3RoIC8gbGVuKSA6IHBhcnNlSW50KGltYWdlcy5sZW5ndGggLyBsZW4pICsgMVxuICAgIGxldCBpbWdzID0gW11cbiAgICBpbWFnZXMuZm9yRWFjaCgoaW1nLCBpbmRleCkgPT4ge1xuICAgICAgICBsZXQgaWR4ID0gcGFyc2VJbnQoaW5kZXggLyAzKVxuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoaW1nc1tpZHhdKSkge1xuICAgICAgICAgICAgaW1nc1tpZHhdID0gW11cbiAgICAgICAgfVxuICAgICAgICBpbWdzW2lkeF0ucHVzaChpbWcpXG4gICAgfSlcbiAgICBpZiAobGVuIC0gaW1nc1ttYXhMZW4gLSAxXS5sZW5ndGggPiAwKSB7XG4gICAgICAgIGltZ3NbbWF4TGVuIC0gMV0gPSBpbWdzW21heExlbiAtIDFdLmNvbmNhdChBcnJheS5mcm9tKG5ldyBBcnJheShsZW4gLSBpbWdzW21heExlbiAtIDFdLmxlbmd0aCksICgpID0+ICcnKSlcbiAgICB9XG4gICAgcmV0dXJuIGltZ3Ncbn1cblxuZnVuY3Rpb24gc3RyaW5naWZ5UHJpbWl0aXZlICh2KSB7XG4gICAgc3dpdGNoICh0eXBlb2Ygdikge1xuICAgICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgICAgICAgcmV0dXJuIHZcbiAgICAgICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICAgICAgICByZXR1cm4gdiA/ICd0cnVlJyA6ICdmYWxzZSdcbiAgICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgICAgICAgIHJldHVybiBpc0Zpbml0ZSh2KSA/IHYgOiAnJ1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuICcnXG4gICAgfVxufVxuXG5mdW5jdGlvbiBxdWVyeXN0cmluZyAob2JqID0ge30sIG9wdGlvbnMgPSB7fSkge1xuICAgIGNvbnN0IHsgc2VxdWVuY2UgPSBbXSB9ID0gb3B0aW9uc1xuICAgIGNvbnN0IGRlZmF1bHRTZXBhcmF0b3IgPSAnJidcbiAgICBjb25zdCBzdHJpbmdpZmllZEtleU1hcCA9IHt9XG5cbiAgICBjb25zdCByZWR1Y2VyID0gKHN0ciwga2V5KSA9PiB7XG4gICAgICAgIGNvbnN0IHNlcGFyYXRvciA9IHN0ciA/ICcmJyA6ICcnXG4gICAgICAgIGlmICghc3RyaW5naWZpZWRLZXlNYXBba2V5XSkge1xuICAgICAgICAgICAgc3RyaW5naWZpZWRLZXlNYXBba2V5XSA9IHRydWVcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb2JqW2tleV0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGAke3N0cn0ke3NlcGFyYXRvcn0ke2VuY29kZVVSSUNvbXBvbmVudChzdHJpbmdpZnlQcmltaXRpdmUoa2V5KSl9PSR7ZW5jb2RlVVJJQ29tcG9uZW50KHN0cmluZ2lmeVByaW1pdGl2ZShvYmpba2V5XSkpfWBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3RyXG4gICAgfVxuXG4gICAgY29uc3Qgc2VxdWVuY2VQYXJ0ID0gc2VxdWVuY2UucmVkdWNlKHJlZHVjZXIsICcnKVxuICAgIGNvbnN0IG5vbmVTZXF1ZW5jZVBhcnQgPSBPYmplY3Qua2V5cyhvYmopLnJlZHVjZShyZWR1Y2VyLCAnJylcbiAgICByZXR1cm4gYCR7c2VxdWVuY2VQYXJ0fSR7c2VxdWVuY2VQYXJ0ICYmIG5vbmVTZXF1ZW5jZVBhcnQgPyBkZWZhdWx0U2VwYXJhdG9yIDogJyd9JHtub25lU2VxdWVuY2VQYXJ0fWBcbn1cblxuZXhwb3J0cy5mdWxsVXJsID0gKEFQSV9IT1NULCB1cmwsIHF1ZXJ5ID0ge30pID0+IHtcbiAgICBjb25zdCBxcyA9IHF1ZXJ5c3RyaW5nKHF1ZXJ5KVxuICAgIGxldCByZXRVcmwgPSAnJ1xuICAgIGlmICgvXFwvXFwvLy50ZXN0KHVybCkgfHwgL15odHRwcz86XFwvXFwvLy50ZXN0KHVybCkpIHtcbiAgICAgICAgcmV0VXJsID0gdXJsXG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0VXJsID0gYCR7QVBJX0hPU1R9JHt1cmx9YFxuICAgIH1cblxuICAgIGlmIChxcykge1xuICAgICAgICByZXR1cm4gYCR7cmV0VXJsfT8ke3FzfWBcbiAgICB9XG4gICAgcmV0dXJuIHJldFVybFxufVxuXG5leHBvcnRzLnRpbWVUcmFuc2Zvcm0gPSAodGltZSkgPT4ge1xuICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKClcbiAgICBjb25zdCBkaWZmWWVhcnMgPSBkaWZmZXJlbmNlSW5ZZWFycyhub3csIHRpbWUpXG4gICAgY29uc3QgZGlmZk1vbnRocyA9IGRpZmZlcmVuY2VJbk1vbnRocyhub3csIHRpbWUpXG4gICAgY29uc3QgZGlmZldlZWtzID0gZGlmZmVyZW5jZUluV2Vla3Mobm93LCB0aW1lKVxuICAgIGNvbnN0IGRpZmZEYXlzID0gZGlmZmVyZW5jZUluRGF5cyhub3csIHRpbWUpXG4gICAgY29uc3QgZGlmZkhvdXJzID0gZGlmZmVyZW5jZUluSG91cnMobm93LCB0aW1lKVxuICAgIGNvbnN0IGRpZmZNaW5zID0gZGlmZmVyZW5jZUluTWludXRlcyhub3csIHRpbWUpXG4gICAgY29uc3QgZGlmZlNlY29uZHMgPSBkaWZmZXJlbmNlSW5TZWNvbmRzKG5vdywgdGltZSlcbiAgICByZXR1cm4gZGlmZlllYXJzID8gYCR7ZGlmZlllYXJzfeW5tOWJjWAgOiBkaWZmTW9udGhzID8gYCR7ZGlmZk1vbnRoc33mnIjliY1gIDogZGlmZldlZWtzID8gYCR7ZGlmZldlZWtzfeWRqOWJjWAgOiBkaWZmRGF5cyA/IGAke2RpZmZEYXlzfeWkqeWJjWAgOiBkaWZmSG91cnMgPyBgJHtkaWZmSG91cnN95bCP5pe25YmNYCA6IGRpZmZNaW5zID8gYCR7ZGlmZk1pbnN95YiG6ZKf5YmNYCA6IGRpZmZTZWNvbmRzID4gMTAgPyBgJHtkaWZmU2Vjb25kc33np5LliY1gIDogJ+WImuWImidcbn1cbiJdfQ==