import { ChessPlaySchema } from '../model/types/chessPlaySchema';

export const initialState: ChessPlaySchema = {
	availableSquares: [],
	locations: {
		12: {
			color: 'white',
			figure: 'pawn',
		},
		22: {
			color: 'white',
			figure: 'pawn',
		},
		32: {
			color: 'white',
			figure: 'pawn',
		},
		42: {
			color: 'white',
			figure: 'pawn',
		},
		52: {
			color: 'white',
			figure: 'pawn',
		},
		62: {
			color: 'white',
			figure: 'pawn',
		},
		72: {
			color: 'white',
			figure: 'pawn',
		},
		82: {
			color: 'white',
			figure: 'pawn',
		},
		// ======
		17: {
			color: 'black',
			figure: 'pawn',
		},
		27: {
			color: 'black',
			figure: 'pawn',
		},
		37: {
			color: 'black',
			figure: 'pawn',
		},
		47: {
			color: 'black',
			figure: 'pawn',
		},
		57: {
			color: 'black',
			figure: 'pawn',
		},
		67: {
			color: 'black',
			figure: 'pawn',
		},
		77: {
			color: 'black',
			figure: 'pawn',
		},
		87: {
			color: 'black',
			figure: 'pawn',
		},
		//============
		//============
		//============
		11: {
			color: 'white',
			figure: 'rook',
		},
		81: {
			color: 'white',
			figure: 'rook',
		},
		// ===
		21: {
			color: 'white',
			figure: 'knight',
		},
		71: {
			color: 'white',
			figure: 'knight',
		},
		// ===
		31: {
			color: 'white',
			figure: 'bishop',
		},
		61: {
			color: 'white',
			figure: 'bishop',
		},
		// ===
		41: {
			color: 'white',
			figure: 'queen',
		},
		51: {
			color: 'white',
			figure: 'king',
		},
		// ==================================
		// ==================================
		18: {
			color: 'black',
			figure: 'rook',
		},
		88: {
			color: 'black',
			figure: 'rook',
		},
		// ===
		28: {
			color: 'black',
			figure: 'knight',
		},
		78: {
			color: 'black',
			figure: 'knight',
		},
		// ===
		38: {
			color: 'black',
			figure: 'bishop',
		},
		68: {
			color: 'black',
			figure: 'bishop',
		},
		// ===
		48: {
			color: 'black',
			figure: 'queen',
		},
		58: {
			color: 'black',
			figure: 'king',
		},
	},
};
