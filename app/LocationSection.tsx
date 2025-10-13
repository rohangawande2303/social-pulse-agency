"use client";

import React, { useState, useEffect } from "react";
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

  // Ensures that the map iframe loads only when visible and clicked
  const handleMapClick = () => {
    setIsMapLoaded(true); // Trigger iframe loading on map click
  };

  // Optionally, we can add an effect to preload the iframe on mount
  useEffect(() => {
    setIsMapLoaded(true); // Automatically trigger map loading when component mounts
  }, []);

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
              href="https://www.google.com/maps/place/Social+Pulse+Agency+-+Digital+Marketing+Agency+in+Thane+Mumbai+%7C+SEO+Company+%7C+Website+Development+Company/@19.2043237,72.9756779,19.5z/data=!4m6!3m5!1s0x3be7b9f9da04b8f7:0x9b454855f073e6c2!8m2!3d19.2043763!4d72.9754963!16s%2Fg%2F11xm8kb2y0?entry=ttu&g_ep=EgoyMDI1MTAwOC4wIKXMDSoASAFQAw%3D%3D"
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
                  {/* Render the iframe immediately, but only trigger its source loading when clicked */}
                  {isMapLoaded ? (
                    <iframe
                      width="100%"
                      height="100%"
                      id="gmap_canvas"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.789911999971!2d72.97292137520859!3d19.204376282026775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b9f9da04b8f7%3A0x9b454855f073e6c2!2sSocial%20Pulse%20Agency%20-%20Digital%20Marketing%20Agency%20in%20Thane%20Mumbai%20%7C%20SEO%20Company%20%7C%20Website%20Development%20Company!5e0!3m2!1sen!2sin!4v1760341590190!5m2!1sen!2sin"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      frameBorder={0}
                      scrolling="no"
                      marginHeight={0}
                      marginWidth={0}
                      title="Social Pulse Agency Location"
                    ></iframe>
                  ) : (
                    <div className="flex justify-center items-center w-full h-full text-white text-lg">
                      Click to View Map
                    </div>
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
