// using the props : a machine that ensures that the passed vlaue
// is of the correct datattypes.
function Student (props) {
    return (
        <div className = "Student">
            <p> Name : {props.name}</p>
            <p> Age : {props.age}</p>
            <p>Studnet : {props.isStudent ? "yes" : "no"}</p>
        </div>
    );
}
export default Student