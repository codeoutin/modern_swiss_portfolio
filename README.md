<p align="center">
  <img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-markdown-open.svg" width="100" alt="project-logo">
</p>
<p align="center">
    <h1 align="center">PORTFOLIO24</h1>
</p>
<p align="center">
    <em>Empowering innovation with seamless code mastery.</em>
</p>
<p align="center">
	<img src="https://img.shields.io/github/license/codeoutin/portfolio24?style=default&logo=opensourceinitiative&logoColor=white&color=0080ff" alt="license">
	<img src="https://img.shields.io/github/last-commit/codeoutin/portfolio24?style=default&logo=git&logoColor=white&color=0080ff" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/codeoutin/portfolio24?style=default&color=0080ff" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/codeoutin/portfolio24?style=default&color=0080ff" alt="repo-language-count">
<p>
<p align="center">
	<!-- default option, no dependency badges. -->
</p>

<br><!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary><br>

- [ Overview](#-overview)
- [ Features](#-features)
- [ Repository Structure](#-repository-structure)
- [ Modules](#-modules)
- [ Getting Started](#-getting-started)
  - [ Installation](#-installation)
  - [ Usage](#-usage)
  - [ Tests](#-tests)
- [ Project Roadmap](#-project-roadmap)
- [ Contributing](#-contributing)
- [ License](#-license)
- [ Acknowledgments](#-acknowledgments)
</details>
<hr>

##  Overview

Portfolio24 focuses on creating a visually engaging portfolio website using Next.js and React components. It integrates Tailwind CSS for styling consistency and Sentry for error monitoring. Key components like Hero, Experience, and Clients showcase work and testimonials. The project enhances user engagement through interactive elements like MagicButton and FloatingNav, emphasizing a captivating user experience. It also features dynamic background effects and immersive animations for a visually appealing presentation. Portfolio24 aims to provide a seamless platform for showcasing projects and enhancing user interaction.

---

##  Features

|    |   Feature         | Description |
|----|-------------------|---------------------------------------------------------------|
| ⚙️  | **Architecture**  | This project utilizes Next.js with TypeScript for frontend development. It integrates Tailwind CSS for styling consistency and Framer Motion for animations. The Sentry error tracking service is configured for monitoring. It follows a modular component-based architecture for building interactive web experiences. |
| 🔩 | **Code Quality**  | The codebase maintains high quality and adherence to standards. It leverages TypeScript for type safety, ESLint for linting, and PostCSS for styling consistency. The use of modern technologies and best practices ensures a clean and maintainable codebase. |
| 📄 | **Documentation** | The project provides comprehensive documentation for setting up Sentry monitoring, configuring Next.js optimizations, and integrating Tailwind CSS. The documentation guides developers on best practices, error handling strategies, and frontend architecture decisions within the project. |
| 🔌 | **Integrations**  | Key integrations include @sentry/nextjs for error monitoring, @tabler/icons-react for icon management, and next-themes for theming support. These integrations enhance the functionality and user experience of the application. |
| 🧩 | **Modularity**    | The codebase demonstrates high modularity and reusability through component-based development. Components like Hero, Grid, Clients, and RecentProjects are reusable and enhance maintainability. The modular structure facilitates easy scaling and future enhancements. |
| 🧪 | **Testing**       | The project uses TypeScript for type safety and @sentry/nextjs for error monitoring. Testing frameworks like Jest and React Testing Library could further enhance the testing suite. The codebase has potential to incorporate more robust testing strategies. |
| ⚡️  | **Performance**   | The project focuses on efficiency and performance with optimizations for production builds. It uses Next.js optimizations, lazy loading, and efficient rendering techniques. Performance enhancements like code splitting and image optimizations contribute to a smooth user experience. |
| 🛡️ | **Security**      | Security measures include integrating Sentry for error monitoring, which enhances data protection and provides insights for debugging. The project follows best practices for secure coding and utilizes modern security tools to ensure data integrity and access control. |
| 📦 | **Dependencies**  | Key dependencies include react, next, typescript, tailwindcss, and framer-motion among others. These libraries provide essential functionality for frontend development, styling, animations, and error monitoring within the project. |
| ↗️ | **Redirects**  | You can create redirect pages to avoid long URLs. See more at  |

---

##  Repository Structure

```sh
└── portfolio24/
    ├── README.md
    ├── app
    │   ├── api
    │   ├── favicon.ico
    │   ├── global-error.tsx
    │   ├── globals.css
    │   ├── layout.tsx
    │   ├── page.tsx
    │   ├── provider.tsx
    │   ├── robots.txt
    │   └── sentry-example-page
    ├── components
    │   ├── Approach.tsx
    │   ├── Clients.tsx
    │   ├── Experience.tsx
    │   ├── Footer.tsx
    │   ├── Grid.tsx
    │   ├── Hero.tsx
    │   ├── RecentProjects.tsx
    │   └── ui
    ├── data
    │   ├── confetti.json
    │   ├── globe.json
    │   └── index.ts
    ├── instrumentation.ts
    ├── lib
    │   └── utils.ts
    ├── next.config.mjs
    ├── package-lock.json
    ├── package.json
    ├── pages
    │   └── redirects.md
    ├── postcss.config.mjs
    ├── public
    │   ├── arrow.svg
    │   ├── aws.svg
    │   ├── b1.svg
    │   ├── b4.svg
    │   ├── b5.svg
    │   ├── bg.png
    │   ├── butlers.svg
    │   ├── butlersName.svg
    │   ├── c.svg
    │   ├── closed.svg
    │   ├── closedName.svg
    │   ├── confetti.gif
    │   ├── exp1.svg
    │   ├── exp2.svg
    │   ├── exp3.svg
    │   ├── exp4.svg
    │   ├── footer-grid.svg
    │   ├── git.svg
    │   ├── gitlab.svg
    │   ├── grid.svg
    │   ├── h24.svg
    │   ├── h24Name.svg
    │   ├── insta.svg
    │   ├── js.svg
    │   ├── kn.svg
    │   ├── knName.svg
    │   ├── laravel.svg
    │   ├── link.svg
    │   ├── mapbox.svg
    │   ├── mong.svg
    │   ├── next.svg
    │   ├── p1.svg
    │   ├── p2.svg
    │   ├── p3.svg
    │   ├── p4.svg
    │   ├── profile.svg
    │   ├── re.svg
    │   ├── sap.svg
    │   ├── sass.svg
    │   ├── spring.svg
    │   ├── stream.svg
    │   ├── streamName.svg
    │   ├── tail.svg
    │   ├── telekom.svg
    │   ├── telekomName.svg
    │   ├── ts.svg
    │   ├── twit.svg
    │   ├── vue.svg
    │   └── wha.svg
    ├── sentry.client.config.ts
    ├── sentry.edge.config.ts
    ├── sentry.server.config.ts
    ├── tailwind.config.ts
    └── tsconfig.json
```

---

##  Modules

<details closed><summary>.</summary>

| File                                                                                                    | Summary                                                                                                                                                                                                                                                                                                            |
| ---                                                                                                     | ---                                                                                                                                                                                                                                                                                                                |
| [postcss.config.mjs](https://github.com/codeoutin/portfolio24/blob/master/postcss.config.mjs)           | Defines PostCSS configuration for Tailwind CSS integration. Configures PostCSS with Tailwind CSS plugin. Facilitates styling consistency and efficient build processes within the repositorys frontend architecture.                                                                                               |
| [next.config.mjs](https://github.com/codeoutin/portfolio24/blob/master/next.config.mjs)                 | Enables automatic Sentry configuration for Next.js, optimizing source maps and log printing. Facilitates Vercel Cron Monitor instrumentation within the projects architecture.                                                                                                                                     |
| [sentry.server.config.ts](https://github.com/codeoutin/portfolio24/blob/master/sentry.server.config.ts) | Configures the Sentry initialization on the server for handling requests within the Next.js application. Adjusts the sample rate and debug settings, with the option to enable Spotlight for development environments.                                                                                             |
| [sentry.client.config.ts](https://github.com/codeoutin/portfolio24/blob/master/sentry.client.config.ts) | Configures Sentry initialization on the client-side for error monitoring and session replay in the web application. Adjusts sampling rates and integration settings for improved debugging and performance tracking.                                                                                               |
| [tailwind.config.ts](https://github.com/codeoutin/portfolio24/blob/master/tailwind.config.ts)           | Defines Tailwind CSS theme with custom color palette, animations, and utility functions for dynamic backgrounds. Extends container styles and configures content sources. Integrates plugins for animations and color variables.                                                                                   |
| [sentry.edge.config.ts](https://github.com/codeoutin/portfolio24/blob/master/sentry.edge.config.ts)     | Middleware, routes. Initializes Sentry with DSN for error tracking in production and logs useful info. Ensures proper setup locally. Maintains trace sampling control. Reference: Vercel Edge Runtime docs.                                                                                                        |
| [package-lock.json](https://github.com/codeoutin/portfolio24/blob/master/package-lock.json)             | This code file within the repository serves as a crucial component for managing global state and error handling within the web application. It significantly contributes to providing a seamless user experience by handling errors efficiently and maintaining consistent global settings across the application. |
| [package.json](https://github.com/codeoutin/portfolio24/blob/master/package.json)                       | Implements essential scripts and dependencies for building, running, and linting the portfolio site. Manages development server, build process, and linting tasks using Next.js and various React and Three.js libraries.                                                                                          |
| [tsconfig.json](https://github.com/codeoutin/portfolio24/blob/master/tsconfig.json)                     | Configures TypeScript for Next.js project to ensure strict type checking, JSX preservation, and ES module bundling. Utilizes plugins for Next.js and sets up paths for module resolution. Excludes node_modules from compilation and enables incremental compilation for improved performance.                     |
| [instrumentation.ts](https://github.com/codeoutin/portfolio24/blob/master/instrumentation.ts)           | Registers server or edge-specific Sentry configurations based on the runtime environment defined in the parent repository.                                                                                                                                                                                         |

</details>

<details closed><summary>app</summary>

| File                                                                                          | Summary                                                                                                                                                                                                                                                |
| ---                                                                                           | ---                                                                                                                                                                                                                                                    |
| [layout.tsx](https://github.com/codeoutin/portfolio24/blob/master/app/layout.tsx)             | Defines metadata and renders a root layout for the website, setting the page title and description. Integrates Google Fonts, global styles, and a theme switcher. Crucial for maintaining consistent branding and user experience across the platform. |
| [robots.txt](https://github.com/codeoutin/portfolio24/blob/master/app/robots.txt)             | Disallows specific paths, allows general access. Ensures proper indexing and SEO practices by restricting bot access to privacy and legal pages. Crucial for site visibility and compliance within the projects architecture.                          |
| [page.tsx](https://github.com/codeoutin/portfolio24/blob/master/app/page.tsx)                 | Hero, Grid, Clients, RecentProjects, Experience, Approach, and Footer. Exemplifies seamless navigation with FloatingNav and dynamic content.                                                                                                           |
| [globals.css](https://github.com/codeoutin/portfolio24/blob/master/app/globals.css)           | Defines global CSS variables, sets a color palette, and custom styles for light and dark themes. Includes utility classes for headings and gradient backgrounds. Enhances site aesthetics and ensures consistent styling across components.            |
| [global-error.tsx](https://github.com/codeoutin/portfolio24/blob/master/app/global-error.tsx) | Captures and reports errors using Sentry in the apps global error handling. Displays a generic error message utilizing Next.js default error page component for issues without defined status codes.                                                   |
| [provider.tsx](https://github.com/codeoutin/portfolio24/blob/master/app/provider.tsx)         | Enables theming functionality by wrapping children components in a NextThemesProvider, enhancing user experience and customization options within the portfolio24 app.                                                                                 |

</details>

<details closed><summary>components</summary>

| File                                                                                                     | Summary                                                                                                                                                                                                                                                                                         |
| ---                                                                                                      | ---                                                                                                                                                                                                                                                                                             |
| [Hero.tsx](https://github.com/codeoutin/portfolio24/blob/master/components/Hero.tsx)                     | Defines Hero component rendering dynamic content for a portfolio site. Enhances user engagement with animated effects and interactive elements. Supports seamless navigation to showcase work. Contributes to the frontend architecture, prioritizing a captivating user experience.            |
| [Experience.tsx](https://github.com/codeoutin/portfolio24/blob/master/components/Experience.tsx)         | Renders dynamic work experience cards using randomized durations and gradient backgrounds.-Displays details like title and description with corresponding images.-Enhances interactivity and aesthetics with custom styling and grid layout.                                                    |
| [Approach.tsx](https://github.com/codeoutin/portfolio24/blob/master/components/Approach.tsx)             | Collaborate on planning, coding progress updates, and software development and launch. Employs animations and icons for interactive user engagement. Complements portfolio24s visual storytelling and user experience enhancement.                                                              |
| [Grid.tsx](https://github.com/codeoutin/portfolio24/blob/master/components/Grid.tsx)                     | Generates grid section displaying dynamic content based on gridItems data. It utilizes BentoGrid and BentoGridItem components, populating them with title, description, and images. Indirectly contributes to the overall visual presentation and user experience of the portfolio website.     |
| [Footer.tsx](https://github.com/codeoutin/portfolio24/blob/master/components/Footer.tsx)                 | Enhances user engagement by rendering a visually appealing and informative footer section. Encourages interaction through a contact CTA button with an icon, and displays social media links dynamically. Supports the parent repositorys frontend by providing a cohesive user experience.     |
| [Clients.tsx](https://github.com/codeoutin/portfolio24/blob/master/components/Clients.tsx)               | Showcases client testimonials with dynamic card animations, featuring a range of company logos. Implements a visually engaging section for displaying client feedback within the portfolio website.                                                                                             |
| [RecentProjects.tsx](https://github.com/codeoutin/portfolio24/blob/master/components/RecentProjects.tsx) | Showcases recent projects with dynamic content pulled from a data source. Displays project titles, descriptions, images, and related icons in a visually appealing layout. Includes a call-to-action to visit live project sites. Enhances user engagement and navigation within the portfolio. |

</details>

<details closed><summary>lib</summary>

| File                                                                          | Summary                                                                                                                        |
| ---                                                                           | ---                                                                                                                            |
| [utils.ts](https://github.com/codeoutin/portfolio24/blob/master/lib/utils.ts) | Combines CSS class names using Tailwind CSS utility functions for efficient styling in the projects user interface components. |

</details>

<details closed><summary>app.sentry-example-page</summary>

| File                                                                                              | Summary                                                                                                                                                                                                                                                            |
| ---                                                                                               | ---                                                                                                                                                                                                                                                                |
| [page.tsx](https://github.com/codeoutin/portfolio24/blob/master/app/sentry-example-page/page.tsx) | Implements a Sentry example page for Next.js app showcasing error tracking setup. Enables users to simulate errors for testing and guides them to view issues on Sentrys platform. Facilitates understanding and integration through provided documentation links. |

</details>

<details closed><summary>app.(legal)</summary>

| File                                                                                      | Summary                                                                                                                                                                                                  |
| ---                                                                                       | ---                                                                                                                                                                                                      |
| [layout.tsx](https://github.com/codeoutin/portfolio24/blob/master/app/(legal)/layout.tsx) | Enhances app layout with a MagicButton for seamless navigation, prioritizing user experience; incorporates FaLocationArrow for visual appeal. Promotes engagement by offering a Back to Homepage button. |

</details>

<details closed><summary>app.api.sentry-example-api</summary>

| File                                                                                                 | Summary                                                                                                                |
| ---                                                                                                  | ---                                                                                                                    |
| [route.ts](https://github.com/codeoutin/portfolio24/blob/master/app/api/sentry-example-api/route.ts) | Implements a faulty API route within the Sentry example, triggering an intentional error for testing error monitoring. |

</details>

<details closed><summary>app.(legal).datenschutz</summary>

| File                                                                                              | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ---                                                                                               | ---                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| [page.tsx](https://github.com/codeoutin/portfolio24/blob/master/app/(legal)/datenschutz/page.tsx) | The code file `global-error.tsx` in the `app` directory of the `portfolio24` repository plays a crucial role in defining the global error handling strategy for the web application. This file is responsible for rendering a consistent error page layout across the application, ensuring a seamless user experience in case of unexpected errors. By centralizing error handling logic in this file, it helps maintain a unified visual representation of errors and provides a structured way to communicate and address errors encountered throughout the application. This enhances the overall stability and reliability of the application by gracefully managing and displaying errors to users. |

</details>

<details closed><summary>app.(legal).impressum</summary>

| File                                                                                            | Summary                                                                                                      |
| ---                                                                                             | ---                                                                                                          |
| [page.tsx](https://github.com/codeoutin/portfolio24/blob/master/app/(legal)/impressum/page.tsx) | Describes the Impressum page with provider details, contact information, company ID, and social media links. |

</details>

<details closed><summary>components.ui</summary>

| File                                                                                                                  | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ---                                                                                                                   | ---                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| [FloatingNav.tsx](https://github.com/codeoutin/portfolio24/blob/master/components/ui/FloatingNav.tsx)                 | Enables dynamic visibility of a floating navigation bar based on scroll direction. Smoothly animates navigation items and icons. Supports custom styling and link navigation. Enhances user experience by providing easy access to key sections while browsing the website.                                                                                                                                                                                                                 |
| [GradientBg.tsx](https://github.com/codeoutin/portfolio24/blob/master/components/ui/GradientBg.tsx)                   | Enables interactive and animated gradient background effects. Dynamically alters colors based on user cursor movement. Enhances visual appeal and user engagement in components.                                                                                                                                                                                                                                                                                                            |
| [InfiniteMovingCards.tsx](https://github.com/codeoutin/portfolio24/blob/master/components/ui/InfiniteMovingCards.tsx) | Implements an infinite scroll effect for moving cards horizontally. Syncs animation direction and speed. Supports pausing on hover. Dynamically duplicates items for smooth scrolling. Enhances card layout styling with gradients and image adjustments.                                                                                                                                                                                                                                   |
| [BentoGrid.tsx](https://github.com/codeoutin/portfolio24/blob/master/components/ui/BentoGrid.tsx)                     | Implements a responsive grid layout for showcasing portfolio items. Dynamically loads Lottie animations based on environment. Provides interactive grid items with copy-to-clipboard functionality and tech stack lists. Supports custom background gradients and design elements for each portfolio entry.                                                                                                                                                                                 |
| [TextGenerateEffect.tsx](https://github.com/codeoutin/portfolio24/blob/master/components/ui/TextGenerateEffect.tsx)   | Enhances text display with animated word generation using React and Framer Motion. Dynamically renders words with staggered opacity for visual impact in the user interface components of the parent repositorys architecture.                                                                                                                                                                                                                                                              |
| [3d-pin.tsx](https://github.com/codeoutin/portfolio24/blob/master/components/ui/3d-pin.tsx)                           | Creates interactive 3D pins linking to external pages, enhancing user engagement. Implements motion effects for immersive visual experience. Enhances website interactivity and navigation.                                                                                                                                                                                                                                                                                                 |
| [MovingBorders.tsx](https://github.com/codeoutin/portfolio24/blob/master/components/ui/MovingBorders.tsx)             | Implements a dynamic button component with animated moving borders for enhanced visual appeal. The component supports customizable border radius, animations, and styling, enhancing the user interface of the repositorys frontend.                                                                                                                                                                                                                                                        |
| [Globe.tsx](https://github.com/codeoutin/portfolio24/blob/master/components/ui/Globe.tsx)                             | Renders an interactive 3D globe visualization with dynamic arcs and points representing geographic data. Utilizes React Three Fiber for rendering and Three.js for 3D effects. Handles atmospheric effects, lighting, and ring animations.                                                                                                                                                                                                                                                  |
| [GridGlobe.tsx](https://github.com/codeoutin/portfolio24/blob/master/components/ui/GridGlobe.tsx)                     | Portfolio24/components/Hero.tsx`The `Hero.tsx` component in the `components` directory of the `portfolio24` repository serves as a key element in the user interface. It is responsible for showcasing a visually appealing hero section at the top of the webpage, creating a captivating first impression for visitors. By employing engaging graphics and text elements, the `Hero.tsx` component contributes significantly to the overall aesthetic and user experience of the website. |
| [Spotlight.tsx](https://github.com/codeoutin/portfolio24/blob/master/components/ui/Spotlight.tsx)                     | Creates a dynamic SVG spotlight element for UI enhancement. Applies animations and styling for a captivating visual effect. Can be customized with different fill colors. Complements the repositorys frontend components for an engaging user experience.                                                                                                                                                                                                                                  |
| [MagicButton.tsx](https://github.com/codeoutin/portfolio24/blob/master/components/ui/MagicButton.tsx)                 | Enables interactive button creation with dynamic content and styling for the UI components in the portfolio24 repository.                                                                                                                                                                                                                                                                                                                                                                   |
| [CanvasRevealEffect.tsx](https://github.com/codeoutin/portfolio24/blob/master/components/ui/CanvasRevealEffect.tsx)   | Implements a dynamic canvas reveal effect for background visuals using React Three Fiber. Responsible for rendering gradient and dot matrix animations based on customizable parameters like colors, opacities, and animation speed.                                                                                                                                                                                                                                                        |

</details>

<details closed><summary>pages.r</summary>

| File                                                                                      | Summary                                                                                                                                                                                                                          |
| ---                                                                                       | ---                                                                                                                                                                                                                              |
| [geniaro.ts](https://github.com/codeoutin/portfolio24/blob/master/pages/r/geniaro.ts)     | Implements server-side redirect to an external URL for Geniaro AI templates, enhancing user experience.                                                                                                                          |
| [superprof.ts](https://github.com/codeoutin/portfolio24/blob/master/pages/r/superprof.ts) | Implements server-side redirection to an external URL for the Superprof page. Renders a component that is never displayed due to the redirection. This file handles redirect logic effectively within the projects architecture. |

</details>

---

##  Getting Started

**System Requirements:**

* **TypeScript**: `version x.y.z`

###  Installation

<h4>From <code>source</code></h4>

> 1. Clone the portfolio24 repository:
>
> ```console
> $ git clone https://github.com/codeoutin/portfolio24
> ```
>
> 2. Change to the project directory:
> ```console
> $ cd portfolio24
> ```
>
> 3. Install the dependencies:
> ```console
> $ npm install
> ```

###  Usage

<h4>From <code>source</code></h4>

> Run portfolio24 using the command below:
> ```console
> $ npm run build && node dist/main.js
> ```

###  Tests

> Run the test suite using the command below:
> ```console
> $ npm test
> ```

---

##  Project Roadmap

- [X] `► INSERT-TASK-1`
- [ ] `► INSERT-TASK-2`
- [ ] `► ...`

---

##  Contributing

Contributions are welcome! Here are several ways you can contribute:

- **[Report Issues](https://github.com/codeoutin/portfolio24/issues)**: Submit bugs found or log feature requests for the `portfolio24` project.
- **[Submit Pull Requests](https://github.com/codeoutin/portfolio24/blob/main/CONTRIBUTING.md)**: Review open PRs, and submit your own PRs.
- **[Join the Discussions](https://github.com/codeoutin/portfolio24/discussions)**: Share your insights, provide feedback, or ask questions.

<details closed>
<summary>Contributing Guidelines</summary>

1. **Fork the Repository**: Start by forking the project repository to your github account.
2. **Clone Locally**: Clone the forked repository to your local machine using a git client.
   ```sh
   git clone https://github.com/codeoutin/portfolio24
   ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear message describing your updates.
   ```sh
   git commit -m 'Implemented new feature x.'
   ```
6. **Push to github**: Push the changes to your forked repository.
   ```sh
   git push origin new-feature-x
   ```
7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.
8. **Review**: Once your PR is reviewed and approved, it will be merged into the main branch. Congratulations on your contribution!
</details>

<details closed>
<summary>Contributor Graph</summary>
<br>
<p align="center">
   <a href="https://github.com{/codeoutin/portfolio24/}graphs/contributors">
      <img src="https://contrib.rocks/image?repo=codeoutin/portfolio24">
   </a>
</p>
</details>

---

##  License

This project is protected under the [SELECT-A-LICENSE](https://choosealicense.com/licenses) License. For more details, refer to the [LICENSE](https://choosealicense.com/licenses/) file.

---

##  Acknowledgments

- List any resources, contributors, inspiration, etc. here.

[**Return**](#-overview)

---
