# 自动化部署
**Linux(Centos7 环境下)**
1.安装git
```
1.yum install git
2.ssh-keygen -t rsa -C "xfz@163.com" -f "test_rsa"
//生成公钥和密钥（test_rsa.public 公钥,  test_rsa 密钥, 将复制给运维人员，以便加入git服务器）
3.使私钥在本地生效
a.将私钥复制到你的home目录下的.ssh/ 路径下(如果不存在， mkdir .ssh)
b.配置你的私钥文件访问权限 chmod 600 test_rsa
c.ssh-add test_rsa
若出现： Could not open a connection to your authenticationagent.
ssh-agent bash
ssh-add test_rsa
d.检查你的.ssh/ 路径下是否存在config文件，如果不存在建, touch config
e.编辑config文件，在文件尾部添加以下内容，保存并关闭 vi config
# github
Host github.com 
User git
IdentityFile ~/.ssh/test_rsa
Protocol 2
Compression yes
ServerAliveInterval 60
ServerAliveCountMax 20
LogLevel INFO
f.配置config文件的访问权限为 644  chmod 644 config
4.git clone git@github.com:xxxx/xxx.git
```

2.安装ruby, 下载ruby1.9+源码(xxx.tar.gz)
```
cd downloads
wget http:rubyxxxx.tar.gz
tar -zxvf rubyxxxx.tar.gz
cd rubyxxx
./configure
make
make install
```

3.安装travis
```
yum install gem
gem install travis
```

4.配置nginx与部署静态页面与Node.js项目
nginx 这里不做描述
node pm2 start app.js --name test-server
这里不做描述

5.配置travis
travis-ci支持公开项目和私有项目,是通过.org和.com后缀来区分的。以我的一个公开项目为例
进入 https://travis-ci.org/ 官网，登录我的github账号
![](readImg/1.png)
先别关，接着往下进行其他步骤
```
travis login
```
