// author: CoenJanssen.net

animation["c"] = function () {

    //this part of the function uses closure, to make this functions and variables private and run once
    var shapes = [];
    var path = [
        362.80776, 23.067819, 348.70418, 45.815381, 332.09572, 63.761717,
        320.52837, 89.413441, 303.97695, 54.214148, 316.63674, 45.298826,
        300.39419, 34.928115, 311.68391, 10.776054, 285.93558, 10.16206,
        307.17974, -3.1741597, 258.6812, 18.540683, 250.67752, 9.9726109,
        234.32528, 17.902328999999998, 239.94458999999998, 16.136327, 252.91949, 17.007325,
        241.85591, 33.548268, 276.58338, 16.690135, 265.04759, 37.006879,
        245.10991, 54.047983, 243.61726000000002, 86.835576, 229.25117, 109.37176,
        223.03006, 125.57133999999999, 239.99398, 87.576493, 236.30622, 111.00854,
        237.64974, 117.39274999999999, 226.18252999999999, 139.26729, 238.23807, 123.59743999999999,
        254.01040999999998, 131.19232, 222.65614, 167.48131, 245.57989999999998, 141.89625999999998,
        237.75838, 124.52882999999999, 243.71595, 88.76783799999998, 250.84378999999998, 81.28884799999999,
        246.22591999999997, 95.49731099999998, 245.71820999999997, 115.12047999999999, 253.28319, 91.06285199999999,
        252.21428999999998, 76.67854299999999, 264.42269, 32.44923299999999, 263.26632, 67.978811,
        263.05714, 89.956885, 254.83952, 113.14492999999999, 247.52712, 132.18383999999998,
        259.76149, 119.66101999999998, 261.76691999999997, 89.46356999999998, 268.86306, 83.10575499999997,
        269.10429, 92.01650499999997, 266.24434, 116.01387999999997, 271.88847000000004, 93.15262999999997,
        288.34559, 65.59698699999997, 272.53511000000003, 114.47643999999997, 266.14879, 121.87879999999997,
        263.23299000000003, 141.09642999999997, 281.49421, 94.31123599999997, 284.16383, 89.08421199999998,
        294.58714000000003, 65.44785899999998, 280.02928, 108.34552999999998, 280.57612, 115.79906999999997,
        288.48537, 104.10243999999997, 295.65274, 99.53896499999998, 289.93966, 118.85177999999998,
        293.66924, 148.86200999999997, 291.2582, 109.53539999999998, 295.43628, 101.66539999999998,
        300.05154, 91.32202399999997, 320.48276, 78.50757799999998, 304.547, 96.00213499999998,
        328.73650000000004, 81.89069799999999, 349.78630000000004, 61.88462199999998, 368.97683, 41.77752299999998,
        358.24074, 47.16143799999998, 326.55345, 76.87742599999999, 351.92295, 53.26860999999998,
        365.92872, 42.106515999999985, 373.91547, 23.53876099999998, 366.13897000000003, 18.000177999999984,
        366.92981000000003, 12.028261999999984, 368.88933000000003, 5.825765899999984, 367.16602, -0.1757812500000142,
        387.41001, 12.439951, 385.28162000000003, 55.077656, 382.5296, 46.305045,
        387.46636, 37.931051, 384.63686, -10.788803000000001, 383.57140000000004, 22.451298,
        381.21207000000004, 46.365255000000005, 370.26379000000003, 60.455651, 357.88040000000007, 79.391144,
        341.91658000000007, 101.99563, 322.7441400000001, 121.9593, 299.41213000000005, 137.14066,
        286.96199000000007, 152.92175, 312.50276, 128.07376, 307.07445000000007, 145.83594,
        317.5382200000001, 169.63338, 306.7243400000001, 153.40194, 303.42597000000006, 154.03128999999998,
        305.74394000000007, 166.12391, 336.04859000000005, 189.96636999999998, 308.10548000000006, 170.02906,
        298.7097800000001, 161.18282, 297.36602000000005, 155.31888999999998, 300.50212000000005, 167.84992,
        288.08713000000006, 156.16804, 293.78588, 182.67392, 303.13103000000007, 176.97683,
        294.8012800000001, 188.83637000000002, 294.62576000000007, 195.22228, 308.22481000000005, 184.21906,
        299.06255000000004, 193.74902, 293.3674500000001, 206.65987, 311.08014000000003, 192.58453,
        323.76345000000003, 184.78372, 292.87219000000005, 222.29958, 310.72699, 202.68425,
        315.71344, 195.30526, 328.90434, 182.95456, 322.22072000000003, 200.35640999999998,
        337.79678, 183.76475999999997, 300.08885000000004, 232.58476, 323.14849000000004, 210.20797,
        323.16299000000004, 231.24656, 321.23532000000006, 258.28063, 317.93901000000005, 281.72969,
        314.5942600000001, 303.75243, 312.6698200000001, 312.48391, 307.9609300000001, 316.57525,
        300.00889000000006, 292.46938, 310.7041700000001, 343.97565, 298.27929000000006, 335.7647,
        314.7956500000001, 380.57229, 328.86143000000004, 431.09534, 311.92217000000005, 477.94917,
        303.67300000000006, 503.34047, 283.56528000000003, 523.45121, 277.6590100000001, 549.50571,
        270.2793700000001, 576.74649, 258.1310500000001, 603.80417, 260.35926000000006, 632.9727800000001,
        265.87883000000005, 661.50373, 254.26111000000006, 695.82299, 271.97614000000004, 720.34684,
        286.68523000000005, 743.6090300000001, 313.89926, 735.9746100000001, 334.83231000000006, 745.5576100000001,
        357.70475000000005, 756.08915, 319.3834300000001, 744.8762300000001, 340.02981000000005, 756.6903800000001,
        328.77983000000006, 752.2464100000001, 310.16826000000003, 744.6218200000001, 329.4477800000001, 759.5146200000001,
        336.9719500000001, 769.3302800000001, 301.8413700000001, 744.0366900000001, 320.4870800000001, 760.8255700000002,
        324.0595700000001, 771.5803800000002, 283.5406300000001, 758.7314300000002, 272.4763100000001, 764.7322500000002,
        253.5569500000001, 766.0765000000002, 208.31454000000014, 776.4098300000003, 227.45473000000013, 744.7378900000002,
        238.69933000000012, 705.5006800000002, 224.30991000000012, 666.4136900000002, 214.64886000000013, 628.7067400000002,
        208.20302000000012, 601.4414000000002, 209.72140000000013, 572.5008900000003, 223.29531000000011, 547.7036000000002,
        212.45327000000012, 558.3692800000001, 210.54881000000012, 581.7968600000002, 192.5940100000001, 589.5596700000002,
        173.5726100000001, 602.2295500000002, 194.1769300000001, 585.8383400000002, 186.0528900000001, 587.0161000000002,
        170.0860500000001, 595.8348200000001, 146.4103600000001, 620.8586500000001, 136.1857100000001, 624.3696200000002,
        154.4072300000001, 597.4969800000001, 116.2840900000001, 643.9584400000001, 111.03718000000012, 648.0283500000002,
        94.88984000000012, 669.3785900000001, 100.33936000000011, 699.0895600000001, 103.99826000000012, 723.7231400000002,
        103.09431000000012, 739.8251200000002, 86.61729500000011, 674.6374900000002, 91.38644200000012, 708.9327900000002,
        89.71930200000011, 730.9070700000002, 124.69644000000011, 750.9862700000002, 114.39469000000011, 766.3990000000002,
        85.3195950000001, 753.4578900000002, 83.19915300000011, 713.2484500000003, 62.41796900000011, 690.9335900000002,
        48.68753200000011, 665.5814500000002, 84.16334100000012, 649.0466200000002, 93.39990200000011, 628.4571600000002,
        99.02883200000011, 620.3780400000002, 112.11269000000011, 596.6575000000001, 103.58203000000012, 618.6347900000002,
        117.48301000000012, 602.3684400000002, 120.29814000000012, 574.9796400000001, 143.8691500000001, 566.2461200000001,
        152.7401000000001, 559.4632700000001, 180.5920100000001, 547.7114400000002, 156.1017400000001, 563.0901700000002,
        133.4028800000001, 581.7302300000001, 174.2518100000001, 550.6139300000002, 176.2539800000001, 558.9297100000002,
        193.50591000000009, 545.5639900000002, 184.2023700000001, 512.1602800000003, 181.0594800000001, 491.6907000000002,
        178.9464000000001, 467.52782000000025, 191.3002400000001, 516.0178800000002, 188.6504800000001, 523.4629100000002,
        188.6564800000001, 558.9877200000002, 195.9417500000001, 502.2868500000002, 188.4707800000001, 495.3379100000002,
        187.2931800000001, 475.3803200000002, 170.8170600000001, 439.50806000000017, 176.06394000000012, 430.2647600000002,
        192.56279000000012, 444.0598400000002, 181.06747000000013, 426.3825400000002, 174.5958100000001, 422.7206600000002,
        201.7451200000001, 438.24568000000016, 159.89957000000012, 399.41875000000016, 168.4819000000001, 385.9609800000002,
        165.4247800000001, 364.77398000000017, 184.9515400000001, 346.3036000000002, 197.99626000000012, 337.0449500000002,
        184.3861800000001, 364.6307300000002, 197.93446000000012, 398.4775700000002, 217.05633000000012, 420.2377000000002,
        233.15679000000011, 444.0207000000002, 228.27026000000012, 480.55541000000017, 228.1006400000001, 509.2057500000002,
        217.0828900000001, 521.8670600000002, 235.07818000000012, 564.7633700000002, 235.45534000000012, 528.8842200000001,
        239.18961000000013, 494.43711000000013, 225.61007000000012, 459.6409600000001, 233.96286000000012, 425.76174000000015,
        264.9294400000001, 417.73902000000015, 199.24304000000012, 396.05673000000013, 237.0467400000001, 401.76214000000016,
        260.3881600000001, 400.99877000000015, 210.05403000000013, 397.6540200000002, 209.55671000000012, 387.6292300000002,
        201.49902000000012, 356.0455900000002, 244.1184500000001, 344.2650300000002, 265.2539800000001, 331.67996000000016,
        252.9207500000001, 332.0867000000002, 227.11299000000014, 344.85725000000014, 215.56842000000012, 347.57270000000017,
        243.33346000000012, 335.13655000000017, 196.0651600000001, 386.4648700000002, 206.48447000000013, 353.49848000000014,
        208.53640000000013, 331.10400000000016, 214.53826000000012, 299.17828000000014, 235.06064000000012, 285.65473000000014,
        236.9835200000001, 257.28390000000013, 213.93573000000012, 230.16781000000015, 217.01519000000013, 199.31126000000015,
        213.45664000000014, 186.91284000000016, 213.75726000000014, 145.31209000000015, 217.68763000000013, 149.21913000000015,
        211.80091000000013, 163.13519000000014, 214.91309000000012, 221.41411000000016, 212.35012000000012, 175.88909000000015,
        214.3407800000001, 163.32348000000016, 214.14578000000012, 144.04367000000016, 208.43244000000013, 169.78054000000014,
        207.47962000000012, 187.42212000000015, 194.74753000000013, 192.09036000000015, 195.81542000000013, 171.60966000000013,
        195.37948000000014, 164.84318000000013, 192.88240000000013, 133.03007000000014, 191.72678000000013, 158.24055000000013,
        198.72809000000012, 191.99116000000012, 202.38601000000014, 226.5146600000001, 202.66426000000013, 260.5628200000001,
        201.85330000000013, 272.3676600000001, 214.8476900000001, 303.0758600000001, 212.50982000000013, 272.9651400000001,
        211.80054000000013, 292.7838500000001, 203.69117000000014, 268.52841000000006, 209.45899000000014, 268.8615500000001,
        205.93425000000013, 248.54233000000008, 199.50496000000015, 226.54822000000007, 203.15408000000014, 206.72679000000008,
        208.71560000000014, 241.79796000000007, 204.71994000000012, 175.39913000000007, 209.65212000000014, 187.21879000000007,
        211.64947000000015, 205.62445000000008, 214.91164000000015, 206.56885000000005, 208.57775000000015, 209.61142000000007,
        217.23336000000015, 236.94986000000006, 242.13306000000014, 272.05100000000004, 218.48010000000016, 298.0254800000001,
        211.02138000000016, 313.27319000000006, 196.77084000000016, 323.66546000000005, 190.00360000000018, 338.8731400000001,
        199.59247000000016, 328.37790000000007, 205.97323000000017, 302.1184400000001, 203.92351000000016, 293.6153600000001,
        189.84657000000016, 315.3836400000001, 184.19619000000017, 341.71261000000015, 165.46843000000015, 360.8341100000001,
        153.38826000000014, 363.1094700000001, 161.50624000000016, 393.9155700000001, 162.59940000000014, 407.0040600000001,
        170.50732000000013, 444.8401000000001, 178.56247000000013, 483.1265800000001, 179.42376000000013, 521.77551,
        166.50853000000012, 554.4650300000001, 118.51255000000013, 556.61629, 103.03092000000012, 592.05046,
        85.04367700000012, 618.4846600000001, 71.67868200000012, 648.8578200000001, 46.65798700000012, 670.4239100000001,
        19.31313400000012, 700.3755300000001, 68.50868000000011, 723.0365400000001, 78.28713700000011, 748.3223600000001,
        81.92079900000012, 773.0368300000001, 137.75959000000012, 779.8140600000002, 130.19857000000013, 754.5247700000001,
        94.52021100000013, 726.1524100000001, 97.64397000000014, 665.5474900000002, 131.65467000000012, 636.9732600000001,
        145.64653000000013, 623.2321900000001, 178.03576000000012, 601.5199700000001, 185.49019000000013, 597.7492400000001,
        174.99446000000012, 603.9394300000001, 159.8083800000001, 617.0963700000001, 182.13264000000012, 603.5999700000001,
        194.72908000000012, 591.21148, 210.87611000000012, 584.6674200000001, 205.7417600000001, 610.9548200000002,
        210.6125500000001, 645.4793400000002, 229.23642000000012, 677.5404000000001, 227.43930000000012, 713.0898300000001,
        231.75144000000012, 735.5971500000002, 193.53646000000012, 779.4933200000002, 241.9595900000001, 773.5331300000001,
        270.9368200000001, 768.2008700000001, 300.33226000000013, 771.6272400000001, 329.4187500000001, 769.1195100000001,
        368.2752500000001, 763.63151, 353.9484300000001, 731.5399800000001, 322.4092200000001, 734.0424300000001,
        292.2076700000001, 737.0526500000001, 270.9334000000001, 712.87075, 268.32278000000014, 684.59729,
        264.91705000000013, 660.78674, 263.63827000000015, 636.61054, 266.24783000000014, 612.6503600000001,
        265.4482800000001, 624.9235300000001, 269.00922000000014, 643.5113800000001, 269.98985000000016, 618.5596100000001,
        270.60073000000017, 579.2417000000002, 284.10643000000016, 540.3129100000001, 302.85915000000017, 506.40822000000014,
        318.9822500000002, 495.86722000000015, 323.19467000000014, 458.11942000000016, 327.20738000000017, 435.93230000000017,
        327.68246000000016, 408.4916400000002, 316.2980600000002, 382.22952000000015, 312.1250200000002, 355.22465000000017,
        313.80537000000015, 323.20009000000016, 324.3845000000002, 288.41017000000016, 328.5192700000002, 254.96304000000015,
        333.6717500000002, 229.90489000000014, 331.37780000000015, 203.72965000000016, 346.9093100000002, 183.76094000000015,
        339.55298000000016, 164.36900000000014, 309.8967000000002, 142.78184000000016, 330.7996100000002, 121.40415000000016,
        347.2676800000002, 109.17987000000016, 370.1560200000002, 96.34303200000016, 376.6187900000002, 77.54510700000016,
        368.42547000000025, 84.28916500000015, 347.8078400000002, 111.57771000000017, 344.4606600000002, 106.57649000000016,
        362.7924500000002, 78.73655900000017, 397.9726800000002, 54.832016000000166, 391.8475200000002, 17.178057000000166,
        390.3787500000002, 13.172555000000166, 392.8715200000002, 5.198850500000166, 389.5781200000002, 2.093750000000165,
        362.61555000000004, 20.818324999999998, 372.79980000000006, 33.717712, 361.18747, 39.767578,
        357.1716, 48.222122999999996, 319.55123000000003, 81.817972, 348.34638, 58.776061999999996,
        358.15367000000003, 50.16926099999999, 373.36969, 38.148745999999996, 354.90372, 54.833544999999994,
        343.20541000000003, 65.23002399999999, 309.97546, 95.763189, 310.85153, 89.201168,
        312.19934, 73.516061, 290.80228, 112.35764, 290.19721000000004, 103.20508,
        273.51704000000007, 130.43893, 290.58438000000007, 72.02279399999999, 288.93546000000003, 98.89452399999999,
        301.57483, 92.49227599999999, 296.62941, 60.74004899999999, 289.36914, 88.804689,
        287.00289000000004, 61.353775, 273.35777, 121.56124, 265.99805000000003, 125.81055,
        268.73954000000003, 116.79137, 289.23073000000005, 82.639126, 275.98828000000003, 84.187501,
        266.67977, 99.248237, 271.50427, 99.058098, 269.06055000000003, 81.083986,
        258.47233000000006, 81.630602, 260.61820000000006, 120.41182, 254.97763000000003, 115.28448,
        260.76201000000003, 99.354962, 270.84044000000006, 53.2262, 260.10657000000003, 52.692260000000005,
        251.50487000000004, 63.764140000000005, 253.63307000000003, 101.98099, 248.82921000000005, 96.66698,
        253.06697000000005, 85.359618, 253.04223000000005, 65.254648, 246.30273000000005, 88.41992499999999,
        242.20783000000006, 104.82185999999999, 248.77171000000004, 65.98134499999999, 242.19751000000005, 89.483267,
        240.09810000000004, 93.661759, 235.65451000000004, 118.63021, 241.88283000000004, 101.47852,
        245.21298000000004, 115.70062, 234.77575000000004, 137.25926, 236.96474000000003, 114.42651000000001,
        228.99796000000003, 96.16784700000001, 247.23421000000005, 78.396297, 253.50799000000004, 55.137887000000006,
        258.20773, 44.10748900000001, 281.01386, 20.324765000000006, 252.85549000000003, 23.929688000000006,
        263.02343, 8.837240600000007, 229.38433000000003, 19.573828000000006, 250.70119000000003, 10.982422000000005,
        269.44506, 16.479875000000007, 284.49168000000003, 1.6150700000000047, 292.60744, 14.384766000000004,
        310.98477, 17.753075000000003, 305.35600999999997, 41.270891000000006, 315.34377, 50.52734400000001,
        296.98389000000003, 62.40225500000001, 330.90705, 89.141087, 335.87433, 60.83993900000001,
        350.08047, 44.09427000000001, 363.41645, 25.195237000000006, 366.68555, 2.9433594000000056,
        395.50327, 30.547935, 386.75076, 57.938742, 367.20437, 76.876552,
        355.07887, 86.19271400000001, 328.8256, 126.77687, 357.21965, 99.310603,
        366.60788, 90.079346, 379.48082, 73.78354, 365.96562, 92.784982,
        347.37968, 110.39343, 305.85443, 127.15691, 329.4621, 158.56591,
        344.93466, 172.32053, 350.22329, 190.76349, 333.78347, 204.32615,
        335.04918000000004, 209.43140000000002, 326.48788, 227.84628, 331.3752, 227.82207000000002,
        328.24246, 258.00835, 320.62258, 287.64926, 317.04942, 317.88713,
        301.24448, 345.78071, 317.27809, 373.94756, 321.46272, 402.76138000000003,
        333.65603, 437.66092000000003, 319.69248999999996, 474.82651000000004, 305.79286, 506.99403000000007,
        288.14343, 517.1625600000001, 282.00025, 554.2431200000001, 274.47424, 576.3946100000001,
        267.9776, 588.9070300000001, 270.17571, 630.02269, 267.81297, 625.55604,
        266.67189, 587.7126000000001, 262.12651, 639.76058, 263.92815, 651.08783,
        266.44309000000004, 677.17916, 266.4361, 709.7786000000001, 289.44118000000003, 727.1212400000001,
        305.2579, 735.3190400000001, 347.65869000000004, 736.8327400000001, 349.80847000000006, 743.7906200000001,
        328.67575000000005, 741.00295, 350.32286000000005, 749.1880500000001, 355.29564000000005, 749.0004700000001,
        342.41146000000003, 777.3845600000001, 304.12531000000007, 767.60441, 279.02990000000005, 768.8052100000001,
        260.67017000000004, 768.0128400000001, 209.20082000000005, 786.1065000000001, 218.41631000000007, 751.8408700000001,
        238.33619000000007, 721.4971700000001, 226.69279000000006, 684.2730100000001, 217.29339000000007, 652.2139000000001,
        203.85072000000008, 635.9579500000001, 214.51828000000006, 595.7870200000001, 197.63004000000006, 590.6171800000001,
        186.69676000000007, 600.87372, 164.61676000000006, 613.12669, 186.69621000000006, 598.09112,
        207.21292000000005, 580.3747800000001, 151.56693000000007, 618.4746100000001, 163.19034000000005, 610.90767,
        131.62924000000004, 630.9467500000001, 98.50896800000005, 662.35179, 104.24959000000004, 703.41912,
        104.60654000000004, 724.07147, 116.44772000000005, 741.87147, 121.73001000000004, 751.8429100000001,
        148.16563000000002, 756.1978700000001, 108.85035000000003, 783.1426200000001, 93.39977700000003, 763.84878,
        75.41692200000003, 740.33155, 51.29633600000003, 718.20329, 39.226468000000025, 690.81714,
        48.55690800000002, 657.19654, 87.05653300000003, 637.35178, 96.51171900000003, 601.58008,
        115.58564000000003, 574.8845399999999, 140.35328000000004, 551.6185899999999, 170.79373000000004, 540.19513,
        192.58691000000005, 512.25343, 171.78736000000004, 474.18116999999995, 170.80273000000003, 442.51955,
        170.36800000000002, 428.26536, 162.05513000000002, 407.93456, 161.31747000000001, 390.52878999999996,
        154.26495000000003, 366.19948999999997, 166.22909, 360.73321999999996, 179.24236000000002, 343.47101,
        190.40709, 332.52355, 197.02559000000002, 296.50669, 204.93333, 297.12699,
        201.37733, 310.79907, 194.49687, 332.30652999999995, 191.11883, 339.68188,
        200.39048, 322.13338, 212.72224, 311.38070999999997, 222.79286, 294.74244,
        213.80644999999998, 317.98739, 198.8647, 341.40542999999997, 206.66395, 366.9397,
        223.95468, 351.60017, 236.16331, 336.53894, 263.11512, 331.69747,
        241.51644, 344.06102, 205.43211, 354.2093, 206.85692999999998, 384.82598,
        212.87333999999998, 401.27769, 257.32084999999995, 400.29183, 222.06238999999997, 401.21928,
        227.26086999999995, 410.5541, 255.92836999999997, 417.18668, 233.09767999999997, 425.26232000000005,
        223.49923999999996, 464.01682000000005, 241.64405999999997, 504.05205000000007, 232.40440999999996, 543.22914,
        218.16633999999996, 518.52898, 239.12819999999996, 485.35705, 227.83236999999997, 457.27215,
        237.46195999999998, 421.64198, 195.10786999999996, 406.81693, 194.72453999999996, 372.6275,
        187.52075999999997, 358.61432, 210.22992999999997, 317.5267, 184.55936999999997, 346.93390999999997,
        160.05110999999997, 366.49897, 163.67959999999997, 405.91794999999996, 184.84772999999998, 426.52594999999997,
        169.46839, 416.20827999999995, 173.21536999999998, 425.16312, 184.18374999999997, 434.66074999999995,
        158.22376999999997, 409.08233999999993, 183.05461999999997, 463.74021999999997, 183.77788999999999, 476.8021499999999,
        187.48915, 490.2075299999999, 193.84784, 526.9115999999999, 189.56427, 529.3649399999999,
        189.37451, 513.7500299999999, 188.97409, 490.4334099999999, 178.83601, 480.95167999999995,
        180.41606, 506.24177999999995, 193.53967999999998, 536.50203, 177.16604999999998, 558.52204,
        173.53016, 547.0001299999999, 133.41563, 582.0612, 160.72071, 561.6080199999999,
        182.70018, 542.4387899999999, 137.28909, 566.9564799999999, 132.26173, 573.0983099999999,
        117.45613, 577.4946999999999, 108.60926, 619.8202599999998, 106.4127, 612.5415199999999,
        114.24716000000001, 587.6424899999998, 80.238407, 651.3332599999999, 86.909345, 636.2144299999999,
        72.687473, 653.8762499999999, 42.665849, 677.9036699999999, 67.439107, 699.8743899999998,
        84.565003, 720.4596999999999, 86.63627400000001, 758.0146199999998, 114.34969000000001, 767.3990199999998,
        128.22670000000002, 752.0291799999999, 90.24594400000001, 731.0651299999998, 92.349659, 708.6678999999998,
        84.449119, 678.8187099999998, 108.73722000000001, 753.2200699999999, 104.08029, 719.2300899999998,
        101.40230000000001, 693.3456099999997, 95.232545, 660.1488799999997, 118.75550000000001, 641.5045199999997,
        131.98295000000002, 629.8080699999997, 136.64104, 614.7679399999997, 136.58384, 626.8658199999998,
        150.68834, 616.6384599999998, 179.23205000000002, 590.3921999999998, 185.24792000000002, 590.2250299999997,
        168.36856000000003, 607.3336199999998, 213.89117000000002, 579.7096899999997, 213.15926000000002, 568.9342599999998,
        215.78097000000002, 559.9801999999997, 206.63838, 595.2285999999998, 210.26201, 604.4052099999998,
        213.43656000000001, 649.9628799999998, 239.72116, 693.4393399999998, 227.4913, 739.9065799999998,
        220.59107, 757.1792599999999, 215.30338, 773.1596899999998, 241.49996, 768.0946099999999,
        269.04859999999996, 766.0544199999998, 296.67214, 763.6812999999999, 324.06821, 765.6783099999999,
        314.7728, 750.3265299999999, 324.11881, 765.1078899999999, 332.34752000000003, 761.7603499999999,
        316.09967000000006, 745.2496899999999, 329.01132, 757.21422, 341.13471000000004, 756.53771,
        325.27741000000003, 748.5185899999999, 357.71885000000003, 754.31468, 335.26750000000004, 744.65685,
        312.09715000000006, 735.3416199999999, 282.09257, 741.0022399999999, 268.28898000000004, 713.94396,
        260.64828000000006, 683.16116, 262.03623000000005, 648.5695999999999, 262.09762000000006, 616.30142,
        262.3127800000001, 589.30422, 277.0930000000001, 565.4087, 281.25325000000004, 539.35712,
        299.28827, 505.48104, 323.32903000000005, 471.32905, 320.65954000000005, 430.882,
        321.02306000000004, 429.93823000000003, 324.71540000000005, 418.31789000000003, 320.4491100000001, 410.52809,
        318.1617700000001, 424.5652, 317.7124800000001, 383.39357, 312.2160800000001, 374.10947000000004,
        303.1841300000001, 351.49365000000006, 299.4256500000001, 339.6618500000001, 305.9061400000001, 319.53200000000004,
        302.3496300000001, 307.13356000000005, 309.3645800000001, 318.13715, 310.1408100000001, 320.15702000000005,
        316.9033100000001, 296.1013300000001, 324.3000600000001, 269.75590000000005, 321.8363400000001, 244.09250000000003,
        323.1868000000001, 251.18638000000004, 323.9996700000001, 222.15157000000002, 326.86128000000014, 212.87083000000004,
        320.51626000000016, 202.92242000000005, 310.7950500000001, 224.55872000000005, 321.89494000000013, 205.88547000000005,
        332.2682800000001, 193.57206000000005, 327.26440000000014, 194.08543000000006, 324.27061000000015, 194.17745000000005,
        322.5911600000002, 179.87188000000006, 298.65984000000014, 219.64370000000005, 316.0921700000001, 191.65306000000004,
        311.10137000000014, 187.04426000000004, 288.80781000000013, 208.76847000000004, 305.96005000000014, 189.33671000000004,
        319.13894000000016, 172.06416000000004, 283.6532500000001, 202.10835000000003, 303.1162600000001, 181.06527000000003,
        300.82303000000013, 172.02767000000003, 295.58248000000015, 178.12489000000002, 294.6502400000001, 165.77734000000004,
        305.1151500000001, 165.13860000000003, 310.7386800000001, 177.68187000000003, 322.8084300000001, 178.37312000000003,
        313.8929700000001, 169.02654000000004, 295.1945400000001, 145.91975000000002, 312.3005800000001, 161.84764,
        309.5627400000001, 164.70073000000002, 348.35543000000007, 202.46987000000001, 334.2315400000001, 171.4958,
        331.0937000000001, 154.18678, 307.3711900000001, 122.08682, 311.0349600000001, 152.58396,
        305.2665300000001, 140.39237, 312.00897000000015, 131.77361, 296.1873000000001, 141.98629,
        317.5245200000001, 124.37106, 340.6266300000001, 108.01196999999999, 355.53426000000013, 83.98672099999999,
        373.02187000000015, 63.711460999999986, 386.6428300000001, 38.98821599999999, 384.53306000000015, 10.978473999999991,
        388.92828000000014, 18.85101499999999, 375.93148000000014, 57.20515199999999, 383.3395600000002, 50.74409899999999,
        390.2365300000002, 36.01705899999999, 386.9131500000002, 19.560612999999993, 389.73618000000016, 3.98046879999999,
        392.48737, 18.120708999999998, 400.54464, 36.432642, 398.42186000000004, 8.7578065,
        397.83933, 8.122338099999999, 399.04346000000004, 5.0545841, 397.42383000000007, 5.0371093999999985,
        398.49120999999997, 19.342841, 395.85274, 29.78284, 397.42983, 9.662109399999999,
        241.76255, 18.670741, 289.74453, 27.208514, 266.82244000000003, 37.755899,
        264.4415, 49.640837, 264.74856000000005, 93.32306299999999, 269.37565, 60.242959,
        270.52862, 46.733052, 291.42415, 15.242671000000001, 264.18959, 15.298828,
        292.01331, 21.084446, 264.34629, 55.712827000000004, 265.96106, 73.421875,
        259.15734999999995, 51.695943, 286.87113999999997, 25.106484000000002, 258.59778, 17.617188,
        216.14784, 41.930060999999995, 228.32541999999998, 76.977169, 215.37500999999997, 101.28714,
        224.80848999999998, 91.19546199999999, 224.39684999999997, 73.02316199999999, 230.69473999999997, 62.642571,
        247.81109999999995, 63.203114, 218.57088999999996, 101.7661, 221.02623999999997, 117.58069,
        215.75272999999999, 134.69246, 215.30980999999997, 125.60445, 212.64073999999997, 117.97071000000001,
        208.91394999999997, 127.66260000000001, 214.53204999999997, 159.72161, 217.69542999999996, 136.90040000000002,
        223.12330999999995, 114.97928000000002, 239.83115999999995, 79.69854600000002, 240.35753999999997, 55.68751400000002,
        217.73969999999997, 66.75876300000002, 247.42921999999996, 12.609816000000023, 230.21890999999997, 41.248020000000025,
        230.84947999999997, 34.25179300000003, 238.25629999999995, 27.105124000000025, 239.96495999999996, 22.265625000000025,
        277.47, 31.582759, 285.8333, 60.818607, 289.77746, 33.466798,
        288.93896, 31.196259999999995, 294.52272, 30.138448999999998, 290.55871, 27.873046999999996
    ];


    function linePoint() {

    }

    function linePoint(x, y) {
        this.x = x;
        this.y = y;
    }

    linePoint.prototype = {
        x: 10,
        y: 10,
        speedX: 4,
        speedY: 4,
        update: function () {
            if (this.x + this.speedX > canvas.width || this.x + this.speedX < 0) this.speedX = -this.speedX
            if (this.y + this.speedY > canvas.height || this.y + this.speedY < 0) this.speedY = -this.speedY
        },
        moveX: function () { this.x += this.speedX },
        moveY: function () { this.y += this.speedY },
    }

    function initPoints() {
        var array = [];

        for (i = 0; i < path.length; i += 2) {
            posX = path[i];
            posY = path[i + 1]
            array.push(new linePoint(posX, posY));
        }

        return array;
    }

    function Shape() {
        this.linePoints = initPoints();
    }

    function Shape(fillStyle, stroke, lineWidth, x, y, //linePoints
    ) {
        this.fillStyle = fillStyle;
        this.stroke = stroke;
        this.lineWidth = lineWidth;
        // this.linePoints = this.linePoints;
        this.x = x;
        this.y = y;
        this.linePoints = initPoints();
    }

    Shape.prototype = {
        linePoints: [],
        fillStyle: 'blue',
        stroke: 'yellow',
        x: 10,
        y: 10,
    }


    function setup() {

        shape = new Shape(`rgba(1,0, 0, 1)`, 'black', 5, 0, 120);

        shapes.push(shape);

    }


    function drawLines(point) {
        point.update();
        point.moveX();
        point.moveY();
        ctx.lineTo(point.x, point.y);
    }

    function drawBeziers(cp1, cp2, point, show) {
        /*
         point.update();
         point.moveX();
         point.moveY();
         cp1.update();
         cp1.moveX();
         cp1.moveY();
         cp2.update();
         cp2.moveX();
         cp2.moveY();
 */
        if (show) {
            ctx.bezierCurveTo(cp1.x, cp1.y, cp2.x, cp2.y, point.x, point.y);
        }
    }

    function draw(shape) {
        o = shape;
        var show = false;
        var step = 0;
        var modulo = 1;
        dropPoints += .1;
        if (dropPoints > 48) dropPoints = 1;
        ctx.beginPath();
        ctx.moveTo(shape.linePoints[0].x, shape.linePoints[0].y);
        for (var i = 0; i < o.linePoints.length - 2; i += 3) {
            step = Math.round(dropPoints) * 3;
            modulo = i % step;


            drawBeziers(o.linePoints[i], o.linePoints[i + 1], o.linePoints[i + 2], !modulo);
        }

        ctx.closePath();

        ctx.fillStyle = shape.fill; //`rgba(0,128, 128, 0.5)`;
        ctx.strokeStyle = shape.strokeStyle;
        ctx.fillStyle = shape.fillStyle;
        ctx.lineWidth = ctx.lineWidth;
        ctx.stroke();
        ctx.fill();
    }

    /*
        function draw(shape) {
            
            ctx.beginPath();
            ctx.moveTo(shape.linePoints[0], shape.linePoints[1]);
            shape.linePoints.forEach(drawLines);
            ctx.closePath();
    
            //ctx.fillStyle = shape.fill; //`rgba(0,128, 128, 0.5)`;
            ctx.strokeStyle = shape.stroke;
            ctx.fillStyle=shape.fillStyle;
            ctx.lineWidth=shape.lineWidth;
            ctx.stroke();
            ctx.fill();
        }
      */
    function drawAll() {
        shapes.forEach(draw);
    }



    setup();

    // below is the only public part of the function
    return function () {
        drawAll(shapes);
    }
}();

animation["c"].play = true;

