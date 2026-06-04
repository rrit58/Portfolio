import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { LuUser, LuMail, LuMessageSquare, LuSend, LuMapPin, LuClock, LuLoaderCircle } from "react-icons/lu";
import SectionHeading from "./SectionHeading.tsx";
import socials from "../data/socials.ts";

const highlights = [
  { label: "Email", icon: LuMail, value: socials.Mail },
  { label: "Based in", icon: LuMapPin, value: "India" },
  { label: "Response time", icon: LuClock, value: "Usually within 24 hours" },
];

const ContactSection = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (loading) return;

    try {
      setLoading(true);
      const response: any = await axios.post(`${import.meta.env.VITE_API_URL}/send-message`, formData);
      if (response.status === 200) {
        toast.success("Message sent successfully!");
        setFormData({
          fullName: "",
          email: "",
          message: "",
        });
      }

    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data.message || "Something went wrong. Please try again!");
        console.error("Error submitting form:", error.response?.data);
      } else {
        toast.error("Something went wrong. Please try again!");
        console.error("Error submitting form:", error);
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="relative max-w-7xl mx-auto px-6 lg:px-0 py-10 md:py-25">
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />

      <SectionHeading
        eyebrow="Let's Collaborate"
        title="Contact Me"
        description="Got a question or an idea? Send me a message and I'll get back to you soon."
      />

      <div className="relative mt-14 grid lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
        {/* LEFT — Get In Touch */}
        <div className="relative gradient-card border border-border rounded-3xl p-8 md:p-10 overflow-hidden">
          <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-primary/20 blur-3xl pointer-events-none" />
          <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-accent/20 blur-3xl pointer-events-none" />

          <div className="relative flex flex-col h-full">
            <div className="inline-flex w-fit mx-auto items-center justify-center gap-2 px-4 py-2 rounded-full border border-emerald-500/30 bg-emerald-500/10">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
              </span>
              <span className="text-sm font-medium text-emerald-300 leading-none whitespace-nowrap">
                Available for new opportunities
              </span>
            </div>

            <span className="text-5xl text-center font-extrabold mt-4 tracking-wide uppercase text-primary">
              Get in Touch
            </span>

            <p className="mt-5 text-md text-muted-foreground leading-relaxed text-center">
              Whether you have a project in mind, a role to discuss or just want to say hi —
              my inbox is always open. I'll reply as soon as I can.
            </p>

            {/* Contact Highlights */}
            <div className="mt-8 space-y-5">
              {highlights.map((highlight) => (
                <div key={highlight.label} className="flex items-center gap-4 p-4 rounded-2xl border border-border bg-card/40 hover:bg-card/70 hover:border-primary/40 transition-smooth">
                  <div className="h-11 w-11 rounded-xl flex items-center justify-center gradient-primary text-primary-foreground glow-sm">
                    <highlight.icon size={20} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">
                      {highlight.label}
                    </p>
                    <p className="font-semibold text-foreground">{highlight.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT — Form */}
        <form onSubmit={handleSubmit} className="relative gradient-card border border-border rounded-3xl p-8 md:p-10 shadow-[0_20px_60px_-20px_oklch(0.68_0.22_295/0.3)] flex flex-col">
          <h3 className="text-2xl md:text-3xl font-bold gradient-text">Send a Message</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Fill out the form below and I'll get back to you shortly.
          </p>

          <div className="mt-6 space-y-5 flex-1">
            <div className="relative">
              <label className="block text-xs font-medium text-muted-foreground mb-2 ml-1">
                Full Name
              </label>
              <div className="relative">
                <LuUser
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
                />
                <input
                  required
                  type="text"
                  placeholder="John Doe"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-input/50 border border-border text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-smooth"
                />
              </div>
            </div>

            <div className="relative">
              <label className="block text-xs font-medium text-muted-foreground mb-2 ml-1">
                Email
              </label>
              <div className="relative">
                <LuMail
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
                />
                <input
                  required
                  type="email"
                  placeholder="abc@example.com"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-input/50 border border-border text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-smooth"
                />
              </div>
            </div>

            <div className="relative">
              <label className="block text-xs font-medium text-muted-foreground mb-2 ml-1">
                Message
              </label>
              <div className="relative">
                <LuMessageSquare
                  size={18}
                  className="absolute left-4 top-4 text-muted-foreground"
                />
                <textarea
                  required
                  rows={3}
                  placeholder="Tell me about your project, idea, or question..."
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-input/50 border border-border text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-smooth resize-none"
                />
              </div>
            </div>
          </div>

          <button type="submit" disabled={loading} className="cursor-pointer mt-6 w-full inline-flex items-center justify-center gap-2 gradient-primary text-primary-foreground px-6 py-3.5 rounded-xl font-semibold transition-smooth hover:opacity-90 glow-sm">
            {loading ? (
              <>
                <LuLoaderCircle size={18} className="animate-spin" />
              </>
            ) : (
              <>
                <LuSend size={18} />
                Send Message
              </>
            )}
          </button>
        </form>
      </div>

    </section>
  );
}

export default ContactSection;