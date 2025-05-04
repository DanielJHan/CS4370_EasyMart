package com.example.demo.Controllers;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.GetMapping;

import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.Connection;
//import java.sql.SQLException;
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
        String[][] products = null;

        try (Connection connection = DriverManager.getConnection(DB_URL, DB_USERNAME, DB_PASSWORD)) {
            // Use a prepared statement to fetch all products
            String query = "SELECT product_id, product_pic, model, price FROM product;";
            try (PreparedStatement preparedStatement = connection.prepareStatement(query, ResultSet.TYPE_SCROLL_INSENSITIVE, ResultSet.CONCUR_READ_ONLY)) {
                ResultSet resultSet = preparedStatement.executeQuery();

                resultSet.last();
                int rowCount = resultSet.getRow();
                resultSet.beforeFirst(); // Move the cursor back to the start

                products = new String[rowCount][4]; // 4 columns: product_id, product_pic, model, price

                int i = 0;
                while (resultSet.next()) {
                    products[i][0] = String.valueOf(resultSet.getInt("product_id"));
                    products[i][1] = resultSet.getString("product_pic");
                    products[i][2] = resultSet.getString("model");
                    products[i][3] = String.valueOf(resultSet.getDouble("price"));
                    i++;
                }
            }
        } catch (Exception e) {
            System.out.println("Error when trying to retrieve products: " + e.getMessage());
            return new String[][]{{"Error when trying to retrieve products: " + e.getMessage()}};
        }

        return products;
    }

}
