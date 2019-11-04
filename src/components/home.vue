<template>
  <div class="home" ref="home" >

    <transition name="slide-fade">
      <div class="nav " :class="{ nav_black : nav_black }">
        <div class="nav_top " >
          <div class="nav_logo" @click="toTop(150)"></div>
          <div class="nav_link ">
            <ul class="nav_ul font_14"> 
              <li @click="scrollIntoView('one')">{{$t('nav_server')}}</li>
              <li @click="scrollIntoView('two')">{{$t('nav_team')}}</li>
              <li @click="scrollIntoView('three')">{{$t('nav_vision')}}</li>
              <li @click="scrollIntoView('four')">{{$t('nav_contact')}}</li>
              <li>
                 <div class="ui-slider-lang">
                    <span @click="changeLang('zh-CN')">{{$t("ZH")}}</span>
                    <span @click="changeLang('en-us')"> / {{$t("EN")}}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </transition>
    <div class="header">
      <swiper :options="swiperOption_banner">
        <swiper-slide class="" v-for="item in bannerList" :key="item.id">
          <img :src="'http://www.akgvc.com:8082/'+item.img" alt="i" @click="jump(item.src)">
        </swiper-slide>
        <div class="swiper-pagination swiper-pagination-bullets" slot="pagination"></div>
        <!-- <div class="swiper-pagination" slot="pagination"></div> -->
      </swiper> 
    </div>

<!-- 我们的服务 -->
    <div class="bg_white text_center" id="one">
      <div>
        <h3 class="server_top color_33 font_0" :class="{'font_40 animated slideInLeft' : scroll_one_animate }">{{$t('nav_server')}}</h3>
        <p class="color_99 server_bot font_0" :class="{'font_16 animated slideInLeft' : scroll_one_animate }">OUR SERVICES</p>
        <div class="line"></div>
      </div>
      <div class="server_flex w12">
        <div class="box_shadow text_center server_box left">
          <div class=" icon_box" :class="{'guwen animated flipInX' : scroll_one_animate}"></div>
          <h4 class="font_22">{{$t('tougu')}}</h4>
          <p class="color_99 guwen_text font_16">{{$t('tougu_des')}}</p>
        </div>
        
        <div class="box_shadow text_center server_box right">
          <div class="icon_box" :class="{'zixun animated flipInX' : scroll_one_animate}"></div>
          <h4 class="font_22">{{$t('zixun')}}</h4>
          <p class="color_99 guwen_text font_16">{{$t('zixun_des')}}</p>
        </div>

      </div>
    </div>

<!-- 课程亮点 -->
    <div class="w12">
      <div>
        <h3 class="font_40 kecheng_tit color_33">{{$t('kecheng')}}</h3>
        <p class="font_12 yellow_btn">{{$t('tougu_server')}}</p>
      </div>
      <div class="server_flex kecheng_flex">
        <div class="kecheng_video"  @click="caseBig"><img src="../assets/kechengld.png" alt=""></div>
        <!-- <video src="" class="kecheng_video"></video> -->
        <!-- <iframe src="http://h5school.haoxuezhang.cn/index.php?from=timeline&isappinstalled=0" class="kecheng_video"></iframe> -->
        <div>
          <ul class="kecheng_ul">
            <li><span class="dot"></span><span class="font_16 color_99">{{$t('kecheng_one')}}</span></li>
            <li><span class="dot"></span><span class="font_16 color_99">{{$t('kecheng_two')}}</span></li>
            <li><span class="dot"></span><span class="font_16 color_99">{{$t('kecheng_three')}}</span></li>
            <li><span class="dot"></span><span class="font_16 color_99">{{$t('kecheng_four')}}</span></li>
          </ul>
          <div class="kecheng_btn font_16" @click="showCode">{{$t('kecheng_zixun')}}</div>
        </div>
      </div>
    </div>

<!-- 我们的优势 -->
    <div class="bg_white text_center ">
      <div class="w12">
        <div>
          <h3 class="font_0 server_top color_33" :class="{'font_40 animated slideInLeft' : scroll_youshi_animate }">{{$t('youshi')}}</h3>
          <p class="color_99 font_0 server_bot" :class="{'font_16 animated slideInLeft' : scroll_youshi_animate }">OUR ADVANTAGES</p>
          <div class="line"></div>
        </div>
        <ul class="youshi_ul font_reg">
          <li>
            <span class="icon_box" :class="{'shizi animated flipInX' : scroll_youshi_animate}"></span>
            <div class="">
              <h6 class="font_24 color_33 youshi_s_tit">{{$t('shizi')}}</h6>
              <p class="color_76 font_14 youshi_des">{{$t('shizi_des')}}</p>
            </div>
          </li>
          <li><p class="youshi_line"></p></li>
          <li>
            <span class="icon_box " :class="{'kecheng_icon animated flipInX' : scroll_youshi_animate}"></span>
            <div class="">
              <h6 class="font_24 color_33 youshi_s_tit">{{$t('fengfukecheng')}}</h6>
              <p class="color_76 font_14 youshi_des">{{$t('fengfukecheng_des')}}</p>
            </div>
          </li>
          <li><p class="youshi_line"></p></li>
          <li>
            <span class="icon_box " :class="{'shequn animated flipInX' : scroll_youshi_animate}"></span>
            <div class="">
              <h6 class="font_24 color_33 youshi_s_tit">{{$t('jiaoyi')}}</h6>
              <p class="color_76 font_14 youshi_des">{{$t('jiaoyi_des')}}</p>
            </div>
          </li>
          <li><p class="youshi_line"></p></li>
          <li>
            <span class="icon_box " :class="{'anli animated flipInX' : scroll_youshi_animate}"></span>
            <div class="">
              <h6 class="font_24 color_33 youshi_s_tit ">{{$t('dingjianli')}}</h6>
              <p class="color_76 font_14 youshi_des">{{$t('dingjianli_des')}}</p>
            </div>
          </li>
        </ul>
        <!-- 案例 -->
        <div>
          <h3 class="font_40 server_top color_33">{{$t('case')}}</h3>
          <p class="color_99 font_16 server_bot">CASE</p>
          <div class="line"></div>
        </div>
      </div>
      <div class="max_w case_cont">
        <div class="clear case_serve_one">
          <div class="left" :class="{'case_bg_one animated bounceInLeft' : scroll_case_animate}"></div>
          <div class="case_txt left case_txt_r" :class="{'animated bounceInRight' : scroll_case_animate}">
            <p class="font_16">{{$t('tougu_server')}}</p>            
            <p class="color_33 font_24 case_jiben">{{$t('case_fenxi')}}</p>
          </div>
        </div>
        <div class="clear">
          <div class=" right" :class="{'case_bg_two animated bounceInRight' : scroll_case2_animate}"></div>
          <div class="case_txt right case_txt_l" :class="{'animated bounceInLeft' : scroll_case2_animate}">
            <p class="font_16">{{$t('zixun_server')}}</p>
            <p class="color_33 font_24 k_xian_fenxi">{{$t('case_k_xian')}}</p>
            <p class="color_99 font_14 k_xian_back">{{$t('case_huibao')}}</p>
          </div>
        </div>
      </div>
  
  
  <!-- 团队成员 -->
      <div class="w12">
        <div id="two">
          <div class="">
            <h3 class="font_0 team_top color_33" :class="{'font_40 animated slideInLeft' : scroll_two_animate }">{{$t('nav_team')}}</h3>
            <p class="color_99 font_0 server_bot" :class="{'font_16 animated slideInLeft' : scroll_two_animate }">OUR TEAM</p>
            <div class="line"></div>
          </div>
          <swiper :options="swiperOption">
            <swiper-slide class="">
              <div class="box_shadow text_center team_swiper_item">
                <span class="icon_box team_icon_box rumyu"></span>
                <p class="font_15 color_33 name">Rum</p>
                <p class="color_99 font_16 team_des">{{$t('team_yu')}}</p>
              </div>
            </swiper-slide>
            <swiper-slide class="">
              <div class="box_shadow text_center team_swiper_item">
                <span class="icon_box team_icon_box Arkin"></span>
                <p class="font_15 color_33 name">Arkin</p>
                <p class="color_99 font_16 team_des">{{$t('team_Arkin')}}</p>
              </div>
            </swiper-slide>
            <swiper-slide class="">
              <div class="box_shadow text_center team_swiper_item">
                <span class="icon_box team_icon_box Mr_cang"></span>
                <p class="font_15 color_33 name">{{$t('Mr_cang')}}</p>
                <p class="color_99 font_16 team_des">{{$t('team_cang')}}</p>
              </div>
            </swiper-slide>
            <swiper-slide class="">
              <div class="box_shadow text_center team_swiper_item">
                <span class="icon_box team_icon_box Chuck"></span>
                <p class="font_15 color_33 name">Chuck</p>
                <p class="color_99 font_16 team_des">{{$t('team_Chuck')}}</p>
              </div>
            </swiper-slide>
            <swiper-slide class="">
              <div class="box_shadow text_center team_swiper_item">
                <span class="icon_box team_icon_box Wendy"></span>
                <p class="font_15 color_33 name">Wendy</p>
                <p class="color_99 font_16 team_des">{{$t('team_Wendy')}}</p>
              </div>
            </swiper-slide>
            <swiper-slide class="">
              <div class="box_shadow text_center team_swiper_item">
                <span class="icon_box team_icon_box Wag"></span>
                <p class="font_15 color_33 name">Wag</p>
                <p class="color_99 font_16 team_des">{{$t('team_Wag')}}</p>
              </div>
            </swiper-slide>
            <swiper-slide class="">
              <div class="box_shadow text_center team_swiper_item">
                <span class="icon_box team_icon_box Bill"></span>
                <p class="font_15 color_33 name">Bill</p>
                <p class="color_99 font_16 team_des">{{$t('team_Bill')}}</p>
              </div>
            </swiper-slide>
            <swiper-slide class="">
              <div class="box_shadow text_center team_swiper_item">
                <span class="icon_box team_icon_box Taylor"></span>
                <p class="font_15 color_33 name">Taylor</p>
                <p class="color_99 font_16 team_des">{{$t('team_Taylor')}}</p>
              </div>
            </swiper-slide>
            <swiper-slide class="">
              <div class="box_shadow text_center team_swiper_item">
                <span class="icon_box team_icon_box Mafee"></span>
                <p class="font_15 color_33 name">Mafee</p>
                <p class="color_99 font_16 team_des">{{$t('team_Mafee')}}</p>
              </div>
            </swiper-slide>
            
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
          </swiper>  
        </div>
      </div>

<!-- AKG愿景 -->
      <div class="w12">
        <div id="three">
          <div>
            <h3 class="font_0 team_top color_33" :class="{'font_40 animated slideInLeft' : scroll_vision_animate }">{{$t('nav_vision')}}</h3>
            <p class="color_99 font_0 server_bot" :class="{'font_16 animated slideInLeft' : scroll_vision_animate }">Vision</p>
            <div class="line"></div>
          </div>
          <p class="color_99 font_14 about_des">{{$t('vision_one')}}<br>{{$t('vision_two')}}</p>
          <ul class="about_ul">
            <li :class="{'about_one animated flipInX' : scroll_vision_animate}" @click="jump('https://ftx.com/')"></li>
            <li :class="{'about_two animated flipInX' : scroll_vision_animate}" @click="jump('http://ufex.com/')"></li>
            <li :class="{'about_three animated flipInX' : scroll_vision_animate}" @click="jump(' http://www.lehmanbush.com/')"></li>
            <li :class="{'about_four animated flipInX' : scroll_vision_animate}" @click="jump('https://www.ccfox.com/?from=akg')"></li>
            <li :class="{'about_five animated flipInX' : scroll_vision_animate}" @click="jump('http://ivorybaycapital.com/')"></li>
          </ul>
        </div>
      </div>
    </div>
<!-- 联系我们 -->
    <div class="contact" id="four">
      <div class="contact_w">
        <p class="font_20 ">{{$t('nav_contact')}}</p>
        <div class="contact_flex">
          <ul>
            <li class="contact_phone">718042970</li>
            <li class="contact_email">info@akgvc.com</li>
            <li class="contact_feiji">AKGVenture</li>
          </ul>

          <ul class="text_center">
            <li class="xiaomishu font_14">{{$t('weixin')}}</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- <div class="footer text_center font_14">京ICP备案14246-46号</div> -->
    <transition name="slide-fade">
      <div class="dialog" v-if="isShow">
        <div>
          <img class="zuxuncode" src="../assets/zixuncode.jpg" alt="">
        </div>
        <span class="dialog_cancel" @click="cancel"></span>
      </div>
    </transition>
    <transition name="slide-fade">
      <div class="dialog" v-if="isShow_case">
        <div>
          <img class="case_big" src="../assets/kechengld.png" alt="">
        </div>
        <span class="dialog_cancel" @click="cancelBig"></span>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      isShow:false,
      isShow_case:false,
      isActive: false,
      nav_black: false,
      scroll_one_animate: false,
      scroll_two_animate: false,
      scroll_three_animate: false,
      scroll_four_animate: false,
      scroll_youshi_animate: false,
      scroll_case_animate: false,
      scroll_case2_animate: false,
      scroll_vision_animate: false,
      bannerList: [],
      swiperOption_banner: {
        loop: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          renderBullet(index, className) {
            return `<span class="${className} swiper-pagination-bullet-custom"></span>`
          }
        }
      },
      swiperOption: {
        loop: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }
        }
      }
    },
  computed: {
    
  },
  created() {
    this.$http.get('http://www.akgvc.com:8082/port/Slide/getSlideList').then((res) => {
        // console.log(res);
        this.bannerList = res.data.data;
    }).catch((err) => {
        console.log(err);
    });
  },
  mounted: function () {
    window.addEventListener('scroll', this.handleScroll, true);  // 监听（绑定）滚轮滚动事件
  },
  methods: {
    jump (a) {
      window.open(a);
    },
    showCode () {
      this.isShow = true;
    },
    cancel () {
      this.isShow = false;
    },
    caseBig () {
      this.isShow_case = true;
    },
    cancelBig () {
      this.isShow_case = false;
    },
    muen: function () {
      this.isActive = !this.isActive;
    },
    handleScroll: function () {
      this.isActive = false;
      let docTop = document.documentElement.scrollTop;
      if (docTop > 50) {
        this.nav_black = true;
      } else {
         this.nav_black = false;
      }
      if (docTop >= 400) {
        this.scroll_one_animate = true;
      }
      if (docTop >= 3100 && docTop < 4000) {
        this.scroll_two_animate = true;
      } 
      if (docTop >= 4000 && docTop < 4200) {
        this.scroll_three_animate = true;
      } 
      if (docTop >= 1300) {
        this.scroll_youshi_animate = true;
      }
      if (docTop >= 1800) {
        this.scroll_case_animate = true;
      }
      if (docTop >= 2400) {
        this.scroll_case2_animate = true;
      }
      if (docTop >= 3900) {
        this.scroll_vision_animate = true;
      }
    },
    toTop(i){
      //参数i表示间隔的幅度大小，以此来控制速度
      document.documentElement.scrollTop-=i;
      if (document.documentElement.scrollTop>0) {
          var c=setTimeout(()=>this.toTop(i),16);
      }else {
        clearTimeout(c);
      }
    },
    scrollIntoView (type) {
      // this.scroll_one_animate = false;
      // this.scroll_two_animate = false;
      // this.scroll_three_animate = false;
      // this.scroll_four_animate = false;
      const _type = '#' + type;
      const el = type ? document.querySelector(_type) : null
      const distance = el.offsetTop - 60;
      document.documentElement.scrollTop = distance;
      this.isActive = false;
      // if (type === 'one') {
      //   this.scroll_one_animate = true;
      // }
      // if (type === 'two') {
      //   this.scroll_two_animate = true;
      // }
      // if (type === 'three') {
      //   this.scroll_three_animate = true;
      // }
    },
    destroyed: function () {
      window.removeEventListener('scroll', this.handleScroll);   //  离开页面清除（移除）滚轮滚动事件
    },
    changeLang (val) {
      localStorage.lang = val;
      this.$i18n.locale = val;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.home {
  box-sizing: border-box;
  width: 100%;
}
.w12{
  width: 1200px;
  margin-left: auto;
  margin-right: auto;
}

.font_reg{
  font-family: 'PingFangSC-Regular'
}
.font_0 {
  font-size: 0;
}
.font_40 {
  font-size: 40px; /*no*/
}
.font_24 {
   font-size: 24px;
}
.font_22 {
   font-size: 22px;
}
.font_16 {
  font-size: 16px; /*no*/
}
.font_15 {
  font-size: 30px; /*no*/
}
.font_14 {
  font-size: 14px; /*no*/
}
.font_13 {
  font-size: 26px; /*no*/
}
.font_12 {
  font-size: 12px; /*no*/
}
.font_10 {
  font-size: 20px; /*no*/
}

.bg_white {
  background-color: #fff;
}

.color_76 {
  color: #767980;
}
.color_99 {
  color: #5A6066;
}
.color_66 {
  color: #666;
}
.color_33 {
  color:  #1C202F;
}

.nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 99;
}
.nav_black {
  background-color: #2E344C;
}
.nav_logo {
  width: 108px;
  height: 33.8px;
  background: url("../assets/logo_w.png") no-repeat center;
  background-size: cover;;
  cursor: pointer;
}
.nav_icon {
  display: inline-block;
  width: 20px;
  height: 16px;
  background: url("../assets/menu.png") no-repeat center;
  background-size: cover;
  vertical-align: middle;
}
.nav_top {
  width: 1200px;
  box-sizing: border-box;
  position: relative;
  z-index: 5;
  margin: 0 auto;
  display: -webkit-flex;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items:center;
  text-align: left;
  padding-top: 15px;
  padding-bottom: 15px;
}
.nav_link {

}
.nav_ul {
  color: #fff;
  text-align: left;
  li {
    float: left;
    cursor: pointer;
    transition: color .5s;
    -moz-transition: color .5s; /* Firefox 4 */
    -webkit-transition: color .5s; /* Safari 和 Chrome */
    -o-transition: color .5s; /* Opera */
  }
  li:hover{
    color: #e1e2e4;
  }
  li:not(:last-child){ 
    padding-right: 40px;
  }
}

.header{
  width: 100%;
  height: 684px;
  .swiper-container {
    padding-top:0;
  }
  img{
    width: 100%;
    height: 684px;
  }
}
.tit_box {
  width: 984px;
  height: 294px;
  padding: 47px;
  border: 1px solid rgba(255,255,255,0.15);
  border-radius: 3px;
}
.tit_cont {
  text-align: center;
  color: #fff;
  width: 100%;
  height: 200px;
  padding-top: 35px;
  background-color: rgba(255,255,255,0.15);
  border-radius: 3px;
  h1{
    font-size: 40px; /*no*/
    line-height: 65px;
    color: #EDE7E7;
  }
}

.box_shadow {
  box-shadow: 0 0 5px 0 #e8e8e885;
}

.server_top {
  padding-top: 65px;
}
.server_bot{
  padding-bottom: 9px;
  padding-top: 20px;
}
.line {
  width: 60px;
  height: 4px;
  background-color: #1C202F;
  border-radius: 2px;
  display: inline-block;
  margin-bottom: 60px;
}
.server_flex {
  display: -webkit-flex;
  display: flex;
  flex-direction: row;
  justify-content: space-between ;
  align-items:stretch;
  padding-bottom: 65px;
}
.server_box {
  width: 580px;
  padding-top: 32px;
  padding-bottom: 46px;
}
.server_box:hover {
  transform:scale(1.1,1.1);
	-ms-transform:scale(1.1,1.1); /* IE 9 */
	-webkit-transform:scale(1.1,1.1); /* Safari and Chrome */
  transition:  transform 0.6s;
  -moz-transition:  transform 0.6s; /* Firefox 4 */
  -webkit-transition:  transform 0.6s; /* Safari 和 Chrome */
  -o-transition:  transform 0.6s; /* Opera */
}
.icon_box {
  display: inline-block;
  width: 84px;
  height: 84px;
  border-radius: 50%;
  box-shadow: 0 0 5px 0px #e8e8e885; 
  margin-bottom: 40px;  
}
.guwen {
  background:  url("../assets/guwen.png") no-repeat center;
  background-size: 36px;
  -webkit-animation-delay: 0.4s;//延迟
  animation-delay: 0.4s;
}
.zixun {
  background:  url("../assets/zixun.png") no-repeat center;
  background-size: 36px;
  -webkit-animation-delay: 0.7s;//延迟
  animation-delay: 0.7s;
}
.zixun_box_mag {
  margin-top: 10px;
}
.guwen_text {
  padding-top: 24px;
  line-height: 26px;
  width: 351px;
  display: inline-block;
}
.kecheng_flex {
  padding-bottom: 0px;
}
.kecheng_tit {
  margin: 40px;
  display: inline-block;
  margin-right: 16px;
  vertical-align: middle;
}
.yellow_btn {
  display: inline-block;
  padding:6px 13px;
  border-radius: 13px;
  color: #fff;
  background-color: #FAAD15;
  display: inline-block;
  vertical-align: middle;
}

.kecheng_video {
  width: 490px;
  height: 344px;
  cursor: pointer;
  // background-color: gold;
}
.kecheng_ul {
  width: 674px;
  li {
    display: -webkit-flex;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items:center;
    text-align: left;
    line-height: 18px;
    margin-bottom: 12px;
    margin-bottom: 32px;
  }
  .dot {
    flex-shrink:1;
    width: 6px;
    height: 6px;
    background-color: #C8D1DA;
    border-radius: 50%;
    margin-right: 12px;
  }
}
.kecheng_btn {
  display: inline-block;
  padding: 8px 32px;
  background-color: #1C202F;
  color: #fff;
  line-height: 20px;
  border-radius: 30px;
  box-shadow: 0 7px 10px 0px #1c202f38;
  margin-bottom: 16px;
  margin-top: 5px;
  cursor: pointer;
}
.kecheng_btn:hover{
  transform:scale(1.1,1.1);
	-ms-transform:scale(1.1,1.1); /* IE 9 */
	-webkit-transform:scale(1.1,1.1); /* Safari and Chrome */
  transition:  transform 0.6s;
  -moz-transition:  transform 0.6s; /* Firefox 4 */
  -webkit-transition:  transform 0.6s; /* Safari 和 Chrome */
  -o-transition:  transform 0.6s; /* Opera */
}
.youshi_ul {
  display: -webkit-flex;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items:stretch;
  text-align: left;

  li {
    flex-shrink:1;
    flex-basis: 171px;
    margin-bottom: 13px;
    text-align: center;
  }
  li:hover {
    transform:scale(1.1,1.1);
    -ms-transform:scale(1.1,1.1); /* IE 9 */
    -webkit-transform:scale(1.1,1.1); /* Safari and Chrome */
    transition:  transform 0.6s;
    -moz-transition:  transform 0.6s; /* Firefox 4 */
    -webkit-transition:  transform 0.6s; /* Safari 和 Chrome */
    -o-transition:  transform 0.6s; /* Opera */
  }
  .icon_box {
    width: 100px;
    height: 100px;
    flex-shrink:0;
  }
  .youshi_s_tit {
    padding-bottom: 32px;
  }
  .youshi_des {
    line-height: 20px;
  }
}
.youshi_line {
  width: 132px;
  height: 1px;
  background-color:  #EBEEF7;
  display: inline-block;
  margin-top: 50px;
}
.shizi {
  background:  url("../assets/shizi.png") no-repeat center;
  background-size: 33px;
  -webkit-animation-delay: 0.3s;//延迟
  animation-delay: 0.3s;
}
.kecheng_icon {
  background:  url("../assets/kecheng.png") no-repeat center;
  background-size: 33px;
  -webkit-animation-delay: 0.6s;//延迟
  animation-delay: 0.6s;
}
.shequn {
  background:  url("../assets/shequn.png") no-repeat center;
  background-size: 33px;
  -webkit-animation-delay: 0.9s;//延迟
  animation-delay: 0.9s;
}
.anli {
  background:  url("../assets/anli.png") no-repeat center;
  background-size: 33px;
  -webkit-animation-delay: 1.2s;//延迟
  animation-delay: 1.2s;
}
.max_w {
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
}
.case_cont {
  height: 1072px;
}
.case_serve_one {
  margin-bottom: 80px;
}
.case_bg_one {
  width: 800px;;
  height: 496px;
  background:  url("../assets/case_one.png") no-repeat left top;
  background-size: contain;
  // cursor: pointer;
}
.case_bg_two {
  width: 840px;
  height: 496px;
  background:  url("../assets/case_two.png") no-repeat center;
  background-size: contain;
}
.case_txt_r {
  width: 612px;
  padding-left: 150px;
  padding-top: 100px;
  -webkit-animation-delay: 0.3s;//延迟
  animation-delay: 0.3s;
}
.case_txt_l {
  width: 397px;
  margin-right: 140px;
  padding-top: 100px;
  -webkit-animation-delay: .3s;//延迟
  animation-delay: .3s;
}
.case_txt {
  text-align: left;
  .font_16 {
    color: #5B79FF;
    padding-left: 36px;
    background:  url("../assets/case_icon.png") no-repeat left;
    background-size: 33px;
    text-align: left;
    line-height: 38px;
    margin-bottom: 23px;
  }
}
.k_xian {
  margin-top: 8px;
}
.k_xian_img {
  width: 182px;
  height: 193px;
  display: inline-block;
  background-color: tomato;
}
.k_xian_fenxi {
  margin-top: 16px;
  margin-bottom: 15px;
}
.team_top {
  padding-top: 132px;
}
.team_swiper_item {
  width: 100%;
  .icon_box {
    width: 120px;
    height: 120px;
  }
}
.team_icon_box {
  margin-top: -76px;
}
.rumyu {
  background:  url("../assets/rumyu.jpeg") no-repeat center;
  background-size: cover; 
}
.Arkin {
  background:  url("../assets/Arkin.jpg") no-repeat center;
  background-size: cover; 
}
.Chuck {
  background:  url("../assets/Chuck.jpeg") no-repeat center;
  background-size: cover; 
}
.Mr_cang {
  background:  url("../assets/Mr_cang.jpeg") no-repeat center;
  background-size: cover; 
}
.Wendy {
  background:  url("../assets/Wendy.jpeg") no-repeat center;
  background-size: cover; 
}
.Wag {
  background:  url("../assets/Wag.jpeg") no-repeat center;
  background-size: cover; 
}
.Bill {
  background:  url("../assets/Bill.jpeg") no-repeat center;
  background-size: cover; 
}
.Taylor {
  background:  url("../assets/Taylor.jpeg") no-repeat center;
  background-size: cover; 
}
.Mafee {
  background:  url("../assets/mafee.jpeg") no-repeat center;
  background-size: cover; 
}

.team_des {
  width: 90%;
  display: inline-block;
  line-height: 18px;
  padding-top: 32px;
  padding-bottom: 64px;
}
.about_des {
  line-height: 22px;
  text-align: center;
}
.about_ul {
    display: -webkit-flex;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    text-align: left;
    margin-top: 50px;
    padding-bottom: 120px;
    li{
      flex-shrink:0;
      box-shadow: 0 0 5px 0px #e8e8e885; 
      height: 102px;
    }
    li:hover {
      box-shadow: 3px 3px 15px 0px #cdcdcd91;
      -webkit-transition: 0.3s;
      transition: 0.3s;
    }
    li:nth-child(2) {
      -webkit-animation-delay: .3s;//延迟
      animation-delay: .3s;
    }
    li:nth-child(3) {
      -webkit-animation-delay: .6s;//延迟
      animation-delay: .6s;
    }
    li:nth-child(4) {
      -webkit-animation-delay: .9s;//延迟
      animation-delay: .9s;
    }
    li:nth-child(5) {
      -webkit-animation-delay: .9s;//延迟
      animation-delay: 1.2s;
    }
}
.about_one {
  width: 200px;
  background:  url("../assets/about_one.png") no-repeat center;
  background-size: 160px; 
  cursor: pointer;
}
.about_two {
  width: 200px;
  background:  url("../assets/about_two.png") no-repeat center;
  background-size: 180px; 
  cursor: pointer;
}
.about_three {
  width: 200px;
  background:  url("../assets/about_three.png") no-repeat center;
  background-size: 220px; 
  cursor: pointer;
}
.about_four {
  width: 200px;
  background:  url("../assets/ccfox.jpg") no-repeat center;
  background-size: 220px; 
  cursor: pointer;
}
.about_five {
  width: 200px;
  background:  url("../assets/about_five.jpg") no-repeat center;
  background-size: 220px; 
  cursor: pointer;
}

.contact {
  background-color: #2E344C ;
  color: #ffffff;
  padding: 15px 15px 20px 15px;

}
.contact_w {
  width: 1000px;
  margin-left: auto;
  margin-right: auto;
  .font_20 {
    font-size: 32px;
    color: rgba(255,255,255,0.5);
    margin-top: 33px;
  }

}
.contact_flex {
    display: -webkit-flex;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 18px;
    li {
      margin-bottom: 22px;
      line-height: 20px;
    }
}

.contact_phone {
  padding-left: 34px;
  background:  url("../assets/phone.png") no-repeat left center;
  background-size: contain;
  line-height: 16px;
  margin-top: 38px;
}
.contact_email{
  padding-left: 34px;
  background:  url("../assets/email.png") no-repeat left center;
  background-size: contain;
  line-height: 16px;
  margin-bottom: 10px;
}
.contact_feiji {
  padding-left: 34px;
  background:  url("../assets/plant.png") no-repeat left center;
  background-size: contain;
  line-height: 16px;
}
.xiaomishu {
  display: inline-block;
  padding-top: 130px;
  width: 120px;
  background:  url("../assets/zixuncode.jpg") no-repeat top center;
  background-size: 120px;
  line-height: 16px;
  color: rgba(255,255,255,0.5);;
  vertical-align: top;
}
.qqun {
  width: 120px;
  display: inline-block;
  padding-top: 130px;
  background:  url("../assets/zixuncode.jpg") no-repeat top center;
  background-size: 120px;
  line-height: 16px;
  color: rgba(255,255,255,0.5);
  vertical-align: top;
}
.footer {
  background-color: #1C202F;
  color: rgba(255,255,255,0.5);;
  line-height: 58px;
}

.slide-fade-enter-active {
  transition: all .6s ease;
}
.slide-fade-leave-active {
  transition: all .4s ease;
}

.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateY(-100px);
  opacity: 0;
}
.swiper-container {
    width: 100%;
}
.swiper-container {
    margin: 0 auto;
    position: relative;
    overflow: hidden;
    list-style: none;
    padding-top: 77px;
    z-index: 1;
}
.swiper-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 1;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    transition-property: -webkit-transform;
    transition-property: transform;
    transition-property: transform,-webkit-transform;
    box-sizing: content-box;
}
.swiper-container-android .swiper-slide, .swiper-wrapper {
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
}
.swiper-wrapper:hover {
    transition: background-color .25s linear,color .05s linear,opacity .25s linear,filter .25s linear,visibility .25s linear,transform .25s linear;
}
.swiper-slide{
    text-align: center;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}
.swiper-slide {
    -ms-flex-negative: 0;
    flex-shrink: 0;
    width: 100%;
    height: 100%;
    position: relative;
    transition-property: -webkit-transform;
    transition-property: transform;
    transition-property: transform,-webkit-transform;
}

.swiper-button-prev {
  left: 10px;
  background:  url("../assets/icon-l.png") no-repeat top center;
  background-size: contain;
}
.swiper-button-next{
  right: 10px;
  background:  url("../assets/icon-r.png") no-repeat top center;
  background-size: contain;
}
.swiper-button-next, .swiper-button-prev {
    position: absolute;
    top: 55%;
    width:60px;
    height:60px;
    z-index: 10;
    cursor: pointer;
}
.swiper-pagination {
    position: absolute;
    text-align: center;
    transition: opacity .3s;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    z-index: 10;
    bottom: 10px;
    left: 0;
    width: 100%;
  }
.swiper-pagination-bullet {
    width: 30px;
    height: 4px;
    display: inline-block;
    border-radius: 4px;
    background: rgba(255,255,255,.4);
    margin-right: 3px;
    cursor: pointer;
}
.swiper-pagination-bullet-active {
    opacity: 1;
    background: #fff;
}
.dialog {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0,0,0,0.5);
  text-align: center;
  z-index: 99;
  .zuxuncode{
    width: 200px;
    height: 200px;
    display: inline-block;
    margin-top: 100px;
  }
  .case_big{
    width: 95%;
    min-height: 300px;
    display: inline-block;
    margin-top: 50px;
  }
}
.dialog_cancel {
  display: inline-block;
  width: 30px;
  height: 30px;
  background:  url("../assets/dialog_cancel.png") no-repeat top center;
  background-size: contain;
  margin-top: 20px;
}
</style>
