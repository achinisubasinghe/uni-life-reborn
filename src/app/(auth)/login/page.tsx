import { LoginForm } from "@/components/login-form"
import { GraduationCap, MapPin, Star, ShieldCheck } from "lucide-react"

export default function LoginPage() {
  return (
    <div className="site-bg min-h-svh flex relative overflow-hidden">
      <div className="orb w-[600px] h-[600px] bg-amber-600 top-[-15%] left-[-10%]" style={{ opacity: 0.12 }} />
      <div className="orb w-[500px] h-[500px] bg-teal-700 bottom-[-10%] right-[-5%]" style={{ opacity: 0.10 }} />

      <div className="hidden lg:flex flex-col justify-between w-[45%] min-h-svh p-12 relative z-10"
        style={{ borderRight: '1px solid rgba(255,255,255,0.06)' }}
      >
        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-xl bg-amber-500/20 border border-amber-400/30">
            <span className="text-amber-300 font-bold text-lg">U</span>
          </div>
          <span className="text-white font-semibold text-lg tracking-tight">UniLife</span>
        </div>

        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold text-white leading-tight">
              Your campus,{" "}
              <span className="gradient-text">connected</span>
            </h2>
            <p className="text-white/50 text-lg leading-relaxed">
              Verified housing, food, and student services for Sri Lankan universities.
            </p>
          </div>

          <div className="space-y-4">
            {[
              { icon: MapPin, text: "Verified businesses near your campus" },
              { icon: Star, text: "Reviews written by university students" },
              { icon: ShieldCheck, text: "Reviewed listings, free for students" },
              { icon: GraduationCap, text: "Built for Sri Lankan campuses" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-3">
                <div className="flex size-8 items-center justify-center rounded-lg bg-amber-500/15 border border-amber-400/20 shrink-0">
                  <Icon className="size-4 text-amber-300" />
                </div>
                <span className="text-white/65 text-sm">{text}</span>
              </div>
            ))}
          </div>
        </div>

        <p className="text-white/25 text-xs">&copy; {new Date().getFullYear()} UniLife. All rights reserved.</p>
      </div>

      <div className="flex flex-1 flex-col items-center justify-center p-6 md:p-10 relative z-10">
        <div className="w-full max-w-md">
          <LoginForm />
        </div>
      </div>
    </div>
  )
}
