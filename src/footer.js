
export default function MyFooter() {
    return (
        <div>
            <footer className="App-footer">
                <div className="flexcon spaced">
                    <a className="custom-button" href="/">Button</a>
                    <a className="custom-button" href="/">Button</a>
                    <a className="custom-button" href="/">Button</a>
                    <a className="custom-button" href="/">Button</a>
                </div>
                <div className="flexcon">
                    <p>
                        Made with
                    </p>
                    <p className="heart"> ❤ </p>
                    <p>
                        by <a href="https://github.com/mattkbrat/" rel="noreferrer" target="_blank">Matt</a>
                    </p>
                </div>
            </footer>
        </div>
    );
}