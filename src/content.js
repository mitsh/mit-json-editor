function tryParseJSONObject(jsonString)
{
	try
	{
		const o = JSON.parse(jsonString);
		if (o && typeof o === "object")
		{
			return jsonString;
		}
	}
	catch (e)
	{ }

	return false;
}

function get_url_extension(url)
{
	return url.split(/[#?]/)[0]
		.split('.')
		.pop()
		.trim();
}

let jsonContent = false;

let isJSON = false;

const contentType = document.contentType || document.mimeType || '';

isJSON = contentType === 'application/json';
isJSON = isJSON || contentType.includes('json');
isJSON = isJSON || get_url_extension(document.location.href) === 'json';

if (isJSON)
{
	jsonContent = tryParseJSONObject(document.body.textContent);
}

if (jsonContent !== false)
{
	document.body.textContent = "";
	const iframe              = document.createElement('iframe');

	// const json_script = document.createElement('script');
	// json_script.src   = chrome.runtime.getURL("json-editor-standalone.js");
	// json_script.type  = 'module';
	// document.head.appendChild(json_script);

	const style_string = `
		body {
			margin:0px;
			padding:0px;
			overflow:hidden;
		}
		#jsoneditor {
			width: 100vw;
			height: 100vh;
			overflow: hidden;
			position: relative;
		}
	`;

	const head_style = document.createElement('style');
	head_style.type  = 'text/css';
	head_style.appendChild(document.createTextNode(style_string));
	document.head.appendChild(head_style);

	const iframe_html = `
<html>
<head>
	<link rel="stylesheet" href="${chrome.runtime.getURL("themes/jse-theme-dark.css")}">
	<style type="text/css">
	${style_string}
	</style>
</head>
<body>
<div id="jsoneditor" class="jse-theme-dark"></div>
<script type="module">
import { JSONEditor } from '${chrome.runtime.getURL("json-editor-standalone.js")}';

    let content = {
        text: undefined,
        json: ${jsonContent}
    };
    
    const editor = new JSONEditor({
        target: document.getElementById('jsoneditor'),
        props: {
            content,
            onChange: (updatedContent, previousContent, { contentErrors, patchResult }) => {
                content = updatedContent;
            }
        }
    });
</script>
</body>
</html>
`;

	//position:absolute;top:0;left:0;

	iframe.srcdoc      = iframe_html;
	iframe.frameborder = "0";
	iframe.width       = "100%";
	iframe.height      = "100%";
	iframe.style       = "border: none; overflow: hidden; overflow-x: hidden; overflow-y: hidden; height: 100%; width: 100%; position: absolute; top: 0px; left: 0px; right: 0px; bottom: 0px;";
	iframe.allow       = "clipboard-write";

	iframe.sandbox.add("allow-scripts");
	iframe.sandbox.add("allow-forms");
	iframe.sandbox.add("allow-popups");
	iframe.sandbox.add("allow-modals");

	document.body.appendChild(iframe);

	// fetch(chrome.runtime.getURL("json-editor-standalone.js"))
	// 	.then()
	// 	.then(function (response) { return response.text(); })
	// 	.then((js_script) => {
	//
	// 	});
}
