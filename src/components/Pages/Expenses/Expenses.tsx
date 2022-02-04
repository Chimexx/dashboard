import styles from "./Expenses.module.scss";
import personOne from "../../../assets/png/person1.png";
import personTwo from "../../../assets/png/person2.png";
import personThree from "../../../assets/png/person3.png";
import addIcon from "../../../assets/png/addIcon.png";
import menuIcon from "../../../assets/png/menuIcon.png";
import boxes from "../../../assets/png/boxes.png";
import plant from "../../../assets/png/plant.png";
import { BarChart, Bar, Cell, ResponsiveContainer } from "recharts";
import { useState } from "react";
import { todayExpenses, previousExpenses, spendCategories } from "../../../data";

const Expenses = () => {
	const [activeIndex, setActiveIndex] = useState(0);
	const data = [
		{
			name: "Page A",
			uv: 4000,
			pv: 2400,
			amt: 2400,
		},
		{
			name: "Page B",
			uv: 3000,
			pv: 1398,
			amt: 2210,
		},
		{
			name: "Page C",
			uv: 2000,
			pv: 9800,
			amt: 2290,
		},
		{
			name: "Page D",
			uv: 2780,
			pv: 3908,
			amt: 2000,
		},
		{
			name: "Page E",
			uv: 1890,
			pv: 4800,
			amt: 2181,
		},
		{
			name: "Page F",
			uv: 2390,
			pv: 3800,
			amt: 2500,
		},
		{
			name: "Page G",
			uv: 3490,
			pv: 4300,
			amt: 2100,
		},
		{
			name: "Page H",
			uv: 4000,
			pv: 2400,
			amt: 2400,
		},
		{
			name: "Page I",
			uv: 3000,
			pv: 1398,
			amt: 2210,
		},
		{
			name: "Page J",
			uv: 2000,
			pv: 9800,
			amt: 2290,
		},
		{
			name: "Page K",
			uv: 2780,
			pv: 3908,
			amt: 2000,
		},
		{
			name: "Page L",
			uv: 1890,
			pv: 4800,
			amt: 2181,
		},
		{
			name: "Page M",
			uv: 2390,
			pv: 3800,
			amt: 2500,
		},
		{
			name: "Page N",
			uv: 3490,
			pv: 4300,
			amt: 2100,
		},
	];

	const onMouseOver = (data: any, index: number) => setActiveIndex(index);
	return (
		<>
			<main className={styles.expenses}>
				<div className={styles.expensesCard}>
					<section className={styles.expensesOverview}>
						<div className={styles.expensesHeader}>
							<p className={styles.expensesTitle}>Expenses</p>
							<div className={styles.expensesActions}>
								<div className={styles.people}>
									<img className={styles.personOne} src={personOne} alt="personOne" />
									<img className={styles.personTwo} src={personTwo} alt="personTwo" />
									<img className={styles.personThree} src={personThree} alt="personThree" />
								</div>
								<button className={styles.addButton}>
									<img src={addIcon} alt="add" />
								</button>
							</div>
						</div>
						<p className={styles.dateRange}>01 - 25 March, 2022</p>
						<div className={styles.expensesChart}>
							<ResponsiveContainer width="100%" minHeight="9%">
								<BarChart data={data}>
									<Bar dataKey="uv" fill="rgb(21, 122, 255,0.2)" onMouseOver={onMouseOver}>
										{data.map((entry, index) => {
											return (
												<Cell
													cursor="pointer"
													key={index}
													fill={
														index === activeIndex
															? "rgb(21, 122, 255)"
															: "rgb(21, 122, 255, 0.2)"
													}
												/>
											);
										})}
									</Bar>
								</BarChart>
							</ResponsiveContainer>
						</div>
						<div className={styles.expensesToday}>
							<div className={styles.expensesTodayHeader}>
								<p className={styles.today}>Today</p>
								<button className={styles.menuIcon}>
									<img src={menuIcon} alt="menu" />
								</button>
							</div>
							<ul>
								{todayExpenses.map((expense) => {
									return (
										<li className={styles.expenseItem} key={expense.id}>
											<div className={styles.expenseItemLeft}>
												<div
													className={styles.expenseItemIcon}
													style={{ backgroundColor: expense.iconBackgroundColor }}
												>
													<img src={expense.icon} alt="cart" />
												</div>
												<div className={styles.expenseItemDetail}>
													<p className={styles.expenseItemTitle}>
														{expense.expense}
													</p>
													<p className={styles.expenseItemTime}>
														{expense.time} · {expense.location}
													</p>
												</div>
											</div>
											<p className={styles.expenseItemRight}>
												- ₦{expense.amount.toFixed(2)}
											</p>
										</li>
									);
								})}
							</ul>
						</div>
						<div className={styles.expensesPrev}>
							<div className={styles.expensesTodayHeader}>
								<p className={styles.today}>Monday, 23 March 2020</p>
								<button className={styles.menuIcon}>
									<img src={menuIcon} alt="menu" />
								</button>
							</div>
							<ul>
								{previousExpenses.map((expense) => {
									return (
										<li className={styles.expenseItem} key={expense.id}>
											<div className={styles.expenseItemLeft}>
												<div
													className={styles.expenseItemIcon}
													style={{ backgroundColor: expense.iconBackgroundColor }}
												>
													<img src={expense.icon} alt="cart" />
												</div>
												<div className={styles.expenseItemDetail}>
													<p className={styles.expenseItemTitle}>
														{expense.expense}
													</p>
													<p className={styles.expenseItemTime}>
														{expense.time} · {expense.location}
													</p>
												</div>
											</div>
											<p className={styles.expenseItemRight}>- ₦{expense.amount}</p>
										</li>
									);
								})}
							</ul>
						</div>
					</section>
					<section className={styles.moneyOverview}>
						<div>
							<div className={styles.moneyOverviewTitle}>Where did your money go?</div>
							<ul>
								{spendCategories.map((category) => {
									return (
										<li className={styles.categoryItem}>
											<div className={styles.SpendCategory}>
												<p className={styles.SpendCategoryTitle}>
													{category.category}
												</p>
												<p className={styles.SpendCategoryAmount}>
													{category.amount.toFixed(2)}
												</p>
											</div>

											<div className={styles.SpendCategoryBar}>
												<div
													className={styles.SpendCategoryColoredBar}
													style={{
														width: `${
															(category.amount /
																spendCategories.reduce(
																	(acc, current) => acc + current.amount,
																	0
																)) *
															100
														}%`,
													}}
												></div>
											</div>
										</li>
									);
								})}
							</ul>
						</div>

						<div className={styles.moneyTips}>
							<div className={styles.elements}>
								<div className={styles.moneyTipsImages}>
									<img src={boxes} alt="boxes" />
									<img src={plant} alt="plant" />
								</div>
								<p className={styles.moneyTipsCaption}>Save more money</p>
								<p className={styles.moneyTipsText}>
									Eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
									minim.
								</p>
								<button className={styles.moneyTipsButton}>VIEW TIPS</button>
							</div>
						</div>
					</section>
				</div>
			</main>
		</>
	);
};

export default Expenses;
