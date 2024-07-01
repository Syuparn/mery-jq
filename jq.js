function runJq(json, src) {
	var shell = new ActiveXObject('WScript.Shell');
	var cmd = 'jq.exe ' + src;
	
	// trim breaklines
	json = json.replace(/\s/g, '');

	var exec = shell.Exec(cmd);
	exec.StdIn.Write(json);
	exec.StdIn.Close();

	var out = exec.StdOut.ReadLine();
	while (exec.StdOut.AtEndOfStream == false) {
		out += exec.StdOut.ReadLine();
	}
	return out;
}

var json = document.selection.Text;
var src = Prompt("jqで選択範囲を整形", '-c "."');
var modified = runJq(json, src);
document.selection.Text = modified;
