function initializeViz() {
    var placeholderDiv = document.getElementById("borderheat");
    var url = "https://public.tableau.com/views/BorderCrossingCountbyState2008-2018/Sheet1";
    var options = {
		width: '600px',
		height: '600px',
		hideTabs: true,
		hideToolbar: true,
      }
    };
    viz = new tableau.Viz(placeholderDiv, url, options);
  }    