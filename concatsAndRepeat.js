let theTitle = "Elzero", theDescription = "Elzero web school", theDate = "25/10";

let html =
`<div class = "card">
<h3>
${theTitle}
</h3>
<p>
${theDescription}
</p>
<span>
${theDate}
</span>
</div>`;
let result = html.repeat(4);
document.write(result);
