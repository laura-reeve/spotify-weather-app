webpackJsonp([1],{"+Al0":function(t,e,o){t.exports=o.p+"static/img/happy.a84d295.png"},"/qur":function(t,e,o){t.exports=o.p+"static/img/cool.d93d74d.png"},"6HYP":function(t,e,o){t.exports=o.p+"static/img/meh.270c9f2.png"},"GY+s":function(t,e){},NHnr:function(t,e,o){"use strict";function n(t){o("eMhb")}function s(t){o("GY+s")}function r(t){o("hWd8")}function i(t){o("tc3k")}function a(t){o("ul8y")}Object.defineProperty(e,"__esModule",{value:!0});var c=o("7+uW"),l={name:"App"},u=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("router-view")],1)},p=[],d={render:u,staticRenderFns:p},h=d,m=o("VU/8"),f=n,_=m(l,h,!1,f,null,null),v=_.exports,g=o("/ocq"),y={name:"Loader"},b=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},x=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"loading"},[o("span",{staticClass:"blob1 blob"}),t._v(" "),o("span",{staticClass:"blob2 blob"}),t._v(" "),o("span",{staticClass:"blob3 blob"})])}],k={render:b,staticRenderFns:x},w=k,M=o("VU/8"),L=s,I=M(y,w,!1,L,"data-v-771b3382",null),z=I.exports,R={name:"Login",data:function(){return{results:null,errors:[],access_token:this.$route.hash.substring(1),showLoading:!1}},components:{"blob-loader":z},methods:{getHashParams:function(){for(var t,e={},o=/([^&;=]+)=?([^&;]*)/g,n=window.location.hash.substring(1);t=o.exec(n);)e[t[1]]=decodeURIComponent(t[2]);return e},generateRandomString:function(t){for(var e="",o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=0;n<t;n++)e+=o.charAt(Math.floor(Math.random()*o.length));return e},authorize:function(t){var e=this.generateRandomString(16);localStorage.setItem(t,e);var o="https://accounts.spotify.com/authorize";o+="?response_type=token",o+="&client_id="+encodeURIComponent("2acb1bf4bb054c3a9d24c0256833c1a7"),o+="&scope="+encodeURIComponent("user-read-private user-read-email"),o+="&redirect_uri="+encodeURIComponent("http://localhost:8080/authorize"),o+="&state="+encodeURIComponent(e),window.location=o},login:function(){this.showLoading=!0;var t=(document.getElementById("user-profile-template").innerHTML,document.getElementById("user-profile")),e=(document.getElementById("oauth-template").innerHTML,document.getElementById("oauth"),"spotify_auth_state"),o=this.getHashParams(),n=localStorage.getItem(e);this.access_token.length>0&&(null==o.state||o.state!==n)?alert("There was an error during the authentication"):(localStorage.removeItem(e),this.access_token.length>0?axios.get({url:"https://api.spotify.com/v1/me",headers:{Authorization:"Bearer "+access_token},success:function(e){t.innerHTML=userProfileTemplate(e),window.location.replace("http://localhost:8080/authorize")}}):console.log("Authentication needed, retreiving access token.")),this.authorize(e)}}},A=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[t._m(0),t._v(" "),o("h1",[t._v("Moodify")]),t._v(" "),o("p",[t._v("Music to suit your mood.")]),t._v(" "),o("p",[t._v("You must log in to Spotify to use this app.")]),t._v(" "),o("p",[o("button",{attrs:{id:"login-button"},on:{click:t.login}},[t._v("LOG IN")])]),t._v(" "),t.showLoading?o("blob-loader"):t._e()],1)},E=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"login"}},[o("div",{attrs:{id:"user-profile-template"}}),t._v(" "),o("div",{attrs:{id:"user-profile"}}),t._v(" "),o("div",{attrs:{id:"oauth-template"}}),t._v(" "),o("div",{attrs:{id:"oauth"}})])}],H={render:A,staticRenderFns:E},$=H,C=o("VU/8"),U=r,q=C(R,$,!1,U,"data-v-28e405b4",null),P=q.exports,B=o("mtWM"),T=o.n(B),V={name:"moodSlider",data:function(){return{moods:{happy:{src:o("+Al0"),text:"happy"},love:{src:o("dyV4"),text:"love"},silly:{src:o("Zqf7"),text:"silly"},surprise:{src:o("rcH9"),text:"surprise"},cool:{src:o("/qur"),text:"cool"},sleepy:{src:o("izrj"),text:"sleepy"},meh:{src:o("6HYP"),text:"meh"},sad:{src:o("iC7B"),text:"sad"}}}},methods:{selectMood:function(t){this.$emit("selected",t.currentTarget.childNodes[0].alt)}}},S=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",t._l(t.moods,function(e){return o("ul",[o("li",{on:{click:t.selectMood}},[o("img",{attrs:{src:e.src,alt:e.text}}),t._v(" "),o("p",[t._v(t._s(e.text))])])])}))},F=[],Y={render:S,staticRenderFns:F},N=Y,W=o("VU/8"),j=i,G=W(V,N,!1,j,"data-v-55c28672",null),D=G.exports,O={name:"Moodify",data:function(){return{results:[],errors:[],query:"______",access_token:this.$route.hash.substring(1),showLoading:!1}},components:{"mood-slider":D,"blob-loader":z},props:{playlistData:{}},methods:{getPlaylist:function(t){var e=this;this.errors=[],this.results=[],this.showLoading=!0,console.log(t),this.query=t;var o={headers:{Authorization:"Bearer ".concat(this.access_token)}},n="https://api.spotify.com/v1/search?type=playlist&q="+this.query,s=this;T.a.get(n,o).then(function(t){s.results=t.data.playlists.items,e.showLoading=!1}).catch(function(t){e.errors.push(t),e.showLoading=!1})},openPlaylist:function(t){this.errors=[],this.showLoading=!0,this.$router.push({path:"/tracks#"+this.access_token})},playMusic:function(t){window.location.replace(t)}}},Z=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{attrs:{id:"loggedIn"}},[o("h1",[t._v("Moodify")]),t._v(" "),o("p",[t._v("Music to suit your mood.")]),t._v(" "),o("p",[t._v("Here are some "+t._s(t.query)+" playlists.")]),t._v(" "),o("mood-slider",{on:{selected:t.getPlaylist}}),t._v(" "),t.showLoading?o("blob-loader"):t._e(),t._v(" "),t.errors&&t.errors.length>0?o("ul",t._l(t.errors,function(e){return o("li",[o("p",{attrs:{id:"error"}},[t._v(t._s(e.response))])])})):t._e(),t._v(" "),t.results&&t.results.length>0?o("ul",t._l(t.results,function(e){return o("li",[o("p",[t._v(t._s(e.name))]),t._v(" "),o("p",[t._v("There are "+t._s(e.tracks.total)+" tracks in this playlist.")]),t._v(" "),o("button",{on:{click:function(o){t.playMusic(e.external_urls.spotify)}}},[t._v("Listen to tracks")]),t._v(" "),o("button",{attrs:{id:"playlistLink"},on:{click:function(o){t.openPlaylist(e.tracks.href)}}},[t._v("Display tracks")]),t._v(" "),o("hr")])})):t._e()],1)])},J=[],K={render:Z,staticRenderFns:J},Q=K,X=o("VU/8"),tt=a,et=X(O,Q,!1,tt,null,null),ot=et.exports,nt={name:"Authorize",created:function(){console.log("Authorization token created")},data:function(){var t=location.hash.split("&").map(function(t){return t.split("=")}).reduce(function(t,e){return t[e[0]]=e[1],t},{}),e=t["#access_token"];return this.$router.push({path:"/moodify#"+e}),{}},methods:{}},st=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div")},rt=[],it={render:st,staticRenderFns:rt},at=it,ct=o("VU/8"),lt=ct(nt,at,!1,null,null,null),ut=lt.exports;c.a.use(g.a);var pt=new g.a({mode:"history",routes:[{path:"/",name:"Login",component:P},{path:"/moodify",name:"Moodify",component:ot},{path:"/authorize",name:"Authorize",component:ut}]});c.a.config.productionTip=!1,new c.a({el:"#app",router:pt,template:"<App/>",components:{App:v}})},Zqf7:function(t,e,o){t.exports=o.p+"static/img/silly.61b3572.png"},dyV4:function(t,e,o){t.exports=o.p+"static/img/love.531943f.png"},eMhb:function(t,e){},hWd8:function(t,e){},iC7B:function(t,e,o){t.exports=o.p+"static/img/sad.27b92c1.png"},izrj:function(t,e,o){t.exports=o.p+"static/img/sleepy.8f3694c.png"},rcH9:function(t,e,o){t.exports=o.p+"static/img/surprised.8dae223.png"},tc3k:function(t,e){},ul8y:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.08bd2d20f2668604512d.js.map