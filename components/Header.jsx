import Link from "next/link";
import React from "react";

const socialLinks = [
  {
    name: "Twitter/x",
    link: "https://x.com/_PiyushDev",
    icon: (
      <svg
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className="size-4"
      >
        <title>X</title>
        <path
          fill="currentColor"
          d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"
        ></path>
      </svg>
    ),
  },
  {
    name: "Github",
    link: "https://github.com/piyushRepos",
    icon: (
      <svg
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className="size-4"
      >
        <path
          fill="currentColor"
          d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
        ></path>
      </svg>
    ),
  },
  {
    name: "Linkedin",
    link: "https://www.linkedin.com/in/piyushh04/",
    icon: (
      <svg
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className="size-4"
      >
        <title>LinkedIn</title>
        <path
          fill="currentColor"
          d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
        ></path>
      </svg>
    ),
  },
];

const Header = () => {
  return (
    <header>
      <div className="flex items-start justify-between gap-x-4">
        <div>
          <div className="flex flex-col gap-y-2">
            <h2>
              <span className="text-2xl font-bold text-accent-foreground">
                Piyush Kumar
                <span className="text-sm text-accent-foreground">,</span>
              </span>
              <br />
              <span className="ml-0 text-sm font-mono font-semibold text-[#bbbbbb]">
                A student and a curious developer at heart.
              </span>
            </h2>
            <p className="max-w-md items-center text-pretty font-mono text-xs text-muted-foreground">
              <Link
                className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
                href="https://www.google.com/maps/place/bihar+India"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-globe size-3"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                  <path d="M2 12h20"></path>
                </svg>
                Bihar, India
              </Link>
            </p>
          </div>
          <div className="flex items-center gap-x-2 my-3 ">
            {socialLinks.map((link) => (
              <Link
                key={link.name}
                title={link.name}
                href={link.link}
                target="_blank"
                className={`bottom-shadow inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm  hover:scale-105 hover:bg-accent hover:text-accent-foreground size-8`}
              >
                {link.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-4">
        <p className="font-medium text-sm md:text-base text-gray-600 dark:text-muted-foreground leading-snug">
          Hi there👋🏻, I’m a student by tradition and a developer by passion,
          constantly learning and exploring new technologies. I love
          transforming ideas into functional and user-friendly web experiences.
          Whether it's crafting intuitive UIs or optimizing backend logic, I
          thrive on solving real-world problems with clean and efficient code.
          My goal is to build impactful digital solutions that make a
          difference. Let’s create something amazing together!
        </p>
      </div>
    </header>
  );
};

export default Header;
