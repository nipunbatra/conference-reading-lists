// ICLR 2026 reading list for the Sustainability Lab (IIT Gandhinagar).
window.READING_LIST = {
  venue: "ICLR 2026",
  dates: "April 2026",
  location: "Rio de Janeiro, Brazil",
  source: "OpenReview — 5,351 accepted papers (5,127 posters + 224 orals)",
  updated: "2026-06-07",
  intro:
    "Curated from all 5,351 ICLR 2026 accepted papers, grouped by the lab's ML-method strengths and mapped to lab projects: " +
    "conformal/UQ, Gaussian processes & Bayesian experimental design (sensor placement), atmospheric emulation / neural operators, " +
    "and Earth-observation + time series. Tiers: ★ must-read, ○ adjacent/skim. Relevance judged from titles — verify before assigning.",
  labWorks: {
    "Conformal-NILM": "Distribution-free UQ & calibration for energy disaggregation (2025)",
    "NILM-UQ": "\"I do not know\": uncertainty in NN-based NILM (2022)",
    "NILM-AL": "Benchmarking active learning for NILM (2024)",
    "AQ-SensorPlacement": "Gradient-based air-quality sensor placement (AAAI 2026)",
    "DeepGP-AQ": "Deep/scalable Gaussian processes for air-quality inference (2022–2023)",
    "AIRDELHI": "Fine-grained spatio-temporal PM dataset from Delhi (2023)",
    "DRL-HouseControl": "DRL for pollutant exposure / energy / thermal comfort (2025)",
    "SentinelKilnDB": "OBB brick-kiln detection dataset & benchmark (NeurIPS 2025)",
    "Space-to-Policy": "Scalable brick-kiln detection + compliance monitoring (2025)",
    "VayuChat/VayuBuddy": "LLM chatbots & benchmarks for air-quality data analytics (2024–2025)"
  },
  workshops: [],
  clusters: [
    { id:"conformal-uq", name:"Conformal prediction & uncertainty", desc:"Distribution-free guarantees and calibration, especially for time series and LLMs.",
      labMap:["Conformal-NILM","NILM-UQ"], papers:[
      { tier:"must", title:"Adaptive Conformal Anomaly Detection with Time Series Foundation Models for Signal Monitoring", url:"https://openreview.net/forum?id=7uFbs68MSI", maps:["Conformal-NILM"], why:"Conformal anomaly detection on monitored time-series signals — the NILM/AQ monitoring setting exactly." },
      { tier:"must", title:"Beyond Accuracy: Are Time Series Foundation Models Well-Calibrated?", url:"https://openreview.net/forum?id=nGBN7UjHcy", maps:["Conformal-NILM","AIRDELHI"], why:"Calibration audit of TS foundation models — directly relevant before trusting them for NILM/AQ." },
      { tier:"must", title:"CLEAR: Calibrated Learning for Epistemic and Aleatoric Risk", url:"https://openreview.net/forum?id=RY4IHaDLik", maps:["NILM-UQ"], why:"Separating epistemic/aleatoric risk with calibration — the core of the lab's NILM-UQ framing." },
      { tier:"adjacent", title:"CoFact: Conformal Factuality Guarantees for Language Models under Covariate Shift", url:"https://openreview.net/forum?id=eiBp7rsc3K", maps:["VayuChat/VayuBuddy","Conformal-NILM"], why:"Conformal factuality for LLMs under shift — rigor for VayuChat answers." },
      { tier:"adjacent", title:"COMPASS: Robust Feature Conformal Prediction for Medical Segmentation Metrics", url:"https://openreview.net/forum?id=uBy4TCgGiT", maps:["Conformal-NILM"], why:"Feature-space conformal applied to a real task — reusable recipe." } ]
    },
    { id:"gp-bed", name:"Gaussian processes, Bayesian experimental design & sensor placement",
      desc:"Deep/scalable GPs, nonstationary kernels, and Bayesian experimental design — the toolbox behind AQ-SensorPlacement and DeepGP-AQ.",
      labMap:["AQ-SensorPlacement","DeepGP-AQ","NILM-AL"], papers:[
      { tier:"must", title:"DiffBED: Scaling Bayesian Experimental Design to High-Dimensions", url:"https://openreview.net/forum?id=pNO7VqKAcY", maps:["AQ-SensorPlacement"], why:"High-dimensional Bayesian experimental design — sensor placement is exactly high-dim BED." },
      { tier:"must", title:"Diffusion Bridge Variational Inference for Deep Gaussian Processes", url:"https://openreview.net/forum?id=zyRmy0Ch9a", maps:["DeepGP-AQ"], why:"New inference for deep GPs — directly advances the lab's deep-GP air-quality models." },
      { tier:"must", title:"Revisiting Nonstationary Kernel Design for Multi-Output Gaussian Processes", url:"https://openreview.net/forum?id=vFfujX5Ygn", maps:["DeepGP-AQ"], why:"Nonstationary multi-output GP kernels — pollution fields are nonstationary and multi-pollutant." },
      { tier:"must", title:"Graph Random Features for Scalable Gaussian Processes", url:"https://openreview.net/forum?id=89SQfLguNn", maps:["DeepGP-AQ"], why:"Scalable GP approximation on graphs — scaling GP-AQ to dense sensor graphs." },
      { tier:"adjacent", title:"Meta-Learning Theory-Informed Inductive Biases using Deep Kernel Gaussian Processes", url:"https://openreview.net/forum?id=7dvYWzOiEu", maps:["DeepGP-AQ"], why:"Deep-kernel GPs with informed priors." },
      { tier:"adjacent", title:"BED-LLM: Intelligent Information Gathering with LLMs and Bayesian Experimental Design", url:"https://openreview.net/forum?id=qyylZMLYT8", maps:["AQ-SensorPlacement"], why:"LLM-guided experimental design — a fresh angle on what-to-measure-next." },
      { tier:"adjacent", title:"Generative Bayesian Optimization: Generative Models as Acquisition Functions", url:"https://openreview.net/forum?id=GBWkRRJrdu", maps:["AQ-SensorPlacement"], why:"Generative acquisition functions — richer placement search." },
      { tier:"adjacent", title:"Active Learning for Decision Trees with Provable Guarantees", url:"https://openreview.net/forum?id=NOkjJPJIit", maps:["NILM-AL"], why:"Provable AL — theory grounding for the lab's active-learning work." } ]
    },
    { id:"atmospheric", name:"Atmospheric emulation, neural operators & PINNs (WRF/CAMx)",
      desc:"Physics-driven weather forecasters, neural operators and PINNs — the modern surrogate stack for WRF (meteorology) and CAMx (transport).",
      labMap:["AIRDELHI","DRL-HouseControl"], papers:[
      { tier:"must", title:"DeepPrim: A Physics-Driven 3D Short-term Weather Forecaster via Primitive Equation Learning", url:"https://openreview.net/forum?id=EyyWd0hH0q", maps:["AIRDELHI"], why:"Learns the primitive equations that WRF solves — the clearest ML-WRF surrogate at ICLR." },
      { tier:"must", title:"ARROW: An Adaptive Rollout and Routing Method for Global Weather Forecasting", url:"https://openreview.net/forum?id=Qs0BieWYEN", maps:["AIRDELHI"], why:"Stable long-rollout global forecasting — backbone for met/AQ forecasting." },
      { tier:"must", title:"FlowCast: Advancing Precipitation Nowcasting with Conditional Flow Matching", url:"https://openreview.net/forum?id=47ToW7T1iU", maps:["AIRDELHI"], why:"Flow-matching nowcasting — same machinery for short-horizon PM nowcasting." },
      { tier:"must", title:"GeoFAR: Geography-Informed Frequency-Aware Super-Resolution for Climate Data", url:"https://openreview.net/forum?id=0WHpOekph0", maps:["AIRDELHI"], why:"Geography-aware downscaling of climate fields — the dynamical-downscaling step for AQ grids." },
      { tier:"adjacent", title:"Learning Data-Efficient and Generalizable Neural Operators via Fundamental Physics Knowledge", url:"https://openreview.net/forum?id=mJiPqOzc3O", maps:["AIRDELHI"], why:"Physics-informed, data-efficient neural operators — realistic for scarce AQ data." },
      { tier:"adjacent", title:"Extending Fourier Neural Operators for Modeling Parameterized and Coupled PDEs", url:"https://openreview.net/forum?id=rtUT5Wic10", maps:["AIRDELHI"], why:"Coupled-PDE operators — meteorology+chemistry coupling (WRF-CAMx) is coupled PDEs." },
      { tier:"adjacent", title:"Omni-Weather: A Unified Multimodal Model for Weather Radar Understanding and Generation", url:"https://openreview.net/forum?id=3WnXsp72v6", maps:["AIRDELHI"], why:"Unified understand+generate weather model." },
      { tier:"adjacent", title:"Extreme Weather Nowcasting via Local Precipitation Pattern Prediction", url:"https://openreview.net/forum?id=fDknsQhSgm", maps:["AIRDELHI"], why:"Local extreme-event nowcasting — relevant to pollution-episode warning." },
      { tier:"adjacent", title:"BoreaRL: A Multi-Objective RL Environment for Climate-Adaptive Boreal Forest Management", url:"https://openreview.net/forum?id=750tza3sGf", maps:["DRL-HouseControl"], why:"Multi-objective RL for an environmental control problem — like the lab's exposure/energy/comfort tradeoff." } ]
    },
    { id:"eo-timeseries", name:"Earth observation, agents & time series",
      desc:"EO foundation models, EO agents, geospatial reasoning, and time-series forecasting under drift.",
      labMap:["SentinelKilnDB","Space-to-Policy","AIRDELHI"], papers:[
      { tier:"must", title:"TerraFM: A Scalable Foundation Model for Unified Multisensor Earth Observation", url:"https://openreview.net/forum?id=cBxuzdUDNx", maps:["SentinelKilnDB"], why:"Scalable multisensor EO foundation model — candidate backbone for kiln detection." },
      { tier:"must", title:"Earth-Agent: Unlocking the Full Landscape of Earth Observation with Agents", url:"https://openreview.net/forum?id=dkIXAbWuxO", maps:["SentinelKilnDB","VayuChat/VayuBuddy"], why:"Agentic EO analysis — combines the lab's RS and agentic-analytics directions." },
      { tier:"must", title:"Towards Faithful Reasoning in Remote Sensing: A Perceptually-Grounded GeoSpatial Chain-of-Thought for VLMs", url:"https://openreview.net/forum?id=lJ7zecny2e", maps:["SentinelKilnDB","VayuChat/VayuBuddy"], why:"Grounded geospatial reasoning for VLMs — faithful RS question answering." },
      { tier:"adjacent", title:"TAMMs: Change Understanding and Forecasting in Satellite Image Time Series", url:"https://openreview.net/forum?id=PXDFTeIqMd", maps:["Space-to-Policy"], why:"Satellite change understanding over time — compliance monitoring." },
      { tier:"adjacent", title:"MoRA: Mobility as the Backbone for Geospatial Representation Learning at Scale", url:"https://openreview.net/forum?id=IlBr5JJsCj", maps:["Space-to-Policy"], why:"Large-scale geospatial representation learning." },
      { tier:"adjacent", title:"CoRA: Boosting Time Series Foundation Models for Multivariate Forecasting", url:"https://openreview.net/forum?id=JRlNrcTllN", maps:["AIRDELHI"], why:"Correlation-aware multivariate TS forecasting — multi-pollutant/multi-station PM." },
      { tier:"adjacent", title:"Tackling Time-Series Forecasting Generalization via Mitigating Concept Drift", url:"https://openreview.net/forum?id=emkvZ7NanK", maps:["AIRDELHI","NILM-UQ"], why:"Concept drift in TS forecasting — cross-season/cross-region deployment." },
      { tier:"adjacent", title:"Semantic-Enhanced Time-Series Forecasting via Large Language Models", url:"https://openreview.net/forum?id=GZ9uSxY3Yn", maps:["AIRDELHI","VayuChat/VayuBuddy"], why:"LLM-augmented TS forecasting — bridges VayuChat and PM forecasting." } ]
    }
  ]
};
