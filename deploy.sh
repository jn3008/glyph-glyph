#!/bin/bash

# Exit immediately if a command exits with a non-zero status
set -e

echo "Building the project..."
npm run build

echo "Switching to gh-pages branch..."
git checkout gh-pages -f

echo "Copying new build files..."
cp -r build/* .
cp -r index.html 404.html

echo "Staging and committing changes..."
git add .
git commit -m "Deploying updated build to gh-pages"

echo "Pushing to gh-pages..."
git push origin gh-pages

echo "Deployment completed successfully!"
