# make the site directory and copy everything from the static directory over
mkdir site && cp -r static/ site

# copy compiled files over to the site directory
cp dist/{nav-button.js,nav-button-react.js,nav-button.css} site

# minifiy embed script
node_modules/.bin/uglifyjs -c -m -o site/nav-embed.js -- site/nav-embed.js

# strip dev prefixed paths to work with gh pages
sed -i "" 's/\/dev\///g' site/index.html

# replaces site placeholder with appropriate contents
sed -i "" 's/<!-- build:site -->/<link rel="stylesheet" href="nav-button.css">/g' site/index.html

# strip leading slash from dev bundle path
sed -i "" 's/\/nav-button.js/nav-button.js/g' site/index.html
sed -i "" 's/\/nav-button-react.js/nav-button-react.js/g' site/index.html
