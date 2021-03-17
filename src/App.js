import './App.css';


const App = () => {
    return (
        <div className='app-wrapper'>
           <header className='header'>
               <img className='logo' src="https://www.crazyhippos.in/wp-content/uploads/2018/02/logo-23.jpg" alt="logo"/>
           </header >
           <nav className='nav'>
               <ul>
                   <li><a href="#">Profile</a></li>
                   <li><a href="#">Messages</a></li>
                   <li><a href="#">News</a></li>
                   <li><a href="#">Music</a></li>
                   <li><a href="#">Settings</a></li>
               </ul>
           </nav>
            <div className='content'>
                <div>
                <img src="https://thumbs.dreamstime.com/b/butterfly-flower-23417093.jpg" alt=""/>
                </div>
                <div>
                    ava+description</div>
                <div>
                    my post
                    <div>
                        new post
                    </div>
                </div>
                <div>
                    post 1
                </div>
                <div>
                    post 2
                </div>
            </div>

        </div>
    );
};


export default App;
