"use client"

import { motion } from "framer-motion"
import {
  Button,
  Header2,
  Header3,
  Navigation,
  Section,
  ScheduleTable,
  TelegramIcon,
} from "./components"

export default function Home() {
  return (
    <div id="top" className="flex flex-col text-lg sm:pt-4">
      <header className="flex-col gap-4 sm:flex sm:pt-8">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "anticipate", duration: 2 }}
          className="mx-auto hidden text-center text-4xl font-medium sm:block sm:text-6xl">
          Севастьян & Екатерина
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.75,
            ease: "anticipate",
            duration: 2,
          }}>
          <Navigation />
        </motion.div>
        <div className="relative min-h-screen flex w-screen items-center justify-center sm:hidden">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "easeOut", duration: 1.5 }}
            className="font-base absolute z-50 mx-auto flex flex-col items-center justify-center gap-4 text-center text-5xl sm:hidden sm:text-6xl sm:font-medium">
            <span>Севастьян</span> <span>&</span> <span>Екатерина</span>
          </motion.h1>
        </div>
        {/* Mobile */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, ease: "anticipate", duration: 1.5 }}
          className="absolute h-screen top-0 z-10 flex w-screen items-center justify-center bg-gray-100 sm:hidden"
        />
        {/* END Mobile */}
        
      </header>
      <main 
      className="mx-auto flex w-full flex-col items-center justify-center gap-32 sm:gap-8 sm:pt-8">
        {/* Desktop */}
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "640px" }}
          transition={{ delay: 1.25, ease: "anticipate", duration: 3 }}
          className="relative hidden w-screen items-center justify-center bg-gray-100 sm:flex"
        />
        <motion.div
          initial={{ height: "640px" }}
          animate={{ height: 0 }}
          transition={{
            delay: 1.25,
            ease: "anticipate",
            duration: 3,
          }}
          className="relative hidden w-screen items-center justify-center sm:flex"
        />
        {/* END Desktop */}
        <Section id="place">
          <article className="flex w-full flex-col gap-8 mt-16">
            <Header2>Дорогие друзья!</Header2>
            <p className="w-full text-center text-lg">Приглашаем вас...</p>
          </article>
          <div className="mt-32 flex flex-col items-center justify-center gap-2 text-2xl font-medium">
            <p>Мальская долина</p>
            <span className="w-full border-b"></span>
            <time dateTime="2022-07-15" className="text-xl font-normal">
              15 июля 2022
            </time>
          </div>
        </Section>
        <Section id="schedule">
          <Header2>Программа</Header2>
          <ScheduleTable />
        </Section>
        <Section id="dress-code">
          <Header2>Дресс-код</Header2>
          <div className="mt-8 flex w-full flex-col justify-between">
            <Header3 className="text-left px-4">Мужчины</Header3>
            <div className="mt-8 flex w-full justify-between">
              <div className="h-[360px] w-64 bg-gray-100"></div>
              <div className="h-[360px] w-64 bg-gray-100"></div>
              <div className="h-[360px] w-64 bg-gray-100"></div>
            </div>
          </div>
          <div className="mt-8 flex w-full flex-col justify-between">
            <Header3 className="text-right px-4">Девушки</Header3>
            <div className="mt-8 flex w-full justify-between">
              <div className="h-[360px] w-64 bg-gray-100"></div>
              <div className="h-[360px] w-64 bg-gray-100"></div>
              <div className="h-[360px] w-64 bg-gray-100"></div>
            </div>
          </div>
        </Section>
        <Section id="chat">
          <p className="text-balance text-center">
            Предлагаем присоединиться к нашему{" "}
            <span className="cursor-pointer text-blue-400 underline">чату</span>
            , где вы можете подробнее узнать о мероприятии, а также задать
            интересующие вас вопросы!
          </p>
          <TelegramIcon className="mt-8 h-16 w-16 fill-black" />
        </Section>
        <div className="w-screen bg-gray-100 h-[480px] sm:h-[640px]" />
      </main>
      <footer className="flex flex-col items-center justify-center gap-8 py-24">
        <Navigation />
        <Button target="top">
          <svg
            fill="none"
            shapeRendering="geometricPrecision"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            width="16"
            height="16"
            viewBox="0 0 24 24">
            <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
            <path d="M16 14l-4-4-4 4" fill="none" />
          </svg>
          <span className="text-base">К началу</span>
        </Button>
      </footer>
    </div>
  )
}
