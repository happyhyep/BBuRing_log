package com.BHC.TRAVEL.HYEN_SHAN.USER.PARAMS;

import lombok.Builder;

public class Home_param {
    Boolean error;
    String error_message;
    String id;
    String pw;
    String name;
    String nick;


    @Builder
    public Home_param(Boolean error, String error_message, String id, String pw, String name, String nick) {
        this.error = error;
        this.error_message = error_message;
        this.id = id;
        this.pw = pw;
        this.name = name;
        this.nick = nick;
    }

    public Boolean getError() {
        return error;
    }

    public void setError(Boolean error) {
        this.error = error;
    }

    public String getError_message() {
        return error_message;
    }

    public void setError_message(String error_message) {
        this.error_message = error_message;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getPw() {
        return pw;
    }

    public void setPw(String pw) {
        this.pw = pw;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getNick() {
        return nick;
    }

    public void setNick(String nick) {
        this.nick = nick;
    }
}
