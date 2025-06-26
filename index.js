<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ratnadeep Mishra - Full Stack Developer Portfolio</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        /* Custom styles to ensure font and link colors align precisely with specifications */
        body {
            font-family: sans-serif; /* Fallback to sans-serif as specified */
            background-color: #FFFFFF; /* White background */
            color: #000000; /* Primary text color */
        }
        h1, h2, h3, h4, h5, h6 {
            font-weight: bold;
            letter-spacing: normal;
            line-height: 1.2;
        }
        p {
            font-weight: normal;
            letter-spacing: normal;
            line-height: 1.5;
        }
        /* Custom button styles based on JSON: rounded, medium padding, thin border, hover effect */
        .btn-custom {
            font-weight: 500; /* Medium font weight */
            letter-spacing: 0.5px;
            text-transform: none;
            padding: 1rem 1.5rem; /* Equivalent to 16px padding */
            border: 1px solid black; /* thin solid black border */
            border-radius: 9999px; /* rounded shape */
            background-color: #FFFFFF;
            color: #000000;
            transition: background-color 0.3s, color 0.3s, border-color 0.3s;
        }
        .btn-custom:hover {
            background-color: #f0f0f0; /* Subtle hover effect */
        }
        /* Custom tag styles based on JSON: pill shape, thin border, small padding, small spacing */
        .tag-custom {
            padding: 0.5rem 0.75rem; /* Equivalent to 8px 12px padding */
            border: 1px solid black; /* thin solid black border */
            border-radius: 9999px; /* pill shape */
            background-color: #FFFFFF;
            color: #000000;
            display: inline-block;
            margin-right: 0.5rem; /* Equivalent to 8px spacing */
            margin-bottom: 0.5rem; /* For wrapping tags */
            white-space: nowrap; /* Prevent tags from breaking text */
        }
        /* Custom card styles based on JSON: outlined, medium border radius, medium padding, medium margin */
        .card-custom {
            border: 1px solid black; /* outlined style */
            border-radius: 0.5rem; /* medium border radius (8px) */
            padding: 1rem; /* Equivalent to 16px padding */
            margin: 1rem; /* Equivalent to 16px margin */
        }
        /* Custom link color based on JSON */
        .link-custom {
            color: #0000EE; /* Specific link color */
            text-decoration: none;
        }
        .link-custom:hover {
            text-decoration: underline;
        }
        /* Styles for the profile image based on JSON: rounded-rectangle, thin solid black border */
        .profile-image {
            border-radius: 0.5rem; /* rounded-rectangle shape, using medium border radius from cards */
            border: 1px solid black; /* thin solid black border */
            width: 120px; /* Adjust as needed */
            height: 120px; /* Adjust as needed */
            object-fit: cover; /* Ensures image covers the area without distortion */
        }

        /* Desktop specific margin: applies 200px margin left/right for screens 1024px and wider */
        /* This class will be applied to the outer wrapper */
        @media (min-width: 1024px) {
            .outer-desktop-margin {
                margin-left: 200px;
                margin-right: 200px;
            }
        }
    </style>
</head>
<body class="bg-white text-black font-sans leading-relaxed">
    <div class="outer-desktop-margin">
        <div class="container mx-auto px-4 py-8 md:px-8 lg:px-16">
            <header class="text-left py-8 md:py-16 flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-8">
                <img src="https://i.postimg.cc/Sx9fGnb8/image-1.png" alt="Ratnadeep Mishra Profile" class="profile-image mb-4 sm:mb-0">

                <div>
                    <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold mb-2">Ratnadeep Mishra</h1>
                    <p class="text-xl sm:text-2xl lg:text-3xl font-medium text-gray-800">Full Stack Developer | Problem Solver</p>
                    <p class="text-lg mt-2 text-gray-600">I think. I execute. I code. I make an impact.</p>
                    <p class="text-md mt-1 text-gray-500">Varanasi, Uttar Pradesh, India</p>
                </div>
            </header>

            <section class="py-8 md:py-16 border-t border-gray-300 mt-8">
                <h2 class="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
                <p class="text-lg">
                    As a diligent and innovative Full Stack Developer, I possess a unique blend of technical expertise and a keen eye for problem-solving. My journey in technology has equipped me with the skills to design, develop, and deploy robust web applications from conception to completion. I am particularly passionate about creating intuitive user interfaces and building efficient, scalable backend systems. My experience spans across various modern technologies, enabling me to adapt quickly to new challenges and contribute effectively to agile teams. I am always eager to learn, grow, and deliver solutions that make a tangible impact.
                </p>
            </section>

            <section class="py-8 md:py-16 border-t border-gray-300">
                <h2 class="text-3xl sm:text-4xl font-bold mb-4">Contact & Social Media</h2>
                <div class="flex flex-col space-y-3">
                    <p><strong class="font-semibold">Email:</strong> <a href="mailto:rdmmmut@gmail.com" class="link-custom">rdmmmut@gmail.com</a></p>
                    <p><strong class="font-semibold">LinkedIn:</strong> <a href="https://www.linkedin.com/in/ratnadeep-mishra-32b563288/" target="_blank" rel="noopener noreferrer" class="link-custom">linkedin.com/in/ratnadeep-mishra</a></p>
                    <p><strong class="font-semibold">GitHub:</strong> <a href="https://github.com/RD-MISHRA" target="_blank" rel="noopener noreferrer" class="link-custom">github.com/RD-MISHRA</a></p>
                    <p><strong class="font-semibold">LeetCode:</strong> <a href="https://leetcode.com/u/rd_mishra/" target="_blank" rel="noopener noreferrer" class="link-custom">leetcode.com/u/rd_mishra/</a></p>
                    <p><strong class="font-semibold">Resume:</strong> <a href="https://drive.google.com/file/d/1NV4g45E2JFwpRe-ZoQ5jBh6ynu0oVLvo/view?usp=sharing" target="_blank" rel="noopener noreferrer" class="link-custom">View Resume (Google Drive)</a></p>
                </div>
            </section>

            <section class="py-8 md:py-16 border-t border-gray-300">
                <h2 class="text-3xl sm:text-4xl font-bold mb-4">Professional Experience</h2>
                <div class="space-y-8">
                    <div class="card-custom">
                        <h3 class="text-2xl font-bold mb-2">Tech Mahindra</h3>
                        <p class="text-lg"><strong class="font-semibold">Role:</strong> Associate Software Engineer</p>
                        <p class="text-lg"><strong class="font-semibold">Duration:</strong> September 2024 – Present</p>
                        <p class="text-lg mb-4"><strong class="font-semibold">Location:</strong> Bengaluru</p>
                        <ul class="list-disc list-inside space-y-2 text-md">
                            <li>Part of an agile team working on the e-commerce platform for BORN Group, used by over 100k users monthly.</li>
                            <li>Built and improved over 15 reusable UI components using Vue.js and TypeScript, making the codebase more modular and maintainable.</li>
                            <li>Collaborated closely with backend teams to fix 50+ API integration issues, ensuring smoother data flow across the app.</li>
                            <li>Contributed to 8+ production deployments, handling both feature development and bug fixes throughout UAT and release cycles.</li>
                            <li>Helped reduce UI-related bugs by 40% through performance optimization and ensuring responsive, cross-browser compatible designs.</li>
                        </ul>
                    </div>
                    <div class="card-custom">
                        <h3 class="text-2xl font-bold mb-2">Diittoo Ai</h3>
                        <p class="text-lg"><strong class="font-semibold">Role:</strong> SDE Intern</p>
                        <p class="text-lg"><strong class="font-semibold">Duration:</strong> July 2024 – September</p>
                        <p class="text-lg mb-4"><strong class="font-semibold">Location:</strong> Remote</p>
                        <ul class="list-disc list-inside space-y-2 text-md">
                            <li>Designed, architected, and streamlined a scalable full-stack content engineering platform using React, Node.js, and MongoDB, handling 10,000+ monthly requests with less than 500ms API latency, enabling real-time prompt generation and role-based content workflows.</li>
                            <li>Developed a modular prompt templating system using regex-based placeholders and conditionals, reducing content creation time by 60% by allowing users to define reusable, auto-fillable structures.</li>
                            <li>Integrated OpenAI API for real-time prompt execution, achieving 95% accuracy in AI-generated content with user-controlled parameters, fine-tuned for tone and relevance.</li>
                            <li>Worked on an admin dashboard for managing prompt templates and workflows, improving operational efficiency by 40% and reducing manual review time by 25 hours/month.</li>
                            <li>Implemented secure OAuth 2.0 login (Google/LinkedIn) with role-based access, reducing unauthorized access incidents by 100% and streamlining onboarding with NodeMailer alerts.</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section class="py-8 md:py-16 border-t border-gray-300">
                <h2 class="text-3xl sm:text-4xl font-bold mb-4">Featured Projects</h2>
                <div class="space-y-8">
                    <div class="card-custom">
                        <h3 class="text-2xl font-bold mb-2">ShopWave - Ecommerce Platform</h3>
                        <p class="text-lg"><strong class="font-semibold">Date:</strong> January 2024</p>
                        <p class="text-lg"><strong class="font-semibold">Technologies:</strong> React Js, Node Js, Express Js, MongoDB, Redux</p>
                        <p class="text-lg mb-4"><strong class="font-semibold">Description:</strong></p>
                        <ul class="list-disc list-inside space-y-2 text-md mb-4">
                            <li>Engineered a scalable full-stack e-commerce platform (Flipkart-style) using React, Node.js, and MongoDB, supporting 50+ products with sub-1s load times (Lighthouse-optimized).</li>
                            <li>Implemented real-time item search with debounced API calls, reducing redundant queries by 40% while maintaining 100ms response times.</li>
                            <li>Optimized shopping cart state management using Redux with local storage fallback, achieving 99% session persistence.</li>
                            <li>Deployed Stripe in test mode, successfully processing 50+ mock transactions with 100% accuracy.</li>
                            <li>Led a JWT-authenticated seller portal with Multer + Cloudinary, streamlining 20+ product listings (5MB/image) for seamless inventory management.</li>
                        </ul>
                        <p class="text-lg font-semibold mb-2">Links:</p>
                        <div class="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
                            <a href="https://github.com/RD-MISHRA/Flipkart-clone" target="_blank" rel="noopener noreferrer" class="btn-custom flex-grow text-center">GitHub Link</a>
                            <a href="https://ecombyrd.netlify.app/" target="_blank" rel="noopener noreferrer" class="btn-custom flex-grow text-center">Buyer Website</a>
                            <a href="https://sellerhub-pied.vercel.app/" target="_blank" rel="noopener noreferrer" class="btn-custom flex-grow text-center">Seller Website</a>
                        </div>
                    </div>
                </div>
            </section>

            <section class="py-8 md:py-16 border-t border-gray-300">
                <h2 class="text-3xl sm:text-4xl font-bold mb-4">Technical Toolkit</h2>
                <div class="space-y-6">
                    <div>
                        <h3 class="text-2xl font-bold mb-2">Languages</h3>
                        <div class="flex flex-wrap gap-2">
                            <span class="tag-custom">JAVA</span>
                            <span class="tag-custom">C++</span>
                            <span class="tag-custom">C</span>
                            <span class="tag-custom">HTML</span>
                            <span class="tag-custom">JavaScript</span>
                            <span class="tag-custom">TypeScript</span>
                            <span class="tag-custom">SQL</span>
                            <span class="tag-custom">Python</span>
                        </div>
                    </div>
                    <div>
                        <h3 class="text-2xl font-bold mb-2">Developer Tools</h3>
                        <div class="flex flex-wrap gap-2">
                            <span class="tag-custom">VS Code</span>
                            <span class="tag-custom">IntelliJ IDEA</span>
                            <span class="tag-custom">Eclipse IDE</span>
                            <span class="tag-custom">Postman</span>
                            <span class="tag-custom">GitHub</span>
                        </div>
                    </div>
                    <div>
                        <h3 class="text-2xl font-bold mb-2">Technologies/Frameworks</h3>
                        <div class="flex flex-wrap gap-2">
                            <span class="tag-custom">Spring Boot</span>
                            <span class="tag-custom">Spring</span>
                            <span class="tag-custom">ReactJS</span>
                            <span class="tag-custom">MongoDB</span>
                            <span class="tag-custom">NodeJS</span>
                            <span class="tag-custom">ExpressJS</span>
                            <span class="tag-custom">MySQL</span>
                        </div>
                    </div>
                </div>
            </section>

            <section class="py-8 md:py-16 border-t border-gray-300">
                <h2 class="text-3xl sm:text-4xl font-bold mb-4">Education</h2>
                <div class="space-y-8">
                    <div class="card-custom">
                        <h3 class="text-2xl font-bold mb-2">B.Tech (CSE)</h3>
                        <p class="text-lg"><strong class="font-semibold">Institution:</strong> Madan Mohan Malviya University of Technology, Gorakhpur</p>
                        <p class="text-lg"><strong class="font-semibold">CGPA:</strong> 8.05</p>
                        <p class="text-lg"><strong class="font-semibold">Year:</strong> 2020–2024</p>
                    </div>
                    <div class="card-custom">
                        <h3 class="text-2xl font-bold mb-2">Intermediate</h3>
                        <p class="text-lg"><strong class="font-semibold">Board:</strong> CBSE Board</p>
                        <p class="text-lg"><strong class="font-semibold">Percentage:</strong> 91.4%</p>
                        <p class="text-lg"><strong class="font-semibold">Year:</strong> 2019</p>
                    </div>
                    <div class="card-custom">
                        <h3 class="text-2xl font-bold mb-2">High School</h3>
                        <p class="text-lg"><strong class="font-semibold">Board:</strong> CBSE Board</p>
                        <p class="text-lg"><strong class="font-semibold">CGPA:</strong> 10</p>
                        <p class="text-lg"><strong class="font-semibold">Year:</strong> 2017</p>
                    </div>
                </div>
            </section>

            <section class="py-8 md:py-16 border-t border-gray-300">
                <h2 class="text-3xl sm:text-4xl font-bold mb-4">Achievements</h2>
                <div class="flex flex-wrap gap-2">
                    <span class="tag-custom">Ranked 696 in TCS CodeVita 11 Round 1 and 786 in Round 2, out of 100,000+ participants globally.</span>
                    <span class="tag-custom">Ranked in top 1% in NPTEL Social Network Analysis course Certificate.</span>
                    <span class="tag-custom">Solved 600+ problems on LeetCode with Contest Rating of 1550+.</span>
                </div>
            </section>

            <footer class="py-8 md:py-16 text-center text-gray-600 border-t border-gray-300 mt-8">
                <p>&copy; 2024 Ratnadeep Mishra. All rights reserved.</p>
            </footer>
        </div>
    </div>
</body>
</html>
