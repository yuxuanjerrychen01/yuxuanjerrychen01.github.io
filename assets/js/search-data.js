// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "Current and past projects. Work and fun included! I am still editing this page.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "news-i-received-the-outstanding-course-assistant-award-for-fall-2023-semester-as-course-assistant-for-cs-357-at-the-university-of-illinois-urbana-champaign",
          title: 'I received the Outstanding Course Assistant Award for Fall 2023 semester as course...',
          description: "",
          section: "News",},{id: "news-happy-to-announce-that-aristai-was-awarded-a-10-000-prize-at-the-2024-cozad-new-venture-challenge",
          title: 'Happy to announce that AristAI was awarded a $10,000 prize at the 2024...',
          description: "",
          section: "News",},{id: "news-i-received-the-university-honors-bronze-tablet-award-at-the-university-of-illinois-urbana-champaign",
          title: 'I received the University Honors - Bronze Tablet Award at the University of...',
          description: "",
          section: "News",},{id: "news-i-participated-in-the-2025-silicon-valley-entrepreneur-workshop-organized-by-the-technology-entrepreneur-center-at-the-university-of-illinois-urbana-champaign-it-was-an-extraordinary-experience",
          title: 'I participated in the 2025 Silicon Valley Entrepreneur Workshop organized by the Technology...',
          description: "",
          section: "News",},{id: "news-i-attended-my-first-sigcse-ts-conference-coauthored-paper-on-teaching-novices-computational-thinking-by-utilizing-llms-within-assessments-was-accepted-to-sigcse-ts-2025",
          title: 'I attended my first SIGCSE TS conference! Coauthored paper on teaching novices computational...',
          description: "",
          section: "News",},{id: "news-i-presented-a-paper-on-a-cs1-course-redesign-for-engineering-students-at-asee-2025-i-also-moderated-a-paper-session",
          title: 'I presented a paper on a CS1 course redesign for engineering students at...',
          description: "",
          section: "News",},{id: "news-poster-on-exploring-llms-for-generating-erroneous-examples-in-cs1-has-been-accepted-to-sigcse-ts-2026",
          title: 'Poster on exploring LLMs for generating erroneous examples in CS1 has been accepted...',
          description: "",
          section: "News",},{id: "projects-bouldering",
          title: 'Bouldering',
          description: "Currently at V4",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project.html";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%75%78%75%61%6E%31%39@%69%6C%6C%69%6E%6F%69%73.%65%64%75", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/yuxuanchen2001", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0009-0009-2159-8746", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/yuxuanjerrychen01", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=90TwyKQAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
