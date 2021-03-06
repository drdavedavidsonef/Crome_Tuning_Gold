function addRpmLimitsToROM(rt) {
  if (rt == null) rt = window.external.rom.base;
  switch (rt) {
    case 0: // P28
      //addRpmLimitsToP28();
    break;
    case 1: // P30
      addRpmLimitsToP30();
    break;
    case 2: // P72
      addRpmLimitsToP72();
  }
}

function addShiftLightToROM(rt) {
  if (rt == null) rt = window.external.rom.base;
  switch (rt) {
    case 0: // P28
      //addShiftLightToP28();
    break;
    case 1: // P30
      addShiftLightToP30();
    break;
    case 2: // P72
      addShiftLightToP72();
  }
}

/********************************************************************************
*********************************************************************************
** add_RpmLimitsToP##
**
**Desc: These functions add Full Throttle Launch support.
**
********************************************************************************/

function addRpmLimitsToP28 () {
			//window.external.rom.byteAt(0x48E1) = 0x03;
			//window.external.rom.wordAt(0x48E2) = 0x####;
			//_rom_fill (0x48E4, 0x48F4, 0xFF);
			//s = new Array();
			//_rom_write(0x####, s, 0x##);
			//window.external.refresh();
			return;
}

function addRpmLimitsToP30 () {
            window.external.rom.byteAt(0x3F98) = 0x03;
			window.external.rom.wordAt(0x3F99) = 0x79E6;
			_rom_fill (0x3F9B, 0x3FA9, 0xFF);
			s = new Array(0xC5,0xA3,0xC0,0xFF,0xCD,0x33,0xC5,0xB4,0xC0,0x05,0xCD,0x0C,
						0xEA,0x11,0x09,0x67,0x08,0x02,0x52,0x67,0xFA,0x01,0xCB,0x03,
						0xEB,0x10,0x15,0xB5,0x1A,0xD0,0xA0,0x02,0xA2,0x08,0xD3,0x00,
						0x42,0xD3,0x02,0xA2,0x18,0xE5,0xF2,0xD5,0x1A,0x03,0xAA,0x3F,
						0x67,0xFA,0x00,0x52,0x67,0xF0,0x00,0xCB,0xE2,0xE5,0xAC,0x86,
						0x50,0x00,0x52,0xF9,0xE5,0xAC,0xCB,0xD7);
			_rom_write(0x79E6, s, 0x44);
			window.external.refresh ();
			return;
}
function addRpmLimitsToP72() {
			window.external.rom.byteAt(0x3FC3) = 0x03;
			window.external.rom.wordAt(0x3FC4) = 0x6899;
			_rom_fill (0x3FC6, 0x3FD6, 0xFF);
			s = new Array(0xC5,0xBB,0xC0,0xFF,0xCD,0x35,0xC5,0xCC,0xC0,0x05,0xCD,0x0C,
						0xEA,0x11,0x09,0x67,0x08,0x02,0x52,0x67,0xFA,0x01,0xCB,0x03,
						0xEB,0x10,0x17,0xB5,0x1A,0xD0,0xA0,0x02,0xA2,0xD0,0xFE,0xD3,
						0x12,0x42,0xD3,0x14,0xA2,0xE0,0x01,0xE5,0xF8,0xD5,0x1A,0x03,
						0xD7,0x3F,0x67,0xFA,0x00,0x52,0x67,0xF0,0x00,0xCB,0xE0,0xE5,
						0xC4,0x86,0x50,0x00,0x52,0xF9,0xE5,0xC4,0xCB,0xD5);
			_rom_write(0x6899, s, 0x46);
			window.external.refresh();
			return;
}

////////////////////////////////////////////////////////////////////////////////
/*******************************************************************************
** add_ShiftLightToP##
**
**Desc: These functions add Full Throttle Launch support.
**
********************************************************************************/

function addShiftLightToP28 () {
			//window.external.rom.byteAt(0x####) = 0x03;
			//window.external.rom.wordAt(0x####) = 0x####;
			//s = new Array();
			//_rom_write(0x####, s, 0x##);
			//window.external.refresh();
			return;
}

function addShiftLightToP30 () {
            window.external.rom.byteAt(0x42AE) = 0x03;
			window.external.rom.wordAt(0x42AF) = 0x7A2A;
			s = new Array(0xCA,0x18,0x90,0x9D,0x4C,0x7A,0xC5,0x06,0x28,0xCD,0x09,0x90,
						0x9C,0x4A,0x7A,0xB5,0xAC,0xC1,0xCF,0x06,0xC5,0x22,0x0C,0x03,
						0xB1,0x42,0xC5,0x22,0x1C,0x03,0xB1,0x42,0xF0,0x00,0x01);
			_rom_write(0x7A2A, s, 0x23);
			window.external.refresh ();
			return;
}
function addShiftLightToP72() {
			window.external.rom.byteAt(0x4291) = 0x03;
			window.external.rom.wordAt(0x4292) = 0x68DF;
			s = new Array(0xCA,0x18,0x90,0x9D,0x01,0x69,0xC5,0x06,0x28,0xCD,0x09,0x90,
						0x9C,0xFF,0x68,0xB5,0xC4,0xC1,0xCF,0x06,0xC5,0x22,0x0C,0x03,
						0x94,0x42,0xC5,0x22,0x1C,0x03,0x94,0x42,0xF0,0x00,0x01);
			_rom_write(0x68DF, s, 0x23);
			window.external.refresh();
			return;
}

////////////////////////////////////////////////////////////////////////////////
/******************************************************************************/

function _rom_write(startAt, v, count) {
	for (c = 0; c < count; c++) {
	   window.external.rom.byteAt(startAt + c) = v[c];
	}
}

function _rom_fill (fromAdr, toAdr, byteFill) {
	if (byteFill == null) byteFill = 0x00;
	for (i = fromAdr; i <= toAdr; i++) {
		window.external.rom.byteAt(i) = byteFill;
	}
}
