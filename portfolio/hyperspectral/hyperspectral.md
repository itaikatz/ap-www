---
layout: portfolio
title: Hyperspectral Tumor Imaging
---
<!--
css: assets/css/contact.css
js: assets/js/contact.js
transparent_nav: true
-->

{% include image.html url="/portfolio/hyperspectral/banner_test.jpg" alt="hyperspectral camera" %}

<h1>Hyperspectral Imaging for Intraoperative Brain Tumor Resection</h1>

{% include blockquote.html quote="Mere color can speak to the soul in a thousand different ways." author="Oscar Wilde" %}


Although some brain tumors are well-circumscribed and can be resected with relative ease, many have diffuse margins and/or may be located in eloquent cortex or other highly sensitive areas. Similarly, seizure foci may be located in functionally important areas of the brain. Thus, the location of pathologic tissues in such compromising areas of the brain poses a significant clinical dilemma to the neurosurgeon: should they remove the entirety of the pathological tissue to achieve a gross total resection while potentially risking functional injury to the healthy surrounding tissue, or should they leave some residual tumor/epileptogenic tissue, which might progress/metastasize (in the case of tumors) or continue to cause seizures (in the case of epileptogenic tissue)? Currently, pre-operative MRI/CT images are used for intraoperative guidance; neurosurgeons use that positioning system along with visual analysis and clinical expertise to achieve optimal resections. However, the gross total resection cannot be confirmed until an additional round of intraoperative or postoperative imaging has been completed. The utility of a real-time imaging method to show disease margins would be immense.

Hyperspectral imaging (HSI) is a non-invasive, non-ionizing imaging method that combines digital imaging and spectroscopy to capture both spatial and spectral data in real time. Whereas visual perception by the human eye is limited to three electromagnetic bands (red, green, and blue), HSI analysis is capable of segmentation into 30+ channels, which correlate to both the optical appearance as well as the chemical composition of each pixel in the image field.

This imaging modality was developed by NASA in the 1970s and 1980s for remote sensing of Earth's surface, but has since been applied to diverse fields. In medicine, HSI has demonstrated efficacy in mapping of oxygen saturation in living tissues (Giannoni et al., 2018), ictal imaging of the brain of an epilepsy patient (Noordmans et al., 2013), and detection of colon cancer (Leavesly et al., 2016), among other research applications. There are numerous other potential applications for HSI in neurosurgery, including determination of brain matter and the noninvasive measurement of intracranial pressure.

Should HSI be able to discriminate between normal brain and pathological brain tissue, we hypothesize that neurosurgeons will be better equipped to distinguish surgical margins of pathological tissue for safe resection, thus optimizing surgical decision-making for patients with challenging brain tumors or seizure foci.

{% include image.html url="/portfolio/hyperspectral/operating_room.png" description="Surgical view [left] as seen from neurosurgical microscope [right] fitted with our hyperspectral camera " %}

{% include image.html url="/portfolio/hyperspectral/segmented_tumor.png" description="View of the surgical field [left] with deep learning-based tumor segmentation [right]" %}
