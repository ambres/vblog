(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{PUTc:function(e,t,l){e.exports={trigger:"trigger___1LXdh",logo:"logo___1gEMw"}},tCqT:function(e,t,l){"use strict";var a=l("TqRt"),d=l("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=d(l("q1tI"));l("lUTK");var u=a(l("BvKs"));l("Pwec");var r=a(l("CtXQ"));l("B9cy");var f=a(l("Ol7k")),c=l("MuoO"),o=a(l("mOP9")),s=a(l("utR0")),i=a(l("PUTc")),m=f.default.Header,p=f.default.Sider,g=f.default.Content;class E extends n.Component{constructor(){super(...arguments),this.state={collapsed:!1},this.toggle=(()=>{this.setState({collapsed:!this.state.collapsed})})}render(){return n.default.createElement(f.default,{style:{height:"100vh"}},n.default.createElement(p,{trigger:null,collapsible:!0,collapsed:this.state.collapsed},n.default.createElement("div",{className:i.default.logo}),n.default.createElement(u.default,{theme:"dark",mode:"inline",defaultSelectedKeys:["1"]},n.default.createElement(u.default.Item,{key:"1"},n.default.createElement(o.default,{to:"/login"},n.default.createElement(r.default,{type:"user"}),n.default.createElement("span",null,"nav 1"))),n.default.createElement(u.default.Item,{key:"2"},n.default.createElement(o.default,{to:"/"},n.default.createElement(r.default,{type:"video-camera"}),n.default.createElement("span",null,"nav 2"))),n.default.createElement(u.default.Item,{key:"3"},n.default.createElement(r.default,{type:"upload"}),n.default.createElement("span",null,"nav 3")))),n.default.createElement(f.default,null,n.default.createElement(m,{style:{background:"#fff",padding:0}},n.default.createElement(r.default,{className:i.default.trigger,type:this.state.collapsed?"menu-unfold":"menu-fold",onClick:this.toggle})),n.default.createElement(g,{style:{margin:"24px 16px",padding:24,background:"#fff",minHeight:280}},this.props.children)))}}var h=(0,s.default)((0,c.connect)(e=>{var t=e.global;return{global:t}})(E));t.default=h}}]);