    
/////////////////////////////////>
/*
.::language WinoScript V 0.9 MultiLang::.
Dev: Ibrahim BIDI c 2003-2014
*/
/////////////////////////////////>
//wino datano
var logs = 1;
var wlog = function(log){
if(!logs)return;		
if(!document.all)console.log(log); else alert(log);
}
var idino = function(ids){return document.getElementById(ids)}
/********* end play winoscript loaded***********/


//////////play get script from iframe ////////////

var ids=0;

// gestws include code script wino from Iframe
getCodeWSiframe = function(wino_){
	ids++
	if(wino_ == dbug ){wlog("m3awd"); return};
	dbug = wino_;
//wlog(dbug) ;
   var ifrm = document.createElement("iframe");
      document.body.appendChild(ifrm); 
   with(ifrm){
	   setAttribute("src", "wino/"+ wino_); 
	  // with(style){width = height = 0+"px"; display = "none";}
	   with(style){width = 0+"px"; height = 0+"px"; }
	   onload = function(){
		   wlog("onloaad iframe");
	  // var ids = this.contentWindow.document.body;
//	   var ids=(this.contentWindow || this.contentDocument);
//wlog(ids)

//wlog("play get chrome")
var y=(this.contentWindow || this.contentDocument);
 if (y.document)y=y.document; // else err ;
 this.contentWindow.document.body;
wlog(y.body.innerText);
	   var HtmlInner = y.body.innerText;
	   wlog(HtmlInner)
	   this.parentElement.removeChild(this);

	   if(HtmlInner){
			//wlog(HtmlInner);
			//HtmlInner = winoregex(HtmlInner);
			HtmlInner = winoregexVar(HtmlInner);
			eval(HtmlInner);
			}
		}
	}
}
////////// func winoAtrr load all files.ws attr & include this from iframe
var winoAtrr = function(winoSource){
	var	val = winoSource.replace(/\s*/g, "");
	wlog("winoAtrr load var val = "+val);
	var delimiters=','; 
	var parts = val.split(delimiters);
	for( var i=0;i< parts.length ;i++ ){
		if(parts[i].toString())
		wlog(parts[i].toString() );
		getCodeWSiframe(parts[i].toString());
	}
}
//////// func winoData load script data from 
//////// <script type="winoscript/text" id="wnoscript">wino source</script> & regex this
var winoData = function(HtmlInner){
	wlog(HtmlInner);
   if(HtmlInner){
	//	HtmlInner = winoregex(HtmlInner);
		HtmlInner = winoregexVar(HtmlInner);

		//eval(HtmlInner);
alert(HtmlInner);
		}
}

/*********wino replace *********/
////add 09-02-14
//var codewino = "المتغير , مالم_يتحقق ,توقف";

var getLangWS = function(wlang){
	
	if(wlang)src_ = ("lang\/"+wlang+".json"); else src_ = ("lang\/wino.json");
//creat new function include from wino log
		eval("wlang_"+wlang+" = WinoLang;");
		//eval("var wlang_"+wlang+" = WinoLang;");
	 var json_ = document.createElement("script");
		json_.src =  src_; 
		 document.getElementsByTagName("head")[0].appendChild(json_);
//alert(this.winocode)

}

////////////////
var winoregexVar = function(WinoRegex,VarRegex,switch_Var) {
	wlog("Regex Var winoscript")
	eval('var WReg = /('+VarRegex+')\\s*/g');
	return eval('WinoRegex.replace(WReg, function(match,tag,char) {switch (tag) {'+switch_Var+'}});');
}

var winoregexFunc = function(WinoRegex,FuncRegex,switch_Func) {
	wlog("Regex Function winoscript")
	eval('var WReg = /('+FuncRegex+')\\s*\\(/g');
	return eval('WinoRegex.replace(WReg, function(match,tag,char) {switch (tag) {'+switch_Func+'}});');
}



var codePublic, VarWinoRegex, FuncWinoRegex;

WinoLang = function(data) {
//	wlang_ar = function(data) {
	//alert(this.codewino)
wlog("load lang data");
var VarWino = data.VarWino || [];
//wlog(VarWino);
//play sort Array Var 
var switch_Var = "";
  var VarCodino = [];
  for (var i = 0; i < VarWino.length; i++) {
    var VarRegexl = VarWino[i][0];
    var VarDef = VarWino[i][1];
	wlog(VarDef +"=="+ VarRegexl )
   // var title = entry.title.$t;
    VarCodino.push(VarRegexl);
	switch_Var+= 'case "'+VarRegexl+'": return "'+VarDef+'"; break;'
  }
 VarWinoRegex =  VarCodino.join('|');
	// wlog(switch_Var);


//play sort Array Func

var FuncWino = data.FuncWino || [];
//wlog(VarWino);
//play sort Array Var 
var switch_Func = "";
  var FuncCodino = [];
  for (var i = 0; i < FuncWino.length; i++) {
    var FuncRegexl = FuncWino[i][0];
    var FuncDef = FuncWino[i][1];
	wlog(FuncDef +"=="+ FuncRegexl )
    FuncCodino.push(FuncRegexl);
	switch_Func+= 'case "'+FuncRegexl+'": return "'+FuncDef+'("; break;'
  }
 FuncWinoRegex =  FuncCodino.join('|');

  wlog("load FuncWinoRegex");

  //alert(winoregexFunc(this.codewino,FuncWinoRegex,switch_Func)); // replace alert to Eval 


 wlog("load VarWinoRegex");
 // this.codePublic = VarWinoRegex;
//  alert(FuncWinoRegex(this.codewino,VarWinoRegex,switch_Var)); // replace alert to Eval 
eval(winoregexVar(winoregexFunc(this.codewino,FuncWinoRegex,switch_Func),VarWinoRegex,switch_Var)); // replace alert to Eval 
} 
/////end regexVar
/********* End wino replace *********/

/********* get ***********/
	var الصاين = Math.sin;
	var الكوصاين = Math.cos;
	var الكتابة = document.write;
	var في_كل_من = window.setInterval;
/******function*****/

var المعلم = function(ids,html_){return document.getElementById(ids).innerHTML = html_}

var خد_السنة_كاملة = function(a){return new Date().getFullYear()}
var خد_الساعة = function(a){return new Date().getHours()}
var خد_الدقائق = function(a){return new Date().getMinutes()}
var خد_الثواني = function(a){return new Date().getSeconds()}
var خد_الشهور = function(a){return new Date().getMonth()}

var خد_اليوم = function(a){return new Date().getDay()}
var خد_التاريخ = function(a){return new Date().getDate()}

var تحذير = function(a){alert(a)}
var ⴰⵎⴰⵡⴰⵍ = function(a){alert(a)}




/////////
/*********  play winoscript ***********/

var tag = document.getElementsByTagName("script");
var winoSource=false,winoSrourceData,winoLang;
for(var i = 0; i < tag.length; i++){
	//if attr "wino" is true
	if(tag[i].getAttribute("w-src"))	{
		winoSource= tag[i].getAttribute("w-src");
		if(winoSource)
			winoAtrr(winoSource);
		else 
			wlog("no script wino find & file boot vide ");
	}else{
		
			if(tag[i].getAttribute("id")=="winoscript" || tag[i].getAttribute("type").indexOf("wino")!=-1)	{
			wlog("id winoscript exist")
			winoSrourceDATA = tag[i].innerHTML;
			
			if(winoSrourceDATA){this.codewino = winoSrourceDATA;
			//call Lang WinoScript V Arbic
				//getLangWS("lang\/ar.json");
				getLangWS( tag[i].getAttribute("w-lang"));

			}//winoData(winoSrourceDATA);
		}
	}
}

  
   



