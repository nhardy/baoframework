import { $ } from "./Core"
import View from "./View"

class Meta extends View
{
	nvp:any;
	constructor()
	{
		super();
		this.$readMetaTags();
	}

	$get(key)
	{
		if (this.nvp[key] !== undefined) return this.nvp[key];
		return this.nvp["bao/" + key];
	}

	$set(key, value)
	{
		if (key.indexOf("bao/") === 0) {
			if (this.nvp[key] !== undefined) {
				this.nvp[key] = value;
				return;
			}
			key = key.substring(4);
		}
		this.nvp[key] = value;
	}

	$readMetaTags()
	{
		let tags = document.getElementsByTagName("meta");
		this.nvp = [];
		for (let i = 0; i < tags.length; i++) {
			let tag = tags[i];
			if (tag.attributes) {
				let name = tag.getAttribute("name");
				if (name) {
					let content = tag.getAttribute("content");
					if (name.indexOf("bao/") === 0) {
						this.nvp[name] = content;
					}
				}
			}
		}
	}

	$exclusions()
	{
		return super.$exclusions().concat(["focus"]);
	}
}

export default Meta;
$.register("bao/metaConfig", Meta, null);
