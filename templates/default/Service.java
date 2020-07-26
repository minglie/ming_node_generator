package ${context.service.packageStr};

import ${context.entity.packageStr}.${entityClassName};
import com.ming.utils.Page;
import java.util.List;
import java.util.Map;


/**
 * @author WangPengFei
 * @date ${time}
 */
public interface ${entityClassName}Service {
    /**
     * 添加
     * @param
     * @return
     */
    ${entityClassName} insert(${entityClassName} ${entityClassName1});


    /**
      * 修改
      * @param
      */
    Integer update(${entityClassName} ${entityClassName1});

    /**
     * 删除
     * @param
     */
    Integer delete(Integer id);


    /**
     * 获取所有
     * @param
     */
    List<${entityClassName}> listAll(${entityClassName} ${entityClassName1});


    /**
     * 根据id获取
     * @param
     */
    ${entityClassName} getById(Integer id);


    /**
     * 分页查询
     * @param
     * @param
     * @return
     */
    Map listByPage(${entityClassName} ${entityClassName1},Page page);

    /**
     * 批量删除
     * @param
     * @return
     */
    Integer deleteAllByIds(Integer[] ids);

}