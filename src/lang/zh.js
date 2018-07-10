module.exports = {
  //登录页面  取汉字前两个拼音为标识
  login:{
    shuru:'请输入你的密钥',
    baochi:'保持登录状态',
    denglu:'登录',
    chuangjian:'创建新账户',
  },
  //创建新用户 页面
  CreateAccount:{
    chuangjian:'创建新账户',
    miyao:'你的密钥',
    xitong:'系统为您生成了足够安全的密钥，下一步将会要求您重新输入密钥以确认',
    quebao:'请确保您已安全保存密钥，如果您失去您的密钥，您的帐户将永远无法再打开，您将失去您所有的资产。',
    yiyue:'我已阅读',
    guanyu:'《关于用户账户密钥的风险声明》',
    xiayibu:'下一步',
    baocun:'保存密匙'
  },
  //风险声明 页面
  declaration:{
    guanyu:'关于用户账户密钥的风险声明',
    //遇到br换行 页面用v-html渲染
    zunjing:'尊敬的用户:<br>\n' +
    '           当您选择注册为AECloud用户之时起，系统会自动给您生成一个AECloud地址。AECloud即视为您已经认真阅读、知悉、理解并完全同意该风险声明的全部内容。\n' +
    '           <br><br>\n' +
    '           您注册为AECloud的用户，创建账户后就生成密钥，用户须自行保存密钥。当您忘记密钥时，您AECloud地址上的所有资产将永远丢失，并且无法找回，由此造成的任何损失和责任均由您个人承担。AECloud没有权利且无任何义务以任何形式存储或保存您的密钥，也绝无可能获取或泄露您的密钥。\n' +
    '           <br>\n' +
    '           所以请您务必妥善保管和存储自己的密钥，以免造成不必要的麻烦。\n' +
    '           <br><br>\n' +
    '           敬请周知\n' +
    '           <br><br>\n' +
    '           AECloud',
  },
  //确认私钥 页面
  ConfirmPrivate:{
    querensiyao:'确认私钥',
    shuru:'请输入你的私钥',
    queren:'确认',
    fanhui:'返回'
  }
}
