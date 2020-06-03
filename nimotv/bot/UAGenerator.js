"use strict";var UAGenerator=function(){this.isArray=function(e){return"[object Array]"===Object.prototype.toString.call(e)},this.isString=function(e){return"string"==typeof e},this.isUndefined=function(e){return void 0===e},this.get=function(e){return this.isArray(e)?e[Math.floor(Math.random()*e.length)]:null},this.patterns={locales:["en-(US|AU|CA|IN|IE|MT|NZ|PH|SG|ZA|GB|US)"],net_clr:{v1:["( \\.NET CLR 1\\.[0-1]\\.[4-5]07[0-5][0-9];|)"],v2up:["( \\.NET CLR [2-3]\\.[1-8]\\.[3-5]07[0-9][0-9];|)"]},media_server:["( Media Center PC [4-6]\\.0;|)"],windows:["Windows NT (6\\.[1-3]|10\\.0)"],macos:{v10_blink:["Intel Mac OS X 10_(1[0-4])_[0-4]"],v10_firefox:["Intel Mac OS X 10\\.(1[0-4])"]},applewebkit:["AppleWebKit/(60[1-5]\\.[1-7]\\.[1-8])","AppleWebKit/(53[5-8]\\.[1-2][0-9]\\.[1-3][0-9])"],browsers_versions:{chrome:["(71\\.0\\.3578|72\\.0\\.3626|73\\.0\\.3683|74\\.0\\.3690)\\.(?:[89]\\d|1[0-4]{2})"],safari:["1[12]\\.[0-1]\\.[1-5]"],firefox:["6[04-7]\\.0"],opera:["4[4-6]\\.0\\.2[1-3][0-9][0-9]\\.([1-2]|)[1-9][0-9]"],edge:["Chrome/52\\.0\\.2743\\.116 Safari/537\\.36 Edge/15\\.15063","Chrome/58\\.0\\.3029\\.110 Safari/537\\.36 Edge/16\\.16299","Chrome/64\\.0\\.3282\\.140 Safari/537\\.36 Edge/17\\.17134","Chrome/64\\.0\\.3282\\.140 Safari/537\\.36 Edge/18\\.17763"]}},this.useragents={ie:{v6:{name:"Internet Explorer 6",regexp:["Mozilla/4\\.0 \\(compatible; MSIE 6\\.0; Windows NT 5\\.1;( SV1;||)"+this.get(this.patterns.net_clr.v2up)+" "+this.get(this.patterns.locales)+"\\)"]},v7:{name:"Internet Explorer 7",regexp:["Mozilla/4\\.0 \\((compatible|compatible|Windows; U); MSIE 7\\.0; Windows NT (5\\.1|6\\.0);( WOW64;|)"+this.get(this.patterns.net_clr.v1)+this.get(this.patterns.media_server)+" InfoPath\\.[1-3]; "+this.get(this.patterns.locales)+"\\)"]},v8:{name:"Internet Explorer 8",regexp:["Mozilla/4\\.0 \\(compatible; MSIE 8\\.0; Windows NT (5\\.1|6\\.[01]); Trident/4\\.0; (WOW64|WOW64|GTB7\\.[2-6]); InfoPath\\.[2-3];( SV1;|)"+this.get(this.patterns.net_clr.v1)+" "+this.get(this.patterns.locales)+"\\)"]},v9:{name:"Internet Explorer 9",regexp:["Mozilla/5\\.0 \\((compatible|Windows; U); MSIE 9\\.0; Windows NT 6\\.[01]; (Win64; x64; |WOW64; |)Trident/5\\.0;"+this.get(this.patterns.net_clr.v2up)+this.get(this.patterns.media_server)+"( Zune 4\\.[0-7];|||)( \\.NET4\\.0(C|E);) "+this.get(this.patterns.locales)+"\\)"]},v10:{name:"Internet Explorer 10",regexp:["Mozilla/5\\.0 \\(compatible; MSIE 10\\.0; Windows NT 6\\.[12];( InfoPath\\.[2-3];|)"+this.get(this.patterns.net_clr.v2up)+" (WOW64; |)Trident/6\\.0(; "+this.get(this.patterns.locales)+"|)\\)"]},v11:{name:"Internet Explorer 11",regexp:["Mozilla/5\\.0 \\("+this.get(this.patterns.windows)+"; (?:WOW64; )?Trident/7\\.0; rv:11\\.0\\) like Gecko"]}},edge:{desktop:{name:"Edge on Windows",regexp:["Mozilla/5\\.0 \\(Windows NT 10\\.0; Win64; x64\\) AppleWebKit/537\\.36 \\(KHTML, like Gecko\\) "+this.get(this.patterns.browsers_versions.edge)]},xbox:{name:"Edge on Xbox",regexp:["Mozilla/5\\.0 \\(Windows NT 10\\.0; Win64; x64; Xbox; Xbox One\\) AppleWebKit/537\\.36 \\(KHTML, like Gecko\\) "+this.get(this.patterns.browsers_versions.edge)]}},chrome:{win:{name:"Chrome on Windows",regexp:["Mozilla/5\\.0 \\("+this.get(this.patterns.windows)+"(; Win64; x64|; WOW64|)\\) AppleWebKit/537\\.36 \\(KHTML, like Gecko\\) Chrome/("+this.get(this.patterns.browsers_versions.chrome)+") Safari/537\\.36"]},mac:{name:"Chrome on Mac",regexp:["Mozilla/5\\.0 \\(Macintosh; "+this.get(this.patterns.macos.v10_blink)+"\\) AppleWebKit/537\\.36 \\(KHTML, like Gecko\\) Chrome/("+this.get(this.patterns.browsers_versions.chrome)+") Safari/537\\.36"]},linux:{name:"Chrome on Linux",regexp:["Mozilla/5\\.0 \\(X11;( U; | )Linux (x86_64|i686)\\) AppleWebKit/537\\.36 \\(KHTML, like Gecko\\) Chrome/("+this.get(this.patterns.browsers_versions.chrome)+") Safari/537\\.36"]}},firefox:{win:{name:"Firefox on Windows",regexp:["Mozilla/5\\.0 \\("+this.get(this.patterns.windows)+"; (WOW64|Win64); rv:("+this.get(this.patterns.browsers_versions.firefox)+")\\) Gecko/20100101 Firefox/(\\3)"]},mac:{name:"Firefox on Mac",regexp:["Mozilla/5\\.0 \\(Macintosh;( U; | )"+this.get(this.patterns.macos.v10_firefox)+"; rv:("+this.get(this.patterns.browsers_versions.firefox)+")\\) Gecko/20100101 Firefox/(\\3)"]},linux:{name:"Firefox on Linux",regexp:["Mozilla/5\\.0 \\(X11; (NetBSD i686|Linux i686|Linux x86_64|Ubuntu; Linux|SunOS sun4u|Gentoo); rv:("+this.get(this.patterns.browsers_versions.firefox)+")\\) Gecko/20100101 Firefox/(\\2)"]},android:{name:"Firefox on Android",regexp:["Mozilla/5\\.0 \\(Android (?:6\\.0(?:\\.1)?|7\\.(?:0|1(?:\\.[12])?)|8\\.[01]|9\\.0); Mobile; rv:("+this.get(this.patterns.browsers_versions.firefox)+")\\) Gecko/\\1 Firefox/\\1"]}},safari:{mac:{name:"Safari on Mac",regexp:["Mozilla/5\\.0 \\(Macintosh;( U; | )"+this.get(this.patterns.macos.v10_blink)+"; "+this.get(this.patterns.locales)+"\\) "+this.get(this.patterns.applewebkit)+" \\(KHTML, like Gecko\\) Version/"+this.get(this.patterns.browsers_versions.safari)+" Safari/(\\4)"]},iphone:{name:"Safari on iPhone",regexp:["Mozilla/5\\.0 \\(iPhone; U; CPU iPhone OS 11_[0-3]_[0-9] like Mac OS X; "+this.get(this.patterns.locales)+"\\) "+this.get(this.patterns.applewebkit)+" \\(KHTML, like Gecko\\) Version/"+this.get(this.patterns.browsers_versions.safari)+" Mobile/8(J|F|C)[1-4](8a|90|) Safari/6533\\.18\\.5"]},ipad:{name:"Safari on iPad",regexp:["Mozilla/5\\.0 \\(iPad;( U;|) CPU OS 11_[0-3](_2|) like Mac OS X(; "+this.get(this.patterns.locales)+")\\) "+this.get(this.patterns.applewebkit)+" \\(KHTML, like Gecko\\) Version/"+this.get(this.patterns.browsers_versions.safari)+" Mobile/8(J|F|C)[1-4](8a|90|) Safari/(\\5)"]}},opera:{win:{name:"Opera on Windows",regexp:["Mozilla/5\\.0 \\("+this.get(this.patterns.windows)+"(; Win64; x64|; WOW64|)\\) AppleWebKit/537\\.36 \\(KHTML, like Gecko\\) Chrome/("+this.get(this.patterns.browsers_versions.chrome)+") Safari/537\\.36 OPR/"+this.get(this.patterns.browsers_versions.opera)]},mac:{name:"Opera on Mac",regexp:["Mozilla/5\\.0 \\(Macintosh; "+this.get(this.patterns.macos.v10_blink)+"\\) AppleWebKit/537\\.36 \\(KHTML, like Gecko\\) Chrome/("+this.get(this.patterns.browsers_versions.chrome)+") Safari/537\\.36 OPR/"+this.get(this.patterns.browsers_versions.opera)]},linux:{name:"Opera on Linux",regexp:["Mozilla/5\\.0 \\(X11;( U; | )Linux (x86_64|i686)\\) AppleWebKit/537\\.36 \\(KHTML, like Gecko\\) Chrome/("+this.get(this.patterns.browsers_versions.chrome)+") Safari/537\\.36 OPR/"+this.get(this.patterns.browsers_versions.opera)]}}},this.randexp=function(e){if("undefined"==typeof RandExp)throw new Error('"RandExp" component must be included first');return this.isString(e)?new RandExp(e).gen():!!console.error("regexp must be string")},this.getAllByKeyName=function(e,t){var s=[];return this.recursive=function(e,t){for(var i in e)"object"!=typeof e[i]||this.isArray(e[i])||null===e[i]?i===t&&s.push(e[i]):this.recursive(e[i],t)},this.recursive(e,t),s},this.testAllRegexp=function(){var e=this.getAllByKeyName(this.useragents,"regexp");if(this.isArray(e)){var t=e.length;if(0<t)for(var i=0;i<t;i++){var s=e[i],r=s.length;console.info("Testing regexps ("+r+') "'+s+'"');for(var n=0;n<r;n++){console.log("> Generate value for regexp: "+s[n]);for(var o=0;o<9;o++)console.log(">> Generated value: "+this.randexp(s[n]))}}}else console.error("Regexps variable must be an array and dont be empty",e);return null},this.generate=function(e){this.isString(e)&&(e=[e]),this.isArray(e)||(e=[]),e.length<=0&&(e=["*"]);for(var t=[],i=0,s=e.length;i<s;i++){if("*"===e[i])return this.randexp(this.get(this.get(this.getAllByKeyName(this.useragents,"regexp"))));var r,n,o=e[i].split("_");!this.isUndefined(o[0])&&this.isString(o[0])&&(r=o[0]),!this.isUndefined(o[1])&&this.isString(o[1])&&(n=o[1]),this.isUndefined(r)||this.isUndefined(n)||this.isUndefined(this.useragents[r][n])||t.push(this.get(this.useragents[r][n].regexp))}return 0<t.length?this.randexp(this.get(t)):!!console.error("User-Agent patterns not found")}};