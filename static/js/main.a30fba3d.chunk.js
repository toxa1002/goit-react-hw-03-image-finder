(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{10:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__30x6Z",SearchForm:"Searchbar_SearchForm__1_dVH",SearchFormButton:"Searchbar_SearchFormButton__1AjCH",SearchFormButtonLabel:"Searchbar_SearchFormButtonLabel__Tq_x_",SearchFormInput:"Searchbar_SearchFormInput__1Nv4D"}},15:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__3E2Dd",ImageGalleryItemImage:"ImageGalleryItem_ImageGalleryItemImage__1Zlje"}},16:function(e,t,a){e.exports={Overlay:"Modal_Overlay__2xRzS",Modal:"Modal_Modal__3Qfvx"}},29:function(e,t,a){e.exports={Button:"Button_Button__1nG5C"}},30:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__V-s45"}},31:function(e,t,a){e.exports={App:"App_App__2tosD"}},80:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(9),c=a.n(o),s=a(4),l=a(5),i=a(7),h=a(6),u=a(8),m=a(2),d=a.n(m),g=(a(39),a(32)),p=a(10),b=a.n(p),j=a(1),f=function(e){Object(i.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={search:""},e.handleSearchChange=function(t){var a=t.currentTarget;e.setState({search:a.value.toLowerCase()})},e.handleSubmit=function(t){t.preventDefault();var a=e.state.search;if(""===a.trim())return u.b.error("\u041f\u043e\u043b\u0435 \u043f\u043e\u0438\u0441\u043a\u0430 \u043f\u0443\u0441\u0442\u043e\u0435!");e.props.onSubmitForm(a),e.setState({search:""})},e}return Object(l.a)(a,[{key:"render",value:function(){return Object(j.jsx)("header",{className:b.a.Searchbar,children:Object(j.jsxs)("form",{onSubmit:this.handleSubmit,className:b.a.SearchForm,children:[Object(j.jsx)("button",{type:"submit",className:b.a.SearchFormButton,children:Object(j.jsx)("span",{type:"submit",className:b.a.SearchFormButtonLabel,children:Object(j.jsx)(g.a,{})})}),Object(j.jsx)("input",{className:b.a.SearchFormInput,type:"text",autoComplete:"off",autoFocus:!0,value:this.state.search,onChange:this.handleSearchChange,placeholder:"Search images and photos"})]})})}}]),a}(r.Component);f.propsTypes={search:d.a.string};var y=a(14),v=a.n(y),O=a(17),S=a(26),x=a(27),I=a.n(x),_=(a(60),a(61),a(28)),w=a.n(_),k=function(e,t){return w()("".concat("https://pixabay.com/api/","?q=").concat(e,"&page=").concat(t,"&key=").concat("23968448-11f2d292972b337bbc3d525d1","&image_type=photo&orientation=horizontal&per_page=12"))},L=a(15),C=a.n(L);var M=function(e){var t=e.id,a=e.webformatURL,r=e.alt,n=e.onImageClick;return Object(j.jsx)("li",{id:t,className:C.a.ImageGalleryItem,children:Object(j.jsx)("img",{src:a,alt:r,className:C.a.ImageGalleryItemImage,onClick:n})})},F=a(29),N=a.n(F);function G(e){var t=e.loadMore,a=e.buttonName;return Object(j.jsx)("button",{className:N.a.Button,type:"button",onClick:t,children:a})}G.propsTypes={loadMore:d.a.func,buttonName:d.a.string};var U=a(30),B=a.n(U),R=function(e){Object(i.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={search:"",page:1,gallery:null,status:"idle"},e.handleOnImageClick=function(t){e.state.gallery.forEach((function(a){a.id===Number(t.target.parentElement.id)&&e.props.largeImageURL(a.largeImageURL,a.tags)})),e.setState({modal:!0})},e.reset=function(){e.setState({search:"",page:1,gallery:null,status:"idle",showModal:"false",largeImg:""})},e.chekingGalleryLength=function(e,t){e===t&&Object(u.b)("\u0411\u043e\u043b\u044c\u0448\u0435 \u043f\u043e \u0432\u0430\u0448\u0435\u043c\u0443 \u0437\u0430\u043f\u0440\u043e\u0441\u0443 \u043a\u0430\u0440\u0442\u0438\u043d\u043e\u043a \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e",{position:"bottom-center"})},e.handleLoadMore=function(t){t.preventDefault(),e.setState({page:e.state.page+1})},e}return Object(l.a)(a,[{key:"componentDidUpdate",value:function(){var e=Object(S.a)(v.a.mark((function e(t,a){var r,n,o,c;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.search,n=this.props.search,r===n){e.next=15;break}return this.setState({status:"pending"}),e.prev=4,e.next=7,k(n,this.state.page);case 7:o=e.sent,this.setState({gallery:o.data.hits}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(4),this.setState({status:"rejected"});case 14:0!==this.state.gallery.length?this.setState({status:"resolved"}):(this.setState({status:"idle"}),Object(u.b)("\u041f\u043e \u0432\u0430\u0448\u0435\u043c\u0443 \u0437\u0430\u043f\u0440\u043e\u0441\u0443 \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e"));case 15:if(a.page===this.state.page){e.next=22;break}return e.next=18,k(n,this.state.page);case 18:c=e.sent,this.setState((function(e){return{gallery:[].concat(Object(O.a)(e.gallery),Object(O.a)(c.data.hits))}})),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"}),this.chekingGalleryLength(a.gallery.length,this.state.gallery.length);case 22:case"end":return e.stop()}}),e,this,[[4,11]])})));return function(t,a){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){this.reset()}},{key:"render",value:function(){var e=this,t=this.state,a=t.gallery,r=t.status;return"idle"===r?null:"pending"===r?Object(j.jsx)(I.a,{type:"ThreeDots",color:"#00BFFF",height:80,width:80}):"resolved"===r?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("ul",{className:B.a.ImageGallery,children:a&&a.map((function(t){var a=t.id,r=t.webformatURL,n=t.tags;return Object(j.jsx)(M,{id:a,webformatURL:r,alt:n,onImageClick:e.handleOnImageClick},a)}))}),Object(j.jsx)(G,{loadMore:this.handleLoadMore,buttonName:"Load More"})]}):"rejected"===r?(u.b.error("\u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u043f\u043e\u0437\u0436\u0435!",{autoClose:!1,position:"top-center"}),null):void 0}}]),a}(r.Component);R.defaultProps={id:0};var D=a(16),A=a.n(D),E=document.querySelector("#modal-root"),T=function(e){Object(i.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).handleKeyDown=function(t){"Escape"===t.code&&e.props.onClose()},e.handleBackdropClick=function(t){t.currentTarget===t.target&&e.props.onClose()},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return Object(o.createPortal)(Object(j.jsx)("div",{className:A.a.Overlay,onClick:this.handleBackdropClick,children:Object(j.jsx)("div",{className:A.a.Modal,children:this.props.children})}),E)}}]),a}(r.Component);var q=function(e){var t=e.LargeImg,a=e.alt;return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("img",{src:t,alt:a})})},H=a(31),K=a.n(H),z=function(e){Object(i.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={search:"",showModal:!1,largeImageURL:"",tags:""},e.handleSearchFormSubmit=function(t){e.setState({search:t})},e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e.handleLargeImageURL=function(t,a){e.setState((function(e){return{showModal:!e.showModal}})),e.setState({largeImageURL:t,tags:a})},e.reset=function(){e.setState({search:"",showModal:!1,largeImageURL:"",tags:""})},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state,t=e.showModal,a=e.search,r=e.largeImageURL,n=e.tags;return Object(j.jsxs)("div",{className:K.a.App,children:[Object(j.jsx)(f,{onSubmitForm:this.handleSearchFormSubmit}),Object(j.jsx)(u.a,{position:"top-left",autoClose:2e3}),Object(j.jsx)(R,{search:a,largeImageURL:this.handleLargeImageURL}),t&&Object(j.jsx)(T,{onClose:this.toggleModal,children:Object(j.jsx)(q,{LargeImg:r,alt:n})})]})}}]),a}(r.Component);c.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(z,{})}),document.getElementById("root"))}},[[80,1,2]]]);
//# sourceMappingURL=main.a30fba3d.chunk.js.map