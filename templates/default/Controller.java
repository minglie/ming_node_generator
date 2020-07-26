package ${context.controller.packageStr};

import ${context.entity.packageStr}.${entityClassName};
import ${context.service.packageStr}.${entityClassName}Service;

import com.ming.utils.MessageEnums;
import com.ming.utils.Page;
import com.ming.utils.Result;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.Api;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Map;

/**
 * @author WangPengFei
 * @date ${time}
 */
@RestController
@RequestMapping("/${entityClassName1}")
@Api(tags={"${entityDesc}"})
public class ${entityClassName}Controller{

    @Autowired
    private ${entityClassName}Service ${entityClassName1}Service;

    @ApiOperation(value = "查询", notes = "根据Id查询")
    @GetMapping(value = "/getById")
    public Result<${entityClassName}> getById(Integer id) {
        ${entityClassName} ${entityClassName1} =${entityClassName1}Service.getById(id);
        return new Result(MessageEnums.OPERATION_SUCCESS,${entityClassName1}) ;
    }

    @GetMapping(value ="/listAll")
    @ApiOperation(value = "获取所有", notes = "获取所有")
    public Result<List<${entityClassName}>> listAll(${entityClassName} ${entityClassName1}) {
        List<${entityClassName}> ${entityClassName1}s =${entityClassName1}Service.listAll(${entityClassName1});
        return new Result(MessageEnums.OPERATION_SUCCESS,${entityClassName1}s);
    }

    @PostMapping(value = "/add")
    @ApiOperation(value = "添加一个", notes = "添加一个")
    public Result<${entityClassName}> add(${entityClassName} ${entityClassName1}) {
        ${entityClassName} ${entityClassName1}1= ${entityClassName1}Service.insert(${entityClassName1});
        if(${entityClassName1}1==null){
             return new Result(MessageEnums.OPERATION_FAILURE,"添加失败");
        }
        return new Result(MessageEnums.OPERATION_SUCCESS,${entityClassName1}1);
    }

    @PostMapping(value = "/update")
    @ApiOperation(value="更新", notes="更新")
    public Result<String> update(${entityClassName} ${entityClassName1}){

        Integer i = ${entityClassName1}Service.update(${entityClassName1});
        return new Result(MessageEnums.OPERATION_SUCCESS,i);
    }

    @GetMapping(value = "/delete")
    @ApiOperation(value="删除", notes="根据id删除")
    public Result<String> delete(Integer id){
        Integer i =${entityClassName1}Service.delete(id);
        return new Result(MessageEnums.OPERATION_SUCCESS,i);
    }

    @GetMapping(value = "/listByPage")
    @ApiOperation(value="分页查询", notes="分页查询")
    public Result<Map> listByPage(${entityClassName} ${entityClassName1},Page page){
        Map map = ${entityClassName1}Service.listByPage(${entityClassName1}, page);
        return new Result(MessageEnums.OPERATION_SUCCESS,map);
    }

}