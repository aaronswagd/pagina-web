const projects = [

`
<div class="close" onclick="closePanel()">✕</div>

<h2>Golden Bangtan</h2>

<p>Identidad inspirada en la conexión emocional entre artista y fandom.</p>

<div class="section">
<h4>Concepto</h4>
<p>Exclusividad, pertenencia y narrativa visual basada en símbolos.</p>
</div>

<div class="section">
<h4>Paleta de color</h4>
<div class="palette">
<div class="color" style="background:#0a0a0a"></div>
<div class="color" style="background:#c6a96b"></div>
<div class="color" style="background:#f5f5f5"></div>
</div>
</div>

<div class="section">
<h4>Tipografía</h4>
<div class="typo-sample serif">Playfair Display</div>
<div class="typo-sample sans">Inter Regular</div>
</div>

<div class="section">
<h4>Aplicaciones</h4>
<p>Merchandising, packaging y contenido digital.</p>
</div>

<img src="img/mockup1.jpg" class="mockup">
`,

`
<div class="close" onclick="closePanel()">✕</div>

<h2>Visual Studio</h2>

<p>Branding minimalista enfocado en claridad y elegancia.</p>

<div class="section">
<h4>Concepto</h4>
<p>Orden, precisión y estética editorial contemporánea.</p>
</div>

<div class="section">
<h4>Paleta de color</h4>
<div class="palette">
<div class="color" style="background:#ffffff"></div>
<div class="color" style="background:#1c1c1c"></div>
<div class="color" style="background:#888888"></div>
</div>
</div>

<div class="section">
<h4>Tipografía</h4>
<div class="typo-sample serif">Cormorant</div>
<div class="typo-sample sans">Poppins</div>
</div>

<div class="section">
<h4>Aplicaciones</h4>
<p>Web, editorial y branding digital.</p>
</div>

<img src="img/mockup2.jpg" class="mockup">
`

];

function openProject(index){
  const panel = document.getElementById("panel");
  panel.innerHTML = projects[index];
  panel.classList.add("active");
}

function closePanel(){
  document.getElementById("panel").classList.remove("active");
}
