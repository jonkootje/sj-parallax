// SJ-PARALLAX COPYRIGHT WEB-SJ 2016
// Made by Sander Jonk 2016 http://www.web-sj.com

// Read README.md for instructions or visit github page.
// Visit http://www.web-sj.com to see sj-parallax in action

var parlax = new function() {
    this.elements = [];
    this.init = function() {
        for (x=0; x<parlax.elements.length; x++) {
            var cur = parlax.elements[x];
            var rect = cur.getBoundingClientRect();
        }
        parlax.update();
        return true;
    }
    this.update = function() {
        for (x=0; x<parlax.elements.length; x++) {
            var scroll = document.body.scrollTop;
            var cur = parlax.elements[x];
            var rect = cur.getBoundingClientRect();
            if (cur.dataset.type == 'fixedheader') {
                if (scroll < rect.height + rect.top && scroll > rect.top) {
                    var dataoffset = parseFloat(cur.dataset.offset) || 10;
                    var offset = parseFloat(dataoffset) / 100;
                    var relativemax = rect.height / 2 + rect.top
                    var relativecurrent = scroll - rect.top - rect.height / 2;
                    var percentage = relativecurrent / relativemax * 100;
                    cur.style['background-position-y'] = "calc(50% + " + ((offset)*percentage) + "px)";
                }
            } else if (cur.dataset.type == 'normal') {
                if (rect.top+rect.height > 0 && rect.top < screen.height) {
                    var dataoffset = parseFloat(cur.dataset.offset) || 10;
                    var offset = parseFloat(dataoffset);
                    var relativemax = (screen.height);
                    var relativecurrent = rect.top + rect.height / 2;
                    var percentage = ((relativecurrent / relativemax) - .5) * -2;
                    cur.style['transform'] = 'translateY(' + percentage * offset + 'px)';
                }
            }
        }
        return true;
    }
}
$(document).ready(function() {
    parlax.elements = document.getElementsByClassName('sj-parallax');
    $(document).on('scroll', function() {
        parlax.update();
    });
    parlax.init();
});
