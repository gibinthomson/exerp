#!/bin/bash


current_version="$(cat package.json | grep \"version\" | cut -d'"' -f 4)"
echo "current version is $current_version"

# break down the version number into the 
regex="([0-9]+).([0-9]+).([0-9]+)"
if [[ $current_version =~ $regex ]]; then
  major="${BASH_REMATCH[1]}"
  minor="${BASH_REMATCH[2]}"
  patch="${BASH_REMATCH[3]}"
fi


patch="$((patch + 1))"


echo "new version is ${major}.${minor}.${patch}"

npm version patch --no-git-tag-version
