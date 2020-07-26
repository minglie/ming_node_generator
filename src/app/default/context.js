var mysql  = require('mysql');
var path=require('path');
var M=require("ming_node");
var applicationConfig=M.getObjByFile(path.join(__dirname, "../../../applicationConfig.json"));
var Db = mysql.createConnection(applicationConfig.myDbconfig);
Db.connect();

context={}
context.applicationConfig=applicationConfig;
//库名
context.database=applicationConfig.myDbconfig.database;
//表名
context.tableNames=applicationConfig.tableNames;
//实体名
context.entityClassNames=applicationConfig.entityClassNames;
//实体描述
context.entityDescs=applicationConfig.entityDescs;

//生成文件所在路径
context.sava_path=applicationConfig.savaPath;

context.base_path=context.sava_path+"demo/src/main/java/com/ming/";

//模板所在路径
context.template_path=applicationConfig.templatePath;
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
//实体配置
context.entity={};
context.entity.template_path=context.template_path+"Entity.java";
context.entity.packageStr="com.ming.dao.model"
context.entity.sava_path=context.base_path+"dao/model";

//dao配置
context.dao={};
context.dao.template_path=context.template_path+"Dao.java";
context.dao.packageStr="com.ming.dao.mapper"
context.dao.sava_path=context.base_path+"dao/mapper";

//mapper配置
context.mapper={};
context.mapper.template_path=context.template_path+"Mapper.xml";
context.mapper.packageStr="com.ming.dao.mapper"
context.mapper.sava_path=context.sava_path+"demo/src/main/resources/mybatis";

//service配置
context.service={};
context.service.template_path=context.template_path+"Service.java";
context.service.packageStr="com.ming.service"
context.service.sava_path=context.base_path+"/service";

//serviceImpl配置
context.serviceImpl={};
context.serviceImpl.template_path=context.template_path+"ServiceImpl.java";
context.serviceImpl.packageStr="com.ming.service.impl";
context.serviceImpl.sava_path=context.base_path+"/service/impl";

//controller配置
context.controller={};
context.controller.template_path=context.template_path+"Controller.java";
context.controller.packageStr="com.ming.controller"
context.controller.sava_path=context.base_path+"/controller";


//controllerJS配置
context.controllerJs={};
context.controllerJs.template_path=context.template_path+"Controller.js";
context.controllerJs.sava_path=context.sava_path+"/demo/src/test/js/controller";


//application.properties文件
context.applicationProperties={};
context.applicationProperties.template_path=context.template_path+"application.properties";
context.applicationProperties.sava_path=context.sava_path+"/demo/src/main/resources";


/**
 * 根据表名获取实体名
 */
context.getEntityClassNameByTableName=function (tableName) {
    return context.entityClassNames[context.tableNames.indexOf(tableName)];
}

/**
 * 根据表名获取实体描述
 */
context.getEntityDescsByTableName=function (tableName) {
    return context.entityDescs[context.tableNames.indexOf(tableName)];
}

/**
 * 根据sql类型获取java类型
 */
context.getJavaTypeBySqlType=function(sqlType) {
    if(sqlType.indexOf("varchar")>=0||sqlType.indexOf("text")>=0){
        return "String";
    }else if(sqlType.indexOf("int")>=0){
        return "Integer";
    }else if(sqlType.indexOf("date")>=0 || sqlType.indexOf("time")>=0){
        return "Date";
    }else if(sqlType.indexOf("float")>=0){
        return "Float";
    }else if(sqlType.indexOf("double")>=0){
        return "Double";
    }else if(sqlType.indexOf("decimal")>=0){
        return "BigDecimal";
    }
    return "Object";
}

/**
 * 根据sql类型获取JDBC类型
 */
context.getJdbcTypeBySqlType=function(sqlType) {
    if(sqlType.indexOf("varchar")>=0||sqlType.indexOf("text")>=0){
        return "VARCHAR";
    }else if(sqlType.indexOf("int")>=0){
        return "BIGINT";
    }else if(sqlType.indexOf("date")>=0 || sqlType.indexOf("time")>=0){
        return "TIMESTAMP";
    }else if(sqlType.indexOf("double")>=0){
        return "Double";
    }else if(sqlType.indexOf("float")>=0){
        return "FLOAT";
    }else if(sqlType.indexOf("decimal")>=0){
        return "DECIMAL";
    }
    return "Object";
}


async function getTableInfoByTableName(tableName){
    var promise = new Promise(function(reslove,reject){
        Db.query(`SELECT column_name,column_type,column_comment FROM information_schema.COLUMNS WHERE TABLE_NAME='${tableName}' and TABLE_SCHEMA='${context.database}'`,
            function (err, result) {
                if(err)console.error(err);

                reslove(result);
            });
    })
    return promise;
}

async function getTableList(){
    tableNameList=context.tableNames;
    tableList=[];
    for (let i=0;i<tableNameList.length;i++) {
        let table={};
        table.tableName=tableNameList[i]
        table.tableInfo=await getTableInfoByTableName(table.tableName);
        tableList.push(table)
    }
    return tableList;
}

if(0)
+async function test(){
    tableList=await getTableList();
    console.log(JSON.stringify(tableList))
}


context.getTableList=getTableList;


/**
 * 创建配置中的文件夹
 */
context.init=function(){
    M.log("新建目录"+context.entity.sava_path);  M.mkdir(context.entity.sava_path);
    M.log("新建目录"+context.dao.sava_path);     M.mkdir(context.dao.sava_path);
    M.log("新建目录"+context.mapper.sava_path);  M.mkdir(context.mapper.sava_path);
    M.log("新建目录"+context.service.sava_path); M.mkdir(context.service.sava_path);
    M.log("新建目录"+context.serviceImpl.sava_path); M.mkdir(context.serviceImpl.sava_path);
    M.log("新建目录"+context.controller.sava_path); M.mkdir(context.controller.sava_path);
    M.log("新建目录"+context.controllerJs.sava_path); M.mkdir(context.controllerJs.sava_path);
    M.log("新建目录"+context.applicationProperties.sava_path); M.mkdir(context.applicationProperties.sava_path);
}

context.init();


module.exports=context;



