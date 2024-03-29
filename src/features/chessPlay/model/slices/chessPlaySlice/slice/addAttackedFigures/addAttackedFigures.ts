import { ChessPlaySchema } from '../../../../types/chessPlaySchema';
import { addFiguresMechanisms } from '../addFiguresMechanisms/addFiguresMechanisms';
import { getKingSquare } from '../helpers/getKingSquare/getKingSquare';

export const addAttackedFigures = (state: ChessPlaySchema) => {
	Object.keys(state.locations).forEach((square) => {
		const figure = state.locations[square];
		const x = Number(square[0]);
		const y = Number(square[1]);
		state.locations[square].attackedSquares = [];
		const attackedSquares: string[] = [];

		addFiguresMechanisms(x, y, attackedSquares, state.locations, figure);

		if (state.locations[square].color === state.mover) {
			state.mockLocations[square].attackedSquares = attackedSquares;
		} else {
			state.locations[square].attackedSquares = attackedSquares;
		}
	});
	// ====================

	let mockLocations = cloneObj(state.mockLocations);
	Object.keys(mockLocations).forEach((square) => {
		const figure = mockLocations[square];
		if (figure.color === state.mover) {
			figure.attackedSquares.forEach((attackedSquare) => {
				mockLocations[attackedSquare] = cloneObj(figure);
				delete mockLocations[square];

				const moverKingSquare = getKingSquare(state.mover, mockLocations);
				const attackedSquaresByEnemy: string[] = [];

				Object.keys(mockLocations).forEach((enemySquare) => {
					if (mockLocations[enemySquare].color !== state.mover) {
						const x = Number(enemySquare[0]);
						const y = Number(enemySquare[1]);
						const attackedSquares: string[] = [];

						addFiguresMechanisms(
							x,
							y,
							attackedSquares,
							mockLocations,
							mockLocations[enemySquare]
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

				mockLocations = cloneObj(state.mockLocations);
			});
		}
	});

	const isMat = Object.keys(state.locations).every((square) => {
		const figure = state.locations[square];
		if (figure.color === state.mover) {
			return figure.attackedSquares.length === 0;
		} else {
			return true;
		}
	});

	if (isMat) {
		console.log(`Стороне ${state.mover} поставлен мат`);
	}

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

	// const newAttackedSquares = state.locations[square].attackedSquares.filter(
	// 	(att) => att !== square
	// );
};
function cloneObj<T>(obj: T): T {
	return JSON.parse(JSON.stringify(obj));
}
