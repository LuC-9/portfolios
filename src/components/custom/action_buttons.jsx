/**
 * Portfolio
 * Copyright (C) 2024 Maxim (https://github.com/maximjsx/portfolio)
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published
 * by the Free Software Foundation.
 */

import Button from "./button";
import config from "/CONFIG.json";
import { motion } from "framer-motion";

export default function ActionButtons() {
  const homeConfig = config.pages.home;

  if (!homeConfig.action_buttons) return null;

  return (
    <div className="flex justify-center gap-4">
      {homeConfig.action_buttons.map((button, index) => (
        <motion.div
          key={index}
          initial={{ y: 3.125, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
        >
          <Button
            href={button.route}
            variant={button.style === "primary" ? "primary" : "secondary"}
            className="text-base px-4 py-2 md:text-lg md:px-5 md:py-2.5 xl:px-6 xl:py-3"
          >
            {button.label}
          </Button>
        </motion.div>
      ))}
    </div>
  );
}
