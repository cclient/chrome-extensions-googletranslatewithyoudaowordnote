# chrome-extensions-googletranslatewithyoudaowordnote
google translate with youdao wordnote 带有道生词本的google翻译，由原版google翻译 扩展而来，侵删
[有道版本](https://github.com/cclient/chrome-extensions-youdaowithwordnode)

添加生词:点击

删除生词:alt+点击

# 加载方式

# 快速加载(普通用户，部分chrome版本不可用，因非官方应用，会有报警，需要允许）

1 下载 [chrome-extensions-youdaowithwordnode.crx文件](https://github.com/cclient/chrome-extensions-youdaowithwordnode/releases/download/v1.55_0/chrome-extensions-youdaowithwordnode.crx)

2 Chrome打开 chrome://extensions/

3 拖拽chrome-extensions-youdaowithwordnode.crx 至 Chrome chrome://extensions/页

# 源文件加载（开发者）

1 点击,右上角“Download ZIP”下载项目解压 或 git clone git@github.com:cclient/chrome-extensions-googletranslatewithyoudaowordnote.git

2 Chrome浏览器打开chrome://extensions/

3 勾选"开发者模式",若Chrome为英文版,则勾选 "Developer mode"

4 点击,“加载已解压的扩展程序”,若Chrome为英文版,则点击 "Load unpacked extension"

5 选中zip解压/git 下载目录 确定即可

# 使用说明

点击右上角设置图标即可看到添加的其他功能

添加了“登录”，“注销”，“生词本”，三个链接，及是否“自动添加生词”设置。

在翻译弹窗里添加了“+生词本”链接，添加生词时若没有登录，会弹出登陆框。

登陆成功后即可添加生词(alt+点击，为删除生词)，成功会有提示，也可去“生词本”，验证

若勾选“自动添加生词”，则每次查词，自动加入生词本

注销，换账号用（实现方式为清除dict.youdao.com及.youdao.com下的cookie）

# 项目说明

原始扩展

[google translate 划词插件](https://chrome.google.com/webstore/detail/google-translate/aapbdbdomjkkjkaonfhkkikfgjllcleb?hl=en-US)

原生不带生词本,自已动手

[有道生词本](http://dict.youdao.com/wordbook/wordlist)比[google](https://translate.google.com/)的好用，且有多平台应用，便用有道的生词本

原版本的代码是混淆过的，找到自已想修改的地方会多用些工夫。

为求简单(牺牲体验),直接链接到youdao官方的login页登录获取cookie

注销，实现方式为删除相应domain下的cookie

添加生词时若没有登录(验证账号失败)则会弹出登陆页

# 因是由原始扩展修改,或有侵权问题,因此并未上传到chrome官方

# 目前只支持手动加载

# 侵删

# 联系邮箱cclient@hotmail.com
