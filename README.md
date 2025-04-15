# 💡 Affemity Landing Quiz – React Implementation

This project is a responsive, interactive multi-screen landing page implemented with React. It guides users through a short quiz to personalize their experience, based on a Figma design provided by the Quarks team.

## 🚀 Project Overview
The app consists of four main screens:
1. **Welcome Screen** – the entry point with two user paths (connection VS attraction).
2. **Skills Selection** – renders different sets of options depending on the chosen path.
3. **Email Submission/Login** – includes custom validation for @ and an empty string with throttled input.
4. **Loading Screen** – includes animated progress bars and swiper with users' reviews.

Each screen is rendered based on user input using React Router for smooth navigation between steps.

## 🧩 Key Features

- **Conditional Navigation Flow**
  - Branching logic is implemented based on the user’s first choice.
  - The subsequent “Skills” screen adapts dynamically.

- **Custom Email Validation**
  - Real-time validation with 500ms throttling.
  - Checks for `@` presence and empty field.

- **Loading Screen Animation**
  - Progress bars animate to 50%, pause, and display a modal with a question.
  - After selecting an option, the animation continues to 100%.

- **Testimonial Auto-swiper**
  - Animated carousel with automatic swipe.
  - Seamless loop effect, mobile-friendly.

- **Responsive Design**
  - Layout and typography adapt across screen sizes.
  - All units are based on `rem` for scalable sizing.

## 🛠️ Stack

- **React** (with functional components)
- **React Router DOM** – screen-based navigation
- **SCSS** – styling and responsiveness
- **TypeScript** – types
- **Recharts** - for a chart
- **slick-carousel** - auto-swiper
- **GitHub Pages** – for deployment

## 🌐 Deployment

The app is deployed on GitHub Pages. You can view the live version here:  
👉 **[Live Demo](https://mariagosp.github.io/quarks-test-task/)**