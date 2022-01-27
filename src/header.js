
export default function MyHeader(props){
        return (
            <div>
            <header className="App-header">
                <a
                    className="App-link"
                    href={props.about.linkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    🏫 bacs495-029
                </a>
                <input type="search"/>
            </header>
            </div>
        );
    }

