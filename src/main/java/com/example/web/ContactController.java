package com.example.web;

/**
 * ContactController handles contact form submissions
 * This Java class processes requests from the frontend and manages business logic
 */
public class ContactController {
    
    /**
     * Process contact form submission
     * @param name Customer name
     * @param email Customer email
     * @param message Customer message
     * @return Response message
     */
    public String handleContactSubmission(String name, String email, String message) {
        // Validate inputs
        if (name == null || name.trim().isEmpty()) {
            return "Error: Name is required";
        }
        if (email == null || !isValidEmail(email)) {
            return "Error: Valid email is required";
        }
        if (message == null || message.trim().isEmpty()) {
            return "Error: Message is required";
        }
        
        // Process the contact submission
        String response = logContactSubmission(name, email, message);
        
        return response;
    }
    
    /**
     * Validate email format
     * @param email Email address to validate
     * @return true if email is valid
     */
    private boolean isValidEmail(String email) {
        return email.contains("@") && email.contains(".");
    }
    
    /**
     * Log the contact submission
     * @param name Submitter name
     * @param email Submitter email
     * @param message Submitted message
     * @return Success message
     */
    private String logContactSubmission(String name, String email, String message) {
        // In a real application, this would save to a database
        System.out.println("Contact Submission Received:");
        System.out.println("Name: " + name);
        System.out.println("Email: " + email);
        System.out.println("Message: " + message);
        
        return "Thank you " + name + "! Your message has been received.";
    }
    
    /**
     * Get service information
     * @return Array of service descriptions
     */
    public String[] getServices() {
        return new String[] {
            "Web Design - Beautiful and responsive web interfaces",
            "Backend Development - Robust Java-based server solutions",
            "Full Stack - Complete web application development"
        };
    }
}
