import React, { useState } from 'react'
import './Nav.css'
import Carosel from './Carousel';

import { Images,Admins,Workers} from './Data';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
export default function Nav() {
    const[popup,setPop]=useState(false);
    const OpenPop=()=>{
        setPop(!popup);
    }
    const[popup1,setPop1]=useState(false);
    const OpenPop1=()=>{
        setPop1(!popup1);
    }
    const[popup2,setPop2]=useState(false);
    const OpenPop2=()=>{
        setPop2(!popup2);
    }
    const settings = {
        dots: true,
        infinite: true,
        speed: 900,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      const carousel= Images.map((e) => (
        <Carosel
          name={e.name}
          url={e.imageurl}
          butt={e.butt}
        />
      ));

      
  return (
   <div id='container'>
  
   <div id='content'>
 
   <h1>Infinity <span>Station</span></h1>
   <div id='links'>
     <a href='#'>Home</a>
     <a href='#'>About us</a>
     <a href='#services'>Services</a>
     <Link to='/products'>Products</Link>
     <a href='#contact'>Contact</a>

 
   </div>
   <div id='butts'>
   <button onClick={OpenPop2}>Sign in</button>
   <button onClick={OpenPop}>Work time <i class="fa-solid fa-clock"></i></button>
   </div>
   
 </div>
 {popup2?
  <div id='login'>
  <h2 onClick={()=>OpenPop2(false)}> <i class="fa-solid fa-x"></i></h2>
    <h1>Sign in </h1>
    <p>You want to log in as yourself :</p>
    <div id='logbutt'>
    <Link to='/login'><button>User</button></Link>
    <span>Or</span>
    <Link to='/admin'><button>Admin</button></Link><span>?</span>
    </div>
  </div>
 
 :null

}
   {popup?<div id='worktime'>
   <table border={"1"}>
   <caption onClick={()=>OpenPop(false)}><button>Close<i class="fa-solid fa-x"></i></button></caption>
       <tr>
           <td id='tr1'>DAYS</td>
           <td id='tr1'>Morning</td>
           <td id='tr1'>Evening</td>
       </tr>
       <tr>
           <td>Monday</td>
           <td>8AM-12AM</td>
           <td>14PM-18PM</td>
       </tr>
       <tr>
       <td>Tuesday</td>
       <td>8AM-12AM</td>
       <td>14PM-18PM</td>
       </tr>
       <tr>
       <td>Wednesday</td>
       <td>8AM-12AM</td>
       <td>14PM-18PM</td>
       </tr>
       <tr>
       <td>Thursday</td>
       <td>8AM-12AM</td>
       <td>14PM-18PM</td>
       </tr>
       <tr>
       <td  id='dont'>Friday</td>
       <td id='dont'>We don't work</td>
       <td  id='dont'>We don't work</td>
       </tr>
       <tr>
       <td>Saturday</td>
       <td>8AM-12AM</td>
       <td>14PM-18PM</td>
       </tr>
       <tr>
       <td  id='dont'>Sunday</td>
       <td  id='dont'>We don't work</td>
       <td  id='dont'>We don't work</td>
       </tr>

   </table>

</div>


:null
}

   <div id='header'>

     <div id='text'>
     <h1>We are here to meet your needs</h1>
     <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa deleniti quaerat omnis dignissimos similique pariatur repellendus mollitia veritatis doloremque, aliquid, rem neque vero natus consequuntur a maxime! Iusto at ex aliquam, eaque ullam exercitationem. Nesciunt, non optio consectetur voluptatum iusto illo perspiciatis, fugit aut eum, explicabo laborum? Quis, consequuntur at?</p>
     <button onClick={OpenPop1}>Get More Info <i class="fa-sharp fa-solid fa-arrow-down"></i></button>
     {popup1?<div id='we'>
     <h3 onClick={()=>OpenPop1(false)}><i class="fa-solid fa-x"></i></h3>
     <h1><i class="fa-solid fa-arrow-right"></i> <span id='firstletter'>W</span>HO ARE WE ?</h1>
     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur eos similique, odit beatae sapiente est maiores possimus sunt necessitatibus culpa nobis fuga labore reprehenderit blanditiis perferendis minus ex saepe quod perspiciatis mollitia asperiores placeat. Sed, quod unde voluptates voluptatum voluptatibus a magnam. Cum aut culpa esse quos, similique fugiat illum odio corporis iste amet temporibus, facilis dicta vitae perferendis, placeat accusantium? Quod aut assumenda nemo molestias iusto. Accusamus cupiditate esse quidem assumenda consequuntur nemo vero, corrupti ad, nesciunt facilis id molestias mollitia reprehenderit voluptatibus quia dolores eius eum animi officiis, odit quasi ratione quaerat. Nam eveniet necessitatibus optio deleniti quidem?</p>
     <br></br><br></br>
     <h2><i class="fa-solid fa-arrow-right"></i> <span id='firstletter'>O</span>ur Admins</h2>
     <div id='ad'>
     {Admins.map((e,i)=>{return(
        <div id='admins'>
            <img src={e.imageurl} />
            <p>{e.name}</p>
            <span>{e.age}</span>
        </div>
     )})}
     </div><br></br><br></br>
     <h2> <i class="fa-solid fa-arrow-right"></i> <span id='firstletter'>O</span>ur Workers</h2>
     <div id='ad1'>
     {Workers.map((e,i)=>{return(
        <div id='admin'>
            <img src={e.imageurl} />
            <p>{e.name}</p>
            <span>{e.age}</span>
        </div>
     )})}
     </div>
  
     
  </div>
  :null
  }
     </div>

        <div id='clip'>
            <img src='/images/ts3.png' />
        </div>
   </div><br></br>
   <hr id='hr' />
   <div id='services'>
        <h1 >Our Services <i class="fa-solid fa-user-tie"></i></h1>
        <div id='slider'>
        
        <Slider {...settings}>
        
        {carousel}
        
        </Slider>
     
      </div>
   </div>


   <hr id='hr' />
   <div id='pro'>
   <h1>Our Products <i class="fa-solid fa-shop"></i></h1>
        
   <div id='feat1'>
     <img  src='https://i.pinimg.com/736x/23/31/3e/23313e22a28be0707fbcf1377da709e6.jpg' id='imgp' />
     <h2 id='titlef'>COUSSIN</h2>
     <p id='pf'>799 MAD</p>
     <button id='buttonf'><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></button>
   </div>

   <div id='feat1'>
   <img  src='https://i.pinimg.com/736x/f3/8c/64/f38c64738d29d30539d5d66e53d740eb.jpg' id='imgp' />
   <h2 id='titlef'>VOLANT</h2>
   <p id='pf'>489 MAD</p>
   <button id='buttonf'><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i></button>
 </div>


 <div id='feat1'>
 <img  src='https://i.pinimg.com/564x/f7/3a/19/f73a19df04c574c69cb7cc1455ec8ea8.jpg' id='imgp' />
 <h2 id='titlef'>ROUES</h2>
 <p id='pf'>549 MAD</p>
 <button id='buttonf'><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></button>
</div>
<div id='feat1'>
<img  src='https://i.pinimg.com/564x/f7/3a/19/f73a19df04c574c69cb7cc1455ec8ea8.jpg' id='imgp' />
<h2 id='titlef'>ROUES</h2>
<p id='pf'>549 MAD</p>
<button id='buttonf'><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"><i class="fa-solid fa-star"></i></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></button>
</div><br></br>

<div id='feat2'>
<div id='feat1'>
<img  src='https://i.pinimg.com/564x/f7/3a/19/f73a19df04c574c69cb7cc1455ec8ea8.jpg' id='imgp' />
<h2 id='titlef'>ROUES</h2>
<p id='pf'>549 MAD</p>
<button id='buttonf'><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i></button>
</div>
<div id='feat1'>
<img  src='https://i.pinimg.com/564x/f7/3a/19/f73a19df04c574c69cb7cc1455ec8ea8.jpg' id='imgp' />
<h2 id='titlef'>ROUES</h2>
<p id='pf'>549 MAD</p>
<button id='buttonf'><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></button>
</div>
<div id='feat1'>
<img  src='https://i.pinimg.com/564x/f7/3a/19/f73a19df04c574c69cb7cc1455ec8ea8.jpg' id='imgp' />
<h2 id='titlef'>ROUES</h2>
<p id='pf'>549 MAD</p>
<button id='buttonf'><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></button>
</div>
 <div id='feat1'>
 <img  src='https://i.pinimg.com/564x/f7/3a/19/f73a19df04c574c69cb7cc1455ec8ea8.jpg' id='imgp' />
 <h2 id='titlef'>ROUES</h2>
 <p id='pf'>549 MAD</p>
 <button id='buttonf'><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></button>
</div>
</div>


<br></br>
   
   </div>


   <hr id='hr' />
   <div id='contact'>
   <h2>Contact Us <i class="fa-solid fa-address-card"></i></h2>
            <div id='div1'>
            <h1>Infinity <span>Station</span></h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta dignissimos magnam consequatur explicabo neque, maiores dolore magni quo sint quas!",</p>
            <div id='icons'>
                <button><i class="fa-brands fa-facebook-f" ></i></button>
                <button><i class="fa-brands fa-instagram"></i></button>
                <button><i class="fa-brands fa-twitter"></i></button>
                <button><i class="fa-brands fa-linkedin"></i></button>
            </div>
            </div>


          <div id='div2'>
          
          <h1 id='info'>Info contact</h1>
          <button><i class="fa-solid fa-phone"></i></button><p>+212656576586</p>
          <button><i class="fa-solid fa-phone"></i></button><p>+212556576586</p>
          <button><i class="fa-solid fa-envelope"></i></button><p>ourStation00@gmail.com</p>
          <button><i class="fa-solid fa-location-dot"></i></button><a href='https://www.google.com/maps/d/viewer?mid=1jjqGnQeKlG3Qgl0f7eiiIxksbwQ&hl=fr&ll=33.89813747673929%2C-5.5526047444820925&z=21'><p>Méknes,Hamria Boulvard Hassan II Rue 12</p></a>
          </div>



          <div id='div3'>
          <h1 id='info'>Quick links</h1>
          <button><i class="fa-solid fa-arrow-right"></i></button>
          <a href='' id='home'>Home</a> <br></br>

          <button><i class="fa-solid fa-arrow-right"></i></button>
          <a href='#header'>About us</a><br></br>

          <button><i class="fa-solid fa-arrow-right"></i></button>
          <a href='#services'>Services</a><br></br>

          <button><i class="fa-solid fa-arrow-right"></i></button>
          <a href='#pro'>Products</a>

          </div>


          <div id='div4'>
          <h1 id='info'>Your Message</h1>
         <input type={"text"}  /><br></br>
          <button>Send message</button>
          </div>
        </div>


        <hr id='hr2' />
        <div id='me'>
        <h1>Created by developper web full stack <span>Yasser M'saad</span></h1>
        <p >&copy; 2023</p>
        </div>
    </div>

 


  )
}
