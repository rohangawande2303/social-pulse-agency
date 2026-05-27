"use client";
import React, { useState } from "react";
import { MapPin } from "lucide-react";
import Image from "next/image";

interface Project {
  id: string;
  location: string;
  clientName: string;
  status: "ongoing" | "completed";
  mapsLink?: string;
}

interface CityGroup {
  location: string;
  projects: Project[];
  coordinates: { x: number; y: number };
  mapsLink?: string;
}

const ProjectsMap: React.FC = () => {
  const [activeCity, setActiveCity] = useState<string | null>(null);

  const rawProjects: Project[] = [
    {
      id: "1",
      location: "Mehsana",
      clientName: "Hubtown Trade Centre",
      status: "ongoing",
      mapsLink: "https://maps.google.com/?q=Mehsana",
    },
    {
      id: "2",
      location: "Ahmedabad",
      clientName: "Hubtown North Star",
      status: "ongoing",
      mapsLink: "https://maps.google.com/?q=Ahmedabad",
    },

    {
      id: "3",
      location: "Thane",
      clientName: "Rutu Samruddhi",
      status: "completed",
      mapsLink: "https://maps.google.com/?q=Thane",
    },
    {
      id: "4",
      location: "Kalyan",
      clientName: "Rutu Apartments",
      status: "completed",
      mapsLink: "https://maps.google.com/?q=Kalyan",
    },
    {
      id: "5",
      location: "Kalyan",
      clientName: "Panchratna Sapphire",
      status: "completed",
      mapsLink: "https://maps.google.com/?q=Kalyan",
    },
    {
      id: "6",
      location: "Kalyan",
      clientName: "Mangeshi World",
      status: "completed",
      mapsLink: "https://maps.google.com/?q=Kalyan",
    },
    {
      id: "7",
      location: "Kalyan",
      clientName: "Mangeshi Velvet",
      status: "completed",
      mapsLink: "https://maps.google.com/?q=Kalyan",
    },
    {
      id: "8",
      location: "Kalyan",
      clientName: "Rutu Heights",
      status: "completed",
      mapsLink: "https://maps.google.com/?q=Kalyan",
    },
    {
      id: "9",
      location: "Kalyan",
      clientName: "Kohinoor Eden",
      status: "completed",
      mapsLink: "https://maps.google.com/?q=Kalyan",
    },
    {
      id: "10",
      location: "Dombivli",
      clientName: "Balaji Classica",
      status: "ongoing",
      mapsLink: "https://maps.google.com/?q=Kalyan",
    },
    {
      id: "11",
      location: "Dombivli",
      clientName: "Venus Skycity",
      status: "ongoing",
      mapsLink: "https://maps.google.com/?q=Kalyan",
    },
    {
      id: "12",
      location: "Dombivli",
      clientName: "Mahaavir Pride",
      status: "completed",
      mapsLink: "https://maps.google.com/?q=Kalyan",
    },
    {
      id: "13",
      location: "Dombivli",
      clientName: "Swaminarayan City",
      status: "completed",
      mapsLink: "https://maps.google.com/?q=Kalyan",
    },
    {
      id: "14",
      location: "Dombivli",
      clientName: "Landmark",
      status: "ongoing",
      mapsLink: "https://maps.google.com/?q=Kalyan",
    },
    {
      id: "15",
      location: "Dombivli",
      clientName: "SSL Bellagio",
      status: "ongoing",
      mapsLink: "https://maps.google.com/?q=Kalyan",
    },
    // Add more projects freely – same city = grouped automatically
  ];

  // Group by city + assign coordinates
  const cityMap = new Map<string, CityGroup>();

  rawProjects.forEach((project) => {
    const key = project.location;
    const existing = cityMap.get(key);

    const coordinates: Record<string, { x: number; y: number }> = {
      Mehsana: { x: 18, y: 49 },
      Ahmedabad: { x: 17, y: 47 },
      Kalyan: { x: 20.5, y: 56 },
      Thane: { x: 19, y: 57 },
      Dombivli: { x: 20.7, y: 57 },
      // Add more cities here if needed
    };

    if (existing) {
      existing.projects.push(project);
    } else {
      cityMap.set(key, {
        location: key,
        projects: [project],
        coordinates: coordinates[key] || { x: 20, y: 50 },
        mapsLink: project.mapsLink,
      });
    }
  });

  const cityGroups: CityGroup[] = Array.from(cityMap.values());

  return (
    <section className="w-full bg-black pt-2 pb-8 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-2">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
            Our Project <span className="text-purple-500">Locations</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Delivering excellence across India with ongoing and completed
            projects
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Map Container */}
          <div
            className="relative mx-auto w-[90%] md:w-[70%] lg:w-[60%]"
            style={{ paddingBottom: "100%" }}
          >
            <div className="absolute inset-0">
              {/* India Map */}
              <Image
                src="/images/indian_map_transparent.png"
                alt="India Map"
                fill
                style={{
                  objectFit: "contain",
                  filter: "drop-shadow(0 0 30px rgba(168, 85, 247, 0.3))",
                  imageRendering: "crisp-edges",
                }}
                priority
              />

              {/* City Pins */}
              {cityGroups.map((city) => {
                const hasOngoing = city.projects.some(
                  (p) => p.status === "ongoing"
                );
                const pinColor = hasOngoing
                  ? "text-purple-400"
                  : "text-green-400";
                const glowColor = hasOngoing ? "bg-purple-500" : "bg-green-500";
                const isActive = activeCity === city.location;

                return (
                  <button
                    key={city.location}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 focus:outline-none"
                    style={{
                      left: `${city.coordinates.x}%`,
                      top: `${city.coordinates.y}%`,
                      zIndex: isActive ? 50 : 10,
                    }}
                    onClick={() =>
                      setActiveCity(isActive ? null : city.location)
                    }
                    onMouseEnter={() =>
                      !isActive && setActiveCity(city.location)
                    }
                    onMouseLeave={() =>
                      !("ontouchstart" in window) && setActiveCity(null)
                    }
                    aria-label={`View projects in ${city.location}`}
                  >
                    <div
                      className={`relative transition-transform duration-300 ${isActive ? "scale-150" : "scale-100 hover:scale-125"
                        }`}
                    >
                      {/* Glow */}
                      <div
                        className={`absolute inset-0 rounded-full blur-md ${glowColor} opacity-60 animate-pulse`}
                      />

                      {/* Pin */}
                      <MapPin
                        className={pinColor}
                        size={isActive ? 36 : 28}
                        fill="currentColor"
                        strokeWidth={1.5}
                      />
                    </div>

                    {/* Tooltip – visible on hover (desktop) or tap (mobile) */}
                    {isActive && (
                      <div className="absolute left-1/2 top-full mt-4 transform -translate-x-1/2 w-80 z-50 pointer-events-none">
                        <div className="bg-gray-900 border border-purple-500/30 rounded-lg p-5 shadow-2xl">
                          <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gray-900 border-l border-t border-purple-500/30 rotate-45" />

                          <h3 className="text-xl font-bold text-white mb-4 text-center">
                            {city.location} ({city.projects.length} Project
                            {city.projects.length > 1 ? "s" : ""})
                          </h3>

                          <div className="space-y-3 max-h-96 overflow-y-auto">
                            {city.projects.map((proj) => (
                              <div
                                key={proj.id}
                                className="border border-gray-700 rounded-lg p-3 bg-gray-800/50"
                              >
                                <div className="flex justify-between items-start">
                                  <p className="text-white font-medium text-sm">
                                    {proj.clientName}
                                  </p>
                                  <span
                                    className={`text-xs px-2 py-1 rounded-full ml-2 ${proj.status === "completed"
                                      ? "bg-green-500/20 text-green-400"
                                      : "bg-purple-500/20 text-purple-400"
                                      }`}
                                  >
                                    {proj.status === "completed"
                                      ? "Completed"
                                      : "Ongoing"}
                                  </span>
                                </div>
                              </div>
                            ))}
                          </div>

                          {city.mapsLink && (
                            <a
                              href={city.mapsLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-purple-400 hover:text-purple-300 text-sm mt-4"
                              onClick={(e) => e.stopPropagation()}
                            >
                              View on Google Maps
                            </a>
                          )}
                        </div>
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Legend */}
          <div className="mt-10 flex flex-wrap justify-center gap-8 text-sm">
            <div className="flex items-center gap-2">
              <MapPin
                className="text-purple-400"
                size={24}
                fill="currentColor"
              />
              <span className="text-gray-300">Ongoing Projects</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin
                className="text-green-400"
                size={24}
                fill="currentColor"
              />
              <span className="text-gray-300">Completed Projects</span>
            </div>
          </div>

          {/* Mobile hint */}
          <p className="text-center text-gray-500 text-xs mt-4">
            Tap on any pin to view projects
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProjectsMap;
