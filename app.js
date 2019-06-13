var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// TODO: add more data
// TODO: import JSON data
// const data = require("data.json");
// const customers = data.customers;
var data = JSON.parse('{ "customers": [ { "ID": "5d01efb0b59f081b3ab261fe", "name": "Mckee Dunlap", "transactions": [ { "transactionNumber": "5d01efb03b6d67776710c0b1", "date": "2019-05-26T05:12:11Z", "total": 110.78 }, { "transactionNumber": "5d01efb09bca305aba29b0a0", "date": "2019-03-23T04:43:19Z", "total": 41.29 }, { "transactionNumber": "5d01efb035b7c0f1d63b5cc0", "date": "2019-05-25T01:02:45Z", "total": 219.63 }, { "transactionNumber": "5d01efb015ca2e9141d9833f", "date": "2019-04-04T02:29:09Z", "total": 18.69 }, { "transactionNumber": "5d01efb068fcd891f4533f85", "date": "2019-04-15T10:06:47Z", "total": 133.08 } ] }, { "ID": "5d01efb0e81f3da3e7a667aa", "name": "Lou Conner", "transactions": [ { "transactionNumber": "5d01efb0b0e1fe17602149d5", "date": "2019-03-25T03:18:27Z", "total": 79.44 }, { "transactionNumber": "5d01efb0b86dd460a4e8f4fa", "date": "2019-03-04T06:34:06Z", "total": 127.09 }, { "transactionNumber": "5d01efb0793d274ade60c538", "date": "2019-03-29T01:35:48Z", "total": 220.81 }, { "transactionNumber": "5d01efb0396006358f5a5f45", "date": "2019-03-20T09:00:10Z", "total": 163.16 }, { "transactionNumber": "5d01efb0159aa6c36f61873c", "date": "2019-04-13T10:14:14Z", "total": 205.86 }, { "transactionNumber": "5d01efb02795a6b524260c23", "date": "2019-04-20T11:12:48Z", "total": 133.76 }, { "transactionNumber": "5d01efb0af069602500b818b", "date": "2019-03-31T07:21:44Z", "total": 178.1 }, { "transactionNumber": "5d01efb051c887c2a50b2b17", "date": "2019-04-02T01:22:12Z", "total": 117.57 }, { "transactionNumber": "5d01efb0732633f54125dc1e", "date": "2019-05-07T02:56:27Z", "total": 170.74 }, { "transactionNumber": "5d01efb06de5bd054607f8a0", "date": "2019-04-02T01:27:24Z", "total": 40.08 }, { "transactionNumber": "5d01efb0d69768a8cb12ad00", "date": "2019-03-11T08:37:18Z", "total": 202.86 }, { "transactionNumber": "5d01efb0e6e6646fbce53ef6", "date": "2019-04-03T11:25:48Z", "total": 14.87 } ] }, { "ID": "5d01efb03911f1693ac2f9c9", "name": "Elisa Rogers", "transactions": [ { "transactionNumber": "5d01efb0764531f07f1b9028", "date": "2019-05-10T04:36:37Z", "total": 140.25 }, { "transactionNumber": "5d01efb037dc29c8ccfa33c7", "date": "2019-03-28T03:35:59Z", "total": 154.61 }, { "transactionNumber": "5d01efb006beebe163b8715d", "date": "2019-03-27T02:53:53Z", "total": 26.82 }, { "transactionNumber": "5d01efb0b1646d0785506dcf", "date": "2019-04-09T01:35:02Z", "total": 36.2 }, { "transactionNumber": "5d01efb0a465ef21a6b265ea", "date": "2019-03-28T03:06:12Z", "total": 99.28 }, { "transactionNumber": "5d01efb0ed63c87607708523", "date": "2019-05-29T02:25:00Z", "total": 98.25 }, { "transactionNumber": "5d01efb0fff62e31c9cbafe0", "date": "2019-04-17T12:17:45Z", "total": 162.66 }, { "transactionNumber": "5d01efb092d058261ee74e01", "date": "2019-04-20T01:08:37Z", "total": 212 }, { "transactionNumber": "5d01efb04076028a81e4bd6c", "date": "2019-03-11T04:00:27Z", "total": 18.78 }, { "transactionNumber": "5d01efb0e9f386475c555e16", "date": "2019-05-24T03:46:06Z", "total": 155.1 }, { "transactionNumber": "5d01efb0013bd2430bdca437", "date": "2019-04-06T08:54:27Z", "total": 176.49 } ] }, { "ID": "5d01efb08997f6aaa435df13", "name": "Bradley Kerr", "transactions": [ { "transactionNumber": "5d01efb085ba962ac70e8e40", "date": "2019-05-31T04:26:09Z", "total": 207.69 }, { "transactionNumber": "5d01efb00edbe3be58a8f805", "date": "2019-03-01T09:47:22Z", "total": 157.37 }, { "transactionNumber": "5d01efb04abd434d3c294fa5", "date": "2019-03-09T09:05:52Z", "total": 215.78 }, { "transactionNumber": "5d01efb0ed17a17635daa6ea", "date": "2019-05-08T04:47:16Z", "total": 164.72 }, { "transactionNumber": "5d01efb02ae0650c0b1df26b", "date": "2019-05-02T03:40:45Z", "total": 246.89 }, { "transactionNumber": "5d01efb0304d4d02a4b44f30", "date": "2019-05-04T12:47:30Z", "total": 145.81 } ] }, { "ID": "5d01efb030d41c8221f2bc54", "name": "Nichols Gallagher", "transactions": [ { "transactionNumber": "5d01efb0e2a8af39fc8e56eb", "date": "2019-05-09T05:04:23Z", "total": 221.18 }, { "transactionNumber": "5d01efb07c1008593af9c3b3", "date": "2019-03-09T09:47:43Z", "total": 197.04 } ] }, { "ID": "5d01efb0a66ddecf8a044d66", "name": "Morrow Pitts", "transactions": [ { "transactionNumber": "5d01efb0a0956ccc36d5aa92", "date": "2019-04-18T07:00:44Z", "total": 207.19 }, { "transactionNumber": "5d01efb06baf76e42fb0369b", "date": "2019-04-05T03:45:56Z", "total": 198.64 }, { "transactionNumber": "5d01efb0e149d5a42af00073", "date": "2019-04-22T06:32:26Z", "total": 36.2 }, { "transactionNumber": "5d01efb0efcb031a83169716", "date": "2019-04-06T05:38:12Z", "total": 233.22 }, { "transactionNumber": "5d01efb0af04a19f17d048b0", "date": "2019-04-19T12:50:15Z", "total": 188.63 }, { "transactionNumber": "5d01efb04fb5db33296c4ae6", "date": "2019-04-06T10:36:42Z", "total": 67.48 } ] }, { "ID": "5d01efb0781bed0f9387813f", "name": "Miriam Becker", "transactions": [ { "transactionNumber": "5d01efb03bff9e686a3450e3", "date": "2019-05-28T06:58:33Z", "total": 99.92 }, { "transactionNumber": "5d01efb0d524f61d63c38402", "date": "2019-03-03T03:05:17Z", "total": 199.18 }, { "transactionNumber": "5d01efb0c3f536b3ab4954c4", "date": "2019-03-28T05:45:42Z", "total": 71.16 }, { "transactionNumber": "5d01efb02f06a59b34fe70fb", "date": "2019-03-05T01:39:44Z", "total": 116.11 }, { "transactionNumber": "5d01efb05372fd221287a615", "date": "2019-04-27T06:51:01Z", "total": 231.43 }, { "transactionNumber": "5d01efb0157ec16cae340e82", "date": "2019-04-18T04:11:52Z", "total": 246.75 }, { "transactionNumber": "5d01efb00f96d51daf48430a", "date": "2019-05-15T01:52:31Z", "total": 147.23 }, { "transactionNumber": "5d01efb0f17e5ef8b82bd75b", "date": "2019-04-15T12:39:58Z", "total": 169.76 }, { "transactionNumber": "5d01efb03f0e5a9f693e2f2b", "date": "2019-03-02T10:59:47Z", "total": 221.32 }, { "transactionNumber": "5d01efb035d08aa09f5e4aeb", "date": "2019-03-25T03:33:38Z", "total": 10.45 } ] }, { "ID": "5d01efb0fa24c7b58b388321", "name": "Zimmerman Newton", "transactions": [ { "transactionNumber": "5d01efb0b184edd7fb6a5545", "date": "2019-03-31T10:22:07Z", "total": 215.14 }, { "transactionNumber": "5d01efb0d38835522be1a852", "date": "2019-05-31T05:58:53Z", "total": 228.77 }, { "transactionNumber": "5d01efb074f85f2b5031222c", "date": "2019-04-19T06:17:50Z", "total": 182.6 }, { "transactionNumber": "5d01efb080ea8449c4786d50", "date": "2019-03-10T05:21:58Z", "total": 245.05 }, { "transactionNumber": "5d01efb0da82a59b366a1410", "date": "2019-05-03T03:47:34Z", "total": 240.66 }, { "transactionNumber": "5d01efb00ae1b7963d86d1d0", "date": "2019-04-10T06:05:17Z", "total": 139.33 }, { "transactionNumber": "5d01efb0f2a25b2b5baa5686", "date": "2019-05-07T11:55:48Z", "total": 103.06 }, { "transactionNumber": "5d01efb09d083e565a3dccc5", "date": "2019-04-24T10:23:14Z", "total": 157.72 }, { "transactionNumber": "5d01efb050ade0972c3606db", "date": "2019-03-30T05:33:51Z", "total": 148.03 }, { "transactionNumber": "5d01efb0852894820fa81aa9", "date": "2019-03-06T07:19:12Z", "total": 78.76 }, { "transactionNumber": "5d01efb01b4da4d613ca2f5e", "date": "2019-03-03T12:26:09Z", "total": 28.08 }, { "transactionNumber": "5d01efb0be54bb0af36314e7", "date": "2019-03-26T04:45:43Z", "total": 53.53 } ] }, { "ID": "5d01efb0e9cd8de57c049a26", "name": "Shaffer Morse", "transactions": [ { "transactionNumber": "5d01efb069dd61731ee6efb9", "date": "2019-05-05T10:43:59Z", "total": 141.92 }, { "transactionNumber": "5d01efb0c8863b39200b61a2", "date": "2019-05-21T08:24:17Z", "total": 227.69 }, { "transactionNumber": "5d01efb0c1ba4c63d7eb36b7", "date": "2019-04-03T11:51:02Z", "total": 88.95 }, { "transactionNumber": "5d01efb0c82f704c32503e40", "date": "2019-03-11T06:41:43Z", "total": 212.16 }, { "transactionNumber": "5d01efb0efa1f38a4cc02f61", "date": "2019-04-28T09:31:02Z", "total": 225.94 }, { "transactionNumber": "5d01efb0ad947e373691d721", "date": "2019-04-10T08:56:37Z", "total": 53.57 }, { "transactionNumber": "5d01efb0ee9f572df791573b", "date": "2019-05-02T04:53:08Z", "total": 37.65 }, { "transactionNumber": "5d01efb079b2b341d48ec959", "date": "2019-04-14T10:37:14Z", "total": 215.25 }, { "transactionNumber": "5d01efb0a1d3e4822a512c4d", "date": "2019-04-25T06:23:32Z", "total": 69.71 }, { "transactionNumber": "5d01efb013b75ea39eeb7ea6", "date": "2019-05-11T10:07:01Z", "total": 73.68 }, { "transactionNumber": "5d01efb0bb2cb76f1004cd10", "date": "2019-04-18T07:08:23Z", "total": 142.92 }, { "transactionNumber": "5d01efb055f4f9c0c65599db", "date": "2019-05-26T12:37:46Z", "total": 65.63 }, { "transactionNumber": "5d01efb0dd3d9abbc9c7d090", "date": "2019-05-25T09:30:24Z", "total": 81.28 } ] }, { "ID": "5d01efb07516328c778fab7d", "name": "Gonzales Maynard", "transactions": [ { "transactionNumber": "5d01efb01234521048fe90f1", "date": "2019-04-08T09:45:24Z", "total": 137.63 }, { "transactionNumber": "5d01efb0912482eb370e0ea7", "date": "2019-03-11T08:32:11Z", "total": 147.44 }, { "transactionNumber": "5d01efb0face5e8e074a9ba3", "date": "2019-03-21T06:12:29Z", "total": 103.54 } ] }, { "ID": "5d01efb0dabe38158e8767c6", "name": "Gibbs Love", "transactions": [ { "transactionNumber": "5d01efb0afcf9a28e865b084", "date": "2019-04-12T12:59:38Z", "total": 185.16 }, { "transactionNumber": "5d01efb0ede21cc3b4bd7c1b", "date": "2019-03-08T06:00:21Z", "total": 187.29 }, { "transactionNumber": "5d01efb0a9f18b2853194d15", "date": "2019-05-27T05:18:32Z", "total": 77.35 }, { "transactionNumber": "5d01efb081797d5e8108d2a3", "date": "2019-05-10T04:43:51Z", "total": 115.14 }, { "transactionNumber": "5d01efb066e84fd5e0badcfa", "date": "2019-04-23T08:13:43Z", "total": 139.45 }, { "transactionNumber": "5d01efb0f89a61e8073985fe", "date": "2019-04-04T11:07:34Z", "total": 207.72 }, { "transactionNumber": "5d01efb095fe6f084ef20189", "date": "2019-05-11T12:14:39Z", "total": 22.32 }, { "transactionNumber": "5d01efb0b1cdfc7701b3bdd9", "date": "2019-04-07T12:59:18Z", "total": 58 }, { "transactionNumber": "5d01efb03d4f134be6528ee9", "date": "2019-03-16T06:39:46Z", "total": 225.88 } ] }, { "ID": "5d01efb00f32ea6e451c2a74", "name": "Carly Welch", "transactions": [ { "transactionNumber": "5d01efb0e59a0ded5a383270", "date": "2019-05-14T03:03:37Z", "total": 194.1 }, { "transactionNumber": "5d01efb0dce91ebce3c7ec7b", "date": "2019-04-07T02:16:10Z", "total": 106.58 } ] }, { "ID": "5d01efb0ff9c91b82576c5ea", "name": "Melton Harvey", "transactions": [ { "transactionNumber": "5d01efb0fb466e20e9bc2025", "date": "2019-04-06T01:17:09Z", "total": 124.35 }, { "transactionNumber": "5d01efb0b6bf532f384795fb", "date": "2019-03-04T10:49:21Z", "total": 105.36 }, { "transactionNumber": "5d01efb01c985d7ff0f20f98", "date": "2019-03-05T02:18:14Z", "total": 116.42 }, { "transactionNumber": "5d01efb0d483dc6180ae9e82", "date": "2019-03-22T08:50:07Z", "total": 210.82 } ] }, { "ID": "5d01efb00d675853aacc6420", "name": "Savannah Snow", "transactions": [ { "transactionNumber": "5d01efb075e8dc0084093082", "date": "2019-03-19T12:58:59Z", "total": 114.25 }, { "transactionNumber": "5d01efb060138a59b002b410", "date": "2019-03-21T10:09:19Z", "total": 105.69 }, { "transactionNumber": "5d01efb04240ca7ca0a5736d", "date": "2019-03-08T03:16:27Z", "total": 225.48 }, { "transactionNumber": "5d01efb02f3fbcfe2eca41dd", "date": "2019-05-01T02:34:18Z", "total": 58.38 }, { "transactionNumber": "5d01efb0e6073c52530c9d2a", "date": "2019-05-12T03:55:47Z", "total": 220.23 }, { "transactionNumber": "5d01efb074d6d85992fce724", "date": "2019-03-27T06:29:07Z", "total": 123.27 }, { "transactionNumber": "5d01efb0566b166d76ddb5aa", "date": "2019-04-20T02:53:51Z", "total": 159.07 }, { "transactionNumber": "5d01efb09f5dcf456faedbf2", "date": "2019-04-26T12:02:07Z", "total": 83.39 }, { "transactionNumber": "5d01efb0f693fd27432b6676", "date": "2019-05-26T06:07:31Z", "total": 228.56 }, { "transactionNumber": "5d01efb0bf00c8378b97724c", "date": "2019-05-28T02:07:59Z", "total": 31.34 }, { "transactionNumber": "5d01efb0a5cb50449a0c2cf2", "date": "2019-03-08T11:28:31Z", "total": 180.03 }, { "transactionNumber": "5d01efb09007a45a04b65dc1", "date": "2019-05-12T11:28:10Z", "total": 146.16 }, { "transactionNumber": "5d01efb07de52fd082ffb3ee", "date": "2019-05-05T12:06:31Z", "total": 169.41 }, { "transactionNumber": "5d01efb042e73d27dea48b35", "date": "2019-03-22T10:13:07Z", "total": 42.73 }, { "transactionNumber": "5d01efb09a5de7b12f1bcc19", "date": "2019-05-03T07:31:27Z", "total": 166.04 } ] }, { "ID": "5d01efb015c4055f18b58bca", "name": "Pitts Hodge", "transactions": [ { "transactionNumber": "5d01efb0bf0b105771227a23", "date": "2019-03-22T10:19:59Z", "total": 241.23 }, { "transactionNumber": "5d01efb00f1b3d54b402aa1b", "date": "2019-05-12T05:22:31Z", "total": 49.69 } ] }, { "ID": "5d01efb03a97a04e94a05554", "name": "Stephenson Fuentes", "transactions": [ { "transactionNumber": "5d01efb06c72b8d8be4b070c", "date": "2019-04-21T04:27:26Z", "total": 209.43 }, { "transactionNumber": "5d01efb03b9e8595de96252b", "date": "2019-04-08T10:24:42Z", "total": 92.45 }, { "transactionNumber": "5d01efb0a81274b562fb888a", "date": "2019-05-28T02:53:39Z", "total": 218.12 }, { "transactionNumber": "5d01efb0358eb1a918668f52", "date": "2019-03-25T04:36:20Z", "total": 127.93 }, { "transactionNumber": "5d01efb0686c1d4e959f844b", "date": "2019-04-19T06:34:35Z", "total": 126.11 }, { "transactionNumber": "5d01efb041408965458f177f", "date": "2019-05-02T03:22:20Z", "total": 71.01 }, { "transactionNumber": "5d01efb09d49b2b75bf45c44", "date": "2019-05-15T08:12:00Z", "total": 39.12 }, { "transactionNumber": "5d01efb015e5046e9fa5a5eb", "date": "2019-03-13T02:25:38Z", "total": 158.1 }, { "transactionNumber": "5d01efb025c447534da50d6f", "date": "2019-03-05T01:20:47Z", "total": 146.8 }, { "transactionNumber": "5d01efb06568a0aa781e9cc1", "date": "2019-04-15T04:01:25Z", "total": 195.21 }, { "transactionNumber": "5d01efb0efbfd60919769fd4", "date": "2019-03-12T01:09:26Z", "total": 178.3 }, { "transactionNumber": "5d01efb0343cd7dc5dec1f66", "date": "2019-03-07T03:32:39Z", "total": 105.66 }, { "transactionNumber": "5d01efb063db8dda2b96e047", "date": "2019-04-19T06:40:08Z", "total": 58.21 } ] }, { "ID": "5d01efb02bd8b7c2d802a452", "name": "Bond Allison", "transactions": [ { "transactionNumber": "5d01efb0a982ad95dbf81e78", "date": "2019-03-23T09:16:03Z", "total": 160.51 }, { "transactionNumber": "5d01efb051c277bd8c628f19", "date": "2019-04-12T02:20:41Z", "total": 109.17 }, { "transactionNumber": "5d01efb05bc349a613c84dab", "date": "2019-05-18T04:52:33Z", "total": 164.24 }, { "transactionNumber": "5d01efb06752410306519409", "date": "2019-04-28T09:01:18Z", "total": 170.29 }, { "transactionNumber": "5d01efb08e6adc6369e95497", "date": "2019-05-15T10:27:39Z", "total": 34.9 }, { "transactionNumber": "5d01efb0fcacba228698fa1f", "date": "2019-03-16T10:40:44Z", "total": 244.03 }, { "transactionNumber": "5d01efb0e09ecbee63a86907", "date": "2019-05-01T05:49:29Z", "total": 210 }, { "transactionNumber": "5d01efb0a19275a529cd0bce", "date": "2019-05-02T02:58:53Z", "total": 241.81 }, { "transactionNumber": "5d01efb0f4af10270c0228ff", "date": "2019-05-09T11:23:23Z", "total": 36.97 }, { "transactionNumber": "5d01efb0081e09eced41824b", "date": "2019-05-25T07:24:35Z", "total": 40.28 }, { "transactionNumber": "5d01efb0df8e8894feb951e8", "date": "2019-05-04T08:21:11Z", "total": 97.16 }, { "transactionNumber": "5d01efb0d3da39b96cb39b17", "date": "2019-03-30T03:36:49Z", "total": 234.26 }, { "transactionNumber": "5d01efb0442726c054b61f0f", "date": "2019-04-15T11:31:09Z", "total": 205.04 }, { "transactionNumber": "5d01efb04b7afa876d220472", "date": "2019-05-16T05:53:59Z", "total": 30 } ] }, { "ID": "5d01efb0f362acd4a644f3e4", "name": "Evangelina Joyner", "transactions": [ { "transactionNumber": "5d01efb00ae04d44727cf8cd", "date": "2019-04-04T09:10:19Z", "total": 188.06 }, { "transactionNumber": "5d01efb06f06037e8673e492", "date": "2019-04-28T12:23:52Z", "total": 27.16 }, { "transactionNumber": "5d01efb0bdda7121d9e45447", "date": "2019-03-05T04:38:11Z", "total": 73.95 }, { "transactionNumber": "5d01efb06261104d176d40ba", "date": "2019-04-24T06:46:50Z", "total": 94.07 }, { "transactionNumber": "5d01efb0ff18a6a6bb554d33", "date": "2019-03-29T02:57:55Z", "total": 53.16 }, { "transactionNumber": "5d01efb0d7c30e3df76b22a6", "date": "2019-04-19T06:17:25Z", "total": 113.42 }, { "transactionNumber": "5d01efb09ce82bc63348358f", "date": "2019-03-05T12:20:17Z", "total": 86.04 }, { "transactionNumber": "5d01efb013ade6004e0d9000", "date": "2019-04-15T03:12:23Z", "total": 30.62 }, { "transactionNumber": "5d01efb049ab84b4a7ba3c72", "date": "2019-03-07T08:25:40Z", "total": 222.1 }, { "transactionNumber": "5d01efb0028891d044276d2c", "date": "2019-05-30T08:14:58Z", "total": 84.22 }, { "transactionNumber": "5d01efb0d0a0c4adfac5264b", "date": "2019-04-06T10:47:19Z", "total": 61.38 }, { "transactionNumber": "5d01efb0b58ed448a55aa39b", "date": "2019-05-05T01:56:32Z", "total": 64.05 } ] }, { "ID": "5d01efb0dbacba1a044858a3", "name": "Fuentes Lyons", "transactions": [ { "transactionNumber": "5d01efb08aa5b8b7b80f31d9", "date": "2019-04-01T01:15:27Z", "total": 122.23 }, { "transactionNumber": "5d01efb0c558dbb274f79dd8", "date": "2019-04-09T11:12:33Z", "total": 48.07 }, { "transactionNumber": "5d01efb02f0aeefb4df2bd67", "date": "2019-05-06T06:02:31Z", "total": 123.45 } ] }, { "ID": "5d01efb0c63560b47bf4be09", "name": "Eaton Rodgers", "transactions": [ { "transactionNumber": "5d01efb01bdbd570c5e9fb3e", "date": "2019-03-25T08:12:29Z", "total": 160.28 }, { "transactionNumber": "5d01efb0fd695dd8524897e9", "date": "2019-04-04T05:18:31Z", "total": 186.64 }, { "transactionNumber": "5d01efb01439dcab759e6469", "date": "2019-04-01T11:42:43Z", "total": 179.43 }, { "transactionNumber": "5d01efb03fe3d0ba0c380f04", "date": "2019-05-14T07:00:15Z", "total": 12.41 }, { "transactionNumber": "5d01efb0d16681ee6efcd537", "date": "2019-04-29T09:12:48Z", "total": 219.68 }, { "transactionNumber": "5d01efb04bb02e10337661dc", "date": "2019-05-22T08:08:33Z", "total": 244.32 }, { "transactionNumber": "5d01efb0778857fde44a07e8", "date": "2019-03-21T04:01:33Z", "total": 229.59 }, { "transactionNumber": "5d01efb04a0524d795efb969", "date": "2019-04-19T08:33:01Z", "total": 101.3 }, { "transactionNumber": "5d01efb0ff12182fe88b85ba", "date": "2019-04-22T03:50:55Z", "total": 122.67 }, { "transactionNumber": "5d01efb0a355eba16c250dd5", "date": "2019-03-09T03:30:26Z", "total": 207.08 }, { "transactionNumber": "5d01efb0cbe2b7e4161440c4", "date": "2019-03-23T05:39:31Z", "total": 113.5 }, { "transactionNumber": "5d01efb0ffd57bf5a2e74c66", "date": "2019-03-31T06:12:35Z", "total": 184.57 } ] }, { "ID": "5d01efb08a9302560e3671ab", "name": "Trudy Parrish", "transactions": [ { "transactionNumber": "5d01efb090835a33c4f4171a", "date": "2019-04-25T05:35:53Z", "total": 235.19 }, { "transactionNumber": "5d01efb0e86601eca1997b70", "date": "2019-03-10T08:08:23Z", "total": 249.88 }, { "transactionNumber": "5d01efb06c78913aa846b1d3", "date": "2019-04-20T05:17:51Z", "total": 92.36 }, { "transactionNumber": "5d01efb01cea27d344cc8251", "date": "2019-04-04T05:10:43Z", "total": 20.34 }, { "transactionNumber": "5d01efb0a50c717e5074ee0b", "date": "2019-04-12T05:50:59Z", "total": 245.58 }, { "transactionNumber": "5d01efb06d8b5d9eb944b7be", "date": "2019-03-18T07:38:40Z", "total": 235.94 }, { "transactionNumber": "5d01efb09ddd2d2b300b1def", "date": "2019-04-10T10:43:49Z", "total": 89.33 }, { "transactionNumber": "5d01efb0008bb08c80163d2e", "date": "2019-04-10T06:54:24Z", "total": 135.04 }, { "transactionNumber": "5d01efb0d98da1e97e95ceff", "date": "2019-04-15T08:50:31Z", "total": 183.7 }, { "transactionNumber": "5d01efb082ebb8a632969b18", "date": "2019-05-21T09:19:05Z", "total": 139.39 } ] }, { "ID": "5d01efb04f415c20f412fd29", "name": "Jennings Garrett", "transactions": [ { "transactionNumber": "5d01efb0756da8537a302ef3", "date": "2019-05-27T04:25:55Z", "total": 41.38 } ] }, { "ID": "5d01efb0cec063e66db89677", "name": "Harrington Chandler", "transactions": [ { "transactionNumber": "5d01efb06b3214d679a976c0", "date": "2019-04-25T06:16:35Z", "total": 40.99 }, { "transactionNumber": "5d01efb0db5fb04fd49fa478", "date": "2019-03-31T06:36:36Z", "total": 68.49 }, { "transactionNumber": "5d01efb0a123578d5fc85ce7", "date": "2019-05-30T08:44:30Z", "total": 200.56 }, { "transactionNumber": "5d01efb0184c943d67bb3759", "date": "2019-04-07T04:13:01Z", "total": 124.62 }, { "transactionNumber": "5d01efb07bd203d2fd8f0aa0", "date": "2019-05-15T12:58:17Z", "total": 21.44 }, { "transactionNumber": "5d01efb0cbc2dcede4cfe62a", "date": "2019-04-30T12:07:02Z", "total": 101.86 }, { "transactionNumber": "5d01efb08976ffe73b772237", "date": "2019-05-02T05:11:33Z", "total": 30.77 }, { "transactionNumber": "5d01efb00ba8997a16f40bbc", "date": "2019-04-02T08:49:18Z", "total": 26.8 } ] }, { "ID": "5d01efb005317e68d55a94bf", "name": "Monroe Carter", "transactions": [ { "transactionNumber": "5d01efb0a8c229dd6a7044c9", "date": "2019-04-05T11:33:15Z", "total": 166.21 }, { "transactionNumber": "5d01efb00430a2f62625aaae", "date": "2019-04-19T05:04:31Z", "total": 110.42 }, { "transactionNumber": "5d01efb0152afb5802af4ba4", "date": "2019-04-05T04:46:48Z", "total": 110.83 }, { "transactionNumber": "5d01efb0f5c134f3c7c84256", "date": "2019-04-24T09:40:50Z", "total": 218.8 }, { "transactionNumber": "5d01efb0c41f350bf94fb38e", "date": "2019-03-21T09:42:59Z", "total": 167.2 } ] }, { "ID": "5d01efb06b26738623d50a0e", "name": "Lina Summers", "transactions": [ { "transactionNumber": "5d01efb02998fcfb5cba849b", "date": "2019-04-02T02:24:36Z", "total": 169.82 }, { "transactionNumber": "5d01efb017560f71e32fcbcc", "date": "2019-04-08T10:56:03Z", "total": 244.92 }, { "transactionNumber": "5d01efb025b93560402334a0", "date": "2019-05-13T06:41:37Z", "total": 39.02 }, { "transactionNumber": "5d01efb0a82421a0dcec758d", "date": "2019-05-11T05:27:58Z", "total": 137.67 }, { "transactionNumber": "5d01efb039caf4a2f501a5be", "date": "2019-05-13T11:27:15Z", "total": 88.16 }, { "transactionNumber": "5d01efb091e72b350de4b785", "date": "2019-05-19T01:51:39Z", "total": 49.54 }, { "transactionNumber": "5d01efb01a4b5baae64cb54f", "date": "2019-03-17T04:54:04Z", "total": 203.46 }, { "transactionNumber": "5d01efb03f3067518090a2f5", "date": "2019-04-25T04:08:02Z", "total": 117.37 }, { "transactionNumber": "5d01efb0f177bacc01627e1e", "date": "2019-05-29T12:11:09Z", "total": 131.47 }, { "transactionNumber": "5d01efb05b0aed779c138ccc", "date": "2019-03-25T07:38:14Z", "total": 223.43 }, { "transactionNumber": "5d01efb02c5f7525aac03022", "date": "2019-03-25T04:16:56Z", "total": 106.35 } ] }, { "ID": "5d01efb0d20fc48849b17883", "name": "Ford Stewart", "transactions": [ { "transactionNumber": "5d01efb0ff1c14231a7cca19", "date": "2019-05-08T06:11:10Z", "total": 69.12 }, { "transactionNumber": "5d01efb07947a553717ce8c8", "date": "2019-03-04T08:22:45Z", "total": 59.95 }, { "transactionNumber": "5d01efb097f900f6b8f40dff", "date": "2019-05-20T06:04:13Z", "total": 29.12 }, { "transactionNumber": "5d01efb06a50efe51ec28c05", "date": "2019-03-20T08:13:50Z", "total": 172.6 }, { "transactionNumber": "5d01efb0af39363580bf72a2", "date": "2019-03-26T02:56:15Z", "total": 207.05 }, { "transactionNumber": "5d01efb0e6d01022778126ed", "date": "2019-04-12T05:22:47Z", "total": 97.86 }, { "transactionNumber": "5d01efb080acc4cfdbae92d3", "date": "2019-03-03T08:07:47Z", "total": 162.93 }, { "transactionNumber": "5d01efb0b3f0abbc36a15689", "date": "2019-03-12T01:20:26Z", "total": 249.63 }, { "transactionNumber": "5d01efb0b4511b4e6e726e85", "date": "2019-03-11T03:15:06Z", "total": 56.68 }, { "transactionNumber": "5d01efb0682a9a4cf255d921", "date": "2019-05-19T03:57:08Z", "total": 144.89 }, { "transactionNumber": "5d01efb028ecce387bbb8cf6", "date": "2019-05-18T04:47:17Z", "total": 26.63 } ] }, { "ID": "5d01efb0eed7a1b35a53cb67", "name": "Hanson Gutierrez", "transactions": [ { "transactionNumber": "5d01efb02d4e403e3acc20ee", "date": "2019-04-07T10:08:45Z", "total": 147.15 }, { "transactionNumber": "5d01efb0be42a0d3b94fcac8", "date": "2019-05-31T11:41:29Z", "total": 171.66 }, { "transactionNumber": "5d01efb02cc506fbe13cc066", "date": "2019-03-16T03:57:03Z", "total": 41.11 }, { "transactionNumber": "5d01efb0af37b1b47818d594", "date": "2019-04-23T04:17:12Z", "total": 147.35 }, { "transactionNumber": "5d01efb066d0fe17312bc351", "date": "2019-03-15T11:19:04Z", "total": 87.19 }, { "transactionNumber": "5d01efb08b9038fed1468c02", "date": "2019-05-14T11:03:59Z", "total": 82.28 }, { "transactionNumber": "5d01efb0b595e1de7bc2e010", "date": "2019-05-13T09:27:53Z", "total": 191.98 } ] }, { "ID": "5d01efb07e9794da4b6b1bf7", "name": "Holt Palmer", "transactions": [ { "transactionNumber": "5d01efb0f83589b540539269", "date": "2019-03-06T01:16:14Z", "total": 88.74 }, { "transactionNumber": "5d01efb0512a12c9b08839d2", "date": "2019-03-31T06:23:19Z", "total": 167.39 }, { "transactionNumber": "5d01efb0282eba0dffbcb6d4", "date": "2019-05-25T08:17:04Z", "total": 220.56 }, { "transactionNumber": "5d01efb0eec5ea8d44865f0d", "date": "2019-03-03T09:03:05Z", "total": 152.73 }, { "transactionNumber": "5d01efb0706ad980e5f6cf54", "date": "2019-04-23T02:31:57Z", "total": 30 }, { "transactionNumber": "5d01efb06fcc2466a5bbe689", "date": "2019-05-19T04:33:31Z", "total": 197.46 }, { "transactionNumber": "5d01efb067d8f5773d3e5a13", "date": "2019-05-14T12:41:20Z", "total": 51.4 }, { "transactionNumber": "5d01efb0a61ef5bafaa26d24", "date": "2019-03-04T02:22:36Z", "total": 175.53 }, { "transactionNumber": "5d01efb048c98318b284396f", "date": "2019-04-19T06:39:38Z", "total": 233.34 }, { "transactionNumber": "5d01efb0fb4ebdcbfcf9b371", "date": "2019-04-15T12:20:45Z", "total": 247.48 }, { "transactionNumber": "5d01efb0cbcf8a1da76b9d8e", "date": "2019-04-29T03:55:31Z", "total": 57.29 }, { "transactionNumber": "5d01efb077866d71a6ef9895", "date": "2019-05-10T06:28:05Z", "total": 234.04 } ] }, { "ID": "5d01efb0a0d406e1d72b17e7", "name": "Stanley Lee", "transactions": [ { "transactionNumber": "5d01efb0827c7e60855cad34", "date": "2019-04-09T04:30:41Z", "total": 227.89 }, { "transactionNumber": "5d01efb0e428ba5044c98f54", "date": "2019-03-28T10:37:25Z", "total": 228.87 }, { "transactionNumber": "5d01efb0df988ff72ae4b633", "date": "2019-05-31T07:15:41Z", "total": 166.89 }, { "transactionNumber": "5d01efb05e0a6826544397ff", "date": "2019-04-12T07:10:59Z", "total": 199.75 }, { "transactionNumber": "5d01efb021e912d6fe223b3f", "date": "2019-03-29T05:02:58Z", "total": 131.95 }, { "transactionNumber": "5d01efb0b421bf1d6cf75474", "date": "2019-03-11T03:39:28Z", "total": 36.53 }, { "transactionNumber": "5d01efb0091188bf13de1ed0", "date": "2019-04-27T10:11:37Z", "total": 245.2 } ] }, { "ID": "5d01efb0a30c92bc6fb5a134", "name": "Vivian Bartlett", "transactions": [ { "transactionNumber": "5d01efb06aedad7b2cf83004", "date": "2019-04-16T10:17:10Z", "total": 198.22 }, { "transactionNumber": "5d01efb03f415deb23ddceb1", "date": "2019-05-13T10:55:29Z", "total": 139.87 }, { "transactionNumber": "5d01efb055a7630954118a5b", "date": "2019-05-01T08:57:47Z", "total": 136.38 }, { "transactionNumber": "5d01efb0a13f9cffa5aee3a5", "date": "2019-03-27T10:26:48Z", "total": 23.04 }, { "transactionNumber": "5d01efb03271a3e7fc6c2d6a", "date": "2019-03-13T10:39:45Z", "total": 168.05 }, { "transactionNumber": "5d01efb0438f025bb01f4509", "date": "2019-03-24T03:27:37Z", "total": 239.94 }, { "transactionNumber": "5d01efb04aac0c583bee69c3", "date": "2019-03-31T08:23:12Z", "total": 148.32 }, { "transactionNumber": "5d01efb05943987826bfac55", "date": "2019-05-16T03:38:05Z", "total": 214.26 }, { "transactionNumber": "5d01efb094c53a1eed3df847", "date": "2019-04-29T04:22:22Z", "total": 37.79 }, { "transactionNumber": "5d01efb07964c7c7ff2405a5", "date": "2019-05-03T09:04:48Z", "total": 14.32 } ] }, { "ID": "5d01efb0694047d87d1674ed", "name": "Perry Wells", "transactions": [ { "transactionNumber": "5d01efb0aadca79fcb34b725", "date": "2019-03-04T11:00:59Z", "total": 69.69 } ] }, { "ID": "5d01efb08ae511c0da877caf", "name": "Adele Mccullough", "transactions": [ { "transactionNumber": "5d01efb0ae89afc949ebdeb8", "date": "2019-05-16T07:09:00Z", "total": 117 }, { "transactionNumber": "5d01efb0d2189578a76eb1f9", "date": "2019-05-09T09:25:53Z", "total": 194.02 }, { "transactionNumber": "5d01efb0b997166a1be7b839", "date": "2019-05-08T01:31:20Z", "total": 202.6 }, { "transactionNumber": "5d01efb07f57cd4b5185b54a", "date": "2019-04-22T08:41:15Z", "total": 133.21 }, { "transactionNumber": "5d01efb0737bde5e11d6ac8b", "date": "2019-04-10T02:05:24Z", "total": 88.05 }, { "transactionNumber": "5d01efb098f4b5b5498d67af", "date": "2019-03-19T08:36:54Z", "total": 136.4 }, { "transactionNumber": "5d01efb040b99682a9a95a39", "date": "2019-03-12T09:30:37Z", "total": 53.36 }, { "transactionNumber": "5d01efb0bcefb79b8c10f8f8", "date": "2019-03-30T01:48:06Z", "total": 179.49 }, { "transactionNumber": "5d01efb0c4ee072a35d03879", "date": "2019-05-15T11:14:37Z", "total": 185.41 }, { "transactionNumber": "5d01efb088d80a3598d2ba3a", "date": "2019-04-20T10:11:47Z", "total": 152.9 }, { "transactionNumber": "5d01efb0e3a61cea5c13c2c6", "date": "2019-05-23T12:29:05Z", "total": 12.86 }, { "transactionNumber": "5d01efb096b1b3c271c7191e", "date": "2019-03-28T04:33:08Z", "total": 44.94 }, { "transactionNumber": "5d01efb01ce95c8ffe7ba9a8", "date": "2019-04-16T07:02:50Z", "total": 20.81 }, { "transactionNumber": "5d01efb0674875d878d895c4", "date": "2019-04-20T03:37:48Z", "total": 120.17 } ] }, { "ID": "5d01efb0b999c4b0c5c8c5e6", "name": "Fanny Kramer", "transactions": [ { "transactionNumber": "5d01efb05f09e18f3f48bcd7", "date": "2019-05-14T07:10:07Z", "total": 230.55 } ] }, { "ID": "5d01efb06ea3b7626632297e", "name": "Calderon Whitfield", "transactions": [ { "transactionNumber": "5d01efb0753e28f771746f4b", "date": "2019-05-18T08:03:01Z", "total": 192.63 }, { "transactionNumber": "5d01efb0d1839ddaf141d944", "date": "2019-04-03T07:53:04Z", "total": 153.26 }, { "transactionNumber": "5d01efb0a16b30ffcb043481", "date": "2019-05-06T03:57:21Z", "total": 237.15 }, { "transactionNumber": "5d01efb0e9f4809f5b831efe", "date": "2019-04-17T06:28:03Z", "total": 165.41 }, { "transactionNumber": "5d01efb034e0933cc5aa90f2", "date": "2019-05-13T11:35:00Z", "total": 167.32 } ] }, { "ID": "5d01efb0e120cf584bb2a237", "name": "Conrad Chavez", "transactions": [ { "transactionNumber": "5d01efb06874d075dcdae825", "date": "2019-03-27T02:10:40Z", "total": 89.94 }, { "transactionNumber": "5d01efb01b948f974b6603c8", "date": "2019-05-06T10:35:04Z", "total": 38.1 }, { "transactionNumber": "5d01efb025563a03db3ae845", "date": "2019-03-07T01:51:57Z", "total": 151.27 }, { "transactionNumber": "5d01efb054570a04ec7d617f", "date": "2019-04-03T08:55:03Z", "total": 38.36 }, { "transactionNumber": "5d01efb0a36beffccddbfd8d", "date": "2019-04-13T05:48:28Z", "total": 106.71 }, { "transactionNumber": "5d01efb0e91e454872fa9c98", "date": "2019-05-05T03:57:50Z", "total": 14.36 } ] }, { "ID": "5d01efb0febe92dfc53c74af", "name": "Campbell Bender", "transactions": [ { "transactionNumber": "5d01efb0f3e42651f8cd6e7c", "date": "2019-05-30T08:51:56Z", "total": 162.33 }, { "transactionNumber": "5d01efb0c1511984d583cb94", "date": "2019-05-21T11:42:25Z", "total": 19.9 }, { "transactionNumber": "5d01efb0f12970cfb08b03f6", "date": "2019-03-28T02:56:52Z", "total": 201.57 }, { "transactionNumber": "5d01efb023fa819f258492f8", "date": "2019-05-22T06:51:42Z", "total": 130.62 }, { "transactionNumber": "5d01efb0afe6e3821ef4e4b1", "date": "2019-03-01T12:43:02Z", "total": 37.33 }, { "transactionNumber": "5d01efb064d6ed7701223e86", "date": "2019-03-30T07:56:18Z", "total": 30.97 } ] }, { "ID": "5d01efb0864452eba1e461d6", "name": "William Burke", "transactions": [ { "transactionNumber": "5d01efb0f037ad484f05ed18", "date": "2019-05-12T06:29:01Z", "total": 53.67 } ] }, { "ID": "5d01efb08b8219b258cbe808", "name": "Grimes Hunter", "transactions": [ { "transactionNumber": "5d01efb025a2bc1ec3fd6616", "date": "2019-04-03T12:55:53Z", "total": 208.47 } ] }, { "ID": "5d01efb04c34f70f658b3956", "name": "Dennis Bradshaw", "transactions": [ { "transactionNumber": "5d01efb0f1f4fdcce6615db9", "date": "2019-05-24T10:43:02Z", "total": 141.37 }, { "transactionNumber": "5d01efb084d78e213db1e939", "date": "2019-03-19T12:48:11Z", "total": 220.45 }, { "transactionNumber": "5d01efb08a35b110b9904103", "date": "2019-05-08T09:26:54Z", "total": 36.97 }, { "transactionNumber": "5d01efb04e35a402f3729c2f", "date": "2019-05-09T07:40:02Z", "total": 27.46 }, { "transactionNumber": "5d01efb0529ee5b01af8374f", "date": "2019-04-21T03:54:21Z", "total": 140.83 }, { "transactionNumber": "5d01efb01feabf948a9937fa", "date": "2019-03-01T06:55:06Z", "total": 185.58 }, { "transactionNumber": "5d01efb097dd1b7ad184cab6", "date": "2019-04-05T12:21:05Z", "total": 53.99 }, { "transactionNumber": "5d01efb01af140eef458e792", "date": "2019-03-09T11:02:22Z", "total": 42.83 }, { "transactionNumber": "5d01efb0a8c9e6e89794a751", "date": "2019-04-02T08:23:30Z", "total": 57.23 }, { "transactionNumber": "5d01efb0a7d8f25c7f5f9061", "date": "2019-05-23T01:35:02Z", "total": 148.39 }, { "transactionNumber": "5d01efb0851b4836b852aa12", "date": "2019-03-21T11:33:00Z", "total": 76.37 } ] }, { "ID": "5d01efb095df7c6b6d9b4859", "name": "Deborah Pollard", "transactions": [ { "transactionNumber": "5d01efb073efdad771d48b7a", "date": "2019-04-02T02:14:26Z", "total": 114.32 }, { "transactionNumber": "5d01efb04f5ca49654e3b764", "date": "2019-05-29T06:21:47Z", "total": 199.11 }, { "transactionNumber": "5d01efb00a5431a6dcaca672", "date": "2019-05-01T11:21:57Z", "total": 129.86 }, { "transactionNumber": "5d01efb01f3d8117271bd702", "date": "2019-04-01T10:54:06Z", "total": 198.82 }, { "transactionNumber": "5d01efb0b639707b18ea6113", "date": "2019-04-27T09:15:44Z", "total": 150.39 }, { "transactionNumber": "5d01efb03abd55c5ff86583a", "date": "2019-05-16T10:26:48Z", "total": 249.31 } ] }, { "ID": "5d01efb06b9d83e465705ad3", "name": "Ashlee Stanton", "transactions": [ { "transactionNumber": "5d01efb053a3a6e020428c9d", "date": "2019-04-29T12:30:15Z", "total": 164.91 } ] }, { "ID": "5d01efb0f02f016c1af8847d", "name": "Simpson Buchanan", "transactions": [ { "transactionNumber": "5d01efb0d70b966d10e71ac0", "date": "2019-04-08T07:21:37Z", "total": 64.93 }, { "transactionNumber": "5d01efb03fa1e204cf34d9b0", "date": "2019-05-16T03:28:28Z", "total": 189.1 }, { "transactionNumber": "5d01efb0ee4b2b05a297aeb7", "date": "2019-05-20T12:41:30Z", "total": 113.12 }, { "transactionNumber": "5d01efb0875115c2cc272140", "date": "2019-05-19T12:19:39Z", "total": 205.35 }, { "transactionNumber": "5d01efb09ac758968371dd42", "date": "2019-05-18T06:18:18Z", "total": 122.49 }, { "transactionNumber": "5d01efb0beed764e9c311ee6", "date": "2019-04-09T10:24:00Z", "total": 192.34 }, { "transactionNumber": "5d01efb074d94da6d78a95a7", "date": "2019-04-24T11:21:55Z", "total": 198.47 }, { "transactionNumber": "5d01efb09278685c4a5ce272", "date": "2019-05-10T12:52:29Z", "total": 79.62 }, { "transactionNumber": "5d01efb00884fa0690904ea7", "date": "2019-03-13T05:27:49Z", "total": 51.98 }, { "transactionNumber": "5d01efb0acc8c75f2eec0a0a", "date": "2019-05-17T06:55:19Z", "total": 120.89 }, { "transactionNumber": "5d01efb0efdac45d3f6d760a", "date": "2019-04-20T04:00:11Z", "total": 87.03 }, { "transactionNumber": "5d01efb01c48b119e5729c47", "date": "2019-05-22T06:24:02Z", "total": 206.83 }, { "transactionNumber": "5d01efb07c98e0bc900bd860", "date": "2019-03-05T10:08:34Z", "total": 23.94 } ] }, { "ID": "5d01efb08566e895748beb8c", "name": "Sofia Bishop", "transactions": [ { "transactionNumber": "5d01efb0089708aa96615a20", "date": "2019-03-20T06:47:30Z", "total": 78.48 }, { "transactionNumber": "5d01efb0b5d2a411fc022a7d", "date": "2019-03-25T12:47:51Z", "total": 157.54 }, { "transactionNumber": "5d01efb084d2768e4f52e730", "date": "2019-05-20T01:40:17Z", "total": 48.8 }, { "transactionNumber": "5d01efb08ca9b4f743ba9efa", "date": "2019-05-07T10:12:44Z", "total": 209.09 }, { "transactionNumber": "5d01efb054b55f7a5ecb59e5", "date": "2019-03-20T05:01:44Z", "total": 158.91 }, { "transactionNumber": "5d01efb0e420786d35dc4ac4", "date": "2019-03-05T10:56:31Z", "total": 10.67 }, { "transactionNumber": "5d01efb0027a1fefdd9f62ad", "date": "2019-04-04T03:45:00Z", "total": 127.18 }, { "transactionNumber": "5d01efb00403157592e22665", "date": "2019-03-30T01:45:07Z", "total": 141.38 }, { "transactionNumber": "5d01efb042617c13fa24595b", "date": "2019-05-01T05:35:45Z", "total": 56.46 }, { "transactionNumber": "5d01efb0334f2519faa2c3a3", "date": "2019-03-16T04:21:27Z", "total": 227.24 }, { "transactionNumber": "5d01efb0102d96a05377bf07", "date": "2019-04-19T11:43:12Z", "total": 85.89 }, { "transactionNumber": "5d01efb018cd841135cd6901", "date": "2019-04-01T08:59:29Z", "total": 62.69 }, { "transactionNumber": "5d01efb0ccf7939414c8005d", "date": "2019-03-05T02:49:23Z", "total": 241.36 }, { "transactionNumber": "5d01efb074c2ca225375d630", "date": "2019-03-22T01:11:47Z", "total": 51.6 }, { "transactionNumber": "5d01efb00c96456a2c86cdfb", "date": "2019-03-15T07:55:53Z", "total": 106 } ] }, { "ID": "5d01efb0a51af305ee34aa6a", "name": "Annie Bryant", "transactions": [ { "transactionNumber": "5d01efb096c534ff7b3c60d8", "date": "2019-05-26T09:22:25Z", "total": 208.06 }, { "transactionNumber": "5d01efb0679f4ddbe39eaaa9", "date": "2019-04-12T08:38:08Z", "total": 115.45 }, { "transactionNumber": "5d01efb08b0eaaf8976dd342", "date": "2019-03-04T03:23:36Z", "total": 197.12 }, { "transactionNumber": "5d01efb0184b5326d7b4d51e", "date": "2019-05-22T01:08:32Z", "total": 35.89 }, { "transactionNumber": "5d01efb0b32f164938754d9b", "date": "2019-04-14T01:15:13Z", "total": 119.96 }, { "transactionNumber": "5d01efb002730a19c8b0f9a3", "date": "2019-05-20T09:56:06Z", "total": 38.73 }, { "transactionNumber": "5d01efb0e3cb7ace5d20d95b", "date": "2019-04-28T04:01:19Z", "total": 233.37 }, { "transactionNumber": "5d01efb023f80ed8d6f26514", "date": "2019-04-23T10:40:01Z", "total": 45.42 }, { "transactionNumber": "5d01efb024aa91eca5babed2", "date": "2019-04-13T06:13:40Z", "total": 158.31 }, { "transactionNumber": "5d01efb00cdf23c95dadc526", "date": "2019-04-30T07:12:56Z", "total": 121.34 }, { "transactionNumber": "5d01efb0760aeca65d93e0bc", "date": "2019-04-04T07:55:03Z", "total": 214.6 }, { "transactionNumber": "5d01efb04f0571d0068d9228", "date": "2019-04-15T04:50:25Z", "total": 177.34 } ] }, { "ID": "5d01efb050c4ecc4ba259fcd", "name": "Reid Mcclure", "transactions": [ { "transactionNumber": "5d01efb057f8c9c7223d7fe3", "date": "2019-04-03T08:39:16Z", "total": 228.8 }, { "transactionNumber": "5d01efb097f086b35eeb0373", "date": "2019-03-13T09:41:55Z", "total": 34.07 }, { "transactionNumber": "5d01efb0622cb7f81c84d29a", "date": "2019-04-16T06:20:12Z", "total": 43.12 }, { "transactionNumber": "5d01efb0bddb5078b076f2e9", "date": "2019-03-02T04:44:09Z", "total": 176.65 }, { "transactionNumber": "5d01efb0f96395a63387970e", "date": "2019-05-07T12:12:13Z", "total": 160.27 }, { "transactionNumber": "5d01efb05fa56e5bb6ab186d", "date": "2019-03-18T08:03:50Z", "total": 135 }, { "transactionNumber": "5d01efb063005186bfca34ed", "date": "2019-04-02T04:28:36Z", "total": 30.85 }, { "transactionNumber": "5d01efb01f499b2b812cca91", "date": "2019-03-21T09:19:30Z", "total": 228.3 }, { "transactionNumber": "5d01efb03fa9f11121cbe19b", "date": "2019-03-04T01:55:12Z", "total": 155.37 } ] }, { "ID": "5d01efb08f38d00c1222710b", "name": "Boyd Bennett", "transactions": [ { "transactionNumber": "5d01efb0378d717f6ae9edda", "date": "2019-04-24T08:02:32Z", "total": 136.78 }, { "transactionNumber": "5d01efb0c0d369a7d31dba4c", "date": "2019-03-04T10:36:23Z", "total": 239.33 }, { "transactionNumber": "5d01efb03f03b6580af31157", "date": "2019-03-21T02:28:38Z", "total": 96.66 }, { "transactionNumber": "5d01efb0ae1a15f825dd11cc", "date": "2019-05-21T07:14:51Z", "total": 42.24 }, { "transactionNumber": "5d01efb0f50849a6d3d826da", "date": "2019-04-20T06:26:25Z", "total": 40.85 }, { "transactionNumber": "5d01efb0cd3ce8176267eb75", "date": "2019-04-09T12:15:31Z", "total": 225.64 }, { "transactionNumber": "5d01efb04d13aa92e8d15d7b", "date": "2019-03-30T03:30:33Z", "total": 216.54 }, { "transactionNumber": "5d01efb05e121045d6a0b90d", "date": "2019-03-04T06:06:35Z", "total": 30.92 }, { "transactionNumber": "5d01efb0b3a8e194796764b3", "date": "2019-04-19T07:41:05Z", "total": 241.82 }, { "transactionNumber": "5d01efb04b8abc34ac7ad081", "date": "2019-04-01T12:46:30Z", "total": 54.96 }, { "transactionNumber": "5d01efb0ee2295a371563d47", "date": "2019-05-22T06:15:21Z", "total": 71.54 } ] }, { "ID": "5d01efb0d30fa3c7b6cbcc81", "name": "Little Albert", "transactions": [ { "transactionNumber": "5d01efb0785564f4d0806c77", "date": "2019-04-15T01:19:08Z", "total": 39.01 }, { "transactionNumber": "5d01efb05d497dab0b24999e", "date": "2019-04-27T08:26:00Z", "total": 235.04 }, { "transactionNumber": "5d01efb0146bdfd6caf12d8e", "date": "2019-05-30T08:57:36Z", "total": 84.04 }, { "transactionNumber": "5d01efb0943dff97f7e9c5a8", "date": "2019-04-19T09:26:47Z", "total": 112.87 } ] }, { "ID": "5d01efb0d4f8c49519b83376", "name": "Deann Bowen", "transactions": [ { "transactionNumber": "5d01efb02293d1fc026c02de", "date": "2019-04-30T10:02:50Z", "total": 214.23 }, { "transactionNumber": "5d01efb005400e0476239395", "date": "2019-04-12T01:47:02Z", "total": 187.14 }, { "transactionNumber": "5d01efb0f57e822593aee573", "date": "2019-05-07T09:35:11Z", "total": 56.83 }, { "transactionNumber": "5d01efb0c7aae1e7ac2f4c5b", "date": "2019-05-21T06:31:14Z", "total": 188.41 }, { "transactionNumber": "5d01efb0372817113e513308", "date": "2019-04-04T05:54:19Z", "total": 33.65 }, { "transactionNumber": "5d01efb07b312c35e08ed37b", "date": "2019-04-23T01:21:59Z", "total": 135.86 }, { "transactionNumber": "5d01efb0682a41926fb4106a", "date": "2019-03-14T08:21:58Z", "total": 65.02 }, { "transactionNumber": "5d01efb0c5091d8d5a50d2a8", "date": "2019-05-20T07:52:29Z", "total": 128.54 }, { "transactionNumber": "5d01efb02d60975c77f82acd", "date": "2019-03-11T07:50:09Z", "total": 124.74 }, { "transactionNumber": "5d01efb07b9e438e3a8c27b4", "date": "2019-04-09T01:04:21Z", "total": 133.99 }, { "transactionNumber": "5d01efb03242de33851f6aa9", "date": "2019-04-02T11:27:33Z", "total": 14.93 }, { "transactionNumber": "5d01efb09af8affdef29e76f", "date": "2019-05-26T05:09:29Z", "total": 12.42 } ] }, { "ID": "5d01efb09f47a0e90a85394b", "name": "Wendy Kirkland", "transactions": [ { "transactionNumber": "5d01efb0ac0367dad1782932", "date": "2019-05-29T04:30:21Z", "total": 76.46 }, { "transactionNumber": "5d01efb0ba3addc79b63707c", "date": "2019-04-01T07:11:57Z", "total": 217.3 }, { "transactionNumber": "5d01efb0bcd5dea29b28b818", "date": "2019-03-28T04:51:33Z", "total": 206.74 }, { "transactionNumber": "5d01efb0816af07419d8ee1f", "date": "2019-05-29T03:33:49Z", "total": 148.44 }, { "transactionNumber": "5d01efb03dd47eedaa98fd50", "date": "2019-04-28T08:07:05Z", "total": 45.39 }, { "transactionNumber": "5d01efb0bda25b9d1a243e61", "date": "2019-04-29T07:58:38Z", "total": 43.05 }, { "transactionNumber": "5d01efb0ed3ef87e9e50e7a4", "date": "2019-05-29T06:46:47Z", "total": 157.59 }, { "transactionNumber": "5d01efb01bd445b53650bc5a", "date": "2019-03-13T10:05:19Z", "total": 201.67 }, { "transactionNumber": "5d01efb053722388be5d8715", "date": "2019-03-06T04:13:21Z", "total": 234.44 }, { "transactionNumber": "5d01efb0c35399510f613de1", "date": "2019-05-26T03:04:58Z", "total": 184 }, { "transactionNumber": "5d01efb04ca5067c25c2136d", "date": "2019-03-09T01:57:31Z", "total": 244.23 }, { "transactionNumber": "5d01efb0abab0ccd1d9d4748", "date": "2019-04-26T11:23:35Z", "total": 63.93 } ] }, { "ID": "5d01efb0e8adc19efdb05892", "name": "Klein Middleton", "transactions": [ { "transactionNumber": "5d01efb083662993bafe359c", "date": "2019-03-29T04:03:27Z", "total": 34.66 }, { "transactionNumber": "5d01efb04b5c931e72eca727", "date": "2019-05-07T04:34:25Z", "total": 42.22 }, { "transactionNumber": "5d01efb0bed511b63facdc2f", "date": "2019-04-12T12:31:06Z", "total": 197.86 }, { "transactionNumber": "5d01efb0c7533a794bd10717", "date": "2019-04-04T02:48:54Z", "total": 68.28 }, { "transactionNumber": "5d01efb0853fd1f39490967a", "date": "2019-04-25T01:41:42Z", "total": 120.95 }, { "transactionNumber": "5d01efb0557c93d2cb730965", "date": "2019-03-17T05:48:57Z", "total": 176 }, { "transactionNumber": "5d01efb0c7813fb738bb3e14", "date": "2019-04-25T01:13:22Z", "total": 74.47 }, { "transactionNumber": "5d01efb0c9a4bd095a502bf3", "date": "2019-05-03T11:51:24Z", "total": 106.24 }, { "transactionNumber": "5d01efb04140efdf48d14cce", "date": "2019-04-16T10:57:58Z", "total": 131.98 }, { "transactionNumber": "5d01efb0000d4216f4a41946", "date": "2019-03-09T03:47:00Z", "total": 83.15 }, { "transactionNumber": "5d01efb018e596b2d4cb5e0f", "date": "2019-05-02T01:12:38Z", "total": 240.85 } ] } ]}');

var customers = data.customers;

var parseDate = function parseDate(dateAsString) {
  var date = new Date(dateAsString);
  return {
    unixTime: date.getTime(),
    month: date.getMonth()
  };
};

// TODO: abstract point values
var calculatePoints = function calculatePoints(purchaseTotal) {
  if (purchaseTotal > 100) {
    return 2 * (purchaseTotal - 100) + 50;
  } else {
    return purchaseTotal - 50;
  }
};

var CustomerRow = function (_React$Component) {
  _inherits(CustomerRow, _React$Component);

  function CustomerRow() {
    _classCallCheck(this, CustomerRow);

    return _possibleConstructorReturn(this, (CustomerRow.__proto__ || Object.getPrototypeOf(CustomerRow)).apply(this, arguments));
  }

  _createClass(CustomerRow, [{
    key: "render",
    value: function render() {
      var customer = this.props.customer;
      var dateRange = this.props.dateRange;

      /* This creates a dynamic object of monthPoints with an arbitrary
         range of months, so that the functionality of the app
         could be expanded to include any user-defined range of months.
          format:
         monthPoints = {
          monthAsNumber: pointTotal,
          ...
        }
      */
      var monthPoints = {};
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = dateRange.months[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var month = _step.value;

          monthPoints[month] = 0;
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      customer.transactions.forEach(function (transaction) {
        var transactionDate = parseDate(transaction.date);
        var purchaseTotal = Math.floor(transaction.total);

        if (purchaseTotal > 50 && transactionDate.unixTime >= dateRange.startTime && transactionDate.unixTime <= dateRange.endTime) {
          // transaction is in correct date range, and qualifies for points
          var points = calculatePoints(purchaseTotal);
          monthPoints[transactionDate.month] += points;
        }
      });

      // calculate totalPoints from arbitrarily large monthPoints object
      var totalPoints = Object.values(monthPoints).reduce(function (a, b) {
        return a + b;
      });

      var monthCells = [];

      dateRange.months.forEach(function (month) {
        monthCells.push(React.createElement(
          "td",
          { key: month },
          monthPoints[month]
        ));
      });

      return React.createElement(
        "tr",
        null,
        React.createElement(
          "td",
          null,
          customer.ID
        ),
        React.createElement(
          "td",
          null,
          customer.name
        ),
        monthCells,
        React.createElement(
          "td",
          null,
          totalPoints
        )
      );
    }
  }]);

  return CustomerRow;
}(React.Component);

var CustomerTable = function (_React$Component2) {
  _inherits(CustomerTable, _React$Component2);

  function CustomerTable() {
    _classCallCheck(this, CustomerTable);

    return _possibleConstructorReturn(this, (CustomerTable.__proto__ || Object.getPrototypeOf(CustomerTable)).apply(this, arguments));
  }

  _createClass(CustomerTable, [{
    key: "render",
    value: function render() {
      var _this3 = this;

      var rows = [];

      this.props.customers.forEach(function (customer) {
        rows.push(React.createElement(CustomerRow, {
          customer: customer,
          dateRange: _this3.props.dateRange,
          key: customer.ID }));
      });

      // TODO: Make month names dynamic
      return React.createElement(
        "table",
        null,
        React.createElement("colgroup", { span: "2" }),
        React.createElement("colgroup", { span: "4" }),
        React.createElement(
          "thead",
          null,
          React.createElement(
            "tr",
            null,
            React.createElement(
              "th",
              { colSpan: "2", scope: "colgroup" },
              "Customer"
            ),
            React.createElement(
              "th",
              { colSpan: "4", scope: "colgroup" },
              "Points Earned"
            )
          ),
          React.createElement(
            "tr",
            null,
            React.createElement(
              "th",
              { scope: "col" },
              "ID"
            ),
            React.createElement(
              "th",
              { scope: "col" },
              "Name"
            ),
            React.createElement(
              "th",
              { scope: "col" },
              "March"
            ),
            React.createElement(
              "th",
              { scope: "col" },
              "April"
            ),
            React.createElement(
              "th",
              { scope: "col" },
              "May"
            ),
            React.createElement(
              "th",
              { scope: "col" },
              "Total"
            )
          )
        ),
        React.createElement(
          "tbody",
          null,
          rows
        )
      );
    }
  }]);

  return CustomerTable;
}(React.Component);

var Search = function (_React$Component3) {
  _inherits(Search, _React$Component3);

  function Search() {
    _classCallCheck(this, Search);

    return _possibleConstructorReturn(this, (Search.__proto__ || Object.getPrototypeOf(Search)).apply(this, arguments));
  }

  _createClass(Search, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "form",
        null,
        React.createElement(
          "label",
          { htmlFor: "customer-search" },
          "Search for customer"
        ),
        React.createElement("input", { id: "customer-search", type: "search", placeholder: "Customer name or ID\u2026" })
      );
    }
  }]);

  return Search;
}(React.Component);

var SearchableCustomerTable = function (_React$Component4) {
  _inherits(SearchableCustomerTable, _React$Component4);

  function SearchableCustomerTable() {
    _classCallCheck(this, SearchableCustomerTable);

    return _possibleConstructorReturn(this, (SearchableCustomerTable.__proto__ || Object.getPrototypeOf(SearchableCustomerTable)).apply(this, arguments));
  }

  _createClass(SearchableCustomerTable, [{
    key: "render",

    // TODO: implement state
    // TODO: inverse data flow
    value: function render() {
      // TODO: Make date range user defined and set default values
      var dateRange = {
        startDate: new Date(2019, 2),
        endDate: new Date(2019, 4 + 1, 0, 23, 59, 59, 999),
        // TODO: Create months array based on date range
        months: [2, 3, 4], // months are 0 indexed (0 = Jan)
        // get UNIX times for date comparison
        get startTime() {
          return this.startDate.getTime();
        },
        get endTime() {
          return this.endDate.getTime();
        }
      };

      return React.createElement(
        React.Fragment,
        null,
        React.createElement(Search, null),
        React.createElement(CustomerTable, {
          customers: this.props.customers,
          dateRange: dateRange })
      );
    }
  }]);

  return SearchableCustomerTable;
}(React.Component);

ReactDOM.render(React.createElement(SearchableCustomerTable, { customers: customers }), document.getElementById('customer-points-display'));