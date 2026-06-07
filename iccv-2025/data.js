// ICCV 2025 reading list for the Sustainability Lab (IIT Gandhinagar).
window.READING_LIST = {
  venue: "ICCV 2025",
  dates: "October 19–23, 2025",
  location: "Honolulu, Hawai'i",
  source: "CVF Open Access — 2,701 accepted papers",
  updated: "2026-06-07",
  intro:
    "Curated from all 2,701 ICCV 2025 papers, grouped by the lab's lines of work and mapped to lab projects. " +
    "ICCV is especially strong on remote sensing and infrared/thermal this year. Tiers: ★ must-read, ○ adjacent/skim. " +
    "Relevance judged from titles — verify before assigning.",
  labWorks: {
    "SentinelKilnDB": "OBB brick-kiln detection dataset & benchmark, South Asia satellite (NeurIPS 2025)",
    "Space-to-Policy": "Scalable brick-kiln detection + automatic compliance monitoring (2025)",
    "JoulesEye": "Energy expenditure + respiration from thermal imagery (IMWUT 2024)",
    "ApneaEye": "Respiration & sleep-apnea sensing from thermal imaging — needs nostril localization in low-res thermal (ongoing)",
    "ThermEval": "Structured benchmark for evaluation of thermal models (2026)",
    "SpiroActive": "Active learning for spirometry data acquisition (2024)",
    "Conformal-NILM": "Distribution-free UQ & calibration for energy disaggregation (2025)",
    "NILM-AL": "Benchmarking active learning for NILM (2024)",
    "AIRDELHI": "Fine-grained spatio-temporal PM dataset from Delhi (2023)",
    "DeepGP-AQ": "Deep/scalable Gaussian processes for air-quality inference (2022–2023)",
    "AQ-SensorPlacement": "Gradient-based air-quality sensor placement (AAAI 2026)",
    "VayuChat/VayuBuddy": "LLM chatbots & benchmarks for air-quality data analytics (2024–2025)",
    "PlantDoc": "Plant-disease detection dataset (2020)"
  },
  workshops: [],
  clusters: [
    { id:"remote-sensing", name:"Satellite & remote-sensing foundation models + detection",
      desc:"RS foundation models, oriented/aerial detection, EO uncertainty, sparse-label detection.",
      labMap:["SentinelKilnDB","Space-to-Policy"], papers:[
      { tier:"must", title:"SkySense V2: A Unified Foundation Model for Multi-modal Remote Sensing", url:"https://openaccess.thecvf.com/content/ICCV2025/html/Zhang_SkySense_V2_A_Unified_Foundation_Model_for_Multi-modal_Remote_Sensing_ICCV_2025_paper.html", maps:["SentinelKilnDB"], why:"Leading multi-modal RS foundation model — candidate pretrained backbone for kiln detection." },
      { tier:"must", title:"TerraMind: Large-Scale Generative Multimodality for Earth Observation", url:"https://openaccess.thecvf.com/content/ICCV2025/html/Jakubik_TerraMind_Large-Scale_Generative_Multimodality_for_Earth_Observation_ICCV_2025_paper.html", maps:["SentinelKilnDB"], why:"Generative multimodal EO model — strong backbone + data-generation tool." },
      { tier:"must", title:"Active Learning Meets Foundation Models: Fast Remote Sensing Data Annotation for Object Detection", url:"https://openaccess.thecvf.com/content/ICCV2025/html/Burges_Active_Learning_Meets_Foundation_Models_Fast_Remote_Sensing_Data_Annotation_ICCV_2025_paper.html", maps:["SentinelKilnDB","NILM-AL"], why:"AL + foundation models to cheaply annotate RS detection — exactly the SentinelKilnDB labeling problem." },
      { tier:"must", title:"Measuring the Impact of Rotation Equivariance on Aerial Object Detection", url:"https://openaccess.thecvf.com/content/ICCV2025/html/Wu_Measuring_the_Impact_of_Rotation_Equivariance_on_Aerial_Object_Detection_ICCV_2025_paper.html", maps:["SentinelKilnDB"], why:"Rotation equivariance for oriented aerial detection — core to OBB kiln detection." },
      { tier:"must", title:"On the Generalization of Representation Uncertainty in Earth Observation", url:"https://openaccess.thecvf.com/content/ICCV2025/html/Kondylatos_On_the_Generalization_of_Representation_Uncertainty_in_Earth_Observation_ICCV_2025_paper.html", maps:["SentinelKilnDB","Conformal-NILM"], why:"Uncertainty of EO representations across regions — fuses the lab's RS + UQ interests." },
      { tier:"adjacent", title:"OpenRSD: Towards Open-prompts for Object Detection in Remote Sensing Images", url:"https://openaccess.thecvf.com/content/ICCV2025/html/Huang_OpenRSD_Towards_Open-prompts_for_Object_Detection_in_Remote_Sensing_Images_ICCV_2025_paper.html", maps:["SentinelKilnDB"], why:"Open-vocabulary RS detection — extend kiln detection to new structure types." },
      { tier:"adjacent", title:"LLM-Assisted Semantic Guidance for Sparsely Annotated Remote Sensing Object Detection", url:"https://openaccess.thecvf.com/content/ICCV2025/html/Liao_LLM-Assisted_Semantic_Guidance_for_Sparsely_Annotated_Remote_Sensing_Object_Detection_ICCV_2025_paper.html", maps:["SentinelKilnDB"], why:"Detection under sparse labels — directly the kiln-annotation-scarcity setting." },
      { tier:"adjacent", title:"Dual Domain Control via Active Learning for Remote Sensing Domain Incremental Object Detection", url:"https://openaccess.thecvf.com/content/ICCV2025/html/Sun_Dual_Domain_Control_via_Active_Learning_for_Remote_Sensing_Domain_ICCV_2025_paper.html", maps:["SentinelKilnDB","NILM-AL"], why:"Incremental RS detection across domains with AL — cross-region kiln expansion." },
      { tier:"adjacent", title:"SMARTIES: Spectrum-Aware Multi-Sensor Auto-Encoder for Remote Sensing Images", url:"https://openaccess.thecvf.com/content/ICCV2025/html/Sumbul_SMARTIES_Spectrum-Aware_Multi-Sensor_Auto-Encoder_for_Remote_Sensing_Images_ICCV_2025_paper.html", maps:["SentinelKilnDB"], why:"Multi-sensor spectral pretraining — handles mixed satellite sources." },
      { tier:"adjacent", title:"Harnessing Massive Satellite Imagery with Efficient Masked Image Modeling", url:"https://openaccess.thecvf.com/content/ICCV2025/html/Wang_Harnessing_Massive_Satellite_Imagery_with_Efficient_Masked_Image_Modeling_ICCV_2025_paper.html", maps:["SentinelKilnDB"], why:"Efficient MIM pretraining at satellite scale." },
      { tier:"adjacent", title:"NeurOp-Diff: Continuous Remote Sensing Image Super-Resolution via Neural Operator Diffusion", url:"https://openaccess.thecvf.com/content/ICCV2025/html/Xu_NeurOp-Diff_Continuous_Remote_Sensing_Image_Super-Resolution_via_Neural_Operator_Diffusion_ICCV_2025_paper.html", maps:["SentinelKilnDB"], why:"Neural-operator super-resolution for RS — upscale coarse tiles for kiln search." } ]
    },
    { id:"sar", name:"SAR imagery", desc:"Optical-SAR cross-modal learning and SAR data synthesis.",
      labMap:["SentinelKilnDB"], papers:[
      { tier:"must", title:"Cross-modal Ship Re-Identification via Optical and SAR Imagery: A Novel Dataset and Method", student:"SAR", url:"https://openaccess.thecvf.com/content/ICCV2025/html/Wang_Cross-modal_Ship_Re-Identification_via_Optical_and_SAR_Imagery_A_Novel_ICCV_2025_paper.html", maps:["SentinelKilnDB"], why:"Optical↔SAR cross-modal matching + dataset — directly the SAR student work." },
      { tier:"adjacent", title:"Ph-GAN: Physics-Inspired GAN for Generating SAR Images Under Limited Data", student:"SAR", url:"https://openaccess.thecvf.com/content/ICCV2025/html/Zhang_Ph-GAN_Physics-Inspired_GAN_for_Generating_SAR_Images_Under_Limited_Data_ICCV_2025_paper.html", maps:["SentinelKilnDB"], why:"Physics-inspired SAR data synthesis for low-data regimes." } ]
    },
    { id:"thermal-detection", name:"Infrared small-target & thermal (JoulesEye / ApneaEye)",
      desc:"IR small-target detection (the nostril-in-low-res-thermal problem), thermal benchmarks/foundation models.",
      labMap:["ApneaEye","JoulesEye","ThermEval"], papers:[
      { tier:"must", title:"From Easy to Hard: Progressive Active Learning for Infrared Small Target Detection with Single Point Supervision", url:"https://openaccess.thecvf.com/content/ICCV2025/html/Yu_From_Easy_to_Hard_Progressive_Active_Learning_Framework_for_Infrared_ICCV_2025_paper.html", maps:["ApneaEye","NILM-AL"], why:"IR small-target detection with single-point labels + AL — minimal-annotation nostril detection." },
      { tier:"must", title:"DISTA-Net: Dynamic Closely-Spaced Infrared Small Target Unmixing", url:"https://openaccess.thecvf.com/content/ICCV2025/html/Han_DISTA-Net_Dynamic_Closely-Spaced_Infrared_Small_Target_Unmixing_ICCV_2025_paper.html", maps:["ApneaEye"], why:"Separating closely-spaced tiny IR targets — resolving two nostrils at low res." },
      { tier:"must", title:"IRGPT: Understanding Real-world Infrared Images with a Bi-cross-modal Curriculum (large-scale benchmark)", url:"https://openaccess.thecvf.com/content/ICCV2025/html/Cao_IRGPT_Understanding_Real-world_Infrared_Image_with_Bi-cross-modal_Curriculum_on_Large-scale_ICCV_2025_paper.html", maps:["ThermEval"], why:"Large-scale real-world IR understanding model + benchmark — reference point for ThermEval." },
      { tier:"adjacent", title:"Text-IRSTD: Semantic Text to Promote Infrared Small Target Detection in Complex Scenes", url:"https://openaccess.thecvf.com/content/ICCV2025/html/Huang_Text-IRSTD_Leveraging_Semantic_Text_to_Promote_Infrared_Small_Target_Detection_ICCV_2025_paper.html", maps:["ApneaEye"], why:"Language-guided IR small-target detection." },
      { tier:"adjacent", title:"Tracking Tiny Drones against Clutter: Large-Scale Infrared Benchmark", url:"https://openaccess.thecvf.com/content/ICCV2025/html/Zhang_Tracking_Tiny_Drones_against_Clutter_Large-Scale_Infrared_Benchmark_with_Motion-Centric_ICCV_2025_paper.html", maps:["ApneaEye"], why:"Tracking a tiny IR target across cluttered frames — the nostril-tracking analog." },
      { tier:"adjacent", title:"M-SpecGene: Generalized Foundation Model for RGBT Multispectral Vision", url:"https://openaccess.thecvf.com/content/ICCV2025/html/Zhou_M-SpecGene_Generalized_Foundation_Model_for_RGBT_Multispectral_Vision_ICCV_2025_paper.html", maps:["JoulesEye"], why:"RGB-thermal foundation model — fuse RGB to help localize in low-res thermal." } ]
    },
    { id:"physio", name:"Camera-based remote physiological sensing (JoulesEye)",
      desc:"Contactless vitals from video and fused modalities.", labMap:["JoulesEye"], papers:[
      { tier:"must", title:"FusionPhys: Fusing Complementary Sensing Modalities in Remote Physiological Measurement", url:"https://openaccess.thecvf.com/content/ICCV2025/html/Ying_FusionPhys_A_Flexible_Framework_for_Fusing_Complementary_Sensing_Modalities_in_ICCV_2025_paper.html", maps:["JoulesEye"], why:"Multimodal fusion for contactless vitals — JoulesEye fuses thermal + other cues." },
      { tier:"adjacent", title:"Spatial Alignment & Temporal Matching Adapter for Video-Radar Remote Physiological Measurement", url:"https://openaccess.thecvf.com/content/ICCV2025/html/Liang_Spatial_Alignment_and_Temporal_Matching_Adapter_for_Video-Radar_Remote_Physiological_ICCV_2025_paper.html", maps:["JoulesEye"], why:"Video+radar contactless vitals — robust respiration sensing." },
      { tier:"adjacent", title:"RhythmGaussian: Repurposing a Generalizable Gaussian Model for Remote Physiological Measurement", url:"https://openaccess.thecvf.com/content/ICCV2025/html/Lu_RhythmGuassian_Repurposing_Generalizable_Gaussian_Model_For_Remote_Physiological_Measurement_ICCV_2025_paper.html", maps:["JoulesEye"], why:"Gaussian-model approach to remote vitals." } ]
    },
    { id:"atmospheric", name:"Atmospheric / spatio-temporal reconstruction (AIRDELHI)",
      desc:"Physics-informed spatio-temporal reconstruction & meteorological forecasting.", labMap:["AIRDELHI"], papers:[
      { tier:"must", title:"CO2-Net: A Physics-Informed Spatio-Temporal Model for Global Surface CO2 Reconstruction", url:"https://openaccess.thecvf.com/content/ICCV2025/html/Zheng_CO2-Net_A_Physics-Informed_Spatio-Temporal_Model_for_Global_Surface_CO2_Reconstruction_ICCV_2025_paper.html", maps:["AIRDELHI","DeepGP-AQ"], why:"Physics-informed reconstruction of a surface pollutant field — directly the AIRDELHI/AQ-inference problem." },
      { tier:"adjacent", title:"Met2Net: Decoupled Two-Stage Spatio-Temporal Forecasting for Complex Meteorological Systems", url:"https://openaccess.thecvf.com/content/ICCV2025/html/Li_Met2Net_A_Decoupled_Two-Stage_Spatio-Temporal_Forecasting_Model_for_Complex_Meteorological_ICCV_2025_paper.html", maps:["AIRDELHI"], why:"Spatio-temporal meteorological forecasting backbone — reusable for PM fields." } ]
    },
    { id:"agri", name:"Agriculture & plant (PlantDoc)", desc:"Agricultural VLM benchmarks and crop morphology.",
      labMap:["PlantDoc"], papers:[
      { tier:"must", title:"AgroBench: Vision-Language Model Benchmark in Agriculture", student:"Yield", url:"https://openaccess.thecvf.com/content/ICCV2025/html/Shinoda_AgroBench_Vision-Language_Model_Benchmark_in_Agriculture_ICCV_2025_paper.html", maps:["PlantDoc"], why:"Agricultural VLM benchmark — eval target for plant-health/yield models." },
      { tier:"adjacent", title:"Demeter: A Parametric Model of Crop Plant Morphology from the Real World", student:"Yield", url:"https://openaccess.thecvf.com/content/ICCV2025/html/Cheng_Demeter_A_Parametric_Model_of_Crop_Plant_Morphology_from_the_ICCV_2025_paper.html", maps:["PlantDoc"], why:"Structured crop-morphology modeling." } ]
    },
    { id:"al-uq", name:"Active learning, uncertainty & conformal", desc:"Sample-efficiency, conformal segmentation, calibrated judges.",
      labMap:["NILM-AL","SpiroActive","Conformal-NILM"], papers:[
      { tier:"must", title:"ConformalSAM: Conformal Prediction for Semi-Supervised Semantic Segmentation", url:"https://openaccess.thecvf.com/content/ICCV2025/html/Chen_ConformalSAM_Unlocking_the_Potential_of_Foundational_Segmentation_Models_in_Semi-Supervised_ICCV_2025_paper.html", maps:["Conformal-NILM"], why:"Conformal prediction wrapped around a foundation segmenter — distribution-free guarantees, the lab's UQ agenda." },
      { tier:"must", title:"To Label or Not to Label: PALM — A Predictive Model for Sample Efficiency in Active Learning", url:"https://openaccess.thecvf.com/content/ICCV2025/html/Machnio_To_Label_or_Not_to_Label_PALM_-_A_Predictive_ICCV_2025_paper.html", maps:["NILM-AL","SpiroActive"], why:"Predicting AL sample-efficiency — methodology for the lab's AL benchmarks." },
      { tier:"adjacent", title:"Generative Active Learning for Long-tail Trajectory Prediction via Controllable Diffusion", url:"https://openaccess.thecvf.com/content/ICCV2025/html/Park_Generative_Active_Learning_for_Long-tail_Trajectory_Prediction_via_Controllable_Diffusion_ICCV_2025_paper.html", maps:["NILM-AL"], why:"Generative AL for rare cases — relevant to rare-appliance/rare-event sensing." },
      { tier:"adjacent", title:"Calibrating MLLM-as-a-judge via Multimodal Bayesian Prompt Ensembles", url:"https://openaccess.thecvf.com/content/ICCV2025/html/Slyman_Calibrating_MLLM-as-a-judge_via_Multimodal_Bayesian_Prompt_Ensembles_ICCV_2025_paper.html", maps:["VayuChat/VayuBuddy"], why:"Calibrated LLM-as-judge — reliable evaluation for VayuChat answers." } ]
    },
    { id:"data-llm", name:"Chart understanding for data analytics (VayuChat)", desc:"Chart captioning/reasoning and training-data synthesis.",
      labMap:["VayuChat/VayuBuddy"], papers:[
      { tier:"must", title:"ChartCap: Mitigating Hallucination of Dense Chart Captioning", url:"https://openaccess.thecvf.com/content/ICCV2025/html/Lim_ChartCap_Mitigating_Hallucination_of_Dense_Chart_Captioning_ICCV_2025_paper.html", maps:["VayuChat/VayuBuddy"], why:"Faithful chart captioning — reduces hallucination in VayuChat's chart outputs." },
      { tier:"adjacent", title:"ChartPoint: Guiding MLLMs with Grounding Reflection for Chart Reasoning", url:"https://openaccess.thecvf.com/content/ICCV2025/html/Xu_ChartPoint_Guiding_MLLMs_with_Grounding_Reflection_for_Chart_Reasoning_ICCV_2025_paper.html", maps:["VayuChat/VayuBuddy"], why:"Grounded chart reasoning." },
      { tier:"adjacent", title:"Effective Training Data Synthesis for Improving MLLM Chart Understanding", url:"https://openaccess.thecvf.com/content/ICCV2025/html/Yang_Effective_Training_Data_Synthesis_for_Improving_MLLM_Chart_Understanding_ICCV_2025_paper.html", maps:["VayuChat/VayuBuddy"], why:"Synthesizing chart training data — bootstrap VayuChat's chart skills." } ]
    }
  ]
};
