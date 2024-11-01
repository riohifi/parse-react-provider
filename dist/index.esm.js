import React, { createContext, useState, useLayoutEffect, useContext } from 'react';
import Parse$1 from 'parse';

function getAugmentedNamespace(n) {
  if (n.__esModule) return n;
  var f = n.default;
	if (typeof f == "function") {
		var a = function a () {
			if (this instanceof a) {
        return Reflect.construct(f, arguments, this.constructor);
			}
			return f.apply(this, arguments);
		};
		a.prototype = f.prototype;
  } else a = {};
  Object.defineProperty(a, '__esModule', {value: true});
	Object.keys(n).forEach(function (k) {
		var d = Object.getOwnPropertyDescriptor(n, k);
		Object.defineProperty(a, k, d.get ? d : {
			enumerable: true,
			get: function () {
				return n[k];
			}
		});
	});
	return a;
}

var dist = {};

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol, Iterator */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
}
function __runInitializers(thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
}
function __propKey(x) {
    return typeof x === "symbol" ? x : "".concat(x);
}
function __setFunctionName(f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
}
function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});

function __exportStar(m, o) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

/** @deprecated */
function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

/** @deprecated */
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function () { return this; }, i;
    function awaitReturn(f) { return function (v) { return Promise.resolve(v).then(f, reject); }; }
    function verb(n, f) { if (g[n]) { i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; if (f) i[n] = f(i[n]); } }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: false } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}
var __setModuleDefault = Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
};

var ownKeys = function(o) {
    ownKeys = Object.getOwnPropertyNames || function (o) {
        var ar = [];
        for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
        return ar;
    };
    return ownKeys(o);
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
    __setModuleDefault(result, mod);
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}

function __classPrivateFieldIn(state, receiver) {
    if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function")) throw new TypeError("Cannot use 'in' operator on non-object");
    return typeof state === "function" ? receiver === state : state.has(receiver);
}

function __addDisposableResource(env, value, async) {
    if (value !== null && value !== void 0) {
        if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
        var dispose, inner;
        if (async) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            dispose = value[Symbol.asyncDispose];
        }
        if (dispose === void 0) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            dispose = value[Symbol.dispose];
            if (async) inner = dispose;
        }
        if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
        if (inner) dispose = function() { try { inner.call(this); } catch (e) { return Promise.reject(e); } };
        env.stack.push({ value: value, dispose: dispose, async: async });
    }
    else if (async) {
        env.stack.push({ async: true });
    }
    return value;

}

var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

function __disposeResources(env) {
    function fail(e) {
        env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
        env.hasError = true;
    }
    var r, s = 0;
    function next() {
        while (r = env.stack.pop()) {
            try {
                if (!r.async && s === 1) return s = 0, env.stack.push(r), Promise.resolve().then(next);
                if (r.dispose) {
                    var result = r.dispose.call(r.value);
                    if (r.async) return s |= 2, Promise.resolve(result).then(next, function(e) { fail(e); return next(); });
                }
                else s |= 1;
            }
            catch (e) {
                fail(e);
            }
        }
        if (s === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
        if (env.hasError) throw env.error;
    }
    return next();
}

function __rewriteRelativeImportExtension(path, preserveJsx) {
    if (typeof path === "string" && /^\.\.?\//.test(path)) {
        return path.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function (m, tsx, d, ext, cm) {
            return tsx ? preserveJsx ? ".jsx" : ".js" : d && (!ext || !cm) ? m : (d + ext + "." + cm.toLowerCase() + "js");
        });
    }
    return path;
}

var _tslib = {
    __extends: __extends,
    __assign: __assign,
    __rest: __rest,
    __decorate: __decorate,
    __param: __param,
    __esDecorate: __esDecorate,
    __runInitializers: __runInitializers,
    __propKey: __propKey,
    __setFunctionName: __setFunctionName,
    __metadata: __metadata,
    __awaiter: __awaiter,
    __generator: __generator,
    __createBinding: __createBinding,
    __exportStar: __exportStar,
    __values: __values,
    __read: __read,
    __spread: __spread,
    __spreadArrays: __spreadArrays,
    __spreadArray: __spreadArray,
    __await: __await,
    __asyncGenerator: __asyncGenerator,
    __asyncDelegator: __asyncDelegator,
    __asyncValues: __asyncValues,
    __makeTemplateObject: __makeTemplateObject,
    __importStar: __importStar,
    __importDefault: __importDefault,
    __classPrivateFieldGet: __classPrivateFieldGet,
    __classPrivateFieldSet: __classPrivateFieldSet,
    __classPrivateFieldIn: __classPrivateFieldIn,
    __addDisposableResource: __addDisposableResource,
    __disposeResources: __disposeResources,
    __rewriteRelativeImportExtension: __rewriteRelativeImportExtension,
};

var _tslib$1 = /*#__PURE__*/Object.freeze({
	__proto__: null,
	__addDisposableResource: __addDisposableResource,
	get __assign () { return __assign; },
	__asyncDelegator: __asyncDelegator,
	__asyncGenerator: __asyncGenerator,
	__asyncValues: __asyncValues,
	__await: __await,
	__awaiter: __awaiter,
	__classPrivateFieldGet: __classPrivateFieldGet,
	__classPrivateFieldIn: __classPrivateFieldIn,
	__classPrivateFieldSet: __classPrivateFieldSet,
	__createBinding: __createBinding,
	__decorate: __decorate,
	__disposeResources: __disposeResources,
	__esDecorate: __esDecorate,
	__exportStar: __exportStar,
	__extends: __extends,
	__generator: __generator,
	__importDefault: __importDefault,
	__importStar: __importStar,
	__makeTemplateObject: __makeTemplateObject,
	__metadata: __metadata,
	__param: __param,
	__propKey: __propKey,
	__read: __read,
	__rest: __rest,
	__rewriteRelativeImportExtension: __rewriteRelativeImportExtension,
	__runInitializers: __runInitializers,
	__setFunctionName: __setFunctionName,
	__spread: __spread,
	__spreadArray: __spreadArray,
	__spreadArrays: __spreadArrays,
	__values: __values,
	default: _tslib
});

var require$$0 = /*@__PURE__*/getAugmentedNamespace(_tslib$1);

var useParseQuery = {};

var util = {};

var hasRequiredUtil;

function requireUtil () {
	if (hasRequiredUtil) return util;
	hasRequiredUtil = 1;
	(function (exports) {
		exports.__esModule = true;
		exports.compareParseObjects = void 0;
		var compareParseObjects = function (a, b, sorts) {
		    var order = sorts[0];
		    var operator = order.slice(0, 1);
		    var isDescending = operator === '-';
		    if (isDescending) {
		        order = order.substring(1);
		    }
		    if (order === '_created_at') {
		        order = 'createdAt';
		    }
		    if (order === '_updated_at') {
		        order = 'updatedAt';
		    }
		    if (!(/^[A-Za-z][0-9A-Za-z_]*$/).test(order) || order === 'password') {
		        throw new Parse.Error(Parse.Error.INVALID_KEY_NAME, "Invalid Key: " + order);
		    }
		    var field1 = a.get(order);
		    var field2 = b.get(order);
		    if (field1 < field2) {
		        return isDescending ? 1 : -1;
		    }
		    if (field1 > field2) {
		        return isDescending ? -1 : 1;
		    }
		    if (sorts.length > 1) {
		        var remainingSorts = sorts.slice(1);
		        return (0, exports.compareParseObjects)(a, b, remainingSorts);
		    }
		    return 0;
		};
		exports.compareParseObjects = compareParseObjects;
		
	} (util));
	return util;
}

var hasRequiredUseParseQuery;

function requireUseParseQuery () {
	if (hasRequiredUseParseQuery) return useParseQuery;
	hasRequiredUseParseQuery = 1;
	(function (exports) {
		exports.__esModule = true;
		var tslib_1 = require$$0;
		var react_1 = React;
		var util_1 = requireUtil();
		var getInitialState = function (queryId, initialLoad) { return ({
		    queryId: queryId,
		    isLoading: initialLoad === undefined,
		    isLive: false,
		    isSyncing: false,
		    results: initialLoad && initialLoad.results || undefined,
		    count: initialLoad && initialLoad.count || undefined
		}); };
		var ActionTypes;
		(function (ActionTypes) {
		    ActionTypes[ActionTypes["LoadLocalDatastoreResults"] = 0] = "LoadLocalDatastoreResults";
		    ActionTypes[ActionTypes["SetIsLive"] = 1] = "SetIsLive";
		    ActionTypes[ActionTypes["SetIsSyncing"] = 2] = "SetIsSyncing";
		    ActionTypes[ActionTypes["LoadParseServerResults"] = 3] = "LoadParseServerResults";
		    ActionTypes[ActionTypes["LoadResult"] = 4] = "LoadResult";
		    ActionTypes[ActionTypes["UnloadResult"] = 5] = "UnloadResult";
		    ActionTypes[ActionTypes["Fail"] = 6] = "Fail";
		    ActionTypes[ActionTypes["Reset"] = 7] = "Reset";
		})(ActionTypes || (ActionTypes = {}));
		var loadLocalDatastoreResults = function (queryId, results, count) { return ({
		    type: ActionTypes.LoadLocalDatastoreResults,
		    payload: {
		        queryId: queryId,
		        results: results,
		        count: count
		    }
		}); };
		var setIsLive = function (queryId, isLive) { return ({
		    type: ActionTypes.SetIsLive,
		    payload: {
		        queryId: queryId,
		        isLive: isLive
		    }
		}); };
		var setIsSyncing = function (queryId, isSyncing) { return ({
		    type: ActionTypes.SetIsSyncing,
		    payload: {
		        queryId: queryId,
		        isSyncing: isSyncing
		    }
		}); };
		var loadParseServerResults = function (queryId, results, count) { return ({
		    type: ActionTypes.LoadParseServerResults,
		    payload: {
		        queryId: queryId,
		        results: results,
		        count: count
		    }
		}); };
		var loadResult = function (queryId, result, order, limit) { return ({
		    type: ActionTypes.LoadResult,
		    payload: {
		        queryId: queryId,
		        result: result,
		        order: order,
		        limit: limit
		    }
		}); };
		var unloadResult = function (queryId, result) { return ({
		    type: ActionTypes.UnloadResult,
		    payload: {
		        queryId: queryId,
		        result: result
		    }
		}); };
		var fail = function (queryId, error) { return ({
		    type: ActionTypes.Fail,
		    payload: {
		        queryId: queryId,
		        error: error
		    }
		}); };
		var reset = function (initialLoad) { return ({
		    type: ActionTypes.Reset,
		    payload: {
		        initialLoad: initialLoad
		    }
		}); };
		var reducer = function (state, action) {
		    if (action.type === ActionTypes.Reset) {
		        return getInitialState(state.queryId + 1, action.payload.initialLoad);
		    }
		    else if (action.payload.queryId !== state.queryId ||
		        state.error) {
		        return state;
		    }
		    switch (action.type) {
		        case ActionTypes.LoadLocalDatastoreResults: {
		            return (0, tslib_1.__assign)((0, tslib_1.__assign)({}, state), { isLoading: false, results: state.isLoading ? action.payload.results : state.results, count: state.isLoading ? action.payload.count : state.count });
		        }
		        case ActionTypes.SetIsLive: {
		            return (0, tslib_1.__assign)((0, tslib_1.__assign)({}, state), { isLive: action.payload.isLive });
		        }
		        case ActionTypes.SetIsSyncing: {
		            return (0, tslib_1.__assign)((0, tslib_1.__assign)({}, state), { isSyncing: action.payload.isSyncing });
		        }
		        case ActionTypes.LoadParseServerResults: {
		            return (0, tslib_1.__assign)((0, tslib_1.__assign)({}, state), { isLoading: false, isSyncing: false, results: action.payload.results, count: action.payload.count });
		        }
		        case ActionTypes.LoadResult: {
		            var results = state.results;
		            var count = state.count;
		            if (results) {
		                results = results.filter(function (result) { return result.id !== action.payload.result.id; });
		                var index = 0;
		                if (action.payload.order) {
		                    index = results.findIndex(function (result) { return (0, util_1.compareParseObjects)(result, action.payload.result, action.payload.order) >= 0; });
		                }
		                results.splice(index, 0, action.payload.result);
		                if (count !== undefined) {
		                    count = state.count + results.length - state.results.length;
		                    if (count < 0) {
		                        count = 0;
		                    }
		                    if (count < results.length) {
		                        count = results.length;
		                    }
		                }
		                if (action.payload.limit !== undefined &&
		                    action.payload.limit >= 0 &&
		                    results.length > action.payload.limit) {
		                    results = results.slice(0, action.payload.limit);
		                }
		            }
		            return (0, tslib_1.__assign)((0, tslib_1.__assign)({}, state), { results: results, count: count });
		        }
		        case ActionTypes.UnloadResult: {
		            var results = state.results;
		            var count = state.count;
		            if (results) {
		                results = results.filter(function (result) { return result.id !== action.payload.result.id; });
		                if (count !== undefined) {
		                    count--;
		                    if (count < 0) {
		                        count = 0;
		                    }
		                    if (count < results.length) {
		                        count = results.length;
		                    }
		                }
		            }
		            return (0, tslib_1.__assign)((0, tslib_1.__assign)({}, state), { results: results });
		        }
		        case ActionTypes.Fail: {
		            return (0, tslib_1.__assign)((0, tslib_1.__assign)({}, state), { isLoading: false, isLive: false, isSyncing: false, error: action.payload.error });
		        }
		    }
		};
		var useParseQuery = function (query, options) {
		    var queryString = (0, react_1.useMemo)(function () {
		        return JSON.stringify({
		            className: query.className,
		            query: query.toJSON()
		        });
		    }, [query]);
		    var _a = options || {}, _b = _a.enabled, enabled = _b === void 0 ? true : _b, _c = _a.enableLocalDatastore, enableLocalDatastore = _c === void 0 ? true : _c, _d = _a.enableLiveQuery, enableLiveQuery = _d === void 0 ? true : _d, initialLoad = _a.initialLoad;
		    var _e = initialLoad || {}, initialResults = _e.results, initialCount = _e.count;
		    var stateRef = (0, react_1.useRef)(getInitialState(1, initialLoad));
		    var _f = (0, react_1.useReducer)(function (state, action) {
		        stateRef.current = reducer(state, action);
		        return stateRef.current;
		    }, stateRef.current), _g = _f[0], queryId = _g.queryId, isLoading = _g.isLoading, isLive = _g.isLive, isSyncing = _g.isSyncing, results = _g.results, count = _g.count, error = _g.error, dispatch = _f[1];
		    var localDatastoreQuery = (0, react_1.useMemo)(function () {
		        if (enableLocalDatastore) {
		            var queryJSON = JSON.parse(queryString);
		            var memoedQuery = Parse.Query.fromJSON(queryJSON.className, queryJSON.query);
		            memoedQuery.fromPinWithName(queryString);
		            return memoedQuery;
		        }
		        return;
		    }, [queryString, enableLocalDatastore]);
		    var findFromLocalDatastore = (0, react_1.useCallback)(function () { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
		        var findResult, e_1;
		        return (0, tslib_1.__generator)(this, function (_a) {
		            switch (_a.label) {
		                case 0:
		                    _a.trys.push([0, 2, , 3]);
		                    return [4 /*yield*/, localDatastoreQuery.find()];
		                case 1:
		                    findResult = _a.sent();
		                    return [3 /*break*/, 3];
		                case 2:
		                    e_1 = _a.sent();
		                    dispatch(fail(queryId, e_1));
		                    return [2 /*return*/];
		                case 3:
		                    if (localDatastoreQuery._count) {
		                        dispatch(loadLocalDatastoreResults(queryId, findResult.results, findResult.count));
		                    }
		                    else {
		                        dispatch(loadLocalDatastoreResults(queryId, findResult));
		                    }
		                    return [2 /*return*/];
		            }
		        });
		    }); }, [queryId, localDatastoreQuery]);
		    var parseServerQuery = (0, react_1.useMemo)(function () {
		        var queryJSON = JSON.parse(queryString);
		        return Parse.Query.fromJSON(queryJSON.className, queryJSON.query);
		    }, [queryString]);
		    var pinResults = (0, react_1.useCallback)(function (results) { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
		        var e_2;
		        return (0, tslib_1.__generator)(this, function (_a) {
		            switch (_a.label) {
		                case 0:
		                    _a.trys.push([0, 3, , 4]);
		                    return [4 /*yield*/, Parse.Object.unPinAllObjectsWithName(queryString)];
		                case 1:
		                    _a.sent();
		                    return [4 /*yield*/, Parse.Object.pinAllWithName(queryString, results)];
		                case 2:
		                    _a.sent();
		                    return [3 /*break*/, 4];
		                case 3:
		                    e_2 = _a.sent();
		                    dispatch(fail(queryId, e_2));
		                    return [3 /*break*/, 4];
		                case 4: return [2 /*return*/];
		            }
		        });
		    }); }, [queryString, queryId]);
		    var findFromParseServer = (0, react_1.useCallback)(function () {
		        var isCanceled = false;
		        var attempts = 1;
		        var find = function () { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
		            var findResult, e_3, results, count;
		            return (0, tslib_1.__generator)(this, function (_a) {
		                switch (_a.label) {
		                    case 0:
		                        if (enableLocalDatastore || enableLiveQuery || initialResults) {
		                            dispatch(setIsSyncing(queryId, true));
		                        }
		                        _a.label = 1;
		                    case 1:
		                        _a.trys.push([1, 3, , 4]);
		                        return [4 /*yield*/, parseServerQuery.find()];
		                    case 2:
		                        findResult = _a.sent();
		                        return [3 /*break*/, 4];
		                    case 3:
		                        e_3 = _a.sent();
		                        if (e_3 instanceof Parse.Error &&
		                            e_3.code === Parse.Error.CONNECTION_FAILED) {
		                            if (!isCanceled) {
		                                setTimeout(function () {
		                                    if (!isCanceled) {
		                                        attempts++;
		                                        find();
		                                    }
		                                }, Math.random() * Math.min(30, (Math.pow(2, attempts) - 1)) * 1000);
		                            }
		                        }
		                        else {
		                            dispatch(fail(queryId, e_3));
		                        }
		                        return [2 /*return*/];
		                    case 4:
		                        results = findResult;
		                        if (parseServerQuery._count) {
		                            results = findResult.results;
		                            count = findResult.count;
		                        }
		                        dispatch(loadParseServerResults(queryId, results, count));
		                        if (!enableLocalDatastore) return [3 /*break*/, 6];
		                        return [4 /*yield*/, pinResults(results)];
		                    case 5:
		                        _a.sent();
		                        _a.label = 6;
		                    case 6: return [2 /*return*/];
		                }
		            });
		        }); };
		        var cancel = function () {
		            isCanceled = true;
		        };
		        find();
		        return cancel;
		    }, [enableLocalDatastore, enableLiveQuery, initialResults, queryId, parseServerQuery, pinResults]);
		    var subscribeLiveQuery = (0, react_1.useCallback)(function () {
		        var liveQuerySubscription;
		        var cancelFindFromParseServer;
		        var loadAndPinResult = function (result) { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
		            var e_4;
		            return (0, tslib_1.__generator)(this, function (_a) {
		                switch (_a.label) {
		                    case 0:
		                        dispatch(loadResult(queryId, result, parseServerQuery._order, parseServerQuery._limit));
		                        if (!enableLocalDatastore) return [3 /*break*/, 4];
		                        _a.label = 1;
		                    case 1:
		                        _a.trys.push([1, 3, , 4]);
		                        return [4 /*yield*/, result.pinWithName(queryString)];
		                    case 2:
		                        _a.sent();
		                        return [3 /*break*/, 4];
		                    case 3:
		                        e_4 = _a.sent();
		                        dispatch(fail(queryId, e_4));
		                        return [3 /*break*/, 4];
		                    case 4: return [2 /*return*/];
		                }
		            });
		        }); };
		        var unloadAndUnPinResult = function (result) { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
		            var e_5;
		            return (0, tslib_1.__generator)(this, function (_a) {
		                switch (_a.label) {
		                    case 0:
		                        dispatch(unloadResult(queryId, result));
		                        if (parseServerQuery._limit !== undefined &&
		                            parseServerQuery._limit >= 0 &&
		                            stateRef.current.results &&
		                            stateRef.current.results.length + 1 === parseServerQuery._limit) {
		                            if (cancelFindFromParseServer) {
		                                cancelFindFromParseServer();
		                            }
		                            cancelFindFromParseServer = findFromParseServer();
		                        }
		                        if (!enableLocalDatastore) return [3 /*break*/, 4];
		                        _a.label = 1;
		                    case 1:
		                        _a.trys.push([1, 3, , 4]);
		                        return [4 /*yield*/, result.unPinWithName(queryString)];
		                    case 2:
		                        _a.sent();
		                        return [3 /*break*/, 4];
		                    case 3:
		                        e_5 = _a.sent();
		                        dispatch(fail(queryId, e_5));
		                        return [3 /*break*/, 4];
		                    case 4: return [2 /*return*/];
		                }
		            });
		        }); };
		        var subscribe = function () { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
		            var e_6;
		            return (0, tslib_1.__generator)(this, function (_a) {
		                switch (_a.label) {
		                    case 0:
		                        _a.trys.push([0, 2, , 3]);
		                        return [4 /*yield*/, parseServerQuery.subscribe()];
		                    case 1:
		                        liveQuerySubscription = _a.sent();
		                        return [3 /*break*/, 3];
		                    case 2:
		                        e_6 = _a.sent();
		                        dispatch(fail(queryId, e_6));
		                        return [2 /*return*/];
		                    case 3:
		                        liveQuerySubscription.on('open', function () {
		                            dispatch(setIsLive(queryId, true));
		                            if (cancelFindFromParseServer) {
		                                cancelFindFromParseServer();
		                            }
		                            cancelFindFromParseServer = findFromParseServer();
		                        });
		                        liveQuerySubscription.on('close', function () {
		                            dispatch(setIsLive(queryId, false));
		                        });
		                        liveQuerySubscription.on('create', function (result) { return loadAndPinResult(result); });
		                        liveQuerySubscription.on('update', function (result) { return loadAndPinResult(result); });
		                        liveQuerySubscription.on('enter', function (result) { return loadAndPinResult(result); });
		                        liveQuerySubscription.on('leave', function (result) { return unloadAndUnPinResult(result); });
		                        liveQuerySubscription.on('delete', function (result) { return unloadAndUnPinResult(result); });
		                        return [2 /*return*/];
		                }
		            });
		        }); };
		        var subscribePromise = subscribe();
		        var unsubscribe = function () { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
		            return (0, tslib_1.__generator)(this, function (_a) {
		                switch (_a.label) {
		                    case 0:
		                        if (cancelFindFromParseServer) {
		                            cancelFindFromParseServer();
		                        }
		                        return [4 /*yield*/, subscribePromise];
		                    case 1:
		                        _a.sent();
		                        if (liveQuerySubscription) {
		                            liveQuerySubscription.unsubscribe();
		                        }
		                        dispatch(setIsLive(queryId, false));
		                        return [2 /*return*/];
		                }
		            });
		        }); };
		        return unsubscribe;
		    }, [queryString, enableLocalDatastore, queryId, parseServerQuery, findFromParseServer]);
		    (0, react_1.useEffect)(function () {
		        var cleanUp;
		        if (enabled) {
		            if (enableLocalDatastore) {
		                if (initialResults) {
		                    pinResults(initialResults);
		                }
		                else {
		                    findFromLocalDatastore();
		                }
		            }
		            if (enableLiveQuery) {
		                cleanUp = subscribeLiveQuery();
		            }
		            else {
		                cleanUp = findFromParseServer();
		            }
		        }
		        return cleanUp;
		    }, [queryId]);
		    var reload = (0, react_1.useCallback)(function () {
		        dispatch(reset(initialLoad));
		    }, [initialResults, initialCount]);
		    (0, react_1.useEffect)(function () { return reload; }, [
		        queryString,
		        enabled,
		        enableLocalDatastore,
		        enableLiveQuery,
		        initialResults,
		        initialCount
		    ]);
		    return (0, react_1.useMemo)(function () { return ({
		        isLoading: isLoading,
		        isLive: isLive,
		        isSyncing: isSyncing,
		        results: results,
		        count: count,
		        error: error,
		        reload: reload
		    }); }, [
		        isLoading,
		        isLive,
		        isSyncing,
		        results,
		        count,
		        error,
		        reload
		    ]);
		};
		exports["default"] = useParseQuery;
		
	} (useParseQuery));
	return useParseQuery;
}

var hasRequiredDist;

function requireDist () {
	if (hasRequiredDist) return dist;
	hasRequiredDist = 1;
	(function (exports) {
		exports.__esModule = true;
		exports.useParseQuery = void 0;
		var tslib_1 = require$$0;
		(0, tslib_1.__exportStar)(requireUseParseQuery(), exports);
		var useParseQuery_1 = requireUseParseQuery();
		(0, tslib_1.__createBinding)(exports, useParseQuery_1, "default", "useParseQuery");
		
	} (dist));
	return dist;
}

requireDist();

window.Parse = Parse$1;
var AuthContext = createContext(undefined);
var AuthProvider = function (_a) {
    var app = _a.app, appUrl = _a.appUrl, jsKey = _a.jsKey, fallback = _a.fallback, loader = _a.loader, children = _a.children;
    var _b = useState(null), user = _b[0], setUser = _b[1];
    var _c = useState(true), loading = _c[0], setLoading = _c[1];
    useLayoutEffect(function () {
        Parse$1.initialize(app, jsKey);
        Parse$1.serverURL = appUrl;
        Parse$1.enableLocalDatastore();
        var checkCurrentUser = function () { return __awaiter(void 0, void 0, void 0, function () {
            var currentUser;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, 500); })];
                    case 1:
                        _a.sent();
                        currentUser = Parse$1.User.current();
                        if (currentUser) {
                            setUser(currentUser);
                        }
                        setLoading(false);
                        return [2 /*return*/];
                }
            });
        }); };
        checkCurrentUser();
    }, [app, appUrl, jsKey]);
    var login = function (username, password) { return __awaiter(void 0, void 0, void 0, function () {
        var loggedInUser, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, Parse$1.User.logIn(username, password)];
                case 1:
                    loggedInUser = _a.sent();
                    setUser(loggedInUser);
                    return [2 /*return*/, loggedInUser];
                case 2:
                    error_1 = _a.sent();
                    throw error_1;
                case 3: return [2 /*return*/];
            }
        });
    }); };
    var logout = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Parse$1.User.logOut()];
                case 1:
                    _a.sent();
                    setUser(null);
                    localStorage.clear();
                    return [2 /*return*/];
            }
        });
    }); };
    var signUp = function (username, password) { return __awaiter(void 0, void 0, void 0, function () {
        var newUser, response, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    newUser = new Parse$1.User();
                    newUser.set("username", username);
                    newUser.set("password", password);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, newUser.signUp()];
                case 2:
                    response = _a.sent();
                    setUser(response);
                    return [3 /*break*/, 4];
                case 3:
                    error_2 = _a.sent();
                    throw error_2;
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var isAuthenticated = !!user;
    if (loading) {
        return loader || React.createElement(Loading, null);
    }
    // Render the fallback component if the user is not authenticated
    if (!isAuthenticated) {
        return React.createElement(React.Fragment, null, fallback);
    }
    return (React.createElement(AuthContext.Provider, { value: { user: user, login: login, signUp: signUp, logout: logout, isAuthenticated: isAuthenticated } }, children));
};
var useAuth = function () {
    var context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};
var Loading = function () {
    return React.createElement("p", null, "Loading...");
};

export { AuthProvider, useAuth };
//# sourceMappingURL=index.esm.js.map
