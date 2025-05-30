'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

var SearchSelect = function (_a) {
    var options = _a.options, _b = _a.value, value = _b === void 0 ? '' : _b, name = _a.name, _c = _a.placeholder, placeholder = _c === void 0 ? 'Selecione uma opção...' : _c, onChange = _a.onChange, _d = _a.disabled, disabled = _d === void 0 ? false : _d, _e = _a.className, className = _e === void 0 ? '' : _e, _f = _a.searchPlaceholder, searchPlaceholder = _f === void 0 ? 'Buscar...' : _f;
    var _g = react.useState(false), isOpen = _g[0], setIsOpen = _g[1];
    var _h = react.useState(''), searchTerm = _h[0], setSearchTerm = _h[1];
    var _j = react.useState(options), filteredOptions = _j[0], setFilteredOptions = _j[1];
    var containerRef = react.useRef(null);
    var searchInputRef = react.useRef(null);
    react.useEffect(function () {
        setFilteredOptions(options.filter(function (option) {
            return option.label.toLowerCase().includes(searchTerm.toLowerCase());
        }));
    }, [searchTerm, options]);
    react.useEffect(function () {
        var handleClickOutside = function (event) {
            if (containerRef.current && !containerRef.current.contains(event.target)) {
                setIsOpen(false);
                setSearchTerm('');
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return function () { return document.removeEventListener('mousedown', handleClickOutside); };
    }, []);
    var handleToggle = function () {
        if (disabled)
            return;
        setIsOpen(!isOpen);
        if (!isOpen) {
            setTimeout(function () {
                var _a;
                (_a = searchInputRef.current) === null || _a === void 0 ? void 0 : _a.focus();
            }, 100);
        }
    };
    var handleOptionSelect = function (optionValue) {
        onChange === null || onChange === void 0 ? void 0 : onChange(optionValue);
        setIsOpen(false);
        setSearchTerm('');
    };
    var selectedOption = options.find(function (option) { return option.value === value; });
    var baseStyles = {
        container: "relative inline-block w-full ".concat(className),
        trigger: "\n      w-full px-3 py-2 border border-gray-300 rounded-md bg-white cursor-pointer\n      flex items-center justify-between min-h-[40px]\n      ".concat(disabled ? 'bg-gray-100 cursor-not-allowed opacity-60' : 'hover:border-gray-400', "\n      ").concat(isOpen ? 'border-blue-500 ring-1 ring-blue-500' : '', "\n    "),
        dropdown: "\n      absolute top-full left-0 right-0 z-50 mt-1 bg-white border border-gray-300 \n      rounded-md shadow-lg max-h-60 overflow-hidden\n      ".concat(isOpen ? 'block' : 'hidden', "\n    "),
        searchInput: "\n      w-full px-3 py-2 border-b border-gray-200 outline-none text-sm\n      focus:border-blue-500\n    ",
        optionsList: 'max-h-48 overflow-y-auto',
        option: "\n      px-3 py-2 cursor-pointer text-sm border-b border-gray-100 last:border-b-0\n      hover:bg-gray-50\n    ",
        selectedOption: 'bg-blue-50 text-blue-700',
        noResults: 'px-3 py-2 text-sm text-gray-500 text-center',
        arrow: "\n      ml-2 transition-transform duration-200\n      ".concat(isOpen ? 'transform rotate-180' : '', "\n    ")
    };
    return (jsxRuntime.jsxs("div", { ref: containerRef, className: baseStyles.container, children: [jsxRuntime.jsx("input", { type: "hidden", name: name, value: value }), jsxRuntime.jsxs("div", { className: baseStyles.trigger, onClick: handleToggle, role: "combobox", "aria-expanded": isOpen, "aria-haspopup": "listbox", children: [jsxRuntime.jsx("span", { className: selectedOption ? 'text-gray-900' : 'text-gray-500', children: selectedOption ? selectedOption.label : placeholder }), jsxRuntime.jsx("svg", { className: baseStyles.arrow, width: "20", height: "20", viewBox: "0 0 20 20", fill: "currentColor", children: jsxRuntime.jsx("path", { fillRule: "evenodd", d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z", clipRule: "evenodd" }) })] }), jsxRuntime.jsxs("div", { className: baseStyles.dropdown, children: [jsxRuntime.jsx("input", { ref: searchInputRef, type: "text", className: baseStyles.searchInput, placeholder: searchPlaceholder, value: searchTerm, onChange: function (e) { return setSearchTerm(e.target.value); }, onClick: function (e) { return e.stopPropagation(); } }), jsxRuntime.jsx("div", { className: baseStyles.optionsList, role: "listbox", children: filteredOptions.length > 0 ? (filteredOptions.map(function (option) { return (jsxRuntime.jsx("div", { className: "".concat(baseStyles.option, " ").concat(option.value === value ? baseStyles.selectedOption : ''), onClick: function () { return handleOptionSelect(option.value); }, role: "option", "aria-selected": option.value === value, children: option.label }, option.value)); })) : (jsxRuntime.jsx("div", { className: baseStyles.noResults, children: "Nenhuma op\u00E7\u00E3o encontrada" })) })] })] }));
};

exports.SearchSelect = SearchSelect;
//# sourceMappingURL=index.js.map
