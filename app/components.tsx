import { navLinks, schedule } from "./data"

export const ScheduleTable = () => (
  <>
  <table className="mt-8 w-full">
    <thead>
      <tr>
        <th colSpan={2} className="text-center text-2xl font-semibold">День 1</th>
      </tr>
    </thead>
    <tbody>
      {(Object.keys(schedule.firstDay) as (keyof typeof schedule.firstDay)[]).map((key, i) => (
        <tr key={`${i}${key}`} className="border-b even:bg-gray-100 last-of-type:border-none">
          <td className="p-4">{key}</td>
          <td className="p-4">{schedule.firstDay[key]}</td>
        </tr>
      ))}
    </tbody>
  </table>
  <table className="mt-8 w-full">
    <thead>
      <tr>
        <th colSpan={2} className="text-center text-2xl font-semibold">День 2</th>
      </tr>
    </thead>
    <tbody>
      {(Object.keys(schedule.secondDay) as (keyof typeof schedule.secondDay)[]).map((key, i) => (
        <tr key={`${key}${i}`} className="border-b even:bg-gray-100 last-of-type:border-none">
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
      // if (offset && offset !== 0) offset -= 32
      console.log(y?.offsetTop)
      scrollTo({ top: offset, left: 0, behavior: "smooth" })
    }}
    className="flex items-center justify-center gap-1.5 transition-colors duration-300 ease-out hover:text-gray-600">
    {children}
  </button>
)

export const Navigation = () => (
  <nav className="hidden items-center justify-center py-4 sm:flex">
    <ul className="flex items-center justify-center gap-4">
      {navLinks.map((link, idx) => (
        <li
          key={idx}
          className="border-r pr-4 last-of-type:border-none last-of-type:pr-0">
          <Button target={link.target}>{link.name}</Button>
        </li>
      ))}
    </ul>
  </nav>
)

export const Section = ({
  children,
  id,
}: Readonly<{
  children: React.ReactNode
  id: string
}>) => (
  <section
    id={id}
    className="flex w-screen flex-col items-center justify-center even:bg-gray-50">
    <div className="flex w-full max-w-4xl flex-col items-center justify-center gap-4 px-4 py-8 sm:px-4 sm:py-16">
      {children}
    </div>
  </section>
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
  <h2 className="text-center text-3xl font-semibold sm:text-4xl">{children}</h2>
)

export const Header3 = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => <h3 className={`${className} text-2xl font-medium`}>{children}</h3>
