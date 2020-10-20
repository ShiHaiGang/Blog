#MAC 清理内存的终端命令

1在终端输入：sudo purge回车，输密码，回车，搞定  我电脑内存电脑立刻多了2多G

2随着你使用Mac的时间越来越长，系统日志文件也会越来越多，根据电脑的用量、错误和服务，这些文件会越来越多。这些系统日志文件是用来调试和排除故障的，如果你感觉没有用，可以使用下面的命令删除：

```sh
sudo rm -rf /private/var/log/*
```

3快速查看功能是OS X系统内置的文件预览功能，在Finder中选择任何文件后都可以点击空格来查看文件的详情。不过快速查看功能依靠缓存功能才能更流畅，而且这些缓存文件会一直增加，通过下面的命令移除缓存：

```sh
sudo rm -rf /private/var/folders/
```

4缓存文件有很多种，比如网页浏览记录，应用meta数据等等。这些缓存文件的容量究竟多大跟用户使用的应用有关，也与Mac重启的频率有关。此外，很多在线音乐播放app也会产生大量的缓存文件，我们可以通过下面的命令删除这些缓存文件：

```sh
cd ~/Library/Caches/

rm -rf ~/Library/Caches/*
```

5 /private/var/tmp/是存放系统缓存的文件夹，通常情况下会在系统重启时清楚，不过有时确不会。而且如果你长时间不关闭Mac，也不重启的话，缓存文件会越来越多。使用下面的命令清楚这些临时文件：

```sh
cd /private/var/tmp/

rm -rf TM*
```

这些方法需要使用终端才能实现，而且有的方法有些风险，所以请大家使用时注意！

# iTerm2

  ### 配置总览
  + iTerm2 
  > Terminal 终端的替代品，拥有更多强大的功能.
  + Oh-My-Zsh
  > 用来管理 zsh 的配置，同时还有很多社区贡献的主题配置以及好用的插件可供使用.
  - Dracula 主题
  > 暗黑系配色
  - zsh 命令语法高亮;
  > zsh：Linux 的一种 shell 外壳，强大的虚拟终端，和 bash 属于同类产品，OS X 已自带；

### Dracula 黑暗主题
  > https://draculatheme.com/

### Oh My ZSH 官网
  > https://ohmyz.sh/

  默认主题库
  > https://github.com/robbyrussell/oh-my-zsh/wiki/Themes

  外部主题库
  > https://github.com/robbyrussell/oh-my-zsh/wiki/External-themes

  ```bash
  # Via curl （安装方法一）
  $ sh -c "$(curl -fsSL https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
  
  # Via wget （安装方法二）
  $ sh -c "$(wget https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh -O -)"

  # 卸载
  uninstall_oh_my_zsh
  ```

### Powerline fonts
  ### 推荐安装 🌟🌟🌟🌟🌟
  > 推荐大家按需添加多个字体文件或单个字体文件

  > [Mac 字体册偏好设置](https://support.apple.com/zh-cn/guide/font-book/fntbk1004/8.0/mac/10.13)

  > [Meslo LG M Regular for Powerline.ttf](https://github.com/powerline/fonts/tree/master/Meslo%20Slashed)

  ### 默认安装
  > 华丽丽的主题需要 Powerline 字符集的支持。
  ```bash
  # clone
  git clone https://github.com/powerline/fonts.git --depth=1
  # install
  cd fonts
  ./install.sh
  # clean-up a bit
  cd ..
  rm -rf fonts
  ```
  ### 卸载方式
  ```bash
    # 默认卸载（可能会失败）
    ./uninstall.sh
  ```
  > ./uninstall.sh
  > -bash: ./uninstall.sh: Permission denied

  ```bash
    # 推荐卸载 🌟🌟🌟🌟🌟
    sh ./uninstall.sh 
    chmod +x uninstall.sh
  ```

# Homebrew 官网
  > https://brew.sh/

  ```bash
  # 安装 Homebrew
  /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

  # 卸载 Homebrew
  /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/uninstall)"
  ```

# Homebrew 常用命令
  ```bash
  brew search mysql #搜索指定软件

  brew info mysql #查看软件的信息，比如目前的版本，依赖，安装后注意事项等

  brew update #这会更新 Homebrew 自己，并且使得接下来的两个操作有意义——

  brew outdated #检查过时（是否有新版本）这会列出所有安装的软件里可以升级的那些

  brew upgrade #升级所有可以升级的软件们

  brew cleanup #清理不需要的版本极其安装包缓存

  brew outdated # 看一下哪些软件可以升级

  brew upgrade <xxx> # 升级指定的：如果不是所有的都要升级，那就这样升级指定的
  
  brew upgrade; brew cleanup #升级并清理：如果都要升级，直接升级完然后清理干净
  ```

# brew install git
  ```
  git --version 
  ```
  ### 配置 Git
    > https://git-scm.com/book/zh/v1/%E8%87%AA%E5%AE%9A%E4%B9%89-Git-%E9%85%8D%E7%BD%AE-Git
      如第一章所言，用git config配置 Git，要做的第一件事就是设置名字和邮箱地址：
    
    ```
    $ git config --global user.name "John Doe"
    $ git config --global user.email johndoe@example.com
    ```
  ### (1）首先检查电脑是否曾经生成过秘钥
  ```
  cd ~/.ssh
  ```
  若打开该文件夹为空，则表示没有生成过秘钥，进入第二步。（~表示根目录）

  ### (2) 生成秘钥 SSH key
    ```bash
    $ ssh-keygen -t rsa -C "your_email@example.com"
    ```
    ```bash
    MacBook-Pro:~ shihaigang$ ssh-keygen -t rsa -C "johndoe@example.com"
    Generating public/private rsa key pair.
    Enter file in which to save the key (/Users/shihaigang/.ssh/id_rsa): //回车设置秘密
    Enter passphrase (empty for no passphrase): //回车 不设密码
    Enter same passphrase again: //回车 不设密码
    Your identification has been saved in /Users/shihaigang/.ssh/id_rsa.
    Your public key has been saved in /Users/shihaigang/.ssh/id_rsa.pub.
    The key fingerprint is:
    SHA256:vaGc5vfdL5ACSXQCbaq7Bvl2Xjwsx7xdV1tB5Eg0rUs johndoe@example.com
    The key's randomart image is:
    +---[RSA 2048]----+
    |      .+o . .+oo |
    |        +o  . =. |
    |       + .   ..o |
    |      . o.   E  .|
    |   . .  S.o ... o|
    |  o .  * o.oo. .o|
    |   o .. & ...... |
    |    = .* +.. o.. |
    |   o.+. o.... ..+|
    +----[SHA256]-----+
    MacBook-Pro:~ shihaigang$ 
    ```
    执行成功后，会在主目录.ssh路径下生成两个文件：
      id_rsa 私钥文件；
      id_rsa.pub 公钥文件；
  ### 配置 GitHub (SSH keys)
    Title 随意
    Key 为 id_rsa.pub 中的内容（全部复制，可用“cat id_rsa.pub”命令打开）

# brew install nvm
  ```
  nvm -v
  
  nvm install node
  ```

# brew install redis
  ```
  brew services start redis
  brew services stop redis
  redis-server
  ```

# brew install mysql
  ```bash
  // 安装 mysql
  Apple:~ shihaigang$ brew install mysql

  // 安装 成功
  ==> Caveats
  We've installed your MySQL database without a root password. To secure it run:
      mysql_secure_installation

  MySQL is configured to only allow connections from localhost by default

  To connect run:
      mysql -uroot

  To have launchd start mysql now and restart at login:
    brew services start mysql
  Or, if you don't want/need a background service you can just run:
    mysql.server start
  ==> Summary
  🍺  /usr/local/Cellar/mysql/8.0.17: 284 files, 275.5MB

  // 启动 mysql
  Apple:~ shihaigang$ mysql.server start
  Starting MySQL
  . SUCCESS! 

  // 配置 mysql
  Apple:~ shihaigang$ mysql_secure_installation

  Securing the MySQL server deployment.

  Connecting to MySQL using a blank password.

  VALIDATE PASSWORD COMPONENT can be used to test passwords
  and improve security. It checks the strength of password
  and allows the users to set only those passwords which are
  secure enough. Would you like to setup VALIDATE PASSWORD component?

  Press y|Y for Yes, any other key for No: n //是否采用mysql密码安全检测插件（这里作为演示选择否，密码检查插件要求密码复杂程度高，大小写字母+数字+字符等）
  Please set the password for root here. // 首次使用自带配置脚本，设置root密码

  New password: 

  Re-enter new password: 

  By default, a MySQL installation has an anonymous user,
  allowing anyone to log into MySQL without having to have
  a user account created for them. This is intended only for
  testing, and to make the installation go a bit smoother.
  You should remove them before moving into a production
  environment.

  Remove anonymous users? (Press y|Y for Yes, any other key for No) : y //是否删除匿名用户
  Success.


  Normally, root should only be allowed to connect from
  'localhost'. This ensures that someone cannot guess at
  the root password from the network.

  Disallow root login remotely? (Press y|Y for Yes, any other key for No) : y //是否禁止远程登录
  Success.

  By default, MySQL comes with a database named 'test' that
  anyone can access. This is also intended only for testing,
  and should be removed before moving into a production
  environment.


  Remove test database and access to it? (Press y|Y for Yes, any other key for No) : y //删除测试数据库，并登录
  - Dropping test database...
  Success.

  - Removing privileges on test database...
  Success.

  Reloading the privilege tables will ensure that all changes
  made so far will take effect immediately.

  Reload privilege tables now? (Press y|Y for Yes, any other key for No) : y //重新载入权限表
  Success.

  All done! 
  Apple:~ shihaigang$

  # 开启数据库
  brew services start mysql
  brew services stop mysql
  mysql.server start
  mysql.server stop
  ```

# brew install mongodb
  ```
  brew services start mongodb
  brew services stop mongodb
  mongod
  ```

# 参考资料
  > http://wiki.jikexueyuan.com/project/mac-dev-setup/iterm.html
