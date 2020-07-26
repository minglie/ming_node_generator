
package com.ming.utils;


public enum MessageEnums {


    OPERATION_FAILURE(0, "操作失败"),
    OPERATION_SUCCESS(1, "操作成功");

    private Integer code;

    private String message;
    
    private MessageEnums(Integer code, String message) {
        this.code = code;
        this.message = message;
    }

    public Integer getCode() {
        return code;
    }

    public String getMessage() {
        return message;
    }
}
