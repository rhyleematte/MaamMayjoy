# My Web Application

A modern web application built with HTML, CSS, and Java.

## Project Structure

```
src/
├── main/
│   ├── java/com/example/web/
│   │   ├── ContactController.java      # Handles contact form processing
│   │   └── ApplicationService.java     # General application utilities
│   └── webapp/
│       ├── index.html                  # Main HTML page
│       ├── css/
│       │   └── style.css               # Styling and layout
│       └── js/
│           └── script.js               # Client-side interactivity
```

## Technologies Used

- **HTML5**: Semantic markup and page structure
- **CSS3**: Responsive design and styling
- **JavaScript**: Client-side interactivity and form handling
- **Java**: Backend logic and business processing

## Features

- Responsive design for mobile and desktop
- Navigation menu with smooth scrolling
- Hero section with call-to-action
- Service cards with hover effects
- Contact form with validation
- Dynamic content processing with Java backend

## Getting Started

### For Frontend Development
Simply open `src/main/webapp/index.html` in a web browser.

### For Full Stack Development
1. Compile Java classes:
   ```bash
   javac src/main/java/com/example/web/*.java
   ```

2. Deploy to a servlet container (Tomcat, Jetty, etc.) or create servlets that use the Java classes.

## File Descriptions

- **index.html**: Main landing page with sections for home, about, services, and contact
- **style.css**: Responsive stylesheet with modern design patterns
- **script.js**: Smooth scrolling, form handling, and animation effects
- **ContactController.java**: Processes and validates contact form submissions
- **ApplicationService.java**: Provides utility methods and business logic

## Future Enhancements

- Database integration for contact submissions
- User authentication
- Admin dashboard
- Email notification system
- API endpoints for AJAX requests
