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
	var footer = '\n\r<div class="efusion-wrapcens"><div class="efusion_footerpromo"><div class="footerpromodata"><a tabindex="-1" id="mainContent"></a><h1>We guarantee the safety,security,and privacy of your valuables</h1><img src="images/footerpromoicon.png" alt=""></div></div><div class="efusion-footermain"><div id="efusion-footer"><div id="efusion-footernav-section"><div class="efusion-joinfamily"><div id="efusion-footernav-title">Join our <span>Family</span></div><ul class="efusion-socialmedia"><li><a href="https://www.facebook.com/pages/beanactivecom/1558702571061488" class="socialicon1"></a></li><li><a href="https://twitter.com/bean_active" class="socialicon2"></a></li><li><a href="#" class="socialicon3"></a></li></ul></div><div id="efusion-newsletter"><div id="efusion-footernav-title">Sign up to our <span>Newsletter</span></div><form action="" method="post"><div id="efusion-text">Click here to Subscribe to our Newsletter. Get the all latest News,Updates and Special Offers about OUR STORE.</div><div id="efusion-signup"><input name="submit" type="submit" class="btn-signup" value="JOIN US" width="auto" height="auto"></div></form></div><div id="efusion-footernav"><div id="efusion-footernav-title">Useful <span>Links</span></div><ul class="footernavmargin"><li><a href="#">About Us</a></li><li><a href="#">Payment</a></li><li><a href="#">Shipping</a></li><li><a href="#">Returns</a></li></ul><ul><li><a href="#">Feedback</a></li><li><a href="#">New Arrivals</a></li><li><a href="#">Ending Soon</a></li><li><a href="#">Contact Us</a></li></ul></div></div><div class="efusion-companydata"><div class="efusion-phonefooter">Copyright © 2017, <span>Kojima Australia</span>. All rights reserved.</div><div class="efusion-paymentfooter"><img src="images/footerpayment.png" alt=""></div></div><div class="efusion-clear"></div></div></div></div>';
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



