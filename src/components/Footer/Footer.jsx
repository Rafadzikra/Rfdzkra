import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
   <div>
 
<section class="footer" style={{background:"black",color:"white"}}>
    <div class="footer-box"style={{color:"white"}}>
    <h3>Layanan Kami</h3>
        <li><a href="#">Product</a></li>
        <li><a href="#">Help</a></li>
        <li><a href="#">Return</a></li>
        <li><a href="#">Time</a></li>
    </div>
    <div class="footer-box">
        <h3>Layanan Kami</h3>
        <li><a href="#">Product</a></li>
        <li><a href="#">Help</a></li>
        <li><a href="#">Return</a></li>
        <li><a href="#">Time</a></li>
    </div>
    <div class="footer-box">
        <h3>Layanan Kami</h3>
        <li><a href="#">Product</a></li>
        <i class='bx bxs-map'></i> 
        <i class='bx bxs-phone'></i>
        <i class='bx bxs-envelope'></i>
    </div>
    </section>
   </div>
  )
}
