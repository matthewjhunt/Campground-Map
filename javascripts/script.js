$(document).ready(function() {
          
          function addNumber(element) {
            var box = element.getBBox();
            var x = (box.x + box.x2) / 2;
            var y = (box.y + box.y2) / 2;
            var number = element.data('id').replace(/([a-z]+)([0-9]+)/, '$2');
            siteNumbers.number = rsr.text(x, y, number).attr(siteNumberStyle);
          }
          
          //when I hilite an item, grey everything else out and make the hilited element red
  	      var colors = {
  	        "rv": "#a8d485",
  	        "seasonal": "#69923E", //69923E
  	        "cabin":"#ED7B31",
  	        "tent":"#A27A95",
  	        "beach": "#F9DB94",
  	        "water": "#00BBD7"
  	      };
  	      var rv = {
              fill: colors['rv'],
              stroke: "#666",
              "stroke-width": 0,
              'stroke-opacity': 0,
          };
          var seasonal = {
              fill: colors['seasonal'],
              stroke: "#666",
              "stroke-width": 0,
              'stroke-opacity': 0,
          };
          var tent = {
              fill: colors['tent'],
              stroke: "#666",
              "stroke-width": 0,
              'stroke-opacity': 0,
          };
          var cabin = {
              fill: colors['cabin'],
              stroke: "#666",
              "stroke-width": 0,
              'stroke-opacity': 0,
          };
          
          var text = {'font-size': '14px'};
          var text9n = {'font-size': '22px', 'font-weight': 'bold'};
          var siteNumberStyle = {'fill': '#ffffff','font-size': '15px', 'font-weight': 'bold'};     
        
          var rsr = Raphael('paper', '900', '1088.604');
          //var rsr = Raphael('paper', '1056', '1623');
          
          var sites = {};
          var tentsites = {};
          var bathhouses = {};
          //var cabins = {};
          var labels = {};
          var siteNumbers = {};

         
          //bathouses
            var bathhouses = rsr.set();
            bathhouses.attr({'id': 'bathhouses','name': 'bathhouses'});
            
            bathhouses[1] = rsr.rect(531.03, 356.45, 26.998, 28);
            bathhouses[1].attr({x: '531.03',y: '356.45',fill: '#F4BB3A',parent: 'bathhouses','stroke-width': '0','stroke-opacity': '1',id: 'bh1'});
            bathhouses[1].transform("m0.9075 -0.42 0.42 0.9075 -105.2312 262.9474").data('id', 'bh1');
            
            bathhouses[2] = rsr.rect(423.031, 132.45, 27, 27.999);
            bathhouses[2].attr({x: '423.031',y: '132.45',fill: '#F4BB3A',parent: 'bathhouses','stroke-width': '0','stroke-opacity': '1',id: 'bh2'});
            bathhouses[2].transform("m0.9075 -0.42 0.42 0.9075 -21.143 196.8634").data('id', 'bh2');
            
            var portapotty = rsr.rect(70.06, 906.48, 9.939, 9.938);
            portapotty.attr({x: '70.06',y: '906.48',fill: '#F4BB3A',parent: 'bathhouses','stroke-width': '0','stroke-opacity': '1',id: 'portapotty'});
            portapotty.transform("m0.8874 0.4609 -0.4609 0.8874 428.5471 68.0071").data('id', 'portapotty');
            
          
            //cabins
            var cabins = rsr.set();
            
            
            sites.cabin1 = rsr.rect(390.03, 557.951, 32, 22.749);
            sites.cabin1.attr({x: '390.03',y: '557.951',parent: 'cabins',id: 'cabin1',fill: '#ED7B31','stroke-width': '0','stroke-opacity': '0'});
            sites.cabin1.transform("m0.8685 0.4958 -0.4958 0.8685 335.6535 -126.4038").data('id', 'cabin1').data('class', 'cabin');
            
            sites.cabin2 = rsr.rect(410.03, 526.95, 31.998, 22.749);
            sites.cabin2.attr({x: '410.03',y: '526.95',parent: 'cabins',id: 'cabin2',fill: '#ed7b31','stroke-width': '0','stroke-opacity': '0'});
            sites.cabin2.transform("m0.8065 0.5912 -0.5912 0.8065 400.7035 -147.7169").data('id', 'cabin2').data('class', 'cabin');
            
            cabins.attr({'id': 'cabins','name': 'cabins'});
          
            //rv sites
            var rvsites = rsr.set();
            //regex: (data\(\'id\',\s\'rv)([0-9]+)(\'\))(;)
            //replace: $1$2$3.data('class', 'rv');
            sites.rv1 =  rsr.path("M 554.727,501.683 522.07,473.162 544.629,456.667 575.363,480.116   z");
            sites.rv1.attr({id: 'rv1',fill: '#68923D',parent: 'rvsites','stroke-width': '0','stroke-opacity': '1'}).data('id', 'rv1').data('class', 'rv');
            sites.rv2 =  rsr.path("M 557.377,445.981 587.029,468.45 607.695,446.122 575.029,422.45   z");
            sites.rv2.attr({id: 'rv2',fill: '#68923D',parent: 'rvsites','stroke-width': '0','stroke-opacity': '1'}).data('id', 'rv2').data('class', 'rv');
            sites.rv3 =  rsr.path("M611.9,344.818c-14.996,4.507-42.537,14.965-42.537,14.965s11.121,34.189,12,36.333   c11.527-0.951,40.334-7.333,40.334-7.333S624.625,368.502,611.9,344.818z");
            sites.rv3.attr({id: 'rv3',fill: '#68923D',parent: 'rvsites','stroke-width': '0','stroke-opacity': '1'}).data('id', 'rv3').data('class', 'rv');
            sites.rv5 =  rsr.path("M611.23,343.279c0,0-10.521-19.58-16.639-30.961l-41.049,17.722l15.15,28.206L611.23,343.279z");
            sites.rv5.attr({id: 'rv5',fill: '#68923D',parent: 'rvsites','stroke-width': '0','stroke-opacity': '1'}).data('id', 'rv5').data('class', 'rv');
            sites.rv6 =  rsr.path("M541.1,304.945l11.857,23.833l41.049-17.721c-4.205-7.824-8.65-16.095-13.273-24.694   L541.1,304.945z");
            sites.rv6.attr({id: 'rv6',fill: '#68923D',parent: 'rvsites','stroke-width': '0','stroke-opacity': '1'}).data('id', 'rv6').data('class', 'rv');
            sites.rv7 =  rsr.path("M580.199,285.118c-4.203-7.823-8.555-15.92-13.008-24.201l-39.242,17.5l12.619,25.283   L580.199,285.118z");
            sites.rv7.attr({id: 'rv7',fill: '#68923D',parent: 'rvsites','stroke-width': '0','stroke-opacity': '1'}).data('id', 'rv7').data('class', 'rv');
            sites.rv8 =  rsr.path("M566.646,259.624c-4.328-8.051-8.754-16.28-13.229-24.601l-37.055,18.096l11.041,24.005   L566.646,259.624z");
            sites.rv8.attr({id: 'rv8',fill: '#68923D',parent: 'rvsites','stroke-width': '0','stroke-opacity': '1'}).data('id', 'rv8').data('class', 'rv');
            sites.rv9 =  rsr.path("M515.869,251.841l37.057-18.098c-3.98-7.4-9.879-17.307-13.91-24.802l-36.365,18.457   L515.869,251.841z");
            sites.rv9.attr({id: 'rv9',fill: '#68923D',parent: 'rvsites','stroke-width': '0','stroke-opacity': '1'}).data('id', 'rv9').data('class', 'rv');
            sites.rv10  = rsr.path("M502.137,226.139l36.365-18.457c-4.852-9.022-7.842-15.64-12.674-24.618l-36.674,17.228   L502.137,226.139z");
            sites.rv10.attr({id: 'rv10',fill: '#68923D',parent: 'rvsites','stroke-width': '0','stroke-opacity': '1'}).data('id', 'rv10').data('class', 'rv');
            sites.rv11  = rsr.path("M488.527,198.773l36.674-17.227c-5.961-11.08-11.863-22.048-17.611-32.726l-35.004,18.294   L488.527,198.773z");
            sites.rv11.attr({id: 'rv11',fill: '#68923D',parent: 'rvsites','stroke-width': '0','stroke-opacity': '1'}).data('id', 'rv11').data('class', 'rv');
            sites.rv12 = rsr.path("M471.912,165.608l35.004-18.294c-4.875-9.06-9.639-17.906-14.229-26.429l-33.658,16.19   L471.912,165.608z");
            sites.rv12.attr({id: 'rv12',fill: '#68923D',parent: 'rvsites','stroke-width': '0','stroke-opacity': '1'}).data('id', 'rv12').data('class', 'rv');
            sites.rv13 = rsr.path("M458.412,135.456l33.656-16.19c-6.207-11.524-12.092-22.444-17.514-32.502l-34.203,16.121   L458.412,135.456z");
            sites.rv13.attr({id: 'rv13',fill: '#68923D',parent: 'rvsites','stroke-width': '0','stroke-opacity': '1'}).data('id', 'rv13').data('class', 'rv');
            sites.rv14 = rsr.path("M439.678,101.312l34.203-16.12c-5.916-10.974-11.273-20.9-15.885-29.432l-32.842,17.314   L439.678,101.312z");
            sites.rv14.attr({id: 'rv14',fill: '#68923D',parent: 'rvsites','stroke-width': '0','stroke-opacity': '1'}).data('id', 'rv14').data('class', 'rv');
            sites.rv15 = rsr.path("M444.395,30.227l-29.908,21.857l10.146,19.594l32.842-17.315   C451.9,44.048,447.432,35.801,444.395,30.227z");
            sites.rv15.attr({id: 'rv15',fill: '#68923D',parent: 'rvsites','stroke-width': '0','stroke-opacity': '1'}).data('id', 'rv15').data('class', 'rv');
            sites.rv16 = rsr.path("M410.086,44.068c0.139,0.234,1.607,2.559,3.912,6.875l29.484-22.634   c-6.078-10.734-15.357-21.107-27.297-24.827l-12.867,33.692C407.426,39.079,408.725,41.771,410.086,44.068z");
            sites.rv16.attr({id: 'rv16',fill: '#68923D',parent: 'rvsites','stroke-width': '0','stroke-opacity': '1'}).data('id', 'rv16').data('class', 'rv');
            sites.rv17 = rsr.path("M402.387,36.758l11.918-34.004c-8.119-2.529-16.783-3.932-27.619-1.471l4.68,35.438   C396.553,35.278,399.986,35.647,402.387,36.758z");
            sites.rv17.attr({id: 'rv17',fill: '#68923D',parent: 'rvsites','stroke-width': '0','stroke-opacity': '1'}).data('id', 'rv17').data('class', 'rv');
            sites.rv18 = rsr.path("M387.941,37.637c0.834-0.291,1.627-0.54,2.385-0.75L383.697,1.95   c-4.029,0.915-7.268,2.448-11.604,4.314c-5.986,2.577-10.969,5.526-15.117,8.722l23.352,26.784   C382.771,39.869,385.531,38.479,387.941,37.637z");
            sites.rv18.attr({id: 'rv18',fill: '#68923D',parent: 'rvsites','stroke-width': '0','stroke-opacity': '1'}).data('id', 'rv18').data('class', 'rv');
            sites.rv19 =  rsr.path("M379.734,42.412l-24.355-25.783c-13.515,12.145-17.721,24.526-17.959,36.699l35.75,0.975   C373.15,49.259,376.078,45.258,379.734,42.412z");
            sites.rv19.attr({id: 'rv19',fill: '#68923D',parent: 'rvsites','stroke-width': '0','stroke-opacity': '1'}).data('id', 'rv19').data('class', 'rv');
            sites.rv21 =  rsr.path("M374.904,63.029c-1.182-2.44-1.684-4.704-1.691-6.792l-35.75-0.974   c0.9,14.185,4.067,22.852,10.067,37.186l34.409-14.816C379.434,72.404,377.08,67.518,374.904,63.029z");
            sites.rv21.attr({id: 'rv21',fill: '#68923D',parent: 'rvsites','stroke-width': '0','stroke-opacity': '1'}).data('id', 'rv21').data('class', 'rv');
            sites.rv22 =  rsr.path("M382.391,78.851l-34.409,14.816c2.732,6.223,6.536,15.269,10.926,25.26l35.225-15.462   C389.945,94.652,386.008,86.393,382.391,78.851z");
            sites.rv22.attr({id: 'rv22',fill: '#68923D',parent: 'rvsites','stroke-width': '0','stroke-opacity': '1'}).data('id', 'rv22').data('class', 'rv');
            sites.rv23 =  rsr.path("M394.627,104.836l-35.225,15.461c3.682,8.377,7.865,17.891,12.408,28.226l36.057-15.716   C403.254,123.034,398.814,113.655,394.627,104.836z");
            sites.rv23.attr({id: 'rv23',fill: '#68923D',parent: 'rvsites','stroke-width': '0','stroke-opacity': '1'}).data('id', 'rv23').data('class', 'rv');
            sites.rv24 =  rsr.path("M408.379,134.241l-36.057,15.715c3.783,8.603,7.822,17.781,12.029,27.34l36.539-16.492   C416.619,151.717,412.43,142.824,408.379,134.241z");
            sites.rv24.attr({id: 'rv24',fill: '#68923D',parent: 'rvsites','stroke-width': '0','stroke-opacity': '1'}).data('id', 'rv24').data('class', 'rv');
            sites.rv25 =  rsr.path("M421.432,162.272l-36.541,16.493c4.262,9.685,8.703,19.77,13.236,30.061l37.529-16.252   C435.656,192.574,426.092,172.185,421.432,162.272z");
            sites.rv25.attr({id: 'rv25',fill: '#68923D',parent: 'rvsites','stroke-width': '0','stroke-opacity': '1'}).data('id', 'rv25').data('class', 'rv');
            sites.rv26 =  rsr.path("M436.191,194.119l-37.529,16.251c4.244,9.632,8.568,19.446,12.91,29.288l37.404-18.239   L436.191,194.119z");
            sites.rv26.attr({id: 'rv26',fill: '#68923D',parent: 'rvsites','stroke-width': '0','stroke-opacity': '1'}).data('id', 'rv26').data('class', 'rv');
            sites.rv27 =  rsr.path("M449.49,222.835l-37.404,18.239c4.02,9.116,8.053,18.253,12.045,27.293l37.422-19.731   L449.49,222.835z");
            sites.rv27.attr({id: 'rv27',fill: '#68923D',parent: 'rvsites','stroke-width': '0','stroke-opacity': '1'}).data('id', 'rv27').data('class', 'rv');
            sites.rv28 =  rsr.path("M462.041,249.964l-37.422,19.732c3.799,8.6,7.561,17.111,11.238,25.424l37.904-20.059   L462.041,249.964z");
            sites.rv28.attr({id: 'rv28',fill: '#68923D',parent: 'rvsites','stroke-width': '0','stroke-opacity': '1'}).data('id', 'rv28').data('class', 'rv');
            sites.rv29 =  rsr.path("M474.223,276.333l-37.902,20.059c3.629,8.203,7.176,16.21,10.598,23.93l38.562-19.86   L474.223,276.333z");
            sites.rv29.attr({id: 'rv29',fill: '#68923D',parent: 'rvsites','stroke-width': '0','stroke-opacity': '1'}).data('id', 'rv29').data('class', 'rv');
            sites.rv30 =  rsr.path("M485.92,301.752l-38.562,19.861c3.996,9.013,7.82,17.621,11.402,25.674l39.277-19.871   L485.92,301.752z");
            sites.rv30.attr({id: 'rv30',fill: '#68923D',parent: 'rvsites','stroke-width': '0','stroke-opacity': '1'}).data('id', 'rv30').data('class', 'rv');
            sites.rv31 =  rsr.path("M498.529,328.7l-39.275,19.871c4.328,9.728,8.301,18.631,11.801,26.437l39.443-19.619   L498.529,328.7z");
            sites.rv31.attr({id: 'rv31',fill: '#68923D',parent: 'rvsites','stroke-width': '0','stroke-opacity': '1'}).data('id', 'rv31').data('class', 'rv');
            sites.rv32 =  rsr.path("M511.029,356.7l-39.443,19.618c4.371,9.75,9.07,20.5,11.707,26.244l41.066-18.045   L511.029,356.7z");
            sites.rv32.attr({id: 'rv32',fill: '#68923D',parent: 'rvsites','stroke-width': '0','stroke-opacity': '1'}).data('id', 'rv32').data('class', 'rv');
            sites.rv33 =  rsr.path("M524.764,386.74l-41.066,18.045c1.5,3.999,6.516,16.387,4.064,28.423l41.846,24.49   C539.197,436.118,531.531,402.784,524.764,386.74z");
            sites.rv33.attr({id: 'rv33',fill: '#68923D',parent: 'rvsites','stroke-width': '0','stroke-opacity': '1'}).data('id', 'rv33').data('class', 'rv');
            sites.rv35 =  rsr.path("M468.797,464.2c7.203,4.754,27.297,25.496,29.453,26.619   c7.297-6.139,17.172-14.557,24.027-20.544l-36.486-29.512C483.195,448.376,478.096,456.53,468.797,464.2z");
            sites.rv35.attr({id: 'rv35',fill: '#68923D',parent: 'rvsites','stroke-width': '0','stroke-opacity': '1'}).data('id', 'rv35').data('class', 'rv');
            rvsites.attr({'id': 'rvsites','name': 'rvsites'});

            //tent sites
            //regex: (data\(\'id\',\s\'tent)([0-9]+)(\'\))(;)
            //replace: $1$2$3.data('class', 'tent');
            var tent_sites = rsr.set();
            sites.tent50 = rsr.path("M 193.03,714.45 161.115,690.318 139.16,722.645 169.537,742.519   z");
            sites.tent50.attr({fill: '#A27A95', id: 'tent50', parent: 'tent_sites','stroke-width': '0','stroke-opacity': '1'}).data('id', 'tent50').data('class', 'tent');
            sites.tent51 = rsr.path("M 92.197,877.453 65.03,875.62 62.863,896.865 91.863,898.201   z");
            sites.tent51.attr({fill: '#A27A95',parent: 'tent_sites','stroke-width': '0','stroke-opacity': '1'}).data('id', 'tent51').data('class', 'tent');
            sites.tent52 = rsr.path("M 47.197,910.621 27.53,937.954 9.53,923.954 31.03,900.454   z");
            sites.tent52.attr({fill: '#A27A95',parent: 'tent_sites','stroke-width': '0','stroke-opacity': '1'}).data('id', 'tent52').data('class', 'tent');
            sites.tent53 = rsr.path("M 30.63,898.91 32.279,882.813 7.986,869.238 0,894.651   z");
            sites.tent53.attr({fill: '#A27A95',parent: 'tent_sites','stroke-width': '0','stroke-opacity': '1'}).data('id', 'tent53').data('class', 'tent');
            sites.tent54 = rsr.path("M 32.713,887.141 49.433,888.065 61.53,863.45 33.53,854.45   z");
            sites.tent54.attr({fill: '#A27A95',parent: 'tent_sites','stroke-width': '0','stroke-opacity': '1'}).data('id', 'tent54').data('class', 'tent');
            sites.tent55 = rsr.path("M125.03,879.453l-28-2l-1.299,20.386l31.974-2.26C127.124,891.259,126.418,886.05,125.03,879.453z");
            sites.tent55.attr({fill: '#A27A95',parent: 'tent_sites','stroke-width': '0','stroke-opacity': '1'}).data('id', 'tent55').data('class', 'tent');
            sites.tent57 = rsr.path("M131.28,910.617L97.187,934.92l32.646,17.265l13.599-30.933   C138.617,918.376,133.946,915.075,131.28,910.617z");
            sites.tent57.attr({fill: '#A27A95',parent: 'tent_sites','stroke-width': '0','stroke-opacity': '1'}).data('id', 'tent57').data('class', 'tent');
            sites.tent59 = rsr.path("M 183.363,940.117 166.197,933.201 155.294,961.175 174.03,965.45   z");
            sites.tent59.attr({fill: '#A27A95',parent: 'tent_sites','stroke-width': '0','stroke-opacity': '1'}).data('id', 'tent59').data('class', 'tent');
            sites.tent58 = rsr.path("M144.947,922.117l-13.599,30.933l22.682,7.734l10.903-27.974   C157.684,929.265,151.346,925.94,144.947,922.117z");
            sites.tent58.attr({fill: '#A27A95',parent: 'tent_sites','stroke-width': '0','stroke-opacity': '1'}).data('id', 'tent58').data('class', 'tent');
            sites.tent56 = rsr.path("M127.754,896.774l-31.974,2.26l-5.75,29.416l6.619,5.247l34.093-24.303   C129.049,905.599,128.536,902.594,127.754,896.774z");
            sites.tent56.attr({fill: '#A27A95',parent: 'tent_sites','stroke-width': '0','stroke-opacity': '1'}).data('id', 'tent56').data('class', 'tent');
            tent_sites.attr({'id': 'tent_sites','name': 'tent_sites'});

            

            //var pond = rsr.path("M531.281,899.271c17.268,4.879,58.799,16.62,61.797,17.529c13.239,4.015,47.422,12.7,65.756,29.034  c3.327,1.559,4.666,1.166,10.416-3.334l48.583-29.333c0,0,19.667-14.667,58.667,4.333c46.652,22.729,81.333,71.334,83.333,74.334  s8.102,9.14-4.331,46.666c-17.835,53.834-34.668,66.501-34.668,66.501s-11.667,4.166-60.334-7.834  c-41.704-10.283-92.667-46.667-105-81.667c-9.041-25.656,0.75-55.334-3-61.75c-1.5-9.584-18.787-20.07-55.333-31.916  c-14.64-4.745-42.667-13.334-67.333-20c-4.333-3.333-7.952-6.19-8.667-12l2.333-1C523.5,888.834,526.706,897.978,531.281,899.271z").attr({fill: '#00BBD7',id: 'pond','stroke-width': '0','stroke-opacity': '0'}).data('id', 'pond');
            var pond = rsr.set();
            var path_g = rsr.path("M333.811,582.221c17.267,4.879,58.798,16.62,61.796,17.529c13.24,4.015,47.422,12.7,65.756,29.034   c3.328,1.559,4.666,1.166,10.416-3.334l38.25-25c0,0,30-19,69,0c46.652,22.729,68,54,70,57s23.074,19.935,10,66   c-14,49.333-26,58-26,58s-17,17-59,8s-108-65-116-91s0.75-55.334-3-61.75c-1.5-9.584-18.787-20.07-55.332-31.916   c-14.641-4.745-42.668-13.334-67.334-20c-4.333-3.334-7.952-6.19-8.667-12l2.333-1C326.03,571.784,329.235,580.928,333.811,582.221   z");
            path_g.attr({fill: '#00BBD7',parent: 'pond','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_g');
            pond.attr({'id': 'pond','name': 'pond'});
            
            //dock
            var dock = rsr.set();
            var path_h = rsr.path("M 523.029,768.118 536.812,744.688 547.029,750.118 533.029,773.451   z");
            path_h.attr({fill: '#9B8157',parent: 'dock','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_h');
            var path_i = rsr.path("M 526.688,761.562 527,761 535.875,765.75 535.438,766.438   z");
            path_i.attr({fill: '#6D5A3E',stroke: '#6D5A3E',parent: 'dock','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_i');
            var path_j = rsr.path("M 525.625,763.688 525.938,763.125 534.812,767.875 534.375,768.562   z");
            path_j.attr({fill: '#6D5A3E',stroke: '#6D5A3E',parent: 'dock','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_j');
            var path_k = rsr.path("M 524.375,765.75 524.688,765.188 533.562,769.938 533.125,770.625   z");
            path_k.attr({fill: '#6D5A3E',stroke: '#6D5A3E',parent: 'dock','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_k');
            var path_l = rsr.path("M 523.312,767.75 523.625,767.188 532.5,771.938 532.062,772.625   z");
            path_l.attr({fill: '#6D5A3E',stroke: '#6D5A3E',parent: 'dock','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_l');
            var path_m = rsr.path("M 535.875,746.375 536.188,745.812 545.062,750.562 544.625,751.25   z");
            path_m.attr({fill: '#6D5A3E',stroke: '#6D5A3E',parent: 'dock','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_m');
            var path_n = rsr.path("M 534.626,748.562 534.938,748 543.813,752.75 543.376,753.438   z");
            path_n.attr({fill: '#6D5A3E',stroke: '#6D5A3E',parent: 'dock','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_n');
            var path_o = rsr.path("M 533.188,750.875 533.5,750.312 542.375,755.062 541.938,755.75   z");
            path_o.attr({fill: '#6D5A3E',stroke: '#6D5A3E',parent: 'dock','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_o');
            var path_p = rsr.path("M 531.688,753.188 532,752.625 540.875,757.375 540.438,758.062   z");
            path_p.attr({fill: '#6D5A3E',stroke: '#6D5A3E',parent: 'dock','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_p');
            var path_q = rsr.path("M 530.438,755.375 530.75,754.812 539.625,759.562 539.188,760.25   z");
            path_q.attr({fill: '#6D5A3E',stroke: '#6D5A3E',parent: 'dock','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_q');
            var path_r = rsr.path("M 529.062,757.562 529.375,757 538.25,761.75 537.812,762.438   z");
            path_r.attr({fill: '#6D5A3E',stroke: '#6D5A3E',parent: 'dock','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_r');
            var path_s = rsr.path("M 527.812,759.5 528.125,758.938 537,763.688 536.562,764.375   z");
            path_s.attr({fill: '#6D5A3E',stroke: '#6D5A3E',parent: 'dock','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_s');
            dock.attr({'id': 'dock','name': 'dock'});
            
            //rowboat
            var rowboat = rsr.set();
            var path_t = rsr.path("M510.029,757.39l9.193-13.278c0,0,2.041-2.042,7.557-5.106c0,0-0.203,7.149-1.021,9.192   c-0.816,2.043-8.17,14.503-8.17,14.503S511.256,760.657,510.029,757.39z");
            path_t.attr({fill: '#818284',parent: 'rowboat','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_t');
            var path_u = rsr.path("M511.029,757.7l8.25-12.25c0,0,4.25-3.25,6-4.25c0,0,0.5,4.5-0.25,5.75s-8.25,14.25-8.25,14.25   S513.529,760.2,511.029,757.7z");
            path_u.attr({fill: '#B1C0C9',parent: 'rowboat','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_u');
            var path_v = rsr.path("M 517.363,747.283 523.363,750.283 521.621,753.079 515.445,749.857   z");
            path_v.attr({fill: '#818284',parent: 'rowboat','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_v');
            var path_w = rsr.path("M 513.697,753.617 519.428,756.593 518.197,759.784 511.697,756.117   z");
            path_w.attr({fill: '#818284',parent: 'rowboat','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_w');
            rowboat.attr({'id': 'rowboat','name': 'rowboat'});
            
            //kayak
            var kayak = rsr.set();
            var path_x = rsr.path("M539.029,779.45c0,0-0.666-14,15.334-25.333C554.363,754.117,551.697,774.783,539.029,779.45z");
            path_x.attr({fill: '#ED7B31',parent: 'kayak','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_x');
            var ellipse_y = rsr.ellipse(546.528, 767.701, 2.507, 3.768);
            ellipse_y.attr({fill: '#E0E9ED',parent: 'kayak','stroke-width': '0','stroke-opacity': '1'});
            ellipse_y.transform("m0.855 0.5186 -0.5186 0.855 477.4138 -172.1295").data('id', 'ellipse_y');
            kayak.attr({'id': 'kayak','name': 'kayak'});
            
            var roads = rsr.set();
            var path_bv = rsr.path("M381.029,76.95c0,0-15.5-28.5,3-36c17.039-6.907,22-3,29,9.5   c8.645,15.436,160.033,322.082,162,327c3.668,9.167,16.918,43.25-47.248,89.417c0,0,8.248-11.417,7.998-23.917   c-0.342-17.087,0.75-35-8.25-55.5C513.322,355.09,381.029,76.95,381.029,76.95z");
            path_bv.attr({fill: 'none',stroke: '#C6C8CA',"stroke-width": '8',parent: 'roads','stroke-opacity': '1'}).data('id', 'path_bv');
            var path_bw = rsr.path("M86.905,926.825c-7.667-5.167-46.708-22.708-46.708-22.708   s-18.709-10.459-3.292-20.292");
            path_bw.attr({fill: 'none',stroke: '#C6C8CA',"stroke-width": '8',parent: 'roads','stroke-opacity': '1'}).data('id', 'path_bw');
            var path_bx = rsr.path("M553.029,848.117c0,0,28.668,15.333,40.668,10.667c9.18-3.569-18.668,20.333-35.668,69.333l-24.002-8.334   l6-14.667l-8.666-2C531.361,903.116,547.029,875.117,553.029,848.117z");
            path_bx.attr({fill: '#C6C8CA',parent: 'roads','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_bx');
            var path_by = rsr.path("M36.405,879.575c0,0,13.875-1.125,13.692,8.622c-2.317,14.128,0.433,15.128,6.933,19.753   c-12.5,0.25-20.933-7.753-20.933-7.753S26.763,883.864,36.405,879.575z");
            path_by.attr({fill: '#C6C8CA',parent: 'roads','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_by');
            var path_bz = rsr.path("M1042,277L755,647l-60,103c-101,282-121,336-121,336");
            path_bz.attr({fill: 'none',stroke: '#C6C8CA',"stroke-width": '15',parent: 'roads','stroke-opacity': '1'}).data('id', 'path_bz');
            roads.attr({'id': 'roads','name': 'roads'});
            var group_b = rsr.set();
            var path_ca = rsr.path("M529.029,465.95c0,0-55.428,42.379-87,90.5c-31,47.25-33.5,57.5-36.5,71.5    c-3.051,14.237-8,40.5,12,69.5s56,65,96.5,84.5s142.5,60,144,60");
            path_ca.attr({fill: 'none',stroke: '#C6C8CA',"stroke-width": '8',parent: 'roads','stroke-opacity': '1'}).data('id', 'path_ca');
            group_b.attr({'parent': 'roads','name': 'group_b'});
            var group_c = rsr.set();
            var path_cb = rsr.path("M516.529,783.45c0,0,36.5,51.5,37.5,82");
            path_cb.attr({fill: 'none',stroke: '#C6C8CA',"stroke-width": '8',parent: 'roads','stroke-opacity': '1'}).data('id', 'path_cb');
            group_c.attr({'parent': 'roads','name': 'group_c'});
            var group_d = rsr.set();
            var path_cc = rsr.path("M642.529,835.95c0,0-38.5,13-62,38.5");
            path_cc.attr({fill: 'none',stroke: '#C6C8CA',"stroke-width": '8',parent: 'roads','stroke-opacity': '1'}).data('id', 'path_cc');
            group_d.attr({'parent': 'roads','name': 'group_d'});
            var group_e = rsr.set();
            var path_cd = rsr.path("M403.404,661.325c0,0-33-58-149.5-6c0,0-75.5,51.5-119.5,154.5    c0,0-12,18.5-29.5,37s-7,40-10,55.5s-8,24.5-8,24.5s42,26.5,92,41.5");
            path_cd.attr({fill: 'none',stroke: '#C6C8CA',"stroke-width": '8',parent: 'roads','stroke-opacity': '1'}).data('id', 'path_cd');
            group_e.attr({'parent': 'roads','name': 'group_e'});
          
          //stuff around campground
            
            var beach = rsr.set();
            var path_f = rsr.path("M483.029,617.45l-13-28c0,0,16-17,32-23s27,2,30,3s4,25,4,25L483.029,617.45z");
            path_f.attr({fill: '#F9DB94',parent: 'beach','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_f');
            beach.attr({'id': 'beach','name': 'beach'});
            

            var barn = rsr.set();
            var path_ce = rsr.path("M 573,816.667 558.999,851.667 576.001,858.667 582,843.667 598,849.666 605.998,829.669   z");
            path_ce.attr({fill: '#B55332',parent: 'barn','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_ce');
            barn.attr({'id': 'barn','name': 'barn'});

            var office = rsr.set();
            var path_cf = rsr.path("M 540.027,905.116 533.029,922.45 518.029,917.447 525.029,899.447   z");
            path_cf.attr({fill: '#B55332',parent: 'office','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_cf');
            office.attr({'id': 'office','name': 'office'});
            
            var pavillion = rsr.set();
            pavillion.attr({'id': 'pavillion','name': 'pavillion'});
            var group_a = rsr.set();
            var path_ae = rsr.path("M 388.029,678.45 399.029,709.45 381.529,715.45 370.029,684.45    z");
            path_ae.attr({fill: '#879ACF',parent: 'pavillion','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_ae');
            group_a.attr({'parent': 'pavillion','name': 'group_a'});
            
            var route9nlabel = rsr.rect(765, 580, 60, 40, 10).attr({"fill": "#fff",'stroke-color': '#000','stroke-width': '1','stroke-opacity': '1'}).data('id', 'route9nlabel');
            var route9nlabel2 = rsr.rect(560, 1030, 60, 40, 10).attr({"fill": "#fff",'stroke-color': '#000','stroke-width': '1','stroke-opacity': '1'}).data('id', 'route9nlabel2');
            var route9nlabeltext = rsr.text(795, 600, "9N").attr(text9n);
            var route9nlabel2text = rsr.text(590, 1050, "9N").attr(text9n);
          
            var rsrGroups = [beach,pond,dock,rowboat,kayak,bathhouses,cabins,pavillion,group_a,rvsites,tent_sites,roads,group_b,group_c,group_d,group_e,barn,office];

	        
	        //labels for special points
	          labels.beach = rsr.text(503.167,590, "Beach").attr(text);
  	        labels.portapotty = rsr.text(60.08002, 1000.59534, "Port-a-potty").attr(text);
  	        labels.portapottyline = rsr.path("M70.08002 990.59534L75 920.59534");
          
          //used to track currently displayed site for hiding
          var current = null;
          //original color to return to on mouseout
          var originalColor = null;
          
          for (var l in labels) {
            (function (labels, l) {
              $(labels[0]).attr("class", "labels");
            })(labels[l],l); 
          }
          
          for (var site in sites) {
                addNumber(sites[site]);
                sites[site].color = Raphael.color("#333");
                //get site type then use it to set the color to return to after rollover
                (function (st, site) {
                    $(st[0]).attr("class","rvsites sites");
                    $(st[0]).css("cursor", "pointer");
                    $(st[0]).mouseover(function() {
                        st.animate({fill: st.color, stroke: "#ccc"}, 500);
                        //rsr.safari();
                    });
                    $(st[0]).click(function() {
                        $('.info').hide();
                        current && ($(current).hide());
                        //rsr.safari();
                        $("#"+site).css("display", "block");
                        current = site;
                        st.animate({fill: colors[st.data('class')], stroke: "#666"}, 500);
                    });
                    $(st[0]).mouseout(function () {
                        st.animate({fill: colors[st.data('class')], stroke: "#666"}, 500);
                        //rsr.safari();
                    });
                })(sites[site], site);
            }
            
            //load json and parse siteData
            $.ajax({
              url: 'sites.json',
              dataType: 'json',
              cache: false,
              success: function(data, textStatus) {
                $.each(data["sites"].rv, function(key, val) {
                  if (val.seasonal === true) {
                    (function(id) {
                      var target = 'rv' + id;
                      sites[target].data({class: 'seasonal'});
                      sites[target].animate({fill: seasonal.fill}, 500); //works but doesn't change back properly
                    })(val.id);
                  }
                  
                  $('#info-column').append('<div id="rv' + val.id + '" class="info">\
                  <h2>RV site ' + val.id + '</h2>\
                  [image]\
                  <ul>\
                      <li>Electric: 20amp &amp; 30amp</li>\
                      <li>Water</li>\
                      <li>Sewage</li>\
                      <li>Max RV length: ' + val.maxLength + '&#39;</li>\
                  </ul>\
              </div>');
                });
                
                $.each(data["sites"].cabin, function(key, val) {
                  //items.push('<li id="' + key + '">' + val + '</li>');
                  $('#info-column').append('<div id="cabin' + val.id + '" class="info">\
                  <h2>Cabin ' + val.id + '</h2>\
                  <img src="images/' + val["images"][0].file + '" />\
                  ' + val.description + '\
              </div>');
                });
              },
              error: function() {
                //alert('error');
              }
            });
            
            // show or hide labels on special map points of interest
            var showOrHide = false;
            $("#hide").click(function(){
                if ( showOrHide == true ) {
                    $('.labels').show();
                    showOrHide = false;
                } else if ( showOrHide == false ) {
                    $('.labels').hide();
                    showOrHide = true;
                }
            });
});   