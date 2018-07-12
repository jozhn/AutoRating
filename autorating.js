// ==UserScript==
// @name         教学质量自动考评
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  教学质量自动考评脚本
// @author       Jozhn
// @require      http://cdn.bootcss.com/jquery/1.8.3/jquery.min.js
// @match        *://zhjw.neu.edu.cn/*
// @supportURL   https://dearjohn.cn
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    $("input").each(function(){
			if($(this).val()=="95"){
				//$(this).attr("checked",true);
                $(this).click();
			   }
		});
    var num = Math.floor(Math.random()*10+1);
    var Score = "Score4_"+String(num)
    $("input[name="+Score+"][value=85]").click();
})();
