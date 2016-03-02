# chrome-extensions-googletranslatewithyoudaowordnote
google translate with youdao wordnote 带有道生词本的google翻译，由原版google翻译 扩展而来，侵删
https://github.com/cclient/chrome-extensions-youdaowithwordnode 有道笔记版本

点击是添加生词
alt+点击是删除生词

#加载方式

#快速加载

1下载chrome-extensions-googletranslatewithyoudaowordnote.crx(项目根目录,右击链接另存为)

2Chrome打开 chrome://extensions/

3拖拽chrome-extensions-youdaowithwordnode.crx 至 Chrome chrome://extensions/ 页

#源文件加载

1点击，右上角“Download ZIP”下载项目,下载完成后，解压到某目录A

2Chrome浏览器打开chrome://extensions/

3勾选开发者模式

4点击,“加载已解压的扩展程序”

5选中目录A 确定即可

#使用说明

点击右上角设置图标即可看到除了添加的其他功能

添加了“登录”，“注销”，“生词本”，三个链接

在翻译弹窗里添加了“+生词本”链接，若没有登录，会弹出登陆框。

登陆成功后即可添加，添加成功会有提示，可去“生词本”验证。

注销可有可无，换账号用。

#项目说明

原始扩展 https://chrome.google.com/webstore/detail/google-translate/aapbdbdomjkkjkaonfhkkikfgjllcleb?hl=zh-CN

原生不带生词本,自已动手

有道生词本（http://dict.youdao.com/wordbook/wordlist）比google（https://translate.google.com/）的"好词好句"好用，且有多平台应用，便用有道的生词本

主要是因为之前一个项目有的有道生词本（api比google的简单），为了简单，有心的改为google的好词好句,或自建后台的，可以自已动手

原版本的代码是混淆过的，找到自已想修改的地方会多用些工夫。

该项目添加修改的部分，都有todo标识

为求简单(牺牲体验),直接链接到youdao官方的login页获取cookie

登录(弹窗官方页，后续可优化为本地原生实现)

注销，实现方式为删除相应domain下的cookie

添加生词时若没有登录(验证账号失败)则会弹出登陆页

#因是由原始扩展修改,或有侵权问题,因此并未上传到chrome官方

#目前只支持手动加载。

#侵删

#联系邮箱cclient@hotmail.com
