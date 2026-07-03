import { FaEnvelope, FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";

const links = [
  { href: "mailto:sungminryu94@gmail.com", label: "Email", Icon: FaEnvelope },
  {
    href: "https://www.linkedin.com/in/sungmin-ryu-2b0605194/",
    label: "LinkedIn",
    Icon: FaLinkedin,
  },
  { href: "https://github.com/WheatBeer", label: "GitHub", Icon: FaGithub },
  { href: "https://medium.com/@wheatbeer", label: "Medium", Icon: FaMedium },
];

export default function SocialIcons() {
  return (
    <ul className="flex items-center gap-4">
      {links.map(({ href, label, Icon }) => (
        <li key={label}>
          <a
            href={href}
            target={href.startsWith("mailto:") ? undefined : "_blank"}
            rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
            aria-label={label}
            className="text-slate-500 transition-colors hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400"
          >
            <Icon size={18} />
          </a>
        </li>
      ))}
    </ul>
  );
}
