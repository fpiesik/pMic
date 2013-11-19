function geoplugin_request() { return '188.96.67.52';} 
function geoplugin_status() { return '200';} 
function geoplugin_credit() { return 'Some of the returned data includes GeoLite data created by MaxMind, available from <a href=\\\'http://www.maxmind.com\\\'>http://www.maxmind.com</a>.';} 
function geoplugin_city() { return 'Bremen';} 
function geoplugin_region() { return 'Bremen';} 
function geoplugin_regionCode() { return '03';} 
function geoplugin_regionName() { return 'Bremen';} 
function geoplugin_areaCode() { return '0';} 
function geoplugin_dmaCode() { return '0';} 
function geoplugin_countryCode() { return 'DE';} 
function geoplugin_countryName() { return 'Germany';} 
function geoplugin_continentCode() { return 'EU';} 
function geoplugin_latitude() { return '53.083302';} 
function geoplugin_longitude() { return '8.8';} 
function geoplugin_currencyCode() { return 'EUR';} 
function geoplugin_currencySymbol() { return '&#8364;';} 
function geoplugin_currencySymbol_UTF8() { return '€';} 
function geoplugin_currencyConverter(amt, symbol) { 
	if (!amt) { return false; } 
	var converted = amt * 0.7407; 
	if (converted <0) { return false; } 
	if (symbol === false) { return Math.round(converted * 100)/100; } 
	else { return '&#8364;'+(Math.round(converted * 100)/100);} 
	return false; 
} 
