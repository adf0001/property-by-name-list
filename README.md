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
//property_by_name_list( obj, nameList [, value] )
property_by_name_list(obj, ["a", "b", "c"], "ddd");		//set

obj.a.b.c === "ddd" &&
	property_by_name_list(obj, ["a", "b", "c"]) === "ddd"		//get

```
