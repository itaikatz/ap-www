---
layout: default
title: index
css: assets/css/index.css
transparent_nav: true
og_image: assets/images/ap_logo_linkedin.png
og_title: Applied Photons, LLC
og_url: www.appliedphotons.com
og_description: Applied Photons is a research and consulting firm dedicated to advancing machine learning, AI, and computer vision to power the next generation of products.
---

<div class="banner"> 
<div id="banner-image"></div>
<div id="banner-text">
	<div id="heading-a">Research-Powered Computer Vision<br>for Medical Imaging and Beyond</div>	
	<div id="heading-b">Solve your most complex imaging challenges with technology that puts you years ahead of industry standards.</div>
	<a href="contact.html" class="button" id="learn">Discuss Your Challenge</a>
	<a href="portfolio.html" class="button" id="portfolio">Explore Our Solutions</a>
</div>
</div>

{% include homepage-section.html 
	text-on-left=true
	heading='From Research Papers to Real-World Impact'
	text='Advanced computer vision innovations often remain confined to academic literature and research labs, unavailable to companies that could benefit from them. 
	<br><br>
	Applied Photons bridges this gap by translating theoretical breakthroughs into practical implementations that solve your most challenging imaging problems.'
	imgPath='/assets/images/toy_camera.jpg'
%}

<section class="capabilities">
	<h2>Our Core Computer Vision Capabilities</h2>
	<p>Our expertise centers on advanced computer vision technologies, supported by complementary capabilities that deliver end-to-end solutions</p>

	<div class="capabilities-grid">

		<div>
		Advanced Image Analysis
		<br><br>
		Extracting meaningful insights from diverse optical modalities including visible light, infrared, hyperspectral, and polarimetric imaging.
		</div>
		<div>
		Machine Learning Integration
		<br><br>
		Enhancing vision systems with custom ML models that automate analysis, identify patterns, and improve accuracy for medical and research applications.
		</div>
		<div>
		Custom Optical Systems
		<br><br>
		Designing specialized hardware configurations that exceed off-the-shelf limitations for unique imaging challenges.
		</div>
		<div>
		Real-Time Processing Solutions
		<br><br>
		Balancing efficiency with accuracy to enable responsive decision-making in time-sensitive clinical and operational environments. 	
		</div> 
		

	</div>

</section>
<!--
{% include homepage-section.html 
	text-on-left=false
	heading='Our Core Computer Vision Capabilities'
	text='
	Our expertise centers on advanced computer vision technologies, supported by complementary capabilities that deliver end-to-end solutions
	<br><br>
	Advanced Image Analysis
	<br><br>
	Extracting meaningful insights from diverse optical modalities including visible light, infrared, hyperspectral, and polarimetric imaging.
	<br><br>
	Machine Learning Integration
	<br><br>
	Enhancing vision systems with custom ML models that automate analysis, identify patterns, and improve accuracy for medical and research applications.
	<br><br>
	Custom Optical Systems
	<br><br>
	Designing specialized hardware configurations that exceed off-the-shelf limitations for unique imaging challenges.
	<br><br>
	Real-Time Processing Solutions
	<br><br>
	Balancing efficiency with accuracy to enable responsive decision-making in time-sensitive clinical and operational environments. 	
	'
	imgPath='/assets/images/synthetic_datasets.png'
%}
-->

{% include homepage-section.html 
	text-on-left=false
	heading='Guided by expertise'
	text='Our team of data scientists and engineers accelerate innovation. We bring a diverse set of research and development expertise, scientific rigor, and a deep knowledge of state-of-the-art techniques to design, build, and deploy bespoke solutions.'
	imgPath='/assets/images/synthetic_datasets.png'
%}

{% include homepage-section.html 
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
		<span>ThreeJS</span>
	</div>
</div>


<!--
{% include homepage-section.html 
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
-->

<div class='sub-header'>
	<div class='head1'>Work with Applied Photons</div>
	<div class='head2'>Find out how Applied Photons can help you tackle your most challenging computer vision projects.</div>
	<a href="{{site.baseurl}}/contact.html" class="button" style="background-color: white; color: black">Book a Call</a>
</div>

<!--  
<h2 style="text-align: center"> Computer vision &#5867; Robotics &#5867; Machine learning </h2>

 -->