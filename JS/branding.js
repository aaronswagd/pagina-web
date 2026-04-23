const brands = [

`
<div class="brand-close" onclick="closeBrand()">✕</div>

<h2>Golden Bangtan</h2>
<p>Identidad inspirada en la conexión emocional entre artista y fandom.</p>

<div class="brand-section">
<h4>Concepto</h4>
<p>Exclusividad y pertenencia.</p>
</div>

<div class="brand-section">
<h4>Paleta</h4>
<div class="brand-palette">
<div class="brand-color" style="background:#0a0a0a"></div>
<div class="brand-color" style="background:#c6a96b"></div>
<div class="brand-color" style="background:#f5f5f5"></div>
</div>
</div>

<div class="brand-section">
<h4>Tipografía</h4>
<div class="brand-typo brand-serif">Playfair Display</div>
<div class="brand-typo brand-sans">Inter</div>
</div>

<img src="img/mockup1.jpg" class="brand-mockup">
`,

`
<div class="brand-close" onclick="closeBrand()">✕</div>

<h2>Visual Studio</h2>
<p>Branding minimalista enfocado en claridad visual.</p>

<div class="brand-section">
<h4>Concepto</h4>
<p>Orden y estética editorial.</p>
</div>

<div class="brand-section">
<h4>Paleta</h4>
<div class="brand-palette">
<div class="brand-color" style="background:#fff"></div>
<div class="brand-color" style="background:#1c1c1c"></div>
<div class="brand-color" style="background:#888"></div>
</div>
</div>

<img src="img/mockup2.jpg" class="brand-mockup">
`

];

function openBrand(i){
document.getElementById("brandPanel").innerHTML = brands[i];
document.getElementById("brandPanel").classList.add("active");
}

function closeBrand(){
document.getElementById("brandPanel").classList.remove("active");
}
