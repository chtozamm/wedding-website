import {
  Header2,
  Header3,
  Section,
  ScheduleTable,
  TelegramIcon,
} from "@/components"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { information } from "@/data"

export default function Home() {
  return (
    <>
      <Header />
      <main className="mx-auto flex w-full flex-col items-center justify-center">
        <Section id="place" className="select-text">
          <article className="mt-16 flex w-full flex-col gap-8">
            <Header2>{information.heading}</Header2>
            <p className="w-full text-center text-lg">{information.body}</p>
          </article>
          <div className="mt-8 flex flex-col items-center justify-center gap-2 text-2xl font-medium">
            <p>{information.place}</p>
            <span className="w-full border-b"></span>
            <time dateTime="2022-07-15" className="text-xl font-normal">
              {information.date}
            </time>
            <br />
          </div>
        </Section>
        <Section id="schedule" className="select-text">
          <Header2>Программа</Header2>
          <ScheduleTable />
        </Section>
        <Section id="dress-code">
          {/* <span className="flex w-full items-center justify-center gap-3 stroke-black stroke-2">
            <span className="w-full border-b"></span>
            </span> */}
          <Header2>Дресс-код</Header2>
          {/* <span className="flex w-full items-center justify-center gap-3 stroke-black stroke-2">
            <span className="w-full border-b"></span>
            <svg
              viewBox="0 0 79 35"
              fill="none"
              className="w-32"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M33.066 11.2224C25.6255 4.12759 10.2485 1.4245 6.28029 2.10042C0.327907 3.11399 0.823951 28.9594 6.2803 32C21.6573 30.4797 26.6176 26.4255 33.066 22.8781M33.066 11.2224C33.066 11.2224 35.5462 9.19527 39.0184 9.19527C42.4906 9.19527 44.9708 11.2224 44.9708 11.2224M33.066 11.2224V22.8781M33.066 22.8781C33.066 22.8781 35.0501 24.3984 39.0184 24.3984C42.9867 24.3984 44.9708 22.8781 44.9708 22.8781M44.9708 11.2224C52.4113 4.12759 67.7883 1.4245 71.7565 2.10041C77.7089 3.11398 77.2128 28.9594 71.7565 32C56.3795 30.4797 51.4192 26.4255 44.9708 22.8781M44.9708 11.2224V22.8781" />
            </svg>
            <span className="w-full border-b"></span>
          </span> */}
          <div className="mt-8 flex w-full flex-col justify-between">
            <Header3 className="px-4 text-left">Мужчины</Header3>
            <div className="mt-8 flex w-full justify-between">
              <div className="h-[360px] w-64 bg-zinc-100"></div>
              <div className="h-[360px] w-64 bg-zinc-100"></div>
              <div className="h-[360px] w-64 bg-zinc-100"></div>
            </div>
          </div>
          <div className="mt-8 flex w-full flex-col justify-between">
            <Header3 className="px-4 text-right">Девушки</Header3>
            <div className="mt-8 flex w-full justify-between">
              <div className="h-[360px] w-64 bg-zinc-100"></div>
              <div className="h-[360px] w-64 bg-zinc-100"></div>
              <div className="h-[360px] w-64 bg-zinc-100"></div>
            </div>
          </div>
        </Section>
        <Section id="chat">
          <p className="select-text text-balance text-center">
            Предлагаем присоединиться к нашему{" "}
            <span className="cursor-pointer text-blue-400 underline">чату</span>
            , где вы можете подробнее узнать о мероприятии, а также задать
            интересующие вас вопросы!
          </p>
          <TelegramIcon className="mt-8 h-8 w-8 fill-black sm:h-12 sm:w-12" />
        </Section>
      </main>
      <Footer />
    </>
  )
}
