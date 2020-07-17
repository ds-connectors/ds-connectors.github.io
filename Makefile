econ-site:
	rm -r econ-fa20
	cd ng-econ; \
	ng build --base-href /econ-fa20 --deploy-url https://ds-connectors.github.io/econ-fa20; \
	cp -r dist ../econ-fa20; \
	rm -r dist
	echo "<meta http-equiv='Refresh' content='0; url=data88-site/index.html' />" > econ-fa20/index.html
