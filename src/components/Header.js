
import reader from './reader1.jpg'

const Header = () =>{
    
    return(
        <div className="top">
            <h1>ወሬ Blogs</h1>
            <p>"awsome place to make oneself productive and entertained through daily updates."</p>
            <img src={reader} alt="" />
            <hr />
        </div>
    )
}

export default Header