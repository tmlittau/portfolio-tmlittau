# Project Description: IMU Analyzer

## Introduction
The purpose of my internship at the DFKI in Bremen was to research the possibility of predicting different types of surfaces a Robot is driving on by analyzing data obtained from an Inertial Measurement Unit (IMU). This Proof of Concept ultimately could lead to autonomous vehicles reacting to different weather conditions such as frozen or wet roads by simply comparing data from IMUs to different prediction models.

## Methodology
In this project, I utilized a set of LSTM (Long Short-Term Memory) models to predict IMU data of the different surfaces. LSTM models are a type of recurrent neural network that are well-suited for sequence prediction tasks. By training these models on labeled IMU data, I aimed to develop a reliable method for surface prediction.

## Tool Development
To support the data analysis, I built a tool using Python in combination with QT. This tool not only offered the possibility to analyze the IMU data but also generate synthetic data based on the obtained data. By generating synthetic data, I aimed to increase the amount of training data available for the LSTM models, thereby improving their accuracy and performance.

The tool also provided different movement sequences which were sent to the Turtle Bot using the Robot Operating System (ROS).

## Conclusion
Through this project, I aimed to demonstrate the feasibility of predicting different surfaces using IMU data and LSTM models. By successfully developing a tool for data analysis and synthetic data generation, I contributed to the advancement of autonomous vehicle technology and the potential for improved safety on the roads.
