(function(t){function e(e){for(var a,o,c=e[0],r=e[1],l=e[2],u=0,d=[];u<c.length;u++)o=c[u],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&d.push(n[o][0]),n[o]=0;for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a]);_&&_(e);while(d.length)d.shift()();return i.push.apply(i,l||[]),s()}function s(){for(var t,e=0;e<i.length;e++){for(var s=i[e],a=!0,c=1;c<s.length;c++){var r=s[c];0!==n[r]&&(a=!1)}a&&(i.splice(e--,1),t=o(o.s=s[0]))}return t}var a={},n={app:0},i=[];function o(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=t,o.c=a,o.d=function(t,e,s){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(s,a,function(e){return t[e]}.bind(null,a));return s},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],r=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var _=r;i.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"034f":function(t,e,s){"use strict";var a=s("64a9"),n=s.n(a);n.a},"20fc":function(t,e,s){},"45bc":function(t,e,s){"use strict";var a=s("20fc"),n=s.n(a);n.a},"56d7":function(t,e,s){"use strict";s.r(e);s("cadf"),s("551c"),s("f751"),s("097d");var a=s("2b0e"),n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},i=[],o=(s("4917"),{name:"app",mounted:function(){var t=navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);t&&(window.location.href="http://localhost:8080/#/home")}}),c=o,r=(s("034f"),s("2877")),l=Object(r["a"])(c,n,i,!1,null,null,null),_=l.exports,u=s("8c4f"),d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{ref:"home",staticClass:"home"},[a("transition",{attrs:{name:"slide-fade"}},[a("div",{staticClass:"nav ",class:{nav_black:t.nav_black}},[a("div",{staticClass:"nav_top "},[a("div",{staticClass:"nav_logo",on:{click:function(e){return t.toTop(150)}}}),a("div",{staticClass:"nav_link "},[a("ul",{staticClass:"nav_ul font_16"},[a("li",{on:{click:function(e){return t.scrollIntoView("one")}}},[t._v(t._s(t.$t("nav_server")))]),a("li",{on:{click:function(e){return t.scrollIntoView("two")}}},[t._v(t._s(t.$t("nav_team")))]),a("li",{on:{click:function(e){return t.scrollIntoView("three")}}},[t._v(t._s(t.$t("nav_vision")))]),a("li",{on:{click:function(e){return t.scrollIntoView("four")}}},[t._v(t._s(t.$t("nav_contact")))]),a("li",[a("div",{staticClass:"ui-slider-lang"},[a("span",{on:{click:function(e){return t.changeLang("zh-CN")}}},[t._v(t._s(t.$t("ZH")))]),a("span",{on:{click:function(e){return t.changeLang("en-us")}}},[t._v(" / "+t._s(t.$t("EN")))])])])])])])])]),a("div",{staticClass:"header"},[a("swiper",{attrs:{options:t.swiperOption_banner}},t._l(t.bannerList,(function(t){return a("swiper-slide",{key:t.id},[a("img",{attrs:{src:"http://www.akgvc.com/"+t.img,alt:t}})])})),1)],1),a("div",{staticClass:"bg_white text_center",attrs:{id:"one"}},[a("div",{class:{"animated pulse":t.scroll_one_animate}},[a("h3",{staticClass:"font_40 server_top color_33"},[t._v(t._s(t.$t("nav_server")))]),a("p",{staticClass:"color_99 font_16 server_bot"},[t._v("OUR SERVICES")]),a("div",{staticClass:"line"})]),a("div",{staticClass:"server_flex w12"},[a("div",{staticClass:"box_shadow text_center server_box left"},[a("div",{staticClass:" icon_box",class:{"guwen animated flipInX":t.scroll_one_animate}}),a("h4",{staticClass:"font_22"},[t._v(t._s(t.$t("tougu")))]),a("p",{staticClass:"color_99 guwen_text font_16"},[t._v(t._s(t.$t("tougu_des")))])]),a("div",{staticClass:"box_shadow text_center server_box right"},[a("div",{staticClass:"icon_box",class:{"zixun animated flipInX":t.scroll_one_animate}}),a("h4",{staticClass:"font_22"},[t._v(t._s(t.$t("zixun")))]),a("p",{staticClass:"color_99 guwen_text font_16"},[t._v(t._s(t.$t("zixun_des")))])])])]),a("div",{staticClass:"w12"},[a("div",[a("h3",{staticClass:"font_40 kecheng_tit color_33"},[t._v(t._s(t.$t("kecheng")))]),a("p",{staticClass:"font_12 yellow_btn"},[t._v(t._s(t.$t("tougu_server")))])]),a("div",{staticClass:"server_flex kecheng_flex"},[a("iframe",{staticClass:"kecheng_video",attrs:{src:"http://h5school.haoxuezhang.cn/index.php?from=timeline&isappinstalled=0"}}),a("div",[a("ul",{staticClass:"kecheng_ul"},[a("li",[a("span",{staticClass:"dot"}),a("span",{staticClass:"font_16 color_99"},[t._v(t._s(t.$t("kecheng_one")))])]),a("li",[a("span",{staticClass:"dot"}),a("span",{staticClass:"font_16 color_99"},[t._v(t._s(t.$t("kecheng_two")))])]),a("li",[a("span",{staticClass:"dot"}),a("span",{staticClass:"font_16 color_99"},[t._v(t._s(t.$t("kecheng_three")))])]),a("li",[a("span",{staticClass:"dot"}),a("span",{staticClass:"font_16 color_99"},[t._v(t._s(t.$t("kecheng_four")))])])]),a("div",{staticClass:"kecheng_btn font_16",on:{click:t.showCode}},[t._v(t._s(t.$t("kecheng_zixun")))])])])]),a("div",{staticClass:"bg_white text_center "},[a("div",{staticClass:"w12"},[a("div",[a("h3",{staticClass:"font_40 server_top color_33"},[t._v(t._s(t.$t("youshi")))]),a("p",{staticClass:"color_99 font_16 server_bot"},[t._v("OUR ADVANTAGES")]),a("div",{staticClass:"line"})]),a("ul",{staticClass:"youshi_ul font_reg"},[a("li",[a("span",{staticClass:"icon_box",class:{"shizi animated flipInX":t.scroll_youshi_animate}}),a("div",{},[a("h6",{staticClass:"font_24 color_33 youshi_s_tit"},[t._v(t._s(t.$t("shizi")))]),a("p",{staticClass:"color_76 font_14 youshi_des"},[t._v(t._s(t.$t("shizi_des")))])])]),t._m(0),a("li",[a("span",{staticClass:"icon_box ",class:{"kecheng_icon animated flipInX":t.scroll_youshi_animate}}),a("div",{},[a("h6",{staticClass:"font_24 color_33 youshi_s_tit"},[t._v(t._s(t.$t("fengfukecheng")))]),a("p",{staticClass:"color_76 font_14 youshi_des"},[t._v(t._s(t.$t("fengfukecheng_des")))])])]),t._m(1),a("li",[a("span",{staticClass:"icon_box ",class:{"shequn animated flipInX":t.scroll_youshi_animate}}),a("div",{},[a("h6",{staticClass:"font_24 color_33 youshi_s_tit"},[t._v(t._s(t.$t("jiaoyi")))]),a("p",{staticClass:"color_76 font_14 youshi_des"},[t._v(t._s(t.$t("jiaoyi_des")))])])]),t._m(2),a("li",[a("span",{staticClass:"icon_box ",class:{"anli animated flipInX":t.scroll_youshi_animate}}),a("div",{},[a("h6",{staticClass:"font_24 color_33 youshi_s_tit "},[t._v(t._s(t.$t("dingjianli")))]),a("p",{staticClass:"color_76 font_14 youshi_des"},[t._v(t._s(t.$t("dingjianli_des")))])])])]),a("div",[a("h3",{staticClass:"font_40 server_top color_33"},[t._v(t._s(t.$t("case")))]),a("p",{staticClass:"color_99 font_16 server_bot"},[t._v("CASE")]),a("div",{staticClass:"line"})])]),a("div",{staticClass:"max_w case_cont"},[a("div",{staticClass:"clear case_serve_one"},[a("div",{staticClass:"left",class:{"case_bg_one animated bounceInLeft":t.scroll_case_animate}}),a("div",{staticClass:"case_txt left case_txt_r",class:{"animated bounceInRight":t.scroll_case_animate}},[a("p",{staticClass:"font_16"},[t._v(t._s(t.$t("tougu_server")))]),a("p",{staticClass:"color_33 font_24 case_jiben"},[t._v(t._s(t.$t("case_fenxi")))])])]),a("div",{staticClass:"clear"},[a("div",{staticClass:" right",class:{"case_bg_two animated bounceInRight":t.scroll_case2_animate}}),a("div",{staticClass:"case_txt right case_txt_l",class:{"animated bounceInLeft":t.scroll_case2_animate}},[a("p",{staticClass:"font_16"},[t._v(t._s(t.$t("tougu_server")))]),a("p",{staticClass:"color_33 font_24 k_xian_fenxi"},[t._v(t._s(t.$t("case_k_xian")))]),a("p",{staticClass:"color_99 font_14 k_xian_back"},[t._v(t._s(t.$t("case_huibao")))])])])]),a("div",{staticClass:"w12"},[a("div",{attrs:{id:"two"}},[a("div",{class:{"animated pulse":t.scroll_two_animate}},[a("h3",{staticClass:"font_40 team_top color_33"},[t._v(t._s(t.$t("nav_team")))]),a("p",{staticClass:"color_99 font_16 server_bot"},[t._v("OUR TEAM")]),a("div",{staticClass:"line"})]),a("swiper",{attrs:{options:t.swiperOption}},[a("swiper-slide",{},[a("div",{staticClass:"box_shadow text_center team_swiper_item"},[a("span",{staticClass:"icon_box team_icon_box rumyu"}),a("p",{staticClass:"font_15 color_33 name"},[t._v("Rum YU")]),a("p",{staticClass:"color_99 font_16 team_des"},[t._v(t._s(t.$t("team_yu")))])])]),a("swiper-slide",{},[a("div",{staticClass:"box_shadow text_center team_swiper_item"},[a("span",{staticClass:"icon_box team_icon_box canggongzi"}),a("p",{staticClass:"font_15 color_33 name"},[t._v(t._s(t.$t("mr_cang")))]),a("p",{staticClass:"color_99 font_16 team_des"},[t._v(t._s(t.$t("team_canggongzi")))])])]),a("swiper-slide",{},[a("div",{staticClass:"box_shadow text_center team_swiper_item"},[a("span",{staticClass:"icon_box team_icon_box tinzhang"}),a("p",{staticClass:"font_15 color_33 name"},[t._v("Tin.Zhang")]),a("p",{staticClass:"color_99 font_16 team_des"},[t._v(t._s(t.$t("team_tin")))])])]),a("swiper-slide",{},[a("div",{staticClass:"box_shadow text_center team_swiper_item"},[a("span",{staticClass:"icon_box team_icon_box mafee"}),a("p",{staticClass:"font_15 color_33 name"},[t._v("Mafee")]),a("p",{staticClass:"color_99 font_16 team_des"},[t._v(t._s(t.$t("team_mafee")))])])]),a("div",{staticClass:"swiper-button-prev",attrs:{slot:"button-prev"},slot:"button-prev"}),a("div",{staticClass:"swiper-button-next",attrs:{slot:"button-next"},slot:"button-next"})],1)],1)]),a("div",{staticClass:"w12"},[a("div",{attrs:{id:"three"}},[a("div",{class:{"animated pulse":t.scroll_three_animate}},[a("h3",{staticClass:"font_40 team_top color_33"},[t._v(t._s(t.$t("nav_vision")))]),a("p",{staticClass:"color_99 font_16 server_bot"},[t._v("Vision")]),a("div",{staticClass:"line"})]),a("p",{staticClass:"color_99 font_14 about_des"},[t._v(t._s(t.$t("vision_one"))),a("br"),t._v(t._s(t.$t("vision_two")))]),a("ul",{staticClass:"about_ul"},[a("li",{class:{"about_one animated flipInX":t.scroll_vision_animate}}),a("li",{class:{"about_two animated flipInX":t.scroll_vision_animate}}),a("li",{class:{"about_three animated flipInX":t.scroll_vision_animate}})])])])]),a("div",{staticClass:"contact",attrs:{id:"four"}},[a("div",{staticClass:"contact_w"},[a("p",{staticClass:"font_20 "},[t._v(t._s(t.$t("nav_contact")))]),a("div",{staticClass:"contact_flex"},[t._m(3),a("ul",{staticClass:"text_center"},[a("li",{staticClass:"xiaomishu font_14"},[t._v(t._s(t.$t("weixin")))]),a("li",{staticClass:"qqun font_14"},[t._v(t._s(t.$t("qq")))])])])])]),a("div",{staticClass:"footer text_center font_14"},[t._v("京ICP备案14246-46号")]),a("transition",{attrs:{name:"slide-fade"}},[t.isShow?a("div",{staticClass:"dialog"},[a("div",[a("img",{attrs:{src:s("cf22"),alt:""}})]),a("span",{staticClass:"dialog_cancel",on:{click:t.cancel}})]):t._e()])],1)},v=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",[s("p",{staticClass:"youshi_line"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",[s("p",{staticClass:"youshi_line"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",[s("p",{staticClass:"youshi_line"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",{staticClass:"contact_phone"},[t._v("400-0000-0")]),s("li",{staticClass:"contact_email"},[t._v("eixndkgjlskj@163.com")]),s("li",{staticClass:"contact_feiji"},[t._v("4567890")])])}],f={name:"home",data:function(){return{isShow:!1,isActive:!1,nav_black:!1,scroll_one_animate:!1,scroll_two_animate:!1,scroll_three_animate:!1,scroll_four_animate:!1,scroll_youshi_animate:!1,scroll_case_animate:!1,scroll_case2_animate:!1,scroll_vision_animate:!1,bannerList:[],swiperOption_banner:{loop:!0,autoplay:{delay:2500,disableOnInteraction:!1}},swiperOption:{loop:!0,autoplay:{delay:2500,disableOnInteraction:!1},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}}},computed:{},created:function(){var t=this;this.$http.get("http://www.decostudio.cn:8081/port/Slide/getSlideList").then((function(e){console.log(e),t.bannerList=e.data.data})).catch((function(t){console.log(t)}))},mounted:function(){window.addEventListener("scroll",this.handleScroll,!0)},methods:{showCode:function(){this.isShow=!0},cancel:function(){this.isShow=!1},muen:function(){this.isActive=!this.isActive},handleScroll:function(){this.isActive=!1;var t=document.documentElement.scrollTop;console.log(t),this.nav_black=t>50,t>=500&&t<900&&(this.scroll_one_animate=!0),t>=3100&&t<4e3&&(this.scroll_two_animate=!0),t>=4e3&&t<4200&&(this.scroll_three_animate=!0),t>=1500&&(this.scroll_youshi_animate=!0),t>=1800&&(this.scroll_case_animate=!0),t>=2400&&(this.scroll_case2_animate=!0),t>=3900&&(this.scroll_vision_animate=!0)},toTop:function(t){var e=this;if(document.documentElement.scrollTop-=t,document.documentElement.scrollTop>0)var s=setTimeout((function(){return e.toTop(t)}),16);else clearTimeout(s)},scrollIntoView:function(t){var e="#"+t,s=t?document.querySelector(e):null,a=s.offsetTop-60;document.documentElement.scrollTop=a,this.isActive=!1},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)},changeLang:function(t){localStorage.lang=t,this.$i18n.locale=t}}},h=f,m=(s("45bc"),Object(r["a"])(h,d,v,!1,null,null,null)),p=m.exports;a["a"].use(u["a"]);var g=new u["a"]({routes:[{path:"/home",component:p},{path:"/",redirect:"/home"}]}),C=s("7212"),w=s.n(C),b=s("bc3a"),y=s.n(b),x=s("a7fe"),k=s.n(x),$=s("a925");s("1157"),s("77ed");s("926e"),a["a"].use($["a"]),a["a"].use(k.a,y.a),a["a"].use(w.a),a["a"].config.productionTip=!1;var S=localStorage.lang||navigator.language,A=new $["a"]({locale:S,messages:{"zh-CN":s("da77").message,"en-us":s("d500").message}});new a["a"]({router:g,i18n:A,render:function(t){return t(_)}}).$mount("#app")},"64a9":function(t,e,s){},"926e":function(t,e,s){},cf22:function(t,e,s){t.exports=s.p+"img/zixuncode.a87fbb63.jpg"},d500:function(t,e){t.exports={message:{nav_server:"Our Services",nav_team:"Team Members",nav_vision:"AKG Vision",nav_contact:" Contact Us",tougu:"Investment Advisory Services/Training",tougu_des:"Investment Advisory Services of secondary market : American Stocks, Foreign Exchange, Digital Currencies;The training of secondary market investment includes basic training, training for traders and special training for institutions.",zixun:"Advisory",zixun_des:"Project Solutions-Whole Project/special case; Community Construction/Maintenance/Promotion; Project Public Relations Maintenance/Promotion; Resource Docking",kecheng:"“bright points” of our courses",tougu_server:"investment advisory services",kecheng_one:"We can learn from the past, we can know the gain and loss; we can learn from history, we can know the rise and fall. Take you back to the classic moment of trading from a unique perspective.",kecheng_two:"No step, no mile. No stream, no river. We will familiarize you with different perspectives and trading logic in multi-market.",kecheng_three:"Master the core secrets of the market and ignore the bears and bulls.",kecheng_four:"Understand the changes in the market, face the market without panic, and finally achieve perfect decision-making!",kecheng_zixun:"Consult immediately",youshi:"Our Advantages",shizi:"Strong teachers",shizi_des:"traders, analysts and mentors of large domestic and foreign institutions, with more than ten years of trading experience, rich trading experience, outstanding performance and advanced concepts.",fengfukecheng:"Diversified courses",fengfukecheng_des:"let students know about the market according to different asset classes and different periods. Teaching trading skills to provide the most appropriate courses for students with different interests",jiaoyi:"The community of traders",jiaoyi_des:" a strong community of traders consisting of traders, mentors and trainees can solve all kinds of difficult problems of traders through interactive answers.",dingjianli:"Top cases",dingjianli_des:"In view of the current market, we select the top cases to explain and review, so that students can really feel the key points and matters needing attention in the actual trading.",case:"Cases",case_fenxi:"Fundamental analysis, amazingly accurate grasp of trends",case_k_xian:"K-line analysis, short-term income is unparalleled ",case_huibao:"within 14 days to achieve 160 times the return",team_yu:"Founding Partner of AKG Venture Early Investment in Digital Currencies Cross-border Marketing Planning Expert Ray Capital Founder",mr_cang:"Mr Cang",team_canggongzi:"Founding Partner of AKG Venture Trading Master Based on Singularity Theory Experts in Digital Currencies",team_tin:"Co-founder of AKG Venture Traditional trading technology analysts, proficient in Price Action analysis. Especially good at price structure analysis",team_mafee:"Senior Analyst of AKG Venture Trading Master Based on Harmonic Theory Senior traders in commodities and U.S. stock markets ",vision_one:"Anyone who has a smart mind but no experience in trading can turn himself into a professional financial trader with the right professional ethics, self-confidence and perseverance.",vision_two:"AKG's goal is to establish a relationship with our customers and help them build medium- and long-term personal goals and aspirations. Synchronize daily/weekly to monthly updates to encourage maximum personal development and maximize potential.",weixin:"Official Customer Service in Wechat",qq:"QQ group",ZH:"zh",EN:"en"}}},da77:function(t,e){t.exports={message:{nav_server:"我们的服务",nav_team:"团队成员",nav_vision:"AKG的愿景",nav_contact:"联系我们",banner_one:"强大师资密集培训，交易素质速成！",banner_two:"计划你的交易，交易你的计划！",tougu:"投顾/培训",tougu_des:"美股，外汇，数字货币二级市场投资培训，包括:基础培训、操盘手培训班、机构专题培训",zixun:"咨询",zixun_des:"项目解决方案-全案/专案；社群建设/维护/提升；项目公关维护/提升；圈内资源对接",kecheng:"课程亮点",tougu_server:"投顾服务",kecheng_one:"以人为鉴，可以知得失；以史为鉴，可以知兴替。以独特视角带你重温交易经典案例时刻",kecheng_two:"不积跬步，无以至里不积小流，无以成江海。带你熟悉多元市场中不同的视角和逻辑！",kecheng_three:"谁道人生无再少？门前流水尚能西。洞悉市场变化，面对市场不慌·完美实现决策！",kecheng_four:"今日向何方直指武夷山下。山下山下，风展红旗如画。掌握市场核心秘诀，无视熊牛皆可获利",kecheng_zixun:"课程咨询",youshi:"我们的优势",shizi:"强大师资",shizi_des:"国内外大型机构交易员、分析师、导师，长达十多年的交易经验，交易经验丰富，业绩斐然，理念先进。",fengfukecheng:"丰富课程",fengfukecheng_des:"根据不同资产类别、不同时期行由浅入深地让学员了解市场，学习技术，为不同兴趣的学员提供最合适的课程",jiaoyi:"交易社群",jiaoyi_des:"所有交易员、导师和学员组建强大的交易社区，互动答疑，解决交易无助、孤单的现有状况。",dingjianli:"顶级案例",dingjianli_des:"针对目前的市场，选取顶级优秀案例复盘式讲解，学员真正感受实操中的各个点和注意事项。",case:"案例",case_fenxi:"基本面分析，趋势把握超群绝伦",case_k_xian:"K线技术分析，短线收益登封造极",case_huibao:"14天实现160倍回报",team_yu:"AKG Venture创始合伙⼈,数字货币早期投资⼈,跨界营销策划专家,Ray Capital 创始⼈",mr_cang:"仓公子",team_canggongzi:"AKG Venture 创始合伙人,奇点交易大师,数字货币剧本专家",team_tin:"AKG Venture 联合创始人,传统技术分析专家,精通Price Action分析方式。尤为擅长量价结构分析",team_mafee:"AKG Venture 资深分析师,谐波交易大师,大宗商品,美股市场资深交易",vision_one:"将任何一个有着聪明的头脑但没有任何交易经验的人都可以将自己转变成一个拥有正确职业道德、自信和坚持不懈精神的专业金融交易员。",vision_two:"AKG的目标是与我们的客户建立一种关系，帮助客户建立中长期个人目标和抱负，同时同步每日/每周到每月的最新进展更新，以鼓励最大限度的个人发展和激发最大潜力。",weixin:"小秘书微信",qq:"QQ群",ZH:"中",EN:"英"}}}});