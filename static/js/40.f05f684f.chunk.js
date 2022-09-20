"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[40],{9198:function(n,e,t){var i,r=t(168),o=(t(2791),t(6444)),c=t(184),a=o.ZP.div(i||(i=(0,r.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n\n  max-width: 1170px;\n  margin-left: auto;\n  margin-right: auto;\n  padding-left: 15px;\n  padding-right: 15px;\n"])));e.Z=function(n){var e=n.children;return(0,c.jsx)(a,{children:e})}},9587:function(n,e,t){t.d(e,{I:function(){return i}});var i=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:300;return n?n.includes("https")?n.slice(1,n.length):"/"===n[0]?"https://image.tmdb.org/t/p/w".concat(e).concat(n):"https://image.tmdb.org/t/p/w".concat(e,"/").concat(n):"https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png"}},1040:function(n,e,t){t.r(e),t.d(e,{default:function(){return S}});var i,r,o,c,a,s,l,d,p,h,u,f,x=t(885),g=t(9198),m=t(2791),v=t(470),b=t(2773),j=t(9587),Z=t(168),w=t(6444),k=t(6731),y=(0,w.ZP)(k.OL)(i||(i=(0,Z.Z)(["\n  display: flex;\n  align-self: flex-start;\n  justify-content: center;\n  align-items: center;\n\n  border-radius: 4px;\n  text-decoration: none;\n  font-weight: 500;\n\n  color: black;\n\n  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),\n    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n"]))),P=w.ZP.span(r||(r=(0,Z.Z)(["\n  display: inline-block;\n  width: 32px;\n  height: 32px;\n\n  background-image: url('https://cdn-icons-png.flaticon.com/512/545/545680.png');\n  background-size: 100%;\n  background-repeat: no-repeat;\n  background-position: center;\n\n  border: 0;\n  outline: none;\n  cursor: pointer;\n\n  opacity: 0.6;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover {\n    opacity: 1;\n  }\n"]))),z=w.ZP.div(o||(o=(0,Z.Z)(["\n  display: flex;\n"]))),I=w.ZP.h1(c||(c=(0,Z.Z)(["\n  font-size: 50px;\n  color: darkred;\n  text-shadow: 2px 2px 4px #000000;\n"]))),_=w.ZP.div(a||(a=(0,Z.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n\n  margin-left: 100px;\n"]))),F=w.ZP.p(s||(s=(0,Z.Z)(["\n  font-size: 20px;\n"]))),N=w.ZP.span(l||(l=(0,Z.Z)(["\n  font-weight: 700;\n"]))),O=(w.ZP.h2(d||(d=(0,Z.Z)(["\n  font-weight: 700;\n"]))),w.ZP.div(p||(p=(0,Z.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n\n  width: 100%;\n  border-top: 1px solid black;\n\n  margin-top: 20px;\n"])))),C=w.ZP.h2(h||(h=(0,Z.Z)(["\n  margin-top: 20px;\n  font-size: 30px;\n"]))),L=w.ZP.ul(u||(u=(0,Z.Z)(["\n  display: flex;\n  gap: 10px;\n"]))),B=(0,w.ZP)(k.OL)(f||(f=(0,Z.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  font-weight: 500;\n  text-decoration: none;\n\n  padding: 8px 16px;\n  border-radius: 4px;\n  border: 1px solid tomato;\n\n  color: black;\n\n  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),\n    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &.active {\n    color: white;\n    background-color: tomato;\n  }\n"]))),R=t(184),S=function(){var n,e,t=(0,m.useState)({}),i=(0,x.Z)(t,2),r=i[0],o=i[1],c=(0,v.UO)().id,a=null!==(n=null===(e=(0,v.TH)().state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/";if((0,m.useEffect)((function(){try{b.h.fetchFilmById(c).then((function(n){var e=n.data;o(e)}))}catch(n){console.log(n)}}),[c]),0!==Object.keys(r).length)return(0,R.jsx)("main",{children:(0,R.jsxs)(g.Z,{children:[(0,R.jsx)(y,{to:a,children:(0,R.jsx)(P,{})}),(0,R.jsxs)(z,{children:[(0,R.jsx)("img",{width:"300",src:(0,j.I)(r.poster_path),alt:r.title}),(0,R.jsxs)(_,{children:[(0,R.jsx)(I,{children:r.title?r.title:"No Info"}),(0,R.jsxs)(F,{children:[(0,R.jsx)(N,{children:"User Score: "})," ",r.vote_average?10*r.vote_average:0,"%"]}),(0,R.jsxs)(F,{children:[(0,R.jsx)(N,{children:"Overview: "}),r.overview?r.overview:"No Info"]}),(0,R.jsxs)(F,{children:[(0,R.jsx)(N,{children:"Genres: "}),r.genres.length>0?r.genres.map((function(n){return n.name})).join(", "):"No Info"]})]})]}),(0,R.jsxs)(O,{children:[(0,R.jsx)(C,{children:"Additional information"}),(0,R.jsxs)(L,{children:[(0,R.jsx)("li",{children:(0,R.jsx)(B,{to:"cast",state:{from:a},children:"Cast"})}),(0,R.jsx)("li",{children:(0,R.jsx)(B,{to:"reviews",state:{from:a},children:"Reviews"})})]})]}),(0,R.jsx)(m.Suspense,{fallback:(0,R.jsx)("div",{children:"Loading..."}),children:(0,R.jsx)(v.j3,{})})]})})}},2773:function(n,e,t){t.d(e,{h:function(){return o}});var i=t(4569),r=t.n(i)().create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"d7ee9dda466bc4ced4432fb2e147fc44"}}),o={fetchFilms:function(){return r.get("/trending/movie/day")},fetchFilmsByName:function(n){return r.get("/search/movie",{params:{query:n}})},fetchFilmById:function(n){return r.get("/movie/".concat(n))},fetchFilmCast:function(n){return r.get("/movie/".concat(n,"/credits"))},fetchFilmReviews:function(n){return r.get("/movie/".concat(n,"/reviews"))}}}}]);
//# sourceMappingURL=40.f05f684f.chunk.js.map