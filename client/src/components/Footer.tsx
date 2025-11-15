import { Mail, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:hello@clarity.blog',
      testId: 'link-email'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/yourprofile',
      testId: 'link-linkedin'
    },
    {
      icon: Twitter,
      label: 'Twitter',
      href: 'https://twitter.com/yourhandle',
      testId: 'link-twitter'
    }
  ];

  return (
    <footer className="border-t border-border bg-background mt-auto">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Clarity. Thoughtful words on design and life.
            </p>
          </div>

          <div className="flex items-center gap-6">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid={social.testId}
                  aria-label={social.label}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200 hover-elevate active-elevate-2 p-2 rounded-md"
                >
                  <Icon className="h-5 w-5" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
