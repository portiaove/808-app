(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/play.c14e5e8d.svg"},function(e,t,a){e.exports=a.p+"static/media/pause.ac2850e2.svg"},,function(e,t,a){},,,,,,,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/808Icon.f7c5fb74.svg"},function(e,t,a){e.exports=a.p+"static/media/808IconSelected.ca5ca4d1.svg"},function(e,t,a){e.exports=a.p+"static/media/profile.3b3b14a6.svg"},function(e,t,a){e.exports=a.p+"static/media/profileSelected.0204441e.svg"},function(e,t,a){e.exports=a.p+"static/media/holding.2a3602a7.svg"},function(e,t,a){e.exports=a.p+"static/media/holdingSelected.d088d837.svg"},function(e,t,a){e.exports=a.p+"static/media/FloppyDisk3.91e83f62.svg"},function(e,t,a){e.exports=a.p+"static/media/GoBack.48e32084.svg"},,,function(e,t,a){e.exports=a(85)},,,,,,,,,,,,,,,,,,,,,,function(e,t,a){},,,,,function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/808Icon2.0a393246.svg"},function(e,t,a){e.exports=a.p+"static/media/FloppyDisk.f64bca41.svg"},function(e,t,a){e.exports=a.p+"static/media/FloppyDisk2.dc99794d.svg"},,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(34),s=a.n(c),l=a(15),o=a(9),i=a(10),m=a(1),u=a(2),d=a(4),p=a(3),h=a(5),f=a(6),v=function(e){var t=e.label,a=e.name,n=e.value,c=e.touch,s=e.error,l=e.onChange,o=e.onBlur,i=e.validationClassName,m=e.errormessage,u=e.type,d={autoComplete:"off",className:"".concat(i),name:a,value:n,onChange:l,onBlur:o,errormessage:m,type:u};return r.a.createElement("div",{className:"Inputs"},r.a.createElement("input",Object.assign({placeholder:t},d)),c&&!s&&r.a.createElement("div",{className:"valid-feedback"}),c&&s&&r.a.createElement("div",{className:"invalid-feedback"},m))},b=a(35),g=a.n(b).a.create({baseURL:"".concat("https://aobeats.herokuapp.com/"),withCredentials:!0});g.interceptors.response.use(function(e){return e},function(e){if(403!==e.response.status&&401!==e.response.status)return Promise.reject(e);localStorage.clear(),window.location.assign("/login")});var E=g,k={register:function(e){return E.post("/register",e)},login:function(e){return E.post("/login",e)},logout:function(){return E.get("/logout")}},y="current-user",N=r.a.createContext(),C=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={user:JSON.parse(localStorage.getItem(y)||"{}")},a.handleUserChange=function(e){a.setState({user:e}),e?localStorage.setItem(y,JSON.stringify(e)):localStorage.removeItem(y)},a.isAuthenticated=function(){return a.state.user&&a.state.user.email},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(N.Provider,{value:{user:this.state.user,onUserChange:this.handleUserChange,isAuthenticated:this.isAuthenticated}},this.props.children)}}]),t}(n.Component),O=function(e){return function(t){return r.a.createElement(N.Consumer,null,function(a){return r.a.createElement(e,Object.assign({},a,t))})}},S=(a(70),/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),j=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,B={email:function(e){return S.test(e)},password:function(e){return j.test(e)}},w=O(function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={data:{email:"",password:""},errors:{email:!0,password:!0},touch:{},redirect:!1,wrongCredentials:!1},a.handleChange=function(e){var t=e.target,n=t.name,r=t.value,c=B[n](r);a.setState({data:Object(i.a)({},a.state.data,Object(o.a)({},n,r)),errors:Object(i.a)({},a.state.errors,Object(o.a)({},n,!c))})},a.handleBlur=function(e){var t=e.target.name;a.setState({touch:Object(i.a)({},a.state.touch,Object(o.a)({},t,!0))})},a.getValidationClassName=function(e){var t=a.state,n=t.touch,r=t.errors;return n[e]?r[e]?"form-control is-invalid":"form-control is-valid":"form-control"},a.handleSubmit=function(e){e.preventDefault(),k.login(a.state.data).then(function(e){a.setState({redirect:!0}),a.props.onUserChange(e.data)},function(e){a.setState({wrongCredentials:!0,errors:Object(i.a)({},a.state.errors,{email:!0,password:!0})})})},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.state,t=e.data,a=e.errors,n=e.touch,c=Object.values(a).some(function(e){return!0===e});return this.props.isAuthenticated()?r.a.createElement(l.a,{to:"/home"}):this.state.redirect?r.a.createElement(l.a,{to:"/home"}):r.a.createElement("div",{className:"Login-Container"},r.a.createElement("div",{className:"Login"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement(v,{label:"Email",name:"email",value:t.email,touch:n.email,error:a.email,onChange:this.handleChange,onBlur:this.handleBlur,validationClassName:this.getValidationClassName("email"),errormessage:"Invalid email format",type:"email"}),r.a.createElement(v,{label:"Password",name:"password",value:t.password,touch:n.password,error:a.password,onChange:this.handleChange,onBlur:this.handleBlur,validationClassName:this.getValidationClassName("password"),errormessage:"At least 8 characters, 1 number, 1 upper and 1 lowercase",type:"password"}),r.a.createElement("button",{type:"submit",className:"btn-Submit",disabled:c},"Log In"),r.a.createElement(f.b,{className:"Link",to:"/register"},"Register here"))))}}]),t}(r.a.Component)),A=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,I=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,L={username:function(e){return e.length>3},email:function(e){return A.test(e)},password:function(e){return I.test(e)}},D=O(function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={data:{username:"",email:"",password:""},errors:{username:!0,email:!0,password:!0},touch:{},redirect:!1,wrongCredentials:!1},a.handleChange=function(e){var t=e.target,n=t.name,r=t.value,c=L[n](r);a.setState({data:Object(i.a)({},a.state.data,Object(o.a)({},n,r)),errors:Object(i.a)({},a.state.errors,Object(o.a)({},n,!c))})},a.handleBlur=function(e){var t=e.target.name;a.setState({touch:Object(i.a)({},a.state.touch,Object(o.a)({},t,!0))})},a.getValidationClassName=function(e){var t=a.state,n=t.touch,r=t.errors;return n[e]?r[e]?"form-control is-invalid":"form-control is-valid":"form-control"},a.handleSubmit=function(e){e.preventDefault(),k.register(a.state.data).then(function(e){a.setState({redirect:!0})},function(e){a.setState({wrongCredentials:!0,errors:Object(i.a)({},a.state.errors,{username:!0,email:!0,password:!0})})})},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.state,t=e.data,a=e.errors,n=e.touch,c=Object.values(a).some(function(e){return!0===e});return this.props.isAuthenticated()?r.a.createElement(l.a,{to:"/home"}):this.state.redirect?r.a.createElement(l.a,{to:"/login"}):r.a.createElement("div",{className:"Login-Container"},r.a.createElement("div",{className:"Login"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement(v,{label:"Username",name:"username",value:t.username,touch:n.username,error:a.username,onChange:this.handleChange,onBlur:this.handleBlur,validationClassName:this.getValidationClassName("username"),errormessage:"At least 4 characters"}),r.a.createElement(v,{label:"Email",name:"email",value:t.email,touch:n.email,error:a.email,onChange:this.handleChange,onBlur:this.handleBlur,validationClassName:this.getValidationClassName("email"),errormessage:"Invalid email format",type:"email"}),r.a.createElement(v,{label:"Password",name:"password",value:t.password,touch:n.password,error:a.password,onChange:this.handleChange,onBlur:this.handleBlur,validationClassName:this.getValidationClassName("password"),errormessage:"At least 8 characters, 1 number, 1 upper and 1 lowercase",type:"password"}),r.a.createElement("button",{type:"submit",className:"btn-Submit",disabled:c},"Register"),r.a.createElement(f.b,{className:"Link",to:"/login"},"Already registered? Log in"))))}}]),t}(r.a.Component)),H=(a(75),a(38)),x=a.n(H),R=a(39),T=a.n(R),P=(a(76),a(40)),U=a.n(P),M=a(41),F=a.n(M),z=a(42),Z=a.n(z),V=a(43),J=a.n(V),W=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={selected:a.props.location.pathname},a.handleSelection=function(e){var t=e.target.name;a.setState({selected:t})},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.state.selected;return"/808"!==this.props.location.pathname&&(e=this.props.location.pathname),r.a.createElement("footer",{className:"/808"===e?"NoFooter":"Footer"},r.a.createElement("div",{className:"flexFooter"},r.a.createElement("div",null,r.a.createElement(f.b,{to:"/profile",onClick:this.handleSelection},r.a.createElement("img",{alt:"profileIcon",name:"/profile",className:"homeIcon",src:"/profile"===e?F.a:U.a}))),r.a.createElement("div",null,r.a.createElement(f.b,{to:"/home",onClick:this.handleSelection},r.a.createElement("img",{alt:"homeIcon",name:"/home",className:"homeIcon",src:"/home"===e?J.a:Z.a}))),r.a.createElement("div",null,r.a.createElement(f.b,{to:"/808",onClick:this.handleSelection},r.a.createElement("img",{alt:"808Icon",name:"/808",className:"homeIcon",src:"/808"===e?T.a:x.a})))))}}]),t}(r.a.Component),$=Object(l.g)(W),K=(a(20),function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).handleStyle=function(e){return"kick"===e?"Kick":"snare"===e?"Snare":"clHat"===e?"ClHat":"opHat"===e?"OpHat":"loTom"===e?"LoTom":"hiTom"===e?"HiTom":"Black"},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.activeDrum,a=e.name,n=e.onClick,c=e.title;return console.log("Drum Render"),r.a.createElement("div",{className:"Instrument",onClick:function(){return n({target:{name:a}})}},r.a.createElement("div",{className:t===a?this.handleStyle(a):"Black",style:{width:"30px",height:"6px"}}),r.a.createElement("div",null,r.a.createElement("h4",null,c)))}}]),t}(r.a.Component)),G=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).handleStyle=function(e){return"kick"===e?"Kick Step-Active":"snare"===e?"Snare Step-Active":"clHat"===e?"ClHat Step-Active":"opHat"===e?"OpHat Step-Active":"loTom"===e?"LoTom Step-Active":"hiTom"===e?"HiTom Step-Active":"Black Step"},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.onClick,a=e.activeMode,n=e.index,c=e.counter,s=e.activeDrum,l=n===c;return r.a.createElement("div",{className:"Step ".concat(a&&this.handleStyle(s))},r.a.createElement("button",{onClick:t,className:"Stp-Btn"},r.a.createElement("div",{className:"Little-Step"},r.a.createElement("div",{className:"Active-Step",style:{background:"".concat(l?"red":"black")}}),r.a.createElement("p",null,n+1))))}}]),t}(r.a.Component),q={saveBeat:function(e){return E.post("/beats/",e)},listBeats:function(){return E.get("/beats/")},userBeats:function(e){return E.get("/users/".concat(e,"/beats/"))},getProfile:function(e){return E.get("/users/".concat(e))},likeBeat:function(e){return E.post("/beats/".concat(e,"/like"))},dislikeBeat:function(e){return E.delete("/beats/".concat(e,"/like"))},checkIfLiked:function(e){return E.get("/beats/".concat(e,"/like"))}},Q=a(17),X=a.n(Q),Y=a(18),_=a.n(Y),ee=(a(77),a(78),a(44)),te=a.n(ee),ae=a(45),ne=a.n(ae),re=[!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1],ce=null,se=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={drums:{kick:[].concat(re),snare:[].concat(re),clHat:[].concat(re),opHat:[].concat(re),hiTom:[].concat(re),loTom:[].concat(re)},bpm:120,activeDrum:"kick",counter:0,name:"",nameIt:!1,redirect:!1,play:!1},a.handleActiveDrum=function(e){var t=e.target.name;console.log(e.target.name),a.setState({activeDrum:t})},a.handleStep=function(e,t){var n=a.state,r=n.activeDrum,c=n.drums,s=c[r].slice();s[e]=!c[r][e],a.setState({drums:Object(i.a)({},c,Object(o.a)({},r,s))})},a.handleStart=function(){var e=a.state,t=e.bpm;e.play;ce?(clearInterval(ce),ce=null,a.setState({play:!1})):a.setState({counter:0,play:!0},function(){ce=setInterval(a.count,Math.round(6e4/t/4))})},a.count=function(){var e=a.state,t=e.counter,n=e.drums;n.kick[t]&&new Audio("/kick.mp3").play(),n.snare[t]&&new Audio("/snare.mp3").play(),n.clHat[t]&&new Audio("/clHat.mp3").play(),n.opHat[t]&&new Audio("/opHat.mp3").play(),n.loTom[t]&&new Audio("/loTom.mp3").play(),n.hiTom[t]&&new Audio("/hiTom.mp3").play(),a.setState({counter:t>14?0:t+1})},a.handleBpm=function(e){var t=Number(e.target.value);ce?a.setState({bpm:t},function(){clearInterval(ce),ce=setInterval(a.count,Math.round(6e4/t/4))}):a.setState({bpm:t})},a.saveBeat=function(e){e.preventDefault();var t=a.state,n=t.bpm,r=t.name,c=Object(i.a)({},a.state.drums,{bpm:n,name:r});q.saveBeat(c).then(function(e){a.setState({redirect:!0})},function(e){})},a.closeNameBeatOutside=function(e){var t=e.target;if(!a.wrapperRef.contains(t)){var n=a.state.nameIt;a.setState({nameIt:!n,play:!1})}},a.closeNameBeat=function(e){var t=a.state.nameIt;a.setState({nameIt:!t,play:!1})},a.nameBeat=function(e){e.preventDefault();var t=a.state,n=t.nameIt;t.play;clearInterval(ce),a.setState({nameIt:!n,play:!1})},a.handleName=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(o.a)({},n,r))},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.activeDrum,n=t.nameIt,c=t.name,s=t.play,o=this.state.drums.kick;if(this.state.redirect)return r.a.createElement(l.a,{to:"/home"});var i=o.map(function(t,n){return r.a.createElement(G,{activeMode:e.state.drums[a][n],activeDrum:a,counter:e.state.counter,kick:e.state.drums.kick[n],snare:e.state.drums.snare[n],clHat:e.state.drums.clHat[n],opHat:e.state.drums.opHat[n],hiTom:e.state.drums.hiTom[n],loTom:e.state.drums.loTom[n],onClick:e.handleStep.bind(e,n),index:n,key:n})});return r.a.createElement("div",{className:"Machine-Drum"},r.a.createElement("div",{className:"Instruments"},r.a.createElement(K,{activeDrum:a,onClick:this.handleActiveDrum,title:"Kick",name:"kick"}),r.a.createElement(K,{activeDrum:a,onClick:this.handleActiveDrum,title:"Snare",name:"snare"}),r.a.createElement(K,{activeDrum:a,onClick:this.handleActiveDrum,title:"Closed Hat",name:"clHat"}),r.a.createElement(K,{activeDrum:a,onClick:this.handleActiveDrum,title:"Open Hat",name:"opHat"}),r.a.createElement(K,{activeDrum:a,onClick:this.handleActiveDrum,title:"Low Tom",name:"loTom"}),r.a.createElement(K,{activeDrum:a,onClick:this.handleActiveDrum,title:"High Tom",name:"hiTom"})),r.a.createElement("div",{className:"Controllers"},r.a.createElement("div",{className:"Bpm-Controllers"},r.a.createElement("div",{className:"Bpm-Info"},r.a.createElement("h3",null,this.state.bpm),r.a.createElement("h3",null,"bpm")),r.a.createElement("form",{className:"Input-Form"},r.a.createElement("input",{onChange:this.handleBpm,value:this.state.bpm,type:"range",name:"bpm",min:"56",max:"240",step:"0.5"}))),r.a.createElement("img",{onClick:this.handleStart,className:"Play-Pause-Machine",src:s?_.a:X.a,alt:"playBtn"}),n&&r.a.createElement("div",{className:"modal",onClick:this.closeNameBeatOutside},r.a.createElement("div",{className:"modal-content",ref:function(t){return e.wrapperRef=t}},r.a.createElement("span",{onClick:this.closeNameBeat,className:"close-btn"},"\xd7"),r.a.createElement("form",{className:"Inputs"},r.a.createElement("input",{onChange:this.handleName,name:"name",value:c,placeholder:"Name it!"}),r.a.createElement("button",{className:"btn-Submit",onClick:this.saveBeat},"Save")))),r.a.createElement("img",{onClick:this.nameBeat,className:"Save-Btn",src:te.a,alt:"playBtn"})," ",r.a.createElement(f.b,{to:"/home"},r.a.createElement("img",{className:"Save-Btn",src:ne.a,alt:"goBack"}))),r.a.createElement("div",{className:"Markers"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null)),r.a.createElement("div",{className:"Steps"},i))}}]),t}(r.a.Component),le=a(46),oe=a.n(le),ie=(a(81),null),me=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={counter:0,play:!1},a.fetchLikes=function(){var e=a.props.beats.id;q.checkIfLiked(e).then(function(e){a.setState({liked:e.data})})},a.handleStart=function(){var e=a.props.beats.bpm,t=a.state.play;ie?(clearInterval(ie),ie=null,a.setState({play:!t})):a.setState({counter:0,play:!t},function(){ie=setInterval(a.count,Math.round(6e4/e/4))})},a.count=function(){var e=a.props.beats,t=e.clHat,n=e.opHat,r=e.loTom,c=e.hiTom,s=e.kick,l=e.snare,o=a.state.counter;s[o]&&new Audio("/kick.mp3").play(),l[o]&&new Audio("/snare.mp3").play(),t[o]&&new Audio("/clHat.mp3").play(),n[o]&&new Audio("/opHat.mp3").play(),r[o]&&new Audio("/loTom.mp3").play(),c[o]&&new Audio("/hiTom.mp3").play(),a.setState({counter:o>14?0:o+1})},a.handleLike=function(e){e.preventDefault();var t=a.props.beats.id;q.likeBeat(t).then(function(){a.props.fetchBeats(),a.fetchLikes()})},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.fetchLikes()}},{key:"componentWillReceiveProps",value:function(e){var t=this;if(ie&&(clearInterval(ie),ie=null,this.setState({play:!this.state.play})),this.props.beats.id!==e.beats.id){var a=e.beats.id;q.checkIfLiked(a).then(function(e){t.setState({liked:e.data})})}}},{key:"render",value:function(){var e=this.props.beats,t=e.bpm,a=e.name,n=e.createdAt,c=this.props.beats.owner,s=c.username,l=c.avatarURL,o=c.id,i=this.state.play,m=this.state.liked;return console.log("Cards Render"),r.a.createElement("div",{className:"Card"},r.a.createElement("div",{className:"Info"},l&&r.a.createElement(f.b,{to:"/profile/".concat(o),className:"Info-Left"},r.a.createElement("div",{className:"Image-Wrapper"},r.a.createElement("img",{className:"Card-Image",src:l,alt:""})),r.a.createElement("div",{className:"Card-Username"},r.a.createElement("h5",null,s))),r.a.createElement("div",{className:"Info-Right"},r.a.createElement("div",{className:"Info-Right-Up"},r.a.createElement("h3",null,a||"LA GRAN ROLA")),r.a.createElement("div",{className:"Info-Right-Down"},l&&r.a.createElement("div",{className:"head"},r.a.createElement("svg",{onClick:this.handleLike,className:m?"heartOn":"heartOff",viewBox:"0 0 32 29.6"},r.a.createElement("path",{d:"M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2 c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"})),r.a.createElement("h5",null,this.props.beats.likes," likes")),r.a.createElement("img",{onClick:this.handleStart,className:"Play-Pause-Btn",src:i?_.a:X.a,alt:"playBtn"})))),r.a.createElement("div",{className:"Card-Footer"},r.a.createElement("small",{className:"createdAt"},r.a.createElement(oe.a,{fromNow:!0},n)),r.a.createElement("small",{className:"bpm"},t," bpm")))}}]),t}(r.a.Component),ue=(a(82),function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={beats:[],orderedBy:{field:"createdAt",direction:"asc"}},a.fetchBeats=function(){q.listBeats().then(function(e){a.setState({beats:e.data})})},a.handleOrder=function(e){var t=e.target.name;"asc"!==a.state.orderedBy.direction?a.setState({orderedBy:{field:t,direction:"asc"}}):a.setState({orderedBy:{field:t,direction:"desc"}})},a.beatsBy=function(e,t){return"asc"!==e?a.state.beats.sort(function(e,a){return e[t]>a[t]?1:e[t]<a[t]?-1:0}):a.state.beats.sort(function(e,a){return e[t]<a[t]?1:e[t]>a[t]?-1:0})},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.fetchBeats()}},{key:"render",value:function(){var e=this,t=this.state,a=t.beats,n=t.orderedBy,c=a;return console.log("Feed Render"),"bpm"===n.field&&(c=this.beatsBy(n.direction,"bpm")),"createdAt"===n.field&&(c=this.beatsBy(n.direction,"createdAt")),"likes"===n.field&&(c=this.beatsBy(n.direction,"likes")),r.a.createElement("div",{className:"Feed"},r.a.createElement("header",{className:"BtnOrders"},r.a.createElement("button",{onClick:this.handleOrder,name:"bpm"},"Bpm"),r.a.createElement("button",{onClick:this.handleOrder,name:"createdAt"},"Recent"),r.a.createElement("button",{onClick:this.handleOrder,name:"likes"},"Popular")),c.map(function(t,a){return r.a.createElement(me,{fetchBeats:e.fetchBeats,beats:t,key:a})}))}}]),t}(r.a.Component)),de=(a(83),O(function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={username:"",email:"",avatarURL:"",beats:[]},a.fetchBeats=function(){if(a.props.match.params.id){var e=a.props.match.params.id;q.getProfile(e).then(function(e){a.setState({beats:e.data.beats,username:e.data.username,email:e.data.email,avatarURL:e.data.avatarURL})})}else{var t=a.props.user,n=t.id,r=t.username,c=t.avatarURL,s=t.email;q.userBeats(n).then(function(e){return a.setState({beats:e.data,username:r,avatarURL:c,email:s})})}},a.logout=function(){k.logout().then(function(){return a.props.onUserChange(null)})},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.fetchBeats()}},{key:"componentWillReceiveProps",value:function(e){var t=this;if(this.state.email!==e.user.email){var a=this.props.user,n=a.id,r=a.username,c=a.avatarURL,s=a.email;q.userBeats(n).then(function(e){return t.setState({beats:e.data,username:r,avatarURL:c,email:s})})}}},{key:"render",value:function(){var e=this.state,t=e.username,a=e.email,n=e.avatarURL,c=e.beats,s=this.props.match.params.id;console.log("Profile Render");var l=c.map(function(e,t){return r.a.createElement(me,{beats:e,key:t})});return r.a.createElement("div",{className:"Profile"},r.a.createElement("header",{className:"Profile-Header"},r.a.createElement("div",{className:"Profile-Image"},r.a.createElement("img",{src:n,alt:""})),r.a.createElement("div",{className:"Profile-Info"},r.a.createElement("h1",null,t),r.a.createElement("p",null,a),!s&&r.a.createElement("button",{className:"Logout",onClick:this.logout},"Logout"))),l)}}]),t}(r.a.Component))),pe=O(function(e){return e.isAuthenticated()?r.a.createElement(l.a,{to:"/home"}):r.a.createElement("div",{className:"Box-Wrapper"},r.a.createElement("div",{className:"Home"},r.a.createElement(f.b,{className:"Link",to:"/login"},r.a.createElement("button",{className:"btn-Link"},"Log in")),r.a.createElement(f.b,{className:"Link",to:"/register"},r.a.createElement("button",{className:"btn-Link"},"Register"))))}),he=a(47),fe=function(e){var t=e.component,a=Object(he.a)(e,["component"]);return r.a.createElement(N.Consumer,null,function(e){var n=e.isAuthenticated;return r.a.createElement(l.b,Object.assign({render:function(e){return n()?r.a.createElement(t,e):r.a.createElement(l.a,{to:"/login"})}},a))})};var ve=O(function(e){return r.a.createElement("main",{className:"App"},r.a.createElement(l.d,null,r.a.createElement(l.b,{exact:!0,path:"/login",component:w}),r.a.createElement(l.b,{exact:!0,path:"/register",component:D}),r.a.createElement(fe,{exact:!0,path:"/home",component:ue}),r.a.createElement(fe,{exact:!0,path:"/profile",component:de}),r.a.createElement(fe,{exact:!0,path:"/profile/:id",component:de}),r.a.createElement(l.b,{exact:!0,path:"/808",component:se}),r.a.createElement(l.b,{path:"/",component:pe})),e.isAuthenticated()&&r.a.createElement($,null))});a(84);s.a.render(r.a.createElement(f.a,null,r.a.createElement(C,null,r.a.createElement(ve,null))),document.getElementById("root"))}],[[48,1,2]]]);
//# sourceMappingURL=main.91d3df9a.chunk.js.map