// BuildSys 2025 + IMWUT 2025 reading list for the Sustainability Lab (IIT Gandhinagar).
// The lab's home venues: NILM/energy (BuildSys) and wearable/health sensing (IMWUT/UbiComp).
window.READING_LIST = {
  venue: "BuildSys 2025 + IMWUT 2025",
  dates: "BuildSys: Nov 19–21, 2025 (Golden, CO) · IMWUT/UbiComp 2025 (PACM IMWUT vol. 9)",
  location: "ACM",
  source: "ACM Digital Library (paper lists via DBLP) — BuildSys 95 papers, IMWUT vol. 9 242 papers",
  updated: "2026-06-07",
  intro:
    "The lab's home turf: BuildSys (energy/NILM, HVAC control, smart metering, indoor air quality) and IMWUT/UbiComp " +
    "(wearable & contactless health sensing). Curated and mapped to lab projects. Tiers: ★ must-read, ○ adjacent/skim. " +
    "Abstracts link out to the ACM Digital Library (publisher pages aren't auto-scrapable).",
  labWorks: {
    "NILM-UQ": "\"I do not know\": uncertainty in NN-based NILM (2022)",
    "Conformal-NILM": "Distribution-free UQ & calibration for energy disaggregation (2025)",
    "NILM-AL": "Benchmarking active learning for NILM (2024)",
    "EdgeNILM": "NILM on resource-constrained edge devices (2020)",
    "DRL-HouseControl": "DRL for pollutant exposure / energy / thermal comfort (2025)",
    "AIRDELHI": "Fine-grained spatio-temporal PM dataset from Delhi (2023)",
    "VayuChat/VayuBuddy": "LLM chatbots & benchmarks for air-quality data analytics (2024–2025)",
    "JoulesEye": "Energy expenditure + respiration from thermal imagery (IMWUT 2024)",
    "ApneaEye": "Respiration & sleep-apnea sensing from thermal imaging (ongoing)",
    "SpiroMask": "Lung function from consumer-grade masks (2023)",
    "SpiroActive": "Active learning for spirometry data acquisition (2024)",
    "PlantDoc": "Plant-disease detection dataset (2020)"
  },
  workshops: [],
  clusters: [
    { id:"nilm", name:"BuildSys — NILM & load disaggregation", desc:"Energy disaggregation methods, datasets and the LLM angle.",
      labMap:["NILM-UQ","Conformal-NILM","NILM-AL"], papers:[
      { tier:"must", title:"Prompting Large Language Models for Training-Free Non-Intrusive Load Monitoring", url:"https://doi.org/10.1145/3736425.3770095", maps:["NILM-UQ","VayuChat/VayuBuddy"], why:"Zero-training NILM via LLM prompting — fuses the lab's NILM and LLM threads." },
      { tier:"must", title:"Can Attention Improve Sequence-to-Point Load Disaggregation? A Comparative Assessment", url:"https://doi.org/10.1145/3736425.3770094", maps:["NILM-UQ"], why:"Rigorous comparison of seq2point NILM variants — directly comparable to the lab's NILM benchmarking." },
      { tier:"must", title:"Sequence-to-Segments-to-Sequence Learning for Non-Intrusive Load Monitoring", url:"https://doi.org/10.1145/3736425.3770096", maps:["NILM-UQ"], why:"A new NILM architecture — candidate baseline for NILMBench." },
      { tier:"adjacent", title:"Dataset: Device Activity Report with Complete Knowledge (DARCK) for NILM", url:"https://doi.org/10.1145/3736425.3771960", maps:["NILM-UQ"], why:"Fully-labeled NILM dataset — useful ground truth for evaluation/UQ." } ]
    },
    { id:"hvac", name:"BuildSys — HVAC & building control", desc:"DRL and LLM-based control of building systems.",
      labMap:["DRL-HouseControl"], papers:[
      { tier:"must", title:"Thermal-Delay Aware Deep Reinforcement Learning for HVAC System Control", url:"https://doi.org/10.1145/3736425.3772101", maps:["DRL-HouseControl"], why:"DRL HVAC control accounting for thermal delay — directly the lab's comfort/energy DRL." },
      { tier:"must", title:"Tackling Non-Stationarity in HVAC Control with TimeGPT-Enhanced Deep Reinforcement Learning", url:"https://doi.org/10.1145/3736425.3772355", maps:["DRL-HouseControl"], why:"Handling non-stationarity in building DRL — a known pain point in real deployments." },
      { tier:"adjacent", title:"DARLIN: Domain-guided Augmented Retrieval for LLM-based Interpretable HVAC Control", url:"https://doi.org/10.1145/3736425.3772323", maps:["DRL-HouseControl","VayuChat/VayuBuddy"], why:"Interpretable LLM+RAG control — the LLM-control direction." },
      { tier:"adjacent", title:"An LLM Framework for Inferring Household Energy Consumption Through Behaviour Simulation", url:"https://doi.org/10.1145/3736425.3772053", maps:["NILM-UQ","VayuChat/VayuBuddy"], why:"LLM-simulated household energy behaviour — synthetic data + NILM priors." } ]
    },
    { id:"metering", name:"BuildSys — Smart metering, energy data & forecasting", desc:"Synthetic energy data, privacy, and building energy forecasting.",
      labMap:["NILM-UQ","EdgeNILM","AIRDELHI"], papers:[
      { tier:"must", title:"How Realistic Are Synthetic Energy Data? Feature-Based Evaluation of Generated Smart-Meter Load Profiles", url:"https://doi.org/10.1145/3736425.3772359", maps:["NILM-UQ"], why:"Evaluating synthetic load data — crucial as the field leans on generated NILM data." },
      { tier:"adjacent", title:"Privacy-Preserving Smart Metering through Data Synthesis with Differential Privacy", url:"https://doi.org/10.1145/3736425.3772098", maps:["NILM-UQ"], why:"DP synthesis of meter data — privacy for NILM datasets." },
      { tier:"adjacent", title:"Sim-to-Real Transfer Learning for Large-Scale Short-Term Building Energy Forecasting", url:"https://doi.org/10.1145/3736425.3770100", maps:["AIRDELHI"], why:"Sim-to-real for energy forecasting — transfer lessons for sensing models." },
      { tier:"adjacent", title:"Text-To-EnergyPlus: Translating Natural Language into Building Energy Simulation", url:"https://doi.org/10.1145/3736425.3772121", maps:["VayuChat/VayuBuddy"], why:"NL→simulation — a VayuChat-style interface for building energy." },
      { tier:"adjacent", title:"SolExplore: Successive Refinement for Sizing PV & Storage in EV-Enabled Homes", url:"https://doi.org/10.1145/3736425.3770102", maps:["DRL-HouseControl"], why:"Optimization of home PV/storage — adjacent to home energy control." } ]
    },
    { id:"indoor-aq", name:"BuildSys — Indoor air quality & comfort", desc:"Exposure/energy/ventilation tradeoffs and AQ monitoring with LLMs.",
      labMap:["DRL-HouseControl","AIRDELHI","VayuChat/VayuBuddy"], papers:[
      { tier:"must", title:"Energy and Indoor Air Quality Tradeoffs of Personal Air Cleaners and Natural Ventilation in Urban Households", url:"https://doi.org/10.1145/3736425.3772360", maps:["DRL-HouseControl"], why:"Exposure vs energy vs ventilation in homes — the exact objective of the lab's DRL house-control paper." },
      { tier:"must", title:"LLM-Powered Data Annotation for Bridging the Semantic Gap in Air Quality Monitoring", url:"https://doi.org/10.1145/3736425.3771958", maps:["VayuChat/VayuBuddy","AIRDELHI"], why:"LLMs for AQ-monitoring data annotation — directly the VayuChat/AIRDELHI space." } ]
    },
    { id:"respiration", name:"IMWUT — Respiration & contactless vitals", desc:"Contactless/wearable respiration and vital-sign sensing, incl. during exercise.",
      labMap:["JoulesEye","ApneaEye"], papers:[
      { tier:"must", title:"EarMeter: Continuous Respiration Volume Monitoring with Earables", url:"https://doi.org/10.1145/3770681", maps:["JoulesEye","ApneaEye"], why:"Continuous respiration *volume* from earables — complements thermal respiration sensing." },
      { tier:"must", title:"MM-RunNAssist: mmWave-based Respiratory and Running Rhythm Analysis during Treadmill Workouts", url:"https://doi.org/10.1145/3749533", maps:["JoulesEye"], why:"Respiration during exercise — JoulesEye's exact scenario, different modality." },
      { tier:"must", title:"REVIT: A Dataset and Benchmark for Remote Vital Sign Estimation in Real-World Settings", url:"https://doi.org/10.1145/3770657", maps:["JoulesEye"], why:"Real-world remote-vitals benchmark — evaluation target for JoulesEye-style methods." },
      { tier:"adjacent", title:"Contactless Fine-grained Cardiac Events Detection and Segmentation with RF Signals", url:"https://doi.org/10.1145/3749552", maps:["JoulesEye"], why:"Fine-grained contactless cardiac sensing — robustness ideas." },
      { tier:"adjacent", title:"Respiration Rate Estimation via Smartwatch PPG and Accelerometer: A Transfer-Learning Approach", url:"https://doi.org/10.1145/3712284", maps:["JoulesEye","SpiroMask"], why:"Transfer learning for respiration on commodity wearables." },
      { tier:"adjacent", title:"Sonic-Fi: Practical Vital Signs Distillation Leveraging Fine-grained Physical Resolution", url:"https://doi.org/10.1145/3749978", maps:["JoulesEye"], why:"Distilling vital signs at fine physical resolution." } ]
    },
    { id:"lung-sleep", name:"IMWUT — Lung function & sleep", desc:"Pulmonary metrics on commodity devices and sleep monitoring.",
      labMap:["SpiroMask","ApneaEye","SpiroActive"], papers:[
      { tier:"must", title:"SpiroSense: Transforming Smartphones into Pulmonary-Metrics Monitors with Ultrasonic Technology", url:"https://doi.org/10.1145/3749517", maps:["SpiroMask"], why:"Lung-function metrics from a commodity phone — the direct successor problem to SpiroMask." },
      { tier:"must", title:"My Pillow Knows My Sleep: Sleep Monitoring with Computational Fabrics in the Pillowcase", url:"https://doi.org/10.1145/3749468", maps:["ApneaEye"], why:"Unobtrusive sleep monitoring — a non-thermal counterpart to ApneaEye." },
      { tier:"adjacent", title:"Breaking the Resolution Barriers of mmWave Arrays via Null Steering for Multi-Person Sleep Monitoring", url:"https://doi.org/10.1145/3749510", maps:["ApneaEye"], why:"Multi-person sleep sensing — scaling beyond a single subject." },
      { tier:"adjacent", title:"Semi-supervised Contrastive Learning for Reliable Sleep Staging with Small Labeled PPG", url:"https://doi.org/10.1145/3749480", maps:["ApneaEye","SpiroActive"], why:"Label-efficient sleep staging — the lab's label-scarcity theme in health sensing." } ]
    },
    { id:"wearable-fm", name:"IMWUT — Wearable foundation models & active learning", desc:"Foundation models for sensors, active learning, and exercise logging.",
      labMap:["SpiroActive","JoulesEye","NILM-AL"], papers:[
      { tier:"must", title:"SEGALL: A Unified Active Learning Framework for Wireless Sensing Data Segmentation", url:"https://doi.org/10.1145/3749511", maps:["SpiroActive","NILM-AL"], why:"Active learning for sensing segmentation — directly the SpiroActive/NILM-AL agenda." },
      { tier:"must", title:"Pulse-PPG: An Open-Source Field-Trained PPG Foundation Model for Wearables", url:"https://doi.org/10.1145/3749515", maps:["JoulesEye","SpiroMask"], why:"Field-trained physiological foundation model — pretraining for health sensing." },
      { tier:"adjacent", title:"MASTER: A Multi-modal Foundation Model for Human Activity Recognition", url:"https://doi.org/10.1145/3770659", maps:["SpiroActive"], why:"Multimodal wearable foundation model." },
      { tier:"adjacent", title:"SeamFit: Towards Practical Smart Clothing for Automatic Exercise Logging", url:"https://doi.org/10.1145/3712288", maps:["JoulesEye"], why:"Automatic exercise logging — pairs with energy-expenditure estimation." },
      { tier:"adjacent", title:"SoundTrack: Contactless Real-time Running Metric Estimation for Treadmill Running", url:"https://doi.org/10.1145/3729463", maps:["JoulesEye"], why:"Contactless running metrics — exercise-sensing complement." } ]
    },
    { id:"plant-climate-health", name:"IMWUT — Plant sensing & climate-health", desc:"Low-cost plant stress sensing and climate-exposed worker health.",
      labMap:["PlantDoc","JoulesEye"], papers:[
      { tier:"must", title:"MotionLeaf: Fine-grained Multi-leaf Damped Vibration Monitoring for Plant Water Stress Using mmWave", student:"Yield", url:"https://doi.org/10.1145/3749459", maps:["PlantDoc"], why:"Low-cost plant water-stress sensing — a sensing-side complement to PlantDoc's vision approach." },
      { tier:"must", title:"Forecasting Occupational Survivability of Rickshaw Pullers in a Changing Climate with Wearable Data", url:"https://doi.org/10.1145/3770632", maps:["JoulesEye"], why:"India-grounded climate + health + wearables — squarely the lab's sustainability-meets-health mission." } ]
    }
  ]
};
