import cennikData from "../data/cennik.json" assert { type: "json" };

const init = async () => {
	const cennikContainer = document.querySelector("#cennikContainer");
	for (const kategoria in cennikData) {
		const kategoriaDiv = document.createElement("div");
		kategoriaDiv.classList.add("accordion-item");

		let servicesContent = "";
		for (const usluga in cennikData[kategoria]) {
			const uslugaContent = `
				<li class="row ${cennikData[kategoria][usluga] == "" ? "text-muted" : ""}">
					<span class="ps-4 action col-12 col-md-9">
						${usluga}
					</span> 
					<span class="ps-4 price col-12 col-md-3 d-flex justify-content-end align-items-end">
						${cennikData[kategoria][usluga]}
					</span>
				</li>
			`;
			servicesContent += uslugaContent;
		}
		const serializedKategoria = kategoria.replace(/\s/g, "");
		const kategoriaContent = `
			<div class="accordion-header" id="heading${serializedKategoria}">
				<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${serializedKategoria}" aria-expanded="false" aria-controls="collapse${serializedKategoria}">
					${kategoria}
				</button>
			</div>
			<div id="collapse${serializedKategoria}" class="accordion-collapse collapse" aria-labelledby="heading${serializedKategoria}" data-bs-parent="#cennikContainer">
				
				<ul class="accordion-body mb-0">
					${servicesContent}
				</ul>
				
			</div>
		`;

		kategoriaDiv.innerHTML = kategoriaContent;

		cennikContainer.appendChild(kategoriaDiv);
	}
};

init();
