"use client";
import { useState } from "react";
import Link from "next/link";
import { Sparkles, Mail, Lock, Eye, EyeOff, ArrowRight,  } from "lucide-react";

export default function SignInPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [focused, setFocused] = useState<string | null>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => setLoading(false), 2000);
    };

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

    return (
        <div style={{
            minHeight: "100vh",
            display: "flex",
            fontFamily: "'DM Sans', sans-serif",
            position: "relative",
        }}>
            {/* ── Left panel – decorative ── */}
            <div style={{
                flex: "0 0 45%",
                background: "linear-gradient(160deg, #022c22 0%, #064E3B 50%, #022c22 100%)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                padding: "48px",
                position: "relative",
                overflow: "hidden",
            }} className="auth-left-panel">
                {/* Orbs */}
                {[
                    { w: 500, h: 500, bg: "rgba(16,185,129,0.12)", top: "-150px", left: "-150px" },
                    { w: 350, h: 350, bg: "rgba(245,158,11,0.07)", bottom: "-100px", right: "-80px", top: "auto", left: "auto" },
                ].map((o, i) => (
                    <div key={i} style={{
                        position: "absolute", borderRadius: "50%", filter: "blur(80px)",
                        pointerEvents: "none", zIndex: 0,
                        width: o.w, height: o.h,
                        background: `radial-gradient(circle, ${o.bg} 0%, transparent 70%)`,
                        top: o.top ?? "auto", left: o.left ?? "auto",
                        bottom: (o as any).bottom ?? "auto", right: (o as any).right ?? "auto",
                    }} />
                ))}

                {/* Logo */}
                <div style={{ position: "relative", zIndex: 1 }}>
                    <Link href="/" style={{
                        display: "inline-flex", alignItems: "center", gap: 10,
                        textDecoration: "none",
                    }}>
                        <div style={{
                            width: 40, height: 40, borderRadius: 12,
                            background: "linear-gradient(135deg,#10B981,#047857)",
                            display: "flex", alignItems: "center", justifyContent: "center",
                            boxShadow: "0 0 20px rgba(16,185,129,0.3)",
                        }}>
                            <Sparkles size={20} color="#fff" />
                        </div>
                        <span style={{
                            fontFamily: "'Playfair Display',serif",
                            fontSize: "1.2rem", fontWeight: 700, color: "#fff",
                        }}>
                            IELTS Writing <span style={{ color: "#34D399" }}>Master</span>
                        </span>
                    </Link>
                </div>

                {/* Center quote */}
                <div style={{ position: "relative", zIndex: 1 }}>
                    {/* Band score display */}
                    <div style={{
                        background: "rgba(255,255,255,0.05)",
                        border: "1px solid rgba(255,255,255,0.10)",
                        borderRadius: 20, padding: "28px 32px",
                        backdropFilter: "blur(16px)",
                        marginBottom: 28,
                    }}>
                        <div style={{
                            fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.1em",
                            textTransform: "uppercase", color: "rgba(255,255,255,0.35)",
                            marginBottom: 16,
                        }}>Your Progress After 21 Days</div>
                        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
                            {[
                                { label: "Task Achievement", before: 5.0, after: 7.5 },
                                { label: "Lexical Resource", before: 4.5, after: 7.0 },
                            ].map((item, i) => (
                                <div key={i}>
                                    <div style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.4)", marginBottom: 6 }}>{item.label}</div>
                                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                                        <span style={{
                                            fontFamily: "'Playfair Display',serif",
                                            fontSize: "1.6rem", fontWeight: 700, color: "#F87171",
                                        }}>{item.before}</span>
                                        <ArrowRight size={14} color="rgba(255,255,255,0.25)" />
                                        <span style={{
                                            fontFamily: "'Playfair Display',serif",
                                            fontSize: "1.6rem", fontWeight: 700, color: "#34D399",
                                        }}>{item.after}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Testimonial */}
                    <blockquote style={{
                        background: "rgba(16,185,129,0.07)",
                        border: "1px solid rgba(16,185,129,0.18)",
                        borderRadius: 16, padding: "22px 24px",
                        backdropFilter: "blur(12px)",
                    }}>
                        <p style={{
                            fontSize: "0.95rem", lineHeight: 1.75,
                            color: "rgba(255,255,255,0.75)",
                            fontStyle: "italic", marginBottom: 14,
                        }}>
                            &ldquo;I went from Band 5.5 to Band 7.0 in writing in just 3 weeks. The AI feedback was more detailed than my human tutor!&rdquo;
                        </p>
                        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                            <div style={{
                                width: 36, height: 36, borderRadius: "50%",
                                background: "linear-gradient(135deg,#34D399,#047857)",
                                display: "flex", alignItems: "center", justifyContent: "center",
                                fontSize: "0.85rem", fontWeight: 700, color: "#fff",
                            }}>D</div>
                            <div>
                                <div style={{ fontSize: "0.85rem", fontWeight: 600 }}>Dilnoza T.</div>
                                <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.38)" }}>Tashkent · IELTS 7.0 ✦</div>
                            </div>
                        </div>
                    </blockquote>
                </div>

                {/* Bottom stats */}
                <div style={{
                    display: "flex", gap: 32,
                    position: "relative", zIndex: 1,
                }}>
                    {[
                        { num: "12k+", label: "Active Students" },
                        { num: "97%", label: "Satisfaction Rate" },
                        { num: "4.9★", label: "App Rating" },
                    ].map((s, i) => (
                        <div key={i}>
                            <div style={{
                                fontFamily: "'Playfair Display',serif",
                                fontSize: "1.6rem", fontWeight: 700, color: "#34D399", lineHeight: 1,
                            }}>{s.num}</div>
                            <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.38)", marginTop: 4 }}>{s.label}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* ── Right panel – form ── */}
            <div style={{
                flex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "48px 40px",
                background: "#022c22",
                position: "relative",
            }}>
                {/* Subtle orb */}
                <div style={{
                    position: "absolute", top: "20%", right: "-100px",
                    width: 400, height: 400, borderRadius: "50%",
                    background: "radial-gradient(circle, rgba(16,185,129,0.06) 0%, transparent 70%)",
                    filter: "blur(60px)", pointerEvents: "none",
                }} />

                <div style={{ width: "100%", maxWidth: 420, position: "relative", zIndex: 1 }}>
                    {/* Header */}
                    <div className="animate-fade-up" style={{ marginBottom: 36 }}>
                        <div style={{
                            display: "inline-flex", alignItems: "center", gap: 6,
                            background: "rgba(16,185,129,0.1)",
                            border: "1px solid rgba(16,185,129,0.22)",
                            borderRadius: 9999, padding: "5px 14px",
                            fontSize: "0.72rem", fontWeight: 700,
                            color: "#34D399", letterSpacing: "0.06em",
                            textTransform: "uppercase", marginBottom: 20,
                        }}>
                            <span className="animate-pulse-dot" style={{ width: 5, height: 5, borderRadius: "50%", background: "#34D399" }} />
                            Welcome back
                        </div>
                        <h1 style={{
                            fontFamily: "'Playfair Display',serif",
                            fontSize: "2.2rem", fontWeight: 800,
                            letterSpacing: "-0.03em", lineHeight: 1.15,
                            marginBottom: 10,
                        }}>Sign In to Your<br />
                            <span style={{
                                background: "linear-gradient(135deg,#34D399,#F59E0B)",
                                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                            }}>Dashboard</span>
                        </h1>
                        <p style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.6 }}>
                            Continue your 21-day journey to Band 7+
                        </p>
                    </div>

                    {/* Social login */}
                    <div className="animate-fade-up delay-100" style={{ marginBottom: 24 }}>
                        <button style={{
                            width: "100%", padding: "13px 20px", borderRadius: 12,
                            background: "rgba(255,255,255,0.06)",
                            border: "1px solid rgba(255,255,255,0.12)",
                            color: "#e2f5ee", fontFamily: "'DM Sans',sans-serif",
                            fontSize: "0.9rem", fontWeight: 500, cursor: "pointer",
                            display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
                            transition: "all 0.2s",
                        }}
                            onMouseEnter={e => {
                                (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.10)";
                                (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
                            }}
                            onMouseLeave={e => {
                                (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.06)";
                                (e.currentTarget as HTMLElement).style.transform = "";
                            }}>
                            Continue with Google
                        </button>
                    </div>

                    {/* Divider */}
                    <div className="animate-fade-up delay-100" style={{
                        display: "flex", alignItems: "center", gap: 14,
                        marginBottom: 24,
                    }}>
                        <div style={{ flex: 1, height: 1, background: "rgba(255,255,255,0.08)" }} />
                        <span style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.3)" }}>or sign in with email</span>
                        <div style={{ flex: 1, height: 1, background: "rgba(255,255,255,0.08)" }} />
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="animate-fade-up delay-200">
                        {/* Email */}
                        <div style={{ marginBottom: 16, position: "relative" }}>
                            <label style={{
                                display: "block", fontSize: "0.8rem", fontWeight: 600,
                                color: "rgba(255,255,255,0.55)", marginBottom: 8,
                                letterSpacing: "0.02em",
                            }}>Email address</label>
                            <div style={{ position: "relative" }}>
                                <Mail size={16} color="rgba(255,255,255,0.3)" style={{
                                    position: "absolute", left: 14, top: "50%",
                                    transform: "translateY(-50%)", pointerEvents: "none",
                                }} />
                                <input
                                    type="email"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    onFocus={() => setFocused("email")}
                                    onBlur={() => setFocused(null)}
                                    placeholder="dilnoza@example.com"
                                    required
                                    style={inputStyle("email")}
                                />
                            </div>
                        </div>

                        {/* Password */}
                        <div style={{ marginBottom: 10, position: "relative" }}>
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                                <label style={{
                                    fontSize: "0.8rem", fontWeight: 600,
                                    color: "rgba(255,255,255,0.55)",
                                    letterSpacing: "0.02em",
                                }}>Password</label>
                                <a href="#" style={{
                                    fontSize: "0.78rem", color: "#34D399",
                                    textDecoration: "none",
                                }}
                                    onMouseEnter={e => (e.target as HTMLElement).style.textDecoration = "underline"}
                                    onMouseLeave={e => (e.target as HTMLElement).style.textDecoration = "none"}>
                                    Forgot password?
                                </a>
                            </div>
                            <div style={{ position: "relative" }}>
                                <Lock size={16} color="rgba(255,255,255,0.3)" style={{
                                    position: "absolute", left: 14, top: "50%",
                                    transform: "translateY(-50%)", pointerEvents: "none",
                                }} />
                                <input
                                    type={showPassword ? "text" : "password"}
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                    onFocus={() => setFocused("password")}
                                    onBlur={() => setFocused(null)}
                                    placeholder="••••••••"
                                    required
                                    style={{ ...inputStyle("password"), paddingRight: 46 }}
                                />
                                <button type="button" onClick={() => setShowPassword(!showPassword)} style={{
                                    position: "absolute", right: 14, top: "50%", transform: "translateY(-50%)",
                                    background: "none", border: "none", cursor: "pointer",
                                    color: "rgba(255,255,255,0.35)", padding: 0,
                                    display: "flex", alignItems: "center",
                                }}>
                                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                                </button>
                            </div>
                        </div>

                        {/* Remember */}
                        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 24, marginTop: 16 }}>
                            <input type="checkbox" id="remember" style={{ accentColor: "#10B981", cursor: "pointer" }} />
                            <label htmlFor="remember" style={{
                                fontSize: "0.85rem", color: "rgba(255,255,255,0.45)", cursor: "pointer",
                            }}>Keep me signed in</label>
                        </div>

                        {/* Submit */}
                        <button type="submit" disabled={loading} style={{
                            position: "relative",
                            width: "100%", padding: "14px 20px", borderRadius: 12,
                            background: loading ? "rgba(16,185,129,0.5)" : "linear-gradient(135deg,#10B981,#047857)",
                            border: "none", color: "#fff",
                            fontFamily: "'DM Sans',sans-serif",
                            fontSize: "0.98rem", fontWeight: 700,
                            cursor: loading ? "not-allowed" : "pointer",
                            boxShadow: "0 8px 24px rgba(16,185,129,0.25)",
                            display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                            transition: "all 0.25s",
                        }}
                            onMouseEnter={e => {
                                if (!loading) {
                                    (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                                    (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 32px rgba(16,185,129,0.4)";
                                }
                            }}
                            onMouseLeave={e => {
                                (e.currentTarget as HTMLElement).style.transform = "";
                                (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 24px rgba(16,185,129,0.25)";
                            }}>
                            {/* Glow ring */}
                            <span className="animate-glow-pulse" style={{
                                position: "absolute", inset: -3, borderRadius: 14,
                                background: "linear-gradient(135deg,#34D399,#F59E0B)",
                                zIndex: -1,
                            }} />
                            {loading ? (
                                <>
                                    <span style={{
                                        width: 16, height: 16, border: "2px solid rgba(255,255,255,0.3)",
                                        borderTop: "2px solid #fff", borderRadius: "50%",
                                        display: "inline-block",
                                        animation: "spin 0.7s linear infinite",
                                    }} />
                                    Signing in…
                                </>
                            ) : (
                                <>Sign In <ArrowRight size={16} /></>
                            )}
                        </button>
                    </form>

                    {/* Sign up link */}
                    <p className="animate-fade-up delay-300" style={{
                        textAlign: "center", marginTop: 28,
                        fontSize: "0.875rem", color: "rgba(255,255,255,0.4)",
                    }}>
                        Don&apos;t have an account?{" "}
                        <Link href="/sign-up" style={{
                            color: "#34D399", fontWeight: 600, textDecoration: "none",
                        }}
                            onMouseEnter={e => (e.target as HTMLElement).style.textDecoration = "underline"}
                            onMouseLeave={e => (e.target as HTMLElement).style.textDecoration = "none"}>
                            Sign up free →
                        </Link>
                    </p>
                </div>
            </div>

            <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        @media (max-width: 768px) { .auth-left-panel { display: none !important; } }
      `}</style>
        </div>
    );
}
