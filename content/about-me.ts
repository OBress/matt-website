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
  description: "Currently a Penn State student pursuing a BA in Telecommunications with a minor in Spanish, I’m passionate about creating engaging video content. When I’m not behind the camera, you’ll find me at the gym, playing tennis, or keeping up with NFL and Penn State sports. I’ve worked on sports promos, high-speed drone racing, and special event videos, always aiming to capture the perfect shot. Always looking for new projects, feel free to reach out! All my socials are below.",
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
