<template>
    <div class="MyAssetsWrap">
      <!--我的资产 Header组件-->
      <DetailedHeader :title='title'></DetailedHeader>
      <!--我的资产 Main-->
      <div class="MyAssetsMain">
        <!--导航 nav-->
        <div class="MyAssetsContentNav">
          <div class="zichangaiyao"  @click="show('isShowAssetSummary')" :class="{on:active == 'isShowAssetSummary'}">
            <span>资产概要</span>
          </div>
          <div class="zhucefaxing"  @click="show('isShowRegisteredIssue')" :class="{on:active == 'isShowRegisteredIssue'}">
            <span>注册发行商</span>
          </div>
          <div class="faxingzhanghu" @click="show('isShowIssueAssets')" :class="{on:active == 'isShowIssueAssets'}">
            <span>发行资产</span>
          </div>
          <div class="faxingzichan"  @click="show('isShowMeIssueAssets')" :class="{on:active == 'isShowMeIssueAssets'}">
            <span>我发行的资产</span>
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
                        发行商名称*
                    </span>
                  <input class="text" type="text" >
                </li>
                <li class="list">
                    <span class="title">
                        企业三证号
                    </span>
                  <input class="text" type="text" >
                </li>
                <li class="list">
                    <span class="title">
                        地址*
                    </span>
                  <input class="text" type="text" >
                </li>
                <li class="list">
                    <span class="title">
                        联系人*
                    </span>
                  <input class="text" type="text" >
                </li>
                <li class="list">
                    <span class="title">
                        联系方式*
                    </span>
                  <input class="text" type="text" >
                </li>
              </ul>
              <p class="notice">
                备注：固定合约需要申请成发行商才能有发行token的资格。注意填写后不能修改。
              </p>
              <a href="javascript:;" class="btn" style="margin-left: 196px" @click="isshowRegisteredPopup = !isshowRegisteredPopup">提交</a>
            </div>
          </div>

          <!--发行资产-->
          <div class="IssueAssets" v-show="active == 'isShowIssueAssets'">
            <div class="content">
              <ul class="lists" style="padding-top: 121px">
                <span class="listsTitle"><div class="point"></div>发行代币信息</span>
                <li class="list" >
                   <span class="title">
                       资产名称
                   </span>
                  <input class="text" type="text" placeholder="英文名称">
                </li>
                <li class="list">
                    <span class="title">
                        代币标识
                    </span>
                  <input class="text" type="text" placeholder="英文名称">
                </li>
                <li class="list">
                    <span class="title">
                        小数/位数精确度
                    </span>
                  <input class="text" type="text" placeholder="请输入2-6位整数">
                </li>
                <li class="list">
                    <span class="title">
                        发行量
                    </span>
                  <input class="text" type="text" placeholder="不超过12位正整数">
                </li>
                <li class="list">
                    <span class="title" style="float: left; margin-top: 82px" >
                        代币资产描述
                    </span>
                  <textarea class="text" type="text" placeholder="不超过500个字符" style="height: 178px;outline: none;padding-top: 22px"></textarea>
                </li>
                <li class="list" style="width:760px; height: 60px">

                </li>
                <li class="list">
                    <span class="title">
                        冻结数
                    </span>
                  <input class="text" type="text" >
                </li>
                <li class="list">
                    <span class="title">
                        冻结释放时间
                    </span>
                  <input class="text" type="text" placeholder="格式：2018-07-08 12:23:30">
                </li>
              </ul>
              <a href="javascript:;" class="btn" style="margin-left: 241px">提交</a>
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
      <div class="RegisteredPopup" v-show="isshowRegisteredPopup">
         <div class="RegisteredPopupContent">
           <p class="Text">
                 <span  style="font-weight: bold">提醒:</span>
                 <span>申请成为发行商需要支付**个AEC。</span>
               </p>
           <div class="RegisteredPopupButton">
             <button class="Cancel" @click="isshowRegisteredPopup = !isshowRegisteredPopup">取消</button>
             <button class="Sure">确定</button>
           </div>
           <div class="RegisteredPopupClose" @click="isshowRegisteredPopup = !isshowRegisteredPopup">
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
        text1: '我的资产',
        text2: '/ 资产概要'
      },
      // DetailedTable 组件传值（传递名称）
      tableTitle: {
        //最多7个，最少6个，最后一个没有即为空
        text1:'资产币种',
        text2:'资产名称',
        text3:'余额',
        text4:'精度',
        text5:'发行总量',
        text6:'操作',
      },
      //nav 切换
      active: 'isShowAssetSummary',
      // isShowAssetSummary: true,
      // isShowRegisteredIssue: false,
      // isShowIssueAssets:false,
      // isShowMeIssueAssets:false
      isshowRegisteredPopup: false
    }
  },
  methods:{
    show(i){
      this.active = i
    },
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
