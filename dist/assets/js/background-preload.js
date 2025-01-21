/* eslint-disable no-undef */
if (chrome && chrome.storage) {
	chrome.storage.local.get("background-data", function (data) {
		if (data["background-data"]?.image?.mainImage) {
			const imageUrl = data["background-data"].image.mainImage;
			document.documentElement.style.backgroundImage = `url(${imageUrl})`;
			document.documentElement.style.backgroundSize = "cover";
			document.documentElement.style.backgroundPosition = "center";
			document.documentElement.style.backgroundRepeat = "no-repeat";
		}
	});
}