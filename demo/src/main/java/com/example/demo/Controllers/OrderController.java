package com.example.demo.Controllers;

import java.sql.DriverManager;
import java.sql.Connection;
import java.sql.SQLException;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.Map;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestMethod;


@RestController
@RequestMapping("/order")
public class OrderController {
    private static final String DB_URL = "jdbc:mysql://localhost:33306/cs4370_easymart";
    private static final String DB_USERNAME = "root";
    private static final String DB_PASSWORD = "mysqlpass";

    //an endpoint to get the order history of a user
    @GetMapping("/orders")
    public String[][] getOrders(@RequestBody Map<String, Object> requestData) {
        //goal: get the order history of a user given their user id
        int user_id = (int) requestData.get("user_id");
        //so we need to make sure that our sql query is using a join statement

        try (Connection connection = DriverManager.getConnection(DB_URL, DB_USERNAME, DB_PASSWORD)) {
            try (Statement statement = connection.createStatement()) {
                //given, we get all orders associated with the user id
                String query = "SELECT o.order_id, o.order_date, o.total_amount FROM orders o JOIN users u ON o.user_id = u.user_id WHERE u.user_id = " + user_id + ";";
                ResultSet resultSet = statement.executeQuery(query);

                // Process the result set and store it in a 2D array
                resultSet.last();
                int rowCount = resultSet.getRow();
                resultSet.beforeFirst();

                String[][] orders = new String[rowCount][3];
                int i = 0;
                while (resultSet.next()) {
                    orders[i][0] = resultSet.getString("order_id");
                    orders[i][1] = resultSet.getString("order_date");
                    orders[i][2] = resultSet.getString("total_total");
                    i++;
                }
                return orders;
            } catch (SQLException e) {
                System.out.println("SQL Error: " + e.getMessage());
                return new String[][]{{"SQL Error: " + e.getMessage()}};
            }
        } catch (SQLException e) {
            System.out.println("Connection Error: " + e.getMessage());
            return new String[][]{{"Connection Error: " + e.getMessage()}};
        }
        
    }
}
