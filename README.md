# property-by-name-list
get/set object property by name list

# Install
```
npm install property-by-name-list
```

# Usage & Api
```javascript

var property_by_name_list = require("property-by-name-list");

var obj = {};
//property_by_name_list( obj, nameList [, value [, deleteValue ] ] )
property_by_name_list(obj, ["a", "b", "c"], "ddd");		//set

property_by_name_list(obj, ["a", "b", "e"], "eee");
property_by_name_list(obj, ["a", "b", "e"], null, true);	//delete

obj.a.b.c === "ddd" &&
	property_by_name_list(obj, ["a", "b", "c"]) === "ddd" &&		//get
	!("e" in obj.a.b)

```
