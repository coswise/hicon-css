/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'hicons\'">' + entity + '</span>' + html;
	}
	var icons = {
		'h-beer': '&#xea2c;',
		'h-bread': '&#xea32;',
		'h-burger': '&#xea8b;',
		'h-cake': '&#xea8c;',
		'h-candy': '&#xea8d;',
		'h-cookie': '&#xea8e;',
		'h-donut': '&#xea8f;',
		'h-mushroom': '&#xea90;',
		'h-pizza': '&#xea91;',
		'h-tea-bag': '&#xea92;',
		'h-maximise-frame': '&#xe9f2;',
		'h-minimise-frame': '&#xe9fe;',
		'h-not-equal-to': '&#xe928;',
		'h-refresh-acw': '&#xe993;',
		'h-skip-next': '&#xea75;',
		'h-apple': '&#xe900;',
		'h-banana': '&#xe901;',
		'h-discount-dollar': '&#xe902;',
		'h-discount-empty': '&#xe903;',
		'h-discount-euro': '&#xe904;',
		'h-discount-percentage': '&#xe905;',
		'h-discount-pound': '&#xe906;',
		'h-discount-yuan': '&#xe907;',
		'h-leaf': '&#xe908;',
		'h-link-2': '&#xe909;',
		'h-link': '&#xe90a;',
		'h-login': '&#xe90b;',
		'h-logout': '&#xe90c;',
		'h-orange': '&#xe90d;',
		'h-paper-bag': '&#xe90e;',
		'h-piano': '&#xe90f;',
		'h-user-add': '&#xe910;',
		'h-user-checked': '&#xe911;',
		'h-user-in': '&#xe912;',
		'h-user-out': '&#xe913;',
		'h-user-remove': '&#xe914;',
		'h-user-x': '&#xe915;',
		'h-user': '&#xe916;',
		'h-users': '&#xe917;',
		'h-triangle': '&#xe91d;',
		'h-alert-triangle': '&#xe918;',
		'h-face-sad': '&#xe919;',
		'h-female': '&#xe91a;',
		'h-intersex': '&#xe91b;',
		'h-male': '&#xe91c;',
		'h-transgender-2': '&#xe91e;',
		'h-transgender': '&#xe91f;',
		'h-dribbble': '&#xe920;',
		'h-alert-circle': '&#xe921;',
		'h-at': '&#xe922;',
		'h-circle': '&#xe923;',
		'h-help-circle': '&#xe924;',
		'h-hicon': '&#xe925;',
		'h-info': '&#xe926;',
		'h-pie-chart': '&#xe927;',
		'h-refresh-cw': '&#xe929;',
		'h-rotate-acw': '&#xe92a;',
		'h-rotate-cw': '&#xe92b;',
		'h-spotify': '&#xe92c;',
		'h-square-2': '&#xe92d;',
		'h-square': '&#xe92e;',
		'h-target': '&#xe92f;',
		'h-virus': '&#xe930;',
		'h-circle1': '&#xe931;',
		'h-help-circle1': '&#xe932;',
		'h-colour-picker': '&#xe967;',
		'h-high-performance': '&#xe9b1;',
		'h-low-performance': '&#xe9c8;',
		'h-medium-performance': '&#xe9cd;',
		'h-arrow-down-right-square': '&#xe933;',
		'h-airplay': '&#xe934;',
		'h-alert-square': '&#xe935;',
		'h-align-center': '&#xe936;',
		'h-align-justify': '&#xe937;',
		'h-align-left': '&#xe938;',
		'h-align-right': '&#xe939;',
		'h-anchor': '&#xe93a;',
		'h-archive': '&#xe93b;',
		'h-arrow-down-1': '&#xe93c;',
		'h-arrow-down-cricle': '&#xe93d;',
		'h-arrow-down-left-circle': '&#xe93e;',
		'h-arrow-down-left-square': '&#xe93f;',
		'h-arrow-down-left': '&#xe940;',
		'h-arrow-down-right-circle': '&#xe941;',
		'h-arrow-down-right': '&#xe942;',
		'h-arrow-down-square': '&#xe943;',
		'h-arrow-down': '&#xe944;',
		'h-arrow-left-cricle': '&#xe945;',
		'h-arrow-left-square': '&#xe946;',
		'h-arrow-right-cricle': '&#xe947;',
		'h-arrow-right-square': '&#xe948;',
		'h-arrow-right': '&#xe949;',
		'h-arrow-up-circle': '&#xe94a;',
		'h-arrow-up-left-cricle': '&#xe94b;',
		'h-arrow-up-left-square': '&#xe94c;',
		'h-arrow-up-left': '&#xe94d;',
		'h-arrow-up-right-circle': '&#xe94e;',
		'h-arrow-up-right-square': '&#xe94f;',
		'h-arrow-up-right': '&#xe950;',
		'h-arrow-up-square': '&#xe951;',
		'h-arrow-up': '&#xe952;',
		'h-award': '&#xe953;',
		'h-bag-2': '&#xe954;',
		'h-bag-3': '&#xe955;',
		'h-bag': '&#xe956;',
		'h-bar-chart-1': '&#xe957;',
		'h-bar-chart-2': '&#xe958;',
		'h-bar-chart-down': '&#xe959;',
		'h-bar-chart-up': '&#xe95a;',
		'h-battery-charging': '&#xe95b;',
		'h-battery-ending': '&#xe95c;',
		'h-battery-half': '&#xe95d;',
		'h-battery-off': '&#xe95e;',
		'h-battery': '&#xe95f;',
		'h-bell-off': '&#xe960;',
		'h-bell': '&#xe961;',
		'h-bitcoin-sign': '&#xe962;',
		'h-bluetooth': '&#xe963;',
		'h-bold': '&#xe964;',
		'h-book-open': '&#xe965;',
		'h-book': '&#xe966;',
		'h-bookmark': '&#xe968;',
		'h-bottombar': '&#xe969;',
		'h-box': '&#xe96a;',
		'h-briefcase': '&#xe96b;',
		'h-calendar-2': '&#xe96c;',
		'h-calendar-10': '&#xe96d;',
		'h-calendar-17': '&#xe96e;',
		'h-calendar-meeting': '&#xe96f;',
		'h-calendar-monday': '&#xe970;',
		'h-calendar': '&#xe971;',
		'h-camera-off': '&#xe972;',
		'h-camera': '&#xe973;',
		'h-cast': '&#xe974;',
		'h-check-circle-1': '&#xe975;',
		'h-check-circle-2': '&#xe976;',
		'h-check-square-1': '&#xe977;',
		'h-check-square-2': '&#xe978;',
		'h-check': '&#xe979;',
		'h-chevron-bottom': '&#xe97a;',
		'h-chevron-left': '&#xe97b;',
		'h-chevron-right': '&#xe97c;',
		'h-chevron-up': '&#xe97d;',
		'h-chevrons-down': '&#xe97e;',
		'h-chevrons-left': '&#xe97f;',
		'h-chevrons-right': '&#xe980;',
		'h-chevrons-up': '&#xe981;',
		'h-clipboard': '&#xe982;',
		'h-clock-1': '&#xe983;',
		'h-clock-2': '&#xe984;',
		'h-clock-3': '&#xe985;',
		'h-clock-4': '&#xe986;',
		'h-clock-5': '&#xe987;',
		'h-clock-6': '&#xe988;',
		'h-clock-7': '&#xe989;',
		'h-clock-8': '&#xe98a;',
		'h-cloud-off': '&#xe98b;',
		'h-cloud-rain-heavy': '&#xe98c;',
		'h-cloud-rain-light': '&#xe98d;',
		'h-cloud-storm': '&#xe98e;',
		'h-cloud': '&#xe98f;',
		'h-cloudy-moon': '&#xe990;',
		'h-cloudy': '&#xe991;',
		'h-code-1': '&#xe992;',
		'h-codepen': '&#xe994;',
		'h-coffee-expresso': '&#xe995;',
		'h-coffee': '&#xe996;',
		'h-columns': '&#xe997;',
		'h-command': '&#xe998;',
		'h-compass': '&#xe999;',
		'h-copy': '&#xe99a;',
		'h-corner-down-left': '&#xe99b;',
		'h-corner-down-right': '&#xe99c;',
		'h-corner-left-down': '&#xe99d;',
		'h-corner-left-up': '&#xe99e;',
		'h-corner-right-down': '&#xe99f;',
		'h-corner-right-up': '&#xe9a0;',
		'h-corner-up-left': '&#xe9a1;',
		'h-corner-up-right': '&#xe9a2;',
		'h-cpu': '&#xe9a3;',
		'h-credit-card': '&#xe9a4;',
		'h-crop': '&#xe9a5;',
		'h-cup': '&#xe9a6;',
		'h-database': '&#xe9a7;',
		'h-delete': '&#xe9a8;',
		'h-desktop': '&#xe9a9;',
		'h-disco': '&#xe9aa;',
		'h-dollar-sign': '&#xe9ab;',
		'h-download-cloud': '&#xe9ac;',
		'h-download': '&#xe9ad;',
		'h-drive': '&#xe9ae;',
		'h-drop': '&#xe9af;',
		'h-edit-2': '&#xe9b0;',
		'h-edit-3': '&#xe9b2;',
		'h-edit': '&#xe9b3;',
		'h-email': '&#xe9b4;',
		'h-euro-sign': '&#xe9b5;',
		'h-external-link': '&#xe9b6;',
		'h-eye-off': '&#xe9b7;',
		'h-eye': '&#xe9b8;',
		'h-face-mask': '&#xe9b9;',
		'h-face-smile': '&#xe9ba;',
		'h-face': '&#xe9bb;',
		'h-facebook': '&#xe9bc;',
		'h-fast-forward-x3': '&#xe9bd;',
		'h-fast-forward': '&#xe9be;',
		'h-figma': '&#xe9bf;',
		'h-file-add': '&#xe9c0;',
		'h-file-damaged': '&#xe9c1;',
		'h-file-doc': '&#xe9c2;',
		'h-file-presentation': '&#xe9c3;',
		'h-file-remove': '&#xe9c4;',
		'h-file-spreadsheet': '&#xe9c5;',
		'h-file-text': '&#xe9c6;',
		'h-file': '&#xe9c7;',
		'h-filter': '&#xe9c9;',
		'h-flag': '&#xe9ca;',
		'h-fn': '&#xe9cb;',
		'h-folder-add': '&#xe9cc;',
		'h-folder-locked': '&#xe9ce;',
		'h-folder-remove': '&#xe9cf;',
		'h-folder-verified': '&#xe9d0;',
		'h-folder': '&#xe9d1;',
		'h-fork': '&#xe9d2;',
		'h-frame': '&#xe9d3;',
		'h-framer': '&#xe9d4;',
		'h-gift-open': '&#xe9d5;',
		'h-gift': '&#xe9d6;',
		'h-github': '&#xe9d7;',
		'h-globe': '&#xe9d8;',
		'h-grid': '&#xe9d9;',
		'h-hard-drive': '&#xe9da;',
		'h-hashtag': '&#xe9db;',
		'h-headphone': '&#xe9dc;',
		'h-heart': '&#xe9dd;',
		'h-help-circle2': '&#xe9de;',
		'h-home': '&#xe9df;',
		'h-I-want-to-drink': '&#xe9e0;',
		'h-inbox': '&#xe9e1;',
		'h-instagram': '&#xe9e2;',
		'h-italic': '&#xe9e3;',
		'h-key': '&#xe9e4;',
		'h-knife': '&#xe9e5;',
		'h-label-empty': '&#xe9e6;',
		'h-label-full': '&#xe9e7;',
		'h-latte': '&#xe9e8;',
		'h-layers': '&#xe9e9;',
		'h-layout': '&#xe9ea;',
		'h-lens': '&#xe9eb;',
		'h-linkedin': '&#xe9ec;',
		'h-list': '&#xe9ed;',
		'h-loader-1': '&#xe9ee;',
		'h-locked': '&#xe9ef;',
		'h-map-pin': '&#xe9f0;',
		'h-map': '&#xe9f1;',
		'h-maximise': '&#xe9f3;',
		'h-menu': '&#xe9f4;',
		'h-message-empty-bubble': '&#xe9f5;',
		'h-message-empty-circle': '&#xe9f6;',
		'h-message-empty-square': '&#xe9f7;',
		'h-message-full-bubble': '&#xe9f8;',
		'h-message-full-square-1': '&#xe9f9;',
		'h-message-full-square': '&#xe9fa;',
		'h-mic-off': '&#xe9fb;',
		'h-mic': '&#xe9fc;',
		'h-microphone': '&#xe9fd;',
		'h-minimise': '&#xe9ff;',
		'h-minus-circle': '&#xea00;',
		'h-minus-square': '&#xea01;',
		'h-minus': '&#xea02;',
		'h-moon': '&#xea03;',
		'h-more-horizontal': '&#xea04;',
		'h-more-vertical': '&#xea05;',
		'h-mouse-pointer': '&#xea06;',
		'h-move-horizontally': '&#xea07;',
		'h-move-vertically': '&#xea08;',
		'h-move': '&#xea09;',
		'h-movie': '&#xea0a;',
		'h-music': '&#xea0b;',
		'h-navigator-2': '&#xea0c;',
		'h-navigator-3': '&#xea0d;',
		'h-navigator': '&#xea0e;',
		'h-option': '&#xea0f;',
		'h-package': '&#xea10;',
		'h-paperclip': '&#xea11;',
		'h-partially-sunny': '&#xea12;',
		'h-pause': '&#xea13;',
		'h-pen-tool': '&#xea14;',
		'h-percent': '&#xea15;',
		'h-phone-forwarded': '&#xea16;',
		'h-phone-incoming': '&#xea17;',
		'h-phone-missed': '&#xea18;',
		'h-phone-off': '&#xea19;',
		'h-phone-ring': '&#xea1a;',
		'h-phone': '&#xea1b;',
		'h-picture': '&#xea1c;',
		'h-play': '&#xea1d;',
		'h-plus-circle': '&#xea1e;',
		'h-plus-square': '&#xea1f;',
		'h-plus': '&#xea20;',
		'h-pot': '&#xea21;',
		'h-pound-sign': '&#xea22;',
		'h-power': '&#xea23;',
		'h-printer': '&#xea24;',
		'h-radio': '&#xea25;',
		'h-repeat-1': '&#xea26;',
		'h-repeat': '&#xea27;',
		'h-rewind-x3': '&#xea28;',
		'h-rewind': '&#xea29;',
		'h-rss': '&#xea2a;',
		'h-save-1': '&#xea2b;',
		'h-scissors': '&#xea2d;',
		'h-send': '&#xea2e;',
		'h-server': '&#xea2f;',
		'h-settings': '&#xea30;',
		'h-share': '&#xea31;',
		'h-shield-off': '&#xea33;',
		'h-shield-safe': '&#xea34;',
		'h-shield': '&#xea35;',
		'h-shopping-cart': '&#xea36;',
		'h-shuffle-2': '&#xea37;',
		'h-shuffle': '&#xea38;',
		'h-sidebar-left': '&#xea39;',
		'h-sidebar-right': '&#xea3a;',
		'h-sketch': '&#xea3b;',
		'h-skip-back': '&#xea3c;',
		'h-slack': '&#xea3d;',
		'h-slash': '&#xea3e;',
		'h-slice': '&#xea3f;',
		'h-sliders-1': '&#xea40;',
		'h-sliders-2': '&#xea41;',
		'h-smartphone': '&#xea42;',
		'h-snow': '&#xea43;',
		'h-soap': '&#xea44;',
		'h-speaker': '&#xea45;',
		'h-spoon': '&#xea46;',
		'h-star': '&#xea47;',
		'h-status-offline': '&#xea48;',
		'h-status-ok': '&#xea49;',
		'h-status-transfering': '&#xea4a;',
		'h-sun-half': '&#xea4b;',
		'h-sun': '&#xea4c;',
		'h-sunrise': '&#xea4d;',
		'h-sunset': '&#xea4e;',
		'h-tablet': '&#xea4f;',
		'h-tag-empty': '&#xea50;',
		'h-tag-full': '&#xea51;',
		'h-tape': '&#xea52;',
		'h-television-2': '&#xea53;',
		'h-television': '&#xea54;',
		'h-thermometer': '&#xea55;',
		'h-thumbs-down': '&#xea56;',
		'h-thumbs-up': '&#xea57;',
		'h-toggle-left-2': '&#xea58;',
		'h-toggle-left': '&#xea59;',
		'h-toggle-right-2': '&#xea5a;',
		'h-toggle-right': '&#xea5b;',
		'h-tool': '&#xea5c;',
		'h-topbar': '&#xea5d;',
		'h-trash-1-open': '&#xea5e;',
		'h-trash-1': '&#xea5f;',
		'h-trash-2-open': '&#xea60;',
		'h-trash-2': '&#xea61;',
		'h-trash-3': '&#xea62;',
		'h-trending-down': '&#xea63;',
		'h-trending-up': '&#xea64;',
		'h-truck': '&#xea65;',
		'h-twitter': '&#xea66;',
		'h-type': '&#xea67;',
		'h-umbrella': '&#xea68;',
		'h-underline': '&#xea69;',
		'h-unlocked-2': '&#xea6a;',
		'h-unlocked': '&#xea6b;',
		'h-upload-cloud': '&#xea6c;',
		'h-upload': '&#xea6d;',
		'h-video-off': '&#xea6e;',
		'h-video': '&#xea6f;',
		'h-voicemail': '&#xea70;',
		'h-volume-high': '&#xea71;',
		'h-volume-low': '&#xea72;',
		'h-volume-off': '&#xea73;',
		'h-volume': '&#xea74;',
		'h-whatsapp': '&#xea76;',
		'h-wifi-off': '&#xea77;',
		'h-wifi-on': '&#xea78;',
		'h-wind': '&#xea79;',
		'h-x-circle': '&#xea7a;',
		'h-x-square': '&#xea7b;',
		'h-x': '&#xea7c;',
		'h-XD': '&#xea7d;',
		'h-youtube-pause': '&#xea7e;',
		'h-youtube-stop': '&#xea7f;',
		'h-youtube': '&#xea80;',
		'h-yuan-sign': '&#xea81;',
		'h-zap-off': '&#xea82;',
		'h-zap-on': '&#xea83;',
		'h-zoom-in': '&#xea84;',
		'h-zoom-out': '&#xea85;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/h-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
