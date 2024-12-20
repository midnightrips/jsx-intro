function App() {
    return (
        <div>
            <Tweet
                username="pensrule"
                name="Amelia"
                date={new Date().toDateString()}
                message="I'm 14!"
            />
            <Tweet
                username="midnightrips"
                name="Ehretz"
                date={new Date().toDateString()}
                message="I'm almost 25!!"
            />
            <Tweet
                username="myusername"
                name="user"
                date={new Date().toDateString()}
                message="I'm not real!!!"
            />
        </div>
    );
}