const endpoints = (lang = 'pt') => ({
  navbar: `profile/${lang}/navbar.json`,
  routes: `profile/${lang}/routes.json`,
  home: `profile/${lang}/home.json`,
  social: `profile/${lang}/social.json`,
  about: `profile/${lang}/about.json`,
  skills: `profile/${lang}/skills.json`,
  education: `profile/${lang}/education.json`,
  experiences: `profile/${lang}/experiences.json`,
  projects: `profile/${lang}/projects.json`,
});

export default endpoints;
