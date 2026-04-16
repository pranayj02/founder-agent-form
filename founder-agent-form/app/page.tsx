"use client";

import { useState } from "react";
import {
  FormData, STAGES, CAPABILITIES, TOOLS,
  BRIEF_TIMES, RESPONSE_STYLES, AUTONOMY_OPTIONS, STEPS
} from "@/types/form";

const empty: FormData = {
  name: "", whatsapp: "", company: "", stage: "",
  capabilities: [], customCapabilities: "",
  tools: [], otherTools: "",
  briefTime: "", responseStyle: "", autonomy: "",
  moreTimeFor: "", timeCost: "", neverTouch: "",
};

function ProgressBar({ step }: { step: number }) {
  return (
    <div className="w-full mb-10">
      <div className="flex items-center mb-3">
        {STEPS.map((s, i) => (
          <div key={s.id} className="flex items-center" style={{ flex: i < STEPS.length - 1 ? "1" : "none" }}>
            <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-medium transition-all duration-300 flex-shrink-0 ${
              s.id < step ? "bg-[#1A1A18] text-white" :
              s.id === step ? "bg-[#1A1A18] text-white ring-4 ring-[#E8E4FF]" :
              "bg-[#E4E0D8] text-[#B8B4AC]"
            }`}>
              {s.id < step ? (
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <polyline points="2,6 5,9 10,3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              ) : s.id}
            </div>
            {i < STEPS.length - 1 && (
              <div className={`h-px flex-1 mx-1 transition-all duration-500 ${s.id < step ? "bg-[#1A1A18]" : "bg-[#E4E0D8]"}`} />
            )}
          </div>
        ))}
      </div>
      <p className="text-xs text-[#8C8880]">
        Step {step} of {STEPS.length} — <span className="text-[#1A1A18] font-medium">{STEPS[step - 1]?.label}</span>
      </p>
    </div>
  );
}

function Label({ children, optional }: { children: React.ReactNode; optional?: boolean }) {
  return (
    <label className="block text-sm font-medium text-[#1A1A18] mb-2">
      {children}
      {optional && <span className="ml-1.5 text-xs font-normal text-[#B8B4AC]">optional</span>}
    </label>
  );
}

function TagButton({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button type="button" onClick={onClick} className={`px-3.5 py-2 rounded-lg text-sm font-medium border transition-all duration-150 ${
      active ? "bg-[#1A1A18] text-white border-[#1A1A18]" : "bg-white text-[#4A4844] border-[#E4E0D8] hover:border-[#B8B4AC]"
    }`}>{label}</button>
  );
}

function CapCard({ cap, active, onClick }: { cap: typeof CAPABILITIES[0]; active: boolean; onClick: () => void }) {
  return (
    <button type="button" onClick={onClick} className={`w-full text-left p-4 rounded-xl border transition-all duration-150 ${
      active ? "bg-[#1A1A18] text-white border-[#1A1A18]" : "bg-white text-[#1A1A18] border-[#E4E0D8] hover:border-[#B8B4AC]"
    }`}>
      <div className={`text-sm font-medium mb-0.5 ${active ? "text-white" : "text-[#1A1A18]"}`}>{cap.label}</div>
      <div className={`text-xs leading-relaxed ${active ? "text-[#C8C4BC]" : "text-[#8C8880]"}`}>{cap.desc}</div>
    </button>
  );
}

function RadioCard({ label, desc, active, onClick }: { label: string; desc: string; active: boolean; onClick: () => void }) {
  return (
    <button type="button" onClick={onClick} className={`w-full text-left p-4 rounded-xl border flex items-start gap-3 transition-all duration-150 ${
      active ? "border-[#1A1A18] bg-[#F4F2EE]" : "border-[#E4E0D8] bg-white hover:border-[#B8B4AC]"
    }`}>
      <div className={`mt-0.5 w-4 h-4 rounded-full border-2 flex-shrink-0 flex items-center justify-center transition-all ${
        active ? "border-[#1A1A18]" : "border-[#D4D0C8]"
      }`}>
        {active && <div className="w-1.5 h-1.5 rounded-full bg-[#1A1A18]" />}
      </div>
      <div>
        <div className="text-sm font-medium text-[#1A1A18]">{label}</div>
        <div className="text-xs text-[#8C8880] mt-0.5 leading-relaxed">{desc}</div>
      </div>
    </button>
  );
}

function NavButtons({ step, total, onBack, onNext, onSubmit, loading, canContinue }: {
  step: number; total: number; onBack: () => void; onNext: () => void;
  onSubmit: () => void; loading: boolean; canContinue: boolean;
}) {
  return (
    <div className="flex items-center justify-between mt-8 pt-6 border-t border-[#ECEAE4]">
      {step > 1 ? (
        <button type="button" onClick={onBack} className="text-sm text-[#8C8880] hover:text-[#1A1A18] transition-colors flex items-center gap-1.5">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M9 2L4 7L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Back
        </button>
      ) : <div />}
      {step < total ? (
        <button type="button" onClick={onNext} disabled={!canContinue} className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-medium transition-all duration-150 ${
          canContinue ? "bg-[#1A1A18] text-white hover:bg-[#2E2E2A] active:scale-[0.98]" : "bg-[#E4E0D8] text-[#B8B4AC] cursor-not-allowed"
        }`}>
          Continue
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M5 2L10 7L5 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      ) : (
        <button type="button" onClick={onSubmit} disabled={loading || !canContinue} className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-medium transition-all duration-150 ${
          canContinue && !loading ? "bg-[#1A1A18] text-white hover:bg-[#2E2E2A] active:scale-[0.98]" : "bg-[#E4E0D8] text-[#B8B4AC] cursor-not-allowed"
        }`}>
          {loading ? "Submitting..." : "Submit"}
          {!loading && <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7H12M8 3L12 7L8 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>}
        </button>
      )}
    </div>
  );
}

export default function FormPage() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<FormData>(empty);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  const set = (field: keyof FormData, val: string | string[]) => setData(d => ({ ...d, [field]: val }));
  const toggle = (field: "capabilities" | "tools", val: string) => {
    const arr = data[field] as string[];
    set(field, arr.includes(val) ? arr.filter(v => v !== val) : [...arr, val]);
  };

  const canContinue = (() => {
    if (step === 1) return !!(data.name.trim() && data.whatsapp.trim() && data.company.trim() && data.stage);
    if (step === 2) return data.capabilities.length > 0;
    if (step === 3) return data.tools.length > 0;
    if (step === 4) return !!(data.briefTime && data.responseStyle && data.autonomy);
    if (step === 5) return !!(data.moreTimeFor.trim() && data.timeCost.trim());
    return false;
  })();

  const submit = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (json.success) setDone(true);
      else setError("Something went wrong. Please try again.");
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (done) {
    return (
      <main className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-sm">
          <div className="w-14 h-14 rounded-full bg-[#F0EEF8] flex items-center justify-center mx-auto mb-6">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <polyline points="4,12 9,17 20,6" stroke="#534AB7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h1 className="text-2xl font-medium text-[#1A1A18] mb-3">You are all set</h1>
          <p className="text-[#8C8880] text-sm leading-relaxed">We will use your responses to configure your WhatsApp agent. Expect a message from us within 24 hours with your personalised setup.</p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen flex items-start justify-center px-4 py-12 sm:py-16">
      <div className="w-full max-w-lg">
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F0EEF8] text-[#534AB7] text-xs font-medium mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#534AB7]" />
            AI Agent Setup
          </div>
          <h1 className="text-[28px] font-medium text-[#1A1A18] leading-tight mb-2">Build your personal AI agent</h1>
          <p className="text-sm text-[#8C8880] leading-relaxed">Tell us how you work and what you need. Takes about 3 minutes.</p>
        </div>

        <ProgressBar step={step} />

        <div className="bg-white rounded-2xl border border-[#E4E0D8] p-6 sm:p-8">

          {step === 1 && (
            <div className="space-y-5">
              <div><Label>Full name</Label><input type="text" value={data.name} onChange={e => set("name", e.target.value)} placeholder="Your name" /></div>
              <div><Label>WhatsApp number</Label><input type="tel" value={data.whatsapp} onChange={e => set("whatsapp", e.target.value)} placeholder="+91 98000 00000" /></div>
              <div><Label>Company and role</Label><input type="text" value={data.company} onChange={e => set("company", e.target.value)} placeholder="e.g. Acme Inc. — CEO" /></div>
              <div>
                <Label>Stage of company</Label>
                <div className="flex flex-wrap gap-2 mt-1">
                  {STAGES.map(s => <TagButton key={s} label={s} active={data.stage === s} onClick={() => set("stage", data.stage === s ? "" : s)} />)}
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-5">
              <div>
                <Label>What should your agent do?</Label>
                <p className="text-xs text-[#8C8880] mb-3">Select everything that applies</p>
                <div className="grid grid-cols-2 gap-2">
                  {CAPABILITIES.map(cap => <CapCard key={cap.id} cap={cap} active={data.capabilities.includes(cap.id)} onClick={() => toggle("capabilities", cap.id)} />)}
                </div>
              </div>
              <div><Label optional>Anything else?</Label><textarea value={data.customCapabilities} onChange={e => set("customCapabilities", e.target.value)} placeholder="e.g. Monitor my Twitter replies, track a competitor pricing page..." /></div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-5">
              <div>
                <Label>Which tools does your team use?</Label>
                <p className="text-xs text-[#8C8880] mb-3">We will connect your agent to these</p>
                <div className="flex flex-wrap gap-2">
                  {TOOLS.map(t => <TagButton key={t} label={t} active={data.tools.includes(t)} onClick={() => toggle("tools", t)} />)}
                </div>
              </div>
              <div><Label optional>Other tools</Label><input type="text" value={data.otherTools} onChange={e => set("otherTools", e.target.value)} placeholder="Any other tools we should know about..." /></div>
            </div>
          )}

          {step === 4 && (
            <div className="space-y-6">
              <div>
                <Label>When would you like your daily brief?</Label>
                <div className="flex flex-wrap gap-2 mt-1">
                  {BRIEF_TIMES.map(t => <TagButton key={t} label={t} active={data.briefTime === t} onClick={() => set("briefTime", data.briefTime === t ? "" : t)} />)}
                </div>
              </div>
              <div>
                <Label>How should your agent communicate?</Label>
                <div className="grid grid-cols-2 gap-2 mt-1">
                  {RESPONSE_STYLES.map(s => <TagButton key={s} label={s} active={data.responseStyle === s} onClick={() => set("responseStyle", data.responseStyle === s ? "" : s)} />)}
                </div>
              </div>
              <div>
                <Label>How hands-on should the agent be?</Label>
                <div className="space-y-2 mt-1">
                  {AUTONOMY_OPTIONS.map(a => <RadioCard key={a.label} label={a.label} desc={a.desc} active={data.autonomy === a.label} onClick={() => set("autonomy", data.autonomy === a.label ? "" : a.label)} />)}
                </div>
              </div>
            </div>
          )}

          {step === 5 && (
            <div className="space-y-5">
              <div><Label>What is the number 1 thing you wish you had more time for?</Label><textarea value={data.moreTimeFor} onChange={e => set("moreTimeFor", e.target.value)} placeholder="e.g. Deep work, investor relationships, product thinking..." /></div>
              <div><Label>What is costing you the most time right now?</Label><textarea value={data.timeCost} onChange={e => set("timeCost", e.target.value)} placeholder="e.g. Context-switching, catching up on emails, preparing for meetings..." /></div>
              <div><Label optional>Anything you would never want the agent to touch?</Label><textarea value={data.neverTouch} onChange={e => set("neverTouch", e.target.value)} placeholder="e.g. Investor communications, HR decisions, contracts..." /></div>
              {error && <p className="text-sm text-red-500">{error}</p>}
            </div>
          )}

          <NavButtons step={step} total={STEPS.length} onBack={() => setStep(s => s - 1)} onNext={() => setStep(s => s + 1)} onSubmit={submit} loading={loading} canContinue={canContinue} />
        </div>

        <p className="text-center text-xs text-[#B8B4AC] mt-6">Your responses are private and used only to configure your agent.</p>
      </div>
    </main>
  );
}
