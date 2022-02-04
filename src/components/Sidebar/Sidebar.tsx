import styles from "./Sidebar.module.scss";
import samanthImg from "../../assets/png/samantha.png";
import { Link, useLocation } from "react-router-dom";

const sidebarNavLinks = ["dashboard", "expenses", "wallets", "summary", "accounts", "settings"];

const Sidebar = () => {
	const location = useLocation();

	return (
		<>
			<aside className={styles.sidebar}>
				<div className={styles.sidebarContent}>
					<div className={styles.profileDetails}>
						<div className={styles.profileImageDiv}>
							<img className={styles.profileImg} src={samanthImg} alt="samantha" />
							<p className={styles.notifications}>4</p>
						</div>
						<p className={styles.username}>Samantha</p>
						<p className={styles.useremail}>Samantha@gmail.com</p>
					</div>

					<nav className={styles.sidebarNav}>
						<ul>
							{sidebarNavLinks.map((NavLink, index) => {
								return (
									<li className={styles.sidebarNavItem} key={index}>
										<Link
											className={
												location.pathname === `/${NavLink}`
													? styles.sidebarLinkActive
													: styles.sidebarLink
											}
											to={`/${NavLink}`}
										>
											{NavLink}
										</Link>
									</li>
								);
							})}
						</ul>
					</nav>
				</div>
			</aside>
		</>
	);
};

export default Sidebar;
