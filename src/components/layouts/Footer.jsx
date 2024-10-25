import { CgNotes } from "react-icons/cg";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { name: "Features", href: "/features" },
      { name: "Pricing", href: "/pricing" },
      { name: "Support", href: "/support" },
      { name: "Updates", href: "/updates" },
    ],
    resources: [
      { name: "Documentation", href: "/docs" },
      { name: "Blog", href: "/blog" },
      { name: "Community", href: "/community" },
      { name: "Help Center", href: "/help" },
    ],
    company: [
      { name: "About", href: "/about" },
      { name: "Careers", href: "/careers" },
      { name: "Privacy", href: "/privacy" },
      { name: "Terms", href: "/terms" },
    ],
    social: [
      { name: "GitHub", icon: FaGithub, href: "https://github.com" },
      { name: "Twitter", icon: FaTwitter, href: "https://twitter.com" },
      { name: "LinkedIn", icon: FaLinkedin, href: "https://linkedin.com" },
    ],
  };

  return (
    <footer className="bg-white border-t border-neutral-200">
      <div className="mx-auto px-3 md:px-16 py-12">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Brand Section */}
          <div className="space-y-8">
            <Link
              to={"/"}
              className="flex items-center gap-1 text-2xl font-bold"
            >
              <CgNotes className="text-3xl text-neutral-500" />
              <span className="text-blue-500">NotesApp</span>
            </Link>
            <p className="text-neutral-600 max-w-xs">
              Capture your ideas, thoughts, and moments with our intuitive
              note-taking platform. Free forever, no hidden costs.
            </p>
            {/* Social Links */}
            <div className="flex space-x-6">
              {footerLinks.social.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-500 hover:text-blue-500 transition-colors"
                  >
                    <span className="sr-only">{item.name}</span>
                    <Icon className="h-6 w-6" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links Grid */}
          <div className="mt-16 grid grid-cols-3 gap-8 xl:col-span-2 xl:mt-0">
            <div>
              <h3 className="text-sm font-semibold text-neutral-900">
                Product
              </h3>
              <ul className="mt-4 space-y-4">
                {footerLinks.product.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className="text-sm text-neutral-600 hover:text-blue-500 transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-neutral-900">
                Resources
              </h3>
              <ul className="mt-4 space-y-4">
                {footerLinks.resources.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className="text-sm text-neutral-600 hover:text-blue-500 transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-neutral-900">
                Company
              </h3>
              <ul className="mt-4 space-y-4">
                {footerLinks.company.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className="text-sm text-neutral-600 hover:text-blue-500 transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 border-t border-neutral-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-neutral-600">
              © {currentYear} Notes App. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link
                to="/privacy"
                className="text-sm text-neutral-600 hover:text-blue-500 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-sm text-neutral-600 hover:text-blue-500 transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                to="/cookies"
                className="text-sm text-neutral-600 hover:text-blue-500 transition-colors"
              >
                Cookies Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
