# strip dev prefixed paths to work with gh pages
sed -i "" 's/\/dev\///g' site/index.html

# replaces site placeholder with appropriate contents
sed -i "" 's/<!-- build:site -->/<link rel="stylesheet" href="nav-button.css">/g' site/index.html

# strip leading slash from dev bundle path
sed -i "" 's/\/nav-button/nav-button/g' site/index.html
sed -i "" 's/\/nav-button-react/nav-button-react/g' site/index.html
