(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{304:function(t,e,a){"use strict";a.r(e);var s=a(13),n=Object(s.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"配置文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置文件"}},[t._v("#")]),t._v(" 配置文件")]),t._v(" "),e("p",[t._v("使用 PM2 管理多个应用程序时，可以使用 JS 配置文件来组织它们。")]),t._v(" "),e("h2",{attrs:{id:"生成配置文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#生成配置文件"}},[t._v("#")]),t._v(" 生成配置文件")]),t._v(" "),e("p",[t._v("要生成一份示例配置文件，您可以键入以下命令：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("$ pm2 init simple\n")])])]),e("p",[t._v("这将生成一个简单的示例"),e("code",[t._v("ecosystem.config.js")]),t._v("：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('module.exports = {\n  apps : [{\n    name   : "app1",\n    script : "./app.js"\n  }]\n}\n')])])]),e("p",[t._v("如果您正在创建自己的配置文件，请确保它以 结尾，"),e("code",[t._v(".config.js")]),t._v("以便 PM2 能够将其识别为配置文件。")]),t._v(" "),e("h2",{attrs:{id:"使用配置文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用配置文件"}},[t._v("#")]),t._v(" 使用配置文件")]),t._v(" "),e("p",[t._v("与操作应用程序相比，您可以无缝地启动/停止/重新启动/删除配置文件中包含的所有应用程序：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("# 启动配置文件中的所有应用\npm2 start ecosystem.config.js\n\n# 停止配置文件中的所有应用\npm2 stop ecosystem.config.js\n\n# 重启所有应用\npm2 restart ecosystem.config.js\n\n# 重载所有应用\npm2 reload ecosystem.config.js\n\n# 删除所有应用\npm2 delete ecosystem.config.js\n")])])]),e("h3",{attrs:{id:"启动一个特定的进程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#启动一个特定的进程"}},[t._v("#")]),t._v(" 启动一个特定的进程")]),t._v(" "),e("p",[t._v("通过"),e("code",[t._v("--only <app-name>")]),t._v("选项指定要启动应用的名字，这样你可以启动一个指定的应用：")]),t._v(" "),e("div",{staticClass:"language-js' extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("pm2 start ecosystem.config.js --only api-app\n")])])]),e("p",[e("em",[t._v("注意")]),t._v(":  "),e("code",[t._v("--only")]),t._v(" 选项也适用于start/restart/stop/delete命令。")]),t._v(" "),e("p",[t._v("甚至你可以指定多个应用来运行，通过指定每个应用的名字，使用逗号进行分割：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('pm2 start ecosystem.config.js --only "api-app,worker-app"\n')])])]),e("h2",{attrs:{id:"切换环境"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#切换环境"}},[t._v("#")]),t._v(" 切换环境")]),t._v(" "),e("p",[t._v("通过 "),e("code",[t._v("env_*")]),t._v(" 选项，你可以指定不同的环境变量集。")]),t._v(" "),e("p",[t._v("例如：")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("module"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("apps")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("name")]),t._v("   "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"app1"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("script")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./app.js"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("env_production")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n       "),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NODE_ENV")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"production"')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("env_development")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n       "),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NODE_ENV")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"development"')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("通过指定 "),e("code",[t._v("--env [env name]")]),t._v(" 选型，在不同的环境中进行两个变量的切换：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("// 会将配置文件中env_production的值放到process.env中，代码中用到的NODE_ENV就是 production\npm2 start process.json --env production\n\n// 会将配置文件中env_development的值放到process.env中，代码中用到的NODE_ENV就是 development\npm2 restart process.json --env development\n")])])]),e("h2",{attrs:{id:"可用的属性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#可用的属性"}},[t._v("#")]),t._v(" 可用的属性")]),t._v(" "),e("p",[t._v("应用程序的行为和配置可以通过以下属性进行设置：")]),t._v(" "),e("h3",{attrs:{id:"常规属性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常规属性"}},[t._v("#")]),t._v(" 常规属性")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("Field")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("Example")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("name")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("(string)")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("“my-api”")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("应用名字，默认是脚本文件名，不带后缀")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("script")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("(string)")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("”./api/app.js”")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("pm2 start命令执行的脚本路径")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("cwd")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("(string)")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("“/var/www/”")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("应用启动的目录")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("args")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("(string)")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("“-a 13 -b 12”")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("以字符串形式传给脚本所需的参数")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("interpreter")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("(string)")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("“/usr/bin/python”")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("解释器的绝对路径，即用来指定执行程序的解释器，默认是node")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("interpreter_args")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("(string)")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("”–harmony”")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("传递给解释器的参数，比如解释器是node，可以通过它在node执行传递一些参数")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("node_args")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("(string)")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}}),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("interpreter_args选项的别名")])])])]),t._v(" "),e("h3",{attrs:{id:"高级功能"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#高级功能"}},[t._v("#")]),t._v(" 高级功能")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("Field")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("Example")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("instances")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("number（设为max可以吗）")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("-1（设置-1什么效果）")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("启动时应用实例的数量")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("exec_mode")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("“cluster”")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("启动应用的模式, 有两种：cluster和fork，默认是fork")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("watch")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("boolean or []")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("true")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("启用监测和重启功能，如果目录或子目录中的文件发生更改，应用程序将重新加载")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("ignore_watch")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("list")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("[”[/\\]./”, “node_modules”]")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("list of regex to ignore some file or folder names by the watch feature")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("max_memory_restart")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("“150M”")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("如果超过指定的内存大小，应用程序将重新启动。它的格式可读性高：可以是“10M”、“100K”、“2G”等等")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("env")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("object")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("{“NODE_ENV”: “development”, “ID”: “42”}")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("定义在应用中使用到的环境变量")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("env_")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("object")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("{“NODE_ENV”: “production”, “ID”: “89”}")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("当执行"),e("code",[t._v("pm2 restart app.yml --env")]),t._v("时会注入指定的环境的变量")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("source_map_support")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("boolean")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("true")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("默认为tue，启用和禁用source map文件")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("instance_var")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("“NODE_APP_INSTANCE”")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("用来设置NODE_APP_INSTANCE的别名。详见"),e("a",{attrs:{href:"http://pm2.keymetrics.io/docs/usage/environment/#specific-environment-variables",target:"_blank",rel:"noopener noreferrer"}},[t._v("环境变量文档"),e("OutboundLink")],1)])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("filter_env")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("array of string")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("[ “REACT_” ]")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("排除以“REACT_u2;”开头的全局变量，不允许它们渗透到集群中")])])])]),t._v(" "),e("h3",{attrs:{id:"日志文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#日志文件"}},[t._v("#")]),t._v(" 日志文件")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("Field")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("Example")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("log_date_format")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("(string)")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("“YYYY-MM-DD HH:mm Z”")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("日志日期格式（见日志部分）")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("error_file")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("(string)")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}}),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("错误日志路径（默认为 $HOME/.pm2/logs/XXXerr.log）")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("out_file")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("(string)")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}}),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("输出日志路径（默认为 $HOME/.pm2/logs/XXXout.log）")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("combine_logs")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("boolean")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("true")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("默认为false，设置为true后，所有进程的日志会合并到一个日志文件中。")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("merge_logs")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("boolean")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("true")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("combine_logs的别名")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("pid_file")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("(string)")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}}),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("pid 文件路径（默认为 $HOME/.pm2/pid/app-pm_id.pid）")])])])]),t._v(" "),e("h3",{attrs:{id:"control-flow-控制流"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#control-flow-控制流"}},[t._v("#")]),t._v(" Control flow 控制流")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("Field")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("Example")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("min_uptime")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("(string)")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}}),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("min uptime of the app to be considered started")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("listen_timeout")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("number")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("8000")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("time in ms before forcing a reload if app not listening")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("kill_timeout")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("number")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("1600")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("time in milliseconds before sending "),e("a",{attrs:{href:"http://pm2.keymetrics.io/docs/usage/signals-clean-restart/#cleaning-states-and-jobs",target:"_blank",rel:"noopener noreferrer"}},[t._v("a final SIGKILL"),e("OutboundLink")],1)])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("shutdown_with_message")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("boolean")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("false")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("通过"),e("code",[t._v("process.send(‘shutdown’)")]),t._v("关闭进程，而不是"),e("code",[t._v("process.kill(pid, SIGINT)")])])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("wait_ready")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("boolean")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("false")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Instead of reload waiting for listen event, wait for process.send(‘ready’)")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("max_restarts")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("number")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("10")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("在您的应用被视为错误并停止重新启动之前，连续不稳定的重新启动次数（小于1秒的间隔或通过min_uptime定制的时间）")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("restart_delay")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("number")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("4000")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("重启崩溃的应用之前的等待时间（以毫秒为单位）。默认值为0。")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("autorestart")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("boolean")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("false")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("默认值为true。如果为false，当应用崩溃或者自动退出后PM2将不会重启应用。")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("cron_restart")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("“1 0 * * *”")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("通过cron表达式设置应用重启的时间。应用必须保持运行的状态，才能使cron功能正常工作。")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("vizion")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("boolean")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("false")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("默认为true。设为false, PM2 will start without vizion features (versioning control metadatas)")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("post_update")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("list")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("[“npm install”, “echo launching the app”]")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("a list of commands which will be executed after you perform a Pull/Upgrade operation from Keymetrics dashboard")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("force")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("boolean")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("true")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("默认为false。如果为true，则可以多次启动同一脚本，这通常是PM2不允许的")])])])]),t._v(" "),e("h3",{attrs:{id:"部署"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#部署"}},[t._v("#")]),t._v(" 部署")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Entry name")]),t._v(" "),e("th",[t._v("Description")]),t._v(" "),e("th",[t._v("Type")]),t._v(" "),e("th",[t._v("Default")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("key")]),t._v(" "),e("td",[t._v("SSH key 路径，远程仓库通过保存的ssh公钥和此地址的私钥进行验证")]),t._v(" "),e("td",[t._v("String")]),t._v(" "),e("td",[t._v("$HOME/.ssh")])]),t._v(" "),e("tr",[e("td",[t._v("user")]),t._v(" "),e("td",[t._v("SSH 用户名，即服务器的用户名")]),t._v(" "),e("td",[t._v("String")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("host")]),t._v(" "),e("td",[t._v("SSH 主机地址")]),t._v(" "),e("td",[t._v("[String]")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("ssh_options")]),t._v(" "),e("td",[t._v("SSH options with no command-line flag, see ‘man ssh’")]),t._v(" "),e("td",[t._v("String or [String]")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("ref")]),t._v(" "),e("td",[t._v("GIT remote/branch，要拉取的git分支")]),t._v(" "),e("td",[t._v("String")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("repo")]),t._v(" "),e("td",[t._v("GIT 远程仓库地址")]),t._v(" "),e("td",[t._v("String")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("path")]),t._v(" "),e("td",[t._v("服务器上的文件路径，即将文件拉取到服务器某个目录下")]),t._v(" "),e("td",[t._v("String")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("pre-setup")]),t._v(" "),e("td",[t._v("Pre-setup command or path to a script on your local machine")]),t._v(" "),e("td",[t._v("String")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("post-setup")]),t._v(" "),e("td",[t._v("Post-setup commands or path to a script on the host machine")]),t._v(" "),e("td",[t._v("String")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("pre-deploy-local")]),t._v(" "),e("td",[t._v("部署前的操作")]),t._v(" "),e("td",[t._v("String")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("post-deploy")]),t._v(" "),e("td",[t._v("完成部署后的操作")]),t._v(" "),e("td",[t._v("String")]),t._v(" "),e("td")])])]),t._v(" "),e("h3",{attrs:{id:"注意"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#注意"}},[t._v("#")]),t._v(" 注意")]),t._v(" "),e("p",[t._v("使用JSON应用程序声明时，通过命令行传递的所有选项都会被忽略。")]),t._v(" "),e("h4",{attrs:{id:"cwd"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cwd"}},[t._v("#")]),t._v(" CWD")]),t._v(" "),e("p",[t._v("**cwd：**JSON声明不需要与脚本一起驻留。如果您希望在脚本之外的位置（比如"),e("code",[t._v("/etc/pm2/conf.d/node-app.JSON")]),t._v("）维护JSON，则需要使用"),e("code",[t._v("cwd")]),t._v("功能（注意，这对使用符号链接的capistrano风格的目录结构非常有用）。文件可以是相对于"),e("code",[t._v("cwd")]),t._v("目录的，也可以是绝对路径（参见下面的示例）。")])])}),[],!1,null,null,null);e.default=n.exports}}]);