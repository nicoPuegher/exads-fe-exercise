# Interactive Landing Page Exercise

This project is designed to create interactive landing pages for internal projects at Exogroup. The landing page enables users to complete a brief questionnaire and redirects them to a specific webpage based on their responses.

The objective of this exercise is to replicate the behavior outlined in the provided mockups and prototypes into an interactive web application.

## Key Evaluation Criteria

1. **Feature Implementation and UI/UX Quality**
   - Accurate implementation of all required features.
   - User-friendly design and smooth interactions.

2. **Technology and Tools**
   - Appropriate selection and use of tools and technologies.

3. **Code Quality**
   - Adherence to clean coding practices.
   - Readable, maintainable, and reusable code.

4. **Flexibility, Maintainability, Performance, and Scalability**
   - Ensure the application is scalable and performant.
   - Design for future extensibility and maintainability.

## Requirements

The landing page must:

- Allow user interactions to follow the provided Figma mockups and prototype:
  - **Figma File:** Bootcamp FE Candidate Exercise Mockups
  - **Figma Prototype:** Bootcamp FE Candidate Exercise Prototype
  - **Example Video:** Bootcamp FE Candidate Exercise Video
- Enable dynamic options in the questionnaire:
  - Answers to previous questions must determine the options available in subsequent questions.
  - For example:
    - Selecting **"The Gray Man"** in question 1 will show **"Top Gun: Maverick"**, **"Bullet Train"**, and **"Thor: Love and Thunder"** in question 2.
    - Selecting **"Blonde"** in question 1 will show **"Purple Hearts"**, **"Black Panther: Wakanda Forever"**, and **"The Godfather"** in question 2.
- Redirect the user to the corresponding IMDB page for the last chosen movie when clicking the **"Watch here!"** button on the final page.

**Note:** The final list of movies can be customized.

## How to Run the Project

1. Clone the repository:
   ```bash
   git clone https://github.com/nicoPuegher/exads-fe-exercise
   cd exads-fe-exercise
   ```
2. Install dependencies:
```bash
    npm install
```
3. Start development server:
```bash
    npm run dev
```
4. Open your browser and navigate to:
http://localhost:3000
