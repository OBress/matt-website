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
  description: "Hi there! I'm Matt.",
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
      url: "https://instagram.com",
      icon: "Instagram"
    },
    {
      name: "Twitter",
      url: "https://twitter.com",
      icon: "Twitter"
    }
  ]
};
