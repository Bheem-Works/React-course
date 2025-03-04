
function Event () {
    const mouse = () => alert('OOPS!');
    const mouse2 = (e) => e.target.textContent = "Vim 👍" ;
    return(
        <button onClick={(e)=>mouse2(e)}>Click me</button>
    );
} 
export default Event