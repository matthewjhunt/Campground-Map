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
  	        "rv": "#69923E",
  	        "seasonal": "#a8d485",
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
        
          var rsr = Raphael('paper', '1056', '1623');
          var key = Raphael('map-key');
          
          var sites = {};
          var tentsites = {};
          var bathhouses = {};
          var cabins = {};
          var labels = {};
          var siteNumbers = {};

          //key
            var keycabin = key.rect(0, 0, 50, 50).attr({fill: '#ED7B31',id: 'key-cabin','stroke-width': '0','stroke-opacity': '0'}).data('id', 'key-cabin');
            var keyrv = key.rect(0, 60, 50, 50).attr(rv).data('id', 'key-rv');
            var keyseasonal = key.rect(0, 120, 50, 50).attr(seasonal).data('id', 'key-seasonal');
            var keytent = key.rect(0, 180, 50, 50).attr(tent).data('id', 'key-tent');
            var keybeach = key.rect(0, 240, 50, 50).attr({fill: colors['beach'],id: 'key-beach','stroke-width': '0','stroke-opacity': '0'}).data('id', 'key-beach');
          
            var pond = rsr.path("M531.281,899.271c17.268,4.879,58.799,16.62,61.797,17.529c13.239,4.015,47.422,12.7,65.756,29.034  c3.327,1.559,4.666,1.166,10.416-3.334l48.583-29.333c0,0,19.667-14.667,58.667,4.333c46.652,22.729,81.333,71.334,83.333,74.334  s8.102,9.14-4.331,46.666c-17.835,53.834-34.668,66.501-34.668,66.501s-11.667,4.166-60.334-7.834  c-41.704-10.283-92.667-46.667-105-81.667c-9.041-25.656,0.75-55.334-3-61.75c-1.5-9.584-18.787-20.07-55.333-31.916  c-14.64-4.745-42.667-13.334-67.333-20c-4.333-3.333-7.952-6.19-8.667-12l2.333-1C523.5,888.834,526.706,897.978,531.281,899.271z").attr({fill: '#00BBD7',id: 'pond','stroke-width': '0','stroke-opacity': '0'}).data('id', 'pond');

          //bathouses
            bathhouses[1] = rsr.rect(727.834, 672.833, 26.999, 28).attr({x: '727.834',y: '672.833',fill: '#F4BB3A',id: 'bh1','stroke-width': '0','stroke-opacity': '0'}).transform("m0.9075 -0.42 0.42 0.9075 -219.9036 374.8425").data('id', 'bh1');
            bathhouses[2] = rsr.rect(623.834, 443.5, 26.999, 28).attr({x: '623.834',y: '443.5',fill: '#F4BB3A',id: 'bh2','stroke-width': '0','stroke-opacity': '0'}).transform("m0.9075 -0.42 0.42 0.9075 -133.2068 309.9613").data('id', 'bh2');
            var portapotty = rsr.rect(803.08002, 959.59534, 9.9385405, 9.9375401).attr({x: '803.08002',y: '959.59534',id: 'portapotty',fill: '#f4bb3a','stroke-width': '0','stroke-opacity': '0'}).transform("m0.88744101,0.4609213,-0.4609213,0.88744101,0,0").data('id', 'portapotty');
          
          //cabins
            sites.cabin1 = rsr.path("M 610.333,906 620,886.667 594.453,874.238 586.167,895.643  z").attr({id: 'cabin1',fill: '#ED7B31','stroke-width': '0','stroke-opacity': '0'}).data('id', 'cabin1').data('class', 'cabin');
            sites.cabin2 = rsr.path("M 629.438,838.916 610.41,850.935 627.512,872.462 641.864,861.06  z").attr({id: 'cabin2',fill: '#ed7b31','stroke-width': '0','stroke-opacity': '0'}).data('id', 'cabin2').data('class', 'cabin');
          
          //rv sites
            sites.rv1 = rsr.path("M 748.5,823.834 715.062,794.312 730,777.562 767.167,803.834  z").attr({fill: '#68923D', id: 'rv1','stroke-width': '0','stroke-opacity': '0'}).data('id', 'rv1').data('class', 'rv');
            sites.rv2 = rsr.path("M751.625,761.875l30.875,23.292l13.334-18c0,0-23.834-15.042-30.209-18.855  C761.312,754.062,751.625,761.875,751.625,761.875z").attr({fill: '#68923D',id: 'rv2','stroke-width': '0','stroke-opacity': '0'}).data('id', 'rv2').data('class', 'rv');
            sites.rv3 = rsr.path("M807.977,655.641l-40.138,17.66c1.457,3.127,2.81,6.028,4.042,8.668c4.723,10.117,6.36,12.72,7.56,18.84  c11.521-0.96,50.761-0.24,50.761-0.24S821.536,683.048,807.977,655.641z").attr(rv).data('id', 'rv3').data('class', 'rv');
            sites.rv5 = rsr.path("M792.119,623.872l-38.123,20.039c4.954,10.66,9.383,20.184,13.107,28.181l40.137-17.66  C802.703,645.26,797.612,634.972,792.119,623.872z").attr(rv).data('id', 'rv5').data('class', 'rv');
            sites.rv6 = rsr.path("M779.866,599.151l-37.821,19.144c4.028,8.671,7.852,16.901,11.398,24.536l38.124-20.039  C787.841,615.263,783.924,607.348,779.866,599.151z").attr(rv).data('id', 'rv6').data('class', 'rv');
            sites.rv7 = rsr.path("M779.396,598.146c-3.795-7.667-7.716-15.59-11.727-23.69l-36.913,19.542  c3.733,8.038,7.354,15.833,10.819,23.292L779.396,598.146z").attr({fill: '#68923D',id: 'rv7','stroke-width': '0','stroke-opacity': '0'}).data('id', 'rv7').data('class', 'rv');
            sites.rv8 = rsr.path("m 767.166,573.41 c -4.354,-8.794 -8.813,-17.802 -13.332,-26.928 l -36.04,19.658 c 4.253,9.149 8.423,18.125 12.459,26.812 l 36.913,-19.542 z").attr({id: 'rv8',fill: '#68923d','stroke-width': '0','stroke-opacity': '0'}).data('id', 'rv8').data('class', 'rv');
            sites.rv9 = rsr.path("M753.301,545.432c-3.859-7.794-7.763-15.677-11.681-23.587l-36.585,16.954  c4.122,8.859,8.211,17.654,12.227,26.292L753.301,545.432z").attr({fill: '#68923D',id: 'rv9','stroke-width': '0','stroke-opacity': '0'}).data('id', 'rv9').data('class', 'rv');
            sites.rv10 = rsr.path("M741.091,520.717c-4.6-9.286-9.218-18.609-13.812-27.88l-36.493,15.366  c4.574,9.818,9.167,19.682,13.72,29.468L741.091,520.717z").attr({fill: '#68923D',id: 'rv10','stroke-width': '0','stroke-opacity': '0'}).data('id', 'rv10').data('class', 'rv');
            sites.rv11 = rsr.path("M726.711,491.652c-4.56-9.204-9.095-18.354-13.558-27.359l-36.395,13.865  c4.433,9.495,8.937,19.153,13.459,28.86L726.711,491.652z").attr({fill: '#68923D',id: 'rv11','stroke-width': '0','stroke-opacity': '0'}).data('id', 'rv11').data('class', 'rv');
            sites.rv12 = rsr.path("M712.597,463.063c-5.102-10.292-10.107-20.391-14.957-30.166l-34.577,15.924  c4.269,9.117,8.667,18.527,13.14,28.107L712.597,463.063z").attr({fill: '#68923D',id: 'rv12','stroke-width': '0','stroke-opacity': '0'}).data('id', 'rv12').data('class', 'rv');
            sites.rv13 = rsr.path("M697.041,431.724c-4.852-9.781-9.54-19.231-14.002-28.221l-34.352,14.785  c4.375,9.302,8.994,19.146,13.776,29.36L697.041,431.724z").attr({fill: '#68923D',id: 'rv13','stroke-width': '0','stroke-opacity': '0'}).data('id', 'rv13').data('class', 'rv');
            sites.rv14 = rsr.path("M682.422,402.214c-5.822-11.728-11.249-22.652-16.143-32.494l-33.848,14.179  c4.688,9.866,9.956,21.02,15.638,33.1L682.422,402.214z").attr({fill: '#68923D',id: 'rv14','stroke-width': '0','stroke-opacity': '0'}).data('id', 'rv14').data('class', 'rv');
            sites.rv15 = rsr.path("M650.925,338.851l-33.154,14.779c1.476,2.865,3.21,6.345,5.258,10.599  c2.611,5.424,5.558,11.594,8.775,18.365l33.848-14.179C659.925,356.9,654.931,346.873,650.925,338.851z").attr({fill: '#68923D',id: 'rv15','stroke-width': '0','stroke-opacity': '0'}).data('id', 'rv15').data('class', 'rv');
            sites.rv16 = rsr.path("M608.892,338.295c1.122,1.494,3.116,3.938,8.303,14.001l33.154-14.78  c-5.547-11.106-9.218-18.405-10.365-20.584c-2.801-5.315-7.962-10.346-14.679-14.469l-21.052,31.003  C606.051,334.907,607.596,336.566,608.892,338.295z").attr({fill: '#68923D',id: 'rv16','stroke-width': '0','stroke-opacity': '0'}).data('id', 'rv16').data('class', 'rv');
            sites.rv17 = rsr.path("M603.299,332.861l21.052-31.003c-10.927-6.707-25.993-10.989-41.835-10.124l1.359,37.129  C592.214,326.877,598.623,329.115,603.299,332.861z").attr({fill: '#68923D',id: 'rv17','stroke-width': '0','stroke-opacity': '0'}).data('id', 'rv17').data('class', 'rv');
            sites.rv18 = rsr.path("M575.832,331.198c2.256-1.021,4.391-1.744,6.417-2.227l-1.358-37.129  c-7.834,0.428-15.856,2.108-23.662,5.389c-5.296,2.226-9.898,4.723-13.898,7.421l21.703,33.39  C567.67,335.216,571.226,332.838,575.832,331.198z").attr({fill: '#68923D',id: 'rv18','stroke-width': '0','stroke-opacity': '0'}).data('id', 'rv18').data('class', 'rv');
            sites.rv19 = rsr.path("M564.159,338.644l-21.703-33.39c-20.786,14.022-25.173,33.483-24.716,48.65l40.478,0.826  C558.078,348.969,559.897,343.215,564.159,338.644z").attr({fill: '#68923D',id: 'rv19','stroke-width': '0','stroke-opacity': '0'}).data('id', 'rv19').data('class', 'rv');
            sites.rv21 = rsr.path("M561.6,368.779c-2.045-3.77-3.197-8.001-3.3-12.229l-40.478-0.826c0.402,13.387,4.578,23.427,4.578,23.427  s2.779,5.752,7.73,16.073l38.043-14.155C565.861,376.695,563.655,372.567,561.6,368.779z").attr({fill: '#68923D',id: 'rv21','stroke-width': '0','stroke-opacity': '0'}).data('id', 'rv21').data('class', 'rv');
            sites.rv22 = rsr.path("M568.723,382.218l-38.043,14.155c3.652,7.612,8.492,17.723,14.264,29.832l37.814-17.017  C577.877,399.695,573.106,390.508,568.723,382.218z").attr({fill: '#68923D',id: 'rv22','stroke-width': '0','stroke-opacity': '0'}).data('id', 'rv22').data('class', 'rv');
            sites.rv23 = rsr.path("M583.335,410.346l-37.813,17.016c4.09,8.58,8.653,18.177,13.6,28.606l37.659-19.267  C592.35,427.959,587.797,419.025,583.335,410.346z").attr({fill: '#68923D',id: 'rv23','stroke-width': '0','stroke-opacity': '0'}).data('id', 'rv23').data('class', 'rv');
            sites.rv24 = rsr.path("M597.344,437.819l-37.659,19.267c4.059,8.559,8.38,17.694,12.908,27.292l38.175-19.955  C606.598,456.127,602.04,447.082,597.344,437.819z").attr({fill: '#68923D',id: 'rv24','stroke-width': '0','stroke-opacity': '0'}).data('id', 'rv24').data('class', 'rv');
            sites.rv25 = rsr.path("M611.316,465.49l-38.176,19.955c3.728,7.901,7.601,16.126,11.588,24.615l39.99-17.867  C621.204,485.193,616.571,475.945,611.316,465.49z").attr({fill: '#68923D',id: 'rv25','stroke-width': '0','stroke-opacity': '0'}).data('id', 'rv25').data('class', 'rv');
            sites.rv26 = rsr.path("M629.911,502.676c-1.166-2.297-2.755-5.456-4.671-9.272l-39.99,17.868  c4.753,10.121,9.675,20.629,14.714,31.425l38.734-21.84C635.134,513.262,632.161,507.121,629.911,502.676z").attr({fill: '#68923D',id: 'rv26','stroke-width': '0','stroke-opacity': '0'}).data('id', 'rv26').data('class', 'rv');
            sites.rv27 = rsr.path("M639.27,521.998l-38.733,21.84c4.163,8.921,8.416,18.057,12.718,27.328l38.736-21.406  C647.219,539.142,642.928,529.792,639.27,521.998z").attr({fill: '#68923D',id: 'rv27','stroke-width': '0','stroke-opacity': '0'}).data('id', 'rv27').data('class', 'rv');
            sites.rv28 = rsr.path("M652.489,550.882l-38.737,21.406c3.987,8.591,8.023,17.313,12.087,26.123l37.852-22.265  C659.732,567.104,655.979,558.646,652.489,550.882z").attr({fill: '#68923D',id: 'rv28','stroke-width': '0','stroke-opacity': '0'}).data('id', 'rv28').data('class', 'rv');
            sites.rv29 = rsr.path("M664.204,577.242l-37.852,22.265c4.168,9.036,8.367,18.173,12.573,27.355l37.866-20.492  C672.421,596.128,668.206,586.381,664.204,577.242z").attr({fill: '#68923D',id: 'rv29','stroke-width': '0','stroke-opacity': '0'}).data('id', 'rv29').data('class', 'rv');
            sites.rv30 = rsr.path("M677.289,607.533l-37.867,20.492c4.058,8.858,8.122,17.765,12.175,26.681l36.974-20.434  C684.724,625.051,680.95,616.111,677.289,607.533z").attr({fill: '#68923D',id: 'rv30','stroke-width': '0','stroke-opacity': '0'}).data('id', 'rv30').data('class', 'rv');
            sites.rv31 = rsr.path("M689,635.75l-36.906,20.083c4.147,9.125,11.277,25.259,15.378,34.363l36.284-19.457  C699.806,661.048,692.828,644.924,689,635.75z").attr({fill: '#68923D',id: 'rv31','stroke-width': '0','stroke-opacity': '0'}).data('id', 'rv31').data('class', 'rv');
            sites.rv32 = rsr.path("M704.281,671.864l-36.284,19.457c3.868,8.587,7.706,18.146,11.499,26.649l37.629-13.147  C712.818,693.953,708.524,682.276,704.281,671.864z").attr({fill: '#68923D',id: 'rv32','stroke-width': '0','stroke-opacity': '0'}).data('id', 'rv32').data('class', 'rv');
            sites.rv33 = rsr.path("M722.665,719.129c-2.673-6.879-2.347-6.69-5.019-13.435l-37.629,13.147c1.948,4.368,0.887,1.718,2.807,6.048  c1.483,3.347,5.062,14.289,1.793,27.356l39.631,17.512C733.927,752.787,722.665,719.129,722.665,719.129z").attr({fill: '#68923D',id: 'rv33','stroke-width': '0','stroke-opacity': '0'}).data('id', 'rv33').data('class', 'rv');
            sites.rv35 = rsr.path("M666.366,781.127c7.2,4.8,27.681,25.12,27.681,25.12s22.161-25.039,27.201-30.959  c1.044-1.108,1.937-2.35,2.703-3.693l-39.632-17.511C682.166,762.695,677.045,772.229,666.366,781.127z").attr({fill: '#68923D',id: 'rv35','stroke-width': '0','stroke-opacity': '0'}).data('id', 'rv35').data('class', 'rv');
          
            //tent sites
            sites.tent50 = rsr.path("M 372.5,1009.167 342.608,987.964 318.63,1023.027 349.007,1042.901  z").attr({fill: '#A27A95',id: 'tent50','stroke-width': '0','stroke-opacity': '0'}).data('id', 'tent50').data('class', 'tent');
            sites.tent51 = rsr.path("M 291.5,1199.5 265.5,1189.5 260.5,1215.5 288.5,1223.5  z").attr({fill: '#A27A95',id: 'tent51','stroke-width': '0','stroke-opacity': '0'}).data('id', 'tent51').data('class', 'tent');
            sites.tent55 = rsr.path("M321.964,1201.864l-26.88-1.92c0,0-0.327,10.062-1.73,21.316l31.48-3.114  C324.269,1213.987,323.377,1208.578,321.964,1201.864z").attr({fill: '#A27A95',id: 'tent55','stroke-width': '0','stroke-opacity': '0'}).data('id', 'tent55').data('class', 'tent');
            sites.tent56 = rsr.path("M324.75,1219.072l-31.48,3.114c-1.011,8.1-2.579,16.815-4.989,22.843c1.357,1.158,2.744,2.277,4.149,3.366  l33.273-19.409C325.655,1227.66,325.471,1224.391,324.75,1219.072z").attr({fill: '#A27A95',id: 'tent56','stroke-width': '0','stroke-opacity': '0'}).data('id', 'tent56').data('class', 'tent');
            sites.tent57 = rsr.path("M326.01,1230.185c0,0,0-0.229-0.017-0.684l-33.273,19.41c7.594,5.882,15.831,10.772,23.99,14.814  l19.057-28.364L326.01,1230.185z").attr({fill: '#A27A95',id: 'tent57','stroke-width': '0','stroke-opacity': '0'}).data('id', 'tent57').data('class', 'tent');
            sites.tent58 = rsr.path("M336.62,1235.693l-19.057,28.364c8.584,4.252,17.078,7.559,24.657,10.095l11.396-29.439L336.62,1235.693z").attr({fill: '#A27A95',id: 'tent58','stroke-width': '0','stroke-opacity': '0'}).data('id', 'tent58').data('class', 'tent');
            sites.tent59 = rsr.path("M374.84,1255.815l-20.287-10.764l-11.396,29.439c15.958,5.339,27.843,7.244,27.843,7.244L374.84,1255.815z").attr({fill: '#A27A95',id: 'tent59','stroke-width': '0','stroke-opacity': '0'}).data('id', 'tent59').data('class', 'tent');
            sites.tent52 = rsr.path("M 245.829,1226.108 222.888,1255.869 202.247,1238.009 226.065,1213.562  z").attr({fill: '#A27A95',id: 'tent52','stroke-width': '0','stroke-opacity': '0'}).data('id', 'tent52').data('class', 'tent');
            sites.tent53 = rsr.path("M 224.5,1212 233.915,1195.376 203.74,1166.979 189.817,1191.456  z").attr({fill: '#A27A95',id: 'tent53','stroke-width': '0','stroke-opacity': '0'}).data('id', 'tent53').data('class', 'tent');
            sites.tent54 = rsr.path("M 233.84,1203.097 252.56,1199.278 254.155,1157.872 226.553,1163.45  z").attr({fill: '#A27A95',id: 'tent54','stroke-width': '0','stroke-opacity': '0'}).data('id', 'tent54').data('class', 'tent');
          
          //dock
          var dock = rsr.set();
            var dockmain = rsr.path("M 744.5,1067.168 730.5,1090.501 720.5,1085.168 733.167,1061.168  z");
            dockmain.attr({id: 'dockmain',parent: 'dock',fill: '#9b8157','stroke-width': '0','stroke-opacity': '0'});
            dockmain.transform("t-4.8136233e-6,-2.0818327").data('id', 'dockmain');
            dock.attr({'id': 'dock','name': 'dock'});
            dock.transform("t-4.8136233e-6,-2.0818327");
          
          //kayak
          var kayak = rsr.set();
            var path10392 = rsr.path("m 736.5,1096.5 c 0,0 -0.667,-14 15.333,-25.333 0,0 -2.666,20.666 -15.333,25.333 z");
            path10392.attr({id: 'path10392',parent: 'kayak',fill: '#ed7b31','stroke-width': '0','stroke-opacity': '0'}).data('id', 'path10392');
            var hole = rsr.ellipse(743.99902, 1084.75, 2.5079999, 3.7679999);
            hole.attr({id: 'hole',parent: 'kayak',fill: '#e0e9ed','stroke-width': '0','stroke-opacity': '0'});
            hole.transform("m0.855,0.5186,-0.5186,0.855,670.3517,-228.5635").data('id', 'hole');
            kayak.attr({'id': 'kayak','name': 'kayak'});
          
          //boat
          var boat = rsr.set();
            var path10396 = rsr.path("M707.5,1074.439l9.192-13.278c0,0,2.042-2.042,7.558-5.106c0,0-0.204,7.149-1.021,9.192  s-8.171,14.503-8.171,14.503S708.726,1077.707,707.5,1074.439z");
            path10396.attr({id: 'path10396',fill: '#818284',parent: 'boat','stroke-width': '0','stroke-opacity': '0'}).data('id', 'path10396');
            var path10398 = rsr.path("M708.5,1074.75l8.25-12.25c0,0,4.25-3.25,6-4.25c0,0,0.5,4.5-0.25,5.75s-8.25,14.25-8.25,14.25  S711,1077.25,708.5,1074.75z");
            path10398.attr({id: 'path10398',fill: '#B1C0C9',parent: 'boat','stroke-width': '0','stroke-opacity': '0'}).data('id', 'path10398');
            var polygon10400 = rsr.path("M 714.833,1064.333 720.833,1067.333 719.092,1070.129 712.916,1066.907  z");
            polygon10400.attr({id: 'polygon10400',fill: '#818284',parent: 'boat','stroke-width': '0','stroke-opacity': '0'}).data('id', 'polygon10400');
            var polygon10404 = rsr.path("M 711.167,1070.667 716.897,1073.643 715.667,1076.834 709.167,1073.167  z");
            polygon10404.attr({id: 'polygon10404',fill: '#818284',parent: 'boat','stroke-width': '0','stroke-opacity': '0'}).data('id', 'polygon10404');
            boat.attr({'id': 'boat','name': 'boat'});
          
          
          
          //roads
          var roads = rsr.set();
            var route9n = rsr.path("M1239.5,590.5 948.5,961.5 889.5,1070.5 766.5,1411.5").attr({id: '9n',"stroke-width": '15',stroke: '#C6C8CA',fill: 'none','stroke-opacity': '1'}).data('id', '9n');
            var path10628 = rsr.path("M646.399,526.546c-31.899-68.045-78.565-155.378-78.565-155.378  s-15.357-24.031,7.333-34.667c21.333-10,29,1.5,36,14C619.812,365.937,772.5,694.5,772.5,694.5s21.666,42.668-43.667,77.334  c0,0,12.334-19.333-6.333-66.667C715.701,687.931,682.001,602.488,646.399,526.546z");
            path10628.attr({id: 'path10628',"stroke-width": '8',stroke: '#C6C8CA',fill: 'none',parent: 'roads','stroke-opacity': '1'}).data('id', 'path10628');
            var path10646 = rsr.path("M284.167,1244.5c-7.667-5.167-46.5-23.333-46.5-23.333s-20.5-11-1.5-21");
            path10646.attr({id: 'path10646',"stroke-width": '8',stroke: '#C6C8CA',fill: 'none',parent: 'roads','stroke-opacity': '1'}).data('id', 'path10646');
            var path10648 = rsr.path("M736.5,1167.172c0,0,33.334,18.666,45.334,14c9.18-3.569-26.667,15.995-42.667,59.328l-14.667-6l1.664-9.662  l-8.666-2C717.498,1222.838,730.5,1194.172,736.5,1167.172z");
            path10648.attr({id: 'path10648',fill: '#C6C8CA',parent: 'roads','stroke-width': '0','stroke-opacity': '0'}).data('id', 'path10648');
            var path10650 = rsr.path("M231.809,1197.543c0,0,13.692-5.378,13.692,8.622s0,12.001,5.333,20.667s-19.333-8.667-19.333-8.667  S222.167,1201.832,231.809,1197.543z");
            path10650.attr({id: 'path10650',fill: '#C6C8CA',parent: 'roads','stroke-width': '0','stroke-opacity': '0'}).data('id', 'path10650');
            roads.attr({'id': 'roads','name': 'roads'});
            var g10630 = rsr.set();
            var path10632 = rsr.path("M734.5,767.168c0,0-55.333,60.667-89.995,106.332   c-34.798,45.844-39.509,58-43.509,72s-5.996,40,14.004,69s55.191,69.779,96.5,87.503c42.334,18.164,142.5,53.994,144,53.994");
            path10632.attr({id: 'path10632',"stroke-width": '8',stroke: '#C6C8CA',fill: 'none',parent: 'roads','stroke-opacity': '1'}).data('id', 'path10632');
            g10630.attr({'id': 'g10630','parent': 'roads','name': 'g10630'});
            var g10634 = rsr.set();
            var path10636 = rsr.path("M702.5,1097.835c0,0,39,55.5,40,86");
            path10636.attr({id: 'path10636',"stroke-width": '8',stroke: '#C6C8CA',fill: 'none',parent: 'roads','stroke-opacity': '1'}).data('id', 'path10636');
            g10634.attr({'id': 'g10634','parent': 'roads','name': 'g10634'});
            var g10638 = rsr.set();
            var path10640 = rsr.path("M847.833,1152.502c0,0-67.167,21.167-90.667,46.667");
            path10640.attr({id: 'path10640',"stroke-width": '8',stroke: '#C6C8CA',fill: 'none',parent: 'roads','stroke-opacity': '1'}).data('id', 'path10640');
            g10638.attr({'id': 'g10638','parent': 'roads','name': 'g10638'});
            var g10642 = rsr.set();
            var path10644 = rsr.path("M605.833,997.836c0,0-53.333-79.334-174.667-35.334   c0,0-51.333,16.667-95.333,114.667c0,0-16.833,68.331-34.333,86.831s-7,40-10,55.5s-8,24.5-8,24.5s42,26.5,92,41.5");
            path10644.attr({id: 'path10644',"stroke-width": '8',stroke: '#C6C8CA',fill: 'none',parent: 'roads','stroke-opacity': '1'}).data('id', 'path10644');
            g10642.attr({'id': 'g10642','parent': 'roads','name': 'g10642'});
          
          //stuff around campground
          
            var beach = rsr.path("M689.167,930.5l-18-26.666c0,0,15.333-20,31.333-26s24.333,3.667,27.333,4.667s3.334,26,3.334,26  L689.167,930.5z").attr({fill: colors['beach'],id: 'beach','stroke-width': '0','stroke-opacity': '0'}).data('id', 'beach');
            var barn = rsr.path("M 757.831,1129.167 746.166,1170.832 763.833,1176.5 768.5,1160.5 785.833,1165.833 792.831,1142.169    z").attr({fill: '#B55332',id: 'barn','stroke-width': '0','stroke-opacity': '0'}).data('id', 'barn');
            var office = rsr.path("M 733.833,1218.834 727.833,1237.167 709.833,1231.167 716.5,1212.5  z").attr({fill: '#B55332',id: 'office','stroke-width': '0','stroke-opacity': '0'}).data('id', 'office');
            var pavillion = rsr.path("M 581.5,990.5 591.5,1022.5 576.5,1027.5 566.5,994.5   z").attr({fill: '#879ACF',id: 'pavillion','stroke-width': '0','stroke-opacity': '0'}).data('id', 'pavillion');
          
            var route9nlabel = rsr.rect(965, 880, 60, 40, 10).attr({"fill": "#fff",'stroke-color': '#000','stroke-width': '1','stroke-opacity': '1'}).data('id', 'route9nlabel');
            var route9nlabel2 = rsr.rect(760, 1330, 60, 40, 10).attr({"fill": "#fff",'stroke-color': '#000','stroke-width': '1','stroke-opacity': '1'}).data('id', 'route9nlabel2');
            var route9nlabeltext = rsr.text(995, 900, "9N").attr(text9n);
            var route9nlabel2text = rsr.text(790, 1350, "9N").attr(text9n);
          
            var rsrGroups = [dock,kayak,boat,roads,g10630,g10634,g10638,g10642];
	        
	        //labels for special points
	          labels.beach = rsr.text(703.167,900.5, "Beach").attr(text);
  	        labels.portapotty = rsr.text(260.08002, 1300.59534, "Port-a-potty").attr(text);
  	        labels.portapottyline = rsr.path("M270.08002 1230.59534L260.08002 1290.59534");
          
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
                sites[site].color = Raphael.color("#000");
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