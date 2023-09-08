const mongoose = require("mongoose");


var url = "mongodb+srv://ahmed:ahmed@cluster0.y4qsdmp.mongodb.net/ "
mongoose.connect(url).then(() => { console.log("Connected to MongoDB"); }).catch((err) => { console.log(err); })

var play = require("./data")
const playlistId = 'PLb2aaNHUy_gEjh8ZIk6L9yTWJMwzOvObb';





var schema = new mongoose.Schema({
  timg: String,
  name: String,
  star: Number,
  score: Number,
  plot: String,
  ost: String,

  cast: [mongoose.Schema({
    img: String,
    name: String
  })],
  year: Number,
  channel: String,
  writers: [],
  directors: [],
  producers: [],
  productioncompany: [],
  episodes: [],
  release: String,
  genere: []

})



var db = mongoose.model("daram", schema);

play.down(playlistId)
  .then((video) => {



    var terebin = new db({
      timg: "https://m.media-amazon.com/images/M/MV5BMDFkNWU3Y2MtM2RkNC00ZTY2LTgwZGYtMWM4NDdiM2M4NmU4XkEyXkFqcGdeQXVyNTA4NjMyNjE@._V1_FMjpg_UX1000_.jpg",
      name: "Mujhe Pyaar Hua Tha",
      star: 4,
      score: 7.0,
      plot: `Maheer (Hania Aamir) is a very carefree girl, living with her family, which consists of her parents Azhar (Shahood Alvi) and Rafia (Salma Hassan), her uncle Sarwar (Noor ul Hassan) and aunt Aneesa (Shaheen Khan), her cousins Saad (Wahaj Ali) and Neelo (Rabya Kulsoom). Saad has always been in love with Maheer, which only Neelo knows about. Afterwards, Maheer goes to her friend Anabia's engagement, where she meets Anabia's friend Areeb (Zaviyar Nauman Ijaz), who falls in love with her. Saad becomes suspicious of him after meeting him. Rafia tells Azhar she wants Maheer to live a luxurious life with a rich and fancy husband, which Azhar isn't happy about.[7]

      After meeting Areeb a few more times and after him proposing to her, Maheer starts to develop feelings for Areeb. Sarwar is then forced by Neelo to talk to Azhar about finalizing Saad and Maheer's marriage. Azhar agrees, but Maheer is mad about this, which Saad notices. Maheer tells Saad that she thinks of him as her best friend and that she likes Areeb. Saad promises that she will get what she wants, so Saad tells Azhar he doesn't want to marry Maheer, resulting in Azhar kicking him out and Sarwar slapping him.
      
      Areeb arrives with his mother Beenish (Angeline Malik), but she leaves after seeing Maheer's cramped house and her style. Areeb then points a gun to himself in front of his parents for them to make a decision, so Beenish forcefully fixes Maheer and Areeb's marriage. But on the wedding day, Areeb's father Rehan (Javed Sheikh) suffers a heart attack, resulting in admitting him to the hospital. After trying to contact Areeb, Azhar is called by Beenish, who lies to him that Areeb never loved Maheer and she insults Maheer's whole family. Maheer is heartbroken after this. Sarwar then decides to put Saad in Areeb's place as the groom.
      
      Maheer says yes to her marriage with Saad in sadness, forcing Saad to say yes as well to the marriage, but Saad says the rukhsati won't happen yet and he leaves. When Areeb arrives, Sarwar and Azhar kick him out, and Beenish calls Areeb to tell him that Rehan has passed away, leaving Areeb distraught and in guilt. It is revealed that Rafia told Saad to say no to his and Maheer's marriage. Saad and Maheer are trying to adjust to their married life but Neelo tells her parents that Saad has always loved Maheer and Maheer knew Areeb and loved him before their marriage was finalized, which makes Sarwar go to Azhar and he yells at Rafia, asking her why she put all the blame on Saad. Maheer also confronts her mother about this, saying that it was never Saad's fault and she wasn't capable of Areeb's love and trust.[8][9] 
             `,
      ost: "rEO6bLfwruo",
      cast: [


        {
          img: 'https://gnnhd.tv/media/68505/Hania-Aamir-Photo.jpg',
          name: 'Hania Amir',
        },

        {
          img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Wahaj_Ali.jpg/220px-Wahaj_Ali.jpg',
          name: "Wahaj Ali"
        }
        ,
        { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Rabia_Kulsoom.jpeg/220px-Rabia_Kulsoom.jpeg",
                 name: "Rabya Kulsoom" },
        {
          img: "https://img.wegreenkw.com/sites/3/2022/11/zaviyar-noman-age.webp"
          , name: "Zaviyar Nauman Ijaz"
        },
        {
          img: 'https://img.wegreenkw.com/sites/3/2022/12/Angeline-Malik.webp',
          name: "Angeline Malik"
        },


      ],
      year: 2022,
      channel: "ARY",
      writers: ['Sidra Seher Imran'],
      directors: ['Badar Mehmood'],
      producers: ['	Fahad Mustafa', 'Dr. Ali Kazmi'],
      productioncompany: ['Big Bang Entertainment'],
      episodes: video,
      release: '	12 December 2022 – 31 July 2023',
      genere: [
        'Darama',
        'Romance'

      ]

    })

    // terebin.save().then(() => {
    //   console.log("Doc is saved");
    // })

    // db.find({name:'Baaghi'}).then((fit) => {
    //     fit.forEach(ele => {
    //         console.log(ele);
    //     })
    // })
    // db.findOneAndUpdate({name:'Kaisi Teri Khudgarzi'},{$set:{timg:"https://thebrownidentity.com/wp-content/uploads/2022/08/Kaisi-Teri-Khudgarzi-1.jpeg"}}).then((ele) => {
    //               console.log(ele);
    // })
    // db.deleteOne({name:"Ishq E Laa"}).then(()=>{
    // console.log("Deleted");
    // })

  });






module.exports = {
  db: db
}
