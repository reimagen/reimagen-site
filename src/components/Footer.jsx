'use client'

import { useState } from 'react';

export default function Footer() {
  const [isMetaHovered, setIsMetaHovered] = useState(false);
  const socialColors = {
    github: 'hover:text-github',
    discord: 'hover:text-discord',
    twitter: 'hover:text-twitter',
    youtube: 'hover:text-youtube',
    instagram: 'hover:text-instagram',
    tiktok: 'hover:text-tiktok',
    linkedin: 'hover:text-linkedin',
    sora: 'hover:text-sora',
    meta: 'hover:text-meta-blue',
  };
  const showLinkedIn = false;

  return (
  <footer className="w-full bg-black/40 backdrop-blur text-white text-center text-sm p-4 border-t border-white/10 sticky bottom-0 z-50">
    <p className="text-sm uppercase tracking-[0.25em] text-brand-lavender">Get Connected:</p>
      <div className="flex justify-center items-center gap-4 mt-4">
        {/* Meta AI */}
        <a
          href="https://meta.ai/@reimagen"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Meta AI"
          onMouseEnter={() => setIsMetaHovered(true)}
          onMouseLeave={() => setIsMetaHovered(false)}
        >
          {isMetaHovered ? (
            <svg
              height="1em"
              style={{ flex: 'none', lineHeight: 1 }}
              viewBox="0 0 24 24"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
              className={`brand-social-icon ${socialColors.meta}`}
            >
              <title>MetaAI</title>
              <g clipPath="url(#lobe-icons-meta-ai-fill-0)" filter="url(#lobe-icons-meta-ai-fill-1)">
                <path
                  clipRule="evenodd"
                  d="M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0zm0 3.627a8.373 8.373 0 100 16.746 8.373 8.373 0 000-16.746z"
                  fill="url(#lobe-icons-meta-ai-fill-2)"
                  fillRule="evenodd"
                ></path>
              </g>
              <defs>
                <linearGradient
                  gradientUnits="userSpaceOnUse"
                  id="lobe-icons-meta-ai-fill-2"
                  x1="24"
                  x2="0"
                  y1="0"
                  y2="24"
                >
                  <stop offset=".13" stopColor="#FF97E3"></stop>
                  <stop offset=".18" stopColor="#D14FE1"></stop>
                  <stop offset=".338" stopColor="#0050E2"></stop>
                  <stop offset=".666" stopColor="#0050E2"></stop>
                  <stop offset=".809" stopColor="#00DDF4"></stop>
                  <stop offset=".858" stopColor="#23F8CC"></stop>
                </linearGradient>
                <clipPath id="lobe-icons-meta-ai-fill-0">
                  <path d="M0 0h24v24H0z" fill="#fff"></path>
                </clipPath>
                <filter
                  colorInterpolationFilters="sRGB"
                  filterUnits="userSpaceOnUse"
                  height="24"
                  id="lobe-icons-meta-ai-fill-1"
                  width="24"
                  x="0"
                  y="0"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                  <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                  <feColorMatrix
                    in="SourceAlpha"
                    result="hardAlpha"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  ></feColorMatrix>
                  <feOffset></feOffset>
                  <feGaussianBlur stdDeviation=".75"></feGaussianBlur>
                  <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"></feComposite>
                  <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0"></feColorMatrix>
                  <feBlend in2="shape" result="effect1_innerShadow_674_237"></feBlend>
                </filter>
              </defs>
            </svg>
          ) : (
            <svg
              fill="currentColor"
              fillRule="evenodd"
              height="1em"
              style={{ flex: 'none', lineHeight: 1 }}
              viewBox="0 0 24 24"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
              className={`brand-social-icon text-white ${socialColors.meta}`}
            >
              <title>MetaAI</title>
              <path
                clipRule="evenodd"
                d="M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0zm0 3.627a8.373 8.373 0 100 16.746 8.373 8.373 0 000-16.746z"
              ></path>
            </svg>
          )}
        </a>

        {/* YouTube */}
        <a
          href="https://www.youtube.com/@reimagenai"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="YouTube"
        >
          <svg
            className={`brand-social-icon ${socialColors.youtube}`}
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
          </svg>
        </a>
       
        {/* TikTok */}
        <a
          href="https://www.tiktok.com/@reimagenai"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="TikTok"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className={`brand-social-icon ${socialColors.tiktok} self-center`}
        >
            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
        </svg>
        </a>
       
        {/* Instagram */}
        <a
        href="https://www.instagram.com/reimagenai/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className={`brand-social-icon ${socialColors.instagram}`}
        >
            <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2a3 3 0 013 3v10a3 3 0 01-3 3H7a3 3 0 01-3-3V7a3 3 0 013-3h10zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-3a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" />
        </svg>
        </a>

        {/* Sora */}
        <a
          href="https://sora.chatgpt.com/profile/reimagenai"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Sora"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className={`brand-social-icon ${socialColors.sora}`}
          >
            <path d="M8.968 11.147a.408.408 0 110 .816.408.408 0 010-.816z" />
            <path
              clipRule="evenodd"
              d="M7.21 8.748c.045-.012.087.003.128.044.195.2.39.398.587.596a.15.15 0 00.061.035l.81.209c.056.014.09.043.102.088.013.046-.002.09-.043.13l-.596.585a.139.139 0 00-.021.03.134.134 0 00-.015.033c-.07.27-.14.54-.208.81-.014.055-.044.09-.09.102-.045.012-.088-.003-.128-.045-.195-.199-.39-.397-.587-.595a.158.158 0 00-.062-.035l-.81-.209c-.056-.014-.09-.044-.103-.09-.011-.044.004-.087.045-.128.2-.194.398-.39.596-.585a.12.12 0 00.022-.03.134.134 0 00.014-.032c.07-.27.14-.54.208-.81.014-.056.044-.09.09-.103z"
              fillRule="evenodd"
            />
            <path d="M15.827 9.31a.409.409 0 110 .817.409.409 0 010-.818z" />
            <path
              clipRule="evenodd"
              d="M14.071 6.915c.046-.012.09.003.13.044.194.2.388.398.583.596a.155.155 0 00.062.036l.807.21c.056.014.09.045.103.09.012.045-.003.088-.045.128l-.596.583a.168.168 0 00-.036.061l-.21.808c-.014.056-.044.09-.09.103-.045.011-.088-.004-.128-.045-.194-.2-.389-.398-.583-.596a.12.12 0 00-.03-.022.12.12 0 00-.032-.014l-.808-.21c-.056-.014-.09-.044-.102-.09-.012-.045.003-.087.044-.128.2-.194.398-.388.596-.583a.119.119 0 00.022-.03.132.132 0 00.015-.032l.21-.806c.014-.057.043-.09.088-.103z"
              fillRule="evenodd"
            />
            <path
              clipRule="evenodd"
              d="M8.086.457a6.102 6.102 0 013.046-.415c1.333.153 2.521.72 3.564 1.7a.116.116 0 00.107.029c1.409-.346 2.762-.224 4.062.366l.061.029.155.077c1.357.703 2.33 1.769 2.918 3.197.278.68.418 1.388.421 2.127a5.65 5.65 0 01-.18 1.631.164.164 0 00.04.154 5.98 5.98 0 011.577 2.892c.386 1.901-.008 3.614-1.182 5.14l-.181.22a6.062 6.062 0 01-2.936 1.85.16.16 0 00-.106.103c-.255.736-.512 1.364-.988 1.992-1.199 1.582-2.962 2.462-4.948 2.45-1.583-.007-2.986-.586-4.21-1.736a.142.142 0 00-.14-.031c-.518.167-1.04.191-1.605.185a5.923 5.923 0 01-2.594-.622 6.057 6.057 0 01-2.146-1.781c-.203-.27-.404-.522-.552-.821a7.742 7.742 0 01-.494-1.283 6.108 6.108 0 01-.017-3.065.163.163 0 00.007-.074.112.112 0 00-.036-.063 5.954 5.954 0 01-1.38-2.202 5.193 5.193 0 01-.333-1.59 6.911 6.911 0 01.188-2.13c.45-1.485 1.309-2.65 2.578-3.494.282-.188.549-.334.8-.439a8.21 8.21 0 01.862-.303.128.128 0 00.087-.087 6.014 6.014 0 011.104-2.155C6.315 1.463 7.132.846 8.086.457zm.965 7.647c-1.154-.82-2.73-.413-3.311.875-.301.666-.36 1.368-.178 2.106l.145.586.26.95c.105.533.31 1.02.612 1.462l.03.043c.16.189.335.362.524.518 1.386 1.139 3.275.379 3.652-1.323l.05-.213.012-.08c.06-.4.042-.792-.053-1.175a47.673 47.673 0 00-.546-2.024c-.217-.738-.616-1.313-1.197-1.725zm7.104-1.646c-.862-.802-2.191-.831-3.047-.026-.334.314-.566.736-.697 1.265a3.47 3.47 0 000 1.635l.014.054.055.18c.127.42.245.834.353 1.241.112.423.202.706.27.85.574 1.206 1.82 2.074 3.177 1.522 1.261-.514 1.641-2.01 1.355-3.22-.043-.183-.09-.365-.14-.546a34.426 34.426 0 00-.428-1.573c-.162-.508-.466-.968-.912-1.382z"
              fillRule="evenodd"
            />
          </svg>
        </a>
        
        {/* GitHub */}
        <a
          href="https://github.com/reimagen"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className={`brand-social-icon ${socialColors.github}`}
          >
            <path
              fillRule="evenodd"
              d="M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.32 6.84 9.67.5.09.68-.22.68-.49 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.37-3.37-1.37-.45-1.17-1.1-1.48-1.1-1.48-.9-.63.07-.62.07-.62 1 .07 1.52 1.06 1.52 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.64-1.36-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05a9.41 9.41 0 0 1 5 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.8-4.57 5.06.36.32.68.94.68 1.89 0 1.37-.01 2.48-.01 2.82 0 .27.18.59.69.49A10.02 10.02 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z"
              clipRule="evenodd"
            />
          </svg>
        </a>

        {/* Discord */}
        <a
        href="https://discord.com/users/reimagenai"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Discord"
        >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className={`brand-social-icon ${socialColors.discord}`}
        >
            <path d="M20.317 4.369a19.791 19.791 0 00-4.885-1.515.07.07 0 00-.073.035c-.21.375-.444.864-.608 1.248a18.116 18.116 0 00-5.434 0 12.51 12.51 0 00-.617-1.248.076.076 0 00-.073-.035 19.736 19.736 0 00-4.885 1.515.067.067 0 00-.03.027C2.356 9.057 1.65 13.578 2.06 18.057a.086.086 0 00.03.06 19.978 19.978 0 005.993 3.036.07.07 0 00.076-.024c.461-.63.873-1.295 1.226-1.99a.07.07 0 00-.038-.099 13.091 13.091 0 01-1.872-.888.07.07 0 01-.007-.117c.126-.094.252-.191.37-.29a.07.07 0 01.073-.01c3.927 1.792 8.18 1.792 12.061 0a.07.07 0 01.073.009c.12.099.244.196.37.29a.07.07 0 01-.006.117 12.665 12.665 0 01-1.872.888.07.07 0 00-.038.1c.36.693.772 1.358 1.225 1.99a.07.07 0 00.076.024 19.934 19.934 0 005.994-3.036.07.07 0 00.03-.06c.5-5.177-.84-9.655-3.549-13.661a.062.062 0 00-.031-.026zM8.02 15.331c-1.183 0-2.153-1.085-2.153-2.419 0-1.333.955-2.418 2.153-2.418 1.206 0 2.167 1.094 2.153 2.418 0 1.334-.955 2.419-2.153 2.419zm7.974 0c-1.183 0-2.153-1.085-2.153-2.419 0-1.333.955-2.418 2.153-2.418 1.206 0 2.167 1.094 2.153 2.418 0 1.334-.947 2.419-2.153 2.419z" />
        </svg>
        </a>

        {/* Twitter */}
        <a
        href="https://x.com/reimagenai"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Twitter / X"
        >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className={`brand-social-icon ${socialColors.twitter} block overflow-hidden`}
        >
            <path d="M13.586 10.79L20.546 3h-1.766l-5.93 6.689L8.453 3H3.5l7.293 10.354L3.5 21h1.766l6.326-7.123L15.547 21h4.953l-6.914-10.21zM14.68 14.7l-.737-1.09L6.519 4.5h1.527l6.016 8.894.738 1.091 7.604 11.115H20.88L14.68 14.7z" />
        </svg>
        </a>

        {/* LinkedIn */}
        {showLinkedIn && (
          <a
            href="https://www.linkedin.com/in/lisagu1/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className={`brand-social-icon ${socialColors.linkedin}`}
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.024-3.037-1.852-3.037-1.853 0-2.136 1.446-2.136 2.938v5.669H9.354V9h3.414v1.561h.048c.476-.898 1.637-1.848 3.367-1.848 3.598 0 4.262 2.367 4.262 5.451v6.288zM5.337 7.433c-1.144 0-2.068-.926-2.068-2.067 0-1.143.924-2.068 2.068-2.068s2.067.925 2.067 2.068c0 1.141-.923 2.067-2.067 2.067zM6.814 20.452H3.861V9h2.953v11.452z" />
            </svg>
          </a>
        )}

      </div>
  <p className="mt-4 text-sm text-brand-lavender">© 2026 Reimagen. All rights reserved.</p>

    </footer>
  );
}
