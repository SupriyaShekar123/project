import React from 'react';
//import logo from './logo.svg';


import ArticleCard from './componets/ArticleCard'

import Title from './componets/Title'
import Button from './componets/Button'
import './App.css';

function App() {
  return (
    <div className="App">
      <div><Title /></div>
      <div className="grid">
      <div className="gap">
        <img src="./images/dosa.jpg" alt="dosa food" width= "250px" height="200px"></img>
      <ArticleCard 
           name="Dosa"
           content="dosa recipe | dosa batter in mixie recipe | crispy dosa batter recipe with step by step photo and video recipe. a perfect south indian dosa recipe can easily achieved by a homemade dosa batter. more importantly this authentic dosa batter recipe is prepared from mixer grinder or mixie. traditionally, dosa batter recipe is prepared from wet grinder. however this recipe is for those who do not have access for wet grinder and can prepare in mixie jar or mixer."
      />
      
      <Button  name="Read More >>"/>
      
      <Button name="likes"/>
      <Button name="comment"/>
      
      </div>
      <div  className="gap">
      <img src="/images/MasalaVada.jpg" alt="dosa food" width= "250px" height="200px"></img>
      <ArticleCard name="Masala Vada"
                   content="masala vada recipe | masala vadai | paruppu vadai | chattambade recipe with detailed photo and video recipe. a spicy fitters or savoury snack recipe prepared from soaked and coarsely grounded chana dal and urad dal. it is an ideal evening tea time crispy and crunchy snack which can be eaten either with coconut chutney or tomato ketchup.
                   "
      
      />
      
      <Button name="Read More >>"/>
      <Button name="likes"/>
      <Button name="comment"/>
     
      
      </div>
      <div  className="gap">
      <img src="./images/PalakPaneer.jpeg" alt="dosa food"></img>
      <ArticleCard name="Palak Panner"
                   content ="hariyali paneer tikka recipe | paneer hariyali tikka | dry paneer hariyali with step by step photo and video recipe. a simple green herb based paneer recipe which is prepared very similar to the other tikka recipes or paneer tikka recipe. it is an ideal party starter or evening snack with the goodness of paneer and aroma of pudina and coriander.
                   "
      />
      
      <Button name="Read More >>"/>
      <Button name="likes"/>
      <Button name="comment"/>
      
      </div>
      <div  className="gap">
      <img src="./images/VegBiriyani.jpeg" alt="dosa food"></img>
      <ArticleCard name="Veg Biriyani"
        content="veg biriyani with detailed photo and video recipe. a simple and easy dum style cooked biryani recipe made with unique blend of spices. as such, there isn’t any significant difference with the way it is made apart from the addition of plum prunes and the dry spices. it is a popular alternative to the hyderabadi pudina based green biryani and can be served with raita and salan."
      
    />
      
      <Button name="Read More >>"/>
      <Button name="likes"/>
      <Button name="comment"/>
      
      </div>
      </div>
    </div>
  );
}

export default App;
