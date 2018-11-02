/*
Uses:
	https://github.com/blueimp/JavaScript-MD5
*/

var all_matches = [];
var required_orders = [];
var discarded_orders = [];

var to_discard = [
"e7e5d13b3d1e1e7c95b37182bea8126c",
"d23601edb11aba03a14923b40de33445",
"cdd724c3b570bdc48c21265c6af0fa2d",
"e5f679132f9689059bbc966c1324e9df",
"eb9068667daf03ce32c1675c18a2d725",
"37bb3409b17c12dd01932c853bc621f2",
"2b8ab9e8898edb3cc18711d1cdd0f49b",
"4cd7fc77e06f36abc6788e6db15aebdd",
"9e10e674bf4d58ca927d3a614720eb29",
"9d1338e02b3485e6325f6c11e603fca0",
"4c0f8db71558416ecdc891906b6b6989",
"0739fef9d2f490445da5c7b684d2dcca",
"1856d2186b0ad43d9ec96e14a8d3ea0d",
"d61d564e2fe53ae839625a09bb5fe18b",
"ae580fbd49caae3604cd03546705c309",
"cdb731ae493f61c438be4684156d3611",
"78becbfab6f9fe776ef57f1c96eb5438",
"08f915015ad412a88a4c6a7b86fcecef",
"14ef907680ac323935f6409f30995564",
"e58cefb59ce2fedc0f8931b3a6c424bb",
"8e71b3fd5f7369c0a671331912dfce78",
"339c53b14b653d39332614d71a033b34",
"33cf6d7b283e2329e51093508e8904a5",
"8a81fec6ea93b0e9cefc2daec77da9f9",
"540f3c12ee8a8c3201d3c40bdf9a61c1",
"3a206295b7a79e65035a09e80c5ab6cd",
"ddd0434064df41e8cddda95de5749e7c",
"ccab2de5d0700da1bfdb67f0fd509e95",
"a36b9259c92f06c476cf9f987454b0b6",
"bedcb899592aa7bf1a90571a66aca14f",
"297a0ee96d8e3c3c640ad33a3af756ff",
"6f3022b91e52a3bd4b0fa24bba487abb",
"ccdcc886124fa2b476bf9010fbfaddfc",
"84825f3e3825921576cb21af8ccc2c75",
"e425bb84d8b33a23c2b4a06943be69dd",
"cc347138493e3bb49d1c32d564d7b43e",
"7dd2a94795d8b26549d2f4ffee2fa1be",
"68d16a58e7f867fbdd330cf2105a8d5f",
"046258ee5fa8f8a0215c60e42486110f",
"2d878a40aac57aad9ef21b19603eca08",
"c72c2c68e9b9a78d495ac6ed423e9324",
"acb0d4e5d3bf49705cdf65d043b188f7",
"51b3f292340304dce734350ed9b75085",
"c47ff116ff631573c76f58703a209a93",
"ef24eff55955c5768d2efc4931a7ac99",
"03982236b497ec4a97b52979871da243",
"25a7f2731962fdb2aeed1adcd398e12b",
"92990f6cb2d1c9df0290835827cd5861",
"9cbf3859fe6fce5130dbc1863911821d",
"719b1a66150fca5424c227705df9b6b9",
"d3306c431d0e48b3098ccd7a6a45daab",
"cf1f7c255a752cd83a276b445cb2861b",
"23cb2ff4b482431fd36494b02e00ab97",
"c2802cf12cca677f3b8da0ba60b44ecd",
"43fed17b479b30c916576c621e226c68",
"1f53543a345d5873c8a964a334f2a047",
"12be551e798284c773f2741171369a1b",
"08395ac20048af780e47d8545bce1b46",
"bcd878aeb07e33736d52aaf5ee8a466c",
"2417a1f3fa810d8a4d439c5b621695bc",
"bbc1f415f4e9bcb3fb3221a9a477439a",
"b367e87cf74a4bdfdb67a185d8dd62dd",
"f9b6f898ce85f279f5c041b66677977a",
"88940269d40f1c553213fa9f06e96620",
"db04a2fad233486493b2bbcc7448b90b",
"c7b62a3e68fbb3245e3947c597e7e35c",
"83a2655a0f29d25a2f39c09c59e75a93",
"12d8bd4efa804fa3723a22970a468aae",
"5e2a81ce3919458d92d2d8ba95443d0e",
"8376d871716599d98aa6642e47d65b06",
"e75151be18bc1e1223da95734f7757e6",
"a91008a12112490d903261bbcefb1d02",
"6fc186accc5e048bef2083b255902037",
"003cd685fb299734db68e190439bc435",
"2c4c47dda8995d17b469be85f42d3ddd",
"1d71c30f9d0e150b1559e129269ff20c",
"7f9ceeb44d80cfaf9ed0130c73600c85",
"2829dd1da7683b9ec750e2bdca9054df",
"9aa555c147d3892dae9476d82484e5c5",
"ea2dfb586e12e263429f03b6e6e1c29c",
"faabb0e73ff6b47895ab0d32aad6d173",
"3c29e51f092feea8d55d15149690f6b5",
"43c85c98f8c0841b393cb0b77decae25",
"38a9a79fc2564b08b3d4ddd32178a2a3",
"771b30c5189cd262e9a437daf6762f96",
"67e050b486433515bd5f013669ce09b5",
"fb6335f85aa4eb794b3a9e93f5e1a715",
"693a53684bbdf7f3f301ffaa402ac7aa",
"650b92dea16e2250f131d3085092ed71",
"16345b857965f434213e9622213f1a40",
"4d30e065f4b713b427b7c4d1004855d5",
"4ebbe552f93ade87cb60a0b71d7f9d11",
"78b56b070ab42d8af59f3683b0aabb20",
"cfd9e0e3c21de39c31d2ff24943c9daf",
"96bfae418759cf638c08963aec187f90",
"10e59bd288598e2b42c4d3aaa6759edc",
"efb4dc6ce0e5d144a096924998a5e026",
"29c1174d8ed69b278cc14efe3afa2dcf",
"231f8f292b5a4546357dd9b98445f818",
"3f4d3f44dc3642a48638d54be1f3cd2e",
"4796f292ab80baaaa2bcbbde7c9e6453",
"2c1270fe401351157e8100a91e9dc7dd",
"eafe1a51a969403752272b537f6fe489",
"4c29092cc337777a51db76fbe0515011",
"93c81550c46ae7a268789343c9ebfb1d",
"6806eb963f6fb8cc221f17ab8ca960d2",
"c271988f6b622a0bcfcb8f7ac65f5cf0",
"38b0ba9aa2b57b634721b675095eaa97",
"3d029fc77325222f528bb4eb56faf66a",
"eb35cbacd58976fa7cce593e801db261",
"6465d891b30cc380817a0e72dd2ad3d3",
"6a2200cb6a1d3fed0aba48040ab2e8db",
"d293791597c130f8c77bb8375a90df1f",
"331ae79da0edaf9e8e2c54bcfaa405f2",
"c870c815d8a6900975dde626547a89c1",
"5f34493fe77668cefb66c38094ea1aef",
"f94dfbd7e44fad7bb41e35d3d6b32f86",
"016a8d60c4f05aefbb5bdbce0562af85",
"a7ee3edc02dfed200a6fbfbb1f235406",
"a768d83fc0760c7c728027d2cf9b935c",
"008fc25646b67813937430be67836adc",
"6ad1652f286f8744474e42e9ae722249",
"7331fe01734cddbf5db14faefe151f0a",
"09d022abffea2caf772596d1d55637d5",
"12902a37c3d43d6d85d287b949014e73",
"0e548d20569bc26508169fea84f74df1",
"d2b7106ce86bf56a3fe7c3c8f7f9c38e",
"4ac2ac6fa6ca7bb9cfe8871c134ba124",
"390e80251655d86841e9d851d9e914e4",
"3a63dd879e29c68828293050f1aee6a8",
"7eeea492ac667f2f07f0135f6c4d2b3e",
"c236808bd65c8aea10e0a2aea74e4ded",
"17a07d0340a8a7cba6bc458aa692cf89",
"fd18a3f9bf93b471233a72260996c3cc",
"0eca19dd729a1a6e52bc6b9e623167e5",
"7ae1a601b296db7879fbac8f51bd9771",
"b90d355157aeccb4742881e3d708b719",
"84137ff38b93efd3746b7d8e6305af46",
"a1227378f33608c57168c6cac05d2b88",
"d1af1421fa95265d6c1e16934c19bb18",
"735b06ec5a8d7528834640bc6cb1bfbc",
"58f204314bb217a90109306097e3d04c",
"4d97f59d6d76531d41cd34c31c092bec",
"4059323cf836ebe62ab9091ff2c40ebe",
"ac4d1b127e974bfa6c296bfe090287dd",
"c63e50eef69c6985bcda12f05cf9da86",
"66585e5c91476f6c72770ffca73c57f8",
"0ebcca64c1f519c561886cbc1f4a5f37",
"64518560e0182a4a0280cce78368a5a0",
"b543c8fba960a69d1d34eeeaad5915ab",
"36f1043ecf067dabe62f1772f9f9b386",
"b3e34099a999a19b073a9a46b0a1ba7d",
"8822a2dcabaf2fe6186687bb75cd82bc",
"28dea2d53177c9e7d7b147f33c9570d2",
"2095156233bb15dfcc38a2f5cd4d9a26",
"ec2aa7cd42927ded76fc827f8aea6c15",
"1f39597bbc4bcfcdd445f9a82b480ac7",
"144e87d9ab51aba1b2f53586415c5861",
"eb4845fffd25220d865319488e6a0124",
"528d2952f8b41a8ed10bf7a71525bd6d",
"08e3040ab31e5d9a29b695e97cac3c54",
"d0be7835bc8bf4993e6914b13df02684",
"0516481b5e4c6d5418a58aa6d7087849",
"a3e07dcaa52137359e4df77bb5fd00b5",
"ef86027c5b401aeb6939082f23d45c2c",
"5e6771a65cdd6d1d554971b3abffaeb9",
"127c124394916566cf004aafd16406cf",
"df9972b7bf49b3599b314c975151f866"
];

document.getElementById("clean").addEventListener("click", function() {
	var str_raw = document.getElementById('raw').value + "\n\n_";
	str_raw = str_raw.replace(/\r/g, '');
		
	get_matches(str_raw);

	all_matches.sort();

	var str_matches = all_matches.join("\n");
	document.getElementById('sorted').value = str_matches;
});

document.getElementById("clean_2").addEventListener("click", function(){
    document.getElementById('sorted').value = required_orders.join("\n");
    document.getElementById('discarded').value = discarded_orders.join("\n");
});


document.getElementById("printable").addEventListener("click", function(){
    var str = document.getElementById('sorted').value;
    str = str.replace(/\n/g, '\n<br>');
    document.write(str);
/*
    var arr = str.split("\n");
    //console.log(arr);
    //var table = createTable(arr);
    //document.write('');
    //document.appendChild(table);
*/
});

function get_matches(raw) {
	all_matches = [];
	required_orders = [];
	discarded_orders = [];
	
	var regex = document.getElementById('regex').value;
	var matches;
	var reg = RegExp(regex, 'gi');

	while(matches = reg.exec(raw)) {
		all_matches.push(matches[3] + " " + matches[4]);
		var enc = md5(matches[3]);
		var needed = 1;
		for(var x = 0; x < to_discard.length; x++) {
			if(enc.indexOf(to_discard[x]) > -1) {
				needed = 0;
				break;
			}
		}

		if(needed == 1) {
			required_orders.push(matches[3] + " " + matches[4]);
		} else {
			discarded_orders.push(matches[3] + " " + matches[4]);
		}
	}
	return 0;
}
