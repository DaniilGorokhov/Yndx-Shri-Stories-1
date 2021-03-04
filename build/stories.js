/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 266:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = function anonymous(locals, escapeFn, include, rethrow
) {
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("<main class=\"slide slide_horizontal-align_between\" data-slide=\"activity\">\n<div class=\"slide-description\">\n<p class=\"slide-description__headline\">\n")
    ; __append(escapeFn( data.title ))
    ; __append("\n</p>\n<p class=\"slide-description__caption\">\n")
    ; __append(escapeFn( data.subtitle ))
    ; __append("\n</p>\n</div>\n<div class=\"slide-body-wrapper slide-body-wrapper_direction_column slide-body-wrapper_height_vert-100 slide-body-wrapper_horizontal-align_end slide-body-wrapper_vertical-align_vert-end slide-body-wrapper_flex\">\n<div class=\"heat-map-block\">\n")
    ;  for (let hourIx = 0; hourIx < data.heatMap[0].length; hourIx += 1) { 
    ; __append("\n<div class=\"heat-map-block__line\">\n")
    ;  if (hourIx % 2 === 1) { 
    ; __append("\n<div class=\"heat-map-block__item heat-map-block__item_placeholder\"></div>\n")
    ;  } 
    ; __append("\n")
    ;  for (let dayIx = 0; dayIx < data.heatMap.length; dayIx += 1) { 
    ; __append("\n<div class=\"heat-map-block__item\">\n<img class=\"heat-map-block__item-value heat-map-block__item-value_theme_dark\" src=\"")
    ; __append(escapeFn( __webpack_require__(193)(`./${data.heatMap[dayIx][hourIx]}-dark.svg`) ))
    ; __append("\" alt=\"Heat map item\">\n<img class=\"heat-map-block__item-value heat-map-block__item-value_theme_light\" src=\"")
    ; __append(escapeFn( __webpack_require__(677)(`./${data.heatMap[dayIx][hourIx]}-light.svg`) ))
    ; __append("\" alt=\"Heat map item\">\n</div>\n")
    ;  } 
    ; __append("\n")
    ;  if (hourIx % 2 === 0) { 
    ; __append("\n<div class=\"heat-map-block__item heat-map-block__item_placeholder\"></div>\n")
    ;  } 
    ; __append("\n</div>\n")
    ;  } 
    ; __append("\n</div>\n<div class=\"heat-map-block heat-map-block_reduced\">\n")
    ;  for (let dayIx = 0; dayIx < data.reducedHeatMap.length; dayIx += 1) { 
    ; __append("\n<div class=\"heat-map-block__line\n")
    ; __append(escapeFn( dayIx !== 0 ? `heat-map-block__line_margin_top-${dayIx}` : '' ))
    ; __append("\">\n")
    ;  if (dayIx % 2 === 1) { 
    ; __append("\n<div class=\"heat-map-block__item heat-map-block__item_placeholder\"></div>\n")
    ;  } 
    ; __append("\n")
    ;  for (let hourIx = 0; hourIx < data.reducedHeatMap[dayIx].length; hourIx += 1) { 
    ; __append("\n<div class=\"heat-map-block__item\">\n<img class=\"heat-map-block__item-value heat-map-block__item-value_theme_dark\" src=\"")
    ; __append(escapeFn( __webpack_require__(193)(`./${data.reducedHeatMap[dayIx][hourIx]}-dark.svg`) ))
    ; __append("\" alt=\"Heat map item\">\n<img class=\"heat-map-block__item-value heat-map-block__item-value_theme_light\" src=\"")
    ; __append(escapeFn( __webpack_require__(677)(`./${data.reducedHeatMap[dayIx][hourIx]}-light.svg`) ))
    ; __append("\" alt=\"Heat map item\">\n</div>\n")
    ;  } 
    ; __append("\n")
    ;  if (dayIx % 2 === 0) { 
    ; __append("\n<div class=\"heat-map-block__item heat-map-block__item_placeholder\"></div>\n")
    ;  } 
    ; __append("\n</div>\n")
    ;  } 
    ; __append("\n</div>\n<div class=\"heat-map-description\">\n<div class=\"heat-map-description__item\">\n<div class=\"heat-map-description__indicator heat-map-description__indicator_special\"></div>\n<div class=\"heat-map-description__title\">\n1 час\n</div>\n</div>\n")
    ;  for (let i = 0; i < data.intervals.length; i++) { 
    ; __append("\n<div class=\"heat-map-description__item\">\n<div class=\"heat-map-description__indicator heat-map-description__indicator_color-")
    ; __append(escapeFn( i + 1 ))
    ; __append("\"></div>\n<div class=\"heat-map-description__title\">\n")
    ; __append(escapeFn( data.intervals[i] ))
    ; __append("\n</div>\n</div>\n")
    ;  } 
    ; __append("\n</div>\n<div class=\"heat-map-description heat-map-description_reduced\">\n<div class=\"heat-map-description__item\">\n<div class=\"heat-map-description__indicator heat-map-description__indicator_special\"></div>\n<div class=\"heat-map-description__title\">\n2 часа\n</div>\n</div>\n")
    ;  for (let i = 0; i < data.intervals.length; i++) { 
    ; __append("\n<div class=\"heat-map-description__item\">\n<div class=\"heat-map-description__indicator heat-map-description__indicator_color-")
    ; __append(escapeFn( i + 1 ))
    ; __append("\"></div>\n<div class=\"heat-map-description__title\">\n")
    ; __append(escapeFn( data.intervals[i] ))
    ; __append("\n</div>\n</div>\n")
    ;  } 
    ; __append("\n</div>\n</div>\n</main>")
  }
  return __output;

}

/***/ }),

/***/ 578:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = function anonymous(locals, escapeFn, include, rethrow
) {
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("<main class=\"slide\" data-slide=\"chart\">\n<div class=\"slide-description\">\n<div class=\"slide-description__headline\">\n")
    ; __append(escapeFn( data.title ))
    ; __append("\n</div>\n<div class=\"slide-description__caption\">\n")
    ; __append(escapeFn( data.subtitle ))
    ; __append("\n</div>\n</div>\n<div class=\"chart-wrapper chart-wrapper_vertical-align_end chart-wrapper_vertical-align_horiz-center\">\n<div class=\"chart-block\">\n")
    ; 
let maxValue = null;
data.values.forEach((item) => {
if (maxValue === null) {
maxValue = item.value;
} else if (item.value > maxValue) {
maxValue = item.value;
}
});
// Need display next 2 zero-height item and 6 before active (max)
const activeIndex = data.values.findIndex((item) => item.active);
const lastIndex = data.values.length - 1 >= activeIndex + 2 ? activeIndex + 2 : data.values.length - 1;
const startIndex = lastIndex - 8 >= 0 ? lastIndex - 8 : 0;
let wasActive = false;
let wasAfterActive = 0;
let displayedItems = 0;
let afterActive = 0;

    ; __append("\n")
    ;  for (let i = startIndex; i < data.values.length; i++) { 
    ; __append("\n")
    ; 
if (wasAfterActive >= 2 && displayedItems >= 9) break;
if (wasActive) {
wasAfterActive++;
afterActive++;
}
wasActive = wasActive || data.values[i].active;
displayedItems++;

    ; __append("\n<div class=\"chart-block__item\n")
    ; __append(escapeFn( afterActive > 2 ? 'chart-block__item_hidden' : '' ))
    ; __append("\">\n<p class=\"chart-block__item-value\n")
    ; __append(escapeFn( data.values[i].active ? 'chart-block__item-value_active' : '' ))
    ; __append("\">\n")
    ; __append(escapeFn( data.values[i].value !== 0 ? data.values[i].value : '' ))
    ; __append("\n</p>\n<div class=\"chart-block__item-bar chart-block__item-bar_visible_vert\n")
    ; __append(escapeFn( data.values[i].active ? 'chart-block__item-bar_active' : '' ))
    ; __append("\"\n")
    ; __append( `style="height: ${63.15625 * (data.values[i].value / maxValue)}%"` )
    ; __append("\n></div>\n<div class=\"chart-block__item-bar chart-block__item-bar_visible_horiz\n")
    ; __append(escapeFn( data.values[i].active ? 'chart-block__item-bar_active' : '' ))
    ; __append("\"\n")
    ; __append( `style="height: ${62.84946236 * (data.values[i].value / maxValue)}%"` )
    ; __append("\n></div>\n<p class=\"chart-block__item-title\">\n")
    ; __append(escapeFn( data.values[i].title ))
    ; __append("\n</p>\n</div>\n")
    ;  } 
    ; __append("\n</div>\n<div class=\"chart-leaders\">\n")
    ;  for (let i = 0; i < 2; i++) { 
    ; __append("\n<div class=\"people-card people-card_direction_row people-card_padding_0\">\n<div class=\"people-card__img-wrapper\">\n<img class=\"people-card__img\" src=\"")
    ; __append(escapeFn( __webpack_require__(990)(`./${data.users[i].avatar}`) ))
    ; __append("\" alt=\"People card image\">\n</div>\n<div class=\"people-card__text-wrapper\">\n<p class=\"people-card__body\">\n")
    ; __append(escapeFn( data.users[i].name ))
    ; __append("\n</p>\n<p class=\"people-card__caption\">\n")
    ; __append(escapeFn( data.users[i].valueText ))
    ; __append("\n</p>\n</div>\n</div>\n")
    ;  if (i === 0) { 
    ; __append("\n<div class=\"divider divider_revert_color divider_margin-vertical_1 divider_horizontal-revert\"></div>\n")
    ;  } 
    ; __append("\n")
    ;  } 
    ; __append("\n</div>\n</div>\n</main>")
  }
  return __output;

}

/***/ }),

/***/ 357:
/***/ ((module) => {

module.exports = function anonymous(locals, escapeFn, include, rethrow
) {
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("<main class=\"slide slide_horizontal-align_between\" data-slide=\"diagram\">\n<div class=\"slide-description\">\n<p class=\"slide-description__headline\">\n")
    ; __append(escapeFn( data.title ))
    ; __append("\n</p>\n<p class=\"slide-description__caption\">\n")
    ; __append(escapeFn( data.subtitle ))
    ; __append("\n</p>\n</div>\n<div class=\"slide-body-wrapper slide-body-wrapper_height_vert-100 slide-body-wrapper_flex slide-body-wrapper_vertical-align_vert-end slide-body-wrapper_wrap slide-body-wrapper_horizontal-align\">\n<div class=\"diagram-block\">\n<div class=\"diagram-block__description\">\n<p class=\"diagram-block__description-title\">\n")
    ; __append(escapeFn( data.totalText ))
    ; __append("\n</p>\n<p class=\"diagram-block__description-caption\">\n")
    ; __append(escapeFn( data.differenceText ))
    ; __append("\n</p>\n</div>\n")
    ; 
const CIRCLE_LENGTH = 267;
const values = data.categories.map((item) => parseFloat(item.valueText));
const valuesSum = parseFloat(data.totalText);
const degUnit = valuesSum / CIRCLE_LENGTH;
let sumBefore = 0;
const diagramData = values.map((item) => {
let result = [item / degUnit, sumBefore += degUnit];
sumBefore += item / degUnit;
return result;
});

    ; __append("\n<svg class=\"diagram-block__body\" viewBox=\"0 0 100 100\">\n")
    ;  for (let i = 0; i < 4; i++) { 
    ; __append("\n<circle cx=\"50\" cy=\"50\" r=\"42.5\" stroke=\"url('#radial-dark-")
    ; __append(escapeFn( i ))
    ; __append("')\" filter=\"url(#filter")
    ; __append(escapeFn( i ))
    ; __append("_dii)\" stroke-dasharray=\"267\" stroke-dashoffset=\"-")
    ; __append(escapeFn( diagramData[i][1] ))
    ; __append("\" stroke-width=\"15\" fill=\"url('#radial-dark-")
    ; __append(escapeFn( i ))
    ; __append("')\"/>\n")
    ;  } 
    ; __append("\n<defs>\n<g filter=\"url(#filter0_dii)\">\n<path d=\"M166.6 37.8101C168.206 34.9119 167.164 31.2494 164.209 29.75C141.24 18.0952 115.821 12.0012 90.0078 12C64.1948 11.9988 38.7751 18.0903 15.805 29.743C12.8498 31.2421 11.8069 34.9045 13.4131 37.8029L31.445 70.3404C33.0512 73.2388 36.6968 74.271 39.6751 72.8184C55.3277 65.184 72.5379 61.1992 90.0054 61.2C107.473 61.2008 124.683 65.1873 140.335 72.8231C143.313 74.276 146.958 73.2442 148.565 70.3459L166.6 37.8101Z\" fill=\"url(#paint0_radial)\" fill-opacity=\"0.8\"/>\n</g>\n<defs>\n<filter id=\"filter0_dii\" x=\"0.660767\" y=\"0\" width=\"178.692\" height=\"185.4767\" filterUnits=\"userSpaceOnUse\" color-interpolation-filters=\"sRGB\">\n<feFlood flood-opacity=\"0\" result=\"BackgroundImageFix\"/>\n<feColorMatrix in=\"SourceAlpha\" type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\"/>\n<feMorphology radius=\"8\" operator=\"erode\" in=\"SourceAlpha\" result=\"effect1_dropShadow\"/>\n<feOffset/>\n<feGaussianBlur stdDeviation=\"10\"/>\n<feColorMatrix type=\"matrix\" values=\"0 0 0 0 0.972549 0 0 0 0 0.618715 0 0 0 0 0 0 0 0 0.2 0\"/>\n<feBlend mode=\"normal\" in2=\"BackgroundImageFix\" result=\"effect1_dropShadow\"/>\n<feBlend mode=\"normal\" in=\"SourceGraphic\" in2=\"effect1_dropShadow\" result=\"shape\"/>\n<feColorMatrix in=\"SourceAlpha\" type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\" result=\"hardAlpha\"/>\n<feOffset/>\n<feGaussianBlur stdDeviation=\"10\"/>\n<feComposite in2=\"hardAlpha\" operator=\"arithmetic\" k2=\"-1\" k3=\"1\"/>\n<feColorMatrix type=\"matrix\" values=\"0 0 0 0 1 0 0 0 0 0.636666 0 0 0 0 0 0 0 0 0.9 0\"/>\n<feBlend mode=\"normal\" in2=\"shape\" result=\"effect2_innerShadow\"/>\n<feColorMatrix in=\"SourceAlpha\" type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\" result=\"hardAlpha\"/>\n<feOffset dx=\"-1\" dy=\"1\"/>\n<feGaussianBlur stdDeviation=\"0.5\"/>\n<feComposite in2=\"hardAlpha\" operator=\"arithmetic\" k2=\"-1\" k3=\"1\"/>\n<feColorMatrix type=\"matrix\" values=\"0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0\"/>\n<feBlend mode=\"normal\" in2=\"effect2_innerShadow\" result=\"effect3_innerShadow\"/>\n</filter>\n<radialGradient id=\"radial-dark-0\" cx=\"0\" cy=\"0\" r=\"1\" gradientUnits=\"userSpaceOnUse\" gradientTransform=\"translate(89.4859 176.514) rotate(90) scale(163.486)\">\n<stop offset=\"0.71875\" stop-color=\"#FFA300\"/>\n<stop offset=\"1\" stop-color=\"#5B3A00\"/>\n</radialGradient>\n</defs>\n</defs></svg>\n<svg class=\"diagram-block__body diagram-block__body_light\" viewBox=\"0 0 100 100\">\n")
    ;  for (let i = 0; i < 4; i++) { 
    ; __append("\n<circle cx=\"50\" cy=\"50\" r=\"42.5\" stroke=\"url('#radial-light-")
    ; __append(escapeFn( i ))
    ; __append("')\" filter=\"url(#filter")
    ; __append(escapeFn( i ))
    ; __append("_ii)\" stroke-dasharray=\"")
    ; __append(escapeFn( diagramData[i][0] ))
    ; __append(" 267\" stroke-dashoffset=\"-")
    ; __append(escapeFn( diagramData[i][1] ))
    ; __append("\" stroke-width=\"15\" fill=\"transparent\"/>\n")
    ;  } 
    ; __append("\n</svg>\n</div>\n<div class=\"diagram-categories\">\n")
    ;  for (let i = 0; i < data.categories.length; i++) { 
    ; __append("\n<div class=\"diagram-categories-item\">\n<div class=\"diagram-categories-item__title\">\n<div class=\"diagram-categories-item__marker ")
    ; __append(escapeFn( `diagram-categories-item__marker_color_${i + 1}` ))
    ; __append("\"></div>\n")
    ; __append(escapeFn( data.categories[i].title ))
    ; __append("\n</div>\n<div class=\"diagram-categories-item__difference\">\n<p class=\"diagram-categories-item__difference-item\">\n")
    ;  const differenceValue = parseFloat(data.categories[i].differenceText) 
    ; __append("\n")
    ; __append(escapeFn( differenceValue > 0 ? `+${differenceValue}` : differenceValue ))
    ; __append("\n</p>\n<p class=\"diagram-categories-item__difference-item\">\n")
    ; __append(escapeFn( parseFloat(data.categories[i].valueText) ))
    ; __append("\n</p>\n</div>\n</div>\n")
    ;  if (i !== data.categories.length - 1) { 
    ; __append("\n<div class=\"divider divider_margin-vertical_1\"></div>\n")
    ;  } 
    ; __append("\n")
    ;  } 
    ; __append("\n</div>\n</div>\n</main>")
  }
  return __output;

}

/***/ }),

/***/ 769:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = function anonymous(locals, escapeFn, include, rethrow
) {
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("<main class=\"slide slide_horizontal-align_between\" data-slide=\"leaders\">\n<div class=\"slide-description\">\n<p class=\"slide-description__headline\">\n")
    ; __append(escapeFn( data.title ))
    ; __append("\n</p>\n<p class=\"slide-description__caption\">\n")
    ; __append(escapeFn( data.subtitle ))
    ; __append("\n</p>\n</div>\n<div class=\"leader-board\">\n")
    ; 
let barOrder = [[3, 5], [4, 4], [2, 3], [5, 2], [1, 1]];
let inFirstThree = true;
let inFirstFive = true;
let selectedUserPos = data.users.findIndex(user => user.id === data.selectedUserId);
if (selectedUserPos > 2) {
inFirstThree = false;
}
if (selectedUserPos > 4) {
inFirstFive = false;
}
const selectedUser = data.users[selectedUserPos];

    ; __append("\n")
    ;  for (let i = 0; i < 5; i++) { 
    ; __append("\n")
    ; 
let itemClasses = [];
itemClasses.push(`leader-board__item_order_${barOrder[i][0]}`);
if (i > 2) itemClasses.push('leader-board__item_additional');
if (i === 0) {
itemClasses.push(`leader-board__item_z-index_2`);
} else if (i < 3) {
itemClasses.push(`leader-board__item_z-index_1`);
}
let barClasses = [];
barClasses.push(`leader-board__bar_height_${barOrder[i][1]}`);
if (i === 0) barClasses.push('leader-board__bar_primary');
let peopleCardWrapper;
if (i === 0) {
peopleCardWrapper = 'leader-board__wrapper_to-vis-align_center';
} else if (i % 2 === 0) {
peopleCardWrapper = 'leader-board__wrapper_to-vis-align_start';
} else {
peopleCardWrapper = 'leader-board__wrapper_to-vis-align_end';
}
let currentUser = data.users[i];
if (!inFirstFive && i === 4) {
currentUser = selectedUser;
}

    ; __append("\n<div class=\"leader-board__item ")
    ; __append(escapeFn( itemClasses.join(' ') ))
    ; __append("\">\n<div class=\"leader-board__wrapper ")
    ; __append(escapeFn( peopleCardWrapper ))
    ; __append("\">\n<div class=\"people-card\">\n<div class=\"people-card__img-wrapper\">\n")
    ;  if (i === 0) { 
    ; __append("\n<div class=\"people-card__emoji\">\n")
    ; __append(escapeFn( data.emoji ))
    ; __append("\n</div>\n")
    ;  } else if (currentUser.id === data.selectedUserId) { 
    ; __append("\n<div class=\"people-card__emoji\">\n👍\n</div>\n")
    ;  } 
    ; __append("\n<img src=\"")
    ; __append(escapeFn( __webpack_require__(990)(`./${currentUser.avatar}`) ))
    ; __append("\" alt=\"People card image\" class=\"people-card__img\">\n</div>\n<div class=\"people-card__text-wrapper\">\n<p class=\"people-card__body\">\n")
    ; __append(escapeFn( currentUser.name ))
    ; __append("\n</p>\n<p class=\"people-card__caption\">\n")
    ; __append(escapeFn( currentUser?.valueText ))
    ; __append("\n</p>\n</div>\n</div>\n</div>\n<div class=\"leader-board__bar ")
    ; __append(escapeFn( barClasses.join(' ') ))
    ; __append("\">\n<div class=\"leader-board__score leader-board__wrapper ")
    ; __append(escapeFn( peopleCardWrapper ))
    ; __append("\">\n")
    ; __append(escapeFn( !inFirstFive && i === 4 ? selectedUserPos + 1 : i + 1 ))
    ; __append("\n</div>\n")
    ;  if (!inFirstThree && i === 0) { 
    ; __append("\n<div class=\"leader-board__relative-place\">\n<div class=\"people-card people-card_padding_bottom-0\">\n<div class=\"people-card__img-wrapper\">\n<div class=\"people-card__emoji\">\n👍\n</div>\n<img src=\"")
    ; __append(escapeFn( __webpack_require__(990)(`./${selectedUser.avatar}`) ))
    ; __append("\" alt=\"People card image\" class=\"people-card__img\">\n</div>\n<div class=\"people-card__text-wrapper\">\n<p class=\"people-card__body\">\n")
    ; __append(escapeFn( selectedUser.name ))
    ; __append("\n</p>\n<p class=\"people-card__caption people-card__caption_secondary\">\n")
    ; __append(escapeFn( selectedUser?.valueText ))
    ; __append("\n</p>\n</div>\n<div class=\"divider divider_card-divider\"></div>\n</div>\n<div class=\"leader-board__score leader-board__score_relative-place leader-board__wrapper ")
    ; __append(escapeFn( peopleCardWrapper ))
    ; __append("\">\n")
    ; __append(escapeFn( selectedUserPos + 1 ))
    ; __append("\n</div>\n</div>\n")
    ;  } 
    ; __append("\n</div>\n</div>\n")
    ;  } 
    ; __append("\n</div>\n</main>")
  }
  return __output;

}

/***/ }),

/***/ 401:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = function anonymous(locals, escapeFn, include, rethrow
) {
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("<main class=\"slide\" data-slide=\"vote\">\n<div class=\"slide-description\">\n<p class=\"slide-description__headline\">\n")
    ; __append(escapeFn( data.title ))
    ; __append("\n</p>\n<p class=\"slide-description__caption\">\n")
    ; __append(escapeFn( data.subtitle ))
    ; __append("\n</p>\n</div>\n<div class=\"voting-area\">\n")
    ;  for (let columnId = 0; columnId < data.columns.length; columnId += 1) { 
    ; __append("\n<div class=\"voting-area__column\">\n")
    ;  for (let columnItemId = 0; columnItemId < data.columns[columnId].length; columnItemId += 1) { 
    ; __append("\n")
    ;  let currentColumnItem = data.columns[columnId][columnItemId]; 
    ; __append("\n")
    ;  if (currentColumnItem.data && currentColumnItem.data.type === 'user') { 
    ; __append("\n")
    ;  let currentUser = currentColumnItem.data; 
    ; __append("\n<div class=\"people-card people-card_interactions voting-area__item\n")
    ; __append(escapeFn( currentColumnItem.visibility !== 'both' ?
`voting-area__item_visibility_${currentColumnItem.visibility}` : '' ))
    ; __append("\n")
    ; __append(escapeFn( currentUser.selected ? 'people-card_selected' : '' ))
    ; __append("\" data-action=\"update\" data-params=\"")
    ; __append(escapeFn( JSON.stringify({
alias: 'leaders',
data: {
selectedUserId: currentUser.id,
},
}) ))
    ; __append("\">\n<div class=\"people-card__img-wrapper\">\n<div class=\"people-card__emoji\n")
    ; __append(escapeFn( !currentUser.selected ? 'people-card__emoji_hidden' : '' ))
    ; __append("\">\n👍\n</div>\n<img src=\"")
    ; __append(escapeFn( __webpack_require__(990)(`./${currentUser.avatar}`) ))
    ; __append("\" alt=\"People card image\" class=\"people-card__img\">\n</div>\n<div class=\"people-card__text-wrapper\">\n<p class=\"people-card__body\">\n")
    ; __append(escapeFn( currentUser.name ))
    ; __append("\n</p>\n</div>\n</div>\n")
    ;  } else if (currentColumnItem.data && currentColumnItem.data.type.match(/^slider/)) { 
    ; __append("\n<div class=\"voting-area__slider voting-area__item\n")
    ; __append(escapeFn( currentColumnItem.visibility !== 'both' ?
`voting-area__item_visibility_${currentColumnItem.visibility}` : '' ))
    ; __append("\n")
    ; __append(escapeFn( !currentColumnItem.data.active ? 'voting-area__slider_disabled' : '' ))
    ; __append("\n")
    ; __append(escapeFn( currentColumnItem.data.type === 'slider-down' ? 'voting-area__slider_revert' : '' ))
    ; __append("\"\n")
    ;  if (currentColumnItem.data.active) { 
    ; __append("\ndata-update=\"update\" data-params=\"")
    ; __append(escapeFn( JSON.stringify(currentColumnItem.data.params) ))
    ; __append("\"\n")
    ;  } 
    ; __append("\n>\n<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<use xlink:href=\"#slider\"/>\n</svg>\n</div>\n")
    ;  } 
    ; __append("\n")
    ;  } 
    ; __append("\n</div>\n")
    ;  } 
    ; __append("\n</div>\n<svg style=\"display: none;\">\n<symbol id=\"slider\">\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M32 62C48.5685 62 62 48.5685 62 32C62 15.4315 48.5685 2 32 2C15.4315 2 2 15.4315 2 32C2 48.5685 15.4315 62 32 62ZM32 64C49.6731 64 64 49.6731 64 32C64 14.3269 49.6731 0 32 0C14.3269 0 0 14.3269 0 32C0 49.6731 14.3269 64 32 64ZM59 32C59 46.9117 46.9117 59 32 59C17.0883 59 5 46.9117 5 32C5 17.0883 17.0883 5 32 5C46.9117 5 59 17.0883 59 32ZM25.0607 27.9393C24.4749 27.3536 23.5251 27.3536 22.9393 27.9393C22.3536 28.5251 22.3536 29.4749 22.9393 30.0607L30.9393 38.0607C31.5251 38.6464 32.4749 38.6464 33.0607 38.0607L41.0607 30.0607C41.6464 29.4749 41.6464 28.5251 41.0607 27.9393C40.4749 27.3536 39.5251 27.3536 38.9393 27.9393L32 34.8787L25.0607 27.9393Z\" fill=\"currentColor\"/>\n</symbol>\n</svg>\n</main>")
  }
  return __output;

}

/***/ }),

/***/ 487:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/6ecb01f44e0bc3d008d4.jpg";

/***/ }),

/***/ 674:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/aae0e7d353ed8be68826.jpg";

/***/ }),

/***/ 607:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/e8f5281ecd850985efec.jpg";

/***/ }),

/***/ 476:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/b9f6b37ed082a020423e.jpg";

/***/ }),

/***/ 829:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/269c6f2d56831a2086fd.jpg";

/***/ }),

/***/ 659:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/daca7618c2baff060d90.jpg";

/***/ }),

/***/ 58:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/3f8a74d84cd792821663.jpg";

/***/ }),

/***/ 706:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/e6e75e5581c8e70de3a6.jpg";

/***/ }),

/***/ 806:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/1c907bed519473870126.jpg";

/***/ }),

/***/ 100:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/ecdfc579e6916d7a1ee2.jpg";

/***/ }),

/***/ 239:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/1925712321d161707c0e.jpg";

/***/ }),

/***/ 17:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/cde813650f8a8d48f96a.jpg";

/***/ }),

/***/ 146:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/2410b31921163b25393a.png";

/***/ }),

/***/ 255:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/55fac5ee2e34fbddbe9a.png";

/***/ }),

/***/ 990:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./1.jpg": 487,
	"./10.jpg": 674,
	"./11.jpg": 607,
	"./12.jpg": 476,
	"./2.jpg": 829,
	"./3.jpg": 659,
	"./4.jpg": 58,
	"./5.jpg": 706,
	"./6.jpg": 806,
	"./7.jpg": 100,
	"./8.jpg": 239,
	"./9.jpg": 17,
	"./favicon-dark.png": 146,
	"./favicon-light.png": 255
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 990;

/***/ }),

/***/ 929:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/b8d0a9d00648efec4c24.svg";

/***/ }),

/***/ 665:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/04a9b84ca815969b2b3d.svg";

/***/ }),

/***/ 282:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/0f584456fc9bce239c7e.svg";

/***/ }),

/***/ 903:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/afbd9af5bdf9c2981e25.svg";

/***/ }),

/***/ 382:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/3d2ea0ef130895b6d3ae.svg";

/***/ }),

/***/ 637:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/809a5ef51de97e85f2d1.svg";

/***/ }),

/***/ 889:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/198a498f86a652bf88a0.svg";

/***/ }),

/***/ 435:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/395430ffe400ad0b9e07.svg";

/***/ }),

/***/ 193:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./extra-dark.svg": 929,
	"./max-dark.svg": 282,
	"./mid-dark.svg": 382,
	"./min-dark.svg": 889
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 193;

/***/ }),

/***/ 677:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./extra-light.svg": 665,
	"./max-light.svg": 903,
	"./mid-light.svg": 637,
	"./min-light.svg": 435
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 677;

/***/ }),

/***/ 770:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";

;// CONCATENATED MODULE: ./src/assets/data/data.json
const data_namespaceObject = JSON.parse('[{"alias":"leaders","data":{"title":"Больше всего коммитов","subtitle":"Спринт № 213","emoji":"👑","users":[{"id":3,"name":"Дарья Ковалева","avatar":"3.jpg","valueText":"32"},{"id":9,"name":"Сергей Бережной","avatar":"9.jpg","valueText":"27"},{"id":7,"name":"Дмитрий Андриянов","avatar":"7.jpg","valueText":"22"},{"id":6,"name":"Андрей Мокроусов","avatar":"6.jpg","valueText":"20"},{"id":8,"name":"Александр Иванков","avatar":"8.jpg","valueText":"19"}]}},{"alias":"leaders","data":{"title":"Самый большой коммит","subtitle":"Спринт № 213","emoji":"😮","users":[{"id":12,"name":"Алексей Ярошевич","avatar":"12.jpg","valueText":"4001 строка"},{"id":5,"name":"Александр Николаичев","avatar":"5.jpg","valueText":"3845 строк"},{"id":8,"name":"Александр Иванков","avatar":"8.jpg","valueText":"3640 строк"},{"id":10,"name":"Яна Берникова","avatar":"10.jpg","valueText":"3453 строки"},{"id":4,"name":"Вадим Пацев","avatar":"4.jpg","valueText":"2852 строки"}]}},{"alias":"vote","data":{"title":"Самый 🔎 внимательный разработчик","subtitle":"Спринт № 213","emoji":"🔎","selectedUserId":4,"users":[{"id":1,"name":"Евгений Дементьев","avatar":"1.jpg","valueText":"22 голоса"},{"id":4,"name":"Вадим Пацев","avatar":"4.jpg","valueText":"19 голосов"},{"id":10,"name":"Яна Берникова","avatar":"10.jpg","valueText":"17 голосов"},{"id":12,"name":"Алексей Ярошевич","avatar":"12.jpg","valueText":"16 голосов"},{"id":11,"name":"Юрий Фролов","avatar":"11.jpg","valueText":"11 голосов"},{"id":2,"name":"Александр Шлейко","avatar":"2.jpg","valueText":"10 голосов"},{"id":5,"name":"Александр Николаичев","avatar":"5.jpg","valueText":"9 голосов"},{"id":6,"name":"Андрей Мокроусов","avatar":"6.jpg","valueText":"8 голосов"},{"id":8,"name":"Александр Иванков","avatar":"8.jpg","valueText":"7 голосов"},{"id":7,"name":"Дмитрий Андриянов","avatar":"7.jpg","valueText":"6 голосов"},{"id":3,"name":"Дарья Ковалева","avatar":"3.jpg","valueText":"5 голосов"},{"id":9,"name":"Сергей Бережной","avatar":"9.jpg","valueText":"4 голоса"}]}},{"alias":"leaders","data":{"title":"Самый 🔎 внимательный разработчик","subtitle":"Спринт № 213","emoji":"🔎","selectedUserId":11,"users":[{"id":1,"name":"Евгений Дементьев","avatar":"1.jpg","valueText":"22 голоса"},{"id":4,"name":"Вадим Пацев","avatar":"4.jpg","valueText":"19 голосов"},{"id":10,"name":"Яна Берникова","avatar":"10.jpg","valueText":"17 голосов"},{"id":12,"name":"Алексей Ярошевич","avatar":"12.jpg","valueText":"16 голосов"},{"id":11,"name":"Юрий Фролов","avatar":"11.jpg","valueText":"15 голосов"},{"id":2,"name":"Александр Шлейко","avatar":"2.jpg","valueText":"14 голосов"},{"id":5,"name":"Александр Николаичев","avatar":"5.jpg","valueText":"12 голосов"},{"id":6,"name":"Андрей Мокроусов","avatar":"6.jpg","valueText":"9 голосов"},{"id":8,"name":"Александр Иванков","avatar":"8.jpg","valueText":"8 голосов"},{"id":7,"name":"Дмитрий Андриянов","avatar":"7.jpg","valueText":"6 голосов"},{"id":3,"name":"Дарья Ковалева","avatar":"3.jpg","valueText":"5 голосов"},{"id":9,"name":"Сергей Бережной","avatar":"9.jpg","valueText":"4 голоса"}]}},{"alias":"vote","data":{"title":"Самый 👪 командный разработчик","subtitle":"Спринт № 213","emoji":"👪","offset":8,"users":[{"id":2,"name":"Александр Шлейко","avatar":"2.jpg","valueText":"24 голоса"},{"id":3,"name":"Дарья Ковалева","avatar":"3.jpg","valueText":"21 голос"},{"id":6,"name":"Андрей Мокроусов","avatar":"6.jpg","valueText":"19 голосов"},{"id":7,"name":"Дмитрий Андриянов","avatar":"7.jpg","valueText":"18 голосов"},{"id":1,"name":"Евгений Дементьев","avatar":"1.jpg","valueText":"16 голосов"},{"id":9,"name":"Сергей Бережной","avatar":"9.jpg","valueText":"14 голосов"},{"id":8,"name":"Александр Иванков","avatar":"8.jpg","valueText":"13 голосов"},{"id":11,"name":"Юрий Фролов","avatar":"11.jpg","valueText":"11 голосов"},{"id":10,"name":"Яна Берникова","avatar":"10.jpg","valueText":"9 голосов"},{"id":12,"name":"Алексей Ярошевич","avatar":"12.jpg","valueText":"7 голосов"},{"id":5,"name":"Александр Николаичев","avatar":"5.jpg","valueText":"6 голосов"},{"id":4,"name":"Вадим Пацев","avatar":"4.jpg","valueText":"5 голосов"}]}},{"alias":"leaders","data":{"title":"Самый 👪 командный разработчик","subtitle":"Спринт № 213","emoji":"👪","selectedUserId":6,"users":[{"id":2,"name":"Александр Шлейко","avatar":"2.jpg","valueText":"24 голоса"},{"id":3,"name":"Дарья Ковалева","avatar":"3.jpg","valueText":"21 голос"},{"id":6,"name":"Андрей Мокроусов","avatar":"6.jpg","valueText":"19 голосов"},{"id":7,"name":"Дмитрий Андриянов","avatar":"7.jpg","valueText":"18 голосов"},{"id":1,"name":"Евгений Дементьев","avatar":"1.jpg","valueText":"16 голосов"},{"id":9,"name":"Сергей Бережной","avatar":"9.jpg","valueText":"14 голосов"},{"id":8,"name":"Александр Иванков","avatar":"8.jpg","valueText":"13 голосов"},{"id":11,"name":"Юрий Фролов","avatar":"11.jpg","valueText":"11 голосов"},{"id":10,"name":"Яна Берникова","avatar":"10.jpg","valueText":"9 голосов"},{"id":12,"name":"Алексей Ярошевич","avatar":"12.jpg","valueText":"7 голосов"},{"id":5,"name":"Александр Николаичев","avatar":"5.jpg","valueText":"6 голосов"},{"id":4,"name":"Вадим Пацев","avatar":"4.jpg","valueText":"5 голосов"}]}},{"alias":"chart","data":{"title":"Коммиты","subtitle":"Спринт № 213","values":[{"title":"203","value":108},{"title":"204","value":160},{"title":"205","value":126},{"title":"206","value":134},{"title":"207","value":112},{"title":"208","value":152},{"title":"209","value":128},{"title":"210","value":164},{"title":"211","value":118},{"title":"212","value":140},{"title":"213","value":182,"active":true},{"title":"214","value":0},{"title":"215","value":0},{"title":"216","value":0},{"title":"217","value":0},{"title":"218","value":0}],"users":[{"id":3,"name":"Дарья Ковалева","avatar":"3.jpg","valueText":"32"},{"id":9,"name":"Сергей Бережной","avatar":"9.jpg","valueText":"27"},{"id":7,"name":"Дмитрий Андриянов","avatar":"7.jpg","valueText":"22"}]}},{"alias":"chart","data":{"title":"Строки кода","subtitle":"Спринт № 213","values":[{"title":"203","value":47798},{"title":"204","value":68590},{"title":"205","value":55472},{"title":"206","value":63073},{"title":"207","value":51917},{"title":"208","value":65852},{"title":"209","value":60693},{"title":"210","value":70631},{"title":"211","value":57299},{"title":"212","value":62839},{"title":"213","value":74156,"active":true},{"title":"214","value":0},{"title":"215","value":0},{"title":"216","value":0},{"title":"217","value":0},{"title":"218","value":0}],"users":[{"id":12,"name":"Алексей Ярошевич","avatar":"12.jpg","valueText":"8739"},{"id":8,"name":"Александр Иванков","avatar":"8.jpg","valueText":"7538"},{"id":10,"name":"Яна Берникова","avatar":"10.jpg","valueText":"6845"}]}},{"alias":"diagram","data":{"title":"Размер коммитов","subtitle":"Спринт № 213","totalText":"182 коммита","differenceText":"+42 с прошлого спринта","categories":[{"title":"> 1001 строки","valueText":"30 коммитов","differenceText":"+8 коммитов"},{"title":"501 — 1000 строк","valueText":"32 коммита","differenceText":"+6 коммитов"},{"title":"101 — 500 строк","valueText":"58 коммитов","differenceText":"+16 коммитов"},{"title":"1 — 100 строк","valueText":"62 коммита","differenceText":"+12 коммитов"}]}},{"alias":"activity","data":{"title":"Коммиты, 1 неделя","subtitle":"Спринт № 213","data":{"mon":[0,0,0,0,1,0,0,0,0,0,2,3,2,1,0,1,0,0,0,0,0,0,0,0],"tue":[0,0,0,0,1,0,0,0,0,5,0,4,0,0,0,0,1,0,3,0,0,2,1,0],"wed":[1,0,0,0,1,0,5,0,0,4,0,0,0,5,0,2,1,0,0,0,0,0,0,1],"thu":[0,1,0,1,0,0,0,0,6,0,1,0,0,1,0,0,5,0,0,0,1,0,0,0],"fri":[0,0,0,0,0,0,0,1,3,0,0,5,0,4,0,0,3,0,0,0,0,1,0,0],"sat":[0,0,0,0,2,1,0,0,1,0,1,1,1,0,0,0,0,0,0,1,0,0,0,0],"sun":[0,0,0,0,0,0,0,1,0,0,0,0,3,1,0,0,0,0,0,0,1,0,0,0]}}},{"alias":"activity","data":{"title":"Коммиты, 2 неделя","subtitle":"Спринт № 213","data":{"mon":[0,1,1,1,0,0,0,0,0,4,0,0,2,0,0,0,0,1,0,0,0,2,0,2],"tue":[0,1,2,1,0,0,0,0,1,1,0,0,0,0,5,0,0,0,0,0,0,0,0,0],"wed":[0,0,0,0,2,0,1,2,0,3,0,0,0,0,0,0,0,0,0,3,1,1,0,0],"thu":[0,0,2,0,0,0,0,1,2,0,0,0,0,0,1,2,0,3,0,1,1,0,0,0],"fri":[0,0,0,1,1,0,2,0,4,0,0,0,2,0,3,2,0,0,0,0,1,1,0,1],"sat":[1,0,0,0,0,0,1,1,0,0,1,1,0,1,0,0,0,0,2,2,0,2,0,0],"sun":[0,0,0,0,2,0,1,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1,1]}}}]');
// EXTERNAL MODULE: ./src/assets/images/favicon-light.png
var favicon_light = __webpack_require__(255);
// EXTERNAL MODULE: ./src/assets/images/favicon-dark.png
var favicon_dark = __webpack_require__(146);
// EXTERNAL MODULE: ./src/templates/leaders.ejs
var leaders = __webpack_require__(769);
var leaders_default = /*#__PURE__*/__webpack_require__.n(leaders);
// EXTERNAL MODULE: ./src/templates/vote.ejs
var vote = __webpack_require__(401);
var vote_default = /*#__PURE__*/__webpack_require__.n(vote);
// EXTERNAL MODULE: ./src/templates/chart.ejs
var chart = __webpack_require__(578);
var chart_default = /*#__PURE__*/__webpack_require__.n(chart);
// EXTERNAL MODULE: ./src/templates/diagram.ejs
var diagram = __webpack_require__(357);
var diagram_default = /*#__PURE__*/__webpack_require__.n(diagram);
// EXTERNAL MODULE: ./src/templates/activity.ejs
var activity = __webpack_require__(266);
var activity_default = /*#__PURE__*/__webpack_require__.n(activity);
;// CONCATENATED MODULE: ./src/js/vote/prepareVoteData.js
function prepareVoteData(data) {
  const preparedData = {
    data: {
      title: data.title,
      subtitle: data.subtitle,
      columns: [],
    },
  };

  const { users, selectedUserId, offset } = data;
  let offsetNum = data.users.findIndex((user) => user.id === offset);
  if (offsetNum === -1) {
    offsetNum = 0;
  }

  users.forEach((user, index) => {
    users[index].type = 'user';
    users[index].selected = user.id === selectedUserId;
  });

  // Data for sliderUp
  const sliderUpActive = offset && users[0] && offset !== users[0].id;

  let sliderUpOffsetVert = null;
  let sliderUpOffsetHoriz = null;
  if (sliderUpActive) {
    let userId = offsetNum - 6 >= 0 ? offsetNum - 6 : 0;
    sliderUpOffsetVert = users[userId].id;

    userId = offsetNum - 8 >= 0 ? offsetNum - 8 : 0;
    sliderUpOffsetHoriz = users[userId].id;
  }

  // Data for sliderDown
  // Compare last user index to display and last possible user index
  const sliderDownActiveVert = offsetNum + 7 < users.length - 1;
  let sliderDownOffsetVert = null;
  if (sliderDownActiveVert) {
    sliderDownOffsetVert = users[offsetNum + 8].id;
  }

  const sliderDownActiveHoriz = offsetNum + 5 < users.length - 1;
  let sliderDownOffsetHoriz = null;
  if (sliderDownActiveHoriz) {
    sliderDownOffsetHoriz = users[offsetNum + 6].id;
  }

  preparedData.data.columns = [
    [
      {
        data: users[offsetNum] || false,
        visibility: 'both',
      },
      {
        data: users[offsetNum + 3] || false,
        visibility: 'vertical',
      },
      {
        data: users[offsetNum + 6] || false,
        visibility: 'vertical',
      },
    ],
    [
      // slider-up
      {
        data: {
          type: 'slider-up',
          active: Boolean(sliderUpActive),
          params: {
            offset: sliderUpOffsetVert,
          },
        },
        visibility: 'vertical',
      },
      {
        data: users[offsetNum + 1] || false,
        visibility: 'both',
      },
      {
        data: users[offsetNum + 4] || false,
        visibility: 'both',
      },
      // slider-down
      {
        data: {
          type: 'slider-down',
          active: sliderDownActiveVert,
          params: {
            offset: sliderDownOffsetVert,
          },
        },
        visibility: 'vertical',
      },
    ],
    [
      // slider-up
      {
        data: {
          type: 'slider-up',
          active: Boolean(sliderUpActive),
          params: {
            offset: sliderUpOffsetHoriz,
          },
        },
        visibility: 'horizontal',
      },
      // slider-down
      {
        data: {
          type: 'slider-down',
          active: sliderDownActiveHoriz,
          params: {
            offset: sliderDownOffsetHoriz,
          },
        },
        visibility: 'horizontal',
      },
    ],
    [
      {
        data: users[offsetNum + 2] || false,
        visibility: 'both',
      },
      {
        data: users[offsetNum + 5] || false,
        visibility: 'both',
      },
      {
        data: users[offsetNum + 7] || false,
        visibility: 'vertical',
      },
    ],
    [
      {
        data: users[offsetNum + 3] || false,
        visibility: 'horizontal',
      },
    ],
  ];

  return preparedData;
}

;// CONCATENATED MODULE: ./src/js/activity/prepareActivityData.js
function copyDepth2(arr) {
  const newArr = [];
  arr.forEach((item) => newArr.push(item.slice()));

  return newArr;
}

function getIntervals(max) {
  const intInterval = Math.floor(max / 3);
  return [0, intInterval, 2 * intInterval, max];
}

function getIntervalIx(item, intervals) {
  let intervalIx = 0;
  for (let curIntervalIx = 0; curIntervalIx < intervals.length; curIntervalIx += 1) {
    if (item > intervals[curIntervalIx]) intervalIx += 1;
  }

  return intervalIx;
}

function simplifyMap(map, intervals) {
  const heatMapValues = ['min', 'mid', 'max', 'extra'];
  const simplifiedMap = [];

  for (let dayIx = 0; dayIx < map.length; dayIx += 1) {
    simplifiedMap.push([]);
    for (let hourIx = 0; hourIx < map[dayIx].length; hourIx += 1) {
      const valueIndex = getIntervalIx(map[dayIx][hourIx], intervals);
      simplifiedMap[dayIx].push(heatMapValues[valueIndex]);
    }
  }

  return simplifiedMap;
}

function beautifyIntervals(intervals) {
  return intervals.map(
    (item, ix) => {
      let curIntervalStart = 0;
      if (ix !== 0) {
        curIntervalStart = intervals[ix - 1] + 1;
      }

      if (curIntervalStart === item) {
        return `${item}`;
      }
      return `${curIntervalStart} — ${item}`;
    },
  );
}

// Main function
function prepareActivityData(data) {
  const preparedData = {
    data: {
      title: data.title,
      subtitle: data.subtitle,
    },
  };

  // Compute intervals
  let heatMap = copyDepth2(Object.values(data.data));
  let maxPerHour;
  for (let dayIx = 0; dayIx < heatMap.length; dayIx += 1) {
    for (let hourIx = 0; hourIx < heatMap[dayIx].length; hourIx += 1) {
      if (typeof maxPerHour === 'undefined') {
        maxPerHour = heatMap[dayIx][hourIx];
      } else {
        maxPerHour = Math.max(maxPerHour, heatMap[dayIx][hourIx]);
      }
    }
  }

  let intervals = getIntervals(maxPerHour);

  heatMap = simplifyMap(heatMap, intervals);
  preparedData.data.heatMap = heatMap;

  intervals = beautifyIntervals(intervals);
  preparedData.data.intervals = intervals;

  // Same actions for reduced heat map
  let reducedHeatMap = copyDepth2(Object.values(data.data));
  let maxPerTwoHour;
  for (let dayIx = 0; dayIx < reducedHeatMap.length; dayIx += 1) {
    for (let hourIx = reducedHeatMap[dayIx].length - 1; hourIx > 0; hourIx -= 2) {
      const newItem = reducedHeatMap[dayIx][hourIx] + reducedHeatMap[dayIx][hourIx - 1];

      if (typeof maxPerTwoHour === 'undefined') {
        maxPerTwoHour = newItem;
      } else {
        maxPerTwoHour = Math.max(maxPerTwoHour, newItem);
      }

      reducedHeatMap[dayIx].splice(hourIx - 1, 2, newItem);
    }
  }

  let reducedIntervals = getIntervals(maxPerTwoHour);

  reducedHeatMap = simplifyMap(reducedHeatMap, reducedIntervals);
  preparedData.data.reducedHeatMap = reducedHeatMap;

  reducedIntervals = beautifyIntervals(reducedIntervals);
  preparedData.data.reducedIntervals = reducedIntervals;

  return preparedData;
}

;// CONCATENATED MODULE: ./src/js/renderTemplate.js









function renderTemplate(alias, data) {
  let renderedTemplate;
  let preparedData;

  switch (alias) {
    case 'leaders':
      renderedTemplate = leaders_default()({ data });
      break;
    case 'vote':
      preparedData = prepareVoteData(data);
      renderedTemplate = vote_default()(preparedData);
      break;
    case 'chart':
      renderedTemplate = chart_default()({ data });
      break;
    case 'diagram':
      renderedTemplate = diagram_default()({ data });
      break;
    case 'activity':
      preparedData = prepareActivityData(data);
      renderedTemplate = activity_default()(preparedData);
      break;
    default:
      throw new Error('Invalid template alias');
  }

  return renderedTemplate;
}

window.renderTemplate = renderTemplate;

;// CONCATENATED MODULE: ./src/js/queryManagement.js






function manageQuery() {
  const queryString = window.location.search;
  const queryStringParser = (str) => str.replace('?', '').split('&').map((item) => item.split('='));
  const parsedQueryString = queryStringParser(queryString);

  const slide = parsedQueryString.find((item) => item[0] === 'slide');
  const theme = parsedQueryString.find((item) => item[0] === 'theme');

  let neededDataIndex;
  if (slide && slide[1] < 12 && slide[1] > 0) {
    neededDataIndex = slide[1] - 1;
  } else {
    neededDataIndex = 0;
  }

  document.body.innerHTML = renderTemplate(data_namespaceObject[neededDataIndex].alias,
    data_namespaceObject[neededDataIndex].data);

  const link = document.createElement('link');
  link.rel = 'icon';
  if (theme && theme[1] === 'light') {
    link.href = favicon_light;
  } else {
    link.href = favicon_dark;
  }
  document.head.append(link);

  window.postMessage('slideLoaded', window.location.href);
}

;// CONCATENATED MODULE: ./src/js/vote/selectUser.js
function getPeopleCardEmoji(elements) {
  const tmp = Array.prototype.find.call(
    elements,
    (item) => item.classList.contains('people-card__img-wrapper'),
  );
  return Array.prototype.find.call(
    tmp.children,
    (item) => item.classList.contains('people-card__emoji'),
  );
}

function selectUser(event) {
  const oldSelected = document.querySelector('.people-card_selected');
  if (oldSelected) {
    oldSelected.classList.remove('people-card_selected');

    getPeopleCardEmoji(oldSelected.children).classList.add('people-card__emoji_hidden');
  }

  const target = event.path.find((item) => item.classList.contains('people-card'));
  if (target !== oldSelected) {
    target.classList.toggle('people-card_selected');

    getPeopleCardEmoji(target.children).classList.toggle('people-card__emoji_hidden');
  }
}

;// CONCATENATED MODULE: ./src/js/vote/stretchyMargins.js
let startPositionY;
let initialVotingAreaHeight;
let minVerticalHeight;
let minHorizontalHeight;
let scrolling = true;
let newHeight;

function touchStart(event) {
  const peopleCardHeight = document.querySelector('.people-card').clientHeight;
  minHorizontalHeight = peopleCardHeight * 2;
  minVerticalHeight = peopleCardHeight * 3;

  if (!initialVotingAreaHeight) {
    initialVotingAreaHeight = document.querySelector('.voting-area').clientHeight;
  }

  const votingArea = document.querySelector('.voting-area');
  votingArea.setAttribute('style', `height: ${initialVotingAreaHeight}px`);

  if (event.type === 'mousedown') {
    startPositionY = event.clientY;
  } else if (event.type === 'touchstart') {
    startPositionY = event.touches[0].clientY;
  }
}

function touchMove(event) {
  const clientWidth = window.innerWidth;
  const clientHeight = window.innerHeight;
  const aspectRatio = clientWidth / clientHeight;

  let currentPositionY;
  if (event.type === 'mousemove') {
    currentPositionY = event.clientY;
  } else if (event.type === 'touchmove') {
    currentPositionY = event.touches[0].clientY;
  }

  const maxScrollY = document.documentElement.scrollHeight - clientHeight;
  const scrollDown = window.scrollY === 0 && currentPositionY > startPositionY;
  const scrollUp = Math.round(window.scrollY) === Math.round(maxScrollY)
    && currentPositionY < startPositionY;

  if (scrollDown || scrollUp || newHeight) {
    scrolling = false;
  }

  if (!startPositionY || scrolling) return;

  const differenceY = startPositionY - currentPositionY;
  const heightMultiplier = differenceY / clientHeight;

  const heightDelta = initialVotingAreaHeight * heightMultiplier;
  if (window.scrollY) {
    newHeight = initialVotingAreaHeight + heightDelta;
  } else {
    newHeight = initialVotingAreaHeight - heightDelta;
  }

  if (aspectRatio >= 1 && newHeight < minHorizontalHeight) {
    newHeight = minHorizontalHeight;
  } else if (aspectRatio < 1 && newHeight < minVerticalHeight) {
    newHeight = minVerticalHeight;
  } else if (newHeight > 1.5 * initialVotingAreaHeight) {
    newHeight = 1.5 * initialVotingAreaHeight;
  }

  const votingArea = document.querySelector('.voting-area');
  votingArea.setAttribute('style', `height: ${newHeight}px`);

  const slide = document.querySelector('.slide');
  slide.setAttribute('style', 'overflow: hidden');
}

function touchEnd() {
  scrolling = true;
  newHeight = null;
  startPositionY = null;
  const votingArea = document.querySelector('.voting-area');
  votingArea.setAttribute('style', `transition: height 0.15s ease-in-out; height: ${initialVotingAreaHeight}px`);

  setTimeout(() => {
    const slide = document.querySelector('.slide');
    slide.removeAttribute('style');
  }, 200);
}

function voteSlideResize() {
  const main = document.querySelector('main');
  if (!main || main.dataset.slide !== 'vote') return;

  initialVotingAreaHeight = null;
  const votingArea = document.querySelector('.voting-area');
  votingArea.removeAttribute('style');
}

;// CONCATENATED MODULE: ./src/js/vote/initVoteSlide.js



function initVoteSlide() {
  const main = document.querySelector('main');
  if (!main || main.dataset.slide !== 'vote') return;

  const peopleCards = document.querySelectorAll('.people-card');
  for (let i = 0; i < peopleCards.length; i += 1) {
    peopleCards[i].addEventListener('click', selectUser);
  }

  window.addEventListener('touchstart', touchStart);
  window.addEventListener('mousedown', touchStart);

  window.addEventListener('touchmove', touchMove);
  window.addEventListener('mousemove', touchMove);

  window.addEventListener('touchend', touchEnd);
  window.addEventListener('mouseup', touchEnd);
}

;// CONCATENATED MODULE: ./src/js/chart/alignChartBlock.js
function alignChartBlock() {
  const main = document.querySelector('main');
  if (!main || main.dataset.slide !== 'chart') return;

  const chartBlock = document.querySelector('.chart-block');
  const clientWidth = window.innerWidth;
  const clientHeight = window.innerHeight;

  if (chartBlock.scrollWidth > 0.95 * clientWidth && clientWidth / clientHeight > 1) {
    chartBlock.setAttribute('style', 'justify-content: flex-end; padding-right: 2.5vw;');
  } else {
    chartBlock.removeAttribute('style');
  }
}

;// CONCATENATED MODULE: ./src/js/chart/chart.js


let startPositionX;
let initialMargin;

function chart_touchStart(event) {
  if (event.type === 'mousedown') {
    const chartBlock = document.querySelector('.chart-block');
    chartBlock.style.cursor = 'grabbing';
    startPositionX = event.clientX;
  } else if (event.type === 'touchstart') {
    startPositionX = event.touches[0].clientX;
  }

  const chartBlockItem = document.querySelector('.chart-block__item');
  initialMargin = parseFloat(window.getComputedStyle(chartBlockItem).getPropertyValue('margin-right'));
}

function chart_touchMove(event) {
  if (!startPositionX) return;

  const clientWidth = window.innerWidth;
  const clientHeight = window.innerHeight;
  const aspectRatio = clientWidth / clientHeight;

  let currentPositionX;
  if (event.type === 'mousemove') {
    currentPositionX = event.clientX;
  } else if (event.type === 'touchmove') {
    currentPositionX = event.touches[0].clientX;
  }

  const differenceX = currentPositionX - startPositionX;
  const marginMultiplier = differenceX / clientWidth;
  let marginDelta = initialMargin * marginMultiplier;
  if (aspectRatio >= 1 && clientWidth / 2 < startPositionX) {
    marginDelta = -marginDelta;
  }

  const newMargin = initialMargin - marginDelta;

  let minMargin = window.getComputedStyle(document.documentElement).getPropertyValue('font-size');
  minMargin = 0.5 * parseFloat(minMargin);
  if (newMargin > minMargin) {
    const chartBlockItems = document.querySelectorAll('.chart-block__item');
    Array.prototype.forEach.call(
      chartBlockItems,
      (item, index) => {
        if (index + 1 !== chartBlockItems.length || aspectRatio < 1) {
          item.setAttribute('style', `margin-right: ${newMargin}px`);
        }
      },
    );
  }
}

function chart_touchEnd(event) {
  if (event.type === 'mouseup') {
    const chartBlock = document.querySelector('.chart-block');
    chartBlock.style.cursor = 'grab';
  }

  startPositionX = null;
  const chartBlockItems = document.querySelectorAll('.chart-block__item');
  Array.prototype.forEach.call(chartBlockItems, (item) => {
    item.setAttribute(
      'style',
      'transition: margin-right 0.15s ease-in-out',
    );
  });

  chartBlockItems[0].ontransitionend = alignChartBlock;
}

function initChartSlide() {
  const main = document.querySelector('main');
  if (!main || main.dataset.slide !== 'chart') return;

  const chartBlock = document.querySelector('.chart-block');
  chartBlock.addEventListener('touchstart', chart_touchStart);
  chartBlock.addEventListener('mousedown', chart_touchStart);

  chartBlock.addEventListener('touchmove', chart_touchMove);
  chartBlock.addEventListener('mousemove', chart_touchMove);

  chartBlock.addEventListener('touchend', chart_touchEnd);
  chartBlock.addEventListener('mouseup', chart_touchEnd);

  alignChartBlock();
}

;// CONCATENATED MODULE: ./src/index.js









window.onload = () => {
  manageQuery();
};

// This is needed for executing js after slide loading
window.addEventListener('message', (event) => {
  const possibleMessages = ['slideLoaded'];
  if (!possibleMessages.includes(event.data)) return;

  initVoteSlide();
  initChartSlide();
});

window.onresize = () => {
  voteSlideResize();
  alignChartBlock();
};


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/";
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module doesn't tell about it's top-level declarations so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(770);
/******/ 	
/******/ })()
;