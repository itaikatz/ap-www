---
layout: default
title: index
css: assets/css/index.css
transparent_nav: true
---

<div class="banner">
<div id="banner-image"></div>
<div id="banner-text">
	<div id="heading-a">Cutting edge science for<br/> challenging problems</div>
	<div id="heading-b">Applied Photons is dedicated to novel engineering solutions across the entire development pipeline.</div>
	<a href="contact.html" class="button" id="learn">Contact us</a>
	<a href="portfolio.html" class="button" id="portfolio">See our portfolio</a>
</div>
<!-- 
<div class="heading" id="heading1">Computer vision</div>
<div class="heading" id="heading2">Machine learning</div>
<div class="heading" id="heading3">Robotics</div>
 -->
</div>

{% include section.html 
	text-on-left=true
	heading='Research-based solutions'
	text='We customize state-of-the-art computer vision, machine learning, and Al to power next generation of products.'
	imgPath='/assets/images/toy_camera.jpg'
%}

{% include section.html 
	text-on-left=false
	heading='Guided by expertise'
	text='Our team of data scientists and engineers accelerate innovation. We bring a diverse set of research and development expertise, scientific rigor, and a deep knowledge of state-of-the-art techniques to design, build, and deploy bespoke solutions.'
	imgPath='/assets/images/synthetic_datasets.png'
%}

{% include section.html 
	text-on-left=true
	heading='Shaped by cross-industry experience'
	text='Applied Photons has worked with organizations of all sizes — from startups to government — and in industries from healthcare to defense, policy, construction, and more.'
	imgPath='/assets/images/custom_optics2.png'
%}

<div class='proven-tools'>
	<h2>Powered by industry-proven tools</h2>
	<div class='icons'>
		<span>OpenCV</span>
		<span>TensorFlow</span>
		<span>PyTorch</span>
		<span>Keras</span>
		<span>D3js</span>
		<span>Tableau</span>
		<span>React</span>
		<span>ROS</span>
		<span>Blender</span>
	</div>
</div>



{% include section.html 
	id='hyperspectral'
	text-on-left=true
	fill-color=true
	preheading='MEDICAL DEVICES'
	heading='Hyperspectral Brain Tumor Imaging'
	text='The team at Applied Photons helped to design and build a custom camera system that leveraged optics and machine learning to identify brain tumor margins in realtime during surgery.'
	imgPath='/assets/images/microscope_crop2.png'
	button-text='see case study'
	button-link='/portfolio/hyperspectral/hyperspectral.html'
%}


<div class='sub-header'>
	<div class='head1'>Work with Applied Photons</div>
	<div class='head2'>Find out how Applied Photons can help you tackle your most challenging data science and machine learning projects.</div>
	<a href="{{site.baseurl}}/contact.html" class="button" style="background-color: white; color: black">GET IN TOUCH</a>
</div>

<!--  
<h2 style="text-align: center"> Computer vision &#5867; Robotics &#5867; Machine learning </h2>

 -->