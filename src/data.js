import cartIcon from "./assets/svg/cartIcon.svg";
import houseIcon from "./assets/svg/houseIcon.svg";
import transportIcon from "./assets/svg/transportIcon.svg";

export const todayExpenses = [
	{
		id: 1,
		expense: "Grocery",
		time: "5:12 pm",
		location: "Belanja di pascar",
		amount: 326.8,
		icon: cartIcon,
		iconBackgroundColor: "#32a7e2",
	},
	{
		id: 2,
		expense: "Transportation",
		time: "5:12 pm",
		location: "Naik bus umum",
		amount: 15.0,
		icon: transportIcon,
		iconBackgroundColor: "#B548C6",
	},
	{
		id: 3,
		expense: "Housing",
		time: "5:12 pm",
		location: "Bayar Listrik",
		amount: 185.75,
		icon: houseIcon,
		iconBackgroundColor: "#FF8700",
	},
];

export const previousExpenses = [
	{
		id: 1,
		expense: "Food and Drink",
		time: "5:12 pm",
		location: "Makan Steak",
		amount: 156.0,
		icon: cartIcon,
		iconBackgroundColor: "#DC3434",
	},
	{
		id: 2,
		expense: "Entertainment",
		time: "5:12 pm",
		location: "Nonton Bioskop",
		amount: 35.2,
		icon: transportIcon,
		iconBackgroundColor: "#4BA83D",
	},
];

export const spendCategories = [
	{
		id: 1,
		category: "Food and Drinks",
		amount: 872.4,
	},
	{
		id: 2,
		category: "Shopping",
		amount: 1378.2,
	},
	{
		id: 3,
		category: "Housing",
		amount: 928.5,
	},
	{
		id: 4,
		category: "Transportation",
		amount: 420.7,
	},
	{
		id: 5,
		category: "Vehicle",
		amount: 520,
	},
];
