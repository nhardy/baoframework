import { $ } from "./Core"
import View from "./View"

class DataStore extends View
{
	obtype = "datastore";

	constructor()
	{
		super();
	}

	$set(key, data)
	{
		// do we want to check to see if the data has changed or not?
		this.$broadcastDataChanges(key, data);
	}

	$setMany(obj)
	{
		for (let key in obj) {
			this.$broadcastDataChanges(key, obj[key]);
		}
	}

	$broadcastDataChanges(key, data, node?)
	{
		if (!node) node = document.body;
		var child:any = node.firstChild;
		while (child) {
			if (child["stitched"]) {
				let ds = child.getAttribute("data-source");
				try {
					if (ds === key) child.$setData(data);
				} catch (e) {
					console.log("broadcastData exception: " , e);
				}
			}
			this.$broadcastDataChanges(key, data, child);
			child = child.nextSibling;
		}
	}

	$exclusions()
	{
		return super.$exclusions().concat(["broadcastDataChanges","focus"]);
	}
}

export default DataStore;
$.register("bao/dataStore", DataStore, null);
