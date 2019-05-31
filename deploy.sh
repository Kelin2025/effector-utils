#!/usr/bin/env sh

# build
vuepress build docs

# navigate into the build output directory
cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:kelin2025/effector-utils.git master:gh-pages

cd -