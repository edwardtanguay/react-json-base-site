import './App.css';
import flashcards from './data/flashcards.json';
import config from './data/config.json';
import users from './data/users.json';

const title = "The Info Site";
const colors = ['yellow', 'orange', 'purple', 'black'];

function App() {
	return (
		<div className="App">
			<h1>{title}</h1>
			<p>This is a test.</p>
			<ul>
				{colors.map(color => {
					return (
						<li>{color}</li>
					)
				})}
			</ul>
			<p>Status: {config.status}</p>

			<h2>Flashcards</h2>
			<div className="flashcards">
				{flashcards.map(flashcard => {
					return (
						 <div className="flashcard">
							<div className="front">{flashcard.front}</div>
							<div className="back">{flashcard.back}</div>
						 </div>
					)
				})}
			</div>
			<h2>Users</h2>
			<ul>
				{users.map(user => {
					return (
						<li>{user.firstName} {user.lastName}</li>
					)
				})}
			</ul>
		</div>
	);
}

export default App;
