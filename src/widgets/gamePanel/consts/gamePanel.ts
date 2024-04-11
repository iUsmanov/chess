import { ChessLocations } from '@/entities/chessBoard';
import { GamePanelSchema } from '../model/types/gamePanelSchema';

const initialLocations: ChessLocations = {
	12: {
		color: 'white',
		name: 'pawn',
		attackedSquares: [],
	},
	22: {
		color: 'white',
		name: 'pawn',
		attackedSquares: [],
	},
	32: {
		color: 'white',
		name: 'pawn',
		attackedSquares: [],
	},
	42: {
		color: 'white',
		name: 'pawn',
		attackedSquares: [],
	},
	52: {
		color: 'white',
		name: 'pawn',
		attackedSquares: [],
	},
	62: {
		color: 'white',
		name: 'pawn',
		attackedSquares: [],
	},
	72: {
		color: 'white',
		name: 'pawn',
		attackedSquares: [],
	},
	82: {
		color: 'white',
		name: 'pawn',
		attackedSquares: [],
	},
	// ======
	17: {
		color: 'black',
		name: 'pawn',
		attackedSquares: [],
	},
	27: {
		color: 'black',
		name: 'pawn',
		attackedSquares: [],
	},
	37: {
		color: 'black',
		name: 'pawn',
		attackedSquares: [],
	},
	47: {
		color: 'black',
		name: 'pawn',
		attackedSquares: [],
	},
	57: {
		color: 'black',
		name: 'pawn',
		attackedSquares: [],
	},
	67: {
		color: 'black',
		name: 'pawn',
		attackedSquares: [],
	},
	77: {
		color: 'black',
		name: 'pawn',
		attackedSquares: [],
	},
	87: {
		color: 'black',
		name: 'pawn',
		attackedSquares: [],
	},
	//============
	//============
	//============
	11: {
		color: 'white',
		name: 'rook',
		attackedSquares: [],
	},
	81: {
		color: 'white',
		name: 'rook',
		attackedSquares: [],
	},
	// ===
	21: {
		color: 'white',
		name: 'knight',
		attackedSquares: [],
	},
	71: {
		color: 'white',
		name: 'knight',
		attackedSquares: [],
	},
	// ===
	31: {
		color: 'white',
		name: 'bishop',
		attackedSquares: [],
	},
	61: {
		color: 'white',
		name: 'bishop',
		attackedSquares: [],
	},
	// ===
	41: {
		color: 'white',
		name: 'queen',
		attackedSquares: [],
	},
	51: {
		color: 'white',
		name: 'king',
		attackedSquares: [],
	},
	// ==================================
	// ==================================
	18: {
		color: 'black',
		name: 'rook',
		attackedSquares: [],
	},
	88: {
		color: 'black',
		name: 'rook',
		attackedSquares: [],
	},
	// ===
	28: {
		color: 'black',
		name: 'knight',
		attackedSquares: [],
	},
	78: {
		color: 'black',
		name: 'knight',
		attackedSquares: [],
	},
	// ===
	38: {
		color: 'black',
		name: 'bishop',
		attackedSquares: [],
	},
	68: {
		color: 'black',
		name: 'bishop',
		attackedSquares: [],
	},
	// ===
	48: {
		color: 'black',
		name: 'queen',
		attackedSquares: [],
	},
	58: {
		color: 'black',
		name: 'king',
		attackedSquares: [],
	},
	// =====DAADDAADAD
	// 63: {
	// 	color: 'black',
	// 	name: 'pawn',
	// 	attackedSquares: [],
	// },
	// 24: {
	// 	color: 'white',
	// 	name: 'bishop',
	// 	attackedSquares: [],
	// },
	// 46: {
	// 	color: 'white',
	// 	name: 'pawn',
	// 	attackedSquares: [],
	// },
};

export const initialState: GamePanelSchema = {
	availableSquares: [],
	locations: initialLocations,
	mockLocations: initialLocations,
	mover: 'white',
	history: [{ from: '00', to: '00', locations: initialLocations }],
	clocks: {
		black: {
			time: 60000,
			savedTime: 60000,
		},
		white: {
			time: 60000,
			savedTime: 60000,
		},
	},
	isCheck: false,
	isCheckmate: false,
	boardSettings: {
		figuresPack: 'classic',
		size: 's',
		style: 'wood',
	},
	game: 'chess',
};
