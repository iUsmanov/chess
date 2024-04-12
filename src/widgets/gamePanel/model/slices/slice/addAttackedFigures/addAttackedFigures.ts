import { deepClone } from '@/shared/lib/helpers/deepClone/deepClone';
import { GamePanelSchema } from '../../../types/gamePanelSchema';
import { addFiguresMechanisms } from '../addFiguresMechanisms/addFiguresMechanisms';
import { getKingSquare } from '../helpers/getKingSquare/getKingSquare';
import { getIsCheckmate } from '../helpers/getIsCheckmate/getIsCheckmate';
import { takePass } from '../takePass/takePass';
import { getIsCheck } from '../helpers/getIsCheck/getIsCheck';
import { getIsStalemate } from '../helpers/getIsStalemate/getIsStalemate';
import { getEnemy } from '@/entities/chessBoard';

export const addAttackedFigures = (state: GamePanelSchema) => {
	Object.keys(state.locations).forEach((square) => {
		state.locations[square].attackedSquares = [];
		const attackedSquares: string[] = [];

		addFiguresMechanisms(
			square,
			attackedSquares,
			state.locations,
			state.history[state.history.length - 1]
		);

		if (state.locations[square].color === state.mover) {
			state.mockLocations[square].attackedSquares = attackedSquares;
		} else {
			state.locations[square].attackedSquares = attackedSquares;
		}
	});
	// ====================

	let mockLocations = deepClone(state.mockLocations);
	Object.keys(mockLocations).forEach((square) => {
		const figure = mockLocations[square];
		if (figure.color === state.mover) {
			figure.attackedSquares.forEach((attackedSquare) => {
				takePass(state, mockLocations, square, attackedSquare);
				mockLocations[attackedSquare] = deepClone(figure);
				delete mockLocations[square];

				const moverKingSquare = getKingSquare(state.mover, mockLocations);
				const attackedSquaresByEnemy: string[] = [];

				Object.keys(mockLocations).forEach((enemySquare) => {
					if (mockLocations[enemySquare].color !== state.mover) {
						const attackedSquares: string[] = [];

						addFiguresMechanisms(
							enemySquare,
							attackedSquares,
							mockLocations,
							state.history[state.history.length - 1]
						);
						attackedSquaresByEnemy.push(...attackedSquares);
					}
				});

				if (
					!attackedSquaresByEnemy.includes(moverKingSquare) &&
					!state.locations[square].attackedSquares.includes(attackedSquare)
				) {
					state.locations[square].attackedSquares.push(attackedSquare);
				}

				mockLocations = deepClone(state.mockLocations);
			});
		}
	});

	if (getIsCheck(state)) {
		state.isCheck = true;
		console.log(`Стороне ${state.mover} поставлен шах`);
	} else {
		state.isCheck = false;
	}

	if (getIsStalemate(state)) {
		console.log(`Стороне ${state.mover} поставлен пат`);

		state.gameResult = {
			reason: 'stalemate',
			winner: 'draw',
		};
	}

	if (getIsCheckmate(state)) {
		console.log(`Стороне ${state.mover} поставлен мат`);

		state.gameResult = {
			reason: 'checkmate',
			winner: getEnemy(state.mover),
		};
	}
};

/* 
Проитерироваться по фигурам врага и добавить атакованные ими фигуры в их locations. 
Проитерироваться по фигурам мувера и добавить атакованные ими фигуры в их mockLocations. 
const savedMockLocations = cloneObj(mockLocations)

Проитерироваться по mockLocations
	const square = ''
	Если данная mockLocation принадлежит муверу
		Проитерироваться по attackedSquares каждого mockLocation
			Сделать каждый возможный ход mockLocation-ом
			const moverKingSquare = ''
			const attackedSquaresByEnemy = []
			Проитерироваться по mockLocations
				Если данная mockLocation принадлежит противнику
					const attackedSquares = []
					Вызвать addFiguresMechanisms
					Добавить attackedSquares в attackedSquaresByEnemy
			Если attackedSquaresByEnemy НЕ содержит moverKingSquare
				В state.locations[square].attackedSquares добавить attackedSquare
			state.mockLocations = cloneObj(savedMockLocations)

 */
