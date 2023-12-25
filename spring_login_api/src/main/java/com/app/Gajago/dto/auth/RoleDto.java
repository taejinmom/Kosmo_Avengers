package com.app.Gajago.dto.auth;

//  권한 DTO
public enum RoleDto {
    USER("0"),    ADMIN("0");
    private String value;
    RoleDto(String value){
        this.value = value;
    }
    public String getValue() {
        return this.value;
    }
}
