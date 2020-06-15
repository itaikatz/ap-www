---
layout: default
title: contact
css: assets/css/contact.css
js: assets/js/contact.js
transparent_nav: true
---


<div class="banner">
</div>

<div class="content">
<div class="heading">Contact</div>
<div class="contact">
	<div class="contact-left">
		<h2>Email us</h2>
		<img class="icon" src="{{site.baseurl}}/assets/images/mail.svg" alt="envelope"/>	
		<h3>contact@appliedphotons.com</h3>
	</div>
	<div class="contact-right">
		<h2>Or send a message</h2>
		<p>Fill out the form below and we’ll get back to you shortly.</p>
		<div style="width: 80%; margin: 0 auto;">
			<!-- vhttps://formspree.io/ikatz@childrensnational.org -->
			<form id="form" method="POST" action="https://formspree.io/moqkwzzd">
				Name
				<span class="required"> *</span>
				<input type="text" id="name" name="name">		
				Email
				<span class="required"> *</span>
				<input type="text" id="email" name="_replyto">
				Organization
				<input type="text" id="organization" name="organization">
				Message
				<span class="required"> *</span>
				<textarea id="message" name="message" rows="2"></textarea>
				<input type="submit" id="submit-button" value="Send">
			</form>
		</div>
	</div>
</div>
</div>
