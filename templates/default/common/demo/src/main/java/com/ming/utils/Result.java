package com.ming.utils;


public class Result<T> {

    private Integer code;
    private String message;
    private T data;

    public Result(MessageEnums m, T data) {
        super();
        this.code = m.getCode();
        this.message = m.getMessage();
        this.data = data;
    }

    public Integer getCode() {
        return code;
    }

    public void setCode(Integer code) {
        this.code = code;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public T getData() {
        return data;
    }

    public void setData(T data) {
        this.data = data;
    }
}