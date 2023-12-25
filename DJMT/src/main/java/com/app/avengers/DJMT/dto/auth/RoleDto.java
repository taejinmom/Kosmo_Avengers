package com.app.avengers.DJMT.dto.auth;

//  권한 DTO
public enum RoleDto {
    USER("USER"),    ADMIN("ADMIN");
    private String value;
    RoleDto(String value){
        this.value = value;
    }
    public String getValue() {
        return this.value;
    }
}
