import styles from "./style.module.css";
import image from '../../assets/me.jpeg';

const Main = () => {
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};

	return (
		<div className={styles.main_container}>
			
			<nav className={styles.navbar}>
				<h1>Raja's zone here!</h1>
				<button className={styles.white_btn} onClick={handleLogout}>
					Logout
				</button>
			</nav>
			<img src={image} alt="Loading"/>
		</div>
	);
};

export default Main;