module.exports = {
  //登录页面  取汉字前两个拼音为标识
  login:{
    shuru:'Please Enter Your Key',
    baochi:'Keep Login',
    denglu:'Login',
    chuangjian:'New Account',
  },
  //创建新用户
  CreateAccount:{
    chuangjian:'New Account',
    miyao:'Your Key',
    xitong:'The system has generated enough security keys for you. The next step will require you to re-enter the key to confirm.',
    quebao:'Please ensure that you have stored the key securely. If you lose your key, your account will never be opened again, and you will lose all your assets.',
    yiyue:'I have read it',
    guanyu:'《A risk statement on the user\'s account key》',
    xiayibu:'Next Step',
    baocun:'Save Key'
  },
  //风险声明
  declaration:{
    guanyu:'A risk statement on the user\'s account key',
    //遇到br换行 页面用v-html渲染
    zunjing:'Respectable users:<br>\n' +
    '           When you choose to register as a AECloud user, the system will automatically generate an AECloud address for you. AECloud means that you have read, understood, understood and fully agreed on all the contents of the risk statement.\n' +
    '           <br><br>\n' +
    '           When you register as a AECloud user, you create the key after creating the account, and the user must save the key on his own. When you forget the key, all the assets on your AECloud address will be lost forever and can not be retrieved. Any loss and responsibility resulting from this will be borne by you personally. AECloud has no right and no obligation to store or save your key in any form, nor is it possible to obtain or divulge your key.\n' +
    '           <br>\n' +
    '           So you must keep and store your key so as not to cause unnecessary trouble.\n' +
    '           <br><br>\n' +
    '           Please be well known\n' +
    '           <br><br>\n' +
    '           AECloud',
  },
  //确认私钥 页面
  ConfirmPrivate:{
    querensiyao:'Confirm the private key',
    shuru:'Please enter your private key',
    queren:'confirm',
    fanhui:'Return'
  }
}
