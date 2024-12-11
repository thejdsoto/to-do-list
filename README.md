# To-Do List App

A modern and minimalistic To-Do List application that helps users organize their tasks efficiently. This project is part of [The Odin Project](https://www.theodinproject.com/) curriculum and demonstrates skills in JavaScript, Object-Oriented Programming (OOP), and the SOLID principles.

---

## Features

- **Project Management**: Create, view, and manage separate lists of tasks by projects.
- **Task Management**: Add, edit, delete, and view detailed information for each task.
- **Responsive Design**: Optimized for both desktop and mobile users.
- **Minimalistic UI**: Clean and simple design for better focus and usability.
- **SOLID Implementation**: Ensures scalable and maintainable code structure.

---

## Technologies Used

- **HTML5**
- **CSS3**
  - Flexbox for layout
  - Media queries for responsive design
- **JavaScript (ES6)**
  - Classes for implementing OOP
  - Modules for better code structure
  - SOLID principles for clean, maintainable code
- **Optional Enhancements**: 
  - LocalStorage for saving tasks persistently (if implemented)
  - CSS animations for smoother interactions

---

## SOLID Principles Implementation

1. **Single Responsibility Principle (SRP)**:  
   Each class or module has a single, clear purpose:
   - `Project` class handles project-related data and actions.
   - `Task` class manages individual task details.
   - `UIController` handles DOM interactions.

2. **Open/Closed Principle (OCP)**:  
   The code is open for extension but closed for modification:
   - New features (e.g., priorities or reminders) can be added by extending existing classes or modules without altering them.

3. **Liskov Substitution Principle (LSP)**:  
   Derived classes or modules can replace their base counterparts:
   - For example, a specialized `RecurringTask` class can extend the `Task` class without breaking existing functionality.

4. **Interface Segregation Principle (ISP)**:  
   The code avoids large, monolithic interfaces:
   - Each class or module interacts only with methods it needs (e.g., `UIController` only handles DOM-related tasks).

5. **Dependency Inversion Principle (DIP)**:  
   High-level modules don’t depend on low-level modules:
   - Abstract interfaces are used for dependency management, ensuring the app remains decoupled and testable.

---

## Object-Oriented Programming (OOP)

The application uses OOP concepts to structure the code:

- **Encapsulation**:  
  - Properties and methods are encapsulated within classes such as `Project` and `Task`. Public methods allow controlled access to private data.
- **Inheritance**:  
  - Specialized classes like `RecurringTask` or `PriorityTask` inherit from a base `Task` class, promoting code reuse.
- **Polymorphism**:  
  - Common methods like `markComplete` can be overridden in derived classes to handle specific behavior.
- **Abstraction**:  
  - Abstract classes or interfaces define common behavior for different task types.

---