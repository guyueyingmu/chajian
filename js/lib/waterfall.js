(function(t,i,e,s){"use strict";function n(i,e){this.$element=t(i),this.options=t.extend(!0,{},r,e),this.colHeightArray=[],this.styleQueue=[],this._init()}var o=t(i),a="waterfall",r={itemCls:"waterfall-item",prefix:"waterfall",fitWidth:!0,colWidth:240,gutterWidth:10,gutterHeight:10,align:"center",minCol:1,maxCol:s,maxPage:s,bufferPixel:-50,containerStyle:{position:"relative"},resizable:!0,isFadeIn:!1,isAnimated:!1,animationOptions:{},isAutoPrefill:!0,checkImagesLoaded:!0,path:s,dataType:"json",params:{},headers:{},loadingMsg:'<div style="text-align:center;padding:10px 0; color:#999;"><img src="data:image/gif;base64,R0lGODlhEAALAPQAAP///zMzM+Li4tra2u7u7jk5OTMzM1hYWJubm4CAgMjIyE9PT29vb6KiooODg8vLy1JSUjc3N3Jycuvr6+Dg4Pb29mBgYOPj4/X19cXFxbOzs9XV1fHx8TMzMzMzMzMzMyH5BAkLAAAAIf4aQ3JlYXRlZCB3aXRoIGFqYXhsb2FkLmluZm8AIf8LTkVUU0NBUEUyLjADAQAAACwAAAAAEAALAAAFLSAgjmRpnqSgCuLKAq5AEIM4zDVw03ve27ifDgfkEYe04kDIDC5zrtYKRa2WQgAh+QQJCwAAACwAAAAAEAALAAAFJGBhGAVgnqhpHIeRvsDawqns0qeN5+y967tYLyicBYE7EYkYAgAh+QQJCwAAACwAAAAAEAALAAAFNiAgjothLOOIJAkiGgxjpGKiKMkbz7SN6zIawJcDwIK9W/HISxGBzdHTuBNOmcJVCyoUlk7CEAAh+QQJCwAAACwAAAAAEAALAAAFNSAgjqQIRRFUAo3jNGIkSdHqPI8Tz3V55zuaDacDyIQ+YrBH+hWPzJFzOQQaeavWi7oqnVIhACH5BAkLAAAALAAAAAAQAAsAAAUyICCOZGme1rJY5kRRk7hI0mJSVUXJtF3iOl7tltsBZsNfUegjAY3I5sgFY55KqdX1GgIAIfkECQsAAAAsAAAAABAACwAABTcgII5kaZ4kcV2EqLJipmnZhWGXaOOitm2aXQ4g7P2Ct2ER4AMul00kj5g0Al8tADY2y6C+4FIIACH5BAkLAAAALAAAAAAQAAsAAAUvICCOZGme5ERRk6iy7qpyHCVStA3gNa/7txxwlwv2isSacYUc+l4tADQGQ1mvpBAAIfkECQsAAAAsAAAAABAACwAABS8gII5kaZ7kRFGTqLLuqnIcJVK0DeA1r/u3HHCXC/aKxJpxhRz6Xi0ANAZDWa+kEAA7" alt=""><br />Loading...</div>',state:{isDuringAjax:!1,isProcessingData:!1,isResizing:!1,isPause:!1,curPage:1},callbacks:{loadingStart:function(t){t.show()},loadingFinished:function(t,i){i?t.remove():t.fadeOut()},loadingError:function(t){t.html("Data load faild, please try again later.")},renderData:function(i,e){var s,n;return"json"===e||"jsonp"===e?(s=t("#waterfall-tpl").html(),n=Handlebars.compile(s),n(i)):i}},debug:!1};n.prototype={constructor:n,_debug:function(){!0===this.options.debug&&("undefined"!=typeof console&&"function"==typeof console.log?1===Array.prototype.slice.call(arguments).length&&"string"==typeof Array.prototype.slice.call(arguments)[0]?console.log(""+Array.prototype.slice.call(arguments)):console.log(Array.prototype.slice.call(arguments)):Function.prototype.bind||"undefined"==typeof console||"object"!=typeof console.log||Function.prototype.call.call(console.log,console,Array.prototype.slice.call(arguments)))},_init:function(t){var i=this.options,e=i.path;return this._setColumns(),this._initContainer(),this._resetColumnsHeightArray(),this.reLayout(t),e?(i.isAutoPrefill&&this._prefill(),i.resizable&&this._doResize(),this._doScroll(),s):(this._debug("Invalid path"),s)},_initContainer:function(){var i=this.options,e=i.prefix;t("body").css({overflow:"scroll"}),this.$element.css(this.options.containerStyle).addClass(e+"-container"),this.$element.after('<div id="'+e+'-loading">'+i.loadingMsg+'</div><div id="'+e+'-message" style="text-align:center;color:#999;"></div>'),this.$loading=t("#"+e+"-loading"),this.$message=t("#"+e+"-message")},_getColumns:function(){var t=this.options,i=t.fitWidth?this.$element.parent():this.$element,e="BODY"===i[0].tagName?i.width()-20:i.width(),s=t.colWidth,n=t.gutterWidth,o=t.minCol,a=t.maxCol,r=Math.floor(e/(s+n)),l=Math.max(r,o);return a?l>a?a:l:l},_setColumns:function(){this.cols=this._getColumns()},_getItems:function(t){var i=t.filter("."+this.options.itemCls).css({position:"absolute"});return i},_resetColumnsHeightArray:function(){var t,i=this.cols;for(this.colHeightArray.length=i,t=0;i>t;t++)this.colHeightArray[t]=0},layout:function(t,i){var e,s,n,o,a,r,l=this.options,h=this.options.isFadeIn?this._getItems(t).css({opacity:0}).animate({opacity:1}):this._getItems(t),A=this.options.isAnimated&&this.options.state.isResizing?"animate":"css",c=l.animationOptions,u=l.colWidth,g=l.gutterWidth,d=this.colHeightArray.length,p=l.align;for(this.$element.append(h),"center"===p?(e=(this.$element.width()-u*d-g*(d-1))/2,e=e>0?e:0):"left"===p?e=0:"right"===p&&(e=this.$element.width()-u*d-g*(d-1)),n=0,a=h.length;a>n;n++)this._placeItems(h[n],e);for(o=0,r=this.styleQueue.length;r>o;o++)s=this.styleQueue[o],s.$el[A](s.style,c);this.$element.height(Math.max.apply({},this.colHeightArray)),this.styleQueue=[],this.options.state.isResizing=!1,this.options.state.isProcessingData=!1,i&&i.call(h)},reLayout:function(t){var i=this.$element.find("."+this.options.itemCls);this._resetColumnsHeightArray(),this.layout(i,t)},_placeItems:function(i,e){var s,n,o=t(i),a=this.options,r=a.colWidth,l=a.gutterWidth,h=a.gutterHeight,A=this.colHeightArray,c=A.length,u=Math.min.apply({},A),g=t.inArray(u,A);s=o.hasClass(a.prefix+"-item-fixed-left")?0:o.hasClass(a.prefix+"-item-fixed-right")?c>1?c-1:0:g,n={left:(r+l)*s+e,top:A[s]},this.styleQueue.push({$el:o,style:n}),A[s]+=o.outerHeight()+h},prepend:function(t,i){this.$element.prepend(t),this.reLayout(i)},append:function(t,i){this.$element.append(t),this.reLayout(i)},removeItems:function(t,i){this.$element.find(t).remove(),this.reLayout(i)},option:function(i,e){t.isPlainObject(i)&&(this.options=t.extend(!0,this.options,i),"function"==typeof e&&e(),this._init())},pause:function(t){this.options.state.isPause=!0,"function"==typeof t&&t()},resume:function(t){this.options.state.isPause=!1,"function"==typeof t&&t()},_requestData:function(i){var e,n=this,o=this.options,a=o.maxPage,r=o.state.curPage++,l=o.path,h=o.dataType,A=o.params,c=o.headers;return a!==s&&r>a?(o.state.isBeyondMaxPage=!0,o.callbacks.loadingFinished(this.$loading,o.state.isBeyondMaxPage),s):(e="function"==typeof l?l(r):l.join(r),this._debug("heading into ajax",e+t.param(A)),o.callbacks.loadingStart(this.$loading),o.state.isDuringAjax=!0,o.state.isProcessingData=!0,t.ajax({url:e,data:A,headers:c,dataType:h,success:function(t){n._handleResponse(t,i),n.options.state.isDuringAjax=!1},error:function(){n._responeseError("error")}}),s)},_handleResponse:function(i,e){var s=this,n=this.options,o=t.trim(n.callbacks.renderData(i,n.dataType)),a=t(o),r=n.checkImagesLoaded;r?a.imagesLoaded(function(){s.append(a,e),s.options.callbacks.loadingFinished(s.$loading,s.options.state.isBeyondMaxPage)}):(s.append(a,e),s.options.callbacks.loadingFinished(s.$loading,s.options.state.isBeyondMaxPage))},_responeseError:function(t){this.$loading.hide(),this.options.callbacks.loadingError(this.$message,t),"end"!==t&&"error"!==t&&(t="unknown"),this._debug("Error",t)},_nearbottom:function(){var t=this.options,i=Math.min.apply({},this.colHeightArray),e=o.scrollTop()+o.height()-this.$element.offset().top-i;return this._debug("math:",e),e>t.bufferPixel},_prefill:function(){this.$element.height()<=o.height()&&this._scroll()},_scroll:function(){var t=this.options,i=t.state,e=this;i.isProcessingData||i.isDuringAjax||i.isInvalidPage||i.isPause||this._nearbottom()&&this._requestData(function(){setTimeout(function(){e._scroll()},100)})},_doScroll:function(){var t,i=this;$("#dyp779946-fix-full").bind("scroll",function(){t&&clearTimeout(t),t=setTimeout(function(){i._scroll()},100)})},_resize:function(){var t=this.cols,i=this._getColumns();(i!==t||"left"!==this.options.align)&&(this.options.state.isResizing=!0,this.cols=i,this.reLayout(),this._prefill())},_doResize:function(){var t,i=this;o.bind("resize",function(){t&&clearTimeout(t),t=setTimeout(function(){i._resize()},100)})}},t.fn[a]=function(i){if("string"==typeof i){var e=Array.prototype.slice.call(arguments,1);this.each(function(){var n=t.data(this,"plugin_"+a);return n?t.isFunction(n[i])&&"_"!==i.charAt(0)?(n[i].apply(n,e),s):(n._debug('no such method "'+i+'"'),s):(n._debug("instance is not initialization"),s)})}else this.each(function(){t.data(this,"plugin_"+a)||t.data(this,"plugin_"+a,new n(this,i))});return this}})(jQuery,window,document),function(t,i){"use strict";var e="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";t.fn.imagesLoaded=function(s){function n(){var i=t(u),e=t(g);l&&(g.length?l.reject(A,i,e):l.resolve(A)),t.isFunction(s)&&s.call(r,A,i,e)}function o(t){a(t.target,"error"===t.type)}function a(i,s){i.src!==e&&-1===t.inArray(i,c)&&(c.push(i),s?g.push(i):u.push(i),t.data(i,"imagesLoaded",{isBroken:s,src:i.src}),h&&l.notifyWith(t(i),[s,A,t(u),t(g)]),A.length===c.length&&(setTimeout(n),A.unbind(".imagesLoaded",o)))}var r=this,l=t.isFunction(t.Deferred)?t.Deferred():0,h=t.isFunction(l.notify),A=r.find("img").add(r.filter("img")),c=[],u=[],g=[];return t.isPlainObject(s)&&t.each(s,function(t,i){"callback"===t?s=i:l&&l[t](i)}),A.length?A.bind("load.imagesLoaded error.imagesLoaded",o).each(function(s,n){var o=n.src,r=t.data(n,"imagesLoaded");return r&&r.src===o?(a(n,r.isBroken),i):n.complete&&n.naturalWidth!==i?(a(n,0===n.naturalWidth||0===n.naturalHeight),i):((n.readyState||n.complete)&&(n.src=e,n.src=o),i)}):n(),l?l.promise(r):r}}(jQuery);