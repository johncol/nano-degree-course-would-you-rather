(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{30:function(e,t,n){e.exports=n(88)},39:function(e,t,n){},41:function(e,t,n){},43:function(e,t,n){},45:function(e,t,n){},48:function(e,t,n){},50:function(e,t,n){},52:function(e,t,n){},54:function(e,t,n){},56:function(e,t,n){},58:function(e,t,n){},84:function(e,t,n){},86:function(e,t,n){},88:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(22),i=n.n(r),s=n(13),u=n(4),c=n(5),l=n(6),d=n(8),m=n(7),p=n(9),f=n(89),h=n(24),b=n(3),v=n(2),O=(n(39),function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).getInputProps=function(){var e=Object(v.a)({},n.props);return delete e.saveRef,delete e.id,delete e.label,e},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.id,n=e.label,a=e.saveRef,r=this.getInputProps();return o.a.createElement("div",{className:"input-field"},o.a.createElement("input",Object.assign({},r,{ref:a})),o.a.createElement("label",{htmlFor:t},n))}}]),t}(a.Component)),w=(n(41),function(e){var t=e.className?" "+e.className:"";return o.a.createElement("button",Object.assign({},e,{className:"btn waves-effect waves-light"+t,name:"action"}))}),E=1,j={sarahedo:{id:"sarahedo",name:"Sarah Edo",avatarURL:"../../images/girl-0.png",answers:{"8xf0y6ziyjabvozdd253nd":"optionOne","6ni6ok3ym7mf1p33lnez":"optionOne",am8ehyc8byjqgar0jgpub9:"optionTwo",loxhs1bqm25b708cmbf3g:"optionTwo"},questions:["8xf0y6ziyjabvozdd253nd","am8ehyc8byjqgar0jgpub9"]},tylermcginnis:{id:"tylermcginnis",name:"Tyler McGinnis",avatarURL:"../../images/man-0.png",answers:{vthrdm985a262al8qx3do:"optionOne",xj352vofupe1dqz9emx13r:"optionTwo"},questions:["loxhs1bqm25b708cmbf3g","vthrdm985a262al8qx3do"]},johndoe:{id:"johndoe",name:"John Doe",avatarURL:"../../images/man-1.png",answers:{xj352vofupe1dqz9emx13r:"optionOne",vthrdm985a262al8qx3do:"optionTwo","6ni6ok3ym7mf1p33lnez":"optionOne"},questions:["6ni6ok3ym7mf1p33lnez","xj352vofupe1dqz9emx13r"]}},y={"8xf0y6ziyjabvozdd253nd":{id:"8xf0y6ziyjabvozdd253nd",author:"sarahedo",timestamp:1467166872634,optionOne:{votes:["sarahedo"],text:"have horrible short term memory"},optionTwo:{votes:[],text:"have horrible long term memory"}},"6ni6ok3ym7mf1p33lnez":{id:"6ni6ok3ym7mf1p33lnez",author:"johndoe",timestamp:1468479767190,optionOne:{votes:[],text:"become a superhero"},optionTwo:{votes:["johndoe","sarahedo"],text:"become a supervillian"}},am8ehyc8byjqgar0jgpub9:{id:"am8ehyc8byjqgar0jgpub9",author:"sarahedo",timestamp:1488579767190,optionOne:{votes:[],text:"be telekinetic"},optionTwo:{votes:["sarahedo"],text:"be telepathic"}},loxhs1bqm25b708cmbf3g:{id:"loxhs1bqm25b708cmbf3g",author:"tylermcginnis",timestamp:1482579767190,optionOne:{votes:[],text:"be a front-end developer"},optionTwo:{votes:["sarahedo"],text:"be a back-end developer"}},vthrdm985a262al8qx3do:{id:"vthrdm985a262al8qx3do",author:"tylermcginnis",timestamp:1489579767190,optionOne:{votes:["tylermcginnis"],text:"find $50 yourself"},optionTwo:{votes:["johndoe"],text:"have your best friend find $500"}},xj352vofupe1dqz9emx13r:{id:"xj352vofupe1dqz9emx13r",author:"johndoe",timestamp:1493579767190,optionOne:{votes:["johndoe"],text:"write JavaScript"},optionTwo:{votes:["tylermcginnis"],text:"write Swift"}}};function g(e){return new Promise(function(t,n){var a=e.author,o=function(e){var t=e.optionOneText,n=e.optionTwoText,a=e.author;return{id:Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15),timestamp:Date.now(),author:a,optionOne:{votes:[],text:t},optionTwo:{votes:[],text:n}}}(e);setTimeout(function(){y=Object(v.a)({},y,Object(b.a)({},o.id,o)),j=Object(v.a)({},j,Object(b.a)({},a,Object(v.a)({},j[a],{questions:j[a].questions.concat([o.id])}))),t(o)},E)})}var S=function(){return{type:"SHOW_LOADER"}},_=function(){return{type:"HIDE_LOADER"}},q="SHOW_LOADER",N="HIDE_LOADER",A=function(){return S()},T=function(){return _()},k="SAVE_USER",x="SAVE_USER_QUESTION",L="SAVE_USER_ANSWER",U="UNSAVE_USER_ANSWER",C="SAVE_ALL_USERS",I=function(e){return{type:"SAVE_USER",payload:e}},V=function(e,t){return{type:"SAVE_USER_QUESTION",payload:{username:e,questionId:t}}},R=function(e,t,n){return{type:"SAVE_USER_ANSWER",payload:{username:e,questionId:t,option:n}}},Q=function(e,t){return{type:"UNSAVE_USER_ANSWER",payload:{username:e,questionId:t}}},F=function(e){return{type:"SAVE_ALL_USERS",payload:e}},z=function(){return function(e){return e(A()),new Promise(function(e,t){setTimeout(function(){return e(Object(v.a)({},j))},E)}).then(function(t){e(T()),e(F(t))}).catch(function(t){e(T()),console.warn("Error fetching all users:",t)})}},D=function(e){return{type:"LOGIN_SUCCESS",payload:e}},M=function(e){return{type:"LOGIN_FAIL",payload:e}},W=function(){return{type:"LOGOUT"}},B="LOGIN_SUCCESS",P="LOGIN_FAIL",G="LOGOUT",H=function(e,t){return function(t){return t(A()),function(e,t){return new Promise(function(t,n){setTimeout(function(){var a=j[e];a?t({user:a}):n({message:"Username or password invalid"})},E)})}(e).then(function(e){t(T()),t(I(e.user)),t(D(e.user.id))}).catch(function(e){t(T()),t(M(e.message))})}},J=function(){return function(e){return e(W())}},Y=(n(43),function(){return o.a.createElement("header",{className:"content content--red"},o.a.createElement("h1",null,"Login area"))}),$=function(e){var t=e.auth;return t.error?o.a.createElement("p",{className:"login__result"},t.error):null},K=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={username:"johndoe",password:"johndoe"},n.updateField=function(e,t){n.setState(Object(b.a)({},t,e.target.value))},n.handleFormSubmit=function(e){e.preventDefault();var t=n.state,a=t.username,o=t.password;n.props.login(a,o),n.passwordInput.focus(),n.passwordInput.select()},n.fieldsAreEmpty=function(){var e=n.state,t=e.username,a=e.password;return""===t.trim()||""===a.trim()},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.state,n=t.username,a=t.password,r=this.props.auth;return o.a.createElement("form",{className:"login",autoComplete:"off",onSubmit:this.handleFormSubmit},o.a.createElement(Y,null),o.a.createElement("div",{className:"content content--grey"},o.a.createElement($,{auth:r}),o.a.createElement(O,{label:"Username",id:"username",type:"text",value:n,onChange:function(t){return e.updateField(t,"username")}}),o.a.createElement(O,{label:"Password",id:"password",type:"password",value:a,onChange:function(t){return e.updateField(t,"password")},saveRef:function(t){return e.passwordInput=t}}),o.a.createElement(w,{disabled:this.fieldsAreEmpty()},"Submit")))}}]),t}(a.Component),X=Object(u.b)(function(e){return{auth:e.auth}},function(e){return{login:function(t,n){return e(H(t,n))}}})(K),Z=n(90),ee=n(91),te=function(e){var t=e.onClick;return o.a.createElement("i",{className:"material-icons nav__toggle",onClick:t},"format_align_justify")},ne=(n(45),function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={visibleOnSmallBreakpoint:!1},n.toggleMenuVisibility=function(){n.setState(function(e){return{visibleOnSmallBreakpoint:!e.visibleOnSmallBreakpoint}})},n.hideMenu=function(){n.setState({visibleOnSmallBreakpoint:!1})},n.logout=function(){var e=n.props,t=e.logout;e.history.push("/"),t()},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.username,t="nav"+(this.state.visibleOnSmallBreakpoint?" nav--toggle-visible":"");return o.a.createElement("nav",{className:t},o.a.createElement(te,{onClick:this.toggleMenuVisibility}),o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement(Z.a,{className:"nav__link",exact:!0,to:"/",onClick:this.hideMenu},"Home")),o.a.createElement("li",null,o.a.createElement(Z.a,{className:"nav__link",to:"/add-question",onClick:this.hideMenu},"Add question")),o.a.createElement("li",null,o.a.createElement(Z.a,{className:"nav__link",to:"/leaderboard",onClick:this.hideMenu},"Leaderboard")),o.a.createElement("li",null,o.a.createElement("span",{to:"/logout",className:"nav__link nav__link--user",onClick:this.logout},"Logout ",o.a.createElement("span",{className:"nav__link__username"},e),o.a.createElement("i",{className:"material-icons tiny"},"person_outline")))))}}]),t}(a.Component)),ae=Object(ee.a)(Object(u.b)(function(e){return{username:e.auth.username}},function(e){return{logout:function(){return e(J())}}})(ne)),oe=(n(48),function(e){return{type:"SAVE_ALL_QUESTIONS",payload:e}}),re=function(e){return{type:"ADD_QUESTION",payload:e}},ie=function(e,t,n){return{type:"ANSWER_QUESTION",payload:{username:e,questionId:t,option:n}}},se=function(e,t,n){return{type:"UNANSWER_QUESTION",payload:{username:e,questionId:t,option:n}}},ue="SAVE_ALL_QUESTIONS",ce="ADD_QUESTION",le="ANSWER_QUESTION",de="UNANSWER_QUESTION",me=function(){return function(e){return e(A()),new Promise(function(e,t){setTimeout(function(){return e(Object(v.a)({},y))},E)}).then(function(t){e(T()),e(oe(t))}).catch(function(t){e(T()),console.warn("Error fetching all questions:",t)})}},pe=function(e){return function(t){return t(A()),g(e).then(function(e){t(T()),t(re(e)),t(V(e.author,e.id))}).catch(function(e){t(T()),console.warn("Error fetching all questions:",e)})}},fe=function(e,t,n){return function(a){return a(ie(e,t,n)),a(R(e,t,n)),function(e){var t=e.authedUser,n=e.qid,a=e.answer;return new Promise(function(e,o){setTimeout(function(){j=Object(v.a)({},j,Object(b.a)({},t,Object(v.a)({},j[t],{answers:Object(v.a)({},j[t].answers,Object(b.a)({},n,a))}))),y=Object(v.a)({},y,Object(b.a)({},n,Object(v.a)({},y[n],Object(b.a)({},a,Object(v.a)({},y[n][a],{votes:y[n][a].votes.concat([t])}))))),e()},E)})}({authedUser:e,qid:t,answer:n}).catch(function(){a(se(e,t,n)),a(Q(e,t)),alert("An error occured in the server, the question could not be saved")})}},he=function(e){var t=e.text;return o.a.createElement("div",{className:"question-preview__text content--red"},t)},be=function(e){var t=e.onClick;return o.a.createElement("button",{className:"question-preview__button content--grey",onClick:t},o.a.createElement("i",{className:"material-icons"},"check"))},ve=function(e){var t=e.option,n=e.text,a=e.allowToAnswer,r=e.onSelected,i="question-preview__option--"+(1===t?"one":"two");return o.a.createElement("section",{className:"question-preview__option "+i},a&&o.a.createElement(be,{onClick:r}),o.a.createElement(he,{text:n}))},Oe=Object(u.b)(function(e,t){return Object(v.a)({},t,{username:e.auth.username})},function(e){return{answerQuestion:function(t,n,a){e(fe(t,n,a))}}})(function(e){var t=e.username,n=e.allowToAnswer,a=e.answerQuestion,r=e.question,i=r.optionOne,s=r.optionTwo;return o.a.createElement("article",{className:"question-preview"},o.a.createElement(ve,{option:1,text:i.text,allowToAnswer:n,onSelected:function(){return a(t,r.id,"optionOne")}}),o.a.createElement(ve,{option:2,text:s.text,allowToAnswer:n,onSelected:function(){return a(t,r.id,"optionTwo")}}))}),we=(n(50),Object(u.b)(function(e,t){return Object(v.a)({},t,{loading:e.loader})},function(e){return{}})(function(e){var t=e.title,n=e.zeroItemsMessage,a=e.questions,r=e.allowToAnswer,i=e.loading;return o.a.createElement("div",{className:"question-preview-list"},o.a.createElement("h1",null,t),!i&&0===a.length&&o.a.createElement("p",null,n),o.a.createElement("ul",null,a.map(function(e){return o.a.createElement("li",{key:e.id},o.a.createElement(Oe,{question:e,allowToAnswer:r}))})))})),Ee=(n(52),function(e){var t,n=e.label,a=e.onClick,r=e.selectedCodition;return o.a.createElement("button",{type:"button",onClick:a,className:(t=r,t?"selected":"")},n)}),je=function(e){var t=e.showBothLists,n=e.showUnansweredList,a=e.showAnsweredList,r=e.unanswerdListVisible,i=e.answerdListVisible;return o.a.createElement("section",{className:"list-toggle"},o.a.createElement("span",null,"Showing: "),o.a.createElement(Ee,{label:"both",onClick:t,selectedCodition:r&&i}),o.a.createElement(Ee,{label:"unanswered",onClick:n,selectedCodition:r&&!i}),o.a.createElement(Ee,{label:"answered",onClick:a,selectedCodition:!r&&i}))},ye=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={unanswerdListVisible:!0,answerdListVisible:!0},n.showBothLists=function(){n.setState({unanswerdListVisible:!0,answerdListVisible:!0})},n.showUnansweredList=function(){n.setState({unanswerdListVisible:!0,answerdListVisible:!1})},n.showAnsweredList=function(){n.setState({unanswerdListVisible:!1,answerdListVisible:!0})},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.unansweredQuestions,n=e.answeredQuestions,a=this.state,r=a.unanswerdListVisible,i=a.answerdListVisible;return o.a.createElement("div",null,o.a.createElement(je,{showBothLists:this.showBothLists,showUnansweredList:this.showUnansweredList,showAnsweredList:this.showAnsweredList,unanswerdListVisible:r,answerdListVisible:i}),r&&o.a.createElement(we,{questions:t,allowToAnswer:!0,title:"Unanswered questions",zeroItemsMessage:"Create a new question using the option in the upper menu"}),i&&o.a.createElement(we,{questions:n,allowToAnswer:!1,title:"Answered questions",zeroItemsMessage:"You haven't answered any question yet"}))}}]),t}(a.Component),ge=function(e,t){return t.timestamp-e.timestamp},Se=Object(u.b)(function(e){var t=Object.values(e.questions),n=e.auth.username,a=e.users.list[n],o=Object.keys(a.answers);return{unansweredQuestions:t.filter(function(e){return-1===o.indexOf(e.id)}).sort(ge),answeredQuestions:t.filter(function(e){return-1!==o.indexOf(e.id)}).sort(ge)}},function(e){return{}})(ye),_e=function(e){return 13===e.keyCode},qe=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).handleEnter=function(e){var t=n.props.handleEnter;_e(e)&&"function"===typeof t&&(e.preventDefault(),t())},n.gainFocusIfShould=function(){n.props.focused&&n.input.focus()},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidUpdate",value:function(){this.gainFocusIfShould()}},{key:"componentDidMount",value:function(){this.gainFocusIfShould()}},{key:"render",value:function(){var e=this,t=this.props,n=t.placeholder,a=t.name,r=t.value,i=t.updateValue;return o.a.createElement("div",{className:"add-question__option input-field"},o.a.createElement("input",{className:"add-question__input",type:"text",name:a,placeholder:n,value:r,onChange:i,onKeyDown:this.handleEnter,ref:function(t){return e.input=t}}))}}]),t}(a.Component),Ne=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={optionOne:"",optionTwo:"",focusOne:!0,focusTwo:!1},n.giveFocusToOptionTwo=function(){n.setState({focusOne:!1,focusTwo:!0})},n.updateOptionValue=function(e){var t,a=e.target.name,o=e.target.value;n.setState((t={},Object(b.a)(t,a,o),Object(b.a)(t,"focusOne","optionOne"===a),Object(b.a)(t,"focusTwo","optionTwo"===a),t))},n.handleSubmit=function(e){if(e.preventDefault(),n.bothOptionsWereFilled()){var t=n.state,a=t.optionOne,o=t.optionTwo;n.props.addQuestion({optionOne:a,optionTwo:o})}},n.bothOptionsWereFilled=function(){var e=n.state,t=e.optionOne,a=e.optionTwo,o=""!==t.trim(),r=""!==a.trim();return o&&r},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state,t=e.optionOne,n=e.optionTwo,a=e.focusOne,r=e.focusTwo;return o.a.createElement("form",{onSubmit:this.handleSubmit,autoComplete:"off"},o.a.createElement(qe,{name:"optionOne",placeholder:"this",value:t,updateValue:this.updateOptionValue,handleEnter:this.giveFocusToOptionTwo,focused:a}),o.a.createElement("span",{className:"add-question__option-separator"},"Or"),o.a.createElement(qe,{name:"optionTwo",placeholder:"that",value:n,updateValue:this.updateOptionValue,focused:r}),o.a.createElement(w,{className:"add-question__button",disabled:!this.bothOptionsWereFilled()},"Add"))}}]),t}(a.Component),Ae=function(){return o.a.createElement("h1",{className:"add-question__title"},"Would you",o.a.createElement("br",null),"rather")},Te=(n(54),function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).addQuestion=function(e){var t=n.props,a=t.username,o=t.addQuestion,r=t.history;o(e.optionOne,e.optionTwo,a),r.push("/")},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("section",{className:"add-question"},o.a.createElement(Ae,null),o.a.createElement(Ne,{addQuestion:this.addQuestion}))}}]),t}(a.Component)),ke=Object(u.b)(function(e){return{username:e.auth.username}},function(e){return{addQuestion:function(t,n,a){e(pe({optionOneText:t,optionTwoText:n,author:a}))}}})(Te),xe=(n(56),function(){return o.a.createElement("div",{className:"icons-credit"},"Icons made by"," ",o.a.createElement("a",{href:"http://www.freepik.com/",title:"Freepik"},"Freepik")," ","from"," ",o.a.createElement("a",{href:"https://www.flaticon.com/",title:"Flaticon"},"www.flaticon.com")," ","is licensed by"," ",o.a.createElement("a",{href:"http://creativecommons.org/licenses/by/3.0/",title:"Creative Commons BY 3.0",target:"_blank",rel:"noopener noreferrer"}," ","CC 3.0 BY"))}),Le=function(e){var t=e.user;return o.a.createElement("img",{src:t.avatarURL,alt:t.id+" avatar",className:"leaderboard__avatar"})},Ue=function(e){var t=e.users;return o.a.createElement("table",{className:"leaderboard centered"},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null),o.a.createElement("th",null,"user"),o.a.createElement("th",null,"questions created"),o.a.createElement("th",null,"questions answered"),o.a.createElement("th",null,"rank"))),o.a.createElement("tbody",null,t.map(function(e,t){return o.a.createElement("tr",{key:e.id},o.a.createElement("td",null,o.a.createElement(Le,{user:e})),o.a.createElement("td",null,e.id),o.a.createElement("td",null,e.questions),o.a.createElement("td",null,e.answers),o.a.createElement("td",null,t+1))})))},Ce=(n(58),function(e){function t(){return Object(c.a)(this,t),Object(d.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.shouldFetchUsers,n=e.fetchAllUsers;t&&n()}},{key:"render",value:function(){var e=this.props.users;return o.a.createElement(a.Fragment,null,o.a.createElement(Ue,{users:e}),o.a.createElement(xe,null))}}]),t}(a.Component)),Ie=Object(u.b)(function(e){var t=Object.values(e.users.list).map(function(e){var t=e.questions.length,n=Object.keys(e.answers).length,a=t+n;return Object(v.a)({},e,{questions:t,answers:n,score:a})}).sort(function(e,t){return t.score-e.score});return{shouldFetchUsers:!e.users.allUsersRequested,users:t}},function(e){return{fetchAllUsers:function(){return e(z())}}})(Ce),Ve=function(e){function t(){return Object(c.a)(this,t),Object(d.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchAllQuestions()}},{key:"render",value:function(){return this.props.auth.logged?o.a.createElement(f.a,{basename:"/nano-degree-would-you-rather/"},o.a.createElement("div",{className:"main-container"},o.a.createElement(ae,null),o.a.createElement("div",null,o.a.createElement(h.a,{exact:!0,path:"/",component:Se}),o.a.createElement(h.a,{exact:!0,path:"/add-question",component:ke}),o.a.createElement(h.a,{exact:!0,path:"/leaderboard",component:Ie})))):o.a.createElement(X,null)}}]),t}(a.Component),Re=Object(u.b)(function(e){return{auth:e.auth}},function(e){return{fetchAllQuestions:function(){e(me())}}})(Ve),Qe=n(27),Fe=n.n(Qe),ze=(n(84),Object(u.b)(function(e){return{show:e.loader}})(function(e){return e.show?o.a.createElement("div",{className:"loader-outer"},o.a.createElement("div",{className:"loader-inner"},o.a.createElement(Fe.a,{type:"Puff",color:"#ff474f",height:"100",width:"100"}))):null})),De=function(e,t){return{logged:!0,username:t.payload,time:Date.now()}},Me=function(e,t){return{logged:!1,error:t.payload}},We=function(e,t){return{logged:!1}},Be=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case B:return De(e,t);case P:return Me(e,t);case G:return We(e,t);default:return e}},Pe=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];switch((arguments.length>1?arguments[1]:void 0).type){case q:return!0;case N:return!1;default:return e}},Ge=n(15),He=function(e,t){return Object(v.a)({},t.payload)},Je=function(e,t){var n=t.payload;return Object(v.a)({},e,Object(b.a)({},n.id,n))},Ye=function(e,t){var n=t.payload,a=n.username,o=n.questionId,r=n.option,i=e[o],s=i[r],u=[].concat(Object(Ge.a)(s.votes),[a]);return Object(v.a)({},e,Object(b.a)({},o,Object(v.a)({},i,Object(b.a)({},r,Object(v.a)({},s,{votes:u})))))},$e=function(e,t){var n=t.payload,a=n.username,o=n.questionId,r=n.option,i=e[o],s=i[r],u=s.votes.filter(function(e){return e!==a});return Object(v.a)({},e,Object(b.a)({},o,Object(v.a)({},i,Object(b.a)({},r,Object(v.a)({},s,{votes:u})))))},Ke=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ue:return He(e,t);case ce:return Je(e,t);case le:return Ye(e,t);case de:return $e(e,t);default:return e}},Xe={allUsersRequested:!1,list:{}},Ze=function(e,t){var n=t.payload;return Object(v.a)({},e,{list:Object(v.a)({},e.list,Object(b.a)({},n.id,n))})},et=function(e,t){var n=t.payload,a=n.username,o=n.questionId,r=e.list[a],i=[].concat(Object(Ge.a)(r.questions),[o]);return Object(v.a)({},e,{list:Object(v.a)({},e.list,Object(b.a)({},r.id,Object(v.a)({},r,{questions:i})))})},tt=function(e,t){var n=t.payload,a=n.username,o=n.questionId,r=n.option,i=e.list[a],s=Object(v.a)({},i.answers,Object(b.a)({},o,r));return Object(v.a)({},e,{list:Object(v.a)({},e.list,Object(b.a)({},i.id,Object(v.a)({},i,{answers:s})))})},nt=function(e,t){var n=t.payload,a=n.username,o=n.questionId,r=e.list[a],i=Object(v.a)({},r.answers);return delete i[o],Object(v.a)({},e,{list:Object(v.a)({},e.list,Object(b.a)({},r.id,Object(v.a)({},r,{answers:i})))})},at=function(e,t){return{allUsersRequested:!0,list:Object(v.a)({},t.payload)}},ot=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Xe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case k:return Ze(e,t);case x:return et(e,t);case L:return tt(e,t);case U:return nt(e,t);case C:return at(e,t);default:return e}},rt=Object(s.c)({auth:Be,loader:Pe,questions:Ke,users:ot}),it=n(28),st=function(e){return function(t){return function(n){console.group(n.type),void 0!==n.payload&&console.log("Payload: ",n.payload);var a=t(n);return console.log("New state: ",e.getState()),console.groupEnd(),a}}},ut=Object(s.a)(it.a,st),ct=(n(86),Object(s.d)(rt,ut));i.a.render(o.a.createElement(u.a,{store:ct},o.a.createElement(ze,null),o.a.createElement(Re,null)),document.getElementById("root"))}},[[30,2,1]]]);
//# sourceMappingURL=main.2e0359f8.chunk.js.map