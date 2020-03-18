(this["webpackJsonpreact-poker-calculator"]=this["webpackJsonpreact-poker-calculator"]||[]).push([[0],{120:function(e,a,t){e.exports=t(220)},125:function(e,a,t){},192:function(e,a,t){},193:function(e,a,t){},197:function(e,a,t){},220:function(e,a,t){"use strict";t.r(a);var s=t(0),d=t.n(s),n=t(10),r=t.n(n);t(125);const c=t(222).a.Title;class o extends d.a.Component{render(){return d.a.createElement("div",null,d.a.createElement(c,null,"YANNEX POC"))}}var l=o;t(192);class i extends d.a.Component{render(){return d.a.createElement("img",{src:"/imgs/cards/".concat(this.props.code,".png"),alt:"",onClick:this.props.handleClick,class:"img"})}}var m=i;t(193);class p extends d.a.Component{render(){return d.a.createElement("div",{class:"gallery"},this.props.cards.map(e=>d.a.createElement(m,{key:e.name,code:e.code,class:"gallery__img",handleClick:()=>this.props.addCard(e)})))}}var h=p,u=t(224);t(194);class C extends d.a.Component{render(){return d.a.createElement("div",{className:"table-card-containers"},d.a.createElement(u.a,{shape:"round",size:"large",type:this.props.selected===this.props.area?"primary":"",onClick:()=>this.props.setSelected(this.props.area)},"".concat(this.props.name," Cards")),d.a.createElement("div",null,this.props.cards.map(e=>d.a.createElement(m,{key:e.name,code:e.code,handleClick:()=>this.props.removeCard(e,this.props.area)}))))}}var y=C,E=(t(197),t(221)),g=t(41),S=t(18),b=t(223);const v={"font-size":"20px"};class k extends d.a.Component{render(){return d.a.createElement("div",{className:"odds-container"},d.a.createElement(E.a,{orientation:"center"},d.a.createElement(u.a,{danger:!0,type:"primary",size:"large",onClick:this.props.getOdds},"Calculate Propability of Victory")),d.a.createElement(g.a,{gutter:16},d.a.createElement(S.a,{span:8},d.a.createElement(b.a,{style:v},"Player 1 Win: ",this.props.odds1,"%")),d.a.createElement(S.a,{span:8},d.a.createElement(b.a,{style:v},"Split Pot: ",this.props.oddsTie,"%")),d.a.createElement(S.a,{span:8},d.a.createElement(b.a,{style:v},"Player 2 Win: ",this.props.odds2,"%"))))}}var f=k,D=t(51);const H=e=>e.map(e=>e.code).join("");var P=(e,a,t)=>{const s=D.CardGroup.fromString(H(e)),d=D.CardGroup.fromString(H(a)),n=D.CardGroup.fromString(H(t)),r=D.OddsCalculator.calculate([s,d],n),c=r.equities[0].getEquity(),o=r.equities[1].getEquity();return{player1:c,player2:o,tie:100-c-o}};var T=[{name:"Ace Diamonds",code:"Ad"},{name:"2 Diamonds",code:"2d"},{name:"3 Diamonds",code:"3d"},{name:"4 Diamonds",code:"4d"},{name:"5 Diamonds",code:"5d"},{name:"6 Diamonds",code:"6d"},{name:"7 Diamonds",code:"7d"},{name:"8 Diamonds",code:"8d"},{name:"9 Diamonds",code:"9d"},{name:"10 Diamonds",code:"Td"},{name:"Jack Diamonds",code:"Jd"},{name:"Queen Diamonds",code:"Qd"},{name:"King Diamonds",code:"Kd"},{name:"Ace Hearts",code:"Ah"},{name:"2 Hearts",code:"2h"},{name:"3 Hearts",code:"3h"},{name:"4 Hearts",code:"4h"},{name:"5 Hearts",code:"5h"},{name:"6 Hearts",code:"6h"},{name:"7 Hearts",code:"7h"},{name:"8 Hearts",code:"8h"},{name:"9 Hearts",code:"9h"},{name:"10 Hearts",code:"Th"},{name:"Jack Hearts",code:"Jh"},{name:"Queen Hearts",code:"Qh"},{name:"King Hearts",code:"Kh"},{name:"Ace Clubs",code:"Ac"},{name:"2 Clubs",code:"2c"},{name:"3 Clubs",code:"3c"},{name:"4 Clubs",code:"4c"},{name:"5 Clubs",code:"5c"},{name:"6 Clubs",code:"6c"},{name:"7 Clubs",code:"7c"},{name:"8 Clubs",code:"8c"},{name:"9 Clubs",code:"9c"},{name:"10 Clubs",code:"Tc"},{name:"Jack Clubs",code:"Jc"},{name:"Queen Clubs",code:"Qc"},{name:"King Clubs",code:"Kc"},{name:"Ace Spades",code:"As"},{name:"2 Spades",code:"2s"},{name:"3 Spades",code:"3s"},{name:"4 Spades",code:"4s"},{name:"5 Spades",code:"5s"},{name:"6 Spades",code:"6s"},{name:"7 Spades",code:"7s"},{name:"8 Spades",code:"8s"},{name:"9 Spades",code:"9s"},{name:"10 Spades",code:"Ts"},{name:"Jack Spades",code:"Js"},{name:"Queen Spades",code:"Qs"},{name:"King Spades",code:"Ks"}];class J extends s.Component{constructor(...e){super(...e),this.state={cards:T,player1:[],player2:[],table:[],selected:"player1",limit:2,oddsP1:null,oddsP2:null,oddsTie:null},this.availableCards=()=>this.state.cards.filter(e=>!this.state.player1.includes(e)&&!this.state.player2.includes(e)&&!this.state.table.includes(e)),this.addCard=e=>{this.state[this.state.selected].length<this.state.limit?this.setState({[this.state.selected]:[...this.state[this.state.selected],e]}):alert("You can't add any more cards to this area!")},this.removeCard=(e,a)=>{this.setState({[a]:this.state[a].filter(a=>a!==e)})},this.setSelected=e=>this.setState({selected:e,limit:"table"===e?3:2}),this.getOdds=()=>{if(this.availableCards().length===this.state.cards.length-7){let e=P(this.state.player1,this.state.player2,this.state.table);this.setState({oddsP1:e.player1,oddsP2:e.player2,oddsTie:e.tie})}else alert("You don't have enough cards for a query yet!")}}render(){const e=this.availableCards();return d.a.createElement("div",null,d.a.createElement(l,null),d.a.createElement(h,{cards:e,addCard:this.addCard}),d.a.createElement("div",{className:"table-containers"},d.a.createElement(y,{name:"Player 1",area:"player1",cards:this.state.player1,removeCard:this.removeCard,setSelected:this.setSelected,selected:this.state.selected}),d.a.createElement(y,{name:"Table",area:"table",cards:this.state.table,removeCard:this.removeCard,setSelected:this.setSelected,selected:this.state.selected}),d.a.createElement(y,{name:"Player 2",area:"player2",cards:this.state.player2,removeCard:this.removeCard,setSelected:this.setSelected,selected:this.state.selected})),d.a.createElement(f,{getOdds:this.getOdds,odds1:this.state.oddsP1,odds2:this.state.oddsP2,oddsTie:this.state.oddsTie}))}}var A=J;r.a.render(d.a.createElement(A,null),document.getElementById("root"))}},[[120,1,2]]]);
//# sourceMappingURL=main.9ab2d5bd.chunk.js.map