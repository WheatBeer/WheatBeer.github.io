---
title: ETRI Internship
category: Undergraduate
path: projects/undergraduate_etri_internship.md
---

# MobileNetV2 Validation & Retraining with Reduced-precision Weights 
### *Korean government-funded internship program at [ETRI](https://www.etri.re.kr/intro.html) [[Code]](https://github.com/WheatBeer/MobileNetV2_reduced_precision)* 
* * *

### 1. Dependencies
- [Pytorch][pytorch] (ver.1.1.0)
- torchvision
- tqdm (for progress bar)
- You can check other dependencies on top of *.py files

### 2. MobileNetV2(Model + Pretrained weights & biases)
- Paper: ["Inverted Residuals and Linear Bottlenecks"][paper]
- [Model Code][code] & [Imagenet Dataset][imagenet]
- Model Architecture: See the [model_info folder][model_info]'s text files or run model_info.py
- Top 1 & Top 5

> Pretrained model: './data/mobilenet_v2-b0353104.pth' <br>
Top 1 Accuracy: 71.88 % <br>
Top 5 Accuracy: 90.29 %

### 3. Usage
**1. model_info.py**
- Model Information(Architecture, Parameters, etc.)
- If you want to get other pretrained model's parameter values, you have to change the weight path(-w).
- All default outputs are in the model_info folder.

~~~txt
$ python3 model_info.py -h
usage: model_info.py [-h] [-w PATH] [-i #]

Model Information

optional arguments:
  -h, --help                    show this help message and exit
  -w PATH, --weights PATH       Pretrained parameters PATH | Default: ./data/mobilenet_v2-b0353104.pth                      
  -i #, --info_num #            Info you want | 0: summary 1: arcitecture 2: paramters value | Default: 0      
~~~

**2. inference.py**
- Inference form an image.
- Run on CPU and GPU.

~~~txt
$ python3 inference.py -h
usage: inference.py [-h] [-w PATH] [-i PATH]

Inference only one image

optional arguments:
  -h, --help                    show this help message and exit
  -w PATH, --weights PATH       Pretrained parameters PATH | Default: ./data/mobilenet_v2-b0353104.pth                      
  -i PATH, --input PATH         Input image PATH | Default: ./data/dog.jpg                
~~~
  
**3. validation.py**
- Validate a trained model with ImageNet validation set.
- Run on CPU and GPU.

~~~txt
$ python3 validation.py -h
usage: validation.py [-h] [-b #] [-p PATH] [-w PATH]

Float Shift Validation

optional arguments:
  -h, --help                   show this help message and exit
  -b #, --batch #              Batch Size | Default: 400
  -p PATH, --path PATH         Imagenet Dataset PATH | Default: /Data/ImageNet/ILSVRC2012/                
  -w PATH, --weights PATH      Pretrained parameters PATH | Default: ./data/mobilenet_v2-b0353104.pth
~~~

**4. train.py**
- Train from (pre)trained model using ImageNet training set(--pretrained True) or, train from scratch(--pretrained False).
- After every epoch, validation is performed.  
- Run on only GPU.

~~~txt
$ python3 train.py -h
usage: train.py [-h] [-b #] [-e #] [-l #] [-d T/F] [--pretrained T/F] [-s T/F] [-p PATH] [-w PATH]

Training MobileNetV2

optional arguments:
  -h, --help                  show this help message and exit
  -b #, --batch #             Batch Size | Default: 400
  -e #, --epoch #             Epoches | Default: 1
  -l #, --lr #                Learning Rate | Default: 0.045
  -d T/F, --decay T/F         Learning Rate Decay | Default: True
  --pretrained T/F            Train from pretrained model | Default: True
  -s T/F, --save T/F          Save all models after every epoch(True) | Save best model(False)
  -p PATH, --path PATH        Imagenet Dataset PATH | Default: /Data/ImageNet/ILSVRC2012/
  -w PATH, --weights PATH     Pretrained parameters PATH | Default: ./data/mobilenet_v2-b0353104.pth
~~~

**5. mask_frac.py**
- Mask parameter values' fractional bits.
- Output will be saved in data folder.
- Takes about 2 minutes.

~~~txt
ex) 32FP(sign: 1bit, exp: 8bits, frac: 23bits)
- Before <br />
  --------------------------------------------
  |s|-exponent-|----------fractional----------
  --------------------------------------------
  
- After(Remain n_digits bits in fractional)
  --------------------------------------------
  |s|-exponent-|--frac--|--------zeros--------
  --------------------------------------------
~~~

~~~txt
$ python3 train.py -h
usage: mask_frac.py [-h] [-n #] [-w PATH]

Mask Weights(FP32) Fractional

optional arguments:
  -h, --help                  show this help message and exit
  -n #, --n-digits #          Fractional bits | Default: 5
  -w PATH, --weights PATH     Pretrained parameters PATH | Default: ./data/mobilenet_v2-b0353104.pth
 ~~~

[pytorch]: https://pytorch.org/
[paper]: https://arxiv.org/abs/1801.04381
[code]: https://pytorch.org/hub/pytorch_vision_mobilenet_v2/
[imagenet]: http://www.image-net.org/challenges/LSVRC/2012/nonpub-downloads
[model_info]: https://github.com/WheatBeer/MobileNetV2/tree/master/model_info

