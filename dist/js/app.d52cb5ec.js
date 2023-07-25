(function(){var t={2270:function(t,e,a){"use strict";var o=a(942),n=a(8345),s=a(7398);const i={class:"mainpage"},r=(0,o._)("div",{class:"pagebox"},[(0,o._)("h2",null,"Database Snapshots"),(0,o._)("p",null,[(0,o.Uk)("The most recent "),(0,o._)("a",{href:"http://www.neotomadb.org/snapshots"},"Neotoma PostgreSQL Database Snapshot"),(0,o.Uk)(" is available online.")]),(0,o._)("h2",null,"Data Use Policy"),(0,o._)("p",null,[(0,o.Uk)("We ask all data users to consider the "),(0,o._)("a",{href:"http://www.neotomadb.org/data/category/use"},"Neotoma Data Use policy"),(0,o.Uk)(" as well as the general guidelines of open and ethical data sharing when using this data.")])],-1);function d(t,e,a,n,s,d){const l=(0,o.up)("app-header"),c=(0,o.up)("app-titlebar"),p=(0,o.up)("app-emptypage"),u=(0,o.up)("app-contacts"),m=(0,o.up)("app-ageinfo"),h=(0,o.up)("app-publications"),g=(0,o.up)("app-commondata"),f=(0,o.up)("app-status"),v=(0,o.up)("app-footer");return(0,o.wg)(),(0,o.iD)("div",i,[(0,o.Wm)(l),void 0!==a.dsid?((0,o.wg)(),(0,o.j4)(c,{key:0,dsid:a.dsid},null,8,["dsid"])):(0,o.kq)("",!0),void 0===a.dsid?((0,o.wg)(),(0,o.j4)(p,{key:1})):(0,o.kq)("",!0),void 0!==a.dsid?((0,o.wg)(),(0,o.j4)(u,{key:2,dsid:a.dsid},null,8,["dsid"])):(0,o.kq)("",!0),void 0!==a.dsid?((0,o.wg)(),(0,o.j4)(m,{key:3,dsid:a.dsid},null,8,["dsid"])):(0,o.kq)("",!0),void 0!==a.dsid?((0,o.wg)(),(0,o.j4)(h,{key:4,dsid:a.dsid},null,8,["dsid"])):(0,o.kq)("",!0),void 0!==a.dsid?((0,o.wg)(),(0,o.j4)(g,{key:5,dsid:a.dsid},null,8,["dsid"])):(0,o.kq)("",!0),(0,o.Wm)(f),r,(0,o.Wm)(v)])}var l=a.p+"img/nsf.9c3bae63.png",c=a.p+"img/logo_earthcube_cube-only_SMALL.ae4611b5.png";const p={class:"headerbox"},u=(0,o.uE)('<div class="headername"> Funded by: <br><a href="https://www.nsf.gov/">National Science Foundation</a><br>Directorate for Geosciences <br>Division of Earth Sciences </div><div class="headermouse"><img src="'+l+'" width="100" height="100" alt="National Science Foundation logo"></div><div class="headername"><a href="https://earthcube.org">EarthCube</a><br>Integrative Activities<br>National Sciences Foundation </div><div class="headermouse"><img src="'+c+'" style="margin-top:10px;" width="100" height="100" alt="EarthCube logo."></div>',4),m=[u];function h(t,e,a,n,s,i){return(0,o.wg)(),(0,o.iD)("div",p,m)}var g={name:"Footer",data(){return{msg:"Welcome to Your Vue.js App"}}},f=a(3744);const v=(0,f.Z)(g,[["render",h]]);var b=v,w=a.p+"img/packrat.80675f7c.png";const y={class:"headerbox"},_=(0,o._)("div",{class:"headermouse"},[(0,o._)("img",{src:w,width:"185",height:"130",alt:"Neotoma logo, a packrat."})],-1),k=(0,o._)("div",{class:"headername"},[(0,o._)("h1",null,"Neotoma Paleoecology Database"),(0,o.Uk)(" Dataset Archiving "),(0,o._)("br"),(0,o._)("a",null,"https://neotomadb.org")],-1),D=[_,k];function U(t,e,a,n,s,i){return(0,o.wg)(),(0,o.iD)("div",y,D)}var x={name:"Header",data(){return{msg:"Welcome to Your Vue.js App"}}};const N=(0,f.Z)(x,[["render",U]]);var O=N;const P={class:"componentbox"},j=(0,o._)("h2",null,"Chronology",-1),W={class:"cardbox"},z=(0,o._)("strong",null,"Age Type",-1),E=(0,o._)("br",null,null,-1),A=(0,o._)("strong",null,"Model Type",-1),S=(0,o._)("br",null,null,-1),T={key:0},C=(0,o._)("strong",null,"Prepared by",-1),I=(0,o._)("br",null,null,-1),Z=(0,o._)("strong",null,"Age Range",-1);function q(t,e,a,n,s,i){return(0,o.wg)(),(0,o.iD)("div",P,[j,(0,o._)("div",W,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(s.items,(t=>((0,o.wg)(),(0,o.iD)("div",{key:t.chronologyid,class:"namecard"},[(0,o._)("h3",null,(0,o.zw)(t.chronology.chronologyName),1),z,(0,o.Uk)(": "+(0,o.zw)(t.chronology.agetype),1),E,A,(0,o.Uk)(": "+(0,o.zw)(t.chronology.modelType),1),S,t.chronology.preparedby?((0,o.wg)(),(0,o.iD)("div",T,[C,(0,o.Uk)(": "+(0,o.zw)(t.chronology.preparedby.firstname+" "+t.chronology.preparedby.familyname),1),I])):(0,o.kq)("",!0),Z,(0,o.Uk)(": "+(0,o.zw)(t.chronology.reliableagespan.younger)+" to "+(0,o.zw)(t.chronology.reliableagespan.older),1)])))),128))])])}var M={name:"ageinfo",props:{dsid:{required:!0}},data(){return{msg:"Welcome to Your Vue.js App",items:null}},methods:{fetchData:function(){let t=this;fetch("https://api.neotomadb.org/v2.0/data/datasets/"+this.dsid+"/chronologies").then((t=>t.json())).then((e=>{t.items=e.data}))}},mounted(){this.fetchData()}};const F=(0,f.Z)(M,[["render",q]]);var G=F;const H=t=>((0,o.dD)("data-v-748b9c20"),t=t(),(0,o.Cn)(),t),K={key:0,class:"geochronwarn"},R=H((()=>(0,o._)("strong",null,"Note",-1))),Y=H((()=>(0,o._)("strong",null,"Site Description: ",-1))),J=H((()=>(0,o._)("strong",null,"Site Notes: ",-1))),V=H((()=>(0,o._)("h4",{class:"text-center"},[(0,o._)("small",null,"Site Annotations")],-1))),Q=H((()=>(0,o._)("h4",{class:"text-center"},[(0,o._)("small",null,"Dataset Annotations")],-1))),B={class:"d-block d-sm-none"},X=H((()=>(0,o._)("br",null,null,-1))),$=H((()=>(0,o._)("strong",null,"Coordinates",-1))),tt=["title"],et={class:"map"},at=H((()=>(0,o._)("strong",null,"Coordinates",-1))),ot={key:1},nt={key:0,id:"thingy"};function st(t,e,a,n,s,i){const r=(0,o.up)("b-row"),d=(0,o.up)("b-col"),l=(0,o.up)("throughput-widget"),c=(0,o.up)("b-container"),p=(0,o.up)("l-tile-layer"),u=(0,o.up)("l-marker"),m=(0,o.up)("l-map"),h=(0,o.up)("b-button"),g=(0,o.up)("schemaBox"),f=(0,o.Q2)("b-tooltip");return(0,o.wg)(),(0,o.j4)(c,null,{default:(0,o.w5)((()=>[(0,o.Wm)(r,{cols:"12","align-v":"center"},{default:(0,o.w5)((()=>[(0,o.Wm)(d,{cols:"9"},{default:(0,o.w5)((()=>[(0,o.Wm)(c,null,{default:(0,o.w5)((()=>[(0,o.Wm)(r,{cols:"1"},{default:(0,o.w5)((()=>[(0,o._)("h1",null,"Neotoma Dataset "+(0,o.zw)(this.dsid),1),(0,o._)("h2",null,(0,o.zw)(s.items.sitename),1),(0,o._)("h3",null,(0,o.zw)(s.items.datasettype)+" Dataset - "+(0,o.zw)(s.items.database),1),"Geochronologic"==s.items.datasettype?((0,o.wg)(),(0,o.iD)("div",K,[R,(0,o.Uk)(": Geochronologic datasets are unique in Neotoma, they are not assigned DOIs and have limited associated metadata. Please see the associated datasets below for more complete metadata. ")])):(0,o.kq)("",!0),(0,o._)("p",null,[Y,(0,o._)("em",null,(0,o.zw)(s.items.sitedescription),1)]),(0,o._)("p",null,[J,(0,o._)("em",null,(0,o.zw)(s.items.sitenotes),1)])]),void 0,!0),_:1}),(0,o.Wm)(r,{"align-h":"center","align-v":"center",class:"d-none d-md-block"},{default:(0,o.w5)((()=>[(0,o.Wm)(r,{md:"auto"},{default:(0,o.w5)((()=>[(0,o.Wm)(d,{cols:"6",lg:"auto"},{default:(0,o.w5)((()=>[V]),void 0,!0),_:1}),(0,o.Wm)(d,{cols:"6",lg:"auto"},{default:(0,o.w5)((()=>[Q]),void 0,!0),_:1})]),void 0,!0),_:1}),(0,o.Wm)(r,null,{default:(0,o.w5)((()=>[(0,o.Wm)(d,{cols:"6",lg:"auto"},{default:(0,o.w5)((()=>[(0,o.Wm)(l,{"read-only-mode":"false",identifier:"r3d100011761",".link":s.items.siteid,"additional-type":"site","orcid-client-id":"APP-OKAEGWFY7MEOK4HE"},null,8,[".link"])]),void 0,!0),_:1}),(0,o.Wm)(d,{cols:"6",lg:"auto"},{default:(0,o.w5)((()=>[(0,o.Wm)(l,{"read-only-mode":"false",identifier:"r3d100011761",".link":this.dsid,"additional-type":"dataset","orcid-client-id":"APP-OKAEGWFY7MEOK4HE"},null,8,[".link"])]),void 0,!0),_:1})]),void 0,!0),_:1})]),void 0,!0),_:1}),(0,o._)("div",B,[(0,o.Uk)(" The dynamic site map is not displayed on mobile displays. Use the Neotoma Explorer link."),X,(0,o._)("small",null,[$,(0,o.Uk)(": "+(0,o.zw)(s.items.coord),1)])])]),void 0,!0),_:1})]),void 0,!0),_:1}),(0,o.Wm)(d,{cols:"3",class:"d-none d-md-block"},{default:(0,o.w5)((()=>[(0,o.wy)(((0,o.wg)(),(0,o.iD)("div",{title:s.attribution},[(0,o._)("div",et,[(0,o.Wm)(m,{zoom:5,center:s.items.coordinates},{default:(0,o.w5)((()=>[(0,o.Wm)(p,{url:s.url},null,8,["url"]),(0,o.Wm)(u,{"lat-lng":s.items.coordinates},null,8,["lat-lng"])]),void 0,!0),_:1},8,["center"])]),(0,o._)("small",null,[at,(0,o.Uk)(": "+(0,o.zw)(s.items.coord),1)])],8,tt)),[[f,void 0,void 0,{hover:!0}]])]),void 0,!0),_:1})]),void 0,!0),_:1}),s.items?((0,o.wg)(),(0,o.j4)(r,{key:0,cols:"12",style:{"padding-top":"10px","padding-bottom":"10px"},"align-v":"center"},{default:(0,o.w5)((()=>[(0,o.Wm)(d,null,{default:(0,o.w5)((()=>["No DOI minted"===s.items.doi[1]?((0,o.wg)(),(0,o.j4)(h,{key:0,variant:"outline-danger"},{default:(0,o.w5)((()=>[(0,o.Uk)(" No DOI Minted ")]),void 0,!0),_:1})):((0,o.wg)(),(0,o.j4)(h,{key:1,variant:"outline-dark",activetarget:"_blank",href:s.items.doi[0],rel:"noreferrer"},{default:(0,o.w5)((()=>[(0,o.Uk)(" DOI: "+(0,o.zw)(s.items.doi[1][0]),1)]),void 0,!0),_:1},8,["href"]))]),void 0,!0),_:1}),(0,o.Wm)(d,null,{default:(0,o.w5)((()=>[(0,o.Wm)(h,{variant:"outline-dark",activetarget:"_blank",href:s.items.explorer,rel:"noreferrer"},{default:(0,o.w5)((()=>[(0,o.Uk)(" Neotoma Explorer Link ")]),void 0,!0),_:1},8,["href"])]),void 0,!0),_:1}),(0,o.Wm)(d,null,{default:(0,o.w5)((()=>["Geochronologic"==s.items.datasettype?((0,o.wg)(),(0,o.j4)(h,{key:0,variant:"outline-danger"},{default:(0,o.w5)((()=>[(0,o.Uk)(" Current Data Disabled ")]),void 0,!0),_:1})):((0,o.wg)(),(0,o.j4)(h,{key:1,target:"_blank",variant:"outline-dark",href:s.items.currjson,rel:"noreferrer"},{default:(0,o.w5)((()=>[(0,o.Uk)(" Download Current Data (JSON) ")]),void 0,!0),_:1},8,["href"]))]),void 0,!0),_:1}),(0,o.Wm)(d,null,{default:(0,o.w5)((()=>["Geochronologic"==s.items.datasettype?((0,o.wg)(),(0,o.j4)(h,{key:0,variant:"outline-danger"},{default:(0,o.w5)((()=>[(0,o.Uk)(" Data As Uploaded Disabled ")]),void 0,!0),_:1})):((0,o.wg)(),(0,o.j4)(h,{key:1,target:"_blank",variant:"outline-dark",href:s.items.frozenjson,rel:"noreferrer"},{default:(0,o.w5)((()=>[(0,o.Uk)(" Download Data As Uploaded (JSON) ")]),void 0,!0),_:1},8,["href"]))]),void 0,!0),_:1})]),void 0,!0),_:1})):(0,o.kq)("",!0),s.items?((0,o.wg)(),(0,o.iD)("div",ot,[s.items.doi.length>0?((0,o.wg)(),(0,o.iD)("div",nt,[(0,o.Wm)(g,{items:s.items},null,8,["items"])])):(0,o.kq)("",!0)])):(0,o.kq)("",!0)]),void 0,!0),_:1})}a(7658);function it(t,e,a,n,s,i){return(0,o.wg)(),(0,o.iD)("div")}var rt={name:"schemaCard",props:{items:{required:!0}},data(){return{msg:"Contact data rendered.",buildSchema:{aa:12}}},mounted(){let t=document.createElement("script");t.setAttribute("type","application/ld+json"),t.textContent=JSON.stringify(this.schemaData),document.head.appendChild(t)},computed:{schemaData:function(){var t={"@context":"https://schema.org","@type":"Dataset",license:"https://creativecommons.org/licenses/by/4.0/deed.en_US",name:this.items.sitename+" "+this.items.datasettype+" dataset",description:"Landing page for "+this.items.datasettype+" data from "+this.items.sitename+", including data download options and linked resources.",includedInDataCatalog:{"@type":"DataCatalog",name:this.items.database,about:"Paleoecology",publication:"Williams JW, et al. (2018). The Neotoma Paleoecology Database, a multiproxy, international, community-curated data resource. Quaternary Research, 89(1), 156-177.",publisher:{"@type":"Organization",name:"Neotoma Paleoecological Database",alternateName:"Neotoma",description:"The Neotoma Paleoecology Database and Community is an online hub for data, research, education, and discussion about paleoenvironments.",url:"https://neotomadb.org"},funder:{"@type":"Organization",name:"National Sciences Foundation",alternateName:"NSF",url:"https://nsf.gov"},isAccessibleForFree:!0},about:"",distribution:{"@type":"DataDownload",contentUrl:this.items.currjson,datePublished:"2018-02-02 14:24:27",inLanguage:"en",encodingFormat:"application/json"},spatialCoverage:{"@type":"Place",name:this.items.sitename,geo:{"@type":"GeoCoordinates",latitude:this.items.coordinates[0],longitude:this.items.coordinates[1],elevation:this.items.altitude}}};return null==!this.items.datasets[0].doi&&(t["@context"]={"@vocab":"https://schema.org/",datacite:"https://purl.org/spar/datacite/"},t.identifier={"@type":"PropertyValue",propertyID:"https://purl.org/spar/datacite/doi",url:this.items.datasets[0].doi[0],value:this.items.datasets[0].doi[1]}),t}}};const dt=(0,f.Z)(rt,[["render",it]]);var lt=dt,ct={name:"titleCard",props:{dsid:{required:!0}},directives:{"b-tooltip":"b-tooltip","b-button":"b-button"},components:{schemaBox:lt},data(){return{this:{pubs:[],dataset:[]},items:{doi:[null,null]},url:"https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}",attribution:["Tiles &copy; Esri &mdash; Source: Esri, DeLorme, NAVTEQ, USGS, Intermap, iPC, NRCAN, Esri Japan, METI, Esri China (Hong Kong), Esri (Thailand), TomTom, 2012",""],datasetschema:""}},methods:{datasetDOI:function(){let t=this;t.datasetDOIs=t.items.doi[0],fetch(t.items.doi[0],{headers:{Accept:"application/vnd.schemaorg.ld+json"}}).then((t=>t.text())).then((function(e){t.datasetschema=e})).catch((t=>console.log(t)))}},created(){let t=this;fetch("https://api.neotomadb.org/v2.0/data/datasets/"+this.dsid).then((t=>t.json())).then((e=>{if(0===e.data.length&&this.$router.push("/"),t.items=e.data[0].site,t.items.database=t.items.datasets[0].database,t.items.datasettype=t.items.datasets[0].datasettype.charAt(0).toUpperCase()+t.items.datasets[0].datasettype.slice(1),t.items.explorer="https://apps.neotomadb.org/Explorer/?datasetids="+t.items.datasets[0].datasetid,t.items.currjson="https://api.neotomadb.org/v2.0/data/downloads/"+t.items.datasets[0].datasetid,t.items.frozenjson="https://api.neotomadb.org/v2.0/data/frozen/"+t.items.datasets[0].datasetid,t.items.loc=JSON.parse(t.items.geography),t.items.coordinates=t.items.loc.coordinates.reverse(),"Geochronologic"===t.items.datasettype&&(t.items.currjson="",t.items.frozenjson=""),null==t.items.datasets[0].doi?t.items.doi=["","No DOI minted"]:t.items.doi=["https://doi.org/"+t.items.datasets[0].doi[0],t.items.datasets[0].doi],null===t.items.sitedescription&&(t.items.sitedescription="No description exists for this site."),null===t.items.sitenotes&&(t.items.sitenotes="No site notes exists for this site."),null===t.items.datasets[0].doi&&(t.items.doi="No DOI has been minted for this site."),t.items.coordinates[0].length>1){var a=t.items.coordinates[0].length;t.items.coordinates=t.items.coordinates[0].reduce(((t,e)=>[t[0]+e[0],t[1]+e[1]])).map((t=>t/a)).reverse()}t.items.coord=t.items.coordinates.map((t=>Math.round(100*t)/100))}))}};const pt=(0,f.Z)(ct,[["render",st],["__scopeId","data-v-748b9c20"]]);var ut=pt,mt=a.p+"img/DOI_logo.029e1437.svg";const ht={class:"componentbox"},gt=(0,o._)("h2",null,"Publications",-1),ft={key:0,class:"cardbox"},vt={key:0},bt=["href"],wt=(0,o._)("img",{src:mt,class:"doi",alt:"DOI link to the dataset publication"},null,-1),yt=[wt],_t={key:1};function kt(t,e,a,n,s,i){return(0,o.wg)(),(0,o.iD)("div",ht,[gt,this.pubs.length>0?((0,o.wg)(),(0,o.iD)("div",ft,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(this.pubs,(t=>((0,o.wg)(),(0,o.iD)("div",{key:t.publicationid,class:"namecard"},[null!==t.publication.doi?((0,o.wg)(),(0,o.iD)("div",vt,[(0,o._)("a",{target:"_blank",href:"https://doi.org/"+t.publication.doi,rel:"noreferrer"},yt,8,bt)])):(0,o.kq)("",!0),(0,o.Uk)((0,o.zw)(t.publication.citation),1)])))),128))])):((0,o.wg)(),(0,o.iD)("div",_t," The dataset has no associated publications (check associated datasets). "))])}var Dt={name:"Publications",props:["dsid"],data(){return{msg:"Common data rendered.",pubs:[]}},created(){let t=this;fetch("https://api.neotomadb.org/v2.0/data/datasets/"+this.dsid+"/publications").then((t=>t.json())).then((e=>{null===e.data&&(e.data=[]),t.pubs=e.data}))},mounted(){}};const Ut=(0,f.Z)(Dt,[["render",kt]]);var xt=Ut;const Nt={class:"componentbox"},Ot=(0,o._)("h2",null,"Investigators",-1),Pt={class:"cardbox"},jt={key:0},Wt={key:1},zt=(0,o._)("small",null,"No email address on record",-1),Et=[zt],At={key:2},St=(0,o._)("br",null,null,-1),Tt=["href"];function Ct(t,e,a,n,s,i){return(0,o.wg)(),(0,o.iD)("div",Nt,[Ot,(0,o._)("div",Pt,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(s.items,(t=>((0,o.wg)(),(0,o.iD)("div",{key:t.fullName,class:"namecard"},[(0,o._)("strong",null,(0,o.zw)(t.fullname),1),null!==t.email?((0,o.wg)(),(0,o.iD)("div",jt,[(0,o._)("small",null,(0,o.zw)(t.email),1)])):(0,o.kq)("",!0),null===t.email?((0,o.wg)(),(0,o.iD)("div",Wt,Et)):(0,o.kq)("",!0),null!==t.url?((0,o.wg)(),(0,o.iD)("div",At,[St,(0,o._)("a",{href:t.url},"Research Website",8,Tt)])):(0,o.kq)("",!0)])))),128))])])}var It={name:"contacts",props:{dsid:{required:!0}},data(){return{msg:"Contact data rendered.",items:null}},methods:{fetchData:function(){let t=this;fetch("https://api.neotomadb.org/v2.0/data/datasets/"+this.dsid+"/contacts").then((t=>t.json())).then((e=>{t.items=e.data[0].contacts.contacts}))}},mounted(){this.fetchData()}};const Zt=(0,f.Z)(It,[["render",Ct]]);var qt=Zt;const Lt={class:"componentbox"},Mt=(0,o._)("h2",null,"Other Associated Datasets",-1),Ft=(0,o._)("h3",null,"Datasets at the Same Site",-1),Gt={key:0,class:"cardbox"},Ht=["href"],Kt=(0,o._)("br",null,null,-1),Rt={key:1};function Yt(t,e,a,n,s,i){return(0,o.wg)(),(0,o.iD)("div",Lt,[Mt,Ft,this.dataset.length>0?((0,o.wg)(),(0,o.iD)("div",Gt,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(this.dataset,(t=>((0,o.wg)(),(0,o.iD)("div",{key:t.datasetid,class:"namecard"},[(0,o._)("small",null,[(0,o.Uk)("["),(0,o._)("strong",null,[(0,o._)("a",{target:"_blank",href:t.datasetid},(0,o.zw)(t.datasetid),9,Ht)]),(0,o.Uk)("]")]),(0,o.Uk)(" "+(0,o.zw)(t.datasettype.charAt(0).toUpperCase()+t.datasettype.slice(1)),1),Kt,(0,o._)("small",null,[(0,o._)("strong",null,(0,o.zw)(t.database),1)])])))),128))])):((0,o.wg)(),(0,o.iD)("div",Rt," The site has no other datasets. "))])}var Jt={name:"commondata",props:{dsid:{required:!0}},data(){return{msg:"Common data rendered.",dataset:[],pbndataset:null,site:null}},methods:{fetchData:function(){let t=this;fetch("https://api.neotomadb.org/v2.0/data/datasets/"+this.dsid+"/sites").then((t=>t.json())).then((e=>{var a=e.data[0].siteid;t.site=a,fetch("https://api.neotomadb.org/v2.0/data/sites/"+a+"/datasets").then((t=>t.json())).then((e=>{var a=e.data[0].site.datasets;t.dataset=a.map((function(t){return{datasetid:t.datasetid,datasettype:t.datasettype,database:t.database}})).flat().filter((t=>t.datasetid!==parseInt(this.dsid)))}))}))}},mounted(){this.fetchData()}};const Vt=(0,f.Z)(Jt,[["render",Yt]]);var Qt=Vt;const Bt={class:"headerbox"},Xt=["src"],$t=(0,o._)("h1",null,"Neotoma Paleoecology Landing Pages",-1),te=(0,o._)("p",null,[(0,o.Uk)("This page is intended to operate as a resource for obtaining extended metadata about Neotoma resources and to serve as a platform for DOI landing pages. To access information about an individual Neotoma Dataset include the dataset ID in the URL: "),(0,o._)("strong",null,"https://data.neotomadb.org/{DatasetID}"),(0,o.Uk)(", for example, the dataset for the Lake Tulane Loss on Ignition dataset can be found at "),(0,o._)("a",{href:"https://data.neotomadb.org/2662"},"https://data.neotomadb.org/2662"),(0,o.Uk)(".")],-1),ee=(0,o._)("p",null,[(0,o._)("strong",null,"NOTE:"),(0,o.Uk)(" This page is informational and will not directly lead to datasets. To explore Neotoma datasets interactively please use the "),(0,o._)("a",{href:"https://apps.neotomadb.org/Explorer"},"Neotoma Explorer"),(0,o.Uk)(".")],-1),ae=(0,o._)("p",null,[(0,o.Uk)("This application is managed and maintained as an open-source project on the "),(0,o._)("a",{href:"https://github.com/NeotomaDB/ndbLandingPage"},"Neotoma GitHub Repository"),(0,o.Uk)(".")],-1),oe={class:"headerbox",style:{"padding-left":"10px"}};function ne(t,e,a,n,s,i){return(0,o.wg)(),(0,o.iD)("div",null,[(0,o._)("div",Bt,[(0,o._)("img",{src:i.path(),style:{width:"100%"}},null,8,Xt),$t,te,(0,o.Uk)(),ee,ae]),(0,o._)("div",oe,[(0,o._)("h4",null,"As of "+(0,o.zw)(this.date.toISOString().substring(0,10))+":",1),(0,o._)("p",null,[(0,o.Uk)("Neotoma manages "),(0,o._)("strong",null,(0,o.zw)(this.rawstats.datasets),1),(0,o.Uk)(" datasets by "),(0,o._)("strong",null,(0,o.zw)(this.rawstats.authors),1),(0,o.Uk)(" authors, from "),(0,o._)("strong",null,(0,o.zw)(this.rawstats.publications),1),(0,o.Uk)(" publications across "),(0,o._)("strong",null,(0,o.zw)(this.rawstats.countrygpid),1),(0,o.Uk)(" countries.")])])])}var se={name:"emptyPage",data(){return{images:["centralamerica-fs8.png","australia-fs8.png","easternna-fs8.png","japan-fs8.png","pacific_coast-fs8.png","southamerica-fs8.png","westernasia-fs8.png"],selectedimage:"",rawstats:"",date:new Date}},created(){let t=this;fetch("https://api.neotomadb.org/v2.0/data/summary/rawbymonth?start=0&end=9999").then((t=>t.json())).then((e=>{t.rawstats=e.data.data[0]}))},methods:{path(){var t=Math.floor(Math.random()*this.images.length);return a(2324)("./"+this.images[t])}}};const ie=(0,f.Z)(se,[["render",ne]]);var re=ie;const de={class:"pagebox"},le=(0,o._)("h2",{class:"status"},"Neotoma Web Link Status & Reference",-1),ce=(0,o._)("a",{href:"https://api.neotomadb.org"},"Neotoma API",-1),pe={key:0,class:"online"},ue={key:1,class:"offline"},me=(0,o._)("a",{href:"https://apps.neotomadb.org/explorer"},"Explorer",-1),he={key:2,class:"online"},ge={key:3,class:"offline"},fe=(0,o._)("a",{href:"https://apps.neotomadb.org/explorer"},"Tilia API",-1),ve={key:4,class:"online"},be={key:5,class:"offline"},we=(0,o._)("br",null,null,-1),ye=(0,o._)("a",{href:"https://api-dev.neotomadb.org"},"Development API",-1),_e={key:6,class:"online"},ke={key:7,class:"offline"},De=(0,o._)("hr",{style:{"margin-top":"2px","margin-bottom":"2px"}},null,-1),Ue=(0,o._)("a",{href:"https://open.neotomadb.org/dbschema"},"Database Schema",-1),xe=(0,o._)("a",{href:"https://open.neotomadb.org/dbschema"},"Database Manual",-1);function Ne(t,e,a,n,s,i){const r=(0,o.up)("b-card"),d=(0,o.up)("b-col"),l=(0,o.up)("b-row"),c=(0,o.up)("b-container");return(0,o.wg)(),(0,o.iD)("div",de,[(0,o.Wm)(c,{fluid:""},{default:(0,o.w5)((()=>[(0,o.Wm)(l,null,{default:(0,o.w5)((()=>[(0,o.Wm)(d,{cols:"5"},{default:(0,o.w5)((()=>[(0,o.Wm)(r,{"bg-variant":"light","border-variant":"secondary"},{default:(0,o.w5)((()=>[le]),void 0,!0),_:1})]),void 0,!0),_:1}),(0,o.Wm)(d,{cols:"7","align-self":"center"},{default:(0,o.w5)((()=>[ce,(0,o.Uk)(" ["),!0===this.ping["api"]?((0,o.wg)(),(0,o.iD)("span",pe,"Online")):((0,o.wg)(),(0,o.iD)("span",ue,"Offline")),(0,o.Uk)("]; "),me,(0,o.Uk)(" ["),!0===this.ping["explorer"]?((0,o.wg)(),(0,o.iD)("span",he,"Online")):((0,o.wg)(),(0,o.iD)("span",ge,"Offline")),(0,o.Uk)("]; "),fe,(0,o.Uk)(" ["),!0===this.ping["tilia-dev"]?((0,o.wg)(),(0,o.iD)("span",ve,"Online")):((0,o.wg)(),(0,o.iD)("span",be,"Offline")),(0,o.Uk)("]"),we,ye,(0,o.Uk)(" ["),!0===this.ping["api-dev"]?((0,o.wg)(),(0,o.iD)("span",_e,"Online")):((0,o.wg)(),(0,o.iD)("span",ke,"Offline")),(0,o.Uk)("]"),De,Ue,(0,o.Uk)(" — "),xe]),void 0,!0),_:1})]),void 0,!0),_:1})]),void 0,!0),_:1})])}var Oe={name:"datastatus",data(){return{msg:"Contact data rendered.",ping:{"api-dev":null,explorer:null,api:null,"tilia-dev":null}}},methods:{hitstuff:function(){let t=this;fetch("https://api-dev.neotomadb.org/v2.0/data/datasets/12",{method:"HEAD",mode:"no-cors"}).then((e=>{t.ping["api-dev"]=200===e.status})).catch((t=>console.log(t))),fetch("https://api.neotomadb.org/v2.0/data/datasets/12",{method:"HEAD"}).then((e=>{t.ping["api"]=200===e.status})).catch((t=>console.log(t))),fetch("https://apps.neotomadb.org/explorer",{mode:"no-cors",method:"HEAD"}).then((e=>{t.ping["explorer"]=0===e.status})).catch((t=>console.log(t))),fetch("https://tilia.neotomadb.org/api",{method:"HEAD"}).then((e=>{t.ping["tilia-dev"]=200===e.status})).catch((t=>console.log(t)))}},created(){this.hitstuff()}};const Pe=(0,f.Z)(Oe,[["render",Ne]]);var je=Pe,We={name:"app",props:["dsid"],components:{"app-footer":b,"app-header":O,"app-titlebar":ut,"app-publications":xt,"app-ageinfo":G,"app-contacts":qt,"app-commondata":Qt,"app-emptypage":re,"app-status":je},data(){return{msg:"Rendered!"}}};const ze=(0,f.Z)(We,[["render",d]]);var Ee=ze,Ae=a(4147),Se=a(4196),Te=a(7423),Ce=a(725),Ie=a(6253),Ze=a(3777),qe=a(6155);o.ZP.component("b-container",Ae.h),o.ZP.component("b-button",Se.T),o.ZP.component("b-tooltip",Te.T),o.ZP.component("b-col",Ce.l),o.ZP.component("b-row",Ie.T),o.ZP.component("b-card",Ze._),o.ZP.component("l-map",qe.LMap),o.ZP.component("l-tile-layer",qe.LTileLayer),o.ZP.component("l-marker",qe.LMarker),delete L.Icon.Default.prototype._getIconUrl,L.Icon.Default.mergeOptions({iconRetinaUrl:a(6431),iconUrl:a(7093),shadowUrl:a(8858)}),o.ZP.config.productionTip=!1,o.ZP.config.ignoredElements=["throughput-widget"];const Le=new n.ZP({mode:"history",routes:[{path:"/",component:Ee,name:"root"},{path:"/:dsid/",component:Ee,props:!0},{path:"/datasets/:dsid/",alias:"/:dsid",component:Ee,props:!0}]});o.ZP.use(n.ZP),o.ZP.use(s.ZP,{config:{id:"G-3XDNWKENJ4"}},Le),new o.ZP({el:"#app",router:Le,render:t=>t("router-view")})},2324:function(t,e,a){var o={"./australia-fs8.png":7268,"./centralamerica-fs8.png":6982,"./easternna-fs8.png":2377,"./japan-fs8.png":5993,"./pacific_coast-fs8.png":7401,"./southamerica-fs8.png":2901,"./westernasia-fs8.png":7367};function n(t){var e=s(t);return a(e)}function s(t){if(!a.o(o,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return o[t]}n.keys=function(){return Object.keys(o)},n.resolve=s,t.exports=n,n.id=2324},7268:function(t,e,a){"use strict";t.exports=a.p+"img/australia-fs8.6e3d3577.png"},6982:function(t,e,a){"use strict";t.exports=a.p+"img/centralamerica-fs8.a548634e.png"},2377:function(t,e,a){"use strict";t.exports=a.p+"img/easternna-fs8.4cd6cbab.png"},5993:function(t,e,a){"use strict";t.exports=a.p+"img/japan-fs8.32d2d987.png"},7401:function(t,e,a){"use strict";t.exports=a.p+"img/pacific_coast-fs8.8c03069d.png"},2901:function(t,e,a){"use strict";t.exports=a.p+"img/southamerica-fs8.f595fa2f.png"},7367:function(t,e,a){"use strict";t.exports=a.p+"img/westernasia-fs8.1de7ed44.png"}},e={};function a(o){var n=e[o];if(void 0!==n)return n.exports;var s=e[o]={exports:{}};return t[o].call(s.exports,s,s.exports,a),s.exports}a.m=t,function(){var t=[];a.O=function(e,o,n,s){if(!o){var i=1/0;for(c=0;c<t.length;c++){o=t[c][0],n=t[c][1],s=t[c][2];for(var r=!0,d=0;d<o.length;d++)(!1&s||i>=s)&&Object.keys(a.O).every((function(t){return a.O[t](o[d])}))?o.splice(d--,1):(r=!1,s<i&&(i=s));if(r){t.splice(c--,1);var l=n();void 0!==l&&(e=l)}}return e}s=s||0;for(var c=t.length;c>0&&t[c-1][2]>s;c--)t[c]=t[c-1];t[c]=[o,n,s]}}(),function(){a.d=function(t,e){for(var o in e)a.o(e,o)&&!a.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){a.p="/ndbLandingPage/"}(),function(){var t={143:0};a.O.j=function(e){return 0===t[e]};var e=function(e,o){var n,s,i=o[0],r=o[1],d=o[2],l=0;if(i.some((function(e){return 0!==t[e]}))){for(n in r)a.o(r,n)&&(a.m[n]=r[n]);if(d)var c=d(a)}for(e&&e(o);l<i.length;l++)s=i[l],a.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return a.O(c)},o=self["webpackChunklandingpages"]=self["webpackChunklandingpages"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=a.O(void 0,[998],(function(){return a(2270)}));o=a.O(o)})();
//# sourceMappingURL=app.d52cb5ec.js.map