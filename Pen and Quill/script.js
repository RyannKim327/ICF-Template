let i = 0
let copy = true
let article = () => {
	let title = document.getElementById("title")
	let subtitle = document.getElementById("subtitle")
	let text = document.getElementById("text")
	if(copy){
		let template = `Title: ${title.textContent} - ${subtitle.textContent}\n\n~ ${text.textContent}`
		window.navigator.clipboard.writeText(template)
		i = 0
		document.getElementById("footer").textContent = ""
		copied()
		copy = false
	}
}
let copied = () => {
	let text = "Text Copied"
	if(i < text.length){
		document.getElementById("footer").textContent += text[i]
		i++
		setTimeout(copied, 50)
	}else{
		i = 0
		setTimeout(() => {
			document.getElementById("footer").textContent = ""
			back()
		}, 1500)
	}
}
let back = () => {
	let text = "Immanuel Christian Fellowship"
	if(i < text.length){
		document.getElementById("footer").textContent += text[i]
		i++
		setTimeout(back, 75)
	}else{
		copy = true
	}
}
let divide = () => {
	let txt = document.getElementById("text").textContent.split(/\s/)
	let half = Math.floor(txt.length / 3)
	let part1 = document.createElement("span")
	let part2 = document.createElement("span")
	let part3 = document.createElement("span")
	let a = ""
	let b = 0, c = 0;
	for(; b < half; b++){
		a += txt[b] + " "
	}
	part1.textContent = a
	a = ""
	for(c = b; c < (b + half); c++){
		a += txt[c] + " "
	}
	part2.textContent = a
	a = ""
	for(let d = c; d < (c + half); d++){
		a += txt[d] + " "
	}
	part3.textContent = a
	document.getElementById("text").innerHTML = ""
	document.getElementById("text").appendChild(part1)
	document.getElementById("text").appendChild(part2)
	document.getElementById("text").appendChild(part3)
}
let txt = document.getElementById("text").textContent
let _toggle = document.getElementById("toggle")
_toggle.addEventListener("click", () => {
	let text = document.getElementById("text")
	if(text.classList.value.includes("three-blocks")){
		text.classList.remove("three-blocks")
		text.textContent = txt
		_toggle.textContent = "Three Block Content"
	}else{
		text.classList.add("three-blocks")
		divide()
		_toggle.textContent = "Single Block Content"
	}
})