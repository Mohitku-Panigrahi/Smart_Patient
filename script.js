/* ============================================
   SMASP v2.0 — Upgraded Script
   Smart Medicine Awareness & Safety Platform
   ============================================ */

// ── Enhanced Medicine Dataset ─────────────────
const medicines = {
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
    steps: [
      { icon: "🟡", label: "Taken orally", desc: "Rapidly absorbed in the stomach" },
      { icon: "🩸", label: "Enters bloodstream", desc: "Distributed to platelets and tissues" },
      { icon: "🔗", label: "Binds platelets", desc: "Irreversibly inactivates COX-1" },
      { icon: "❤️", label: "Effect", desc: "Clotting reduced, pain/fever lowered" }
    ]
  }
};

// ── Health Conditions ─────────────────────────
const conditions = [
  "Asthma",
  "Diabetes",
  "High Blood Pressure",
  "Liver Disease",
  "Stomach Ulcer",
  "Bleeding Disorder",
  "Kidney Disease",
  "Heart Disease"
];

// ── Risk Evaluation (supports multiple conditions) ─
function evaluateRisk(userConditions, medicine) {
  if (!userConditions || userConditions.length === 0) {
    return { level: "SAFE", cssClass: "safe", icon: "✅", score: 3,
      reason: "No health condition selected — no known conflicts identified." };
  }
  // Check avoid first (any avoid = worst outcome)
  for (const cond of userConditions) {
    if (medicine.avoid.includes(cond)) {
      return { level: "AVOID", cssClass: "avoid", icon: "🚫", score: 1,
        reason: `This medicine should be AVOIDED with "${cond}". It may significantly worsen this condition or cause serious harm. Consult your doctor immediately.` };
    }
  }
  // Check caution
  const cautionHits = userConditions.filter(c => medicine.caution.includes(c));
  if (cautionHits.length > 0) {
    return { level: "CAUTION", cssClass: "caution", icon: "⚠️", score: 2,
      reason: `Use with CAUTION if you have "${cautionHits.join(', ')}". This medicine can interact with this condition. Always inform your healthcare provider.` };
  }
  return { level: "SAFE", cssClass: "safe", icon: "✅", score: 3,
    reason: `No known conflict between this medicine and your selected condition(s). Always verify with a licensed healthcare professional.` };
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
      <input type="checkbox" name="conditions" value="${c}" />
      <span>${c}</span>
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

// ── Form Submit ───────────────────────────────
function handleFormSubmit(e) {
  e.preventDefault();
  const disease   = document.getElementById('diseaseInput')?.value.trim() || "";
  const checked   = [...document.querySelectorAll('input[name="conditions"]:checked')].map(el => el.value);
  const med1      = document.getElementById('medicine1Select')?.value || "";
  const med2      = document.getElementById('medicine2Select')?.value || "";

  if (!med1) { showFormError("Please select at least one medicine to evaluate."); return; }

  const params = new URLSearchParams();
  if (disease) params.set('disease', disease);
  if (checked.length) params.set('conditions', checked.join(','));
  params.set('med1', med1);
  if (med2 && med2 !== med1) params.set('med2', med2);
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

  const stepsHTML = med.steps.map((s, i) => `
    <div class="mech-step">
      <div class="mech-step-icon">${s.icon}</div>
      <div class="mech-step-content">
        <strong>${s.label}</strong>
        <span>${s.desc}</span>
      </div>
      ${i < med.steps.length - 1 ? '<div class="mech-arrow">↓</div>' : ''}
    </div>
  `).join('');

  const didYouKnow = med.did_you_know.map(f => `
    <div class="dyk-fact">
      <span class="dyk-bullet">💡</span>
      <span>${f}</span>
    </div>
  `).join('');

  const whoCannotList = med.who_cannot.map(w => `<li>${w}</li>`).join('');

  const voiceText = `${name}. Category: ${med.category}. ${med.mechanism} Risk for your condition: ${risk.level}. ${risk.reason}`;

  return `
    <div class="medicine-card" id="card-${name.replace(/\s/g,'')}">

      <!-- Header -->
      <div class="medicine-card-header">
        <div>
          <div class="med-category-tag">${med.category}</div>
          <h3>${med.icon} ${name}</h3>
          <div class="use-tag">Used for: ${med.use}</div>
        </div>
        <span class="risk-badge ${risk.cssClass}">${risk.icon} ${risk.level}</span>
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
        <span class="risk-reason-icon">${risk.icon}</span>
        <span>${risk.reason}</span>
      </div>

      <!-- Card Body -->
      <div class="medicine-card-body">

        <!-- Info chips -->
        <div class="info-row">
          <div class="info-chip">
            <span class="chip-label">Side Effects</span>
            <span class="chip-value">${med.side_effects}</span>
          </div>
          <div class="info-chip">
            <span class="chip-label">Learn More</span>
            <span class="chip-value">${med.learn_more}</span>
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
                <p>${med.mechanism}</p>
              </div>
              <div class="mechanism-box mt-3">
                <div class="mechanism-label">How It Treats Your Problem</div>
                <p>${med.treats}</p>
              </div>
              <div class="learn-more-tag">📘 Awareness Note: ${med.learn_more}</div>

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
        <button class="voice-btn" onclick="speakMedicine('${name}', \`${voiceText.replace(/`/g,"'")}\`)">
          🔊 Explain Like a Doctor
        </button>

      </div>
    </div>
  `;
}

// ── Voice Synthesis ───────────────────────────
function speakMedicine(name, text) {
  if (!window.speechSynthesis) { alert('Voice not supported in this browser.'); return; }
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = 0.88;
  utterance.pitch = 1;
  utterance.lang = 'en-US';
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

  return `
    <div class="safety-score-banner">
      <div class="ssb-header">
        <span>🏅</span>
        <h5>Safety Comparison Score</h5>
        ${safer.name !== 'Both Equal'
          ? `<span class="ssb-winner">🟢 Safer for your condition: <strong>${safer.name}</strong></span>`
          : `<span class="ssb-winner">🟢 Both medicines have equal safety for your condition.</span>`}
      </div>
      <div class="ssb-scores">
        <div class="ssb-score-item">
          <div class="ssb-med-name">${name1}</div>
          <div class="ssb-bar-wrap">
            <div class="ssb-bar" style="width:${(s1/3)*100}%;background:${colorClass[risk1.cssClass]};"></div>
          </div>
          <span class="ssb-label ${risk1.cssClass}">${risk1.icon} ${scoreLabel[s1]}</span>
        </div>
        <div class="ssb-score-item">
          <div class="ssb-med-name">${name2}</div>
          <div class="ssb-bar-wrap">
            <div class="ssb-bar" style="width:${(s2/3)*100}%;background:${colorClass[risk2.cssClass]};"></div>
          </div>
          <span class="ssb-label ${risk2.cssClass}">${risk2.icon} ${scoreLabel[s2]}</span>
        </div>
      </div>
      <p class="ssb-note">Score is based on risk level relative to your selected health condition(s). Educational only.</p>
    </div>
  `;
}

// ── Comparison Table ──────────────────────────
function buildComparisonTable(name1, med1, risk1, name2, med2, risk2, conditions) {
  const condStr = conditions.length ? conditions.join(', ') : 'None selected';
  const rows = [
    ["Category",       med1.category, med2.category],
    ["Uses",           med1.use, med2.use],
    ["Risk Level",
      `<span class="comp-risk-cell ${risk1.cssClass}">${risk1.icon} ${risk1.level}</span>`,
      `<span class="comp-risk-cell ${risk2.cssClass}">${risk2.icon} ${risk2.level}</span>`
    ],
    ["Mechanism",      med1.mechanism, med2.mechanism],
    ["Treats",         med1.treats, med2.treats],
    ["Side Effects",   med1.side_effects, med2.side_effects],
    ["Avoid With",     med1.avoid.join(', ') || 'None', med2.avoid.join(', ') || 'None'],
    ["Use Caution",    med1.caution.join(', ') || 'None', med2.caution.join(', ') || 'None'],
    ["Risk Reason",    risk1.reason, risk2.reason]
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
              <th>${med1.icon} ${name1}</th>
              <th>${med2.icon} ${name2}</th>
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
          <span class="aw-icon" style="background:${tip.bg};">${tip.icon}</span>
          ${tip.title}
        </h5>
        <ul>
          ${tip.tips.map(t => `<li>${t}</li>`).join('')}
        </ul>
      </div>
    </div>
  `).join('');
}

// ── Render Results ────────────────────────────
function renderResults() {
  const params     = new URLSearchParams(window.location.search);
  const disease    = params.get('disease') || "";
  const condRaw    = params.get('conditions') || "";
  const userConds  = condRaw ? condRaw.split(',') : [];
  const med1Name   = params.get('med1') || "";
  const med2Name   = params.get('med2') || "";
  const med1       = medicines[med1Name];
  const med2       = med2Name ? medicines[med2Name] : null;

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
      ? userConds.map(c => `<span class="query-chip">❤️ ${c}</span>`).join('')
      : '<span class="query-chip">No conditions selected</span>';
    heroChips.innerHTML = `
      ${disease ? `<span class="query-chip">🩺 ${disease}</span>` : ''}
      ${condChips}
      <span class="query-chip">💊 ${med1Name}${med2 ? ` vs ${med2Name}` : ''}</span>
    `;
  }

  const risk1 = evaluateRisk(userConds, med1);
  const risk2 = med2 ? evaluateRisk(userConds, med2) : null;

  const card1HTML = buildMedicineCard(med1Name, med1, risk1);
  const card2HTML = med2 ? buildMedicineCard(med2Name, med2, risk2) : buildComparePrompt();
  const safetyBanner = med2 ? buildSafetyScoreBanner(med1Name, risk1, med2Name, risk2) : '';
  const compTable = med2 ? buildComparisonTable(med1Name, med1, risk1, med2Name, med2, risk2, userConds) : '';

  document.getElementById('resultsContainer').innerHTML = `
    ${safetyBanner}
    <div class="row g-4 mb-4">
      <div class="col-lg-${med2 ? '6' : '8 mx-auto'}">${card1HTML}</div>
      ${med2
        ? `<div class="col-lg-6">${card2HTML}</div>`
        : `<div class="col-lg-4">${card2HTML}</div>`}
    </div>
    ${compTable}
    <div class="back-row">
      <a href="index.html" class="btn-primary-custom">← New Search</a>
      <button onclick="printReport('${med1Name}','${med2Name || ''}','${userConds.join(', ') || 'None'}')" class="btn-secondary-custom">📄 Print Health Report</button>
      <button onclick="window.speechSynthesis && window.speechSynthesis.cancel()" class="btn-secondary-custom">🔇 Stop Voice</button>
    </div>
  `;
}

// ── Print Report ──────────────────────────────
function printReport(med1, med2, conditions) {
  const title = document.title;
  document.title = `Personal Medicine Awareness Report — SMASP`;
  window.print();
  document.title = title;
}

// ── DOMContentLoaded init ─────────────────────
document.addEventListener('DOMContentLoaded', () => {
  const page = document.body.dataset.page;

  if (page === 'home') {
    populateConditionCheckboxes('conditionCheckboxes');
    populateMedicines('medicine1Select', '— Select primary medicine');
    populateMedicines('medicine2Select', '— Optional: compare with');
    renderAwareness('awarenessGrid');
    const form = document.getElementById('searchForm');
    if (form) form.addEventListener('submit', handleFormSubmit);
  }

  if (page === 'result') {
    renderResults();
    renderAwareness('awarenessGridResult');
  }
});
