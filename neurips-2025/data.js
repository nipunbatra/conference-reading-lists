// NeurIPS 2025 reading list for the Sustainability Lab (IIT Gandhinagar).
window.READING_LIST = {
  venue: "NeurIPS 2025",
  dates: "December 2–7, 2025",
  location: "San Diego, USA",
  source: "NeurIPS 2025 Proceedings — 5,823 papers (main + Datasets & Benchmarks)",
  updated: "2026-06-07",
  intro:
    "Curated from all 5,823 NeurIPS 2025 papers, grouped by the lab's lines of work and mapped to lab projects. " +
    "NeurIPS 2025 is exceptionally rich for the lab: physics-informed atmospheric emulation (the WRF/CAMx idea), " +
    "Gaussian processes & sensor placement, conformal/UQ, and remote-sensing benchmarks. " +
    "Tiers: ★ must-read, ○ adjacent/skim. Relevance judged from titles — verify before assigning.",
  labPaper: {
    title: "SentinelKilnDB: A Large-Scale Dataset and Benchmark for OBB Brick Kiln Detection in South Asia Using Satellite Imagery",
    authors: "Rishabh Mondal, Jeet Parab, Heer Kubadia, Shataxi Dubey, Shardul Junagade, Zeel B. Patel, Nipun Batra",
    url: "https://papers.nips.cc/paper_files/paper/2025/hash/9ab8bb568825d49ce31aa87b7e2f4ad7-Abstract-Datasets_and_Benchmarks_Track.html",
    track: "NeurIPS 2025 · Datasets & Benchmarks Track",
    why: "Our paper: a large-scale oriented-bounding-box (OBB) dataset and benchmark for detecting brick kilns across South Asia from satellite imagery — the data backbone for Space-to-Policy compliance monitoring. The remote-sensing detection and RS-foundation-model papers below are its natural neighbours."
  },
  labWorks: {
    "SentinelKilnDB": "OBB brick-kiln detection dataset & benchmark, South Asia satellite (this paper)",
    "Space-to-Policy": "Scalable brick-kiln detection + automatic compliance monitoring (2025)",
    "AIRDELHI": "Fine-grained spatio-temporal PM dataset from Delhi (2023)",
    "DeepGP-AQ": "Deep/scalable Gaussian processes for air-quality inference (2022–2023)",
    "AQ-SensorPlacement": "Gradient-based air-quality sensor placement (AAAI 2026)",
    "Conformal-NILM": "Distribution-free UQ & calibration for energy disaggregation (2025)",
    "NILM-UQ": "\"I do not know\": uncertainty in NN-based NILM (2022)",
    "NILM-AL": "Benchmarking active learning for NILM (2024)",
    "DRL-HouseControl": "DRL for pollutant exposure / energy / thermal comfort (2025)",
    "JoulesEye": "Energy expenditure + respiration from thermal imagery (IMWUT 2024)",
    "ApneaEye": "Respiration & sleep-apnea sensing from thermal imaging (ongoing)",
    "ThermEval": "Structured benchmark for thermal-model evaluation (2026)",
    "SpiroActive": "Active learning for spirometry data acquisition (2024)",
    "SpiroMask": "Lung function from consumer-grade masks (2023)",
    "VayuChat/VayuBuddy": "LLM chatbots & benchmarks for air-quality data analytics (2024–2025)",
    "PlantDoc": "Plant-disease detection dataset (2020)"
  },
  workshops: [],
  clusters: [
    { id:"remote-sensing", name:"Remote sensing & geospatial",
      desc:"RS foundation models, robustness benchmarks, VLMs, disaster & data-curation — neighbours of SentinelKilnDB.",
      labMap:["SentinelKilnDB","Space-to-Policy"], papers:[
      { tier:"must", title:"REOBench: Benchmarking Robustness of Earth Observation Foundation Models", url:"https://papers.nips.cc/paper_files/paper/2025/hash/58af38e2fba04b5e00c3450018c56406-Abstract-Datasets_and_Benchmarks_Track.html", maps:["SentinelKilnDB"], why:"Robustness benchmark for EO foundation models — directly informs how robust a kiln detector will be." },
      { tier:"must", title:"RoMA: Scaling up Mamba-based Foundation Models for Remote Sensing", url:"https://papers.nips.cc/paper_files/paper/2025/hash/065c00e902f3f0117d1a4da0a9b0e497-Abstract-Conference.html", maps:["SentinelKilnDB"], why:"Efficient Mamba RS foundation model — scalable backbone for large-area detection." },
      { tier:"must", title:"DisasterM3: A Remote Sensing Vision-Language Dataset for Disaster Damage Assessment", url:"https://papers.nips.cc/paper_files/paper/2025/hash/ec80d18205e39d42a27192d5f3ddd688-Abstract-Datasets_and_Benchmarks_Track.html", maps:["Space-to-Policy"], why:"RS VLM for assessment/response — the policy-facing use of detections, like Space-to-Policy." },
      { tier:"adjacent", title:"CHOICE: Benchmarking the Remote Sensing Capabilities of Large Vision-Language Models", url:"https://papers.nips.cc/paper_files/paper/2025/hash/befe25a01cf4dbe9635e85f835d31250-Abstract-Datasets_and_Benchmarks_Track.html", maps:["SentinelKilnDB"], why:"Benchmark of RS VLM capabilities — comparator design for lab benchmarks." },
      { tier:"adjacent", title:"GeoLink: Empowering Remote Sensing Foundation Models with OpenStreetMap Data", url:"https://papers.nips.cc/paper_files/paper/2025/hash/f681209306654a0c1f690f65810e8e45-Abstract-Conference.html", maps:["SentinelKilnDB"], why:"Fuse OSM context into RS models — extra signal for locating kilns." },
      { tier:"adjacent", title:"Quality-Driven Curation of Remote Sensing Vision-Language Data via Learned Scoring", url:"https://papers.nips.cc/paper_files/paper/2025/hash/fa0a1013e171c1be6121c9bc9fb6589f-Abstract-Conference.html", maps:["SentinelKilnDB"], why:"Data-quality curation for RS — best practice for the next dataset release." },
      { tier:"adjacent", title:"InstructSAM: Training-free Instruction-Oriented Remote Sensing Object Recognition", url:"https://papers.nips.cc/paper_files/paper/2025/hash/a04c50c0bd6937760a3b89ee10010c96-Abstract-Conference.html", maps:["SentinelKilnDB"], why:"Training-free instruction-driven RS recognition." },
      { tier:"adjacent", title:"PhySwin: A Physically-Informed Foundation Model for Multispectral Earth Observation", url:"https://papers.nips.cc/paper_files/paper/2025/hash/7d03c6bf9f07acb4038eea96c63db52d-Abstract-Conference.html", maps:["SentinelKilnDB"], why:"Physics-informed multispectral EO backbone." },
      { tier:"adjacent", title:"SmokeViz: Satellite Dataset for Wildfire Smoke Detection and Segmentation", url:"https://papers.nips.cc/paper_files/paper/2025/hash/3b2116b636f64553d7fe33d87a701b06-Abstract-Datasets_and_Benchmarks_Track.html", maps:["AIRDELHI","Space-to-Policy"], why:"Satellite detection of smoke/emissions — adjacent to brick-kiln emission monitoring." } ]
    },
    { id:"atmospheric", name:"Atmospheric / air-quality emulation (WRF, WRF-CAMx)",
      desc:"ML emulators, data assimilation, downscaling and chemical-transport-informed forecasting — the modern counterpart to WRF (meteorology) and CAMx (chemical transport).",
      labMap:["AIRDELHI","DeepGP-AQ","DRL-HouseControl"], papers:[
      { tier:"must", title:"Eulerian Neural Network Informed by Chemical Transport for Air Quality Forecasting", url:"https://papers.nips.cc/paper_files/paper/2025/hash/305b2288122d46bf0641bdd86c9a7921-Abstract-Conference.html", maps:["AIRDELHI"], why:"A neural network informed by a chemical-transport model for AQ forecasting — literally the WRF-CAMx-emulation idea. Read first." },
      { tier:"must", title:"Causal Climate Emulation with Bayesian Filtering", url:"https://papers.nips.cc/paper_files/paper/2025/hash/81289d2fd2f9072fc293a2848d751475-Abstract-Conference.html", maps:["AIRDELHI"], why:"Causal, filtered climate emulation — principled emulator design with uncertainty." },
      { tier:"must", title:"Learning Urban Climate Dynamics via Physics-Guided Urban Surface–Atmosphere Interactions", url:"https://papers.nips.cc/paper_files/paper/2025/hash/b71cfefae46909178603b5bc6c11d3ae-Abstract-Conference.html", maps:["AIRDELHI","DRL-HouseControl"], why:"Physics-guided urban surface–atmosphere modeling — city-scale exposure/comfort modeling." },
      { tier:"must", title:"OmniCast: A Masked Latent Diffusion Model for Weather Forecasting Across Time Scales", url:"https://papers.nips.cc/paper_files/paper/2025/hash/fb0b57dfb8686c357f96e41b880ce7ed-Abstract-Conference.html", maps:["AIRDELHI"], why:"Multi-time-scale generative weather forecasting — backbone for met/AQ nowcasting + forecasting." },
      { tier:"adjacent", title:"DAWP: Global Observation Forecasting via Data Assimilation & Weather Prediction in Satellite Space", url:"https://papers.nips.cc/paper_files/paper/2025/hash/da8a39bc39ae1c89dd6ebb1e3bcbb3f3-Abstract-Conference.html", maps:["AIRDELHI"], why:"Learned data assimilation — exactly WRF's DA step, end-to-end." },
      { tier:"adjacent", title:"Mesh Interpolation Graph Network for Spatially Irregular Global Weather Forecasting", url:"https://papers.nips.cc/paper_files/paper/2025/hash/23cf4f3fd33c2fb071fc40aee0ec2884-Abstract-Conference.html", maps:["AIRDELHI"], why:"Forecasting on irregular stations — matches the irregular AQ monitor network." },
      { tier:"adjacent", title:"DiffLiG: Diffusion-enhanced Graph for Grid-to-Station Precipitation Correction", url:"https://papers.nips.cc/paper_files/paper/2025/hash/db7c4a8a0c1bf8b405f21c783bbf9eae-Abstract-Conference.html", maps:["AIRDELHI"], why:"Grid→station bias correction — the CAMx-output post-processing / downscaling step." },
      { tier:"adjacent", title:"PIPE: Physics-Informed Position Encoding for Satellite + Time Series in Typhoon Forecasting", url:"https://papers.nips.cc/paper_files/paper/2025/hash/4c12860f95ba4801b11c8405f7ba5679-Abstract-Conference.html", maps:["AIRDELHI"], why:"Aligning satellite imagery with station time series — multi-source fusion for forecasting." },
      { tier:"adjacent", title:"On the Integration of Spatial-Temporal Knowledge: Lightweight Atmospheric Time-Series Forecasting", url:"https://papers.nips.cc/paper_files/paper/2025/hash/7691484a7a35d5e2742279c1d926b778-Abstract-Conference.html", maps:["AIRDELHI"], why:"Lightweight atmospheric forecasting — deployable for AQ stations." },
      { tier:"adjacent", title:"Neural Emulator Superiority: When ML for PDEs Surpasses its Training Data", url:"https://papers.nips.cc/paper_files/paper/2025/hash/f200119a40846e508954abcd61f5f3fd-Abstract-Conference.html", maps:["AIRDELHI"], why:"When ML emulators beat the numerical model — the case for replacing parts of WRF/CAMx." } ]
    },
    { id:"operators", name:"Neural operators & physics-informed surrogates",
      desc:"Neural operators (incl. GP-flavoured) and physics-informed surrogates for PDE systems — the math behind atmospheric emulation.",
      labMap:["DeepGP-AQ","Conformal-NILM"], papers:[
      { tier:"must", title:"Infinite Neural Operators: Gaussian Processes on Functions", url:"https://papers.nips.cc/paper_files/paper/2025/hash/bb74d3d956cc960f693716b3595593d7-Abstract-Conference.html", maps:["DeepGP-AQ"], why:"Bridges neural operators and Gaussian processes — directly connects the lab's GP-for-AQ work to PDE surrogates." },
      { tier:"must", title:"Light-Weight Diffusion Multiplier and Uncertainty Quantification for Fourier Neural Operators", url:"https://papers.nips.cc/paper_files/paper/2025/hash/83ce66e493d0ccf3dbd9bdb21e326de5-Abstract-Conference.html", maps:["DeepGP-AQ","Conformal-NILM"], why:"UQ for neural operators — calibrated emulators for AQ/met fields." },
      { tier:"adjacent", title:"Physics-informed Neural Operator for Pansharpening", url:"https://papers.nips.cc/paper_files/paper/2025/hash/89af8e4eb696738f2c9e589522968a09-Abstract-Conference.html", maps:["SentinelKilnDB"], why:"Neural-operator pansharpening — multi-resolution RS fusion." },
      { tier:"adjacent", title:"DeltaPhi: Physical-State Residual Learning for Neural Operators in Data-Limited PDE Solving", url:"https://papers.nips.cc/paper_files/paper/2025/hash/12bf28fb68f295f855a5bf0c5a217d6e-Abstract-Conference.html", maps:["AIRDELHI"], why:"Residual operator learning under scarce data — realistic for AQ." },
      { tier:"adjacent", title:"A Plug-and-Play Query-Synthesis Active Learning Framework for Neural PDE Solvers", url:"https://papers.nips.cc/paper_files/paper/2025/hash/6a1b224b153e55c40a6359f9c9fb9d8c-Abstract-Conference.html", maps:["AIRDELHI","NILM-AL"], why:"Active learning for PDE solvers — where to sample to train an emulator efficiently." } ]
    },
    { id:"gp-al", name:"Gaussian processes, Bayesian optimization, sensor placement & active learning",
      desc:"GP/BO theory, sensor-placement policy learning, AL for regression — the toolbox behind AQ-SensorPlacement and DeepGP-AQ.",
      labMap:["AQ-SensorPlacement","DeepGP-AQ","NILM-AL","SpiroActive"], papers:[
      { tier:"must", title:"Flow Field Reconstruction with Sensor Placement Policy Learning", url:"https://papers.nips.cc/paper_files/paper/2025/hash/9708c7d3a0fef3710f33ba05a74e10b3-Abstract-Conference.html", maps:["AQ-SensorPlacement"], why:"Learns *where to place sensors* to reconstruct a spatial field — the exact problem of our AAAI sensor-placement paper." },
      { tier:"must", title:"Enhancing Deep Batch Active Learning for Regression with Imperfect-Data Guided Selection", url:"https://papers.nips.cc/paper_files/paper/2025/hash/cbae8efcc23a0cb6d15a20f245514020-Abstract-Conference.html", maps:["NILM-AL","SpiroActive"], why:"Batch AL for regression with noisy data — NILM/spirometry are regression-AL problems." },
      { tier:"must", title:"Improved Regret Bounds for Gaussian Process Upper Confidence Bound in Bayesian Optimization", url:"https://papers.nips.cc/paper_files/paper/2025/hash/8bc099666677ded6cdd0b8fbcfe0a4eb-Abstract-Conference.html", maps:["AQ-SensorPlacement","DeepGP-AQ"], why:"Tighter GP-UCB theory — underpins GP-based acquisition for sensor placement." },
      { tier:"adjacent", title:"Informed Initialization for Bayesian Optimization and Active Learning", url:"https://papers.nips.cc/paper_files/paper/2025/hash/62dda5f9daae593009bfef839e02c891-Abstract-Conference.html", maps:["AQ-SensorPlacement"], why:"Warm-starting BO/AL — practical speedups for placement search." },
      { tier:"adjacent", title:"Gaussian Processes for Shuffled Regression", url:"https://papers.nips.cc/paper_files/paper/2025/hash/1a2f63c7cc68042c544a277aee45216f-Abstract-Conference.html", maps:["DeepGP-AQ"], why:"GP regression with unknown correspondences — niche but relevant GP method." },
      { tier:"adjacent", title:"Agnostic Active Learning Is Always Better Than Passive Learning", url:"https://papers.nips.cc/paper_files/paper/2025/hash/e58dfd0157cb9de91e7a513d3148aad5-Abstract-Conference.html", maps:["NILM-AL"], why:"Foundational AL guarantee — theoretical backing for the lab's AL benchmarks." },
      { tier:"adjacent", title:"BO4Mob: Bayesian Optimization Benchmarks for High-Dimensional Urban Mobility", url:"https://papers.nips.cc/paper_files/paper/2025/hash/1ed2ed8667fe667174117686d338519a-Abstract-Datasets_and_Benchmarks_Track.html", maps:["AQ-SensorPlacement"], why:"High-dim BO benchmark in an urban setting — placement is high-dim BO." } ]
    },
    { id:"uncertainty", name:"Conformal prediction & uncertainty (Conformal-NILM)",
      desc:"Conformal prediction for time series and under shift; UQ for LLMs.",
      labMap:["Conformal-NILM","NILM-UQ","VayuChat/VayuBuddy"], papers:[
      { tier:"must", title:"Conformal Prediction for Time-series Forecasting with Change Points", url:"https://papers.nips.cc/paper_files/paper/2025/hash/12271b64c483ad8f6192eb6aaa102044-Abstract-Conference.html", maps:["Conformal-NILM"], why:"Conformal intervals for time series with regime shifts — NILM/AQ signals exactly." },
      { tier:"must", title:"Backward Conformal Prediction", url:"https://papers.nips.cc/paper_files/paper/2025/hash/961c451c6a9e481ed986b4ef2db6d3f9-Abstract-Conference.html", maps:["Conformal-NILM"], why:"New conformal formulation — fresh tool for distribution-free NILM intervals." },
      { tier:"adjacent", title:"Conformal Inference under High-Dimensional Covariate Shifts via Likelihood-Ratio Regularization", url:"https://papers.nips.cc/paper_files/paper/2025/hash/17aa70697d6cd35835f201c6fb0a2fd5-Abstract-Conference.html", maps:["Conformal-NILM"], why:"Conformal under covariate shift — cross-home/cross-city deployment." },
      { tier:"adjacent", title:"Accelerating Feature Conformal Prediction via Taylor Approximation", url:"https://papers.nips.cc/paper_files/paper/2025/hash/e878c8f38381d0964677fb9536c494ee-Abstract-Conference.html", maps:["Conformal-NILM"], why:"Faster feature-space conformal — deployment efficiency." },
      { tier:"adjacent", title:"Conformal Linguistic Calibration: Trading off Factuality and Specificity", url:"https://papers.nips.cc/paper_files/paper/2025/hash/bce2501dd4edbc5d5757a1453757e883-Abstract-Conference.html", maps:["VayuChat/VayuBuddy"], why:"Conformal guarantees for LLM outputs — rigor for VayuChat answers." },
      { tier:"adjacent", title:"CoCoA: Minimum Bayes Risk Framework for Uncertainty Quantification in LLMs", url:"https://papers.nips.cc/paper_files/paper/2025/hash/98d2006bf15f00e2ff293dfba4acb8b2-Abstract-Conference.html", maps:["VayuChat/VayuBuddy"], why:"UQ for LLMs — knowing when VayuChat should say 'I'm not sure'." } ]
    },
    { id:"timeseries", name:"Time-series forecasting (NILM / AQ)",
      desc:"Foundation models & self-supervision for time series.", labMap:["AIRDELHI","NILM-UQ"], papers:[
      { tier:"adjacent", title:"SEMPO: Lightweight Foundation Models for Time Series Forecasting", url:"https://papers.nips.cc/paper_files/paper/2025/hash/ecfb69ce6be017deb5a926c2718f6bc1-Abstract-Conference.html", maps:["AIRDELHI"], why:"Lightweight TS foundation model — deployable for PM/load forecasting." },
      { tier:"adjacent", title:"How Different from the Past? Spatio-Temporal Forecasting with Self-Supervised Deviation Learning", url:"https://papers.nips.cc/paper_files/paper/2025/hash/d7b351608d824a4680344a02b180a947-Abstract-Conference.html", maps:["AIRDELHI"], why:"Self-supervised spatio-temporal forecasting — fits sparse-label sensing." } ]
    },
    { id:"thermal-physio", name:"Thermal & physiological sensing (JoulesEye / ApneaEye / SpiroMask)",
      desc:"RGB-to-thermal synthesis, IR small-target eval, wearable & remote physiological foundation models.",
      labMap:["JoulesEye","ApneaEye","SpiroMask","ThermEval"], papers:[
      { tier:"must", title:"ThermalGen: Style-Disentangled Flow-Based Generative Models for RGB-to-Thermal Translation", url:"https://papers.nips.cc/paper_files/paper/2025/hash/2f9e10c28c4052570ef9e39cc4dd69b9-Abstract-Conference.html", maps:["JoulesEye","ApneaEye"], why:"Generate thermal from RGB — augmentation for thermal health models." },
      { tier:"must", title:"Rethinking Evaluation of Infrared Small Target Detection", url:"https://papers.nips.cc/paper_files/paper/2025/hash/a81051ae2c8b1e46bd51480917b8ab84-Abstract-Datasets_and_Benchmarks_Track.html", maps:["ApneaEye","ThermEval"], why:"How to *evaluate* IR small-target detection — directly informs ApneaEye metrics and ThermEval." },
      { tier:"adjacent", title:"CogPhys: Assessing Cognitive Load via Multimodal Remote and Contact-based Physiological Sensing", url:"https://papers.nips.cc/paper_files/paper/2025/hash/014e80b61aca7a85630e6da5d63427c6-Abstract-Datasets_and_Benchmarks_Track.html", maps:["JoulesEye"], why:"Multimodal remote + contact physiological sensing dataset." },
      { tier:"adjacent", title:"SensorLM: Learning the Language of Wearable Sensors", url:"https://papers.nips.cc/paper_files/paper/2025/hash/42cd98f0e7520d4a63c34891ac1c972f-Abstract-Conference.html", maps:["SpiroActive","JoulesEye"], why:"Foundation model for wearable-sensor signals — pretraining for health sensing." },
      { tier:"adjacent", title:"PhysioWave: A Multi-Scale Wavelet-Transformer for Physiological Signal Representation", url:"https://papers.nips.cc/paper_files/paper/2025/hash/f7a7bb369e48f10e85fce85b67d8c516-Abstract-Conference.html", maps:["SpiroMask","JoulesEye"], why:"Representation learning for physiological waveforms — respiration/lung signals." },
      { tier:"adjacent", title:"PhysDrive: Multimodal Remote Physiological Measurement Dataset (In-vehicle)", url:"https://papers.nips.cc/paper_files/paper/2025/hash/3446e07569081f0f8a144e68bfa7afdf-Abstract-Datasets_and_Benchmarks_Track.html", maps:["JoulesEye"], why:"Remote vitals dataset in a hard real-world setting." } ]
    },
    { id:"agri-tabular", name:"Agriculture & tabular/chart-LLMs (PlantDoc / VayuChat)",
      desc:"Agricultural multimodal benchmarks and tabular/chart reasoning for data analytics.",
      labMap:["PlantDoc","VayuChat/VayuBuddy"], papers:[
      { tier:"must", title:"AgMMU: A Comprehensive Agricultural Multimodal Understanding Benchmark", student:"Yield", url:"https://papers.nips.cc/paper_files/paper/2025/hash/6d5e00006b65fcc55c3c1798da821663-Abstract-Datasets_and_Benchmarks_Track.html", maps:["PlantDoc"], why:"Broad agricultural multimodal benchmark — eval target for plant/yield models." },
      { tier:"must", title:"IRRISIGHT: Large-Scale Multimodal Dataset for Irrigation & Water Management in Agriculture", student:"Yield", url:"https://papers.nips.cc/paper_files/paper/2025/hash/0821a1413339bf79ba01876783d95c53-Abstract-Datasets_and_Benchmarks_Track.html", maps:["PlantDoc"], why:"Irrigation/water management at scale — India-relevant sustainable-agriculture data." },
      { tier:"adjacent", title:"Can Large Multimodal Models Understand Agricultural Scenes? Benchmarking with AgroMind", student:"Yield", url:"https://papers.nips.cc/paper_files/paper/2025/hash/e75dcde67f29d1e8efd0a86aaa332331-Abstract-Datasets_and_Benchmarks_Track.html", maps:["PlantDoc"], why:"Agricultural scene understanding benchmark." },
      { tier:"adjacent", title:"MIRAGE: Multimodal Information-Seeking & Reasoning in Agricultural Expert Conversations", url:"https://papers.nips.cc/paper_files/paper/2025/hash/1fdee6bdc130776e489719d25d422073-Abstract-Datasets_and_Benchmarks_Track.html", maps:["PlantDoc","VayuChat/VayuBuddy"], why:"Conversational agricultural QA — a domain VayuChat-style assistant." },
      { tier:"adjacent", title:"ChartSketcher: Reasoning with Multimodal Feedback for Chart Understanding", url:"https://papers.nips.cc/paper_files/paper/2025/hash/661de50100d3115cf4317bb8b5219e56-Abstract-Conference.html", maps:["VayuChat/VayuBuddy"], why:"Iterative chart reasoning — VayuChat's chart pipeline." },
      { tier:"adjacent", title:"ConTextTab: A Semantics-Aware Tabular In-Context Learner", url:"https://papers.nips.cc/paper_files/paper/2025/hash/d807e7678ba3afd3a904f4af52819e77-Abstract-Conference.html", maps:["VayuChat/VayuBuddy"], why:"In-context tabular learning — air-quality tables are the input to VayuChat." } ]
    }
  ]
};
