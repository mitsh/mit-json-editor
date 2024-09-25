# MIT Json Editor

![small-promo-tile](https://raw.githubusercontent.com/mitsh/mit-json-editor/main/assets/promo-small.png)

```bash
cd ~/Documents/works/github/svelte-jsoneditor
npm run build
cp ~/Documents/works/github/svelte-jsoneditor/package-vanilla/standalone.js ~/Documents/works/gitlab/mit/mit-json-editor/src/json-editor-standalone.js
```

A browser extension to view, edit, format, repair, query, transform, and validate JSON directly on the browser.
It uses the powerful [svelte-jsoneditor](https://github.com/josdejong/svelte-jsoneditor/) by Jos de Jong and the Manifest V3 for enhanced security, privacy, and performance.

[//]: # (**[Watch the video!]&#40;https://youtu.be/WnsLXRYOO0g&#41;**)

## Installation

- Chrome 
    - Go to https://chromewebstore.google.com/detail/mit-json-editor/cimehchdondaofhgiiemdicnclbblfjc
    - To allow access to local JSON files
        - Go to `chrome://extensions/`
        - Click on "Details" for MIT Json Editor
        - Click on "Allow access to file URLs"

[//]: # (- Edge )

[//]: # (    - Go to https://microsoftedge.microsoft.com/addons/detail/json-editor/neoimeagehobomgpgmdlcahdjlcjimla)

[//]: # (    - Click on "Get")

[//]: # (    - To allow access to local JSON files)

[//]: # (        - Go to `edge://extension`)

[//]: # (        - Click on "Details" for MIT Json Editor)

[//]: # (        - Click on "Allow access to file URLs")
- Firefox 
    - Go to https://addons.mozilla.org/en-US/firefox/addon/mit-json-editor/ and install the add-on.
    - Go to `about:addons`.
    - Click on the extension.
    - Click on "Permissions" and enable the permission for all sites. Otherwise, the extension won't work. Refer to "Why is the access to all URL sites needed?" for more info.
    - Disable the built-in JSON viewer.
        - Go to `about:config`.
        - In search, paste `devtools.jsonview.enabled`.
        - Set the preference to "false" by clicking the "Toggle" button.

## Usage

Open web pages with JSON content or JSON files directly on the browser.

Features:
* View JSON as a tree. The JSON tree view utilizes right-click to open the context menu, and double-click to start editing a key or value. It supports copy/paste from and to the system clipboard.
* View JSON as formatted text.
* View JSON as a table, for top-level arrays or nested arrays.
* Search and replace
* Undo and redo actions
* Edit the JSON keys, and values, copy, paste, duplicate, insert, or remove
* JSON formatting and minifying
* Query JSON with plain JavaScript or using the built-in form
* Sort, filter, and transform JSON
* Handle large JSON documents up to 512 MB

Make sure to disable any other JSON viewing built-in into the browser or other browser extension JSON viewer/editors.


### Why is the access to all URL sites needed?

To render the MIT Json Editor UI on any web pages with JSON content or JSON files opened with the browser, the content script execution needs to happen on all URLs.

### What data do you collect?

MIT Json Editor does not collect or store any of your data, or track your usage in any way, and will never do so.

Check the full [MIT Json Editor's privacy policy](https://raw.githubusercontent.com/mitsh/mit-json-editor/main/PRIVACY.md).

## Development

### Build

- `make mozilla` to build the Mozilla compatible extension.
- `make chromium` to build the Chromium compatible extension.
- `make package` to create packaged .zip files for distribution in the respective browser stores.

After making changes to the extension's sources, build the extension again.

### Development on Chrome

- Go to `chrome://extensions/`
- Enable the "Developer mode"
- Click on "Load unpacked"
- Select the extension's `build-chromium/` folder.
- After making changes to the extension's sources, build the extension again and click on "Reload".

[//]: # (### Development on Microsoft Edge)

[//]: # ()
[//]: # (- Go to `edge://extensions/`)

[//]: # (- Enable the "Developer mode")

[//]: # (- Click on "Load unpacked")

[//]: # (- Select the extension's `build-chromium/` folder.)

[//]: # (- After making changes to the extension's sources, build the extension again and click on "Reload".)

### Development on Mozilla Firefox

- Go to `about:debugging`.
- Click on "This Firefox"
- Click on "Load Temporary Add-on"
- Open the `build-mozilla/manifest.json` file.
- Go to `about:addons`.
- Click on the extension.
- Click on "Permissions" and enable the permission for all sites. Otherwise, the extension won't work.
- Disable the built-in JSON viewer.
    - Go to `about:config`.
    - In search, paste `devtools.jsonview.enabled`.
    - Set the preference to "false" by clicking the "Toggle" button.
- After making changes to the extension's sources, build the extension again and click on "Reload".
