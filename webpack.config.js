<!DOCTYPE html>
<!-- saved from url=(0079)https://www.tutorialsteacher.com/typescript/converting-javascript-to-typescript -->
<html><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    
    <meta name="keywords" content="convert javascript to typescript, js to ts, javascript to typescript, typescript, typescript tutorials, free typescript tutorials, online typescript tutorial, Free typescript Tutorials for beginners, learn typescript, learn nodejs, learn, typescript for beginners, typescript tutorials, typescript Basics, typescript step by step, learn typescript from scratch, what is typescript">
    <meta name="description" content="Learn how to convert an existing JavaScript code to TypeScript step by step.">

    
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="color-scheme" content="dark light">
<title> Converting JavaScript to TypeScript</title>
<script src="./webpack.config_files/sdk.js.download" async="" crossorigin="anonymous"></script><script id="facebook-jssdk" src="./webpack.config_files/sdk.js(1).download"></script><script src="./webpack.config_files/pPXHlLb1CGI6YEB-9-_z05e8AO8.js.download"></script><script src="./webpack.config_files/tPAjUEoy7r1Z4pKD3wERlshlDH0.js.download"></script><link rel="preconnect" href="https://cdnjs.cloudflare.com/" crossorigin="">
<link rel="preconnect" href="https://www.facebook.com/" crossorigin="">

<!--[if lt IE 9]>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/respond.js/1.4.2/respond.min.js"></script>
<![endif]-->

<link type="text/css" href="./webpack.config_files/bootstrap.min.css" rel="stylesheet">

<link href="./webpack.config_files/ttstyle.min.css" rel="stylesheet" type="text/css">
<meta property="og:url" content="https://www.tutorialsteacher.com/typescript/converting-javascript-to-typescript">
<meta property="og:type" content="article">
<meta property="og:title" content=" Converting JavaScript to TypeScript">
<meta property="og:image" content="https://www.tutorialsteacher.com/assets/images/fbshare.jpg">



<script src="./webpack.config_files/pghb.tutorialsteacher.com.js.download" type="text/javascript" async=""></script>
<script>
    window.pg = window.pg || []; pg.acq = pg.acq || []; // build consent queue
    pg.acq.push(function () {
        // Global site tag (gtag.js)
        pg.loadJS("https://www.googletagmanager.com/gtag/js?id=UA-33844821-5");
        window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments); }
        gtag('js', new Date());
        gtag('config', 'UA-33844821-5');
    });

</script>
<link rel="stylesheet" href="data:text/css;charset=utf-8;base64,Y2xvdWRmbGFyZS1hcHBbYXBwLWlkPSJhLWJldHRlci1icm93c2VyIl0gewogIGRpc3BsYXk6IGJsb2NrOwogIGJhY2tncm91bmQ6ICM0NTQ4NGQ7CiAgY29sb3I6ICNmZmY7CiAgbGluZS1oZWlnaHQ6IDEuNDU7CiAgcG9zaXRpb246IGZpeGVkOwogIHotaW5kZXg6IDkwMDAwMDAwOwogIHRvcDogMDsKICBsZWZ0OiAwOwogIHJpZ2h0OiAwOwogIHBhZGRpbmc6IC41ZW0gMWVtOwogIHRleHQtYWxpZ246IGNlbnRlcjsKICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lOwogICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7CiAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTsKICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lOwp9CgpjbG91ZGZsYXJlLWFwcFthcHAtaWQ9ImEtYmV0dGVyLWJyb3dzZXIiXVtkYXRhLXZpc2liaWxpdHk9ImhpZGRlbiJdIHsKICBkaXNwbGF5OiBub25lOwp9CgpjbG91ZGZsYXJlLWFwcFthcHAtaWQ9ImEtYmV0dGVyLWJyb3dzZXIiXSBjbG91ZGZsYXJlLWFwcC1tZXNzYWdlIHsKICBkaXNwbGF5OiBibG9jazsKfQoKY2xvdWRmbGFyZS1hcHBbYXBwLWlkPSJhLWJldHRlci1icm93c2VyIl0gYSB7CiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7CiAgY29sb3I6ICNlYmViZjQ7Cn0KCmNsb3VkZmxhcmUtYXBwW2FwcC1pZD0iYS1iZXR0ZXItYnJvd3NlciJdIGE6aG92ZXIsCmNsb3VkZmxhcmUtYXBwW2FwcC1pZD0iYS1iZXR0ZXItYnJvd3NlciJdIGE6YWN0aXZlIHsKICBjb2xvcjogI2RiZGJlYjsKfQoKY2xvdWRmbGFyZS1hcHBbYXBwLWlkPSJhLWJldHRlci1icm93c2VyIl0gY2xvdWRmbGFyZS1hcHAtY2xvc2UgewogIGRpc3BsYXk6IGJsb2NrOwogIGN1cnNvcjogcG9pbnRlcjsKICBmb250LXNpemU6IDEuNWVtOwogIHBvc2l0aW9uOiBhYnNvbHV0ZTsKICByaWdodDogLjRlbTsKICB0b3A6IC4zNWVtOwogIGhlaWdodDogMWVtOwogIHdpZHRoOiAxZW07CiAgbGluZS1oZWlnaHQ6IDE7Cn0KCmNsb3VkZmxhcmUtYXBwW2FwcC1pZD0iYS1iZXR0ZXItYnJvd3NlciJdIGNsb3VkZmxhcmUtYXBwLWNsb3NlOmFjdGl2ZSB7CiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMXB4KTsKICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxcHgpOwp9CgpjbG91ZGZsYXJlLWFwcFthcHAtaWQ9ImEtYmV0dGVyLWJyb3dzZXIiXSBjbG91ZGZsYXJlLWFwcC1jbG9zZTpob3ZlciB7CiAgb3BhY2l0eTogLjllbTsKICBjb2xvcjogI2ZmZjsKfQo="><style type="text/css" data-fbcssmodules="css:fb.css.base css:fb.css.dialog css:fb.css.iframewidget css:fb.css.customer_chat_plugin_iframe">.fb_hidden{position:absolute;top:-10000px;z-index:10001}.fb_reposition{overflow:hidden;position:relative}.fb_invisible{display:none}.fb_reset{background:none;border:0;border-spacing:0;color:#000;cursor:auto;direction:ltr;font-family:"lucida grande", tahoma, verdana, arial, sans-serif;font-size:11px;font-style:normal;font-variant:normal;font-weight:normal;letter-spacing:normal;line-height:1;margin:0;overflow:visible;padding:0;text-align:left;text-decoration:none;text-indent:0;text-shadow:none;text-transform:none;visibility:visible;white-space:normal;word-spacing:normal}.fb_reset>div{overflow:hidden}@keyframes fb_transform{from{opacity:0;transform:scale(.95)}to{opacity:1;transform:scale(1)}}.fb_animate{animation:fb_transform .3s forwards}
.fb_dialog{background:rgba(82, 82, 82, .7);position:absolute;top:-10000px;z-index:10001}.fb_dialog_advanced{border-radius:8px;padding:10px}.fb_dialog_content{background:#fff;color:#373737}.fb_dialog_close_icon{background:url(https://z-p3-static.xx.fbcdn.net/rsrc.php/v3/yq/r/IE9JII6Z1Ys.png) no-repeat scroll 0 0 transparent;cursor:pointer;display:block;height:15px;position:absolute;right:18px;top:17px;width:15px}.fb_dialog_mobile .fb_dialog_close_icon{left:5px;right:auto;top:5px}.fb_dialog_padding{background-color:transparent;position:absolute;width:1px;z-index:-1}.fb_dialog_close_icon:hover{background:url(https://z-p3-static.xx.fbcdn.net/rsrc.php/v3/yq/r/IE9JII6Z1Ys.png) no-repeat scroll 0 -15px transparent}.fb_dialog_close_icon:active{background:url(https://z-p3-static.xx.fbcdn.net/rsrc.php/v3/yq/r/IE9JII6Z1Ys.png) no-repeat scroll 0 -30px transparent}.fb_dialog_iframe{line-height:0}.fb_dialog_content .dialog_title{background:#6d84b4;border:1px solid #365899;color:#fff;font-size:14px;font-weight:bold;margin:0}.fb_dialog_content .dialog_title>span{background:url(https://z-p3-static.xx.fbcdn.net/rsrc.php/v3/yd/r/Cou7n-nqK52.gif) no-repeat 5px 50%;float:left;padding:5px 0 7px 26px}body.fb_hidden{height:100%;left:0;margin:0;overflow:visible;position:absolute;top:-10000px;transform:none;width:100%}.fb_dialog.fb_dialog_mobile.loading{background:url(https://z-p3-static.xx.fbcdn.net/rsrc.php/v3/ya/r/3rhSv5V8j3o.gif) white no-repeat 50% 50%;min-height:100%;min-width:100%;overflow:hidden;position:absolute;top:0;z-index:10001}.fb_dialog.fb_dialog_mobile.loading.centered{background:none;height:auto;min-height:initial;min-width:initial;width:auto}.fb_dialog.fb_dialog_mobile.loading.centered #fb_dialog_loader_spinner{width:100%}.fb_dialog.fb_dialog_mobile.loading.centered .fb_dialog_content{background:none}.loading.centered #fb_dialog_loader_close{clear:both;color:#fff;display:block;font-size:18px;padding-top:20px}#fb-root #fb_dialog_ipad_overlay{background:rgba(0, 0, 0, .4);bottom:0;left:0;min-height:100%;position:absolute;right:0;top:0;width:100%;z-index:10000}#fb-root #fb_dialog_ipad_overlay.hidden{display:none}.fb_dialog.fb_dialog_mobile.loading iframe{visibility:hidden}.fb_dialog_mobile .fb_dialog_iframe{position:sticky;top:0}.fb_dialog_content .dialog_header{background:linear-gradient(from(#738aba), to(#2c4987));border-bottom:1px solid;border-color:#043b87;box-shadow:white 0 1px 1px -1px inset;color:#fff;font:bold 14px Helvetica, sans-serif;text-overflow:ellipsis;text-shadow:rgba(0, 30, 84, .296875) 0 -1px 0;vertical-align:middle;white-space:nowrap}.fb_dialog_content .dialog_header table{height:43px;width:100%}.fb_dialog_content .dialog_header td.header_left{font-size:12px;padding-left:5px;vertical-align:middle;width:60px}.fb_dialog_content .dialog_header td.header_right{font-size:12px;padding-right:5px;vertical-align:middle;width:60px}.fb_dialog_content .touchable_button{background:linear-gradient(from(#4267B2), to(#2a4887));background-clip:padding-box;border:1px solid #29487d;border-radius:3px;display:inline-block;line-height:18px;margin-top:3px;max-width:85px;padding:4px 12px;position:relative}.fb_dialog_content .dialog_header .touchable_button input{background:none;border:none;color:#fff;font:bold 12px Helvetica, sans-serif;margin:2px -12px;padding:2px 6px 3px 6px;text-shadow:rgba(0, 30, 84, .296875) 0 -1px 0}.fb_dialog_content .dialog_header .header_center{color:#fff;font-size:16px;font-weight:bold;line-height:18px;text-align:center;vertical-align:middle}.fb_dialog_content .dialog_content{background:url(https://z-p3-static.xx.fbcdn.net/rsrc.php/v3/y9/r/jKEcVPZFk-2.gif) no-repeat 50% 50%;border:1px solid #4a4a4a;border-bottom:0;border-top:0;height:150px}.fb_dialog_content .dialog_footer{background:#f5f6f7;border:1px solid #4a4a4a;border-top-color:#ccc;height:40px}#fb_dialog_loader_close{float:left}.fb_dialog.fb_dialog_mobile .fb_dialog_close_icon{visibility:hidden}#fb_dialog_loader_spinner{animation:rotateSpinner 1.2s linear infinite;background-color:transparent;background-image:url(https://z-p3-static.xx.fbcdn.net/rsrc.php/v3/yD/r/t-wz8gw1xG1.png);background-position:50% 50%;background-repeat:no-repeat;height:24px;width:24px}@keyframes rotateSpinner{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}
.fb_iframe_widget{display:inline-block;position:relative}.fb_iframe_widget span{display:inline-block;position:relative;text-align:justify}.fb_iframe_widget iframe{position:absolute}.fb_iframe_widget_fluid_desktop,.fb_iframe_widget_fluid_desktop span,.fb_iframe_widget_fluid_desktop iframe{max-width:100%}.fb_iframe_widget_fluid_desktop iframe{min-width:220px;position:relative}.fb_iframe_widget_lift{z-index:1}.fb_iframe_widget_fluid{display:inline}.fb_iframe_widget_fluid span{width:100%}
.fb_mpn_mobile_landing_page_slide_out{animation-duration:200ms;animation-name:fb_mpn_landing_page_slide_out;transition-timing-function:ease-in}.fb_mpn_mobile_landing_page_slide_out_from_left{animation-duration:200ms;animation-name:fb_mpn_landing_page_slide_out_from_left;transition-timing-function:ease-in}.fb_mpn_mobile_landing_page_slide_up{animation-duration:500ms;animation-name:fb_mpn_landing_page_slide_up;transition-timing-function:ease-in}.fb_mpn_mobile_bounce_in{animation-duration:300ms;animation-name:fb_mpn_bounce_in;transition-timing-function:ease-in}.fb_mpn_mobile_bounce_out{animation-duration:300ms;animation-name:fb_mpn_bounce_out;transition-timing-function:ease-in}.fb_mpn_mobile_bounce_out_v2{animation-duration:300ms;animation-name:fb_mpn_fade_out;transition-timing-function:ease-in}.fb_customer_chat_bounce_in_v2{animation-duration:300ms;animation-name:fb_bounce_in_v2;transition-timing-function:ease-in}.fb_customer_chat_bounce_in_from_left{animation-duration:300ms;animation-name:fb_bounce_in_from_left;transition-timing-function:ease-in}.fb_customer_chat_bounce_out_v2{animation-duration:300ms;animation-name:fb_bounce_out_v2;transition-timing-function:ease-in}.fb_customer_chat_bounce_out_from_left{animation-duration:300ms;animation-name:fb_bounce_out_from_left;transition-timing-function:ease-in}.fb_invisible_flow{display:inherit;height:0;overflow-x:hidden;width:0}@keyframes fb_mpn_landing_page_slide_out{0%{margin:0 12px;width:100% - 24px}60%{border-radius:18px}100%{border-radius:50%;margin:0 24px;width:60px}}@keyframes fb_mpn_landing_page_slide_out_from_left{0%{left:12px;width:100% - 24px}60%{border-radius:18px}100%{border-radius:50%;left:12px;width:60px}}@keyframes fb_mpn_landing_page_slide_up{0%{bottom:0;opacity:0}100%{bottom:24px;opacity:1}}@keyframes fb_mpn_bounce_in{0%{opacity:.5;top:100%}100%{opacity:1;top:0}}@keyframes fb_mpn_fade_out{0%{bottom:30px;opacity:1}100%{bottom:0;opacity:0}}@keyframes fb_mpn_bounce_out{0%{opacity:1;top:0}100%{opacity:.5;top:100%}}@keyframes fb_bounce_in_v2{0%{opacity:0;transform:scale(0, 0);transform-origin:bottom right}50%{transform:scale(1.03, 1.03);transform-origin:bottom right}100%{opacity:1;transform:scale(1, 1);transform-origin:bottom right}}@keyframes fb_bounce_in_from_left{0%{opacity:0;transform:scale(0, 0);transform-origin:bottom left}50%{transform:scale(1.03, 1.03);transform-origin:bottom left}100%{opacity:1;transform:scale(1, 1);transform-origin:bottom left}}@keyframes fb_bounce_out_v2{0%{opacity:1;transform:scale(1, 1);transform-origin:bottom right}100%{opacity:0;transform:scale(0, 0);transform-origin:bottom right}}@keyframes fb_bounce_out_from_left{0%{opacity:1;transform:scale(1, 1);transform-origin:bottom left}100%{opacity:0;transform:scale(0, 0);transform-origin:bottom left}}@keyframes slideInFromBottom{0%{opacity:.1;transform:translateY(100%)}100%{opacity:1;transform:translateY(0)}}@keyframes slideInFromBottomDelay{0%{opacity:0;transform:translateY(100%)}97%{opacity:0;transform:translateY(100%)}100%{opacity:1;transform:translateY(0)}}</style></head>
<body class="">
    <!-- wrapper -->
    <div class="phWrapper">
        <script>
    var currentTheme = localStorage.getItem("theme");
    if (currentTheme == "dark") {
        document.body.classList.toggle("dark-theme");
    } 
</script>
<header class="phHeader" id="header">
    <nav class="navbar navbar-expand logo-link">
        <a class="navbar-brand text-uppercase" href="https://www.tutorialsteacher.com/">
            <img src="./webpack.config_files/tt-logo2.png" alt="LOGO">
        </a>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav nav-flex-icons ml-auto">
                <li class="followus">Follow Us</li>
                <li class="nav-item">
                    <a class="nav-link fb-icon" href="https://www.facebook.com/tutorialsteacher" title="Facebook" target="_blank"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link tw-icon" href="https://twitter.com/tutorialstchr" title="Twitter" target="_blank"><i class="fa fa-twitter" aria-hidden="true"></i></a>
                </li>
            </ul>
        </div>
    </nav>

</header>
        <nav class="navbar navbar-expand navbar-dark special-color-dark topMenuHorizontal sticky-top">

    <!-- Navbar brand -->
    <!-- Collapse button -->
    <button class="navbar-toggler d-block d-md-none" type="button" data-toggle="collapse" data-target="#navbarLeft" aria-controls="#navbarLeft" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>

    <!-- Collapsible content -->
    <div class="collapse navbar-collapse" id="topMenu">

        <!-- Links -->
        <ul class="navbar-nav mr-auto left">
            <li class="nav-item">
                <a href="https://www.tutorialsteacher.com/" class="nav-link home-icon">
                    <i class="fa fa-home" aria-hidden="true"></i>
                </a>
            </li>
            <li class="nav-item"><a class="nav-link" href="https://www.tutorialsteacher.com/csharp">C#</a></li>
            <li class="nav-item">
                <a class="nav-link" href="https://www.tutorialsteacher.com/core">ASP.NET Core</a>
            </li>
            <li class="nav-item"><a class="nav-link" href="https://www.tutorialsteacher.com/mvc"> MVC</a></li>
            <li class="nav-item"><a class="nav-link" href="https://www.tutorialsteacher.com/ioc">IoC </a></li>
            <li class="nav-item"><a class="nav-link active" href="https://www.tutorialsteacher.com/typescript">TypeScript</a></li>
            <li class="nav-item"><a class="nav-link" href="https://www.tutorialsteacher.com/angular">Angular</a></li>
            <li class="nav-item"><a class="nav-link" href="https://www.tutorialsteacher.com/python">Python</a></li>
            <li class="nav-item"><a class="nav-link" href="https://www.tutorialsteacher.com/sqlserver">SQL Server</a></li>
            <li class="nav-item"><a class="nav-link" href="https://www.tutorialsteacher.com/mongodb">MongoDB</a></li>
            <li class="nav-item dropdown mega-dropdown">
                <a class="nav-link dropdown-toggle no-caret" id="navbarDropdownMenuLink1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">More</a>
                <div class="dropdown-menu mega-menu v-2 row z-depth-1 special-color" aria-labelledby="navbarDropdownMenuLink1">
                    <a class="close text-white">✕ </a>
                    <div class="row mx-md-4 mx-1">
                        <div class="col-md-3 col-sm-6 col-xl-3 sub-menu my-xl-4 mt-4 mb-4">
                            <h6 class="sub-title text-white">.NET Tutorials</h6>
                            <ul class="caret-style pl-0">
                                <li class=""><a class="menu-item" href="https://www.tutorialsteacher.com/csharp">C#</a></li>
                                <li class=""><a class="menu-item" href="https://www.tutorialsteacher.com/core">ASP.NET Core</a></li>
                                <li class=""><a class="menu-item" href="https://www.tutorialsteacher.com/mvc">ASP.NET MVC</a></li>
                                <li class=""><a class="menu-item" href="https://www.tutorialsteacher.com/ioc">IoC</a></li>
                                <li class=""><a class="menu-item" href="https://www.tutorialsteacher.com/webapi">web api</a></li>
                                <li class=""><a class="menu-item" href="https://www.tutorialsteacher.com/linq">LINQ</a></li>
                            </ul>
                        </div>
                        <div class="col-md-3 col-sm-6 col-xl-3 sub-menu my-xl-4  mt-4 mb-4">
                            <h6 class="sub-title text-white">Client Side</h6>
                            <!--Featured image-->
                            <ul class="caret-style pl-0">
                                <li class=""><a class="menu-item" href="https://www.tutorialsteacher.com/javascript">JavaScript </a></li>
                                <li class=""><a class="menu-item" href="https://www.tutorialsteacher.com/jquery">jQuery</a></li>
                                <li class=""><a class="menu-item" href="https://www.tutorialsteacher.com/nodejs">Node.js</a></li>
                                <li class=""><a class="menu-item" href="https://www.tutorialsteacher.com/d3js">D3.js</a></li>
                                <li class=""><a class="menu-item active" href="https://www.tutorialsteacher.com/typescript">TypeScript</a></li>
                                <li class=""><a class="menu-item" href="https://www.tutorialsteacher.com/angular">Angular 11</a></li>
                                <li class=""><a class="menu-item" href="https://www.tutorialsteacher.com/angularjs/angularjs-tutorials">AngularJS 1</a></li>
                                <li class=""><a class="menu-item" href="https://www.tutorialsteacher.com/sass">Sass</a></li>
                            </ul>
                        </div>
                        <div class="col-md-3 col-sm-6 col-xl-3 sub-menu my-xl-4 mt-4 mb-4">
                            <h6 class="sub-title text-white">Server Side</h6>
                            <!--Featured image-->
                            <ul class="caret-style pl-0">
                                <li class=""><a class="menu-item" href="https://www.tutorialsteacher.com/https">https</a></li>
                                <li class=""><a class="menu-item" href="https://www.tutorialsteacher.com/python">Python</a></li>
                                <li class=""><a class="menu-item" href="https://www.tutorialsteacher.com/sql">SQL</a></li>
                                <li class=""><a class="menu-item" href="https://www.tutorialsteacher.com/sqlserver">SQL Server</a></li>
                                <li class=""><a class="menu-item" href="https://www.tutorialsteacher.com/postgresql">PostgreSQL</a></li>
                                <li class=""><a class="menu-item" href="https://www.tutorialsteacher.com/mongodb">MongoDB</a></li>
                            </ul>
                        </div>
                        <div class="col-md-3 col-sm-6 col-xl-3 sub-menu my-xl-4 mt-4 mb-4">
                            <h6 class="sub-title  text-white">Skill Tests</h6>
                            <ul class="caret-style pl-0">
                                <li class=""><a class="menu-item" href="https://www.tutorialsteacher.com/online-test/aspnetcore-test">ASP.NET Core</a></li>
                                <li class=""><a class="menu-item" href="https://www.tutorialsteacher.com/online-test/mvc-test">ASP.NET MVC</a></li>
                                <li class=""><a class="menu-item" href="https://www.tutorialsteacher.com/online-test/linq-test">LINQ</a></li>
                                <li class=""><a class="menu-item" href="https://www.tutorialsteacher.com/online-test/csharp-test">C#</a></li>
                                <li class=""><a class="menu-item" href="https://www.tutorialsteacher.com/online-test/webapi-test">web api</a></li>
                                <li class=""><a class="menu-item" href="https://www.tutorialsteacher.com/online-test/ioc-test">IoC  </a></li>
                                <li class=""><a class="menu-item active" href="https://www.tutorialsteacher.com/online-test/typescript-test">TypeScript</a></li>
                                <li class=""><a class="menu-item" href="https://www.tutorialsteacher.com/online-test/angularjs-test">AngularJS</a></li>
                                <li class=""><a class="menu-item" href="https://www.tutorialsteacher.com/online-test/nodejs-test">Node.js</a></li>
                                <li class=""><a class="menu-item" href="https://www.tutorialsteacher.com/online-test/jquery-test"> jQuery </a></li>
                                <li class=""><a class="menu-item" href="https://www.tutorialsteacher.com/online-test/javascript-test"> JavaScript</a></li>
                            </ul>

                        </div>

                    </div>
                </div>
            </li>

        </ul>

        <!-- Links -->
        <ul class="navbar-nav nav-flex right ml-auto">
            <li class="nav-item">
                <a class="nav-link" href="https://www.tutorialsteacher.com/articles">Articles</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="https://www.tutorialsteacher.com/online-test">Tests</a>
            </li>
            <li class="nav-item">
                <a class="nav-link bg-transparent text-white p-0 mr-3 ml-1" title="Dark/Light Theme" onclick="changepagetheme()" href="javascript:void(0);"><i class="demo-icon icon-adjust"></i></a>
            </li>
            
        </ul>
        <!-- Search form -->
        <div id="wrap">
            
            <form class="navbar-form" action="https://www.google.com/search" id="cse-search-box" role="search" target="_blank">
                <div>
                    <input type="hidden" name="cx" value="partner-pub-7448309248176309:9010588392">
                    <input type="hidden" name="ie" value="UTF-8">
                    <input type="text" name="q" id="q" placeholder="Search" class="form-control">
                    <span class="input-group-btn">
                        <button type="submit" id="search_submit" class="button-search border-0 bg-transparent text-white">
                            <i class="fa fa-search">
                            </i>
                        </button>
                    </span>
                </div>
            </form>
        </div>
    </div>
    <!-- Collapsible content -->
</nav>


        <nav class="navbar menuLeft p-0 navbar-expand-md">
            <div class="collapse navbar-collapse" id="navbarLeft" style="top: 42px;">
                <div class="menuVerticalParent" style="padding-top: 42px;">
                    <ul class="menuVertical" id="leftmenu">
                        <li class="menu-title">
                            TypeScript Tutorials
                        </li>
                        <li>
                            <a href="https://www.tutorialsteacher.com/typescript">TypeScript - Get Started</a>
                        </li>
                        <li>
                            <a href="https://www.tutorialsteacher.com/typescript/typescript-overview">TypeScript - Overview</a>
                        </li>
                        <li>
                            <a href="https://www.tutorialsteacher.com/typescript/typescript-environment-setup">TypeScript - Installation</a>
                        </li>
                        <li>
                            <a href="https://www.tutorialsteacher.com/typescript/first-typescript-program">TypeScript - First Program</a>
                        </li>
                        <li>
                            <a href="https://www.tutorialsteacher.com/typescript/type-annotation">TypeScript - Type Annotation</a>
                        </li>
                        <li>
                            <a href="https://www.tutorialsteacher.com/typescript/typescript-variable">TypeScript - Variable</a>
                        </li>
                        <li>
                            <a href="https://www.tutorialsteacher.com/typescript/typescript-number">Data Types - Number</a>
                        </li>
                        <li>
                            <ul>
                                <li>
                                    <a href="https://www.tutorialsteacher.com/typescript/typescript-string">String</a>
                                </li>
                                <li>
                                    <a href="https://www.tutorialsteacher.com/typescript/typescript-boolean">Boolean</a>
                                </li>
                                <li>
                                    <a href="https://www.tutorialsteacher.com/typescript/typescript-array">Array</a>
                                </li>
                                <li>
                                    <a href="https://www.tutorialsteacher.com/typescript/typescript-tuple">Tuple</a>
                                </li>
                                <li>
                                    <a href="https://www.tutorialsteacher.com/typescript/typescript-enum">Enum</a>
                                </li>
                                <li>
                                    <a href="https://www.tutorialsteacher.com/typescript/typescript-union">Union</a>
                                </li>
                                <li>
                                    <a href="https://www.tutorialsteacher.com/typescript/typescript-any">Any</a>
                                </li>
                                <li>
                                    <a href="https://www.tutorialsteacher.com/typescript/typescript-void">Void</a>
                                </li>
                                <li>
                                    <a href="https://www.tutorialsteacher.com/typescript/typescript-never">Never</a>
                                </li>

                            </ul>
                        </li>
                        <li>
                            <a href="https://www.tutorialsteacher.com/typescript/type-inference">TypeScript - Type Inference</a>
                        </li>

                        <li>
                            <a href="https://www.tutorialsteacher.com/typescript/type-assertion">TypeScript - Type Assertion</a>
                        </li>

                        <li>
                            <a href="https://www.tutorialsteacher.com/typescript/typescript-if-else">TypeScript - if</a>
                        </li>
                        <li>
                            <a href="https://www.tutorialsteacher.com/typescript/typescript-switch">TypeScript - switch</a>
                        </li>
                        <li>
                            <a href="https://www.tutorialsteacher.com/typescript/for-loop">TypeScript - for Loop</a>
                        </li>
                        <li>
                            <a href="https://www.tutorialsteacher.com/typescript/while-loop">TypeScript - while Loop</a>
                        </li>
                        <li>
                            <a href="https://www.tutorialsteacher.com/typescript/typescript-function">TypeScript - Function</a>
                        </li>
                        <li>
                            <ul>
                                <li>
                                    <a href="https://www.tutorialsteacher.com/typescript/arrow-function">Arrow Function</a>
                                </li>
                                <li>
                                    <a href="https://www.tutorialsteacher.com/typescript/function-overloading">Function Overloading</a>
                                </li>
                                <li>
                                    <a href="https://www.tutorialsteacher.com/typescript/rest-parameters">Rest Parameters</a>
                                </li>

                            </ul>
                        </li>
                        <li>
                            <a href="https://www.tutorialsteacher.com/typescript/typescript-interface">TypeScript - Interface</a>
                        </li>
                        <li>
                            <a href="https://www.tutorialsteacher.com/typescript/typescript-class">TypeScript - Class</a>
                        </li>
                        <li>
                            <a href="https://www.tutorialsteacher.com/typescript/abstract-class">TypeScript - Abstract Class</a>
                        </li>
                        <li>
                            <a href="https://www.tutorialsteacher.com/typescript/data-modifiers">TypeScript - Data Modifiers</a>
                        </li>
                        <li>
                            <a href="https://www.tutorialsteacher.com/typescript/typescript-readonly">TypeScript - ReadOnly</a>
                        </li>
                        <li>
                            <a href="https://www.tutorialsteacher.com/typescript/typescript-static">TypeScript - Static</a>
                        </li>
                        <li>
                            <a href="https://www.tutorialsteacher.com/typescript/typescript-module">TypeScript - Module</a>
                        </li>
                        <li>
                            <ul>
                                <li>
                                    <a href="https://www.tutorialsteacher.com/typescript/compile-module-in-typescript">Compiling a Module</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="https://www.tutorialsteacher.com/typescript/typescript-namespace">TypeScript - Namespace</a>
                        </li>
                        <li>
                            <a href="https://www.tutorialsteacher.com/typescript/typescript-generic">TypeScript - Generic</a>
                        </li>
                        <li>
                            <ul>
                                <li>
                                    <a href="https://www.tutorialsteacher.com/typescript/typescript-generic-interface">Generic Interface</a>
                                </li>
                                <li>
                                    <a href="https://www.tutorialsteacher.com/typescript/typescript-generic-class">Generic Class</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="https://www.tutorialsteacher.com/typescript/typescript-compiling-project-and-tsconfig">TypeScript - Compiling Project</a>
                        </li>
                        <li>
                            <a href="https://www.tutorialsteacher.com/typescript/typescript-build-tools">TypeScript - Build Tools</a>
                        </li>
                        <li>
                            <a href="https://www.tutorialsteacher.com/typescript/converting-javascript-to-typescript" class="active">Convert Existing JavaScript to TypeScript </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        <!--Navbar-->
        <!--/.Navbar-->
        <section class="middleContent" id="middleContent">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-12 pr-md-0 col-lg-12 col-xl-8">
                        <div class="lb-ad">
                            

<pubguru data-pg-ad="tt_leaderboard_atf_desk">

                        </pubguru></div>
                        <div class="navigation"> 
    <div class="row">

            <div class="col-6  text-left"><a id="btnPrev" class="btn  rounded-0" href="https://www.tutorialsteacher.com/typescript/typescript-build-tools"><i class="fa fa-angle-left mr-1"></i> Previous</a></div>

            <div class="col-6 text-right float-right"><a id="btnNext" class="btn rounded-0" href="https://www.tutorialsteacher.com/">Home</a></div>
    </div>
</div>

                        
<article class="article">
    <h1>Converting Existing JavaScript to TypeScript</h1>

    <p>In this section, we will learn how to convert an existing JavaScript project to TypeScript.</p>
    <p>Let's assume you have a handful of JavaScript files that need to be converted to TypeScript. Since TypeScript files on compilation produce JavaScript files with the same name, we need to ensure that our original JavaScript files that act as input, reside in a directory so that TypeScript does not override them. Additionally, lets keep all the output files in an output directory called dist.</p>
    <p>For this tutorial, we will have the following directory structure:</p>
    <figure>
        <a href="./webpack.config_files/proj-structure.png" target="_blank">
            <img alt="" class="img-fluid" src="./webpack.config_files/proj-structure.png">
        </a>
    </figure>
    <p>In order to migrate from JS to TS, we will follow these steps:</p>
    <ol>
        <li>
            Add tsconfig.json file to project

        </li>
        <li>
            Integrate with a build tool
        </li>
        <li>
            Change all .js files to .ts files
        </li>
        <li>
            Check for any errors
        </li>
    </ol>

    <h2>Add tsconfig.json File to Project</h2>
    <p>First, we will add a tsconfig.json file to our project. This file manages the project's compilation options as well as which files to include and exclude.</p>
    <div class="card code-panel">
        <div class="card-header example-header"><div class="example-caption">Example: tsconfig.json</div><button class="copy-btn pull-right" title="Copy example code"><i class="fa fa-copy"></i> Copy</button></div>
        <div class="panel-body">
<pre class="csharpcode"><code>{
    <span class="str">"compilerOptions"</span>: {
        <span class="str">"outDir"</span>: <span class="str">"./dist"</span>,
        <span class="str">"allowJs"</span>: <span class="kwrd">true</span>,
        <span class="str">"target"</span>: <span class="str">"es5"</span>
    },
        <span class="str">"include"</span>: [
        <span class="str">"./src/**/*"</span>
    ]
}
</code></pre>
        </div>
        <div class="card-footer example-footer"></div>
    </div>
    <p>
        In the above config file, we are specifying to include all the files from the src folder. This is done using the "include" option.
        The compilerOptions, outDir specifies that the output files should be redirected to a folder called "dist".
        The allowJs options specifies that all JS files should be allowed. The target option specify that all JavaScript constructs should be translated to ECMAScript 5.
    </p>

    
<div class="videoAd">
<!-- code from Primis - tutorialsteacher.com -->
<script type="text/javascript" language="javascript" src="./webpack.config_files/liveView.php"></script>
<!-- code from Primis -->
</div>

    <h2>Integrate with a build tool</h2>
    <p>Most JavaScript projects have an integrated build tool like webpack or gulp.</p>
    <p>To integrate with webpack,</p>
    <p>a) Run the following command on your terminal:</p>
    <samp>npm install awesome-typescript-loader source-map-loader</samp>
    <p>awesome-typescript-loader is a TypeScript loader, whereas source-map-loader is used for debugging your source code.</p>

    <p>b) Add/edit the module config property in your webpack.config.js file to include these two loaders:</p>
    <div class="card code-panel">
        <div class="card-header example-header"><div class="example-caption">Example: webpack.config.js</div><button class="copy-btn pull-right" title="Copy example code"><i class="fa fa-copy"></i> Copy</button></div>
        <div class="panel-body">
<pre class="csharpcode"><code>module: {
    loaders: [
        <span class="rem">// All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.</span>
        { test: /\.tsx?$/, loader: <span class="str">"awesome-typescript-loader"</span> }
    ],

    preLoaders: [
        <span class="rem">// All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.</span>
        { test: /\.js$/, loader: <span class="str">"source-map-loader"</span> }
    ]
}
</code></pre>
        </div>
        <div class="card-footer example-footer"></div>
    </div>
    <p>For other build tools like Gulp, Grunt, and Browserify, refer to our previous section on build tools.</p>
    <h2>Converting .js files to .ts files</h2>
    <p>Rename your first .js file to .ts. Similarly, rename the .jsx file to .tsx.</p>
    <p>As soon as you do that, some of your code might start giving compilation errors.</p>
    <h2>Check for Errors</h2>
    <p>Since TypeScript has strict type checking, you may notice errors in your JavaScript code.</p>
    <p>Few examples:</p>
    <p>a) function with too many or two few arguments</p>
    <div class="card code-panel-without-title">
        <div class="panel-body">
<pre class="csharpcode"><code>function displayPerson(name, age, height) {
    let str1 = <span class="str">"Person named "</span> + name + <span class="str">",  "</span> + age + <span class="str">" years old"</span>;
    let str2 = (height !== undefined) ? (<span class="str">" and "</span> + height +  <span class="str">" feet tall"</span>) : <span class="str">''</span>;
    console.log(str1 + str2);
}

displayPerson( <span class="str">"John"</span>, 32);
</code></pre>
        </div>
    </div>
    <p>
        In the above code, we have a function named <code>displayPerson()</code> that takes three arguments: name, age, and height.
        We call the above function with two values: "John", and 23. The above function is perfectly valid with JavaScript.
        This is because if an expected argument to a function is missing in JavaScript, it assigns the value undefined to the argument.
    </p>
    <p>However, the same code in TypeScript will give the compilation error: error TS2554: Expected 3 arguments, but got 2.</p>
    <p>To rectify this, you can add an optional parameter sign to the argument <code>height</code>. Also, while you are removing errors, you can also annotate your code like below:</p>
    <div class="card code-panel-without-title">
        <div class="panel-body">
<pre class="csharpcode"><code>function displayPerson( name: <span class="kwrd">string</span>, age: number, height?: number) {
    let str1: <span class="kwrd">string</span> = <span class="str">"Person named "</span> + name + <span class="str">",  "</span> + age + <span class="str">" years old"</span>;
    let str2: <span class="kwrd">string</span> = (height !== undefined) ? (<span class="str">" and "</span> + height +  <span class="str">" feet tall"</span>) : <span class="str">''</span>;
    
    console.log(str1 + str2);
}
</code></pre>
        </div>
    </div>
    <p>b) Consider the following object in JavaScript:</p>
    <div class="card code-panel-without-title">
        <div class="panel-body">
<pre class="csharpcode"><code>let employee = {};
employee.code = 10;
employee.name = <span class="str">"John"</span>;

console.log(employee);
</code></pre>
        </div>
    </div>
    <p>In TypeScrip, this would give a compilation error:</p>
    <p>error TS2339: Property 'code' does not exist on type '{}'.</p>
    <p>error TS2339: Property 'name' does not exist on type '{}'.</p>
    <p>To rectify this, you can move the properties inside the object:</p>
    <div class="card code-panel-without-title">
        <div class="panel-body">
<pre class="csharpcode"><code>let employee = {
    code: 10,
    name: <span class="str">"John"</span>
};
</code></pre>
        </div>
    </div>
    <p>Or, create an interface:</p>
    <div class="card code-panel-without-title">
        <div class="panel-body">
<pre class="csharpcode"><code><span class="kwrd">interface</span> Employee {
    code: number,
    name: <span class="kwrd">string</span>
}

let empObj = {} <span class="kwrd">as</span> Employee;
empObj.code = 10;
empObj.name = <span class="str">"John"</span>;
</code></pre>
        </div>
    </div>
    <h2>Using Third-party JavaScript Libraries</h2>
    <p>
        Most JavaScript projects use third-party libraries like jQuery or Lodash.
        TypeScript needs to know the types of all objects in these libraries in order to compile files.
        Fortunately, TypeScript Type definition files for most JavaScript libraries are already available at <a class="external-link" href="https://github.com/DefinitelyTyped/DefinitelyTyped" target="_blank">DefinitelyTyped</a>.
        So, we don't need to add types to these ourselves. All you need to do is install the types for each of the libraries used in your project.
    </p>

    <p>For example, for Jquery, install the definition:</p>
    <samp>npm install @types/jquery</samp>
    <p>
        A list of all available TypeScript Type definitions can be seen <a class="external-link" href="https://www.npmjs.com/~types" target="_blank">here</a>.
    </p>

    <p>Once you've made all the above changes to your JavaScript project, run your build tool and you should have your TypeScript project compiled into plain JavaScript that you can run in the browser.</p>
    <p>With that, you are all set to use TypeScript to convert your existing JavaScript projects.</p>
</article>

                        
<div id="social-platforms" class="mt-4 mb-4">
    <ul class="row align-items-center">
        <li class="col-md-3  col-sm-6 pl-lg-0">
            <a class="btn btn-icon btn-facebook" id="fbshare"><i class="fa fa-facebook"></i><span>Share</span></a>
        </li>
        <li class="col-md-3 col-sm-6 pl-sm-0"> <a class="btn btn-icon btn-twitter " onclick="javascript:window.open(this.href, &#39;&#39;, &#39;menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600&#39;);return false;" href="https://twitter.com/share?url=https://www.tutorialsteacher.com/typescript/converting-javascript-to-typescript&amp;text=%20Converting%20JavaScript%20to%20TypeScript" target="_blank"><i class="fa fa-twitter"></i><span> Tweet</span></a></li>
        <li class="col-md-3 col-sm-6 pl-sm-0"> <a class="btn btn-icon btn-linkedin " href="https://www.linkedin.com/shareArticle?mini=true&amp;url=https://www.tutorialsteacher.com/typescript/converting-javascript-to-typescript&amp;title=%20Converting%20JavaScript%20to%20TypeScript&amp;summary=&amp;source=" target="_blank"><i class="fa fa-linkedin"></i><span>Share</span></a></li>
        <li class="col-md-3 col-sm-6 pl-md-0"> <a class="btn btn-icon btn-whatsapp" href="https://wa.me/?text=https%3a%2f%2fwww.tutorialsteacher.com%2ftypescript%2fconverting-javascript-to-typescript" target="_blank"><i class="fa fa-whatsapp"></i><span>Whatsapp</span></a></li>
    </ul>
</div>
<div id="fb-root" class=" fb_reset"><div style="position: absolute; top: -10000px; width: 0px; height: 0px;"><div></div></div></div>
<script>
    (function (d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.2&appId=1993456930718907&autoLogAppEvents=1';
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
</script>
<script>
document.getElementById('fbshare').onclick = function () {
    FB.ui({
        method: 'share',
        href: 'https://www.tutorialsteacher.com/typescript/converting-javascript-to-typescript'
    }, function (response) { });
}
</script>




<div class="border border-secondary mt-3 mb-3 p-3 align-middle bg-light text-center">
    <span class="mr-3 text-dark " style="font-size:18px">Want to check how much you know TypeScript? </span>
    <div class="mt-3"><a class="btn start-learning text-white" href="https://www.tutorialsteacher.com/online-test/typescript-test" target="_blank" title="Test your TypeScript knowledge">Start TypeScript Test</a></div>
</div>
                        
<hr>
<div class="row" style="min-height:300px">
    
        <div class="d-none d-xl-block col-xl-6">
            <pubguru data-pg-ad="tt_rectangle_btf_desk">
        </pubguru></div>
        <div class="col-xl-6">
            <pubguru data-pg-ad="tt_leaderboard_btf_desk">
        </pubguru></div>
        <pubguru data-pg-ad="tt_rectangle_btf_mobile">

</pubguru></div>
                        <div class="navigation"> 
    <div class="row">

            <div class="col-6  text-left"><a id="btnPrev" class="btn  rounded-0" href="https://www.tutorialsteacher.com/typescript/typescript-build-tools"><i class="fa fa-angle-left mr-1"></i> Previous</a></div>

            <div class="col-6 text-right float-right"><a id="btnNext" class="btn rounded-0" href="https://www.tutorialsteacher.com/">Home</a></div>
    </div>
</div>

                    </div>
                    
<div class="d-none d-xl-block col-xl-4 rightSidebar">
    <div class="row">
        <div class="col-12">
            <div class="rect-ad mt-1 ml-2" id="rightbarAd1" style="">
                
                <pubguru data-pg-ad="tt_sidebar_rectangle_desk">
            </pubguru></div>
            <div class="rect-ad mt-2 ml-2 stickyad-t" id="stickyAdDiv" style="">
                
                <pubguru data-pg-ad="tt_right_sidebar_sticky_desk">
            </pubguru></div>
        </div>
        

        

        
    </div>
</div>

                </div>
            </div>
            <footer class="section footer pt-5">
    <div class="footer-main">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-7">
                    <div class="row">
                        <div class="col-md-5 ">
                            <div class="edugate-widget widget">
                                <div class="title-widget">TutorialsTeacher.com</div>
                                <div class="content-widget">
                                    <p>
                                        TutorialsTeacher.com is optimized for learning web technologies step by step.
                                        Examples might be simplified to improve reading and basic understanding.
                                        While using this site, you agree to have read and accepted our terms
                                        of use and <a href="https://www.tutorialsteacher.com/aboutus/privacy-policy">privacy policy</a>.
                                    </p>
                                    <div class="info-list">
                                        <ul class="list-unstyled">
                                            <li><i class="fa fa-envelope-o"></i><a href="mailto:feedback@tutorialsteacher.com"> feedback@tutorialsteacher.com</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-7">
                            <div class="useful-link-widget widget">
                                <div class="title-widget">Tutorials</div>
                                <div class="content-widget">
                                    <div class="useful-link-list">
                                        <div class="row">
                                            <div class="col-md-6 col-sm-6">
                                                <ul class="list-unstyled">
                                                    <li><i class="fa fa-angle-right"></i><a href="https://www.tutorialsteacher.com/core">ASP.NET Core</a></li>
                                                    <li><i class="fa fa-angle-right"></i><a href="https://www.tutorialsteacher.com/mvc">ASP.NET MVC</a></li>
                                                    <li><i class="fa fa-angle-right"></i><a href="https://www.tutorialsteacher.com/ioc">IoC</a></li>
                                                    <li><i class="fa fa-angle-right"></i><a href="https://www.tutorialsteacher.com/webapi">Web API</a></li>
                                                    <li><i class="fa fa-angle-right"></i><a href="https://www.tutorialsteacher.com/csharp">C#</a></li>
                                                    <li><i class="fa fa-angle-right"></i><a href="https://www.tutorialsteacher.com/linq">LINQ</a></li>
                                                    <li><i class="fa fa-angle-right"></i><a href="https://www.tutorialsteacher.com/python">Python</a></li>
                                                    <li><i class="fa fa-angle-right"></i><a href="https://www.tutorialsteacher.com/sqlserver">SQL Server</a></li>
                                                    <li><i class="fa fa-angle-right"></i><a href="https://www.tutorialsteacher.com/mongodb">MongoDB</a></li>
                                                    <li>
                                                        <i class="fa fa-angle-right"></i><a href="https://www.entityframeworktutorial.net/" target="_blank" rel="nofollow">Entity Framework</a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="col-md-6 col-sm-6 ">
                                                <ul class="list-unstyled">
                                                    <li><i class="fa fa-angle-right"></i><a href="https://www.tutorialsteacher.com/javascript">JavaScript</a></li>
                                                    <li><i class="fa fa-angle-right"></i><a href="https://www.tutorialsteacher.com/jquery">jQuery</a></li>
                                                    <li><i class="fa fa-angle-right"></i><a href="https://www.tutorialsteacher.com/typescript">Typescript</a></li>
                                                    <li><i class="fa fa-angle-right"></i><a href="https://www.tutorialsteacher.com/nodejs">Node.js</a></li>
                                                    <li><i class="fa fa-angle-right"></i><a href="https://www.tutorialsteacher.com/angular">Angular 2</a></li>
                                                    <li><i class="fa fa-angle-right"></i><a href="https://www.tutorialsteacher.com/d3js">D3.js</a></li>
                                                    <li><i class="fa fa-angle-right"></i><a href="https://www.tutorialsteacher.com/sass">Sass</a></li>
                                                    <li><i class="fa fa-angle-right"></i><a href="https://www.tutorialsteacher.com/https">Https (SSL)</a></li>
                                                    <li><i class="fa fa-angle-right"></i><a href="https://www.tutorialsteacher.com/angularjs/angularjs-tutorials">AngularJS 1</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4">
                    <div class="row">
                        <div class="col-md-12 ">
                            <div class="mailing-widget widget">
                                <div class="title-widget">E-mail list</div>
                                <div class="content-wiget">
                                    <p>
                                        Subscribe to TutorialsTeacher email list and get latest updates, tips &amp;
                                        tricks on C#, .Net, JavaScript, jQuery, AngularJS, Node.js to your inbox.
                                    </p>
                                    <form action="https://tutorialsteacher.us13.list-manage.com/subscribe/post-json?u=78cbe5cadd7cc1475359445ad&amp;id=d119ae6be2" method="post" id="subscribe-form" name="subscribe-form" class="validate" novalidate="">
                                        <div class="input-group">
                                            <input type="text" placeholder="Email address" class="form-control form-email-widget" name="MERGE0" id="MERGE0" size="25"><span class="input-group-btn"><input type="submit" value="Go" name="subscribe" id="mc-embedded-subscribe" class="btn btn-email"></span>
                                        </div>

                                        <div id="mce-responses" class="clear">
                                            <div class="response" id="mce-error-response" style="display: none"></div>
                                            <div class="response" id="mce-success-response" style="display: none"></div>
                                        </div>
                                        <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
                                        <div style="position: absolute; left: -5000px;" aria-hidden="true">
                                            <input type="text" name="b_659e2cbd2829799e7dc94ae35_93dae2ea03" tabindex="-1" value="">
                                        </div>
                                        <div class="alert-success" id="successMsg"></div>
                                        <div class="alert-danger" id="failMsg"></div>

                                    </form>
                                    <p>We respect your privacy.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row hyperlink text-center text-md-left">
                <div class="col-md-6 hyper-left">
                    <ul class="list-inline">
                        <li class="list-inline-item"><a href="https://www.tutorialsteacher.com/">HOME</a></li>
                        <li class="list-inline-item"><a href="https://www.tutorialsteacher.com/aboutus/privacy-policy">PRIVACY POLICY</a></li>
                        <li class="list-inline-item"><a href="https://www.tutorialsteacher.com/aboutus/terms-of-use">TERMS OF USE</a></li>
                        <li class="list-inline-item"><a href="https://www.tutorialsteacher.com/aboutus/advertise">ADVERTISE WITH US</a></li>
                    </ul>
                </div>
                <div class="col-md-6 hyper-right text-center text-md-right">
                    <i class="fa fa-copyright" aria-hidden="true"></i> 2022 TutorialsTeacher.com. All Rights Reserved.
                </div>
            </div>
        </div>
    </div>
    
</footer>

        </section>
    </div>
    <script src="./webpack.config_files/jquery.min.js.download"></script>
<script src="./webpack.config_files/ttGeneralScript.min.js.download"></script>
<script>window.jQuery||LoadScriptAtEnd("/Content/scripts/jquery-3.3.1.min.js");</script>
<script type="text/javascript">
screen.width>556&&$(".copy-btn").length>0&&LoadAndRegisterClipboard(),$(".lazyload").length>0&&LoadScriptAtEnd("/Content/scripts/lazysizes.min.js");
</script><script src="./webpack.config_files/clipboard.min.js.download"></script>
<script src="./webpack.config_files/popper.min.js.download"></script>
<script>window.Popper||LoadScriptAtEnd("/Content/scripts/popper.min.js");</script>
<script src="./webpack.config_files/jquery.unobtrusive-ajax.min.js.download"></script>
<script src="./webpack.config_files/bootstrap.min.js.download"></script>
<script>$.fn.modal||LoadScriptAtEnd("/Content/scripts/bootstrap.min.js");</script>
<script>
function setActiveLeftMenu(){var e='converting_javascript_to_typescript'.replace(/_/g,"-");e=e.replace("asp-net","asp.net");var t='typescript'.replace(/_/g,"-");0==$('#leftmenu li a[href="/'+t+"/"+e+'"]').length?$('#leftmenu li a[href="/'+t+'"]').addClass("active"):$('#leftmenu li a[href="/'+t+"/"+e+'"]').addClass("active"),$('#topMenu > ul li a[href *="/'+t.toLowerCase()+'"]').addClass("active")}function setLeftArticleMenuActive(){if($(".menuVertical").length>0){var e=$(location).attr("pathname");$('.menuVertical li a[href="'+e+'"]').addClass("active")}}$(document).ready(function(){stickTLMenus(),screen.width<=767?$(window).scroll(function(){stickTLMenus(),stickyAd()}):screen.width>767&&screen.width<=1199?($(window).scroll(function(){stickTLMenus()}),setActiveLeftMenu(),maintainLeftMenuPos()):(stickyAd(),$(window).scroll(function(){stickTLMenus(),stickyAd()}),setActiveLeftMenu(),setLeftArticleMenuActive(),maintainLeftMenuPos()),window.setArticleTagActive&&setArticleTagActive(),registerSubscribeButton()});
</script>
<script type="text/javascript" src="./webpack.config_files/fb.js.download"></script>


</body></html>