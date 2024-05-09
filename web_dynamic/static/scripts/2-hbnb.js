/*document.ready(function () {
	const amenities = {};
	$("li input[type=checkbox]").change(function () {
		if (this.checked) {
			amenities[this.dataset.name] = this.dataset.id;
		} else {
			delete amenities[this.dataset.name];
		}
		$(".amenities h4").text(Object.keys(amenities).sort().join(", "));
	});
});*/

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

      $('selected-locations').text(amenitiesText);

      if (selectedAmenities.length === 0) {
        $('selected-locations').text('');
      }
    });
/*$(document).ready(function () {
  // Listen for changes on each input checkbox for amenities
  $('input[type="checkbox"][data-type="amenity"]').change(function () {
    updateSelectedItems('amenity');
  });

  // Listen for changes on each input checkbox for locations
  $('input[type="checkbox"][data-type="location"]').change(function () {
    updateSelectedItems('location');
  });

  // Function to update the selected items based on the type (amenity or location)
  function updateSelectedItems (type) {
    const selectedAmenities = [];
    const selectedLocations = [];

    // Iterate over each checked checkbox for amenities
    $('input[type="checkbox"][data-type="amenity"]:checked').each(function () {
      const amenityId = $(this).data('id');
      const amenityName = $(this).data('name');
      selectedAmenities.push({ id: amenityId, name: amenityName });
    });

    // Iterate over each checked checkbox for locations
    $('input[type="checkbox"][data-type="location"]:checked').each(function () {
      const locationId = $(this).data('id');
      const locationName = $(this).data('name');
      selectedLocations.push({ id: locationId, name: locationName });
    });

    // Update the h4 tag with the list of selected amenities
    let amenitiesText = '';
    selectedAmenities.forEach(function (amenity) {
      amenitiesText += amenity.name + ', ';
    });
    amenitiesText = amenitiesText.slice(0, -2); // Remove trailing comma and space
    $('#selected-amenities').text(amenitiesText);

    // Update the h4 tag with the list of selected locations
    let locationsText = '';
    selectedLocations.forEach(function (location) {
      locationsText += location.name + ', ';
    });
    locationsText = locationsText.slice(0, -2); // Remove trailing comma and space
    $('#selected-locations').text(locationsText);
  }
});*/
$.get('http://0.0.0.0:5001/api/v1/status/', function (data) {
  // Check if the status is "OK"
  if (data.status === 'OK') {
    // Add the class "available" to the div#api_status
    $('#api_status').addClass('available');
  } else {
    // Remove the class "available" from the div#api_status
    $('#api_status').removeClass('available');
  }
})
});
