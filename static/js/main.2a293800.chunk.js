(this["webpackJsonpsw-react-uimockup"]=this["webpackJsonpsw-react-uimockup"]||[]).push([[0],Array(21).concat([function(e,t,a){e.exports=a.p+"static/media/chemical-loading-gif.13edb3cc.gif"},function(e,t,a){e.exports=a.p+"static/media/sw-logo-white.6a5c384b.svg"},function(e,t,a){e.exports=a.p+"static/media/icon-campaign.62c57ded.svg"},function(e,t,a){e.exports=a.p+"static/media/icon-reports.9ab34b7e.svg"},function(e,t,a){e.exports=a.p+"static/media/icon-teams.6301f1b2.svg"},function(e,t,a){e.exports=a.p+"static/media/icon-leads.a8561513.svg"},function(e,t,a){e.exports=a.p+"static/media/menu-help.18c768c8.svg"},function(e,t,a){e.exports=a.p+"static/media/caret-down.a545f7c0.svg"},function(e,t,a){e.exports=a.p+"static/media/icon-mail.f3cfd0cb.svg"},function(e,t,a){e.exports=a.p+"static/media/logoTeamsGrey.c8a86363.svg"},function(e,t,a){e.exports=a.p+"static/media/logoAdd.4d5cf6a3.svg"},function(e,t,a){e.exports=a.p+"static/media/icon-search.7d19281b.svg"},function(e,t,a){e.exports=a.p+"static/media/star-default.7287f446.svg"},function(e,t,a){e.exports=a.p+"static/media/star-active.152d7b5c.svg"},function(e,t,a){e.exports=a.p+"static/media/icon-conversations-small.b825e8cf.svg"},function(e,t,a){e.exports=a.p+"static/media/icon-leads-small.175c11b8.svg"},function(e,t,a){e.exports=a(88)},,,,,function(e,t,a){},,,,,,,,,,,,,,,,,,function(e,t,a){},function(e,t,a){},,,,,,,,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(10),s=a.n(r),i=(a(42),a(1)),o=a(2),l=a(4),m=a(3),u=a(8),p=a(5),d=a(9),h=a.n(d),v=(a(60),a(7)),b=(a(61),a(21)),f=a.n(b),g=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement(v.Spring,{from:{opacity:0},to:{opacity:1},config:{duration:1e3}},(function(e){return c.a.createElement("div",{style:e},c.a.createElement("img",{src:f.a,alt:"Loading",className:"loading"}))}))}}]),t}(n.Component),y=(a(76),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).setHover=function(){return a.setState({hovered:!0})},a.cancelHover=function(){return a.setState({hovered:!1})},a.state={hovered:!1},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=this.props.logoSrc,a=this.props.name,n=this.props.style;return c.a.createElement("div",{className:n},c.a.createElement(v.Spring,{to:{transform:"scale(".concat(this.state.hovered?1.15:1,")"),opacity:this.state.hovered?.5:1},config:{duration:150}},(function(n){return c.a.createElement("img",{src:t,alt:a,className:"sidetile-logo",style:n,onMouseOver:e.setHover,onMouseOut:e.cancelHover})})))}}]),t}(n.Component)),E=(a(77),a(22)),O=a.n(E),j=a(23),N=a.n(j),S=a(24),A=a.n(S),T=a(25),k=a.n(T),x=a(26),w=a.n(x),C=a(27),F=a.n(C),D=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=[{id:1,name:"Campaigns",image:N.a,style:"sidetile"},{id:2,name:"Reports",image:A.a,style:"sidetile"},{id:3,name:"Teams",image:k.a,style:"sidetile sidetile-current"},{id:4,name:"Leads",image:w.a,style:"sidetile"},{id:5,name:"Help",image:F.a,style:"sidetile"}];return c.a.createElement("div",{className:"sidenav"},c.a.createElement("div",{className:"sidenav-swlogo"},c.a.createElement("img",{src:O.a,alt:"sw-logo-white"})),e.map((function(e){return c.a.createElement(y,{logoSrc:e.image,key:e.id,name:e.name,style:e.style})})))}}]),t}(n.Component),_=(a(78),a(79),a(28)),H=a.n(_),M=a(29),L=a.n(M),U=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.user.name,t=this.props.user.avatar,a=this.props.user.notifications_count;return c.a.createElement("div",{className:"navbar-settings"},c.a.createElement("img",{src:H.a,className:"navbar-settings-caret",alt:"caret-down"}),c.a.createElement("img",{src:t,className:"navbar-settings-dp",alt:"navbar-dp"}),c.a.createElement("span",{className:"navbar-settings-greetings"}," Hello, ",e," "),c.a.createElement("span",{className:"navbar-settings-mail"},c.a.createElement("img",{src:L.a,className:"navbar-settings-mail-logo",alt:"icon-mail"}),c.a.createElement("span",{className:"navbar-settings-mail-badge"},c.a.createElement("span",{className:"navbar-settings-mail-badge-count"},a))))}}]),t}(n.Component),W=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"navbar"},c.a.createElement("span",{className:"navbar-app-name"},"NARWHAL"),c.a.createElement("span",{className:"navbar-breadcrumbs"},"Teams"),c.a.createElement(U,{user:this.props.user}))}}]),t}(n.Component),R=(a(80),a(30)),q=a.n(R),B=a(31),I=a.n(B),J=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"header-top"},c.a.createElement("img",{src:q.a,className:"header-top-icon",alt:"logo-teams-grey"}),c.a.createElement("span",{className:"header-top-title"},"Teams"),c.a.createElement("button",{className:"header-top-button ripple"},c.a.createElement("img",{className:"header-top-button-icon",src:I.a,alt:"logo-create-new-team"}),c.a.createElement("span",{className:"header-top-button-text"},"CREATE NEW TEAM")))}}]),t}(n.Component),G=(a(81),function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.style,t=this.props.method,a=this.props.name;return c.a.createElement("div",{className:e,onClick:t}," ",c.a.createElement("span",{className:e+"-text"},a))}}]),t}(n.Component)),P=(a(82),a(32)),$=a.n(P),z=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.AllStyle,t=this.props.FavStyle,a=this.props.ArcStyle,n=[{id:1,name:"All",style:e,method:this.props.changeTabAll},{id:2,name:"Favorites",style:t,method:this.props.changeTabFav},{id:3,name:"Archived",style:a,method:this.props.changeTabArc}];return c.a.createElement("div",{className:"header-bot"},n.map((function(e){return c.a.createElement(G,{style:e.style,method:e.method,key:e.id,name:e.name})})),c.a.createElement("img",{src:$.a,alt:"search-logo",className:"header-bot-search-logo"}),c.a.createElement("input",{type:"text",placeholder:"Search team name ...",value:this.props.search,onChange:this.props.updateSearch}))}}]),t}(n.Component),K=(a(83),function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.AllStyle,t=this.props.FavStyle,a=this.props.ArcStyle;return c.a.createElement("div",{className:"header"},c.a.createElement(J,null),c.a.createElement(z,{AllStyle:e,FavStyle:t,ArcStyle:a,changeTabAll:this.props.changeTabAll,changeTabFav:this.props.changeTabFav,changeTabArc:this.props.changeTabArc,search:this.props.search,updateSearch:this.props.updateSearch}))}}]),t}(n.Component)),Q=(a(84),a(33)),V=a.n(Q),X=a(34),Y=a.n(X),Z=a(35),ee=a.n(Z),te=a(36),ae=a.n(te),ne=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).setHover=function(){return a.setState({hovered:!0})},a.cancelHover=function(){return a.setState({hovered:!1})},a.getFavorited=function(){return a.setState({favorited:a.props.teamDetails.is_favorited})},a.handleFavorite=function(){a.setState({favorited:!a.state.favorited},(function(){return h.a.patch("https://sw-test-api.herokuapp.com/teams/"+a.props.teamDetails.id,{is_favorited:a.state.favorited}).then((function(e){console.log(e)})).catch((function(e){return console.log(e)}))}))},a.state={hovered:!1,favorited:!1},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.getFavorited()}},{key:"renderTime",value:function(e){return e?c.a.createElement("span",{className:"content-card-date"},"Created ",e):c.a.createElement("span",{className:"content-card-date"},"Created date unspecified")}},{key:"renderStar",value:function(){return this.state.favorited?c.a.createElement("img",{className:"content-card-star",alt:"content-card-logo",src:Y.a,onClick:this.handleFavorite}):c.a.createElement("img",{className:"content-card-star",alt:"content-card-logo",src:V.a,onClick:this.handleFavorite})}},{key:"render",value:function(){var e=this,t=this.props.teamDetails;return c.a.createElement(v.Spring,{to:{transform:"scale(".concat(this.state.hovered?1.05:1,")"),boxShadow:this.state.hovered?"0px 0px 30px rgba(0, 0, 0, 0.2)":"0px 0px 30px rgba(0, 0, 0, 0.05)"}},(function(a){return c.a.createElement("div",{className:"content-card",onMouseOver:e.setHover,onMouseOut:e.cancelHover,style:a},c.a.createElement("div",{className:"content-card-top"},c.a.createElement("img",{className:"content-card-logo",alt:"content-card-logo",src:t.image}),c.a.createElement("span",{className:"content-card-title"},t.name),e.renderTime(t.created_at),e.renderStar(t.is_favorited)),c.a.createElement("div",{className:"content-card-mid"},c.a.createElement("span",{className:"content-card-text"},t.description)),c.a.createElement("span",{className:"content-card-bot"},c.a.createElement("img",{className:"content-card-campaign-icon",alt:"content-card-campaign-icon",src:ee.a}),c.a.createElement("span",{className:"content-card-campaign-text"},t.campaigns_count," Campaigns"),c.a.createElement("img",{className:"content-card-leads-icon",alt:"content-card-leads-icon",src:ae.a}),c.a.createElement("span",{className:"content-card-leads-text"},t.leads_count," Leads")))}))}}]),t}(n.Component),ce=(a(85),function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=this.props.teams,a=this.props.select;return c.a.createElement(v.Spring,{from:{opacity:0,marginTop:84},to:{opacity:1,marginTop:42},config:{duration:250}},(function(n){return c.a.createElement("div",{className:"content",style:n},c.a.createElement("div",{className:"content-top"},c.a.createElement("span",{className:"content-title"},a," Teams"),c.a.createElement("span",{className:"content-count"},"Showing ",t.length," of ",t.length," teams")),c.a.createElement("div",{className:"content-bot"},t.map((function(t){return c.a.createElement(ne,{teamDetails:t,key:t.id,fetchData:e.props.fetchData})}))))}))}}]),t}(n.Component)),re=(a(86),function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"decryptActivity",value:function(e,t,a){switch(t){case"increased_quota":return c.a.createElement("span",{className:"activity-caption"},c.a.createElement("b",null,e)," increased ",c.a.createElement("b",null,a),"'s quota.");case"added_leads":return c.a.createElement("span",{className:"activity-caption"},c.a.createElement("b",null,e)," added new leads to ",c.a.createElement("b",null,a),".");case"archived_team":return c.a.createElement("span",{className:"activity-caption"},c.a.createElement("b",null,e)," archived the team ",c.a.createElement("b",null,a),".");default:return c.a.createElement("span",null,"Unknown Activity - Check API")}}},{key:"unknownTime",value:function(e){return e?c.a.createElement("span",{className:"activity-time"}," ",e):c.a.createElement("span",{className:"activity-time"},"Unknown Time")}},{key:"render",value:function(){var e=this.props.activityDetails;return c.a.createElement("div",{className:"activity"},c.a.createElement("div",{className:"activity-top"},c.a.createElement("img",{src:e.person.avatar,alt:"activity-avatar",className:"activity-avatar"}),this.decryptActivity(e.person.name,e.action,e.target)),c.a.createElement("div",{className:"activity-bottom"},this.unknownTime(e.created_at)))}}]),t}(n.Component)),se=(a(87),function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.activities;return c.a.createElement(v.Spring,{from:{opacity:0,marginTop:84},to:{opacity:1,marginTop:42},config:{duration:250}},(function(t){return c.a.createElement("div",{className:"activity-feed",style:t},c.a.createElement("div",{className:"activity-feed-top"},c.a.createElement("div",{className:"activity-feed-title"},"Activity")),c.a.createElement("div",{className:"activity-feed-bot"},e.map((function(e){return c.a.createElement(re,{activityDetails:e,key:e.id})}))))}))}}]),t}(n.Component)),ie=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).fetchData=function(){a.setState({loading:!0}),h.a.get("https://sw-test-api.herokuapp.com/db").then((function(e){a.setState({loading:!1,AllTeams:e.data.teams,FavoriteTeams:e.data.teams.filter((function(e){return e.is_favorited})),ArchivedTeams:e.data.teams.filter((function(e){return e.is_archived})),activities:e.data.activities,currentUser:e.data.current_user})})).catch((function(e){console.log(e)}))},a.updateSearch=function(e){a.setState({search:e.target.value.substr(0,20)})},a.state={loading:!1,select:"All",activities:[],currentUser:{},AllTeams:[],FavoriteTeams:[],ArchivedTeams:[],AllStyle:"header-tab-current",FavStyle:"header-tab",ArcStyle:"header-tab",search:""},a.changeTabAll=a.changeTabAll.bind(Object(u.a)(a)),a.changeTabFav=a.changeTabFav.bind(Object(u.a)(a)),a.changeTabArc=a.changeTabArc.bind(Object(u.a)(a)),a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.fetchData()}},{key:"changeTabAll",value:function(){this.setState({AllStyle:"header-tab-current",FavStyle:"header-tab",ArcStyle:"header-tab",select:"All"}),this.fetchData()}},{key:"changeTabFav",value:function(){this.setState({AllStyle:"header-tab",FavStyle:"header-tab-current",ArcStyle:"header-tab",select:"Favorite"}),this.fetchData()}},{key:"changeTabArc",value:function(){this.setState({AllStyle:"header-tab",FavStyle:"header-tab",ArcStyle:"header-tab-current",select:"Archived"}),this.fetchData()}},{key:"render",value:function(){var e=this,t=this.state.select+"Teams",a=this.state[t].filter((function(t){return-1!==t.name.toLowerCase().indexOf(e.state.search.toLowerCase())}));return c.a.createElement("div",{className:"app"},c.a.createElement(D,null),!0===this.state.loading?c.a.createElement("div",{className:"app-loading"},c.a.createElement(g,null)):c.a.createElement("div",{className:"app-main"},c.a.createElement(W,{user:this.state.currentUser}),c.a.createElement(K,{select:this.state.select,AllStyle:this.state.AllStyle,FavStyle:this.state.FavStyle,ArcStyle:this.state.ArcStyle,changeTabAll:this.changeTabAll,changeTabFav:this.changeTabFav,changeTabArc:this.changeTabArc,search:this.state.search,updateSearch:this.updateSearch}),c.a.createElement("div",{className:"app-body"},c.a.createElement(ce,{teams:a,select:this.state.select,fetchData:this.fetchData}),c.a.createElement(se,{activities:this.state.activities}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(c.a.createElement(ie,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}]),[[37,1,2]]]);
//# sourceMappingURL=main.2a293800.chunk.js.map