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


## Optional task - "4 рекомендації по покращенню affemity.com із вказанням пріоритетів по реалізації цих ідей"
1. Покращення юзер-інтерфейсу (високий пріоритет)
– Змістити блок із запитанням та варіантами відповідей ближче до центру сторінки для кращого візуального балансу на десктоп приладах.
– Відцентрувати текст відповідей всередині карток — це зробить інтерфейс візуально приємнішим і легшим для сприйняття.

2. Уникнення непорозумінь у навігації (високий пріоритет)
– Після етапу “Developing the 2nd Part of Your Plan” необхідно або повністю заблокувати можливість повертатися назад, або, навпаки, чітко дозволити користувачу повернутись до попереднього етапу з повним збереженням вибору.

3. Покращення UX на питаннях з множинною відповіддю (середній пріоритет)
– Для десктопної версії бажано змінити логіку прокрутки: фоновий колір має залишатися статичним, не "стрибати" під час скролу.
– Додати відступ між останнім варіантом відповіді та кнопкою “Continue”, щоб уникнути візуального злипання елементів.

#### 💬 Загалом, сайт Affemity справляє дуже приємне враження — стильний, сучасний, із крутою ідеєю та якісною реалізацією. Ваша робота — це чудовий приклад продуманого цифрового продукту з потенціалом для масштабування 💡🚀
