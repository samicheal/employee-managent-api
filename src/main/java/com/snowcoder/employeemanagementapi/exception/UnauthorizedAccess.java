package com.snowcoder.employeemanagementapi.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.UNAUTHORIZED)
public class UnauthorizedAccess extends Exception {
    public UnauthorizedAccess(String message){
        super(message);
    }
}
