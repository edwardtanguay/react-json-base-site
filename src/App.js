import './App.css';

const title = "The Info Site";
const colors = ['yellow', 'orange', 'purple', 'black'];
const config = {
	status: 'online',
	os: 'windows'
};

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
		</div>
	);
}

export default App;
