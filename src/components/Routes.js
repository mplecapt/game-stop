import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home/Home'
import TicTacToe from '../pages/TicTacToe/TicTacToe'

export default function PageRoutes() {
	return (
		<Routes>
			<Route exact path="" element={<Home/>} />
			<Route path="tictactoe" element={<TicTacToe/>} />
			<Route path="ohhi" element={<h3>0h H1</h3>} />
			<Route path="energy" element={<h3>Energy</h3>} />
			<Route path="wordle" element={<h3>Wordle</h3>} />
			<Route path="*" element={<h3>404: Not Found</h3>} />
		</Routes>
	)
}