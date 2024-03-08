# Drone Delivery Assistance in War Zones

## Overview

This project aims to automate drone delivery assistance in war zones to aid those in need. It leverages satellite imagery and machine learning models to predict suitable delivery sites and optimize drone routes for efficient and timely delivery of essential supplies.

## Features

- **Satellite Image Retrieval**: Uses the Google Earth Engine API to retrieve satellite images based on user-provided coordinates.
- **Machine Learning Model**: Implements a machine learning model (CNN with ResNet50 architecture) to analyze images and predict suitable delivery sites within the war zone. The model achieves an accuracy of 55%.
- **Web Interface**: Provides a user-friendly web interface where users can input their location coordinates to initiate the delivery process.
- **Drone Delivery Optimization**: Optimizes drone delivery routes based on predicted delivery sites to ensure effective delivery of supplies.

## Usage

1. Input your location coordinates into the web interface.
2. Submit the coordinates to retrieve satellite images.
3. The machine learning model will analyze the images and predict suitable delivery sites.
4. Drone delivery routes will be optimized based on the predicted sites.
5. Monitor delivery progress and status through the web interface.

## Requirements

- Python 3.x
- TensorFlow
- Google Earth Engine Python API
- Flask (for web interface)


