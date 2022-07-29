(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{303:function(s,t,a){"use strict";a.r(t);var e=a(13),r=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"持久应用-启动脚本生成器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#持久应用-启动脚本生成器"}},[s._v("#")]),s._v(" 持久应用：启动脚本生成器")]),s._v(" "),t("p",[s._v("PM2 可以生成启动脚本并对其进行配置，以使您的进程列表在预期或意外的机器重启时保持完整。")]),s._v(" "),t("h3",{attrs:{id:"生成启动脚本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#生成启动脚本"}},[s._v("#")]),s._v(" 生成启动脚本")]),s._v(" "),t("p",[s._v("通过（不带 sudo的）"),t("code",[s._v("pm2 startup")]),s._v("命令，自动生成和配置启动脚本：")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ pm2 startup\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("PM2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" You have to run this "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("command")]),s._v(" as root. Execute the following command:\n      "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("su")]),s._v(' -c "env '),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")])]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PATH")]),s._v(":/home/unitech/.nvm/versions/node/v14.3/bin pm2 startup "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("distribution"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" -u "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("user"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" --hp "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("home-path"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])])]),t("p",[s._v("然后将显示的命令复制/粘贴到终端：")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("su")]),s._v(' -c "env '),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")])]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PATH")]),s._v(":/home/unitech/.nvm/versions/node/v14.3/bin pm2 startup "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("distribution"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" -u "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("user"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" --hp "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("home-path"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])])]),t("p",[s._v("这样，当机器启动的时候 PM2 会自动重启。")]),s._v(" "),t("p",[t("strong",[s._v("注意")]),s._v("："),t("code",[s._v("--service-name <name>")]),s._v("：您可以通过该选项自定义服务名称（ "),t("a",{attrs:{href:"https://github.com/Unitech/pm2/pull/3213",target:"_blank",rel:"noopener noreferrer"}},[s._v("#3213"),t("OutboundLink")],1),s._v("）")]),s._v(" "),t("h3",{attrs:{id:"保存要在重启时恢复的应用列表"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#保存要在重启时恢复的应用列表"}},[s._v("#")]),s._v(" 保存要在重启时恢复的应用列表")]),s._v(" "),t("p",[s._v("启动所有需要的应用程序后，保存应用程序列表，以便在重新启动后重新生成：")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("pm2 save\n")])])]),t("h3",{attrs:{id:"手动恢复进程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#手动恢复进程"}},[s._v("#")]),s._v(" 手动恢复进程")]),s._v(" "),t("p",[s._v("要手动恢复以前保存的进程（通过"),t("code",[s._v("pm2 save")]),s._v("）：")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("pm2 resurrect\n")])])]),t("h3",{attrs:{id:"禁用启动系统"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#禁用启动系统"}},[s._v("#")]),s._v(" 禁用启动系统")]),s._v(" "),t("p",[s._v("要禁用和删除当前启动配置：")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("pm2 unstartup\n")])])]),t("h3",{attrs:{id:"具体要知道"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#具体要知道"}},[s._v("#")]),s._v(" 具体要知道")]),s._v(" "),t("h4",{attrs:{id:"node-js-版本升级后更新启动脚本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#node-js-版本升级后更新启动脚本"}},[s._v("#")]),s._v(" Node.js 版本升级后更新启动脚本")]),s._v(" "),t("p",[s._v("当您升级本地 Node.js 版本时，请务必更新 PM2 启动脚本，以便它运行您已安装的最新 Node.js 二进制文件。")]),s._v(" "),t("p",[s._v("首先禁用并删除当前的启动配置（复制/粘贴该命令的输出）：")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ pm2 unstartup\n")])])]),t("p",[s._v("然后重新保存一个新的启动脚本：")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ pm2 startup\n")])])]),t("h4",{attrs:{id:"用户权限"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#用户权限"}},[s._v("#")]),s._v(" 用户权限")]),s._v(" "),t("p",[s._v("假设您希望启动脚本在另一个用户下执行。")]),s._v(" "),t("p",[s._v("只需更改"),t("code",[s._v("-u <username>")]),s._v("选项和"),t("code",[s._v("--hp <user_home>")]),s._v("：")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("pm2 startup ubuntu -u www --hp /home/ubuntu\n")])])]),t("h4",{attrs:{id:"指定初始化系统"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#指定初始化系统"}},[s._v("#")]),s._v(" 指定初始化系统")]),s._v(" "),t("p",[s._v("如果您愿意，您可以指定您自己使用的平台（其中平台可以是以上引用的任何一种）：")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("pm2 startup "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("ubuntu "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" ubuntu14 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" ubuntu12 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" centos "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" centos6 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" arch "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" oracle "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" amazon "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" macos "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" darwin "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" freebsd "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" systemd "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" systemv "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" upstart "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" launchd "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" rcd "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" openrc"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])])]),t("h4",{attrs:{id:"systemd-安装检查"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#systemd-安装检查"}},[s._v("#")]),s._v(" SystemD 安装检查")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Check if pm2-<USER> service has been added")]),s._v("\n$ systemctl list-units\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Check logs")]),s._v("\n$ journalctl -u pm2-"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("USER")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Cat systemd configuration file")]),s._v("\n$ systemctl "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" pm2-"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("USER")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Analyze startup")]),s._v("\n$ systemd-analyze plot "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" output.svg\n")])])]),t("p",[s._v("为了有效地等待机器在线等待 PM2 运行：")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Unit"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Wants")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("network-online.target\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("After")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("network.target network-online.target\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Install"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("WantedBy")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("multi-user.target network-online.target\n")])])]),t("h4",{attrs:{id:"windows-启动脚本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#windows-启动脚本"}},[s._v("#")]),s._v(" Windows 启动脚本")]),s._v(" "),t("p",[s._v("要生成与 Windows 兼容的启动脚本，请查看优秀的"),t("a",{attrs:{href:"https://github.com/jessety/pm2-installer",target:"_blank",rel:"noopener noreferrer"}},[s._v("pm2-installer"),t("OutboundLink")],1),s._v("。")]),s._v(" "),t("h4",{attrs:{id:"支持的初始化系统"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#支持的初始化系统"}},[s._v("#")]),s._v(" 支持的初始化系统")]),s._v(" "),t("ul",[t("li",[t("strong",[s._v("systemd")]),s._v(" : Ubuntu >= 16, CentOS >= 7, Arch, Debian >= 7")]),s._v(" "),t("li",[t("strong",[s._v("upstart")]),s._v("：Ubuntu <= 14")]),s._v(" "),t("li",[t("strong",[s._v("launchd")]),s._v("：Darwin，"),t("strong",[s._v("MacOSx")])]),s._v(" "),t("li",[t("strong",[s._v("openrc")]),s._v("：Gentoo Linux、Arch Linux")]),s._v(" "),t("li",[t("strong",[s._v("rcd")]),s._v(" : FreeBSD")]),s._v(" "),t("li",[t("strong",[s._v("systemv")]),s._v("：Centos 6，Amazon Linux")])]),s._v(" "),t("p",[s._v("这些初始化系统由 PM2 使用"),t("code",[s._v("pm2 startup")]),s._v("命令自动检测。")])])}),[],!1,null,null,null);t.default=r.exports}}]);