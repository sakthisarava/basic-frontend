const rohit = ["sharma", "virat", "rahul", "vetri"]
 

  // FOR EACH
{/*rohit.forEach((hunk, index)=> {
    console.log(hunk)
    console.log(index)
    console.log("looped")
})   */}

   

   //MAP
{/* const performers = rohit.map((hunk, index)=> {
    console.log(hunk)
    console.log(index)
    console.log("looped")

    return hunk
})    

console.log(performers)  */}


  //FOR OF
{/*  for (const hunk of rohit) {
    console.log(hunk)
}   */}

   
   //FOR IN
   const obj = {
       name : "sakthi",
       age : 23,
       gender : "male"
   }

   for (const key in obj) {
       const values = obj[key]
       
       console.log(values)
   }


