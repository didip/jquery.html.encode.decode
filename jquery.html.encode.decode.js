jQuery.extend( {
	isHtmlEncoded: function(str) {
		if(str == null) { return false; }
		if(str.search(/&amp;/g) != -1 || str.search(/&lt;/g) != -1 || str.search(/&gt;/g) != -1) 
			return true; 
		else 
			return false; 
	},

	htmlDecode: function(str) {
   		if($.isHtmlEncoded(str))
     		return str.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>'); 
   		return str; 
	}
});