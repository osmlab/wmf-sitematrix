all:
	wget -O all.json 'https://meta.wikimedia.org/w/api.php?action=sitematrix&uselang=en&format=json'
	@node build.js

clean:
	rm -f all*.json wik*.json
