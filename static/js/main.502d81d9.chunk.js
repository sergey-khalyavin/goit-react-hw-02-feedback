(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{10:function(e,t,a){e.exports=a(15)},15:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(3),l=a.n(c),o=a(4),u=a(5),i=a(6),s=a(9),d=a(8),m=function(e){var t=e.title,a=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,t),a)};m.defaultProps={title:"Section Title"};var b=m,p=a(7),f=a.n(p),v=function(e){var t=e.options,a=e.onLeaveFeedback;return r.a.createElement("div",null,t.map((function(e){return r.a.createElement("button",{key:e,type:"submit",className:f.a.button,onClick:function(){return a(e)}},e)})))},g=function(e){var t=e.message;return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,t))},E=function(e){var t=e.good,a=e.neutral,n=e.bad,c=e.total,l=e.positivePercentage;return r.a.createElement(r.a.Fragment,null,c>null&&r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Good: ",t),r.a.createElement("p",null,"Neutral: ",a),r.a.createElement("p",null,"Bad: ",n),r.a.createElement("p",null,"Total: ",c),r.a.createElement("p",null,"Positive feedbacks: ",l,"%")),!c&&r.a.createElement(g,{message:"No feedback given"}))},k=(a(2),function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={good:0,neutral:0,bad:0},e.updateState=function(t){e.setState((function(e){return Object(o.a)({},t,e[t]+1)}))},e.countTotalFeedback=function(){var t=e.state;return t.good+t.bad+t.neutral},e.countPositiveFeedbackPercentage=function(){return Math.round(100*e.state.good/e.countTotalFeedback())},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.state,t=e.good,a=e.neutral,n=e.bad;return r.a.createElement(r.a.Fragment,null,r.a.createElement(b,{title:"Please leave feedback"},r.a.createElement(v,{options:Object.keys(this.state),onLeaveFeedback:this.updateState})),r.a.createElement(b,{title:"Statistics"},r.a.createElement(E,{good:t,neutral:a,bad:n,total:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage()})))}}]),a}(n.Component));l.a.render(r.a.createElement(k,null),document.querySelector("#root"))},2:function(e,t,a){},7:function(e,t,a){e.exports={button:"Feedback_button__3GZGl"}}},[[10,1,2]]]);
//# sourceMappingURL=main.502d81d9.chunk.js.map