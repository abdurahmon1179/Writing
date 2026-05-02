"use client";
import { useState } from "react";
import Link from "next/link";
import { Sparkles, Mail, Lock, Eye, EyeOff, ArrowRight, User, Check } from "lucide-react";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";

const planOptions = [
    {
        id: "free",
        name: "Free Starter",
        price: "Free",
        desc: "1 essay grading · 3-day roadmap",
        color: "rgba(255,255,255,0.1)",
        borderActive: "rgba(255,255,255,0.35)",
    },
    {
        id: "mastery",
        name: "Mastery Plan",
        price: "89,000 UZS",
        desc: "21-day bootcamp · Unlimited AI",
        color: "rgba(16,185,129,0.1)",
        borderActive: "rgba(16,185,129,0.55)",
        popular: true,
    },
];

const benefits = [
    "AI essay grading in under 30 seconds",
    "Band 9.0 vocabulary suggestions",
    "Personalized 21-day writing bootcamp",
    "Task 1 & Task 2 templates included",
];

export default function SignUpPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [selectedPlan, setSelectedPlan] = useState("mastery");
    const [focused, setFocused] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [step, setStep] = useState<1 | 2>(1);
    const [form, setForm] = useState({ name: "", email: "", password: "" });
    const [error, setError] = useState("");

    const supabase = createClient();
    const router = useRouter();

    const inputStyle = (name: string): React.CSSProperties => ({
        width: "100%",
        padding: "13px 16px 13px 46px",
        borderRadius: 12,
        background: focused === name ? "rgba(16,185,129,0.06)" : "rgba(255,255,255,0.05)",
        border: `1px solid ${focused === name ? "rgba(16,185,129,0.4)" : "rgba(255,255,255,0.10)"}`,
        color: "#e2f5ee",
        fontSize: "0.95rem",
        fontFamily: "'DM Sans', sans-serif",
        outline: "none",
        transition: "all 0.2s",
        boxShadow: focused === name ? "0 0 0 3px rgba(16,185,129,0.08)" : "none",
    });

    const handleNext = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        if (step === 1) {
            if (!form.email || !form.password) {
                setError("Email va parolni to'ldiring");
                return;
            }
            setStep(2);
            return;
        }

        // Step 2 - Sign Up
        setLoading(true);

        const { error: signUpError } = await supabase.auth.signUp({
            email: form.email,
            password: form.password,
            options: {
                data: { full_name: form.name },
            },
        });

        setLoading(false);

        if (signUpError) {
            setError(signUpError.message);
        } else {
            alert("✅ Ro'yxatdan muvaffaqiyatli o'tdingiz!\nEmailingizni tasdiqlang.");
            router.push("/");   // Asosiy home sahifasiga qaytish
        }
    };

    return (
        <div style={{ minHeight: "100vh", display: "flex", fontFamily: "'DM Sans', sans-serif" }}>
            {/* LEFT PANEL */}
            <div style={{
                flex: "0 0 45%",
                background: "linear-gradient(160deg,#022c22 0%,#064E3B 55%,#022c22 100%)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                padding: "48px",
                position: "relative",
                overflow: "hidden",
            }}>
                <div style={{ position: "absolute", top: "-150px", left: "-100px", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle,rgba(16,185,129,0.13) 0%,transparent 70%)", filter: "blur(80px)", pointerEvents: "none", zIndex: 0 }} />
                <div style={{ position: "absolute", bottom: "-80px", right: "-80px", width: 380, height: 380, borderRadius: "50%", background: "radial-gradient(circle,rgba(245,158,11,0.08) 0%,transparent 70%)", filter: "blur(80px)", pointerEvents: "none", zIndex: 0 }} />

                <div style={{ position: "relative", zIndex: 1 }}>
                    <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
                        <div style={{ width: 40, height: 40, borderRadius: 12, background: "linear-gradient(135deg,#10B981,#047857)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 0 20px rgba(16,185,129,0.3)" }}>
                            <Sparkles size={20} color="#fff" />
                        </div>
                        <span style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.2rem", fontWeight: 700, color: "#fff" }}>
                            IELTS Writing <span style={{ color: "#34D399" }}>Master</span>
                        </span>
                    </Link>
                </div>

                <div style={{ position: "relative", zIndex: 1 }}>
                    <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "2rem", fontWeight: 800, letterSpacing: "-0.025em", lineHeight: 1.2, marginBottom: 8 }}>
                        Join 12,000+ students<br />
                        <span style={{ background: "linear-gradient(135deg,#34D399,#F59E0B)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>scoring Band 7+</span>
                    </h2>
                    <p style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.45)", marginBottom: 36, lineHeight: 1.7 }}>
                        Start your free trial today. No credit card required.
                    </p>

                    <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 40 }}>
                        {benefits.map((b, i) => (
                            <div key={i} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                                <div style={{ width: 24, height: 24, borderRadius: "50%", background: "rgba(16,185,129,0.15)", border: "1px solid rgba(16,185,129,0.3)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                    <Check size={13} color="#34D399" />
                                </div>
                                <span style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.7)" }}>{b}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* RIGHT PANEL - FORM */}
            <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "48px 40px", background: "#022c22", position: "relative" }}>
                <div style={{ width: "100%", maxWidth: 440, position: "relative", zIndex: 1 }}>

                    {error && (
                        <div style={{ color: "#F87171", background: "rgba(248,113,113,0.1)", padding: "12px", borderRadius: 8, marginBottom: 16, textAlign: "center" }}>
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleNext}>
                        {step === 1 ? (
                            <div>
                                <button type="button" style={{ width: "100%", padding: "13px 20px", borderRadius: 12, background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", color: "#e2f5ee", marginBottom: 20 }}>
                                    Continue with Google
                                </button>

                                <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 20 }}>
                                    <div style={{ flex: 1, height: 1, background: "rgba(255,255,255,0.08)" }} />
                                    <span style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.3)" }}>or with email</span>
                                    <div style={{ flex: 1, height: 1, background: "rgba(255,255,255,0.08)" }} />
                                </div>

                                {/* Full Name */}
                                <div style={{ marginBottom: 14, position: "relative" }}>
                                    <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, color: "rgba(255,255,255,0.5)", marginBottom: 7 }}>Full Name</label>
                                    <div style={{ position: "relative" }}>
                                        <User size={16} color="rgba(255,255,255,0.3)" style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)" }} />
                                        <input type="text" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} onFocus={() => setFocused("name")} onBlur={() => setFocused(null)} placeholder="Dilnoza Toshmatova" style={inputStyle("name")} />
                                    </div>
                                </div>

                                {/* Email */}
                                <div style={{ marginBottom: 14, position: "relative" }}>
                                    <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, color: "rgba(255,255,255,0.5)", marginBottom: 7 }}>Email Address</label>
                                    <div style={{ position: "relative" }}>
                                        <Mail size={16} color="rgba(255,255,255,0.3)" style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)" }} />
                                        <input type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} onFocus={() => setFocused("email")} onBlur={() => setFocused(null)} placeholder="dilnoza@example.com" required style={inputStyle("email")} />
                                    </div>
                                </div>

                                {/* Password */}
                                <div style={{ marginBottom: 20, position: "relative" }}>
                                    <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, color: "rgba(255,255,255,0.5)", marginBottom: 7 }}>Password</label>
                                    <div style={{ position: "relative" }}>
                                        <Lock size={16} color="rgba(255,255,255,0.3)" style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)" }} />
                                        <input type={showPassword ? "text" : "password"} value={form.password} onChange={e => setForm({ ...form, password: e.target.value })} onFocus={() => setFocused("password")} onBlur={() => setFocused(null)} placeholder="Min. 8 characters" required style={{ ...inputStyle("password"), paddingRight: 46 }} />
                                        <button type="button" onClick={() => setShowPassword(!showPassword)} style={{ position: "absolute", right: 14, top: "50%", transform: "translateY(-50%)", background: "none", border: "none", color: "rgba(255,255,255,0.35)" }}>
                                            {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                                        </button>
                                    </div>
                                </div>

                                <button type="submit" style={{ width: "100%", padding: "14px 20px", borderRadius: 12, background: "linear-gradient(135deg,#10B981,#047857)", color: "#fff", fontWeight: 700 }}>
                                    Continue <ArrowRight size={16} />
                                </button>
                            </div>
                        ) : (
                            <div>
                                <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 28 }}>
                                    {planOptions.map(plan => (
                                        <div key={plan.id} onClick={() => setSelectedPlan(plan.id)} style={{ padding: "20px 22px", borderRadius: 16, background: selectedPlan === plan.id ? plan.color : "rgba(255,255,255,0.04)", border: `1px solid ${selectedPlan === plan.id ? plan.borderActive : "rgba(255,255,255,0.09)"}`, cursor: "pointer", position: "relative" }}>
                                            {plan.popular && <div style={{ position: "absolute", top: -10, right: 16, background: "linear-gradient(135deg,#10B981,#047857)", color: "#fff", padding: "3px 12px", borderRadius: 9999, fontSize: "0.66rem" }}>Recommended</div>}
                                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                                <div>{plan.name}</div>
                                                <div style={{ fontWeight: 700, color: "#34D399" }}>{plan.price}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <button type="submit" disabled={loading} style={{ width: "100%", padding: "14px 20px", borderRadius: 12, background: loading ? "#666" : "linear-gradient(135deg,#10B981,#047857)", color: "#fff", fontWeight: 700 }}>
                                    {loading ? "Creating account..." : "Create Account"}
                                </button>
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
}