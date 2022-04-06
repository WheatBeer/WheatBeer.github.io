---
title: Master's Thesis
category: Yonsei
path: projects/yonsei_ms_thesis.md
---

## Optimization of Reconfigurable Deep Neural Network Accelerators Using Bottom-up Mapping and Energy Prediction <a href="https://library.yonsei.ac.kr/search/detail/CAT000002096932?briefLink=/main/searchBrief?q=%EB%B0%94%ED%85%80%EC%97%85+%EB%A7%A4%ED%95%91" target="_blank">[PDF]</a>
<hr>

### Outline
<hr>
* [Abstract](#abs)
* [Background](#bg)
* [Related Work & Motivation](#related)
* [Proposed Methodology](#method)
* [Evaluation](#eval)
* [Appendix](#adix)

#### abs
### Abstract
<hr>
This thesis presents a methodology for finding the most energy-efficient mapping and dataflow combination on reconfigurable deep neural network (DNN) accelerators. The various configurations of accelerators and layer parameters create a huge number of mapping and dataflow combinations. With the vast problem space, it takes a long time to find the best solution, and thus prior techniques have tried to reduce the mapping space and eliminate overlapping dataflows to overcome the time-consuming task. Although these techniques have effectively reduced the search time, there are still areas for further development in terms of the mapping space. The mapping space consists of invalid and valid mappings which are determined by accelerator constraints (e.g., the number of components or buffer capacity). Most prior techniques pruned only invalid mappings by dividing the mapping process into several steps. The developed mapping approaches can produce the same result in a faster time than the previous one, but these approaches are difficult to optimize accelerators consistently whenever the accelerator structure changes because of the fixed order of the steps. To reduce both invalid and valid mappings at the same time, another technique exploited data reuse opportunities for each separated mapping step. However, this approach can lead to a mapping that differs in energy from the best mapping, because of the partial data reuse indicators. The proposed methodology in this thesis, called bottom-up mapping with energy prediction, allows us to derive a mapping that is the same as or very similar to the best mapping with a huge decrease in mapping space. Compared to the technique using the data reuse opportunities, the framework of this thesis not only reduces the mapping space by 1.1 to 9.7x but also has higher accuracy with the recent accelerator and neural networks.
<br><br>

#### bg
### Background
<hr>
<center><img src="/images/thesis_bg.png" width="95%"/></center>
<br>

#### related
### Related Work & Motivation
<hr>
* <a href="https://github.com/NVlabs/timeloop" target="_blank">Timeloop</a> / <a href="https://github.com/Accelergy-Project/accelergy-timeloop-infrastructure" target="_blank">Timeloop + Accelergy</a>
* <a href="https://github.com/xuanyoya/Interstellar-CNN-scheduler" target="_blank">Interstellar</a>
* <a href="https://github.com/MPSLab-ASU/dMazeRunner" target="_blank">dMazeRunner</a>
* <a href="https://github.com/ZigZag-Project/zigzag" target="_blank">ZigZag</a>

<center><img src="/images/thesis_related.png" width="95%"/></center>
<br>

#### method
### Proposed Methodology 
<hr>
<center><img src="/images/thesis_method.png" width="95%"/></center>
<br>

#### eval
### Evaluation
<hr>
<center><img src="/images/thesis_eval.png" width="95%"/></center>
<br>

#### adix
### Appendix
<hr>
<center><img src="/images/thesis_adix.png" width="60%"/></center>
<br>
