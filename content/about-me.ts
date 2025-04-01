export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface AboutMe {
  name: string;
  description: string;
  socialLinks: SocialLink[];
}

export const aboutMe: AboutMe = {
  name: "Matt Fravel",
  description: "Currently a student at Penn State pursuing a BA in Telecommunications with a minor in Spanish. When I'm not creating content, you can find me at the gym, playing tennis, or out with friends. I'm also a big NFL and Penn State sports fan, always keeping up with the action. Other than that, I’m just focused on getting better at what I do and perfecting my craft.",
  socialLinks: [
    {
      name: "Email",
      url: "mailto:mif5368@psu.edu",
      icon: "Mail"
    },
    {
      name: "Call",
      url: "+1 (302) 803-3373",
      icon: "Phone"
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/mattfravel/",
      icon: "Linkedin"
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/matt.y_06/",
      icon: "Instagram"
    },
    {
      name: "Twitter",
      url: "https://x.com/matt_fravel",
      icon: "Twitter"
    }
  ]
};
