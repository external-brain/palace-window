---
id: 20240121-deep-learning
aliases:
  - Deep Learning
tags:
  - Inbox
  - Algorithm
  - ArtificialIntelligence
---

# Deep Learning

---
Is a specific type of machine learning employing neural networks in which the number of ==hidden layers== >= 1. A ==hidden layer== is any layer between the ==input layer== & ==output layer==.

```table-of-contents
minLevel:2
```

&nbsp;

## Types of Learning

---

### Self-Supervised Learning

Is a way to train models in which the ==objective==|==label== is automatically computed from the inputs, i.e. it ==self-supervised learning== requires no humans to create labels. Due to this process, these models generally require a ==fine-tuning== process in order to become useful for specific tasks. ==Fine-tuning== is a [[#Transfer Learning]] technique.

### Transfer Learning

==Pretraining== is the act of training a model from scratch without any incorporated prior knowledge. ==Fine-tuning== on the other hand, is training completed after pre-training with a dataset specific to the desired task. ==Pretraining== cuts down on the time, energy, financial & environmental impact, & data needed to get good results. ==Transfer learning== is the general method for taking advantage of ==pre-trained models==, i.e. when a pre-trained model is fine-tuned for a specific task, its knowledge is said to be transferred to the fine-tuned model.

&nbsp;

## Backpropagation

---
Calculates the gradient of some loss function w.r.t. the weights of a neural network s.t. the gradient can be used to update the weights of the network in the direction of decreasing loss, minimizing the loss function. The ==gradient== is a vector of ==partial derivatives== which points in the direction of steepest ascent or greatest change. A ==derivative== is how much a function changes when the input is slightly changed in the positive direction over the size of the change in the input. A partial derivative of a function of multiple independent variables is a derivative w.r.t. one of them, it answers the question, how much does this function change w.r.t. this independent variable.

Another way to define ==backpropagation== is in terms of a computation graph. Backpropagation is the recursive application of the chain rule backwards through a ==computation graph==. At the completion of one backward propagation, each node in the computation graph will have computed a partial derivative of the loss function w.r.t. itself. The ==partial derivative== of the loss function w.r.t. a node is `dL/dn = dL/dparent * dparent/dn`.

&nbsp;

## Gradient Descent

---
Is ==forward propagation== of weights & input data values through a neural network to the output of the network & into the ==loss function== followed by ==backward propagation== from the loss function all the way to the input weights followed by an update of the network weights in the negative direction of the gradient. This update uses a learning rate, i.e. `wi += l.r. * -g_wi`. After some iterations of ==gradient descent==, we should find that our loss function output is decreasing.

&nbsp;

## Neural Network Architectures

---
