import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';

const Header = () => (
	<header class={style.header}>
		<h1>Schmid's Typography Editor</h1>
		<nav>
			<Link activeClassName={style.active} href="/">Edit</Link>
			<Link activeClassName={style.active} href="/profile">View</Link>
		</nav>
	</header>
);

export default Header;
