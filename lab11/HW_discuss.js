// Даден е масив, който съдържа информация за български владетели, и периода на тяхното управление.
// Всеки елемент на масива е масив със следните данни:
// 	[<име>, <начална година на управление>, <крайна година на управление>]

var rulers = [
	["асПАРуХ",681, 700 ],
	["тЕРвеЛ", 700,718 ],
	["СеВаР", 738,753],
	["телЕРИГ", 766,777],
	["каРДАм", 777, 803],
	["крум", 803,814 ],
	["ОмурТАг",814,831],
];
// console.log( toCamelCaseCyr('асПАРуХ') ); // Аспарух

// >>>>>>>>>>НАЧАЛО НА ВАШИЯ КОД >>>>>>>>>>
for( let i=0; i<rulers.length; i++){
	let ruler = rulers[i];


}



// <<<<<<<<<< КРАЙ НА ВАШИЯ КОД <<<<<<<<<<<<<

// Очакван резултат,в конзолата:
// Аспарух е управлявал 19 години.
// Тервел е управлявал 18 години.
// Кардам е управлявал 26 години.
// Омуртаг е управлявал 17 години.








// do not modify!
function toCamelCaseCyr(str) {
	return str.toLowerCase()
			    	.replace(/(?:\b|^|[^а-яА-Я])([а-яА-Я])/g, (all, chr) => chr.toUpperCase());
}