(this.webpackJsonpgame=this.webpackJsonpgame||[]).push([[0],[,,,,,,function(e){e.exports=JSON.parse('[{"id":1,"name":"Alice In Chains","image":"imgs/aliceInChains.png"},{"id":2,"name":"A Perfect Circle","image":"imgs/aPerfectCircle.png"},{"id":3,"name":"Nirvana","image":"imgs/nirvana.png"},{"id":4,"name":"Periphery","image":"imgs/periphery.png"},{"id":5,"name":"Flyleaf","image":"imgs/flyleaf.png"},{"id":6,"name":"Staind","image":"imgs/staind.png"},{"id":7,"name":"Metallica","image":"imgs/metallica.png"},{"id":8,"name":"Tool","image":"imgs/tool.png"},{"id":9,"name":"Trivium","image":"imgs/trivium.png"}]')},,,,function(e,t,a){e.exports=a(21)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(2),s=a.n(c),r=a(7),m=a(3),l=a(4),o=a(8),u=a(5),g=a(9);a(15);var d=function(e){return i.a.createElement("img",{className:"img-container",alt:e.name,src:e.image,onClick:function(t){e.checkImg(e.id),e.shuffleArr()}})};a(16);var f=function(e){return i.a.createElement("div",{className:"wrapper"},e.children)};a(17);var h=function(e){return i.a.createElement("h1",{className:"title"},e.children)};a(18);var p=function(e){return i.a.createElement("h1",{className:"count"},"Correct clicks: ",e.count,"/9")};a(19);var v=function(e){return i.a.createElement("h1",{className:"wins"},"Wins: ",e.wins)},E=a(6),w=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).state={ids:[],count:0,wins:0},a.images=E,a.shuffleArr=function(){for(var e,t,n=a.images.length;0!==n;)t=Math.floor(Math.random()*n),n-=1,e=a.images[n],a.images[n]=a.images[t],a.images[t]=e;return a.images},a.checkImg=function(e){a.state.count>=9?(a.setState({wins:a.state.wins+1}),a.setState({count:0}),a.setState({ids:[]})):a.state.ids.includes(e)?(a.setState({count:0}),a.setState({ids:[]})):(a.setState({ids:[].concat(Object(r.a)(a.state.ids),[e])}),a.setState({count:a.state.count+1}),console.log(a.state.ids))},a.count=function(){a.setState({count:a.state.count+1})},a.divStyle={background:"#121212",paddingTop:"10px"},a}return Object(g.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{style:this.divStyle},i.a.createElement(h,null,"Don't click the same one twice!"),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-6"},i.a.createElement(v,{wins:this.state.wins})),i.a.createElement("div",{className:"col-6"},i.a.createElement(p,{count:this.state.count}))),i.a.createElement(f,null,this.images.map((function(t){return i.a.createElement(d,{shuffleArr:e.shuffleArr,checkImg:e.checkImg,id:t.id,key:t.id,name:t.name,image:t.image})}))))}}]),t}(n.Component);a(20);s.a.render(i.a.createElement(w,null),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.7b3d136a.chunk.js.map