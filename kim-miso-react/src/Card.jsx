import vimImage from'./assets/MrVim.jpg'

function Card() {
    return(
        <div className = "card">
            <img src={vimImage} alt="It' vim image" className ="imgCard"/>
            <h1 className="title">भीम बहादुर खपाङ्गी मगर </h1>
            <p className="text">भीम बहादुर खपाङ्गी मगर  such a sexy boy. So Hoot! Yoosh...</p>
        </div>
    )
}
export default Card