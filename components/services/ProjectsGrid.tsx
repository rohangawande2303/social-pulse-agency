"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { useRef, useEffect } from "react";
import { Project } from "../../app/data/services";

interface ProjectsGridProps {
  title: string;
  projects: Project[];
}

export default function ProjectsGrid({ title, projects }: ProjectsGridProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Continuous infinite scrolling
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let speed = 1.2;

    const animate = () => {
      if (!scrollRef.current) return;

      scrollRef.current.scrollLeft += speed;

      const half = scrollRef.current.scrollWidth / 2;

      if (scrollRef.current.scrollLeft >= half) {
        scrollRef.current.scrollLeft = scrollRef.current.scrollLeft - half;
      }

      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, []);

  const infiniteList = [...projects, ...projects];

  return (
    <section className="py-20 bg-[#0d0d0d] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12">
          <div>
            <h2 className="text-lg md:text-3xl tracking-widest font-semibold uppercase bg-gradient-to-r from-[#8103FF] to-[#b34dff] bg-clip-text text-transparent">
              {title}
            </h2>

            <a
              href="/portfolio"
              className="inline-flex items-center gap-2 font-medium text-base mt-3 group text-white transition-all duration-300"
            >
              <span className="relative">
                <span className="group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#8103FF] group-hover:to-[#b34dff] group-hover:bg-clip-text transition-all duration-300">
                  View All Projects
                </span>
              </span>
              <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <p className="text-gray-300 max-w-xl mt-4 md:mt-0 leading-relaxed">
            While the journey is what excites us about our work, our real joy
            comes from witnessing our partners achieve amazing outcomes. Dive in
            and look around!
          </p>
        </div>

        <div className="relative flex items-center justify-center">
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto overflow-y-hidden scroll-smooth px-10 md:px-16 custom-scroll-hide pt-12"
            style={{ scrollBehavior: "auto" }}
          >
            {infiniteList.map((project, index) => (
              <motion.div
                key={`${project.id}-${index}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: (index % projects.length) * 0.1,
                }}
                viewport={{ once: true }}
                className="w-[320px] md:w-[340px] lg:w-[360px] bg-[#1a1a1a] rounded-xl overflow-hidden flex-shrink-0 group hover:-translate-y-2 transition-transform duration-300"
                style={{ height: "420px" }}
              >
                <div
                  className="relative w-full flex-shrink-0"
                  style={{ height: "208px" }}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-contain transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="flex flex-col p-5" style={{ height: "212px" }}>
                  <h3
                    className="text-lg font-semibold mb-2 transition-all bg-clip-text text-transparent bg-gradient-to-r from-[#fff] to-[#fff] group-hover:from-[#8103FF] group-hover:to-[#b34dff]"
                    style={{
                      minHeight: "28px",
                      maxHeight: "28px",
                      overflow: "hidden",
                      wordBreak: "break-word",
                    }}
                  >
                    {project.title}
                  </h3>

                  <div
                    className="text-gray-400 text-sm mb-3"
                    style={{
                      height: "63px",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      display: "-webkit-box",
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: "vertical",
                      lineHeight: "21px",
                      wordBreak: "break-word",
                      overflowWrap: "break-word",
                    }}
                  >
                    {project.description}
                  </div>

                  <div style={{ marginTop: "auto" }}>
                    {project.clientName && (
                      <p className="text-gray-500 text-xs">
                        Client: {project.clientName}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#0d0d0d] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#0d0d0d] to-transparent" />
    </section>
  );
}
