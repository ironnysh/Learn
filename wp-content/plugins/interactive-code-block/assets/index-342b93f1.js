import{_ as G}from"./preload-helper-41c905a7.js";import{j as et}from"./jsx-runtime-93b56483.js";import{E as S,F as de,c as tt,S as nt,a as m,T as J,C as rt,b as ot,I as pe,g as ge,i as R,d as ye,A as ke,e as lt,m as b,s as X,f as ct,h as Ae,j as q,D as st,k as T,H as it,l as Be,n as at,o as ut,p as ft,q as ht,r as mt,t as dt,u as pt,v as gt,w as yt,x as kt,y as At,z as Bt,B as St,G as Ct}from"./index-8f2db1d0.js";import{N as F,t as a}from"./index-d6204322.js";import{c as xt,a as Dt}from"./index-e4a952a6.js";const Lt=e=>{let{state:t}=e,r=t.doc.lineAt(t.selection.main.from),n=Z(e.state,r.from);return n.line?bt(e):n.block?Et(e):!1};function Y(e,t){return({state:r,dispatch:n})=>{if(r.readOnly)return!1;let l=e(t,r);return l?(n(r.update(l)),!0):!1}}const bt=Y(Rt,0),Mt=Y(Se,0),Et=Y((e,t)=>Se(e,t,Ot(t)),0);function Z(e,t){let r=e.languageDataAt("commentTokens",t);return r.length?r[0]:{}}const E=50;function vt(e,{open:t,close:r},n,l){let o=e.sliceDoc(n-E,n),c=e.sliceDoc(l,l+E),s=/\s*$/.exec(o)[0].length,i=/^\s*/.exec(c)[0].length,u=o.length-s;if(o.slice(u-t.length,u)==t&&c.slice(i,i+r.length)==r)return{open:{pos:n-s,margin:s&&1},close:{pos:l+i,margin:i&&1}};let f,h;l-n<=2*E?f=h=e.sliceDoc(n,l):(f=e.sliceDoc(n,n+E),h=e.sliceDoc(l-E,l));let p=/^\s*/.exec(f)[0].length,x=/\s*$/.exec(h)[0].length,L=h.length-x-r.length;return f.slice(p,p+t.length)==t&&h.slice(L,L+r.length)==r?{open:{pos:n+p+t.length,margin:/\s/.test(f.charAt(p+t.length))?1:0},close:{pos:l-x-r.length,margin:/\s/.test(h.charAt(L-1))?1:0}}:null}function Ot(e){let t=[];for(let r of e.selection.ranges){let n=e.doc.lineAt(r.from),l=r.to<=n.to?n:e.doc.lineAt(r.to),o=t.length-1;o>=0&&t[o].to>n.from?t[o].to=l.to:t.push({from:n.from,to:l.to})}return t}function Se(e,t,r=t.selection.ranges){let n=r.map(o=>Z(t,o.from).block);if(!n.every(o=>o))return null;let l=r.map((o,c)=>vt(t,n[c],o.from,o.to));if(e!=2&&!l.every(o=>o))return{changes:t.changes(r.map((o,c)=>l[c]?[]:[{from:o.from,insert:n[c].open+" "},{from:o.to,insert:" "+n[c].close}]))};if(e!=1&&l.some(o=>o)){let o=[];for(let c=0,s;c<l.length;c++)if(s=l[c]){let i=n[c],{open:u,close:f}=s;o.push({from:u.pos-i.open.length,to:u.pos+u.margin},{from:f.pos-f.margin,to:f.pos+i.close.length})}return{changes:o}}return null}function Rt(e,t,r=t.selection.ranges){let n=[],l=-1;for(let{from:o,to:c}of r){let s=n.length,i=1e9,u=Z(t,o).line;if(u){for(let f=o;f<=c;){let h=t.doc.lineAt(f);if(h.from>l&&(o==c||c>h.from)){l=h.from;let p=/^\s*/.exec(h.text)[0].length,x=p==h.length,L=h.text.slice(p,p+u.length)==u?p:-1;p<h.text.length&&p<i&&(i=p),n.push({line:h,comment:L,token:u,indent:p,empty:x,single:!1})}f=h.to+1}if(i<1e9)for(let f=s;f<n.length;f++)n[f].indent<n[f].line.text.length&&(n[f].indent=i);n.length==s+1&&(n[s].single=!0)}}if(e!=2&&n.some(o=>o.comment<0&&(!o.empty||o.single))){let o=[];for(let{line:s,token:i,indent:u,empty:f,single:h}of n)(h||!f)&&o.push({from:s.from+u,insert:i+" "});let c=t.changes(o);return{changes:c,selection:t.selection.map(c,1)}}else if(e!=1&&n.some(o=>o.comment>=0)){let o=[];for(let{line:c,comment:s,token:i}of n)if(s>=0){let u=c.from+s,f=u+i.length;c.text[f-c.from]==" "&&f++,o.push({from:u,to:f})}return{changes:o}}return null}const K=ke.define(),Tt=ke.define(),wt=de.define(),Ce=de.define({combine(e){return tt(e,{minDepth:100,newGroupDelay:500,joinToEvent:(t,r)=>r},{minDepth:Math.max,newGroupDelay:Math.min,joinToEvent:(t,r)=>(n,l)=>t(n,l)||r(n,l)})}});function It(e){let t=0;return e.iterChangedRanges((r,n)=>t=n),t}const xe=nt.define({create(){return B.empty},update(e,t){let r=t.state.facet(Ce),n=t.annotation(K);if(n){let i=t.docChanged?m.single(It(t.changes)):void 0,u=g.fromTransaction(t,i),f=n.side,h=f==0?e.undone:e.done;return u?h=w(h,h.length,r.minDepth,u):h=be(h,t.startState.selection),new B(f==0?n.rest:h,f==0?h:n.rest)}let l=t.annotation(Tt);if((l=="full"||l=="before")&&(e=e.isolate()),t.annotation(J.addToHistory)===!1)return t.changes.empty?e:e.addMapping(t.changes.desc);let o=g.fromTransaction(t),c=t.annotation(J.time),s=t.annotation(J.userEvent);return o?e=e.addChanges(o,c,s,r,t):t.selection&&(e=e.addSelection(t.startState.selection,c,s,r.newGroupDelay)),(l=="full"||l=="after")&&(e=e.isolate()),e},toJSON(e){return{done:e.done.map(t=>t.toJSON()),undone:e.undone.map(t=>t.toJSON())}},fromJSON(e){return new B(e.done.map(g.fromJSON),e.undone.map(g.fromJSON))}});function Nt(e={}){return[xe,Ce.of(e),S.domEventHandlers({beforeinput(t,r){let n=t.inputType=="historyUndo"?De:t.inputType=="historyRedo"?j:null;return n?(t.preventDefault(),n(r)):!1}})]}function I(e,t){return function({state:r,dispatch:n}){if(!t&&r.readOnly)return!1;let l=r.field(xe,!1);if(!l)return!1;let o=l.pop(e,r,t);return o?(n(o),!0):!1}}const De=I(0,!1),j=I(1,!1),Pt=I(0,!0),Vt=I(1,!0);class g{constructor(t,r,n,l,o){this.changes=t,this.effects=r,this.mapped=n,this.startSelection=l,this.selectionsAfter=o}setSelAfter(t){return new g(this.changes,this.effects,this.mapped,this.startSelection,t)}toJSON(){var t,r,n;return{changes:(t=this.changes)===null||t===void 0?void 0:t.toJSON(),mapped:(r=this.mapped)===null||r===void 0?void 0:r.toJSON(),startSelection:(n=this.startSelection)===null||n===void 0?void 0:n.toJSON(),selectionsAfter:this.selectionsAfter.map(l=>l.toJSON())}}static fromJSON(t){return new g(t.changes&&rt.fromJSON(t.changes),[],t.mapped&&ot.fromJSON(t.mapped),t.startSelection&&m.fromJSON(t.startSelection),t.selectionsAfter.map(m.fromJSON))}static fromTransaction(t,r){let n=y;for(let l of t.startState.facet(wt)){let o=l(t);o.length&&(n=n.concat(o))}return!n.length&&t.changes.empty?null:new g(t.changes.invert(t.startState.doc),n,void 0,r||t.startState.selection,y)}static selection(t){return new g(void 0,y,void 0,void 0,t)}}function w(e,t,r,n){let l=t+1>r+20?t-r-1:0,o=e.slice(l,t);return o.push(n),o}function _t(e,t){let r=[],n=!1;return e.iterChangedRanges((l,o)=>r.push(l,o)),t.iterChangedRanges((l,o,c,s)=>{for(let i=0;i<r.length;){let u=r[i++],f=r[i++];s>=u&&c<=f&&(n=!0)}}),n}function Ut(e,t){return e.ranges.length==t.ranges.length&&e.ranges.filter((r,n)=>r.empty!=t.ranges[n].empty).length===0}function Le(e,t){return e.length?t.length?e.concat(t):e:t}const y=[],Gt=200;function be(e,t){if(e.length){let r=e[e.length-1],n=r.selectionsAfter.slice(Math.max(0,r.selectionsAfter.length-Gt));return n.length&&n[n.length-1].eq(t)?e:(n.push(t),w(e,e.length-1,1e9,r.setSelAfter(n)))}else return[g.selection([t])]}function Jt(e){let t=e[e.length-1],r=e.slice();return r[e.length-1]=t.setSelAfter(t.selectionsAfter.slice(0,t.selectionsAfter.length-1)),r}function H(e,t){if(!e.length)return e;let r=e.length,n=y;for(;r;){let l=Ht(e[r-1],t,n);if(l.changes&&!l.changes.empty||l.effects.length){let o=e.slice(0,r);return o[r-1]=l,o}else t=l.mapped,r--,n=l.selectionsAfter}return n.length?[g.selection(n)]:y}function Ht(e,t,r){let n=Le(e.selectionsAfter.length?e.selectionsAfter.map(s=>s.map(t)):y,r);if(!e.changes)return g.selection(n);let l=e.changes.map(t),o=t.mapDesc(e.changes,!0),c=e.mapped?e.mapped.composeDesc(o):o;return new g(l,lt.mapEffects(e.effects,t),c,e.startSelection.map(o),n)}const zt=/^(input\.type|delete)($|\.)/;class B{constructor(t,r,n=0,l=void 0){this.done=t,this.undone=r,this.prevTime=n,this.prevUserEvent=l}isolate(){return this.prevTime?new B(this.done,this.undone):this}addChanges(t,r,n,l,o){let c=this.done,s=c[c.length-1];return s&&s.changes&&!s.changes.empty&&t.changes&&(!n||zt.test(n))&&(!s.selectionsAfter.length&&r-this.prevTime<l.newGroupDelay&&l.joinToEvent(o,_t(s.changes,t.changes))||n=="input.type.compose")?c=w(c,c.length-1,l.minDepth,new g(t.changes.compose(s.changes),Le(t.effects,s.effects),s.mapped,s.startSelection,y)):c=w(c,c.length,l.minDepth,t),new B(c,y,r,n)}addSelection(t,r,n,l){let o=this.done.length?this.done[this.done.length-1].selectionsAfter:y;return o.length>0&&r-this.prevTime<l&&n==this.prevUserEvent&&n&&/^select($|\.)/.test(n)&&Ut(o[o.length-1],t)?this:new B(be(this.done,t),this.undone,r,n)}addMapping(t){return new B(H(this.done,t),H(this.undone,t),this.prevTime,this.prevUserEvent)}pop(t,r,n){let l=t==0?this.done:this.undone;if(l.length==0)return null;let o=l[l.length-1];if(n&&o.selectionsAfter.length)return r.update({selection:o.selectionsAfter[o.selectionsAfter.length-1],annotations:K.of({side:t,rest:Jt(l)}),userEvent:t==0?"select.undo":"select.redo",scrollIntoView:!0});if(o.changes){let c=l.length==1?y:l.slice(0,l.length-1);return o.mapped&&(c=H(c,o.mapped)),r.update({changes:o.changes,selection:o.startSelection,effects:o.effects,annotations:K.of({side:t,rest:c}),filter:!1,userEvent:t==0?"undo":"redo",scrollIntoView:!0})}else return null}}B.empty=new B(y,y);const qt=[{key:"Mod-z",run:De,preventDefault:!0},{key:"Mod-y",mac:"Mod-Shift-z",run:j,preventDefault:!0},{linux:"Ctrl-Shift-z",run:j,preventDefault:!0},{key:"Mod-u",run:Pt,preventDefault:!0},{key:"Alt-u",mac:"Mod-Shift-u",run:Vt,preventDefault:!0}];function M(e,t){return m.create(e.ranges.map(t),e.mainIndex)}function C(e,t){return e.update({selection:t,scrollIntoView:!0,userEvent:"select"})}function A({state:e,dispatch:t},r){let n=M(e.selection,r);return n.eq(e.selection)?!1:(t(C(e,n)),!0)}function N(e,t){return m.cursor(t?e.to:e.from)}function Me(e,t){return A(e,r=>r.empty?e.moveByChar(r,t):N(r,t))}function d(e){return e.textDirectionAt(e.state.selection.main.head)==st.LTR}const Ee=e=>Me(e,!d(e)),ve=e=>Me(e,d(e));function Oe(e,t){return A(e,r=>r.empty?e.moveByGroup(r,t):N(r,t))}const Ft=e=>Oe(e,!d(e)),Kt=e=>Oe(e,d(e));function jt(e,t,r){if(t.type.prop(r))return!0;let n=t.to-t.from;return n&&(n>2||/[^\s,.;:]/.test(e.sliceDoc(t.from,t.to)))||t.firstChild}function P(e,t,r){let n=X(e).resolveInner(t.head),l=r?F.closedBy:F.openedBy;for(let i=t.head;;){let u=r?n.childAfter(i):n.childBefore(i);if(!u)break;jt(e,u,l)?n=u:i=r?u.to:u.from}let o=n.type.prop(l),c,s;return o&&(c=r?b(e,n.from,1):b(e,n.to,-1))&&c.matched?s=r?c.end.to:c.end.from:s=r?n.to:n.from,m.cursor(s,r?-1:1)}const $t=e=>A(e,t=>P(e.state,t,!d(e))),Wt=e=>A(e,t=>P(e.state,t,d(e)));function Re(e,t){return A(e,r=>{if(!r.empty)return N(r,t);let n=e.moveVertically(r,t);return n.head!=r.head?n:e.moveToLineBoundary(r,t)})}const Te=e=>Re(e,!1),we=e=>Re(e,!0);function Ie(e){let t=e.scrollDOM.clientHeight<e.scrollDOM.scrollHeight-2,r=0,n=0,l;if(t){for(let o of e.state.facet(S.scrollMargins)){let c=o(e);c?.top&&(r=Math.max(c?.top,r)),c?.bottom&&(n=Math.max(c?.bottom,n))}l=e.scrollDOM.clientHeight-r-n}else l=(e.dom.ownerDocument.defaultView||window).innerHeight;return{marginTop:r,marginBottom:n,selfScroll:t,height:Math.max(e.defaultLineHeight,l-5)}}function Ne(e,t){let r=Ie(e),{state:n}=e,l=M(n.selection,c=>c.empty?e.moveVertically(c,t,r.height):N(c,t));if(l.eq(n.selection))return!1;let o;if(r.selfScroll){let c=e.coordsAtPos(n.selection.main.head),s=e.scrollDOM.getBoundingClientRect(),i=s.top+r.marginTop,u=s.bottom-r.marginBottom;c&&c.top>i&&c.bottom<u&&(o=S.scrollIntoView(l.main.head,{y:"start",yMargin:c.top-i}))}return e.dispatch(C(n,l),{effects:o}),!0}const ne=e=>Ne(e,!1),$=e=>Ne(e,!0);function D(e,t,r){let n=e.lineBlockAt(t.head),l=e.moveToLineBoundary(t,r);if(l.head==t.head&&l.head!=(r?n.to:n.from)&&(l=e.moveToLineBoundary(t,r,!1)),!r&&l.head==n.from&&n.length){let o=/^\s*/.exec(e.state.sliceDoc(n.from,Math.min(n.from+100,n.to)))[0].length;o&&t.head!=n.from+o&&(l=m.cursor(n.from+o))}return l}const Qt=e=>A(e,t=>D(e,t,!0)),Xt=e=>A(e,t=>D(e,t,!1)),Yt=e=>A(e,t=>D(e,t,!d(e))),Zt=e=>A(e,t=>D(e,t,d(e))),en=e=>A(e,t=>m.cursor(e.lineBlockAt(t.head).from,1)),tn=e=>A(e,t=>m.cursor(e.lineBlockAt(t.head).to,-1));function nn(e,t,r){let n=!1,l=M(e.selection,o=>{let c=b(e,o.head,-1)||b(e,o.head,1)||o.head>0&&b(e,o.head-1,1)||o.head<e.doc.length&&b(e,o.head+1,-1);if(!c||!c.end)return o;n=!0;let s=c.start.from==o.head?c.end.to:c.end.from;return r?m.range(o.anchor,s):m.cursor(s)});return n?(t(C(e,l)),!0):!1}const rn=({state:e,dispatch:t})=>nn(e,t,!1);function k(e,t){let r=M(e.state.selection,n=>{let l=t(n);return m.range(n.anchor,l.head,l.goalColumn,l.bidiLevel||void 0)});return r.eq(e.state.selection)?!1:(e.dispatch(C(e.state,r)),!0)}function Pe(e,t){return k(e,r=>e.moveByChar(r,t))}const Ve=e=>Pe(e,!d(e)),_e=e=>Pe(e,d(e));function Ue(e,t){return k(e,r=>e.moveByGroup(r,t))}const on=e=>Ue(e,!d(e)),ln=e=>Ue(e,d(e)),cn=e=>k(e,t=>P(e.state,t,!d(e))),sn=e=>k(e,t=>P(e.state,t,d(e)));function Ge(e,t){return k(e,r=>e.moveVertically(r,t))}const Je=e=>Ge(e,!1),He=e=>Ge(e,!0);function ze(e,t){return k(e,r=>e.moveVertically(r,t,Ie(e).height))}const re=e=>ze(e,!1),oe=e=>ze(e,!0),an=e=>k(e,t=>D(e,t,!0)),un=e=>k(e,t=>D(e,t,!1)),fn=e=>k(e,t=>D(e,t,!d(e))),hn=e=>k(e,t=>D(e,t,d(e))),mn=e=>k(e,t=>m.cursor(e.lineBlockAt(t.head).from)),dn=e=>k(e,t=>m.cursor(e.lineBlockAt(t.head).to)),le=({state:e,dispatch:t})=>(t(C(e,{anchor:0})),!0),ce=({state:e,dispatch:t})=>(t(C(e,{anchor:e.doc.length})),!0),se=({state:e,dispatch:t})=>(t(C(e,{anchor:e.selection.main.anchor,head:0})),!0),ie=({state:e,dispatch:t})=>(t(C(e,{anchor:e.selection.main.anchor,head:e.doc.length})),!0),pn=({state:e,dispatch:t})=>(t(e.update({selection:{anchor:0,head:e.doc.length},userEvent:"select"})),!0),gn=({state:e,dispatch:t})=>{let r=_(e).map(({from:n,to:l})=>m.range(n,Math.min(l+1,e.doc.length)));return t(e.update({selection:m.create(r),userEvent:"select"})),!0},yn=({state:e,dispatch:t})=>{let r=M(e.selection,n=>{var l;let o=X(e).resolveInner(n.head,1);for(;!(o.from<n.from&&o.to>=n.to||o.to>n.to&&o.from<=n.from||!(!((l=o.parent)===null||l===void 0)&&l.parent));)o=o.parent;return m.range(o.to,o.from)});return t(C(e,r)),!0},kn=({state:e,dispatch:t})=>{let r=e.selection,n=null;return r.ranges.length>1?n=m.create([r.main]):r.main.empty||(n=m.create([m.cursor(r.main.head)])),n?(t(C(e,n)),!0):!1};function V(e,t){if(e.state.readOnly)return!1;let r="delete.selection",{state:n}=e,l=n.changeByRange(o=>{let{from:c,to:s}=o;if(c==s){let i=t(c);i<c?(r="delete.backward",i=v(e,i,!1)):i>c&&(r="delete.forward",i=v(e,i,!0)),c=Math.min(c,i),s=Math.max(s,i)}else c=v(e,c,!1),s=v(e,s,!0);return c==s?{range:o}:{changes:{from:c,to:s},range:m.cursor(c)}});return l.changes.empty?!1:(e.dispatch(n.update(l,{scrollIntoView:!0,userEvent:r,effects:r=="delete.selection"?S.announce.of(n.phrase("Selection deleted")):void 0})),!0)}function v(e,t,r){if(e instanceof S)for(let n of e.state.facet(S.atomicRanges).map(l=>l(e)))n.between(t,t,(l,o)=>{l<t&&o>t&&(t=r?o:l)});return t}const qe=(e,t)=>V(e,r=>{let{state:n}=e,l=n.doc.lineAt(r),o,c;if(!t&&r>l.from&&r<l.from+200&&!/[^ \t]/.test(o=l.text.slice(0,r-l.from))){if(o[o.length-1]=="	")return r-1;let s=Ae(o,n.tabSize),i=s%q(n)||q(n);for(let u=0;u<i&&o[o.length-1-u]==" ";u++)r--;c=r}else c=T(l.text,r-l.from,t,t)+l.from,c==r&&l.number!=(t?n.doc.lines:1)&&(c+=t?1:-1);return c}),W=e=>qe(e,!1),Fe=e=>qe(e,!0),Ke=(e,t)=>V(e,r=>{let n=r,{state:l}=e,o=l.doc.lineAt(n),c=l.charCategorizer(n);for(let s=null;;){if(n==(t?o.to:o.from)){n==r&&o.number!=(t?l.doc.lines:1)&&(n+=t?1:-1);break}let i=T(o.text,n-o.from,t)+o.from,u=o.text.slice(Math.min(n,i)-o.from,Math.max(n,i)-o.from),f=c(u);if(s!=null&&f!=s)break;(u!=" "||n!=r)&&(s=f),n=i}return n}),je=e=>Ke(e,!1),An=e=>Ke(e,!0),$e=e=>V(e,t=>{let r=e.lineBlockAt(t).to;return t<r?r:Math.min(e.state.doc.length,t+1)}),Bn=e=>V(e,t=>{let r=e.lineBlockAt(t).from;return t>r?r:Math.max(0,t-1)}),Sn=({state:e,dispatch:t})=>{if(e.readOnly)return!1;let r=e.changeByRange(n=>({changes:{from:n.from,to:n.to,insert:ye.of(["",""])},range:m.cursor(n.from)}));return t(e.update(r,{scrollIntoView:!0,userEvent:"input"})),!0},Cn=({state:e,dispatch:t})=>{if(e.readOnly)return!1;let r=e.changeByRange(n=>{if(!n.empty||n.from==0||n.from==e.doc.length)return{range:n};let l=n.from,o=e.doc.lineAt(l),c=l==o.from?l-1:T(o.text,l-o.from,!1)+o.from,s=l==o.to?l+1:T(o.text,l-o.from,!0)+o.from;return{changes:{from:c,to:s,insert:e.doc.slice(l,s).append(e.doc.slice(c,l))},range:m.cursor(s)}});return r.changes.empty?!1:(t(e.update(r,{scrollIntoView:!0,userEvent:"move.character"})),!0)};function _(e){let t=[],r=-1;for(let n of e.selection.ranges){let l=e.doc.lineAt(n.from),o=e.doc.lineAt(n.to);if(!n.empty&&n.to==o.from&&(o=e.doc.lineAt(n.to-1)),r>=l.number){let c=t[t.length-1];c.to=o.to,c.ranges.push(n)}else t.push({from:l.from,to:o.to,ranges:[n]});r=o.number+1}return t}function We(e,t,r){if(e.readOnly)return!1;let n=[],l=[];for(let o of _(e)){if(r?o.to==e.doc.length:o.from==0)continue;let c=e.doc.lineAt(r?o.to+1:o.from-1),s=c.length+1;if(r){n.push({from:o.to,to:c.to},{from:o.from,insert:c.text+e.lineBreak});for(let i of o.ranges)l.push(m.range(Math.min(e.doc.length,i.anchor+s),Math.min(e.doc.length,i.head+s)))}else{n.push({from:c.from,to:o.from},{from:o.to,insert:e.lineBreak+c.text});for(let i of o.ranges)l.push(m.range(i.anchor-s,i.head-s))}}return n.length?(t(e.update({changes:n,scrollIntoView:!0,selection:m.create(l,e.selection.mainIndex),userEvent:"move.line"})),!0):!1}const xn=({state:e,dispatch:t})=>We(e,t,!1),Dn=({state:e,dispatch:t})=>We(e,t,!0);function Qe(e,t,r){if(e.readOnly)return!1;let n=[];for(let l of _(e))r?n.push({from:l.from,insert:e.doc.slice(l.from,l.to)+e.lineBreak}):n.push({from:l.to,insert:e.lineBreak+e.doc.slice(l.from,l.to)});return t(e.update({changes:n,scrollIntoView:!0,userEvent:"input.copyline"})),!0}const Ln=({state:e,dispatch:t})=>Qe(e,t,!1),bn=({state:e,dispatch:t})=>Qe(e,t,!0),Mn=e=>{if(e.state.readOnly)return!1;let{state:t}=e,r=t.changes(_(t).map(({from:l,to:o})=>(l>0?l--:o<t.doc.length&&o++,{from:l,to:o}))),n=M(t.selection,l=>e.moveVertically(l,!0)).map(r);return e.dispatch({changes:r,selection:n,scrollIntoView:!0,userEvent:"delete.line"}),!0};function En(e,t){if(/\(\)|\[\]|\{\}/.test(e.sliceDoc(t-1,t+1)))return{from:t,to:t};let r=X(e).resolveInner(t),n=r.childBefore(t),l=r.childAfter(t),o;return n&&l&&n.to<=t&&l.from>=t&&(o=n.type.prop(F.closedBy))&&o.indexOf(l.name)>-1&&e.doc.lineAt(n.to).from==e.doc.lineAt(l.from).from?{from:n.to,to:l.from}:null}const vn=Xe(!1),On=Xe(!0);function Xe(e){return({state:t,dispatch:r})=>{if(t.readOnly)return!1;let n=t.changeByRange(l=>{let{from:o,to:c}=l,s=t.doc.lineAt(o),i=!e&&o==c&&En(t,o);e&&(o=c=(c<=s.to?s:t.doc.lineAt(c)).to);let u=new pe(t,{simulateBreak:o,simulateDoubleBreak:!!i}),f=ge(u,o);for(f==null&&(f=/^\s*/.exec(t.doc.lineAt(o).text)[0].length);c<s.to&&/\s/.test(s.text[c-s.from]);)c++;i?{from:o,to:c}=i:o>s.from&&o<s.from+100&&!/\S/.test(s.text.slice(0,o))&&(o=s.from);let h=["",R(t,f)];return i&&h.push(R(t,u.lineIndent(s.from,-1))),{changes:{from:o,to:c,insert:ye.of(h)},range:m.cursor(o+1+h[1].length)}});return r(t.update(n,{scrollIntoView:!0,userEvent:"input"})),!0}}function ee(e,t){let r=-1;return e.changeByRange(n=>{let l=[];for(let c=n.from;c<=n.to;){let s=e.doc.lineAt(c);s.number>r&&(n.empty||n.to>s.from)&&(t(s,l,n),r=s.number),c=s.to+1}let o=e.changes(l);return{changes:l,range:m.range(o.mapPos(n.anchor,1),o.mapPos(n.head,1))}})}const Rn=({state:e,dispatch:t})=>{if(e.readOnly)return!1;let r=Object.create(null),n=new pe(e,{overrideIndentation:o=>{let c=r[o];return c??-1}}),l=ee(e,(o,c,s)=>{let i=ge(n,o.from);if(i==null)return;/\S/.test(o.text)||(i=0);let u=/^\s*/.exec(o.text)[0],f=R(e,i);(u!=f||s.from<o.from+u.length)&&(r[o.from]=i,c.push({from:o.from,to:o.from+u.length,insert:f}))});return l.changes.empty||t(e.update(l,{userEvent:"indent"})),!0},Tn=({state:e,dispatch:t})=>e.readOnly?!1:(t(e.update(ee(e,(r,n)=>{n.push({from:r.from,insert:e.facet(ct)})}),{userEvent:"input.indent"})),!0),wn=({state:e,dispatch:t})=>e.readOnly?!1:(t(e.update(ee(e,(r,n)=>{let l=/^\s*/.exec(r.text)[0];if(!l)return;let o=Ae(l,e.tabSize),c=0,s=R(e,Math.max(0,o-q(e)));for(;c<l.length&&c<s.length&&l.charCodeAt(c)==s.charCodeAt(c);)c++;n.push({from:r.from+c,to:r.from+l.length,insert:s.slice(c)})}),{userEvent:"delete.dedent"})),!0),In=[{key:"Ctrl-b",run:Ee,shift:Ve,preventDefault:!0},{key:"Ctrl-f",run:ve,shift:_e},{key:"Ctrl-p",run:Te,shift:Je},{key:"Ctrl-n",run:we,shift:He},{key:"Ctrl-a",run:en,shift:mn},{key:"Ctrl-e",run:tn,shift:dn},{key:"Ctrl-d",run:Fe},{key:"Ctrl-h",run:W},{key:"Ctrl-k",run:$e},{key:"Ctrl-Alt-h",run:je},{key:"Ctrl-o",run:Sn},{key:"Ctrl-t",run:Cn},{key:"Ctrl-v",run:$}],Nn=[{key:"ArrowLeft",run:Ee,shift:Ve,preventDefault:!0},{key:"Mod-ArrowLeft",mac:"Alt-ArrowLeft",run:Ft,shift:on,preventDefault:!0},{mac:"Cmd-ArrowLeft",run:Yt,shift:fn,preventDefault:!0},{key:"ArrowRight",run:ve,shift:_e,preventDefault:!0},{key:"Mod-ArrowRight",mac:"Alt-ArrowRight",run:Kt,shift:ln,preventDefault:!0},{mac:"Cmd-ArrowRight",run:Zt,shift:hn,preventDefault:!0},{key:"ArrowUp",run:Te,shift:Je,preventDefault:!0},{mac:"Cmd-ArrowUp",run:le,shift:se},{mac:"Ctrl-ArrowUp",run:ne,shift:re},{key:"ArrowDown",run:we,shift:He,preventDefault:!0},{mac:"Cmd-ArrowDown",run:ce,shift:ie},{mac:"Ctrl-ArrowDown",run:$,shift:oe},{key:"PageUp",run:ne,shift:re},{key:"PageDown",run:$,shift:oe},{key:"Home",run:Xt,shift:un,preventDefault:!0},{key:"Mod-Home",run:le,shift:se},{key:"End",run:Qt,shift:an,preventDefault:!0},{key:"Mod-End",run:ce,shift:ie},{key:"Enter",run:vn},{key:"Mod-a",run:pn},{key:"Backspace",run:W,shift:W},{key:"Delete",run:Fe},{key:"Mod-Backspace",mac:"Alt-Backspace",run:je},{key:"Mod-Delete",mac:"Alt-Delete",run:An},{mac:"Mod-Backspace",run:Bn},{mac:"Mod-Delete",run:$e}].concat(In.map(e=>({mac:e.key,run:e.run,shift:e.shift}))),Pn=[{key:"Alt-ArrowLeft",mac:"Ctrl-ArrowLeft",run:$t,shift:cn},{key:"Alt-ArrowRight",mac:"Ctrl-ArrowRight",run:Wt,shift:sn},{key:"Alt-ArrowUp",run:xn},{key:"Shift-Alt-ArrowUp",run:Ln},{key:"Alt-ArrowDown",run:Dn},{key:"Shift-Alt-ArrowDown",run:bn},{key:"Escape",run:kn},{key:"Mod-Enter",run:On},{key:"Alt-l",mac:"Ctrl-l",run:gn},{key:"Mod-i",run:yn,preventDefault:!0},{key:"Mod-[",run:wn},{key:"Mod-]",run:Tn},{key:"Mod-Alt-\\",run:Rn},{key:"Shift-Mod-k",run:Mn},{key:"Shift-Mod-\\",run:rn},{key:"Mod-/",run:Lt},{key:"Alt-A",run:Mt}].concat(Nn),Vn="#e5c07b",ae="#e06c75",_n="#56b6c2",Un="#ffffff",O="#abb2bf",Q="#7d8799",Gn="#61afef",Jn="#98c379",ue="#d19a66",Hn="#c678dd",zn="#21252b",fe="#2c313a",he="#282c34",z="#353a42",qn="#3E4451",me="#528bff",Fn=S.theme({"&":{color:O,backgroundColor:he},".cm-content":{caretColor:me},".cm-cursor, .cm-dropCursor":{borderLeftColor:me},"&.cm-focused .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection":{backgroundColor:qn},".cm-panels":{backgroundColor:zn,color:O},".cm-panels.cm-panels-top":{borderBottom:"2px solid black"},".cm-panels.cm-panels-bottom":{borderTop:"2px solid black"},".cm-searchMatch":{backgroundColor:"#72a1ff59",outline:"1px solid #457dff"},".cm-searchMatch.cm-searchMatch-selected":{backgroundColor:"#6199ff2f"},".cm-activeLine":{backgroundColor:"#6699ff0b"},".cm-selectionMatch":{backgroundColor:"#aafe661a"},"&.cm-focused .cm-matchingBracket, &.cm-focused .cm-nonmatchingBracket":{backgroundColor:"#bad0f847"},".cm-gutters":{backgroundColor:he,color:Q,border:"none"},".cm-activeLineGutter":{backgroundColor:fe},".cm-foldPlaceholder":{backgroundColor:"transparent",border:"none",color:"#ddd"},".cm-tooltip":{border:"none",backgroundColor:z},".cm-tooltip .cm-tooltip-arrow:before":{borderTopColor:"transparent",borderBottomColor:"transparent"},".cm-tooltip .cm-tooltip-arrow:after":{borderTopColor:z,borderBottomColor:z},".cm-tooltip-autocomplete":{"& > ul > li[aria-selected]":{backgroundColor:fe,color:O}}},{dark:!0}),Kn=it.define([{tag:a.keyword,color:Hn},{tag:[a.name,a.deleted,a.character,a.propertyName,a.macroName],color:ae},{tag:[a.function(a.variableName),a.labelName],color:Gn},{tag:[a.color,a.constant(a.name),a.standard(a.name)],color:ue},{tag:[a.definition(a.name),a.separator],color:O},{tag:[a.typeName,a.className,a.number,a.changed,a.annotation,a.modifier,a.self,a.namespace],color:Vn},{tag:[a.operator,a.operatorKeyword,a.url,a.escape,a.regexp,a.link,a.special(a.string)],color:_n},{tag:[a.meta,a.comment],color:Q},{tag:a.strong,fontWeight:"bold"},{tag:a.emphasis,fontStyle:"italic"},{tag:a.strikethrough,textDecoration:"line-through"},{tag:a.link,color:Q,textDecoration:"underline"},{tag:a.heading,fontWeight:"bold",color:ae},{tag:[a.atom,a.bool,a.special(a.variableName)],color:ue},{tag:[a.processingInstruction,a.string,a.inserted],color:Jn},{tag:a.invalid,color:Un}]),jn=[Fn,Be(Kn)],nr=wp.element.memo(wp.element.forwardRef(function({onChange:t,onSave:r,initialContents:n,fileType:l,className:o=""},c){const s=wp.element.useRef(null),i=wp.element.useRef(n),u=wp.element.useRef(t),f=$n(l),[h,p]=wp.element.useState({});wp.element.useImperativeHandle(c,()=>({getContents:()=>i.current})),wp.element.useEffect(()=>{u.current=t},[t]);const x=wp.element.useMemo(()=>{if(!s.current)return setTimeout(()=>p({})),null;const L=S.theme({"&":{height:"auto",width:"100%"}}),Ye=at.of([{key:"Mod-s",run(){return typeof r=="function"&&r(i.current),!0}},...xt,...Pn,...qt,...ut]),Ze=S.updateListener.of(te=>{te.docChanged&&(i.current=te.state.doc.toString(),typeof u.current=="function"&&u.current(i.current))}),U=[ft(),ht(),mt(),Nt(),dt(),pt(),gt(),yt(),Be(Ct,{fallback:!0}),kt(),Dt(),At(),Bt(),St(),jn,L,Ye];return f&&U.push(f()),U.push(Ze),new S({doc:n,extensions:U,parent:s.current})},[f,h,s.current]);return wp.element.useEffect(()=>()=>{x&&x.destroy()},[x]),et.jsx("div",{ref:s,className:o})}));function $n(e){const t=wp.element.useRef(e),[r,n]=wp.element.useState(null);return wp.element.useEffect(()=>{t.current=e,Wn(e).then(l=>{t.current===e&&n(()=>l)})},[e]),r}async function Wn(e){switch(e){case"js":return(await G(()=>import("./index-47ab02ac.js"),["./index-47ab02ac.js","./index-dc79b8c5.js","./index-d6204322.js","./index-8f2db1d0.js","./index-e4a952a6.js"],import.meta.url)).javascript;case"php":return(await G(()=>import("./index-44a79afd.js"),["./index-44a79afd.js","./index-dc79b8c5.js","./index-d6204322.js","./index-8f2db1d0.js","./index-47ab02ac.js","./index-e4a952a6.js"],import.meta.url)).php;case"sql":return(await G(()=>import("./index-9a65b9aa.js"),["./index-9a65b9aa.js","./index-8f2db1d0.js","./index-d6204322.js","./index-dc79b8c5.js","./index-e4a952a6.js"],import.meta.url)).sql;default:throw new Error(`Unknown file type: ${e}`)}}export{nr as default};
