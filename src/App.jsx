import { useState } from 'react'
import {HelmetProvider} from 'react-helmet-async'
import './App.css'
import Slide from './components/Slide.jsx'

function App() {
const slides= [{
     id: 1,
     quote: '“Be the change you wish to see in the world.”',
     color:"Blue",
     cite:"Mahatma Gandhi",
},
{
     id: 2,
     quote: '“Every success story is a tale of constant adaption, revision and change.”',
     color:"BlueViolet",
     cite: "Richard Branson"
},
{
     id: 3,
     quote: '“We humans coevolve with our tools. We change our tools, and then our tools change us.”',
     color:"Brown",
     cite: "Jeff Bezos"
},
{
     id: 4,
     quote: '“Don’t risk what is important to you to get something which isn’t important to you.”' ,
     color:"Chocolate",
     cite: "Warren Buffett"
},
{
     id: 5,
     quote: '“If you truly pour your heart into what you believe in, even if it makes you vulnerable, amazing things can and will happen.”',
     color:"CadetBlue",
     cite: "Emma Watson"
},
{
     id: 6,
     quote: '“Hard days are the best because that’s when champions are made.” ',
     color:"DarkGoldenRod",
     cite:"Gabby Douglas",
},
{
     id: 7,
     quote: '“If it doesn’t challenge you, it won’t change you.”',
     color:"DarkCyan",
     cite: "Fred Devito"
},
{
     id: 8,
     quote: '“If you only ever give 90% in training then you will only ever give 90% when it matters.”',
     color:"DarkMagenta",
     cite: "Michael Owen"
},
{
     id: 9,
     quote: '“Every champion was once a contender that refused to give up.”',
     color:"DarkOliveGreen",
     cite: "Rocky Balboa"
},
{
     id: 10,
     quote: '“I may win and I may lose, but I will never be defeated.”',
     color:"DarkSlateGray",
     cite: "Emmitt Smith"
},
{
     id: 11,
     quote: '"You just can’t beat the person who never gives up.”',
     color:"Green",
     cite:"Babe Ruth",
},
{
     id: 12,
     quote: '“I think team first. It allows me to succeed, and it allows my team to succeed.”',
     color:"HotPink",
     cite: "Lebron James"
},
{
     id: 13,
     quote: '“The road to success runs uphill.”',
     color:"orange",
     cite: "Willie Davis"
},
{
     id: 14,
     quote: '“The difference between the impossible and the possible lies in a determination.”',
     color:"DarkGreen",
     cite: "Usain Bolt"
},
{
     id: 15,
     quote: '“You are never really playing an opponent. You are playing yourself, your own highest standards, and when you reach your limits, that is real joy.”',
     color:"LightCoral",
     cite: "Arthur Ashe"
},
{
     id: 16,
     quote: '“If you want to be the best, you have to do the things that other people aren’t willing to do.”',
     color:"Indigo",
     cite:"Michael Phelps",
},
{
     id: 17,
     quote: '"Don\'t measure yourself by what you have accomplished, but by what you should have accomplished with your ability."',
     color:"GoldenRod",
     cite: "John Wooden"
},
{
     id: 18,
     quote: '"To be the man, you have to beat the man."',
     color:"Darkorange",
     cite: "Ric Flair"
},
{
     id: 19,
     quote: '"Pain is temporary. It may last a minute, or an hour, or a day, or a year, but eventually it will subside and something else will take its place. If I quit, however, it lasts forever."',
     color:"Maroon",
     cite: "Lance Armstrong"
},
{
     id: 20,
     quote: '"It\'s not the size of the dog in the fight, but the size of the fight in the dog!"',
     color:"MidnightBlue",
     cite: "Archie Griffin"
},
{
     id: 21,
     quote: '“Age is no barrier. It’s a limitation you put on your mind.”',
     color:"Olive",
     cite: "Jackie Joyner-Kersee"
},
{
     id: 22,
     quote: '“Sometimes you do the hard work and set the table and somebody else eats the meal.”',
     color:"OliveDrab",
     cite:"Brian Burke",
},
{
     id: 23,
     quote: '“Great moments are born from great opportunities.”',
     color:"OrangeRed",
     cite: "Herb Brooks"
},
{
     id: 24,
     quote: '“You’ve always been ‘The Great One,’ but tonight you’ve become The Greatest.”',
     color:"SaddleBrown",
     cite: "Gary Bettman II"
},
{
     id: 25,
     quote: '“The day I stop giving is the day I stop receiving. The day I stop learning is the day I stop growing. You miss 100% of the shots you don’t take.”',
     color:"SeaGreen",
     cite: "Wayne Gretzky"
},
{
     id: 26,
     quote: '“The more difficult the victory, the greater the happiness in winning.”',
     color:"YellowGreen",
     cite: "Pele"
},
{
     id: 27,
     quote: '“One man practicing sportsmanship is far better than 50 preaching it.”',
     color:"Teal",
     cite: "Knute Rockne"
},
{
     id: 28,
     quote: '“Champions keep playing until they get it right.”',
     color:"DarkRed",
     cite: "Billie Jean King"
},
{
     id: 29,
     quote: '“If you have everything under control, you’re not moving fast enough.”',
     color:"Brown",
     cite: "Mario Andretti"
},
{
     id: 30,
     quote: '“Once you learn to quit, it becomes a habit.”',
     color:"Crimson",
     cite: "Vince Lombardii"
},
]
  return (
       <HelmetProvider>
<Slide slides={slides} />
</HelmetProvider>
  )
  
}

export default App
