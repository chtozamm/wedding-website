"use client"

import {
  FillerImage,
  MobileNav,
  Navigation,
  ScrollToContentButton,
} from "@/components"
import { motion } from "framer-motion"

const Header = () => (
  <>
    <MobileNav />
    <header className="relative flex h-[calc(100vh-64px)] flex-col justify-between sm:min-h-screen">
      <div>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "anticipate", duration: 2 }}
          className="mx-auto my-8 hidden select-none text-center text-5xl font-light sm:block md:text-6xl">
          Севастьян & Екатерина
        </motion.h1>
        <div className="relative mt-16 flex h-[calc(100vh-64px)] w-screen justify-center sm:hidden">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "easeOut", duration: 1.5 }}
            className="font-base absolute z-40 mx-auto flex select-none flex-col gap-4 text-center text-5xl text-white sm:hidden sm:text-6xl sm:font-medium">
            <span>Севастьян</span> <span>&</span> <span>Екатерина</span>
          </motion.h1>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "anticipate", duration: 3, delay: 0.5 }}
          className="absolute top-0 z-10 flex h-[calc(100vh-64px)] w-screen items-center justify-center sm:relative sm:aspect-[3/1] sm:h-auto sm:shadow-sm">
          <FillerImage
            src={"/images/jeremy-wong-weddings-464ps_nOflw-unsplash.jpg"}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "anticipate", duration: 1.5, delay: 2 }}>
          <Navigation className="hidden sm:flex" />
        </motion.div>
      </div>
      <ScrollToContentButton />
    </header>
  </>
)

export default Header
