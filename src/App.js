import './styles/App.css';
import Navbar from './components/Navbar.js';
import PageRoutes from './components/Routes';
import { GiHamburgerMenu, GiHouse, GiInfinity, GiPlainSquare, GiTicTacToe } from "react-icons/gi";
import { useState } from 'react';

export default function App() {
	let [sidebarOpen, setSidebarOpen] = useState(true);

	return (
		<div className='App'>
			<div className={`fade ${sidebarOpen ? 'fade-expanded' : 'fade-collapsed'}`} onClick={()=>{setSidebarOpen(false)}} />
			<GiHamburgerMenu className='nav-menu-btn' onClick={()=>{setSidebarOpen(!sidebarOpen)}}/>
			<Navbar isOpen={sidebarOpen} 
				items={[
					{
						title: "Home",
						itemId: "",
						elemBefore: () => <GiHouse />
					},
					{
						title: "Logic",
						itemID: "logic",
						subNav: [
							{
								title: "Wordle",
								itemId: "wordle",
							},
							{
								title: "Mini-Crossword",
								itemId: "minicrossword",
							},
							{
								title: "Sudoku",
								itemId: "sudoku",
							},
						]
					},
					{
						title: 'Arcade',
						itemID: 'arcade',
						subNav: [
							{
								title: "Pong",
								itemID: "pong",
							},
							{
								title: "Snake",
								itemId: "snake",
							}
						]
					},
					{
						title: "Tic-Tac-Toe",
						itemId: "tictactoe",
						elemBefore: () => <GiTicTacToe />
					},
					{
						title: "0h H1",
						itemId: "ohhi",
						elemBefore: () => <GiPlainSquare />
					},
					{
						title: "Energy",
						itemId: "energy",
						elemBefore: () => <GiInfinity />
					},
				]}
			/>
			<PageRoutes/>
		</div>
	);
}