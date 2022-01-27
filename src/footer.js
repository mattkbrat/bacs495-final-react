
export default function MyFooter(props) {
    const myName = props.myName
        return (
            <div>
                <h2 className="App-footer">
                    <p>
                        Hello, {myName}
                    </p>
                </h2>
            </div>
        );
    }