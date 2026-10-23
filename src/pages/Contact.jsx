import {
  ArrowDownRight,
  ArrowUpRight,
  Code2,
  Compass,
  Coffee,
  Mail,
} from "lucide-react";
import { Link } from "react-router-dom";

import { collaborationAreas, contactDetails } from "../data/contact";
import "./Contact.css";

function ContactMethod({
  href,
  label,
  description,
  icon: Icon,
  external = false,
}) {
  const linkProps = external
    ? { href, target: "_blank", rel: "noopener noreferrer" }
    : { href };

  return (
    <a className="contact-method" {...linkProps}>
      <span className="contact-method-icon">
        <Icon size={20} strokeWidth={1.6} aria-hidden="true" />
      </span>
      <span className="contact-method-copy">
        <span className="contact-method-label">{label}</span>
        <span className="contact-method-description">{description}</span>
      </span>
      <ArrowUpRight
        className="contact-method-arrow"
        size={19}
        aria-hidden="true"
      />
    </a>
  );
}

function Contact() {
  const configuredMethods = [
    {
      key: "github",
      href: contactDetails.github.url,
      label: "GitHub",
      description: "Explore my public work and connect through GitHub.",
      icon: Code2,
      external: true,
    },
    ...(contactDetails.linkedin
      ? [
          {
            key: "linkedin",
            href: contactDetails.linkedin,
            label: "LinkedIn",
            description: "View my professional profile.",
            icon: Compass,
            external: true,
          },
        ]
      : []),
    ...(contactDetails.email
      ? [
          {
            key: "email",
            href: `mailto:${contactDetails.email}`,
            label: "Email",
            description: contactDetails.email,
            icon: Mail,
          },
        ]
      : []),
  ];

  return (
    <div className="contact-page">
      <header className="contact-intro">
        <div className="contact-intro-copy">
          <p className="contact-eyebrow">KHISHA'S LAB / OPEN CHANNEL</p>
          <h1>
            Have an idea?
            <br />
            <em>Let&apos;s brew something brilliant.</em>
          </h1>
          <p className="contact-lede">
            I’m open to thoughtful conversations, professional opportunities,
            and collaborations around useful software. If something on the
            workbench sparks an idea, I’d be glad to hear from you.
          </p>
          <a
            className="contact-primary-cta"
            href={`mailto:${contactDetails.email}`}
          >
            Email me <ArrowUpRight size={17} aria-hidden="true" />
          </a>
        </div>
        <aside className="contact-note" aria-label="Studio note">
          <span>STUDIO NOTE / 006</span>
          <Coffee size={27} strokeWidth={1.5} aria-hidden="true" />
          <p>Good work starts with a good question.</p>
          <span className="contact-note-rule" aria-hidden="true" />
          <small>THE CONVERSATION IS OPEN</small>
        </aside>
      </header>

      <div className="contact-content">
        <section
          className="contact-section"
          aria-labelledby="contact-methods-title"
        >
          <div className="contact-section-heading">
            <span className="contact-section-index">01</span>
            <div>
              <p className="contact-eyebrow">VERIFIED WAYS TO CONNECT</p>
              <h2 id="contact-methods-title">Reach out</h2>
            </div>
          </div>

          <div className="contact-methods">
            {configuredMethods.map((method) => (
              <ContactMethod key={method.key} {...method} />
            ))}
          </div>
          {!contactDetails.email && !contactDetails.linkedin && (
            <p className="contact-method-note">
              GitHub is the currently configured contact channel. Email and
              LinkedIn will appear here when verified details are added.
            </p>
          )}
        </section>

        <section
          className="contact-section contact-collaboration"
          aria-labelledby="collaboration-title"
        >
          <div className="contact-section-heading">
            <span className="contact-section-index">02</span>
            <div>
              <p className="contact-eyebrow">WHAT I’M INTERESTED IN</p>
              <h2 id="collaboration-title">Ideas for the workbench</h2>
            </div>
          </div>
          <p className="contact-section-intro">
            These areas reflect the projects and technologies currently
            represented in my portfolio:
          </p>
          <ul className="contact-interest-list">
            {collaborationAreas.map((area, index) => (
              <li key={area}>
                <span className="contact-interest-number">0{index + 1}</span>
                <span>{area}</span>
                <ArrowDownRight size={18} aria-hidden="true" />
              </li>
            ))}
          </ul>
        </section>

        <section
          className="contact-next-step"
          aria-labelledby="contact-next-title"
        >
          <div>
            <p className="contact-eyebrow">TAKE A LOOK AROUND</p>
            <h2 id="contact-next-title">Start with what I’m building.</h2>
          </div>
          <div className="contact-next-links">
            <Link to="/projects">
              Explore the Workbench <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
            <Link to="/journal">
              Read the Engineering Journal{" "}
              <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Contact;