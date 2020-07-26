package ${context.serviceImpl.packageStr};

import ${context.service.packageStr}.${entityClassName}Service;
import ${context.entity.packageStr}.${entityClassName};
import ${context.dao.packageStr}.${entityClassName}Mapper;
import com.ming.utils.Page;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * @author WangPengFei
 * @date ${time}
 */
@Service
public class  ${entityClassName}ServiceImpl  implements ${entityClassName}Service{

     @Autowired
     private ${entityClassName}Mapper ${entityClassName1}Mapper;


     @Override
     public ${entityClassName} insert(${entityClassName} ${entityClassName1}) {
        Integer insert = ${entityClassName1}Mapper.insert(${entityClassName1});
         if(insert==0) {
             return null;
         } else {
             return ${entityClassName1};
         }
     }


     @Override
     public Integer update(${entityClassName} ${entityClassName1}) {
        return ${entityClassName1}Mapper.update(${entityClassName1});
     }


     @Override
     public Integer delete(Integer id) {
        return ${entityClassName1}Mapper.delete(id);
     }


    @Override
    public List<${entityClassName}> listAll(${entityClassName} ${entityClassName1}) {
        return ${entityClassName1}Mapper.listAll(${entityClassName1});
    }


    @Override
    public ${entityClassName} getById(Integer id) {
        return ${entityClassName1}Mapper.getById(id);
    }


    @Override
    public Map listByPage(${entityClassName} ${entityClassName1}, Page page) {
        int totalCount=${entityClassName1}Mapper.count(${entityClassName1});
        page.setTotalCount(totalCount);
        List<${entityClassName}> ${entityClassName1}List = ${entityClassName1}Mapper.listByPage(${entityClassName1}, page);
        Map map=new HashMap();
        map.put("rows", ${entityClassName1}List);
        map.put("total", totalCount);
        return map;
    }

    @Override
    public Integer deleteAllByIds(Integer[] ids){
         return ${entityClassName1}Mapper.deleteAllByIds(ids);
    }

}