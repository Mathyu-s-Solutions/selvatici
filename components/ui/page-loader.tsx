"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function PageLoader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let minTimePassed = false;
    let pageLoaded = document.readyState === "complete";

    const tryDismiss = () => {
      if (minTimePassed && pageLoaded) {
        setVisible(false);
        // Force-clear any stale overflow from previous HMR renders
        document.body.style.removeProperty("overflow");
      }
    };

    const minTimer = setTimeout(() => {
      minTimePassed = true;
      tryDismiss();
    }, 1400);

    const onLoad = () => {
      pageLoaded = true;
      tryDismiss();
    };

    if (!pageLoaded) {
      window.addEventListener("load", onLoad);
    }

    return () => {
      clearTimeout(minTimer);
      window.removeEventListener("load", onLoad);
      document.body.style.removeProperty("overflow");
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="page-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease }}
          className="pointer-events-auto fixed inset-0 z-9999 flex flex-col items-center justify-center bg-[linear-gradient(180deg,#faf4eb_0%,#f6efe4_46%,#f3ecdf_100%)]"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(255,176,103,0.15),transparent_50%)]" />

          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease }}
            className="relative"
          >
            <Image
              src="/images/logos/COMPLETO/Logo_BASE_DEF-cropped.png"
              alt="I Selvatici"
              width={200}
              height={56}
              priority
              className="h-auto w-40 sm:w-48"
            />
          </motion.div>

          <div className="mt-8 flex gap-1.5">
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: [0, 1, 0], scale: [0.5, 1, 0.5] }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeInOut",
                }}
                className="block size-1.5 rounded-full bg-(--peach)"
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
