"use client";

import React from "react";
import { FaRss } from "react-icons/fa6";
import { metaData, socialLinks } from "app/config";

const YEAR = new Date().getFullYear();

function SocialLink({ href, icon: Icon }: { href: string; icon: any }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-[#666] dark:text-[#999] hover:text-[#111] dark:hover:text-white transition-colors"
    >
      <Icon className="w-5 h-5" />
    </a>
  );
}

function SocialLinks() {
  return (
    <div className="flex gap-4 items-center">
      {socialLinks.map((link, index) => (
        <SocialLink key={index} href={link.url} icon={link.icon} />
      ))}
      <a 
        href="/rss.xml" 
        target="_self"
        className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
      >
        <FaRss className="w-5 h-5" />
      </a>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800 mt-16">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-neutral-600 dark:text-neutral-400 text-lg">
            <time>© {YEAR}</time>{" "}
            <span className="text-neutral-900 dark:text-neutral-100">
              {metaData.title}
            </span>
          </div>
          <div className="flex gap-6">
            <SocialLinks />
          </div>
        </div>
      </div>
    </footer>
  );
}
