/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

var _extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a},__=wp.i18n.__,registerBlockType=wp.blocks.registerBlockType,Fragment=wp.element.Fragment,_wp$components=wp.components,PanelBody=_wp$components.PanelBody,Toolbar=_wp$components.Toolbar,IconButton=_wp$components.IconButton,_wp$editPost=wp.editPost,PluginSidebar=_wp$editPost.PluginSidebar,PluginSidebarMoreMenuItem=_wp$editPost.PluginSidebarMoreMenuItem,registerPlugin=wp.plugins.registerPlugin,BlockControls=wp.editor.BlockControls,addFilter=wp.hooks.addFilter,Component=function(){return wp.element.createElement(Fragment,null,wp.element.createElement(PluginSidebarMoreMenuItem,{target:"sidebar-name"},"Highlight Blocks Sidebar"),wp.element.createElement(PluginSidebar,{name:"sidebar-name",title:"Highlight Blocks Sidebar"},wp.element.createElement(PanelBody,null,wp.element.createElement("button",{className:"button button-primary md-highlight-blocks"},__("Highlight Blocks")))))};// Add Block Control for Highlighted Box
registerPlugin("plugin-name",{icon:"schedule",render:Component}),addFilter("editor.BlockEdit","advgb/customBlockControl",function(a){return function(b){var c=b.isSelected;return[wp.element.createElement(a,_extends({key:"block-edit-custom-control"},b)),c&&wp.element.createElement(Fragment,null,wp.element.createElement(BlockControls,null,wp.element.createElement(Toolbar,null,wp.element.createElement(IconButton,{className:"components-toolbar__control md-highlight-blocks-toolbar",icon:"schedule",label:__("Highlight Blocks")}))))]}});

/***/ })
/******/ ]);