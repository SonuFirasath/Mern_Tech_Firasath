import './App.css'
import LikeButton from './likeButton'

function App() {

  return (
    <div className="like-btn">
      <LikeButton img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGF8FwEQcN76kLjRHfGta7dnHHM0BgeFQ7Wg&s"} disc={"Beautiful image that i took"}/>
      <LikeButton img={"https://images.pexels.com/photos/1887624/pexels-photo-1887624.jpeg"} disc={"Nice and cozy place to visit"}/>
      <LikeButton img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtwEchnACz50jFWyNdnPaHD4G2Fsgq-jO-ug&s"} disc={"Nice and cozy place to visit"}/>
      <LikeButton img={"https://images.pexels.com/photos/30240075/pexels-photo-30240075/free-photo-of-snowy-winter-sunrise-with-pine-trees.jpeg"} disc={"I love snow guyz !!"}/>
      <LikeButton img={"https://images.pexels.com/photos/36097037/pexels-photo-36097037/free-photo-of-serene-winter-sunset-over-frozen-lake.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"} disc={"I love snow guyz !!"}/>
      <LikeButton img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtF1Gz_Xsh2r_DfO5JaLspe4oKYcEGo-myBg&s"} disc={"Nice and cozy place to visit"}/>
    </div>
  )
}

export default App
