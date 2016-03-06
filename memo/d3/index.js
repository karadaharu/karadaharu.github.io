<html lang="en">
<head>

  
  <meta charset="utf-8">
  <title>d3.js</title>
  <meta name="description" content="d3.js">
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
                <h1>d3.js</h1>
            </div>

            <div class="post-content">
                

<h1 id="d3-js:1a62dceb21288bb33ea4f25b33b52f35">d3.js</h1>

<h2 id="基本:1a62dceb21288bb33ea4f25b33b52f35">基本</h2>

<p><a href="http://ja.d3js.info/alignedleft/tutorials/d3/">http://ja.d3js.info/alignedleft/tutorials/d3/</a></p>

<h2 id="force:1a62dceb21288bb33ea4f25b33b52f35">force</h2>

<p>力学モデル
<a href="http://www.openspc2.org/reibun/D3.js/code/graph/force-layout/0001/index.html">http://www.openspc2.org/reibun/D3.js/code/graph/force-layout/0001/index.html</a></p>

<p>ノードに名前を表示
<a href="http://bl.ocks.org/mbostock/1153292">http://bl.ocks.org/mbostock/1153292</a></p>

<p><a href="http://bl.ocks.org/MoritzStefaner/1377729">http://bl.ocks.org/MoritzStefaner/1377729</a></p>

<h2 id="svg:1a62dceb21288bb33ea4f25b33b52f35">svg</h2>

<ul>
<li>g:複数の要素をまとめるための要素 <a href="http://gihyo.jp/dev/feature/01/svg/0003">http://gihyo.jp/dev/feature/01/svg/0003</a></li>
<li></li>
</ul>

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

