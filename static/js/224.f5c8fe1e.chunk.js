"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[224],{9587:function(e,t,n){n.d(t,{I:function(){return i}});var i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:300;return e?e.includes("https")?e.slice(1,e.length):"/"===e[0]?"https://image.tmdb.org/t/p/w".concat(t).concat(e):"https://image.tmdb.org/t/p/w".concat(t,"/").concat(e):"https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png"}},8224:function(e,t,n){n.r(t),n.d(t,{default:function(){return P}});var i,r,a,c,o,s,d,l=n(885),u=n(2791),h=n(470),p=n(2773),f=n(9587),m=n(168),g=n(6444),x=g.ZP.ul(i||(i=(0,m.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  flex-wrap: wrap;\n  gap: 20px;\n  margin-top: 20px;\n"]))),v=g.ZP.li(r||(r=(0,m.Z)(["\n  display: flex;\n  align-items: flex-start;\n  justify-content: start;\n  gap: 20px;\n  padding: 10px;\n  border: 1px solid darkred;\n  border-radius: 5px;\n"]))),w=g.ZP.img(a||(a=(0,m.Z)(["\n  display: block;\n  width: 70px;\n  height: 70px;\n  border-radius: 50px;\n"]))),y=g.ZP.div(c||(c=(0,m.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  justify-content: center;\n  align-items: center;\n"]))),Z=g.ZP.p(o||(o=(0,m.Z)(["\n  font-size: 18px;\n  font-weight: 600;\n"]))),b=g.ZP.p(s||(s=(0,m.Z)(["\n  display: flex;\n  justify-self: self-end;\n"]))),j=g.ZP.div(d||(d=(0,m.Z)(["\n  max-width: 80%;\n"]))),k=n(184),P=function(){var e=(0,u.useState)({}),t=(0,l.Z)(e,2),n=t[0],i=t[1],r=(0,h.UO)().id;return(0,u.useEffect)((function(){try{p.h.fetchFilmReviews(r).then((function(e){var t=e.data;i(t.results)}))}catch(e){console.log(e)}}),[r]),0===Object.keys(n).length?(0,k.jsx)("p",{children:"We don't have any reviews for this movie :("}):(0,k.jsx)("div",{style:{display:"flex"},children:(0,k.jsx)(x,{children:n.map((function(e){return(0,k.jsxs)(v,{children:[(0,k.jsx)(w,{width:"70",height:"70",src:(0,f.I)(e.author_details.avatar_path),alt:e.author}),(0,k.jsxs)(y,{children:[(0,k.jsx)(Z,{children:e.author}),(0,k.jsx)(b,{children:new Date(e.updated_at).toLocaleDateString()})]}),(0,k.jsx)(j,{children:e.content})]},e.id)}))})})}},2773:function(e,t,n){n.d(t,{h:function(){return a}});var i=n(4569),r=n.n(i)().create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"d7ee9dda466bc4ced4432fb2e147fc44"}}),a={fetchFilms:function(){return r.get("/trending/movie/day")},fetchFilmsByName:function(e){return r.get("/search/movie",{params:{query:e}})},fetchFilmById:function(e){return r.get("/movie/".concat(e))},fetchFilmCast:function(e){return r.get("/movie/".concat(e,"/credits"))},fetchFilmReviews:function(e){return r.get("/movie/".concat(e,"/reviews"))}}}}]);
//# sourceMappingURL=224.f5c8fe1e.chunk.js.map