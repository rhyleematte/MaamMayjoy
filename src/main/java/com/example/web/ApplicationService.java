package com.example.web;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

/**
 * ApplicationService provides general application utilities and business logic
 */
public class ApplicationService {
    
    /**
     * Get application information
     * @return Application info string
     */
    public String getAppInfo() {
        return "My Web Application v1.0 - Built with HTML, CSS, and Java";
    }
    
    /**
     * Get current server time
     * @return Current timestamp
     */
    public String getCurrentTime() {
        LocalDateTime now = LocalDateTime.now();
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
        return now.format(formatter);
    }
    
    /**
     * Process user request
     * @param requestType Type of request
     * @return Processed response
     */
    public String processRequest(String requestType) {
        switch(requestType.toLowerCase()) {
            case "about":
                return "This is a modern web application combining HTML for structure, " +
                       "CSS for styling, and Java for backend processing.";
            case "services":
                return "We offer Web Design, Backend Development, and Full Stack solutions.";
            case "contact":
                return "Please fill out the contact form to get in touch with us.";
            default:
                return "Request type not recognized.";
        }
    }
    
    /**
     * Validate user data
     * @param userData User input data
     * @return true if data is valid
     */
    public boolean validateUserData(String userData) {
        return userData != null && !userData.trim().isEmpty() && userData.length() <= 1000;
    }
}
