import { useState } from 'react'
import useInterval from 'use-interval'
import {AnimatePresence,motion} from 'framer-motion'
import {Helmet} from 'react-helmet-async'
import ShareButtons from './ShareButtons'

const Slide = ({slides}) => {
const [index,set]=useState(0)
const item = slides[index]
//Random Quote
const randomQuote =()=>set(state=>(Math.floor(Math.random()*(slides.length+1) )))
//Next Quote
const increment = () => set(state=>(state+1)%slides.length)
useInterval(randomQuote,5000)
useInterval(increment,5000)
const nextSlide=increment
//Previous Slide
const prevSlide = () => set(state=>(state===0?(slides.length-1):(state-1))
     )
useInterval(prevSlide,5000)
     return (
       <AnimatePresence mode='wait'>
    <motion.div id="quote-box"
    initial ={{opacity:0, transform:"scale(1.1)"}}
    animate = {{opacity:1, transform:"scale(1)", transition:{duration:1
    }}}
    exit= {{opacity:0.2,transform:"scale(1.1)"}}
    className="container"
    style={{backgroundColor:`${item.color}` ,}}
    key= {item.id}>
    
<Helmet>
      <meta name="theme-color" content={item.color} />
</Helmet>
 <motion.blockquote id="text"
 initial={{opacity:0, x:"-100%"}}
 animate={{opacity:1,x:0,transition:{duration:1, }}}
 exit={{opacity:0.5,x:"100%"}}
 > {item.quote}
<cite id="author"> {item.cite} </cite>
 </motion.blockquote>
    <button id="new-quote" onClick={nextSlide}
style={{float:"right"}}
    >Next</button>
    <button id="new-quote2" onClick={prevSlide}
    style={{float:"left"}}
    >Previous</button>
    <ShareButtons item={item}/>
    </motion.div>
  </AnimatePresence>

          )
}

export default Slide