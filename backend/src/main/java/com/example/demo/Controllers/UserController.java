package com.example.demo.Controllers;

import java.util.Map;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.sql.DriverManager;
import java.sql.Connection;
import java.sql.SQLException;
import java.sql.ResultSet;
import java.sql.Statement;


//TODO: ADD A DELETE ACCOUNT THINGIE, GIVEN USERNAME AND PASSWORD, DELETE ACCOUNT FROM DB
@RestController
@RequestMapping("/user")
public class UserController {

    private static final String DB_URL = "jdbc:mysql://localhost:33306/cs4370_easymart";
    private static final String DB_USERNAME = "root";
    private static final String DB_PASSWORD = "mysqlpass";

    // Signup route
    @PostMapping("/signup")
    public String signup(@RequestBody Map<String, Object> userData) {
        // Logic for user signup (e.g., save user to database)
        //so first we actually need to get information from the userData
        String username = (String) userData.get("username");
        //DONE THE PASSWORD HAS BEEN HASHED
        String password = (String) userData.get("password");
        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        String hashedPassword = passwordEncoder.encode(password);
        System.out.println("Username: " + username + ", Hashed Password: " + hashedPassword);
        //now we need to insert into the db
        try (Connection connection = DriverManager.getConnection(DB_URL, DB_USERNAME, DB_PASSWORD)) {
            //create a statemetn obj
            try (Statement statement = connection.createStatement()) {
                //now it is time for ze query 
                //basically we are inserting the values in the db and make sure to use the hashedPass
                String signupQuery = "INSERT INTO user (username, password) " + "VALUES ('" + username + ", '" + hashedPassword + "');";
                //now itsa time to execute ze query and stuff
                //a clever way to tell if it is successful to get rowsAffected. if it is 1, then we good, else we no good
                int rowsAffected = statement.executeUpdate(signupQuery);
                if (rowsAffected > 1) {
                    System.out.println("The user has signed up successfully!");
                    return "Signup was successful";
                } else {
                    System.out.println("The user was not able to signup successfully!");
                    return "Signup was not successful";
                }
            } catch (Exception e) {
                System.out.println("Error when making a statement: " + e.getMessage());
            }
        } catch (Exception e) {
            System.out.println("Catching an error when making a connection / signup: "+ e.getMessage());
            return "Error when making a connection / signup: " + e.getMessage();
        }
        return "Signup was successful";
    }

    // Login route
    @PostMapping("/login")
    public boolean login(@RequestBody Map<String, Object> userData) {
        //Maybe it should return a boolean on whether it was successful or not? keeping it as string for now
        //here is ze logica: user sends username und passworden, we hashen ze passworden и check если это прадо

        String username = (String) userData.get("username");
        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        String password = (String) userData.get("password");
        System.out.println("Username: " + username + ", Hashed Password: " + password);
        //now here is the logic for whether it is correct or not using the db query
        //general idea, query for the values if username match in db, then check if the password in that value matches up
        try (Connection connection = DriverManager.getConnection(DB_URL, DB_USERNAME, DB_PASSWORD)) {
            // Create a Statement object
            try (Statement statement = connection.createStatement()) {
                // Execute the query
                String loginQuery = "SELECT password FROM users WHERE username = '" + username + "';";
                try (ResultSet resultSet = statement.executeQuery(loginQuery)) {
                    if (resultSet.next()) {
                        String dbPassword = resultSet.getString("password");
                        if (passwordEncoder.matches(password, dbPassword)) {
                            System.out.println("Login successful for user: " + username);
                            return true;
                        } else {
                            System.out.println("Invalid password for user: " + username);
                            return false;
                        }
                    } else {
                        System.out.println("User not found: " + username);
                        return false;
                    }
                }
            }
        } catch (SQLException e) {
            System.out.println("SQL Error: " + e.getMessage());
            return false;
        }

    }

    @PutMapping("/changePassword")
    public boolean changePassword(@RequestBody Map<String, Object> userData) {
        // Logic for changing the password (e.g., update password in database)
        String username = (String) userData.get("username");
        String newPassword = (String) userData.get("newPassword");
        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        String hashedPassword = passwordEncoder.encode(newPassword);
        System.out.println("Username: " + username + ", New Hashed Password: " + hashedPassword);
        //now we need to update the db with the new password
        try (Connection connection = DriverManager.getConnection(DB_URL, DB_USERNAME, DB_PASSWORD)) {
            // Create a Statement object
            try (Statement statement = connection.createStatement()) {
                // Execute the query
                String changePasswordQuery = "UPDATE users SET password = '" + hashedPassword + "' WHERE username = '" + username + "';";
                int rowsAffected = statement.executeUpdate(changePasswordQuery);
                if (rowsAffected > 0) {
                    System.out.println("Password changed successfully for user: " + username);
                    return true;
                } else {
                    System.out.println("Failed to change password for user: " + username);
                    return false;
                }
            }
        } catch (SQLException e) {
            System.out.println("SQL Error: " + e.getMessage());
            return false;
        }
    }

    @PutMapping("/editprofile")
    public boolean editProfile(@RequestBody Map<String, Object> userData) {
        System.out.println("This is the edit profile endpoint to make sure everything is working");
        //the user will only be able to edit their username
        String username = (String) userData.get("username");
        String newUsername = (String) userData.get("newUsername");
        //now we need to update the db with the new username
        try (Connection connection = DriverManager.getConnection(DB_URL, DB_USERNAME, DB_PASSWORD)) {
            // Create a Statement object
            try (Statement statement = connection.createStatement()) {
                // Execute the query
                String editProfileQuery = "UPDATE users SET username = '" + newUsername + "' WHERE username = '" + username + "';";
                int rowsAffected = statement.executeUpdate(editProfileQuery);
                if (rowsAffected > 0) {
                    System.out.println("Profile updated successfully for user: " + username);
                    return true;
                } else {
                    System.out.println("Failed to update profile for user: " + username);
                    return false;
                }
            }
        } catch (SQLException e) {
            System.out.println("SQL Error: " + e.getMessage());
            return false;
        }
    }

    //Testing out Things
    @PostMapping("/test")
    public String test() {
        System.out.println("This is the test endpoint to make sure of stuff and whatever");
        try (Connection connection = DriverManager.getConnection(DB_URL, DB_USERNAME, DB_PASSWORD)) {
            // Create a Statement object
            try (Statement statement = connection.createStatement()) {
                // Execute the query
                String testQuery = "SELECT NOW();";
                try (ResultSet resultSet = statement.executeQuery(testQuery)) {
                    if (resultSet.next()) {
                        String currentTime = resultSet.getString(1);
                        System.out.println("Current time from database: " + currentTime);
                        return "Database connection successful. Current time: " + currentTime;
                    } else {
                        System.out.println("No results found.");
                    }
                }
            }
        } catch (Exception e) {
            System.out.println("Error: " + e.getMessage());
            return "Test was not successful: " + e.getMessage();
        }
        return "Test was successful, but no data was retrieved.";
    }
}