(window["webpackJsonpnpm-download-counter"]=window["webpackJsonpnpm-download-counter"]||[]).push([[0],{102:function(e,t,a){"use strict";a.r(t);var n=a(39),s=a(40),o=a(44),r=a(41),i=a(17),l=a(45),c=a(2),u=a.n(c),m=a(14);a(51),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var d=a(35),h=a.n(d),p=(a(98),function(e){function t(){var e;return Object(n.a)(this,t),(e=Object(o.a)(this,Object(r.a)(t).call(this))).onSubmit=e.onSubmit.bind(Object(i.a)(e)),e.state={packageNameInState:"",startDate:new Date,endDate:new Date,responseInState:"",errorMessageInState:""},e}return Object(l.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){}},{key:"retrieveCount",value:function(){var e=new XMLHttpRequest,t=this.formatDate(this.state.startDate),a=this.formatDate(this.state.endDate);e.open("GET","https://api.npmjs.org/downloads/point/"+t+":"+a+"/"+this.state.packageNameInState,!0),e.onload=function(){var t=JSON.parse(e.response);4==e.readyState&&200==e.status?this.oncallback(t):200!=e.status&&this.onNoResultCallback(t)}.bind(this),e.send()}},{key:"oncallback",value:function(e){console.log("response"),console.log(e),this.setState({responseInState:e})}},{key:"onNoResultCallback",value:function(e){console.log("onNoResultCallback"),console.log(e),this.setState({errorMessageInState:e.error})}},{key:"onSubmit",value:function(e){this.retrieveCount()}},{key:"formatDate",value:function(e){var t=new Date(e),a=""+(t.getMonth()+1),n=""+t.getDate(),s=t.getFullYear();return a.length<2&&(a="0"+a),n.length<2&&(n="0"+n),[s,a,n].join("-")}},{key:"setStartDate",value:function(e){this.setState({startDate:e})}},{key:"setEndDate",value:function(e){this.setState({endDate:e})}},{key:"render",value:function(){var e=this;return u.a.createElement("div",{className:"mainContainer"},u.a.createElement("div",{className:"contentContainer"},u.a.createElement("p",{className:"heading"}," Check NPM Package Downloads"),u.a.createElement("form",{className:"npm-count-form"},u.a.createElement("input",{type:"text",className:"input",placeholder:"Enter package name",onChange:function(t){e.setState({packageNameInState:t.target.value,errorMessageInState:"",responseInState:""})}}),u.a.createElement("p",{className:"dateRangeInstruction"},"Select date range"),u.a.createElement("div",{className:"datePickerContainer"},u.a.createElement(u.a.Fragment,null,u.a.createElement(h.a,{className:"firstDatePicker",selectsStart:!0,selected:this.state.startDate,onChange:this.setStartDate.bind(this),startDate:this.state.startDate,endDate:this.state.endDate,maxDate:new Date,isClearable:!0}),u.a.createElement(h.a,{selectsEnd:!0,selected:this.state.endDate,onChange:this.setEndDate.bind(this),endDate:this.state.endDate,startDate:this.state.startDate,minDate:this.state.startDate,maxDate:new Date,isClearable:!0})))),u.a.createElement("div",{className:"buttonContainer"},u.a.createElement("button",{className:"button",onClick:this.onSubmit,variant:"success",disabled:""==this.state.packageNameInState},"Get Count")),""!=this.state.errorMessageInState?u.a.createElement("p",{className:"error"},"Error : ",this.state.errorMessageInState,"."):null,this.state.responseInState&&""==this.state.errorMessageInState&&this.state.packageNameInState?u.a.createElement("div",{className:"resultsContainer"},u.a.createElement("p",{className:"downloadCount"},this.state.responseInState.downloads),u.a.createElement("p",{className:"instruction"},"downloads")):null),u.a.createElement("div",{className:"disclaimerContainer"},u.a.createElement("p",{className:"APIDisclaimer"},"* Website uses NPM's API to pull download count.")))}}]),t}(u.a.Component));Object(m.render)(u.a.createElement(p,null),window.document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},46:function(e,t,a){e.exports=a(102)},51:function(e,t,a){}},[[46,1,2]]]);
//# sourceMappingURL=main.c6ec81a2.chunk.js.map