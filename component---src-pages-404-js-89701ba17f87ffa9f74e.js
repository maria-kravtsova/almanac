(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{574:function(t,e,n){"use strict";n.r(e);var a=n(9),r=n.n(a),o=n(2),i=n.n(o),c=n(582),u=n(583),s=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){return i.a.createElement(c.a,{location:this.props.location},i.a.createElement(u.a,{title:"404: Not Found"}),i.a.createElement("h1",null,"Not Found"),i.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))},e}(i.a.Component);e.default=s},578:function(t,e,n){"use strict";n.r(e),n.d(e,"graphql",function(){return f}),n.d(e,"StaticQueryContext",function(){return p}),n.d(e,"StaticQuery",function(){return m});var a=n(2),r=n.n(a),o=n(6),i=n.n(o),c=n(577),u=n.n(c);n.d(e,"Link",function(){return u.a}),n.d(e,"withPrefix",function(){return c.withPrefix}),n.d(e,"navigate",function(){return c.navigate}),n.d(e,"push",function(){return c.push}),n.d(e,"replace",function(){return c.replace}),n.d(e,"navigateTo",function(){return c.navigateTo});var s=n(580),l=n.n(s);n.d(e,"PageRenderer",function(){return l.a});var d=n(40);n.d(e,"parsePath",function(){return d.a});var p=r.a.createContext({}),m=function(t){return r.a.createElement(p.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},579:function(t,e,n){"use strict";n.d(e,"a",function(){return u}),n.d(e,"b",function(){return s});var a=n(591),r=n.n(a),o=n(592),i=n.n(o);i.a.overrideThemeStyles=function(){return{a:{color:"#d35c5c"},"a.gatsby-resp-image-link":{boxShadow:"none"}}},delete i.a.googleFonts;var c=new r.a(i.a);var u=c.rhythm,s=c.scale},580:function(t,e,n){var a;t.exports=(a=n(581))&&a.default||a},581:function(t,e,n){"use strict";n.r(e);var a=n(14),r=n.n(a),o=n(2),i=n.n(o),c=n(6),u=n.n(c),s=n(61),l=n(4),d=function(t){var e=t.location,n=l.default.getResourcesForPathnameSync(e.pathname);return i.a.createElement(s.a,r()({location:e,pageResources:n},n.json))};d.propTypes={location:u.a.shape({pathname:u.a.string.isRequired}).isRequired},e.default=d},582:function(t,e,n){"use strict";var a=n(14),r=n.n(a),o=n(9),i=n.n(o),c=n(2),u=n.n(c),s=n(578),l=n(579),d=function(t){function e(){return t.apply(this,arguments)||this}return i()(e,t),e.prototype.render=function(){var t,e=this.props,n=e.location,a=(e.title,e.children);return t="/almanac/"===n.pathname?u.a.createElement("h1",{style:r()({},Object(l.b)(1.5),{marginBottom:Object(l.a)(1.5),marginTop:0})},u.a.createElement(s.Link,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"})):u.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",marginTop:0,marginBottom:Object(l.a)(-1)}},u.a.createElement(s.Link,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"})),u.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(l.a)(24),padding:Object(l.a)(1.5)+" "+Object(l.a)(.75)}},t,a,u.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",u.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby")))},e}(u.a.Component);e.a=d},583:function(t,e,n){"use strict";var a=n(584),r=n(2),o=n.n(r),i=n(6),c=n.n(i),u=n(593),s=n.n(u),l=n(578);function d(t){var e=t.description,n=t.lang,r=t.meta,i=t.keywords,c=t.title;return o.a.createElement(l.StaticQuery,{query:p,render:function(t){var a=e||t.site.siteMetadata.description;return o.a.createElement(s.a,{htmlAttributes:{lang:n},title:c,titleTemplate:"%s | "+t.site.siteMetadata.title,meta:[{name:"description",content:a},{property:"og:title",content:c},{property:"og:description",content:a},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:t.site.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:a}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(r)})},data:a})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.array,keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},e.a=d;var p="1025518380"},584:function(t){t.exports={data:{site:{siteMetadata:{title:"Almanac",description:"An almanac of a full snack developer",author:"Maria Kravtsova"}}}}}}]);
//# sourceMappingURL=component---src-pages-404-js-89701ba17f87ffa9f74e.js.map