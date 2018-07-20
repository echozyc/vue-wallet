<template>
    <div class="MyAssetsWrap">
      <!--我的资产 Header组件-->
      <DetailedHeader :title='title'></DetailedHeader>
      <!--我的资产 Main-->
      <div class="MyAssetsMain">
        <!--导航 nav-->
        <div class="MyAssetsContentNav">
          <div class="zichangaiyao"  @click="show('isShowAssetSummary')" :class="{on:active == 'isShowAssetSummary'}">
            <span>{{$t('ZCGY')}}</span>
          </div>
          <div class="zhucefaxing"  @click="show('isShowRegisteredIssue')" :class="{on:active == 'isShowRegisteredIssue'}">
            <span>{{$t('ZCFXS')}}</span>
          </div>
          <div class="faxingzhanghu" @click="show('isShowIssueAssets')" :class="{on:active == 'isShowIssueAssets'}">
            <span>{{$t('FXZC')}}</span>
          </div>
          <div class="faxingzichan"  @click="show('isShowMeIssueAssets')" :class="{on:active == 'isShowMeIssueAssets'}">
            <span>{{$t('WFXDZC')}}</span>
          </div>
        </div>

        <div class="ContentWrap">

          <!--资产概要-->
          <div class="AssetSummary" v-show="active == 'isShowAssetSummary'">
            <!--table表格 组件-->
            <DetailedTable :tableTitle="tableTitle"></DetailedTable>
          </div>

          <!--注册发行商-->
          <div class="RegisteredIssue" v-show="active == 'isShowRegisteredIssue'">
            <div class="content">
              <ul class="lists">
                <li class="list">
                    <span class="title">
                        {{$t('FXSMC')}}*
                    </span>
                  <input class="text" type="text" >
                </li>
                <li class="list">
                    <span class="title">
                        {{$t('QYSZH')}}*
                    </span>
                  <input class="text" type="text" >
                </li>
                <li class="list">
                    <span class="title">
                        {{$t('DZ')}}*
                    </span>
                  <input class="text" type="text" >
                </li>
                <li class="list">
                    <span class="title">
                        {{$t('LXR')}}*
                    </span>
                  <input class="text" type="text" >
                </li>
                <li class="list">
                    <span class="title">
                        {{$t('LXFS')}}*
                    </span>
                  <input class="text" type="text" >
                </li>
              </ul>
              <p class="notice">
                {{$t('BZGD')}}
              </p>
              <a href="javascript:;" class="btn" style="margin-left: 196px" @click="isShowRegisteredPopup = !isShowRegisteredPopup">{{$t('提交')}}</a>
            </div>
          </div>

          <!--发行资产-->
          <div class="IssueAssets" v-show="active == 'isShowIssueAssets'">
            <div class="content">
              <ul class="lists" style="padding-top: 121px">
                <span class="listsTitle"><div class="point"></div>{{$t('FXDBXX')}}</span>
                <li class="list" >
                   <span class="title">
                       {{$t('ZCMC')}}
                   </span>
                  <input class="text" type="text" :placeholder="$t('YWMC')">
                </li>
                <li class="list">
                    <span class="title">
                        {{$t('DBBS')}}
                    </span>
                  <input class="text" type="text" :placeholder="$t('YWMC')">
                </li>
                <li class="list">
                    <span class="title">
                        {{$t('XSWSJQD')}}
                    </span>
                  <input class="text" type="text" :placeholder="$t('QSRZZS')">
                </li>
                <li class="list">
                    <span class="title">
                        {{$t('FXL')}}
                    </span>
                  <input class="text" type="text" :placeholder="$t('BCGZZS')">
                </li>
                <li class="list">
                    <span class="title" style="float: left; margin-top: 82px" >
                        {{$t('DBZCMS')}}
                    </span>
                  <textarea class="text" type="text" :placeholder="$t('BCGZF')" style="height: 178px;outline: none;padding-top: 22px"></textarea>
                </li>
                <li class="list">
                  <span class="title"></span>
                  <div class="text Frozen">
                       <span>{{$t('SFXYDJBFFXZC')}}</span>
                       <!--<div class="Select">-->
                          <!--<span v-model="need">{{need}}</span>-->
                       <!--</div>-->
                       <el-select v-model="value" class="Select" @change="ShowFrozin()">
                         <el-option
                           v-for="item in options"
                           :key="item.value"
                           :label="item.label"
                           :value="item.value">
                         </el-option>
                       </el-select>
                  </div>
                </li>
                <li class="list" v-show="isShowFrozin">
                    <span class="title">
                        {{$t('DJS')}}
                    </span>
                  <input class="text" type="text" >
                </li>
                <li class="list" v-show="isShowFrozin">
                    <span class="title">
                        {{$t('DJSFSJ')}}
                    </span>
                  <input class="text" type="text" placeholder="格式：2018-07-08 12:23:30">
                </li>
              </ul>
              <a href="javascript:;" class="btn" style="margin-left: 241px">{{$t('TJ')}}</a>
            </div>
          </div>

          <!--我发行的资产-->
          <div class="MeIssueAssets" v-show="active == 'isShowMeIssueAssets'">
            <!--table表格 组件-->
            <DetailedTable :tableTitle="tableTitle"></DetailedTable>
          </div>
        </div>
      </div>

      <!--注册发行商弹出层-->
      <div class="RegisteredPopup" v-show="isShowRegisteredPopup">
         <div class="RegisteredPopupContent">
           <p class="Text">
                 <span  style="font-weight: bold">{{$t('TX')}}:</span>
                 <span>{{$t('SQCW')}}</span>
               </p>
           <div class="RegisteredPopupButton">
             <button class="Cancel" @click="isShowRegisteredPopup = !isShowRegisteredPopup">{{$t('QX')}}</button>
             <button class="Sure">{{$t('QD')}}</button>
           </div>
           <div class="RegisteredPopupClose" @click="isShowRegisteredPopup = !isShowRegisteredPopup">
             <img src="../assets/common/img/icon_guanbi@2x.png" alt="">
           </div>
         </div>
      </div>
    </div>
</template>

<script>
import DetailedHeader from '../components/DetailedHeader/DetailedHeader'
import DetailedTable from '../components/DetailedTable/DetailedTable'
export default {
  name: "MyAssetsWrap",
  components:{
    //头部组件
    DetailedHeader,
    //table表格组件
    DetailedTable,
  },
  data () {
    return {
      //DetailedHeader 样式组件传值
      title: {
        text1: this.$t('WDZC'),
        text2: '/ ' + this.$t('ZCGY')
      },
      need: this.$t('XY'),
      //Select 切换
      options: [{
        value: '0',
        label: this.$t('XY')
      }, {
        value: '1',
        label: this.$t('BXY')
      }],
      value:'0',
      // DetailedTable 组件传值（传递名称）
      tableTitle: {
        //最多7个，最少6个，最后一个没有即为空
        text1: this.$t('ZCBZ'),
        text2: this.$t('ZCMC'),
        text3: this.$t('YE'),
        text4: this.$t('JD'),
        text5: this.$t('FXZL'),
        text6: this.$t('CZ'),
      },
      //nav 切换
      active: 'isShowAssetSummary',
      // 弹出层
      isShowRegisteredPopup: false,
      //冻结资产 是否显示
      isShowFrozin:true
    }
  },
  computed:{

  },
  methods:{
    //nav 切换
    show(i){
      this.active = i
    },
    // select 冻结li isShow
    ShowFrozin(){
      if(this.value == 0){
        this.isShowFrozin = true
      } else if(this.value == 1){
        this.isShowFrozin = false
      }
    }
  }
}
</script>

<style lang="stylus">
  $bg-color = #f2f6ff
  $bg-input = #FAFAFA
  $border-color = #EBEBEB
  $text-color = #666666
  $text-actice = #3679FC
  $text-notice = #3679FC
  $notice-size = 16px
  $font-size = 16px
  $btn-size = 24px
  $white = #ffffff
  $blue = #3679FC
  gradient($a,$b) { //渐变
      background: linear-gradient(to left, $a, $b)
      background:-moz-linear-gradient(to left , $a, $b)
      background:-o-linear-gradient(to left , $a, $b)
      background: -webkit-gradient(linear,left top,right top,from($a),to($b))
    }

.MyAssetsWrap
  width 100%
  .MyAssetsMain
    width 100%
    padding 50px 85px 90px 72px
    background #F2F6FF
    box-sizing border-box
    .MyAssetsContentNav
      width 100%
      height 104px
      background #ffffff
      padding-left 20px
      box-sizing border-box
      /*min-width 900px*/
      div
        float left
        height 48px
        line-height 48px
        margin-left 42px
        margin-top 28px
        border-radius 24px
        cursor pointer
        span
          margin 0 29px
          font-size 20px
          color #394047
      .on
        box-shadow:0px 0px 8px rgba(0,60,231,0.31)
        background -webkit-linear-gradient(top,#3D7EFC 0,#0A5EFF 100%)
        background -moz-linear-gradient(top,#3D7EFC 0,#0A5EFF 100%)
        background -o-linear-gradient(top,#3D7EFC 0,#0A5EFF 100%)
        background linear-gradient(to bottom,#3D7EFC 0,#0A5EFF 100%)
        span
          color #ffffff
    .ContentWrap
      border-top 1px solid #F0F0F0
      >div
        /*min-width 900px*/
        .content
          background #fff
          width 100%
          /*height 100%*/
          .lists
            padding-top 77px
            position relative
            .listsTitle
              font-size 20px
              color #333333
              position absolute
              top 50px
              left 92px
              .point
                width: 7px;
                height: 7px;
                -webkit-transform-origin: 0 100%;
                -moz-transform-origin: 0 100%;
                -o-transform-origin: 0 100%;
                -ms-transform-origin: 0 100%;
                transform-origin: 0 100%;
                -webkit-transform:rotate(-45deg);
                -moz-transform:rotate(-45deg);
                -o-transform:rotate(-45deg);
                -ms-transform:rotate(-45deg);
                transform:rotate(-45deg);
                background: #3679FC;
                position absolute
                top 6px
                left -12px

            .list
              margin-left 74px
              margin-bottom 30px
              .title
                display inline-block
                color $text-color
                font-size $font-size
                text-align right
              .text
                display inline-block
                margin-left 30px
                padding 0 30px
                width: 646px
                height: 60px
                font-size $font-size
                border-radius 5px
                background $bg-input
                border 1px solid $border-color
                &::-webkit-input-placeholder /* WebKit browsers */
                  color #B7B8B8
                &:-moz-placeholder /* Mozilla Firefox 4 to 18 */
                  color #B7B8B8
                &::-moz-placeholder /* Mozilla Firefox 19+ */
                  color #B7B8B8
                &:-ms-input-placeholder /* Internet Explorer 10+ */
                  color #B7B8B8
              .Frozen
                width 706px
                height 60px
                line-height 60px
                background #ffffff
                padding 0
                border none
                >span
                  width 200px
                  line-height 18px
                  display inline-block
                .Select
                  float right
                  right 0
                .el-input__inner
                  width 446px
                  height 60px
                  color #2480FF
          .notice
            margin-left 196px
            font-size $notice-size
            color $text-notice
          .btn
            display inline-block
            margin: 53px 0 103px 180px
            width: 704px
            height: 62px
            font-size $btn-size
            color #fff
            line-height 62px
            text-align center
            border-radius 5px
            gradient(#0A5EFF,#3D7EFC)
     .RegisteredIssue
       .content
         .lists
           .title
             width 88px
     .IssueAssets
       .content
         .lists
           .title
             width 120px

  .RegisteredPopup
    position absolute
    top 0
    left 0
    width 100%
    height 100%
    background:rgba(0,0,0,0.5);
    .RegisteredPopupContent
      width 646px
      height 324px
      position absolute
      top 50%
      left 50%
      margin-top -162px
      margin-left -323px
      background #ffffff
      box-shadow 7px 0px 18px rgba(6,8,65,0.26)
      border-radius 8px
      .Text
        margin-top 121px
        text-align center
        font-size 20px
        color #333333
        font-family:PingFang-SC-Heavy
      .RegisteredPopupButton
        margin-top 70px
        button
          width 137px
          height 48px
          border-radius 4px
          font-size:20px;
          font-family:PingFang-SC-Regular;
          cursor pointer
        .Cancel
          border 1px solid #0057FF
          color #0057FF
          float left
          margin-left 130px
          background #ffffff
        .Sure
          gradient(#0A5EFF,#3D7EFC)
          color #FFFFFF
          float right
          margin-right 130px
      .RegisteredPopupClose
        width 20px
        height 20px
        position absolute
        top 24px
        right 24px
        cursor pointer

</style>
