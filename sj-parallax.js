// PARALLAX PLUGIN BY WEB-SJ

var parlax = new function() {
    this.elements = [];

    this.init = function() {
        parlax.update(); // update once to get inplace
        return true;
    }

    this.update = function() {
        for (x=0; x<parlax.elements.length; x++) {
            var scroll = document.body.scrollTop;
            var cur = parlax.elements[x];
            var rect = cur.getBoundingClientRect();
            var from = cur.dataset.from || 'center';

            if (cur.dataset.type == 'fixedheader') {
                // fixedheader option
                if (scroll < rect.height + rect.top && scroll > rect.top) {
                    var dataoffset = parseFloat(cur.dataset.offset) || 10;
                    var offset = parseFloat(dataoffset) / 100;
                    var relativemax = rect.height / 2 + rect.top
                    var relativecurrent = scroll - rect.top - rect.height / 2;
                    var percentage = relativecurrent / relativemax * 100;

                    if (from == 'bottom') {
                        cur.style['background-position-y'] = "calc(100% + " + ((offset)*percentage) + "px)";

                    }else if (from == 'center') {
                        cur.style['background-position-y'] = "calc(50% + " + ((offset)*percentage) + "px)";

                    }else if (from == 'top') {
                        cur.style['background-position-y'] = "calc(0% + " + ((offset)*percentage) + "px)";
                    }

                    //cur.style['background-position-y'] = "calc(50% + " + ((offset)*percentage) + "px)";
                }

            } else if (cur.dataset.type == 'normal') {
                //console.log(rect);
                if (rect.top+rect.height > 0 && rect.top < screen.height) {
                    var dataoffset = parseFloat(cur.dataset.offset) || 10;
                    var offset = parseFloat(dataoffset);
                    var relativemax = (screen.height);
                    var relativecurrent = rect.top + rect.height / 2;
                    var percentage = ((relativecurrent / relativemax) - .5) * -2;
                    cur.style['transform'] = 'translateY(' + percentage * offset + 'px)';
                }
            } else if (cur.dataset.type == 'background') {
                if (rect.top+rect.height > 0 && rect.top < screen.height) {
                    var dataoffset = parseFloat(cur.dataset.offset) || 10;
                    var offset = parseFloat(dataoffset);
                    var relativemax = (screen.height);
                    var relativecurrent = rect.top + rect.height / 2;
                    var percentage = ((relativecurrent / relativemax) - .5) * -2;
                    // cur.style['transform'] = 'translateY(' + percentage * offset + 'px)';

                    if (from == 'bottom') {
                        cur.style['background-position-y'] = 'calc(100% + ' + percentage * offset + 'px)';
                    } else if (from == 'center') {
                        cur.style['background-position-y'] = 'calc(50% + ' + percentage * offset + 'px)';
                    } else if (from == 'top') {
                        cur.style['background-position-y'] = 'calc(0% + ' + percentage * offset + 'px)';
                    }

                    // cur.style['background-position-y'] = 'calc(50% + ' + percentage * offset + 'px)';
                }
            } else if (cur.dataset.type == 'fixedbackground') {
                var dataoffset = parseFloat(cur.dataset.offset) || 10;
                var offset = parseFloat(dataoffset);
                var h = document.documentElement,
                    b = document.body,
                    st = 'scrollTop',
                    sh = 'scrollHeight';
                var percentage = h[st]||b[st] / ((h[sh]||b[sh]) - h.clientHeight);
                console.log(percentage);
                if (from == 'bottom') {
                    cur.style['background-position-y'] = 'calc(100% + ' + (percentage - .5) * offset + 'px)';

                } else if (from == 'center') {
                    cur.style['background-position-y'] = 'calc(50% + ' + (percentage - .5) * offset + 'px)';

                } else if (from == 'top') {
                    cur.style['background-position-y'] = 'calc(0% + ' + (percentage - .5) * offset + 'px)';

                }
                // cur.style['background-position-y'] = 'calc(50% + ' + (percentage - .5) * offset + 'px)';
            }
        }
        return true;
    }
}

$(document).ready(function() {
    parlax.elements = document.getElementsByClassName('sj-parallax');
    $(document).on('scroll', function() {
        parlax.update(); // Page is scrolling and have to be updated
    });
    parlax.init(); // Initialize parallax
});
