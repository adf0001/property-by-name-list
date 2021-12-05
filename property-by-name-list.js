
// property-by-name-list @ npm, get/set object property by name list.

//module.exports = function ( obj, nameList [, value [, deleteValue ] ] )
module.exports = function (obj, nameList, value, deleteValue) {
	if (typeof nameList === "string") nameList = [nameList];

	var i, imax = nameList.length - 1, nli, item;
	//path
	for (i = 0; i < imax; i++) {
		nli = nameList[i];
		item = obj[nli];
		if (!item) item = obj[nli] = {};
		obj = item;
	}
	//item
	if (deleteValue) {
		delete obj[nameList[imax]];
	}
	else if (typeof value !== "undefined") {
		return obj[nameList[imax]] = value;	//last, set
	}
	else {
		return obj[nameList[imax]];	//last, get
	}
}
