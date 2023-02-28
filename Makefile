all:
	mkdir -p data/
	wget -O data/all.json 'https://meta.wikimedia.org/w/api.php?action=sitematrix&uselang=en&format=json'
	@npm run build

clean:
	rm -rf data/
