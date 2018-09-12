jQuery(function($) {

    'use strict';

    var _Blog = window._Blog || {};

    _Blog.prettify = function() {
        $('pre').addClass('prettyprint linenums').attr('style', 'overflow:auto;');
        window.prettyPrint && prettyPrint();
    };

    _Blog.externalUrl = function() {
       $.expr[':'].external = function(obj) {
           return !obj.href.match(/^mailto\:/) &&
               (obj.hostname != location.hostname);
       };
       $('a:external').addClass('external');
       $(".external").attr('target', '_blank');
   }

    $(document).ready(function() {
        _Blog.prettify();
    });
});
