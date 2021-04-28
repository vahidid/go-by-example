import Woff2 from "./../Assets/Fonts/Vazir-Code.woff2";
import Woff from "./../Assets/Fonts/Vazir-Code.woff";
import Ttf from "./../Assets/Fonts/Vazir-Code.ttf";

export const VazirCodeWoff2 = {
	fontFamily: "VazirCode",
	fontStyle: "normal",
	fontWeight: 400,
	src: `
      local('VazirCode'),
      local('VazirCode-Regular'),
      url(${Woff2}) format('woff2')
    `,
};

export const VazirCodeWoff = {
	fontFamily: "VazirCode",
	fontStyle: "normal",
	fontWeight: 400,
	src: `
      local('VazirCode'),
      local('VazirCode-Regular'),
      url(${Woff}) format('woff')
    `,
};

export const VazirCodeTtf = {
	fontFamily: "VazirCode",
	fontStyle: "normal",
	fontWeight: 400,
	src: `
      local('VazirCode'),
      local('VazirCode-Regular'),
      url(${Ttf}) format('ttf')
    `,
};
