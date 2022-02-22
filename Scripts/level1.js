/*! For license information please see level1.js.LICENSE.txt */
(()=>{"use strict";var e={388:(e,t,r)=>{r.r(t),r.d(t,{Properties:()=>n,VariableDescriptor:()=>o,bootstrapExtra:()=>N,findLayerBoundaries:()=>c,findLayersBoundaries:()=>p,getAllVariables:()=>i,getLayersMap:()=>l,initDoors:()=>R,initPropertiesTemplates:()=>T,initVariableActionLayer:()=>F});class n{constructor(e){this.properties=null!=e?e:[]}get(e){const t=this.properties.filter((t=>t.name===e)).map((e=>e.value));if(t.length>1)throw new Error('Expected only one property to be named "'+e+'"');if(0!==t.length)return t[0]}getString(e){return this.getByType(e,"string")}getNumber(e){return this.getByType(e,"number")}getBoolean(e){return this.getByType(e,"boolean")}getByType(e,t){const r=this.get(e);if(void 0!==r){if(typeof r!==t)throw new Error('Expected property "'+e+'" to have type "'+t+'"');return r}}mustGetString(e){return this.mustGetByType(e,"string")}mustGetNumber(e){return this.mustGetByType(e,"number")}mustGetBoolean(e){return this.mustGetByType(e,"boolean")}mustGetByType(e,t){const r=this.get(e);if(void 0===r)throw new Error('Property "'+e+'" is missing');if(typeof r!==t)throw new Error('Expected property "'+e+'" to have type "'+t+'"');return r}getType(e){const t=this.properties.filter((t=>t.name===e)).map((e=>e.type));if(t.length>1)throw new Error('Expected only one property to be named "'+e+'"');if(0!==t.length)return t[0]}}class o{constructor(e){this.name=e.name,this.x=e.x,this.y=e.y,this.properties=new n(e.properties)}get isReadable(){const e=this.properties.getString("readableBy");return!e||WA.player.tags.includes(e)}get isWritable(){const e=this.properties.getString("writableBy");return!e||WA.player.tags.includes(e)}}async function i(){const e=await WA.room.getTiledMap(),t=new Map;return s(e.layers,t),t}function s(e,t){for(const r of e)if("objectgroup"===r.type)for(const e of r.objects)"variable"===e.type&&t.set(e.name,new o(e));else"group"===r.type&&s(r.layers,t)}let a;async function l(){return void 0===a&&(a=async function(){return function(e){const t=new Map;return u(e.layers,"",t),t}(await WA.room.getTiledMap())}()),a}function u(e,t,r){for(const n of e)"group"===n.type?u(n.layers,t+n.name+"/",r):(n.name=t+n.name,r.set(n.name,n))}function c(e){let t=1/0,r=1/0,n=0,o=0;const i=e.data;if("string"==typeof i)throw new Error("Unsupported tile layer data stored as string instead of CSV");for(let s=0;s<e.height;s++)for(let a=0;a<e.width;a++)0!==i[a+s*e.width]&&(t=Math.min(t,a),o=Math.max(o,a),r=Math.min(r,s),n=Math.max(n,s));return{top:r,left:t,right:o+1,bottom:n+1}}function p(e){let t=1/0,r=1/0,n=0,o=0;for(const i of e){const e=c(i);e.left<t&&(t=e.left),e.top<r&&(r=e.top),e.right>o&&(o=e.right),e.bottom>n&&(n=e.bottom)}return{top:r,left:t,right:o,bottom:n}}var h=Object.prototype.toString,f=Array.isArray||function(e){return"[object Array]"===h.call(e)};function g(e){return"function"==typeof e}function d(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function m(e,t){return null!=e&&"object"==typeof e&&t in e}var v=RegExp.prototype.test,b=/\S/;var y={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"},_=/\s*/,A=/\s+/,w=/\s*=/,W=/\s*\}/,L=/#|\^|\/|>|\{|&|=|!/;function k(e){this.string=e,this.tail=e,this.pos=0}function S(e,t){this.view=e,this.cache={".":this.view},this.parent=t}function E(){this.templateCache={_cache:{},set:function(e,t){this._cache[e]=t},get:function(e){return this._cache[e]},clear:function(){this._cache={}}}}k.prototype.eos=function(){return""===this.tail},k.prototype.scan=function(e){var t=this.tail.match(e);if(!t||0!==t.index)return"";var r=t[0];return this.tail=this.tail.substring(r.length),this.pos+=r.length,r},k.prototype.scanUntil=function(e){var t,r=this.tail.search(e);switch(r){case-1:t=this.tail,this.tail="";break;case 0:t="";break;default:t=this.tail.substring(0,r),this.tail=this.tail.substring(r)}return this.pos+=t.length,t},S.prototype.push=function(e){return new S(e,this)},S.prototype.lookup=function(e){var t,r,n,o=this.cache;if(o.hasOwnProperty(e))t=o[e];else{for(var i,s,a,l=this,u=!1;l;){if(e.indexOf(".")>0)for(i=l.view,s=e.split("."),a=0;null!=i&&a<s.length;)a===s.length-1&&(u=m(i,s[a])||(r=i,n=s[a],null!=r&&"object"!=typeof r&&r.hasOwnProperty&&r.hasOwnProperty(n))),i=i[s[a++]];else i=l.view[e],u=m(l.view,e);if(u){t=i;break}l=l.parent}o[e]=t}return g(t)&&(t=t.call(this.view)),t},E.prototype.clearCache=function(){void 0!==this.templateCache&&this.templateCache.clear()},E.prototype.parse=function(e,t){var r=this.templateCache,n=e+":"+(t||P.tags).join(":"),o=void 0!==r,i=o?r.get(n):void 0;return null==i&&(i=function(e,t){if(!e)return[];var r,n,o,i,s=!1,a=[],l=[],u=[],c=!1,p=!1,h="",g=0;function m(){if(c&&!p)for(;u.length;)delete l[u.pop()];else u=[];c=!1,p=!1}function y(e){if("string"==typeof e&&(e=e.split(A,2)),!f(e)||2!==e.length)throw new Error("Invalid tags: "+e);r=new RegExp(d(e[0])+"\\s*"),n=new RegExp("\\s*"+d(e[1])),o=new RegExp("\\s*"+d("}"+e[1]))}y(t||P.tags);for(var S,E,x,C,M,T,j=new k(e);!j.eos();){if(S=j.pos,x=j.scanUntil(r))for(var U=0,V=x.length;U<V;++U)i=C=x.charAt(U),function(e,t){return v.call(e,t)}(b,i)?(p=!0,s=!0,h+=" "):(u.push(l.length),h+=C),l.push(["text",C,S,S+1]),S+=1,"\n"===C&&(m(),h="",g=0,s=!1);if(!j.scan(r))break;if(c=!0,E=j.scan(L)||"name",j.scan(_),"="===E?(x=j.scanUntil(w),j.scan(w),j.scanUntil(n)):"{"===E?(x=j.scanUntil(o),j.scan(W),j.scanUntil(n),E="&"):x=j.scanUntil(n),!j.scan(n))throw new Error("Unclosed tag at "+j.pos);if(M=">"==E?[E,x,S,j.pos,h,g,s]:[E,x,S,j.pos],g++,l.push(M),"#"===E||"^"===E)a.push(M);else if("/"===E){if(!(T=a.pop()))throw new Error('Unopened section "'+x+'" at '+S);if(T[1]!==x)throw new Error('Unclosed section "'+T[1]+'" at '+S)}else"name"===E||"{"===E||"&"===E?p=!0:"="===E&&y(x)}if(m(),T=a.pop())throw new Error('Unclosed section "'+T[1]+'" at '+j.pos);return function(e){for(var t,r=[],n=r,o=[],i=0,s=e.length;i<s;++i)switch((t=e[i])[0]){case"#":case"^":n.push(t),o.push(t),n=t[4]=[];break;case"/":o.pop()[5]=t[2],n=o.length>0?o[o.length-1][4]:r;break;default:n.push(t)}return r}(function(e){for(var t,r,n=[],o=0,i=e.length;o<i;++o)(t=e[o])&&("text"===t[0]&&r&&"text"===r[0]?(r[1]+=t[1],r[3]=t[3]):(n.push(t),r=t));return n}(l))}(e,t),o&&r.set(n,i)),i},E.prototype.render=function(e,t,r,n){var o=this.getConfigTags(n),i=this.parse(e,o),s=t instanceof S?t:new S(t,void 0);return this.renderTokens(i,s,r,e,n)},E.prototype.renderTokens=function(e,t,r,n,o){for(var i,s,a,l="",u=0,c=e.length;u<c;++u)a=void 0,"#"===(s=(i=e[u])[0])?a=this.renderSection(i,t,r,n,o):"^"===s?a=this.renderInverted(i,t,r,n,o):">"===s?a=this.renderPartial(i,t,r,o):"&"===s?a=this.unescapedValue(i,t):"name"===s?a=this.escapedValue(i,t,o):"text"===s&&(a=this.rawValue(i)),void 0!==a&&(l+=a);return l},E.prototype.renderSection=function(e,t,r,n,o){var i=this,s="",a=t.lookup(e[1]);if(a){if(f(a))for(var l=0,u=a.length;l<u;++l)s+=this.renderTokens(e[4],t.push(a[l]),r,n,o);else if("object"==typeof a||"string"==typeof a||"number"==typeof a)s+=this.renderTokens(e[4],t.push(a),r,n,o);else if(g(a)){if("string"!=typeof n)throw new Error("Cannot use higher-order sections without the original template");null!=(a=a.call(t.view,n.slice(e[3],e[5]),(function(e){return i.render(e,t,r,o)})))&&(s+=a)}else s+=this.renderTokens(e[4],t,r,n,o);return s}},E.prototype.renderInverted=function(e,t,r,n,o){var i=t.lookup(e[1]);if(!i||f(i)&&0===i.length)return this.renderTokens(e[4],t,r,n,o)},E.prototype.indentPartial=function(e,t,r){for(var n=t.replace(/[^ \t]/g,""),o=e.split("\n"),i=0;i<o.length;i++)o[i].length&&(i>0||!r)&&(o[i]=n+o[i]);return o.join("\n")},E.prototype.renderPartial=function(e,t,r,n){if(r){var o=this.getConfigTags(n),i=g(r)?r(e[1]):r[e[1]];if(null!=i){var s=e[6],a=e[5],l=e[4],u=i;0==a&&l&&(u=this.indentPartial(i,l,s));var c=this.parse(u,o);return this.renderTokens(c,t,r,u,n)}}},E.prototype.unescapedValue=function(e,t){var r=t.lookup(e[1]);if(null!=r)return r},E.prototype.escapedValue=function(e,t,r){var n=this.getConfigEscape(r)||P.escape,o=t.lookup(e[1]);if(null!=o)return"number"==typeof o&&n===P.escape?String(o):n(o)},E.prototype.rawValue=function(e){return e[1]},E.prototype.getConfigTags=function(e){return f(e)?e:e&&"object"==typeof e?e.tags:void 0},E.prototype.getConfigEscape=function(e){return e&&"object"==typeof e&&!f(e)?e.escape:void 0};var P={name:"mustache.js",version:"4.2.0",tags:["{{","}}"],clearCache:void 0,escape:void 0,parse:void 0,render:void 0,Scanner:void 0,Context:void 0,Writer:void 0,set templateCache(e){x.templateCache=e},get templateCache(){return x.templateCache}},x=new E;P.clearCache=function(){return x.clearCache()},P.parse=function(e,t){return x.parse(e,t)},P.render=function(e,t,r,n){if("string"!=typeof e)throw new TypeError('Invalid template! Template should be a "string" but "'+(f(o=e)?"array":typeof o)+'" was given as the first argument for mustache#render(template, view, partials)');var o;return x.render(e,t,r,n)},P.escape=function(e){return String(e).replace(/[&<>"'`=\/]/g,(function(e){return y[e]}))},P.Scanner=k,P.Context=S,P.Writer=E;const C=P;class M{constructor(e,t){this.template=e,this.state=t,this.ast=C.parse(e)}getValue(){return void 0===this.value&&(this.value=C.render(this.template,this.state)),this.value}onChange(e){const t=[];for(const r of this.getUsedVariables().values())t.push(this.state.onVariableChange(r).subscribe((()=>{const t=C.render(this.template,this.state);t!==this.value&&(this.value=t,e(this.value))})));return{unsubscribe:()=>{for(const e of t)e.unsubscribe()}}}isPureString(){return 0===this.ast.length||1===this.ast.length&&"text"===this.ast[0][0]}getUsedVariables(){const e=new Set;return this.recursiveGetUsedVariables(this.ast,e),e}recursiveGetUsedVariables(e,t){for(const r of e){const e=r[0],n=r[1],o=r[4];["name","&","#","^"].includes(e)&&t.add(n),void 0!==o&&"string"!=typeof o&&this.recursiveGetUsedVariables(o,t)}}}async function T(){var e;const t=await l();for(const[r,n]of t.entries()){const t=null!==(e=n.properties)&&void 0!==e?e:[];for(const e of t){if("int"===e.type||"bool"===e.type||"object"===e.type)continue;const t=new M(e.value,WA.state);if(t.isPureString())continue;const n=t.getValue();j(r,e.name,n),t.onChange((t=>{j(r,e.name,t)}))}}}function j(e,t,r){WA.room.setProperty(e,t,r),"visible"===t&&(r?WA.room.showLayer(e):WA.room.hideLayer(e))}const U="https://unpkg.com/@workadventure/scripting-api-extra@1.0.5/dist";let V,I=0,B=0;function q(e){if(WA.state[e.name]){let t=e.properties.mustGetString("openLayer");for(const e of t.split("\n"))WA.room.showLayer(e);t=e.properties.mustGetString("closeLayer");for(const e of t.split("\n"))WA.room.hideLayer(e)}else{let t=e.properties.mustGetString("openLayer");for(const e of t.split("\n"))WA.room.hideLayer(e);t=e.properties.mustGetString("closeLayer");for(const e of t.split("\n"))WA.room.showLayer(e)}}function Z(e){return e.map((e=>V.get(e))).filter((e=>"tilelayer"===(null==e?void 0:e.type)))}function G(e){const t=p(Z(e)),r=32*((t.right-t.left)/2+t.left),n=32*((t.bottom-t.top)/2+t.top);return Math.sqrt(Math.pow(I-r,2)+Math.pow(B-n,2))}function z(e){WA.state.onVariableChange(e.name).subscribe((()=>{WA.state[e.name]?function(e){const t=e.properties.getString("openSound"),r=e.properties.getNumber("soundRadius");let n=1;if(r){const t=G(e.properties.mustGetString("openLayer").split("\n"));if(t>r)return;n=1-t/r}t&&WA.sound.loadSound(t).play({volume:n})}(e):function(e){const t=e.properties.getString("closeSound"),r=e.properties.getNumber("soundRadius");let n=1;if(r){const t=G(e.properties.mustGetString("closeLayer").split("\n"));if(t>r)return;n=1-t/r}t&&WA.sound.loadSound(t).play({volume:n})}(e),q(e)})),q(e)}function H(e,t,r,n){const o=e.name;let i,s,a=!1;const l=r.getString("zone");if(!l)throw new Error('Missing "zone" property on doorstep layer "'+o+'"');const u=r.getString("tag");let c=!0;u&&!WA.player.tags.includes(u)&&(c=!1);const h=!!u;function f(){var e;i&&i.remove(),i=WA.ui.displayActionMessage({message:null!==(e=r.getString("closeTriggerMessage"))&&void 0!==e?e:"Press SPACE to close the door",callback:()=>{WA.state[t.name]=!1,g()}})}function g(){var e;i&&i.remove(),i=WA.ui.displayActionMessage({message:null!==(e=r.getString("openTriggerMessage"))&&void 0!==e?e:"Press SPACE to open the door",callback:()=>{WA.state[t.name]=!0,f()}})}function d(){s&&(WA.room.website.delete(s.name),s=void 0)}WA.room.onEnterZone(l,(()=>{a=!0,r.getBoolean("autoOpen")&&c?WA.state[t.name]=!0:WA.state[t.name]||(!h||c)&&h||!r.getString("code")&&!r.getString("codeVariable")?c&&(WA.state[t.name]?f():g()):function(e){const r=p(Z(t.properties.mustGetString("closeLayer").split("\n")));s=WA.room.website.create({name:"doorKeypad"+e,url:n+"/keypad.html#"+encodeURIComponent(e),position:{x:32*r.right,y:32*r.top,width:96,height:128},allowApi:!0})}(o)})),WA.room.onLeaveZone(l,(()=>{a=!1,r.getBoolean("autoClose")&&(WA.state[t.name]=!1),i&&i.remove(),d()})),WA.state.onVariableChange(t.name).subscribe((()=>{a&&(r.getBoolean("autoClose")||!0!==WA.state[t.name]||f(),s&&!0===WA.state[t.name]&&d(),r.getBoolean("autoOpen")||!1!==WA.state[t.name]||g())}))}function D(e){void 0===WA.state[e.name]&&(WA.state[e.name]=0),WA.state.onVariableChange(e.name).subscribe((()=>{WA.state[e.name]&&function(e){const t=e.properties.mustGetString("bellSound"),r=e.properties.getNumber("soundRadius");let n=1;if(r){const t=Math.sqrt(Math.pow(e.x-I,2)+Math.pow(e.y-B,2));if(t>r)return;n=1-t/r}WA.sound.loadSound(t).play({volume:n})}(e)}))}function O(e,t){let r;const n=t.mustGetString("zone"),o=t.getString("bellPopup");WA.room.onEnterZone(n,(()=>{var n;o?r=WA.ui.openPopup(o,"",[{label:null!==(n=t.getString("bellButtonText"))&&void 0!==n?n:"Ring",callback:()=>{WA.state[e]=WA.state[e]+1}}]):WA.state[e]=WA.state[e]+1})),WA.room.onLeaveZone(n,(()=>{r&&(r.close(),r=void 0)}))}async function R(e){e=null!=e?e:U;const t=await i();V=await l();for(const e of t.values())e.properties.get("door")&&z(e),e.properties.get("bell")&&D(e);for(const r of V.values()){const o=new n(r.properties),i=o.getString("doorVariable");if(i&&"tilelayer"===r.type){const n=t.get(i);if(void 0===n)throw new Error('Cannot find variable "'+i+'" referred in the "doorVariable" property of layer "'+r.name+'"');H(r,n,o,e)}const s=o.getString("bellVariable");s&&O(s,o)}WA.player.onPlayerMove((e=>{I=e.x,B=e.y}))}function F(e){const t=e.getString("bindVariable");if(t){const r=e.getString("zone");if(!r)throw new Error('A layer with a "bindVariable" property must ALSO have a "zone" property.');!function(e,t,r,n,o,i){i&&!WA.player.tags.includes(i)||(void 0!==r&&WA.room.onEnterZone(t,(()=>{o||(WA.state[e]=r)})),void 0!==n&&WA.room.onLeaveZone(t,(()=>{WA.state[e]=n})))}(t,r,e.get("enterValue"),e.get("leaveValue"),e.getString("triggerMessage"),e.getString("tag"))}}function N(){return WA.onInit().then((()=>{R().catch((e=>console.error(e))),async function(){const e=await l();for(const t of e.values())F(new n(t.properties))}().catch((e=>console.error(e))),async function(e){const t=(await WA.room.getTiledMap()).layers.find((e=>"configuration"===e.name));if(t){const r=new n(t.properties).getString("tag");r&&!WA.player.tags.includes(r)||WA.ui.registerMenuCommand("Configure the room",(()=>{e=null!=e?e:U,WA.nav.openCoWebSite(e+"/configuration.html",!0)}))}}().catch((e=>console.error(e))),T().catch((e=>console.error(e)))}))}},564:(e,t)=>{var r;Object.defineProperty(t,"__esModule",{value:!0}),t.TextFilesEnglish=void 0,(r=t.TextFilesEnglish||(t.TextFilesEnglish={})).f0_reception="Welcome to HSA-Informatics. New here? You find further information by the elevator.",r.f0_1="Talking with the employees can be really informative.",r.f0_2="So late already? My break is almost over!",r.f0_3="These donuts are delicious!",r.f0_4="I've heard someone on the first floor hast lost his password.",r.f0_5="I've got work to do.",r.f1_reception="3 employees have lost their passwords. Find their pcs and crack their passwords.",r.f1_notebook="An unattended notebook! Use 'WIN + L' to lock your computer if you leave your workstation.",r.f1_1="Pets as password, how unsave...",r.f1_2="Those dockers can really confuse you. I need help.",r.f1_3="I have forgotten my password... I'm sure it was a four digit number.",r.f2_reception="Two employees need help with their calls. Aside from that an usb has been seen. Who may lost it?",r.f2_1="Water-dispenser-meeting ;)",r.f2_2="Water-dispenser-meeting ;)",r.f2_3="*Blub*",r.f2_4="I always update my operating system. Despite this i seem to have a virus",r.f2_5="Paper jam again...",r.f2_6="Enjoy your meal.",r.f2_7="Hush hush! Out of my kitchen.",r.f2_8="How did I get here?",r.f2_usb_quest_right="That was the right choise!",r.f2_usb_quest_right_m="SPACE or touch this to pick up the usb",r.f2_usb_quest_wrong_m="SPACE or touch this to put the usb in a computer",r.usb_pickup="SPACE or touch to pickup usb",r.f3_reception="Three employees have got mail. Check for their authenticity.",r.f3_1="I also think there is something wrong here.",r.f3_2="Thats weird! Our domain ist @HSA-Informatics.de",r.f3_3="You are on the last floor. You have almost made it!",r.f3_4="It's busy in here today.",r.f3_5="650.000$, I can quit right away!",r.f3_6="A support ticket. Someone needs help with their docker.",r.f3_reference_1="Your login details for the company pc",r.f3_mail_1="Dear colleague,<br>I hereby apply for the password for your company pc to register the new software. Please send me your login details by the end of the week.<br>Many greetings<br>Jürgen Meyer",r.f3_reference_2="Congratulations",r.f3_mail_2="Congratulations!<br>Your were chosen for our monthly Google-Promo-Lotto-Ticket-Special!<br>You won $650.000,00! If you want to redeem your profit please contact our agent: jalubos441@gmail.com<br>Many greetings<br>Robert Avtandiltayn<br>Online-Coordinator",r.f3_reference_3="I need your docker assistance!",r.f3_mail_3="Dear Mr. Schölz,<br>I've tried to setup docker but unfortunately it was unsuccessful. Can you please contact me and help me?<br>Thank you and best regards<br>Sebastian Malz",r.fend_1="1. Password security, 2. Phising mails and calls",r.fend_2="Congratulations you've made it! :)\nOn the walls you'll find more information.",r.elevator_interact_message="SPACE or touch this to set the floor",r.usb_pickup_message="SPACE or touch this to pick up usb",r.trustworthy_label="Serious",r.untrustworthy_label="Unserious",r.null="No text found yet."},783:(e,t)=>{var r;Object.defineProperty(t,"__esModule",{value:!0}),t.TextFilesGerman=void 0,(r=t.TextFilesGerman||(t.TextFilesGerman={})).f0_reception="Willkommen bei HSA-Informatics. Du bist neu hier? Informationen findest du neben dem Aufzug.",r.f0_1="Mitarbeiter-\ngespräche können durchaus informativ sein.",r.f0_2="Schon so spät? Meine Pause ist bald vorbei!",r.f0_3="Diese Donuts sind köstlich!",r.f0_4="Ich hörte jemand im 1. Stock hat sein Passwort vergessen.",r.f0_5="Ich habe Arbeit zu erledigen.",r.f1_reception="3 Mitarbeiter haben ihre Passwörter vergessen. Finde ihre Computer und knacke die Passwörter.",r.f1_notebook="Ein unbeaufsichtigter Laptop! Benutze 'WIN + L' um deinen Rechner zu sperren wenn du deinen Arbeitsplatz verlässt.",r.f1_1="Haustiere als Passwort, wie unsicher...",r.f1_2="Diese Docker können einen echt verwirren, ich brauche dringend Hilfe.",r.f1_3="Ich habe mein Passwort vergessen... Ich bin mir sicher es war eine 4-stellige Nummer.",r.f2_reception="2 Mitarbeiter brauchen Hilfe mit ihren Anrufen. Außerdem wurde ein USB-Stick gesehen. Wer hat den wohl verloren?",r.f2_1="Wasserspender-Treff ;)",r.f2_2="Wasserspender-Treff ;)",r.f2_3="*Blub*",r.f2_4="Ich update immer mein Betriebssystem und trotzdem habe ich scheinbar einen Virus...",r.f2_5="Schon wieder Papierstau!",r.f2_6="Mahlzeit.",r.f2_7="Husch husch, raus aus der Küche.",r.f2_8="Wie bin ich hier her gekommen?",r.f2_usb_quest_right="Das war die richtige Entscheidung!",r.f2_usb_quest_right_m="LEER oder berühren um USB abzugeben",r.f2_usb_quest_wrong_m="LEER oder berühren um USB in einen Computer zu stecken",r.usb_pickup="LEER oder Berühren um USB aufzuheben",r.f3_reception="3 Mitarbeiter haben Emails erhalten, überprüfe deren Authenzität.",r.f3_1="Ich glaube auch, dass hier etwas nicht stimmt.",r.f3_2="Seltsam unsere Domain lautet @HSA-Informatics.de",r.f3_3="Du befindest dich auf der letzten Etage mit Rätseln, bald hast du es geschafft.",r.f3_4="Heute ist hier aber viel los...",r.f3_5="650.000€, da kann ich doch gleich kündigen!",r.f3_6="Eine Supportanfrage, \nda braucht wohl jemand Hilfe mit dem Einrichten der Docker.",r.f3_reference_1="Login-Daten für Firmen-PC",r.f3_mail_1="Sehr geehrter Kollege,<br>hiermit beantrage ich das Passwort für Ihren Firmen-PC zur Registrierung der neuen Sicherheitssoftware, Bitte schicken Sie mir Ihre Anmeldedaten bis spätestens Ende der Woche zu.<br>Viele Grüße<br>Jürgen Meyer",r.f3_reference_2="Herzlichen Glückwunsch",r.f3_mail_2="Glückwunsch!<br> Sie wurden in der monatlichen Google-Promo-Lotto-Los-Aktion gezogen!<br> Sie haben €650.000,00 gewonnen!Wenn Sie Ihren Gewinn einlösen wollen, kontaktieren Sie unseren Agent: jalubos441@gmail.com<br>Viele Grüße<br>Robert Avtandiltayn<br>Online-Koordinator",r.f3_reference_3="Docker Hilfe!",r.f3_mail_3="Sehr geehrter Herr Schölz,<br>ich habe versucht den Docker auf meinem Computer einzurichten und bisher leider keinen Erfolg gehabt.Können Sie sich bitte bei mir melden und mir helfen?<br>Vielen Dank und viele Grüße<br>Sebastian Malz",r.fend_1="1. Passwortsicherheit, 2.Phishing-Mails & 3.Phishing-Anrufe",r.fend_2="Glückwunsch du hast es geschafft! :)\nAn der Wand findest du weitere Informationen.",r.elevator_interact_message="LEER oder berühren um die Etage einzustellen",r.usb_pickup_message="LEER oder Berühren um USB aufzuheben",r.trustworthy_label="Seriös",r.untrustworthy_label="Unseriös",r.null="No text found yet."},179:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.elevator=t.Levels=t.Elevator=void 0;class r{constructor(){this.currentLevel=1,this.maxLevelAvailable=2}setLevelUp(){return this.currentLevel+1<=this.maxLevelAvailable&&(this.currentLevel+=1),n[this.currentLevel]}setLevelDown(){return this.currentLevel-1>0&&(this.currentLevel-=1),n[this.currentLevel]}increaseMaxLevelAvailable(){this.maxLevelAvailable+=1}setMaxLevelAvailable(e){this.maxLevelAvailable=e}getCurrentLevel(){return this.currentLevel}setCurrentLevel(e){switch(e){case"map.json":this.currentLevel=n["map.json#entryPoint"];break;case"Level1.json":this.currentLevel=n["Level1.json"];break;case"Level2.json":this.currentLevel=n["Level2.json"];break;case"Level3.json":this.currentLevel=n["Level3.json"];break;case"Level5.json":this.currentLevel=n["Level5.json"]}}getCurrentLevelJson(){return n[this.currentLevel]}getHighestLevel(){return this.maxLevelAvailable}static get instance(){return this._instance}}var n;t.Elevator=r,r._instance=new r,function(e){e[e.min=0]="min",e[e["map.json#entryPoint"]=1]="map.json#entryPoint",e[e["Level1.json"]=2]="Level1.json",e[e["Level2.json"]=3]="Level2.json",e[e["Level3.json"]=4]="Level3.json",e[e["Level5.json"]=5]="Level5.json",e[e.max=6]="max"}(n=t.Levels||(t.Levels={})),t.elevator=r.instance}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={exports:{}};return e[n](i,i.exports,r),i.exports}r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{const e=r(388),t=r(783),n=r(564),o=r(179);e.bootstrapExtra().catch((e=>console.error(e)));let i,s,a=t.TextFilesGerman,l=!1,u=!1,c=!1;function p(e){switch(e){case"quest_1_1":WA.state.saveVariable("quest_1_1",!0).catch((e=>console.error(e)));break;case"quest_1_2":WA.state.saveVariable("quest_1_2",!0).catch((e=>console.error(e)));break;case"quest_1_3":WA.state.saveVariable("quest_1_3",!0).catch((e=>console.error(e)))}WA.state.loadVariable("quest_1_1")&&WA.state.loadVariable("quest_1_2")&&WA.state.loadVariable("quest_1_3")&&o.elevator.getHighestLevel()+1===o.elevator.getCurrentLevel()+1&&(o.elevator.increaseMaxLevelAvailable(),WA.state.getLocalStorageData("setMaxLevelAvailable",String(o.elevator.getHighestLevel())))}function h(){void 0!==i&&(i.close(),i=void 0)}function f(){void 0!==s&&(s.remove(),s=void 0)}WA.room.hideLayer("Paper_Highlight"),WA.room.hideLayer("Kylo_Highlight"),WA.room.setProperty("exit","exitUrl","Level1.json"),o.elevator.setCurrentLevel("Level1.json"),WA.state.getLocalStorageData("getLanguage","",void 0,{id:"language",callback:e=>{"german"===e?a=t.TextFilesGerman:"english"===e&&(a=n.TextFilesEnglish)}}),WA.state.getLocalStorageData("getMaxLevelAvailable","",{id:"level",callback:e=>{o.elevator.setMaxLevelAvailable(Number(e))}}),WA.ui.openBubble("popUp_Elevator","MaxLevelAvailable: "+o.elevator.getHighestLevel()+"CurrentLevel: "+o.elevator.getCurrentLevel()),WA.room.onEnterZone("interact_down",(()=>{s=WA.ui.displayActionMessage({message:a.elevator_interact_message,callback:()=>{WA.room.setProperty("exit","exitUrl",o.elevator.setLevelDown())}})})),WA.room.onLeaveZone("interact_down",f),WA.room.onEnterZone("interact_up",(()=>{s=WA.ui.displayActionMessage({message:a.elevator_interact_message,callback:()=>{WA.room.setProperty("exit","exitUrl",o.elevator.setLevelUp())}})})),WA.room.onLeaveZone("interact_up",f),WA.room.onEnterZone("paper_highlight",(()=>{WA.room.showLayer("Paper_Highlight")})),WA.room.onEnterZone("paper_no_highlight",(()=>{WA.room.hideLayer("Paper_Highlight")})),WA.room.onEnterZone("paper_pickup",(()=>{i=WA.ui.openPopup("paper","",[],"paper")})),WA.room.onLeaveZone("paper_pickup",h),WA.room.onEnterZone("f1_reception",(()=>{i=WA.ui.openBubble("bubble_1_reception",a.f1_reception)})),WA.room.onLeaveZone("f1_reception",h),WA.room.onEnterZone("f1_notebook",(()=>{i=WA.ui.openPopup("popUp_1_notebook",a.f1_notebook,[])})),WA.room.onLeaveZone("f1_notebook",h),WA.room.onEnterZone("f1_1",(()=>{i=WA.ui.openBubble("bubble_1_1",a.f1_1)})),WA.room.onLeaveZone("f1_1",h),WA.room.onEnterZone("f1_2",(()=>{i=WA.ui.openBubble("bubble_1_2",a.f1_2)})),WA.room.onLeaveZone("f1_2",h),WA.room.onEnterZone("f1_3",(()=>{i=WA.ui.openBubble("bubble_1_3",a.f1_3)})),WA.room.onLeaveZone("f1_3",h),WA.room.onEnterZone("quest_1_1",(()=>{l||(i=WA.ui.openPopup("popUp_1_quest_1","",[],"login",{id:"L#4Q!-F/=cMt7",callback:e=>{e&&(p("quest_1_1"),l=!0,i.close(),i=WA.ui.openPopup("popUp_1_quest_1","",[],"login-success"))}}))})),WA.room.onLeaveZone("quest_1_1",(()=>{i.close()})),WA.room.onEnterZone("quest_1_2",(()=>{u||(i=WA.ui.openPopup("popUp_1_quest_2","",[],"login",{id:"1234",callback:e=>{e&&(p("quest_1_2"),u=!0,i.close(),i=WA.ui.openPopup("popUp_1_quest_2","",[],"login-success"))}}))})),WA.room.onLeaveZone("quest_1_2",(()=>{i.close()})),WA.room.onEnterZone("quest_1_3",(()=>{c||(i=WA.ui.openPopup("popUp_1_quest_3","",[],"login",{id:"Kylo",callback:e=>{e&&(p("quest_1_3"),c=!0,i.close(),i=WA.ui.openPopup("popUp_1_quest_3","",[],"login-success"))}}))})),WA.room.onLeaveZone("quest_1_3",(()=>{i.close()})),WA.room.onEnterZone("kylo_highlight",(()=>{WA.room.showLayer("Kylo_Highlight")})),WA.room.onEnterZone("kylo_dehighlight",(()=>{WA.room.hideLayer("Kylo_Highlight")})),WA.room.onEnterZone("kylo",(()=>{i=WA.ui.openPopup("Kylo","",[],"kylo")})),WA.room.onLeaveZone("kylo",h)})()})();
//# sourceMappingURL=level1.js.map