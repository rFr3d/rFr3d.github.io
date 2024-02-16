//Send a test email, nodemailer
function sendEmail () {
    $.get("/send?id=" + document.getElementsByName("name")[0].value + "&oop=" + document.getElementsByName("text")[0].value + "&yr=" + document.getElementsByName("electionYear")[0].value);
    alert("Your summary has been submitted")
};


//static data for elections
var data = {
    "pres2012": [
        { "abbr": "AL", "state": "Alabama", "electors": 9, "dem": 795696, "rep": 1255925 },
        { "abbr": "AK", "state": "Alaska", "electors": 3, "dem": 122640, "rep": 164676 },
        { "abbr": "AZ", "state": "Arizona", "electors": 11, "dem": 1025232, "rep": 1233654 },
        { "abbr": "AR", "state": "Arkansas", "electors": 6, "dem": 394409, "rep": 647744 },
        { "abbr": "CA", "state": "California", "electors": 55, "dem": 7854285, "rep": 4839958 },
        { "abbr": "CO", "state": "Colorado", "electors": 9, "dem": 1322998, "rep": 1185050 },
        { "abbr": "CT", "state": "Connecticut", "electors": 7, "dem": 905083, "rep": 634892 },
        { "abbr": "DE", "state": "Delaware", "electors": 3, "dem": 242584, "rep": 165484 },
        { "abbr": "DC", "state": "District of Columbia", "electors": 3, "dem": 267070, "rep": 21381 },
        { "abbr": "FL", "state": "Florida", "electors": 29, "dem": 4237756, "rep": 4163447 },
        { "abbr": "GA", "state": "Georgia", "electors": 16, "dem": 1773827, "rep": 2078688 },
        { "abbr": "HI", "state": "Hawaii", "electors": 4, "dem": 306658, "rep": 121015 },
        { "abbr": "ID", "state": "Idaho", "electors": 4, "dem": 212787, "rep": 420911 },
        { "abbr": "IL", "state": "Illinois", "electors": 20, "dem": 3019512, "rep": 2135216 },
        { "abbr": "IN", "state": "Indiana", "electors": 11, "dem": 1152887, "rep": 1420543 },
        { "abbr": "IA", "state": "Iowa", "electors": 6, "dem": 822544, "rep": 730617 },
        { "abbr": "KS", "state": "Kansas", "electors": 6, "dem": 440726, "rep": 692634 },
        { "abbr": "KY", "state": "Kentucky", "electors": 8, "dem": 679370, "rep": 1087190 },
        { "abbr": "LA", "state": "Louisiana", "electors": 8, "dem": 809141, "rep": 1152262 },
        { "abbr": "ME", "state": "Maine", "electors": 4, "dem": 401306, "rep": 292276 },
        { "abbr": "MD", "state": "Maryland", "electors": 10, "dem": 1677844, "rep": 971869 },
        { "abbr": "MA", "state": "Massachusetts", "electors": 11, "dem": 1921290, "rep": 1188314 },
        { "abbr": "MI-", "state": "Michigan", "electors": 16, "dem": 2564569, "rep": 2115256 },
        { "abbr": "SP-", "state": "Michigan", "electors": "-", "dem": 2564569, "rep": 2115256 },
        { "abbr": "MN", "state": "Minnesota", "electors": 10, "dem": 1546167, "rep": 1320225 },
        { "abbr": "MS", "state": "Mississippi", "electors": 6, "dem": 562949, "rep": 710746 },
        { "abbr": "MO", "state": "Missouri", "electors": 10, "dem": 1223796, "rep": 1482440 },
        { "abbr": "MT", "state": "Montana", "electors": 3, "dem": 201839, "rep": 267928 },
        { "abbr": "NE", "state": "Nebraska", "electors": 5, "dem": 302081, "rep": 475064 },
        { "abbr": "NV", "state": "Nevada", "electors": 6, "dem": 531373, "rep": 463567 },
        { "abbr": "NH", "state": "New Hampshire", "electors": 4, "dem": 369561, "rep": 329918 },
        { "abbr": "NJ", "state": "New Jersey", "electors": 14, "dem": 2122786, "rep": 1478088 },
        { "abbr": "NM", "state": "New Mexico", "electors": 5, "dem": 415335, "rep": 335788 },
        { "abbr": "NY", "state": "New York", "electors": 29, "dem": 4172739, "rep": 2415156 },
        { "abbr": "NC", "state": "North Carolina", "electors": 15, "dem": 2178391, "rep": 2270395 },
        { "abbr": "ND", "state": "North Dakota", "electors": 3, "dem": 124966, "rep": 188320 },
        { "abbr": "OH", "state": "Ohio", "electors": 18, "dem": 2827621, "rep": 2661407 },
        { "abbr": "OK", "state": "Oklahoma", "electors": 7, "dem": 443547, "rep": 891325 },
        { "abbr": "OR", "state": "Oregon", "electors": 7, "dem": 970488, "rep": 754175 },
        { "abbr": "PA", "state": "Pennsylvania", "electors": 20, "dem": 2990274, "rep": 2680434 },
        { "abbr": "RI", "state": "Rhode Island", "electors": 4, "dem": 279677, "rep": 157204 },
        { "abbr": "SC", "state": "South Carolina", "electors": 9, "dem": 865941, "rep": 1071645 },
        { "abbr": "SD", "state": "South Dakota", "electors": 3, "dem": 145039, "rep": 210610 },
        { "abbr": "TN", "state": "Tennessee", "electors": 11, "dem": 960709, "rep": 1462330 },
        { "abbr": "TX", "state": "Texas", "electors": 38, "dem": 3308124, "rep": 4569843 },
        { "abbr": "UT", "state": "Utah", "electors": 6, "dem": 251813, "rep": 740600 },
        { "abbr": "VT", "state": "Vermont", "electors": 3, "dem": 199239, "rep": 92698 },
        { "abbr": "VA", "state": "Virginia", "electors": 13, "dem": 1971820, "rep": 1822522 },
        { "abbr": "WA", "state": "Washington", "electors": 12, "dem": 1755396, "rep": 1290670 },
        { "abbr": "WV", "state": "West Virginia", "electors": 5, "dem": 238269, "rep": 417655 },
        { "abbr": "WI", "state": "Wisconsin", "electors": 10, "dem": 1620985, "rep": 1410966 },
        { "abbr": "WY", "state": "Wyoming", "electors": 3, "dem": 69286, "rep": 170962 }
    ],
    "pres2008": [
        { "abbr": "AL", "state": "Alabama", "electors": 9, "dem": 813479, "rep": 1266546 },
        { "abbr": "AK", "state": "Alaska", "electors": 3, "dem": 123594, "rep": 193841 },
        { "abbr": "AZ", "state": "Arizona", "electors": 10, "dem": 1034707, "rep": 1230111 },
        { "abbr": "AR", "state": "Arkansas", "electors": 6, "dem": 422310, "rep": 638017 },
        { "abbr": "CA", "state": "California", "electors": 55, "dem": 8274473, "rep": 5011781 },
        { "abbr": "CO", "state": "Colorado", "electors": 9, "dem": 1288576, "rep": 1073589 },
        { "abbr": "CT", "state": "Connecticut", "electors": 7, "dem": 997772, "rep": 629428 },
        { "abbr": "DE", "state": "Delaware", "electors": 3, "dem": 255459, "rep": 152374 },
        { "abbr": "DC", "state": "District of Columbia", "electors": 3, "dem": 245800, "rep": 17367 },
        { "abbr": "FL", "state": "Florida", "electors": 27, "dem": 4282074, "rep": 4045624 },
        { "abbr": "GA", "state": "Georgia", "electors": 15, "dem": 1844123, "rep": 2048759 },
        { "abbr": "HI", "state": "Hawaii", "electors": 4, "dem": 325871, "rep": 120566 },
        { "abbr": "ID", "state": "Idaho", "electors": 4, "dem": 236440, "rep": 403012 },
        { "abbr": "IL", "state": "Illinois", "electors": 21, "dem": 3419348, "rep": 2031179 },
        { "abbr": "IN", "state": "Indiana", "electors": 11, "dem": 1374039, "rep": 1345648 },
        { "abbr": "IA", "state": "Iowa", "electors": 7, "dem": 828940, "rep": 682379 },
        { "abbr": "KS", "state": "Kansas", "electors": 6, "dem": 514765, "rep": 699655 },
        { "abbr": "KY", "state": "Kentucky", "electors": 8, "dem": 751985, "rep": 1048462 },
        { "abbr": "LA", "state": "Louisiana", "electors": 9, "dem": 782989, "rep": 1148275 },
        { "abbr": "ME", "state": "Maine", "electors": 2, "dem": 421923, "rep": 295273 },
        { "abbr": "MD", "state": "Maryland", "electors": 10, "dem": 1629467, "rep": 959862 },
        { "abbr": "MA", "state": "Massachusetts", "electors": 12, "dem": 1904097, "rep": 1108854 },
        { "abbr": "MI-", "state": "Michigan", "electors": 17, "dem": 2872579, "rep": 2048639 },
        { "abbr": "SP-", "state": "Michigan", "electors": 17, "dem": 2872579, "rep": 2048639 },
        { "abbr": "MN", "state": "Minnesota", "electors": 10, "dem": 1573354, "rep": 1275409 },
        { "abbr": "MS", "state": "Mississippi", "electors": 6, "dem": 554662, "rep": 724597 },
        { "abbr": "MO", "state": "Missouri", "electors": 11, "dem": 1441911, "rep": 1445814 },
        { "abbr": "MT", "state": "Montana", "electors": 3, "dem": 231667, "rep": 242763 },
        { "abbr": "NE", "state": "Nebraska", "electors": 2, "dem": 333319, "rep": 452979 },
        { "abbr": "NV", "state": "Nevada", "electors": 5, "dem": 533736, "rep": 412827 },
        { "abbr": "NH", "state": "New Hampshire", "electors": 4, "dem": 384826, "rep": 316534 },
        { "abbr": "NJ", "state": "New Jersey", "electors": 15, "dem": 2215422, "rep": 1613207 },
        { "abbr": "NM", "state": "New Mexico", "electors": 5, "dem": 472422, "rep": 346832 },
        { "abbr": "NY", "state": "New York", "electors": 31, "dem": 4804701, "rep": 2752728 },
        { "abbr": "NC", "state": "North Carolina", "electors": 15, "dem": 2142651, "rep": 2128474 },
        { "abbr": "ND", "state": "North Dakota", "electors": 3, "dem": 141278, "rep": 168601 },
        { "abbr": "OH", "state": "Ohio", "electors": 20, "dem": 2940044, "rep": 2677820 },
        { "abbr": "OK", "state": "Oklahoma", "electors": 7, "dem": 502496, "rep": 960165 },
        { "abbr": "OR", "state": "Oregon", "electors": 7, "dem": 1037291, "rep": 738475 },
        { "abbr": "PA", "state": "Pennsylvania", "electors": 21, "dem": 3276363, "rep": 2655885 },
        { "abbr": "RI", "state": "Rhode Island", "electors": 4, "dem": 296571, "rep": 165391 },
        { "abbr": "SC", "state": "South Carolina", "electors": 8, "dem": 862449, "rep": 1034896 },
        { "abbr": "SD", "state": "South Dakota", "electors": 3, "dem": 170924, "rep": 203054 },
        { "abbr": "TN", "state": "Tennessee", "electors": 11, "dem": 1087437, "rep": 1479178 },
        { "abbr": "TX", "state": "Texas", "electors": 34, "dem": 3528633, "rep": 4479328 },
        { "abbr": "UT", "state": "Utah", "electors": 5, "dem": 327670, "rep": 596030 },
        { "abbr": "VT", "state": "Vermont", "electors": 3, "dem": 219262, "rep": 98974 },
        { "abbr": "VA", "state": "Virginia", "electors": 13, "dem": 1959532, "rep": 1725005 },
        { "abbr": "WA", "state": "WA", "electors": 11, "dem": 1750848, "rep": 1229216 },
        { "abbr": "WV", "state": "West Virginia", "electors": 5, "dem": 303857, "rep": 397466 },
        { "abbr": "WI", "state": "Wisconsin", "electors": 10, "dem": 1677211, "rep": 1262393 },
        { "abbr": "WY", "state": "Wyoming", "electors": 3, "dem": 82868, "rep": 164958 }
    ],
    "pres2004": [
        { "abbr": "AL", "state": "Alabama", "electors": 9, "dem": 693933, "rep": 1176394 },
        { "abbr": "AK", "state": "Alaska", "electors": 3, "dem": 111025, "rep": 190889 },
        { "abbr": "AZ", "state": "Arizona", "electors": 10, "dem": 893524, "rep": 1104294 },
        { "abbr": "AR", "state": "Arkansas", "electors": 6, "dem": 470230, "rep": 573182 },
        { "abbr": "CA", "state": "California", "electors": 55, "dem": 6745485, "rep": 5509826 },
        { "abbr": "CO", "state": "Colorado", "electors": 9, "dem": 1001732, "rep": 1101255 },
        { "abbr": "CT", "state": "Connecticut", "electors": 7, "dem": 857488, "rep": 693826 },
        { "abbr": "DE", "state": "Delaware", "electors": 3, "dem": 200152, "rep": 171660 },
        { "abbr": "DC", "state": "District of Columbia", "electors": 3, "dem": 202970, "rep": 21256 },
        { "abbr": "FL", "state": "Florida", "electors": 27, "dem": 3583544, "rep": 3964522 },
        { "abbr": "GA", "state": "Georgia", "electors": 15, "dem": 1366149, "rep": 1914254 },
        { "abbr": "HI", "state": "Hawaii", "electors": 4, "dem": 231708, "rep": 194191 },
        { "abbr": "ID", "state": "Idaho", "electors": 4, "dem": 181098, "rep": 409235 },
        { "abbr": "IL", "state": "Illinois", "electors": 21, "dem": 2891989, "rep": 2346608 },
        { "abbr": "IN", "state": "Indiana", "electors": 11, "dem": 969011, "rep": 1479438 },
        { "abbr": "IA", "state": "Iowa", "electors": 7, "dem": 741898, "rep": 751957 },
        { "abbr": "KS", "state": "Kansas", "electors": 6, "dem": 434993, "rep": 736456 },
        { "abbr": "KY", "state": "Kentucky", "electors": 8, "dem": 712733, "rep": 1069439 },
        { "abbr": "LA", "state": "Louisiana", "electors": 9, "dem": 820299, "rep": 1102169 },
        { "abbr": "ME", "state": "Maine", "electors": 4, "dem": 396842, "rep": 330201 },
        { "abbr": "MD", "state": "Maryland", "electors": 10, "dem": 1334493, "rep": 1024703 },
        { "abbr": "MA", "state": "Massachusetts", "electors": 12, "dem": 1803800, "rep": 1071109 },
        { "abbr": "MI-", "state": "Michigan", "electors": 17, "dem": 2479183, "rep": 2313746 },
        { "abbr": "SP-", "state": "Michigan", "electors": 17, "dem": 2479183, "rep": 2313746 },
        { "abbr": "MN", "state": "Minnesota", "electors": 10, "dem": 1445014, "rep": 1346695 },
        { "abbr": "MS", "state": "Mississippi", "electors": 6, "dem": 457766, "rep": 672660 },
        { "abbr": "MO", "state": "Missouri", "electors": 11, "dem": 1259171, "rep": 1455713 },
        { "abbr": "MT", "state": "Montana", "electors": 3, "dem": 173710, "rep": 266063 },
        { "abbr": "NE", "state": "Nebraska", "electors": 5, "dem": 254328, "rep": 512814 },
        { "abbr": "NV", "state": "Nevada", "electors": 5, "dem": 397190, "rep": 418690 },
        { "abbr": "NH", "state": "New Hampshire", "electors": 4, "dem": 340511, "rep": 331237 },
        { "abbr": "NJ", "state": "New Jersey", "electors": 15, "dem": 1911430, "rep": 1670003 },
        { "abbr": "NM", "state": "New Mexico", "electors": 5, "dem": 370942, "rep": 376930 },
        { "abbr": "NY", "state": "New York", "electors": 31, "dem": 4314280, "rep": 2962567 },
        { "abbr": "NC", "state": "North Carolina", "electors": 15, "dem": 1525849, "rep": 1961166 },
        { "abbr": "ND", "state": "North Dakota", "electors": 3, "dem": 111052, "rep": 196651 },
        { "abbr": "OH", "state": "Ohio", "electors": 20, "dem": 2739952, "rep": 2858727 },
        { "abbr": "OK", "state": "Oklahoma", "electors": 7, "dem": 503966, "rep": 959792 },
        { "abbr": "OR", "state": "Oregon", "electors": 7, "dem": 943163, "rep": 866831 },
        { "abbr": "PA", "state": "Pennsylvania", "electors": 21, "dem": 2938095, "rep": 2793847 },
        { "abbr": "RI", "state": "Rhode Island", "electors": 4, "dem": 259760, "rep": 169046 },
        { "abbr": "SC", "state": "South Carolina", "electors": 8, "dem": 661699, "rep": 937974 },
        { "abbr": "SD", "state": "South Dakota", "electors": 3, "dem": 149244, "rep": 232584 },
        { "abbr": "TN", "state": "Tennessee", "electors": 11, "dem": 1036477, "rep": 1384375 },
        { "abbr": "TX", "state": "Texas", "electors": 34, "dem": 2832704, "rep": 4526917 },
        { "abbr": "UT", "state": "Utah", "electors": 5, "dem": 241199, "rep": 663742 },
        { "abbr": "VT", "state": "Vermont", "electors": 3, "dem": 184067, "rep": 121180 },
        { "abbr": "VA", "state": "Virginia", "electors": 13, "dem": 1454742, "rep": 1716959 },
        { "abbr": "WA", "state": "Washington", "electors": 11, "dem": 1510201, "rep": 1304894 },
        { "abbr": "WV", "state": "West Virginia", "electors": 5, "dem": 326541, "rep": 423778 },
        { "abbr": "WI", "state": "Wisconsin", "electors": 10, "dem": 1489504, "rep": 1478120 },
        { "abbr": "WY", "state": "Wyoming", "electors": 3, "dem": 70776, "rep": 167629 }
    ], 
    "pres2000": [
        {"abbr":"AL","state":"Alabama","electors":9,"dem":692611,"rep":941173},
        {"abbr":"AK","state":"Alaska","electors":3,"dem":79004,"rep":167398},
        {"abbr":"AZ","state":"Arizona","electors":8,"dem":685341,"rep":781652},
        {"abbr":"AR","state":"Arkansas","electors":6,"dem":422768,"rep":472940},
        {"abbr":"CA","state":"California","electors":54,"dem":5861203,"rep":4567429},
        {"abbr":"CO","state":"Colorado","electors":8,"dem":738227,"rep":883748},
        {"abbr":"CT","state":"Connecticut","electors":8,"dem":816015,"rep":561094},
        {"abbr":"DE","state":"Delaware","electors":3,"dem":180068,"rep":137288},
        {"abbr":"DC","state":"D.C.","electors":2,"dem":171923,"rep":18073},
        {"abbr":"FL","state":"Florida","electors":25,"dem":2912253,"rep":2912790},
        {"abbr":"GA","state":"Georgia","electors":13,"dem":1116230,"rep":1419720},
        {"abbr":"HI","state":"Hawaii","electors":4,"dem":205286,"rep":137845},
        {"abbr":"ID","state":"Idaho","electors":4,"dem":138637,"rep":336937},
        {"abbr":"IL","state":"Illinois","electors":22,"dem":2589026,"rep":2019421},
        {"abbr":"IN","state":"Indiana","electors":12,"dem":901980,"rep":1245836},
        {"abbr":"IA","state":"Iowa","electors":7,"dem":638517,"rep":634373},
        {"abbr":"KS","state":"Kansas","electors":6,"dem":399276,"rep":622332},
        {"abbr":"KY","state":"Kentucky","electors":8,"dem":638898,"rep":872492},
        {"abbr":"LA","state":"Louisiana","electors":9,"dem":792344,"rep":927871},
        {"abbr":"ME","state":"Maine","electors":4,"dem":319951,"rep":286616},
        {"abbr":"MD","state":"Maryland","electors":10,"dem":1145782,"rep":813797},
        {"abbr":"MA","state":"Massachusetts","electors":12,"dem":1616487,"rep":878502},
        { "abbr": "MI-", "state": "Michigan", "electors": 18, "dem": 2170418, "rep": 1953139 },
        { "abbr": "SP-", "state": "Michigan", "electors": 18, "dem": 2170418, "rep": 1953139 },
        {"abbr":"MN","state":"Minnesota","electors":10,"dem":1168266,"rep":1109659},
        {"abbr":"MS","state":"Mississippi","electors":7,"dem":404614,"rep":572844},
        {"abbr":"MO","state":"Missouri","electors":11,"dem":1111138,"rep":1189924},
        {"abbr":"MT","state":"Montana","electors":3,"dem":137126,"rep":240178},
        {"abbr":"NE","state":"Nebraska","electors":5,"dem":231780,"rep":433862},
        {"abbr":"NV","state":"Nevada","electors":4,"dem":279978,"rep":301575},
        {"abbr":"NH","state":"New Hampshire","electors":4,"dem":266348,"rep":273559},
        {"abbr":"NJ","state":"New Jersey","electors":15,"dem":1788850,"rep":1284173},
        {"abbr":"NM","state":"New Mexico","electors":5,"dem":286783,"rep":286417},
        {"abbr":"NY","state":"New York","electors":33,"dem":4107697,"rep":2403374},
        {"abbr":"NC","state":"North Carolina","electors":14,"dem":1257692,"rep":1631163},
        {"abbr":"ND","state":"North Dakota","electors":3,"dem":95284,"rep":174852},
        {"abbr":"OH","state":"Ohio","electors":21,"dem":2186190,"rep":2351209},
        {"abbr":"OK","state":"Oklahoma","electors":8,"dem":474276,"rep":744337},
        {"abbr":"OR","state":"Oregon","electors":7,"dem":720342,"rep":713577},
        {"abbr":"PA","state":"Pennsylvania","electors":23,"dem":2485967,"rep":2281127},
        {"abbr":"RI","state":"Rhode Island","electors":4,"dem":249508,"rep":130555},
        {"abbr":"SC","state":"South Carolina","electors":8,"dem":565561,"rep":785937},
        {"abbr":"SD","state":"South Dakota","electors":3,"dem":118804,"rep":190700},
        {"abbr":"TN","state":"Tennessee","electors":11,"dem":981720,"rep":1061949},
        {"abbr":"TX","state":"Texas","electors":32,"dem":2433746,"rep":3799639},
        {"abbr":"UT","state":"Utah","electors":5,"dem":203053,"rep":515096},
        {"abbr":"VT","state":"Vermont","electors":3,"dem":149022,"rep":119775},
        {"abbr":"VA","state":"Virginia","electors":13,"dem":1217290,"rep":1437490},
        {"abbr":"WA","state":"Washington","electors":11,"dem":1247652,"rep":1108864},
        {"abbr":"WV","state":"West Virginia","electors":5,"dem":295497,"rep":336475},
        {"abbr":"WI","state":"Wisconsin","electors":11,"dem":1242987,"rep":1237279},
        {"abbr":"WY","state":"Wyoming","electors":3,"dem":60481,"rep":147947}
    ],
    "pres1996": [{ "abbr": "AL", "state": "Alabama", "electors": 9, "dem": 662165, "rep": 769044 },
    { "abbr": "AK", "state": "Alaska", "electors": 3, "dem": 78294, "rep": 122746 },
    { "abbr": "AZ", "state": "Arizona", "electors": 8, "dem": 653288, "rep": 622073 },
    { "abbr": "AR", "state": "Arkansas", "electors": 6, "dem": 475171, "rep": 325416 },
    { "abbr": "CA", "state": "California", "electors": 54, "dem": 5119835, "rep": 3828380 },
    { "abbr": "CO", "state": "Colorado", "electors": 8, "dem": 671152, "rep": 691848 },
    { "abbr": "CT", "state": "Connecticut", "electors": 8, "dem": 735740, "rep": 483109 },
    { "abbr": "DE", "state": "Delaware", "electors": 3, "dem": 140355, "rep": 99062 },
    { "abbr": "DC", "state": "D.C.", "electors": 3, "dem": 158220, "rep": 17339 },
    { "abbr": "FL", "state": "Florida", "electors": 25, "dem": 2546870, "rep": 2244536 },
    { "abbr": "GA", "state": "Georgia", "electors": 13, "dem": 1053849, "rep": 1080843 },
    { "abbr": "HI", "state": "Hawaii", "electors": 4, "dem": 205012, "rep": 113943 },
    { "abbr": "ID", "state": "Idaho", "electors": 4, "dem": 165443, "rep": 256595 },
    { "abbr": "IL", "state": "Illinois", "electors": 22, "dem": 2341744, "rep": 1587021 },
    { "abbr": "IN", "state": "Indiana", "electors": 12, "dem": 887424, "rep": 1006693 },
    { "abbr": "IA", "state": "Iowa", "electors": 7, "dem": 620258, "rep": 492644 },
    { "abbr": "KS", "state": "Kansas", "electors": 6, "dem": 387659, "rep": 583245 },
    { "abbr": "KY", "state": "Kentucky", "electors": 8, "dem": 636614, "rep": 623283 },
    { "abbr": "LA", "state": "Louisiana", "electors": 9, "dem": 927837, "rep": 712586 },
    { "abbr": "ME", "state": "Maine", "electors": 4, "dem": 312788, "rep": 186378 },
    { "abbr": "MD", "state": "Maryland", "electors": 10, "dem": 966207, "rep": 681530 },
    { "abbr": "MA", "state": "Massachusetts", "electors": 12, "dem": 1571763, "rep": 718107 },
    { "abbr": "MI-", "state": "Michigan", "electors": 18, "dem": 1989653, "rep": 1481212 },
    { "abbr": "SP-", "state": "Michigan", "electors": 18, "dem": 1989653, "rep": 1481212 },
    { "abbr": "MN", "state": "Minnesota", "electors": 10, "dem": 1120438, "rep": 766476 },
    { "abbr": "MS", "state": "Mississippi", "electors": 7, "dem": 394022, "rep": 439838 },
    { "abbr": "MO", "state": "Missouri", "electors": 11, "dem": 1025935, "rep": 890016 },
    { "abbr": "MT", "state": "Montana", "electors": 3, "dem": 167922, "rep": 179652 },
    { "abbr": "NE", "state": "Nebraska", "electors": 5, "dem": 236761, "rep": 363467 },
    { "abbr": "NV", "state": "Nevada", "electors": 4, "dem": 203974, "rep": 199244 },
    { "abbr": "NH", "state": "New Hampshire", "electors": 4, "dem": 246214, "rep": 196532 },
    { "abbr": "NJ", "state": "New Jersey", "electors": 15, "dem": 1652329, "rep": 1103078 },
    { "abbr": "NM", "state": "New Mexico", "electors": 5, "dem": 273495, "rep": 232751 },
    { "abbr": "NY", "state": "New York", "electors": 33, "dem": 3756177, "rep": 1933492 },
    { "abbr": "NC", "state": "North Carolina", "electors": 14, "dem": 1107849, "rep": 1225938 },
    { "abbr": "ND", "state": "North Dakota", "electors": 3, "dem": 106905, "rep": 125050 },
    { "abbr": "OH", "state": "Ohio", "electors": 21, "dem": 2148222, "rep": 1859883 },
    { "abbr": "OK", "state": "Oklahoma", "electors": 8, "dem": 488105, "rep": 582315 },
    { "abbr": "OR", "state": "Oregon", "electors": 7, "dem": 649641, "rep": 538152 },
    { "abbr": "PA", "state": "Pennsylvania", "electors": 23, "dem": 2215819, "rep": 1801169 },
    { "abbr": "RI", "state": "Rhode Island", "electors": 4, "dem": 233050, "rep": 104683 },
    { "abbr": "SC", "state": "South Carolina", "electors": 8, "dem": 504051, "rep": 573458 },
    { "abbr": "SD", "state": "South Dakota", "electors": 3, "dem": 139333, "rep": 150543 },
    { "abbr": "TN", "state": "Tennessee", "electors": 11, "dem": 909146, "rep": 863530 },
    { "abbr": "TX", "state": "Texas", "electors": 32, "dem": 2459683, "rep": 2736167 },
    { "abbr": "UT", "state": "Utah", "electors": 5, "dem": 221633, "rep": 361911 },
    { "abbr": "VT", "state": "Vermont", "electors": 3, "dem": 137894, "rep": 80352 },
    { "abbr": "VA", "state": "Virginia", "electors": 13, "dem": 1091060, "rep": 1138350 },
    { "abbr": "WA", "state": "Washington", "electors": 11, "dem": 1123323, "rep": 840712 },
    { "abbr": "WV", "state": "West Virginia", "electors": 5, "dem": 327812, "rep": 233946 },
    { "abbr": "WI", "state": "Wisconsin", "electors": 11, "dem": 1071971, "rep": 845029 },
    { "abbr": "WY", "state": "Wyoming", "electors": 3, "dem": 77934, "rep": 105388 }
    ],
    "pres1992": [{ "abbr": "AL", "state": "Alabama", "electors": 9, "dem": 690080, "rep": 804283 },
    { "abbr": "AK", "state": "Alaska", "electors": 3, "dem": 78294, "rep": 102000 },
    { "abbr": "AZ", "state": "Arizona", "electors": 8, "dem": 543050, "rep": 572086 },
    { "abbr": "AR", "state": "Arkansas", "electors": 6, "dem": 505823, "rep": 337324 },
    { "abbr": "CA", "state": "California", "electors": 54, "dem": 5121325, "rep": 3630574 },
    { "abbr": "CO", "state": "Colorado", "electors": 8, "dem": 629681, "rep": 562850 },
    { "abbr": "CT", "state": "Connecticut", "electors": 8, "dem": 682318, "rep": 578313 },
    { "abbr": "DE", "state": "Delaware", "electors": 3, "dem": 126054, "rep": 102313 },
    { "abbr": "DC", "state": "D.C.", "electors": 3, "dem": 192619, "rep": 20698 },
    { "abbr": "FL", "state": "Florida", "electors": 25, "dem": 2072698, "rep": 2173310 },
    { "abbr": "GA", "state": "Georgia", "electors": 13, "dem": 1008966, "rep": 995252 },
    { "abbr": "HI", "state": "Hawaii", "electors": 4, "dem": 179310, "rep": 136822 },
    { "abbr": "ID", "state": "Idaho", "electors": 4, "dem": 137013, "rep": 202645 },
    { "abbr": "IL", "state": "Illinois", "electors": 22, "dem": 2453350, "rep": 1734096 },
    { "abbr": "IN", "state": "Indiana", "electors": 12, "dem": 848420, "rep": 989375 },
    { "abbr": "IA", "state": "Iowa", "electors": 7, "dem": 586353, "rep": 504891 },
    { "abbr": "KS", "state": "Kansas", "electors": 6, "dem": 390434, "rep": 449951 },
    { "abbr": "KY", "state": "Kentucky", "electors": 8, "dem": 665104, "rep": 617178 },
    { "abbr": "LA", "state": "Louisiana", "electors": 9, "dem": 815971, "rep": 733386 },
    { "abbr": "ME", "state": "Maine", "electors": 4, "dem": 263420, "rep": 206504 },
    { "abbr": "MD", "state": "Maryland", "electors": 10, "dem": 988571, "rep": 707094 },
    { "abbr": "MA", "state": "Massachusetts", "electors": 12, "dem": 1318662, "rep": 805049 },
    { "abbr": "MI-", "state": "Michigan", "electors": 18, "dem": 1871182, "rep": 1554940 },
    { "abbr": "SP-", "state": "Michigan", "electors": 18, "dem": 1871182, "rep": 1554940 },
    { "abbr": "MN", "state": "Minnesota", "electors": 10, "dem": 1020997, "rep": 747841 },
    { "abbr": "MS", "state": "Mississippi", "electors": 7, "dem": 400258, "rep": 487793 },
    { "abbr": "MO", "state": "Missouri", "electors": 11, "dem": 1053873, "rep": 811159 },
    { "abbr": "MT", "state": "Montana", "electors": 3, "dem": 154507, "rep": 144207 },
    { "abbr": "NE", "state": "Nebraska", "electors": 5, "dem": 217344, "rep": 344346 },
    { "abbr": "NV", "state": "Nevada", "electors": 4, "dem": 189148, "rep": 175828 },
    { "abbr": "NH", "state": "New Hampshire", "electors": 4, "dem": 209040, "rep": 202484 },
    { "abbr": "NJ", "state": "New Jersey", "electors": 15, "dem": 1436206, "rep": 1356865 },
    { "abbr": "NM", "state": "New Mexico", "electors": 5, "dem": 261617, "rep": 212824 },
    { "abbr": "NY", "state": "New York", "electors": 33, "dem": 3444450, "rep": 2346649 },
    { "abbr": "NC", "state": "North Carolina", "electors": 14, "dem": 1114042, "rep": 1134661 },
    { "abbr": "ND", "state": "North Dakota", "electors": 3, "dem": 99168, "rep": 136244 },
    { "abbr": "OH", "state": "Ohio", "electors": 21, "dem": 1984942, "rep": 1894310 },
    { "abbr": "OK", "state": "Oklahoma", "electors": 8, "dem": 473066, "rep": 592929 },
    { "abbr": "OR", "state": "Oregon", "electors": 7, "dem": 621314, "rep": 475757 },
    { "abbr": "PA", "state": "Pennsylvania", "electors": 23, "dem": 2239164, "rep": 1791841 },
    { "abbr": "RI", "state": "Rhode Island", "electors": 4, "dem": 213299, "rep": 131601 },
    { "abbr": "SC", "state": "South Carolina", "electors": 8, "dem": 479514, "rep": 577507 },
    { "abbr": "SD", "state": "South Dakota", "electors": 3, "dem": 124888, "rep": 136718 },
    { "abbr": "TN", "state": "Tennessee", "electors": 11, "dem": 933521, "rep": 841300 },
    { "abbr": "TX", "state": "Texas", "electors": 32, "dem": 2281815, "rep": 2496071 },
    { "abbr": "UT", "state": "Utah", "electors": 5, "dem": 183429, "rep": 322632 },
    { "abbr": "VT", "state": "Vermont", "electors": 3, "dem": 133592, "rep": 88122 },
    { "abbr": "VA", "state": "Virginia", "electors": 13, "dem": 1038650, "rep": 1150517 },
    { "abbr": "WA", "state": "Washington", "electors": 11, "dem": 993037, "rep": 731234 },
    { "abbr": "WV", "state": "West Virginia", "electors": 5, "dem": 331001, "rep": 241974 },
    { "abbr": "WI", "state": "Wisconsin", "electors": 11, "dem": 1041066, "rep": 930855 },
    { "abbr": "WY", "state": "Wyoming", "electors": 3, "dem": 68160, "rep": 79347 }
    ],
    "pres1988": [{ "abbr": "AL", "state": "Alabama", "electors": 9, "dem": 549506, "rep": 815576 },
    { "abbr": "AK", "state": "Alaska", "electors": 3, "dem": 72584, "rep": 119251 },
    { "abbr": "AZ", "state": "Arizona", "electors": 7, "dem": 454029, "rep": 702541 },
    { "abbr": "AR", "state": "Arkansas", "electors": 6, "dem": 349237, "rep": 466578 },
    { "abbr": "CA", "state": "California", "electors": 47, "dem": 4702233, "rep": 5054917 },
    { "abbr": "CO", "state": "Colorado", "electors": 8, "dem": 621453, "rep": 728155 },
    { "abbr": "CT", "state": "Connecticut", "electors": 8, "dem": 676584, "rep": 750241 },
    { "abbr": "DE", "state": "Delaware", "electors": 3, "dem": 108532, "rep": 139689 },
    { "abbr": "DC", "state": "D.C.", "electors": 3, "dem": 159407, "rep": 27590 },
    { "abbr": "FL", "state": "Florida", "electors": 21, "dem": 1656701, "rep": 2618885 },
    { "abbr": "GA", "state": "Georgia", "electors": 12, "dem": 714792, "rep": 1081331 },
    { "abbr": "HI", "state": "Hawaii", "electors": 4, "dem": 192364, "rep": 158625 },
    { "abbr": "ID", "state": "Idaho", "electors": 4, "dem": 147272, "rep": 253881 },
    { "abbr": "IL", "state": "Illinois", "electors": 24, "dem": 2215940, "rep": 2310939 },
    { "abbr": "IN", "state": "Indiana", "electors": 12, "dem": 860643, "rep": 1297763 },
    { "abbr": "IA", "state": "Iowa", "electors": 8, "dem": 670557, "rep": 545355 },
    { "abbr": "KS", "state": "Kansas", "electors": 7, "dem": 422636, "rep": 549049 },
    { "abbr": "KY", "state": "Kentucky", "electors": 9, "dem": 580368, "rep": 734281 },
    { "abbr": "LA", "state": "Louisiana", "electors": 10, "dem": 717460, "rep": 883702 },
    { "abbr": "ME", "state": "Maine", "electors": 4, "dem": 243569, "rep": 307131 },
    { "abbr": "MD", "state": "Maryland", "electors": 10, "dem": 826304, "rep": 876167 },
    { "abbr": "MA", "state": "Massachusetts", "electors": 13, "dem": 1401415, "rep": 1194635 },
    { "abbr": "MI-", "state": "Michigan", "electors": 20, "dem": 1675783, "rep": 1965485 },
    { "abbr": "SP-", "state": "Michigan", "electors": 20, "dem": 1675783, "rep": 1965485 },
    { "abbr": "MN", "state": "Minnesota", "electors": 10, "dem": 1109471, "rep": 962337 },
    { "abbr": "MS", "state": "Mississippi", "electors": 7, "dem": 363921, "rep": 557921 },
    { "abbr": "MO", "state": "Missouri", "electors": 11, "dem": 1001619, "rep": 1084953 },
    { "abbr": "MT", "state": "Montana", "electors": 4, "dem": 168956, "rep": 190412 },
    { "abbr": "NE", "state": "Nebraska", "electors": 5, "dem": 259235, "rep": 397956 },
    { "abbr": "NV", "state": "Nevada", "electors": 4, "dem": 132738, "rep": 206040 },
    { "abbr": "NH", "state": "New Hampshire", "electors": 4, "dem": 163696, "rep": 281537 },
    { "abbr": "NJ", "state": "New Jersey", "electors": 16, "dem": 1320352, "rep": 1743192 },
    { "abbr": "NM", "state": "New Mexico", "electors": 5, "dem": 244497, "rep": 270341 },
    { "abbr": "NY", "state": "New York", "electors": 36, "dem": 3347882, "rep": 3081871 },
    { "abbr": "NC", "state": "North Carolina", "electors": 13, "dem": 890167, "rep": 1237258 },
    { "abbr": "ND", "state": "North Dakota", "electors": 3, "dem": 127739, "rep": 166559 },
    { "abbr": "OH", "state": "Ohio", "electors": 23, "dem": 1939629, "rep": 2416549 },
    { "abbr": "OK", "state": "Oklahoma", "electors": 8, "dem": 483423, "rep": 678367 },
    { "abbr": "OR", "state": "Oregon", "electors": 7, "dem": 616206, "rep": 560126 },
    { "abbr": "PA", "state": "Pennsylvania", "electors": 25, "dem": 2194944, "rep": 2300087 },
    { "abbr": "RI", "state": "Rhode Island", "electors": 4, "dem": 225123, "rep": 177761 },
    { "abbr": "SC", "state": "South Carolina", "electors": 8, "dem": 370554, "rep": 606443 },
    { "abbr": "SD", "state": "South Dakota", "electors": 3, "dem": 145560, "rep": 165415 },
    { "abbr": "TN", "state": "Tennessee", "electors": 11, "dem": 679794, "rep": 947233 },
    { "abbr": "TX", "state": "Texas", "electors": 29, "dem": 2352748, "rep": 3036829 },
    { "abbr": "UT", "state": "Utah", "electors": 5, "dem": 207343, "rep": 428442 },
    { "abbr": "VT", "state": "Vermont", "electors": 3, "dem": 115775, "rep": 124331 },
    { "abbr": "VA", "state": "Virginia", "electors": 12, "dem": 859799, "rep": 1309162 },
    { "abbr": "WA", "state": "Washington", "electors": 10, "dem": 933516, "rep": 903835 },
    { "abbr": "WV", "state": "West Virginia", "electors": 6, "dem": 341016, "rep": 310065 },
    { "abbr": "WI", "state": "Wisconsin", "electors": 11, "dem": 1126794, "rep": 1047499 },
    { "abbr": "WY", "state": "Wyoming", "electors": 3, "dem": 67113, "rep": 106867 }
    ],
    "pres1984": [{ "abbr": "AL", "state": "Alabama", "electors": 9, "dem": 551899, "rep": 872849 },
    { "abbr": "AK", "state": "Alaska", "electors": 3, "dem": 62007, "rep": 138377 },
    { "abbr": "AZ", "state": "Arizona", "electors": 7, "dem": 333854, "rep": 681416 },
    { "abbr": "AR", "state": "Arkansas", "electors": 6, "dem": 338646, "rep": 534774 },
    { "abbr": "CA", "state": "California", "electors": 47, "dem": 3922519, "rep": 5467009 },
    { "abbr": "CO", "state": "Colorado", "electors": 8, "dem": 454974, "rep": 821818 },
    { "abbr": "CT", "state": "Connecticut", "electors": 8, "dem": 569597, "rep": 890877 },
    { "abbr": "DE", "state": "Delaware", "electors": 3, "dem": 101656, "rep": 152190 },
    { "abbr": "DC", "state": "D.C.", "electors": 3, "dem": 180408, "rep": 29009 },
    { "abbr": "FL", "state": "Florida", "electors": 21, "dem": 1448816, "rep": 2730350 },
    { "abbr": "GA", "state": "Georgia", "electors": 12, "dem": 706628, "rep": 1068722 },
    { "abbr": "HI", "state": "Hawaii", "electors": 4, "dem": 147154, "rep": 185050 },
    { "abbr": "ID", "state": "Idaho", "electors": 4, "dem": 108510, "rep": 297523 },
    { "abbr": "IL", "state": "Illinois", "electors": 24, "dem": 2086499, "rep": 2707103 },
    { "abbr": "IN", "state": "Indiana", "electors": 12, "dem": 841481, "rep": 1377230 },
    { "abbr": "IA", "state": "Iowa", "electors": 8, "dem": 605620, "rep": 703088 },
    { "abbr": "KS", "state": "Kansas", "electors": 7, "dem": 333149, "rep": 677296 },
    { "abbr": "KY", "state": "Kentucky", "electors": 9, "dem": 539589, "rep": 822782 },
    { "abbr": "LA", "state": "Louisiana", "electors": 10, "dem": 651586, "rep": 1037299 },
    { "abbr": "ME", "state": "Maine", "electors": 4, "dem": 214515, "rep": 336500 },
    { "abbr": "MD", "state": "Maryland", "electors": 10, "dem": 787935, "rep": 879918 },
    { "abbr": "MA", "state": "Massachusetts", "electors": 13, "dem": 1239606, "rep": 1310936 },
    { "abbr": "MI-", "state": "Michigan", "electors": 20, "dem": 1529638, "rep": 2251571 },
    { "abbr": "SP-", "state": "Michigan", "electors": 20, "dem": 1529638, "rep": 2251571 },
    { "abbr": "MN", "state": "Minnesota", "electors": 10, "dem": 1036364, "rep": 1032603 },
    { "abbr": "MS", "state": "Mississippi", "electors": 7, "dem": 352192, "rep": 581477 },
    { "abbr": "MO", "state": "Missouri", "electors": 11, "dem": 848583, "rep": 1274188 },
    { "abbr": "MT", "state": "Montana", "electors": 4, "dem": 146742, "rep": 232450 },
    { "abbr": "NE", "state": "Nebraska", "electors": 5, "dem": 187866, "rep": 460054 },
    { "abbr": "NV", "state": "Nevada", "electors": 4, "dem": 91655, "rep": 188770 },
    { "abbr": "NH", "state": "New Hampshire", "electors": 4, "dem": 120395, "rep": 267051 },
    { "abbr": "NJ", "state": "New Jersey", "electors": 16, "dem": 1261323, "rep": 1933630 },
    { "abbr": "NM", "state": "New Mexico", "electors": 5, "dem": 201769, "rep": 307101 },
    { "abbr": "NY", "state": "New York", "electors": 36, "dem": 3119609, "rep": 3664763 },
    { "abbr": "NC", "state": "North Carolina", "electors": 13, "dem": 824287, "rep": 1346481 },
    { "abbr": "ND", "state": "North Dakota", "electors": 3, "dem": 104429, "rep": 200336 },
    { "abbr": "OH", "state": "Ohio", "electors": 23, "dem": 1825440, "rep": 2678560 },
    { "abbr": "OK", "state": "Oklahoma", "electors": 8, "dem": 385080, "rep": 861530 },
    { "abbr": "OR", "state": "Oregon", "electors": 7, "dem": 536479, "rep": 685700 },
    { "abbr": "PA", "state": "Pennsylvania", "electors": 25, "dem": 2228131, "rep": 2584323 },
    { "abbr": "RI", "state": "Rhode Island", "electors": 4, "dem": 197106, "rep": 212080 },
    { "abbr": "SC", "state": "South Carolina", "electors": 8, "dem": 344470, "rep": 615539 },
    { "abbr": "SD", "state": "South Dakota", "electors": 3, "dem": 116113, "rep": 200267 },
    { "abbr": "TN", "state": "Tennessee", "electors": 11, "dem": 711714, "rep": 990212 },
    { "abbr": "TX", "state": "Texas", "electors": 29, "dem": 1949276, "rep": 3433428 },
    { "abbr": "UT", "state": "Utah", "electors": 5, "dem": 155369, "rep": 469105 },
    { "abbr": "VT", "state": "Vermont", "electors": 3, "dem": 95730, "rep": 135865 },
    { "abbr": "VA", "state": "Virginia", "electors": 12, "dem": 796250, "rep": 1337078 },
    { "abbr": "WA", "state": "Washington", "electors": 10, "dem": 807352, "rep": 1051670 },
    { "abbr": "WV", "state": "West Virginia", "electors": 6, "dem": 328125, "rep": 405483 },
    { "abbr": "WI", "state": "Wisconsin", "electors": 11, "dem": 995847, "rep": 1198800 },
    { "abbr": "WY", "state": "Wyoming", "electors": 3, "dem": 53370, "rep": 133241 }
    ],
    "pres1980":[
{"abbr":"AL","state":"Alabama","electors":9,"dem":636730,"rep":654192},
{"abbr":"AK","state":"Alaska","electors":3,"dem":41842,"rep":86112},
{"abbr":"AZ","state":"Arizona","electors":6,"dem":246843,"rep":529688},
{"abbr":"AR","state":"Arkansas","electors":6,"dem":398041,"rep":403164},
{"abbr":"CA","state":"California","electors":45,"dem":3083661,"rep":4524858},
{"abbr":"CO","state":"Colorado","electors":7,"dem":367973,"rep":652264},
{"abbr":"CT","state":"Connecticut","electors":8,"dem":541732,"rep":677210},
{"abbr":"DE","state":"Delaware","electors":3,"dem":105754,"rep":111252},
{"abbr":"DC","state":"D. C.","electors":3,"dem":130231,"rep":23313},
{"abbr":"FL","state":"Florida","electors":17,"dem":1419475,"rep":2046951},
{"abbr":"GA","state":"Georgia","electors":12,"dem":890733,"rep":654168},
{"abbr":"HI","state":"Hawaii","electors":4,"dem":135879,"rep":130112},
{"abbr":"ID","state":"Idaho","electors":4,"dem":110192,"rep":290699},
{"abbr":"IL","state":"Illinois","electors":26,"dem":1981413,"rep":2358049},
{"abbr":"IN","state":"Indiana","electors":13,"dem":844197,"rep":1255656},
{"abbr":"IA","state":"Iowa","electors":8,"dem":508672,"rep":676026},
{"abbr":"KS","state":"Kansas","electors":7,"dem":326150,"rep":566812},
{"abbr":"KY","state":"Kentucky","electors":9,"dem":616417,"rep":635274},
{"abbr":"LA","state":"Louisiana","electors":10,"dem":708453,"rep":792853},
{"abbr":"ME","state":"Maine","electors":4,"dem":220974,"rep":238522},
{"abbr":"MD","state":"Maryland","electors":10,"dem":726161,"rep":680606},
{"abbr":"MA","state":"Massachusetts","electors":14,"dem":1053802,"rep":1057631},
{"abbr":"MI-","state":"Michigan","electors":21,"dem":1661532,"rep":1915225},
{"abbr":"SP-","state":"Michigan","electors":21,"dem":1661532,"rep":1915225},
{"abbr":"MN","state":"Minnesota","electors":10,"dem":954174,"rep":873241},
{"abbr":"MS","state":"Mississippi","electors":7,"dem":429281,"rep":441089},
{"abbr":"MO","state":"Missouri","electors":12,"dem":931182,"rep":1074181},
{"abbr":"MT","state":"Montana","electors":4,"dem":118032,"rep":206814},
{"abbr":"NE","state":"Nebraska","electors":5,"dem":166851,"rep":419937},
{"abbr":"NV","state":"Nevada","electors":3,"dem":66666,"rep":155017},
{"abbr":"NH","state":"New Hampshire","electors":4,"dem":108864,"rep":221705},
{"abbr":"NJ","state":"New Jersey","electors":17,"dem":1147364,"rep":1546557},
{"abbr":"NM","state":"New Mexico","electors":4,"dem":167826,"rep":250779},
{"abbr":"NY","state":"New York","electors":41,"dem":2728372,"rep":2893831},
{"abbr":"NC","state":"North Carolina","electors":13,"dem":875635,"rep":915018},
{"abbr":"ND","state":"North Dakota","electors":3,"dem":79189,"rep":193695},
{"abbr":"OH","state":"Ohio","electors":25,"dem":1752414,"rep":2206545},
{"abbr":"OK","state":"Oklahoma","electors":8,"dem":402026,"rep":695570},
{"abbr":"OR","state":"Oregon","electors":6,"dem":456890,"rep":571044},
{"abbr":"PA","state":"Pennsylvania","electors":27,"dem":1937540,"rep":2261872},
{"abbr":"RI","state":"Rhode Island","electors":4,"dem":198342,"rep":154793},
{"abbr":"SC","state":"South Carolina","electors":8,"dem":427560,"rep":441207},
{"abbr":"SD","state":"South Dakota","electors":4,"dem":103855,"rep":198343},
{"abbr":"TN","state":"Tennessee","electors":10,"dem":783051,"rep":787761},
{"abbr":"TX","state":"Texas","electors":26,"dem":1881147,"rep":2510705},
{"abbr":"UT","state":"Utah","electors":4,"dem":124266,"rep":439687},
{"abbr":"VT","state":"Vermont","electors":3,"dem":81891,"rep":94598},
{"abbr":"VA","state":"Virginia","electors":12,"dem":752174,"rep":989609},
{"abbr":"WA","state":"Washington","electors":9,"dem":650193,"rep":865244},
{"abbr":"WV","state":"West Virginia","electors":6,"dem":367462,"rep":334206},
{"abbr":"WI","state":"Wisconsin","electors":11,"dem":981584,"rep":1088845},
{"abbr":"WY","state":"Wyoming","electors":3,"dem":49427,"rep":110700}
],
"pres1976":[
{"abbr":"AL","state":"Alabama","electors":9,"dem":659170,"rep":504070},
{"abbr":"AK","state":"Alaska","electors":3,"dem":44058,"rep":71555},
{"abbr":"AZ","state":"Arizona","electors":6,"dem":295602,"rep":418642},
{"abbr":"AR","state":"Arkansas","electors":6,"dem":499614,"rep":268753},
{"abbr":"CA","state":"California","electors":45,"dem":3742284,"rep":3882244},
{"abbr":"CO","state":"Colorado","electors":7,"dem":460353,"rep":584367},
{"abbr":"CT","state":"Connecticut","electors":8,"dem":647895,"rep":719261},
{"abbr":"DE","state":"Delaware","electors":3,"dem":122596,"rep":109831},
{"abbr":"DC","state":"D. C.","electors":3,"dem":137818,"rep":27873},
{"abbr":"FL","state":"Florida","electors":17,"dem":1636000,"rep":1469531},
{"abbr":"GA","state":"Georgia","electors":12,"dem":979409,"rep":483743},
{"abbr":"HI","state":"Hawaii","electors":4,"dem":147375,"rep":140003},
{"abbr":"ID","state":"Idaho","electors":4,"dem":126549,"rep":204151},
{"abbr":"IL","state":"Illinois","electors":26,"dem":2271295,"rep":2364269},
{"abbr":"IN","state":"Indiana","electors":13,"dem":1014714,"rep":1183958},
{"abbr":"IA","state":"Iowa","electors":8,"dem":619931,"rep":632863},
{"abbr":"KS","state":"Kansas","electors":7,"dem":430421,"rep":502752},
{"abbr":"KY","state":"Kentucky","electors":9,"dem":615717,"rep":531852},
{"abbr":"LA","state":"Louisiana","electors":10,"dem":661365,"rep":587446},
{"abbr":"ME","state":"Maine","electors":4,"dem":232279,"rep":236320},
{"abbr":"MD","state":"Maryland","electors":10,"dem":759612,"rep":672661},
{"abbr":"MA","state":"Massachusetts","electors":14,"dem":1429475,"rep":1030276},
{"abbr":"MI-","state":"Michigan","electors":21,"dem":1696714,"rep":1893742},
{"abbr":"SP-","state":"Michigan","electors":21,"dem":1696714,"rep":1893742},
{"abbr":"MN","state":"Minnesota","electors":10,"dem":1070440,"rep":819395},
{"abbr":"MS","state":"Mississippi","electors":7,"dem":381309,"rep":366846},
{"abbr":"MO","state":"Missouri","electors":12,"dem":998387,"rep":927443},
{"abbr":"MT","state":"Montana","electors":4,"dem":149259,"rep":173703},
{"abbr":"NE","state":"Nebraska","electors":5,"dem":233692,"rep":359705},
{"abbr":"NV","state":"Nevada","electors":3,"dem":92479,"rep":101273},
{"abbr":"NH","state":"New Hampshire","electors":4,"dem":147635,"rep":185935},
{"abbr":"NJ","state":"New Jersey","electors":17,"dem":1444653,"rep":1509688},
{"abbr":"NM","state":"New Mexico","electors":4,"dem":201148,"rep":211419},
{"abbr":"NY","state":"New York","electors":41,"dem":3389558,"rep":3100791},
{"abbr":"NC","state":"North Carolina","electors":13,"dem":927365,"rep":741960},
{"abbr":"ND","state":"North Dakota","electors":3,"dem":136078,"rep":153470},
{"abbr":"OH","state":"Ohio","electors":25,"dem":2011621,"rep":2000505},
{"abbr":"OK","state":"Oklahoma","electors":8,"dem":532442,"rep":545708},
{"abbr":"OR","state":"Oregon","electors":6,"dem":490407,"rep":492120},
{"abbr":"PA","state":"Pennsylvania","electors":27,"dem":2328677,"rep":2205604},
{"abbr":"RI","state":"Rhode Island","electors":4,"dem":227636,"rep":181249},
{"abbr":"SC","state":"South Carolina","electors":8,"dem":450825,"rep":346140},
{"abbr":"SD","state":"South Dakota","electors":4,"dem":147068,"rep":151505},
{"abbr":"TN","state":"Tennessee","electors":10,"dem":825879,"rep":633969},
{"abbr":"TX","state":"Texas","electors":26,"dem":2082319,"rep":1953300},
{"abbr":"UT","state":"Utah","electors":4,"dem":182110,"rep":337908},
{"abbr":"VT","state":"Vermont","electors":3,"dem":81044,"rep":102085},
{"abbr":"VA","state":"Virginia","electors":12,"dem":813896,"rep":836554},
{"abbr":"WA","state":"Washington","electors":9,"dem":717323,"rep":777732},
{"abbr":"WV","state":"West Virginia","electors":6,"dem":435914,"rep":314760},
{"abbr":"WI","state":"Wisconsin","electors":11,"dem":1040232,"rep":1004987},
{"abbr":"WY","state":"Wyoming","electors":3,"dem":62239,"rep":92717}
],
"pres1972":[
{"abbr":"AL","state":"Alabama","electors":9,"dem":256923,"rep":728701},
{"abbr":"AK","state":"Alaska","electors":3,"dem":32967,"rep":55349},
{"abbr":"AZ","state":"Arizona","electors":6,"dem":198540,"rep":402812},
{"abbr":"AR","state":"Arkansas","electors":6,"dem":198899,"rep":445751},
{"abbr":"CA","state":"California","electors":45,"dem":3475847,"rep":4602096},
{"abbr":"CO","state":"Colorado","electors":7,"dem":329980,"rep":597189},
{"abbr":"CT","state":"Connecticut","electors":8,"dem":555498,"rep":810763},
{"abbr":"DE","state":"Delaware","electors":3,"dem":92283,"rep":140357},
{"abbr":"DC","state":"D. C.","electors":3,"dem":127627,"rep":35226},
{"abbr":"FL","state":"Florida","electors":17,"dem":718117,"rep":1857759},
{"abbr":"GA","state":"Georgia","electors":12,"dem":289529,"rep":881496},
{"abbr":"HI","state":"Hawaii","electors":4,"dem":101409,"rep":168865},
{"abbr":"ID","state":"Idaho","electors":4,"dem":80826,"rep":199384},
{"abbr":"IL","state":"Illinois","electors":26,"dem":1913472,"rep":2788179},
{"abbr":"IN","state":"Indiana","electors":13,"dem":708568,"rep":1405154},
{"abbr":"IA","state":"Iowa","electors":8,"dem":496206,"rep":706207},
{"abbr":"KS","state":"Kansas","electors":7,"dem":270287,"rep":619812},
{"abbr":"KY","state":"Kentucky","electors":9,"dem":371159,"rep":676446},
{"abbr":"LA","state":"Louisiana","electors":10,"dem":298142,"rep":686852},
{"abbr":"ME","state":"Maine","electors":4,"dem":160584,"rep":256458},
{"abbr":"MD","state":"Maryland","electors":10,"dem":505781,"rep":829305},
{"abbr":"MA","state":"Massachusetts","electors":14,"dem":1332540,"rep":1112078},
{"abbr":"MI-","state":"Michigan","electors":21,"dem":1459435,"rep":1961721},
{"abbr":"SP-","state":"Michigan","electors":21,"dem":1459435,"rep":1961721},
{"abbr":"MN","state":"Minnesota","electors":10,"dem":802346,"rep":898269},
{"abbr":"MS","state":"Mississippi","electors":7,"dem":126782,"rep":505125},
{"abbr":"MO","state":"Missouri","electors":12,"dem":698531,"rep":1154058},
{"abbr":"MT","state":"Montana","electors":4,"dem":120197,"rep":183976},
{"abbr":"NE","state":"Nebraska","electors":5,"dem":169991,"rep":406298},
{"abbr":"NV","state":"Nevada","electors":3,"dem":66016,"rep":115750},
{"abbr":"NH","state":"New Hampshire","electors":4,"dem":116435,"rep":213724},
{"abbr":"NJ","state":"New Jersey","electors":17,"dem":1102211,"rep":1845502},
{"abbr":"NM","state":"New Mexico","electors":4,"dem":141084,"rep":235606},
{"abbr":"NY","state":"New York","electors":41,"dem":2951084,"rep":4192778},
{"abbr":"NC","state":"North Carolina","electors":13,"dem":438705,"rep":1054889},
{"abbr":"ND","state":"North Dakota","electors":3,"dem":100384,"rep":174109},
{"abbr":"OH","state":"Ohio","electors":25,"dem":1558889,"rep":2441827},
{"abbr":"OK","state":"Oklahoma","electors":8,"dem":247147,"rep":759025},
{"abbr":"OR","state":"Oregon","electors":6,"dem":392760,"rep":486686},
{"abbr":"PA","state":"Pennsylvania","electors":27,"dem":1796951,"rep":2714521},
{"abbr":"RI","state":"Rhode Island","electors":4,"dem":194645,"rep":220383},
{"abbr":"SC","state":"South Carolina","electors":8,"dem":189270,"rep":478427},
{"abbr":"SD","state":"South Dakota","electors":4,"dem":139945,"rep":166476},
{"abbr":"TN","state":"Tennessee","electors":10,"dem":357293,"rep":813147},
{"abbr":"TX","state":"Texas","electors":26,"dem":1154291,"rep":2298896},
{"abbr":"UT","state":"Utah","electors":4,"dem":126284,"rep":323643},
{"abbr":"VT","state":"Vermont","electors":3,"dem":68174,"rep":117149},
{"abbr":"VA","state":"Virginia","electors":11,"dem":438887,"rep":988493},
{"abbr":"WA","state":"Washington","electors":9,"dem":568334,"rep":837135},
{"abbr":"WV","state":"West Virginia","electors":6,"dem":277435,"rep":484964},
{"abbr":"WI","state":"Wisconsin","electors":11,"dem":810174,"rep":989430},
{"abbr":"WY","state":"Wyoming","electors":3,"dem":44358,"rep":100464}
],
"pres1968":[
{"abbr":"AL","state":"Alabama","electors":10,"dem":196579,"rep":146923,"oth":691425},
{"abbr":"AK","state":"Alaska","electors":3,"dem":35411,"rep":37600,"oth":10024},
{"abbr":"AZ","state":"Arizona","electors":5,"dem":170514,"rep":266721,"oth":46573},
{"abbr":"AR","state":"Arkansas","electors":6,"dem":184901,"rep":189062,"oth":235627},
{"abbr":"CA","state":"California","electors":40,"dem":3244318,"rep":3467664,"oth":487270},
{"abbr":"CO","state":"Colorado","electors":6,"dem":335174,"rep":409345,"oth":60813},
{"abbr":"CT","state":"Connecticut","electors":8,"dem":621561,"rep":556721,"oth":76650},
{"abbr":"DE","state":"Delaware","electors":3,"dem":89194,"rep":96714,"oth":28459},
{"abbr":"DC","state":"D. C.","electors":3,"dem":139566,"rep":31012,"oth":0},
{"abbr":"FL","state":"Florida","electors":14,"dem":676794,"rep":886804,"oth":624207},
{"abbr":"GA","state":"Georgia","electors":12,"dem":334440,"rep":380111,"oth":535550},
{"abbr":"HI","state":"Hawaii","electors":4,"dem":141324,"rep":91425,"oth":3469},
{"abbr":"ID","state":"Idaho","electors":4,"dem":89273,"rep":165369,"oth":36541},
{"abbr":"IL","state":"Illinois","electors":26,"dem":2039814,"rep":2174774,"oth":390958},
{"abbr":"IN","state":"Indiana","electors":13,"dem":806659,"rep":1067885,"oth":243108},
{"abbr":"IA","state":"Iowa","electors":9,"dem":476699,"rep":619106,"oth":66422},
{"abbr":"KS","state":"Kansas","electors":7,"dem":302996,"rep":478674,"oth":88921},
{"abbr":"KY","state":"Kentucky","electors":9,"dem":397541,"rep":462411,"oth":193098},
{"abbr":"LA","state":"Louisiana","electors":10,"dem":309615,"rep":257535,"oth":530300},
{"abbr":"ME","state":"Maine","electors":4,"dem":217312,"rep":169254,"oth":6370},
{"abbr":"MD","state":"Maryland","electors":10,"dem":538310,"rep":517995,"oth":178734},
{"abbr":"MA","state":"Massachusetts","electors":14,"dem":1469218,"rep":766844,"oth":87088},
{"abbr":"MI-","state":"Michigan","electors":21,"dem":1593082,"rep":1370665,"oth":331968},
{"abbr":"SP-","state":"Michigan","electors":21,"dem":1593082,"rep":1370665,"oth":331968},
{"abbr":"MN","state":"Minnesota","electors":7,"dem":857738,"rep":658643,"oth":68931},
{"abbr":"MS","state":"Mississippi","electors":12,"dem":150644,"rep":88516,"oth":415349},
{"abbr":"MO","state":"Missouri","electors":4,"dem":791444,"rep":811932,"oth":206126},
{"abbr":"MT","state":"Montana","electors":5,"dem":114117,"rep":138835,"oth":20015},
{"abbr":"NE","state":"Nebraska","electors":3,"dem":170784,"rep":321163,"oth":44904},
{"abbr":"NV","state":"Nevada","electors":4,"dem":60598,"rep":73188,"oth":20432},
{"abbr":"NH","state":"New Hampshire","electors":17,"dem":130589,"rep":154903,"oth":11173},
{"abbr":"NJ","state":"New Jersey","electors":4,"dem":1264206,"rep":1325467,"oth":262187},
{"abbr":"NM","state":"New Mexico","electors":43,"dem":130081,"rep":169692,"oth":25737},
{"abbr":"NY","state":"New York","electors":13,"dem":3378470,"rep":3007932,"oth":358864},
{"abbr":"NC","state":"North Carolina","electors":4,"dem":464113,"rep":627192,"oth":496188},
{"abbr":"ND","state":"North Dakota","electors":26,"dem":94769,"rep":138669,"oth":14244},
{"abbr":"OH","state":"Ohio","electors":8,"dem":1700586,"rep":1791014,"oth":467495},
{"abbr":"OK","state":"Oklahoma","electors":6,"dem":301658,"rep":449697,"oth":191731},
{"abbr":"OR","state":"Oregon","electors":29,"dem":358866,"rep":408433,"oth":49683},
{"abbr":"PA","state":"Pennsylvania","electors":4,"dem":2259405,"rep":2090017,"oth":378582},
{"abbr":"RI","state":"Rhode Island","electors":8,"dem":246518,"rep":122359,"oth":15678},
{"abbr":"SC","state":"South Carolina","electors":4,"dem":197486,"rep":254062,"oth":215430},
{"abbr":"SD","state":"South Dakota","electors":11,"dem":118023,"rep":149841,"oth":13400},
{"abbr":"TN","state":"Tennessee","electors":25,"dem":351233,"rep":472592,"oth":424792},
{"abbr":"TX","state":"Texas","electors":4,"dem":1266804,"rep":1227844,"oth":584269},
{"abbr":"UT","state":"Utah","electors":3,"dem":156665,"rep":238728,"oth":26906},
{"abbr":"VT","state":"Vermont","electors":12,"dem":70255,"rep":85142,"oth":5104},
{"abbr":"VA","state":"Virginia","electors":9,"dem":442387,"rep":590319,"oth":321833},
{"abbr":"WA","state":"Washington","electors":7,"dem":616037,"rep":588510,"oth":96990},
{"abbr":"WV","state":"West Virginia","electors":12,"dem":374091,"rep":307555,"oth":72560},
{"abbr":"WI","state":"Wisconsin","electors":3,"dem":748804,"rep":809997,"oth":127835},
{"abbr":"WY","state":"Wyoming","electors":301,"dem":45173,"rep":70927,"oth":11105}
],
"pres1964":[
{"abbr":"AL","state":"Alabama","electors":10,"dem":0,"rep":479085,"oth":" 210,732"},
{"abbr":"AK","state":"Alaska","electors":3,"dem":44329,"rep":22930,"oth":" 0"},
{"abbr":"AZ","state":"Arizona","electors":5,"dem":237753,"rep":242535,"oth":" 482"},
{"abbr":"AR","state":"Arkansas","electors":6,"dem":314197,"rep":243264,"oth":" 2,965"},
{"abbr":"CA","state":"California","electors":40,"dem":4171877,"rep":2879108,"oth":" 6,601"},
{"abbr":"CO","state":"Colorado","electors":6,"dem":476024,"rep":296767,"oth":" 4,195"},
{"abbr":"CT","state":"Connecticut","electors":8,"dem":826269,"rep":390996,"oth":" 1,313"},
{"abbr":"DE","state":"Delaware","electors":3,"dem":122704,"rep":78078,"oth":" 538"},
{"abbr":"DC","state":"D. C.","electors":3,"dem":169796,"rep":28801,"oth":" 0"},
{"abbr":"FL","state":"Florida","electors":14,"dem":948540,"rep":905941,"oth":" 0"},
{"abbr":"GA","state":"Georgia","electors":12,"dem":522557,"rep":616584,"oth":" 195"},
{"abbr":"HI","state":"Hawaii","electors":4,"dem":163249,"rep":44022,"oth":" 0"},
{"abbr":"ID","state":"Idaho","electors":4,"dem":148920,"rep":143557,"oth":" 0"},
{"abbr":"IL","state":"Illinois","electors":26,"dem":2796833,"rep":1905946,"oth":" 62"},
{"abbr":"IN","state":"Indiana","electors":13,"dem":1170848,"rep":911118,"oth":" 9,640"},
{"abbr":"IA","state":"Iowa","electors":9,"dem":733030,"rep":449148,"oth":" 2,361"},
{"abbr":"KS","state":"Kansas","electors":7,"dem":464028,"rep":386579,"oth":" 7,294"},
{"abbr":"KY","state":"Kentucky","electors":9,"dem":669659,"rep":372977,"oth":" 3,469"},
{"abbr":"LA","state":"Louisiana","electors":10,"dem":387068,"rep":509225,"oth":" 0"},
{"abbr":"ME","state":"Maine","electors":4,"dem":262264,"rep":118701,"oth":" 0"},
{"abbr":"MD","state":"Maryland","electors":10,"dem":730912,"rep":385495,"oth":" 50"},
{"abbr":"MA","state":"Massachusetts","electors":14,"dem":1786422,"rep":549727,"oth":" 8,649"},
{"abbr":"MI-","state":"Michigan","electors":21,"dem":2136615,"rep":1060152,"oth":" 6,335"},
{"abbr":"SP-","state":"Michigan","electors":21,"dem":2136615,"rep":1060152,"oth":" 6,335"},
{"abbr":"MN","state":"Minnesota","electors":10,"dem":991117,"rep":559624,"oth":" 3,721"},
{"abbr":"MS","state":"Mississippi","electors":7,"dem":52618,"rep":356528,"oth":" 0"},
{"abbr":"MO","state":"Missouri","electors":12,"dem":1164344,"rep":653535,"oth":" 0"},
{"abbr":"MT","state":"Montana","electors":4,"dem":164246,"rep":113032,"oth":" 1,350"},
{"abbr":"NE","state":"Nebraska","electors":5,"dem":307307,"rep":276847,"oth":" 0"},
{"abbr":"NV","state":"Nevada","electors":3,"dem":79339,"rep":56094,"oth":" 0"},
{"abbr":"NH","state":"New Hampshire","electors":4,"dem":182065,"rep":104029,"oth":" 0"},
{"abbr":"NJ","state":"New Jersey","electors":17,"dem":1867671,"rep":963843,"oth":" 15,256"},
{"abbr":"NM","state":"New Mexico","electors":4,"dem":194017,"rep":131838,"oth":" 1,760"},
{"abbr":"NY","state":"New York","electors":43,"dem":4913156,"rep":2243559,"oth":" 9,300"},
{"abbr":"NC","state":"North Carolina","electors":13,"dem":800139,"rep":624844,"oth":" 0"},
{"abbr":"ND","state":"North Dakota","electors":4,"dem":149784,"rep":108207,"oth":" 398"},
{"abbr":"OH","state":"Ohio","electors":26,"dem":2498331,"rep":1470865,"oth":" 0"},
{"abbr":"OK","state":"Oklahoma","electors":8,"dem":519834,"rep":412665,"oth":" 0"},
{"abbr":"OR","state":"Oregon","electors":6,"dem":501017,"rep":282779,"oth":" 2,509"},
{"abbr":"PA","state":"Pennsylvania","electors":29,"dem":3130954,"rep":1673657,"oth":" 18,079"},
{"abbr":"RI","state":"Rhode Island","electors":4,"dem":315463,"rep":74615,"oth":" 13"},
{"abbr":"SC","state":"South Carolina","electors":8,"dem":215700,"rep":309048,"oth":" 8"},
{"abbr":"SD","state":"South Dakota","electors":4,"dem":163010,"rep":130108,"oth":" 0"},
{"abbr":"TN","state":"Tennessee","electors":11,"dem":634947,"rep":508965,"oth":" 34"},
{"abbr":"TX","state":"Texas","electors":25,"dem":1663185,"rep":958566,"oth":" 5,060"},
{"abbr":"UT","state":"Utah","electors":4,"dem":219628,"rep":180682,"oth":" 0"},
{"abbr":"VT","state":"Vermont","electors":3,"dem":108127,"rep":54942,"oth":" 20"},
{"abbr":"VA","state":"Virginia","electors":12,"dem":558038,"rep":481334,"oth":" 2,895"},
{"abbr":"WA","state":"Washington","electors":9,"dem":779881,"rep":470366,"oth":" 8,309"},
{"abbr":"WV","state":"West Virginia","electors":7,"dem":538087,"rep":253953,"oth":" 0"},
{"abbr":"WI","state":"Wisconsin","electors":12,"dem":1050424,"rep":638495,"oth":" 2,896"},
{"abbr":"WY","state":"Wyoming","electors":3,"dem":80718,"rep":61998,"oth":" 0"}
],
"pres1960":[
{"abbr":"AL","state":"Alabama","electors":11,"dem":318303,"rep":237981},
{"abbr":"AK","state":"Alaska","electors":3,"dem":29809,"rep":30953},
{"abbr":"AZ","state":"Arizona","electors":4,"dem":176781,"rep":221241},
{"abbr":"AR","state":"Arkansas","electors":8,"dem":215049,"rep":184508},
{"abbr":"CA","state":"California","electors":32,"dem":3224099,"rep":3259722},
{"abbr":"CO","state":"Colorado","electors":6,"dem":330629,"rep":402242},
{"abbr":"CT","state":"Connecticut","electors":8,"dem":657055,"rep":565813},
{"abbr":"DE","state":"Delaware","electors":3,"dem":99590,"rep":96373},
{"abbr":"DC","state":"District of Columbia","electors":0,"dem":0,"rep":0},
{"abbr":"FL","state":"Florida","electors":10,"dem":748700,"rep":795476},
{"abbr":"GA","state":"Georgia","electors":12,"dem":458638,"rep":274472},
{"abbr":"HI","state":"Hawaii","electors":3,"dem":92410,"rep":92295},
{"abbr":"ID","state":"Idaho","electors":4,"dem":138853,"rep":161597},
{"abbr":"IL","state":"Illinois","electors":27,"dem":2377846,"rep":2368988},
{"abbr":"IN","state":"Indiana","electors":13,"dem":952358,"rep":1175120},
{"abbr":"IA","state":"Iowa","electors":10,"dem":550565,"rep":722381},
{"abbr":"KS","state":"Kansas","electors":8,"dem":363213,"rep":561474},
{"abbr":"KY","state":"Kentucky","electors":10,"dem":521855,"rep":602607},
{"abbr":"LA","state":"Louisiana","electors":10,"dem":407339,"rep":230980},
{"abbr":"ME","state":"Maine","electors":5,"dem":181159,"rep":240608},
{"abbr":"MD","state":"Maryland","electors":9,"dem":565808,"rep":489538},
{"abbr":"MA","state":"Massachusetts","electors":16,"dem":1487174,"rep":976750},
{"abbr":"MI-","state":"Michigan","electors":20,"dem":1687269,"rep":1620428},
{"abbr":"SP-","state":"Michigan","electors":20,"dem":1687269,"rep":1620428},
{"abbr":"MN","state":"Minnesota","electors":11,"dem":779933,"rep":757915},
{"abbr":"MS","state":"Mississippi","electors":8,"dem":108362,"rep":73561},
{"abbr":"MO","state":"Missouri","electors":13,"dem":972201,"rep":962221},
{"abbr":"MT","state":"Montana","electors":4,"dem":134891,"rep":141841},
{"abbr":"NE","state":"Nebraska","electors":6,"dem":232542,"rep":380553},
{"abbr":"NV","state":"Nevada","electors":3,"dem":54880,"rep":52387},
{"abbr":"NH","state":"New Hampshire","electors":4,"dem":137772,"rep":157989},
{"abbr":"NJ","state":"New Jersey","electors":16,"dem":1385415,"rep":1363324},
{"abbr":"NM","state":"New Mexico","electors":4,"dem":156027,"rep":153733},
{"abbr":"NY","state":"New York","electors":45,"dem":3830085,"rep":3446419},
{"abbr":"NC","state":"North Carolina","electors":14,"dem":713136,"rep":655420},
{"abbr":"ND","state":"North Dakota","electors":4,"dem":123963,"rep":154310},
{"abbr":"OH","state":"Ohio","electors":25,"dem":1944248,"rep":2217611},
{"abbr":"OK","state":"Oklahoma","electors":8,"dem":370111,"rep":533039},
{"abbr":"OR","state":"Oregon","electors":6,"dem":367402,"rep":408060},
{"abbr":"PA","state":"Pennsylvania","electors":32,"dem":2556282,"rep":2439956},
{"abbr":"RI","state":"Rhode Island","electors":4,"dem":258032,"rep":147502},
{"abbr":"SC","state":"South Carolina","electors":8,"dem":198129,"rep":188558},
{"abbr":"SD","state":"South Dakota","electors":4,"dem":128070,"rep":178417},
{"abbr":"TN","state":"Tennessee","electors":11,"dem":481453,"rep":556577},
{"abbr":"TX","state":"Texas","electors":24,"dem":1167567,"rep":1121310},
{"abbr":"UT","state":"Utah","electors":4,"dem":169248,"rep":205361},
{"abbr":"VT","state":"Vermont","electors":3,"dem":69186,"rep":98131},
{"abbr":"VA","state":"Virginia","electors":12,"dem":362327,"rep":404521},
{"abbr":"WA","state":"Washington","electors":9,"dem":599298,"rep":629273},
{"abbr":"WV","state":"West Virginia","electors":8,"dem":441786,"rep":395995},
{"abbr":"WI","state":"Wisconsin","electors":12,"dem":830805,"rep":895175},
{"abbr":"WY","state":"Wyoming","electors":3,"dem":63331,"rep":77451}
],
"pres1956":[
{"abbr":"AL","state":"Alabama","electors":10,"dem":280844,"rep":195694},
{"abbr":"AZ","state":"Arizona","electors":4,"dem":112880,"rep":176990},
{"abbr":"AR","state":"Arkansas","electors":8,"dem":213277,"rep":186287},
{"abbr":"CA","state":"California","electors":32,"dem":2420135,"rep":3027668},
{"abbr":"CO","state":"Colorado","electors":6,"dem":263997,"rep":394479},
{"abbr":"CT","state":"Connecticut","electors":8,"dem":405079,"rep":711837},
{"abbr":"DE","state":"Delaware","electors":3,"dem":79421,"rep":98057},
{"abbr":"FL","state":"Florida","electors":10,"dem":480371,"rep":643849},
{"abbr":"DC","state":"District of Columbia","electors":0,"dem":0,"rep":0},
{"abbr":"GA","state":"Georgia","electors":12,"dem":441094,"rep":216652},
{"abbr":"ID","state":"Idaho","electors":4,"dem":105868,"rep":166979},
{"abbr":"IL","state":"Illinois","electors":27,"dem":1775682,"rep":2623327},
{"abbr":"IN","state":"Indiana","electors":13,"dem":783908,"rep":1182811},
{"abbr":"IA","state":"Iowa","electors":10,"dem":501858,"rep":729187},
{"abbr":"KS","state":"Kansas","electors":8,"dem":296317,"rep":566878},
{"abbr":"KY","state":"Kentucky","electors":10,"dem":476453,"rep":572192},
{"abbr":"LA","state":"Louisiana","electors":10,"dem":243977,"rep":329047},
{"abbr":"ME","state":"Maine","electors":5,"dem":102468,"rep":249238},
{"abbr":"MD","state":"Maryland","electors":9,"dem":372613,"rep":559738},
{"abbr":"MA","state":"Massachusetts","electors":16,"dem":948190,"rep":1393197},
{"abbr":"MI-","state":"Michigan","electors":20,"dem":1359898,"rep":1713647},
{"abbr":"SP-","state":"Michigan","electors":20,"dem":1359898,"rep":1713647},
{"abbr":"MN","state":"Minnesota","electors":11,"dem":617525,"rep":719302},
{"abbr":"MS","state":"Mississippi","electors":8,"dem":144498,"rep":60685},
{"abbr":"MO","state":"Missouri","electors":13,"dem":918273,"rep":914289},
{"abbr":"MT","state":"Montana","electors":4,"dem":116238,"rep":154933},
{"abbr":"NE","state":"Nebraska","electors":6,"dem":199029,"rep":378108},
{"abbr":"NV","state":"Nevada","electors":3,"dem":40640,"rep":56049},
{"abbr":"NH","state":"New Hampshire","electors":4,"dem":90364,"rep":176519},
{"abbr":"NJ","state":"New Jersey","electors":16,"dem":850337,"rep":1606942},
{"abbr":"NM","state":"New Mexico","electors":4,"dem":106098,"rep":146788},
{"abbr":"NY","state":"New York","electors":45,"dem":2750769,"rep":4340340},
{"abbr":"NC","state":"North Carolina","electors":14,"dem":590530,"rep":575062},
{"abbr":"ND","state":"North Dakota","electors":4,"dem":96742,"rep":156766},
{"abbr":"OH","state":"Ohio","electors":25,"dem":1439655,"rep":2262610},
{"abbr":"OK","state":"Oklahoma","electors":8,"dem":385581,"rep":473769},
{"abbr":"OR","state":"Oregon","electors":6,"dem":329204,"rep":406393},
{"abbr":"PA","state":"Pennsylvania","electors":32,"dem":1981769,"rep":2585252},
{"abbr":"RI","state":"Rhode Island","electors":4,"dem":161790,"rep":225819},
{"abbr":"SC","state":"South Carolina","electors":8,"dem":136372,"rep":75700},
{"abbr":"SD","state":"South Dakota","electors":4,"dem":122288,"rep":171569},
{"abbr":"TN","state":"Tennessee","electors":11,"dem":456507,"rep":462288},
{"abbr":"TX","state":"Texas","electors":24,"dem":859958,"rep":1080619},
{"abbr":"UT","state":"Utah","electors":4,"dem":118364,"rep":215631},
{"abbr":"VT","state":"Vermont","electors":3,"dem":42549,"rep":110390},
{"abbr":"VA","state":"Virginia","electors":12,"dem":267760,"rep":386459},
{"abbr":"WA","state":"Washington","electors":9,"dem":523002,"rep":620430},
{"abbr":"WV","state":"West Virginia","electors":8,"dem":381534,"rep":449297},
{"abbr":"WI","state":"Wisconsin","electors":12,"dem":586768,"rep":954844},
{"abbr":"WY","state":"Wyoming","electors":3,"dem":49554,"rep":74573}
],
"pres1952":[
{"abbr":"AL","state":"Alabama","electors":11,"dem":275075,"rep":149231},
{"abbr":"AZ","state":"Arizona","electors":4,"dem":108528,"rep":152042},
{"abbr":"AR","state":"Arkansas","electors":8,"dem":226300,"rep":177155},
{"abbr":"CA","state":"California","electors":32,"dem":2257646,"rep":3035587},
{"abbr":"CO","state":"Colorado","electors":6,"dem":245504,"rep":379782},
{"abbr":"CT","state":"Connecticut","electors":8,"dem":481649,"rep":611012},
{"abbr":"DE","state":"Delaware","electors":3,"dem":83315,"rep":90059},
{"abbr":"DC","state":"","electors":null,"dem":null,"rep":null},
{"abbr":"FL","state":"Florida","electors":10,"dem":444950,"rep":544036},
{"abbr":"GA","state":"Georgia","electors":12,"dem":456823,"rep":198979},
{"abbr":"ID","state":"Idaho","electors":4,"dem":95081,"rep":180707},
{"abbr":"IL","state":"Illinois","electors":27,"dem":2013920,"rep":2457327},
{"abbr":"IN","state":"Indiana","electors":13,"dem":801530,"rep":1136259},
{"abbr":"IA","state":"Iowa","electors":10,"dem":451513,"rep":808906},
{"abbr":"KS","state":"Kansas","electors":8,"dem":273296,"rep":616302},
{"abbr":"KY","state":"Kentucky","electors":10,"dem":495729,"rep":495029},
{"abbr":"LA","state":"Louisiana","electors":10,"dem":345027,"rep":306925},
{"abbr":"ME","state":"Maine","electors":5,"dem":118806,"rep":232353},
{"abbr":"MD","state":"Maryland","electors":9,"dem":395337,"rep":499424},
{"abbr":"MA","state":"Massachusetts","electors":16,"dem":1083525,"rep":1292325},
{"abbr":"MI-","state":"Michigan","electors":20,"dem":1230657,"rep":1551529},
{"abbr":"SP-","state":"Michigan","electors":20,"dem":1230657,"rep":1551529},
{"abbr":"MN","state":"Minnesota","electors":11,"dem":608458,"rep":763211},
{"abbr":"MS","state":"Mississippi","electors":8,"dem":172566,"rep":112966},
{"abbr":"MO","state":"Missouri","electors":13,"dem":929830,"rep":959429},
{"abbr":"MT","state":"Montana","electors":4,"dem":106213,"rep":157394},
{"abbr":"NE","state":"Nebraska","electors":6,"dem":188057,"rep":421603},
{"abbr":"NV","state":"Nevada","electors":3,"dem":31688,"rep":50502},
{"abbr":"NH","state":"New Hampshire","electors":4,"dem":106663,"rep":166287},
{"abbr":"NJ","state":"New Jersey","electors":16,"dem":1015902,"rep":1374613},
{"abbr":"NM","state":"New Mexico","electors":4,"dem":105661,"rep":132170},
{"abbr":"NY","state":"New York","electors":45,"dem":3104601,"rep":3952815},
{"abbr":"NC","state":"North Carolina","electors":14,"dem":652803,"rep":558107},
{"abbr":"ND","state":"North Dakota","electors":4,"dem":76694,"rep":191712},
{"abbr":"OH","state":"Ohio","electors":25,"dem":1600367,"rep":2100391},
{"abbr":"OK","state":"Oklahoma","electors":8,"dem":430939,"rep":518045},
{"abbr":"OR","state":"Oregon","electors":6,"dem":270579,"rep":420815},
{"abbr":"PA","state":"Pennsylvania","electors":32,"dem":2146269,"rep":2415789},
{"abbr":"RI","state":"Rhode Island","electors":4,"dem":203293,"rep":210935},
{"abbr":"SC","state":"South Carolina","electors":8,"dem":173004,"rep":168082},
{"abbr":"SD","state":"South Dakota","electors":4,"dem":90426,"rep":203857},
{"abbr":"TN","state":"Tennessee","electors":11,"dem":443710,"rep":446147},
{"abbr":"TX","state":"Texas","electors":24,"dem":969228,"rep":1102878},
{"abbr":"UT","state":"Utah","electors":4,"dem":135364,"rep":194190},
{"abbr":"VT","state":"Vermont","electors":3,"dem":43355,"rep":109717},
{"abbr":"VA","state":"Virginia","electors":12,"dem":268677,"rep":349037},
{"abbr":"WA","state":"Washington","electors":9,"dem":492845,"rep":599107},
{"abbr":"WV","state":"West Virginia","electors":8,"dem":453578,"rep":419970},
{"abbr":"WI","state":"Wisconsin","electors":12,"dem":622175,"rep":979744},
{"abbr":"WY","state":"Wyoming","electors":3,"dem":47934,"rep":81047}
],
"pres1948":[
{"abbr":"AL","state":"Alabama","electors":11,"dem":0,"rep":40930,"oth":171443},
{"abbr":"AZ","state":"Arizona","electors":4,"dem":95251,"rep":77597,"oth":0},
{"abbr":"AR","state":"Arkansas","electors":9,"dem":149659,"rep":50959,"oth":40068},
{"abbr":"CA","state":"California","electors":25,"dem":1913134,"rep":1895269,"oth":1228},
{"abbr":"CO","state":"Colorado","electors":6,"dem":267288,"rep":239714,"oth":0},
{"abbr":"CT","state":"Connecticut","electors":8,"dem":423297,"rep":437754,"oth":0},
{"abbr":"DE","state":"Delaware","electors":3,"dem":67813,"rep":69588,"oth":0},
{"abbr":"DC","state":"","electors":null,"dem":null,"rep":null,"oth":null},
{"abbr":"FL","state":"Florida","electors":8,"dem":281988,"rep":194280,"oth":89755},
{"abbr":"GA","state":"Georgia","electors":12,"dem":254646,"rep":76691,"oth":85055},
{"abbr":"ID","state":"Idaho","electors":4,"dem":107370,"rep":101514,"oth":0},
{"abbr":"IL","state":"Illinois","electors":28,"dem":1994715,"rep":1961103,"oth":0},
{"abbr":"IN","state":"Indiana","electors":13,"dem":807833,"rep":821079,"oth":0},
{"abbr":"IA","state":"Iowa","electors":10,"dem":522380,"rep":494018,"oth":0},
{"abbr":"KS","state":"Kansas","electors":8,"dem":351902,"rep":423039,"oth":0},
{"abbr":"KY","state":"Kentucky","electors":11,"dem":466756,"rep":341210,"oth":10411},
{"abbr":"LA","state":"Louisiana","electors":10,"dem":136344,"rep":72657,"oth":204290},
{"abbr":"ME","state":"Maine","electors":5,"dem":111916,"rep":150234,"oth":0},
{"abbr":"MD","state":"Maryland","electors":8,"dem":286521,"rep":294814,"oth":2476},
{"abbr":"MA","state":"Massachusetts","electors":16,"dem":1151788,"rep":909370,"oth":0},
{"abbr":"MI-","state":"Michigan","electors":19,"dem":1003448,"rep":1038595,"oth":0},
{"abbr":"SP-","state":"Michigan","electors":19,"dem":1003448,"rep":1038595,"oth":0},
{"abbr":"MN","state":"Minnesota","electors":11,"dem":692966,"rep":483617,"oth":0},
{"abbr":"MS","state":"Mississippi","electors":9,"dem":19384,"rep":5043,"oth":167538},
{"abbr":"MO","state":"Missouri","electors":15,"dem":917315,"rep":655039,"oth":42},
{"abbr":"MT","state":"Montana","electors":4,"dem":119071,"rep":96770,"oth":0},
{"abbr":"NE","state":"Nebraska","electors":6,"dem":224165,"rep":264774,"oth":0},
{"abbr":"NV","state":"Nevada","electors":3,"dem":31291,"rep":29357,"oth":0},
{"abbr":"NH","state":"New Hampshire","electors":4,"dem":107995,"rep":121299,"oth":7},
{"abbr":"NJ","state":"New Jersey","electors":16,"dem":895455,"rep":981124,"oth":0},
{"abbr":"NM","state":"New Mexico","electors":4,"dem":105464,"rep":80303,"oth":0},
{"abbr":"NY","state":"New York","electors":47,"dem":2780204,"rep":2841163,"oth":0},
{"abbr":"NC","state":"North Carolina","electors":14,"dem":459070,"rep":258572,"oth":69652},
{"abbr":"ND","state":"North Dakota","electors":4,"dem":95812,"rep":115139,"oth":374},
{"abbr":"OH","state":"Ohio","electors":25,"dem":1452791,"rep":1445684,"oth":0},
{"abbr":"OK","state":"Oklahoma","electors":10,"dem":452782,"rep":268817,"oth":0},
{"abbr":"OR","state":"Oregon","electors":6,"dem":243147,"rep":260904,"oth":0},
{"abbr":"PA","state":"Pennsylvania","electors":35,"dem":1752426,"rep":1902197,"oth":0},
{"abbr":"RI","state":"Rhode Island","electors":4,"dem":188736,"rep":135787,"oth":0},
{"abbr":"SC","state":"South Carolina","electors":8,"dem":34423,"rep":5386,"oth":102607},
{"abbr":"SD","state":"South Dakota","electors":4,"dem":117653,"rep":129651,"oth":0},
{"abbr":"TN","state":"Tennessee","electors":12,"dem":270402,"rep":202914,"oth":73815},
{"abbr":"TX","state":"Texas","electors":23,"dem":824235,"rep":303467,"oth":113776},
{"abbr":"UT","state":"Utah","electors":4,"dem":149151,"rep":124402,"oth":0},
{"abbr":"VT","state":"Vermont","electors":3,"dem":45557,"rep":75926,"oth":0},
{"abbr":"VA","state":"Virginia","electors":11,"dem":200786,"rep":172070,"oth":43393},
{"abbr":"WA","state":"Washington","electors":8,"dem":476165,"rep":386315,"oth":0},
{"abbr":"WV","state":"West Virginia","electors":8,"dem":429188,"rep":316251,"oth":0},
{"abbr":"WI","state":"Wisconsin","electors":12,"dem":647310,"rep":590959,"oth":0},
{"abbr":"WY","state":"Wyoming","electors":3,"dem":52354,"rep":47947,"oth":0}
],
"pres1944":[
{"abbr":"AL","state":"Alabama","electors":11,"dem":198918,"rep":44540},
{"abbr":"AZ","state":"Arizona","electors":4,"dem":80926,"rep":56287},
{"abbr":"AR","state":"Arkansas","electors":9,"dem":148965,"rep":63551},
{"abbr":"CA","state":"California","electors":25,"dem":1988564,"rep":1512965},
{"abbr":"CO","state":"Colorado","electors":6,"dem":234331,"rep":268731},
{"abbr":"CT","state":"Connecticut","electors":8,"dem":435146,"rep":390527},
{"abbr":"DE","state":"Delaware","electors":3,"dem":68166,"rep":56747},
{"abbr":"DC","state":"","electors":null,"dem":null,"rep":null},
{"abbr":"FL","state":"Florida","electors":8,"dem":339377,"rep":143215},
{"abbr":"GA","state":"Georgia","electors":12,"dem":268187,"rep":59880},
{"abbr":"ID","state":"Idaho","electors":4,"dem":107399,"rep":100137},
{"abbr":"IL","state":"Illinois","electors":28,"dem":2079479,"rep":1939314},
{"abbr":"IN","state":"Indiana","electors":13,"dem":781403,"rep":875891},
{"abbr":"IA","state":"Iowa","electors":10,"dem":499876,"rep":547267},
{"abbr":"KS","state":"Kansas","electors":8,"dem":287458,"rep":442096},
{"abbr":"KY","state":"Kentucky","electors":11,"dem":472589,"rep":392448},
{"abbr":"LA","state":"Louisiana","electors":10,"dem":281564,"rep":67750},
{"abbr":"ME","state":"Maine","electors":5,"dem":140631,"rep":155434},
{"abbr":"MD","state":"Maryland","electors":8,"dem":315490,"rep":292949},
{"abbr":"MA","state":"Massachusetts","electors":16,"dem":1035296,"rep":921350},
{"abbr":"MI-","state":"Michigan","electors":19,"dem":1106899,"rep":1084423},
{"abbr":"SP-","state":"Michigan","electors":19,"dem":1106899,"rep":1084423},
{"abbr":"MN","state":"Minnesota","electors":11,"dem":589864,"rep":527416},
{"abbr":"MS","state":"Mississippi","electors":9,"dem":168479,"rep":11601},
{"abbr":"MO","state":"Missouri","electors":15,"dem":807804,"rep":761524},
{"abbr":"MT","state":"Montana","electors":4,"dem":112556,"rep":93163},
{"abbr":"NE","state":"Nebraska","electors":6,"dem":233246,"rep":329880},
{"abbr":"NV","state":"Nevada","electors":3,"dem":29623,"rep":24611},
{"abbr":"NH","state":"New Hampshire","electors":4,"dem":119663,"rep":109916},
{"abbr":"NJ","state":"New Jersey","electors":16,"dem":987874,"rep":961335},
{"abbr":"NM","state":"New Mexico","electors":4,"dem":81389,"rep":70688},
{"abbr":"NY","state":"New York","electors":47,"dem":3304238,"rep":2987647},
{"abbr":"NC","state":"North Carolina","electors":14,"dem":527399,"rep":263155},
{"abbr":"ND","state":"North Dakota","electors":4,"dem":100144,"rep":118535},
{"abbr":"OH","state":"Ohio","electors":25,"dem":1570763,"rep":1582293},
{"abbr":"OK","state":"Oklahoma","electors":10,"dem":401549,"rep":319424},
{"abbr":"OR","state":"Oregon","electors":6,"dem":248635,"rep":225365},
{"abbr":"PA","state":"Pennsylvania","electors":35,"dem":1940479,"rep":1835054},
{"abbr":"RI","state":"Rhode Island","electors":4,"dem":175356,"rep":123487},
{"abbr":"SC","state":"South Carolina","electors":8,"dem":90601,"rep":4610},
{"abbr":"SD","state":"South Dakota","electors":4,"dem":96711,"rep":135365},
{"abbr":"TN","state":"Tennessee","electors":12,"dem":308707,"rep":200311},
{"abbr":"TX","state":"Texas","electors":23,"dem":821605,"rep":191425},
{"abbr":"UT","state":"Utah","electors":4,"dem":150088,"rep":97891},
{"abbr":"VT","state":"Vermont","electors":3,"dem":53820,"rep":71527},
{"abbr":"VA","state":"Virginia","electors":11,"dem":242276,"rep":145243},
{"abbr":"WA","state":"Washington","electors":8,"dem":486774,"rep":361689},
{"abbr":"WV","state":"West Virginia","electors":8,"dem":392777,"rep":322819},
{"abbr":"WI","state":"Wisconsin","electors":12,"dem":650413,"rep":674532},
{"abbr":"WY","state":"Wyoming","electors":3,"dem":49419,"rep":51921}
],
"pres1940":[
{"abbr":"AL","state":"Alabama","electors":11,"dem":250726,"rep":42184,"oth":0},
{"abbr":"AZ","state":"Arizona","electors":3,"dem":95267,"rep":54030,"oth":0},
{"abbr":"AR","state":"Arkansas","electors":9,"dem":158622,"rep":42121,"oth":0},
{"abbr":"CA","state":"California","electors":22,"dem":1877618,"rep":1351419,"oth":0},
{"abbr":"CO","state":"Colorado","electors":6,"dem":265554,"rep":279576,"oth":0},
{"abbr":"CT","state":"Connecticut","electors":8,"dem":417621,"rep":361819,"oth":0},
{"abbr":"DE","state":"Delaware","electors":3,"dem":74599,"rep":61440,"oth":0},
{"abbr":"DC","state":"","electors":null,"dem":null,"rep":null,"oth":null},
{"abbr":"FL","state":"Florida","electors":7,"dem":359334,"rep":126158,"oth":0},
{"abbr":"GA","state":"Georgia","electors":12,"dem":265194,"rep":46360,"oth":0},
{"abbr":"ID","state":"Idaho","electors":4,"dem":127842,"rep":106553,"oth":0},
{"abbr":"IL","state":"Illinois","electors":29,"dem":2149934,"rep":2047240,"oth":0},
{"abbr":"IN","state":"Indiana","electors":14,"dem":874063,"rep":899466,"oth":0},
{"abbr":"IA","state":"Iowa","electors":11,"dem":578800,"rep":632370,"oth":0},
{"abbr":"KS","state":"Kansas","electors":9,"dem":364725,"rep":489169,"oth":0},
{"abbr":"KY","state":"Kentucky","electors":11,"dem":557222,"rep":410384,"oth":0},
{"abbr":"LA","state":"Louisiana","electors":10,"dem":319751,"rep":52446,"oth":0},
{"abbr":"ME","state":"Maine","electors":5,"dem":156478,"rep":163951,"oth":0},
{"abbr":"MD","state":"Maryland","electors":8,"dem":384546,"rep":269534,"oth":0},
{"abbr":"MA","state":"Massachusetts","electors":17,"dem":1076522,"rep":939700,"oth":0},
{"abbr":"MI-","state":"Michigan","electors":19,"dem":1032991,"rep":1039917,"oth":0},
{"abbr":"SP-","state":"Michigan","electors":19,"dem":1032991,"rep":1039917,"oth":0},
{"abbr":"MN","state":"Minnesota","electors":11,"dem":644196,"rep":596274,"oth":0},
{"abbr":"MS","state":"Mississippi","electors":9,"dem":168267,"rep":7364,"oth":0},
{"abbr":"MO","state":"Missouri","electors":15,"dem":958476,"rep":871009,"oth":0},
{"abbr":"MT","state":"Montana","electors":4,"dem":145698,"rep":99579,"oth":0},
{"abbr":"NE","state":"Nebraska","electors":7,"dem":263677,"rep":352201,"oth":0},
{"abbr":"NV","state":"Nevada","electors":3,"dem":31945,"rep":21229,"oth":0},
{"abbr":"NH","state":"New Hampshire","electors":4,"dem":125292,"rep":110127,"oth":0},
{"abbr":"NJ","state":"New Jersey","electors":16,"dem":1016404,"rep":944876,"oth":0},
{"abbr":"NM","state":"New Mexico","electors":3,"dem":103699,"rep":79315,"oth":0},
{"abbr":"NY","state":"New York","electors":47,"dem":3251918,"rep":3027478,"oth":0},
{"abbr":"NC","state":"North Carolina","electors":13,"dem":609015,"rep":213633,"oth":0},
{"abbr":"ND","state":"North Dakota","electors":4,"dem":124036,"rep":154590,"oth":0},
{"abbr":"OH","state":"Ohio","electors":26,"dem":1733139,"rep":1586773,"oth":0},
{"abbr":"OK","state":"Oklahoma","electors":11,"dem":474313,"rep":348872,"oth":0},
{"abbr":"OR","state":"Oregon","electors":5,"dem":258415,"rep":219555,"oth":0},
{"abbr":"PA","state":"Pennsylvania","electors":36,"dem":2171035,"rep":1889848,"oth":0},
{"abbr":"RI","state":"Rhode Island","electors":4,"dem":182182,"rep":138653,"oth":0},
{"abbr":"SC","state":"South Carolina","electors":8,"dem":95470,"rep":4360,"oth":0},
{"abbr":"SD","state":"South Dakota","electors":4,"dem":131362,"rep":177065,"oth":0},
{"abbr":"TN","state":"Tennessee","electors":11,"dem":351601,"rep":169153,"oth":0},
{"abbr":"TX","state":"Texas","electors":23,"dem":909974,"rep":212692,"oth":0},
{"abbr":"UT","state":"Utah","electors":4,"dem":154277,"rep":93151,"oth":0},
{"abbr":"VT","state":"Vermont","electors":3,"dem":64269,"rep":78371,"oth":0},
{"abbr":"VA","state":"Virginia","electors":11,"dem":235961,"rep":109363,"oth":0},
{"abbr":"WA","state":"Washington","electors":8,"dem":462145,"rep":322123,"oth":0},
{"abbr":"WV","state":"West Virginia","electors":8,"dem":495662,"rep":372414,"oth":0},
{"abbr":"WI","state":"Wisconsin","electors":12,"dem":704821,"rep":679206,"oth":0},
{"abbr":"WY","state":"Wyoming","electors":3,"dem":59287,"rep":52633,"oth":0}
],
"pres1936":[
{"abbr":"AL","state":"Alabama","electors":11,"dem":238196,"rep":35358,"oth":0},
{"abbr":"AZ","state":"Arizona","electors":3,"dem":86722,"rep":33433,"oth":0},
{"abbr":"AR","state":"Arkansas","electors":9,"dem":146765,"rep":32039,"oth":0},
{"abbr":"CA","state":"California","electors":22,"dem":1766836,"rep":836431,"oth":0},
{"abbr":"CO","state":"Colorado","electors":6,"dem":295021,"rep":181267,"oth":0},
{"abbr":"CT","state":"Connecticut","electors":8,"dem":382129,"rep":278685,"oth":0},
{"abbr":"DE","state":"Delaware","electors":3,"dem":69702,"rep":57236,"oth":0},
{"abbr":"DC","state":"","electors":null,"dem":null,"rep":null,"oth":null},
{"abbr":"FL","state":"Florida","electors":7,"dem":249117,"rep":78248,"oth":0},
{"abbr":"GA","state":"Georgia","electors":12,"dem":255364,"rep":36942,"oth":0},
{"abbr":"ID","state":"Idaho","electors":4,"dem":125683,"rep":66256,"oth":0},
{"abbr":"IL","state":"Illinois","electors":29,"dem":2282999,"rep":1570393,"oth":0},
{"abbr":"IN","state":"Indiana","electors":14,"dem":934974,"rep":691570,"oth":0},
{"abbr":"IA","state":"Iowa","electors":11,"dem":621756,"rep":487977,"oth":0},
{"abbr":"KS","state":"Kansas","electors":9,"dem":464520,"rep":397727,"oth":0},
{"abbr":"KY","state":"Kentucky","electors":11,"dem":541944,"rep":369702,"oth":0},
{"abbr":"LA","state":"Louisiana","electors":10,"dem":292894,"rep":36791,"oth":0},
{"abbr":"ME","state":"Maine","electors":5,"dem":126333,"rep":168823,"oth":0},
{"abbr":"MD","state":"Maryland","electors":8,"dem":389612,"rep":231435,"oth":0},
{"abbr":"MA","state":"Massachusetts","electors":17,"dem":942716,"rep":768613,"oth":0},
{"abbr":"MI-","state":"Michigan","electors":19,"dem":1016794,"rep":699733,"oth":0},
{"abbr":"SP-","state":"Michigan","electors":19,"dem":1016794,"rep":699733,"oth":0},
{"abbr":"MN","state":"Minnesota","electors":11,"dem":698811,"rep":350461,"oth":0},
{"abbr":"MS","state":"Mississippi","electors":9,"dem":157318,"rep":4443,"oth":0},
{"abbr":"MO","state":"Missouri","electors":15,"dem":1111043,"rep":697891,"oth":0},
{"abbr":"MT","state":"Montana","electors":4,"dem":159690,"rep":63598,"oth":0},
{"abbr":"NE","state":"Nebraska","electors":7,"dem":347445,"rep":247731,"oth":0},
{"abbr":"NV","state":"Nevada","electors":3,"dem":31925,"rep":11923,"oth":0},
{"abbr":"NH","state":"New Hampshire","electors":4,"dem":108460,"rep":104642,"oth":0},
{"abbr":"NJ","state":"New Jersey","electors":16,"dem":1083549,"rep":719421,"oth":0},
{"abbr":"NM","state":"New Mexico","electors":3,"dem":106037,"rep":61727,"oth":0},
{"abbr":"NY","state":"New York","electors":47,"dem":3293222,"rep":2180670,"oth":0},
{"abbr":"NC","state":"North Carolina","electors":13,"dem":616141,"rep":223283,"oth":0},
{"abbr":"ND","state":"North Dakota","electors":4,"dem":163148,"rep":72751,"oth":0},
{"abbr":"OH","state":"Ohio","electors":26,"dem":1747140,"rep":1127855,"oth":0},
{"abbr":"OK","state":"Oklahoma","electors":11,"dem":501069,"rep":245122,"oth":0},
{"abbr":"OR","state":"Oregon","electors":5,"dem":266733,"rep":122706,"oth":0},
{"abbr":"PA","state":"Pennsylvania","electors":36,"dem":2353987,"rep":1690200,"oth":0},
{"abbr":"RI","state":"Rhode Island","electors":4,"dem":165238,"rep":125031,"oth":0},
{"abbr":"SC","state":"South Carolina","electors":8,"dem":113791,"rep":1646,"oth":0},
{"abbr":"SD","state":"South Dakota","electors":4,"dem":160137,"rep":125977,"oth":0},
{"abbr":"TN","state":"Tennessee","electors":11,"dem":328083,"rep":146520,"oth":0},
{"abbr":"TX","state":"Texas","electors":23,"dem":734485,"rep":103874,"oth":0},
{"abbr":"UT","state":"Utah","electors":4,"dem":150246,"rep":64555,"oth":0},
{"abbr":"VT","state":"Vermont","electors":3,"dem":62124,"rep":81023,"oth":0},
{"abbr":"VA","state":"Virginia","electors":11,"dem":234980,"rep":98336,"oth":0},
{"abbr":"WA","state":"Washington","electors":8,"dem":459579,"rep":206892,"oth":0},
{"abbr":"WV","state":"West Virginia","electors":8,"dem":502582,"rep":325358,"oth":0},
{"abbr":"WI","state":"Wisconsin","electors":12,"dem":802984,"rep":380828,"oth":0},
{"abbr":"WY","state":"Wyoming","electors":3,"dem":62624,"rep":38739,"oth":0}
],
"pres1932":[
{"abbr":"AL","state":"Alabama","electors":11,"dem":207910,"rep":34675,"oth":0},
{"abbr":"AZ","state":"Arizona","electors":3,"dem":79264,"rep":36104,"oth":0},
{"abbr":"AR","state":"Arkansas","electors":9,"dem":189602,"rep":28467,"oth":0},
{"abbr":"CA","state":"California","electors":22,"dem":1324157,"rep":847902,"oth":0},
{"abbr":"CO","state":"Colorado","electors":6,"dem":250877,"rep":189617,"oth":0},
{"abbr":"CT","state":"Connecticut","electors":8,"dem":281632,"rep":288420,"oth":0},
{"abbr":"DE","state":"Delaware","electors":3,"dem":54319,"rep":57073,"oth":0},
{"abbr":"DC","state":"","electors":null,"dem":null,"rep":null,"oth":null},
{"abbr":"FL","state":"Florida","electors":7,"dem":206307,"rep":69170,"oth":0},
{"abbr":"GA","state":"Georgia","electors":12,"dem":234118,"rep":19863,"oth":0},
{"abbr":"ID","state":"Idaho","electors":4,"dem":109479,"rep":71417,"oth":0},
{"abbr":"IL","state":"Illinois","electors":29,"dem":1882304,"rep":1432756,"oth":0},
{"abbr":"IN","state":"Indiana","electors":14,"dem":862054,"rep":677184,"oth":0},
{"abbr":"IA","state":"Iowa","electors":11,"dem":598019,"rep":414433,"oth":0},
{"abbr":"KS","state":"Kansas","electors":9,"dem":424204,"rep":349498,"oth":0},
{"abbr":"KY","state":"Kentucky","electors":11,"dem":580574,"rep":394716,"oth":0},
{"abbr":"LA","state":"Louisiana","electors":10,"dem":249418,"rep":18853,"oth":0},
{"abbr":"ME","state":"Maine","electors":5,"dem":128907,"rep":166631,"oth":0},
{"abbr":"MD","state":"Maryland","electors":8,"dem":314314,"rep":184184,"oth":0},
{"abbr":"MA","state":"Massachusetts","electors":17,"dem":800148,"rep":736959,"oth":0},
{"abbr":"MI-","state":"Michigan","electors":19,"dem":871700,"rep":739894,"oth":0},
{"abbr":"SP-","state":"Michigan","electors":19,"dem":871700,"rep":739894,"oth":0},
{"abbr":"MN","state":"Minnesota","electors":11,"dem":600806,"rep":363959,"oth":0},
{"abbr":"MS","state":"Mississippi","electors":9,"dem":140168,"rep":5180,"oth":0},
{"abbr":"MO","state":"Missouri","electors":15,"dem":1025406,"rep":564713,"oth":0},
{"abbr":"MT","state":"Montana","electors":4,"dem":127286,"rep":78078,"oth":0},
{"abbr":"NE","state":"Nebraska","electors":7,"dem":359082,"rep":201177,"oth":0},
{"abbr":"NV","state":"Nevada","electors":3,"dem":28756,"rep":12674,"oth":0},
{"abbr":"NH","state":"New Hampshire","electors":4,"dem":100680,"rep":103629,"oth":0},
{"abbr":"NJ","state":"New Jersey","electors":16,"dem":806394,"rep":775406,"oth":0},
{"abbr":"NM","state":"New Mexico","electors":3,"dem":95089,"rep":54217,"oth":0},
{"abbr":"NY","state":"New York","electors":47,"dem":2534959,"rep":1937963,"oth":0},
{"abbr":"NC","state":"North Carolina","electors":13,"dem":497566,"rep":208344,"oth":0},
{"abbr":"ND","state":"North Dakota","electors":4,"dem":178350,"rep":71772,"oth":0},
{"abbr":"OH","state":"Ohio","electors":26,"dem":1301695,"rep":1227319,"oth":0},
{"abbr":"OK","state":"Oklahoma","electors":11,"dem":516468,"rep":188165,"oth":0},
{"abbr":"OR","state":"Oregon","electors":5,"dem":213871,"rep":136019,"oth":0},
{"abbr":"PA","state":"Pennsylvania","electors":36,"dem":1295948,"rep":1453540,"oth":0},
{"abbr":"RI","state":"Rhode Island","electors":4,"dem":146604,"rep":115266,"oth":0},
{"abbr":"SC","state":"South Carolina","electors":8,"dem":102347,"rep":1978,"oth":0},
{"abbr":"SD","state":"South Dakota","electors":4,"dem":183515,"rep":99212,"oth":0},
{"abbr":"TN","state":"Tennessee","electors":11,"dem":259473,"rep":126752,"oth":0},
{"abbr":"TX","state":"Texas","electors":23,"dem":760348,"rep":97959,"oth":0},
{"abbr":"UT","state":"Utah","electors":4,"dem":116750,"rep":84795,"oth":0},
{"abbr":"VT","state":"Vermont","electors":3,"dem":56266,"rep":78984,"oth":0},
{"abbr":"VA","state":"Virginia","electors":11,"dem":203979,"rep":89637,"oth":0},
{"abbr":"WA","state":"Washington","electors":8,"dem":353260,"rep":208645,"oth":0},
{"abbr":"WV","state":"West Virginia","electors":8,"dem":405124,"rep":330731,"oth":0},
{"abbr":"WI","state":"Wisconsin","electors":12,"dem":707410,"rep":347741,"oth":0},
{"abbr":"WY","state":"Wyoming","electors":3,"dem":54370,"rep":39583,"oth":0}
],
"pres1928":[
{"abbr":"AL","state":"Alabama","electors":12,"dem":127797,"rep":120725,"oth":null},
{"abbr":"AZ","state":"Arizona","electors":3,"dem":38537,"rep":52533,"oth":null},
{"abbr":"AR","state":"Arkansas","electors":9,"dem":119196,"rep":77751,"oth":null},
{"abbr":"CA","state":"California","electors":13,"dem":614365,"rep":1162323,"oth":null},
{"abbr":"CO","state":"Colorado","electors":6,"dem":133131,"rep":253872,"oth":null},
{"abbr":"CT","state":"Connecticut","electors":7,"dem":252040,"rep":296614,"oth":null},
{"abbr":"DE","state":"Delaware","electors":3,"dem":36643,"rep":68860,"oth":null},
{"abbr":"DC","state":"","electors":null,"dem":null,"rep":null,"oth":null},
{"abbr":"FL","state":"Florida","electors":6,"dem":101764,"rep":144168,"oth":null},
{"abbr":"GA","state":"Georgia","electors":14,"dem":129602,"rep":99369,"oth":null},
{"abbr":"ID","state":"Idaho","electors":4,"dem":52926,"rep":97322,"oth":null},
{"abbr":"IL","state":"Illinois","electors":29,"dem":1313817,"rep":1769141,"oth":null},
{"abbr":"IN","state":"Indiana","electors":15,"dem":562691,"rep":848290,"oth":null},
{"abbr":"IA","state":"Iowa","electors":13,"dem":379311,"rep":623570,"oth":null},
{"abbr":"KS","state":"Kansas","electors":10,"dem":193003,"rep":513672,"oth":null},
{"abbr":"KY","state":"Kentucky","electors":13,"dem":381070,"rep":558064,"oth":null},
{"abbr":"LA","state":"Louisiana","electors":10,"dem":164655,"rep":51160,"oth":null},
{"abbr":"ME","state":"Maine","electors":6,"dem":81179,"rep":179923,"oth":null},
{"abbr":"MD","state":"Maryland","electors":8,"dem":223626,"rep":301479,"oth":null},
{"abbr":"MA","state":"Massachusetts","electors":18,"dem":792758,"rep":775566,"oth":null},
{"abbr":"MI-","state":"Michigan","electors":15,"dem":396762,"rep":965396,"oth":null},
{"abbr":"SP-","state":"Michigan","electors":15,"dem":396762,"rep":965396,"oth":null},
{"abbr":"MN","state":"Minnesota","electors":12,"dem":396451,"rep":560977,"oth":null},
{"abbr":"MS","state":"Mississippi","electors":10,"dem":124539,"rep":27153,"oth":null},
{"abbr":"MO","state":"Missouri","electors":18,"dem":662562,"rep":834080,"oth":null},
{"abbr":"MT","state":"Montana","electors":4,"dem":78578,"rep":113300,"oth":null},
{"abbr":"NE","state":"Nebraska","electors":8,"dem":197959,"rep":345745,"oth":null},
{"abbr":"NV","state":"Nevada","electors":3,"dem":14090,"rep":18327,"oth":null},
{"abbr":"NH","state":"New Hampshire","electors":4,"dem":80715,"rep":115404,"oth":null},
{"abbr":"NJ","state":"New Jersey","electors":14,"dem":616162,"rep":925285,"oth":null},
{"abbr":"NM","state":"New Mexico","electors":3,"dem":48211,"rep":69645,"oth":null},
{"abbr":"NY","state":"New York","electors":45,"dem":2089863,"rep":2193344,"oth":null},
{"abbr":"NC","state":"North Carolina","electors":12,"dem":286227,"rep":348923,"oth":null},
{"abbr":"ND","state":"North Dakota","electors":5,"dem":106648,"rep":131441,"oth":null},
{"abbr":"OH","state":"Ohio","electors":24,"dem":864210,"rep":1627546,"oth":null},
{"abbr":"OK","state":"Oklahoma","electors":10,"dem":219174,"rep":394046,"oth":null},
{"abbr":"OR","state":"Oregon","electors":5,"dem":109223,"rep":205341,"oth":null},
{"abbr":"PA","state":"Pennsylvania","electors":38,"dem":1067586,"rep":2055382,"oth":null},
{"abbr":"RI","state":"Rhode Island","electors":5,"dem":118973,"rep":117522,"oth":null},
{"abbr":"SC","state":"South Carolina","electors":9,"dem":62700,"rep":5858,"oth":null},
{"abbr":"SD","state":"South Dakota","electors":5,"dem":102660,"rep":157603,"oth":null},
{"abbr":"TN","state":"Tennessee","electors":12,"dem":167343,"rep":195388,"oth":null},
{"abbr":"TX","state":"Texas","electors":20,"dem":341032,"rep":367036,"oth":null},
{"abbr":"UT","state":"Utah","electors":4,"dem":80985,"rep":94618,"oth":null},
{"abbr":"VT","state":"Vermont","electors":4,"dem":44440,"rep":90404,"oth":null},
{"abbr":"VA","state":"Virginia","electors":12,"dem":140146,"rep":164609,"oth":null},
{"abbr":"WA","state":"Washington","electors":7,"dem":156772,"rep":335844,"oth":null},
{"abbr":"WV","state":"West Virginia","electors":8,"dem":263784,"rep":375551,"oth":null},
{"abbr":"WI","state":"Wisconsin","electors":13,"dem":450259,"rep":544205,"oth":null},
{"abbr":"WY","state":"Wyoming","electors":3,"dem":29299,"rep":52748,"oth":null}
],
"pres1924":[
{"abbr":"AL","state":"Alabama","electors":12,"dem":112966,"rep":45005,"oth":8084},
{"abbr":"AZ","state":"Arizona","electors":3,"dem":26235,"rep":30516,"oth":17210},
{"abbr":"AR","state":"Arkansas","electors":9,"dem":84795,"rep":40564,"oth":13173},
{"abbr":"CA","state":"California","electors":13,"dem":105514,"rep":733250,"oth":424649},
{"abbr":"CO","state":"Colorado","electors":6,"dem":75238,"rep":195171,"oth":69945},
{"abbr":"CT","state":"Connecticut","electors":7,"dem":110184,"rep":246322,"oth":42416},
{"abbr":"DE","state":"Delaware","electors":3,"dem":33445,"rep":52441,"oth":4979},
{"abbr":"DC","state":"","electors":null,"dem":null,"rep":null,"oth":null},
{"abbr":"FL","state":"Florida","electors":6,"dem":62083,"rep":30633,"oth":8625},
{"abbr":"GA","state":"Georgia","electors":14,"dem":123200,"rep":30300,"oth":12691},
{"abbr":"ID","state":"Idaho","electors":4,"dem":24256,"rep":69879,"oth":54160},
{"abbr":"IL","state":"Illinois","electors":29,"dem":576975,"rep":1453321,"oth":432027},
{"abbr":"IN","state":"Indiana","electors":15,"dem":492245,"rep":703042,"oth":71700},
{"abbr":"IA","state":"Iowa","electors":13,"dem":162600,"rep":537635,"oth":272243},
{"abbr":"KS","state":"Kansas","electors":10,"dem":156319,"rep":407671,"oth":98461},
{"abbr":"KY","state":"Kentucky","electors":13,"dem":374855,"rep":398966,"oth":38465},
{"abbr":"LA","state":"Louisiana","electors":10,"dem":93218,"rep":24670,"oth":0},
{"abbr":"ME","state":"Maine","electors":6,"dem":41964,"rep":138440,"oth":11382},
{"abbr":"MD","state":"Maryland","electors":8,"dem":148072,"rep":162414,"oth":47157},
{"abbr":"MA","state":"Massachusetts","electors":18,"dem":280831,"rep":703476,"oth":141225},
{"abbr":"MI-","state":"Michigan","electors":15,"dem":152359,"rep":874631,"oth":122014},
{"abbr":"SP-","state":"Michigan","electors":15,"dem":152359,"rep":874631,"oth":122014},
{"abbr":"MN","state":"Minnesota","electors":12,"dem":55913,"rep":420759,"oth":339192},
{"abbr":"MS","state":"Mississippi","electors":10,"dem":100474,"rep":8494,"oth":3494},
{"abbr":"MO","state":"Missouri","electors":18,"dem":572753,"rep":648486,"oth":84160},
{"abbr":"MT","state":"Montana","electors":4,"dem":33805,"rep":74138,"oth":66123},
{"abbr":"NE","state":"Nebraska","electors":8,"dem":137289,"rep":218585,"oth":106701},
{"abbr":"NV","state":"Nevada","electors":3,"dem":5909,"rep":11243,"oth":9769},
{"abbr":"NH","state":"New Hampshire","electors":4,"dem":57201,"rep":98575,"oth":8993},
{"abbr":"NJ","state":"New Jersey","electors":14,"dem":297743,"rep":675162,"oth":108901},
{"abbr":"NM","state":"New Mexico","electors":3,"dem":48542,"rep":54745,"oth":9543},
{"abbr":"NY","state":"New York","electors":45,"dem":950796,"rep":1820058,"oth":474913},
{"abbr":"NC","state":"North Carolina","electors":12,"dem":284270,"rep":191753,"oth":6651},
{"abbr":"ND","state":"North Dakota","electors":5,"dem":13858,"rep":94931,"oth":89922},
{"abbr":"OH","state":"Ohio","electors":24,"dem":477888,"rep":1176130,"oth":357948},
{"abbr":"OK","state":"Oklahoma","electors":10,"dem":255798,"rep":226242,"oth":46375},
{"abbr":"OR","state":"Oregon","electors":5,"dem":67589,"rep":142579,"oth":68403},
{"abbr":"PA","state":"Pennsylvania","electors":38,"dem":409192,"rep":1401481,"oth":307567},
{"abbr":"RI","state":"Rhode Island","electors":5,"dem":76606,"rep":125286,"oth":7628},
{"abbr":"SC","state":"South Carolina","electors":9,"dem":49008,"rep":1123,"oth":620},
{"abbr":"SD","state":"South Dakota","electors":5,"dem":27214,"rep":101299,"oth":75355},
{"abbr":"TN","state":"Tennessee","electors":12,"dem":158537,"rep":130882,"oth":10656},
{"abbr":"TX","state":"Texas","electors":20,"dem":484605,"rep":130023,"oth":42881},
{"abbr":"UT","state":"Utah","electors":4,"dem":47001,"rep":77327,"oth":32662},
{"abbr":"VT","state":"Vermont","electors":4,"dem":16124,"rep":80498,"oth":5964},
{"abbr":"VA","state":"Virginia","electors":12,"dem":139716,"rep":73312,"oth":10377},
{"abbr":"WA","state":"Washington","electors":7,"dem":42842,"rep":220224,"oth":150727},
{"abbr":"WV","state":"West Virginia","electors":8,"dem":257232,"rep":288635,"oth":36723},
{"abbr":"WI","state":"Wisconsin","electors":13,"dem":68115,"rep":311614,"oth":453678},
{"abbr":"WY","state":"Wyoming","electors":3,"dem":12868,"rep":41858,"oth":25174}
],
"pres1920":[
{"abbr":"AL","state":"Alabama","electors":12,"dem":159965,"rep":74556,"oth":0},
{"abbr":"AZ","state":"Arizona","electors":3,"dem":29546,"rep":37016,"oth":0},
{"abbr":"AR","state":"Arkansas","electors":9,"dem":107409,"rep":71117,"oth":0},
{"abbr":"CA","state":"California","electors":13,"dem":229191,"rep":624992,"oth":0},
{"abbr":"CO","state":"Colorado","electors":6,"dem":104936,"rep":173248,"oth":0},
{"abbr":"CT","state":"Connecticut","electors":7,"dem":120721,"rep":229238,"oth":0},
{"abbr":"DE","state":"Delaware","electors":3,"dem":39911,"rep":52858,"oth":0},
{"abbr":"DC","state":"","electors":null,"dem":null,"rep":null,"oth":null},
{"abbr":"FL","state":"Florida","electors":6,"dem":90515,"rep":44853,"oth":0},
{"abbr":"GA","state":"Georgia","electors":14,"dem":107162,"rep":41089,"oth":0},
{"abbr":"ID","state":"Idaho","electors":4,"dem":46579,"rep":88975,"oth":0},
{"abbr":"IL","state":"Illinois","electors":29,"dem":534395,"rep":1420480,"oth":0},
{"abbr":"IN","state":"Indiana","electors":15,"dem":511364,"rep":696370,"oth":0},
{"abbr":"IA","state":"Iowa","electors":13,"dem":227921,"rep":634674,"oth":0},
{"abbr":"KS","state":"Kansas","electors":10,"dem":185464,"rep":369268,"oth":0},
{"abbr":"KY","state":"Kentucky","electors":13,"dem":456497,"rep":452480,"oth":0},
{"abbr":"LA","state":"Louisiana","electors":10,"dem":87519,"rep":38538,"oth":0},
{"abbr":"ME","state":"Maine","electors":6,"dem":58961,"rep":136355,"oth":0},
{"abbr":"MD","state":"Maryland","electors":8,"dem":180626,"rep":236117,"oth":0},
{"abbr":"MA","state":"Massachusetts","electors":18,"dem":276691,"rep":681153,"oth":0},
{"abbr":"MI-","state":"Michigan","electors":15,"dem":233450,"rep":762865,"oth":0},
{"abbr":"SP-","state":"Michigan","electors":15,"dem":233450,"rep":762865,"oth":0},
{"abbr":"MN","state":"Minnesota","electors":12,"dem":142994,"rep":519421,"oth":0},
{"abbr":"MS","state":"Mississippi","electors":10,"dem":69277,"rep":11576,"oth":0},
{"abbr":"MO","state":"Missouri","electors":18,"dem":574799,"rep":727162,"oth":0},
{"abbr":"MT","state":"Montana","electors":4,"dem":57372,"rep":109430,"oth":0},
{"abbr":"NE","state":"Nebraska","electors":8,"dem":119608,"rep":247498,"oth":0},
{"abbr":"NV","state":"Nevada","electors":3,"dem":9851,"rep":15479,"oth":0},
{"abbr":"NH","state":"New Hampshire","electors":4,"dem":62662,"rep":95196,"oth":0},
{"abbr":"NJ","state":"New Jersey","electors":14,"dem":256887,"rep":611541,"oth":0},
{"abbr":"NM","state":"New Mexico","electors":3,"dem":46668,"rep":57634,"oth":0},
{"abbr":"NY","state":"New York","electors":45,"dem":781238,"rep":1871167,"oth":0},
{"abbr":"NC","state":"North Carolina","electors":12,"dem":305447,"rep":232848,"oth":0},
{"abbr":"ND","state":"North Dakota","electors":5,"dem":37422,"rep":160072,"oth":0},
{"abbr":"OH","state":"Ohio","electors":24,"dem":780037,"rep":1182022,"oth":0},
{"abbr":"OK","state":"Oklahoma","electors":10,"dem":217053,"rep":243831,"oth":0},
{"abbr":"OR","state":"Oregon","electors":5,"dem":80019,"rep":143592,"oth":0},
{"abbr":"PA","state":"Pennsylvania","electors":38,"dem":503843,"rep":1218216,"oth":0},
{"abbr":"RI","state":"Rhode Island","electors":5,"dem":55062,"rep":107463,"oth":0},
{"abbr":"SC","state":"South Carolina","electors":9,"dem":64170,"rep":2610,"oth":0},
{"abbr":"SD","state":"South Dakota","electors":5,"dem":35938,"rep":110692,"oth":0},
{"abbr":"TN","state":"Tennessee","electors":12,"dem":206558,"rep":219829,"oth":0},
{"abbr":"TX","state":"Texas","electors":20,"dem":288767,"rep":114538,"oth":0},
{"abbr":"UT","state":"Utah","electors":4,"dem":56639,"rep":81555,"oth":0},
{"abbr":"VT","state":"Vermont","electors":4,"dem":20919,"rep":68212,"oth":0},
{"abbr":"VA","state":"Virginia","electors":12,"dem":141670,"rep":87456,"oth":0},
{"abbr":"WA","state":"Washington","electors":7,"dem":84298,"rep":223137,"oth":0},
{"abbr":"WV","state":"West Virginia","electors":8,"dem":220789,"rep":282007,"oth":0},
{"abbr":"WI","state":"Wisconsin","electors":13,"dem":113422,"rep":498576,"oth":0},
{"abbr":"WY","state":"Wyoming","electors":3,"dem":17429,"rep":35091,"oth":0}
],
"pres1916":[
{"abbr":"AL","state":"Alabama","electors":12,"dem":99409,"rep":28662},
{"abbr":"AZ","state":"Arizona","electors":3,"dem":33170,"rep":20524},
{"abbr":"AR","state":"Arkansas","electors":9,"dem":112211,"rep":48879},
{"abbr":"CA","state":"California","electors":13,"dem":466289,"rep":462516},
{"abbr":"CO","state":"Colorado","electors":6,"dem":178816,"rep":102308},
{"abbr":"CT","state":"Connecticut","electors":7,"dem":99786,"rep":106514},
{"abbr":"DE","state":"Delaware","electors":3,"dem":24753,"rep":26011},
{"abbr":"DC","state":"","electors":null,"dem":null,"rep":null},
{"abbr":"FL","state":"Florida","electors":6,"dem":55984,"rep":14611},
{"abbr":"GA","state":"Georgia","electors":14,"dem":127754,"rep":11294},
{"abbr":"ID","state":"Idaho","electors":4,"dem":70054,"rep":55368},
{"abbr":"IL","state":"Illinois","electors":29,"dem":950229,"rep":1152549},
{"abbr":"IN","state":"Indiana","electors":15,"dem":334063,"rep":341005},
{"abbr":"IA","state":"Iowa","electors":13,"dem":218699,"rep":280439},
{"abbr":"KS","state":"Kansas","electors":10,"dem":314588,"rep":277658},
{"abbr":"KY","state":"Kentucky","electors":13,"dem":269990,"rep":241854},
{"abbr":"LA","state":"Louisiana","electors":10,"dem":79875,"rep":6466},
{"abbr":"ME","state":"Maine","electors":6,"dem":64033,"rep":69508},
{"abbr":"MD","state":"Maryland","electors":8,"dem":138359,"rep":117347},
{"abbr":"MA","state":"Massachusetts","electors":18,"dem":247885,"rep":268784},
{"abbr":"MI-","state":"Michigan","electors":15,"dem":286775,"rep":339097},
{"abbr":"SP-","state":"Michigan","electors":15,"dem":286775,"rep":339097},
{"abbr":"MN","state":"Minnesota","electors":12,"dem":179152,"rep":179544},
{"abbr":"MS","state":"Mississippi","electors":10,"dem":80422,"rep":4253},
{"abbr":"MO","state":"Missouri","electors":18,"dem":398032,"rep":369339},
{"abbr":"MT","state":"Montana","electors":4,"dem":101063,"rep":66750},
{"abbr":"NE","state":"Nebraska","electors":8,"dem":158827,"rep":117771},
{"abbr":"NV","state":"Nevada","electors":3,"dem":17776,"rep":12127},
{"abbr":"NH","state":"New Hampshire","electors":4,"dem":43781,"rep":43725},
{"abbr":"NJ","state":"New Jersey","electors":14,"dem":211018,"rep":268982},
{"abbr":"NM","state":"New Mexico","electors":3,"dem":33527,"rep":31152},
{"abbr":"NY","state":"New York","electors":45,"dem":759426,"rep":879238},
{"abbr":"NC","state":"North Carolina","electors":12,"dem":168383,"rep":120890},
{"abbr":"ND","state":"North Dakota","electors":5,"dem":55206,"rep":53471},
{"abbr":"OH","state":"Ohio","electors":24,"dem":604161,"rep":514753},
{"abbr":"OK","state":"Oklahoma","electors":10,"dem":148113,"rep":97233},
{"abbr":"OR","state":"Oregon","electors":5,"dem":120087,"rep":126813},
{"abbr":"PA","state":"Pennsylvania","electors":38,"dem":521784,"rep":703823},
{"abbr":"RI","state":"Rhode Island","electors":5,"dem":40394,"rep":44858},
{"abbr":"SC","state":"South Carolina","electors":9,"dem":61846,"rep":1550},
{"abbr":"SD","state":"South Dakota","electors":5,"dem":59191,"rep":64217},
{"abbr":"TN","state":"Tennessee","electors":12,"dem":153280,"rep":116223},
{"abbr":"TX","state":"Texas","electors":20,"dem":286514,"rep":64999},
{"abbr":"UT","state":"Utah","electors":4,"dem":84145,"rep":54137},
{"abbr":"VT","state":"Vermont","electors":4,"dem":22708,"rep":40250},
{"abbr":"VA","state":"Virginia","electors":12,"dem":101840,"rep":48384},
{"abbr":"WA","state":"Washington","electors":7,"dem":183388,"rep":167208},
{"abbr":"WV","state":"West Virginia","electors":8,"dem":140403,"rep":143124},
{"abbr":"WI","state":"Wisconsin","electors":13,"dem":191363,"rep":220822},
{"abbr":"WY","state":"Wyoming","electors":3,"dem":28316,"rep":21698}
],
"pres1912":[
{"abbr":"AL","state":"Alabama","electors":12,"dem":82438,"rep":9807,"oth":22680},
{"abbr":"AZ","state":"Arizona","electors":3,"dem":10324,"rep":3021,"oth":6949},
{"abbr":"AR","state":"Arkansas","electors":9,"dem":68814,"rep":25585,"oth":21644},
{"abbr":"CA","state":"California","electors":13,"dem":283436,"rep":3914,"oth":283610},
{"abbr":"CO","state":"Colorado","electors":6,"dem":114232,"rep":58386,"oth":72306},
{"abbr":"CT","state":"Connecticut","electors":7,"dem":74561,"rep":68324,"oth":34129},
{"abbr":"DE","state":"Delaware","electors":3,"dem":22631,"rep":15998,"oth":8886},
{"abbr":"DC","state":"","electors":null,"dem":null,"rep":null,"oth":null},
{"abbr":"FL","state":"Florida","electors":6,"dem":35343,"rep":4279,"oth":4555},
{"abbr":"GA","state":"Georgia","electors":14,"dem":93087,"rep":5191,"oth":21985},
{"abbr":"ID","state":"Idaho","electors":4,"dem":33921,"rep":32810,"oth":25527},
{"abbr":"IL","state":"Illinois","electors":29,"dem":405048,"rep":253593,"oth":386478},
{"abbr":"IN","state":"Indiana","electors":15,"dem":281890,"rep":151267,"oth":162007},
{"abbr":"IA","state":"Iowa","electors":13,"dem":185325,"rep":119805,"oth":161819},
{"abbr":"KS","state":"Kansas","electors":10,"dem":143663,"rep":74845,"oth":120210},
{"abbr":"KY","state":"Kentucky","electors":13,"dem":219484,"rep":115510,"oth":101766},
{"abbr":"LA","state":"Louisiana","electors":10,"dem":60871,"rep":3833,"oth":9283},
{"abbr":"ME","state":"Maine","electors":6,"dem":51113,"rep":26545,"oth":48495},
{"abbr":"MD","state":"Maryland","electors":8,"dem":112674,"rep":54956,"oth":57789},
{"abbr":"MA","state":"Massachusetts","electors":18,"dem":173408,"rep":155948,"oth":142228},
{"abbr":"MI-","state":"Michigan","electors":15,"dem":150751,"rep":152244,"oth":214584},
{"abbr":"SP-","state":"Michigan","electors":15,"dem":150751,"rep":152244,"oth":214584},
{"abbr":"MN","state":"Minnesota","electors":12,"dem":106426,"rep":64334,"oth":125856},
{"abbr":"MS","state":"Mississippi","electors":10,"dem":57324,"rep":1560,"oth":3549},
{"abbr":"MO","state":"Missouri","electors":18,"dem":330746,"rep":207821,"oth":124375},
{"abbr":"MT","state":"Montana","electors":4,"dem":27941,"rep":18512,"oth":22456},
{"abbr":"NE","state":"Nebraska","electors":8,"dem":109008,"rep":54226,"oth":72681},
{"abbr":"NV","state":"Nevada","electors":3,"dem":7986,"rep":3196,"oth":5620},
{"abbr":"NH","state":"New Hampshire","electors":4,"dem":34724,"rep":32927,"oth":17794},
{"abbr":"NJ","state":"New Jersey","electors":14,"dem":178289,"rep":88835,"oth":145410},
{"abbr":"NM","state":"New Mexico","electors":3,"dem":20437,"rep":17733,"oth":8347},
{"abbr":"NY","state":"New York","electors":45,"dem":655573,"rep":455487,"oth":390093},
{"abbr":"NC","state":"North Carolina","electors":12,"dem":144407,"rep":29129,"oth":69135},
{"abbr":"ND","state":"North Dakota","electors":5,"dem":29555,"rep":23090,"oth":25726},
{"abbr":"OH","state":"Ohio","electors":24,"dem":424834,"rep":278168,"oth":229807},
{"abbr":"OK","state":"Oklahoma","electors":10,"dem":119156,"rep":90786,"oth":0},
{"abbr":"OR","state":"Oregon","electors":5,"dem":47064,"rep":34673,"oth":37600},
{"abbr":"PA","state":"Pennsylvania","electors":38,"dem":395637,"rep":273360,"oth":444894},
{"abbr":"RI","state":"Rhode Island","electors":5,"dem":30412,"rep":27703,"oth":16878},
{"abbr":"SC","state":"South Carolina","electors":9,"dem":48357,"rep":536,"oth":1293},
{"abbr":"SD","state":"South Dakota","electors":5,"dem":48942,"rep":0,"oth":58811},
{"abbr":"TN","state":"Tennessee","electors":12,"dem":133021,"rep":60475,"oth":54041},
{"abbr":"TX","state":"Texas","electors":20,"dem":221589,"rep":26755,"oth":28853},
{"abbr":"UT","state":"Utah","electors":4,"dem":36579,"rep":42100,"oth":24174},
{"abbr":"VT","state":"Vermont","electors":4,"dem":15354,"rep":23332,"oth":22132},
{"abbr":"VA","state":"Virginia","electors":12,"dem":90332,"rep":23288,"oth":21776},
{"abbr":"WA","state":"Washington","electors":7,"dem":86840,"rep":70445,"oth":113698},
{"abbr":"WV","state":"West Virginia","electors":8,"dem":113197,"rep":56754,"oth":79112},
{"abbr":"WI","state":"Wisconsin","electors":13,"dem":164230,"rep":130596,"oth":62448},
{"abbr":"WY","state":"Wyoming","electors":3,"dem":15310,"rep":14560,"oth":9232}
],
};



candidates = [
{"year":2012,"candidate":"Barack Obama (D) | Willard Mitt Romney (R)","line": 'Obama rallies union support, city-dwellers, and growing minority populations, wins key states Wisconsin, Ohio, Virginia, and Florida.  Romney has difficulty connecting with non-core Republicans.  Super PAC\'s spend record amounts for advertising.'  },
{"year":2008,"candidate":"Barack Obama (D) | John McCain III (R)","line":"No summary blurb available"},
{"year":2004,"candidate":"George W. Bush (R) | John Kerry (D)","line":"No summary blurb available"},
{"year":2000,"candidate":"George W. Bush (R) | Albert Gore Jr. (D)","line":"No summary blurb available"},
{"year":1996,"candidate":"Bill Clinton (D) | Bob Dole (R)","line":"No summary blurb available"},
{"year":1992,"candidate":"Bill Clinton (D) | George Bush (R)","line":"No summary blurb available"},
{"year":1988,"candidate":"George Bush (R) | Michael Dukakis (D)","line":"No summary blurb available"},
{"year":1984,"candidate":"Ronald Reagan (R) | Walter Mondale (D)","line":"No summary blurb available"},
{"year":1980,"candidate":"Ronald Reagan (R) | Jimmy Carter (D)","line":"No summary blurb available"},
{"year":1976,"candidate":"Jimmy Carter (D) | Gerald Ford (R)","line":"No summary blurb available"},
{"year":1972,"candidate":"Richard Nixon (R) | George McGovern (D)","line":"No summary blurb available"},
{"year":1968,"candidate":"Richard Nixon (R) | Hubert Humphrey (D) | George Wallace (I)", line:"In 1968, President Johnson, despite his shepherding of the Civil Rights and Voting Rights acts through Congress, was reviled by the left because of the war in Vietnam. His vice president, Hubert H. Humphrey, a longtime champion of worker and minority rights, was running for president, but a large contingent of the formidable youth vote that year wore \"Dump the Hump\" buttons because of his association with LBJ's war policies. Speaking before the House Un-American Activities Committee in December 1968, Tom Hayden, one of the founders of the radical activist group Students for a Democratic Society, told the congressmen, \"I think that the election of Richard Nixon, in a sense, shows that the country will continue to run down until people decide to straighten it out. You know, it doesn't really matter to me whether Hubert Humphrey or Richard Nixon is president of the United States.\" In the glare of hindsight, many in the generation Hayden was speaking for have since reassessed the theory that there is no daylight between the parties. Columbia professor Todd Gitlin, a former SDS president himself, said in a 2005 documentary, \"Those who hated the war decided to be so pure as to sit [the election] out. I was one of them. I know very few people who voted in that year, and we were wrong.\" Nixon defeated Humphrey by less than 1 percent of the vote."},
{"year":1964,"candidate":"Lyndon Johnson (D) | Barry Goldwater (R)","line":"No summary blurb available"},
{"year":1960,"candidate":"John Kennedy (D) | Richard Nixon (R)","line":"No summary blurb available"},
{"year":1956,"candidate":"Dwight Eisenhower (R) | Adlai Stevenson (D)","line":"No summary blurb available"},
{"year":1952,"candidate":"Dwight Eisenhower (R) | Adlai Stevenson (D)","line":"No summary blurb available"},
{"year":1948,"candidate":"Harry Truman (D) | Thomas Dewey (R) | J. Strom Thurmond (I)","line":"No summary blurb available"},
{"year":1944,"candidate":"Franklin Roosevelt (D) | Thomas Dewey (R)","line":"No summary blurb available"},
{"year":1940,"candidate":"Franklin Roosevelt (D) | Wendell Willkie (R)","line":"No summary blurb available"},
{"year":1936,"candidate":"Franklin Roosevelt (D) | Alfred Landon (R)","line":"No summary blurb available"},
{"year":1932,"candidate":"Franklin Roosevelt (D) | Herbert Hoover (R)","line":"No summary blurb available"},
{"year":1928,"candidate":"Herbert Hoover (R) | Alfred Smith (D)","line":"No summary blurb available"},
{"year":1924,"candidate":"Calvin Coolidge (R) | John Davis (D) | Robert LaFollette (P)","line":"No summary blurb available"},
{"year":1920,"candidate":"Warren Harding (R) | James Cox (D)","line":"No summary blurb available"},
{"year":1916,"candidate":"Woodrow Wilson (D) | Charles Hughes (R)","line":"No summary blurb available"},
{"year":1912,"candidate":"Woodrow Wilson (D) | Theodore Roosevelt (P) | William Taft (R)","line": 'With the support of anti-gold standard, isolationist, anti-banks-and-railroads William Jennings Bryan, Wilson is nominated in a contentious Democratic convention.  When the conservative wing of the Republicans chooses task-oriented, idealistic, sometimes erudite Taft instead of a reemergent Roosevelt, the Progressive Party is born.  With the Republican Party fractured by mismanagement, Wilson wins handily.'  }
];


////////////////ANGULAR START///////////////////////
function Tester($scope) {
$scope.items = [
    {year:'1912', candidate:"Woodrow Wilson (D) | Theodore Roosevelt (P) | William Taft (R)", line: 'With the support of anti-gold standard, isolationist, anti-banks-and-railroads William Jennings Bryan, Wilson is nominated in a contentious Democratic convention.  When the conservative wing of the Republicans chooses task-oriented, idealistic, sometimes erudite Taft instead of a reemergent Roosevelt, the Progressive Party is born.  With the Republican Party fractured by mismanagement, Wilson wins handily.'  },
    {year:'1916', candidate:"Woodrow Wilson (D) | Charles Hughes (R)", line:"No summary blurb available"},
    {year:'1920', candidate:"Warren Harding (R) | James Cox (D)", line:"No summary blurb available"},
    {year:'1924', candidate:"Calvin Coolidge (R) | John Davis (D) | Robert LaFollette (P)", line:"No summary blurb available"},
    {year:'1928', candidate:"Herbert Hoover (R) | Alfred Smith (D)", line:"No summary blurb available"},
    {year:'1932', candidate:"Franklin Roosevelt (D) | Herbert Hoover (R)", line:"No summary blurb available"},
    {year:'1936', candidate:"Franklin Roosevelt (D) | Alfred Landon (R)", line:"No summary blurb available"},
    {year:'1940', candidate:"Franklin Roosevelt (D) | Wendell Willkie (R)", line:"No summary blurb available"},
    {year:'1944', candidate:"Franklin Roosevelt (D) | Thomas Dewey (R)", line:"No summary blurb available"},
    {year:'1948', candidate:"Harry Truman (D) | Thomas Dewey (R) | J. Strom Thurmond (I)", line:"No summary blurb available"},
    {year:'1952', candidate:"Dwight Eisenhower (R) | Adlai Stevenson (D)", line:"No summary blurb available"},
    {year:'1956', candidate:"Dwight Eisenhower (R) | Adlai Stevenson (D)", line:"No summary blurb available"},
    {year:'1960', candidate:"John Kennedy (D) | Richard Nixon (R)", line:"No summary blurb available"},
    {year:'1964', candidate:"Lyndon Johnson (D) | Barry Goldwater (R)", line:"No summary blurb available"},
    {year:'1968', candidate:"Richard Nixon (R) | Hubert Humphrey (D) | George Wallace (I)", line:"In 1968, President Johnson, despite his shepherding of the Civil Rights and Voting Rights acts through Congress, was reviled by the left because of the war in Vietnam. His vice president, Hubert H. Humphrey, a longtime champion of worker and minority rights, was running for president, but a large contingent of the formidable youth vote that year wore &#34;Dump the Hump&#34; buttons because of his association with LBJ's war policies. Speaking before the House Un-American Activities Committee in December 1968, Tom Hayden, one of the founders of the radical activist group Students for a Democratic Society, told the congressmen, &#34;I think that the election of Richard Nixon, in a sense, shows that the country will continue to run down until people decide to straighten it out. You know, it doesn't really matter to me whether Hubert Humphrey or Richard Nixon is president of the United States.&#34;&#13;In the glare of hindsight, many in the generation Hayden was speaking for have since reassessed the theory that there is no daylight between the parties. Columbia professor Todd Gitlin, a former SDS president himself, said in a 2005 documentary, Those who hated the war decided to be so pure as to sit [the election] out. I was one of them. I know very few people who voted in that year, and we were wrong.&#13;&#10;Nixon ended up winning by about 1%."},
    {year:'1972', candidate:"Richard Nixon (R) | George McGovern (D)", line:"No summary blurb available"},
    {year:'1976', candidate:"Jimmy Carter (D) | Gerald Ford (R)", line:"No summary blurb available"},
    {year:'1980', candidate:"Ronald Reagan (R) | Jimmy Carter (D)", line:"No summary blurb available"},
    {year:'1984', candidate:"Ronald Reagan (R) | Walter Mondale (D)", line:"No summary blurb available"},
    {year:'1988', candidate:"George Bush (R) | Michael Dukakis (D)", line:"No summary blurb available"},
    {year:'1992', candidate:"Bill Clinton (D) | George Bush (R)", line:"No summary blurb available"},
    {year:'1996', candidate:"Bill Clinton (D) | Bob Dole (R)", line:"No summary blurb available"},
    {year:'2000', candidate:"George W. Bush (R) | Albert Gore Jr. (D)", line:"No summary blurb available"},
    {year:'2004', candidate:"George W. Bush (R) | John Kerry (D)", line:"No summary blurb available"},
    {year:'2008', candidate:"Barack Obama (D) | John McCain III (R)", line:"No summary blurb available"},
    {year:'2012', candidate:"Barack Obama (D) | Willard Mitt Romney (R)", line: 'Obama rallies union support, city-dwellers, and growing minority populations, wins key states Wisconsin, Ohio, Virginia, and Florida.  Romney has difficulty connecting with non-core Republicans.  Super PAC\'s spend record amounts for advertising.'}
];  



    $scope.computeNeeded = function() {
        var length = document.getElementById("quant").value.length
        $scope.len = length;
    };
}
////////////////ANGULAR END///////////////////////


function test (year) {

//    for (var i=0,len=cars.length; i<len; i++) { 
//        document.write(cars[i] + "<br>");
//    }
    for (var ii = 0, len = candidates.length; ii < len; ii++) {
        // $().text("Test Cand LEngth: ").appendTo('#amount'); 
        // $('#amount').text(candidates[3].year + " " + candidates[3].candidate);
        if (year == candidates[ii].year) {
            $('#amount').text(candidates[ii].year + " - " + candidates[ii].candidate);
            $('#line').text(candidates[ii].line);
        }
    }
};


//document.getElementById("tester").innerHTML=data.pres2008[0].state;
//iterates over each object in PRES2008 and lists the state attr and changes #+st based on rep/dem comparison
test(1912);
i = 0;
$(data.pres1912).each(function() {
    st = data.pres1912[i].abbr;
    if (data.pres1912[i].dem > data.pres1912[i].rep && data.pres1912[i].dem > data.pres1912[i].oth) {
        $('#' + st).attr('class', 'blue');
    } else if (data.pres1912[i].rep > data.pres1912[i].dem && data.pres1912[i].rep > data.pres1912[i].oth) {
        $('#' + st).attr('class', 'red');
    } else {
        $('#' + st).attr('class', 'green');
    };

    i++;
});
$('#HI').attr('class', 'grey');
$('#AK').attr('class', 'grey');

//iterates through class=grey and appends the ids to placeholder
//$('.grey').each(function() {
//    st = $(this).attr('id');
//    $placeholder.append(st+'<br/>');
//});

//adds the id attr to the placeholder div for each state with class = grey
//$(document).ready(function () {
//    $('.grey').hover(
//    function () {
//        st = $(this).attr('id');
//        $placeholder.html(st);
//    },
//    function () {
//        $(this).attr('class', 'grey');
//    });
//});


$("#button2012").mouseenter(function () {
//    slice the ID attribute to get the year
//    var year = $(this).attr("id");
//    year = year.slice(6);
//    $('#amount').val(year);
    me = String($(this).attr("id"));
    year = me.substr(me.length - 4);
    test(year);

    i = 0;
    $(data.pres2012).each(function () {
        st = data.pres2012[i].abbr;
        if (data.pres2012[i].dem > data.pres2012[i].rep) {
            $('#' + st).attr('class', 'blue');
        } else {
            $('#' + st).attr('class', 'red');
        };
        i++;
    });
});

$("#button2008").mouseenter(function () {
    //    $img.addClass("notVisible");
    //    $("#img1912").removeClass("notVisible");
    //    $('#amount').val('1912');

    me = String($(this).attr("id"));
    year = me.substr(me.length - 4);
    test(year);

    i = 0;
    $(data.pres2008).each(function () {
        st = data.pres2008[i].abbr;
        //$tester.append(st);
        if (data.pres2008[i].dem > data.pres2008[i].rep) {
            $('#' + st).attr('class', 'blue');
        } else {
            $('#' + st).attr('class', 'red');
        };
        i++;
    });
});

$("#button2004").mouseenter(function () {
    me = String($(this).attr("id"));
    year = me.substr(me.length - 4);
    test(year);

    i = 0;
    $(data.pres2004).each(function () {
        st = data.pres2004[i].abbr;
        if (data.pres2004[i].dem > data.pres2004[i].rep) {
            $('#' + st).attr('class', 'blue');
        } else {
            $('#' + st).attr('class', 'red');
        };
        i++;
    });
});


$("#button2000").mouseenter(function () {
    me = String($(this).attr("id"));
    year = me.substr(me.length - 4);
    test(year);

    i = 0;
    $(data.pres2000).each(function () {
        st = data.pres2000[i].abbr;
        if (data.pres2000[i].dem > data.pres2000[i].rep) {
            $('#' + st).attr('class', 'blue');
        } else {
            $('#' + st).attr('class', 'red');
        };

        i++;
    });
});

$("#button1996").mouseenter(function () {

    me = String($(this).attr("id"));
    year = me.substr(me.length - 4);
    test(year);

    i = 0;
    $(data.pres1996).each(function () {
        st = data.pres1996[i].abbr;
        if (data.pres1996[i].dem > data.pres1996[i].rep) {
            $('#' + st).attr('class', 'blue');
        } else {
            $('#' + st).attr('class', 'red');
        };

        i++;
    });
});

$("#button1992").mouseenter(function () {

    me = String($(this).attr("id"));
    year = me.substr(me.length - 4);
    test(year);

    i = 0;
    $(data.pres1992).each(function () {
        st = data.pres1992[i].abbr;
        if (data.pres1992[i].dem > data.pres1992[i].rep) {
            $('#' + st).attr('class', 'blue');
        } else {
            $('#' + st).attr('class', 'red');
        };

        i++;
    });
});

$("#button1988").mouseenter(function () {
    
    me = String($(this).attr("id"));
    year = me.substr(me.length - 4);
    test(year);


    i = 0;
    $(data.pres1988).each(function () {
        st = data.pres1988[i].abbr;
        if (data.pres1988[i].dem > data.pres1988[i].rep) {
            $('#' + st).attr('class', 'blue');
        } else {
            $('#' + st).attr('class', 'red');
        };

        i++;
    });
});

$("#button1984").mouseenter(function () {
    
    me = String($(this).attr("id"));
    year = me.substr(me.length - 4);
    test(year);

    i = 0;
    $(data.pres1984).each(function () {
        st = data.pres1984[i].abbr;
        if (data.pres1984[i].dem > data.pres1984[i].rep) {
            $('#' + st).attr('class', 'blue');
        } else {
            $('#' + st).attr('class', 'red');
        };

        i++;
    });
});

$("#button1980").mouseenter(function () {
    
    me = String($(this).attr("id"));
    year = me.substr(me.length - 4);
    test(year);

    i = 0;
    $(data.pres1980).each(function () {
        st = data.pres1980[i].abbr;
        if (data.pres1980[i].dem > data.pres1980[i].rep) {
            $('#' + st).attr('class', 'blue');
        } else {
            $('#' + st).attr('class', 'red');
        };

        i++;
    });
});

$("#button1976").mouseenter(function () {
    
    me = String($(this).attr("id"));
    year = me.substr(me.length - 4);
    test(year);

    i = 0;
    $(data.pres1976).each(function () {
        st = data.pres1976[i].abbr;
        if (data.pres1976[i].dem > data.pres1976[i].rep) {
            $('#' + st).attr('class', 'blue');
        } else {
            $('#' + st).attr('class', 'red');
        };

        i++;
    });
});

$("#button1972").mouseenter(function () {
    
    me = String($(this).attr("id"));
    year = me.substr(me.length - 4);
    test(year);

    i = 0;
    $(data.pres1972).each(function () {
        st = data.pres1972[i].abbr;
        if (data.pres1972[i].dem > data.pres1972[i].rep) {
            $('#' + st).attr('class', 'blue');
        } else {
            $('#' + st).attr('class', 'red');
        };

        i++;
    });
});

$("#button1968").mouseenter(function () {
    
    me = String($(this).attr("id"));
    year = me.substr(me.length - 4);
    test(year);

    i = 0;
    $(data.pres1968).each(function () {
        st = data.pres1968[i].abbr;
        if (data.pres1968[i].dem > data.pres1968[i].rep && data.pres1968[i].dem > data.pres1968[i].oth) {
            $('#' + st).attr('class', 'blue');
        } else if (data.pres1968[i].rep > data.pres1968[i].dem && data.pres1968[i].rep > data.pres1968[i].oth) {
            $('#' + st).attr('class', 'red');
        } else {
            $('#' + st).attr('class', 'green');
        };

        i++;
    });
});

$("#button1964").mouseenter(function () {
    
    me = String($(this).attr("id"));
    year = me.substr(me.length - 4);
    test(year);

    i = 0;
    $(data.pres1964).each(function () {
        st = data.pres1964[i].abbr;
        if (data.pres1964[i].dem > data.pres1964[i].rep) {
            $('#' + st).attr('class', 'blue');
        } else {
            $('#' + st).attr('class', 'red');
        };

        i++;
    });
});

$("#button1960").mouseenter(function () {
    
    me = String($(this).attr("id"));
    year = me.substr(me.length - 4);
    test(year);

    i = 0;
    $(data.pres1960).each(function () {
        st = data.pres1960[i].abbr;
        if (data.pres1960[i].dem > data.pres1960[i].rep) {
            $('#' + st).attr('class', 'blue');
        } else {
            $('#' + st).attr('class', 'red');
        };

        i++;
    });
});

$("#button1956").mouseenter(function () {
    
    me = String($(this).attr("id"));
    year = me.substr(me.length - 4);
    test(year);

    i = 0;
    $(data.pres1956).each(function () {
        st = data.pres1956[i].abbr;
        if (data.pres1956[i].dem > data.pres1956[i].rep) {
            $('#' + st).attr('class', 'blue');
        } else {
            $('#' + st).attr('class', 'red');
        };

        i++;
    });
    $('#HI').attr('class', 'grey');
    $('#AK').attr('class', 'grey');
});

$("#button1952").mouseenter(function () {
    
    me = String($(this).attr("id"));
    year = me.substr(me.length - 4);
    test(year);

    i = 0;
    $(data.pres1952).each(function () {
        st = data.pres1952[i].abbr;
        if (data.pres1952[i].dem > data.pres1952[i].rep) {
            $('#' + st).attr('class', 'blue');
        } else {
            $('#' + st).attr('class', 'red');
        };

        i++;
    });
    $('#HI').attr('class', 'grey');
    $('#AK').attr('class', 'grey');
});

$("#button1948").mouseenter(function () {
    
    me = String($(this).attr("id"));
    year = me.substr(me.length - 4);
    test(year);

    i = 0;
    $(data.pres1948).each(function () {
        st = data.pres1948[i].abbr;
        if (data.pres1948[i].dem > data.pres1948[i].rep && data.pres1948[i].dem > data.pres1948[i].oth) {
            $('#' + st).attr('class', 'blue');
        } else if (data.pres1948[i].rep > data.pres1948[i].dem && data.pres1948[i].rep > data.pres1948[i].oth) {
            $('#' + st).attr('class', 'red');
        } else {
            $('#' + st).attr('class', 'green');
        };

        i++;
    });
    $('#HI').attr('class', 'grey');
    $('#AK').attr('class', 'grey');
});

$("#button1944").mouseenter(function () {
    
    me = String($(this).attr("id"));
    year = me.substr(me.length - 4);
    test(year);

    i = 0;
    $(data.pres1944).each(function () {
        st = data.pres1944[i].abbr;
        if (data.pres1944[i].dem > data.pres1944[i].rep) {
            $('#' + st).attr('class', 'blue');
        } else {
            $('#' + st).attr('class', 'red');
        };

        i++;
    });
    $('#HI').attr('class', 'grey');
    $('#AK').attr('class', 'grey');
});

$("#button1940").mouseenter(function () {
    
    me = String($(this).attr("id"));
    year = me.substr(me.length - 4);
    test(year);

    i = 0;
    $(data.pres1940).each(function () {
        st = data.pres1940[i].abbr;
        if (data.pres1940[i].dem > data.pres1940[i].rep) {
            $('#' + st).attr('class', 'blue');
        } else {
            $('#' + st).attr('class', 'red');
        };

        i++;
    });
    $('#HI').attr('class', 'grey');
    $('#AK').attr('class', 'grey');
});

$("#button1936").mouseenter(function () {
    
    me = String($(this).attr("id"));
    year = me.substr(me.length - 4);
    test(year);

    i = 0;
    $(data.pres1936).each(function () {
        st = data.pres1936[i].abbr;
        if (data.pres1936[i].dem > data.pres1936[i].rep) {
            $('#' + st).attr('class', 'blue');
        } else {
            $('#' + st).attr('class', 'red');
        };

        i++;
    });
    $('#HI').attr('class', 'grey');
    $('#AK').attr('class', 'grey');
});

$("#button1932").mouseenter(function () {
    
    me = String($(this).attr("id"));
    year = me.substr(me.length - 4);
    test(year);

    i = 0;
    $(data.pres1932).each(function () {
        st = data.pres1932[i].abbr;
        if (data.pres1932[i].dem > data.pres1932[i].rep) {
            $('#' + st).attr('class', 'blue');
        } else {
            $('#' + st).attr('class', 'red');
        };

        i++;
    });
    $('#HI').attr('class', 'grey');
    $('#AK').attr('class', 'grey');
});

$("#button1928").mouseenter(function () {
    
    me = String($(this).attr("id"));
    year = me.substr(me.length - 4);
    test(year);

    i = 0;
    $(data.pres1928).each(function () {
        st = data.pres1928[i].abbr;
        if (data.pres1928[i].dem > data.pres1928[i].rep) {
            $('#' + st).attr('class', 'blue');
        } else {
            $('#' + st).attr('class', 'red');
        };

        i++;
    });
    $('#HI').attr('class', 'grey');
    $('#AK').attr('class', 'grey');
});

$("#button1924").mouseenter(function () {
    
    me = String($(this).attr("id"));
    year = me.substr(me.length - 4);
    test(year);

    i = 0;
    $(data.pres1924).each(function () {
        st = data.pres1924[i].abbr;
        if (data.pres1924[i].dem > data.pres1924[i].rep && data.pres1924[i].dem > data.pres1924[i].oth) {
            $('#' + st).attr('class', 'blue');
        } else if (data.pres1924[i].rep > data.pres1924[i].dem && data.pres1924[i].rep > data.pres1924[i].oth) {
            $('#' + st).attr('class', 'red');
        } else {
            $('#' + st).attr('class', 'green');
        };

        i++;
    });
    $('#HI').attr('class', 'grey');
    $('#AK').attr('class', 'grey');
});

$("#button1920").mouseenter(function () {
    
    me = String($(this).attr("id"));
    year = me.substr(me.length - 4);
    test(year);

    i = 0;
    $(data.pres1920).each(function () {
        st = data.pres1920[i].abbr;
        if (data.pres1920[i].dem > data.pres1920[i].rep) {
            $('#' + st).attr('class', 'blue');
        } else {
            $('#' + st).attr('class', 'red');
        };

        i++;
    });
    $('#HI').attr('class', 'grey');
    $('#AK').attr('class', 'grey');
});

$("#button1916").mouseenter(function () {
    
    me = String($(this).attr("id"));
    year = me.substr(me.length - 4);
    test(year);

    i = 0;
    $(data.pres1916).each(function () {
        st = data.pres1916[i].abbr;
        if (data.pres1916[i].dem > data.pres1916[i].rep) {
            $('#' + st).attr('class', 'blue');
        } else {
            $('#' + st).attr('class', 'red');
        };

        i++;
    });
    $('#HI').attr('class', 'grey');
    $('#AK').attr('class', 'grey');
});

$("#button1912").mouseenter(function () {
    
    me = String($(this).attr("id"));
    year = me.substr(me.length - 4);
    test(year);

    i = 0;
    $(data.pres1912).each(function () {
        st = data.pres1912[i].abbr;
        if (data.pres1912[i].dem > data.pres1912[i].rep && data.pres1912[i].dem > data.pres1912[i].oth) {
            $('#' + st).attr('class', 'blue');
        } else if (data.pres1912[i].rep > data.pres1912[i].dem && data.pres1912[i].rep > data.pres1912[i].oth) {
            $('#' + st).attr('class', 'red');
        } else {
            $('#' + st).attr('class', 'green');
        };

        i++;
    });
    $('#HI').attr('class', 'grey');
    $('#AK').attr('class', 'grey');
});