var context=require("./context.js");
var M=require("ming_node");
/**
 *通过表名生成各种文件
 */
function genarateFile(table){
    tableName=table.tableName;
    entityClassName=context.getEntityClassNameByTableName(table.tableName);
    entityDesc=context.getEntityDescsByTableName(table.tableName);
    time=new Date().format("yyyy-MM-dd");
    entity_importStr="";
    entity_importStrArray=[];
    propertiesStr="";//属性字符串
    methodStr="";//方法字符串
    mapper_baseColumn="";
    mapper_resultMap="";
    insertIfProps="";
    batchInsertIfProps=""
    updateColProps="";
    //首字母小写
    entityClassName1=entityClassName.firstChartoLower();
///////////////////////////////////////////////////////////////////////////
    table.tableInfo.forEach(
        (u,index)=>{
          javaType=context.getJavaTypeBySqlType(u.column_type);
          jdbcType=context.getJdbcTypeBySqlType(u.column_type);
          if(javaType=="Date"){
              if(entity_importStrArray.indexOf("import java.util.Date;\n")<0){
                  entity_importStrArray.push("import java.util.Date;\n");
              }
          }
          propertiesStr+=
`   
    @ApiModelProperty(value="${u.column_comment}")
    private ${javaType} ${u.column_name.underlineToHump()};`;

          methodStr+=`
    public ${javaType} get${u.column_name.firstChartoUpper().underlineToHump()}(){return ${u.column_name.underlineToHump()};}                  
    public void set${u.column_name.firstChartoUpper().underlineToHump()}(${javaType} ${u.column_name.underlineToHump()}){this.${u.column_name.underlineToHump()}=${u.column_name.underlineToHump()};}                                   
`;
         mapper_resultMap+=`
        <result column="${u.column_name}" jdbcType="${jdbcType}" property="${u.column_name.underlineToHump()}"/>`;

         mapper_baseColumn+=u.column_name;
         if(index!=table.tableInfo.length-1){
             mapper_baseColumn+=",";
         }
         if(u.column_name.underlineToHump()=="id"){
             insertIfProps += `
             null,`;
             if(index==table.tableInfo.length-1){
                 insertIfProps=insertIfProps.substr(0,insertIfProps.lastIndexOf(","));
             }

             batchInsertIfProps += `
             null,`;
             if(index==table.tableInfo.length-1){
                 batchInsertIfProps=batchInsertIfProps.substr(0,batchInsertIfProps.lastIndexOf(","));
             }
         }else {


             insertIfProps += `
         #{${u.column_name.underlineToHump()},jdbcType=${jdbcType}},`;

             if(index==table.tableInfo.length-1){
                 insertIfProps=insertIfProps.substr(0,insertIfProps.lastIndexOf(","));
             }


             batchInsertIfProps += `
             #{${entityClassName1}.${u.column_name.underlineToHump()},jdbcType=${jdbcType}},`;

                 if(index==table.tableInfo.length-1){
                     batchInsertIfProps=batchInsertIfProps.substr(0,batchInsertIfProps.lastIndexOf(","));
                 }

         }
          if(u.column_name !="id"){
              updateColProps+=`
                 ${u.column_name}=#{${u.column_name.underlineToHump()},jdbcType=${jdbcType}},`
          }
          if(index==table.tableInfo.length-1){
              updateColProps=updateColProps.substr(0,updateColProps.lastIndexOf(","));
           }
        }
    )
    //去除重复导入的包,合并字符串
    entity_importStr=entity_importStrArray.filter((element,index,self)=>self.indexOf(element) === index).join("");

    M.writeFile(context.entity.sava_path+"/"+entityClassName+".java",M.template(M.readFile(context.entity.template_path)));
    M.log(`生成entity文件-->`+entityClassName+".java");

    M.writeFile(context.dao.sava_path+"/"+entityClassName+"Mapper.java",M.template(M.readFile(context.dao.template_path)));
    M.log(`生成dao文件-->`+entityClassName+"Mapper.java");

    M.writeFile(context.mapper.sava_path+"/"+entityClassName+"Mapper.xml",M.template(M.readFile(context.mapper.template_path)));
    M.log(`生成mapper文件-->`+entityClassName+"Mapper.xml");

    M.writeFile(context.service.sava_path+"/"+entityClassName+"Service.java",M.template(M.readFile(context.service.template_path)));
    M.log(`生成service文件-->`+entityClassName+"Service.java");

    M.writeFile(context.serviceImpl.sava_path+"/"+entityClassName+"ServiceImpl.java",M.template(M.readFile(context.serviceImpl.template_path)));
    M.log(`生成serviceImpl文件-->`+entityClassName+"ServiceImpl.java");

    M.writeFile(context.controller.sava_path+"/"+entityClassName+"Controller.java",M.template(M.readFile(context.controller.template_path)));
    M.log(`生成controller文件-->`+entityClassName+"Controller.java");

    M.writeFile(context.controllerJs.sava_path+"/"+entityClassName+"Controller.js",M.template(M.readFile(context.controllerJs.template_path)));
    M.log(`生成controllerJs文件-->`+entityClassName+"Controller.js");
}

async function main() {
    //拷贝公共文件
    M.copyDir("../../../templates/default/common",context.sava_path);
    setTimeout(async()=>{
        M.writeFile(context.applicationProperties.sava_path+"/application.properties",M.template(M.readFile(context.applicationProperties.template_path)));
        M.log("生成application.properties文件");
        tableList=await context.getTableList();
        for (let i=0;i<tableList.length;i++){
            genarateFile(tableList[i]);
        }
        M.log(`项目生产完毕...!,请在  ${context.sava_path} 执行 mvn  spring-boot:run  命令运行查看`);
    }, 2000);
}



main();



















