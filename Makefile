mozilla:
	rm -rf ./build-mozilla
	mkdir -p ./build-mozilla
	cp -r ./src/* ./build-mozilla/
	cp ./manifest-mozilla.json ./build-mozilla/manifest.json

chromium:
	rm -rf ./build-chromium
	mkdir -p ./build-chromium
	cp -r ./src/* ./build-chromium/
	#node ./prepare-chromium.js
	cp ./manifest-chromium.json ./build-chromium/manifest.json

package: mozilla chromium
	rm -rf ./package
	mkdir -p ./package
	pushd ./build-mozilla/ && zip -r ../package/mit-json-editor-mozilla-$$(cat ./manifest.json | grep -o '"version": ".*"' | grep -o '\d\+\.\d\+.\d\+').zip ./ && popd
	pushd ./build-chromium/ && zip -r ../package/mit-json-editor-chromium-$$(cat ./manifest.json | grep -o '"version": ".*"' | grep -o '\d\+\.\d\+.\d\+').zip ./ && popd
