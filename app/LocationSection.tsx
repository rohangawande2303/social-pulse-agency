"use client";

import React, { useState } from "react";
import Link from "next/link";
import { MapPin, Clock } from "lucide-react";
import { motion } from "framer-motion";

// Card components
const Card = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={`rounded-lg border border-white/20 bg-black ${className}`}
    {...props}
  />
);

const CardHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={`flex flex-col space-y-1.5 p-6 ${className}`} {...props} />
);

const CardTitle = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) => (
  <h3
    className={`text-2xl font-semibold leading-none tracking-tight text-white ${className}`}
    {...props}
  />
);

const CardContent = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={`p-6 pt-0 ${className}`} {...props} />
);

const LocationSection = () => {
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  // Function to handle iframe lazy loading
  const handleMapClick = () => {
    setIsMapLoaded(true); // This triggers the map iframe to load
  };

  return (
    <div className="bg-black text-white py-16">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4"
      >
        <div className="flex flex-col lg:flex-row items-start justify-between gap-8">
          <motion.div
            className="w-full lg:w-1/2 space-y-6"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <MapPin className="h-5 w-5" />
                  Office Address
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Shop no 17, Shree Kolungade CHS LTD, C-Wing, opp. Jagmata
                  Mandir, Kolungade Society, Uthalsar, Thane West, Thane,
                  Maharashtra 400601
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <Clock className="h-5 w-5" />
                  Office Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Monday - Saturday: 10:00 AM - 8:00 PM
                </p>
                <p className="text-gray-300">Sunday: Closed</p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            className="w-full lg:w-1/2"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link
              href="https://maps.app.goo.gl/swowaPiBVAYhNMkv9"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleMapClick} // Trigger lazy load when clicked
            >
              <motion.div
                className="relative w-full h-[310px] overflow-hidden rounded-lg shadow-lg transition-transform hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="w-full h-full">
                  {/* Lazy-load the map iframe only when the user clicks */}
                  {isMapLoaded && (
                    <iframe
                      width="100%"
                      height="100%"
                      id="gmap_canvas"
                      src="https://maps.google.com/maps?q=Social+Pulse+Agency&t=&z=12&ie=UTF8&iwloc=&output=embed"
                      frameBorder="0"
                      scrolling="no"
                      marginHeight={0}
                      marginWidth={0}
                      title="Social Pulse Agency Location"
                    ></iframe>
                  )}
                </div>
                <div
                  className="absolute inset-0 bg-transparent"
                  aria-hidden="true"
                ></div>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default LocationSection;
