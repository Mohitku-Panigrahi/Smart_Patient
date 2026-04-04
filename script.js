/* ============================================
   SMASP v2.0 — Upgraded Script
   Smart Medicine Awareness & Safety Platform
   ============================================ */

// ── Enhanced Medicine Dataset ─────────────────
const defaultMedicines = {
  "Paracetamol": {
    use: "Fever, mild pain, headache",
    category: "Analgesic / Antipyretic",
    icon: "💊",
    mechanism: "Blocks COX enzymes in the brain → reduces prostaglandin production → signals the hypothalamus to lower body temperature and reduce pain perception.",
    treats: "Acts on the hypothalamus (brain's thermostat) to lower fever. Reduces pain signals at the central nervous system level without causing significant inflammation reduction.",
    description: "One of the world's most widely used medicines. Effective for mild to moderate pain and fever. Generally well-tolerated at recommended doses, but dangerous in overdose.",
    avoid: ["Liver Disease"],
    caution: ["Asthma"],
    side_effects: "Nausea, rash (rare), liver damage in overdose",
    learn_more: "Overdose risk even with slightly high doses; always follow recommended limits; alcohol multiplies liver toxicity risk.",
    did_you_know: [
      "Paracetamol overdose is the leading cause of acute liver failure in many countries.",
      "It works differently from NSAIDs — it doesn't reduce inflammation, only pain and fever.",
      "Safe for most pregnant women when used as directed — consult a doctor first.",
      "Alcohol and paracetamol together dramatically increase liver strain."
    ],
    who_cannot: ["People with liver or kidney disease", "Heavy alcohol users", "Those with G6PD deficiency", "Anyone already taking other paracetamol-containing products"],
    dosage_forms: ["Tablet", "Syrup", "Suppository", "IV"],
    allergens: ["Paracetamol"],
    age_caution: { child: "Dose must be weight-based.", elderly: "Monitor liver function in prolonged use." },
    pregnancy: "Generally considered lower risk when advised by clinician.",
    breastfeeding: "Usually compatible in standard doses after clinical advice.",
    sources: [
      "WHO Model List of Essential Medicines",
      "NHS: Paracetamol guidance",
      "FDA Drug Safety Communication"
    ],
    confidence: "Moderate",
    steps: [
      { icon: "💊", label: "Taken orally", desc: "Absorbed in the small intestine" },
      { icon: "🩸", label: "Enters bloodstream", desc: "Distributed throughout the body" },
      { icon: "🧠", label: "Acts on CNS", desc: "Inhibits COX-2 in the brain" },
      { icon: "🌡️", label: "Effect", desc: "Pain signal blocked, fever reduced" }
    ]
  },
  "Ibuprofen": {
    use: "Pain, inflammation, arthritis, menstrual cramps",
    category: "NSAID / Anti-inflammatory",
    icon: "🔵",
    mechanism: "Inhibits COX-1 and COX-2 enzymes throughout the body → blocks prostaglandin synthesis → reduces inflammation, pain, and fever at the site of injury.",
    treats: "Directly targets the source of inflammation — reduces swelling, redness, and pain in muscles, joints, and tissues. More effective than paracetamol for inflammatory conditions.",
    description: "A nonsteroidal anti-inflammatory drug (NSAID). Treats pain, fever, and inflammation. Widely used for arthritis, sports injuries, dental pain, and period cramps.",
    avoid: ["Stomach Ulcer"],
    caution: ["High Blood Pressure"],
    side_effects: "Stomach irritation, nausea, increased blood pressure with prolonged use",
    learn_more: "Take with food to protect stomach lining; long-term use increases cardiovascular and GI bleeding risk.",
    did_you_know: [
      "Ibuprofen can thin the stomach lining, which is why it should always be taken with food.",
      "Regular use can raise blood pressure — important to monitor if you're hypertensive.",
      "It is one of the only OTC drugs with clear anti-inflammatory properties.",
      "High doses increase risk of heart attack with long-term use."
    ],
    who_cannot: ["People with stomach ulcers or GI bleeding history", "Patients with severe heart failure", "Those with chronic kidney disease", "Pregnant women in 3rd trimester", "People taking blood thinners"],
    dosage_forms: ["Tablet", "Capsule", "Suspension", "Topical Gel"],
    allergens: ["NSAID"],
    age_caution: { child: "Use age/weight-appropriate pediatric formulation.", elderly: "Higher GI and kidney risk with prolonged use." },
    pregnancy: "Avoid in late pregnancy; seek clinician advice in all trimesters.",
    breastfeeding: "Often compatible short term with professional advice.",
    sources: [
      "NHS: Ibuprofen guidance",
      "Mayo Clinic Drug Monograph",
      "EMA safety updates"
    ],
    confidence: "Moderate",
    steps: [
      { icon: "🔵", label: "Taken orally", desc: "Absorbed via the stomach and intestines" },
      { icon: "🩸", label: "Enters bloodstream", desc: "Binds to COX-1 and COX-2 enzymes" },
      { icon: "🦴", label: "Reaches site", desc: "Prostaglandin production halted" },
      { icon: "🧊", label: "Effect", desc: "Inflammation, swelling, and pain reduced" }
    ]
  },
  "Aspirin": {
    use: "Pain, fever, heart attack prevention, blood clot prevention",
    category: "Salicylate / Antiplatelet",
    icon: "🟡",
    mechanism: "Irreversibly inhibits COX-1 and COX-2 → blocks thromboxane A2 in platelets → prevents platelet aggregation (blood clotting) and reduces inflammation.",
    treats: "Dual action: reduces pain/fever AND prevents blood clots. Low-dose aspirin therapy is used to reduce heart attack and stroke risk in high-risk individuals.",
    description: "One of medicine's oldest and most versatile drugs. Acts as a pain reliever, anti-inflammatory, and blood thinner. Unique among common analgesics for its antiplatelet effect.",
    avoid: ["Bleeding Disorder"],
    caution: ["Asthma"],
    side_effects: "Bleeding risk, stomach irritation, Reye's syndrome in children",
    learn_more: "Never given to children under 16; blood-thinning effect is permanent until new platelets form (7-10 days); increases surgical bleeding risk.",
    did_you_know: [
      "Aspirin was first synthesized in 1897 and is still one of the most prescribed drugs globally.",
      "It permanently inactivates platelets — one dose affects clotting for up to 10 days.",
      "Low-dose aspirin (75–100mg) is used to prevent heart attacks, not treat pain.",
      "Aspirin should never be given to children under 16 due to Reye's syndrome risk."
    ],
    who_cannot: ["People with bleeding disorders", "Children under 16 years old", "Those with aspirin-sensitive asthma", "Patients on blood thinners (warfarin)", "Those with active stomach ulcers"],
    dosage_forms: ["Tablet", "Enteric-coated tablet", "Chewable tablet"],
    allergens: ["Aspirin", "NSAID", "Salicylate"],
    age_caution: { child: "Avoid in children under 16 due to Reye syndrome.", elderly: "Increased bleeding risk; monitor closely." },
    pregnancy: "Not routinely used without specialist advice.",
    breastfeeding: "Use with caution under professional guidance.",
    sources: [
      "NHS: Aspirin guidance",
      "CDC antiplatelet education",
      "FDA aspirin safety label"
    ],
    confidence: "Moderate",
    steps: [
      { icon: "🟡", label: "Taken orally", desc: "Rapidly absorbed in the stomach" },
      { icon: "🩸", label: "Enters bloodstream", desc: "Distributed to platelets and tissues" },
      { icon: "🔗", label: "Binds platelets", desc: "Irreversibly inactivates COX-1" },
      { icon: "❤️", label: "Effect", desc: "Clotting reduced, pain/fever lowered" }
    ]
  },
  "Diclofenac": {
    use: "Pain, inflammation, musculoskeletal pain",
    category: "NSAID / Anti-inflammatory",
    icon: "🟠",
    mechanism: "Inhibits cyclooxygenase enzymes to reduce prostaglandins and inflammation.",
    treats: "Useful for joint/muscle inflammatory pain and swelling.",
    description: "Common NSAID used for short-term inflammatory pain management.",
    avoid: ["Stomach Ulcer", "Heart Disease"],
    caution: ["High Blood Pressure", "Kidney Disease"],
    side_effects: "GI irritation, fluid retention, elevated blood pressure",
    learn_more: "Use lowest effective dose for shortest duration.",
    did_you_know: [
      "Topical diclofenac can reduce systemic exposure compared with oral forms.",
      "Long-term oral NSAID use can increase cardiovascular risk."
    ],
    who_cannot: ["Active ulcer disease", "Late pregnancy", "Severe heart disease"],
    dosage_forms: ["Tablet", "Topical Gel", "Patch", "Injection"],
    allergens: ["NSAID"],
    age_caution: { child: "Specialist pediatric advice needed.", elderly: "Higher kidney/GI risk in prolonged use." },
    pregnancy: "Avoid particularly in 3rd trimester.",
    breastfeeding: "May be used with caution after clinician review.",
    sources: ["NHS medicine guidance", "EMA safety communications"],
    confidence: "Moderate",
    steps: [
      { icon: "🟠", label: "Taken", desc: "Absorbed orally/topically depending on form" },
      { icon: "🩸", label: "Distributed", desc: "Reaches inflamed tissues" },
      { icon: "🧬", label: "COX inhibition", desc: "Lowers inflammatory mediators" },
      { icon: "🧊", label: "Effect", desc: "Reduces pain and swelling" }
    ]
  },
  "Naproxen": {
    use: "Pain, inflammation, arthritis",
    category: "NSAID / Anti-inflammatory",
    icon: "🟣",
    mechanism: "Blocks COX enzymes and reduces inflammatory prostaglandins.",
    treats: "Useful for longer-duration pain control in inflammatory conditions.",
    description: "Longer-acting NSAID used for inflammatory pain states.",
    avoid: ["Stomach Ulcer"],
    caution: ["High Blood Pressure", "Kidney Disease", "Heart Disease"],
    side_effects: "Dyspepsia, GI bleed risk, fluid retention",
    learn_more: "Take with food and monitor kidney function in chronic use.",
    did_you_know: [
      "Naproxen has a longer duration than ibuprofen.",
      "Like other NSAIDs, it can increase GI bleeding risk."
    ],
    who_cannot: ["Active GI bleeding", "Late pregnancy"],
    dosage_forms: ["Tablet", "Suspension", "Delayed-release tablet"],
    allergens: ["NSAID"],
    age_caution: { child: "Pediatric use should follow specialist advice.", elderly: "Higher bleeding and renal risk." },
    pregnancy: "Avoid in later pregnancy.",
    breastfeeding: "Assess with clinician before use.",
    sources: ["NHS guidance", "FDA label summary"],
    confidence: "Moderate",
    steps: [
      { icon: "🟣", label: "Taken orally", desc: "Absorbed through GI tract" },
      { icon: "🩸", label: "In bloodstream", desc: "Circulates to painful tissues" },
      { icon: "🧬", label: "COX blocked", desc: "Prostaglandins decrease" },
      { icon: "🧊", label: "Effect", desc: "Pain and inflammation lowered" }
    ]
  }
};

// ── Health Conditions ─────────────────────────
const defaultConditions = [
  "Asthma",
  "Diabetes",
  "High Blood Pressure",
  "Liver Disease",
  "Stomach Ulcer",
  "Bleeding Disorder",
  "Kidney Disease",
  "Heart Disease",
  "Pregnancy",
  "Breastfeeding"
];
let medicines = JSON.parse(JSON.stringify(defaultMedicines));
let conditions = [...defaultConditions];

const symptomSuggestions = [
  "Headache", "Fever", "Back pain", "Joint pain", "Toothache",
  "Muscle pain", "Menstrual cramps", "Sore throat", "Body ache"
];

const knownAllergens = ["NSAID", "Aspirin", "Paracetamol", "Salicylate"];

const interactionRules = [
  { meds: ["Aspirin", "Ibuprofen"], level: "CAUTION", reason: "Ibuprofen may reduce aspirin antiplatelet effect and increase GI risk.", severity: "Medium", confidence: "Moderate" },
  { meds: ["Aspirin", "Diclofenac"], level: "AVOID", reason: "Dual NSAID exposure significantly increases bleeding and GI toxicity risk.", severity: "High", confidence: "Moderate" },
  { meds: ["Ibuprofen", "Naproxen"], level: "AVOID", reason: "Combining NSAIDs increases GI/kidney adverse event risk.", severity: "High", confidence: "High" },
  { meds: ["Ibuprofen", "Diclofenac"], level: "AVOID", reason: "Avoid combining oral NSAIDs due to additive toxicity.", severity: "High", confidence: "High" }
];

const i18n = {
  en: {
    noCondition: "No health condition selected — no known conflicts identified.",
    educationalOnly: "Educational results only. Not medical advice.",
    riskReasonSafe: "No known conflict between this medicine and your selected condition(s). Always verify with a licensed healthcare professional."
  },
  hi: {
    noCondition: "कोई स्वास्थ्य स्थिति चयनित नहीं — ज्ञात टकराव नहीं मिला।",
    educationalOnly: "केवल शैक्षिक परिणाम। यह चिकित्सकीय सलाह नहीं है।",
    riskReasonSafe: "चयनित स्वास्थ्य स्थितियों के साथ ज्ञात टकराव नहीं मिला। कृपया चिकित्सक से पुष्टि करें।"
  }
};

function escHtml(value) {
  return String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function escAttr(value) {
  return escHtml(value).replaceAll('`', '&#96;');
}

function getOrCreateLiveRegion() {
  let el = document.getElementById('appLiveRegion');
  if (el) return el;
  el = document.createElement('div');
  el.id = 'appLiveRegion';
  el.setAttribute('aria-live', 'polite');
  el.setAttribute('aria-atomic', 'true');
  el.style.position = 'fixed';
  el.style.left = '-9999px';
  el.style.width = '1px';
  el.style.height = '1px';
  el.style.overflow = 'hidden';
  document.body.appendChild(el);
  return el;
}

function notify(message) {
  const text = String(message || '');
  const live = getOrCreateLiveRegion();
  live.textContent = text;
  console.info(text);
}

function getLang() {
  return localStorage.getItem('smasp_lang') || 'en';
}

function loadDatasetFromStorage() {
  try {
    const stored = JSON.parse(localStorage.getItem('smasp_dataset') || 'null');
    if (!stored) return;
    if (stored.medicines && typeof stored.medicines === 'object') medicines = stored.medicines;
    if (Array.isArray(stored.conditions)) conditions = stored.conditions;
  } catch (error) {
    console.warn('Unable to load local dataset; using defaults.', error);
  }
}

function saveDatasetToStorage() {
  localStorage.setItem('smasp_dataset', JSON.stringify({ medicines, conditions }));
}

function initAdminPanel() {
  const txt = document.getElementById('adminDatasetJson');
  const loadBtn = document.getElementById('adminLoadCurrentBtn');
  const applyBtn = document.getElementById('adminApplyBtn');
  const resetBtn = document.getElementById('adminResetBtn');
  if (!txt || !loadBtn || !applyBtn || !resetBtn) return;

  loadBtn.addEventListener('click', () => {
    txt.value = JSON.stringify({ medicines, conditions }, null, 2);
  });
  applyBtn.addEventListener('click', () => {
    try {
      const parsed = JSON.parse(txt.value || '{}');
      if (!parsed.medicines || !parsed.conditions) {
        throw new Error("Invalid dataset: must contain 'medicines' object and 'conditions' array.");
      }
      medicines = parsed.medicines;
      conditions = parsed.conditions;
      saveDatasetToStorage();
      notify('Dataset applied. Refreshing form options.');
      populateConditionCheckboxes('conditionCheckboxes');
      ['medicine1Select', 'medicine2Select'].forEach(id => {
        const sel = document.getElementById(id);
        if (sel) sel.innerHTML = '';
      });
      populateMedicines('medicine1Select', '— Select primary medicine');
      populateMedicines('medicine2Select', '— Optional: compare with');
    } catch (e) {
      notify(`Invalid JSON: ${e.message}`);
    }
  });
  resetBtn.addEventListener('click', () => {
    medicines = JSON.parse(JSON.stringify(defaultMedicines));
    conditions = [...defaultConditions];
    saveDatasetToStorage();
    txt.value = '';
    notify('Dataset reset to defaults.');
    populateConditionCheckboxes('conditionCheckboxes');
  });
}

function setLang(lang) {
  localStorage.setItem('smasp_lang', lang);
}

// ── Risk Evaluation (supports multiple conditions) ─
function evaluateRisk(userConditions, medicine) {
  const lang = getLang();
  const t = i18n[lang] || i18n.en;
  if (!userConditions || userConditions.length === 0) {
    return { level: "SAFE", cssClass: "safe", icon: "✅", score: 3,
      reason: t.noCondition, severity: "Low", confidence: medicine.confidence || "Moderate" };
  }
  // Check avoid first (any avoid = worst outcome)
  for (const cond of userConditions) {
    if (medicine.avoid.includes(cond)) {
      return { level: "AVOID", cssClass: "avoid", icon: "🚫", score: 1,
        reason: `This medicine should be AVOIDED with "${cond}". It may significantly worsen this condition or cause serious harm. Consult your doctor immediately.`,
        severity: "High", confidence: medicine.confidence || "Moderate" };
    }
  }
  // Check caution
  const cautionHits = userConditions.filter(c => medicine.caution.includes(c));
  if (cautionHits.length > 0) {
    return { level: "CAUTION", cssClass: "caution", icon: "⚠️", score: 2,
      reason: `Use with CAUTION if you have "${cautionHits.join(', ')}". This medicine can interact with this condition. Always inform your healthcare provider.`,
      severity: "Medium", confidence: medicine.confidence || "Moderate" };
  }
  return { level: "SAFE", cssClass: "safe", icon: "✅", score: 3,
    reason: t.riskReasonSafe, severity: "Low", confidence: medicine.confidence || "Moderate" };
}

function applyProfileRiskAdjustments(risk, medicine, profile) {
  const out = { ...risk, profileNotes: [] };
  if (!profile) return out;
  const pediatricRestrictionPattern = /children?|under\s*\d+|aged?\s*under|below\s*\d+\s*years?|pediatric|paediatric|minors?/i;

  if (profile.ageGroup === 'child' && medicine?.who_cannot?.some(w => pediatricRestrictionPattern.test(w))) {
    out.level = "AVOID"; out.cssClass = "avoid"; out.icon = "🚫"; out.score = 1;
    out.severity = "High";
    out.reason = `${out.reason} Age profile indicates child; this medicine has pediatric restrictions.`;
    out.profileNotes.push("Child profile may increase risk.");
  } else if (profile.ageGroup === 'elderly') {
    out.profileNotes.push(medicine.age_caution?.elderly || "Elderly profile: monitor side effects closely.");
  } else if (profile.ageGroup === 'child') {
    out.profileNotes.push(medicine.age_caution?.child || "Child profile: use weight-based guidance from clinician.");
  }

  if (profile.pregnancy === 'yes') {
    if (/avoid/i.test(medicine.pregnancy || "") || medicine.who_cannot.some(w => /pregnan/i.test(w))) {
      out.level = "AVOID"; out.cssClass = "avoid"; out.icon = "🚫"; out.score = 1; out.severity = "High";
    } else if (out.score > 2) {
      out.level = "CAUTION"; out.cssClass = "caution"; out.icon = "⚠️"; out.score = 2; out.severity = "Medium";
    }
    out.profileNotes.push(`Pregnancy: ${medicine.pregnancy || "Consult clinician."}`);
  }
  if (profile.breastfeeding === 'yes') {
    if (/caution|assess/i.test(medicine.breastfeeding || "") && out.score > 2) {
      out.level = "CAUTION"; out.cssClass = "caution"; out.icon = "⚠️"; out.score = 2; out.severity = "Medium";
    }
    out.profileNotes.push(`Breastfeeding: ${medicine.breastfeeding || "Consult clinician."}`);
  }
  return out;
}

function evaluateAllergyRisk(medicine, allergies) {
  if (!allergies?.length) return null;
  const normalized = allergies.map(a => a.toLowerCase());
  const hits = (medicine.allergens || []).filter(al => normalized.includes(al.toLowerCase()));
  if (!hits.length) return null;
  return {
    level: "AVOID",
    cssClass: "avoid",
    icon: "🚫",
    severity: "High",
    confidence: "High",
    reason: `Allergy/intolerance match found: ${hits.join(', ')}. Avoid this medicine and seek professional advice.`
  };
}

function evaluateInteraction(med1Name, med2Name) {
  if (!med1Name || !med2Name) return null;
  const match = interactionRules.find(rule =>
    rule.meds.includes(med1Name) && rule.meds.includes(med2Name)
  );
  if (!match) return { level: "SAFE", cssClass: "safe", icon: "✅", severity: "Low", confidence: "Low", reason: "No known interaction rule found in this educational dataset." };
  const css = match.level === "AVOID" ? "avoid" : match.level === "CAUTION" ? "caution" : "safe";
  const icon = css === "avoid" ? "🚫" : css === "caution" ? "⚠️" : "✅";
  return { ...match, cssClass: css, icon };
}

// ── Safety Score Comparison ───────────────────
function getSaferMedicine(name1, risk1, name2, risk2) {
  if (!name2) return null;
  if (risk1.score > risk2.score) return { name: name1, cssClass: risk1.cssClass };
  if (risk2.score > risk1.score) return { name: name2, cssClass: risk2.cssClass };
  return { name: "Both Equal", cssClass: "safe" };
}

// ── Populate Conditions (checkbox group) ──────
function populateConditionCheckboxes(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = conditions.map(c => `
    <label class="condition-check-label">
      <input type="checkbox" name="conditions" value="${escAttr(c)}" />
      <span>${escHtml(c)}</span>
    </label>
  `).join('');
}

// ── Populate Medicine Selects ─────────────────
function populateMedicines(selectId, placeholder) {
  const sel = document.getElementById(selectId);
  if (!sel) return;
  const blank = document.createElement('option');
  blank.value = ""; blank.textContent = placeholder || "Select a medicine";
  sel.appendChild(blank);
  Object.keys(medicines).forEach(name => {
    const opt = document.createElement('option');
    opt.value = name;
    opt.textContent = `${medicines[name].icon}  ${name} — ${medicines[name].use}`;
    sel.appendChild(opt);
  });
}

function populateDatalist(id, values) {
  const el = document.getElementById(id);
  if (!el) return;
  el.innerHTML = values.map(v => `<option value="${escAttr(v)}"></option>`).join('');
}

function filterConditions(query) {
  const q = (query || "").trim().toLowerCase();
  document.querySelectorAll('#conditionCheckboxes .condition-check-label').forEach(label => {
    const text = label.textContent.toLowerCase();
    label.style.display = text.includes(q) ? '' : 'none';
  });
}

function bindMedicineSearch() {
  const input = document.getElementById('medicineSearchInput');
  const select1 = document.getElementById('medicine1Select');
  if (!input || !select1) return;
  input.addEventListener('input', () => {
    const term = input.value.trim().toLowerCase();
    if (!term) return;
    const name = Object.keys(medicines).find(m => m.toLowerCase().includes(term));
    if (name) select1.value = name;
  });
}

// ── Form Submit ───────────────────────────────
function handleFormSubmit(e) {
  e.preventDefault();
  const disease   = document.getElementById('diseaseInput')?.value.trim() || "";
  const checked   = [...document.querySelectorAll('input[name="conditions"]:checked')].map(el => el.value);
  const med1      = document.getElementById('medicine1Select')?.value || "";
  const med2      = document.getElementById('medicine2Select')?.value || "";
  const ageGroup  = document.getElementById('ageGroupSelect')?.value || "adult";
  const pregnancy = document.getElementById('pregnancySelect')?.value || "no";
  const breastfeeding = document.getElementById('breastfeedingSelect')?.value || "no";
  const allergiesRaw = document.getElementById('allergyInput')?.value || "";
  const voiceLang = document.getElementById('voiceLanguageSelect')?.value || "en-US";
  const language = document.getElementById('languageSelect')?.value || "en";

  if (!med1) { showFormError("Please select at least one medicine to evaluate."); return; }

  const params = new URLSearchParams();
  if (disease) params.set('disease', disease);
  if (checked.length) params.set('conditions', checked.join(','));
  params.set('med1', med1);
  if (med2 && med2 !== med1) params.set('med2', med2);
  params.set('ageGroup', ageGroup);
  params.set('pregnancy', pregnancy);
  params.set('breastfeeding', breastfeeding);
  if (allergiesRaw.trim()) params.set('allergies', allergiesRaw);
  params.set('voiceLang', voiceLang);
  params.set('lang', language);
  setLang(language);
  pushHistoryRecord({ disease, conditions: checked, med1, med2, ageGroup, pregnancy, breastfeeding, allergies: allergiesRaw });
  window.location.href = `result.html?${params.toString()}`;
}

function showFormError(msg) {
  const el = document.getElementById('formError');
  if (!el) return;
  el.textContent = msg; el.style.display = 'block';
  setTimeout(() => el.style.display = 'none', 4000);
}

// ── Build a Medicine Card (full upgraded) ─────
function buildMedicineCard(name, med, risk) {
  const gaugeWidth = { safe: '90%', caution: '55%', avoid: '20%' }[risk.cssClass];
  const gaugeColor = { safe: 'var(--safe-border)', caution: 'var(--caution-border)', avoid: 'var(--avoid-border)' }[risk.cssClass];

  const safeName = escHtml(name);
  const safeCardId = escAttr(name.replace(/\s/g, ''));
  const stepsHTML = med.steps.map((s, i) => `
    <div class="mech-step">
      <div class="mech-step-icon">${escHtml(s.icon)}</div>
      <div class="mech-step-content">
        <strong>${escHtml(s.label)}</strong>
        <span>${escHtml(s.desc)}</span>
      </div>
      ${i < med.steps.length - 1 ? '<div class="mech-arrow">↓</div>' : ''}
    </div>
  `).join('');

  const didYouKnow = med.did_you_know.map(f => `
    <div class="dyk-fact">
      <span class="dyk-bullet">💡</span>
      <span>${escHtml(f)}</span>
    </div>
  `).join('');

  const whoCannotList = med.who_cannot.map(w => `<li>${escHtml(w)}</li>`).join('');
  const dosageForms = (med.dosage_forms || []).map(d => `<span class="bookmark-chip">💊 ${escHtml(d)}</span>`).join('');
  const profileNotes = (risk.profileNotes || []).map(n => `<div class="bookmark-chip">👤 ${escHtml(n)}</div>`).join('');
  const redFlags = getRedFlags(risk).map(r => `<li>${escHtml(r)}</li>`).join('');

  const voiceText = `${name}. Category: ${med.category}. ${med.mechanism} Risk for your condition: ${risk.level}. ${risk.reason}`;
  const voiceLang = new URLSearchParams(window.location.search).get('voiceLang') || localStorage.getItem('smasp_voice_lang') || 'en-US';

  return `
    <div class="medicine-card" id="card-${safeCardId}">

      <!-- Header -->
      <div class="medicine-card-header">
        <div>
          <div class="med-category-tag">${med.category}</div>
          <h3>${escHtml(med.icon)} ${safeName}</h3>
          <div class="use-tag">Used for: ${escHtml(med.use)}</div>
        </div>
        <span class="risk-badge ${escAttr(risk.cssClass)}">${escHtml(risk.icon)} ${escHtml(risk.level)}</span>
      </div>

      <!-- Risk Gauge -->
      <div class="risk-gauge-wrap">
        <div class="risk-gauge-labels">
          <span style="color:var(--avoid-border);">AVOID</span>
          <span style="color:var(--caution-border);">CAUTION</span>
          <span style="color:var(--safe-border);">SAFE</span>
        </div>
        <div class="risk-gauge-track">
          <div class="risk-gauge-fill" style="width:${gaugeWidth};background:${gaugeColor};"></div>
          <div class="risk-gauge-pointer" style="left:${gaugeWidth};"></div>
        </div>
      </div>

      <!-- Risk Reason -->
      <div class="risk-reason ${risk.cssClass}">
        <span class="risk-reason-icon">${escHtml(risk.icon)}</span>
        <span>${escHtml(risk.reason)}</span>
      </div>
      <div class="severity-confidence-row px-4">
        <div class="metric-card"><span class="label">Severity</span><span class="value">${escHtml(risk.severity || 'Unknown')}</span></div>
        <div class="metric-card"><span class="label">Confidence</span><span class="value">${escHtml(risk.confidence || med.confidence || 'Moderate')}</span></div>
      </div>
      ${redFlags ? `<div class="red-flag-alert"><strong>🚨 Red Flags:</strong><ul style="margin:8px 0 0 18px;">${redFlags}</ul></div>` : ''}

      <!-- Card Body -->
      <div class="medicine-card-body">
        ${dosageForms ? `<div class="mb-3"><strong style="font-size:0.82rem;">Dosage forms:</strong><div class="mt-1">${dosageForms}</div></div>` : ''}
        ${profileNotes ? `<div class="mb-3"><strong style="font-size:0.82rem;">Profile guidance:</strong><div class="mt-1">${profileNotes}</div></div>` : ''}

        <!-- Info chips -->
        <div class="info-row">
          <div class="info-chip">
            <span class="chip-label">Side Effects</span>
            <span class="chip-value">${escHtml(med.side_effects)}</span>
          </div>
          <div class="info-chip">
            <span class="chip-label">Learn More</span>
            <span class="chip-value">${escHtml(med.learn_more)}</span>
          </div>
        </div>

        <!-- Expandable sections -->
        <div class="accordion-sections">

          <!-- How it Works -->
          <details class="expand-section" open>
            <summary class="expand-summary">
              <span>🧠 How This Medicine Works</span>
              <span class="expand-chevron">›</span>
            </summary>
            <div class="expand-body">
              <div class="mechanism-box">
                <div class="mechanism-label">Mechanism of Action</div>
                <p>${escHtml(med.mechanism)}</p>
              </div>
              <div class="mechanism-box mt-3">
                <div class="mechanism-label">How It Treats Your Problem</div>
                <p>${escHtml(med.treats)}</p>
              </div>
              <div class="learn-more-tag">📘 Awareness Note: ${escHtml(med.learn_more)}</div>

              <!-- Process Steps -->
              <div class="mech-steps-title">📈 Journey Through Your Body</div>
              <div class="mech-steps">
                ${stepsHTML}
              </div>
            </div>
          </details>

          <!-- Did You Know -->
          <details class="expand-section">
            <summary class="expand-summary">
              <span>🧠 Quick Science Facts</span>
              <span class="expand-chevron">›</span>
            </summary>
            <div class="expand-body">
              <div class="dyk-grid">
                ${didYouKnow}
              </div>
            </div>
          </details>

          <!-- Who Cannot Use -->
          <details class="expand-section">
            <summary class="expand-summary">
              <span>🚫 Who Should Not Use This</span>
              <span class="expand-chevron">›</span>
            </summary>
            <div class="expand-body">
              <ul class="who-cannot-list">
                ${whoCannotList}
              </ul>
            </div>
          </details>

        </div>

        <!-- Voice Button -->
        <button class="voice-btn js-voice-btn" data-med-name="${escAttr(name)}" data-voice-text="${escAttr(voiceText)}" data-voice-lang="${escAttr(voiceLang)}">
          🔊 Explain Like a Doctor
        </button>
        <button class="btn-secondary-custom mt-2 js-bookmark-btn" data-med-name="${escAttr(name)}">⭐ Bookmark ${safeName}</button>

      </div>
    </div>
  `;
}

// ── Voice Synthesis ───────────────────────────
function speakMedicine(name, text, lang) {
  if (!window.speechSynthesis) { notify('Voice not supported in this browser.'); return; }
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = 0.88;
  utterance.pitch = 1;
  utterance.lang = lang || 'en-US';
  localStorage.setItem('smasp_voice_lang', utterance.lang);
  window.speechSynthesis.speak(utterance);
}

// ── "Add Compare" placeholder ─────────────────
function buildComparePrompt() {
  return `
    <div class="compare-prompt h-100 d-flex flex-column justify-content-center align-items-center text-center">
      <div style="font-size:2.8rem;margin-bottom:12px;">⚖️</div>
      <h6>Compare Side-by-Side</h6>
      <p>Go back and select a second medicine to unlock the full comparison view.</p>
      <a href="index.html" class="btn-secondary-custom mt-3">← Add Comparison</a>
    </div>
  `;
}

// ── Safety Score Banner ───────────────────────
function buildSafetyScoreBanner(name1, risk1, name2, risk2) {
  if (!name2) return '';
  const safer = getSaferMedicine(name1, risk1, name2, risk2);
  const s1 = risk1.score, s2 = risk2.score;
  const scoreLabel = { 3: 'SAFE', 2: 'CAUTION', 1: 'AVOID' };
  const colorClass = { safe: '#27ae60', caution: '#d4ac0d', avoid: '#e74c3c' };
  const safeName1 = escHtml(name1);
  const safeName2 = escHtml(name2);
  const saferName = escHtml(safer.name);

  return `
    <div class="safety-score-banner">
      <div class="ssb-header">
        <span>🏅</span>
        <h5>Safety Comparison Score</h5>
        ${safer.name !== 'Both Equal'
          ? `<span class="ssb-winner">🟢 Safer for your condition: <strong>${saferName}</strong></span>`
          : `<span class="ssb-winner">🟢 Both medicines have equal safety for your condition.</span>`}
      </div>
      <div class="ssb-scores">
        <div class="ssb-score-item">
          <div class="ssb-med-name">${safeName1}</div>
          <div class="ssb-bar-wrap">
            <div class="ssb-bar" style="width:${(s1/3)*100}%;background:${colorClass[risk1.cssClass]};"></div>
          </div>
          <span class="ssb-label ${escAttr(risk1.cssClass)}">${escHtml(risk1.icon)} ${escHtml(scoreLabel[s1])}</span>
        </div>
        <div class="ssb-score-item">
          <div class="ssb-med-name">${safeName2}</div>
          <div class="ssb-bar-wrap">
            <div class="ssb-bar" style="width:${(s2/3)*100}%;background:${colorClass[risk2.cssClass]};"></div>
          </div>
          <span class="ssb-label ${escAttr(risk2.cssClass)}">${escHtml(risk2.icon)} ${escHtml(scoreLabel[s2])}</span>
        </div>
      </div>
      <p class="ssb-note">Score is based on risk level relative to your selected health condition(s). Educational only.</p>
    </div>
  `;
}

function buildInteractionBanner(med1Name, med2Name) {
  if (!med2Name) return '';
  const inter = evaluateInteraction(med1Name, med2Name);
  return `
    <div class="safety-score-banner" style="margin-top:-8px;">
      <div class="ssb-header">
        <span>🧪</span>
        <h5>Drug–Drug Interaction Check</h5>
        <span class="ssb-label ${escAttr(inter.cssClass)}">${escHtml(inter.icon)} ${escHtml(inter.level)}</span>
      </div>
      <p style="margin:0 0 8px;font-size:0.9rem;">${escHtml(inter.reason)}</p>
      <div class="severity-confidence-row">
        <div class="metric-card"><span class="label">Interaction Severity</span><span class="value">${escHtml(inter.severity)}</span></div>
        <div class="metric-card"><span class="label">Interaction Confidence</span><span class="value">${escHtml(inter.confidence)}</span></div>
      </div>
    </div>
  `;
}

// ── Comparison Table ──────────────────────────
function buildComparisonTable(name1, med1, risk1, name2, med2, risk2, conditions) {
  const condStr = conditions.length ? escHtml(conditions.join(', ')) : 'None selected';
  const rows = [
    ["Category",       escHtml(med1.category), escHtml(med2.category)],
    ["Uses",           escHtml(med1.use), escHtml(med2.use)],
    ["Risk Level",
      `<span class="comp-risk-cell ${escAttr(risk1.cssClass)}">${escHtml(risk1.icon)} ${escHtml(risk1.level)}</span>`,
      `<span class="comp-risk-cell ${escAttr(risk2.cssClass)}">${escHtml(risk2.icon)} ${escHtml(risk2.level)}</span>`
    ],
    ["Mechanism",      escHtml(med1.mechanism), escHtml(med2.mechanism)],
    ["Treats",         escHtml(med1.treats), escHtml(med2.treats)],
    ["Side Effects",   escHtml(med1.side_effects), escHtml(med2.side_effects)],
    ["Avoid With",     escHtml(med1.avoid.join(', ') || 'None'), escHtml(med2.avoid.join(', ') || 'None')],
    ["Use Caution",    escHtml(med1.caution.join(', ') || 'None'), escHtml(med2.caution.join(', ') || 'None')],
    ["Risk Reason",    escHtml(risk1.reason), escHtml(risk2.reason)]
  ];

  return `
    <div class="comparison-section mb-4">
      <div class="comp-header">
        <span style="font-size:1.3rem;">⚖️</span>
        <h4>Side-by-Side Comparison · Your Condition(s): ${condStr}</h4>
      </div>
      <div class="table-responsive">
        <table class="comparison-table">
          <thead>
            <tr>
              <th>Attribute</th>
              <th>${escHtml(med1.icon)} ${escHtml(name1)}</th>
              <th>${escHtml(med2.icon)} ${escHtml(name2)}</th>
            </tr>
          </thead>
          <tbody>
            ${rows.map(([label, v1, v2]) => `
              <tr>
                <td>${label}</td>
                <td>${v1}</td>
                <td>${v2}</td>
              </tr>`).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

// ── Awareness Panel ───────────────────────────
const awarenessTips = [
  { icon: "🚫", bg: "#fdedec", title: "Dangers of Self-Medication",
    tips: ["Self-prescribing can mask serious underlying conditions", "Incorrect doses can lead to organ damage or overdose", "Drug interactions may go unnoticed without professional review", "OTC medicines are not without real risks", "Antibiotic resistance worsens with unsupervised use"] },
  { icon: "❤️", bg: "#eafaf1", title: "Check Your Health Conditions",
    tips: ["Always disclose existing conditions to your pharmacist", "Some medicines are contraindicated with chronic diseases", "Pregnancy and breastfeeding change medication safety profiles", "Kidney or liver disease affects how drugs are metabolized", "Age significantly alters drug metabolism and dosing"] },
  { icon: "🩺", bg: "#eaf4fd", title: "When to Consult a Doctor",
    tips: ["Symptoms persist for more than 3 days without improvement", "You are taking 3 or more medications simultaneously", "You experience unexpected or severe side effects", "You are considering stopping a prescribed medication", "You have a new or worsening chronic condition"] },
  { icon: "🛡️", bg: "#fef9e7", title: "Prevention & Safe Habits",
    tips: ["Keep an updated list of all medications you take", "Store medicines away from heat, light, and children", "Never share prescription medications with others", "Always check expiry dates before use", "Follow prescribed schedules — timing matters for effectiveness"] }
];

function renderAwareness(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = awarenessTips.map(tip => `
    <div class="col-md-6 col-lg-3">
      <div class="awareness-card">
        <h5>
          <span class="aw-icon" style="background:${escAttr(tip.bg)};">${escHtml(tip.icon)}</span>
          ${escHtml(tip.title)}
        </h5>
        <ul>
          ${tip.tips.map(t => `<li>${escHtml(t)}</li>`).join('')}
        </ul>
      </div>
    </div>
  `).join('');
}

function getRedFlags(risk) {
  if (risk.level === 'AVOID') {
    return [
      "Seek immediate professional advice before taking this medicine.",
      "If already taken and symptoms worsen, seek urgent care.",
      "Do not combine with other pain medicines without guidance."
    ];
  }
  if (risk.level === 'CAUTION') {
    return ["Consult clinician/pharmacist before repeat dosing.", "Stop and seek care if severe side effects occur."];
  }
  return [];
}

function getAllergiesFromParams(params) {
  const raw = params.get('allergies') || '';
  return raw.split(',').map(a => a.trim()).filter(Boolean);
}

function pushHistoryRecord(record) {
  const key = 'smasp_history';
  const current = JSON.parse(localStorage.getItem(key) || '[]');
  current.unshift({ ...record, at: new Date().toISOString() });
  localStorage.setItem(key, JSON.stringify(current.slice(0, 25)));
}

function readHistory() {
  return JSON.parse(localStorage.getItem('smasp_history') || '[]');
}

function bookmarkMedicine(name) {
  const key = 'smasp_bookmarks';
  const bookmarks = JSON.parse(localStorage.getItem(key) || '[]');
  if (!bookmarks.includes(name)) bookmarks.push(name);
  localStorage.setItem(key, JSON.stringify(bookmarks));
  notify(`${name} bookmarked.`);
}

function renderAnalyticsHome() {
  const panel = document.getElementById('analyticsPanel');
  if (!panel) return;
  const history = readHistory();
  const medCount = {};
  const pairCount = {};
  history.forEach(h => {
    if (h.med1) medCount[h.med1] = (medCount[h.med1] || 0) + 1;
    if (h.med2) medCount[h.med2] = (medCount[h.med2] || 0) + 1;
    if (h.med1 && h.med2) {
      const k = [h.med1, h.med2].sort().join(' + ');
      pairCount[k] = (pairCount[k] || 0) + 1;
    }
  });
  const topMeds = Object.entries(medCount).sort((a,b) => b[1]-a[1]).slice(0,5);
  const topPairs = Object.entries(pairCount).sort((a,b) => b[1]-a[1]).slice(0,5);
  const bookmarkList = JSON.parse(localStorage.getItem('smasp_bookmarks') || '[]');
  panel.innerHTML = `
    <div class="row g-3">
      <div class="col-md-4">
        <h6 style="font-weight:800;">Top Medicines</h6>
        ${topMeds.length ? `<ul>${topMeds.map(([m,c]) => `<li>${escHtml(m)} (${escHtml(c)})</li>`).join('')}</ul>` : '<p class="text-muted">No data yet.</p>'}
      </div>
      <div class="col-md-4">
        <h6 style="font-weight:800;">Frequent Combinations</h6>
        ${topPairs.length ? `<ul>${topPairs.map(([p,c]) => `<li>${escHtml(p)} (${escHtml(c)})</li>`).join('')}</ul>` : '<p class="text-muted">No comparison data yet.</p>'}
      </div>
      <div class="col-md-4">
        <h6 style="font-weight:800;">Bookmarked Medicines</h6>
        ${bookmarkList.length ? `<div>${bookmarkList.map(b => `<span class="bookmark-chip">⭐ ${escHtml(b)}</span>`).join('')}</div>` : '<p class="text-muted">No bookmarks yet.</p>'}
      </div>
    </div>
  `;
}

function showHistoryModal() {
  const items = readHistory();
  if (!items.length) { notify('No history available yet.'); return; }
  const lines = items.slice(0, 10).map(i => `${new Date(i.at).toLocaleString()}: ${escHtml(i.med1)}${i.med2 ? ` vs ${escHtml(i.med2)}` : ''}`).join('\n');
  notify(`Recent searches loaded. ${items.length} entries available.`);
  console.info(`Recent searches:\n\n${lines}`);
}

function buildSourceCitations(meds) {
  const all = meds.flatMap(m => (m.sources || []).map(s => s.trim())).filter(Boolean);
  const unique = [...new Set(all)];
  if (!unique.length) return '';
  return `
    <div class="sources-card">
      <h6>📚 Educational Sources</h6>
      <ul>${unique.map(s => `<li>${escHtml(s)}</li>`).join('')}</ul>
      <p style="margin:8px 0 0;font-size:0.78rem;color:var(--text-muted);">References are for education and awareness, not individual diagnosis or prescription.</p>
    </div>
  `;
}

function initAccessibilityControls() {
  const btn = document.getElementById('contrastToggle');
  const key = 'smasp_high_contrast';
  if (localStorage.getItem(key) === '1') document.body.classList.add('high-contrast');
  if (btn) {
    btn.addEventListener('click', () => {
      document.body.classList.toggle('high-contrast');
      localStorage.setItem(key, document.body.classList.contains('high-contrast') ? '1' : '0');
    });
  }
}

function createSimpleResultCard(name, med, risk, voiceLang) {
  const card = document.createElement('div');
  card.className = 'medicine-card p-3';

  const title = document.createElement('h4');
  title.textContent = `${med.icon} ${name}`;
  card.appendChild(title);

  const use = document.createElement('p');
  use.textContent = `Used for: ${med.use}`;
  card.appendChild(use);

  const riskLine = document.createElement('p');
  riskLine.textContent = `${risk.icon} ${risk.level} · Severity: ${risk.severity} · Confidence: ${risk.confidence}`;
  card.appendChild(riskLine);

  const reason = document.createElement('p');
  reason.textContent = risk.reason;
  card.appendChild(reason);

  const voiceBtn = document.createElement('button');
  voiceBtn.className = 'voice-btn';
  voiceBtn.textContent = '🔊 Explain Like a Doctor';
  voiceBtn.addEventListener('click', () => {
    const voiceText = `${name}. Category: ${med.category}. ${med.mechanism} Risk for your condition: ${risk.level}. ${risk.reason}`;
    speakMedicine(name, voiceText, voiceLang || 'en-US');
  });
  card.appendChild(voiceBtn);

  const bookmarkBtn = document.createElement('button');
  bookmarkBtn.className = 'btn-secondary-custom mt-2';
  bookmarkBtn.textContent = `⭐ Bookmark ${name}`;
  bookmarkBtn.addEventListener('click', () => bookmarkMedicine(name));
  card.appendChild(bookmarkBtn);

  return card;
}

// ── Render Results ────────────────────────────
function renderResults() {
  const params     = new URLSearchParams(window.location.search);
  const condRaw    = params.get('conditions') || "";
  const userConds  = condRaw ? condRaw.split(',').map(c => c.trim()).filter(c => conditions.includes(c)) : [];
  const med1NameRaw = params.get('med1') || "";
  const med2NameRaw = params.get('med2') || "";
  const med1Name = Object.keys(medicines).find(n => n === med1NameRaw) || "";
  const med2Name = Object.keys(medicines).find(n => n === med2NameRaw) || "";
  const med1       = medicines[med1Name];
  const med2       = med2Name ? medicines[med2Name] : null;
  const ageGroup = params.get('ageGroup') || 'adult';
  const pregnancy = params.get('pregnancy') || 'no';
  const breastfeeding = params.get('breastfeeding') || 'no';
  const allergies = getAllergiesFromParams(params);
  const voiceLang = params.get('voiceLang') || localStorage.getItem('smasp_voice_lang') || 'en-US';
  const lang = params.get('lang') || getLang();
  setLang(lang);
  const profile = { ageGroup, pregnancy, breastfeeding };

  if (!med1) {
    document.getElementById('resultsContainer').innerHTML = `
      <div class="text-center py-5">
        <div style="font-size:3rem;margin-bottom:16px;">🔍</div>
        <h4>No medicine data found.</h4>
        <a href="index.html" class="btn-primary-custom mt-3 d-inline-flex">← Start New Search</a>
      </div>`;
    return;
  }

  // Hero chips
  const heroChips = document.getElementById('heroChips');
  if (heroChips) {
    const condChips = userConds.length
      ? userConds.map(c => `<span class="query-chip">❤️ ${escHtml(c)}</span>`).join('')
      : '<span class="query-chip">No conditions selected</span>';
    const profileChip = `<span class="query-chip">👤 ${escHtml(ageGroup)}${pregnancy === 'yes' ? ' · pregnant' : ''}${breastfeeding === 'yes' ? ' · breastfeeding' : ''}</span>`;
    heroChips.innerHTML = `
      ${condChips}
      ${profileChip}
      <span class="query-chip">💊 ${escHtml(med1Name)}${med2 ? ` vs ${escHtml(med2Name)}` : ''}</span>
    `;
  }

  let risk1 = applyProfileRiskAdjustments(evaluateRisk(userConds, med1), med1, profile);
  let risk2 = med2 ? applyProfileRiskAdjustments(evaluateRisk(userConds, med2), med2, profile) : null;
  const allergyRisk1 = evaluateAllergyRisk(med1, allergies);
  const allergyRisk2 = med2 ? evaluateAllergyRisk(med2, allergies) : null;
  if (allergyRisk1) risk1 = { ...risk1, ...allergyRisk1, reason: [risk1.reason, allergyRisk1.reason].filter(Boolean).join(' ') };
  if (risk2 && allergyRisk2) risk2 = { ...risk2, ...allergyRisk2, reason: [risk2.reason, allergyRisk2.reason].filter(Boolean).join(' ') };

  const resultsContainer = document.getElementById('resultsContainer');
  resultsContainer.replaceChildren();

  if (med2) {
    const compareSummary = document.createElement('div');
    compareSummary.className = 'safety-score-banner';
    const inter = evaluateInteraction(med1Name, med2Name);
    compareSummary.textContent = `Comparison: ${med1Name} (${risk1.level}) vs ${med2Name} (${risk2.level}) · Interaction: ${inter.level} (${inter.severity})`;
    resultsContainer.appendChild(compareSummary);
  }

  const row = document.createElement('div');
  row.className = 'row g-4 mb-4';
  const col1 = document.createElement('div');
  col1.className = med2 ? 'col-lg-6' : 'col-lg-8 mx-auto';
  col1.appendChild(createSimpleResultCard(med1Name, med1, risk1, voiceLang));
  row.appendChild(col1);
  if (med2) {
    const col2 = document.createElement('div');
    col2.className = 'col-lg-6';
    col2.appendChild(createSimpleResultCard(med2Name, med2, risk2, voiceLang));
    row.appendChild(col2);
  }
  resultsContainer.appendChild(row);

  const backRow = document.createElement('div');
  backRow.className = 'back-row';
  const newSearch = document.createElement('a');
  newSearch.href = 'index.html';
  newSearch.className = 'btn-primary-custom';
  newSearch.textContent = '← New Search';
  backRow.appendChild(newSearch);
  const printBtnEl = document.createElement('button');
  printBtnEl.id = 'printReportBtn';
  printBtnEl.className = 'btn-secondary-custom';
  printBtnEl.textContent = '📄 Print Health Report';
  backRow.appendChild(printBtnEl);
  const clinicianBtnEl = document.createElement('button');
  clinicianBtnEl.id = 'clinicianModeBtn';
  clinicianBtnEl.className = 'btn-secondary-custom';
  clinicianBtnEl.textContent = '🧑‍⚕️ Clinician Mode';
  backRow.appendChild(clinicianBtnEl);
  const stopVoiceBtnEl = document.createElement('button');
  stopVoiceBtnEl.id = 'stopVoiceBtn';
  stopVoiceBtnEl.className = 'btn-secondary-custom';
  stopVoiceBtnEl.textContent = '🔇 Stop Voice';
  backRow.appendChild(stopVoiceBtnEl);
  resultsContainer.appendChild(backRow);

  const printBtn = document.getElementById('printReportBtn');
  if (printBtn) printBtn.addEventListener('click', () => printReport());
  const clinicianBtn = document.getElementById('clinicianModeBtn');
  if (clinicianBtn) clinicianBtn.addEventListener('click', toggleClinicianMode);
  const stopVoiceBtn = document.getElementById('stopVoiceBtn');
  if (stopVoiceBtn) stopVoiceBtn.addEventListener('click', () => window.speechSynthesis && window.speechSynthesis.cancel());

  const srcEl = document.getElementById('sourceCitations');
  if (srcEl) srcEl.innerHTML = buildSourceCitations([med1, ...(med2 ? [med2] : [])]);
}

// ── Print Report ──────────────────────────────
function printReport() {
  const title = document.title;
  document.title = `Personal Medicine Awareness Report — SMASP`;
  window.print();
  document.title = title;
}

function toggleClinicianMode() {
  document.body.classList.toggle('clinician-mode');
  notify(document.body.classList.contains('clinician-mode') ? 'Clinician mode enabled for cleaner print summaries.' : 'Clinician mode disabled.');
}

// ── DOMContentLoaded init ─────────────────────
document.addEventListener('DOMContentLoaded', () => {
  const page = document.body.dataset.page;
  initAccessibilityControls();

  if (page === 'home') {
    loadDatasetFromStorage();
    populateConditionCheckboxes('conditionCheckboxes');
    populateMedicines('medicine1Select', '— Select primary medicine');
    populateMedicines('medicine2Select', '— Optional: compare with');
    populateDatalist('symptomSuggestions', symptomSuggestions);
    populateDatalist('allergySuggestions', knownAllergens);
    renderAwareness('awarenessGrid');
    renderAnalyticsHome();
    bindMedicineSearch();
    initAdminPanel();
    const cSearch = document.getElementById('conditionSearchInput');
    if (cSearch) cSearch.addEventListener('input', () => filterConditions(cSearch.value));
    const historyBtn = document.getElementById('historyBtn');
    if (historyBtn) historyBtn.addEventListener('click', showHistoryModal);
    const langSelect = document.getElementById('languageSelect');
    if (langSelect) {
      langSelect.value = getLang();
      langSelect.addEventListener('change', () => setLang(langSelect.value));
    }
    const form = document.getElementById('searchForm');
    if (form) form.addEventListener('submit', handleFormSubmit);
  }

  if (page === 'result') {
    renderResults();
    renderAwareness('awarenessGridResult');
  }
});
