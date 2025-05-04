package com.example.demo.Controllers;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.GetMapping;

import java.sql.DriverManager;
import java.sql.Connection;
import java.sql.SQLException;
import java.sql.ResultSet;
import java.sql.Statement;

@RestController
@RequestMapping("/product")
public class ProductController {

    private static final String DB_URL = "jdbc:mysql://localhost:33306/cs4370_easymart";
    private static final String DB_USERNAME = "root";
    private static final String DB_PASSWORD = "mysqlpass";
    //ze main goal is to get the product info

    //get products route (will get all products)
    @GetMapping("/getProducts")
    public String[][] getProducts() {
        //the goal: we start by getting all info about products, and putting it in a 2D array
        //so first we need to connect to the db and make a query
        try (Connection connection = DriverManager.getConnection(DB_URL, DB_USERNAME, DB_PASSWORD)) {
            //now it is time for a statement
            try (Statement statement = connection.createStatement()) {
                //now it time to make ze query yessir
                String query = "SELECT * FROM product;";
                ResultSet resultSet = statement.executeQuery(query);
                //now given this data, we need to put it in an array, not to sure how we want to send the info ngl
                //gonna use a loop for this
                for (int i = 0; resultSet.next(); i++) {
                    //get info and put it in ze array
                    
                    
                }

            } catch (Exception e) {
                System.out.println("Error when making a statement: " + e.getMessage());
                return new String[][]{{"Error when making a statement: " + e.getMessage()}};
            }
        } catch (Exception e) {
            System.out.println("Error when trying to retrieve products: " + e.getMessage());
            return new String[][]{{"Error when trying to retrieve products: " + e.getMessage()}};
        }

        return new String[][]{{"product1", "product2", "product3"}};
    }

}
