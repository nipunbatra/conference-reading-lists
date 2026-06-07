// AAAI 2026 reading list for the Sustainability Lab (IIT Gandhinagar).
// Focused on the Special Track on AI for Social Impact (AISI). Schema in ../README.md.
window.READING_LIST = {
  venue: "AAAI 2026",
  dates: "January 20–27, 2026",
  location: "Singapore EXPO",
  source: "AAAI-26 Proceedings — Special Track on AI for Social Impact (181 papers across issues I & II)",
  updated: "2026-06-07",
  intro:
    "Curated from the AAAI-26 Special Track on AI for Social Impact (AISI), grouped by the lab's lines of work " +
    "and mapped to lab projects. AISI is the lab's natural home at AAAI. Tiers: ★ must-read, ○ adjacent/skim. " +
    "Two AISI Outstanding Papers this year — PlantTraitNet and Generalizable Slum Detection — are both directly " +
    "lab-relevant and flagged below.",

  // The lab's own paper at this venue.
  labPaper: {
    title: "Scalable Air-Quality Sensor Placement via Gradient-Based Mutual Information Maximization",
    authors: "Zeel B. Patel, Vinayak Rana, Nipun Batra",
    url: "https://ojs.aaai.org/index.php/AAAI/article/view/41257",
    track: "AAAI-26 · Special Track on AI for Social Impact",
    why: "Our paper: a differentiable, gradient-based approach to mutual-information maximization for deciding where " +
         "to place air-quality sensors — scaling sensor-placement optimization far beyond greedy selection. " +
         "Builds on the lab's Gaussian-process air-quality inference (DeepGP-AQ) and the AIRDELHI sensing work."
  },

  labWorks: {
    "AQ-SensorPlacement": "Scalable air-quality sensor placement via gradient-based mutual-information maximization (this paper)",
    "AIRDELHI": "Fine-grained spatio-temporal PM dataset from Delhi (2023)",
    "DeepGP-AQ": "Deep / scalable Gaussian processes for fine-grained air-quality inference (2022–2023)",
    "Samachar/Vartalaap": "Studies of air-pollution news media & online discourse in India (2021–2022)",
    "Conformal-NILM": "Distribution-free UQ & calibration for energy disaggregation (2025)",
    "NILM-UQ": "\"I do not know\": quantifying uncertainty in NN-based NILM (2022)",
    "NILM-AL": "Benchmarking active learning for NILM (2024)",
    "EdgeNILM": "NILM on resource-constrained edge devices (2020)",
    "DRL-HouseControl": "Optimizing pollutant exposure, energy & thermal comfort via deep RL (2025)",
    "SentinelKilnDB": "OBB brick-kiln detection dataset & benchmark, South Asia satellite (2025)",
    "Space-to-Policy": "Scalable brick-kiln detection + automatic compliance monitoring (2025)",
    "PlantDoc": "Plant-disease detection dataset (2020)",
    "SpiroActive": "Active learning for efficient spirometry data acquisition (2024)",
    "SpiroMask": "Lung-function measurement from consumer-grade masks (2023)",
    "JoulesEye": "Energy expenditure + respiration from thermal imagery (IMWUT 2024)",
    "VayuChat/VayuBuddy": "LLM chatbots & benchmarks for air-quality data analytics (2024–2025)"
  },

  workshops: [],

  clusters: [
    {
      id: "energy",
      name: "Energy, grid & NILM",
      desc: "User-level energy prediction with reliability, grid carbon forecasting, energy markets, and the carbon/energy cost of AI itself.",
      labMap: ["NILM-UQ", "Conformal-NILM", "EdgeNILM", "DRL-HouseControl"],
      papers: [
        { tier:"must", title:"TrustEnergy: A Unified Framework for Accurate and Reliable User-level Energy Usage Prediction",
          url:"https://ojs.aaai.org/index.php/AAAI/article/view/41307",
          maps:["NILM-UQ","Conformal-NILM"], why:"User-level energy prediction with explicit reliability — exactly the NILM-UQ / Conformal-NILM agenda at the meter level." },
        { tier:"adjacent", title:"Improving Day-Ahead Grid Carbon Intensity Forecasting by Joint Local-Temporal & Cross-Variable Modeling",
          url:"https://ojs.aaai.org/index.php/AAAI/article/view/41310",
          maps:["AIRDELHI"], why:"Multivariate time-series forecasting for grid carbon — same machinery as PM forecasting; pairs with DRL house control." },
        { tier:"adjacent", title:"Multi-Agent Reinforcement Learning for Modeling, Simulating, and Optimizing Energy Markets",
          url:"https://ojs.aaai.org/index.php/AAAI/article/view/41229",
          maps:["DRL-HouseControl"], why:"RL for energy-system control/optimization — the market-scale sibling of the lab's building-level DRL." },
        { tier:"adjacent", title:"Satellite-Text-Prompted Large Language Model for Photovoltaic Power Forecasting",
          url:"https://ojs.aaai.org/index.php/AAAI/article/view/41207",
          maps:["VayuChat/VayuBuddy"], why:"Satellite + LLM-prompted forecasting for solar — combines the lab's remote-sensing and LLM-for-energy interests." },
        { tier:"adjacent", title:"CO2-Meter: A Comprehensive Carbon Footprint Estimator for LLMs on Edge Devices",
          url:"https://ojs.aaai.org/index.php/AAAI/article/view/41188",
          maps:["EdgeNILM"], why:"Measuring energy/carbon of models on edge — directly EdgeNILM's efficiency concern, now for LLMs." },
        { tier:"adjacent", title:"Promoting Sustainable Web Agents: Benchmarking & Estimating Energy Consumption",
          url:"https://ojs.aaai.org/index.php/AAAI/article/view/41221",
          maps:["EdgeNILM","VayuChat/VayuBuddy"], why:"Energy accounting for AI agents — useful framing for VayuChat's deployment footprint." }
      ]
    },
    {
      id: "remote-sensing",
      name: "Satellite & remote sensing for social impact",
      desc: "Slum/structure detection, continent-scale geospatial inference, and using satellite predictions responsibly for policy.",
      labMap: ["SentinelKilnDB", "Space-to-Policy"],
      papers: [
        { tier:"must", title:"Generalizable Slum Detection from Satellite Imagery with Mixture-of-Experts",
          url:"https://ojs.aaai.org/index.php/AAAI/article/view/41227",
          maps:["SentinelKilnDB","Space-to-Policy"], why:"AISI Outstanding Paper. Generalizable detection of informal structures across geographies — the exact challenge SentinelKilnDB/Space-to-Policy face with brick kilns." },
        { tier:"must", title:"Debiasing ML Predictions for Causal Inference Without Extra Ground Truth: “One Map, Many Trials” (Satellite Poverty)",
          url:"https://ojs.aaai.org/index.php/AAAI/article/view/41258",
          maps:["Space-to-Policy"], why:"How to use satellite-derived predictions as inputs to downstream policy/causal analysis without bias — the methodological gap Space-to-Policy steps into." },
        { tier:"adjacent", title:"Masked Mineral Modeling: Continent-Scale Mineral Prospecting via Geospatial Infilling",
          url:"https://ojs.aaai.org/index.php/AAAI/article/view/41252",
          maps:["SentinelKilnDB"], why:"Self-supervised geospatial infilling at continental scale — pretraining idea for sparse-label kiln mapping." },
        { tier:"adjacent", title:"A Benchmark Dataset for Spatially Aligned Road Damage Assessment in Small UAS Disaster Imagery",
          url:"https://ojs.aaai.org/index.php/AAAI/article/view/41248",
          maps:["SentinelKilnDB"], why:"Aerial/UAV detection benchmark with spatial alignment — dataset-construction lessons for the next kiln release." }
      ]
    },
    {
      id: "yield",
      name: "Crop yield & agriculture",
      desc: "Climate-robust yield forecasting, agricultural pretext tasks, India-specific sustainable-farming monitoring.",
      labMap: ["PlantDoc"],
      papers: [
        { tier:"must", title:"VITA: Variational Pretraining of Transformers for Climate-Robust Crop Yield Forecasting", student:"Yield",
          url:"https://ojs.aaai.org/index.php/AAAI/article/view/41197",
          maps:["PlantDoc"], why:"Variational pretraining for yield that is robust to climate shift — strong baseline/architecture for the yield student project." },
        { tier:"must", title:"Time2Agri: Temporal Pretext Tasks for Agricultural Monitoring", student:"Yield",
          url:"https://ojs.aaai.org/index.php/AAAI/article/view/41195",
          maps:["PlantDoc"], why:"Self-supervised temporal pretext tasks tailored to crop calendars — pretraining recipe for satellite yield models." },
        { tier:"must", title:"Machine Learning for Sustainable Rice Production: Region-Scale Monitoring of Water-Saving Practices in Punjab, India", student:"Yield",
          url:"https://ojs.aaai.org/index.php/AAAI/article/view/41270",
          maps:["PlantDoc","Space-to-Policy"], why:"India-scale agricultural monitoring with a sustainability + policy angle — directly aligned with the lab's geography and mission." },
        { tier:"must", title:"PlantTraitNet: Uncertainty-Aware Multimodal Framework for Global-Scale Plant Trait Inference",
          url:"https://ojs.aaai.org/index.php/AAAI/article/view/41272",
          maps:["PlantDoc"], why:"AISI Outstanding Paper. Uncertainty-aware, multimodal, citizen-science plant inference — PlantDoc grown up, with UQ baked in." }
      ]
    },
    {
      id: "climate-env",
      name: "Climate, environment & geophysical emulation",
      desc: "ML emulators of ecosystem/geophysical processes, zero-shot environmental prediction, interpretable scientific reasoning, and climate discourse.",
      labMap: ["AIRDELHI", "DeepGP-AQ", "Samachar/Vartalaap"],
      papers: [
        { tier:"must", title:"EcoDiffusion: Uncertainty-Aware Emulation of Ecosystem Processes with Conditional Diffusion",
          url:"https://ojs.aaai.org/index.php/AAAI/article/view/41233",
          maps:["AIRDELHI","Conformal-NILM"], why:"Uncertainty-aware diffusion emulator of a physical-process model — the WRF/CAMx-emulator + UQ theme, in one paper." },
        { tier:"must", title:"ScIReN: Scientifically-Interpretable Reasoning Network — Discovering Hidden Relationships in the Carbon Cycle",
          url:"https://ojs.aaai.org/index.php/AAAI/article/view/41185",
          maps:["AQ-SensorPlacement"], why:"Interpretable-by-design reasoning for physical-science discovery — the DiSciPLE-style direction applied to the carbon cycle." },
        { tier:"adjacent", title:"GREAT: Generalizable Representation Enhancement for Zero-Shot Environmental Prediction",
          url:"https://ojs.aaai.org/index.php/AAAI/article/view/41246",
          maps:["AIRDELHI"], why:"Transfer to unseen environmental targets — relevant to cross-region AQ generalization." },
        { tier:"adjacent", title:"ForeSWE: Forecasting Snow-Water Equivalent with an Uncertainty-Aware Attention Model",
          url:"https://ojs.aaai.org/index.php/AAAI/article/view/41284",
          maps:["DeepGP-AQ","AIRDELHI"], why:"Geophysical spatio-temporal forecasting with calibrated uncertainty — same problem shape as PM fields." },
        { tier:"adjacent", title:"Characterizing AI Manipulation Risks in Brazilian YouTube Climate Discourse",
          url:"https://ojs.aaai.org/index.php/AAAI/article/view/41180",
          maps:["Samachar/Vartalaap"], why:"Computational analysis of climate/environment discourse — methodological cousin of the lab's Samachar/Vartalaap media studies." }
      ]
    },
    {
      id: "spatiotemporal-uq",
      name: "Spatio-temporal inference & uncertainty",
      desc: "Variational state-space / GP-style spatio-temporal models and calibrated uncertainty.",
      labMap: ["DeepGP-AQ", "AIRDELHI", "Conformal-NILM"],
      papers: [
        { tier:"must", title:"GraphVSSM: Graph Variational State-Space Model for Probabilistic Spatio-Temporal Inference",
          url:"https://ojs.aaai.org/index.php/AAAI/article/view/41178",
          maps:["DeepGP-AQ","AIRDELHI"], why:"Probabilistic graph spatio-temporal inference — a direct neighbor of the lab's GP-based air-quality inference." },
        { tier:"adjacent", title:"A Retrieval-Augmented Spatio-Temporal Framework for Traffic Prediction",
          url:"https://ojs.aaai.org/index.php/AAAI/article/view/41264",
          maps:["AIRDELHI"], why:"Retrieval-augmented spatio-temporal forecasting — transferable to sparse-station PM prediction." },
        { tier:"adjacent", title:"Trustworthy Classification for Complex Social Surveys with Calibrated Uncertainty",
          url:"https://ojs.aaai.org/index.php/AAAI/article/view/41291",
          maps:["Conformal-NILM","NILM-UQ"], why:"Calibrated, hierarchical uncertainty for real survey data — UQ design patterns reusable for sensing data." }
      ]
    },
    {
      id: "active-causal",
      name: "Active learning & causal discovery",
      desc: "Budgeted/online active learning and LLM-guided causal discovery.",
      labMap: ["NILM-AL", "SpiroActive"],
      papers: [
        { tier:"must", title:"Budgeted Online Active Learning with Expert Advice and Episodic Priors",
          url:"https://ojs.aaai.org/index.php/AAAI/article/view/41191",
          maps:["NILM-AL","SpiroActive"], why:"Online, budget-constrained AL with priors — the practical regime of the lab's NILM/spirometry active-learning work." },
        { tier:"adjacent", title:"Active Learning for Animal Re-Identification with Ambiguity-Aware Sampling",
          url:"https://ojs.aaai.org/index.php/AAAI/article/view/41266",
          maps:["SpiroActive","NILM-AL"], why:"Ambiguity-aware acquisition — a transferable sampling criterion for label-scarce sensing data." },
        { tier:"adjacent", title:"Uncovering Bias Paths with LLM-guided Causal Discovery: An Active Learning & Dynamic Scoring Approach",
          url:"https://ojs.aaai.org/index.php/AAAI/article/view/41308",
          maps:["NILM-AL"], why:"LLM-guided causal discovery + active learning — the DiSciPLE-adjacent, discovery-via-LLM direction." }
      ]
    },
    {
      id: "health",
      name: "Health & disease forecasting",
      desc: "Public-health forecasting, clinical time series, and RL for personalized therapy.",
      labMap: ["SpiroMask", "JoulesEye", "DRL-HouseControl"],
      papers: [
        { tier:"adjacent", title:"HierarNet: Independent Interactive Hierarchical Disease Outbreak Forecasting",
          url:"https://ojs.aaai.org/index.php/AAAI/article/view/41315",
          maps:["AIRDELHI"], why:"Hierarchical spatio-temporal forecasting for public health — same modeling family as the lab's environmental forecasting." },
        { tier:"adjacent", title:"Forecasting Clinical Risk from Textual Time Series",
          url:"https://ojs.aaai.org/index.php/AAAI/article/view/41255",
          maps:["JoulesEye"], why:"Temporal health-risk modeling — relevant to the lab's wearable/health-sensing time series." },
        { tier:"adjacent", title:"Bootstrapping Personalized Insulin Therapy via Model-Based Reinforcement Learning (In Silico)",
          url:"https://ojs.aaai.org/index.php/AAAI/article/view/41160",
          maps:["DRL-HouseControl"], why:"Model-based RL for a personalized health controller — methods mirror the lab's DRL comfort/exposure control." },
        { tier:"adjacent", title:"Preference Robustness for DPO with Applications to Public Health",
          url:"https://ojs.aaai.org/index.php/AAAI/article/view/41215",
          maps:["VayuChat/VayuBuddy"], why:"Robust preference optimization for LLMs in a public-health setting — alignment lessons for VayuChat-style assistants." }
      ]
    },
    {
      id: "disaster",
      name: "Disaster & environmental risk datasets",
      desc: "Large benchmarks for environmental risk prediction.",
      labMap: ["AIRDELHI", "Space-to-Policy"],
      papers: [
        { tier:"adjacent", title:"BCWildfire: A Long-term Multi-factor Dataset & Benchmark for Boreal Wildfire Risk Prediction",
          url:"https://ojs.aaai.org/index.php/AAAI/article/view/41299",
          maps:["AIRDELHI","Space-to-Policy"], why:"Multi-factor environmental-risk dataset + benchmark — a model for assembling India-relevant risk datasets." }
      ]
    }
  ]
};
