"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { navLinks, schedule } from "@/data"
import { useState } from "react"

export const ScheduleTable = () => (
  <>
    <table className="mt-8 w-full">
      <thead>
        <tr>
          <th colSpan={2} className="text-center text-2xl font-semibold">
            День 1
          </th>
        </tr>
      </thead>
      <tbody>
        {(
          Object.keys(schedule.firstDay) as (keyof typeof schedule.firstDay)[]
        ).map((key, i) => (
          <tr
            key={`${i}${key}`}
            className="border-b even:bg-zinc-100 last-of-type:border-none">
            <td className="p-4">{key}</td>
            <td className="p-4">{schedule.firstDay[key]}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <table className="mt-8 w-full">
      <thead>
        <tr>
          <th colSpan={2} className="text-center text-2xl font-semibold">
            День 2
          </th>
        </tr>
      </thead>
      <tbody>
        {(
          Object.keys(schedule.secondDay) as (keyof typeof schedule.secondDay)[]
        ).map((key, i) => (
          <tr
            key={`${key}${i}`}
            className="border-b even:bg-zinc-100 last-of-type:border-none">
            <td className="p-4">{key}</td>
            <td className="p-4">{schedule.secondDay[key]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </>
)

export const Button = ({
  children,
  target,
}: {
  children: React.ReactNode
  target: string
}) => (
  <button
    onClick={() => {
      const y = document.getElementById(target)
      let offset = y?.offsetTop
      if (screen.width < 640) offset! -= 64
      // if (offset && offset !== 0) offset -= 32
      console.log(y?.offsetTop)
      scrollTo({ top: offset, left: 0, behavior: "smooth" })
    }}
    className="flex items-center justify-center gap-1.5 transition-colors duration-300 ease-out hover:text-zinc-600">
    {children}
  </button>
)

export const Navigation = ({ className }: { className?: string }) => (
  <nav
    className={`${className} select-none items-center justify-center py-8 sm:flex`}>
    <ul className="flex flex-col items-center justify-center gap-4 sm:flex-row">
      {navLinks.map((link, idx) => (
        <li
          key={idx}
          className="sm:border-r sm:pr-4 sm:last-of-type:border-none sm:last-of-type:pr-0">
          <Button target={link.target}>{link.name}</Button>
        </li>
      ))}
    </ul>
  </nav>
)

export const MobileNav = () => {
  const [isOpen, setOpen] = useState(false)
  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "anticipate", duration: 2 }}
      className="sticky top-0 z-50 bg-white shadow-sm sm:hidden">
      <div className="mx-auto w-full px-2 sm:px-6 lg:px-8 xl:px-32">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              className="inline-flex items-center justify-center rounded-md p-2 text-black focus:outline-none"
              type="button"
              aria-expanded="false"
              onClick={() => setOpen(!isOpen)}>
              <span className="sr-only">Открыть меню</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                aria-hidden="true"
                className="relative block h-6 w-6">
                <motion.path
                  className="absolute"
                  animate={isOpen ? "open" : "closed"}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  variants={{ open: { opacity: 0 }, closed: { opacity: 1 } }}
                  d="M3 6h18"
                />
                <motion.path
                  variants={{ open: { opacity: 0 }, closed: { opacity: 1 } }}
                  animate={isOpen ? "open" : "closed"}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  d="M3 12h18"
                />
                <motion.path
                  animate={isOpen ? "open" : "closed"}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  variants={{ open: { opacity: 0 }, closed: { opacity: 1 } }}
                  d="M3 18h18"
                />
                <motion.path
                  variants={{ open: { opacity: 1 }, closed: { opacity: 0 } }}
                  animate={isOpen ? "open" : "closed"}
                  d="M18 6L6 18"
                  className={`${isOpen ? "block" : "hidden"}`}
                />
                <motion.path
                  variants={{ open: { opacity: 1 }, closed: { opacity: 0 } }}
                  animate={isOpen ? "open" : "closed"}
                  d="M6 6l12 12"
                  className={`${isOpen ? "block" : "hidden"}`}
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <button
              onClick={() => {
                scrollTo({ top: 0, left: 0, behavior: "smooth" })
              }}>
              <span className="text-2xl font-semibold">C&E</span>
            </button>
            <motion.div
              variants={{ open: { opacity: 1 }, closed: { opacity: 0 } }}
              animate={isOpen ? "open" : "closed"}
              className={`${isOpen ? "block" : "hidden"} absolute top-[64px] flex h-[calc(100vh-64px)] w-screen flex-col items-center gap-8 bg-black bg-opacity-85 pt-8 text-xl text-white backdrop-blur-md`}>
              {navLinks.map((link, idx) => (
                <button
                  key={idx}
                  className="list-none"
                  onClick={() => {
                    const y = document.getElementById(link.target)
                    let offset = y?.offsetTop
                    console.log(y?.offsetTop)
                    scrollTo({ top: offset! - 64, left: 0, behavior: "smooth" })
                    setOpen(!isOpen)
                  }}>
                  {link.name}{" "}
                </button>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}

export const Section = ({
  children,
  id,
  className,
}: Readonly<{
  children: React.ReactNode
  id: string
  className?: string
}>) => (
  <section
    id={id}
    className={`${className} flex min-h-[calc(100vh-64px)] w-screen flex-col items-center justify-center odd:bg-gradient-to-b odd:from-zinc-50 odd:to-zinc-100 sm:min-h-screen`}>
    <div className="flex w-full max-w-4xl flex-col items-center justify-center gap-4 bg-white px-4 py-8">
      {children}
    </div>
  </section>
)

export const FillerImage = ({
  src,
  alt,
  className,
}: {
  src: string
  alt?: string
  className?: string
}) => (
  <Image
    src={src}
    quality={100}
    priority
    // TODO: sizes=""
    className={`${className} pointer-events-none select-none object-cover`}
    alt={alt || ""}
    fill
  />
)

export const ScrollToContentButton = () => (
  <motion.button
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ ease: "anticipate", duration: 1.5, delay: 2 }}
    className="absolute bottom-24 sm:bottom-0 z-20 flex h-16 w-full items-center justify-center text-white transition-colors duration-300 ease-out hover:text-zinc-600 sm:text-black sm:short:hidden"
    onClick={() => {
      const y = document.getElementById("place")
      let offset = y?.offsetTop
      if (screen.width < 640) offset! -= 64
      scrollTo({ top: offset, left: 0, behavior: "smooth" })
    }}>
    <svg
      className="h-8 w-8"
      fill="none"
      height="24"
      shapeRendering="geometricPrecision"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      width="24"
      aria-hidden="true">
      <path d="M6 9l6 6 6-6" />
    </svg>
  </motion.button>
)

export const ScrollUpButton = () => (
  <button
    className="transition-colors duration-300 ease-out hover:text-zinc-600"
    onClick={() => {
      scrollTo({ top: 0, left: 0, behavior: "smooth" })
    }}>
    <svg
      className="h-8 w-8"
      fill="none"
      height="24"
      shapeRendering="geometricPrecision"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      width="24"
      aria-hidden="true">
      <path d="M18 15l-6-6-6 6" />
    </svg>
  </button>
)

export const TelegramIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 48 48"
    // strokeWidth={1.5}
    // stroke="currentColor"
    className={className}>
    <path d="M41.4193 7.30899C41.4193 7.30899 45.3046 5.79399 44.9808 9.47328C44.8729 10.9883 43.9016 16.2908 43.1461 22.0262L40.5559 39.0159C40.5559 39.0159 40.3401 41.5048 38.3974 41.9377C36.4547 42.3705 33.5408 40.4227 33.0011 39.9898C32.5694 39.6652 24.9068 34.7955 22.2086 32.4148C21.4531 31.7655 20.5897 30.4669 22.3165 28.9519L33.6487 18.1305C34.9438 16.8319 36.2389 13.8019 30.8426 17.4812L15.7331 27.7616C15.7331 27.7616 14.0063 28.8437 10.7686 27.8698L3.75342 25.7055C3.75342 25.7055 1.16321 24.0823 5.58815 22.459C16.3807 17.3729 29.6555 12.1786 41.4193 7.30899Z" />
  </svg>
)

// export const FadeInWhenVisible = ({ children }: { children: React.ReactNode }) => (
//   <motion.div
//     className="flex w-full max-w-4xl flex-col items-center justify-center gap-4 px-8 sm:px-0"
//     initial="hidden"
//     whileInView="visible"
//     viewport={{ once: true }}
//     transition={{ duration: 1 }}
//     variants={{
//       visible: { opacity: 1 },
//       hidden: { opacity: 0 },
//     }}>
//     {children}
//   </motion.div>
// )

export const Header2 = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-center text-3xl font-medium sm:text-4xl">{children}</h2>
)

export const Header3 = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => <h3 className={`${className} text-2xl font-medium`}>{children}</h3>
