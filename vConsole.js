window.onload = function () {
    var vcSwitch = document.getElementsByClassName('vc-switch');
    vcSwitch[0].style.cursor = 'pointer';
    vcSwitch[0].style.userSelect = 'none';
    for (var i = 0; i < vcSwitch.length; i++) {
        vcSwitch[i].onmousedown = function (e) {
            var e = e || window.event;
            var x = e.clientX - this.offsetLeft;
            var y = e.clientY - this.offsetTop;
            var that = this;
            document.onmousemove = function (e) {
                var e = e || window.event;
                var l = e.clientX - x;
                var t = e.clientY - y;
                if (l < 0) {
                    l = 0;
                } else if (l > document.documentElement.clientWidth - that.offsetWidth) {
                    l = document.documentElement.clientWidth - that.offsetWidth;
                }
                if (t < 0) {
                    t = 0;
                } else if (t > document.documentElement.clientHeight - that.offsetHeight) {
                    t = document.documentElement.clientHeight - that.offsetHeight;
                }
                that.style.left = l + 'px';
                that.style.top = t + 'px';
                that.style.right = 'unset';
                that.style.bottom = 'unset';

                var vconsole = document.getElementById('__vconsole');
                setTimeout(function () {
                    vconsole.className = '';
                }, 300);
            }
            document.onmouseup = function () {
                document.onmousemove = null;
                document.onmouseup = null;
            }
        }
    }
};