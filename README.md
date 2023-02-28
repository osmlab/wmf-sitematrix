# WMF SiteMatrix

The goal of this project is to provide filtered versions of [Wikimedia's site matrix](https://meta.wikimedia.org/wiki/Special:SiteMatrix), as reported by the MediaWiki API in JSON format. Filtering allows Web applications like [iD](https://github.com/openstreetmap/iD) to avoid loading the entire matrix just to integrate with a single project, such as Wikipedia.

The data/ directory contains a prettified JSON file and a minified JSON file for each Wikimedia project. The all.json and all.min.json files include all the Wikimedia wikis, including not only the projects that have their own JSON files but also multilingual and special wikis.

To update the JSON files, run `make`.
