/**
 * Portfolio
 * Copyright (C) 2024 Maxim (https://github.com/max1mde/portfolio)
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published
 * by the Free Software Foundation.
 */

import config from "/CONFIG.json";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import ActionButtons from "./action_buttons";

export default function ProfileSection() {
  const homeConfig = config.pages.home;

  return (
    <div className="flex flex-col items-center w-full gap-8">
      <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
        {homeConfig.profile_image && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative w-40 h-40 md:w-[350px] md:h-[350px]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-transparent rounded-[30%_70%_70%_30%/30%_30%_70%_70%] overflow-hidden shadow-lg">
              <img
                src={homeConfig.profile_image}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        )}

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col gap-6 text-center md:text-left"
        >
          <TypeAnimation
            sequence={[500, homeConfig.about_me]}
            wrapper="h2"
            className="c-cursor-text text-4xl md:text-5xl font-bold"
            cursor={false}
            speed={50}
          />
          <TypeAnimation
            sequence={[1000, homeConfig.description]}
            wrapper="p"
            className="c-cursor-text text-xl md:text-2xl w-full md:w-[500px] text-muted-foreground"
            cursor={false}
            speed={50}
          />
          <div className="flex gap-4 justify-center md:justify-start mt-4">
            <ActionButtons />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
