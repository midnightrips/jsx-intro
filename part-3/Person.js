const max_name_length = 6;

function Person(props) {
    return (
        <div>
            <p>Learn some information about this person.</p>
            <span>Name: {props.name.slice(0, max_name_length)}</span>
            <br></br>
            <span>Age: {props.age}</span>
            <h3>{props.age >= 18 ? "please go vote!" : "you must be 18."}</h3>
            <ul>
                {props.hobbies.map(hobby => <li>{hobby}</li>)}
            </ul>
        </div>
    );
}