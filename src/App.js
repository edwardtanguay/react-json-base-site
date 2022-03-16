import { useState, useEffect } from 'react';
import './App.scss';
import flashcards from './data/flashcards.json';
import config from './data/config.json';
import users from './data/users.json';

const url = 'https://raw.githubusercontent.com/graphql-compose/graphql-compose-examples/master/examples/northwind/data/json/employees.json';

const title = "The Info Site";
const colors = ['yellow', 'orange', 'purple', 'black'];

function App() {
	const [employees, setEmployees] = useState([]);

	useEffect(() => {
		(async () => {
			const response = await fetch(url);
			const data = await response.json();
			setEmployees(data);
		})();
	});

	return (
		<div className="App">
			<h1>{title}</h1>
			<p>This is a test.</p>
			<ul>
				{colors.map((color, i) => {
					return (
						<li key={i}>{color}</li>
					)
				})}
			</ul>
			<p>Status: {config.status}</p>

			<h2>Flashcards</h2>
			<div className="flashcards">
				{flashcards.map(flashcard => {
					return (
						<div key={flashcard.id} className="flashcard" >
							<div className="front">{flashcard.front}</div>
							<div className="back">{flashcard.back}</div>
						</div>
					)
				})}
			</div>
			<h2>Users</h2>
			<ul>
				{users.map((user, i) => {
					return (
						<li key={i}>{user.firstName} {user.lastName}</li>
					)
				})}
			</ul>
			<h2>Employees</h2>
			<p>Number of employees: {employees.length}</p>
			<ul>
				{employees.map((employee, i) => {
					return (
						<li key={i}>{employee.firstName} {employee.lastName}</li>
					)
				})}
			</ul>
		</div>
	);
}

export default App;
