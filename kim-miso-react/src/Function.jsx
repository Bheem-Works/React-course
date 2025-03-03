
function Button () {
    const Miso1= 'Eggs'
    const Miso2= 'Meat'

    function Hello () {
        return "Hello world";
    }
    return (
        <>
        <p>{Hello()}</p>
        <button>{Miso2}</button>
        </>
);
}

export default Button