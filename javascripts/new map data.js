var rsr = Raphael('rsr', '1047.926', '1088.604');

/*
var beach = rsr.set();
var path_f = rsr.path("M483.029,617.45l-13-28c0,0,16-17,32-23s27,2,30,3s4,25,4,25L483.029,617.45z");
path_f.attr({fill: '#F9DB94',parent: 'beach','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_f');
beach.attr({'id': 'beach','name': 'beach'});
var pond = rsr.set();
var path_g = rsr.path("M333.811,582.221c17.267,4.879,58.798,16.62,61.796,17.529c13.24,4.015,47.422,12.7,65.756,29.034   c3.328,1.559,4.666,1.166,10.416-3.334l38.25-25c0,0,30-19,69,0c46.652,22.729,68,54,70,57s23.074,19.935,10,66   c-14,49.333-26,58-26,58s-17,17-59,8s-108-65-116-91s0.75-55.334-3-61.75c-1.5-9.584-18.787-20.07-55.332-31.916   c-14.641-4.745-42.668-13.334-67.334-20c-4.333-3.334-7.952-6.19-8.667-12l2.333-1C326.03,571.784,329.235,580.928,333.811,582.221   z");
path_g.attr({fill: '#00BBD7',parent: 'pond','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_g');
pond.attr({'id': 'pond','name': 'pond'});
*/

/*
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

var kayak = rsr.set();
var path_x = rsr.path("M539.029,779.45c0,0-0.666-14,15.334-25.333C554.363,754.117,551.697,774.783,539.029,779.45z");
path_x.attr({fill: '#ED7B31',parent: 'kayak','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_x');
var ellipse_y = rsr.ellipse(546.528, 767.701, 2.507, 3.768);
ellipse_y.attr({fill: '#E0E9ED',parent: 'kayak','stroke-width': '0','stroke-opacity': '1'});
ellipse_y.transform("m0.855 0.5186 -0.5186 0.855 477.4138 -172.1295").data('id', 'ellipse_y');
kayak.attr({'id': 'kayak','name': 'kayak'});
*/

/*
var bathhouses = rsr.set();
var rect_z = rsr.rect(531.03, 356.45, 26.998, 28);
rect_z.attr({x: '531.03',y: '356.45',fill: '#F4BB3A',parent: 'bathhouses','stroke-width': '0','stroke-opacity': '1'});
rect_z.transform("m0.9075 -0.42 0.42 0.9075 -105.2312 262.9474").data('id', 'rect_z');
var rect_aa = rsr.rect(423.031, 132.45, 27, 27.999);
rect_aa.attr({x: '423.031',y: '132.45',fill: '#F4BB3A',parent: 'bathhouses','stroke-width': '0','stroke-opacity': '1'});
rect_aa.transform("m0.9075 -0.42 0.42 0.9075 -21.143 196.8634").data('id', 'rect_aa');
var rect_ab = rsr.rect(70.06, 906.48, 9.939, 9.938);
rect_ab.attr({x: '70.06',y: '906.48',fill: '#F4BB3A',parent: 'bathhouses','stroke-width': '0','stroke-opacity': '1'});
rect_ab.transform("m0.8874 0.4609 -0.4609 0.8874 428.5471 68.0071").data('id', 'rect_ab');
bathhouses.attr({'id': 'bathhouses','name': 'bathhouses'});
*/

/*
var cabins = rsr.set();
var rect_ac = rsr.rect(390.03, 557.951, 32, 22.749);
rect_ac.attr({x: '390.03',y: '557.951',fill: '#ED7B31',parent: 'cabins','stroke-width': '0','stroke-opacity': '1'});
rect_ac.transform("m0.8685 0.4958 -0.4958 0.8685 335.6535 -126.4038").data('id', 'rect_ac');
var rect_ad = rsr.rect(410.03, 526.95, 31.998, 22.749);
rect_ad.attr({x: '410.03',y: '526.95',fill: '#ED7B31',parent: 'cabins','stroke-width': '0','stroke-opacity': '1'});
rect_ad.transform("m0.8065 0.5912 -0.5912 0.8065 400.7035 -147.7169").data('id', 'rect_ad');
cabins.attr({'id': 'cabins','name': 'cabins'});
*/
/*
var pavillion = rsr.set();
pavillion.attr({'id': 'pavillion','name': 'pavillion'});
var group_a = rsr.set();
var path_ae = rsr.path("M 388.029,678.45 399.029,709.45 381.529,715.45 370.029,684.45    z");
path_ae.attr({fill: '#879ACF',parent: 'pavillion','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_ae');
group_a.attr({'parent': 'pavillion','name': 'group_a'});
*/


var rvsites = rsr.set();
var _x31_ = rsr.path("M 554.727,501.683 522.07,473.162 544.629,456.667 575.363,480.116   z");
_x31_.attr({id: '_x31_',fill: '#68923D',parent: 'rvsites','stroke-width': '0','stroke-opacity': '1'}).data('id', '_x31_');
var _x32_ = rsr.path("M 557.377,445.981 587.029,468.45 607.695,446.122 575.029,422.45   z");
_x32_.attr({id: '_x32_',fill: '#68923D',parent: 'rvsites','stroke-width': '0','stroke-opacity': '1'}).data('id', '_x32_');
var _x33_ = rsr.path("M611.9,344.818c-14.996,4.507-42.537,14.965-42.537,14.965s11.121,34.189,12,36.333   c11.527-0.951,40.334-7.333,40.334-7.333S624.625,368.502,611.9,344.818z");
_x33_.attr({id: '_x33_',fill: '#68923D',parent: 'rvsites','stroke-width': '0','stroke-opacity': '1'}).data('id', '_x33_');
var _x35_ = rsr.path("M611.23,343.279c0,0-10.521-19.58-16.639-30.961l-41.049,17.722l15.15,28.206L611.23,343.279z");
_x35_.attr({id: '_x35_',fill: '#68923D',parent: 'rvsites','stroke-width': '0','stroke-opacity': '1'}).data('id', '_x35_');
var _x36_ = rsr.path("M541.1,304.945l11.857,23.833l41.049-17.721c-4.205-7.824-8.65-16.095-13.273-24.694   L541.1,304.945z");
_x36_.attr({id: '_x36_',fill: '#68923D',parent: 'rvsites','stroke-width': '0','stroke-opacity': '1'}).data('id', '_x36_');
var _x37_ = rsr.path("M580.199,285.118c-4.203-7.823-8.555-15.92-13.008-24.201l-39.242,17.5l12.619,25.283   L580.199,285.118z");
_x37_.attr({id: '_x37_',fill: '#68923D',parent: 'rvsites','stroke-width': '0','stroke-opacity': '1'}).data('id', '_x37_');
var _x38_ = rsr.path("M566.646,259.624c-4.328-8.051-8.754-16.28-13.229-24.601l-37.055,18.096l11.041,24.005   L566.646,259.624z");
_x38_.attr({id: '_x38_',fill: '#68923D',parent: 'rvsites','stroke-width': '0','stroke-opacity': '1'}).data('id', '_x38_');
var _x39_ = rsr.path("M515.869,251.841l37.057-18.098c-3.98-7.4-9.879-17.307-13.91-24.802l-36.365,18.457   L515.869,251.841z");
_x39_.attr({id: '_x39_',fill: '#68923D',parent: 'rvsites','stroke-width': '0','stroke-opacity': '1'}).data('id', '_x39_');
var _x31_0_1_ = rsr.path("M502.137,226.139l36.365-18.457c-4.852-9.022-7.842-15.64-12.674-24.618l-36.674,17.228   L502.137,226.139z");
_x31_0_1_.attr({id: '_x31_0_1_',fill: '#68923D',parent: 'rvsites','stroke-width': '0','stroke-opacity': '1'}).data('id', '_x31_0_1_');
var _x31_1_1_ = rsr.path("M488.527,198.773l36.674-17.227c-5.961-11.08-11.863-22.048-17.611-32.726l-35.004,18.294   L488.527,198.773z");
_x31_1_1_.attr({id: '_x31_1_1_',fill: '#68923D',parent: 'rvsites','stroke-width': '0','stroke-opacity': '1'}).data('id', '_x31_1_1_');
var _x31_2_1_ = rsr.path("M471.912,165.608l35.004-18.294c-4.875-9.06-9.639-17.906-14.229-26.429l-33.658,16.19   L471.912,165.608z");
_x31_2_1_.attr({id: '_x31_2_1_',fill: '#68923D',parent: 'rvsites','stroke-width': '0','stroke-opacity': '1'}).data('id', '_x31_2_1_');
var _x31_3_1_ = rsr.path("M458.412,135.456l33.656-16.19c-6.207-11.524-12.092-22.444-17.514-32.502l-34.203,16.121   L458.412,135.456z");
_x31_3_1_.attr({id: '_x31_3_1_',fill: '#68923D',parent: 'rvsites','stroke-width': '0','stroke-opacity': '1'}).data('id', '_x31_3_1_');
var _x31_4_1_ = rsr.path("M439.678,101.312l34.203-16.12c-5.916-10.974-11.273-20.9-15.885-29.432l-32.842,17.314   L439.678,101.312z");
_x31_4_1_.attr({id: '_x31_4_1_',fill: '#68923D',parent: 'rvsites','stroke-width': '0','stroke-opacity': '1'}).data('id', '_x31_4_1_');
var _x31_5_1_ = rsr.path("M444.395,30.227l-29.908,21.857l10.146,19.594l32.842-17.315   C451.9,44.048,447.432,35.801,444.395,30.227z");
_x31_5_1_.attr({id: '_x31_5_1_',fill: '#68923D',parent: 'rvsites','stroke-width': '0','stroke-opacity': '1'}).data('id', '_x31_5_1_');
var _x31_6_1_ = rsr.path("M410.086,44.068c0.139,0.234,1.607,2.559,3.912,6.875l29.484-22.634   c-6.078-10.734-15.357-21.107-27.297-24.827l-12.867,33.692C407.426,39.079,408.725,41.771,410.086,44.068z");
_x31_6_1_.attr({id: '_x31_6_1_',fill: '#68923D',parent: 'rvsites','stroke-width': '0','stroke-opacity': '1'}).data('id', '_x31_6_1_');
var _x31_7 = rsr.path("M402.387,36.758l11.918-34.004c-8.119-2.529-16.783-3.932-27.619-1.471l4.68,35.438   C396.553,35.278,399.986,35.647,402.387,36.758z");
_x31_7.attr({id: '_x31_7',fill: '#68923D',parent: 'rvsites','stroke-width': '0','stroke-opacity': '1'}).data('id', '_x31_7');
var _x31_8 = rsr.path("M387.941,37.637c0.834-0.291,1.627-0.54,2.385-0.75L383.697,1.95   c-4.029,0.915-7.268,2.448-11.604,4.314c-5.986,2.577-10.969,5.526-15.117,8.722l23.352,26.784   C382.771,39.869,385.531,38.479,387.941,37.637z");
_x31_8.attr({id: '_x31_8',fill: '#68923D',parent: 'rvsites','stroke-width': '0','stroke-opacity': '1'}).data('id', '_x31_8');
var _x31_9 = rsr.path("M379.734,42.412l-24.355-25.783c-13.515,12.145-17.721,24.526-17.959,36.699l35.75,0.975   C373.15,49.259,376.078,45.258,379.734,42.412z");
_x31_9.attr({id: '_x31_9',fill: '#68923D',parent: 'rvsites','stroke-width': '0','stroke-opacity': '1'}).data('id', '_x31_9');
var _x32_1 = rsr.path("M374.904,63.029c-1.182-2.44-1.684-4.704-1.691-6.792l-35.75-0.974   c0.9,14.185,4.067,22.852,10.067,37.186l34.409-14.816C379.434,72.404,377.08,67.518,374.904,63.029z");
_x32_1.attr({id: '_x32_1',fill: '#68923D',parent: 'rvsites','stroke-width': '0','stroke-opacity': '1'}).data('id', '_x32_1');
var _x32_2 = rsr.path("M382.391,78.851l-34.409,14.816c2.732,6.223,6.536,15.269,10.926,25.26l35.225-15.462   C389.945,94.652,386.008,86.393,382.391,78.851z");
_x32_2.attr({id: '_x32_2',fill: '#68923D',parent: 'rvsites','stroke-width': '0','stroke-opacity': '1'}).data('id', '_x32_2');
var _x32_3 = rsr.path("M394.627,104.836l-35.225,15.461c3.682,8.377,7.865,17.891,12.408,28.226l36.057-15.716   C403.254,123.034,398.814,113.655,394.627,104.836z");
_x32_3.attr({id: '_x32_3',fill: '#68923D',parent: 'rvsites','stroke-width': '0','stroke-opacity': '1'}).data('id', '_x32_3');
var _x32_4 = rsr.path("M408.379,134.241l-36.057,15.715c3.783,8.603,7.822,17.781,12.029,27.34l36.539-16.492   C416.619,151.717,412.43,142.824,408.379,134.241z");
_x32_4.attr({id: '_x32_4',fill: '#68923D',parent: 'rvsites','stroke-width': '0','stroke-opacity': '1'}).data('id', '_x32_4');
var _x32_5 = rsr.path("M421.432,162.272l-36.541,16.493c4.262,9.685,8.703,19.77,13.236,30.061l37.529-16.252   C435.656,192.574,426.092,172.185,421.432,162.272z");
_x32_5.attr({id: '_x32_5',fill: '#68923D',parent: 'rvsites','stroke-width': '0','stroke-opacity': '1'}).data('id', '_x32_5');
var _x32_6 = rsr.path("M436.191,194.119l-37.529,16.251c4.244,9.632,8.568,19.446,12.91,29.288l37.404-18.239   L436.191,194.119z");
_x32_6.attr({id: '_x32_6',fill: '#68923D',parent: 'rvsites','stroke-width': '0','stroke-opacity': '1'}).data('id', '_x32_6');
var _x32_7 = rsr.path("M449.49,222.835l-37.404,18.239c4.02,9.116,8.053,18.253,12.045,27.293l37.422-19.731   L449.49,222.835z");
_x32_7.attr({id: '_x32_7',fill: '#68923D',parent: 'rvsites','stroke-width': '0','stroke-opacity': '1'}).data('id', '_x32_7');
var _x32_8 = rsr.path("M462.041,249.964l-37.422,19.732c3.799,8.6,7.561,17.111,11.238,25.424l37.904-20.059   L462.041,249.964z");
_x32_8.attr({id: '_x32_8',fill: '#68923D',parent: 'rvsites','stroke-width': '0','stroke-opacity': '1'}).data('id', '_x32_8');
var _x32_9 = rsr.path("M474.223,276.333l-37.902,20.059c3.629,8.203,7.176,16.21,10.598,23.93l38.562-19.86   L474.223,276.333z");
_x32_9.attr({id: '_x32_9',fill: '#68923D',parent: 'rvsites','stroke-width': '0','stroke-opacity': '1'}).data('id', '_x32_9');
var _x33_0 = rsr.path("M485.92,301.752l-38.562,19.861c3.996,9.013,7.82,17.621,11.402,25.674l39.277-19.871   L485.92,301.752z");
_x33_0.attr({id: '_x33_0',fill: '#68923D',parent: 'rvsites','stroke-width': '0','stroke-opacity': '1'}).data('id', '_x33_0');
var _x33_1 = rsr.path("M498.529,328.7l-39.275,19.871c4.328,9.728,8.301,18.631,11.801,26.437l39.443-19.619   L498.529,328.7z");
_x33_1.attr({id: '_x33_1',fill: '#68923D',parent: 'rvsites','stroke-width': '0','stroke-opacity': '1'}).data('id', '_x33_1');
var _x33_2 = rsr.path("M511.029,356.7l-39.443,19.618c4.371,9.75,9.07,20.5,11.707,26.244l41.066-18.045   L511.029,356.7z");
_x33_2.attr({id: '_x33_2',fill: '#68923D',parent: 'rvsites','stroke-width': '0','stroke-opacity': '1'}).data('id', '_x33_2');
var _x33_3 = rsr.path("M524.764,386.74l-41.066,18.045c1.5,3.999,6.516,16.387,4.064,28.423l41.846,24.49   C539.197,436.118,531.531,402.784,524.764,386.74z");
_x33_3.attr({id: '_x33_3',fill: '#68923D',parent: 'rvsites','stroke-width': '0','stroke-opacity': '1'}).data('id', '_x33_3');
var _x33_5 = rsr.path("M468.797,464.2c7.203,4.754,27.297,25.496,29.453,26.619   c7.297-6.139,17.172-14.557,24.027-20.544l-36.486-29.512C483.195,448.376,478.096,456.53,468.797,464.2z");
_x33_5.attr({id: '_x33_5',fill: '#68923D',parent: 'rvsites','stroke-width': '0','stroke-opacity': '1'}).data('id', '_x33_5');
rvsites.attr({'id': 'rvsites','name': 'rvsites'});

var tent_sites = rsr.set();
var _x35_0 = rsr.path("M 193.03,714.45 161.115,690.318 139.16,722.645 169.537,742.519   z");
_x35_0.attr({id: '_x35_0',fill: '#A27A95',parent: 'tent_sites','stroke-width': '0','stroke-opacity': '1'}).data('id', '_x35_0');
var _x35_1 = rsr.path("M 92.197,877.453 65.03,875.62 62.863,896.865 91.863,898.201   z");
_x35_1.attr({id: '_x35_1',fill: '#A27A95',parent: 'tent_sites','stroke-width': '0','stroke-opacity': '1'}).data('id', '_x35_1');
var _x35_5 = rsr.path("M125.03,879.453l-28-2l-1.299,20.386l31.974-2.26   C127.124,891.259,126.418,886.05,125.03,879.453z");
_x35_5.attr({id: '_x35_5',fill: '#A27A95',parent: 'tent_sites','stroke-width': '0','stroke-opacity': '1'}).data('id', '_x35_5');
var _x35_7 = rsr.path("M131.28,910.617L97.187,934.92l32.646,17.265l13.599-30.933   C138.617,918.376,133.946,915.075,131.28,910.617z");
_x35_7.attr({id: '_x35_7',fill: '#A27A95',parent: 'tent_sites','stroke-width': '0','stroke-opacity': '1'}).data('id', '_x35_7');
var _x35_9 = rsr.path("M 183.363,940.117 166.197,933.201 155.294,961.175 174.03,965.45   z");
_x35_9.attr({id: '_x35_9',fill: '#A27A95',parent: 'tent_sites','stroke-width': '0','stroke-opacity': '1'}).data('id', '_x35_9');
var _x35_8 = rsr.path("M144.947,921.451l-13.599,30.933l22.682,7.734l10.903-27.974   C157.684,928.599,151.346,925.274,144.947,921.451z");
_x35_8.attr({id: '_x35_8',fill: '#A27A95',parent: 'tent_sites','stroke-width': '0','stroke-opacity': '1'}).data('id', '_x35_8');
var _x35_6 = rsr.path("M127.754,896.774l-31.974,2.26l-5.75,29.416l6.619,5.247l34.093-24.303   C129.049,905.599,128.536,902.594,127.754,896.774z");
_x35_6.attr({id: '_x35_6',fill: '#A27A95',parent: 'tent_sites','stroke-width': '0','stroke-opacity': '1'}).data('id', '_x35_6');
var _x35_2 = rsr.path("M 47.197,910.621 27.53,937.954 9.53,923.954 31.03,900.454   z");
_x35_2.attr({id: '_x35_2',fill: '#A27A95',parent: 'tent_sites','stroke-width': '0','stroke-opacity': '1'}).data('id', '_x35_2');
var _x35_3 = rsr.path("M 30.63,898.91 32.279,882.813 7.986,869.238 0,894.651   z");
_x35_3.attr({id: '_x35_3',fill: '#A27A95',parent: 'tent_sites','stroke-width': '0','stroke-opacity': '1'}).data('id', '_x35_3');
var _x35_4 = rsr.path("M 32.713,887.141 49.433,888.065 61.53,863.45 33.53,854.45   z");
_x35_4.attr({id: '_x35_4',fill: '#A27A95',parent: 'tent_sites','stroke-width': '0','stroke-opacity': '1'}).data('id', '_x35_4');
tent_sites.attr({'id': 'tent_sites','name': 'tent_sites'});

var Layer_2 = rsr.set();
var path_ad = rsr.path("M381.029,76.95c0,0-15.5-28.5,3-36c17.039-6.907,22-3,29,9.5   c8.645,15.436,160.033,322.082,162,327c3.668,9.167,16.918,43.25-47.248,89.417c0,0,8.248-11.417,7.998-23.917   c-0.342-17.087,0.75-35-8.25-55.5C513.322,355.09,381.029,76.95,381.029,76.95z");
path_ad.attr({fill: 'none',stroke: '#C6C8CA',"stroke-width": '8',parent: 'Layer_2','stroke-opacity': '1'}).data('id', 'path_ad');
var path_ae = rsr.path("M86.905,926.825c-7.667-5.167-46.708-22.708-46.708-22.708   s-18.709-10.459-3.292-20.292");
path_ae.attr({fill: 'none',stroke: '#C6C8CA',"stroke-width": '8',parent: 'Layer_2','stroke-opacity': '1'}).data('id', 'path_ae');
var path_af = rsr.path("M553.029,848.117c0,0,28.668,15.333,40.668,10.667c9.18-3.569-18.668,20.333-35.668,69.333l-24.002-8.334   l6-14.667l-8.666-2C531.361,903.116,547.029,875.117,553.029,848.117z");
path_af.attr({fill: '#C6C8CA',parent: 'Layer_2','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_af');
var path_ag = rsr.path("M36.405,879.575c0,0,13.875-1.125,13.692,8.622c-2.317,14.128,0.433,15.128,6.933,19.753   c-12.5,0.25-20.933-7.753-20.933-7.753S26.763,883.864,36.405,879.575z");
path_ag.attr({fill: '#C6C8CA',parent: 'Layer_2','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_ag');
var path_ah = rsr.path("M1042,277L755,647l-60,103c-101,282-121,336-121,336");
path_ah.attr({fill: 'none',stroke: '#C6C8CA',"stroke-width": '15',parent: 'Layer_2','stroke-opacity': '1'}).data('id', 'path_ah');
Layer_2.attr({'id': 'Layer_2','name': 'Layer_2'});
var group_b = rsr.set();
var path_ai = rsr.path("M529.029,465.95c0,0-55.428,42.379-87,90.5c-31,47.25-33.5,57.5-36.5,71.5    c-3.051,14.237-8,40.5,12,69.5s56,65,96.5,84.5s142.5,60,144,60");
path_ai.attr({fill: 'none',stroke: '#C6C8CA',"stroke-width": '8',parent: 'Layer_2','stroke-opacity': '1'}).data('id', 'path_ai');
group_b.attr({'parent': 'Layer_2','name': 'group_b'});
var group_c = rsr.set();
var path_aj = rsr.path("M516.529,783.45c0,0,36.5,51.5,37.5,82");
path_aj.attr({fill: 'none',stroke: '#C6C8CA',"stroke-width": '8',parent: 'Layer_2','stroke-opacity': '1'}).data('id', 'path_aj');
group_c.attr({'parent': 'Layer_2','name': 'group_c'});
var group_d = rsr.set();
var path_ak = rsr.path("M642.529,835.95c0,0-38.5,13-62,38.5");
path_ak.attr({fill: 'none',stroke: '#C6C8CA',"stroke-width": '8',parent: 'Layer_2','stroke-opacity': '1'}).data('id', 'path_ak');
group_d.attr({'parent': 'Layer_2','name': 'group_d'});
var group_e = rsr.set();
var path_al = rsr.path("M403.404,661.325c0,0-33-58-149.5-6c0,0-75.5,51.5-119.5,154.5    c0,0-12,18.5-29.5,37s-7,40-10,55.5s-8,24.5-8,24.5s42,26.5,92,41.5");
path_al.attr({fill: 'none',stroke: '#C6C8CA',"stroke-width": '8',parent: 'Layer_2','stroke-opacity': '1'}).data('id', 'path_al');
group_e.attr({'parent': 'Layer_2','name': 'group_e'});

/*
var barn = rsr.set();
var path_ce = rsr.path("M 573,816.667 558.999,851.667 576.001,858.667 582,843.667 598,849.666 605.998,829.669   z");
path_ce.attr({fill: '#B55332',parent: 'barn','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_ce');
barn.attr({'id': 'barn','name': 'barn'});

var office = rsr.set();
var path_cf = rsr.path("M 540.027,905.116 533.029,922.45 518.029,917.447 525.029,899.447   z");
path_cf.attr({fill: '#B55332',parent: 'office','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_cf');
office.attr({'id': 'office','name': 'office'});
*/

var rsrGroups = [beach,pond,dock,rowboat,kayak,bathhouses,cabins,pavillion,group_a,rvsites,tent_sites,Layer_2,group_b,group_c,group_d,group_e,barn,office];
	