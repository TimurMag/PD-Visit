function serviceShow(id)
{
	document.getElementById("services").children[id].children[0].hidden = true;
	document.getElementById("services").children[id].children[2].hidden = false;
}

function serviceHide(id)
{
	document.getElementById("services").children[id].children[0].hidden = false;
	document.getElementById("services").children[id].children[2].hidden = true;
}