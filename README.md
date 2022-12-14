# 重交企业级项目大作业 
《交通运输人员就业与再就业教育培训平台》后台管理部分前端 by Ran
该仓库暂定为后台管理系统前端部分，用于管理人员管理用户信息、试卷信息及数据展示等
## 如何运行？
首先需要确保你的电脑中装有git和node.js

随后在git bash中执行`git clone`拉取本项目至项目文件夹

```bash
git clone [url] //此处url为仓库url，目前暂时使用https方式
```

在项目文件夹终端执行`npm install`以安装项目依赖:

```bash
npm install
```

执行`npm run start`以运行项目

```bash
npm run start
```

## 如何参与代码Contribute？

    确保我已经将你设置为仓库Collaborators后，在项目中创建你自己的分支(例如分支Ran就是我自己的分支)
完成代码改动并做好自己的测试工作后先commit并push到自己的分支下
```bash
git pull origin [branch-name] //修改不确定是否会冲突的话可以先拉取仓库中的代码 branch-name是你的分支名

git commit -m [message] //提交代码 message不可缺省
```
and

```bash
git push origin [branch-name] //push到指定分支，一般是自己的分支
```
小组沟通确认代码没有问题后，将自己的分支merge到dev分支，就完成了代码修改的大部分流程。

以上操作都可以使用ide(如vscode、IDEA等)自带的可视化git工具完成，但测试时尽量先避免修改dev或master的操作，熟练后再修改这两个分支。更多操作自行参考网上有关git的教程。

*真的学不完了TAT*




