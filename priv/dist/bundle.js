!function(t){var e={};function n(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(o,i,function(e){return t[e]}.bind(null,i));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";n.r(e);var o,i,r=function(t){return document.querySelector(t)},u=function(t,e,n){return t>=e&&t<=n},c=function(t,e,n){return Math.max(Math.min(n,t),e)},a=function(t,e,n,o){return new(n||(n=Promise))((function(i,r){function u(t){try{a(o.next(t))}catch(t){r(t)}}function c(t){try{a(o.throw(t))}catch(t){r(t)}}function a(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(u,c)}a((o=o.apply(t,e||[])).next())}))},s=function(t,e){var n,o,i,r,u={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return r={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function c(r){return function(c){return function(r){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,o&&(i=2&r[0]?o.return:r[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,r[1])).done)return i;switch(o=0,i&&(r=[2&r[0],i.value]),r[0]){case 0:case 1:i=r;break;case 4:return u.label++,{value:r[1],done:!1};case 5:u.label++,o=r[1],r=[0];continue;case 7:r=u.ops.pop(),u.trys.pop();continue;default:if(!(i=u.trys,(i=i.length>0&&i[i.length-1])||6!==r[0]&&2!==r[0])){u=0;continue}if(3===r[0]&&(!i||r[1]>i[0]&&r[1]<i[3])){u.label=r[1];break}if(6===r[0]&&u.label<i[1]){u.label=i[1],i=r;break}if(i&&u.label<i[2]){u.label=i[2],u.ops.push(r);break}i[2]&&u.ops.pop(),u.trys.pop();continue}r=e.call(t,u)}catch(t){r=[6,t],o=0}finally{n=i=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,c])}}},f=function(){function t(t,e,n,o){var i=this;void 0===e&&(e=400),void 0===n&&(n=300),void 0===o&&(o=!1),this.bindKeyDown=function(t,e){i.keyDownActions[t]=e},this.unBindKey=function(t){i.keyDownActions[t]=null,i.keyPressActions[t]=null},this.bindKeyPress=function(t,e){i.keyPressActions[t]=e},this.loadImg=function(t){return a(i,void 0,void 0,(function(){var e,n,o,i;return s(this,(function(r){switch(r.label){case 0:for(i in e=[],n=function(n){var i=function(t){var e=new Image;return e.src=t,e}(t[n]);o.images[n]=i,e.push(new Promise((function(t){return i.onload=t})))},o=this,t)n(i);return[4,Promise.all(e)];case 1:return r.sent(),[2]}}))}))},this.runloop=function(){for(var t in i.keyPressActions)i.keydown[t]&&i.keyPressActions[t]&&i.keyPressActions[t]();i.update(),i.context.clearRect(0,0,i.canvas.width,i.canvas.height),i.draw(),setTimeout(i.runloop,1e3/i.fps)},this.fps=t,this.width=e,this.height=n,this.debug=o,this.images={},this.scene=null,this.keyDownActions={},this.keyPressActions={},this.keydown={},this.canvas=r("#id-canvas"),this.context=this.canvas.getContext("2d"),o&&r("#id-input-speed").addEventListener("input",(function(t){var e=t.target;i.fps=Number(e.value)}))}return t.prototype.drawImage=function(t){this.context.drawImage(t.image,t.x,t.y)},t.prototype.drawImagePart=function(t,e,n,o,i){this.context.drawImage(t.image,e,n,o,i,t.x,t.y,o,i)},t.prototype.drawImages=function(t){var e=this;t.forEach((function(t){return e.drawImage(t)}))},t.prototype.update=function(){this.scene.update()},t.prototype.draw=function(){this.scene.draw()},t.prototype.runWithScene=function(t){var e=this;window.addEventListener("keydown",(function(t){var n=t.key;e.keyDownActions[n]&&e.keyDownActions[n](),e.keydown[n]=!0})),window.addEventListener("keyup",(function(t){return e.keydown[t.key]=!1})),this.scene=t,setTimeout(this.runloop,1e3/this.fps)},t.prototype.replaceScene=function(t){this.scene=t},t}(),l=function(){function t(t){this.game=t}return t.prototype.draw=function(){},t.prototype.update=function(){},t}(),h=function(t,e){var n=this;this.fire=function(){n.fired=!0},this.stop=function(){n.fired=!1},this.hasPoint=function(t,e){var o=t>=n.x&&t<=n.x+n.w,i=e>=n.y&&e<=n.y+n.h;return o&&i},this.canDrag=function(){n.game.canvas.addEventListener("mousedown",(function(t){var e=t.offsetX,o=t.offsetY;n.hasPoint(e,o)&&(n.enableDrag=!0)})),n.game.canvas.addEventListener("mousemove",(function(t){n.enableDrag&&(n.x=t.offsetX,n.y=t.offsetY)})),n.game.canvas.addEventListener("mouseup",(function(){return n.enableDrag=!1}))},this.collide=function(t){return function(t,e){return(u(t.x,e.x,e.x+e.w)||u(e.x,t.x,t.x+t.w))&&(u(t.y,e.y,e.y+e.h)||u(e.y,t.y,t.y+t.h))}(n,t)},this.move=function(){},this.moveX=function(t){n.x=t},this.moveY=function(t){n.y=t},this.moveUp=function(){n.moveY(n.y-n.speed)},this.moveDown=function(){n.moveY(n.y+n.speed)},this.moveLeft=function(){n.moveX(n.x-n.speed)},this.moveRight=function(){n.moveX(n.x+n.speed)},this.moveXInSide=function(t){n.x=c(t,0,n.game.width-n.w)},this.moveYInSide=function(t){n.y=c(t,0,n.game.height-n.w)},this.moveUpInside=function(){n.moveYInSide(n.y-n.speed)},this.moveDownInside=function(){n.moveYInSide(n.y+n.speed)},this.moveLeftInside=function(){n.moveXInSide(n.x-n.speed)},this.moveRightInside=function(){n.moveXInSide(n.x+n.speed)},this.draw=function(){n.game.drawImage(n)},this.isOut=function(){return n.x<0||n.x>n.game.width||n.y<0||n.y>n.game.height},this.game=t,this.name=e,this.image=t.images[e],this.w=this.image.width,this.h=this.image.height,this.x=0,this.y=0,this.speed=0,this.fired=!1,this.enableDrag=!1},d=(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});!function(t){t.down="down",t.up="up",t.left="left",t.right="right"}(i||(i={}));var p=function(t){function e(e,n){var o=t.call(this,e,"people")||this;return o.mapDirectPos=function(){var t=o.direction;return t===i.down?[3,4]:t===i.left?[3,53]:t===i.right?[3,101]:[3,149]},o.draw=function(){var t=o.mapDirectPos(),e=t[0],n=t[1];o.game.drawImagePart(o,e,n,o.w,o.h)},o.game=e,o.scene=n,o.w=27,o.h=42,o.x=150,o.y=400,o.speed=15,o.direction=i.down,e.bindKeyPress("a",(function(){o.direction=i.left,o.moveLeftInside()})),e.bindKeyPress("d",(function(){o.direction=i.right,o.moveRightInside()})),e.bindKeyPress("w",(function(){o.direction=i.up,o.moveUpInside()})),e.bindKeyPress("s",(function(){o.direction=i.down,o.moveDownInside()})),o}return d(e,t),e}(h),y=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(e,n)};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),v=function(t){function e(e){var n=t.call(this,e)||this;return n.toEnd=function(){n.gameover=!0},n.drawBackground=function(){var t=n.game.context;t.fillStyle="#ebdcc7",t.fillRect(0,0,n.game.width,n.game.height)},n.draw=function(){n.drawBackground(),n.sprites.forEach((function(t){return t.draw()}))},n.update=function(){},n.gamestart=!1,n.gameover=!1,n.sprites=[new p(n.game,n)],n}return y(e,t),e}(l),m=function(t,e,n,o){return new(n||(n=Promise))((function(i,r){function u(t){try{a(o.next(t))}catch(t){r(t)}}function c(t){try{a(o.throw(t))}catch(t){r(t)}}function a(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(u,c)}a((o=o.apply(t,e||[])).next())}))},w=function(t,e){var n,o,i,r,u={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return r={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function c(r){return function(c){return function(r){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,o&&(i=2&r[0]?o.return:r[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,r[1])).done)return i;switch(o=0,i&&(r=[2&r[0],i.value]),r[0]){case 0:case 1:i=r;break;case 4:return u.label++,{value:r[1],done:!1};case 5:u.label++,o=r[1],r=[0];continue;case 7:r=u.ops.pop(),u.trys.pop();continue;default:if(!(i=u.trys,(i=i.length>0&&i[i.length-1])||6!==r[0]&&2!==r[0])){u=0;continue}if(3===r[0]&&(!i||r[1]>i[0]&&r[1]<i[3])){u.label=r[1];break}if(6===r[0]&&u.label<i[1]){u.label=i[1],i=r;break}if(i&&u.label<i[2]){u.label=i[2],u.ops.push(r);break}i[2]&&u.ops.pop(),u.trys.pop();continue}r=e.call(t,u)}catch(t){r=[6,t],o=0}finally{n=i=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,c])}}};!function(){m(this,void 0,void 0,(function(){var t,e,n;return w(this,(function(o){switch(o.label){case 0:return t={people:"img/people.png"},[4,(e=new f(30,800,600,!0)).loadImg(t)];case 1:return o.sent(),n=new v(e),e.runWithScene(n),[2]}}))}))}()}]);