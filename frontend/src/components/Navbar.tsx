type NavbarProps = {
  activeSection: string;
  scrollToId: (id: string) => void;
}

const links = [
  { label: "Home", to: "home" },
  { label: "About", to: "about" },
  { label: "Experience", to: "experience" },
  { label: "Portfolio", to: "portfolio" },
  { label: "Contact", to: "contact" },
];
const Navbar = ({ scrollToId, activeSection }: NavbarProps) => {

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border/40">
      <nav className="max-w-7xl mx-auto px-6 lg:px-5 h-16 flex items-center justify-between">
        <button onClick={() => {scrollToId("home")}} className="text-xl font-bold gradient-text tracking-tight cursor-pointer">
          Rohit Raj
        </button>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <button key={link.label} onClick={() => {scrollToId(link.to)}}
              className={activeSection === link.to ? `text-primary font-medium border-b-2 border-primary pb-1 cursor-pointer`
              : `text-sm text-muted-foreground hover:text-foreground transition-smooth cursor-pointer`}
            >
              {link.label}
            </button>
          ))}
        </div>

        <a href="" className="border border-primary/40 bg-primary/5 backdrop-blur px-5 py-2 rounded-xl font-medium text-foreground transition-smooth hover:border-primary hover:bg-primary/10">
          Resume
        </a>
      </nav>

    </header>
  )
}

export default Navbar