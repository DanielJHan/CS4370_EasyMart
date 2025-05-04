package com.example.demo.Controllers;

import java.sql.DriverManager;
import java.sql.Connection;
import java.sql.SQLException;
import java.sql.ResultSet;
import java.sql.Statement;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/order")
public class OrderController {
    private static final String DB_URL = "jdbc:mysql://localhost:33306/cs4370_easymart";
    private static final String DB_USERNAME = "root";
    private static final String DB_PASSWORD = "mysqlpass";

    //an endpoint to get the order history of a user
    
}
