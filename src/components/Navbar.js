import '../styles/Navbar.css'
import { Navigation } from 'react-minimal-side-navigation';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Navbar({items, isOpen}) {
	const location = useLocation();
	const navigate = useNavigate();

	return (
		<nav className={`navbar-container ${isOpen ? 'navbar-expanded' : 'navbar-collapsed'}`}>
			<div className='flex-center'>
				<span className='navbar-title'>Game Corner</span>
			</div>
			<Navigation
				activeItemId={location.pathname}
				onSelect={({itemId}) => {
					navigate(itemId)
				}}
				items={items.map((item) => {
					item.title = "    " + item.title;
					return item;
				})}
			/>
		</nav>
	);
}