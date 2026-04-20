---
title: "Introduction to Neural Networks Workshop"
description: "Reflections on hosting the UMIEEE × UMRT Neural Network Workshop at the University of Manitoba, and a high-level recap of what we covered."
date: 2025-10-16
math: true
tags: [workshop, teaching, neural-networks, machine-learning]
image: "abraham-nn.jpeg"
---

I had an awesome time hosting the Introduction to Neural Networks workshop for [UMIEEE](https://umieee.ca) × [UMRT](https://umrt.ca) at the University of Manitoba.

It was great seeing such an interactive group with lots of thoughtful questions, great discussions, and genuine curiosity about how neural networks learn and generalize. The live demo on the MNIST handwritten digit dataset landed well, and working through the perceptron example with the audience in real time was a highlight. Presenting is always a great way to solidify your own understanding, and this was no exception.

---

## Topics Covered

### The AI Landscape

We started by untangling some commonly conflated terms. **AI** is the broadest category where any system mimicking intelligent behaviour, not necessarily using data (a Rubik's cube solver counts). **ML** is data driven: feed a model a dataset, it figures out the relationship. **Deep Learning** is a subset of ML built around perceptrons and neural networks. **Generative AI** sits inside that, focused on producing new samples from learned distributions.

### The Perceptron

The building block of everything. The Perceptron takes weighted inputs, sums them up, and passes the result through an activation function:

$$z = \sum_i w_i x_i + b \qquad f(z) = \begin{cases} 0 & z \leq 0 \\ 1 & z > 0 \end{cases}$$

We worked through a concrete example of "*will I go to the beach?*" with weather, company, and distance as binary inputs, manually assigning weights and bias to build intuition for what those parameters actually do.

### Neural Networks and Learning

Stack perceptrons in layers and you get a multilayer perceptron: an input layer, one or more hidden layers, and an output layer. The key insight is that rather than assigning weights by hand, the network learns them through training, repeatedly comparing its predictions against ground truth, computing a loss, and nudging weights in the direction that reduces it via backpropagation.

We touched on activation functions (sigmoid for smooth gradients), the binary cross-entropy loss for classification, and practical concepts like batching, overfitting, and the bias variance tradeoff.

### Live Demo

We closed with a live coded 10 class digit classifier on MNIST, 784 inputs, two hidden layers of 584 neurons each, and a 10 neuron softmax output. The notebook is available at [tinyurl.com/ieeeumrt-nn](https://tinyurl.com/ieeeumrt-nn) if you want to run it yourself.

---

Big thanks to everyone who came out. If you want to go deeper, I'd recommend [Understanding Deep Learning by Simon Prince](https://udlbook.github.io/udlbook/) as it's free, rigorous, and one of the best resources in the field right now.
