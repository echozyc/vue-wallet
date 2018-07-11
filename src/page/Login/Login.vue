<template>
  <div class="LoginWrap">
    <!--Login 登录页-->
    <div class="LoginWrapContent">
        <div class="Avatar">
          <img src="../../assets/common/img/AECloud_logo@2x.png" alt="">
        </div>
        <!--input私钥框-->
        <div class="PassWord">
          <input v-model="input" :placeholder="$t('login.shuru')" type="text">
        </div>
        <!--check选择框-->
        <div class="Check">
          <input id="1" type="checkbox" checked="checked" >
          <label for="1">{{$t('login.baochi')}}</label>
        </div>
        <!--login 登陆注册框-->
        <div class="Login">
          <el-button class="LoginL" type="primary">{{$t('login.denglu')}}</el-button>
          <el-button class="LoginR" type="primary" plain @click="goto()">{{$t('login.chuangjian')}}</el-button>
        </div>
    </div>
    <!--selectLang 语言选择框-->
    <div class="SelectWrap">
      <div class="Select" @click="isOptionShow = !isOptionShow ">
        <span v-model="lang">{{lang}}</span>
        <i class="iconfont icon-sanjiaoxia" v-show="isOptionShow"></i>
        <i class="iconfont icon-sanjiaoshang" v-show="!isOptionShow"></i>
      </div>
      <div class="OptionWrap" v-show="isOptionShow">
        <div class="Opation OpationFir" @click="choiceLang(zh);tabZh()" :class="{on:isBackground(zh)}">
          <span>{{zh}}</span>
        </div>
        <div class="Opation OpationSec" @click="choiceLang(en);tabEn()" :class="{on:isBackground(en)}">
          <span>{{en}}</span>
        </div>
      </div>
    </div>
    <!--CreateNew 注册页-->
    <div class="CreateWrap"  v-show="isShowSec">
      <!--Create 创建用户-->
      <div class="CreateWrapContainer" v-show="isShowCreate">
        <!--createHeader 注册头-->
        <div class="CreateHeader">
          <span>{{$t('CreateAccount.chuangjian')}}</span>
        </div>
        <!--createMain 主体-->
        <div class="CreateMain">
          <p class="SecretKey">{{$t('CreateAccount.miyao')}}</p>
          <textarea disabled class="Text">s adjk h akdhaj khds adjk h akdhaj khds jkahd skjadjk h akdhaj khds  jkahdskj jkahdskjha</textarea>
          <p class="Explain">{{$t('CreateAccount.xitong')}}</p>
          <p class="Prompt">{{$t('CreateAccount.quebao')}}</p>
          <div class="CreateCheck">
            <input id="i" type="checkbox" >
            <label for="i">{{$t('CreateAccount.yiyue')}}</label>
            <span @click="declarationText()">{{$t('CreateAccount.guanyu')}}</span>
          </div>
          <div class="NextStep">
            <el-button class="NextStepL" type="primary" @click="nextStep()">{{$t('CreateAccount.xiayibu')}}</el-button>
            <el-button class="NextStepR" type="primary" plain>{{$t('CreateAccount.baocun')}}</el-button>
          </div>
        </div>
      </div>
      <!--Declaration 声明条例-->
      <div class="DeclarationWrap" v-show="isShowDeclaration">
         <p class="DeclarationTitle">{{$t('declaration.guanyu')}}</p>
         <div class="DeclarationContent" v-html="$t('declaration.zunjing')">
         </div>
         <div class="DeclarationClose" @click="closeDeclarationText()">
           <img src="../../assets/common/img/icon_guanbi@2x.png" alt="">
         </div>
      </div>
      <!--Confirm 确认私钥-->
      <div class="ConfirmWrap" v-show="isShowConfirm">
        <!--ConfirmHeader 头部-->
         <div class="ConfirmHeader">
           <span>{{$t('ConfirmPrivate.querensiyao')}}</span>
         </div>
        <!--ConfirmMain 主体-->
        <div class="ConfirmMain">
          <p class="ConfirmSecretKey">{{$t('ConfirmPrivate.shuru')}}</p>
          <textarea class="Text"></textarea>
          <div class="ConfirmNextStep">
            <el-button class="ConfirmNextStepL" type="primary">{{$t('ConfirmPrivate.queren')}}</el-button>
            <el-button class="ConfirmNextStepR" type="primary" @click="back()" plain>{{$t('ConfirmPrivate.fanhui')}}</el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Login',
  data () {
    return {
      input:'',
      checked: true,
      //login 页面初始状态
      isShowFir: true,
      //create 页面初始状态
      isShowSec: false,
      //选择语言框初始状态
      isOptionShow: false,
      zh:'简体中文',
      en:'English',
      lang: '简体中文',
      isShowCreate: false,
      isShowDeclaration: false,
      isShowConfirm:false
    }
  },
  methods: {
    //select 选择语言
    choiceLang(i){
      this.lang = i
      this.isOptionShow = !this.isOptionShow
    },
    //select ui样式改变
    isBackground(j){
      return this.lang == j
    },
    goto () {
      this.isShowFir = false,
      this.isShowSec = true,
      this.isShowCreate = true
    },
    goback () {
      this.isShowFir = true,
      this.isShowSec = false
    },
    //切换语言 i18n
    tabZh () {
      this.$i18n.locale = 'zh'
    },
    tabEn () {
      this.$i18n.locale= 'en'
    },
    //账户声明
    declarationText () {
      this.isShowCreate = false,
      this.isShowDeclaration = true
    },
    //关闭账户声明
    closeDeclarationText () {
      this.isShowCreate = true,
      this.isShowDeclaration = false
    },
    //下一步 => 确认私钥
    nextStep () {
      this.isShowCreate = false,
      this.isShowConfirm = true
    },
    //确认私钥 返回
    back () {
      this.isShowFir = true,
      this.isShowSec = false,
      this.isShowConfirm = false
    }
  }
}
</script>
<style lang="stylus" >
.LoginWrap
  width 100%
  height 100%
  background url("../../assets/common/img/bg@2x.png") no-repeat center
  background-size 100% 100%
  box-sizing border-box
  overflow hidden
  position relative
  .LoginWrapContent
    width 624px
    height 766px
    position absolute
    top 50%
    left 50%
    margin-top -383px
    margin-left -312px
    .Avatar
      width 333px
      height 286px
      margin 0 auto
      img
        width 100%
        height 100%
    .PassWord
      width 624px
      height 70px
      margin 50px auto
      margin-bottom 0
      margin-top 71px
      input
        height 70px
        width 100%
        line-height 70px
        font-size 20px
        padding-left 33px
        box-sizing border-box
        border-radius 5px
        border 1px solid rgba(45,196,240,0.5)
        color rgba(159,162,171,1)
        background transparent
    .Check
      margin-top 19px
      cursor pointer
      input
        width 20px
        height 20px
        margin-top -4px
      label
        cursor pointer
        font-size 20px
        color #ffffff
    .Login
      width 100%
      margin 0 auto
      margin-top 56px
      .LoginL
        width 200px
        height 55px
        float left
        font-size 20px
        margin-left 92px
        background rgba(54,121,252,1)
        border-radius 6px
        box-shadow 0px 0px 8px rgba(0,60,231,0.31)
      .LoginR
        width 200px
        height 55px
        float right
        font-size 20px
        margin-right 92px
        background transparent
        border-radius 6px
        color #ffffff
  .SelectWrap
    position absolute
    right 13%
    top 8.7%
    cursor pointer
    .Select
      width 137px
      height 42px
      line-height 42px
      border 1px solid rgba(255,255,255,0.5)
      border-radius 6px
      position relative
      span
        font-size 20px
        color #ffffff
        margin-left 15px
      .iconfont
        font-size 20px
        color #ffffff
        position absolute
        right 10px
    .OptionWrap
      width 137px
      height 82px
      border 1px solid transparent
      border-radius 6px
      margin-top 4px
      overflow hidden
      .Opation
        height 41px
        line-height 41px
        text-align center
        span
          font-size 20px
          color #ffffff
      .Opation
        background #020879
      .on
        background #3679FC

.CreateWrap
  width 100%
  height 100%
  background rgba(0,0,0,0.5)
  position relative
  z-index 2
  .CreateWrapContainer
    width 687px
    height 616px
    margin-left -343px
    margin-top -308px
    position absolute
    left 50%
    top 50%
    background #ffffff
    border-radius 8px
    overflow hidden
    .CreateHeader
      width 100%
      height 66px
      line-height 66px
      text-align center
      background -webkit-linear-gradient(top,#3D7EFC 0,#0A5EFF 100%)
      background -moz-linear-gradient(top,#3D7EFC 0,#0A5EFF 100%)
      background -o-linear-gradient(top,#3D7EFC 0,#0A5EFF 100%)
      background linear-gradient(to bottom,#3D7EFC 0,#0A5EFF 100%)
      span
        font-size 24px
        color #ffffff
    .CreateMain
      width 100%
      height 550px
      padding 0 40px
      box-sizing border-box
      .SecretKey
        font-size 18px
        margin-top 33px
        color #333333
      .Text
        width 100%
        height 187px
        margin-top 14px
        background rgba(237,238,240,1)
        border-radius 2px
        padding 31px 16px
        box-sizing border-box
        border none
        font-size 28px
        color rgba(102,102,102,1)
      .Explain
        font-size 18px
        color rgba(153,153,153,1)
        margin-top 18px
      .Prompt
        font-size 18px
        color #D71E06
        line-height 30px
        margin-top 19px
      .CreateCheck
        width 100%
        height 18px
        margin-top 33px
        cursor pointer
        input
          width 16px
          height 16px
          margin-top -6px
        label
          font-size 18px
        span
          font-size 18px
          color #3679FC

      .NextStep
        margin-top 46px
        .NextStepL
          width 200px
          height 55px
          float left
          font-size 20px
          margin-left 80px
          background rgba(54,121,252,1)
          border-radius 6px
        .NextStepR
          width 200px
          height 55px
          float right
          font-size 20px
          margin-right 80px
          background transparent
          border-radius 6px
          color #3679FC
  .DeclarationWrap
    width 491px
    background #ffffff
    border-radius 10px
    margin-left -245px
    position absolute
    top 50%
    left 50%
    transform translateY(-50%)
    padding 0 38px 50px
    box-sizing border-box
    .DeclarationTitle
      font-size 18px
      color #333333
      text-align center
      margin-top 59px
      background #ffffff
      font-family PingFang-SC-Heavy
    .DeclarationContent
      margin-top 38px
      font-size 14px
      font-family PingFang-SC-Bold
      color rgba(51,51,51,1)
      line-height 24px
    .DeclarationClose
      width 21px
      height 21px
      position absolute
      top 27px
      right 21px
  .ConfirmWrap
    width 687px
    height 469px
    border-radius 8px
    box-shadow 7px 0px 18px rgba(6,8,65,0.26);
    background #ffffff
    margin-top -234px
    margin-left -343px
    position absolute
    top 50%
    left 50%
    overflow hidden
    .ConfirmHeader
      width 100%
      height 66px
      line-height 66px
      text-align center
      background -webkit-linear-gradient(top,#3D7EFC 0,#0A5EFF 100%)
      background -moz-linear-gradient(top,#3D7EFC 0,#0A5EFF 100%)
      background -o-linear-gradient(top,#3D7EFC 0,#0A5EFF 100%)
      background linear-gradient(to bottom,#3D7EFC 0,#0A5EFF 100%);
      span
        font-size 24px
        color #ffffff
    .ConfirmMain
      width 100%
      height 550px
      padding 0 40px
      box-sizing border-box
      .ConfirmSecretKey
        font-size 18px
        margin-top 33px
        color #333333
      .Text
        width 100%
        height 187px
        margin-top 14px
        background rgba(237,238,240,1)
        border-radius 2px
        padding 31px 16px
        box-sizing border-box
        border none
        font-size 28px
        color rgba(102,102,102,1)
      .ConfirmNextStep
        margin-top 46px
        .ConfirmNextStepL
          width 200px
          height 55px
          float left
          font-size 20px
          margin-left 80px
          background rgba(54,121,252,1)
          border-radius 6px
        .ConfirmNextStepR
          width 200px
          height 55px
          float right
          font-size 20px
          margin-right 80px
          background transparent
          border-radius 6px
          color #3679FC
</style>
