import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
// import { useOutsideClick } from "@/hooks/use-outside-click";

// Simple outside click hook
function useOutsideClick(ref, handler) {
  useEffect(() => {
    function listener(event) {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    }
    document.addEventListener("mousedown", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
    };
  }, [ref, handler]);
}

export default function TeamPage() {
  const [active, setActive] = useState(null);
  const ref = useRef(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }
    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <div className="min-h-screen bg-black py-10">
      <h1 className="text-3xl font-bold text-white text-center mb-10">Meet Our Team</h1>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 h-full w-full z-10" />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0 grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.name}-${id}`}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.05 } }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}>
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.name}-${id}`}
              ref={ref}
              className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden">
              <motion.div layoutId={`image-${active.name}-${id}`}>
                <img
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.name}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top" />
              </motion.div>
              <div>
                <div className="flex justify-between items-start p-4">
                  <div>
                    <motion.h3 layoutId={`title-${active.name}-${id}`} className="font-bold text-neutral-700 dark:text-neutral-200">
                      {active.name}
                    </motion.h3>
                    <motion.p layoutId={`role-${active.role}-${id}`} className="text-blue-500 font-semibold mb-2">
                      {active.role}
                    </motion.p>
                    <motion.p layoutId={`bio-${active.bio}-${id}`} className="text-neutral-600 dark:text-neutral-400">
                      {active.bio}
                    </motion.p>
                  </div>
                  {active.linkedin && (
                    <motion.a
                      layoutId={`button-${active.name}-${id}`}
                      href={active.linkedin}
                      target="_blank"
                      className="px-4 py-3 text-sm rounded-full font-bold bg-blue-500 text-white">
                      LinkedIn
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="max-w-4xl mx-auto w-full gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {teamMembers.map((member, index) => (
          <motion.div
            layoutId={`card-${member.name}-${id}`}
            key={`card-${member.name}-${id}`}
            onClick={() => setActive(member)}
            className="p-4 flex flex-col items-center hover:bg-neutral-800 rounded-xl cursor-pointer border border-gray-700 bg-neutral-900 transition">
            <motion.div layoutId={`image-${member.name}-${id}`}>
              <img
                width={100}
                height={100}
                src={member.src}
                alt={member.name}
                className="h-32 w-32 rounded-full object-cover object-top mb-4 border-4 border-blue-600" />
            </motion.div>
            <motion.h3 layoutId={`title-${member.name}-${id}`} className="font-medium text-white text-lg text-center">
              {member.name}
            </motion.h3>
            <motion.p layoutId={`role-${member.role}-${id}`} className="text-blue-400 text-sm text-center mb-2">
              {member.role}
            </motion.p>
            <motion.button
              layoutId={`button-${member.name}-${id}`}
              className="px-4 py-2 text-sm rounded-full font-bold bg-gray-100 hover:bg-blue-500 hover:text-white text-black mt-2">
              View Bio
            </motion.button>
          </motion.div>
        ))}
      </ul>
    </div>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.05 } }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black">
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const teamMembers = [
  {
    name: "Ava Smith",
    role: "Founder & CEO",
    src: "https://randomuser.me/api/portraits/women/44.jpg",
    bio: "Ava is the visionary behind our company, leading with passion and innovation. She has over 15 years of experience in tech startups and business leadership.",
    linkedin: "https://linkedin.com/in/avasmith"
  },
  {
    name: "Liam Johnson",
    role: "Chief Technology Officer",
    src: "https://randomuser.me/api/portraits/men/32.jpg",
    bio: "Liam architects our technology and leads the engineering team. He specializes in scalable web systems and cloud infrastructure.",
    linkedin: "https://linkedin.com/in/liamjohnson"
  },
  {
    name: "Sophia Lee",
    role: "Lead Designer",
    src: "https://randomuser.me/api/portraits/women/65.jpg",
    bio: "Sophia crafts beautiful, user-centric designs and oversees all branding efforts. She has a background in UX/UI and digital art.",
    linkedin: "https://linkedin.com/in/sophialee"
  },
  {
    name: "Noah Brown",
    role: "Product Manager",
    src: "https://randomuser.me/api/portraits/men/45.jpg",
    bio: "Noah ensures our products meet user needs and business goals. He has a knack for agile development and cross-team collaboration.",
    linkedin: "https://linkedin.com/in/noahbrown"
  },
  {
    name: "Emma Wilson",
    role: "Marketing Director",
    src: "https://randomuser.me/api/portraits/women/68.jpg",
    bio: "Emma drives our marketing strategy and outreach. She excels at digital campaigns and community building.",
    linkedin: "https://linkedin.com/in/emmawilson"
  },
  {
    name: "Oliver Davis",
    role: "Full Stack Developer",
    src: "https://randomuser.me/api/portraits/men/36.jpg",
    bio: "Oliver builds robust web applications and APIs. He is passionate about open source and new technologies.",
    linkedin: "https://linkedin.com/in/oliverdavis"
  },
  {
    name: "Mia Martinez",
    role: "QA Engineer",
    src: "https://randomuser.me/api/portraits/women/12.jpg",
    bio: "Mia ensures our products are bug-free and user-friendly. She is detail-oriented and loves automation testing.",
    linkedin: "https://linkedin.com/in/miamartinez"
  },
  {
    name: "James Miller",
    role: "DevOps Engineer",
    src: "https://randomuser.me/api/portraits/men/28.jpg",
    bio: "James manages our CI/CD pipelines and cloud deployments. He is an expert in AWS and infrastructure as code.",
    linkedin: "https://linkedin.com/in/jamesmiller"
  },
  {
    name: "Charlotte Garcia",
    role: "Content Strategist",
    src: "https://randomuser.me/api/portraits/women/22.jpg",
    bio: "Charlotte creates engaging content and manages our editorial calendar. She has a background in journalism and SEO.",
    linkedin: "https://linkedin.com/in/charlottegarcia"
  },
  {
    name: "Benjamin Clark",
    role: "Support Lead",
    src: "https://randomuser.me/api/portraits/men/19.jpg",
    bio: "Benjamin leads our support team and ensures customer satisfaction. He is known for his empathy and problem-solving skills.",
    linkedin: "https://linkedin.com/in/benjaminclark"
  },
]; 