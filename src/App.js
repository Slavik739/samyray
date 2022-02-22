import './App.css';
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/Nav";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom"

const App = (p) => {
	return (
		<BrowserRouter>
			<div className='app-wrapper'>
				<Header/>
				<NavBar/>
				<div className="app-wrapper-content">
					<Route path="/profile" render={() =>
						<Profile postData={p.state.profilePage.postData}/>}/>
					<Route exact path="/dialogs" render={() =>
						<Dialogs dialogs={p.state.profilePage.dialogs}
										 messages={p.state.messagesPage.messages}/>}/>
				</div>
			</div>
		</BrowserRouter>
	);
};

export default App;
