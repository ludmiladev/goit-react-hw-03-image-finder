(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{13:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__sg8GA",ImageGalleryItem_image:"ImageGalleryItem_ImageGalleryItem_image__3WI26"}},14:function(e,t,a){e.exports={Button:"Button_Button__wUve6"}},16:function(e,t,a){e.exports={Spinner:"Spinner_Spinner__1DqNI"}},17:function(e,t,a){e.exports=a(45)},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(7),c=a.n(o),l=a(10),i=a(2),s=a(3),u=a(5),m=a(4),h=a(12),p=a(6),g=a.n(p),d=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={searchQuery:""},e.handleChange=function(t){var a=t.currentTarget,n=a.name,r=a.value;e.setState(Object(h.a)({},n,r))},e.handleSubmit=function(t){t.preventDefault();var a=e.state.searchQuery;e.props.onSubmit(a)},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.state.searchQuery;return r.a.createElement("header",{className:g.a.Searchbar},r.a.createElement("form",{className:g.a.SearchForm,onSubmit:this.handleSubmit},r.a.createElement("button",{type:"submit",className:g.a.SearchForm_button},r.a.createElement("span",{className:g.a.SearchForm_button_label},"Search")),r.a.createElement("input",{className:g.a.SearchForm_input,type:"text",autoComplete:"off",name:"searchQuery",autoFocus:!0,placeholder:"Search images and photos",onChange:this.handleChange,value:e})))}}]),a}(n.Component),f=a(8),b=a.n(f),v=a(13),y=a.n(v),_=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).modalContent=function(t){e.props.onItemClick(t)},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this,t=this.props,a=t.id,n=t.webformatURL;return r.a.createElement("img",{src:n,alt:"",className:y.a.ImageGalleryItem_image,onClick:function(){return e.modalContent(a)}})}}]),a}(n.Component),S=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleOpenModal=function(t){t.target!==t.currentTarget&&e.props.onClick()},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props,t=e.images,a=e.onItemClick;return r.a.createElement("ul",{className:b.a.ImageGallery,onClick:this.handleOpenModal},t&&t.map((function(e){return r.a.createElement("li",{key:e.id,className:b.a.ImageGalleryItem},r.a.createElement(_,Object.assign({},e,{onItemClick:a})))})))}}]),a}(n.Component),O=a(9),I=a.n(O),j=document.getElementById("modal-root"),C=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleBackdropClick=function(t){t.target===t.currentTarget&&e.props.onBackdrop()},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props.content;return Object(o.createPortal)(r.a.createElement("div",{className:I.a.Overlay,onClick:this.handleBackdropClick},r.a.createElement("div",{className:I.a.Modal},r.a.createElement("img",{src:e,alt:""}))),j)}}]),a}(n.Component),k=a(14),E=a.n(k),B=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props,t=e.onPress,a=e.name;return r.a.createElement("button",{type:"button",onClick:t,className:E.a.Button},a)}}]),a}(n.Component);B.defaultProps={name:"Load more"};var F=B,N=a(15),M=a.n(N),w=a(16),G=a.n(w),L=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:G.a.Spinner},r.a.createElement(M.a,{type:"Puff",color:"#00BFFF",height:50,width:50}))}}]),a}(n.Component),x=function(e,t){var a="".concat("https://pixabay.com/api/?","q=").concat(e,"&page=").concat(t,"&key=").concat("16865907-bf97a2667d97724c7c41d2d46","&image_type=photo&orientation=horizontal&per_page=12");return fetch(a).then((function(e){return e.json()}))},Q=(a(43),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={modalContent:"",searchQuery:"",page:1,visibleImages:[],isLoading:!1,openModal:!1},e.toggleModal=function(){e.setState((function(e){return{openModal:!e.openModal}}))},e.toggleLoading=function(){e.setState((function(e){return{isLoading:!e.isLoading}}))},e.hadleChangeQuery=function(t){e.setState({searchQuery:t,page:1,visibleImages:[]})},e.handleNextPage=function(){e.setState((function(e){return{page:e.page+1}}))},e.handleScroll=function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})},e.modalContentSet=function(t){var a=e.state.visibleImages.find((function(e){return e.id===t}));e.setState({modalContent:a.largeImageURL})},e.getData=function(){var t=e.state,a=t.searchQuery,n=t.page;e.toggleLoading(),x(a,n).then((function(t){var a=t.hits;e.setState((function(e){var t=e.visibleImages;return{visibleImages:[].concat(Object(l.a)(t),Object(l.a)(a))}}))})).then(e.handleScroll).catch((function(e){return console.log(e.message)})).finally(e.toggleLoading)},e}return Object(s.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=t.searchQuery,n=t.page;a!==this.state.searchQuery&&this.getData(),n!==this.state.page&&this.getData()}},{key:"render",value:function(){var e=this.state,t=e.visibleImages,a=e.openModal,n=e.modalContent,o=e.isLoading,c=e.page,l=t.length/c===12,i=t.length>0&&!o&&l;return r.a.createElement("div",{className:"App"},r.a.createElement(d,{onSubmit:this.hadleChangeQuery}),r.a.createElement(S,{images:t,onClick:this.toggleModal,onItemClick:this.modalContentSet}),a&&r.a.createElement(C,{content:n,onBackdrop:this.toggleModal}),o&&r.a.createElement(L,null),i&&r.a.createElement(F,{name:"Load more",onPress:this.handleNextPage}))}}]),a}(n.Component));a(44);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Q,null)),document.getElementById("root"))},6:function(e,t,a){e.exports={Searchbar:"SearchBar_Searchbar__2eA2v",SearchForm:"SearchBar_SearchForm__1cL4Z",SearchForm_button:"SearchBar_SearchForm_button__1cGF9",SearchForm_button_label:"SearchBar_SearchForm_button_label__2tz0k",SearchForm_input:"SearchBar_SearchForm_input__2iBJa"}},8:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__2E1t0"}},9:function(e,t,a){e.exports={Overlay:"Modal_Overlay__21Ph3",Modal:"Modal_Modal__3ySIl"}}},[[17,1,2]]]);
//# sourceMappingURL=main.a16ff116.chunk.js.map