"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Twitter, Send } from "lucide-react";

const socials = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/indiser",
    handle: "@indiser",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/indiser",
    handle: "in/indiser",
  },
  {
    icon: Twitter,
    label: "Twitter",
    href: "https://twitter.com/indiser",
    handle: "@indiser",
  },
  {
    icon: Mail,
    label: "Email",
    href: "mailto:contact@indiser.dev",
    handle: "contact@indiser.dev",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-28 md:py-36 overflow-hidden">
      {/* Ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(201,169,110,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-3xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span
            className="text-[11px] font-medium tracking-[0.2em] uppercase mb-3 block"
            style={{ color: "rgba(201,169,110,0.6)" }}
          >
            Get In Touch
          </span>

          <h2
            className="text-4xl md:text-6xl font-bold tracking-[-0.02em] mb-5"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Let&apos;s Build
            <br />
            Something{" "}
            <span className="text-gradient-amber italic">Together</span>
          </h2>

          <p className="text-muted-foreground text-[15px] leading-relaxed mb-10 max-w-lg mx-auto">
            I&apos;m always open to discussing new projects, creative ideas, or
            opportunities to bring your vision to life.
          </p>

          {/* CTA Button */}
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href="mailto:contact@indiser.dev"
            className="group inline-flex items-center gap-3 px-10 py-4 text-sm font-semibold tracking-wide rounded-xl transition-all duration-300 mb-14"
            style={{
              background: "linear-gradient(135deg, #c9a96e, #a8873c)",
              color: "#08080a",
              boxShadow: "0 8px 32px rgba(201,169,110,0.2)",
            }}
          >
            Send a Message
            <Send
              size={16}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
            />
          </motion.a>

          {/* Social links */}
          <div className="flex flex-wrap justify-center gap-4">
            {socials.map((social, i) => (
              <motion.a
                key={social.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                whileHover={{ y: -3 }}
                href={social.href}
                target={
                  social.href.startsWith("mailto") ? undefined : "_blank"
                }
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-5 py-3 rounded-xl transition-all duration-300"
                style={{
                  background: "rgba(17,17,19,0.6)",
                  border: "1px solid rgba(255,255,255,0.04)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "rgba(201,169,110,0.15)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "rgba(255,255,255,0.04)";
                }}
                aria-label={social.label}
              >
                <social.icon
                  size={16}
                  strokeWidth={1.5}
                  className="text-muted-foreground"
                />
                <span className="text-[12px] font-medium text-muted-foreground">
                  {social.handle}
                </span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
