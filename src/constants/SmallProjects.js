import perceptron from "../images/perceptron.png";
import adaline from "../images/adaline.png";
import dog from "../images/dog.png";
import tsp from "../images/tsp.jpg";
import classification from "../images/classification.jpg"
import retina from "../images/retina.png"
import twitter from "../images/twitter.png"




const smallProjects = [
	{
		name: "Perceptron",
		description: `Perceptron is a single layer neural network.Perceptron Learning Algorithm, originally proposed by Frank Rosenblatt in 1943, later refined and carefully analyzed by Minsky and Papert in 1969.`,
		image: perceptron,
		link: "https://github.com/sobhanshukueian/Perceptron",
	},
	{
		name: "Adaline",
		description: `ADALINE (Adaptive Linear Neuron) implementation for predicting X and O characters in python.
		Adaline is a single layer neural network with multiple nodes where each node accepts multiple inputs and generates one output.The ADALINE was created by Widrow and Hoff in 1960`,
		image: adaline,
		link: "https://github.com/sobhanshukueian/Adaline",
	},
	{
		name: "Twitter Text Classification",
		description: `This repository contains machine learning model in Python for classifying Twitter text data.`,
		image: twitter,
		link: "https://github.com/sobhanshukueian/Twitter-Text-Classification-Using-ML",
	},
	{
		name: "Simple-classification-using-deep-learning-on-MNIST",
		description: `One way to classify images is using simple deep models, in this sample i used a model with three linear layers and relu activation in end of the architecture. In training process used crossEntropy loss function and Adam optimizer to update the weights. U can check the code and outputs.`,
		image: classification,
		link: "https://github.com/sobhanshukueian/Simple-classification-using-deep-learning-on-MNIST",
	},
	{
		name: "Dog Breed Detection (Transfer Learning)",
		description: `This project implements Dog Breed Detection using Transfer Learning in Python and Tensorflow`,
		image: dog,
		link: "https://github.com/sobhanshukueian/Dog_Breed_Detection",
	},
	{
		name: "Object_Detection_Counting_RetinaNet",
		description: `Object Detection and Counting them by pretrained RetinaNet model on COCO dataset.`,
		image: retina,
		link: "https://github.com/sobhanshukueian/Object_Detection_Counting_RetinaNet",
	},
	{
		name: "TSP GA",
		description: `Traveling sales man problem is to find the shortest route between given cities and returns to the starting city. In this code solve this problem using genetic algorithms in python from scratch.`,
		image: tsp,
		link: "https://github.com/sobhanshukueian/TSP-GA",
	},
];

export default smallProjects;
