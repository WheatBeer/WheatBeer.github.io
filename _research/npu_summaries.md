---
title: Summaries
category: NPU
path: research/npu_summaries.md 
---

## Paper list
<hr>
**1. DianNao: A Small-Footprint High-Throughput Accelerator for Ubiquitous Machine-Learning  [ASPLOS’14]**
<br>**2. SCALE-Sim: Systolic CNN Accelerator Simulator [arXiv’18]**
<br>**3. Eyeriss: A Spatial Architecture for Energy-Efficient Dataflow for Convolutional Neural Networks [ISCA’16]**
<br>**4. Cnvlutin: Ineffectual-Neuron-Free Deep Neural Network Computing [ISCA’16]**
<br>**5. Cambricon-X: An Accelerator for Sparse Neural Networks [MICRO’16]**
<br>**6. SCNN: An Accelerator for Compressed-sparse Convolutional Neural Networks [ISCA’17]**
<br>**7. EIE: Efficient Inference Engine on Compressed Deep Neural Network [ISCA’16]**
<br>**8. ESE: Efficient Speech Recognition Engine with Sparse LSTM on FPGA [FPGA’17]**
<br>**9. Scalable Multi-FPGA Acceleration for Large RNNs with Full Parallelism Levels [DAC’20]**
<br>**10. MnnFast: A Fast and Scalable System Architecture for Memory-Augmented Neural Networks [ISCA’19]**
<br>**11. Manna: An Accelerator for Memory-Augmented Neural Networks [MICRO’19]**
<hr>

<br>
### 1. DianNao: A Small-Footprint High-Throughput Accelerator for Ubiquitous Machine-Learning [ASPLOS’14]
<hr>
**Motivation**
<br>
Layers of state-of-art CNNs consist of thousands of neurons and millions of synapses. 
During processing the large networks, general purpose hardware (e.g., SIMD processors, and GPUs), and previous accelerators have shown memory inefficiency. 
They not only confirm the observation that dedicated storage is key for achieving good performance and power but also try to improve locality at the level of registers located close to computational operators with *tiling* that can reduce the data movements. 
<br>
**Methodology**
<br>
They first describe tiling methods of three CNN layers: convolutional, pooling, and classifier (fully-connected). 
To implement large neural networks, they propose an accelerator, called *DianNao* in Figure 11. The accelerator is composed of input neuron buffer (NBin), synaptic weight buffer (SB), output neuron buffer (NBout), and neural functional unit (NFU). 
The three buffers are separated and constructed as scratchpads. 
NFU is divided into three stages: multiplication, adder tree, and sigmoid. 
For the implementation of a single layer on the accelerator, a tiling factor called Tn is used for the accelerator design. 
<br>
**Differences from prior work**
<br>
<br>
**Pros & cons**
<br>


<br>
### 2. SCALE-Sim: Systolic CNN Accelerator Simulator [arXiv’18] 
*Advanced version: A Systematic Methodology for Characterizing Scalability of DNN Accelerators using SCALE-Sim [ISPASS’20]*
<hr>
**Motivation**
<br>
<br>
**Methodology**
<br>
<br>
**Differences from prior work**
<br>
<br>
**Pros & cons**
<br>


<br>
### 3. Eyeriss: A Spatial Architecture for Energy-Efficient Dataflow for Convolutional Neural Networks [ISCA’16]
*Cross-referenced paper: An Energy-Efficient Reconfigurable Accelerator for Deep Convolutional Neural Networks [JSSC’16]*
<hr>
**Motivation**
<br>
<br>
**Methodology**
<br>
<br>
**Differences from prior work**
<br>
<br>
**Pros & cons**
<br>


<br>
### 4. Cnvlutin: Ineffectual-Neuron-Free Deep Neural Network Computing [ISCA’16]
<hr>
**Motivation**
<br>
<br>
**Methodology**
<br>
<br>
**Differences from prior work**
<br>
<br>
**Pros & cons**
<br>


<br>
### 5. Cambricon-X: An Accelerator for Sparse Neural Networks [MICRO’16]
<hr>
**Motivation**
<br>
<br>
**Methodology**
<br>
<br>
**Differences from prior work**
<br>
<br>
**Pros & cons**
<br>


<br>
### 6. SCNN: An Accelerator for Compressed-sparse Convolutional Neural Networks [ISCA’17]
<hr>
**Motivation**
<br>
<br>
**Methodology**
<br>
<br>
**Differences from prior work**
<br>
<br>
**Pros & cons**
<br>


<br>
### 7. EIE: Efficient Inference Engine on Compressed Deep Neural Network [ISCA’16]
<hr>
**Motivation**
<br>
<br>
**Methodology**
<br>
<br>
**Differences from prior work**
<br>
<br>
**Pros & cons**
<br>


<br>
### 8. ESE: Efficient Speech Recognition Engine with Sparse LSTM on FPGA [FPGA’17]
<hr>
**Motivation**
<br>
<br>
**Methodology**
<br>
<br>
**Differences from prior work**
<br>
<br>
**Pros & cons**
<br>


<br>
### 9. Scalable Multi-FPGA Acceleration for Large RNNs with Full Parallelism Levels [DAC’20]
<hr>
**Motivation**
<br>
<br>
**Methodology**
<br>
<br>
**Differences from prior work**
<br>
<br>
**Pros & cons**
<br>


<br>
### 10. MnnFast: A Fast and Scalable System Architecture for Memory-Augmented Neural Networks [ISCA’19]
<hr>
**Motivation**
<br>
<br>
**Methodology**
<br>
<br>
**Differences from prior work**
<br>
<br>
**Pros & cons**
<br>


<br>
### 11. Manna: An Accelerator for Memory-Augmented Neural Networks [MICRO’19]
<hr>
**Motivation**
<br>
<br>
**Methodology**
<br>
<br>
**Differences from prior work**
<br>
<br>
**Pros & cons**
<br>
