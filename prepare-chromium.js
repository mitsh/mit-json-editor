const fs = require('fs');

// Read the original file
fs.readFile('json-editor-standalone.js', 'utf8', (err, json_editor_script) => {
	if (err)
	{
		console.error(err);
		return;
	}

	// // Replace unescaped backticks with escaped ones
	// json_editor_script = json_editor_script.replace(/(?<!\\\\)`/g, '\\\`');

	// // Replace \1 with \\1
	// json_editor_script = json_editor_script.replace(/\\1/g, '\\\\1');
	// json_editor_script = json_editor_script.replace(/\\2/g, '\\\\2');

	// // change octal escape sequences to unicode escape sequences
	// json_editor_script = json_editor_script.replace(/\u2028/g, '\\u2028')
	// 									   .replace(/\u2029/g, '\\u2029');

	// // Replace single quotes with escaped single quotes
	// json_editor_script = json_editor_script.replace(/(?<!\\)'/g, '\\\'');
	//
	// // replace \n with \\n
	// json_editor_script = json_editor_script.replace(/\n/g, '\\n');

	// // decode json_editor_script
	// json_editor_script = JSON.stringify(json_editor_script);

	// //open src/content.js and replace the {{SCRIPT}} placeholder with the content of modified-json-editor.js and save to build-chromium/content.js
	// fs.readFile('src/content.js', 'utf8', (err, content_script) => {
	// 	if (err)
	// 	{
	// 		console.error(err);
	// 		return;
	// 	}
	//
	// 	// Replace the placeholder with the content of modified-json-editor.js
	// 	const newModifiedContent = content_script.replace('/* {{SVELTE_JSON_EDITOR_SCRIPT}} */', json_editor_script);
	//
	// 	fs.writeFile('build-chromium/content.js', newModifiedContent, 'utf8', (err) => {
	// 		if (err)
	// 		{
	// 			console.error(err);
	// 			return;
	// 		}
	// 		console.log('File build-chromium/content.js created successfully!');
	// 	});
	// });
});