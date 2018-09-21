---
layout: default
title: Tags
---

<div class="page-content wc-container tags">
	<h1 class="header">Tags</h1>
	<div class="card-deck">
		{% for tag in site.tags %}
		<a href="{{ '/tag/' | append:tag[0] | relative_url }}">
			<div class="card text-center">
				<div class="card-body">
					<i class="fas fa-tag"></i>
					<h5 class="card-title">{{ tag[0] }}</h5>
				</div>
			</div>
		</a>
		{% endfor %}
	</div>
</div>
