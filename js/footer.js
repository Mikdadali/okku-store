 	var $w = jQuery.noConflict();
	$w(document).ready(function(){
	//Right Click Protection
	//$w(document).bind("contextmenu",function(e){ return false;});
	
	//Content Area Mods
	$w(".pagecontainer > table:eq(1) tr:first td:first").addClass("estorepower-background");
	// $w("estorepower-background").attr("id","estorepower-background-main1"); // ID added
	$w(".estorepower-background table:eq(1)").addClass("estorepower-content");
	
	//Getting and Setting Store Categories
	if($w("#estorepower-categories").length > 0) {
		if($w("#LeftPanel .lcat").length > 0) {
			$w("#estorepower-categories").html($w("#LeftPanel .lcat").html());
		}
		$w("#estorepower-categories ul[class=lev1]").find("li:last").addClass("estorepower-lastitem");
	}
	
	//Search Box
	var stxt = $w("#estorepower-search #estorepower-input").find("input[class=v4sbox]").val();
	$w("#estorepower-search #estorepower-input").find("input[class=v4sbox]").focus(function(){
		if($w("#estorepower-search #estorepower-input").find("input[class=v4sbox]").val() == stxt) {
			$w("#estorepower-search #estorepower-input").find("input[class=v4sbox]").val("");
		}
	});
	$w("#estorepower-search #estorepower-input").find("input[class=v4sbox]").blur(function(){
		if($w("#estorepower-search #estorepower-input").find("input[class=v4sbox]").val() == "") {
			$w("#estorepower-search #estorepower-input").find("input[class=v4sbox]").val(stxt);
		}
	});
	$w("#estorepower-search #estorepower-submit").find("input").click(function(){
		if($w("#estorepower-search #estorepower-input").find("input[class=v4sbox]").val() == stxt) {
			$w("#estorepower-search #estorepower-input").find("input[class=v4sbox]").val("");
		}
	});
	
	
	//Footer
	
	
	var d = new Date();
	var footer = '\n\r<footer><div class="fixedWidth"><div class="org-quick-sect"><ul><li class="logo-wrapper"><div class="org-inner-wrappe"><a href="#" target="_blank"><img src="https://mikdadali.github.io/okku-store/images/logo.png" alt="#"></a></div></li><li class="quicklink"><div class="org-inner-wrappe"><h3>Useful Links</h3><div class="quicklink-inner-wrappe"><ul><li><a href="#" target="_blank">Store Home</a></li><li><a href="#" target="_blank">About Us</a></li><li><a href="#" target="_blank">Payment</a></li></ul><ul><li><a href="#" target="_blank">Shipping</a></li><li><a href="#" target="_blank">Returns</a></li><li><a href="#" target="_blank">Feedback</a></li></ul><ul><li><a href="#" target="_blank">New Arrivals</a></li><li><a href="#" target="_blank">Ending soon</a></li><li><a href="#" target="_blank">Contact Us</a></li></ul><div class="clear"></div></div></div></li><li class="pay-pal-section-wrapper"><div class="org-inner-wrappe"><h3>Payment Options</h3><img src="https://mikdadali.github.io/okku-store/images/pay-pal.png" alt="#"></div></li><li class="money-back-section-wrapper"><div class="org-inner-wrappe"><h3>Shop With Confidence</h3><img src="https://mikdadali.github.io/okku-store/images/money-bank.png" alt="#"></div></li></ul><div class="clear"></div></div><div class="org-copyright"><div class="org-bottom-footer"><ul><li> Copyright ©2017,<span>Okku&39;s</span> All rights reserved.</li></ul><div class="clear"></div></div></div><div class="clear"></div></div></footer>';
	{
		if($w(".estorepower-content").length > 0) {
			$w(".estorepower-content").after(footer);			
		}
	}

	
	// Prodcuts
	//$w.post("http://www.estorepower.com/estore/lux-market/store/Feature-products/get_item.php", function(data){
		//$w("#Feature-products").html(data);
	//});
	
	//$w.post("http://www.estorepower.com/estore/lux-market/store/Feature-products/get_item-best_match.php", function(data){
		//$w("#best_match-products").html(data);
	    //});

	$w(document).ready(function () {
	    $w('.bxslider').bxSlider({
	        pager: false,
	        auto: true
	    });
	});

});



	


// for hide blank boxes on category page
$w(window).load(function(){
$w(".pview .gallery").has('br').hide();
});



