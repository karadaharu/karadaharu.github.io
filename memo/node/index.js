<html lang="en">
<head>

  
  <meta charset="utf-8">
  <title>node.js</title>
  <meta name="description" content="node.js">
  <meta name="author" content="">

  
  <meta name="viewport" content="width=device-width, initial-scale=1">

  
  <link href="//fonts.googleapis.com/css?family=Raleway:400,300,600" rel="stylesheet" type="text/css">
  <link rel="stylesheet" href="http://karadaharu.org/css/fonts.css">
  
  
  <link rel="stylesheet" href="http://yui.yahooapis.com/pure/0.6.0/pure-min.css">
  

    <link rel="stylesheet" href="http://yui.yahooapis.com/pure/0.6.0/grids-responsive-min.css">

  <link rel="stylesheet" href="http://karadaharu.org/css/custom.css">

  
  
  <link rel="stylesheet" href="http://karadaharu.org/highlight/styles/default.css">
  
  <script src="http://karadaharu.org/highlight/highlight.pack.js"></script>
  <script>hljs.initHighlightingOnLoad();</script>

</head>
<body>


<div class="header pure-g">
    <div class="pure-u-1-24 pure-u-md-5-24"></div>
    <div class="pure-u-11-12 pure-u-md-5-8">
        <div class="desktop pure-menu pure-menu-horizontal nav-menu">
            
            <a href="/" class="site-title pure-menu-heading">Kazumasa KANEKO</a>
            <ul class="pure-menu-list">
                
                <li class="pure-menu-item">
                    <a href="http://karadaharu.org/about/" class="pure-menu-link">About</a>
                </li>
                <li class="pure-menu-item">
                    <a href="http://karadaharu.org/publications/" class="pure-menu-link">Publications</a>
                </li>
                <li class="pure-menu-item">
                    <a href="http://karadaharu.org/works/" class="pure-menu-link">Works</a>
                </li>
                <li class="pure-menu-item">
                    <a href="http://karadaharu.org/memo/" class="pure-menu-link">Memo</a>
                </li>
            </ul>
        </div>
        <div class="mobile pure-menu nav-menu">
            <a href="/" class="pure-menu-heading" id="toggle-home">Kazumasa KANEKO</a>
            <a href="#" id="toggle-btn">&#9776;</a>
            <ul class="pure-menu-list" id="toggle-content" style="display:none;">
                
                
                <li class="pure-menu-item">
                    <a href="http://karadaharu.org/about" class="pure-menu-link">About</a>
                </li>
                <li class="pure-menu-item">
                    <a href="http://karadaharu.org/publications" class="pure-menu-link">Publications</a>
                </li>
                <li class="pure-menu-item">
                    <a href="http://karadaharu.org/works" class="pure-menu-link">Works</a>
                </li>
                <li class="pure-menu-item">
                    <a href="http://karadaharu.org/memo" class="pure-menu-link">Memo</a>
                </li>
            </ul>
        </div>
    </div>
    <div class="pure-u-1-24 pure-u-md-1-6"></div>
</div>


<div class="pure-g">
    <div class="pure-u-1-24 pure-u-md-5-24"></div>
	<div class="pure-u-11-12 pure-u-md-5-8">
        <div class="post">

            <div class="post-title">
                <p class="footnote">
		            
                    
                    

                    

                    
                </p>
                <h1>node.js</h1>
            </div>

            <div class="post-content">
                

<h1 id="node-js:2a172f94aa1b5e9f60d3abee3c389bac">node.js</h1>

<p>汎用プログラミング言語としてのjs</p>

<p>nodebrew:node.jsのバージョン管理システム
npm:node.jsのパッケージ管理システム（pythonでいうpip、rubyでいうgem）</p>

<p><a href="http://qiita.com/megane42/items/2ab6ffd866c3f2fda066">http://qiita.com/megane42/items/2ab6ffd866c3f2fda066</a></p>

            </div>
        </div>
	</div>
    <div class="pure-u-1-24 pure-u-md-1-6"></div>
</div>

<div class="footer pure-g">
    <div class="pure-u-1-24 pure-u-md-5-24"></div>
    <div class="pure-u-11-12 pure-u-md-5-8">
        <div class="pure-menu pure-menu-horizontal footer-content">
            <ul>
                <li class="pure-menu-heading" id="foot-name">:</li>

                

                

                

                

                

            </ul>
            <a href="#" class="pure-menu-heading pull-right" id="gototop-btn">↑↑</a>
        </div>
	  </div>
      <div class="pure-u-1-24 pure-u-md-1-6"></div>
</div>


<script src="http://karadaharu.org/js/jquery.min.js" type="text/javascript"></script>
<script src="http://karadaharu.org/js/jquery.timeago.js" type="text/javascript"></script>
<script type="text/javascript">
  $(function(){
    $("time.timeago").timeago();
  })
  $("#toggle-btn").click(function(){
    $("#toggle-content").toggle();
    if($(this).html() === "☰") {
        $(this).html("X")
    } else {
        $(this).html("☰")
    }
  });
  $(window).resize(function(){
    if(window.innerWidth > 768) {
      $(".desktop").removeAttr("style");
    }
  });
</script>

</body>
</html>

