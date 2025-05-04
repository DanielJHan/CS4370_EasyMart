package com.example.demo.Controllers;

import org.springframework.web.bind.annotation.*;
import java.sql.*;
import java.util.Map;


@RestController
@RequestMapping("/review")

//this is how the fetch req should be send: ex GET http://localhost:8080/review/getReview?product_id=1
// Controller for fetching reviews and calculating the average rating
public class ReviewController {
    private static final String DB_URL = "jdbc:mysql://localhost:33306/cs4370_easymart";
    private static final String DB_USERNAME = "root";
    private static final String DB_PASSWORD = "mysqlpass";

    @GetMapping("/getReview")
    public double getReviews(@RequestBody Map<String, Object> requestData) {
        double averageRating = 0.0;
        int productId = (int) requestData.get("product_id");

        try (Connection connection = DriverManager.getConnection(DB_URL, DB_USERNAME, DB_PASSWORD)) {
            // Query to fetch all ratings for the given product ID
            String query = "SELECT AVG(rating) AS average_rating FROM review WHERE product_id = ?";
            try (PreparedStatement preparedStatement = connection.prepareStatement(query)) {
                preparedStatement.setInt(1, productId);

                try (ResultSet resultSet = preparedStatement.executeQuery()) {
                    if (resultSet.next()) {
                        averageRating = resultSet.getDouble("average_rating");
                    }
                }
            }
        } catch (SQLException e) {
            System.out.println("SQL Error: " + e.getMessage());
            // Return 0.0 in case of an error
            return 0.0;
        }

        // Return the average rating
        return averageRating;
    }
}