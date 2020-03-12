// this - context , Self 
// this
//   Objects: 
//     arrays hashes, functions, classess
//   window object 
//   primary object of your browser

// hierarchy
//   window 
//     global 
//       function call
//         functions called in other functions





// Variable Scopes

// var foo = 'bar';  //Global
// function someFunction(param1, param2) { //param1, param2 are local
//   var foo = 'baz';  // local
//   console.log(foo);
// }

// function myFunction() {
//   console.log(foo);  // referencing global foo
// }

// function whatIsThis() {
//   baz = 'What kind of var is this?';  //global 
// }
// //console.log(baz) this is an error baz has not been defined yet.

// whatIsThis();  // baz gets defined at this point
// console.log(baz);






// var foo = 'bar';  //Global
// var baz
// var foo
// function someFunction(param1, param2) { //param1, param2 are local
//   var foo = 'baz';  // local
//   console.log(foo);
// }

// function myFunction() {
//   console.log(foo);  // referencing global foo
// }

// function whatIsThis() {
//   baz = 'What kind of var is this?';  //global 
// }

// //console.log(baz) this is an error baz has not been defined yet.


// // whatIsThis();  // baz gets defined at this point

// // console.log(baz);



// var x = true
// var xIsTrue;
// var xIsALie;

// if (x)
//   var xIsTrue = true
// else
//   var xIsALie = true
  
// function cl(item) {
//   console.log(item)
// }

cl = (item) => {
  console.log(item)
}

// cl()

// Let 
// let x = true 
// x = false 
  // js error 
  // { } code block 

// function dblCheck() {
//   let x = true 
// }

// function check() {
//   cl(x)
// }

// check()

// Const 
  // constant , read only 
  // const colors = ['red', 'white', 'green']
  // colors = 'asdfaertfg'

  // cl(colors)

  // Functions 
  // function showColor(colors = []) {
  //   return colors.length
  // }

  // cl(showColor())
  // cl(showColor(['asdf']))

  // function userInfo(name, options = {}) {
  //   let likes = options.likes
  //   let followers = options.followers
  // }

  // function userInfo(name, { likes, followers } = {} ) {
  //   cl(likes)
  //   cl(followers)
  // }

  // userInfo("bob", { likes: 4, followers: 300 })

  // Rest Params 
  // function showHashtags(firstArg, secArg) {

  // }
  // function showHashtags(firstArg, ...hashtags) {
  //   cl(firstArg)
  //   for(let i = 0; i < hashtags.length; i++) {
  //     cl(hashtags[i])
  //   }
  // }

  // showHashtags('yolo', 'peace', "nofilter", 'swag', 'resfd')

  // Spread Op ...
  // let state = {
  //   cars: [{make: 'asd', model: 'asdfas'},
  //     {make: 'awef', model: 'asawefdfas'},
  //     {make: 'aertsd', model: 'asdwertgfas'},]
  // }

  // cl(...state.cars)
  // { make: model: year: }

  // car.make, car.model.years

  // { ...car }

  // function showColors(...colors) {
  //   cl(colors)
  // }

  // let colors1 = ["red", "pink", "blue"]

  // cl("Spread op")
  // cl(...colors1)

  // cl("Rest params")
  // cl(showColors(colors1))

  // function
  // function hello() {

  // }

  // const hello => {

  // }

  // const hello = (greeting) => {
    
  // }

  // cl = (item) => {
  //   console.log(item)
  // }

  // Object 
  // officerInfo = (first, last, rank, email) => {
  //   let fullName = first + " " + last
    // return ({first: first, last: last, fullName: fullName, rank: rank, email: email})
  // }

  // let bob = officerInfo("bob", "smith", "LT", "911@cops.com")
  // cl(bob.first)
  // cl(bob.last)
  // cl(bob.rank)
  // cl(bob.email)

  // officerInfo = (first, last, rank, email) => {
  //   let fullName = first + " " + last
  //   return ({first, last, fullName, rank, email})
  // }

  // // Object Destructuring
  // let bob = officerInfo("bob", "smith", "LT", "911@cops.com")
  // let { first, last, rank, email, fullName } = bob
  // // let first = bob.first
  // cl(first)
  // cl(last)
  // cl(rank)
  // cl(email)

  // state = { post: {title: 'adsfa', body: 'sdaretdrte', id: 2 } }

  // const post = this.state 
  // cl(post.title)
  // cl(post.body)

  // const { title, body } = this.state.post

  // cl(title)
  // cl(body)

  // String 
  // let title = 'asfg'
  // let body = 'aerdfgert'
  // cl( "title:" + title + " " + "body:" + body )
  // cl(`title: ${title} body: ${body}`)

    // cl("awedfsgfrea\nadsfgbc")
    // cl(
    //   `
    //     adfsg
    //     wearstdfg3wer
    //     werstdfg
    //   `
    // )

    // let num = 1
    // cl(num.toString())

  // cl().toString()

  // ES2016 Es7

  // .includes 

  // ** - Math.pow(7, 2)
  // // 7^2
  // 7 ** 2


  // let cars = ['ford', 'toyota']
  // for (car in cars ){
  //   cl(car)
  // }

  // for (car of cars ){
  //   cl(car)
  // }

  // Array
  // let users = [
  //   { name: 'bob', role: 'admin'},
  //   { name: 'bearob', role: 'admin'},
  //   { name: 'berob', role: 'user'},
  //   { name: 'bertghob', role: 'user'},
  //   { name: 'bertfgob', role: 'user'},
  // ] 

//  let admins = users.find( (user) => {
//     return user.role === 'admin'
//     // let turn = 'flase'
//   })

  // cl(admins)

  // let arr = [1, 2,3, [1,2,3, [5,8,9]], [4,6,7]]
  // cl(arr.flat())
  // cl(arr.flat().flat())
  // cl(arr.flat(Infinity))
  // cl(arr)
  // flatmap()

  // cl(arr.sort())
  // Imports

  // const Note = () => {
  //   "aedfghtrewtg"
  // }
  
  // export const Book = () => {
  //   "aedfghtrewtg"
  // }

  // export default Note;

  // Promise
  Promises 
      // - asking for something then getting something back return 
      axios.get('/api/schools')( res => {
        .then( res => {
          let schools = res.schools
          console.log(schools)
          // 
        })
        .catch( err => {
          console.log(err)
        })
        .finally(
          clean()
        )
      })

      async await
        const fetchSchools = async (id, name) => {
          const schoolName = await checkName(name)
          console.log(schoolName)
        }