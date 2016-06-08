// PC端公用UI弹窗组件
(function(w) {
    var yw = yw || {},
        cssURL = './yw.css',
        linkTag = document.getElementsByTagName('link'),
        sum = 0,
        hrefs;

    for (var i = 0; i < linkTag.length; i++) {
        hrefs = linkTag[i].getAttribute('href');
        if (hrefs.indexOf(cssURL) != -1) {
            sum++;
        }
    }

    if (sum == 0) {
        headTag = document.getElementsByTagName('head')[0];
        linkTag = document.createElement('link');
        linkTag.setAttribute('rel', 'stylesheet');
        linkTag.setAttribute('href', cssURL);
        headTag.appendChild(linkTag);
    }

    yw.alert = function(tit, str) {
        if (document.getElementById('alertdiv') == undefined) {
            var tit = tit || '提示',
                str = str || '启用成功！',
                div = document.createElement("div"),
                htmls = '<div class=yw_alert><div class=yw_mask></div><div class=yw_default><div class=yw_hd><span class="yw_tit">' + tit + '</span><a href="javascript:void(0);" class="yw_close">×</a></div><div class=yw_bd><p>' + str + '</p></div><div class=yw_ft><a href="javascript:void(0);" class="yw_btn">知道了</a></div></div></div>';

            div.innerHTML = htmls;

            div.setAttribute('id', 'alertdiv')

            document.getElementsByTagName("body")[0].appendChild(div);

            var ywBtn = document.getElementsByClassName('yw_btn'),
                ywClose = document.getElementsByClassName('yw_close')[0],
                alertdiv = document.getElementById('alertdiv'),
                callback = function() {
                    alertdiv.parentNode.removeChild(alertdiv);
                };

            ywBtn[0].onclick = callback;
            ywClose.onclick = callback;
        }
    };

    yw.confirm = function(tit, str, succ, fail) {
        if (document.getElementById('confirmdiv') == undefined) {
            var tit = tit || '提示',
                str = str || '确定要这样吗？',
                div = document.createElement("div"),
                htmls = '<div class=yw_confirm><div class=yw_mask></div><div class=yw_default><div class=yw_hd><span class="yw_tit">' + tit + '</span><a href="javascript:void(0);" class="yw_close">×</a></div><div class=yw_bd><p>' + str + '</p></div><div class=yw_ft><a href="javascript:void(0);" class="yw_btn">确定</a><a href="javascript:void(0);" class="yw_btn yw_btn_primary">取消</a></div></div></div>';

            div.innerHTML = htmls;

            div.setAttribute('id', 'confirmdiv')

            document.getElementsByTagName("body")[0].appendChild(div);

            var ywBtn = document.getElementsByClassName('yw_btn'),
                ywClose = document.getElementsByClassName('yw_close')[0],
                confirmdiv = document.getElementById('confirmdiv'),
                callback = function() {
                    confirmdiv.parentNode.removeChild(confirmdiv);
                };

            ywBtn[0].onclick = function() {
                callback();
                if (typeof succ == 'function') {
                    succ();
                }
            };

            ywBtn[1].onclick = function() {
                callback();
                if (typeof fail == 'function') {
                    succ();
                }
            };

            ywClose.onclick = callback;
        }
    }

    yw.checkbox = function(tit, list, succ, fail) {
        if (document.getElementById('checkdiv') == undefined) {
            if (list == undefined || !list instanceof Array || list.length == 0) {
                yw.alert('提示', 'look at your array');
                return;
            }

            var tit = tit || '选择',
                listLength = list.length,
                html = '',
                div = document.createElement("div");

            for (var i = 0; i < listLength; i++) {
                html = html + '<p><input type="checkbox" name="checkbox" value="' + i + '">&nbsp;&nbsp;<span>' + list[i] + '</span></p>';
            }

            var htmls = '<div class=yw_checkbox><div class=yw_mask></div><div class=yw_default><div class=yw_hd><span class="yw_tit">' + tit + '</span><a href="javascript:void(0);" class="yw_close">×</a></div><div class=yw_bd><p><form class="yw_checkbox_form" action="">' + html + '</form></p></div><div class=yw_ft><a href="javascript:void(0);" class="yw_btn">确定</a></div></div></div>';

            div.innerHTML = htmls;

            div.setAttribute('id', 'checkdiv')

            document.getElementsByTagName("body")[0].appendChild(div);

            var checkBox = document.getElementsByName('checkbox'),
                ywBtn = document.getElementsByClassName('yw_btn')[0],
                ywClose = document.getElementsByClassName('yw_close')[0],
                checkdiv = document.getElementById('checkdiv'),
                callback = function() {
                    checkdiv.parentNode.removeChild(checkdiv);
                },
                succFn = function() {
                    if (typeof succ == 'function') {
                        succ();
                    }
                },
                failFn = function() {
                    if (typeof fail == 'function') {
                        fail();
                    }
                };

            checkBox[0].setAttribute('checked', 'checked');

            ywBtn.onclick = function() {
                var sum = 0,
                    arr = [];
                for (i = 0; i < listLength; i++) {
                    if (checkBox[i].checked) {
                        sum++;
                    }
                };
                if (sum == 0) {
                    yw.toast('请至少选择一项');
                } else {
                    callback();
                    succFn();
                }
            };

            ywClose.onclick = function() {
                callback();
                failFn();
            };
        }
    }

    yw.radio = function(tit, list, succ, fail) {
        if (document.getElementById('radiodiv') == undefined) {
            if (list == undefined || !list instanceof Array || list.length == 0) {
                yw.alert('提示', 'look at your array');
                return;
            };

            var tit = tit || '选择性别',
                listLength = list.length,
                html = '';

            for (var i = 0; i < listLength; i++) {
                html = html + '<input type="radio" name="radio" value="' + i + '">&nbsp;&nbsp;<span>' + list[i] + '</span>';
            }

            var htmls = '<div class=yw_radio><div class=yw_mask></div><div class=yw_default><div class=yw_hd><span class="yw_tit">' + tit + '</span><a href="javascript:void(0);" class="yw_close">×</a></div><div class=yw_bd><p><form  class="yw_radio_form" action="">' + html + '</form></p></div><div class=yw_ft><a href="javascript:void(0);" class="yw_btn">确定</a></div></div></div>';

            var div = document.createElement("div");

            div.innerHTML = htmls;

            div.setAttribute('id', 'radiodiv')

            document.getElementsByTagName("body")[0].appendChild(div);

            document.getElementsByName('radio')[0].setAttribute('checked', 'checked');

            var ywBtn = document.getElementsByClassName('yw_btn')[0],
                ywClose = document.getElementsByClassName('yw_close')[0],
                radiodiv = document.getElementById('radiodiv'),
                callback = function() {
                    radiodiv.parentNode.removeChild(radiodiv);
                },
                succFn = function() {
                    if (typeof succ == 'function') {
                        succ();
                    }
                },
                failFn = function() {
                    if (typeof fail == 'function') {
                        fail();
                    }
                };

            ywBtn.onclick = function() {
                callback();
                succFn();
            };

            ywClose.onclick = function() {
                callback();
                failFn();
            };
        }
    }

    yw.toast = function(str, icon, s) {
        if (document.getElementById('toastdiv') == undefined) {
            var str = str || '系统繁忙，请稍候再试',
                s = s || '2000',
                iconBg = icon ? 'yw_toast_warn' : 'yw_toast_done',
                div = document.createElement("div"),
                htmls = '<div class="yw_toast"><div class="yw_toast_default"><p class="' + iconBg + '">' + str + '</p></div></div>';

            div.innerHTML = htmls;

            div.setAttribute('id', 'toastdiv');

            document.getElementsByTagName("body")[0].appendChild(div);

            var toastdiv = document.getElementById('toastdiv');

            setTimeout(function() {
                toastdiv.parentNode.removeChild(toastdiv);
            }, s);

        }

    }

    yw.showLoading = function(str) {
        if (document.getElementById('showLoadingdiv') == undefined) {
            var str = str || '数据加载中',
                div = document.createElement("div"),
                htmls = '<div class="yw_loading"><div class="yw_mask"></div><div class="ywork-warp"><img src="./images/y.png" class="ywork1" /><img src="./images/w.png" class="ywork2" /><img src="./images/o.png" class="ywork3" /><img src="./images/r.png" class="ywork4" /><img src="./images/k.png" class="ywork5" /><p>' + str + '</p></div></div>';

            div.innerHTML = htmls;

            div.setAttribute('id', 'showLoadingdiv')

            document.getElementsByTagName("body")[0].appendChild(div);
        }
    }

    yw.hideLoading = function() {
        var showLoadingdiv = document.getElementById('showLoadingdiv');

        if (showLoadingdiv != undefined) {
            showLoadingdiv.parentNode.removeChild(showLoadingdiv);
        }

    }

    w.yw = yw;

})(window);
