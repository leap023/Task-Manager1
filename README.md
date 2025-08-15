* Assignment 3: SQL Task 
  users (id, name, email)
  tasks (id, title, status, updated_at, user_id)
  
  1. Count tasks by status (completed, pending, etc.)
    SELECT status, COUNT(*) AS total_tasks
    FROM tasks
    GROUP BY status;
  2. List users with no assigned tasks
    SELECT u.id, u.name
    FROM users u
    LEFT JOIN tasks t ON u.id = t.user_id
    WHERE t.id IS NULL;
  3. Find the most recently updated task
    SELECT *
    FROM tasks
    ORDER BY updated_at DESC
    LIMIT 1;
  4. Join two tables (e.g., Task and User) to show assignments
    SELECT t.id AS task_id, t.title, t.status, u.name AS assigned_user
    FROM tasks t
    JOIN users u ON t.user_id = u.id;
* Assignment 4: Short Questions
  1. The difference between @Component, @Service, and @Repository :
     + @Component: This is the most generic stereotype annotation in Spring. It marks a class as a Spring-managed component and makes it eligible for auto-                detection during classpath scanning.
     + @Service: A specialization of @Component that indicates the class holds business logic. It's used in the service layer of the application and provides               better semantics about the role of the class.
     + @Repository: A specialization of @Component used for data access layer classes (DAOs). It provides additional benefits like automatic exception translation         from database-specific exceptions to Spring's DataAccessException hierarchy.
     All three create Spring beans, but @Service and @Repository provide better semantic meaning and additional features specific to their layers.
  2. The  Spring Boot auto-configuration
      Spring Boot auto-configuration automatically configures Spring applications based on the dependencies present in the classpath. It works through:

      + @EnableAutoConfiguration: Enables auto-configuration mechanism
      + Conditional annotations: Like @ConditionalOnClass, @ConditionalOnMissingBean that determine when to apply configurations
      + Auto-configuration classes: Located in META-INF/spring.factories files in JAR dependencies
      + Starter dependencies: Provide curated sets of dependencies and auto-configurations
      
      For example, if H2 database is on classpath, Spring Boot automatically configures a DataSource. This reduces boilerplate configuration and follows                  "convention over configuration" principle.
  3. MyBatis is a persistence framework that maps SQL statements to Java methods using XML descriptors or annotations.
    - Key differences from Hibernate:
    MyBatis:

      + SQL-centric approach with full control over SQL queries
      + Lightweight with minimal learning curve
      + Better performance for complex queries
      + Manual SQL optimization
      + Less object-relational mapping features

    Hibernate:

     + ORM framework that maps objects to database tables
     + HQL (Hibernate Query Language) abstraction
     + Automatic SQL generation
     + Advanced features like caching, lazy loading, cascade operations
     + Steeper learning curve but more powerful for complex object relationships
  4. Spring Boot handles dependency injection through:
      IoC Container: Manages object lifecycle and dependencies using ApplicationContext
    - Injection Methods:
      
     + Constructor Injection: Recommended approach, ensures immutable dependencies
     + Setter Injection: Uses setter methods with @Autowired
     + Field Injection: Direct field injection with @Autowired (not recommended)
      
    - Key Annotations:
      
      + @Autowired: Automatic dependency injection
      + @Qualifier: Specifies which bean to inject when multiple candidates exist
      + @Primary: Marks preferred bean when multiple candidates exist
      + @Value: Injects values from properties files
  6. Multiple approaches for securing REST APIs:
    1. Authentication & Authorization:
    
      + JWT (JSON Web Tokens): Stateless token-based authentication
      + OAuth 2.0: Industry-standard authorization framework
      + Basic Authentication: Username/password (over HTTPS only)
    2. Additional Security Measures:

     + HTTPS: Encrypt data in transit
     + Input Validation: Prevent injection attacks
     + Rate Limiting: Prevent DoS attacks
     + CORS Configuration: Control cross-origin requests
     + API Keys: For service-to-service authentication
     + Request/Response Filtering: Log and monitor API usage
     + Data Encryption: Encrypt sensitive data at rest
    4. Best Practices:
  
     + Use strong password policies
     + Implement proper session management
     + Regular security audits and updates
     + Principle of least privilege
     + Error handling without information disclosure
