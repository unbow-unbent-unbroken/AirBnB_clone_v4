/* document.ready(function () {
	const amenities = {};
	$("li input[type=checkbox]").change(function () {
		if (this.checked) {
			amenities[this.dataset.name] = this.dataset.id;
		} else {
			delete amenities[this.dataset.name];
		}
		$(".amenities h4").text(Object.keys(amenities).sort().join(", "));
	});
}); */

$(document).ready(function () {
  // Listen for changes on each input checkbox
  $('input[type="checkbox"]').change(function () {
    const selectedAmenities = [];

    // Iterate over each checked checkbox
    $('input[type="checkbox"]:checked').each(function () {
      const amenityId = $(this).data('id');
      const amenityName = $(this).data('name');
      selectedAmenities.push({ id: amenityId, name: amenityName });
    });

    // Update the h4 tag with the list of selected amenities
    let amenitiesText = '';
    selectedAmenities.forEach(function (amenity) {
      amenitiesText += amenity.name + ', ';
    });
    amenitiesText = amenitiesText.slice(0, -2); // Remove trailing comma and space

    // Update the text of the h4 tag
    $('#selected-amenities').text(amenitiesText);

    // If no amenities are selected, clear the text
    if (selectedAmenities.length === 0) {
      $('#selected-amenities').text('');
    }
  });
});
