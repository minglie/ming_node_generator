package ${context.entity.packageStr};

import io.swagger.annotations.ApiModelProperty;

import java.io.Serializable;
${entity_importStr}


/**
 * @author WangPengFei
 * @date ${time}
 */

public class ${entityClassName} implements Serializable {

    private static final long serialVersionUID = 1L;
    ${propertiesStr}
    ${methodStr}
}