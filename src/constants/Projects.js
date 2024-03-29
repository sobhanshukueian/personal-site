import style_transfer from "../images/style transfer.jpg";
import road from "../images/road.jpg";
import od from "../images/od.png";
import fcn from "../images/fcn.png";
import river from "../images/river.png";
import gan from "../images/GAN.gif";
import dcgan from "../images/DC-GAN.gif";
import cdcgan from "../images/c-dcgan.png";
import search from "../images/search.png";
import unet from "../images/unet.png";
import denoising from "../images/denoising.png";
import ml from "../images/ml.jfif";
import att from "../images/ceaef42e-f9c4-4d5a-bebb-2a86fccd7827.png";
import vae from "../images/vae.png";
import iris from "../images/iris.jpg";






const projects = [
	{
		name: "Research on Object detection",
		description: `This project involves developing and implementing a small-sized object detection model that can run on a mobile processor, under the supervision of Iran's National Elites Foundation.`,
		image: od,
		link: "https://github.com/sobhanshukueian/Object-Detectives"
	},
	{
		name: "Iris Identification",
		description: `I implemented an identification system for the iris dataset using edge detection and the Hough transform. To improve the efficiency of the Hough transform algorithm, I utilized Numpy broadcasting and vectorizing techniques, along with some modifications. Additionally, I employed Daugman normalization for better results. For the final identification step, I utilized a Siamese network with contrastive loss.`,
		image: iris,
		link: "https://github.com/sobhanshukueian/Iris-Identification",

	},
	{
		name: "Style Transfer",
		description: `Implementeation of a Neural Style Transfer project, which is a technique to generate an image that has the same "content" as a base image, but with the "style" of a chosen picture.`,
		image: style_transfer,
		link: "https://github.com/sobhanshukueian/Style-Transfer",
	},
	{
		name: "U-Net Semantic Segmentation",
		description: `U-net is a semantic segmentation model architecture that developed by Olaf Ronneberger et al, for bio medical images like paper's name that mentioned this. Below you can see the architecture of model, it contains two main parts encoder and decoder.`,
		image: unet,
		link: "https://github.com/sobhanshukueian/U-Net-Semantic-Segmentation",
	},
	{
		name: "Siamese Face Identification on AT&T",
		description: `Face identification is the task of matching a given face image to one in an existing database of faces.So how can we solve this problem with siamese networks?`,
		image: att,
		link: "https://github.com/sobhanshukueian/Face-Identification-using-Siamese",
	},
	{
		name: "VAE",
		description: `A variational autoencoder can be defined as an autoencoder whose training is regularized to avoid overfitting and ensure that the latent space has good properties that enable a generative process. We proceed to modify the encoding-decoding process slightly: **instead of encoding an input as a single point, we encode it as a distribution over the latent space.`,
		image: vae,
		link: "https://github.com/sobhanshukueian/Variational-Auto-Encoder",
	},
	{
		name: "FCN Semantic Segmentation",
		description: `One of the Semantic segmentation algorithms is FCN that uses a Fully Convolutional Network (FCN) i.e. you stack a bunch of convolutional layers in a encoder-decoder fashion. The encoder downsamples the image using strided convolution giving a compressed feature representation of the image, and the decoder upsamples the image using methods like transpose convolution to give the segmented output`,
		image: fcn,	
		link: "https://github.com/sobhanshukueian/FCN-semantic-segmentation",
	},
	{
		name: "Denoising AutoEncoders",
		description: `Autoencoders present an efficient way to learn a representation of your data, which helps with tasks such as dimensionality reduction or feature extraction. You can even train an autoencoder to identify and remove noise from your data. The purpose of a DAE is to remove noise. You can also think of it as a customised denoising algorithm tuned to your data.`,
		image: denoising,	
		link: "https://github.com/sobhanshukueian/Denoising-AutoEncoder",
	},
	{
		name: "Road-Optimization",
		description: `Optimize roads on infraworks to not disrupt coverages`,
		image: road,
		link: "https://github.com/sobhanshukueian/Road-Optimization",
	},
	{
		name: "River Crossing Problem by DLS",
		description: `A river crossing puzzle is a type of puzzle in which the object is to carry items from one river bank to another, usually in the fewest trips.`,
		image: river,
		link: "https://github.com/sobhanshukueian/River-Crossing-Problem-by-DLS",
	},
	{
		name: "GAN",
		description: `GANs are generative models: they create new data instances that resemble your training data. The Generator tries to produce data from some probability distribution. That would be you trying to reproduce the party’s tickets. The Discriminator acts like a judge. `,
		image: gan,
		link: "https://github.com/sobhanshukueian/GAN",
	},
	{
			name: "DC GAN",
		description: `DCGAN, or Deep Convolutional GAN, is a generative adversarial network architecture. It uses a couple of guidelines, in particular:
		Replacing any pooling layers with strided convolutions (discriminator) and fractional-strided convolutions (generator).
		Using batchnorm in both the generator and the discriminator.
		Removing fully connected hidden layers for deeper architectures.
		Using ReLU activation in generator for all layers except for the output, which uses tanh.
		Using LeakyReLU activation in the discriminator for all layer.`,
		image: dcgan,
		link: "https://github.com/sobhanshukueian/DCGAN",
	},
	{
		name: "Conditional DCGAN",
		description: `A conditional generative adversarial network (CGAN) is a type of GAN that also takes advantage of labels during the training process.`,
		image: cdcgan,
		link: "https://github.com/sobhanshukueian/Conditional-DCGAN",
	},
	{
		name: "Solving-Porblems-By-Searching",
		description: `In artificial intelligence, problems can be solved by using searching algorithms, evolutionary computations, knowledge representations, etc. This Repo contains implementation of different search algorithms in python.`,
		image: search,
		link: "https://github.com/sobhanshukueian/Solving-Porblems-By-Searching-BFS-DFS-UCS-DLS-IDS-BS-",
	},
	{
		name: "Machine-Learning-Projects-from-scratch",
		description: `This repo contains some machine learning algorithm's projects.`,
		image: ml,	
		link: "https://github.com/sobhanshukueian/Machine-Learning-Projects-from-scratch",
	},
];

export default projects;
