
/* 
//# - - Using Call back function (CALLBACK HELL !!) - -

function getData(x , callback){
     setTimeout(() => {
          console.log(`data of ${x} : Data#$%^&*`)
          callback()
     } , 2000)
}

getData(1 , () => {
    getData(2 , () => {
          getData(3 , () => {
               getData(4 , () => {
                    getData(5 , () => {console.log("All Data verified")})
               })
          })
     })
})



//# - - Using Promises - -

function getData(x, getNextData) {

     return new Promise((resolve, reject) => {
          setTimeout(() => {
               console.log(`data of ${x} : Data#$%^&*`)
               resolve(`Data ${x} fetched`)

               if (getNextData) {
                    getNextData()
               }

          }, 2000)
     })
}

getData(1).then((res) => {
     console.log(res);
     console.log('fetching data 2 ...')
     return getData(2)
}).then((res) => {
     console.log(res);
     console.log('fetching data 3 ...')
     return getData(3)
}).then((res) => {
     console.log(res);
     console.log('fetching data 4 ...')
     return getData(4)
}).then((res) => {
     console.log(res);
     console.log('fetching data 5 ...')
     return getData(5)
}).catch((err) => {
     console.log(err);

})



//#  - - Async Await - -

function getData(x) {
     return new Promise((resolve, reject) => {
          if(x == 3) reject(100)
          setTimeout(() => {
               console.log(`Data of ${x} : data!@#$%^&*`);
               resolve(200)
          }, 2000)
     })
}

async function getAlldata() {
     await getData(1)
     await getData(2)
     await getData(3)
     await getData(4)

}
getAlldata()

// * IIFE
(async function getAlldata() {
     await getData(1)
     await getData(2)
     await getData(3)
     await getData(4)

})()

*/


