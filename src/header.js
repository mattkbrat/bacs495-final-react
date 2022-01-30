
export default function MyHeader(){
        return (
            <div>
            <header className="App-header">
                <a className="heart" target="_self"
                    href='/'
                    rel="noopener noreferrer"
                >
                    🏫
                </a>
                <p>Bootstrap</p>
                <input type="text" placeholder="Search..." name="search"/>
                <a className="custom-button" href="/">Log In </a>
                <a className="custom-button call" href="/">Sign Up</a>
            </header>
            </div>
        );
    }

