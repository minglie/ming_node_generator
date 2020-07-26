package com.ming.utils;


public class Page {

    /**
     * 降序排列类型
     */
    public static final String DESC = "desc";
    /**
     * 升序排列类型
     */
    public static final String ASC = "asc";
    /**
     * 排序字段正则表达式
     */
    public static final String FIELD_MATCHES="[A-Za-z0-9_]+";



    private int startPage=1;


    private int limit=20;


    private int totalCount;


    private String sortField;


    private String sortOrder;



    public int getStartPage() {
        if (startPage <= 0) {
            startPage = 1;
        }
        return startPage;
    }

    public void setStartPage(int startPage) {
        this.startPage = startPage;
    }

    public int getLimit() {
        if (limit <= 0 || limit > 100) {
            limit = 10;
        }
        return limit;
    }

    public void setLimit(int limit) {
        this.limit = limit;
    }

    public int getStart() {
        return (startPage - 1) * limit;
    }


    public int getOffset() {
        return (getLimit());
    }


    public int getTotalCount() {
        return totalCount;
    }

    public void setTotalCount(int totalCount) {
        this.totalCount = totalCount;
    }

    public String getSortField() {
        if(null != sortField && !"".equals(sortField)){
            if(sortField.matches(Page.FIELD_MATCHES)){
                return sortField;
            }
        }
        return null;
    }

    public void setSortField(String sortField) {
        this.sortField = sortField;
    }

    public String getSortOrder() {
        if(sortOrder!=null && !"".equals(sortOrder)){
            if(Page.DESC.equals(sortOrder.toLowerCase()) || Page.ASC.equals(sortOrder.toLowerCase())){
                return sortOrder;
            }
        }
        return "";
    }

    public void setSortOrder(String sortOrder) {
        this.sortOrder = sortOrder;
    }
}