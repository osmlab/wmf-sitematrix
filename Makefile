all:
	mkdir -p data/
	wget -O data/all.json 'https://meta.wikimedia.org/w/api.php?action=sitematrix&uselang=en&format=json'
	@node build.js

clean:
	rm -rf data/
