package ${context.dao.packageStr};

import ${context.entity.packageStr}.${entityClassName};
import com.ming.utils.Page;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import java.util.List;


/**
 * @author WangPengFei
 * @date ${time}
 */
@Mapper
public interface ${entityClassName}Mapper{

    /**
     * 添加
     * @param
     * @return
     */
    Integer insert(${entityClassName}  ${entityClassName1});

    /**
     * 批量添加
     * @param
     * @return
     */
    void insertBatch(@Param("${entityClassName1}List") List<${entityClassName}> ${entityClassName1}List);

    /**
     * 修改
     * @param
     * @return
     */
    Integer update(${entityClassName}  ${entityClassName1});

    /**
     * 删除
     * @param
     * @return
     */
    Integer delete(Integer id);


    /**
     * 获取所有
     * @param
     * @return
     */
    List<${entityClassName}> listAll(${entityClassName}  ${entityClassName1});


    /**
     * 根据id获取
     * @param
     * @return
     */
    ${entityClassName} getById(Integer id);


    /**
     * 分页查询
     * @param
     * @param
     * @return
     */
    List<${entityClassName}> listByPage(@Param("${entityClassName1}")${entityClassName}  ${entityClassName1}, @Param("page")Page page);

    /**
     * 根据${entityClassName1}模糊查询个数
     * @param
     * @return
     */
    Integer count(@Param("${entityClassName1}")${entityClassName}  ${entityClassName1});

    /**
     * 批量删除
     * @param
     * @return
     */
    Integer deleteAllByIds(Integer[] ids);

}