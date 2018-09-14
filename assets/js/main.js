(function(){
'use strict';
var _Blog = window._Blog || {};

_Blog.changeTitle = function() {

    var currentTitle = document.title;
    window.onblur = function() {
        document.title = 'I miss you!（＞﹏＜）';
    }
    window.onfocus = function() {
        document.title = currentTitle;
    }
};

_Blog.toggleTheme = function() {
    const currentTheme = window.localStorage && window.localStorage.getItem('theme')
    const themeSwitchEL = document.querySelector('.theme-switch')
    const isDark = currentTheme === 'dark'
    document.body.classList.toggle('dark-theme', isDark)

    themeSwitchEL.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme')
        window.localStorage &&
            window.localStorage.setItem(
                'theme',
                document.body.classList.contains('dark-theme') ? 'dark' : 'light',
            )
    })
}

_Blog.toggleMobileMenu = function(){
    const menuToggle = document.querySelector('.menu-toggle')
    const mobileMenu = document.querySelector('#mobile-menu')
    menuToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('active')
        menuToggle.classList.toggle('active')
    })
}

_Blog.toggleTheme()
_Blog.changeTitle()
_Blog.toggleMobileMenu()
}());