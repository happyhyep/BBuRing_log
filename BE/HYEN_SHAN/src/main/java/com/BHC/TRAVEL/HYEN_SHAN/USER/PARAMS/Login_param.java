package com.BHC.TRAVEL.HYEN_SHAN.USER.PARAMS;

public class Login_param {
    String id;
    String pw;

    public Login_param(String id, String pw) {
        this.id = id;
        this.pw = pw;
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
}
