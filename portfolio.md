---
layout: default
title: Portfolio
css: assets/css/portfolio.css
js: assets/js/portfolio.js

CategoryA:
- title: Hyperspectral tumor segmentation
  description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent viverra et ipsum nec lacinia. Cras sodales pellentesque diam, at egestas est efficitur nec.
  img: /assets/images/microscope_small.jpg
  alt: hyperspectral imaging

- title: Autonomous surgical robotics
  description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent viverra et ipsum nec lacinia. Cras sodales pellentesque diam, at egestas est efficitur nec.
  img: /assets/images/star_robot.jpg
  alt: STAR robot

- title: Laser speckle contrast imaging
  description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent viverra et ipsum nec lacinia. Cras sodales pellentesque diam, at egestas est efficitur nec.
  img: /assets/images/laser_speckle_sharp.png
  alt: laser speckle contrast imaging

CategoryB:
- title: Polarimetric imaging
  description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent viverra et ipsum nec lacinia. Cras sodales pellentesque diam, at egestas est efficitur nec.
  img: /assets/images/polarimetric.png
  alt: polarimetric imaging

- title: Depth-from-defocus 3D imaging
  description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent viverra et ipsum nec lacinia. Cras sodales pellentesque diam, at egestas est efficitur nec.
  img: /assets/images/3d_hardware.jpg
  alt: 3D imaging

- title: Synethetic rendered ML datasets
  description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent viverra et ipsum nec lacinia. Cras sodales pellentesque diam, at egestas est efficitur nec.
  img: /assets/images/ray_traced.png
  alt: Synthetic datasets
---

<div class="content">
	<div class="heading">Portfolio</div>
	<div class="subheading">Category A</div>
	<div class="masonry-with-columns">
		{% for article in page.CategoryA %}
			<article>
				 <a href="#">
				 	<div class="scrim-gradient"></div>
					<img src="{{site.baseurl}}{{ article.img }}" alt="{{ article.alt }}">
				 	<div class="title2">{{ article.title }}</div>
				 	<div class="description2">{{ article.description }}</div>
				</a>
			</article>
		{% endfor %}
	</div>
	<div class="subheading">Category B</div>
	<div class="masonry-with-columns">
		{% for article in page.CategoryB %}
			<article>
				 <a href="#">
				 	<div class="scrim-gradient"></div>
					<img src="{{site.baseurl}}{{ article.img }}" alt="{{ article.alt }}">
				 	<div class="title2">{{ article.title }}</div>
				 	<div class="description2">{{ article.description }}</div>
				</a>
			</article>
		{% endfor %}
	</div>

</div>