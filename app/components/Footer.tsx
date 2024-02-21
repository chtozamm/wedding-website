import { Navigation, ScrollUpButton, FillerImage } from "@/components"

const Footer = () => (
  <footer className="sm:min-h-screen h-[calc(100vh-64px)] flex flex-col items-center gap-8 pb-8">
    <div className="relative aspect-video w-screen bg-zinc-100 sm:aspect-[2.5/1]">
      <FillerImage
        src={"/images/andreas-ronningen-S2YssLw97l4-unsplash.jpg"}
        className="object-[50%]"
      />
    </div>
    <Navigation />
    <ScrollUpButton />

  </footer>
)

export default Footer
