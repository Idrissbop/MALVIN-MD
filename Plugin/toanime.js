const _0x3e640d=_0xd845;(function(_0x4c28d3,_0x297cff){const _0x149a74=_0xd845,_0x1b3354=_0x4c28d3();while(!![]){try{const _0x4e8249=-parseInt(_0x149a74(0xbd))/0x1*(-parseInt(_0x149a74(0xa8))/0x2)+parseInt(_0x149a74(0xa9))/0x3+parseInt(_0x149a74(0xbe))/0x4+-parseInt(_0x149a74(0xbc))/0x5+parseInt(_0x149a74(0xb5))/0x6+-parseInt(_0x149a74(0xba))/0x7+-parseInt(_0x149a74(0xb0))/0x8*(parseInt(_0x149a74(0xb3))/0x9);if(_0x4e8249===_0x297cff)break;else _0x1b3354['push'](_0x1b3354['shift']());}catch(_0x4f5b2a){_0x1b3354['push'](_0x1b3354['shift']());}}}(_0x5a44,0xe2339));const {cmd,commands}=require(_0x3e640d(0xb6));let {img2url}=require(_0x3e640d(0xab));const {getRandom,fetchJson,getBuffer}=require(_0x3e640d(0xae)),fs=require('fs'),config=require(_0x3e640d(0xc5));var desct='';if(config['LANG']==='SI')desct=_0x3e640d(0xb4);else desct=_0x3e640d(0xaf);function _0xd845(_0x1eb140,_0x4869f0){const _0x5a44b8=_0x5a44();return _0xd845=function(_0xd84541,_0x15830d){_0xd84541=_0xd84541-0xa4;let _0x2bfed6=_0x5a44b8[_0xd84541];return _0x2bfed6;},_0xd845(_0x1eb140,_0x4869f0);}function _0x5a44(){const _0x44e1de=['15443172PREiXo','එය\x20ලබා\x20දී\x20ඇති\x20රූපය\x20anime\x20image\x20එකක්\x20බවට\x20පරිවර්තනය\x20කරයි.','3079860msmrEh','../command','api/toanime?url=','*Server\x20is\x20busy.\x20Try\x20again\x20later.!*','msg','2964626zOkVQW','quoted','6459510DggSKo','4771CRFCRB','5829568bfpIyA','https://vihangayt.me/tools/toanime?url=','then','promises','FOOTER','file-type','toanime','../config','download','https://gist.githubusercontent.com/vihangayt0/7dbb65f6adfe21538f7febd13982569a/raw/apilis.json','animeimg','&apikey=','convert','*Server\x20එක\x20කාර්යබහුලයි.\x20පසුව\x20නැවත\x20උත්සාහ\x20කරන්න.\x20!*','LANG','ext','sendMessage','556GpwqCr','3182427UIKecq','length','@blackamda/telegram-image-url','*ඡායාරූපයකට\x20mention\x20දෙන්න\x20!*','type','../DATABASE/functions','It\x20convert\x20given\x20image\x20to\x20anime\x20image.','8IAsAwL','random','imageMessage'];_0x5a44=function(){return _0x44e1de;};return _0x5a44();}var imgmsg='';if(config[_0x3e640d(0xa5)]==='SI')imgmsg=_0x3e640d(0xac);else imgmsg='*Reply\x20to\x20a\x20photo\x20!*';var cantf='';if(config[_0x3e640d(0xa5)]==='SI')cantf=_0x3e640d(0xa4);else cantf=_0x3e640d(0xb8);cmd({'pattern':_0x3e640d(0xc4),'react':'🏮','alias':['imgtoanime',_0x3e640d(0xc8)],'desc':desct,'category':_0x3e640d(0xca),'use':'.toanime\x20<reply\x20image>','filename':__filename},async(_0x40c59f,_0x1289a3,_0x3e2e16,{from:_0x41dec1,l:_0x818de2,prefix:_0xcaf096,quoted:_0x1f79f1,body:_0x472a38,isCmd:_0x548ddf,command:_0x93d02f,args:_0x56fa9d,q:_0x5e4599,isGroup:_0x37eefc,sender:_0x323c24,senderNumber:_0x34fa58,botNumber2:_0x25590c,botNumber:_0x39afe5,pushname:_0x1ecba6,isMe:_0x24974b,isOwner:_0x431f7d,groupMetadata:_0x20a3ad,groupName:_0x1c1c90,participants:_0x15ba1e,groupAdmins:_0x505491,isBotAdmins:_0x5e54d8,isAdmins:_0xdac133,reply:_0x1b7fea})=>{const _0x488a53=_0x3e640d;try{const _0x12835a=_0x3e2e16[_0x488a53(0xbb)]?_0x3e2e16[_0x488a53(0xbb)]['type']==='viewOnceMessage':![],_0x1e8356=_0x3e2e16[_0x488a53(0xbb)]?_0x3e2e16['quoted'][_0x488a53(0xad)]===_0x488a53(0xb2)||(_0x12835a?_0x3e2e16['quoted'][_0x488a53(0xb9)]['type']==='imageMessage':![]):![];if(_0x3e2e16['type']===_0x488a53(0xb2)||_0x1e8356){const _0xd07948=require(_0x488a53(0xc3));var _0x5383c5=getRandom('');let _0x1a164a=_0x1e8356?await _0x3e2e16[_0x488a53(0xbb)][_0x488a53(0xc6)](_0x5383c5):await _0x3e2e16[_0x488a53(0xc6)](_0x5383c5),_0x1d8ecf=await _0xd07948['fromBuffer'](_0x1a164a);await fs[_0x488a53(0xc1)]['writeFile']('./'+_0x1d8ecf['ext'],_0x1a164a),img2url('./'+_0x1d8ecf[_0x488a53(0xa6)])[_0x488a53(0xc0)](async _0x42f17b=>{const _0x433b06=_0x488a53;try{await _0x40c59f[_0x433b06(0xa7)](_0x41dec1,{'image':await getBuffer(_0x433b06(0xbf)+_0x42f17b),'caption':config[_0x433b06(0xc2)]},{'quoted':_0x1289a3});}catch(_0x298e68){let _0x5d4ac6=await fetchJson(_0x433b06(0xc7)),_0x1a97c2=_0x5d4ac6['users'],_0xa53546=_0x1a97c2[Math['floor'](Math[_0x433b06(0xb1)]()*_0x1a97c2[_0x433b06(0xaa)])];await _0x40c59f['sendMessage'](_0x41dec1,{'image':{'url':_0x5d4ac6['xz']+_0x433b06(0xb7)+_0x42f17b+_0x433b06(0xc9)+_0xa53546},'caption':config[_0x433b06(0xc2)]},{'quoted':_0x1289a3});}});}else return _0x1b7fea(imgmsg);}catch(_0x448b88){_0x1b7fea(cantf),_0x818de2(_0x448b88);}});
