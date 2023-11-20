"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[198],{37790:function(e,t){t.Z={roundTwoDecimal:function(e){return Math.round((e+Number.EPSILON)*100)/100},roundThreeDecimal:function(e){return Math.round((e+Number.EPSILON)*1e3)/1e3},roundFiveDecimal:function(e){return Math.round((e+Number.EPSILON)*1e5)/1e5},roundInt:function(e){return Math.round((e+Number.EPSILON)*1)/1},calculateLogarithm:function(e,t){return Math.log(t)/Math.log(e)},calcPOW:function(e){return e.mantissa*Math.pow(10,e.exponent)},secondsToStringWithS:function(e){let t="",a=0,l=0,n=0,o=0;return(a=Math.floor(e/86400),l=Math.floor(e%86400/3600),n=Math.floor(e%3600/60),o=this.roundInt(e%86400%60),a==Number.POSITIVE_INFINITY||a==Number.NEGATIVE_INFINITY)?""+a:(60===o&&(o=0,n++),60===n&&(n=0,l++),24===l&&(l=0,a++),a>0&&(t+="".concat(a<10?"0"+a:a,"d:")),l>0&&(t+="".concat(l<10?"0"+l:l,"h:")),n>0&&(t+="".concat(n<10?"0"+n:n,"m:")),o>0?t+="".concat(o<10?"0"+o:o,"s"):t+="0s",t)},secondsToString:function(e){let t="",a=0,l=0,n=0;return(a=Math.floor(e/86400),l=Math.floor(e%86400/3600),60===(n=this.roundInt(e%3600/60))&&(n=0,l++),24===l&&(l=0,a++),a==Number.POSITIVE_INFINITY||a==Number.NEGATIVE_INFINITY)?""+a:(a>0&&(t+="".concat(a<10?"0"+a:a,"d:"),0===l&&(t+="00h")),(l>0||0===l&&0===a)&&(t+="".concat(l<10?"0"+l:l,"h")),0===a&&(t+=":",n>0?t+="".concat(n<10?"0"+n:n,"m"):t+="0s"),t)},bonusColorMap:{1009:{color:"cyan"},1010:{color:"maroon"},1011:{color:"purple"},1012:{color:"yellow"},1013:{color:"red"},1014:{color:"blue"},1015:{color:"gray"},1016:{color:"green"}}}},62109:function(e,t,a){var l=a(37790);t.Z={EXP_DMG_MOD:.1,EXP_TIME_MOD:.05,SYNERGY_MOD_STEP:.25,EXP_TOKEN_MOD:.05,SOUL_CLOVER_STEP:.25,calculatePetBaseDamage:function(e,t){let a=t||(null==e?void 0:e.Rank),l=(null==e?void 0:e.BaseDungeonDamage)*(1+.05*a);return Number(l)},calculateBestHours:function(e,t,a,l){let n;(null==a?void 0:a.residueToken)&&a.residueToken;let o=a.data.ExpeditionTokenBonuses;t||(t=[1,2,3,4,5,6,7,8,9,10,11,12]),n||(n=(null==a?void 0:a.clover)?a.clover:0),l||(l=1);let s=this.calculateGroupScore(e),i=s.tokenMult*Math.pow(1+this.SOUL_CLOVER_STEP,n)*o*l,r=[];for(let e=0;e<t.length;e++){let a=t[e],l=i*a,n=Math.floor(l),o=n/l,s=l-n,u={wastedHR:s/a,tokenHR:i,wasted:s,hours:a,totalTokens:l,floored:n,effeciency:o};r.push(u)}return r},calculateGroupScore:function(e,t){let a=0,l=0,n=0,o=0,s=0,i=0,r=0,u=0,c=0,h=0,m=0,p=0,g={},D=0;e.forEach(e=>{a+=this.calculatePetBaseDamage(e,t),D+=this.calculatePetBaseDamage(e,0),e.BonusList.some(e=>1013===e.ID)&&l++,e.BonusList.some(e=>1010===e.ID)&&i++,e.BonusList.some(e=>1011===e.ID)&&r++,e.BonusList.some(e=>1014===e.ID)&&c++,e.BonusList.some(e=>1012===e.ID)&&n++,e.BonusList.some(e=>1015===e.ID)&&u++,e.BonusList.some(e=>1016===e.ID)&&h++,g[e.Type]?g[e.Type]++:g[e.Type]=1,e.ID&&(o+=this.SYNERGY_MOD_STEP)}),s=a;let[d,I]=Object.values(g);return d>0&&I>0&&(o+=this.SYNERGY_MOD_STEP),d>1&&I>1&&(o+=this.SYNERGY_MOD_STEP),a*=1+l*this.EXP_DMG_MOD,D*=1+l*this.EXP_DMG_MOD,a*=1+n*this.EXP_TIME_MOD,D*=1+n*this.EXP_TIME_MOD,a*=o,D*=o,p=h*this.EXP_TOKEN_MOD,m=o+o*p,{groupScore:a,baseGroupScore:s,groupScoreMax:D,dmgCount:l,timeCount:n,synergyBonus:o,cardPowerCount:i,expRewardCount:r,cardXpCount:c,rpRewardCount:u,tokenRewardCount:h,tokenModif:p,tokenMult:m}},getBestDamagePets:function(e,t,a){let l={},n=JSON.parse(JSON.stringify(e)),o=[],s=[],updateStrongest=e=>{1===e.Type?0===o.length?o.push(e):1===o.length?this.calculatePetBaseDamage(o[0],t)<this.calculatePetBaseDamage(e,t)?(o[1]=o[0],o[0]=e):o[1]=e:this.calculatePetBaseDamage(o[0],t)<this.calculatePetBaseDamage(e,t)?(o[1]=o[0],o[0]=e):this.calculatePetBaseDamage(o[1],t)<this.calculatePetBaseDamage(e,t)&&(o[1]=e):2===e.Type&&(0===s.length?s.push(e):1===s.length?this.calculatePetBaseDamage(s[0],t)<this.calculatePetBaseDamage(e,t)?(s[1]=s[0],s[0]=e):s[1]=e:this.calculatePetBaseDamage(s[0],t)<this.calculatePetBaseDamage(e,t)?(s[1]=s[0],s[0]=e):this.calculatePetBaseDamage(s[1],t)<this.calculatePetBaseDamage(e,t)&&(s[1]=e))},i=[],r={},u=0,c=0;if(a&&a.requiredPets)for(let e=0;e<a.requiredPets.length;e++)r[a.requiredPets[e].ID]=a.requiredPets[e];for(let e=0;e<n.length;e++){let t=n[e],a=!1;for(let e=0;e<t.BonusList.length;e++){let n=t.BonusList[e];t.ID in r?(l[t.ID]=t,a=!0):1013!==n.ID||l[t.ID]||(l[t.ID]=t,a=!0),1012!==n.ID||l[t.ID]||(l[t.ID]=t,a=!0)}a?updateStrongest(t):(i.push(t),1===t.Type?c++:u++)}let h=s.length,m=o.length,p=s.concat(o);for(let e=0;e<p;e++)l[pet.ID]=p[e];let g=2,D=2;m+c<2&&(D+=2-(m+c)),h+u<2&&(g+=2-(h+u));let d=!1,I=!1;for(let e=0;e<i.length;e++){let a=i[e],l=this.calculatePetBaseDamage(a,t);if(1===a.Type){if(o.length<g)o.push(a),d=!0;else for(let e=0;e<o.length;e++){let n=o[e];if(l>this.calculatePetBaseDamage(n,t)){o[e]=a,d=!0;break}}}else if(s.length<D)s.push(a),I=!0;else for(let e=0;e<s.length;e++){let n=s[e];if(l>this.calculatePetBaseDamage(n,t)){s[e]=a,I=!0;break}}d&&(d=!1,o.sort((e,a)=>this.calculatePetBaseDamage(e,t)-this.calculatePetBaseDamage(a,t))),I&&(I=!1,s.sort((e,a)=>this.calculatePetBaseDamage(e,t)-this.calculatePetBaseDamage(a,t)))}p=s.concat(o);for(let e=0;e<p.length;e++)l[p[e].ID]=p[e];let b=Object.values(l);return b.sort((e,t)=>t.ID-e.ID),b},calcBestDamageGroup:function(e,t,a,l){a=Number(a=a||7);let n={},o={},s={};for(let t=0;t<e.length;t++)s[e[t].ID]=JSON.parse(JSON.stringify(e[t]));let i=null==l?void 0:l.activeBonuses;i||(i=[]);let memoizedGroupScore=e=>{let a=e.ID;if(!n[a]||n[a]){let l=this.calculateGroupScore(e.team,t),o=l.tokenMult;n[a]={token:o,damage:l.groupScore,other:l}}return n[a]},r={},u={},c={},h={},m={},p=[];for(let e=0;e<a;e++)p.push([]);if(null==l?void 0:l.petWhiteList){for(let e=0;e<l.petWhiteList.length;e++){let t=l.petWhiteList[e];"blacklist"===t.placement?r[t.id]=t:"team"===t.placement?(u[t.id]=t,h[t.id]=t,p[t.parameters.team].push(t)):"rel"===t.placement&&(c[t.id]=t)}for(let e=0;e<l.petWhiteList.length;e++){let t=l.petWhiteList[e];if("auto"===t.placement)for(let e=a-1;e>=0;e--){let a=0,l=0;if(p[e].forEach(e=>{1===e.pet.Type&&a++,2===e.pet.Type&&l++}),(1!==t.pet.Type||!(a>1))&&(2!==t.pet.Type||!(l>1))&&p[e].length<4){t.auto=!0,t.parameters.team=e,t.placement="team",u[t.id]=t,p[e].push(t),m[t.id]=t;break}}}}let getCombinationsInner=(e,t,a)=>{let l=-1,n=0,o=0;e.forEach(e=>{1===e.Type?o++:n++});let s=!0;n>1&&o>1&&(s=!1);let i={},r={},u={},c={};for(let e=0;e<a.length;e++){let t=a[e];"team"!==t.placement||(t.parameters.fake?2!==t.pet.Type||u[t.pet.ID]?c[t.pet.ID]||(c[t.pet.ID]=!0):u[t.pet.ID]=!0:1!==t.pet.Type||r[t.pet.ID]?r[t.pet.ID]||(i[t.pet.ID]=!0):r[t.pet.ID]=!0)}let f=(n,o)=>{if(o.length>0){let e=!0,t=0,n=0,h=0,m=0,p=0,g=0;for(let e=0;e<o.length;e++){let t=o[e];1===t.Type?p++:g++,1===t.Type&&c[t.ID]?m++:u[t.ID]&&h++}let D=Object.entries(i).length,d=Object.entries(r).length,I=Object.entries(u).length,b=Object.entries(c).length,M=2>D?2-D:0,P=2>d?2-d:0,S=0;if(I>0){let t=I<M?I:M;h>M?e=!1:h!==t?e=!1:S+=t}if(b>0){let t=b<P?b:P;m>P?e=!1:m!==t?e=!1:S+=t}let E=d>2?d-2:0;if((g>2+(D>2?D-2:0)||p>2+E)&&!s&&(e=!1),e){a.length;for(let l=0;l<a.length;l++){let s=a[l],i=!1;if("team"===s.placement){let a=0;for(let e=0;e<o.length;e++){let l=o[e];l.ID===s.pet.ID&&(s.parameters.fake?t++:(n++,1===l.Type?d++:D++),a++)}if(a>0)i=!0;else if(!s.parameters.fake){e=!1,i=!1;break}}else if(s.requiredNumber>0){let t=0;for(let e=0;e<o.length;e++)o[e].BonusList.find(e=>e.ID===s.bonus.id)&&(t++,n++);if(t>=s.requiredNumber)i=!0;else{e=!1,i=!1;break}}else if(s.exactNumber>-1){let t=0;for(let e=0;e<o.length;e++)o[e].BonusList.find(e=>e.ID===s.bonus.id)&&(t++,n++);if(t===s.exactNumber)i=!0;else{e=!1,i=!1;break}}else if("rel"===s.bonus.placement){let a=0;for(let e=0;e<o.length;e++)o[e].BonusList.find(e=>e.ID===s.bonus.id)&&(a++,t++);if(a<=s.bonus.amount){if(s.tempRequired>0){if(s.bonus.amount<s.tempRequired&&a===s.bonus.amount||a>=s.tempRequired)i=!0;else{e=!1,i=!1;break}}else i=!0}else{e=!1,i=!1;break}}else s.placement;if(s.tempMax||0===s.tempMax&&!s.disabled&&void 0!==s.disabled){let t=0;for(let e=0;e<o.length;e++){let a=o[e];s.pets.find(e=>e.ID===a.ID)&&t++}if(t<=s.tempMax)i=!0;else{e=!1,i=!1;break}}i&&s.passed++}if(S>0&&e&&(S+n>4&&(S=4-n),e=!(t<S)),e){let e="";for(let t=0;t<o.length;t++)e+=o[t].ID,t+1!==o.length&&(e+=",");let t={ID:e,team:o};if(-1===l)l={ID:e,team:o,score:memoizedGroupScore(t)};else{let a=memoizedGroupScore(t);a.damage===l.score.damage?a.token>l.score.token&&(l={ID:e,team:o,score:a}):a.damage>l.score.damage&&(l={ID:e,team:o,score:a})}}}}if(o.length!==t)for(let t=n;t<e.length;t++)f(t+1,[...o,e[t]])};return f(0,[]),l.team&&l.team.sort((e,t)=>e.Type===t.Type?e.ID-t.ID:e.Type-t.Type),l},g=new Date,D=new Date,d=new Date,I=new Date,b=[],M=e.filter(e=>(e.ID in u&&(u[e.ID].pet=e),!(e.ID in r)&&!(e.ID in u)));for(let e=0;e<a;e++){let l=a-e,n=[],h={},m={},p=[];for(let[t,a]of Object.entries(u))if(a.parameters.team===e){if(!s[a.pet.ID])continue;p.push(a),M.push(a.pet),n.push(a.pet)}if(i.length>0){for(let e=0;e<i.length;e++)h[i[e].id]=i[e],m[i[e].id]={bonus:i[e],pets:[],active:!0};M.forEach(e=>{e.ID in r||e.BonusList.forEach(t=>{t.ID in h&&("top"===h[t.ID].placement&&n.push(e),m[t.ID].pets.push(e))})});for(let t=0;t<i.length;t++){let a=m[i[t].id];if("bottom"===a.bonus.placement){let t,o=a.pets.length,s=0,i=!1,r=0;switch(a.bonus.equation){case"min":o<a.bonus.amount?(t=0,i=!0):(o<=l*a.bonus.amount&&(r=a.bonus.amount),t=o%a.bonus.amount,o-=t,s=o>=0?Math.ceil(o/a.bonus.amount):0);break;case"max":break;case"eq":o<a.bonus.amount?(t=0,i=!0):(o<=l*a.bonus.amount&&(r=a.bonus.amount),t=o%a.bonus.amount,o-=t,s=a.pets.length>=a.bonus.amount?Math.ceil(o/a.bonus.amount):0)}if(l<=s)m[a.bonus.id].tempMax=r,a.pets.forEach(e=>{n.push(e)});else{let l=[];for(let t=0;t<m[a.bonus.id].pets.length;t++){let n=m[a.bonus.id].pets[t];n.ID in u&&"team"===u[n.ID].placement&&u[n.ID].parameters.team===e||l.push(n)}m[a.bonus.id].pets=l,m[a.bonus.id].active=!1,m[a.bonus.id].tempMax=t,m[a.bonus.id].disabled=i}}else if("top"===a.bonus.placement){let e=a.pets.length,t=0;e<=l*a.bonus.amount&&(t=a.bonus.amount),m[a.bonus.id].tempMax=t}}for(let e=0;e<i.length;e++){let t=m[i[e].id];if(!t.active)continue;let a=0,l=-1;switch(t.hardFail=!1,t.bonus.equation){case"min":t.bonus.amount>t.pets.length?(a=0,t.hardFail=!0):a=t.bonus.amount;break;case"max":break;case"eq":t.bonus.amount>t.pets.length?(l=-1,t.hardFail=!0):l=t.bonus.amount}t.requiredNumber=a,t.exactNumber=l}}let d=this.getBestDamagePets(M,t,{requiredPets:n});for(let[e,t]of Object.entries(m))t.passed=0;g=new Date;let I=!1,P=!1,S=Object.values(m);for(let e=0;e<p.length;e++)S.push(p[e]);let E=getCombinationsInner(d,Math.min(4,d.length),S);if(D=new Date,console.log("time to get combinations ".concat(E.length,": ").concat((D-g)/1e3," seconds")),-1===E&&p.length>0){S=[];for(let e=0;e<p.length;e++)S.push(p[e]);-1===(E=getCombinationsInner(d,Math.min(4,d.length),S))?P=!0:I=!0}for(let[t,a]of(-1===E&&(P=!0),Object.entries(m)))if(!(t in o)&&(!a.passed||a.hardFail)){let l="Filter failed on group ".concat(e+1,":\n");switch(a.bonus.equation){case"min":l+="not enough pets, min ".concat(a.bonus.amount," but ").concat(a.pets.length," remain");break;case"max":break;case"eq":l+="not enough pets, req. ".concat(a.bonus.amount," but ").concat(a.pets.length," remain");break;default:throw Error("impossible case")}o[t]=l}if(P){!(Object.values(m).length>0)||"generic"in o||(o.generic="Individual filters all succeeded, but the combination of all is impossible starting group ".concat(e+1));break}if(I){b.push(E.team);for(let e=0;e<E.team.length;e++)E.team[e].ID in c&&delete c[E.team[e].ID];M=M.filter(e=>{let t=!0;for(let a=0;a<E.team.length;a++)if(E.team[a].ID===e.ID){t=!1;break}return t})}else{let a=this.calculateGroupScore(E.team,t),l=a.groupScore,n=Object.values(c);if(i.length>0||n.length>0){let r=!1;for(let o=0;o<n.length;o++){let i=n[o],u=i.parameters.damageBias/100,c=l*u,h=E.team.length,m=0,g=s[i.id],D=this.calculatePetBaseDamage(g,t);if(g&&(g.BonusList.forEach(e=>{let l=0;1013===e.ID?(D*=1+this.EXP_DMG_MOD,h>1?l+=a.baseGroupScore/h*(h-1)*u*this.EXP_DMG_MOD:l=a.baseGroupScore*u*this.EXP_DMG_MOD,m+=l):1012===e.ID&&(D*=1+this.EXP_TIME_MOD,h>1?l+=3*this.calculatePetBaseDamage(g,t)*u*this.EXP_TIME_MOD:l=a.baseGroupScore*u*this.EXP_TIME_MOD,m+=l)}),(D+=m)>c)){r=!0;let t=JSON.parse(JSON.stringify(i));t.placement="team",t.parameters.team=e,t.pet=g,t.parameters.fake=!0,p.push(t),d.find(e=>e.ID===g.ID)||d.push(g)}}for(let e=0;e<i.length;e++){let n=i[e],o=n.relThresh/100,s=l*o,u=!1,c=m[n.id];"rel"!==n.placement||(c.pets.forEach(e=>{let l=this.calculatePetBaseDamage(e,t),n=E.team.length,i=0;e.BonusList.forEach(e=>{let t=0;1013===e.ID?(l*=1+this.EXP_DMG_MOD,n>1?t+=a.baseGroupScore/n*(n-1)*o*this.EXP_DMG_MOD:t=a.baseGroupScore*o*this.EXP_DMG_MOD,i+=t):1012===e.ID&&(l*=1+this.EXP_TIME_MOD,n>1?t+=a.baseGroupScore/n*(n-1)*o*this.EXP_TIME_MOD:t=a.baseGroupScore*o*this.EXP_TIME_MOD,i+=t)}),(l+=i)>s&&(r=!0,u=!0,c.active=!0,c.tempMin=!0,c.tempRequired=0!==c.tempRequired&&c.tempRequired?c.tempRequired+1:1,c.tempRequiredPets||(c.tempRequiredPets=[]),c.tempRequiredPets.push(e),d.find(t=>t.ID===e.ID)||d.push(e))}),u||(c.tempMin=null,c.tempRequired=0,c.tempRequiredPets=[],c.active=!1))}if(r){g=new Date;let t=Object.values(m);for(let e=0;e<p.length;e++)t.push(p[e]);let a=getCombinationsInner(d,Math.min(4,d.length),t);if(console.log("got new combinations after the rel calcs"),-1!==a&&(p=p.filter(e=>!e.parameters.fake||!a.team.find(t=>t.ID===e.id))),-1===a&&0===p.length){"generic"in o||(o.generic="Individual filters all succeeded, but the combination of all is impossible starting group ".concat(e+1," (too many relative pets in one team)"));break}if(-1!==a){E=a;for(let e=0;e<t.length;e++)t[e].id in c&&a.team.find(a=>a.ID===t[e].id)&&delete c[t[e].id]}}}b.push(E.team);for(let e=0;e<E.team.length;e++)E.team[e].ID in c&&delete c[E.team[e].ID];M=M.filter(e=>{let t=!0;for(let a=0;a<E.team.length;a++)if(E.team[a].ID===e.ID){t=!1;break}return t})}}I=new Date,console.log("time to get best combo: ".concat((I-d)/1e3," seconds")),(null==l?void 0:l.setFailedFilters)&&l.setFailedFilters(o);for(let e=0;e<b.length;e++){let t=b[e];for(let e=0;e<t.length;e++){let a=t[e];m[a.ID]&&(m[a.ID].placement="auto")}}let P=!0,S=-1;for(;P;){S++,P=!1;let e=JSON.parse(JSON.stringify(b));for(let a=0;a<e.length;a++){let l=e[a];for(let n=0;n<l.length;n++){let o=l[n],s=!1;if(!h[o.ID]){if(a<b.length-1){let i=e[a+1],r={},u=this.calculateGroupScore(l,t).groupScore;for(let e=0;e<2;e++)for(let e=0;e<i.length;e++){let a=i[e];if(a.Type===o.Type&&!r[a.ID]){r[a.ID]=a;let e=JSON.parse(JSON.stringify(l));e[n]=a,this.calculateGroupScore(e,t).groupScore>u&&(s=!0);break}}}if(!s&&a>0){let l=a-1;for(;l>=0;){let s=e[l],i={},r=this.calculateGroupScore(s,t).groupScore;for(let e=0;e<2;e++){for(let e=0;e<s.length;e++){let u=s[e];if(!h[u.ID]){if(u.Type===o.Type&&!i[u.ID]){i[u.ID]=u;let c=JSON.parse(JSON.stringify(s));c[e]=o,this.calculateGroupScore(c,t).groupScore>r&&(P=!0,b[a][n]=JSON.parse(JSON.stringify(u)),b[l][e]=JSON.parse(JSON.stringify(o)));break}if(P)break}}if(P)break}if(P)break;l--}}if(P)break}}if(P)break}}return console.log("num swaps: ".concat(S)),b.forEach(e=>{e.sort((e,t)=>e.ID-t.ID),e.sort((e,t)=>e.Type-t.Type)}),b},calcBestTokenGroup:function(e,t,a,l){a=a||7;let n=1,o={},memoizedGroupScore=e=>{let a=e.ID;if(!o[a]||o[a]){let l=this.calculateGroupScore(e.team,t),n=l.tokenMult;o[a]={token:n,damage:l.groupScore,other:l}}return o[a]},getCombinationsInner=(e,t,a)=>{let l=-1,f=(o,s)=>{let i=0,r=0,u=[],c=[];a&&(i=a.min?a.min:0,u=a.pets?a.pets:[],c=a.ignoredPets?a.ignoredPets:[]);let h=0;if(s.length>0){let e="";for(let t=0;t<s.length;t++){if(e+=s[t].ID,t+1!==s.length&&(e+=","),i>0)for(let e=0;e<u.length;e++)s[t].ID==u[e].ID&&h++;if(c.length>0)for(let e=0;e<c.length;e++)s[t].ID==c[e].ID&&r++}if(h===i&&0===r){let t={ID:e,team:s};if(-1===l)l={ID:e,team:s,score:memoizedGroupScore(t)};else{let a=memoizedGroupScore(t);1===n?a.damage>l.score.damage&&(l={ID:e,team:s,score:a}):a.token===l.score.token?a.other.tokenRewardCount>0?a.damage<l.score.damage&&(l={ID:e,team:s,score:a}):a.damage>l.score.damage&&(l={ID:e,team:s,score:a}):a.token>l.score.token&&(l={ID:e,team:s,score:a})}}}if(s.length!==t)for(let t=o;t<e.length;t++)f(t+1,[...s,e[t]])};return f(0,[]),l.team&&l.team.sort((e,t)=>e.Type===t.Type?e.ID-t.ID:e.Type-t.Type),l},s=new Date,i=new Date,r=[];for(let o=0;o<a;o++){let s=-1,i=JSON.parse(JSON.stringify(e)),u=0,c=0,h=[],m=0,p=0,g=0;i.forEach(e=>{e.BonusList.forEach(a=>{1016===a.ID&&(h.push(e),c+=this.calculatePetBaseDamage(e,t),u++,1===e.Type?g++:2===e.Type&&p++)})}),c/=u,i=(i=this.getBestDamagePets(i,t,{requiredPets:h})).sort((e,a)=>this.calculatePetBaseDamage(a,t)-this.calculatePetBaseDamage(e,t));for(let e=0;e<2;e++)m+=this.calculatePetBaseDamage(i[e],t);m/=2;let D=this.calcBestDamageGroup(i,t,1)[0];if(m=D?this.calculateGroupScore(D,t):[],u>=4&&p>=2&&g>=2)n=2,s=getCombinationsInner(i,Math.min(4,i.length),{pets:h,min:4}),n=1;else if(1===u)s=o===a-1?getCombinationsInner(i,Math.min(4,i.length),{pets:h,min:h.length}):getCombinationsInner(i,Math.min(4,i.length));else if(u>1){let e=(100-l.tokenDamageBias)/100*m.groupScore;e/=5.75;let t=2;(p>1&&g>0||g>1&&p>0)&&(t=3);let r=Math.ceil(u/t);r>=a-o?(n=r-(a-o)>=0?1:2,s=getCombinationsInner(i,Math.min(4,i.length),{pets:h,min:t}),n=1):c>e?(n=a-o-r>=0?1:2,s=getCombinationsInner(i,Math.min(4,i.length),{pets:h,min:t}),n=1):s=getCombinationsInner(i,Math.min(4,i.length),{pets:[],min:0,ignoredPets:h})}else s=getCombinationsInner(i,Math.min(4,i.length));if(-1===s)break;memoizedGroupScore(s),r.push(s.team),e=e.filter(e=>{let t=!0;for(let a=0;a<s.team.length;a++)if(s.team[a].ID===e.ID){t=!1;break}return t})}return i=new Date,console.log("time to get best combo: ".concat((i-s)/1e3," seconds")),r},findBestGroups:function(e,t,a,l,n){switch(a){case 1:case 3:return this.calcBestDamageGroup(e,t,l,n);case 2:return this.calcBestTokenGroup(e,t,l,n)}},calcEquipBonus:function(e,t){let a=1;return 100*(23===t.ID?.5*((Math.pow(1+t.Gain,e.Level)-1+Math.max(0,(.005*l.Z.calculateLogarithm(1.0125,e.Level+1)-1)*.5))*(1+.005*l.Z.calculateLogarithm(1.075,e.Rank+1))):28===t.ID?(Math.pow(1+t.Gain,e.Level)-1+Math.max(0,(.005*l.Z.calculateLogarithm(1.0125,e.Level+1)-1)*.25))*(1+.005*l.Z.calculateLogarithm(1.075,e.Rank+1)):29===t.ID?(Math.pow(1+t.Gain,e.Level)-1+Math.max(0,(.005*l.Z.calculateLogarithm(1.0125,e.Level+1)-1)*.125))*(1+.005*l.Z.calculateLogarithm(1.075,e.Rank+1)):(Math.pow(1+t.Gain,e.Level)-1)*(1+.02*e.Rank))}}},39768:function(e,t,a){var l=a(57437),n=a(2265);a(65947);var o=a(38606),s=a(60731);t.Z=e=>{let{data:t,onSelect:a,placeholder:i,updateBox:r,margin:u}=e,[c,h]=(0,n.useState)(null);return(0,l.jsx)("div",{style:{width:(null==t?void 0:t.width)?t.width:"288px",minHeight:"0px",height:"36px",margin:u||""},children:(0,l.jsx)(o.Z,{options:t.list,renderInput:e=>{let t=e.key;return delete e.key,(0,n.createElement)(s.Z,{...e,key:t,placeholder:(null==c?void 0:c.label)&&r?c.label:i||"Enter a pet"})},ListboxProps:{style:{maxHeight:150}},value:c,clearOnBlur:!0,isOptionEqualToValue:(e,t)=>-1!==t.id&&e.label===t.label,onChange:(e,t)=>{t&&(a(t),r&&h(t))}})})}},33187:function(e,t){t.Z={src:"/_next/static/media/x_icon.2c19be28.svg",height:800,width:800,blurWidth:0,blurHeight:0}}}]);