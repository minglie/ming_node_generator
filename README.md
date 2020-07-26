# ming_node_generator
使用es6模板字符串,写的自由的代码生成器,非常干净利索


修改applicationConfig.json
文件,运行index.js直接生成可运行的springBoot项目,含测试脚本

```json
{
  "savaPath":"D:/S/", //保存位置
  "templatePath":"D:/G/ming_node_generator/templates/default/", //模版地址
  "myDbconfig":{
    "host"     : "127.0.0.1",
    "user"     : "root",
    "password" : "123456",
    "port"     : "3306",
    "database" : "ming-lie"
  },
  "tableNames":[//表名
    "ming_mysql_mq_config",
    "ming_mysql_mq_message"
  ],
  "entityClassNames":[//实体名
    "MqConfig",
    "MqMessage"
  ],
  "entityDescs":[//实体描述
    "消息配置",
    "消息"
  ]
}
```
