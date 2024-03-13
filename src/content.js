function tryParseJSONObject(jsonString)
{
	try
	{
		var o = JSON.parse(jsonString);
		if (o && typeof o === "object")
		{
			return jsonString;
		}
	}
	catch (e)
	{ }

	return false;
}

let jsonContent = tryParseJSONObject(document.body.textContent);

if (!!jsonContent)
{
	document.body.textContent = "";
	const iframe              = document.createElement('iframe');

	// const json_script = document.createElement('script');
	// json_script.src   = chrome.runtime.getURL("json-editor-standalone.js");
	// json_script.type  = 'module';
	// document.head.appendChild(json_script);

	const style_string = `
		body {
			margin: 0;
			padding: 0;
		}
		#jsoneditor {
			width: 100vw;
			height: 100vh;
			overflow: hidden;
			position: relative;
		}
	`;


	const head_style = document.createElement('style');
	head_style.type = 'text/css';
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
	iframe.srcdoc     = iframe_html;
	iframe.style      = "border: none; width: 100vw; height: 100vw;"
	iframe.sandbox.add("allow-scripts")
	iframe.sandbox.add("allow-forms")
	iframe.sandbox.add("allow-popups")
	iframe.sandbox.add("allow-modals")
	iframe.allow = "clipboard-write";
	document.body.appendChild(iframe);

	// fetch(chrome.runtime.getURL("json-editor-standalone.js"))
	// 	.then()
	// 	.then(function (response) { return response.text(); })
	// 	.then((js_script) => {
	//
	// 	});
}
